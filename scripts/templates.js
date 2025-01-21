function getDishesTemplate(index) {
  return /*html*/ `
<div class="card card_style" style="width: 18rem;">
  <img id="card_image" src="${categoryImages[index]}" class="card-img-top" alt="Essen" >
  <div class="card-body">
    <h5 class="card-title">${keysMyDishes[index]}</h5>
  </div>
</div>
`;
}

function getCategoriesTemplate(index) {
    return /*html*/`
    <a id="categories" href="#">${keysMyDishes[index]}</a>
    `
}