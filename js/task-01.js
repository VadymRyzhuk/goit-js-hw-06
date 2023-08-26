const ulItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulItems.length}`);



ulItems.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
   
} )
