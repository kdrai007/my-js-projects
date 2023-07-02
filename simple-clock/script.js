const hourArrow = document.querySelector('.hour-hand');
const minuteArrow = document.querySelector('.minute-hand');
const secondArrow = document.querySelector('.second-hand');

function updateClock() {
  const currentTime = new Date();
  const Hour = currentTime.getHours();
  const Minute = currentTime.getMinutes();
  const Second = currentTime.getSeconds();

  let HourRotation = 30 * Hour + 0.5 * Minute;
  let MinuteRotation = 6 * Minute;
  let SecondRotation = 6 * Second;

  hourArrow.style.transform = `rotate(${HourRotation}deg)`;
  minuteArrow.style.transform = `rotate(${MinuteRotation}deg)`;
  secondArrow.style.transform = `rotate(${SecondRotation}deg)`;
}
setInterval(updateClock, 1000);
