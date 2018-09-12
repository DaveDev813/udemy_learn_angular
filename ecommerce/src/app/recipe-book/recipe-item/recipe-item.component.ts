import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.pug',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  // @Input public name: string;
  // @Input public desc: string;
  // @Input public imgPath: string;

  constructor() { }

  ngOnInit() {
  }

}
