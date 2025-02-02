let keysMyDishes = Object.keys(myDishes);
let cart = [];
/**
 * Reference to the responsive cart dialog element.
 * @type {HTMLElement}
 */
let cartDialog = document.getElementById("responsive_cart");
let deliveryPrice = "3,50€";

/**
 * Initializes the application, loads data from localStorage,
 * and renders the UI components.
 */
function onInit() {
  getFromLocalStorage();
  renderCategoriesToSlider();
  renderCategories();
  document.getElementById("fill_cart_container").innerHTML =
    getCartTemplate("fill_cart");
  document.getElementById("dialog_content").innerHTML = getCartTemplate(
    "fill_cart_responsive"
  );
  if (0 == cart.length) {
    showEmptyCarts();
  } else {
    changeEmptyCartToFilled();
    renderCart();
  }
}

function showEmptyCarts() {
  document.getElementById("empty_cart").innerHTML = getEmptyCartTemplate();
  document.getElementById("empty_cart_responsive").innerHTML =
    getEmptyCartTemplate();
}

function renderCategoriesToSlider() {
  let category = document.getElementById("categories_wrapper");
  category.innerHTML = "";
  for (
    let indexCategory = 0;
    indexCategory < keysMyDishes.length;
    indexCategory++
  ) {
    category.innerHTML += getCategorySliderTemplate(indexCategory);
  }
}

function renderCategories() {
  let cardContentRef = document.getElementById("card_container");
  cardContentRef.innerHTML = "";
  for (let indexCard = 0; indexCard < keysMyDishes.length; indexCard++) {
    cardContentRef.innerHTML += getDishCardsTemplate(indexCard);
    renderDishes(keysMyDishes[indexCard], indexCard);
  }
}

/**
 * Renders dishes for a specific category.
 * @param {string} category - The category name.
 * @param {number} indexCard - The index of the category card.
 */
function renderDishes(category, indexCard) {
  let dish = document.getElementById("dishes_" + indexCard);
  dish.innerHTML = "";
  for (
    let indexDishes = 0;
    indexDishes < myDishes[category].length;
    indexDishes++
  ) {
    dish.innerHTML += getDishesTemplate(indexDishes, category);
  }
}

function renderCart() {
  fillCart();
  document.getElementById("costs_of_order_fill_cart").innerHTML =
    getCartCostTemplate(1);
  document.getElementById("costs_of_order_fill_cart_responsive").innerHTML =
    getCartCostTemplate(2);
  for (let indexCart = 1; indexCart <= 2; indexCart++) {
    getTotalCosts(indexCart);
    enableOrDisableOrderButton(indexCart);
  }
}

/**
 * Adds a dish to the cart or increases its quantity if already present.
 * @param {number} index - The index of the dish in its category.
 * @param {string} category - The category of the dish.
 */
function addToCart(index, category) {
  changeEmptyCartToFilled();
  hideSuccessContainer();
  let idToFind = myDishes[category][index].id;
  const cartIndex = getCartDishIndex(idToFind);
  if (-1 == cartIndex) {
    pushToCartArray(index, category);
  } else {
    increaseCartDishAmount(cartIndex);
  }
  renderCart();
  saveToLocalStorage();
}

function changeEmptyCartToFilled() {
  document.getElementById("empty_cart").classList.add("d-none");
  document.getElementById("empty_cart_responsive").classList.add("d-none");
  document.getElementById("fill_cart_container").classList.remove("d-none");
  document.getElementById("dialog_content").classList.remove("d-none");
}

function pushToCartArray(index, category) {
  cart.push({
    id: myDishes[category][index].id,
    dish: myDishes[category][index].name,
    amount: 1,
    price: myDishes[category][index].price,
  });
}

function fillCart() {
  let fillCart = document.getElementById("fill_cart");
  fillCart.innerHTML = "";
  let fillCartResponsive = document.getElementById("fill_cart_responsive");
  fillCartResponsive.innerHTML = "";
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    fillCart.innerHTML += getCartDishesTemplate(indexCart);
    fillCartResponsive.innerHTML += getCartDishesTemplate(indexCart);
  }
}

function getCartDishIndex(idToFind) {
  let cartElement = cart.find((cartObj) => {
    return cartObj.id === idToFind;
  });
  if (undefined === cartElement) {
    return -1;
  }
  return cart.indexOf(cartElement);
}

function onChangeAmount(indexCart) {
  if (1 <= cart[indexCart].amount) {
    renderCart();
  } else {
    deleteDishFromCart(indexCart);
  }
  saveToLocalStorage();
}

// Changes amount of dishes in Cart
function increaseCartDishAmount(indexCart) {
  cart[indexCart].amount++;
  document.getElementById(`input_amount_${indexCart}`).value =
    cart[indexCart].amount;
  onChangeAmount(indexCart);
}

function decreaseCartDishAmount(indexCart) {
  cart[indexCart].amount--;
  document.getElementById(`input_amount_${indexCart}`).value =
    cart[indexCart].amount;
  onChangeAmount(indexCart);
}

