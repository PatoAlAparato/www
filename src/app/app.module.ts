import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';

import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { SkillsCreateComponent } from './components/skills-create/skills-create.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';

import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UserComponent } from './components/admin/user/user.component';
import { ModalModule } from 'ngb-modal';
import { ForgotPaswordComponent } from './components/admin/forgot-pasword/forgot-pasword.component';
import { VerifyEmailComponent } from './components/admin/verify-email/verify-email.component';

import { ModalComponent } from './components/admin/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    SkillsDetailComponent,
    SkillsCreateComponent,
    SkillsEditComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ForgotPaswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    ModalModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [AuthService],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}