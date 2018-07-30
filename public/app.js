//
// var app = function(){
//   var catsGallery = document.createElement("ul");
//   catsGallery.classList.add("cat");
//
//   var name = document.createElement("li");
//   name.innerText = "Name: Chef Kittie";
//
//   var favFood = document.createElement("li");
//   favFood.innerText = "Favourite food: Fish";
//
//   var image = document.createElement("img");
//   image.src = "images/cat1.jpg";
//   image.width = 500;
//   image.height = 500;
//
//   catsGallery.appendChild(name);
//   catsGallery.appendChild(favFood);
//   catsGallery.appendChild(image);
//
//
//   var allCats = document.querySelector("#cats");
//   allCats.appendChild(catsGallery);
//
//
// };

var CATS_ARRAY = [
  {name: "Chef Kittie", favFood: "Fish", img: "images/cat1.jpg"},
  {name: "The Twins", favFood: "Whiskas", img: "images/cat2.jpg"},
  {name: "Baby Blue", favFood: "Milk", img: "images/cat3.jpg"}
];

var addCat = function(name, favFood, image){
  var catsGallery = createCatsGallery();
  var nameElement = createName(name);
  var foodElement = createFood(favFood);
  var imageElement = createImage(image);

  appendElements(catsGallery, nameElement, foodElement, imageElement);

};

var createCatsGallery = function(){
  var catsGallery = document.createElement("ul");
  catsGallery.classList.add("cat");
  return catsGallery;
}

var createName = function(name){
  var catName = document.createElement("li");
  catName.innerText = "Name: " + name;
  return catName;
}

var createFood = function(food){
  var favFood = document.createElement("li");
  favFood.innerText = "Favourite food: " + food;
  return favFood;
}

var createImage = function(image){
  var catImage = document.createElement("img");
  catImage.src = image;
  catImage.width = 500;
  catImage.height = 500;
  return catImage;
}

var appendElements = function(catsGallery, name, favFood, image){

  catsGallery.appendChild(name);
  catsGallery.appendChild(favFood);
  catsGallery.appendChild(image);


  var allCats = document.querySelector("#cats");
  allCats.appendChild(catsGallery);

};

var app = function(){
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.favFood, cat.img);
  }
};

window.onload = app;
