//declarations
let win = 0
  , loss = 0
  , tie = 0
  , choice;

//Runs a loop to play 5 rounds and compares your points in the end to decide whether you win or lose the game
function game(){
    for (let i = 0 ; i < 5 ; i++ ){
    playRound(computerPlay(),playerPlay());
    }
    if (win>loss){
        return alert("Gratz you won !")
    }
    else if (win == loss) {
        return alert("You tied ! Won't hurt to try again, right?")
    }
    else {
        return alert("Better luck next time !")
    }
}

//Compares inputed parameter values and returns a result of wether you win, lose, or tie the round
function playRound(computerPick,playerPick) {
    if (playerPick === computerPick) {
        tie += 1;
        return alert(`You tied, the computer picked ${playerPick} aswell.`)
    }
    else if (( playerPick === "rock" & computerPick === "scissors" )||( playerPick === "scissors" & computerPick === "paper" )||( playerPick === "paper" && computerPick === "rock" )) {
        win += 1;
        return alert(`You win, ${playerPick} beats ${computerPick}.`)
    }
    else {
        loss += 1;
        return alert(`You lose, ${computerPick} beats ${playerPick}.`)
    }
}

//Ramdomly picks rock, paper, or scissors for the computer
function computerPlay() {
    let random = Math.floor((Math.random() * 3) + 1 );
    if (random === 1){
        return "rock"
    }
    else if (random === 2) {
        return "paper"
    }
    else if (random === 3) {
        return "scissors"
    }
    else {
        return "Something isn't right"
    }
}

//Prompts the player to pick either rocks, paper, or scissors and puts their choice to lower case
function playerPlay() { 
    do {
    choice = prompt("what are you picking ?");
    choice = choice.toLowerCase();
    }
    while (choice != "rock" && choice != "paper" && choice != "scissors" );
    return choice.toLowerCase()
}

//Run the game
game();

//@ayoubmissaoui