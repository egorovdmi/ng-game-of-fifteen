import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from './board.model';
import { BoardGeneratorService } from './board-generator.service';
import { TileLocation, getNearTileIndexes } from './tile-location.model';

@Injectable()
export class GameService {
    private board: Board;
    boardChanged = new Subject<Board>();
    gameComplete = new Subject();

    constructor(private boardGeneratorService: BoardGeneratorService) {
    }

    start() {
        this.board = this.boardGeneratorService.generate();
        this.boardChanged.next(this.board);
    }

    move(tileIndex: number): void {
        const nearTileIndexes = getNearTileIndexes(this.board.rowSize, tileIndex);
        const emptyTileIndex = nearTileIndexes.find((index) => this.board.tiles[index] === null);
        if (emptyTileIndex === undefined) {
            return;
        }

        [this.board.tiles[tileIndex], this.board.tiles[emptyTileIndex]]
            = [this.board.tiles[emptyTileIndex], this.board.tiles[tileIndex]];
        this.board.turnCount++;

        this.boardChanged.next({
            ...this.board,
            tiles: [...this.board.tiles]
        });

        if (isWinningGame(this.board)) {
            this.gameComplete.next();
        }
    }
}

export function isWinningGame(board: Board): boolean {
    for (let i = 1; i < board.tiles.length - 1; i++) {
        if (board.tiles[i] === null
            || board.tiles[i - 1] === null
            || board.tiles[i - 1] > board.tiles[i]) {
            return false;
        }
    }

    return true;
}
