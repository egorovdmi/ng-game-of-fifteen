import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { BoardGeneratorService } from './board-generator.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [GameService, BoardGeneratorService]
})
export class GameModule { }