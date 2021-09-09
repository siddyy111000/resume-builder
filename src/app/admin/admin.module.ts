import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { AcademicsComponent } from './academics/academics.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WorkexpComponent } from './workexp/workexp.component';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
var routes:Routes=
[
  {path:'personal',component:PersonalComponent},
  {path:'academics',component:AcademicsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'hobbies',component:HobbiesComponent},
  {path:'workexp',component:WorkexpComponent},
  {path:'',redirectTo:'personal',pathMatch:'full'}
]


@NgModule({
  declarations: [PersonalComponent, AcademicsComponent, SkillsComponent, ProjectsComponent, HobbiesComponent, WorkexpComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
