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
const volume = document.querySelector("#volume");
const mute = document.querySelector("#mute");

// playlist
const playlist = document.querySelector("#playlist");

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
  {
    name: "Forest Lullabye",
    author: "Asher Fulero",
    source: "audio/Forest Lullabye - Asher Fulero.mp3",
  },
  {
    name: "Outlaw's Farewell",
    author: "Reed Mathis",
    source: "audio/Outlaw's Farewell - Reed Mathis.mp3",
  },
  {
    name: "Clean and Dance",
    author: "An Jone",
    source: "audio/Clean and Dance - An Jone.mp3",
  },
];

const audio = new Audio(audioList);

// let isPlaying = true;
let musicIndex = 0;

function loadMusic() {
  audio.src = audioList[musicIndex].source;
  title.innerText = audioList[musicIndex].name;
  detailTitle.innerText = audioList[musicIndex].author;
}

const ul = document.createElement("ul");

function getPlaylist() {
  audioList.forEach((music) => {
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    const li = document.createElement("li");

    li.classList.add("playlist-song");
    h4.innerText = music.name;
    span.innerText = music.author;

    li.append(h4);
    li.append(span);
    ul.append(li);

    const onPlayMusic = () => {
      audio.src = music.source;
      title.innerText = music.name;
      detailTitle.innerText = music.author;

      play.classList.add("hidden");
      pause.classList.remove("hidden");
      audio.play();
    };
    const onPauseMusic = () => {
      play.classList.remove("hidden");
      pause.classList.add("hidden");
      audio.pause();
    };

    li.addEventListener("click", onPlayMusic);
    pause.addEventListener("click", onPauseMusic);
  });
  playlist.append(ul);
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

function onClickMute() {
  mute.classList.add("hidden");
  volume.classList.remove("hidden");
  audio.volume = 0;
}

function onClickVolume() {
  mute.classList.remove("hidden");
  volume.classList.add("hidden");
  audio.volume = 1;
}

window.addEventListener("load", loadMusic);
play.addEventListener("click", onPlay);
pause.addEventListener("click", onPause);
previous.addEventListener("click", onMovePrev);
next.addEventListener("click", onMoveNext);

volume.addEventListener("click", onClickVolume);
mute.addEventListener("click", onClickMute);

getPlaylist();
