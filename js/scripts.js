function Player(name1, letter1) {
  this.name = name1;
  this.letter = letter1;
}

Player.prototype.letterName = function(setValue){
  if (setValue === "x") {
    this.letter = "x";
  } else {
    this.letter = "o";
  }
}

var player1 = new Player('Player 1', "letter");
var player2 = new Player('Player 2', "letter");

$(document).ready(function() {
  $("#beX").click(function() {
    var theX = "x";
    var theO = "o"
    // console.log(player1.letter);
    // console.log(player2.letter);
    player1.letterName(theX);
    console.log(player1.letter);
    player2.letterName(theO);
    console.log(player2.letter);
  });
  $("#beO").click(function(){
    var theO = "o"
    var theX = "x";
    console.log(player1.letter);
    console.log(player2.letter);
    player1.letterName(theO);
    console.log(player1.letter);
    player2.letterName(theX);
    console.log(player2.letter);
  });
  $('#spot1').click(function(){
    $('#spot1').text(player1.letter);
  });
});
