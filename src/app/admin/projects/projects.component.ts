import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeStoreService } from 'src/app/resume-store.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsarray:FormArray=new FormArray([new FormGroup({
    project_title:new FormControl(),
  project_desc:new FormControl()}
  )]);
  constructor(private actroute:ActivatedRoute,private router:Router,private rs:ResumeStoreService) { }
datakey='';
  ngOnInit(): void {
    this.actroute.queryParams.subscribe(x=>{
      this.datakey=x.ukey;
    }
      )
  }
addProject()
{
  this.projectsarray.push(
    new FormGroup({
      project_title:new FormControl(),
    project_desc:new FormControl()}
    )
  );
}
submitData()
{
this.rs.addProjects(this.projectsarray.value,this.datakey).subscribe(success=>{
  this.router.navigate(['user/resume'],{queryParams:{ukey:this.datakey}});}
)
}
}

