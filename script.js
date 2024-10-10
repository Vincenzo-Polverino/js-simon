console.log('linked');


const numberEl = document.querySelector('.numbers');
const inputEl = document.querySelectorAll('.input-number');
const inputs_containerEl = document.querySelector('.inputs_container');
const timerEl = document.querySelector('.timer');
const checkEl = document.querySelector('.btn')

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor((Math.random() * 5) + 1));
}

numberEl.innerHTML = `<h1>${numbers.join(' ')}</h1>`;

let time_left = 30;
timerEl.innerHTML = `<h1>${time_left}</h1>`;

function countdown() {
    time_left--;
    timerEl.innerHTML = `<h1>${time_left}</h1>`;
    if (time_left <= 0) {
        clearInterval(clock);
        numberEl.style.display = 'none';
        inputs_containerEl.style.display = 'flex';
        timerEl.style.display = 'none';
    }
}

const clock = setInterval(countdown, 1000); 
