import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;
  private customSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const customObservable = Observable.create(observer => {
      let count: number = 0;
      setInterval(() => {
        if (count == 2) {
          observer.complete();
        } else if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        } else {
          observer.next(count++);
        }
      }, 1000);
    })

    this.customSubscription = customObservable.pipe(
      filter(data => { return data > 0 }),
      map(data => { return 'Custom observable: ' + data; })
    ).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          alert(error.message) 
        },
        () => {
          console.log('Customer observable: Completed');
        }
      )

    this.intervalSubscription = interval(1000).subscribe(count => {
      console.log('Interval observable: ' + count);
    })
  }

  ngOnDestroy() {
    this.customSubscription.unsubscribe();
    this.intervalSubscription.unsubscribe();
  }

}
