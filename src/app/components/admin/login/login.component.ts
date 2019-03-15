import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.scss']
})
export  class  LoginComponent  {
  public activeLang = 'es';
    constructor(public  authService:  AuthService, private translate: TranslateService) {
      this.translate.setDefaultLang(this.activeLang);
      this.modalClose(event);
    }
    modalClose( $event ) {
        console.log($event); // { submitted: true }
      }
}