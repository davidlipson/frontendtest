export const BOARD_WIDTH = 8

export const initializeBoard = (): Square[][] => {
  let board: Square[][] = []
  for (let i = 0; i < BOARD_WIDTH; i++) {
    board.push([])
    for (let j = 0; j < BOARD_WIDTH; j++) {
      board[i].push(new Square(i * BOARD_WIDTH + j))
    }
  }
  return board
}

export class Square {
  index: number
  x: number
  y: number
  clicked: boolean = false

  constructor(index: number) {
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
