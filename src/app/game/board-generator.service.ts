import { Board } from './board.model';

const DefaultBoardSize = 4;

export class BoardGeneratorService {

    constructor() { }

    generate(boardRowSize: number = DefaultBoardSize): Board {
        const boardTiles = new Array<number>();
        for (let i = 1; i < Math.pow(boardRowSize, 2); i++) {
            boardTiles.push(i);
        }

        this.shuffle(boardTiles);
        boardTiles.push(null);

        return new Board(boardTiles);
    }

    /**
     * Shuffles array in place. ES6 version.
     * @param {Array} a items An array containing the items.
     */
    private shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}
