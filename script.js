let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlBtn = document.getElementById("ctrlBtn");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrlBtn.classList.contains("ri-pause-line")) {
    song.pause();
    ctrlBtn.classList.add("ri-play-fill");
    ctrlBtn.classList.remove("ri-pause-line");
  } else {
    song.play();
    ctrlBtn.classList.remove("ri-play-fill");
    ctrlBtn.classList.add("ri-pause-line");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlBtn.classList.remove("ri-play-fill");
  ctrlBtn.classList.add("ri-pause-line");
};
function skipBack() {
    song.currentTime -= 10;
}
function skipForward() {
    song.currentTime += 10;
}
