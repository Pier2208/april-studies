import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HovererDirective } from './ElementRef/hoverer.directive';
import { ElementRefComponent } from './ElementRef/element-ref/element-ref.component';

import { RouterModule, Routes } from '@angular/router';
import { HovererSecureDirective } from './ElementRef/hovever-secure.directive';
import { ViewChildOneComponent } from './ViewChild/view-child-one/view-child-one.component';
import { ChildComponent } from './ViewChild/child/child.component';
import { RendererComponent } from './renderer/renderer.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { AnimateDirective } from './host-listener/animate.directive';
import { MaxTwoDecimalDirective } from './host-listener/max-two-decimal.directive';

const routes: Routes = [
  { path: 'element-ref', component: ElementRefComponent},
  { path: 'viewchild-1', component: ViewChildOneComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HovererDirective,
    ElementRefComponent,
    HovererSecureDirective,
    ViewChildOneComponent,
    ChildComponent,
    RendererComponent,
    HostListenerComponent,
    AnimateDirective,
    MaxTwoDecimalDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
