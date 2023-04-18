// Multiplication Table and Validation such as white space if you write 2 space 0 the fuction will be treated 20 as integer And You can't write string value to the input
function multiplicationTable() {
  let inputBox = document.querySelector(".inputbox");
  let input = document.getElementById("num");
  let intger = /^[0-9]+$/;
  let number = input.value.replaceAll(" ", "");

  if (number == "" || !number.match(intger)) {
    inputBox.classList.add("invalid");
    input.setAttribute("placeholder", "Please input a number");

    function checknumber() {
      inputBox.classList.remove("invalid");
    }

    document.getElementById("num").addEventListener("keyup", checknumber);
  } else {
    let result = "";

    for (let i = 1; i <= 10; ++i) {
      result = result + number + " * " + i + " = " + number * i + "</br>";
    }
    document.getElementById("demo").innerHTML = result;
  }
}

// Remove multiplication product when click Clear Button
function clearData() {
  document.getElementById("demo").remove();
  const wraper = document.getElementById("wraper");
  const element = document.createElement("div");
  element.setAttribute("id", "demo");
  wraper.appendChild(element);
}
