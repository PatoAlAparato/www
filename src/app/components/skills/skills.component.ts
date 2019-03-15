import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

declare var $: any;
declare var extJq: any;
declare var jQuery: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public activeLang = 'es';
  constructor( private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  
  public changeLang(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
  ngOnInit() {
    (function($) {
      $('#duckySkills').swatchbook();
    })(jQuery);
  }
}
