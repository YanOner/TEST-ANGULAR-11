import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtmComponent } from './atm/atm.component';

const routes: Routes = [
  { path: '', redirectTo: '/atm', pathMatch: 'full' },
  { path: 'atm', component: AtmComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
