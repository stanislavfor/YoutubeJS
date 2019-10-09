'use strict';
document.addEventListener('DOMContentLoaded', () => {

    // Экранная клавиатура
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector(".search-form__input");

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '' : '50%';
        };

        const typing = event => {
            const target = event.target;

            if (target.tagName.toLowerCase() === "button") {
                const buttons = [...keyboard.querySelectorAll("button")]
                    .filter(elem => elem.style.visibility !== "hidden");
                console.dir(buttons);
                const contentButton = target.textContent.trim();
                if (contentButton === "⬅") {
                    searchInput.value = searchInput.value.slice(0, -1);
                } else if (!contentButton) {
                    searchInput.value += " ";
                } else if (contentButton === "en" ||
                    contentButton === "ru") {
                    changeLang(buttons, contentButton)
                } else {
                    searchInput.value += contentButton;
                }
            }
        }
        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener("click", typing);
    }


    // Меню
    {

        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });

        sidebarMenu.addEventListener('click', e => {
            let target = e.target;
            target = target.closest('a[href="#"]');

            if (target) {
                const parentTarget = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach(elem => {
                    if (elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                })
            }
        })
    }





});