// music player body
const musicPlayer = document.querySelector("#container");

// music titles
const title = document.querySelector("#music-title");
const detailTitle = document.querySelector("#music-detail-title");

// music player button
const previous = document.querySelector("#btn-prev");
const play = document.querySelector("#btn-play");
const pause = document.querySelector("#btn-pause");
const next = document.querySelector("#btn-next");

// volume
const volume = document.querySelector("#volume-range");

const audioList = [
  {
    name: "Cafe Regrette",
    author: "Asher Fulero",
    source: "audio/Cafe Regrette - Asher Fulero.mp3",
  },
  {
    name: "King Porter Stomp",
    author: "Joel Cummins",
    source: "audio/King Porter Stomp - Joel Cummins.mp3",
  },
  {
    name: "Modern Attempt",
    author: "TrackTribe",
    source: "audio/Modern Attempt - TrackTribe.mp3",
  },
  {
    name: "Resolve",
    author: "Joel Cummins",
    source: "audio/Resolve - Joel Cummins.mp3",
  },
  {
    name: "Smokey's Lounge",
    author: "TrackTribe",
    source: "audio/Smokey's Lounge - TrackTribe.mp3",
  },
  {
    name: "The Joint is Jumpin",
    author: "Joel Cummins",
    source: "audio/The Joint is Jumpin - Joel Cummins.mp3",
  },
];
// 오브젝트 형태로 audiolist를 저장해야함
const audio = new Audio(audioList);

let isPlaying = true;
let musicIndex = 0;

function loadMusic() {
  audio.src = audioList[musicIndex].source;
  title.innerText = audioList[musicIndex].name;
  detailTitle.innerText = audioList[musicIndex].author;
}

function onPlay() {
  play.classList.add("hidden");
  pause.classList.remove("hidden");

  audio.play();
}

function onPause() {
  play.classList.remove("hidden");
  pause.classList.add("hidden");

  audio.pause();
}

function onMovePrev() {
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = audioList.length - 1;
  }
  loadMusic(audioList[musicIndex]);
  onPlay();
}

function onMoveNext() {
  musicIndex++;
  if (musicIndex > audioList.length - 1) {
    musicIndex = 0;
  }
  loadMusic(audioList[musicIndex]);
  onPlay();
}

window.addEventListener("load", loadMusic);
play.addEventListener("click", onPlay);
pause.addEventListener("click", onPause);
previous.addEventListener("click", onMovePrev);
next.addEventListener("click", onMoveNext);
