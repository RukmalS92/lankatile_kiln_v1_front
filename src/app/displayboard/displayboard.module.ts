import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VfdComponent } from './vfd/vfd.component';
import { TempComponent } from './temp/temp.component';
import { DisplayComponent } from './display/display.component';

import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [VfdComponent, TempComponent, DisplayComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [VfdComponent, TempComponent, DisplayComponent],
  providers : [SharedService]
})
export class DisplayboardModule { }
