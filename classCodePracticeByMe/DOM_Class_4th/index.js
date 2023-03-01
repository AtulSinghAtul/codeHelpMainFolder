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
// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise 2");
//   }, 3000);
//   //resolve(2233);
//   reject(new Error("Bhaisahab error aaye hain"));
// });
// meraPromise2.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("Received an error");
//   }
// );
// console.log("pehala");

// using then() method chaining
// let waada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setTimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = waada1.then(() => {
//   let waada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setTimeout2 started");
//     }, 3000);
//     resolve("waada2 resolved");
//   });
//   return waada2;
// });

// output.then((value) => {
//   console.log(value);
// });

// Async await Example

// async function abcd() {
//   return 7;
// }
// async function utility() {
//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("delhi ka mausam aaj bahut garm hai");
//     }, 2000);
//   }).then((value) => {
//     console.log(value);
//   });

//   let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hyderabad ka mausam aaj achha hai");
//     }, 5000);
//   }).then((value) => {
//     console.log(value);
//   });

//   let dM = await delhiMausam;
//   let hM = await hydMausam;

//   return [dM, hM];
// }
// utility();

//create post call in fetch API

async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Atul",
      body: "stealth",
      userId: 1,
    }),

    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  };

  let content = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  console.log(content);

  let response = content.json();
  console.log(response);
  return response;
}

async function utility() {
  let ans = await helper();
  console.log(ans);
}

console.log(utility());

// Closure
