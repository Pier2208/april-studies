import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverer]',
  host: {
    '(mouseenter)': 'onMouseHover()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HovererDirective {

  constructor(private element: ElementRef) { }

  onMouseHover() {
    this.element.nativeElement.style.color = 'blue';
  }
  onMouseLeave() {
    this.element.nativeElement.style.color = 'black';
  }
}