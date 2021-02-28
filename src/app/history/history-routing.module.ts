import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//router components
import { HistoryComponent } from './history/history.component';
import { DailyComponent } from './history/daily/daily.component';

/*
 * When using child router on root page below is the method to use.
   the child pages should be defined in children  
 */

const routes: Routes = [
    {path : "history", 
    component : HistoryComponent,
    children : [
        {path : "daily", component : DailyComponent}
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
