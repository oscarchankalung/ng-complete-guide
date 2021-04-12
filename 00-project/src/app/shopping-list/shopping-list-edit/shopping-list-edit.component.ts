import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: false}) ingredientForm!: NgForm;
  editingSubscription!: Subscription;
  editMode = false;
  editingIndex!: number;
  editingIngredient!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingIndex = index;
        this.editingIngredient = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editingIngredient.name,
          amount: this.editingIngredient.amount
        });
      }
    )
  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }

  onSubmit() {
    const value = this.ingredientForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editingIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onCancel();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editingIndex);
    this.onCancel();
  }

  onCancel() {
    this.ingredientForm.reset();
    this.editMode = false;
  }
}
