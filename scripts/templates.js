function getDishCardsTemplate(index) {
  return /*html*/ `
<div class="card card_style position_static w-100" id="${keysMyDishes[index]}" style="width: 18rem;">
  <img id="card_image_${index}" src="${categoryImages[index]}" class="card-img-top image_dimensions" alt="Essen" >
  <div class="card-body">
    <h4 class="text_color_white card-title mb-4">${keysMyDishes[index]}</h4>
    <div class="" id="dishes_${index}">
    </div>
  </div>
</div>
`;
}

function getCategorySliderTemplate(index) {
  return /*html*/ `
    <a class="category_links" id="categories" href="#card_image_${index}">${keysMyDishes[index]}</a>
    `;
}

function getDishesTemplate(index, category) {
  return /*html*/ `
    <div class="text_color_white bg_color_grey change_color_on_hover card card-body border border-secondary rounded mb-3 position_static" id='dish_${index}'>
      <div class="dishes_wrapper">
        <h5 class="text-break">${myDishes[category][index].name}</h5>
        <img class="add_to_cart" onclick="addToCart(${index}, '${category}')" src="assets/icons/plusIcon.svg" alt="Plus">
      </div>     
      <div class="mb-2">${myDishes[category][index].description}</div>
      <div>${myDishes[category][index].price
        .toFixed(2)
        .replace(".", ",")}€</div>
    </div>  
  `;
}

function getCartTemplate(id_cart) {
  return /*html*/ `
  <div class="btn-group delivery_or_pickup mt-3 rounded-pill text-bg-secondary mb-4" id="delivery_or_pickup">
              <button onclick="setDeliveryPrice('delivery_${id_cart}'); toggleFilter('delivery_${id_cart}');" class="btn btn-secondary btn_img d-flex active" id="delivery_${id_cart}">
                <img class="me-2" src="assets/icons/deliveryIcon.svg">
                Lieferung
              </button>
              <button onclick="setDeliveryPrice('pickup_${id_cart}'); toggleFilter('pickup_${id_cart}');" class="btn btn-secondary btn_img d-flex" id="pickup_${id_cart}">
                <img class="me-2"  src="assets/icons/pickupIcon.svg">
                Abholung
              </button>
            </div>
            <div class="filled_cart w-100" id="${id_cart}"></div>
            <div class="border-bottom border-dark p-3 w-100" id="costs_of_order_${id_cart}"></div>
            <button onclick="payOrder()" class="btn mt-3 btn-secondary disabled btn-lg d-flex align-items-center gap-3" id="order_button_${id_cart}">
              <p class="mb-0">Bestellen</p>
              <p class="mb-0" id="sum_button_${id_cart}">50€</p>
            </button>
  `;
}

function getCartDishesTemplate(index) {
  return /*html*/ `
  <div class="border-bottom border-secondary p-3 position_static d-flex flex-column alignt-items-center" id='cart_dish_${index}'>
      <div class="dishes_cart_wrapper">
        <p>${cart[index].dish}</p>
        <img class="delete_from_cart" onclick="deleteDishFromCart(${index})" src="assets/icons/dustbin.svg" alt="Papierkorb">
      </div>
      <div class="d-flex align-items-center justify-content-between gap-5">
      <div class="d-flex align-items-center justify-content-between rounded-pill border border-dark px-1">
          <div onclick="decreaseCartDishAmount(${index})" class="minus cart_quantity_btn">
            <i class="bi bi-dash text-success"></i>
          </div>
          <input onchange="onChangeAmount(${index})" class="input_width text-center border-0 py-0 box" id="input_amount_${index}" type="text" placeholder="" aria-label="default input example" value="${cart[index].amount}">
          <div onclick="increaseCartDishAmount(${index})" class="plus cart_quantity_btn">
            <i class="bi bi-plus text-success"></i>
          </div>
      </div>
      <div>
          <div class="text-end price_cart">${cart[index].price
            .toFixed(2)
            .replace(".", ",")}€</div>
      </div>
  </div>
    `;
}

function getCartCostTemplate(index) {
  return /*html*/ `
<div class="d-flex justify-content-between">
  <p>Zwischensumme</p>
  <p id="subtotal${index}">50€</p>
</div>
<div class="d-flex justify-content-between" id="delivery_costs">
  <p>Lieferkosten</p>
  <p id="shipment${index}">${deliveryPrice}</p>
</div>
<div class="d-flex justify-content-between">
  <p class="mb-0">Gesamt</p>
  <p class="mb-0" id="total${index}">50€</p>
</div>
`;
}