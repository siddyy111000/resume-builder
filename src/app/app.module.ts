import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
var routes:Routes=
[
  {path:'usser' ,component:UserComponent},
  {path:'admin', component:AdminComponent},
  {path:'',redirectTo:'usser',pathMatch:'full'},
  {
    path:'admin',
    children:
    [
      {
        path:'',
        loadChildren:()=>import('./admin/admin.module').then(m =>m.AdminModule)
      }
    ]
  },
  {
    path:'user',
    children:
    [
      {
        path:'',
        loadChildren:()=>import('./user/user.module').then(m =>m.UserModule)
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    AboutComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule,ReactiveFormsModule,LoadingBarRouterModule,LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
