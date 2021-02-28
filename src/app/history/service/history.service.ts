import { Injectable } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../../errorHandler/error-handler.service'

@Injectable()
export class HistoryService {
  //history data update URL
  historyURL = 'http://localhost:3000/temphistory';
  //subject to update history data
  historySubject = new Subject()

  constructor(private httpclient : HttpClient, private errorhandler : ErrorHandlerService) { 
    interval(5000)
    .subscribe(
      (data:any) => {
        this.updateTempHistory()
      }
    )
  }

  //update temperature
  updateTempHistory = () => {
    this.httpclient.get(this.historyURL)
    .pipe(
      retry(2),
      map(d=>d),
      catchError(this.errorhandler.handlerError)
    )
    .subscribe(
      (data:any) => {
        this.historySubject.next(data);
      }
    )
  }

}
