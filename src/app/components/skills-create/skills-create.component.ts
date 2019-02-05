import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCallToFbService } from '../../services/service-call-to-fb.service';
import { UploadImageService } from '../../services/upload-image.service';
import { Skills } from '../../models/skills.model';
import { Upload } from 'src/app/models/upload.model';

@Component({
  selector: 'app-skills-create',
  templateUrl: './skills-create.component.html',
  styleUrls: ['./skills-create.component.scss']
})
export class SkillsCreateComponent implements OnInit {

  selectedFiles:  FileList;
  currentFileUpload: Upload;
  skill: Skills = new Skills();
  submitted = false;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private serviceCallToFbService: ServiceCallToFbService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
  }
  newSkills(): void {
    this.submitted = false;
    this.skill = new Skills();
  }

  save() {
    this.serviceCallToFbService.createSkill(this.skill);
    this.skill = new Skills();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

/*
  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new Upload(file);
    this.uploadImageService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
*/
}
