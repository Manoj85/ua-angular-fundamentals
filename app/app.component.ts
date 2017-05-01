import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">Change Name</button>
      <input type="text"
             [value]="name"
             (input)="handleInput($event)"
             (blur)="handleBlur($event)"
             >
      <div> Name = {{ name }} </div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Manoj';

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Talagadadeevi';
  }
}