import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeStoreService } from 'src/app/resume-store.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private rs:ResumeStoreService,private actroute:ActivatedRoute,private router:Router) { }
 datakey='';
  skillsarray=new FormArray([new FormGroup({
    skill_name:new FormControl(),
    skill_level:new FormControl()
  })])
  
  ngOnInit(): void {
this.actroute.queryParams.subscribe(x=>{this.datakey=x.ukey})
  }
 
addSkill()
{
  this.skillsarray.push(new FormGroup({
    skill_name:new FormControl(),
    skill_level:new FormControl()
  }))
}
submitData()
{
  this.rs.addSkills(this.skillsarray.value,this.datakey).subscribe(success=>{
    this.router.navigate(['admin/hobbies'],{queryParams:{ukey:this.datakey}})
  })
  
}
}
