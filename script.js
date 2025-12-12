const startScreen = document.getElementById("start");
const roomScreen = document.getElementById("room");
const startButton = document.getElementById("startButton");
const loginScreen = document.getElementById("login_screen");

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

function checkPassword() {
  const input = document.getElementById("password_input").value;
  const message = document.getElementById("password_message");
  if (input == "0315") {
    showScreen(computerScreen);
  } else {
    message.textContent = "Incorrect Password";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener("click", () => {
    showScreen(roomScreen);
  });
  computer.addEventListener("click", () => {
    showScreen(loginScreen);
  });

  trashcan.addEventListener("click", () => {
    showNote();
  });
});
