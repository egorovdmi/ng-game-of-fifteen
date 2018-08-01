import { BoardGeneratorService } from './board-generator.service';

describe('BoardGeneratorService', () => {
    it('generate_BoardWithUnsortedTiles', () => {
        //arrange
        let isSorted = true;
        const boardRowSize = 4;
        const sut = new BoardGeneratorService();

        //act
        const board = sut.generate(boardRowSize);

        //assert
        for (let i = 1; i < board.tiles.length; i++) {
            if (board.tiles[i] !== null
                && board.tiles[i] < board.tiles[i - 1]) {
                isSorted = false;
                break;
            }
        }

        expect(isSorted).toBe(false);
    });

    it('generate_BoardWithOnlyOneEmptyTile', () => {
        //arrange
        const boardRowSize = 4;
        const sut = new BoardGeneratorService();

        //act
        const board = sut.generate(boardRowSize);

        //assert
        let emptyTilesCount = board.tiles.reduce((acc, current) => {
            return current === null ? acc + 1 : acc;
        }, 0);

        expect(emptyTilesCount).toBe(1);
    });

    it('generate_BoardTileValuesAreUnique', () => {
        //arrange
        const boardRowSize = 4;
        const hashSet = {};
        const sut = new BoardGeneratorService();
        let areUnique = true;

        //act
        const board = sut.generate(boardRowSize);

        //assert
        for (let i = 0; i < board.tiles.length; i++) {
            if (hashSet[board.tiles[i]]) {
                areUnique = false;
                break;
            }
            hashSet[board.tiles[i]] = true;
        }

        expect(areUnique).toBe(true);
    });
});
