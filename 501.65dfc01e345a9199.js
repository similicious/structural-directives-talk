"use strict";(self.webpackChunkstructural_directives_talk=self.webpackChunkstructural_directives_talk||[]).push([[501],{501:(g,a,i)=>{i.r(a),i.d(a,{UserBindingModule:()=>f});var r=i(177),e=i(808);let l=(()=>{class t{constructor(){}getUsers(){return[{firstName:"Max",lastName:"Mustermann"},{firstName:"Jane",lastName:"Doe"}]}static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function p(t,h){if(1&t&&(e.j41(0,"li"),e.EFF(1),e.k0s()),2&t){const s=h.$implicit;e.R7$(),e.JRh(s)}}let o=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275cmp=e.VBU({type:t,selectors:[["app-demo-table"]],inputs:{data:"data"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,c){1&n&&(e.j41(0,"ul"),e.DNE(1,p,2,1,"li",0),e.k0s()),2&n&&(e.R7$(),e.Y8G("ngForOf",c.data))},dependencies:[r.Sq],encapsulation:2})}return t})(),m=(()=>{class t{constructor(s,n){this.userService=s,this.tableComponent=n}ngOnInit(){this.tableComponent.data=this.userService.getUsers().map(s=>`${s.firstName} ${s.lastName}`)}static#t=this.\u0275fac=function(n){return new(n||t)(e.rXU(l),e.rXU(o))};static#e=this.\u0275dir=e.FsC({type:t,selectors:[["app-demo-table","appUserBinding",""]]})}return t})(),u=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275cmp=e.VBU({type:t,selectors:[["app-user-binding-demo"]],decls:3,vars:0,consts:[[1,"is-size-3"],["appUserBinding",""]],template:function(n,c){1&n&&(e.j41(0,"h1",0),e.EFF(1,"UserBindingDirective"),e.k0s(),e.nrm(2,"app-demo-table",1))},dependencies:[m,o],encapsulation:2})}return t})();var d=i(90);let f=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[r.MD,d.iI.forChild([{path:"",component:u}])]})}return t})()}}]);