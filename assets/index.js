const inquirer = require("inquirer");
const Word = require("./Word");

// function to select a word
const wordSelection = function() {
  const wordChoices = [
    "prisoners",
    "zodiac",
    "inception",
    "goodfellas",
    "casino",
    "revolver",
    "snatch",
    'arrival',
    'psycho',
    'network',
    'chinatown',
    'seven',
    'her',
    'memento',
    'magnolia',
    'm',
    'argo',
    'annihilation',
    'dunkirk'
  ];

  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
};

// slected word from function above
let chosenWord = wordSelection();
// chosen word passed into Word constructor
let word = new Word(chosenWord);
let remainingGuesses = 7;
console.log("Guess the name of the movie!");
// display initial blanks of word
word.displayWord();


// function to get guess from user with inquirer package
function getUserPrompt() {
  inquirer
  // prompt object promise
    .prompt([
      {
        type: "input",
        name: "input",
        message: "enter a letter"
      }
    ])
    // once prompt is entered, callback evaluates input
    .then(userInput => {
      // store the guess, nmormalize input to lower case
      let guessed = word.guess(userInput.input.toLowerCase());
      // word to campare against
      let wordString = word.displayWord();
      if (guessed) {
        // if word string is guessed corectly by comparing built string to selected word
        if (chosenWord === wordString) {
          console.log("Y O U  W I N !");
          // on game win, option to play again
          replay();
        } else {
          // recursion to get more guesses
          getUserPrompt();
        }
      } else {
        // user loses a life
        remainingGuesses--;
        if (remainingGuesses === 0) {
          // display game over to user
          console.log("G A M E  O V E R");
          // prompt if the user wants to replay
          replay();
        } else {
          // recursion to collect more guesses
          console.log("try another letter");
          getUserPrompt();
        }
      }
    });
}

// function to replay game
function replay() {
  inquirer
  // prompt yes or no to replay
    .prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "play again?"
      }
    ])
    .then(confirmation => {
      // if yes, reset varaibles for new game
      if (confirmation.confirm) {
        chosenWord = wordSelection();
        word = new Word(chosenWord);
        remainingGuesses = 7;
        word.displayWord();

        // recursion to start again
        getUserPrompt();
      } else {
        // display message top the user and exit
        console.log("Thank you for playing");
        return;
      }
    });
}

getUserPrompt();
