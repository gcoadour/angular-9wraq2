import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerGridStatusModule } from './power-grid-status/power-grid-status.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PowerGridStatusModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
