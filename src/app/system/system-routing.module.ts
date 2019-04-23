import { AuthGuard } from './../_guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { VideoplayerPageComponent } from './videoplayer-page/videoplayer-page.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
    {path: 'videoplayer', component: VideoplayerPageComponent},
    {path: 'dictionary', component: DictionaryPageComponent},
    {path: 'history', component: HistoryPageComponent},
    {path: 'aboutus', component: AboutusPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
