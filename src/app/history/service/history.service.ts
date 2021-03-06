import { Injectable } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../../errorHandler/error-handler.service'

@Injectable()
export class HistoryService {
  //history data update URL
  historyFinalURL = "";
  //subject to update history data
  historySubject = new Subject()
  //subject to update initial hitory update to tabel
  initialHistoryUpdateSubject = new Subject()
  //multicast subject for temperature and vfd device data identification
  multicastDeviceSubject = new Subject()

  history_initial_flag = 0;

  constructor(private httpclient : HttpClient, private errorhandler : ErrorHandlerService) { 
    //intial flag update subscription
    this.initialHistoryUpdateSubject.subscribe(
      (data:any) => {
        //this.historyFinalURL = 'http://localhost:3000/temphistory?device=' + encodeURIComponent(data.device) + '&id=' + encodeURIComponent(data.id) + '&init=' + encodeURIComponent(data.initflag);
        this.historyFinalURL = data;
      }
    )

    //update histroy data on interval
    interval(5000)
    .subscribe(
      (data:any) => {
        this.updateTempHistory(this.historyFinalURL)
      }
    )
  }

  //update temperature
  updateTempHistory = (historyURLencoded) => {
    this.httpclient.get(historyURLencoded)
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
