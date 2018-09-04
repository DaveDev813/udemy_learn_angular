import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  isEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  checkInput(event) {
    this.isEmpty = ((<HTMLInputElement>event.target).value == "");
  }

  clearInput() {
    this.username = "";
    this.isEmpty = true;
  }

}
