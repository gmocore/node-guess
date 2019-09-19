const Letter = require("./Letter");

function Word(answer) {
  this.wordArray = [];
  this.builtString = "";

  for (let i = 0; i < answer.length; i++) {
    let letter = new Letter(answer[i]);
    this.wordArray.push(letter);
  }

  this.displayWord = function() {
    this.wordArray.forEach(item => {
      this.builtString += item.value;
    });
    return this.builtString;
  };

  this.userGuess = function(input) {
    for (var i = 0; i < this.wordArray.length; i++) {
      this.wordArray[i].guess(input);
    }
  };
}

module.exports = Word;
