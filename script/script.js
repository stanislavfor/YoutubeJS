'use strict';
document.addEventListener('DOMContentLoaded', () => {

  // Экранная клавиатура
  {
    const keyboardButton = document.querySelector('.search-form__keyboard');
    const keyboard = document.querySelector('.keyboard');
    const closeKeyboard = document.getElementById('close-keyboard');

    const toggleKeyboard = () => {
      keyboard.style.top = keyboard.style.top ? '' : '50%';
    };
    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
      //проверяем наличие свойств
      //console.dir(keyboard);
      //Запись if-else в тернарном операторе
      //keyboard.style.top = keyboard.style.top ? '' : '50%';      
  }

});