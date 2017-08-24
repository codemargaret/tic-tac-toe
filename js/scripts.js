turnArray = [];

function Player(name1, letter1, turn) {
  this.name = name1;
  this.letter = letter1;
  this.turn = 0;
}

Player.prototype.letterName = function(setValue){
  if (setValue === "x") {
    this.letter = "x";
  } else {
    this.letter = "o";
  }
}

Player.prototype.switchTurn = function(){
  if (this.turn = 1) {
    turnArray.push(this.turn);
    this.turn = this.turn +2;
    return player1.letter;
  }
}

var player1 = new Player('Player 1', "letter", 1);
var player2 = new Player('Player 2', "letter", 2);

$(document).ready(function() {
  var theX = "x";
  var theO = "o";
  player1.letterName(theX);
  player2.letterName(theO);




  // $("#beX").click(function() {
  //   var theX = "x";
  //   var theO = "o"
  //   player1.letterName(theX);
  //   console.log(player1.letter);
  //   player2.letterName(theO);
  //   console.log(player2.letter);
  // });

  // $("#beO").click(function(){
  //   var theO = "o"
  //   var theX = "x";
  //   console.log(player1.letter);
  //   console.log(player2.letter);
  //   player1.letterName(theO);
  //   console.log(player1.letter);
  //   player2.letterName(theX);
  //   console.log(player2.letter);
  // });
  $('#spot1').click(function(){
    $('#spot1').text(player1.letter);
    // next player turn;
  });
});
