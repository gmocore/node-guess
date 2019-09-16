const index = require("./index");

const Letter = function() {
  this.word = index.wordSelection();
  this.guess = process.argv[2];
  this.splitLetters = this.word.split("");
  this.wordBlank = [];
  this.remainingGuesses = this.splitLetters.length;
  for (var position in this.splitLetters) {
    this.wordBlank[position] = "_ ";
  }
  for (let i = 0; i < this.splitLetters.length; i++) {
    if (this.splitLetters[i] === this.guess) {
      this.wordBlank[i] = this.guess.toString();
      this.remainingGuesses--;
    }
  }

  console.log(this.wordBlank);
  console.log(this.word, this.guess, this.splitLetters);
};

let newWord = new Letter();
console.log(newWord);
