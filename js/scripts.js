var whoseTurnNow = "o";

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

var whoseTurn = function(theInput){
  if (theInput === "x") {
    return whoseTurnNow = "o";

  } else if (theInput === "o") {
    return whoseTurnNow = "x";
  }
}

// Player.prototype.switchTurn = function(){
//   if (this.turn = 1) {
//     turnArray.push(this.turn);
//     this.turn = this.turn +2;
//     return player1.letter;
//   }
// }

var player1 = new Player('Player 1', "letter", 1);
var player2 = new Player('Player 2', "letter", 2);

$(document).ready(function() {
  // var theX = "x";
  // var theO = "o";
  // player1.letterName(theX);
  // player2.letterName(theO);

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
    // whoseTurn(whoseTurnNow);
    console.log(whoseTurnNow);
    $('#spot1').text(whoseTurn(whoseTurnNow));
    console.log(whoseTurnNow);
    // next player turn;
  });
  $('#spot2').click(function(){
    console.log(whoseTurnNow);
    $('#spot2').text(whoseTurn(whoseTurnNow));
    console.log(whoseTurnNow);
  });
  $('#spot3').click(function(){
    $('#spot3').text(whoseTurn(whoseTurnNow));
  });
  $('#spot4').click(function(){
    $('#spot4').text(whoseTurn(whoseTurnNow));
  });
  $('#spot5').click(function(){
    $('#spot5').text(whoseTurn(whoseTurnNow));
  });
  $('#spot6').click(function(){
    $('#spot6').text(whoseTurn(whoseTurnNow));
  });
  $('#spot7').click(function(){
    $('#spot7').text(whoseTurn(whoseTurnNow));
  });
  $('#spot8').click(function(){
    $('#spot8').text(whoseTurn(whoseTurnNow));
  });
  $('#spot9').click(function(){
    $('#spot9').text(whoseTurn(whoseTurnNow));
  });

});
