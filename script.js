const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
display.textContent = 0;
let numbers = [];
let operator;



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.className === "number") {
            if (display.textContent == 0 && !numbers[0]) {
                display.textContent = "";
                display.textContent += e.target.textContent
            } else if (numbers[0] && display.textContent == numbers[0]) {
                display.textContent = "";
                display.textContent += e.target.textContent
            } else {
                display.textContent += e.target.textContent

            }
             
            
        } if (e.target.className === "operator") {
            if (!numbers[0]) {
                numbers[0] = Number(display.textContent)
                operator = e.target.textContent
                display.textContent = "";
            } else if(numbers[0] && display.textContent == "") {
                operator = e.target.textContent
            } else {
                numbers[1] = Number(display.textContent)
                operate(operator)
                operator = e.target.textContent
                numbers[0] = Number(display.textContent)
                numbers[1] = 0;
            }
        } else if (e.target.className == "clear") {
            if (e.target.textContent == "CE") {
                display.textContent = display.textContent.slice(0, -1)
            } else {
                display.textContent = 0;
                numbers = []
            }
        } else if (e.target.className == "equals") {
            if (!numbers[0] || !operator) {
                return
            } else {
                numbers[1] = Number(display.textContent)
                operate(operator)
                numbers[0] = Number(display.textContent)
                numbers[1] = 0;
            }
        }
    })
})

function operate(operator) {
    if (operator == "+") {
        display.textContent = numbers.reduce((a, b) => a + b)
    } else if (operator == "-") {
        display.textContent = numbers.reduce((a, b) => a - b)
    } else if (operator == "*") {
        display.textContent = numbers.reduce((a, b) => a * b)
    } else if (operator == "/") {
        display.textContent = numbers.reduce((a, b) => a / b)
    } else if (operator == "**") {
        display.textContent = numbers.reduce((a, b) => a ** b)
    } else if (operator == "%") {
        display.textContent = numbers.reduce((a, b) => a % b)
    }
}


