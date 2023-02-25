// creating Promise

// let meraPromise = new Promise(function (resolve, reject) {
//   console.log("I am inside promise");
// });

// console.log("pehala");

////  resolve /////
// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise");
//   }, 5000);
//   resolve(2233);
// });

// console.log("pehala");

// reject //
// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise");
//   }, 5000);
//   reject(new Error("Bhaisahab error aaye hain"));
// });

// console.log("pehala");

// parallely execute best practise to use promise
// let meraPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 1");
//   }, 5000);
//   // reject(new Error("Bhaisahab error aaye hain"));
// });

// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 2");
//   }, 3000);
//   // reject(new Error("Bhaisahab error aaye hain"));
// });

// console.log("pehala");

// then() and catch() method
// then method : when promise is resolve we use then method for getting resolve value
// let meraPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 1");
//   }, 5000);
//   resolve(2233);
//   // reject(new Error("Bhaisahab error aaye hain"));
// });
// meraPromise1.then((value) => {
//   console.log(value);
// });

// catch method: we handelling error using the catch method when code is got rejected.
// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 2");
//   }, 3000);
//   //resolve(2233);
//   reject(new Error("Bhaisahab error aaye hain"));
// });
// meraPromise2.catch((error) => {
//   console.log("got error");
// });

// console.log("pehala");

// shortcut to using then and catch
let meraPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise 2");
  }, 3000);
  //resolve(2233);
  reject(new Error("Bhaisahab error aaye hain"));
});
meraPromise2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("Received an error");
  }
);
console.log("pehala");
