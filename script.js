let keysMyDishes = Object.keys(myDishes);
let cart = [];
let cartDialog = document.getElementById("responsive_cart");
let deliveryPrice = "3,50€";

function onInit() {
  renderCategoriesToSlider();
  renderCategories();
  document.getElementById("fill_cart_container").innerHTML =
    getCartTemplate("fill_cart");
  document.getElementById("dialog_content").innerHTML = getCartTemplate(
    "fill_cart_responsive"
  );
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

function addToCart(index, category) {
  document.getElementById("empty_cart").classList.add("d-none");
  document.getElementById("fill_cart_container").classList.remove("d-none");
  let idToFind = myDishes[category][index].id;
  const cartIndex = getCartDishIndex(idToFind);
  if (-1 == cartIndex) {
    pushToCartArray(index, category);
  } else {
    increaseCartDishAmount(cartIndex);
  }
  renderCart();
}

function pushToCartArray(index, category) {
  cart.push({
    id: myDishes[category][index].id,
    dish: myDishes[category][index].name,
    amount: 1,
    price: myDishes[category][index].price,
  });
}

function renderCart() {
  let fillCart = document.getElementById("fill_cart");
  fillCart.innerHTML = "";
  let fillCartResponsive = document.getElementById("fill_cart_responsive");
  fillCartResponsive.innerHTML = "";
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    fillCart.innerHTML += getCartDishesTemplate(indexCart);
    fillCartResponsive.innerHTML += getCartDishesTemplate(indexCart);
  }
  document.getElementById("costs_of_order").innerHTML = getCartCostTemplate();
  getTotalCosts();
  enableOrderButton();
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
}

function increaseCartDishAmount(indexCart) {
  cart[indexCart].amount++;
  document.getElementById(`input_amount_${indexCart}`).value = cart[indexCart].amount;
  onChangeAmount(indexCart);
}

function decreaseCartDishAmount(indexCart) {
  cart[indexCart].amount--;
  document.getElementById(`input_amount_${indexCart}`).value = cart[indexCart].amount;
  onChangeAmount(indexCart);
}

function deleteDishFromCart(indexCart) {
  cart.splice(indexCart, 1);
  if (0 === cart.length) {
    document.getElementById("fill_cart_container").classList.add("d-none");
    document.getElementById("empty_cart").classList.remove("d-none");
  }
  renderCart();
  enableOrderButton();
}

function getTotalCosts() {
  let shipment = Number(
    document.getElementById("shipment").innerHTML.slice(0, -1).replace(",", ".")
  );
  let total = document.getElementById("total");
  total.innerHTML = "";
  let totalCosts = getSubtotal() + shipment;
  let totalCostsString = String(totalCosts.toFixed(2)).replace(".", ",") + "€";
  let sumButton = document.getElementById("sum_button");
  total.innerHTML = totalCostsString;
  sumButton.innerHTML = totalCostsString;
}

function getSubtotal() {
  let subtotal = 0;
  for (let indexSub = 0; indexSub < cart.length; indexSub++) {
    subtotal += cart[indexSub].amount * cart[indexSub].price;
  }
  document.getElementById("subtotal").innerHTML =
    subtotal.toFixed(2).replace(".", ",") + "€";
  return subtotal;
}

function setDeliveryPrice(id) {
  deliveryPrice = "3,50€";
  if ("pickup" === id) {
    deliveryPrice = "0,00€";
  }
  document.getElementById("shipment").innerHTML = deliveryPrice;
  getTotalCosts();
}

function enableOrderButton() {
  if (21 <= getSubtotal()) {
    document.getElementById("order_button").classList.remove("disabled");
  } else {
    document.getElementById("order_button").classList.add("disabled");
  }
}

function openCartDialog() {
  cartDialog.showModal();
  renderCart();
}

function closeCardDialog(event) {
  if (event.target === cartDialog) {
    cartDialog.close();
  }
}

// Highlight Selected Delivery Option
function toggleFilter(id) {
  if (document.getElementById(id).classList.contains("active")) {
    return;
  }
  document.getElementById("delivery").classList.toggle("active");
  document.getElementById("pickup").classList.toggle("active");
}

// Local Storage
function saveToLocalStorage() {}

function getFromLocalStorage() {
  let myDishes = JSON.parse(localStorage.getItem("myDishes"));
  maindishes = myDishes.maindishes;
  sides = myDishes.sides;
  desserts = myDishes.desserts;
  drinks = myDishes.drinks;
}
