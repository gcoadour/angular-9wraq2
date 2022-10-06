import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { HourlyTimelineComponent } from './hourly-timeline/hourly-timeline.component';
import { EnergySobrietyDetailsComponent } from './energy-sobriety-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    EnergySobrietyDetailsComponent,
    DescriptionComponent,
    HourlyTimelineComponent,
  ],
  bootstrap: [
    EnergySobrietyDetailsComponent,
    DescriptionComponent,
    HourlyTimelineComponent,
  ],
  exports: [EnergySobrietyDetailsComponent],
})
export class EnergySobrietyDetailsModule {}
