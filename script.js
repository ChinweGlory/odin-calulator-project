// function for the basic math operation
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
        return "Non!";
    } else {
        return a / b;
    }
}

// Testing in the console
console.log("Addition Test: ", add(5, 3)); // Should output 8
console.log("Subtraction Test: ", subtract(5, 3)); // Should output 2
console.log("Multiplication Test: ", multiply(5, 3)); // Should output 15
console.log("Division Test: ", divide(10, 2)); // Should output 5
console.log("Division Test with 0: ", divide(10, 20)); // Should output "Cannot divide by zero!"
