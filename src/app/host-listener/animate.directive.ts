import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
@Directive({
  selector: '[animate]',
})
export class AnimateDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click')
  performTask() {
    let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    this.renderer.setStyle(this.el.nativeElement, 'color', randomColor);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  }
}
