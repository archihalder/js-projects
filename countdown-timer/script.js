const sec = document.querySelector("#sec .num");
const min = document.querySelector("#min .num");
const hour = document.querySelector("#hour .num");
const day = document.querySelector("#day .num");

const secText = document.querySelector("#sec .text");
const minText = document.querySelector("#min .text");
const hourText = document.querySelector("#hour .text");
const dayText = document.querySelector("#day .text");

const currYear = new Date().getFullYear();
const nextYear = new Date(`01 January ${currYear + 1}`);

function timer() {
    const currDate = new Date();
    const nextYearDate = new Date(nextYear);

    const totalSeconds = (nextYearDate - currDate) / 1000;

    const newSec = formatTime(Math.floor(totalSeconds % 60));
    const newMin = formatTime(Math.floor(totalSeconds / 60) % 60);
    const newHour = formatTime(Math.floor(totalSeconds / 3600) % 24);
    const newDay = formatTime(Math.floor(totalSeconds / 3600 / 24));

    sec.innerHTML = newSec;
    min.innerHTML = newMin;
    hour.innerHTML = newHour;
    day.innerHTML = newDay;

    secText.innerHTML = formatText(newSec, 'second');
    minText.innerHTML = formatText(newMin, 'minute');
    hourText.innerHTML = formatText(newHour, 'hour');
    dayText.innerHTML = formatText(newDay, 'day');
}

function formatTime(num) {
    return (num < 10) ? "0" + num : num;
}

function formatText(num, text) {
    return (num == 1) ? text : text + 's';
}

setInterval(timer, 1000);
