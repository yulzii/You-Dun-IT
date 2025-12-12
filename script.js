const startScreen = document.getElementById("start");
const roomScreen = document.getElementById("room");
const startButton = document.getElementById("startButton");
const loginScreen = document.getElementById("login_screen");

const computerScreen = document.getElementById("computer_screen");
const computer = document.getElementById("computer");
const trashcan = document.getElementById("trashcan");
const note = document.getElementById("note");
const profilePic = document.getElementById("yvonne_framed");
const flippedFrame = document.getElementById("flipped_frame");
const remoteDesktopPopUp = document.getElementById("window");
const remoteDesktopIcon = document.getElementById("remote_desktop_icon");
const closeRemoteDesktopButton = document.getElementById(
  "close_remote_desktop"
);
const userWindow = document.getElementById("users_window");
const users = document.getElementById("users");
const tad = document.getElementById("tad");
const rdClue = document.getElementById("rd_clue");

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

function flipFrame(id) {
  if (id === 0) {
    flippedFrame.style.display = "block";
  } else {
    flippedFrame.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  flippedFrame.style.display = "none";
  userWindow.style.display = "none";
  remoteDesktopPopUp.style.display = "none";

  startButton.addEventListener("click", () => {
    showScreen(roomScreen);
  });
  computer.addEventListener("click", () => {
    showScreen(loginScreen);
  });

  trashcan.addEventListener("click", () => {
    showNote();
  });

  profilePic.addEventListener("click", () => {
    flipFrame(0);
  });

  flippedFrame.addEventListener("click", () => {
    flipFrame(1);
  });

  remoteDesktopIcon.addEventListener("click", () => {
    remoteDesktopPopUp.style.display = "block";
  });

  closeRemoteDesktopButton.addEventListener("click", () => {
    remoteDesktopPopUp.style.display = "none";
  });
  users.addEventListener("click", () => {
    userWindow.style.display = "block";

    rdClue.classList.add("hidden");
  });
  tad.addEventListener("click", (e) => {
    userWindow.style.display = "block";
    e.stopPropagation();
    rdClue.classList.remove("hidden");
  });
});
