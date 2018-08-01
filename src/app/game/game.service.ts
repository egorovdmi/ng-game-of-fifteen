import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from './board.model';
import { BoardGeneratorService } from './board-generator.service';

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
}