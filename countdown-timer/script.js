const sec = document.querySelector("#sec .num");
const min = document.querySelector("#min .num");
const hour = document.querySelector("#hour .num");
const day = document.querySelector("#day .num");

const currYear = new Date().getFullYear();
const nextYear = new Date(`01 January ${currYear + 1}`);

function timer() {
    const currDate = new Date();
    const nextYearDate = new Date(nextYear);

    const totalSeconds = (nextYearDate - currDate) / 1000;

    sec.innerHTML = formatTime(Math.floor(totalSeconds % 60));
    min.innerHTML = formatTime(Math.floor(totalSeconds / 60) % 60);
    hour.innerHTML = formatTime(Math.floor(totalSeconds / 3600) % 24);
    day.innerHTML = formatTime(Math.floor(totalSeconds / 3600 / 24));
}

function formatTime(num) {
    return (num < 10) ? "0" + num : num;
}

setInterval(timer, 1000);
