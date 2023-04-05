export const BOARD_WIDTH = 8;

export class Square {
    index: number;
    x: number;
    y: number;
    clicked: boolean = false;
    colour: string;

    constructor(index: number) {
        this.index = index;
        this.x = index % BOARD_WIDTH;
        this.y = Math.floor(index / BOARD_WIDTH);
        this.colour = ((this.x + this.y)  % 2 === 0) ? '#ff5c8c' : 'black';

    }

    click() {
        this.clicked = true;
    }

    squareName(): string {
        return String.fromCharCode(65 + this.x) + (this.y + 1);
    }

}