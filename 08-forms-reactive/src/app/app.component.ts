import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female', 'others'];
  forbiddenUsernames = ['Amy', 'Ben'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsername.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail]),
        'gender': new FormControl('male')
      }),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(value => console.log(value));
    this.signupForm.statusChanges.subscribe(status => console.log(status));
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    this.onClearHobby();
  }

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onRemoveHobby() {
    const last = this.hobbyControls.length - 1;
    (<FormArray>this.signupForm.get('hobbies')).removeAt(last);
  }

  onClearHobby() {
    (<FormArray>this.signupForm.get('hobbies')).clear();
  }

  forbiddenUsername(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          return resolve({'emailIsForbidden': true});
        } else {
          return resolve(null);
        }
      }, 1000)
    })
  }

  suggestCatherine() {
    this.onClearHobby();
    for(let i = 0; i < 3; i++) {
      this.onAddHobby();
    }
    this.signupForm.setValue({
      'userData': {
        'username': 'Catherine Splendore',
        'email': 'csplendore@gmail.com',
        'gender': 'female'
      },
      'hobbies': ['Yoga', 'YouTube', 'Reading']
    });
  }

  suggestUsername() {
    this.signupForm.patchValue({
      'userData': {
        'username': 'Amy'
      }
    });
  }
}
