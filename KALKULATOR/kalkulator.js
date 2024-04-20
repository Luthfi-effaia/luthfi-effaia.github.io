const hasils = document.querySelector('.hasil');
const button = document.querySelectorAll('button');
// console.log(button);
let string = '';
let arr = Array.from(button);
// console.log(arr);

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        hasils.value = string;
      } catch (error) {
        alert('tidak bisa melakukannya');
      }
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      hasils.value = string;
    } else if (e.target.innerHTML == 'DEL') {
      // console.log(string.split('').pop().toString());
      string = string.substring(0, string.length - 1);
      hasils.value = string;
    } else {
      string += e.target.innerHTML;
      hasils.value = string;
    }
  });
});
// console.log(arr);

// let display = document.getElementById("display");
// let currentInput = "";

// function addToDisplay(value) {
//     currentInput += value;
//     display.value = currentInput;
// }

// function calculate() {
//     try {
//         currentInput = eval(currentInput);
//         display.value = currentInput;
//     } catch (error) {
//         display.value = "Error";
//     }
// }

// function clearDisplay() {
//     currentInput = "";
//     display.value = "";
// }
