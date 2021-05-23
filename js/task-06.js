// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
// на правильное количество символов.
// {/* <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// /> */}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', changeCountSimbol)

const toggleClass=(prev,next,node)=>{
    node.classList.remove(prev);
    node.classList.add(next);
}

function changeCountSimbol(event){
    const inputLength=event.currentTarget.value.length;
    const dataLength=event.currentTarget.attributes["data-length"].nodeValue;
    inputLength === Number(dataLength)?
        toggleClass('invalid','valid',input) :
        toggleClass('valid','invalid',input)
}
