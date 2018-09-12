import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.pug',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test rec', 'desc test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371595164628.jpeg'),
    new Recipe('test rec', 'desc test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371595164628.jpeg'),
    new Recipe('test rec', 'desc test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371595164628.jpeg'),
    new Recipe('test rec', 'desc test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371595164628.jpeg'),
    new Recipe('test rec', 'desc test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371595164628.jpeg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
