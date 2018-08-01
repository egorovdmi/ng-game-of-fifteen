export class Board {
    tiles: Array<number>;
    rowSize: number;
    turnCount: number = 0;

    constructor(tiles: Array<number>) {
        this.tiles = tiles;
        this.rowSize = Math.sqrt(tiles.length);
    }
}
