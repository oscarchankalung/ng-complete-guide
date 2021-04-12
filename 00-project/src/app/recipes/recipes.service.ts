import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.module";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipesService {
  recipesUpdated = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // [
  //   new Recipe(
  //     '青醬果仁意大利粉',
  //     '這道法國、意大利常見的地中海菜式，簡單易煮。今次將它變成素食版。',
  //     'https://www.channelb.org/upload/media/3245/a8341469eece9642b53fbc9edd2f7f39_269_249_1.jpg',
  //     [
  //       new Ingredient('青醬', 15),
  //       new Ingredient('意粉', 50)
  //     ]),
  //   new Recipe(
  //     '普羅旺斯燉菜',
  //     '為大家示範用「蕃茄乾紅醬」製作法國名菜「普羅旺斯燉菜」',
  //     'https://www.channelb.org/upload/media/3131/161c16fd862e192b32c589f12489d5fd_269_249_1.jpg',
  //     [
  //       new Ingredient('意大利青瓜', 300),
  //       new Ingredient('翠玉瓜', 200)
  //     ])
  // ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next(this.recipes.slice());
  }
  getRecipesLength() {
    return this.recipes.length;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredents: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredents);
  }
}
