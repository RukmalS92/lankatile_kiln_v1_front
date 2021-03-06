import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules
import { DisplayboardModule } from './displayboard/displayboard.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryModule } from './history/history.module';

//services
import { ErrorHandlerService } from './errorHandler/error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayboardModule,
    HistoryModule,
    BrowserAnimationsModule,
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
