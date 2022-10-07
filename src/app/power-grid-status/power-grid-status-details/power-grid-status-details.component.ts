import { Component, Input } from '@angular/core';

@Component({
  selector: 'power-grid-status-details',
  templateUrl: './power-grid-status-details.component.html',
  styleUrls: ['./power-grid-status-details.component.css'],
})
export class PowerGridStatusDetailsComponent {
  @Input() detailsValues: any;
}
