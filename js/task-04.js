
// -------------------- лічильник
const btnMinuseOne = document.querySelector('button[data-action="decrement"]');


const btnPlusOne = document.querySelector('button[data-action="increment"]');



let valueOf = document.querySelector('#value');

let counterValue = 0;


btnMinuseOne.addEventListener('click', () => {
    counterValue -= 1;
    valueOf.textContent = counterValue;
});

btnPlusOne.addEventListener('click', () => {
    counterValue += 1;
    valueOf.textContent = counterValue;
});

console.log(btnMinuseOne.dataset.action);
console.log(btnPlusOne.dataset.action);