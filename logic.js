'use strict'

var board = [['', '', ''],
            ['', '', ''],
            ['', '', '']];

var currentTurn = 'X';

var counter = 0;

var playerMove = function (player, row, col) {
  board[row][col] = player;
  return board;
};

var getPieceAt = function (row, col) {
    if (board[row][col] !== '') {
      return board[row][col];
    }
      else return '';
};

var changeTurn = function () {
  if (currentTurn === 'X') {
    currentTurn = 'O';
  }
  else currentTurn = 'X';
};

var checkRows = function(player) {
  //checks for horizontal wins first
  if ((board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player) ||
     (board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player) ||
     (board[2][0] === player &&
      board[2][1] === player &&
      board[2][2] === player)){
    return true;
  }
};

var checkCols = function(player) {
  //checks for vertical wins
  if ((board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player) ||
     (board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player) ||
     (board[0][2] === player &&
      board[1][2] === player &&
      board[2][2] === player)){
    return true;
  }
};

var checkDiag = function(player) {
  //checks for diagonal wins
  if ((board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
     (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player)) {
    return true;
  }
};

var isWinner = function(player) {
  return checkCols(player) || checkRows(player) || checkDiag(player);
};

var getWinner = function(){
  if (isWinner('X')) {
    return 'X';
  }
  if (isWinner('O')) {
    return 'O';
  }
  return null;
};

var resetBoard = function(){
  board = [['', '', ''],
          ['', '', ''],
          ['', '', '']];
  $('#board > div').html('');
  counter = 0;
}

$(document).ready(function(){
  $('#board > div').click(function(){
    var clickedCell = $(this).attr("class");
    var row = clickedCell[4];
    var col = clickedCell[10];
    // alert (row + ' ' + col);
    // playerMove('TEST', row, col);
    // console.log(board);
    if (!getPieceAt(row, col)) {
      playerMove(currentTurn, row, col);
      $(this).html(currentTurn);
      counter++;
      if (getWinner()) {
        alert ('The winner is ' + getWinner() + '!');
        resetBoard();
      }
      if (counter === 9 && !getWinner()) {
        alert ("It's a tie!");
        resetBoard();
      }
      changeTurn();
    } else {
      alert ('This space is already taken! Please choose another square.');
    }

  });

//row-0 col-0
});


