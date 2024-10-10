console.log('linked');
const numberEl = document.querySelector('.numbers')
const timerEl = document.querySelector('.timer')


let numbers = '';
for (let i = 0; i < 5; i++) {
  numbers += Math.floor((Math.random() * 5) + 1) + ' ';
}

numberEl.innerHTML = `<h1>${numbers}</h1>`;