const Word = require("./Word");
const prompt = require("prompt");

prompt.start();
console.log("enter a guess");

prompt.get("guess", (err, result) => {
  if (err) throw new err();
  console.log("user guess: ", result.guess);
});

const Letter = function() {
  this.word = Word.wordSelection();
  this.guess = process.argv[2];
  this.guessedBoolean = false;
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
};

let newWord = new Letter();
console.log(newWord);
