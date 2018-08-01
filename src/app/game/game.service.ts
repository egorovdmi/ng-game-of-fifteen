import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from './board.model';
import { BoardGeneratorService } from './board-generator.service';
import { TileLocation, getNearTileIndexes } from './tile-location.model';

@Injectable()
export class GameService {
    private board: Board;
    boardChanged = new Subject<Board>();

    constructor(private boardGeneratorService: BoardGeneratorService) {
    }

    start() {
        this.board = this.boardGeneratorService.generate();
        this.boardChanged.next(this.board);
    }

    move(tileIndex: number): boolean {
        const nearTileIndexes = getNearTileIndexes(this.board.rowSize, tileIndex);
        const emptyTileIndex = nearTileIndexes.find((index) => this.board.tiles[index] === null);
        if (emptyTileIndex === undefined) {
            return false;
        }

        [this.board.tiles[tileIndex], this.board.tiles[emptyTileIndex]]
            = [this.board.tiles[emptyTileIndex], this.board.tiles[tileIndex]];
        this.boardChanged.next({
            ...this.board,
            tiles: [...this.board.tiles],
            turnCount: this.board.turnCount++
        });
        return true;
    }
}
