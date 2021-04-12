import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment06',
  templateUrl: './assignment06.component.html',
  styleUrls: ['./assignment06.component.css']
})
export class Assignment06Component implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  subscriptions: string[] = ['Basic', 'Advance', 'Pro']
  subscriptionDefault: string = this.subscriptions[1];
  data = {
    email: '',
    password: '',
    subscription: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
    this.data.email = this.form.value.email;
    this.data.password = this.form.value.password;
    this.data.subscription = this.form.value.subscription;
    this.form.reset();
  }
}
