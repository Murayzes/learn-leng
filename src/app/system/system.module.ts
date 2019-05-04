import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { VideoplayerPageComponent } from './videoplayer-page/videoplayer-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { PlayerComponent } from './../_components/player/player.component';
import { SubtitleComponent } from './../_components/subtitle/subtitle.component';

@NgModule({
  declarations: [
    SystemComponent,
    VideoplayerPageComponent,
    HistoryPageComponent,
    DictionaryPageComponent,
    AboutusPageComponent,
    VideoplayerPageComponent,
    PlayerComponent,
    SubtitleComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule
  ]
})
export class SystemModule { }
