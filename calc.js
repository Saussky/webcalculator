// Simple maths
const add = ((_a, _b) => _a + _b);

const subtract = ((_a, _b) => _a - _b);

const multiply = ((_a, _b) => _a * _b);

const divide = ((_a, _b) => _a / _b);

// call any of the above functions, just tell it the operator and numbers
function operate( _a, _operator, _b) {
    if (_operator == "+"){
        return add(_a, _b);
    } else if (_operator == "-"){
        return subtract(_a, _b);
    } else if (_operator == "*"){
        return multiply(_a, _b);
    } else if (_operator == "/"){
        return divide(_a, _b);
    }
}

console.log(operate("/", 6, 3));

// make the buttons responsive
const buttons = document.querySelectorAll('input');

let leftSideEquation = [];

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
       //stores the numbers and operators into an array
        leftSideEquation.push(button.value);

        console.log(leftSideEquation);
    });
});

// the equals sign runs the operator function
const equals = document.querySelector(".green");

equals.addEventListener('click', function (e) {
    // sort out the array before calling as arguments/parameters
    firstValue = parseInt(leftSideEquation[0]);
    symbol = leftSideEquation[1];
    secondValue = parseInt(leftSideEquation[2]);

    console.log(operate(firstValue, symbol, secondValue));
    leftSideEquation = [];
});



console.log(operate(1, "+", 3));