"use strict";(self.webpackChunkmirage=self.webpackChunkmirage||[]).push([[8319],{98319:(gt,f,r)=>{r.r(f),r.d(f,{CuentasBancariasModule:()=>lt});var l=r(74202),h=r(82817),t=r(5e3),b=r(57839),v=r(96310),C=r(20207),Z=r(47745),A=r(74297),p=r(98952),d=r(59783),u=r(69808),T=r(40845),B=r(4119);function y(e,i){if(1&e&&t._UZ(0,"p-sortIcon",10),2&e){const n=t.oxw().$implicit;t.Q6J("field",n.field)}}function I(e,i){if(1&e&&(t.TgZ(0,"th",8),t._uU(1),t.YNc(2,y,1,1,"p-sortIcon",9),t.qZA()),2&e){const n=i.$implicit;t.Q6J("pSortableColumn",n.field),t.xp6(1),t.hij(" ",n.header," "),t.xp6(1),t.Q6J("ngIf",!n.isActions)}}function S(e,i){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,I,3,3,"th",7),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.Q6J("ngForOf",n)}}function F(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(3).$implicit,a=t.oxw().$implicit;t.xp6(1),t.Oqu(a[n.field].nombre)}}function N(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"span",17),t._uU(2,"Banco"),t.qZA(),t.YNc(3,F,2,1,"span",13),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",a[n.field])}}function J(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(4).$implicit;t.xp6(1),t.Oqu(n.numero)}}function Y(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"span",17),t._uU(2,"N\xfamero"),t.qZA(),t.YNc(3,J,2,1,"span",13),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",a[n.field])}}function U(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(4).$implicit;t.xp6(1),t.Oqu(n.cci)}}function w(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"span",17),t._uU(2,"CCI"),t.qZA(),t.YNc(3,U,2,1,"span",13),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",a[n.field])}}function Q(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(4).$implicit;t.xp6(1),t.Oqu(n.titular)}}function q(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"span",17),t._uU(2,"Titular"),t.qZA(),t.YNc(3,Q,2,1,"span",13),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",a[n.field])}}function E(e,i){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw().$implicit;t.xp6(1),t.hij(" ",a[n.field]," ")}}function k(e,i){1&e&&(t.ynx(0),t.YNc(1,N,4,1,"ng-container",15),t.YNc(2,Y,4,1,"ng-container",15),t.YNc(3,w,4,1,"ng-container",15),t.YNc(4,q,4,1,"ng-container",15),t.YNc(5,E,2,1,"ng-container",16),t.BQk()),2&e&&(t.xp6(1),t.Q6J("ngSwitchCase","banco"),t.xp6(1),t.Q6J("ngSwitchCase","numero"),t.xp6(1),t.Q6J("ngSwitchCase","cci"),t.xp6(1),t.Q6J("ngSwitchCase","titular"))}function L(e,i){if(1&e&&(t.ynx(0,18),t.TgZ(1,"span",17),t._uU(2,"Acciones"),t.qZA(),t._UZ(3,"button",19),t.BQk()),2&e){const n=t.oxw(2).$implicit,a=t.oxw();t.xp6(3),t.Q6J("routerLink",a.linkUpdate(n.id))}}function $(e,i){if(1&e&&(t.TgZ(0,"td",12),t.YNc(1,k,6,4,"ng-container",13),t.YNc(2,L,4,1,"ng-container",14),t.qZA()),2&e){const n=i.$implicit;t.Q6J("ngSwitch",n.field),t.xp6(1),t.Q6J("ngIf",!n.isActions),t.xp6(1),t.Q6J("ngIf",n.isActions)}}function D(e,i){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,$,3,3,"td",11),t.qZA()),2&e){const n=i.columns;t.xp6(1),t.Q6J("ngForOf",n)}}function M(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"button",21),t.NdJ("click",function(){return t.CHM(n),t.oxw().new()}),t.qZA(),t.qZA()}}let z=(()=>{class e{constructor(n,a,o,s,m,_){this.route=n,this.router=a,this.bankAccountService=o,this.companyService=s,this.loginService=m,this.breadcrumbService=_,this.perPage=10}ngOnInit(){this.breadcrumbService.setItems((0,h.kn)(this.route)),this.cols=[{field:"banco",header:"Banco"},{field:"numero",header:"N\xfamero"},{field:"cci",header:"CCI"},{field:"titular",header:"Titular"},{header:"Acciones",isActions:!0}],this.loading=!0,this.loadIdEmpresa().then(()=>{this.companyService.findById(this.idEmpresa).subscribe(n=>{this.empresa=n})})}new(){this.router.navigateByUrl("/cuentas-bancarias/nuevo")}loadLazy(n){const a=this.idEmpresa;this.loading=!0;const s=["pageNumber="+n.first/this.perPage,`perPage=${n.rows}`];n.sortOrder&&s.push(`sortOrder=${n.sortOrder}`),n.sortField&&s.push(`sortField=${n.sortField}`),this.bankAccountService.findAllPage(a,s.join("&")).subscribe(m=>{this.totalRecords=m.totalElements,this.bankAccounts=m.content,this.loading=!1})}loadIdEmpresa(){return new Promise(n=>{this.idEmpresa=this.loginService.getUser().empresa.id,n(void 0)})}linkUpdate(n){return`/cuentas-bancarias/editar/${n}`}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(b.A),t.Y36(v.J),t.Y36(C.r),t.Y36(Z.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cuentas-bancarias"]],decls:8,vars:8,consts:[[1,"grid"],[1,"col-12"],["dataKey","id",3,"columns","value","lazy","paginator","rows","totalRecords","responsive","autoLayout","onLazyLoad"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],["ariaLabel","Activa para ordenar","ariaLabelDesc","Activa para ordenar en orden descendente","ariaLabelAsc","Activa para ordenar en orden ascendente",3,"field",4,"ngIf"],["ariaLabel","Activa para ordenar","ariaLabelDesc","Activa para ordenar en orden descendente","ariaLabelAsc","Activa para ordenar en orden ascendente",3,"field"],[3,"ngSwitch",4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngIf"],["style","text-align: center",4,"ngIf"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"p-column-title"],[2,"text-align","center"],["pButton","","type","button","icon","pi pi-pencil","pTooltip","Actualizar, Eliminar",1,"p-button-success",3,"routerLink"],[2,"text-align","left"],["type","button","pButton","","icon","fa fa-plus","label","Nuevo",2,"margin-right","0.2rem",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"p-card"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"p-table",2,3),t.NdJ("onLazyLoad",function(s){return a.loadLazy(s)}),t.YNc(5,S,2,1,"ng-template",4),t.YNc(6,D,2,1,"ng-template",5),t.YNc(7,M,2,0,"ng-template",6),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("columns",a.cols)("value",a.bankAccounts)("lazy",!0)("paginator",!0)("rows",a.perPage)("totalRecords",a.totalRecords)("responsive",!0)("autoLayout",!0))},directives:[A.Z,p.iA,d.jx,u.sg,p.lQ,u.O5,p.fz,u.RF,u.n9,u.ED,T.Hq,B.u,l.rH],encapsulation:2}),e})();var g=r(54578),c=r(93075),O=r(30567),P=r(52774),j=r(14036),R=r(43724),H=r(31424),V=r(17102);function G(e,i){1&e&&t._UZ(0,"p-message",24)}function X(e,i){1&e&&t._UZ(0,"p-message",25)}function K(e,i){1&e&&t._UZ(0,"p-message",26)}function W(e,i){1&e&&t._UZ(0,"p-message",27)}function tt(e,i){1&e&&t._UZ(0,"p-message",28)}function et(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){return t.CHM(n),t.oxw().confirmDelete()}),t.qZA()}}const nt=function(){return{width:"100%"}},at=function(){return{label:"Si",value:!0}},it=function(){return{label:"No",value:!1}},rt=function(e,i){return[e,i]};let x=(()=>{class e{constructor(n,a,o,s,m,_,ut,mt,pt,dt){this.route=n,this.router=a,this.bankAccountService=o,this.companyService=s,this.bankService=m,this.messageService=_,this.loginService=ut,this.confirmationService=mt,this.fb=pt,this.breadcrumbService=dt,this.bancos=[]}ngOnInit(){this.breadcrumbService.setItems((0,h.kn)(this.route)),this.builderForm(),this.loadIdEmpresa().then(()=>{this.companyService.findById(this.idEmpresa).subscribe(n=>{this.empresa=n,this.loadData(),this.loadModel()})})}builderForm(){this.modelForm=this.fb.group({titular:["",[c.kI.required]],cci:[""],numero:["",[c.kI.required]],banco:[void 0,[c.kI.required]],detraccion:[!1,[c.kI.required]]})}submitForm(){let n,a;this.formToModel(),this.isEdit?(n=this.bankAccountService.update(this.idEmpresa,this.model),a="Cuenta bancaria correctamente."):(n=this.bankAccountService.save(this.idEmpresa,this.model),a="Cuenta bancaria registrado correctamente."),n.subscribe(o=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:a}),this.router.navigateByUrl(this.linkVolver)})}formToModel(){this.model||(this.model={}),this.model.banco=this.modelForm.value.banco,this.model.numero=this.modelForm.value.numero,this.model.cci=this.modelForm.value.cci,this.model.titular=this.modelForm.value.titular,this.model.detraccion=this.modelForm.value.detraccion,this.model.empresa={id:this.idEmpresa}}modelToForm(n){this.modelForm.patchValue({banco:n.banco,numero:n.numero,cci:n.cci,titular:n.titular,detraccion:n.detraccion})}get textButtonAction(){return this.isEdit?"Actualizar":"Guardar"}get nameModulo(){return this.route.snapshot.data.title}get banco(){return this.modelForm.get("banco")}get numero(){return this.modelForm.get("numero")}get cci(){return this.modelForm.get("cci")}get titular(){return this.modelForm.get("titular")}get detraccion(){return this.modelForm.get("detraccion")}loadModel(){this.isEdit=this.route.snapshot.data.isEdit,this.isEdit&&this.route.params.subscribe(n=>{this.bankAccountService.findById(this.idEmpresa,n.id).subscribe(o=>{o&&(this.model=o,this.modelToForm(o))})})}confirmDelete(){this.confirmationService.confirm({message:"Estas seguro de eliminar este registro?",accept:()=>{this.bankAccountService.deleteById(this.idEmpresa,this.model.id).subscribe(()=>{this.messageService.clear(),this.messageService.add({severity:"success",summary:"Mensaje",detail:"Registro eliminado correctamente"}),this.router.navigateByUrl(this.linkVolver)})},acceptLabel:"Si",rejectLabel:"No"})}loadData(){(0,O.D)(this.bankService.findAll(this.idEmpresa)).subscribe(n=>{this.bancos=n[0]})}loadIdEmpresa(){return new Promise(n=>{this.idEmpresa=this.loginService.getUser().empresa.id,n(void 0)})}get linkVolver(){return"/cuentas-bancarias"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(b.A),t.Y36(v.J),t.Y36(P.y),t.Y36(d.ez),t.Y36(C.r),t.Y36(d.YP),t.Y36(c.qu),t.Y36(Z.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cuenta-bancaria"]],decls:39,vars:21,consts:[[1,"grid"],[1,"col-12"],["novalidate","",3,"formGroup","ngSubmit"],[1,"grid","form-group"],[1,"col-12","md:col-2"],["for","banco",1,"label-form"],[1,"col-12","md:col-4"],["formControlName","banco","placeholder","Seleccione...","optionLabel","nombre","id","banco",3,"options","showClear"],["severity","error","text","Seleccione un banco",4,"ngIf"],["for","numero",1,"label-form"],["formControlName","numero","id","numero","type","text","pInputText","",2,"width","100%","margin-bottom","0.2em"],["severity","error","text","Ingrese n\xfamero",4,"ngIf"],["for","cci",1,"label-form"],["formControlName","cci","id","cci","type","text","pInputText","",2,"width","100%","margin-bottom","0.2em"],["severity","error","text","Ingrese cci",4,"ngIf"],["for","titular",1,"label-form"],["formControlName","titular","id","titular","type","text","pInputText","",2,"width","100%","margin-bottom","0.2em"],["severity","error","text","Ingrese titular",4,"ngIf"],["name","filtroCanal","formControlName","detraccion",3,"options"],["severity","error","text","Ingrese",4,"ngIf"],[1,"col-12",2,"text-align","center"],["pButton","","type","submit",2,"margin-right","0.4rem",3,"disabled","label"],["style","margin-right: 0.4rem","pButton","","type","button","label","Eliminar","class","p-button-danger",3,"click",4,"ngIf"],["pButton","","type","button","label","Volver",1,"p-button-secondary",2,"margin-right","0.4rem",3,"routerLink"],["severity","error","text","Seleccione un banco"],["severity","error","text","Ingrese n\xfamero"],["severity","error","text","Ingrese cci"],["severity","error","text","Ingrese titular"],["severity","error","text","Ingrese"],["pButton","","type","button","label","Eliminar",1,"p-button-danger",2,"margin-right","0.4rem",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"p-card"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return a.submitForm()}),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"label",5),t._uU(7,"Banco (*)"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"p-dropdown",7),t.YNc(10,G,1,0,"p-message",8),t.qZA(),t.TgZ(11,"div",4),t.TgZ(12,"label",9),t._uU(13,"N\xfamero (*)"),t.qZA(),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",10),t.YNc(16,X,1,0,"p-message",11),t.qZA(),t.TgZ(17,"div",4),t.TgZ(18,"label",12),t._uU(19,"CCI"),t.qZA(),t.qZA(),t.TgZ(20,"div",6),t._UZ(21,"input",13),t.YNc(22,K,1,0,"p-message",14),t.qZA(),t.TgZ(23,"div",4),t.TgZ(24,"label",15),t._uU(25,"Titular (*)"),t.qZA(),t.qZA(),t.TgZ(26,"div",6),t._UZ(27,"input",16),t.YNc(28,W,1,0,"p-message",17),t.qZA(),t.TgZ(29,"div",4),t.TgZ(30,"label",15),t._uU(31,"Cuenta detracci\xf3n?"),t.qZA(),t.qZA(),t.TgZ(32,"div",6),t._UZ(33,"p-selectButton",18),t.YNc(34,tt,1,0,"p-message",19),t.qZA(),t.TgZ(35,"div",20),t._UZ(36,"button",21),t.YNc(37,et,1,0,"button",22),t._UZ(38,"button",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("formGroup",a.modelForm),t.xp6(6),t.Akn(t.DdM(15,nt)),t.Q6J("options",a.bancos)("showClear",!0),t.xp6(1),t.Q6J("ngIf",a.banco.touched&&(null==a.banco.errors?null:a.banco.errors.required)),t.xp6(6),t.Q6J("ngIf",a.numero.touched&&(null==a.numero.errors?null:a.numero.errors.required)),t.xp6(6),t.Q6J("ngIf",a.cci.touched&&(null==a.cci.errors?null:a.cci.errors.required)),t.xp6(6),t.Q6J("ngIf",a.titular.touched&&(null==a.titular.errors?null:a.titular.errors.required)),t.xp6(5),t.Q6J("options",t.WLB(18,rt,t.DdM(16,at),t.DdM(17,it))),t.xp6(1),t.Q6J("ngIf",a.detraccion.touched&&(null==a.detraccion.errors?null:a.detraccion.errors.required)),t.xp6(2),t.Q6J("disabled",!a.modelForm.valid)("label",a.textButtonAction),t.xp6(1),t.Q6J("ngIf",a.isEdit),t.xp6(1),t.Q6J("routerLink",a.linkVolver))},directives:[A.Z,c._Y,c.JL,c.sg,j.Lt,c.JJ,c.u,u.O5,R.q,c.Fj,H.o,V.UN,T.Hq,l.rH],encapsulation:2}),e})();const ot=[{path:"",component:z,canActivate:[g.P],data:{breadcrumb:[{label:"Administraci\xf3n"},{label:"Cuentas bancarias"}]}},{path:"editar/:id",component:x,data:{isEdit:!0,title:"Editar cuenta bancaria",breadcrumb:[{label:"Administraci\xf3n"},{label:"Editar cuenta bancaria"}]},canActivate:[g.P]},{path:"nuevo",component:x,data:{isEdit:!1,title:"Nueva cuenta bancaria",breadcrumb:[{label:"Administraci\xf3n"},{label:"Nueva cuenta bancaria"}]},canActivate:[g.P]}];let ct=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(ot)],l.Bz]}),e})();var st=r(20958);let lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[ct,st.m]]}),e})()}}]);