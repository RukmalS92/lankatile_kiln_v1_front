import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vfd',
  templateUrl: './vfd.component.html',
  styleUrls: ['./vfd.component.css']
})
export class VfdComponent implements OnInit {
  
  @Input('vfdName') vfd_name : string = "Main Drive 1";
  @Input('speed') speed : Number = 56;

  constructor() { }

  ngOnInit(): void {
  }

}
