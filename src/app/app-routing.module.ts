import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvStandComponent } from './tv-stand/tv-stand.component';
import { ComputerDeskComponent } from './computer-desk/computer-desk.component';

const routes: Routes = [
  { path: '', component: TvStandComponent },
  { path: 'desk', component: ComputerDeskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
