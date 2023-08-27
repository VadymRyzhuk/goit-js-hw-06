const inputForSymbols = document.querySelector('#validation-input');


const handler = event => {
    const inputValue = event.currentTarget.value.length;
    if (inputValue === Number(inputForSymbols.dataset.length)) {
        inputForSymbols.classList.remove('invalid');
        inputForSymbols.classList.add('valid');
    } else {
        inputForSymbols.classList.add('invalid');
        inputForSymbols.classList.remove('valid');
        }
}

inputForSymbols.addEventListener('blur', handler);