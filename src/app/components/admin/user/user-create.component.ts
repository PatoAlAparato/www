import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { FormsModule } from '@angular/forms';
//import { UploadImageService } from '../../services/upload-image.service';
import { User } from '../../../models/user';
import { from } from 'rxjs';
//import { Upload } from 'src/app/models/upload.model';

@Component({
  selector: 'app-user-reate',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {


  user:  User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getList().subscribe(data =>{
      this.user = data.map(e => {
        return{
          uid: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      });
    });
  }

  create(user: User){
    this.userService.createUser(user);
  }

  update(user: User) {
    this.userService.updateUser(user);
  }

  delete(user: User) {
    this.userService.deleteUser(user);
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
