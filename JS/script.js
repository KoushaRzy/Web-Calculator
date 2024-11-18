const display = document.getElementById('display');

const buttons = document.querySelectorAll('#btn');

let currentInput = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            result = '';
            display.textContent = '';
        }

        else if (value === '=') {
            try {
                result = eval(currentInput);
                display.textContent = result;
                currentInput = result;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        }

        else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
