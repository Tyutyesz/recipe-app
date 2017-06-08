import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel' +
        '_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel' +
        '_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ')
  ];

  constructor() { }

  ngOnInit() {
  }

}
