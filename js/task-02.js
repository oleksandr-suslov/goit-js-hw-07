// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания 
// DOM - узлов используй document.createElement().

const itemsList = document.querySelector('ul#ingredients');

const makeElement = arr => {
    return arr.map(item => {
        const itemEl = document.createElement('li')
        itemEl.textContent = item;

        return itemEl;
    })
}
  
const elements = makeElement(ingredients)

 itemsList.append(...elements);






