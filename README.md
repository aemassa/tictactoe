# Tic-Tac-Toe Game

Here is a link to a simple tic-tac-toe browser game:


## Technologies Used

- HTML and CSS for page structure and styling
- JavaScript for game logic
- jQuery for DOM manipulation and event handling

## Approach Taken

1. I created a simple wireframe showing the general look of the page, including a header, a game board, and some optional elements (which I have not yet incorporated) such as a status bar, score board, and reset button.
2. Using the wireframe, I created a simple HTML doc with divs representing my header, status bar, board, and buttons. I used a CSS style sheet to style each element.
3. Before starting the game logic, I wrote notes to keep track of the variables and functions needed.
4. I created the game logic in vanilla JavaScript and tested it using repl.it and console.log messages.
5. I added jQuery to the logic.js file to handle click events and board resets, testing the game in the browser as I made changes.

## Unsolved Problems

- Right now, the first game starts with X, as expected. If the last move before the board resets is X, the next move after the board resets will be O. I've tried setting the currentTurn variable to X as part of the reset function, as well as calling changeTurn function after the board resets, but have not yet resolved this.
- I would like to incorporate the separation of concerns principle and separate my JavaScript files into (functioning) "main" and "UI" files. As of now, my UI file is just a sad, emtpy function.
- I need to refactor my code -- especially my extremely repetitive CSS.
- I have not yet incorporated AJAX buttons.
- I would like to add some features to the page, including a status bar, score keeper, and animations that "draw" the X's and O's on each square.


## Initial Wireframe

## User Stories

https://github.com/aemassa/tictactoe/blob/master/user_stories.txt
