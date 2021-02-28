import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tempIDArray : any[] = []
  tempDataArray : any[] = []

  constructor(private sharedservice : SharedService) { 
    sharedservice.tempSubject.subscribe(
      (data:any) => {
        for (let index = 0; index < data.data.length; index++) {
          const element = data.data[index];
          this.tempIDArray[index] = element[0];
          this.tempDataArray[index] = element[1];
        }
      }
    )
  }

  ngOnInit(): void {
    
  }

}
