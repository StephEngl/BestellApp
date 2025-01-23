let keysMyDishes = Object.keys(myDishes);
let cart = [];
// [
  // {
  //   dish: "Gericht 1",
  //   amount: 1,
  //   price: 5.9
  // }
// ];

function onInit() {
  renderCategoriesToSlider();
  renderCategories();
}

function renderCategoriesToSlider() {
  let category = document.getElementById("categories_wrapper");
  category.innerHTML = "";
  for (
    let indexCategory = 0;
    indexCategory < Object.keys(myDishes).length;
    indexCategory++
  ) {
    category.innerHTML += getCategorySliderTemplate(indexCategory) 
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
  for (let indexDishes = 0; indexDishes < myDishes[category].length; indexDishes++) {    
    dish.innerHTML += getDishesTemplate(indexDishes, category)
  }
}

function addToCart(index, category) {
  document.getElementById("empty_cart").classList.add("d-none");
  let fillCart = document.getElementById("fill_cart");
  fillCart.innerHTML = "";

  myDishes[category][index].amount ++
  cart.push({
    id: myDishes[category][index].id,
    dish: myDishes[category][index].name,
    amount: myDishes[category][index].amount,
    price: myDishes[category][index].price
  });
  }

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }



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
