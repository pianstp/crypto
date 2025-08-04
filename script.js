const video = document.getElementById("myVideo");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

// Show full duration once metadata is loaded
video.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(video.duration);
});

// Update current time every second
video.addEventListener("timeupdate", () => {
  currentTimeDisplay.textContent = formatTime(video.currentTime);
});

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}
