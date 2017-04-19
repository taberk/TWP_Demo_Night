


document.querySelector("#RSPprompt").addEventListener('click', function() {
  var userWins = "You win!";
  var computerWins = "The computer wins!";
  var retry = "Please enter either 'r', 's', or 'p'";
  var roundCounter = 0;
  var validResponse = true;
  var gameRound = function() {

  var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'r', 'p', or 's'");
  var rng = Math.random();
  var computerChoice = "R";



  if(rng > 0.66) {
      computerChoice = "P";
  } else if (rng > 0.33) {
      computerChoice = "S";
  }



  if(computerChoice !== userChoice) {
      if(computerChoice === "S" && userChoice === "r") {
          alert(userWins);


      }
      else if (computerChoice === "R" && userChoice ==="p") {
          alert(userWins);


      }
      else if (userChoice!== "r" && userChoice!== "s" && userChoice !== "p") {
          alert(retry);

          validResponse = false
      }
      else {
          if( userChoice === "s" && computerChoice=== "P") {
              alert(userWins);

          } else {
              alert(computerWins);

          }
      }
  } else {
      alert('Tie!');

  }
};
  while (roundCounter < 5) {
    gameRound();
    if (validResponse === true) {
      roundCounter++;
      console.log(roundCounter);
    }
    validResponse = true;
  }
});
