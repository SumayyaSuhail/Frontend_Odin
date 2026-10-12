function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b === 0) return "ERROR"
    return a / b;
}

let firstNum = "";
let secondNum = "";
let operator = "";

let isResultDisplayed = false;

function operate(operator, num1, num2){
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if(isNaN(a) || isNaN(b)) return"ERROR";

    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default: return "ERROR";
    }
}

const display = document.getElementById("calc-display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals-btn");
const clearBtn = document.getElementById("clear-btn");

function updateDisplay(value) {
    display.textContent = value || "0";
}

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        const digit = button.textContent;
        if (isResultDisplayed && operator === "") {
          firstNum = "";
          isResultDisplayed = false;
        }

        if (operator === "") {
          firstNum += digit;
          updateDisplay(firstNum);
        } else {
          secondNum += digit;
          updateDisplay(secondNum);
        }
    });
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNum !== "" && operator !== "" && secondNum !== "") {
          runCalculation();
        }
        
        if (firstNum !== "") {
          operator = button.getAttribute("data-op");
          isResultDisplayed = false;
        }
    });
});

function runCalculation() {
    if (firstNum === "" || operator === "" || secondNum === "") return;

    const result = operate(operator, firstNum, secondNum);
    updateDisplay(result);

      
    firstNum = result.toString();
    operator = "";
    secondNum = "";
    isResultDisplayed = true;
}

equalsBtn.addEventListener("click", runCalculation);

clearBtn.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    isResultDisplayed = false;
    updateDisplay("0");
});