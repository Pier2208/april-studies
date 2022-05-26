import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  visible = true;

  constructor() {}

  toggle() {
    this.visible = !this.visible;
  }
}
