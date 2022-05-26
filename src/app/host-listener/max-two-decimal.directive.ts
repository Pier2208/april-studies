import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxTwoDecimal]',
})
export class MaxTwoDecimalDirective {
  @Input() appMaxTwoDecimal: number;

  constructor(private elRef: ElementRef) {}

  @HostListener('input')
  onInput(event: Event) {
    const num = this.elRef.nativeElement.value;
    if (num && num - Math.floor(num) !== 0) {
      this.elRef.nativeElement.value = parseFloat(num).toFixed(2);
    }
  }
}
