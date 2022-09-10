const clockBody = document.querySelector("h1");
const dateBody = document.querySelector("#date");

function date() {
  const today = new Date();

  const arrMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = arrMonth[today.getMonth()];
  const date = JSON.stringify(today.getDate()).padStart(2, "0");
  const day = arrDay[today.getDay()];

  dateBody.innerText = `${month} ${date} ${day}`;
}

function clock() {
  const today = new Date();

  const arrHour = [
    24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const hour = JSON.stringify(arrHour[today.getHours()]).padStart(2, "0");
  const minutes = JSON.stringify(today.getMinutes()).padStart(2, "0");
  const seconds = JSON.stringify(today.getSeconds()).padStart(2, "0");

  clockBody.innerText = `${hour} : ${minutes} : ${seconds}`;
}

date();
clock();
setInterval(clock, 1000);
