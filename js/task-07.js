// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при 
// перетаскивании ползунка будет меняться размер текста.

let size = document.getElementById('font-size-control');
size.value = 16;
function sizeText(elt) {
    const text = document.getElementById('text');
    text.style.fontSize = elt.currentTarget.value + "px";
}
   
size.addEventListener('input', sizeText);

