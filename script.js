const startScreen = document.getElementById("start");
const roomScreen = document.getElementById("room");
const startButton = document.getElementById("startButton");
const computerScreen = document.getElementById("computer_screen");
const computer = document.getElementById("computer");
const trashcan = document.getElementById("trashcan");
const note = document.getElementById("note");

function showScreen(screen) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}

function showNote() {
  // note.style.display = block;
  if (note.classList.contains("active")) {
    note.classList.remove("active");
  } else {
    note.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener("click", () => {
    showScreen(roomScreen);
  });
  computer.addEventListener("click", () => {
    showScreen(computerScreen);
  });

  trashcan.addEventListener("click", () => {
    showNote();
  });
});
