import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FormsModule,ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { ResumeStoreService } from 'src/app/resume-store.service';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
datakey='';
academicsData:FormGroup=new FormGroup({
  post_graduate_degree:new FormControl(),
  post_graduate_degree_per:new FormControl(),
  post_graduate_degree_clg:new FormControl(),
  graduate_degree:new FormControl(),
  graduate_degree_per:new FormControl(),
  graduate_degree_clg:new FormControl(),
  hsc_diploma_clg:new FormControl(),
  hsc_diploma_per:new FormControl(),
  hsc_diploma_choice:new FormControl(),
  ssc_per:new FormControl(),
  ssc_clg:new FormControl()
});
  constructor(private actroute:ActivatedRoute,private rs:ResumeStoreService,private router:Router) { }
  addAcademics()
  {
    this.rs.addAcademics(this.academicsData.value,this.datakey).subscribe(success=>{console.log(success);
this.router.navigate(['admin/skills'],{
  queryParams:{
    ukey:this.datakey
  }
})
    })
  }



  ngOnInit(): void {
    this.actroute.queryParams.subscribe(x=>{
      this.datakey=x.ukey;
      console.log(this.datakey);
    })
  }

}
