var whoseTurnNow = "o";

function Board(arrayOneForBoard,arrayTwoForBoard,arrayThreeForBoard){
  this.arrayOne = arrayOneForBoard;
  this.arrayTwo = arrayTwoForBoard;
  this.arrayThree = arrayThreeForBoard;
}
var arrayOne = ["","",""];
var arrayTwo = ["","",""];
var arrayThree = ["","",""];

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

var didIwin = function() {
  if ((arrayOne[0]===arrayOne[1]) && (arrayOne[1] === arrayOne[2]) && (arrayOne[0]!=="")) {
    alert("you win 1");
  } else if ((arrayTwo[0] === arrayTwo[1]) && (arrayTwo[1] === arrayTwo[2]) && (arrayTwo[0]!=="")) {
    alert("you win 2");
  } else if ((arrayThree[0] === arrayThree[1]) && (arrayThree[1] === arrayThree[2]) && (arrayThree[0]!=="")) {
    alert("you win 3");
  } else if ((arrayOne[0] === arrayTwo[0]) && (arrayTwo[0] ===         arrayThree[0]) && (arrayOne[0]!=="")) {
    alert("you win col 1");
  } else if ((arrayOne[1] === arrayTwo[1]) && (arrayTwo[1] === arrayThree[1]) && (arrayOne[1] !== "")) {
    alert("you win col 2");
  } else if ((arrayOne[2] === arrayTwo[2]) && (arrayTwo[2] === arrayThree[2]) && (arrayOne[2] !== "")) {
    alert("you win col 3");
  } else if ((arrayOne[0] === arrayTwo[1]) && (arrayTwo[1] === arrayThree[2]) && (arrayOne[0] !== "")) {
    alert("you win dia 3");
  }else if ((arrayOne[2] === arrayTwo[1]) && (arrayTwo[1] === arrayThree[0]) && (arrayOne[2] !== "")) {
    alert("you win dia 3");
  }

}


// Player.prototype.switchTurn = function(){
//   if (this.turn = 1) {
//     turnArray.push(this.turn);
//     this.turn = this.turn +2;
//     return player1.letter;
//   }
// }

// var player1 = new Player('Player 1', "letter", 1);
// var player2 = new Player('Player 2', "letter", 2);
var myBoard = new Board(arrayOne, arrayTwo, arrayTwo)

$(document).ready(function() {

  $('#spot1').click(function(){
    // whoseTurn(whoseTurnNow);
    // console.log(whoseTurnNow);
    $('#spot1').text(whoseTurn(whoseTurnNow));
    // console.log(whoseTurnNow);
    console.log(myBoard.arrayOne);
    myBoard.arrayOne.splice(0, 1, whoseTurnNow);
    console.log(myBoard.arrayOne);
    // next player turn;
    didIwin();
  });
  $('#spot2').click(function(){
    // console.log(whoseTurnNow);
    $('#spot2').text(whoseTurn(whoseTurnNow));
    // console.log(whoseTurnNow);
    myBoard.arrayOne.splice(1, 1, whoseTurnNow);
    console.log(arrayOne);
    didIwin();
  });
  $('#spot3').click(function(){
    $('#spot3').text(whoseTurn(whoseTurnNow));
    myBoard.arrayOne.splice(2, 1, whoseTurnNow);
    didIwin();
  });
  $('#spot4').click(function(){
    $('#spot4').text(whoseTurn(whoseTurnNow));
    myBoard.arrayTwo.splice(0,1,whoseTurnNow);
    console.log(arrayTwo);
    didIwin();
  });
  $('#spot5').click(function(){
    $('#spot5').text(whoseTurn(whoseTurnNow));
    myBoard.arrayTwo.splice(1,1,whoseTurnNow);
    didIwin();
  });
  $('#spot6').click(function(){
    $('#spot6').text(whoseTurn(whoseTurnNow));
    myBoard.arrayTwo.splice(2,1,whoseTurnNow);
    didIwin();
  });
  $('#spot7').click(function(){
    $('#spot7').text(whoseTurn(whoseTurnNow));
    myBoard.arrayThree.splice(0,1,whoseTurnNow);
    console.log(arrayThree);
    didIwin();
  });
  $('#spot8').click(function(){
    $('#spot8').text(whoseTurn(whoseTurnNow));
    myBoard.arrayThree.splice(1,1,whoseTurnNow);
    didIwin();
  });
  $('#spot9').click(function(){
    $('#spot9').text(whoseTurn(whoseTurnNow));
    myBoard.arrayThree.splice(2,1,whoseTurnNow);
    didIwin();
  });
  $('.playAgain').click(function(event){
    location.href = location.href;
  });

});
