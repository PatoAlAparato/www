import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  $: any;

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: Event){
    const scrollOffset = $event.srcElement.children[0].scrollTop;

    if (scrollOffset !== 0){
      $('.navbar-toggler-icon').show();
      this = false;
    } else {
      $('.navbar-toggler-icon').hide();
    }
  }

}


