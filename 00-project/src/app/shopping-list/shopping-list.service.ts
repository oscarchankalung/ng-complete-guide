import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.module";

@Injectable()
export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Ox tail', 10),
    new Ingredient('Pig tail', 10)
  ]
  getIngredient(index: number) {
    return Object.create(this.ingredients[index]);
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  addIngredients(ingredents: Ingredient[]) {
    this.ingredients.push(...ingredents);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
}
