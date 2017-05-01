import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h3> Airline passengers </h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          Index {{i}} - {{ passenger.id }} : {{ passenger.fullname }}
        </li>
      </ul>
      <hr/>
      <h3> Airline passengers (using ng-template)</h3>
      <ul>
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            Index {{i}} - {{ passenger.id }} : {{ passenger.fullname }}
          </li>
        </ng-template>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
}