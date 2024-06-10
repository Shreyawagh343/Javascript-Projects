let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.getElementById("msg");
const uScore = document.getElementById("user-score");
const cScore = document.getElementById("comp-score");

const getcompChoice = ()=>{
  let option = [ "rock","paper","scissor"];
  let randomnumber= Math.floor(Math.random()*3);
  return option[randomnumber];
}

const showWinner =(userWin)=>{
  if(userWin){
    userScore++;
    uScore.innerText=userScore;
    msg.innerText="Congrulation You Win!!";
    msg.style.backgroundColor="green";
  }
  else {
    compScore++;
    cScore.innerText=compScoreScore;
    msg.innerText="You Loss";
    msg.style.backgroundColor="red";
  }
}
const drawGame =()=>{
  msg.innerText="Game was Draw! Try Again";
  msg.style.backgroundColor="yellow";
  msg.style.color="black";
}
const playGame = (userChoice)=>{
  console.log("user choice",userChoice);
  const compChoice = getcompChoice();
  console.log("Computer choice",compChoice);

  if(userChoice === compChoice){
   drawGame();
  }
  else {
    let userWin = true;
    if(userChoice="rock"){
     userWin= compChoice ==="paper"?false : true;
    }
    else if (userChoice==="paper"){
      userWin= compChoice ==="scissor"?false :true;
    }
    else {
      userWin= compChoice ==="rock"?false :true;
    }
    showWinner(userWin)
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice)
  });
});