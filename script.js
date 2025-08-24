const video = document.getElementById("myVideo");
const toggleBtn = document.querySelector(".toggleBtn");
const playIcon = document.querySelector(".playIcon");
const pauseIcon = document.querySelector(".pauseIcon");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Format time helper
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}

// Load duration when metadata is ready
video.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(video.duration);
});

// Update current time as video plays
video.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(video.currentTime);
});

// Toggle play/pause
toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.style.display = "none"; // hide play
    pauseIcon.style.display = "block"; // show pause
  } else {
    video.pause();
    pauseIcon.style.display = "none"; // hide pause
    playIcon.style.display = "block"; // show play
  }
});

// Reset to play icon when video ends
video.addEventListener("ended", () => {
  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
});
