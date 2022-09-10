const newsBody = document.querySelector("#news-body");
const newsList = document.querySelector("news-list");

const key = "397503b488b44076a5007c715095e1dd";

function showNews() {
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const p = document.createElement("p");

  newsList.appendChild(li);
  li.appendChild(h3);
  li.appendChild(span);
  li.appendChild(p);

  fetch(newsUrl)
    .then((response) => response.json())
    .then((data) => {
      h3.innerText = data.articles[0].title;
      span.innerText = data.articles[0].source;
      p.innerText = data.articles[0].description;
    });
}

window.addEventListener("load", showNews);
