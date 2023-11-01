document.addEventListener("DOMContentLoaded", function () {
  let firstOperandDisplay = document.getElementById("first-operand");
  let secondOperandDisplay = document.getElementById("second-operand");
  let operationDisplay = document.getElementById("operation");
  let resultDisplay = document.getElementById("result");

  let numberButtons = document.querySelectorAll(".data-number");
  let operationButtons = document.querySelectorAll(".data-operation");
  let equalsButton = document.getElementById("equal");
  let clearButton = document.getElementById("clear");
  let deleteButton = document.getElementById("delete");

  // create a variable
  let firstNumber = "";
  let secondNumber = "";
  let currentOperation = "";

  // event listener
  numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (currentOperation === "") {
        firstNumber += this.textContent;
        firstOperandDisplay.textContent = firstNumber;
      } else {
        secondNumber += this.textContent;
        secondOperandDisplay.textContent = secondNumber;
      }
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      currentOperation = this.textContent;
      operationDisplay.textContent = currentOperation;
    });
  });

  equalsButton.addEventListener("click", function () {
    let result = 0;
    if (currentOperation === "+") {
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (currentOperation === "-") {
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (currentOperation === "*") {
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (currentOperation === "÷") {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    resultDisplay.textContent = result;
    firstNumber = "";
    secondNumber = "";
    currentOperation = "";
    firstOperandDisplay.textContent = "";
    secondOperandDisplay.textContent = "";
    operationDisplay.textContent = "";
  });

  clearButton.addEventListener("click", function () {
    firstNumber = "";
    secondNumber = "";
    currentOperation = "";
    firstOperandDisplay.textContent = "";
    secondOperandDisplay.textContent = "";
    operationDisplay.textContent = "";
    resultDisplay.textContent = "";
  });
  deleteButton.addEventListener("click", function () {
    if (secondNumber) {
      secondNumber = secondNumber.slice(0, -1);
      secondOperandDisplay.textContent = secondNumber;
    } else if (currentOperation) {
      currentOperation = "";
      operationDisplay.textContent = "";
    } else if (firstNumber) {
      firstNumber = firstNumber.slice(0, -1);
      firstOperandDisplay.textContent = firstNumber;
    }
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
