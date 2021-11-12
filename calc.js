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

    else if (event.target.className === 'numButton' && displayValue.length <= 7 && secondValue.length > 0.000) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue; 
        secondValue = displayValue 
    }

    //maybe. if a func button is pressed and both values are populated, the display gets sent to firstValue
    else if (event.target.className === 'func' && firstValue.length > 0.000 && secondValue.length > 0.000) {
        firstValue = displayValue
        secondValue = []
    }

    //if a function button is hit, writes displayvalue to firstvalue
    else if (event.target.className === 'func') {
        firstValue = displayValue;
    }

    //allows hitting equals multiple times to iterate by second value
    else if (event.target.classname === 'equal' && firstValue.length > 0.000 && secondValue.length > 0.000) {
        firstValue = displayValue;
    }
});

const acButton = document.querySelector('.clearButton')
acButton.addEventListener('click', () => {
    clearScreen();
    firstValue = []
    secondValue = []
})

function clearScreen() {
    displayValue = []
    calculatorScreen.value = 0;
}

const deleteButton = document.querySelector('.delButton')
deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0,-1);
    calculatorScreen.value = displayValue
    
})

const percentButton = document.querySelector('.percentButton')
percentButton.addEventListener('click', () => {
    secondValue = secondValue / 100
    displayValue = secondValue /// 100 //* firstValue;
    calculatorScreen.value = displayValue;
})

const posNeg = document.querySelector('.posNeg')
posNeg.addEventListener('click', () => {
    displayValue = displayValue * -1
    calculatorScreen.value = displayValue
    
 });

const plusButton = document.querySelector('#plusButton')
plusButton.addEventListener('click', () => {
    operationValue = add;

})

const subButton = document.querySelector('#subButton')
subButton.addEventListener('click', () => {
    operationValue = subtract;
})

const divButton = document.querySelector('#divideButton')
divButton.addEventListener('click', () => {
    operationValue = divide;
})

const multiButton = document.querySelector('#multiButton')
multiButton.addEventListener('click', () => {
    operationValue = multiply;
})

const equalsButton = document.querySelector('.equal')
equalsButton.addEventListener('click', () => {
    const val = operate(operationValue, firstValue, secondValue);
    console.log(val);
    calculatorScreen.value = val;
    displayValue = val;
    firstValue = displayValue;

})