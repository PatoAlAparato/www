import { Component, Renderer2, OnInit  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public activeLang = 'es';

  globalListenFunc: Function;
  text: string;


  constructor(private renderer: Renderer2, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  
  ngOnInit() {
    this.globalListenFunc = this.renderer.listen('document', 'mousemove', e => {
      /*
      const mouseX = e.layerX;
      const mouseY = e.layerY;
      const deviceX = window.innerWidth;
      const deviceY = window.innerHeight;
      console.log ('posX', mouseX, 'posY', mouseY, 'totalX', deviceX, 'totalY', deviceY);

      if ( (mouseX > 0) || (mouseX < (deviceX / 2))){
        let topLeft = true;
      } if ((mouseX > (deviceX / 2)) || (mouseX < deviceX) ){
        let topRight = true;
      }if ( (mouseY > 0) || (mouseY < (deviceY / 2))){
        let bottomLeft = true;
      } if ((mouseY > (deviceY / 2)) || (mouseY < deviceY) ){
        let bottomRight = true;
      }
      */
    });
  }

    ngOnDestroy() {
      this.globalListenFunc();
    }
    public changeLang(lang) {
      this.activeLang = lang;
      this.translate.use(lang);
    }

}
