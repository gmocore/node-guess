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
console.log(chosenWord);

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
      //   word.guess(userInput.input);
      //   word.displayWord();
      if (word.guess(userInput.input)) {
        if (chosenWord === word.displayWord()) {
          console.log("youve done it");
          return;
        } else {
          getUserPrompt();
        }
      } else {
        remainingGuesses--;
        if (remainingGuesses === 0) {
          console.log("G A M E  O V E R");
          return;
        } else {
          console.log("try another letter");
          getUserPrompt();
        }
      }
    });
}

getUserPrompt();
