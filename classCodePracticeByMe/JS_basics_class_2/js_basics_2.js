// Constructor Function creating for object

// function Rectangle() {
//   this.length = 1;
//   this.breadth = 2;
//   this.draw = function () {
//     //console.log("drawing");
//   };

//   //console.log(this);
// }
// //console.log(this);

// let rectangleObject = new Rectangle();
// console.log(rectangleObject);
// console.log(rectangleObject.draw());

// Dynamic nature of objects for adding and deleting property

// function Rectangle1(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     //console.log("drawing");
//   };
// }

// let rectangleObject1 = new Rectangle1(4, 6);
// // adding property
// rectangleObject1.color = "yellow";
// //console.log(rectangleObject1);
// // deleting property
// delete rectangleObject1.color;
//console.log(rectangleObject1);

// constructor property
//console.log(rectangleObject1.constructor);
//console.log(Rectangle1.constructor);

// how internally create  construcor function of object

// let Rectangle2 = new Function(
//   "len",
//   " bre",
//   `
// this.length = len;
// this.breadth = bre;
// this.draw = function () {
//   console.log("drawing");
// };`
// );

// let rectangleObject2 = new Rectangle2(4, 6);
// console.log(rectangleObject2);

// console.log(rectangleObject2.constructor);
// console.log(Rectangle2.constructor); // ƒ Function() { [native code] }

// difference between primitive  & reference type data

// primitive type
//  primitive data type k andar same  memory address point nhi hota hai kyunki sabhi ki copy banti hai aur sabhi copy ki alag alag memory address hota hai.
// let a = 10;
// let b = a;

// a++;
//console.log(a); //11
//console.log(b); //10

//reference type
// reference data type k andar same hi memory address point hota hai.

// let a1 = { value: 10 };
// let b1 = a1;

// a1.value++;

//console.log(a1); // 11
//console.log(b1); // 11

// example primitive vs references type
//primitive
// let a2 = 10;
// function inc(a2) {
//   a2++;
// }
// inc(a2);
// console.log(a2); //10

// //references type
// let a3 = { value: 10 };
// function inc(a3) {
//   a3.value++;
// }
// inc(a3);
// console.log(a3.value); //11

//for-of and for-in

let rectangle = {
  length: 2,
  breadth: 3,
};

// for (let key in rectangle) {
//   //accessing key
//   console.log(key);
//   //accessing value
//   console.log(rectangle[key]);
// }

// we can't use for of loop on object because object is not iterable but in js some hack who provide to use for of loop on objects also.

// for (let key of Object.keys(rectangle)) {
//   console.log(key);
// }

// for (let key of Object.entries(rectangle)) {
//   console.log(key);
// }

// Object Cloning
// iteration, assign, spread

// cloning through iteration(for-in)

let src = { a: 10, b: 20, c: 30 };
let desti = {};

for (let key in src) {
  desti[key] = src[key];
}
//console.log(desti); // {a: 10, b: 20, c: 30} cloned object
//increment karne par sirf src k a ki value badh rahi hai desti ki nhi to kahne ka matlab ham reference type me clone banane me safal ho gaye hain .
// hame reference type k data ka clone isliye banana pada kyunki
console.log(src.a++); //10
console.log(src); //{a: 11, b: 20, c: 30}
console.log(desti); //{a: 10, b: 20, c: 30}

// cloning through assign
let src1 = { a: 10, b: 20, c: 30 };
let desti1 = Object.assign({}, src1);
//console.log(desti1); // {a: 10, b: 20, c: 30}cloned object

//cloning through spread
let src2 = { a: 10, b: 20, c: 30 };
let desti2 = { ...src2 };
//console.log(desti2); // {a: 10, b: 20, c: 30}cloned object
