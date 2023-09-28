let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let prevGuess = [];
let numGuess = 1;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //
  if((guess < 0 && guess >100) || isNaN(guess)){
    alert('Please enter a valid number')
  }
  else{
    prevGuess.push(guess);
    if(numGuess > 10){
      displayGuess(guess);
      displayMessage(`Game over ! Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randomNumber){
    displayMessage('YOU WON!!');
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage('Your guess is TOOO LOW!');
  }
  else if(guess > randomNumber){
    displayMessage('Your guess is TOOO HIGH!');
  }
}

function displayGuess(guess){
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} ` ;
}

function displayMessage(message){
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame(){
  //
}
function endGame(){
  //
}


