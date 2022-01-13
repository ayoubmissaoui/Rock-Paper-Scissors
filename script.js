//declarations
let win = 0
    , loss = 0
    , tie = 0
    , choice

//game
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

//playRound
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

//computerPick
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

//playerPick
function playerPlay() { 
    do {
    choice = prompt("what are you picking ?");
    choice = choice.toLowerCase();
    console.log (choice);
    }
    while (choice != "rock" && choice != "paper" && choice != "scissors" );
    return choice.toLowerCase()
}

//run the game
game();