// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится 
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  body: document.body,
  input: document.createElement("input"),
  btnCreate: document.createElement("button"),
  btnDestroy: document.createElement("button"),
  parentBox: document.createElement("div"),
};
const baseBoxSize = 30;
const addBaseElToDom = () => {
  refs.body.prepend(
    refs.input,
    refs.btnCreate,
    refs.btnDestroy,
    refs.parentBox
  );
  refs.input.type = "number";
  refs.input.min = 0;
  refs.btnCreate.type = "button";
  refs.btnCreate.textContent = "Создать";
  refs.btnDestroy.type = "button";
  refs.btnDestroy.textContent = "Очистить";
};
// генирурует номер цвета
const getRandomColor = () => Math.ceil(Math.random() * 255);
//создает цвет
const genereteRgb = () => {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};
// генерирует размер бокса
const generateBoxSize = (n) => baseBoxSize + (n - 1) * 10;
// создает разметку бокса
const createBoxMarkup = (n) => {
  const color = genereteRgb();
  const markup = `<div style="background-color: ${color}; width: ${generateBoxSize(
    n
  )}px; height: ${generateBoxSize(n)}px" >${n}</div>`;
  return markup;
};
//добавляет боксы в контейнер
const addBoxesToContainer = (n) => {
  let boxesMarkup = "";
  for (let i = 1; i <= n; i++) {
    boxesMarkup += createBoxMarkup(i);
  }
  refs.parentBox.insertAdjacentHTML("beforeend", boxesMarkup);
};
// обработчик создания боксов
const handleCreateBoxes = () => {
  refs.parentBox.innerHTML = "";
  const boxQuntity = refs.input.value;
  addBoxesToContainer(boxQuntity);
};
// обработчик очистки боксов
const handleBoxDestroy = () => {
  refs.parentBox.innerHTML = "";
  refs.input.value = 0;
};
addBaseElToDom();
refs.btnCreate.addEventListener("click", handleCreateBoxes);
refs.btnDestroy.addEventListener("click", handleBoxDestroy);