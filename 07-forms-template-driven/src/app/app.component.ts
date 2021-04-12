import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: false}) signupForm: NgForm;
  questionDefault: string = 'pet';
  questionAnswer: string;
  genders: string[] = ['female', 'male', 'others'];

  user = {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    secretAnswer: '',
  }

  suggestUsername() {
    this.signupForm.form.patchValue({
      userData: {
        username: 'Superuser'
      }
    })
  }

  suggestOscar() {
    this.signupForm.setValue({
      userData: {
        username: 'Oscar Chan',
        email: 'oscarchankalung@gmail.com',
        gender: 'male'
      },
      secret: {
        secretQuestion: 'pet',
        secretAnswer: 'Turtle Poppy'
      }
    })
  }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.secretQuestion = `Your first ${this.signupForm.value.secret.secretQuestion}?`;
    this.user.secretAnswer = this.signupForm.value.secret.secretAnswer;
    this.signupForm.reset();
  }

}
