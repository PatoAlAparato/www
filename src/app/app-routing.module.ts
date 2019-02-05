import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { SkillsCreateComponent } from './components/skills-create/skills-create.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';

const routes: Routes = [
  {  path: '', component: HomeComponent},
  {  path: 'skills', component: SkillsComponent},
  {  path: 'skills-details', component: SkillsDetailComponent},
  {  path: 'skills-create', component: SkillsCreateComponent},
  {  path: 'skills-edit/:id', component: SkillsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }


