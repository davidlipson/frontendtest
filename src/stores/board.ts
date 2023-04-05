import { defineStore } from 'pinia'
import { BOARD_WIDTH, Square } from '@/square'

const initializeBoard = (): Square[][] => {
  let board: Square[][] = []
  for (let i = 0; i < BOARD_WIDTH; i++) {
    board.push([])
    for (let j = 0; j < BOARD_WIDTH; j++) {
      board[i].push(new Square(i * BOARD_WIDTH + j))
    }
  }
  return board
}

export const useBoardStore = defineStore('board', {
  state: () => ({
    path: [] as Square[],
    board: initializeBoard()
  }),
  actions: {
    addSquare(square: Square) {
      this.path.push(square)
    }
  }
})
