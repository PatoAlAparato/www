import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: Observable<firebase.User | null >;
  userData: any;

  constructor( public afs: AngularFirestore){

  }

  private dbPath = '/users';
  getList() {
    return this.afs.collection(this.dbPath).snapshotChanges();
  }

  createUser(user: User){
    return this.afs.collection(this.dbPath).add(user);
  }

  updateUser(user: User) {
    this.afs.doc(this.dbPath + user.uid).update(user);
  }

  deleteUser(user: User){
    this.afs.doc(this.dbPath + user).update(user);
  }

}
