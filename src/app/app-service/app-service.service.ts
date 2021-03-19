import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { interval, of, Subject, Subscription } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AppServiceService implements OnInit, OnDestroy {

  temperatureURL = 'http://localhost:3000/temp';
  invURL = 'http://localhost:3000/inv';
  //subscription
  temperaturedataSubjectSubscription : Subscription = Subscription.EMPTY;
  inverterdataSubjectSubscription : Subscription = Subscription.EMPTY;
  intervalSubscription : Subscription =  Subscription.EMPTY;
  
  //data transfer subjects
  tempSubject = new Subject()
  invSubject = new Subject()

  constructor(private httpclient : HttpClient, private errorHandler : ErrorHandlerService) { 
    this.intervalSubscription = interval(2000)
    .subscribe(
      (d:any) =>{
        this.getTemperatureData();
        this.getInverterData();
      }
    )
  }

  //updating realtime temperature data
  getTemperatureData = () => {
   this.temperaturedataSubjectSubscription = this.httpclient.get(this.temperatureURL, {responseType : 'json'})
    .pipe(
      retry(1),
      map(
        (data : any) => data
      ),
      catchError (this.errorHandler.handlerError)
    )
    .subscribe(
      (data :any) => this.tempSubject.next(data)
    )
  }

  //updating realtime inverter data
  getInverterData = () => {
    this.inverterdataSubjectSubscription = this.httpclient.get(this.invURL, {responseType : 'json'})
    .pipe(
      retry(1),
      map(
        (data :any) => data
      ),
      catchError(this.errorHandler.handlerError)
    )
    .subscribe(
      (data :any) => this.invSubject.next(data)
    )
  }

  ngOnInit() :void {

  }

  ngOnDestroy() : void {
    this.temperaturedataSubjectSubscription.unsubscribe()
    this.intervalSubscription.unsubscribe()
    this.inverterdataSubjectSubscription.unsubscribe()
  }
}
