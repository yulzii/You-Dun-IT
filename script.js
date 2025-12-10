const startScreen = document.getElementById("start");
const roomScreen = document.getElementById("room");
const startButton = document.getElementById("startButton");
function showScreen(screen) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener("click", () => {
    showScreen(roomScreen);
  });
});
