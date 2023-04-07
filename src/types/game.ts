import { Square } from './square'

export class Board {
  board: Square[][] = [];
  path: Square[] = [];
  BOARD_WIDTH = 8;

  constructor() {
    for (let i = 0; i < this.BOARD_WIDTH; i++) {
      this.board.push([])
      for (let j = 0; j < this.BOARD_WIDTH; j++) {
        this.board[i].push(new Square(i * this.BOARD_WIDTH + j, this.BOARD_WIDTH))
      }
    }
  }

  addToPath(square: Square) {
    square.click();
    this.path.push(square);
  }

  viewablePath(offset: number, viewable: number): Square[] {
    return this.path.slice(offset, offset + viewable)
  }
}
