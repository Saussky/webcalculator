// Simple maths
const add = ((_a, _b) => _a + _b);

const subtract = ((_a, _b) => _a + _b);

const multiply = ((_a, _b) => _a * _b);

const divide = ((_a, _b) => _a / _b);


function operate(_operator, _a, _b) {
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