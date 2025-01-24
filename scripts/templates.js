function getDishCardsTemplate(index) {
  return /*html*/ `
<div class="card card_style position_static w-75" id="${keysMyDishes[index]}" style="width: 18rem;">
  <img id="card_image" src="${categoryImages[index]}" class="card-img-top image_dimensions" alt="Essen" >
  <div class="card-body">
    <h4 class="card-title mb-4">${keysMyDishes[index]}</h4>
    <div class="" id="dishes_${index}">
    </div>
  </div>
</div>
`;
}

function getCategorySliderTemplate(index) {
  return /*html*/ `
    <a class="category_links" id="categories" href="#${keysMyDishes[index]}">${keysMyDishes[index]}</a>
    `;
}

function getDishesTemplate(index, category) {
  return /*html*/ `
    <div class=" card card-body border border-secondary rounded mb-3 position_static" id='dish_${index}'>
      <div class="dishes_wrapper">
        <h5 >${myDishes[category][index].name}</h5>
        <img class="add_to_cart" onclick="addToCart(${index}, '${category}')" src="assets/icons/plusIcon.svg" alt="Plus">
      </div>     
      <div class="mb-2">${myDishes[category][index].description}</div>
      <div>${myDishes[category][index].price
        .toFixed(2)
        .replace(".", ",")}€</div>
    </div>  
  `;
}

function getCartDishesTemplate(index) {
  return /*html*/ `
  <div class=" card card-body border border-secondary rounded mb-3 position_static" id='cart_dish_${index}'>
      <div class="dishes_wrapper">
        <h5 >${cart[index].dish}</h5>
        <img class="delete_from_cart" onclick="deleteDishFromCart(${index})" src="assets/icons/dustbin.svg" alt="Papierkorb">
      </div>
      <div class="d-flex">
      <div class="d-flex align-items-center justify-content-between rounded-pill border cart-quantity px-1 ms-auto">
          <div onclick="decreaseCartDishAmount(${index})" class="minus cart_quantity_btn">
            <i class="bi bi-dash text-success"></i>
          </div>
          <input class="form-control text-center border-0 py-0 box" type="text" placeholder="" aria-label="default input example" value="${cart[index].amount}">
          <div onclick="increaseCartDishAmount(${index})" class="plus cart_quantity_btn">
            <i class="bi bi-plus text-success"></i>
          </div>
      </div>
      <div class="cart-box-item-price">
          <div class="text-end price_cart">${cart[index].price
            .toFixed(2)
            .replace(".", ",")}€</div>
      </div>
    </div>
    `;
}