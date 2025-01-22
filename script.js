let keysMyDishes = Object.keys(myDishes);

function onInit() {
  renderCategories();
  renderDishes();
}

function renderDishes() {
  let cardContentRef = document.getElementById("card_container");
  cardContentRef.innerHTML = "";
  for (let indexCard = 0; indexCard < keysMyDishes.length; indexCard++) {
    cardContentRef.innerHTML += getDishesTemplate(indexCard);
    // setCategoryImage(indexCard);
  }
}

function renderCategories() {
  let category = document.getElementById("categories_wrapper");
  category.innerHTML = "";
  for (
    let indexCategory = 0;
    indexCategory < Object.keys(myDishes).length;
    indexCategory++
  ) {
    // let capitalizedFirstLetter = capitalizeFirstLetter(keysMyDishes[indexCategory]);
    document.getElementById("categories_wrapper").innerHTML += getCategoriesTemplate(indexCategory) 
  }
}

function renderDishes(category) {
  for (let indexDishes = 0; indexDishes < category.length; indexDishes++) {
    let dish = document.getElementById("dish_" + indexDishes);
    dish = "";
    
  }
}

function setCategoryImage(index) {
    console.log(document.getElementById("card_image"));
    console.log(categoryImages[index]);
    
document.getElementById("card_image").src = categoryImages[index];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
