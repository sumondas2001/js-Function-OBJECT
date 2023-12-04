var shoppingCart = {
    books : 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 1,
    pen : 25
}

// console.log(shoppingCart);

var penCount = shoppingCart.pen;
// console.log(penCount);

var penCount2 = shoppingCart["pen"];
// console.log(penCount2);

var properties = Object.keys(shoppingCart);
// console.log(properties);

var value = Object.values(shoppingCart);
// console.log(value);

var propertieName = "pen";

var propertieValue = shoppingCart[propertieName];
console.log(propertieName, propertieValue);
