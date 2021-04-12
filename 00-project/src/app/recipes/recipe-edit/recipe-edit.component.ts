import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Ingredient } from 'src/app/shared/ingredient.module';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;
  index!: number;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.editMode = params['index'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = null;
    let recipeDescription = null;
    let recipeImagePath = null;
    let recipeIngredients: Ingredient[] = [];

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.index);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      recipeIngredients = recipe.ingredients;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': new FormArray(recipeIngredients.map(
        (ingredient: Ingredient) => {
          return new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        }
      ))
    })
  }

  get ingredientControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit() {
    if (this.editMode) {
      this.recipesService.updateRecipe(this.index, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
