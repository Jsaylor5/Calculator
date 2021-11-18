const add = (a,b) => parseFloat(a) + parseFloat(b);

const subtract = (a,b) => parseFloat(a) - parseFloat(b);

const multiply = (a,b) => parseFloat(a) * parseFloat(b);

const divide = (a,b) => parseFloat(a)/parseFloat(b);

const operate = (operationValue, firstValue, secondValue) => operationValue(firstValue, secondValue)

let displayValue = []
let firstValue = []
let secondValue = []
let operationValue = []

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

    else if (event.target.className === 'numButton' && displayValue.length <= 7 && secondValue.length > 0.000000) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue; 
        secondValue = displayValue;
    }

    else if (event.target.className === 'numButton' && secondValue.length === 0) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue; 
        secondValue = displayValue;
    }

    else if (event.target.className === 'func' && firstValue.length > 0.000000 && secondValue.length > 0.000000) {
        secondValue = []
    }

    else if (event.target.className === 'func') {
        firstValue = displayValue;
    }

    else if (event.target.className === 'posNeg' && secondValue.length > 0.000000) {
        secondValue = [secondValue * -1];

    }
});

const acButton = document.querySelector('.clearButton')
acButton.addEventListener('click', () => {
    clearScreen();
    clearValues();
})

function clearValues() {
    firstValue = []
    secondValue = []
    operationValue = []
    displayValue = []
    alreadyOperated = false;
}

function clearScreen() {
    displayValue = []
    calculatorScreen.value = 0;
}

const deleteButton = document.querySelector('.delButton')
deleteButton.addEventListener('click', () => {
    let x = displayValue.toString();
    displayValue = x.slice(0,-1);
    calculatorScreen.value = displayValue;
    
})

const percentButton = document.querySelector('.percentButton')
percentButton.addEventListener('click', () => {
    if (firstValue.length > 0.000000){
        secondValue = [secondValue / 100];
        displayValue = secondValue;
        calculatorScreen.value = displayValue;
    }
    else{
        clearScreen();
    }
})

const posNeg = document.querySelector('.posNeg')
posNeg.addEventListener('click', () => {
    if (displayValue.length > 0){
        displayValue = [displayValue * -1];
        calculatorScreen.value = displayValue;
    }
    else{
        clearScreen();
    }
    
 });

const plusButton = document.querySelector('#plusButton')
plusButton.addEventListener('click', () => {
    if (operationValue.length > 0) {
        operateValues();
    }
    operationValue = add;
})

const subButton = document.querySelector('#subButton')
subButton.addEventListener('click', () => {
    if (operationValue.length > 0) {
        operateValues();
    }
    operationValue = subtract;
})

const divButton = document.querySelector('#divideButton')
divButton.addEventListener('click', () => {
    if (operationValue.length > 0) {
        operateValues();
    }
    operationValue = divide;
})

const multiButton = document.querySelector('#multiButton')
multiButton.addEventListener('click', () => {
    if (operationValue.length > 0) {
        operateValues();
    }
    operationValue = multiply;
})

const equalsButton = document.querySelector('.equal')
equalsButton.addEventListener('click', () => {
    operateValues();
})

function operateValues() {
    if (secondValue == 0 && operationValue == divide) {
        calculatorScreen.value = 'ERROR';
        clearValues();
        displayValue = 0;
    }
    else if (firstValue.length > 0 && secondValue.length > 0){
        const val = operate(operationValue, firstValue, secondValue);
        console.log(val);
        displayValue = [val];
        calculatorScreen.value = displayValue;
        firstValue = displayValue;
        secondValue = [];
    }
    else{
        calculatorScreen.value = displayValue;
    }
    
}