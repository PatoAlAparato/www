import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './components/portfolio-detail/portfolio-detail.component';
import { UserCreateComponent } from './components/admin/user/user-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';

import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UserComponent } from './components/admin/user/user.component';
import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard.ts.guard';
import { SkillsComponent } from './components/skills/skills.component';
import { VerifyEmailComponent } from './components/admin/verify-email/verify-email.component';

const routes: Routes = [
  {  path: '', component: HomeComponent},
  {  path: 'skills', component: SkillsComponent},
  {  path: 'portfolio', component: PortfolioComponent},
  {  path: 'portfolio-details', component: PortfolioDetailComponent},
  {  path: 'portfolio-edit/:id', component: PortfolioEditComponent},
  {  path: 'verify-email-address', component:  VerifyEmailComponent},
  {  path: 'login', component:  LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {  path: 'register', component:  RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  {  path: 'user-create', component: UserCreateComponent, canActivate: [SecureInnerPagesGuard] },
  {  path: 'user', component: UserComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }


