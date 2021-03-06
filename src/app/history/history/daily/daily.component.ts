import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../service/history.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatProgressBar } from '@angular/material/progress-bar';

//iterface is used to make the custom data_variables
export interface temperatureController {
  controllerID : number,
  temperature : number,
  logtime : String
}

//iterface is used to make the custom data_variables
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})

export class DailyComponent implements OnInit {

  tempElementArray : any[] = [];
  historyUpdateFlag : Number = 0;

  initialUpdate : Boolean = false;
 
  constructor(private historyservice : HistoryService) { 
      historyservice.historySubject.subscribe(
        (data:any) => {
          this.initialUpdate = true;
          if(this.historyUpdateFlag === 0){
            this.tempElementArray = data;
            this.historyUpdateFlag = 1;
          }
          else if(this.historyUpdateFlag === 1){
            this.tempElementArray.push(data);
          }
          //console.log(this.tempElementArray)
          this.historyservice.initialHistoryUpdateSubject.next('http://localhost:3000/temphistory?device=trcx&id=1&init=1')
        }
      )
  }

  ngOnInit(): void {
    this.historyservice.updateTempHistory('http://localhost:3000/temphistory?device=trcx&id=1&init=0')
  }

}
