import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnergySobrietyModule } from './energy-sobriety/energy-sobriety.module';

@NgModule({
  imports: [BrowserModule, FormsModule, EnergySobrietyModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
