const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a/b;

const operate = (func, num1, num2) => func(num1, num2)

let displayValue = []

let calculatorScreen = document.querySelector('#calculatorScreen')

const calcButtons = document.querySelector('#calcButtons')
calcButtons.addEventListener('click', event => {
    if (event.target.className === 'numButton' && displayValue.length <= 7) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue;
        
    }
});

const posNeg = document.querySelector('.posNeg')
posNeg.addEventListener('click', () => {
    displayValue = displayValue * -1
    calculatorScreen.value = displayValue
    
 });

const percentButton = document.querySelector('.percentButton')
percentButton.addEventListener('click', () => {
    displayValue = displayValue/100
    calculatorScreen.value = displayValue
})