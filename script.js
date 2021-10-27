const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer choice
        const compNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[compNumber];

        setTimeout(() => {
          //call compareHands
          compareHands(this.textContent, computerChoice);
          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakeplayer 2s ease";
        computerHand.style.animation = "shakecomputer 2s ease";
      });
    });
  };

  //Update Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  //Comparing choices
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for rock
    if (playerChoice == "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!🎉";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!💻";
        cScore++;
        updateScore();
        return;
      }
    }
    // CHeck for paper
    if (playerChoice == "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!💻 ";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!🎉 ";
        pScore++;
        updateScore();
        return;
      }
    }

    //Check for scissors
    if (playerChoice == "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!💻 ";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!🎉 ";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //Strat all inner functions
  startGame();
  playMatch();
};

//Start the game function
game();
