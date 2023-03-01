let countValue = document.querySelector("p");

console.log(typeof countValue);

let decrement = () => {
  let value = parseInt(countValue.textContent);

  console.log(typeof value);

  console.log(value);

  value = value - 1;

  console.log(value);

  countValue.textContent = value;
};

let increment = () => {
  let value = parseInt(countValue.textContent);

  console.log(typeof value);

  console.log(value);

  value = value + 1;

  console.log(value);

  countValue.textContent = value;
};
