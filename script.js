// Declarations
let win = 0
  , loss = 0
  , tie = 0
  , choice;

// Elements querying
const resultDiv = document.querySelector('#result');
const resultDisplayDiv = document.querySelector('#result-display');
const playerResult = document.querySelector('#player-result');
const computerResult = document.querySelector('#computer-result');

// Capture user pick
const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', playerPlay)
});
function playerPlay(e) { 
    if (this.id === "paper") {
        return choice = "paper"
    }
    else if (this.id === "rock") {
        return choice = "rock"
    }
    else if (this.id === "scissors") {
        return choice = "scissors"
    }
    else return 1;
}

// Computer pick
function computerPlay() {
    let random = Math.floor((Math.random() * 3) + 1 );
    if (random === 1){
        return "rock";
    }
    else if (random === 2) {
        return "paper";
    }
    else if (random === 3) {
        return "scissors";
    }
    else {
        return "Something isn't right";
    }
}

// Compare computer and player picks and display appropriate message
function playRound(computerPick,playerPick) {
    if (playerPick === computerPick) {
        tie += 1;
        return resultDisplayDiv.textContent=`You tied, the computer picked ${playerPick} aswell.`;
    }

    else if (( playerPick === "rock" & computerPick === "scissors" )||( playerPick === "scissors" &
     computerPick === "paper" )||( playerPick === "paper" && computerPick === "rock" )) {
        win += 1;
        return resultDisplayDiv.textContent=`You win, ${playerPick} beats ${computerPick}.`;
    }

    else {
        loss += 1;
        return resultDisplayDiv.textContent=`You lose, ${computerPick} beats ${playerPick}.`;
    }
}

// Play one round and display results
function game() {
    if (win < 5 && loss < 5 ) {
        playRound(computerPlay(),choice);
        playerResult.textContent = `You : ${win}`;
        computerResult.textContent =`Computer : ${loss}`;
        displayWinner();
    }
}

// Checks if game ended and decalares winner
function displayWinner() {
    if (win == 5 || loss == 5) {
        if (win > loss){
            return resultDisplayDiv.textContent=`Congratulations, you were first to reach 5, you win!`;
        }
        else if (win < loss) {
            return resultDisplayDiv.textContent=`Better luck next time, computer wins!`;
        }
    }
    else if (win < 5 && loss < 5) {
        return;
    }   
}

// play one round
buttons.forEach(button => {
    button.addEventListener('click', game)
});

//@ayoubmissaoui