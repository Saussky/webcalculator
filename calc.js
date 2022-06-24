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


// make the buttons responsive
const buttons = document.querySelectorAll('input');
// the equals sign runs the operator function
const equals = document.querySelector(".green");
// the display section
const display = document.querySelector("p");

let leftSideEquation = [];
let rightSide = [];
let symbol = '';

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // on every button instead of equals, add the button to an array
        if (button.value == "=" || button.value == "Del"){
        } else {
            leftSideEquation.push(button.value);
            display.innerText = leftSideEquation.join('');
    };
});
});


equals.addEventListener('click', function (e) {
    // loop the array and when it sees the symbol splice it there
    // save the split as a second array
    for (i = 0; i < leftSideEquation.length; i++){
        const element = leftSideEquation[i]
        if(element === "+"|| element === "*"||
        element === "-"||element === "/"){
            rightSide = leftSideEquation.splice(i, leftSideEquation.length);
        }
        
    }
    // join the left side into a string, then turn it into a number
    leftSideEquation = parseInt(leftSideEquation.join(''));
    // the symbol will be second array[0] so take that value out of the second array
    symbol = rightSide.splice(0, 1);
    rightSide = parseInt(rightSide.join(''));

    answer = operate(leftSideEquation, symbol, rightSide).toFixed(2);

    display.innerText = answer;
    // keep the answer so if you want to do further maths you can
    leftSideEquation = [answer];
});

// the clear button
const clear = document.querySelector(".red");
clear.addEventListener('click', () => {
    leftSideEquation = [];
    display.innerText = "___________________";
});


