import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    @keyframes color__ {
      from { color: red; }
      to { color: cyan; }
    }
    h3 {
      color: red;
      animation: color__ infinite 1s alternate;
    }
  `]
})
export class AppComponent {
}
