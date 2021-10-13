const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];
const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
    'saturday',
];
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
let futureDate = new Date(2021, 9, 28, 2, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = days[day]
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on  ${day}, ${month}  ${date}  ${year} ${hours}:${minutes} pm`;
//Calculation of Time
const futureTime = futureDate.getTime();
//format of date
function format(items) {
    if (items < 10) {
        return items = `0${items}`
    }
    else {
        return items
    }
}
function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureDate - today;
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMin = 60 * 1000
    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour);
    let mins = Math.floor((t % oneHour) / oneMin);
    let seconds = Math.floor((t % oneMin) / 1000);

    //set values arrays:
    const values = [days, hours, mins, seconds];


    items.forEach(function (item, index) {
        item.innerHTML = format(values[index])
    });

};
let countdown=setInterval(getRemainingTime,1000)
getRemainingTime();

