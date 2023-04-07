// Square represents a square on the board
export class Square {
  index: number
  x: number
  y: number
  clicked: boolean = false
  BOARD_WIDTH

  constructor(index: number, BOARD_WIDTH: number) {
    this.BOARD_WIDTH = BOARD_WIDTH
    this.index = index
    this.x = index % BOARD_WIDTH
    this.y = Math.floor(index / BOARD_WIDTH)
  }

  // handles the colour of the square
  // includes highlighted coloured if the square is clicked
  colour(): string {
    if (this.clicked) {
      return (this.x + this.y) % 2 === 0 ? '#ffa35c' : '#524e4e'
    } else {
      return (this.x + this.y) % 2 === 0 ? '#ff5c8c' : 'white'
    }
  }

  click() {
    this.clicked = true
  }

  squareName(): string {
    console.log(this.x, this.y)
    return String.fromCharCode(65 + this.x) + (this.BOARD_WIDTH - this.y)
  }
}
