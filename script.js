// Get classes for minute, second and hour
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Have a function get exact time in intervals of 1000
function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const mintueDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  // Rotate hands depending what time it is in real time.
  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${mintueDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
