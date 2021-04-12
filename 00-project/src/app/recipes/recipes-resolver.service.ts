import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[] | null> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.recipesService.getRecipesLength() === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return null;
    }
  }
}
