var faker = require('faker');
var iterations = 10;


function randomProduct(){
  var productName = faker.commerce.productName();
  var productPrice = faker.commerce.price();
  return productName + ": " + productPrice;
};



for (let i = 0; i < iterations; i++){
    console.log(randomProduct());
};