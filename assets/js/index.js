module.exports = {
  wordSelection: function() {
    const wordChoices = [
      "se7en",
      "zodiac",
      "inception",
      "goodfellas",
      "casino",
      "revolver",
      "snatch"
    ];

    let currentWord =
      wordChoices[Math.floor(Math.random() * wordChoices.length)];
    return currentWord;
  }
};
