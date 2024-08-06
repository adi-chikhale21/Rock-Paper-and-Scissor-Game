let userScore = 0;
let compScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  let choices = document.querySelectorAll(".choice");
  let msg = document.querySelector(".msg");

  function computerChoose() {
    const choices = ["rock", "paper", "scissor"];
    const randomId = Math.floor(Math.random() * 3);
    return choices[randomId];
  }

  function result(userWin, userChoice, computerChoice) {
    let userScorecard = document.querySelector(".user-score-card");
    let compScorecard = document.querySelector(".comp-score-card");
    if (userWin) {
      msg.innerText = "Congratulation You won";
      msg.style.backgroundColor = "green";
      userScore++;
      userScorecard.innerText = userScore;
    } else {
      msg.innerText = "You Lose";
      msg.style.backgroundColor = "red";
      compScore++;
      compScorecard.innerText = compScore;
    }
  }

  const playgame = (userChoice) => {
    const computerChoice = computerChoose();

    if (computerChoice === userChoice) {
      msg.innerText = "Draw game! Try again";
      msg.style.backgroundColor = "#212121";

      return;
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = computerChoice === "scissor" ? true : false;
      } else if (userChoice === "paper") {
        userWin = computerChoice === "rock" ? true : false;
      } else {
        userWin = computerChoice === "paper" ? true : false;
      }

      result(userWin, userChoice, computerChoice);
    }
  };

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const choiceId = choice.getAttribute("id");
      playgame(choiceId);
    });
  });
});
