import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';
import { RecipeResolver } from './recipe-detail/recipe-resolver.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
