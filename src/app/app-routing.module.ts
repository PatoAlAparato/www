import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { SkillsCreateComponent } from './components/skills-create/skills-create.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';

import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UserComponent } from './components/admin/user/user.component';
import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard.ts.guard';


const routes: Routes = [
  {  path: '', component: HomeComponent},
  {  path: 'skills', component: SkillsComponent},
  {  path: 'skills-details', component: SkillsDetailComponent},
  {  path: 'skills-create', component: SkillsCreateComponent},
  {  path: 'skills-edit/:id', component: SkillsEditComponent},
  { path:  'login', component:  LoginComponent, canActivate: [SecureInnerPagesGuard]},
  { path:  'register', component:  RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }


