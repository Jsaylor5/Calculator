const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a/b;

const operate = (func, num1, num2) => func(num1, num2)

let displayValue =[]

const calculatorScreen = document.querySelector('#calculatorScreen')

const calcButtons = document.getElementById('calcButtons')
calcButtons.addEventListener('click', event => {
    if (event.target.className === 'numButton') {
        console.log(event.target.innerHTML);
        document.getElementById("calculatorScreen").value = displayValue
        displayValue += event.target.innerHTML
    }
});

