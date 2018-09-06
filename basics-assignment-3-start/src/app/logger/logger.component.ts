import { Component, OnInit } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  stampT;
  logItems = [];
  logCtr = 0;
  isBlue = true;

  constructor() {
    this.stampT = new Date();
  }

  ngOnInit() {
  }

  setBlue(){

    return this.isBlue = (this.logCtr > 4) ? true : false;
  }


}
