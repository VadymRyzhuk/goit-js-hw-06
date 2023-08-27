const inputUserName = document.querySelector('#name-input');
let spanOutput = document.querySelector('#name-output');

inputUserName.addEventListener('input', changeInput);


function changeInput(event) {
    const inputValue = event.currentTarget.value;
    spanOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}