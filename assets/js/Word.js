const Letter = require("./Letter");

function Word(answer) {
  // this.wordArray = [];
  // this.builtString = "";

  // for (let i = 0; i < answer.length; i++) {
  //   let letter = new Letter(answer[i]);
  //   this.wordArray.push(letter);
  // }

  // this.displayWord = function() {
  //   this.wordArray.forEach(item => {
  //     return (this.builtString += item.toString()) + " ";
  //   });
  // };

  this.wordArray = answer.split("").map(letter => new Letter(letter));

  this.displayWord = function() {
    let builtString = "";
    this.wordArray.forEach(item => (builtString += `${item.toString()} `));

    console.log("built string: ", builtString);
  };

  this.guess = function(userGuess) {
    let correct = false;
    this.wordArray.forEach(letter => {
      letter.testGuess(userGuess);
      if (letter.answer === userGuess && letter.guessed) {
        correct = true;
      }
    });

    if (correct) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  };
}

module.exports = Word;
