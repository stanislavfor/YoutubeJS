'use strict';
// Начальная строчка блока
document.addEventListener('DOMContentLoaded', () => {

    // Экранная клавиатура
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '' : '50%';
        };

        const changeLang = (btn, lang) => {
            const langRu = [
              'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
              'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
              'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
              'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
              'en', ' '
            ];
            const langEn = [
              '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
              'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
              'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
              'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
              'ru', ' '
            ];

            if (lang === 'en') {
                btn.forEach((elem, i) => {
                    elem.textContent = langEn[i];

                })
            } else {
                btn.forEach((elem, i) => {
                    elem.textContent = langRu[i];
                })
            }
        }

        const typing = event => {
            const target = event.target;

            if (target.tagName.toLowerCase() === 'button') {
                const buttons = [...keyboard.querySelectorAll('button')]
                    .filter(elem => elem.style.visibility !== 'hidden');
                console.dir(buttons);
                const contentButton = target.textContent.trim();
                if (contentButton === '⬅') {
                    searchInput.value = searchInput.value.slice(0, -1);
                } else if (!contentButton) {
                    searchInput.value += ' ';
                } else if (contentButton === 'en' ||
                    contentButton === 'ru') {
                    changeLang(buttons, contentButton)
                } else {
                    searchInput.value += contentButton;
                }
            }
        }
        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);
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

    // Модальное окно

    {
        document.body.insertAdjacentHTML('beforeend', `
                <div class='youTuberModal'>
                  <div id='youtuberClose'>&#215;</div>
                  <div id='youtuberContainer'></div>
                </div>
  `);

        const youtuberItems = document.querySelectorAll('[data-youtuber]'); //data-set
        const youTuberModal = document.querySelector('.youTuberModal');
        const youtuberContainer = document.getElementById('youtuberContainer');

        const qw = [3840, 2560, 1920, 1280, 854, 640, 426, 256];
        const qh = [2160, 1440, 1080, 720, 480, 360, 240, 144];

        const sizeVideo = () => {
            let ww = document.documentElement.clientWidth;
            let wh = document.documentElement.clientHeight;
            console.log(ww);

            for (let i = 0; i < qw.length; i++) {
                if (ww > qw[i]) {
                    youtuberContainer.querySelector('iframe').style.cssText = `
          width: ${qw[i]}px;
          height: ${qh[i]}px;
        `;
                    youtuberContainer.style.cssText = `
          width: ${qw[i]}px;
          height: ${qh[i]}px;
          top: ${(wh - qh[i]) / 2}px;
          left: ${(ww - qw[i]) / 2}px;
        `;
                    break;
                }
            }
        }


        youtuberItems.forEach(elem => {
            elem.addEventListener('click', () => {
                const idVideo = elem.dataset.youtuber;
                youTuberModal.style.display = 'block';

                const youtuberFrame = document.createElement('iframe');
                youtuberFrame.src = `https://youtube.com/embed/${idVideo}`;
                youtuberContainer.insertAdjacentElement('beforeend', youtuberFrame);

                window.addEventListener('resize', sizeVideo);
                sizeVideo();

            })
        })

        youTuberModal.addEventListener('click', () => {
            youtuberContainer.textContent = '';
            youTuberModal.style.display = '';
            window.removeEventListener('resize', sizeVideo);
        });
    }

    // Youtube API
    {
      const API_KEY = 'AIzaSyAnCLWkC2mdLUjYIHkLwowpylsK22eF0Pw';
      const CLIENT_ID = '444254048818-ftqg384f68m5quk25dbgmejsqch8ao0c.apps.googleusercontent.com';

    }


// Последняя строчка блока
});
// Последняя строчка блока