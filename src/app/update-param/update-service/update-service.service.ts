import { Injectable } from '@angular/core';
import { interval, of, Subject, Subscription } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../errorHandler/error-handler.service';


@Injectable()
export class UpdateServiceService {

  updateTemperatureSttings_URL = "http://localhost:3000/tempwr"

  constructor(private httpclient : HttpClient, private errorhandler : ErrorHandlerService) { }

  updateTemperatureSettings = (body) =>{
    return this.httpclient.post(this.updateTemperatureSttings_URL, body, {responseType : 'json'})
    .pipe(
      map(
        (data:any) => data
      ),
      catchError(this.errorhandler.handlerError)
    )
  }
}
