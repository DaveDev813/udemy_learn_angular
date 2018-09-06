import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styles: [`
    .hidePara {
      opacity: 0;
    }
    .well {
      margin-top: 2%;
    }
  `]
})
export class ParagraphComponent implements OnInit {

  hideP = false;
  public logCount = 0;
  logItems = [];

  constructor() { }

  ngOnInit() {
  }

  onHide(){
    this.logCount ++;
    this.logItems.push(this.logCount);
    this.hideP = this.hideP ? false : true;
  }

  public getCount(){
    return this.logCount;
  }


}
