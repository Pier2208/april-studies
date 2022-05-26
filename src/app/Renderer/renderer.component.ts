import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
})
export class RendererComponent {
  toggle = false;

  @ViewChild('addlistCss') list: ElementRef;
  @ViewChild('inputRef') elRef: ElementRef;
  @ViewChild('disableInput') elBtn: ElementRef;

  constructor(private renderer: Renderer2) {}

  // EX 1
  mouseEnter() {
    this.renderer.addClass(this.list.nativeElement, 'ul-list');
  }

  mouseLeave() {
    this.renderer.removeClass(this.list.nativeElement, 'ul-list');
  }

  // EX 2
  inputEnter() {
    this.renderer.setAttribute(
      this.elRef.nativeElement,
      'placeholder',
      'Enter your name on mouse enter'
    );
  }

  inputLeave() {
    this.renderer.setAttribute(
      this.elRef.nativeElement,
      'placeholder',
      'Name on mouse leave'
    );
  }

  // EX 3
  disableInputBox() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.renderer.setProperty(
        this.elBtn.nativeElement,
        'disabled',
        'disabled'
      );
    } else {
      this.renderer.removeAttribute(this.elBtn.nativeElement, 'disabled');
    }
  }
}
