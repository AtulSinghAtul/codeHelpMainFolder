// Constructor Function creating for object

function Rectangle() {
  this.length = 1;
  this.breadth = 2;
  this.draw = function () {
    //console.log("drawing");
  };

  //console.log(this);
}
//console.log(this);

let rectangleObject = new Rectangle();
// console.log(rectangleObject);
// console.log(rectangleObject.draw());

// Dynamic nature of objects for adding and deleting property

function Rectangle1(len, bre) {
  this.length = len;
  this.breadth = bre;
  this.draw = function () {
    //console.log("drawing");
  };
}

let rectangleObject1 = new Rectangle1(4, 6);
// adding property
rectangleObject1.color = "yellow";
//console.log(rectangleObject1);
// deleting property
delete rectangleObject1.color;
//console.log(rectangleObject1);

// constructor property
console.log(rectangleObject1.constructor);
console.log(Rectangle1.constructor);
