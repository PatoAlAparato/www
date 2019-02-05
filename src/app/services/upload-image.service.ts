import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private basePath = '/geek';
  constructor(private db: AngularFireDatabase) { }
  pushFileToStorage(fileUpload: Upload, progress: { percentage: number }){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    console.log(uploadTask);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File avaliable at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.nameImg = fileUpload.file.name;
        this.saveFileData(fileUpload);
      });
    }
    );
  }
  private saveFileData(fileUpload: Upload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<Upload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
  deleteFileUpload(fileUpload: Upload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.nameImg);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(nameImg: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${nameImg}`).delete();
  }



}
