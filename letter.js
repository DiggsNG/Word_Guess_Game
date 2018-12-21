function Letter(letterChoice) {
    this.value = letterChoice;

    if(letterChoice === "" || letterChoice ==="_") {
            this.guessedIt = true;
    } else {
        this.guessedIt = false;
    };
};

Letter.prototype.displayLetter = function(){
    if(this.guessedIt){
         return this.value.green;
    } else {
         return "_".cyn;
    }
};
Letter.prototype.isThisLetter = function(guessedItLetter) {
    if(this.value.toUpperCase() === guessedItLetter)
    this.guessedIt = true;
};
Letter();
displayLetter();
isThisLetter();
module.exports = Letter;