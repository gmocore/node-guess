const inquirer = require("inquirer");
const Letter = require("./Letter");
const Word = require("./Word");

const wordSelection = function() {
  const wordChoices = [
    "se7en",
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
      console.log(userInput.input);
      //   let response = new Letter(userInput.input);
      word.displayWord();
      word.guess(userInput);

      //   if (word.builtString.includes(userInput.input)) {
      //     console.log("its a match");
      //   } else {
      //     console.log("nope");
      //     getUserPrompt();
      //   }
    });
}

getUserPrompt();
