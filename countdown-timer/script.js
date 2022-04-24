const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minsElements = document.querySelector("#mins");
const secsElements = document.querySelector("#seconds");

const newYears = "1 January 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalMiliSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalMiliSeconds / 3600 / 24);
    const hours = Math.floor(totalMiliSeconds / 3600) % 24;
    const minutes = Math.floor(totalMiliSeconds / 60) % 60; 
    const seconds = Math.floor(totalMiliSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElements.innerHTML = formatOfTIme(minutes);
    secsElements.innerHTML = formatOfTIme(seconds);

}

function formatOfTIme(time) {   
    return time < 10 ? `0${time}` : time;
}   

countdown();

setInterval(countdown, 1000);