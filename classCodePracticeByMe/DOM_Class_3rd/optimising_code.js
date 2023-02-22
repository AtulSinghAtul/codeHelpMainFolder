// 100 para
// using time stamp to know how many time take to  run
let t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;
  document.body.appendChild(newElement);
}
let t2 = performance.now();

console.log("Time took " + (t2 - t1) + " ms");

// optimising a bit
let t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;
  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

let t4 = performance.now(); // time stamp

console.log("Time took " + (t4 - t3) + " ms");

// Using Fragment to stop 100 Reflow and 100 Repaint and this fragment is optimising performance of code
let t5 = performance.now(); // time stamp

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;
  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);

let t6 = performance.now(); // time stamp

console.log("Time took " + (t6 - t5) + " ms");
