// JS Dynamic Language
function sum(a, b) {
  //console.log(arguments);
  return a + b;
}
// console.log(sum(1, 2));// 3
// console.log(sum(1)); // 1 + undefined = NaN
// console.log(sum()); // undefined + undefined = NaN
//console.log(sum(1, 2, 3, 4, 5)); // 3
let ans = sum();

// Arguments using ////////

function sum() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

//console.log(sum(1, 2, 3, 4, 5, 6)); //21--> Ans.

// Rest Operator
function sum(v1, v2, ...rest) {
  // console.log(rest);
}

sum(1, 2, 3, 4, 5, 6);

// default parametr

function interest(p, r = 5, y = 5) {
  return (p * r * y) / 100;
}

console.log(interest(1000, 5, 6));

// Getter and Setter

let person = {
  fName: "love",
  lName: "Babbar",

  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  set fullName(value) {
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

person.fullName = "rohit kumar";
console.log(person.fullName);

// scope
// try catch finally
//reduce
//sort
// all these are given home work
