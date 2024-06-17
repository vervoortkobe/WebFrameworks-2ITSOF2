import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    PersonalInfoComponent,
    GameComponent,
    ScoresComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'intro', component: IntroductionComponent, pathMatch: 'full' },
        { path: 'info', component: PersonalInfoComponent },
        { path: 'game', component: GameComponent },
        { path: 'scores', component: ScoresComponent },
        { path: '', redirectTo: '/intro', pathMatch: 'full' },
      ], { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
