// variable for calculation operation
let firstOperand = "";
let operation = "";
let secondOperand = "";

// Dom Elements
let previousOperand = document.getElementById("first-operand");
let currentOperand = document.getElementById("second-operand");
let numberButtons = document.querySelectorAll("data-number");
let operationButtons = document.querySelectorAll("data-operation");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let equalButton = document.getElementById("equal");


// add eventlistener to the number
numberButtons.forEach((button) => {
  button.addEventListener('click', ()=>{
    let value = button.innerText
    console.log(value);
    computation.updateDisplay(value);
  });
});

// function takes an operator and 2 numbers
function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "error";
  }
}

// operation function
// Addition
function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b === 0) {
    return "Error";
  } else {
    return a / b;
  }
}


// Testing in the console
// const a = 10;
// const b = 5;

// console.log("Addition:", add(a, b));
// console.log("Subtraction:", subtract(a, b));
// console.log("Multiplication:", multiply(a, b));
// console.log("Division:", divide(a, b));
// console.log("Division")

// Testing the operate function in the console
console.log("Operate Test Addition: ", operate("+", 5, 3));
console.log("Operate Test Subtraction: ", operate("-", 5, 3));
console.log("Operate Test Multiplication: ", operate("*", 5, 3));
console.log("Operate Test Division: ", operate("/", 10, 2));
console.log("Operate Test Invalid Operator: ", operate("%", 5, 3));
