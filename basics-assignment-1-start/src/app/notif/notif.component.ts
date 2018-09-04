import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styles: [`
    @keyframes colorr {
      from { color: red; }
      to { color: cyan; }
    }
    h1 {
      color: cyan;
      animation: infinite 1s colorr alternate;
    }
  `]
})
export class NotifComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
