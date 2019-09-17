const wordSelection = function() {
  const wordChoices = [
    "se7en",
    "zodiac",
    "inception",
    "goodfellas",
    "casino",
    "revolver",
    "snatch"
  ];

  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
};

module.exports.wordSelection = wordSelection;
