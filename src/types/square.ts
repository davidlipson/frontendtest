export class Square {
  index: number
  x: number
  y: number
  clicked: boolean = false

  constructor(index: number, BOARD_WIDTH = 8) {
    this.index = index
    this.x = index % BOARD_WIDTH
    this.y = Math.floor(index / BOARD_WIDTH)
  }

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
    return String.fromCharCode(65 + this.x) + (this.y + 1)
  }
}
