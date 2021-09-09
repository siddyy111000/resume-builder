import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { ResumeStoreService } from 'src/app/resume-store.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {Validators} from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private rs:ResumeStoreService,private router :Router) { }
resume:any=[];
resumeArray:any=[];

  ngOnInit(): void {
  }
  personalData:FormGroup=new FormGroup(
    {
     name:new FormControl('',[Validators.required,Validators.minLength(3)]),
     dob:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required,Validators.email]),
     ph_no:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
     address:new FormControl()
    });
addData()
{
  console.log(this.personalData.value);
this.rs.addPersonal(this.personalData.value).subscribe(success=>{
  console.log(success);
  this.getData();
  })




}
getData()
{
  this.rs.get().subscribe(success=>{this.resume=success;
    
    this.router.navigate(['admin/academics'],{
      queryParams:{
        ukey:this.resume[this.resume.length-1].key
      }
    })})
  
}
  
}
