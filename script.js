let userScore = 0;
let compScore = 0;
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice = () => {
  const options = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const drawGame = () => {
  // console.log("game was draw.");
  msg.innerText="Its a Draw, Play again!"
  msg.style.backgroundColor="#081b31"

};
const showWinnner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText=userScore
    // console.log("You Win");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green";

  } else {
    compScore++;
    compScorepara.innerText=compScore;
    // console.log("You Lose");
    msg.innerText=`You Lose!  ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="red";


  }
};
const playGame = (userChoice) => {
  // console.log("userChoice =", userChoice);
  const compChoice = genCompChoice();
  // console.log("compChoice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinnner(userWin,userChoice,compChoice);

  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
