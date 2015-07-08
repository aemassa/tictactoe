/* Game Logic
- To start, divs will not contain any values until a user assigns a value (X or O).

 a | b | c
 d | e | f
 g | h | i

 '' | '' | ''
 '' | '' | ''
 '' | '' | ''

- Optional: A player can click on "Let's play Tic-Tac-Toe", which will prompt the following question in the div below "Let's play Tic-Tac-Toe" and above the game board:

- In the div just above the game board, a question and two buttons will appear: The question will be, "Would you like to be X or O?"  The buttons will say either "X" or "O". If the player clicks the "X" button, the buttons will diseapper and the question will change to the message "It's your turn, X!" Player 2 is automatically assigned the other value (in this example, O).

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

- Then it's Player 1 (X)'s turn again.  Repeat turns until there is a winner

- To determine winner:

either X or O:
  - wins horizontally: [a, b, c] or [d, e, f] or [g, h, i] will be either all X or all O.
  - wins vertically: [a, d, g] or [b, e, h] or [c, f, i] will either by all X or all O.
  - wins diagonally: [a, e, i] or [c, e, g] will be either all X or all O.

- If any of the above combinations include all X's or all O's, return winner and stop game.  If X wins, the text at top changes to "Game over!  X has won."

- Optional: After winner is determined, add a point to the score section for that player.

Other:
- new game button clears board, sets all squares back to null. */

'use strict'

var board = [['', '', ''], ['', '', ''], ['', '', '']];

//board;

var playerMove = function (player, row, col) {
    board[row][col] = player;
    return board;
}

playerMove ('X', 1, 1);

var getPieceAt = function (row, col) {
    if (board[row][col] !== null) {
        return board[row][col];
    }
    else return null;
}

getPieceAt(1, 2);
