import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment04',
  templateUrl: './assignment04.component.html',
  styleUrls: ['./assignment04.component.css']
})
export class Assignment04Component implements OnInit {
  counts: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  onCounting(count: number) {
    this.counts.push(count);
  }
}
