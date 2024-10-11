console.log('linked');


const numberEl = document.querySelector('.numbers');
const inputEl = document.querySelectorAll('.input-number');
const inputs_containerEl = document.querySelector('.inputs_container');
const timerEl = document.querySelector('.timer');
const checkEl = document.querySelector('.btn')

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor((Math.random() * 100) + 1));
}

numberEl.innerHTML = `<h1>${numbers.join(' - ')}</h1>`;

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


checkEl.addEventListener('click', function() {
    let user_numbers = [];
    for (let i = 0; i < inputEl.length; i++) {
        user_numbers.push(parseInt(inputEl[i].value));
    }

    let correct_numbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (user_numbers.includes(numbers[i])) {
            correct_numbers.push(numbers[i]);
        }
    }
    inputs_containerEl.style.display = 'none';
    let message = `Hai indovinato ${correct_numbers.length} numeri` 
    let guessed = `${correct_numbers.join(' - ')}`;
   
    document.querySelector('.guessed').innerHTML =  `<h2>${guessed}</h2>`;
    document.querySelector('.message').innerHTML =  `<h2>${message}</h2>`;
    
});