function deleteDishFromCart(indexCart) {
  cart.splice(indexCart, 1);
  if (0 === cart.length) {
    document.getElementById("fill_cart_container").classList.add("d-none");
    document.getElementById("empty_cart").classList.remove("d-none");
  }
  renderCart();
  enableOrDisableOrderButton(1);
  enableOrDisableOrderButton(2);
}

// Calculate and assigning costs
function getTotalCosts(index) {
  let shipment = convertShipmentStringToNumber(index);
  let total = document.getElementById("total" + index);
  total.innerHTML = "";
  let totalCosts = getSubtotal(index) + shipment;
  let totalCostsString = String(totalCosts.toFixed(2)).replace(".", ",") + "€";
  total.innerHTML = totalCostsString;
  if (3.5 < totalCosts) {
    setTotalToButtons(totalCostsString);
  }
}

function convertShipmentStringToNumber(index) {
  return Number(
    document
      .getElementById("shipment" + index)
      .innerHTML.slice(0, -1)
      .replace(",", ".")
  );
}

function setTotalToButtons(totalCostsString) {
  document.getElementById("sum_button_fill_cart").innerHTML = totalCostsString;
  document.getElementById("sum_button_fill_cart_responsive").innerHTML =
    totalCostsString;
  document.getElementById("cart_button_responsive").innerHTML =
    totalCostsString;
}

function getSubtotal(index) {
  let subtotal = 0;
  for (let indexSub = 0; indexSub < cart.length; indexSub++) {
    subtotal += cart[indexSub].amount * cart[indexSub].price;
  }
  document.getElementById("subtotal" + index).innerHTML =
    subtotal.toFixed(2).replace(".", ",") + "€";
  return subtotal;
}

function setDeliveryPrice(id) {
  deliveryPrice = "3,50€";
  if ("pickup_fill_cart" === id || "pickup_fill_cart_responsive" === id) {
    deliveryPrice = "0,00€";
  }
  for (let index = 1; index <= 2; index++) {
    document.getElementById("shipment" + index).innerHTML = deliveryPrice;
    getTotalCosts(index);
  }
}

// Highlight Selected Delivery Option
function toggleFilter(id) {
  if (document.getElementById(id).classList.contains("active")) {
    return;
  }
  if ("pickup_fill_cart" === id || "pickup_fill_cart_responsive" === id) {
    badgePickupActive();
  } else {
    badgeDeliveryActive();
  }
}

function badgePickupActive() {
  document.getElementById("pickup_fill_cart").classList.add("active");
  document
    .getElementById("pickup_fill_cart_responsive")
    .classList.add("active");
  document.getElementById("delivery_fill_cart").classList.remove("active");
  document
    .getElementById("delivery_fill_cart_responsive")
    .classList.remove("active");
}

function badgeDeliveryActive() {
  document.getElementById("pickup_fill_cart").classList.remove("active");
  document
    .getElementById("pickup_fill_cart_responsive")
    .classList.remove("active");
  document.getElementById("delivery_fill_cart").classList.add("active");
  document
    .getElementById("delivery_fill_cart_responsive")
    .classList.add("active");
}

// Enable/Disable Order Buttons
function enableOrDisableOrderButton(index) {
  if (21 <= getSubtotal(index)) {
    enableOrderButtons();
  } else {
    document.getElementById("order_button_fill_cart").classList.add("disabled");
    document
      .getElementById("order_button_fill_cart_responsive")
      .classList.add("disabled");
  }
}

function enableOrderButtons() {
  document
    .getElementById("order_button_fill_cart")
    .classList.remove("disabled");
  document
    .getElementById("order_button_fill_cart_responsive")
    .classList.remove("disabled");
}

// Responsive Cart Dialog
function openCartDialog() {
  cartDialog.showModal();
  renderCart();
}

function closeCardDialog(event) {
  if (event.target === cartDialog) {
    cartDialog.close();
  }
}

// Pay order and show or hide success message
function payOrder() {
  cart = [];
  showSuccessContainer();
  document.getElementById("fill_cart_container").classList.add("d-none");
  document.getElementById("order_success").innerHTML =
    getOrderSuccessTemplate();
  document.getElementById("dialog_content").classList.add("d-none");
  document.getElementById("order_success_responsive").innerHTML =
    getOrderSuccessTemplate();
  document.getElementById("cart_button_responsive").innerHTML = "";
  saveToLocalStorage()
}

function showSuccessContainer() {
  document.getElementById("order_success").classList.remove("d-none");
  document
    .getElementById("order_success_responsive")
    .classList.remove("d-none");
}

function hideSuccessContainer() {
  document.getElementById("order_success").classList.add("d-none");
  document.getElementById("order_success_responsive").classList.add("d-none");
}

// Local Storage
function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getFromLocalStorage() {
  let cartStored = JSON.parse(localStorage.getItem("cart"));
  if (null != cartStored) {
    cart = cartStored;
  }
}
