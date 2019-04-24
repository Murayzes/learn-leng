import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { VideoplayerPageComponent } from './videoplayer-page/videoplayer-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';

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
    SystemRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule
  ]
})
export class SystemModule { }
