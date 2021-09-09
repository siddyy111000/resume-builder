import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { Routes,RouterModule } from "@angular/router";
var routes:Routes=
[
  {path:'resume', component:ResumeComponent}
  
  
];
@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
