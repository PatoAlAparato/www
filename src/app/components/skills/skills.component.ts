import { Component, OnInit, Input } from '@angular/core';
import { ServiceCallToFbService } from '../../services/service-call-to-fb.service';
import { UploadImageService} from '../../services/upload-image.service';
import { Skills } from '../../models/skills.model';
import { Upload} from '../../models/upload.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any;
  constructor( private serviceCallToFbService: ServiceCallToFbService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.getSkillsList();
    this.uploadImageService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.skills = fileUploads;
    });
  }
  getSkillsList(){
    this.serviceCallToFbService.getSkillsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(skills => {
      this.skills = skills;
    });
  }
  deleteSkills() {
    this.serviceCallToFbService.deleteAll();
  }
}
