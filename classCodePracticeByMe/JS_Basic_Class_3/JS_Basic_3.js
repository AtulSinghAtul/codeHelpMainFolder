// Array searching
// searching on primitive data type
let a = [10, 20, 30];

//console.log(a.indexOf(30)); // 2
//console.log(a.includes(30)); // true

// searching on Objects/Reference data type

let a1 = [
  { no: 1, name: "love" },
  { no: 2, name: "atul" },
];

// here is not working these methos so we use for reference type callback function
//console.log(a1.indexOf({ no: 1, name: "love" })); // -1
//console.log(a1.includes({ no: 1, name: "love" })); // false

// callback function
// we use Find method
let course = a1.find(function (b) {
  //console.log(b);
  return b.name === "love";
});
//console.log(course);

// Empetying Array

let number = [1, 2, 3, 4, 5];

// let numbers2 = number;
// console.log(numbers2);

number = [];
//number.length = 0;
//number.splice(0, number.length);
console.log(number);
