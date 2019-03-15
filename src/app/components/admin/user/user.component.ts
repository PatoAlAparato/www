import { Component, OnInit, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public activeLang = 'es';


  constructor(
    private translate: TranslateService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
    ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

}
