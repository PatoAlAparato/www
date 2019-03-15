import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Portfolio } from '../models/portfolio.model';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})

export class ServiceCallToFbService {

  private dbPath = '/geek';
  portfolioRef: AngularFireList<Portfolio> = null;

  constructor(private db: AngularFireDatabase) {
    this.portfolioRef = db.list(this.dbPath);
  }
  createSkill(exp: Portfolio): void {
    this.portfolioRef.push(exp);
  }

  updateSkill(key: string, value: any): void {
    this.portfolioRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteSkill(key: string): void {
    this.portfolioRef.remove(key).catch(error => this.handleError(error));
  }

  getportfolioList(): AngularFireList<Portfolio> {
    return this.portfolioRef;
  }

  deleteAll(): void {
    this.portfolioRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
