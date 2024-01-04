let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlBtn = document.getElementById("ctrlBtn");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
