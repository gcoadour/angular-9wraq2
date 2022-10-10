import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'power-grid-status-days',
  templateUrl: './power-grid-status-days.component.html',
  styleUrls: ['./power-grid-status-days.component.scss'],
})
export class PowerGridStatusDaysComponent {
  @Input() daysValues: any;
  @Output() selectedDay: EventEmitter<any> = new EventEmitter();
  selectDay(values: any) {
    this.selectedDay.emit(values);
  }
}
