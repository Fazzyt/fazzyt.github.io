const phrases = [
  'Ты уверен?',
  'Точно уверен?',
  'Подумай еще раз',
  'Последний шанс!',
  'Неужели нет?',
  'Ты можешь пожалеть об этом',
  'Не торопись, подумай еще',
  'Ты абсолютно в этом уверен?',
  'Это может стать ошибкой',
  'Может ты передумаешь?',
  'Это твой конечный ответ?',
];

const btns = document.querySelector('.buttons');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const img = document.querySelector('img');
const text = document.querySelector('.text');

yes.addEventListener('click', (event) => {
  if (event.target) {
    btns.style.display = 'none';
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KOxq-Ws1H8toGuQOmnM_rnCdwg5mxbTJ3w&s';
    img.style.cssText += `width: 500px`;
    text.innerText = 'Уро';

    if (window.innerWidth > 768) {
      img.style.cssText += `width: 500px`;
    } else {
      img.style.cssText += `
        width: 250px;
        margin-top: 200px;
      `;
    }
  }
});

let i = 0;
let scale1 = 1;
let scale2 = 1;
let margin = 0;

no.addEventListener('click', (event) => {
  if (event.target) {
    no.innerText = phrases[i];
    i++;

    scale1 -= 0.05;
    scale2 += 0.05;
    margin += 5;

    no.style.transform = `scale(${scale1})`;
    yes.style.cssText += `
        transform: scale(${scale2});
        margin-left: ${margin}px;
    `;

    if (i === phrases.length) i = 0;
  }
});
