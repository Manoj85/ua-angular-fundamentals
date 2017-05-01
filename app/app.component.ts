import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <!-- (click) Event-binding -->
      <button (click)="handleClick()">Change Name</button>

      <!-- One-way data-binding -->
      <input type="text"
             [ngModel]="name"
             (ngModelChange)="handleChange($event)"
             >
      <!-- Two-way data-binding -->
      <input type="text"
             [(ngModel)]="name"
             >
      <div> Name = {{ name }} </div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Manoj';

  handleChange(value: string) {
    this.name = value;
  }

  handleClick() {
    this.name = 'Talagadadeevi';
  }
}