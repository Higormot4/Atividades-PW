let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                result = "Erro";
            } else {
                result = prev / curr;
            }
            break;
        default:
            return;
    }

    currentInput = result;
    operation = '';
    previousInput = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput || '0';
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateResult();
}


