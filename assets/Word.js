const Letter = require("./Letter");

function Word(answer) {
  this.wordArray = answer.split("").map(letter => new Letter(letter));

  this.displayWord = function() {
    let builtString = "";
    this.wordArray.forEach(item => (builtString += `${item.toString()} `));
    console.log(builtString);

    return builtString.split(" ").join("");
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
      return true;
    } else {
      console.log("Incorrect!");
      return false;
    }
  };
}

module.exports = Word;
