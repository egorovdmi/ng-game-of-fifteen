import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameModule } from './game/game.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
