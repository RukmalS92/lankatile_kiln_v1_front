import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../../app-service/app-service.service';
import { Subscription } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';
import { UpdateServiceService } from '../update-service/update-service.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit, OnDestroy {

  temperatureDataUpdateStatus : String = "Pending..."
  responseStatus : string = ""

  temperaturePVArrayJSON : {}
  temperatureSVArrayJSON : {}

  presentValue_trc : number[] = [];

  @ViewChild('temperature_settings') temperature_settings : NgForm;
  @ViewChild('x') x : NgModel;

  tempsubjectSubscription : Subscription = Subscription.EMPTY //EMPTY -> creating Subscription safely
  temperatureDataUpdateSubscription : Subscription = Subscription.EMPTY

  constructor(private appservice : AppServiceService, private updateservice : UpdateServiceService) { 
    this.tempsubjectSubscription = appservice.tempSubject.subscribe(
      (data:any) => {
        let temperatureDataArray = data.data;
        temperatureDataArray.forEach(temperatureElement => {
            this.presentValue_trc.push(temperatureElement[1]);
        });
      }
    )
  }

  ngOnInit(): void {
    
  }

  

  onFormSubmit(form : NgForm) : void {
    const values = Object.values(this.temperature_settings.value) //get values from js object {key : value}
    let temp_object = {
      temp_t1 : Number(values[0]),
      temp_t2 : Number(values[1]),
      temp_t3 : Number(values[2]),
      temp_t4 : Number(values[3]),
      temp_t5 : Number(values[4]),
      temp_t6 : Number(values[5]),
      temp_t7 : Number(values[6]),
      temp_t8 : Number(values[7]),
      temp_t9 : Number(values[8]),
      temp_t10 : Number(values[9]),
    }
    this.responseStatus = "";
    this.temperatureDataUpdateStatus = "Submitted...";
    this.temperatureDataUpdateSubscription = this.updateservice.updateTemperatureSettings(temp_object)
    .subscribe(
      (response:any) => {
        this.responseStatus = response.status;
        if(response.status === "success"){
          this.temperatureDataUpdateStatus = "Update success...";
        }
        else if(response.status === "fail"){
          this.temperatureDataUpdateStatus = "Update failed...";
        }
      }
    )

  }

  ngOnDestroy() : void {
    this.tempsubjectSubscription.unsubscribe()
    this.temperatureDataUpdateSubscription.unsubscribe()
  }

  

}
