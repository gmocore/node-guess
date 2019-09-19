function Letter(value) {
  this.value = value;
  this.guessed = false;

  this.toString = function(char) {
    if (this.value === char) {
      this.guessed = true;
      console.log("match");
      return char;
    } else {
      console.log("nope");
      return "_";
    }
  };
}

module.exports = Letter;
