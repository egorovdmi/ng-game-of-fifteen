import { TileLocation, getNearTileIndexes } from './tile-location.model';

const board4x4RowLength = 4;
const coords = [
    [0,0],[1,0],[2,0],[3,0],
    [0,1],[1,1],[2,1],[3,1],
    [0,2],[1,2],[2,2],[3,2],
    [0,3],[1,3],[2,3],[3,3]
];
const nearIndexes = [
    [1, 4],
    [0, 2, 5],
    [1, 3, 6],
    [2, 7],
    [0, 5, 8],
    [1, 4, 6, 9],
    [2, 5, 7, 10],
    [3, 6, 11],
    [4, 9, 12],
    [5, 8, 10, 13],
    [6, 9, 11, 14],
    [7, 10, 15],
    [8, 13],
    [9, 12, 14],
    [10, 13, 15],
    [11, 14]
];

describe('TileLocationHelperMethods', () => {
    it('fromTileIndex_IndexWithin4x4Board_CorrectLocation', () => {
        //act & assert
        for (let i = 0; i < coords.length; i++) {
            const location = TileLocation.fromTileIndex(board4x4RowLength, i);
            expect(location.x).toBe(coords[i][0]);
            expect(location.y).toBe(coords[i][1]);
        }
    });

    it('fromCoords_CoordinatesWithin4x4Board_CorrectLocation', () => {
        //act & assert
        for (let i = 0; i < coords.length; i++) {
            const x = coords[i][0];
            const y = coords[i][1];
            const location = TileLocation.fromCoords(board4x4RowLength, x, y);
            expect(location.index).toBe(i);
        }
    });

    it('getNearTileIndexes_IndexWithin4x4Board_CorrectNearIndexes', () => {
        //act & assert
        for (let i = 0; i < coords.length; i++) {
            const indexes = getNearTileIndexes(board4x4RowLength, i);
            expect(nearIndexes[i].length).toBe(indexes.length);
        }
    });
});
