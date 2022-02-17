const display = document.querySelector("#MyClockDisplay");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amOrPm = "";
  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  if (hour < 12 && hour >= 0) {
    amOrPm = " AM";
  } else {
    amOrPm = " PM";
  }

  let time = hour + ":" + minute + ":" + second + amOrPm;

  display.innerText = time;
}

setInterval(showTime, 1000);
