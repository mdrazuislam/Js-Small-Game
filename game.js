"use strict";

let secNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function() {

  const guess = Number(document.querySelector(".guess").value);

  //When is there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🔥 No Number!";

    //When Players Win
  } else if (guess === secNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";
    document.querySelector(".number").textContent = secNumber;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector("body").style.color = "white";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is too high value
  } else if (guess > secNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😢 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You have lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    //When guess is too low value

  } else if (guess < secNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😢 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You have lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

});

document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector("body").style.color = "#eee";
})
