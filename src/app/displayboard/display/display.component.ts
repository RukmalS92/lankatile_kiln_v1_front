import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service/app-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {
  tempIDArray : any[] = []
  tempDataArray : any[] = []
  invIDArray : any[] = []
  invDataArray : any[] = []
  tempsubjectSubscription : Subscription = Subscription.EMPTY;
  invubjectSubscription : Subscription = Subscription.EMPTY;

  constructor(private appservice : AppServiceService) { 
    this.tempsubjectSubscription = appservice.tempSubject.subscribe(
      (data:any) => {
        for (let index = 0; index < data.data.length; index++) {
          const element = data.data[index];
          this.tempIDArray[index] = element[0];
          this.tempDataArray[index] = element[1];
        }
      }
    )

    this.invubjectSubscription = appservice.invSubject.subscribe(
      (data:any) => {
        for (let index = 0; index < data.data.length; index++) {
          const element = data.data[index];
          this.invIDArray[index] = element[0];
          this.invDataArray[index] = element[1];
        }
      }
    )
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() : void {
    this.tempsubjectSubscription.unsubscribe()
    this.invubjectSubscription.unsubscribe()
  }

}
