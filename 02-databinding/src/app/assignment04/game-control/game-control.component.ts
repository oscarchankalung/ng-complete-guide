import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Input() count: number;
  @Output() counting = new EventEmitter<number>();
  interval;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => this.counting.emit(this.count + 1), 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
