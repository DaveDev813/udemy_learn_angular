import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    LoggerComponent
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
