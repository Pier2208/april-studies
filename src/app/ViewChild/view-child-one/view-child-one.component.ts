import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child-one',
  templateUrl: './view-child-one.component.html',
  styleUrls: ['./view-child-one.component.css'],
})
export class ViewChildOneComponent implements AfterViewInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('divContent') divContent: ElementRef;
  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit() {
    console.log('title', this.title.nativeElement);
    this.title.nativeElement.innerHTML = 'Using viewChild to access innerHTML';
  }

  changeStyle() {
    this.divContent.nativeElement.setAttribute(
      'style',
      'color: blue; width: 600px; height: 40px; background-color: lightgray'
    );
  }

  toggleChild() {
    this.child.toggle();
  }
}
