let keysMyDishes = Object.keys(myDishes);
let cart = [];

function onInit() {
  renderCategoriesToSlider();
  renderCategories();
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
  getSubtotal();
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
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    fillCart.innerHTML += getCartDishesTemplate(indexCart);
  }
  document.getElementById("costs_of_order").innerHTML = getCartCostTemplate()
}

function getCartDishIndex(idToFind) {
  let cartElement = cart.find((cartObj) => {return cartObj.id === idToFind;});
  if (undefined === cartElement) {
    return -1;
  }
  return cart.indexOf(cartElement);
}

function increaseCartDishAmount(indexCart) {
  cart[indexCart].amount++;
  renderCart();
  getSubtotal();
}

function decreaseCartDishAmount(indexCart) {
  if (1 < cart[indexCart].amount) {
    cart[indexCart].amount--;
    renderCart();
  }
  else {
    deleteDishFromCart(indexCart);
  }
  getSubtotal();
}

function deleteDishFromCart(indexCart) {
  cart.splice(indexCart, 1);
  renderCart();
}

function getSubtotal() {
  let subtotal = 0;
  for (let indexSub = 0; indexSub < cart.length; indexSub++) {
    subtotal += cart[indexSub].amount * cart[indexSub].price
  }
  document.getElementById("subtotal").innerHTML = subtotal.toFixed(2).replace('.', ',');
}

// Local Storage
function saveToLocalStorage() {
  localStorage.setItem("myDishes", JSON.stringify(myDishes));
}

function getFromLocalStorage() {
  let myDishes = JSON.parse(localStorage.getItem("myDishes"));
  maindishes = myDishes.maindishes;
  sides = myDishes.sides;
  desserts = myDishes.desserts;
  drinks = myDishes.drinks;
}
