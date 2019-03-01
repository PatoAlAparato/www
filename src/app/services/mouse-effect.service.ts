import { Injectable, HostListener, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class MouseEffectService {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

/*
  @HostListener('window:scroll', ['$event'])
  generalScroll($event: Event ) {
    let scrollOffset = $event.srcElement.children[0].scrollTop;    
    let domRef = this.el.nativeElement.querySelector('.navbar'); // nombre generico
  }*/
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    console.log(e);
  }
}
