import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './displayboard/display/display.component';
import { HistoryComponent } from './history/history/history.component';

const routes: Routes = [
  {path : "dashboard", component : DisplayComponent},
  {path : "history", component : HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
