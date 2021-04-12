import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  index!: number;
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.recipe = this.recipesService.getRecipe(this.index);
      }
    )
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.route.snapshot.params['index']);
    this.router.navigate(['/recipes']);
  }
}
