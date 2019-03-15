import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import * as $ from 'jquery';
import { from } from 'rxjs';
import { LoginComponent } from './components/admin/login/login.component';
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
  public isLogged: boolean;
  closeResult: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService,
    public authService: AuthService,
    private modalService: NgbModal
    ){
    this.translate.setDefaultLang(this.activeLang);
    this.isLogged = this.authService.isLoggedIn;
      console.log(this.isLogged);
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



  open(content: NgbModalRef) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
