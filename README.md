# Chess.com - Front End Programming Challenge

Welcome to the [Chess.com](https://chess.com) front end programming challenge!

# Instructions

1. Fork this repository.
2. Create a VueJS application that satisfies the requirements detailed below.
3. Provide links to your fork of this repository and a live demo of your application.

# Application Requirements

1. Create a page with a chessboard and a sidebar.
2. On desktop devices the sidebar should be positioned to the right of the chessboard.
3. On mobile devices the sidebar should be positioned below the chessboard.
4. The chessboard should resize responsively to consume available space.
5. Clicking a chessboard square should highlight the square.
6. Keep track of which squares are clicked and the order in which they're clicked.
7. Display the information collected from step 6 in the sidebar.

# Submission

Hi! In order to run the application, first run `npm i` and then `npm run start`

# Implementation

This was my first time using Vue! As the scope of the project is quite small,
I did not use a context/store to maintain the board and path data.
Instead, it is stored in the main App.vue data, which acts as the Controller.
Board and path are passed as props to the Board and Panel vue components (View),
and events are emitted back to the main controller to update the data modal (Game and Square classes).

Thanks so much!

David
