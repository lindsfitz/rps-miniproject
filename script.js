//TODO: user chooses r,p, s
    //TODO: ask user via pop up what choice they want
    //TODO: save to a variable so we can reference later
    //TODO: EGDE CASE: user doenst pick r,p, or s
    //TODO: EGDE CASE: user leaves field blank
//TODO: computer chooses r,p,s
//TODO: determine winner, show to user
//TODO: display stats
//TODO: ask to play again


var answers = ['rock', 'paper', 'scissors'];

var wins = 0;
var losses = 0;
var ties = 0;

function gamePlay() {

    var userResponse = prompt('Choose rock, paper, or scissors');

    userResponse = userResponse.toLowerCase();

    
    var valid = checkResponse(userResponse);

    if (!valid) {
        return gamePlay();
    }

    var compuResponse = computerResponse();

    compare(compuResponse, userResponse);

    playAgain();


}

function checkResponse(userResponse) {
    let responseCheck = answers.includes(userResponse);

    if (responseCheck) {
        console.log(userResponse);
        return true;
    } else {
        alert('Please enter rock, paper, or scissors only');
        return false;
    }
}

function computerResponse() {
    var randomIndex = Math.floor(Math.random() * (answers.length))

    var compAnswer = answers[randomIndex]

    console.log(compAnswer)

    return compAnswer;
}

function compare(compuResponse, userResponse) {
    if (compuResponse === userResponse) {
        alert("It's a tie!");
        ties++
    } else if ((compuResponse === 'rock' && userResponse === 'paper') || (compuResponse === 'paper' && userResponse === 'scissors') || (compuResponse === 'scissors' && userResponse === 'rock')) {
        alert('You win!')
        wins++
    } else {
        alert('You lose!')
        losses++
    }
}

function playAgain() {
    alert('Wins: ' + wins + 'Losses: ' + losses + 'Ties: ' + ties )
    var replay = confirm('Would you like to play again?')

    if (replay) {
        gamePlay();
    } else {
        return;
    }
}


gamePlay();