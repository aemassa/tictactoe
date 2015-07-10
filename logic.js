'use strict'

var board = [['', '', ''],
            ['', '', ''],
            ['', '', '']];
// sets board variable to hold moves

var currentTurn = 'X';
// sets the currentTurn to X so that X will be the first player of the game.

var counter = 0;
// sets a counter variable to 0 initially.
// this will increase with each player move.

var playerMove = function (player, row, col) {
  // allows a player to make a move by selecting a row and column.
  board[row][col] = player;
  return board;
};


var getPieceAt = function (row, col) {
    // returns the piece on any given occupied square.
    if (board[row][col] !== '') {
      return board[row][col];
    }
      else return '';
};

var changeTurn = function () {
  // changes currentTurn from X to O, or from O to X, so that turns alternate.
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
  // determines whether X or O is the winner.
  return checkCols(player) || checkRows(player) || checkDiag(player);
};

var getWinner = function(){
  // returns X or O depending on who won.
  if (isWinner('X')) {
    return 'X';
  }
  if (isWinner('O')) {
    return 'O';
  }
  return null;
};

var resetBoard = function(){
  // resets the board and starts the move counter at 0.
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

// after the DOM is ready, this section calls a jQ function that does the following when a cell is clicked:
// 1. sets a variable called clickedCell to store the cell's HTML class as a string
// 2. stores the row number and column numbers, taken from the clickedCell string, in variables called row and col.
// 3. calls the playerMove function, allowing the player whose turn it is to make a move, as long as there is not already a pice in the square.
// 4. after a successful move, the counter increases.
// 5. if the click results in a win, an alert  shows the winner and resets the board.
// 6. if there have been 9 moves and there is no winner, an alert says "It's a tie" and resets the board.
// 7. if the move results in neither a win nor a tie, the turn changes.
// 8. if the square is already occupied, the player receives an alert to choose another square.
});


