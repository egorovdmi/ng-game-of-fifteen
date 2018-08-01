import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService } from './game/game.service';
import { Board } from './game/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board: Board;
  boardChangedSubscription: Subscription;
  boardGameCompleteSubscription: Subscription;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.boardChangedSubscription = this.gameService.boardChanged.subscribe((board) => {
      this.board = board;
    });
    this.boardGameCompleteSubscription = this.gameService.gameComplete.subscribe(() => {
      alert('You are the winner!');
      this.gameService.start();
    });
    this.gameService.start();
  }

  ngOnDestroy() {
    this.boardChangedSubscription.unsubscribe();
    this.boardGameCompleteSubscription.unsubscribe();
  }

  onMove(tileIndex) {
    this.gameService.move(tileIndex);
  }

  onReset() {
    this.gameService.start();
  }
}
