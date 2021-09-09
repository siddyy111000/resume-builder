import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeStoreService {

  constructor(private http:HttpClient) { }
addPersonal(data)
{
  return this.http.post(environment.url +'/resume',data);
}
get()
{
  return this.http.get(environment.url+ '/resume');
}
addProjects(data,key)
{
  return this.http.post(environment.url +'/resume/'+ key +'/projects',data);
}
addAcademics(data,key)
{
  return this.http.post(environment.url +'/resume/'+key+'/academics',data);
}
addSkills(data,key)
{
  return this.http.post(environment.url +'/resume/'+key+'/skills',data);
}
addHobbies(data,key)
{
  return this.http.post(environment.url +'/resume/'+key+'/hobbies',data);
}
}
