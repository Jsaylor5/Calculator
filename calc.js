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

    else if (event.target.className === 'numButton' && displayValue.length <= 7 && secondValue.length > 0) {
        displayValue += event.target.innerHTML;
        calculatorScreen.value = displayValue; 
        secondValue = displayValue 
    }

    //maybe. if a func button is pressed and both values are populated, the display gets sent to firstValue
    else if (event.target.className === 'func' && firstValue.length >0 && secondValue.length > 0){
        firstValue = displayValue
        secondValue = []
    }

    //if a function button is hit, writes displayvalue to firstvalue
    else if (event.target.className === 'func') {
        firstValue = displayValue;
    }

    //why do these buttons stop allowing input after triggered?
    else if (event.target.className === 'percentButton'){
        displayValue = displayValue/100;
        calculatorScreen.value = displayValue;
    }

});

const acButton = document.querySelector('.clearButton')
acButton.addEventListener('click', () => {
    clearScreen();
})

function clearScreen() {
    displayValue = []
    calculatorScreen.value = 0;
}

//*does not work*
const deleteButton = document.querySelector('.delButton')
deleteButton.addEventListener('click', () => {
    console.log('popped');
    displayValue.pop();
    
})

const posNeg = document.querySelector('.posNeg')
posNeg.addEventListener('click', () => {
    displayValue = displayValue * -1
    calculatorScreen.value = displayValue
    
 });

const plusButton = document.querySelector('#plusButton')
plusButton.addEventListener('click', () => {
    console.log('works');
    operationValue = add;

})

const subButton = document.querySelector('#subButton')
subButton.addEventListener('click', () => {
    console.log('sub works');
    operationValue = subtract;
})

const divButton = document.querySelector('#divideButton')
divButton.addEventListener('click', () => {
    console.log('div works');
    operationValue = divide;
})

const multiButton = document.querySelector('#multiButton')
multiButton.addEventListener('click', () => {
    console.log('multi works');
    operationValue = multiply;
})

const equalsButton = document.querySelector('.equal')
equalsButton.addEventListener('click', () => {
    const val = operate(operationValue, firstValue, secondValue);
    console.log(val);
    calculatorScreen.value = val

})