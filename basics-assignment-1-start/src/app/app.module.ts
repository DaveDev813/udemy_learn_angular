import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessComponent } from './notif/success/success.component';
import { WarningComponent } from './notif/warning/warning.component';
import { NotifComponent } from './notif/notif.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    NotifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
