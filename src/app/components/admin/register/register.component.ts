import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  public activeLang = 'es';
  constructor(
    public authService:  AuthService, private translate: TranslateService) {
      this.translate.setDefaultLang(this.activeLang);

    }
    ngOnInit() { }
}