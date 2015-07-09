/* Game Logic
- To start, divs will not contain any values until a user assigns a value (X or O).

 0 | 1 | 2
 3 | 4 | 5
 6 | 7 | 8

 '' | '' | ''
 '' | '' | ''
 '' | '' | ''

- Optional: A player can click on "Let's play Tic-Tac-Toe", which will prompt the following question in the div below "Let's play Tic-Tac-Toe" and above the game board:

- In the div just above the game board, a question and two buttons will appear: The question will be, "Would you like to be X or O?"  The buttons will say either "X" or "O". If the player clicks the "X" button, the buttons will disappear and the question will change to the message "It's your turn, X!" Player 2 is automatically assigned the other value (in this example, O).

- First, Player 1 (X) clicks one of the empty game board squares, that square will be set to 'X'.  Example:

'' | '' | ''
'' | 'x' | ''
'' | '' | ''

- The location of the new X will be stored (on the board? in a new array or object representing the board?).

- The count of X's on the board will increase by 1.

- Optional: The "It's your turn, X!" message will change to "It's your turn, O!" once player X has completed their move (and the count of X's on the board increases by 1).

- Player 2 (O), will click on a square on the board (where there is NOT already an X or an O) set another square to 'O'. Example:

'' | '' | 'o'
'' | 'x' | ''
'' | '' | ''

- The location of this new O will be stored (in the same board/object/whatever as the X above).

- The count of O's on the board will increase by 1.

- To determine whose turn it is:
  Option 1:
    - Create a "counter" variable and set it to 0. Create a function to increase "counter" by 1 player move, increase "counter" by 1.  If the value of "counter" is odd, it's player 1's turn. If even, it's player 2's turn.

- Then it's Player 1 (X)'s turn again.  Repeat turns until there is a winner

- To determine winner:

either X or O:
  - wins horizontally: [0, 1, 2] or [3, 4, 5] or [6, 7, 8] will be either all X or all O.
  - wins vertically: [0, 3, 6] or [1, 4, 7] or [2, 5, 8] will either by all X or all O.
  - wins diagonally: [0, 4, 8] or [2, 4, 6] will be either all X or all O.

- If any of the above combinations include all X's or all O's, return winner and stop game.  If X wins, the text at top changes to "Game over!  X has won."

- Optional: After winner is determined, add a point to the score section for that player.

Other:
- new game button clears board, sets all squares back to null.

Below: Console Game Logic */

'use strict'

var board = [['', '', ''],
            ['', '', ''],
            ['', '', '']];

var winner;
var currentTurn = "X";
var counter = 0;

var getFirstMove = function(move) {
    console.log('Hello, Player X! Please make your first move.');
};

//getFirstMove(); //If playing in console, run this first.

var playerMove = function (player, row, col) {
  board[row][col] = player;
  //console.log ('Here is your move on the board:  ' + board);
  return board;
};

//to test for a horizontal win:
// playerMove ('X', 0, 0);
// playerMove ('O', 1, 1);
// playerMove ('X', 0, 1);
// playerMove ('O', 2, 0);
// playerMove ('X', 0, 2);

//to test for a vertical win:
// playerMove ('X', 0, 0);
// playerMove ('O', 0, 1);
// playerMove ('X', 1, 0);
// playerMove ('O', 1, 1);
// playerMove ('X', 2, 0);
// playerMove ('X', 2, 2);

//to test for a diagonal win:
// playerMove ('X', 0, 0);
// playerMove ('O', 0, 1);
// playerMove ('X', 1, 1);
// playerMove ('O', 0, 1);
// playerMove ('X', 2, 2);


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
    winner = player;
  }
};

checkRows('O');

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
    winner = player;
  }
};

checkCols('O');

var checkDiag = function(player) {
  //checks for diagonal wins
  if ((board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
     (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player)) {
    winner = player;
  }
};

// var isWinner = function(player) {
//   return checkCols(player) || checkRows(player) || checkDiag(player);
// };

var resetBoard = function(){
  board = [['', '', ''],
          ['', '', ''],
          ['', '', '']];
}

//next steps
// - change the above functions so that you don't need to manually pass in a parameter.
// - create a master checkWinner function that incorporates the 3 functions above
// - figure out whose turn it is with a function that calls the master checkWinner function. If nobody has won, determine whose turn is next.
// - if someone has won


//getWinner function includes these functions:
  //isWinnerX - returns 'true' if X is the winner
    //if isWinnerX, return x
  //isWinnerO - returns 'true' if O is the winner
    //if isWinnerO, return o
  //else, return null

  //isWinnerX calls checkRows, checkCols, checkDiag

