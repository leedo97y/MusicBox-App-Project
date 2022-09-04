const clockBody = document.querySelector("h1");

function clock() {
  const today = new Date();

  const hour = JSON.stringify(today.getHours()).padStart(2, "0");
  const minutes = JSON.stringify(today.getMinutes()).padStart(2, "0");
  const seconds = JSON.stringify(today.getSeconds()).padStart(2, "0");
  clockBody.innerText = `${hour} : ${minutes} : ${seconds}`;
}

clock();
setInterval(clock, 1000);
