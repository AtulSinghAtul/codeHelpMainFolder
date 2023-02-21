// document
//   .getElementsByTagName("button")[0]
//   .addEventListener("click", function () {
//     document.getElementsByTagName("button")[0].innerHTML = "text";
//   });

// document
//   .getElementsByTagName("button")[0]
//   .addEventListener("click", function () {
//     document.body.style.backgroundColor = "red";
//   });

// add and remove event listener

// function print() {
//   console.log("hi");
// }

// document.addEventListener("click", print);

// document.removeEventListener("click", print);

// The Event Object

// const a = document.querySelector("#wrapper");
// console.log(a);

// a.addEventListener("click", function (e) {
//   console.log(e);
// });

// The Default Action
// const anchorTag = document.querySelectorAll("a");

// const thirdAnchorTag = anchorTag[2];
// console.log(thirdAnchorTag);

// thirdAnchorTag.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("applied prevent default ");
// });

// Example 1
// let myDiv = document.createElement("div");

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   newElement.addEventListener("click", function (event) {
//     console.log("I have clicked on para");
//   });

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Example 2:-
// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log("I have clicked on para");
// }

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   newElement.addEventListener("click", paraStatus);

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Example 3:-
// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log("I have clicked on para");
// }

// myDiv.addEventListener("click", paraStatus);

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Example 4:-
// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   // console.log("I have clicked on para");
//   console.log(event);
//   console.log(event.target);
//   console.log(event.target.textContent);
// }

// myDiv.addEventListener("click", paraStatus);

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Example 5:- kya ho jab para k andar span ho

// let element = document.querySelector("#wrapper");

// element.addEventListener("click", function (event) {
//   console.log("span par click kia hai " + event.target.textContent);
// });

// Example 6:- span ko sirf click karne par result aaye para ko click karne par nhi

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
  // console.log(event.target.nodeName);

  if (event.target.nodeName === "SPAN") {
    console.log("span par click kia hai " + event.target.textContent);
  }
});
