const body = document.body;
const cBody = document.querySelector("#clock");

const lightModeBtn = document.querySelector("#btn-mode");
const nightModeBtn = document.querySelector("#btn-night");

function onLightMode() {
  nightModeBtn.classList.remove("hidden");
  lightModeBtn.classList.add("hidden");
  body.style.backgroundImage = `url("img/whiteMode.jpg")`;
  cBody.style.color = "black";
}

function onNightMode() {
  lightModeBtn.classList.remove("hidden");
  nightModeBtn.classList.add("hidden");
  body.style.backgroundImage = `url("img/darkMode.jpg")`;
  cBody.style.color = "white";
}

lightModeBtn.addEventListener("click", onLightMode);
nightModeBtn.addEventListener("click", onNightMode);
