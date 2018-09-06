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
  logCount = 0;
  logItems = [];
  isBlue = false;

  constructor() { }

  ngOnInit() {
  }

  onHide(){
    this.logCount ++;
    this.logItems.push(new Date());
    this.hideP = !this.hideP;
  }

  public getCount(){
    return this.logCount;
  }

  checkCount(ctr){
    ctr = ctr + 1;
    return (ctr >= 5);
  }


}
