import { Injectable } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../../errorHandler/error-handler.service';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class SharedService {
  temperatureURL = 'http://localhost:3000/temp';
  vfdURL = "";

  //data transfer subjects
  tempSubject = new Subject()

  constructor(private httpclient : HttpClient, private errorHandler : ErrorHandlerService) {
    interval(2000)
    .subscribe(
      (d:any) =>{
        this.getTemperatureData();
      }
    )
   }

  getTemperatureData = () => {
    this.httpclient.get(this.temperatureURL, {responseType : 'json'})
    .pipe(
      retry(2),
      map(
        d => d
      ),
      catchError (this.errorHandler.handlerError)
    )
    .subscribe(
      d => this.tempSubject.next(d)
    )
  }

}
