const API_KEY = "c085c85ef7adac74dca0cca6afe4cb80";

const weatherBody = document.querySelector("#weather-body");

const icon = document.querySelector("#weather-icon");
const degree = document.querySelector("#degree");
const city = document.querySelector("#city");
const rain = document.querySelector("#rain-humidity");
const minMax = document.querySelector("#minMax");

function backgroundChange() {
  const today = new Date();
  const hour = today.getHours();

  const background = ["day.jpg", "sunset.jpg", "night.jpg"];

  if (hour >= 6 && hour <= 16) {
    weatherBody.style.backgroundImage = `url("img/${background[0]}")`;
  } else if (hour > 16 && hour <= 19) {
    weatherBody.style.backgroundImage = `url("img/${background[1]}")`;
  } else if (hour > 19 || hour < 6) {
    weatherBody.style.backgroundImage = `url("img/${background[2]}")`;
    weatherBody.style.color = "white";
  }
}

backgroundChange();

function getGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=Metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const iconStr = data.weather[0].icon;
      const ICON_URL = `http://openweathermap.org/img/wn/${iconStr}@2x.png`;
      icon.innerHTML = `<img src="${ICON_URL}" />`;
      degree.innerText = `${Math.floor(data.main.temp)}°`;
      city.innerText = data.name;
      rain.innerText = `clouds ${data.clouds.all}%  •  humidity ${data.main.humidity}%`;
      minMax.innerText = `min ${parseInt(data.main.temp_min)}° / max ${parseInt(
        data.main.temp_max
      )}°`;
      if (city.innerText.length <= 9) {
        city.style.width = "140px";
      }

      const bgWeather = ["rainy.jpg", "thunderstorm.jpg", "snow.jpg"];

      const desc = data.weather[0].description;
      if (desc === "shower rain" || desc === "rain") {
        weatherBody.style.backgroundImage = `url("img/${bgWeather[0]}")`;
      }
      if (desc === "thunderstorm") {
        weatherBody.style.backgroundImage = `url("img/${bgWeather[1]}")`;
      }
      if (desc === "snow") {
        weatherBody.style.backgroundImage = `url("img/${bgWeather[2]}")`;
      }
    });
}

function getGeoError() {
  alert("error!");
}

navigator.geolocation.getCurrentPosition(getGeo, getGeoError);
