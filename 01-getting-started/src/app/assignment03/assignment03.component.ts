import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment03',
  templateUrl: './assignment03.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class Assignment03Component {
  displayDetails: boolean = false;
  logs: Array<string> = [];

  constructor() { }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    const timestamp: string = this.timeStamp();
    const displayStatus: string = this.displayDetails ? 'details displayed' : 'no details displayed';
    this.logs.push(`${timestamp}: ${displayStatus}.`);
  }

  getColor(number: number) {
    return number >= 5 ? 'blue' : 'transparent';
  }

  timeStamp() {
      let now = new Date();
      let date = [ now.getFullYear(), now.getMonth() + 1, now.getDate() ];
      let time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
      let suffix = ( time[0] < 12 ) ? "AM" : "PM";
      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
      time[0] = time[0] || 12;
      let plain = time.map(time => time.toString().padStart(2, '0'));
      return date.join("/") + " " + plain.join(":") + " " + suffix;
    }
}
