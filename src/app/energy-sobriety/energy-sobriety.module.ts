import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EnergySobrietyComponent } from './energy-sobriety.component';
import { EnergySobrietyDaysComponent } from './energy-sobriety-days/energy-sobriety-days.component';
import { EnergySobrietyDetailsModule } from './energy-sobriety-details/energy-sobriety-details.module';

@NgModule({
  imports: [BrowserModule, FormsModule, EnergySobrietyDetailsModule],
  declarations: [EnergySobrietyComponent, EnergySobrietyDaysComponent],
  bootstrap: [EnergySobrietyComponent, EnergySobrietyDaysComponent],
})
export class EnergySobrietyModule {}
