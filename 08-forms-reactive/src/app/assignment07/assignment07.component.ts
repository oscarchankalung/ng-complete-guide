import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-assignment07',
  templateUrl: './assignment07.component.html',
  styleUrls: ['./assignment07.component.css']
})
export class Assignment07Component implements OnInit {
  projectForm: FormGroup;
  projectStatusOptions: string[] = ['Stable', 'Critical', 'Finished']

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, 
        Validators.required,
        CustomValidators.asyncForbiddenProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.projectStatusOptions[1])
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
