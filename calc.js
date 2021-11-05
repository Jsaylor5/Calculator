const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a/b;

const operate = (func, num1, num2) => func(num1, num2)

let displayValue = []
let firstValue = []
let secondValue = []

let calculatorScreen = document.querySelector('#calculatorScreen')

const calcButtons = document.querySelector('#calcButtons')
calcButtons.addEventListener('click', event => {
    if (event.target.className === 'numButton' && displayValue.length <= 7 && firstValue.length === 0) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue;  
    }

    else if (event.target.className === 'numButton' && displayValue.length <= 7 && firstValue.length > 0 && secondValue.length === 0) {
        clearScreen();
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue;
        secondValue += displayValue;  
    }

    else if (event.target.className === 'numButton' && displayValue.length <= 7 && secondValue.length > 0) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue; 
        secondValue = displayValue 
    }

    //if a function button is hit, writes displayvalue to firstvalue
    else if (event.target.className === 'func') {
        firstValue = displayValue;
    }

    else if (event.target.className === 'percentButton'){
        displayValue = displayValue/100
        calculatorScreen.value = displayValue
    }

});

const acButton = document.querySelector('.clearButton')
acButton.addEventListener('click', () => {
    clearScreen();
})

function clearScreen() {
    displayValue = []
    calculatorScreen.value = displayValue;
}

//*does not work*
const deleteButton = document.querySelector('.delButton')
deleteButton.addEventListener('click', () => {
    displayValue.pop();
    console.log('popped')
})

const posNeg = document.querySelector('.posNeg')
posNeg.addEventListener('click', () => {
    displayValue = displayValue * -1
    calculatorScreen.value = displayValue
    
 });

// const percentButton = document.querySelector('.percentButton')
// percentButton.addEventListener('click', () => {
//     displayValue = displayValue/100
//     calculatorScreen.value = displayValue
// })


