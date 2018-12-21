var Letter = require("./letter.js");

function Word(catchWord) {
    //Create letter objects base on selected word
    for(var j = 0; j < catchWord.length; j++) {
        this[j] = new Letter(catchWord[j]);
    };
}; Word()

Word.prototype.showWord = function(){
    //This creates an empty array
    var lettersArray = [];
    //This populates array with letters
    for(letterChoice in this) {
        if (this[letterChoice].showLetter)
            lettersArray.push(this[j].showletter());
    };
    //return a string of letter or underscores
    return lettersArray.join("");
}; showWord()

Word.prototype.checkIfWordContin = function(guessedItLetter) {
    for(letterChoice in this) {
        if(this[letterChoice].isThisLetter(guessedItLetter));
    };
};checkIfWordContain()

module.exports = Word;