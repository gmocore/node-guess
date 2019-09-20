function Letter(answer) {
  this.answer = answer;
  this.guessed = false;

  this.testGuess = function(guess) {
    if (this.answer === guess) {
      this.guessed = true;
    }
  };
  this.toString = function() {
    if (!this.guessed) {
      return "_";
    } else {
      return this.answer;
    }
  };
}

module.exports = Letter;
