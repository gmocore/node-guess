const inquirer = require("inquirer");
const Word = require("./Word");

const wordSelection = function() {
  const wordChoices = [
    "prisoners",
    "zodiac",
    "inception",
    "goodfellas",
    "casino",
    "revolver",
    "snatch"
  ];

  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
};

let chosenWord = wordSelection();
let word = new Word(chosenWord);
let remainingGuesses = 4;
console.log("Guess the name of the movie!");
word.displayWord();

function replay() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "play again?"
      }
    ])
    .then(confirmation => {
      if (confirmation.confirm) {
        chosenWord = wordSelection();
        word = new Word(chosenWord);
        remainingGuesses = 4;
        word.displayWord();

        getUserPrompt();
      } else {
        console.log("Thank you for playing");
        return;
      }
    });
}

function getUserPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "input",
        message: "enter a letter"
      }
    ])
    .then(userInput => {
      let guessed = word.guess(userInput.input);
      let wordString = word.displayWord();
      if (guessed) {
        if (chosenWord === wordString) {
          console.log("youve done it");
          replay();
        } else {
          getUserPrompt();
        }
      } else {
        remainingGuesses--;
        if (remainingGuesses === 0) {
          console.log("G A M E  O V E R");
          replay();
        } else {
          console.log("try another letter");
          getUserPrompt();
        }
      }
    });
}

getUserPrompt();
