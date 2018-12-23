var Word = require ("./Word.js");
var continents = ["Africa","Antarctia","Asia","Australia","Ocenia","Europe","North America","South America"];

function GameOn (location) {
    //Selection  of a random word from location array.
    this.catchWord = location[Math.floor(Math.random() * location.length)];

    //Display blanks based on word selection
    this.word = new Word(this.catchWord);

    //Booleans, counters, and arrays supporting this word game.
    this.guesses = [];
    this.badGuesses = [];
    this.displayBadGuesses = "";
    this.attempsRemaining = 20;
    this.gameisDone = false;


};

GameOn.prototype.assessLetter = function(guessedItLetter) {
  var answers = function() {
    // if statement to ensure that our questions are only asked five times
    if (count < 10) {
      // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      inquirer.prompt([
        {
          guesit: "character",
          message: "Please chose a character"
        } 
      ])
      .then(function(answers) {
        // initializes the variable newProgrammer to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newProgrammer = new Programmer(
          answers.guestIt),
        })  
        guessedItLetter = answers.guestIt;
    } else {
      guessedItLetter = answers.guestIt;
          }}
    //Check Key pressed.
    var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    //If the guess is not a character
    if(characters.indexOf(guessedItLetter) === -1){
    console.log("Please enter a letter.".warn);
      }else{
        //Check if letter has already been guessed
          if (this.guesses.indexOf(guessedItLetter) > -1){
          console.log("You've already guessed that letter.".warn);
          }
        //Check that the letter is incorrect
          else if(this.catchWord.toUpperCase().indexOf(guessedItLetter) === -1) {
            this.badGuesses.push(guessedLetter.red);
            this.displayBadGuesses = this.badGuesses.join("");
            this.attempsRemaining --;
            console.log("Your guess was incorrect.".red);
          }
        //Letter is correct
            else {
              this.word.checkIfWordContains(guessedItLetter);
              this.displayWord = this.displayWord();
              console.log ("Your guess was correct.".green);
            };
            //record all valid guest
            this.guesses.push(guessedItLetter);
          };  


    };
  GameOn.prototype.evaluateGameState = function() {
      if(this.displayWord.indexOf("_") === -1) {
          //Letters are guessed, win
          console.log("You win".green.bold);
          this.gameisDone = true;
        }
         else if (this.attempsRemaining <1) {
          //Attemps Remaining...lose
          console.log(" You have lost.".red.bold);
          this.gameisDone = true;
      };
  };
  // module.exports = GameOn;
  var game = new GameOn(continents);
  // console.log(game);
  game.assessLetter()};

