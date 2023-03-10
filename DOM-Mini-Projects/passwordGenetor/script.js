const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
let symbols = ",.`~!@#$%^&*()_-+=[]{}|;',?/<>:";

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength circle color to grey

// set passwordLength

function handleSlider() {
  // is function ka kam sirf itna hai ki ye passwordLength ko ui par reflect karwata hai.
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomInteger() {
  return getRndInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;

  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasUpper = true;
  if (numbersCheck.checked) hasUpper = true;
  if (symbolsCheck.checked) hasUpper = true;

  if (hasUpper && hasLower && (hasNum || hasSym) && password.length >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    password.length >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  // error handeling
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "failed";
  }
}

//to make copy wala span visible
copyMsg.classList.add("active");

setTimeout(() => {
  copyMsg.classList.remove("active");
}, 2000);

function shufflePassword(array) {
  // fisher Yates Method
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (1 * 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => {
    str += el;
  });
  return str;
}

// eventlistener
inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) {
    copyContent();
  }
});

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });

  // special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  console.log(checkCount);
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

generateBtn.addEventListener("click", () => {
  // none of the checkbox are selected
  if (checkCount <= 0) return;

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  //remove old password
  password = "";

  //lets put the stuff mentioned by checkboxes

  // if (uppercaseCheck.checked) {
  //   password = password + generateUpperCase();
  // }
  // if (lowercaseCheck.checked) {
  //   password = password + generateLowerCase();
  // }
  // if (numbersCheck.checked) {
  //   password = password + generateRandomInteger();
  // }
  // if (symbolsCheck.checked) {
  //   password = password + generateSymbol();
  // }

  let funcArr = [];

  if (uppercaseCheck.checked) {
    funcArr.push(generateUpperCase);
  }
  if (lowercaseCheck.checked) {
    funcArr.push(generateLowerCase);
  }
  if (numbersCheck.checked) {
    funcArr.push(generateRandomInteger);
  }
  if (symbolsCheck.checked) {
    funcArr.push(generateSymbol);
  }

  // compulsory addition
  for (let i = 0; i < funcArr.length; i++) {
    password = password + funcArr[i]();
  }

  // remaining addition
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRndInteger(0, funcArr.length);
    password = password + funcArr[randIndex]();
  }

  // shuffle the password
  password = shufflePassword(Array.from(password));
  // show in UI
  passwordDisplay.value = password;
  // calculate strength
  calcStrength();
});
