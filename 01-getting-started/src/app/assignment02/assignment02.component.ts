import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment02',
  templateUrl: './assignment02.component.html',
  styleUrls: ['./assignment02.component.css']
})
export class Assignment02Component implements OnInit {
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetUsername() {
    this.username = '';
  }
}
