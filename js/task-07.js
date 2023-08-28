const controler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controler.addEventListener("input", handler);

function handler (event) {
    const fontSize = event.currentTarget.value + 'px';
    text.style.fontSize = fontSize;
};

