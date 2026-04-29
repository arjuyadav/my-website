const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
let randomWord;
let score = 0;
let time = prompt("Time in Minuts: ") * 60;

if (time == 0) {
  alert("Your ans is wrong plese try agen");
  time = prompt("Your ans is wrong plese try agen in min") * 60;
  if (time == 0) {
    time = 12;
  }
}
else if (isNaN(time) || time == "" || time < 10) {
  time = prompt("Your ans is wrong plese try agen in min") * 60;
  if (isNaN(time) || time < 10 || time == "") {
    time = 10;
  }
}
else if(time > 999*60){
  time = 999*60;
  alert("Sorry! You can't do this. maximum minutes support only 9999")
}
len = time;
const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.ceil(Math.random() * words.length) - 1];
}

function addWordToDom() {
  randomWord = getRandomWord();
  if (word.innerText == "undefined" || randomWord == "undefined") {
    randomWord = getRandomWord()
    randomWord = getRandomWord()
  }
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = len + "s /" + time + "s";
  if (time <= 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  let wpm = parseInt(score * len / 100);
  let words = len / score;
  let wordinsec = words.toPrecision().slice(0, 6);
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score} words in ${len} Seconds | ${wpm}WPM</p>
    <p>One Words Type in: ${wordinsec}s</p>
    <button onclick="history.go(0)">Play Again</button>
  `;
  if (parseFloat(wordinsec) <= 3) {
    endgameElement.style.background = "green";
    endgameElement.style.color = "white";
  }
  else if (parseFloat(wordinsec) <= 4) {
    endgameElement.style.background = "aqua";
    endgameElement.style.color = "black";
  }
  else if (parseFloat(wordinsec) <= 6) {
    endgameElement.style.background = "blue";
    endgameElement.style.color = "white";
  }
  else if (parseFloat(wordinsec) <= 7) {
    endgameElement.style.background = "burlywood";
    endgameElement.style.color = "black";
  }
  else if (parseFloat(wordinsec) <= 9) {
    endgameElement.style.background = "yellow";
    endgameElement.style.color = "black";
  }
  else {
    endgameElement.style.background = "red";
    endgameElement.style.color = "white";
  }
  endgameElement.style.display = "flex";
  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      history.go(0)
    }
  });
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    updateTime();
  }
});
addWordToDom();
text.focus();