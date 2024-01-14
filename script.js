let userScore = 0;
let compScore = 0;
let winner= false;
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msg1=document.querySelector("#msg1")
const genCompChoice = () => {
  const options = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const drawGame = () => {
  // console.log("game was draw.");
  msg.innerText = "Its a Draw, Play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinnner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    // console.log("You Win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    // console.log("You Lose");
    msg.innerText = `You Lose!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
function hide() {
  document.getElementById('msg').style.display='none';
}
const declareWinner = (userScore, compScore) => {
  if (userScore === 5) {
    // userScorepara.innerText=userScore
    // console.log("You Win");
    msg1.innerText = `Congratulations😍 You Defeated Comp`;
    msg1.style.backgroundColor = "green";
    winner= true;
    hide();
  } else if (compScore === 5) {
    msg1.innerText = `You Lost😶‍🌫️ Comp defeated you`;
    msg1.style.backgroundColor = "red";
    winner= true;
    hide();
  } else if(userScore===5 && compScore===5) {
    msg1.innerText = "the match is draw";
    msg1.style.backgroundColor = "#081b31";
    winner= true;
    hide();
  }
  else{

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
    showWinnner(userWin, userChoice, compChoice);
  }
  declareWinner(userScore,compScore)
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    if(!winner){
    playGame(userChoice);
    }
  });
});
