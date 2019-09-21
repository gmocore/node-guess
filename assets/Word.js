const Letter = require("./Letter");

// constructor for word object
function Word(answer) {

  // split the word into an array of constructed Letters
  this.wordArray = answer.split("").map(letter => new Letter(letter));

  // display the word to the user
  this.displayWord = function() {
    // variable to display the updated guesses
    let builtString = "";
    // loop through word array to modify string with letters or underscores
    this.wordArray.forEach(item => (builtString += `${item.toString()} `));
    console.log(builtString);

    return builtString.split(" ").join("");
  };

  // test the user guess against answer
  this.guess = function(userGuess) {
    let correct = false;
    this.wordArray.forEach(letter => {
      letter.testGuess(userGuess);
      if (letter.answer === userGuess && letter.guessed) {
        correct = true;
      }
    });

    // display result to user
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
