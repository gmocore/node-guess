// constructor to create letter object
function Letter(answer) {
  // set answer thats passed in
  this.answer = answer;
  // track if the user has gussed
  this.guessed = false;

  // test the guess vs the answer
  this.testGuess = function(guess) {
    if (this.answer === guess) {
      this.guessed = true;
    }
  };

  // convert the letter to a string by either letter or underscore
  this.toString = function() {
    if (!this.guessed) {
      return "_";
    } else {
      return this.answer;
    }
  };
}

module.exports = Letter;
