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
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AuthService } from './services/auth.service';

import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UserCreateComponent } from './components/admin/user/user-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioDetailComponent } from './components/portfolio-detail/portfolio-detail.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UserComponent } from './components/admin/user/user.component';
import { ModalModule } from 'ngb-modal';
import { ModalWindowModule } from './components/modal-window/modal-window.module';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ForgotPaswordComponent } from './components/admin/forgot-pasword/forgot-pasword.component';
import { VerifyEmailComponent } from './components/admin/verify-email/verify-email.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { UploadFileComponent } from './components/admin/upload-file/upload-file.component';
import { FileSizePipe } from './file-size.pipe';
import { GalleryComponent } from './components/admin/gallery/gallery.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    UserCreateComponent,
    PortfolioEditComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ForgotPaswordComponent,
    VerifyEmailComponent,
    SkillsComponent,
    DropZoneDirective,
    UploadFileComponent,
    FileSizePipe,
    GalleryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    ModalModule,
    ModalWindowModule,
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
    ModalWindowComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}