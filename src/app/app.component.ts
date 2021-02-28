import { Component } from '@angular/core';

/**
 * in angular always the relevant services run when on its child component is running
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kilnScadaV1';
}
