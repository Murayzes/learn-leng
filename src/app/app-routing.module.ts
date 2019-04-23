import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: 'system', component: SystemComponent},
  { path: 'auth', component: AuthComponent },

  // otherwise redirect to system
  { path: '**', redirectTo: '/system' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
