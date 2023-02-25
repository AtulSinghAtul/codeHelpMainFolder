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
let meraPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside promise");
  }, 5000);
  reject(new Error("Bhaisahab error aaye hain"));
});

console.log("pehala");
