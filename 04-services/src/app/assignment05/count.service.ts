import { Injectable } from "@angular/core";

@Injectable()
export class CountService {
  count: number = 0;

  logAction(message: string) {
    console.log(`Action #${++this.count}: ${message}`);
  }
}
