import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PowerGridStatusDetailsModule } from './power-grid-status-details/power-grid-status-details.module';
import { PowerGridStatusDaysComponent } from './power-grid-status-days/power-grid-status-days.component';
import { PowerGridStatusComponent } from './power-grid-status.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PowerGridStatusDetailsModule],
  declarations: [PowerGridStatusComponent, PowerGridStatusDaysComponent],
  bootstrap: [PowerGridStatusComponent],
  exports: [PowerGridStatusComponent],
})
export class PowerGridStatusModule {}
