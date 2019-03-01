import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/admin/modal/modal.component';
import { AuthService } from './services/auth.service';
import * as $ from 'jquery';
import { from } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public activeLang = 'es';
  public confirmedResult: boolean;
  public inputResult: string;
  public messageResult: boolean;


  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService,
    public authService: AuthService,
    private modalService: NgbModal
    )
  {
    this.translate.setDefaultLang(this.activeLang);
  }


  public changeLang(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  @HostListener('window:scroll', ['$event'])
  generalScroll($event: Event ) {
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    let domRef = this.el.nativeElement.querySelector('.navbar');

    if (scrollOffset > 100) {
      this.renderer.removeClass(domRef, 'navbar-expand-lg');
      $('footer').addClass('verticalFooter');
    } else {
      this.renderer.addClass(domRef, 'navbar-expand-lg');
    }
  }

  navToggle(event) {
      $('.duckyDom').toggleClass('cross');
  }



  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
