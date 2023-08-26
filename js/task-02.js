const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ourUl = document.querySelector('#ingredients');

const newArray = ingredients.map(ingr => {
  const oneOfLi = document.createElement("li");
  oneOfLi.textContent = ingr;
  oneOfLi.classList.add('item');
  return oneOfLi;
});


ourUl.append(...newArray);
// ourUl.insertAdjacentHTML("afterbegin", newArray);
console.log(ourUl);