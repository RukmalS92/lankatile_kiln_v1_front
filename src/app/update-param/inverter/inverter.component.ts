import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.css']
})
export class InverterComponent implements OnInit {
  responseStatus : String = ""

  @ViewChild('inverter_settings') inverter_settings

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {

  }

}
