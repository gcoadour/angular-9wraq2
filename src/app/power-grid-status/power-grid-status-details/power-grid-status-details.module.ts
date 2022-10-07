import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { HourlyTimelineComponent } from './hourly-timeline/hourly-timeline.component';
import { PowerGridStatusDetailsComponent } from './power-grid-status-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    PowerGridStatusDetailsComponent,
    DescriptionComponent,
    HourlyTimelineComponent,
  ],
  bootstrap: [
    PowerGridStatusDetailsComponent,
    DescriptionComponent,
    HourlyTimelineComponent,
  ],
  exports: [PowerGridStatusDetailsComponent],
})
export class PowerGridStatusDetailsModule {}
