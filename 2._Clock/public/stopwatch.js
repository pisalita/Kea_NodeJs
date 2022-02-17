const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let hours = 0,
  minutes = 0,
  seconds = 0;

let stopwatch;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopwatch = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    if (hours <= 9) hoursSpan.innerText = "0" + hours + " : ";
    else hoursSpan.innerText = hours + " : ";
    if (minutes <= 9) minutesSpan.innerText = "0" + minutes + " : ";
    else minutesSpan.innerText = minutes + " : ";
    if (seconds <= 9) secondsSpan.innerText = "0" + seconds;
    else secondsSpan.innerText = seconds;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopwatch);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  secondsSpan.innerText = "00";
  minutesSpan.innerText = "00 : ";
  hoursSpan.innerText = "00 : ";
  startBtn.disabled = false;

  hours = 0;
  minutes = 0;
  seconds = 0;
});
