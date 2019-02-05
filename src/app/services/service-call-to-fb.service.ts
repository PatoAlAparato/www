import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Skills } from '../models/skills.model';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})

export class ServiceCallToFbService {

  private dbPath = '/geek';
  skillsRef: AngularFireList<Skills> = null;

  constructor(private db: AngularFireDatabase) {
    this.skillsRef = db.list(this.dbPath);
  }
  createSkill(skll: Skills): void {
    this.skillsRef.push(skll);
  }

  updateSkill(key: string, value: any): void {
    this.skillsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteSkill(key: string): void {
    this.skillsRef.remove(key).catch(error => this.handleError(error));
  }

  getSkillsList(): AngularFireList<Skills> {
    return this.skillsRef;
  }

  deleteAll(): void {
    this.skillsRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
