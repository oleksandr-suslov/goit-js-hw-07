// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
    
    const btnDecrement = document.querySelector('div#counter > button[data-action="decrement"]');
    const btnIncrement = document.querySelector('div#counter > button[data-action="increment"]');
    const value = document.querySelector('#value');
    
    
    let counterValue = 0;
    
    function makeClickBtnDecrement() {
        counterValue -= 1;
       value.textContent = counterValue;
    }

    function makeClickBtnIncrement() {
        counterValue += 1;
      value.textContent = counterValue;
    }

    btnDecrement.addEventListener('click', makeClickBtnDecrement);
    btnIncrement.addEventListener('click', makeClickBtnIncrement);

