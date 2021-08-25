"use strict";

const btnCheck = document.querySelector(".check");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "🔴 No Number Found!";
    displayMessage("🔴 No Number Found!");
  }

  //when wins the game
  else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#7832cf";
    document.querySelector(".number").textContent === guess;
    displayMessage("Congratulations, You Won! 🏆🎉");

    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").style.width = "30rem";

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //When guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("To high! 📈")
        : displayMessage("To low! 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 💥");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#eb212a";
    }
  }
});

//Play Again
const btnAgain = document.querySelector(".again");

btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
