import { Square } from './square'

// Game is a class that represents the game state
// It contains the board and the path, which is updated whenever a square is clicked
export class Game {
  board: Square[][] = []
  path: Square[] = []
  BOARD_WIDTH = 8

  constructor() {
    for (let i = 0; i < this.BOARD_WIDTH; i++) {
      this.board.push([])
      for (let j = 0; j < this.BOARD_WIDTH; j++) {
        this.board[i].push(new Square(i * this.BOARD_WIDTH + j, this.BOARD_WIDTH))
      }
    }
  }

  // add square to path, and update the square's clicked property
  addToPath(square: Square) {
    square.click()
    this.path.push(square)
  }

  // return the viewable path, which is the path sliced to the viewable length
  // based on the size of the screen
  viewablePath(offset: number, viewable: number): Square[] {
    return this.path.slice(offset, offset + viewable)
  }
}
