import { Component, OnInit } from '@angular/core';
import { ResumeStoreService } from 'src/app/resume-store.service';
import { ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private rs:ResumeStoreService,private actroute:ActivatedRoute) { }
datakey="";
resume:any=[];
thisresumeacademics
thisresume
thisresumeskills
thisresumehobbies
thisresumeprojects
  ngOnInit(): void {
    this.actroute.queryParams.subscribe(x=>{
      this.datakey=x.ukey;
    })
    this.rs.get().subscribe(success=>{
      this.resume=success;
      for (let index = 0; index < this.resume.length; index++) {
        if (this.resume[index].key==this.datakey) {
          this.thisresume=this.resume[index];
          for(var key in this.resume[index].academics)
          {
            console.log(this.resume[index].academics[key])
            this.thisresumeacademics=this.resume[index].academics[key];
          }
          for(var key in this.resume[index].skills)
          {
            console.log(this.resume[index].skills[key])
            this.thisresumeskills=this.resume[index].skills[key];
          }
          for(var key in this.resume[index].hobbies)
          {
            console.log(this.resume[index].hobbies[key]);
            console.log('hobbies');
            this.thisresumehobbies=this.resume[index].hobbies[key];
          }
          for(var key in this.resume[index].projects)
          {
            console.log(this.resume[index].projects[key])
            this.thisresumeprojects=this.resume[index].projects[key];
          }
        }
      }
    })
  }
printResume()
{
  var data = document.getElementById('resume');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var imgHeight = canvas.height * (imgWidth / canvas.width);
const contentDataURL = canvas.toDataURL('image/png');
var pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;

pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save(this.thisresume.name +'.pdf'); // Generated PDF
});
}
}
