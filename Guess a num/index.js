const remainGuess = document.getElementById("remainingGuesses");
const inputGuess = document.getElementById("guessNumber");
const submitbtn = document.getElementById("submit");
const newgamebtn = document.getElementById("new-game");
const outputdisplay = document.getElementById("guess-display");
const message = document.getElementById("output");

    let targetValue =  Math.floor(Math.random() * 101); 
    let countguess = 0;
    const maxguess = 10;
    let guessarray = [];

submitbtn.addEventListener('click', function(e) {
    e.preventDefault();
    const checkValue = parseInt(inputGuess.value);
     
    if(checkValue === targetValue){
        remainGuess.innerText = (maxguess - countguess);
         message.innerText = `You got it in ${remainGuess} guesses! The number was ${checkValue}`;
        inputGuess.disabled = true;
        submitbtn.disabled = true;
        newgamebtn.disabled = true;
        guessarray.unshift(checkValue); 
    }
    countguess++;
    if (countguess === maxguess) {
      message.innerText = `Game over! The number was ${targetValue}.`;
      remainGuess.innerText = 0;
       inputGuess.disabled = true;
      submitbtn.disabled = true;
      newgamebtn.disabled = false;
       guessarray.unshift(checkValue);
       return;
     }

      if (checkValue < targetValue) {
      message.innerText = `${checkValue} is too low..!`;
      guessarray.unshift(checkValue);
      } else {
       message.innerText = `${checkValue} is too high..!`;
       guessarray.unshift(checkValue);
      }

     remainGuess.innerText = maxguess - countguess;
     outputdisplay.innerText = `your guesses are ${guessarray}`;

});



newgamebtn.addEventListener('click', function() {

    remainGuess.innerText = maxguess;
     targetValue =  Math.floor(Math.random() * 101); 
     countguess = 0;
    inputGuess.value = "";
    message.innerText = "";
    outputdisplay.innerText = "Game started! Guess the number."
    inputGuess.disabled = false;
    submitbtn.disabled = false;
    newgamebtn.disabled = true;
});