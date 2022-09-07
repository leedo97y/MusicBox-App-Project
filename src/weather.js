const API_KEY = "c085c85ef7adac74dca0cca6afe4cb80";

const icon = document.querySelector("#weather-icon");
const degree = document.querySelector("#degree");
const city = document.querySelector("#city");
const rain = document.querySelector("#rain-humidity");
const minMax = document.querySelector("#minMax");

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
    });
}

function getGeoError() {
  alert("error!");
}

navigator.geolocation.getCurrentPosition(getGeo, getGeoError);
