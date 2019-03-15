import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { User} from '../../../models/user';
import { AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  task: AngularFireUploadTask;
  doc: AngularFirestoreDocument<any>;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  constructor( private storage: AngularFireStorage, private db: AngularFirestore, private auth: AuthService) { }



    toggleHover(event: boolean) {
      this.isHovering = event;
    }

    startUpload(event: FileList ){
      const file = event.item(0);
      if (file.type.split('/')[0] !== 'image' ){
        console.log('No se soporta este tipo de archivos =( ');
        return;
      }
      const path = `${new Date().getTime()}_${file.name}`;
      const customMetadata = { app: 'PatoAparato.com'};
      this.task = this.storage.upload(path, file, { customMetadata });
      this.percentage = this.task.percentageChanges();
      const refUser = this.auth.userData;
      this.snapshot   = this.task.snapshotChanges().pipe(
        tap(snap => {
          if (snap.bytesTransferred === snap.totalBytes) {
            console.log(this.db.collection(refUser));
            this.db.collection(refUser).add( { path, size: snap.totalBytes });
          }
        })
      );
    }

    isActive(snapshot){
      return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
  ngOnInit() {
  }

}
