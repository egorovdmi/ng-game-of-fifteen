export class TileLocation {
    index: number;
    x: number;
    y: number;

    constructor(index: number, x: number, y: number) {
        this.index = index;
        this.x = x;
        this.y = y;
    }

    static fromTileIndex(boardRowLength: number, index: number): TileLocation {
        const x = index % boardRowLength;
        const y = Math.floor(index / boardRowLength);
        return new TileLocation(index, x, y);
    }

    static fromCoords(boardRowLength: number, x: number, y: number) {
        if (x < 0 || y < 0 || x >= boardRowLength || y >= boardRowLength) {
            return null;
        }

        const index = y * boardRowLength + x;
        return index < Math.pow(boardRowLength, 2)
            ? new TileLocation(index, x, y)
            : null;
    }
}

export function getNearTileIndexes(boardRowLength: number, tileIndex: number): Array<number> {
    const location = TileLocation.fromTileIndex(boardRowLength, tileIndex);
    const nearTilesLocations: Array<TileLocation> = [
        TileLocation.fromCoords(boardRowLength, location.x, location.y - 1),
        TileLocation.fromCoords(boardRowLength, location.x + 1, location.y),
        TileLocation.fromCoords(boardRowLength, location.x, location.y + 1),
        TileLocation.fromCoords(boardRowLength, location.x - 1, location.y)
    ].filter(t => t !== null);

    return nearTilesLocations.map(t => t.index);
}
