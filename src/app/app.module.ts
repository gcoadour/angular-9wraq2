import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HourlyTimelineComponent } from './energy-sobriety/energy-sobriety-details/hourly-timeline.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HourlyTimelineComponent],
  bootstrap: [HourlyTimelineComponent],
})
export class AppModule {}
