import { Directive, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appHovererSecure]',
  host: {
    '(mouseenter)': 'onMouseHover()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HovererSecureDirective {

  constructor(private element: ElementRef, private sanitizer: DomSanitizer) { }

  onMouseHover() {
    this.sanitizer.bypassSecurityTrustHtml(this.element.nativeElement.style.color = 'hotpink');
  }
  onMouseLeave() {
    this.sanitizer.bypassSecurityTrustHtml(this.element.nativeElement.style.color = 'black');
  }
}