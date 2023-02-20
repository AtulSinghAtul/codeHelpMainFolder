document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    document.getElementsByTagName("button")[0].innerHTML = "text";
  });

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
  });

// add and remove event listener

function print() {
  console.log("hi");
}

document.addEventListener("click", print);

document.removeEventListener("click", print);
