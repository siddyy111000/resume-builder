import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ResumeStoreService } from 'src/app/resume-store.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor(private rs:ResumeStoreService,private router:Router,private actroute:ActivatedRoute) { }
  datakey='';
  hobbiesarray:FormArray=new FormArray([new FormGroup({
  hobby_name:new FormControl()
})])
  ngOnInit(): void {
    this.actroute.queryParams.subscribe(x=>{
      this.datakey=x.ukey;
    })
  }
addHobby()
{
  this.hobbiesarray.push(new FormGroup({
    hobby_name:new FormControl()
  }))
}
submitData()
{
  this.rs.addHobbies(this.hobbiesarray.value,this.datakey).subscribe(success=>{
    this.router.navigate(['admin/projects'],{queryParams:{ukey:this.datakey}})
  })
}
}
