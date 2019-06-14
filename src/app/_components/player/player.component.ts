import { Component } from '@angular/core';

import { SubtitleComponent } from './../subtitle/subtitle.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  playerVars = { cc_lang_pref: 'en' };
  id = (JSON.parse(localStorage.getItem('currentIdVideo')));

  constructor(
    public subtitleComponent: SubtitleComponent
  ) { }

  public player: YT.Player;

  // current time Player
  // currentTime() {
  //   const currTime = this.player.getCurrentTime();
  //   return currTime;
  // }

  // get subtitle function
  subtitle() {
    const jsonData = JSON.parse(localStorage.getItem('subtitleObj'))['transcript'];
    for (let i = 0; i < jsonData.text.length; i++) {
      const text = jsonData.text[i];
      const textStart  = Number(text.start);
      const textDur = Number(text.dur);
      const textEnd = Number(textStart + textDur);
      if (textStart >= 100 && 100 >= textEnd) {
        console.log(text['#text']);
      }
    }
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
