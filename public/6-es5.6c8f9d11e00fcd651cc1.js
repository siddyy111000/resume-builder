function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jkDv:function(n,e,t){"use strict";t.r(e),t.d(e,"AdminModule",(function(){return L}));var o=t("ofXK"),r=t("3Pt+"),a=t("fXoL"),c=t("At59"),i=t("tyNb");function s(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Name cannot be empty"),a.Ob())}function b(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Name should be minimum 3 letters"),a.Ob())}function l(n,e){if(1&n&&(a.Pb(0,"span",10),a.ic(1,s,2,0,"span",11),a.ic(2,b,2,0,"span",11),a.Ob()),2&n){var t=a.ac();a.zb(1),a.dc("ngIf",t.personalData.controls.name.errors.required),a.zb(1),a.dc("ngIf",t.personalData.controls.name.errors.minlength)}}function d(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Date Of Birth is required"),a.Ob())}function p(n,e){if(1&n&&(a.Pb(0,"span",10),a.ic(1,d,2,0,"span",11),a.Ob()),2&n){var t=a.ac();a.zb(1),a.dc("ngIf",t.personalData.controls.dob.errors.required)}}function u(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Length should be 10"),a.Ob())}function m(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Length should be 10"),a.Ob())}function g(n,e){if(1&n&&(a.Pb(0,"span",10),a.ic(1,u,2,0,"span",11),a.ic(2,m,2,0,"span",11),a.Ob()),2&n){var t=a.ac();a.zb(1),a.dc("ngIf",t.personalData.controls.ph_no.errors.minlength),a.zb(1),a.dc("ngIf",t.personalData.controls.ph_no.errors.maxlength)}}function f(n,e){1&n&&(a.Pb(0,"span"),a.jc(1,"Email is Required"),a.Ob())}function h(n,e){1&n&&(a.Pb(0,"span"),a.jc(1," Email is not valid"),a.Ob())}function P(n,e){if(1&n&&(a.Pb(0,"span",10),a.ic(1,f,2,0,"span",11),a.ic(2,h,2,0,"span",11),a.Ob()),2&n){var t=a.ac();a.zb(1),a.dc("ngIf",t.personalData.controls.email.errors.required),a.zb(1),a.dc("ngIf",t.personalData.controls.email.errors.email)}}function O(n,e){if(1&n&&(a.Nb(0),a.Pb(1,"form",5),a.Pb(2,"label"),a.jc(3,"Skill Name:-"),a.Ob(),a.Lb(4,"br"),a.Lb(5,"input",6),a.Pb(6,"label"),a.jc(7,"Skill Level:-"),a.Ob(),a.Lb(8,"br"),a.Pb(9,"select",7),a.Pb(10,"option",8),a.jc(11,"Beginner"),a.Ob(),a.Pb(12,"option",9),a.jc(13,"Intermediate"),a.Ob(),a.Pb(14,"option",10),a.jc(15,"Advanced"),a.Ob(),a.Ob(),a.Ob(),a.Mb()),2&n){var t=e.$implicit;a.zb(1),a.dc("formGroup",t)}}function _(n,e){if(1&n&&(a.Nb(0),a.Pb(1,"form",5),a.Pb(2,"label"),a.jc(3,"Project Title:-"),a.Ob(),a.Lb(4,"br"),a.Lb(5,"input",6),a.Pb(6,"label"),a.jc(7,"Project Description:-"),a.Ob(),a.Lb(8,"br"),a.Lb(9,"textarea",7),a.Ob(),a.Mb()),2&n){var t=e.$implicit;a.zb(1),a.dc("formGroup",t)}}var C,y,v,x,k,w,M,j=[{path:"personal",component:(w=function(){function n(e,t){_classCallCheck(this,n),this.rs=e,this.router=t,this.resume=[],this.resumeArray=[],this.personalData=new r.e({name:new r.c("",[r.n.required,r.n.minLength(3)]),dob:new r.c("",[r.n.required]),email:new r.c("",[r.n.required,r.n.email]),ph_no:new r.c("",[r.n.minLength(10),r.n.maxLength(10)]),address:new r.c})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"addData",value:function(){var n=this;console.log(this.personalData.value),this.rs.addPersonal(this.personalData.value).subscribe((function(e){console.log(e),n.getData()}))}},{key:"getData",value:function(){var n=this;this.rs.get().subscribe((function(e){n.resume=e,n.router.navigate(["admin/academics"],{queryParams:{ukey:n.resume[n.resume.length-1].key}})}))}}]),n}(),w.\u0275fac=function(n){return new(n||w)(a.Kb(c.a),a.Kb(i.f))},w.\u0275cmp=a.Eb({type:w,selectors:[["app-personal"]],decls:39,vars:6,consts:[[1,"container"],[1,"form-group",3,"formGroup"],[1,"required"],["type","text","formControlName","name",1,"form-control"],["class","warning",4,"ngIf"],["type","date","formControlName","dob",1,"form-control"],["formControlName","address",1,"form-control"],["type","text","formControlName","ph_no",1,"form-control"],["type","text","formControlName","email",1,"form-control"],[1,"btn",3,"disabled","click"],[1,"warning"],[4,"ngIf"]],template:function(n,e){1&n&&(a.Pb(0,"div",0),a.Pb(1,"form",1),a.Pb(2,"div"),a.Pb(3,"label"),a.jc(4,"Name:"),a.Ob(),a.Pb(5,"span",2),a.jc(6,"*"),a.Ob(),a.Lb(7,"br"),a.Lb(8,"input",3),a.Lb(9,"br"),a.ic(10,l,3,2,"span",4),a.Ob(),a.Pb(11,"div"),a.Pb(12,"label"),a.jc(13,"DOB:"),a.Ob(),a.Lb(14,"br"),a.Lb(15,"input",5),a.Lb(16,"br"),a.ic(17,p,2,1,"span",4),a.Ob(),a.Pb(18,"div"),a.Pb(19,"label"),a.jc(20,"Address:"),a.Ob(),a.Lb(21,"br"),a.Lb(22,"textarea",6),a.Ob(),a.Pb(23,"div"),a.Pb(24,"label"),a.jc(25,"Phone Number:"),a.Ob(),a.Lb(26,"br"),a.Lb(27,"input",7),a.Lb(28,"br"),a.ic(29,g,3,2,"span",4),a.Ob(),a.Pb(30,"div"),a.Pb(31,"label"),a.jc(32,"Email:"),a.Ob(),a.Lb(33,"br"),a.Lb(34,"input",8),a.Lb(35,"br"),a.ic(36,P,3,2,"span",4),a.Ob(),a.Pb(37,"button",9),a.Wb("click",(function(){return e.addData()})),a.jc(38,"Next"),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.zb(1),a.dc("formGroup",e.personalData),a.zb(9),a.dc("ngIf",e.personalData.controls.name.dirty&&e.personalData.controls.name.invalid),a.zb(7),a.dc("ngIf",e.personalData.controls.dob.dirty&&e.personalData.controls.dob.invalid),a.zb(12),a.dc("ngIf",e.personalData.controls.ph_no.dirty&&e.personalData.controls.ph_no.invalid),a.zb(7),a.dc("ngIf",e.personalData.controls.email.dirty&&e.personalData.controls.email.invalid),a.zb(1),a.dc("disabled",e.personalData.invalid))},directives:[r.p,r.i,r.f,r.a,r.h,r.d,o.j],styles:[".uppernav[_ngcontent-%COMP%]{padding:0;height:100%;display:flex;text-shadow:0 .05rem .1rem rgba(0,0,0,.5);box-shadow:inset 0 0 5rem rgba(0,0,0,.5);background-color:#333}.uppernav[_ngcontent-%COMP%], a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{color:#fff}.btn-secondary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary[_ngcontent-%COMP%]:hover{color:#333;text-shadow:none;background-color:#fff;border:.05rem solid #fff}.cover-container[_ngcontent-%COMP%]{max-width:42em}.masthead[_ngcontent-%COMP%]{margin-bottom:2rem}.masthead-brand[_ngcontent-%COMP%]{margin-bottom:0}.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.25rem 0;font-weight:700;color:hsla(0,0%,100%,.5);background-color:transparent;border-bottom:.25rem solid transparent}.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{border-bottom-color:hsla(0,0%,100%,.25)}.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] + .nav-link[_ngcontent-%COMP%]{margin-left:1rem}.nav-masthead[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff;border-bottom-color:#fff}.cover[_ngcontent-%COMP%]{padding:0 1.5rem}.cover[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]{padding:.75rem 1.25rem;font-weight:700}.mastfoot[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.5)}label[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:medium}.personalForm[_ngcontent-%COMP%]{width:400px;border-radius:15px;height:400px;background-color:#fff;transform:translate(400px);padding:10px;margin:10px}.personalForm[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red}.personalForm[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;font-weight:700;transition:3s;font-size:small;padding:5px;margin:5px}.personalForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=Date][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border-radius:10px;outline:none;border:none;box-shadow:1px 1px grey;width:280px;background-color:rgba(188,229,229,.308);height:20px;transition:.6s;padding:5px;margin:5px}.personalForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, input[type=Date][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus{height:29px;border:none}button[_ngcontent-%COMP%]:disabled{background-color:red;color:#000}button[_ngcontent-%COMP%]:disabled:hover{color:#000}button[_ngcontent-%COMP%]{font-family:Cambria,Times New Roman,serif;font-size:larger;font-weight:700;float:right;border:none;background-color:#fff;margin:10px;padding:10px;color:#467066;border-radius:10px;width:70px;height:40px;outline:0;transition:.8s;box-shadow:5px 5px grey}button[_ngcontent-%COMP%]:hover{background-color:#467066;color:#fff;box-shadow:none}@media (min-width:48em){.masthead-brand[_ngcontent-%COMP%]{float:left}.nav-masthead[_ngcontent-%COMP%]{float:right}}"]}),w)},{path:"academics",component:(k=function(){function n(e,t,o){_classCallCheck(this,n),this.actroute=e,this.rs=t,this.router=o,this.datakey="",this.academicsData=new r.e({post_graduate_degree:new r.c,post_graduate_degree_per:new r.c,post_graduate_degree_clg:new r.c,graduate_degree:new r.c,graduate_degree_per:new r.c,graduate_degree_clg:new r.c,hsc_diploma_clg:new r.c,hsc_diploma_per:new r.c,hsc_diploma_choice:new r.c,ssc_per:new r.c,ssc_clg:new r.c})}return _createClass(n,[{key:"addAcademics",value:function(){var n=this;this.rs.addAcademics(this.academicsData.value,this.datakey).subscribe((function(e){console.log(e),n.router.navigate(["admin/skills"],{queryParams:{ukey:n.datakey}})}))}},{key:"ngOnInit",value:function(){var n=this;this.actroute.queryParams.subscribe((function(e){n.datakey=e.ukey,console.log(n.datakey)}))}}]),n}(),k.\u0275fac=function(n){return new(n||k)(a.Kb(i.a),a.Kb(c.a),a.Kb(i.f))},k.\u0275cmp=a.Eb({type:k,selectors:[["app-academics"]],decls:85,vars:1,consts:[[1,"academicsForm"],[3,"formGroup"],[1,"postGraduation"],["type","text","formControlName","post_graduate_degree"],["type","text","formControlName","post_graduate_degree_clg"],["type","text","formControlName","post_graduate_degree_per"],[1,"Graduation"],["type","text","formControlName","graduate_degree"],["type","text","formControlName","graduate_degree_clg"],["type","text","formControlName","graduate_degree_per"],["type","Radio","formControlName","hsc_diploma_choice","value","Diploma"],["type","Radio","formControlName","hsc_diploma_choice","value","HSC"],[3,"click"]],template:function(n,e){1&n&&(a.Pb(0,"body"),a.Pb(1,"div",0),a.Pb(2,"form",1),a.Pb(3,"table"),a.Pb(4,"tr"),a.Pb(5,"td"),a.Pb(6,"label"),a.jc(7,"Post Graduation"),a.Ob(),a.Lb(8,"br"),a.Lb(9,"hr"),a.Pb(10,"div",2),a.Pb(11,"label"),a.jc(12,"Degree:"),a.Ob(),a.Lb(13,"br"),a.Lb(14,"input",3),a.Lb(15,"br"),a.Pb(16,"label"),a.jc(17,"From where did you completed this degree:"),a.Ob(),a.Lb(18,"br"),a.Lb(19,"input",4),a.Lb(20,"br"),a.Pb(21,"label"),a.jc(22,"Score:"),a.Ob(),a.Lb(23,"br"),a.Lb(24,"input",5),a.Ob(),a.Ob(),a.Pb(25,"td"),a.Pb(26,"label"),a.jc(27,"Graduation"),a.Ob(),a.Lb(28,"br"),a.Lb(29,"hr"),a.Pb(30,"div",6),a.Pb(31,"label"),a.jc(32,"Degree:"),a.Ob(),a.Lb(33,"br"),a.Lb(34,"input",7),a.Lb(35,"br"),a.Pb(36,"label"),a.jc(37,"From where did you completed this degree:"),a.Ob(),a.Lb(38,"br"),a.Lb(39,"input",8),a.Lb(40,"br"),a.Pb(41,"label"),a.jc(42,"Score:"),a.Ob(),a.Lb(43,"br"),a.Lb(44,"input",9),a.Ob(),a.Ob(),a.Ob(),a.Pb(45,"tr"),a.Pb(46,"td"),a.Pb(47,"label"),a.jc(48,"HSC/Diploma"),a.Ob(),a.Lb(49,"br"),a.Lb(50,"hr"),a.Pb(51,"div",6),a.Pb(52,"label"),a.jc(53,"HSC/Diploma:"),a.Ob(),a.Lb(54,"input",10),a.jc(55,"Diploma "),a.Lb(56,"input",11),a.jc(57,"HSC "),a.Lb(58,"br"),a.Pb(59,"label"),a.jc(60,"From where did you completed this degree:"),a.Ob(),a.Lb(61,"br"),a.Lb(62,"input",8),a.Lb(63,"br"),a.Pb(64,"label"),a.jc(65,"Score:"),a.Ob(),a.Lb(66,"br"),a.Lb(67,"input",9),a.Ob(),a.Ob(),a.Pb(68,"td"),a.Pb(69,"label"),a.jc(70,"SSC"),a.Ob(),a.Lb(71,"br"),a.Lb(72,"hr"),a.Pb(73,"div",6),a.Pb(74,"label"),a.jc(75,"From where did you completed this degree:"),a.Ob(),a.Lb(76,"br"),a.Lb(77,"input",8),a.Lb(78,"br"),a.Pb(79,"label"),a.jc(80,"Score:"),a.Ob(),a.Lb(81,"br"),a.Lb(82,"input",9),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(83,"button",12),a.Wb("click",(function(){return e.addAcademics()})),a.jc(84,"Next"),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.zb(2),a.dc("formGroup",e.academicsData))},directives:[r.p,r.i,r.f,r.a,r.h,r.d,r.k],styles:["body[_ngcontent-%COMP%]{background-color:#c5dbbe}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}label[_ngcontent-%COMP%]{font-size:medium}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding:10px;margin:10px}.academicsForm[_ngcontent-%COMP%]{border-radius:15px;background-color:#ff0;padding:5px;margin:5px;width:750px;height:600px;transform:translate(300px)}.academicsForm[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red}.academicsForm[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;font-weight:700;transition:3s;font-size:small;padding:5px;margin:5px}.academicsForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=Date][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border-radius:10px;outline:none;border:none;box-shadow:1px 1px grey;width:280px;background-color:rgba(188,229,229,.308);height:20px;transition:.6s;padding:5px;margin:5px}.academicsForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, input[type=Date][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus{height:29px;border:none}button[_ngcontent-%COMP%]:disabled{background-color:red;color:#000}button[_ngcontent-%COMP%]:disabled:hover{color:#000}button[_ngcontent-%COMP%]{font-family:Cambria,Times New Roman,serif;font-size:larger;font-weight:700;float:right;border:none;background-color:#fff;margin:10px;padding:10px;color:#467066;border-radius:10px;width:70px;height:40px;outline:0;transition:.8s;box-shadow:5px 5px grey}button[_ngcontent-%COMP%]:hover{background-color:#467066;color:#fff;box-shadow:none}.academicsForm[_ngcontent-%COMP%]   .Graduation[_ngcontent-%COMP%], .academicsForm[_ngcontent-%COMP%]   .postGraduation[_ngcontent-%COMP%]{padding:10px;margin:10px}@media only screen and (max-width:600px){.academicsForm[_ngcontent-%COMP%]{background-color:red;transform:translate(130px);width:400px;height:400px}}"]}),k)},{path:"skills",component:(x=function(){function n(e,t,o){_classCallCheck(this,n),this.rs=e,this.actroute=t,this.router=o,this.datakey="",this.skillsarray=new r.b([new r.e({skill_name:new r.c,skill_level:new r.c})])}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.actroute.queryParams.subscribe((function(e){n.datakey=e.ukey}))}},{key:"addSkill",value:function(){this.skillsarray.push(new r.e({skill_name:new r.c,skill_level:new r.c}))}},{key:"submitData",value:function(){var n=this;this.rs.addSkills(this.skillsarray.value,this.datakey).subscribe((function(e){n.router.navigate(["admin/projects"],{queryParams:{ukey:n.datakey}})}))}}]),n}(),x.\u0275fac=function(n){return new(n||x)(a.Kb(c.a),a.Kb(i.a),a.Kb(i.f))},x.\u0275cmp=a.Eb({type:x,selectors:[["app-skills"]],decls:7,vars:1,consts:[[1,"container"],[1,"form-group",2,"max-width","900px"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary","mt-3",3,"click"],[1,"btn","btn-success","btn-right","mt-3","float-right",3,"click"],[3,"formGroup"],["type","text","formControlName","skill_name",1,"form-control",2,"max-width","450px"],["formControlName","skill_level",1,"form-control",2,"max-width","450px"],["value","Beginner"],["value","Intermediate"],["value","Advanced"]],template:function(n,e){1&n&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.ic(2,O,16,1,"ng-container",2),a.Pb(3,"button",3),a.Wb("click",(function(){return e.addSkill()})),a.jc(4,"ADD More Skills"),a.Ob(),a.Pb(5,"button",4),a.Wb("click",(function(){return e.submitData()})),a.jc(6,"Next"),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.zb(2),a.dc("ngForOf",e.skillsarray.controls))},directives:[o.i,r.p,r.i,r.f,r.a,r.h,r.d,r.m,r.j,r.o],styles:[".personalForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:none;border-bottom:1px solid #00f}.personalForm[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{border-bottom:brown;transition:.5s}"]}),x)},{path:"projects",component:(v=function(){function n(e,t,o){_classCallCheck(this,n),this.actroute=e,this.router=t,this.rs=o,this.projectsarray=new r.b([new r.e({project_title:new r.c,project_desc:new r.c})]),this.datakey=""}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.actroute.queryParams.subscribe((function(e){n.datakey=e.ukey}))}},{key:"addProject",value:function(){this.projectsarray.push(new r.e({project_title:new r.c,project_desc:new r.c}))}},{key:"submitData",value:function(){var n=this;this.rs.addProjects(this.projectsarray.value,this.datakey).subscribe((function(e){n.router.navigate(["user/resume"],{queryParams:{ukey:n.datakey}})}))}}]),n}(),v.\u0275fac=function(n){return new(n||v)(a.Kb(i.a),a.Kb(i.f),a.Kb(c.a))},v.\u0275cmp=a.Eb({type:v,selectors:[["app-projects"]],decls:7,vars:1,consts:[[1,"container"],[1,"form-group",2,"max-width","900px"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary","mt-3",3,"click"],[1,"btn","btn-success","btn-right","mt-3","float-right",3,"click"],[3,"formGroup"],["type","text","formControlName","skill_name",1,"form-control",2,"max-width","450px"],["cols","7","rows","4",1,"form-control"]],template:function(n,e){1&n&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.ic(2,_,10,1,"ng-container",2),a.Pb(3,"button",3),a.Wb("click",(function(){return e.addProject()})),a.jc(4,"Add a Project"),a.Ob(),a.Pb(5,"button",4),a.Wb("click",(function(){return e.submitData()})),a.jc(6,"Next"),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.zb(2),a.dc("ngForOf",e.projectsarray.controls))},directives:[o.i,r.p,r.i,r.f,r.a,r.h,r.d],styles:[""]}),v)},{path:"hobbies",component:(y=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),y.\u0275fac=function(n){return new(n||y)},y.\u0275cmp=a.Eb({type:y,selectors:[["app-hobbies"]],decls:2,vars:0,template:function(n,e){1&n&&(a.Pb(0,"p"),a.jc(1,"hobbies works!"),a.Ob())},styles:[""]}),y)},{path:"workexp",component:(C=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),C.\u0275fac=function(n){return new(n||C)},C.\u0275cmp=a.Eb({type:C,selectors:[["app-workexp"]],decls:2,vars:0,template:function(n,e){1&n&&(a.Pb(0,"p"),a.jc(1,"workexp works!"),a.Ob())},styles:[""]}),C)},{path:"",redirectTo:"personal",pathMatch:"full"}],L=((M=function n(){_classCallCheck(this,n)}).\u0275mod=a.Ib({type:M}),M.\u0275inj=a.Hb({factory:function(n){return new(n||M)},imports:[[o.c,i.j.forChild(j),r.g,r.l]]}),M)}}]);