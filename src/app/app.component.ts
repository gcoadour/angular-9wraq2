import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  hoursColor = [
    1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 3, 2, 1, 2, 1, 1, 1, 1, 1, 1,
  ];
}
