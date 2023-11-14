const userInput = document.getElementById("result");
let lastKeyIsOperator = false;
let decimalAdded = false;

function appendToResult(value) {
    if ("+*/".includes(value) && userInput.textContent === "0") {
        return; 
    }


    if (value === "." && decimalAdded) {
        return; 
    }


    if ("+-*/".includes(value)) {
        
        if (lastKeyIsOperator) {
        
            let currentValue = userInput.textContent;
            let updatedValue = currentValue.substring(0, currentValue.length - 1) + value;
            userInput.textContent = updatedValue;
            return;
        }

        
        lastKeyIsOperator = true;
        
        decimalAdded = false;
    } else {
        lastKeyIsOperator = false;


        if (value === ".") {
            decimalAdded = true;
        }
    }


    if (userInput.textContent === "0") {
        userInput.textContent = value;
    } else {
        userInput.textContent += value;
    }
}



function clearResult() {
    userInput.textContent = "0";
    lastKeyIsOperator = false;
    decimalAdded = false;
}

function delResult() {
    let initialValue = userInput.textContent;
    let updatedValue = initialValue.substring(0, initialValue.length - 1);
    userInput.textContent = updatedValue || "0";
}

function calculateResult() {
    const expression = userInput.textContent;
    const formattedExpression = expression.replace(/x/g, "*");
    const result = eval(formattedExpression);
    userInput.textContent = result;
}
