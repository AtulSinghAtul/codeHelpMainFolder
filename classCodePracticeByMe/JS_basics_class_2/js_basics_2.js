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
//console.log(rectangleObject1.constructor);
//console.log(Rectangle1.constructor);

// how internally create  construcor function of object

let Rectangle2 = new Function(
  "len",
  " bre",
  `
this.length = len;
this.breadth = bre;
this.draw = function () {
  console.log("drawing");
};`
);

let rectangleObject2 = new Rectangle2(4, 6);
// console.log(rectangleObject2);

// console.log(rectangleObject2.constructor);
// console.log(Rectangle2.constructor); // ƒ Function() { [native code] }

// difference between primitive  & reference type data

// primitive type
//  primitive data type k andar same  memory address point nhi hota hai kyunki sabhi ki copy banti hai aur sabhi copy ki alag alag memory address hota hai.
let a = 10;
let b = a;

a++;
console.log(a); //11
console.log(b); //10

//reference type
// reference data type k andar same hi memory address point hota hai.

let a1 = { value: 10 };
let b1 = a1;

a1.value++;

console.log(a1); // 11
console.log(b1); // 11
