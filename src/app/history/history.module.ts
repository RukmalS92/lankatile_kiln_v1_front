import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing.module';
import { MatTableModule } from '@angular/material/table';  
import { HistorynavbarComponent } from '../history/historynavbar/historynavbar.component';
import { HistoryComponent } from './history/history.component';
import { DailyComponent } from './history/daily/daily.component';
import { HistoryService } from './service/history.service';


@NgModule({
  declarations: [HistorynavbarComponent, HistoryComponent, DailyComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatTableModule
  ],
  exports :  [HistorynavbarComponent,DailyComponent,HistoryComponent],
  providers: [HistoryService]
})
export class HistoryModule { }