import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { VideoplayerPageComponent } from './videoplayer-page/videoplayer-page.component';
import { SystemComponent } from './system.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SystemComponent,
    VideoplayerPageComponent,
    HistoryPageComponent,
    DictionaryPageComponent,
    AboutusPageComponent,
    VideoplayerPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class SystemModule { }
