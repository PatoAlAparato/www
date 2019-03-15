import { Component, OnInit, Input } from '@angular/core';
import { ServiceCallToFbService } from '../../services/service-call-to-fb.service';
import { UploadImageService} from '../../services/upload-image.service';
import { Portfolio } from '../../models/portfolio.model';
import { Upload} from '../../models/upload.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: any;
  constructor( private serviceCallToFbService: ServiceCallToFbService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.getportfolioList();
    this.uploadImageService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.portfolio = fileUploads;
    });
  }
  getportfolioList(){
    this.serviceCallToFbService.getportfolioList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(portfolio => {
      this.portfolio = portfolio;
    });
  }
  deleteportfolio() {
    this.serviceCallToFbService.deleteAll();
  }
}
