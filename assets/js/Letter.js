function Letter(value) {
  this.value = value;
  this.guessed = false;

  this.guess = function(guess) {
    if (this.value === guess) {
      this.guess = true;
    }
  };
  this.toString = function() {
    if (!this.guessed) {
      this.value = "_";
    } else {
      return this.value;
    }
  };
}

module.exports = Letter;
