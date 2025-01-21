let menus = ["Gebackener Camembert", "Pizza Hawaii", "Nudelauflauf"];
let prices = [9.9, 12.9, 8.9];
let amounts = [3, 5, 4];

function onAddMenu() {
    let menu = getMenuFromInput();
    let price = getPriceFromInput();
    if (-1 == getMenuIndex(menu)) {
        menus.push(menu);
        prices.push(price);
        amounts.push(1);
    }
    else {
        amounts[getMenuIndex(menu)] ++;
    }
}

function getValueFromInput(id) {
  return (document.getElementById(id).value);
}

function getMenuFromInput() {
  return getValueFromInput("menu").trim();
}

function getPriceFromInput() {
  return Number(getValueFromInput("price"));
}

function getMenuIndex(menu) {
return menus.indexOf(menu);
}