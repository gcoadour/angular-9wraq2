import { Component, Input } from '@angular/core';

@Component({
  selector: 'hourly-timeline',
  templateUrl: './hourly-timeline.component.html',
  styleUrls: ['./hourly-timeline.component.scss'],
})
export class HourlyTimelineComponent {
  @Input() hourlyTimelineValues: any;
}
