(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{gQYv:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("ZYCi"),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),a=u.pb({encapsulation:0,styles:[["h4[_ngcontent-%COMP%]{color:#fff;background:#000;padding:10px 0}.card[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px;box-shadow:2px 2px #d3d3d3}"]],data:{}});function c(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,8,"div",[["class","card"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Bb(n,1).onClick()&&e),e}),null,null)),u.qb(1,16384,null,0,r.m,[r.l,r.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(2,2),(n()(),u.rb(3,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),u.Ib(4,null,["",""])),(n()(),u.rb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ib(6,null,["",""])),(n()(),u.rb(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ib(8,null,["",""]))],(function(n,l){var t=n(l,2,0,"profile/details",l.component.contact.id);n(l,1,0,t)}),(function(n,l){var t=l.component;n(l,4,0,t.contact.name),n(l,6,0,t.contact.email),n(l,8,0,t.contact.phone)}))}var s=t("Ip0R"),b=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),p=u.pb({encapsulation:0,styles:[[".card-list-container[_ngcontent-%COMP%]{width:100%}.card-list[_ngcontent-%COMP%]{margin:0 10px 30px}.more[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin:0 50% 30px 40%}"]],data:{}});function g(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"div",[["class","col-md-4 col-sm-6"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"app-card",[],null,null,null,c,a)),u.qb(2,114688,null,0,i,[],{contact:[0,"contact"]},null)],(function(n,l){n(l,2,0,l.context.$implicit)}),null)}function f(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,2,"div",[["class","row card-list"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,g)),u.qb(3,278528,null,0,s.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.contactList)}),null)}function d(n){return u.Kb(0,[(n()(),u.gb(16777216,null,null,1,null,f)),u.qb(1,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.contactList)}),null)}var h=t("gIcY"),m=function(){function n(n){this.contactService=n,this.search=new h.e("",[])}return n.prototype.ngOnInit=function(){},n.prototype.filterProducts=function(){this.contactService.updateFilterText(this.search.value)},n}(),v=t("AytR"),C=t("K9Ia"),_=t("26FU"),y=t("6blF");function B(n,l){return new y.a(l?function(t){return l.schedule(I,0,{error:n,subscriber:t})}:function(l){return l.error(n)})}function I(n){n.subscriber.error(n.error)}var L=t("67Y/"),x=t("9Z1F"),O=t("t/Na"),k=function(){function n(n){var l=this;this.http=n,this.error=new C.a,this._filterText=new _.a(""),this._contactList=new _.a([]),this._contact=new _.a(null),this._contactFirstLetters=new _.a([]),this._filterText.subscribe((function(){l.searchContactList(l._filterText.value)}))}return Object.defineProperty(n.prototype,"filterText",{get:function(){return this._filterText.asObservable()},enumerable:!0,configurable:!0}),n.prototype.updateFilterText=function(n){this._filterText.next(n)},Object.defineProperty(n.prototype,"contactList",{get:function(){return this._contactList.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"contact",{get:function(){return this._contact.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"contactFirstLetters",{get:function(){return this._contactFirstLetters.asObservable()},enumerable:!0,configurable:!0}),n.prototype.searchContactList=function(n){var l=this,t=v.a.IS_LOCAL_DATABASE?v.a.LOCAL_DATABASE:v.a.SERVER_DATABASE;return n=n?n.toLowerCase():"",this.http.get(t).pipe(Object(L.a)((function(n){return n})),Object(L.a)((function(t){var u=n?t.filter((function(l){return-1!==l.name.toLocaleLowerCase().indexOf(n)})):t;l._contactList.next(u),l.updateFirstLetter(u)})),Object(x.a)((function(n){return B(n)}))).subscribe((function(n){return n}),(function(n){l.error.next(n.message)}))},n.prototype.searchContact=function(n){var l=this;return this.http.get(v.a.SERVER_DATABASE+"/"+n).pipe(Object(L.a)((function(n){return n})),Object(L.a)((function(n){l._contact.next(n)})),Object(x.a)((function(n){return B(n)}))).subscribe((function(n){return n}),(function(n){l.error.next(n)}))},n.prototype.updateContact=function(n){this.setContactRequest(v.a.SERVER_DATABASE+"/"+n.id,n,"PUT")},n.prototype.newContact=function(n){this.setContactRequest(v.a.SERVER_DATABASE,n,"POST")},n.prototype.setContactRequest=function(n,l,t){var u=this;switch(t){case"PUT":return this.http.put(n,l).pipe(Object(L.a)((function(n){console.log(n),u.refreshList()}))).subscribe();case"POST":return this.http.post(n,l).pipe(Object(L.a)((function(n){u.refreshList()}))).subscribe((function(n){return n}),(function(n){u.error.next(n)}))}},n.prototype.deleteContact=function(n){var l=this;return this.http.delete(v.a.SERVER_DATABASE+"/"+n).pipe(Object(L.a)((function(n){console.log(n),l.refreshList()}))).subscribe((function(n){return n}),(function(n){l.error.next(n)}))},n.prototype.updateFirstLetter=function(n){var l=[];n.forEach((function(n){l.includes(n.name[0].toLocaleLowerCase())||l.push(n.name[0])})),this._contactFirstLetters.next(l)},n.prototype.refreshList=function(){this.searchContactList()},n.prototype.localSearchContactList=function(n){var l=this;return this.http.get(v.a.LOCAL_DATABASE).pipe(Object(L.a)((function(n){return n})),Object(L.a)((function(t){var u=t.find((function(l){return l.id===n}));l._contact.next(u)})),Object(x.a)((function(n){return B(n)}))).subscribe((function(n){return n}),(function(n){l.error.next(n.message)}))},n.ngInjectableDef=u.Nb({factory:function(){return new n(u.Ob(O.c))},token:n,providedIn:"root"}),n}(),q=u.pb({encapsulation:0,styles:[[""]],data:{}});function S(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,5,"input",[["id","live-search"],["placeholder","Search for contact..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,o=n.component;return"input"===l&&(e=!1!==u.Bb(n,2)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,2).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,2)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,2)._compositionEnd(t.target.value)&&e),"keyup"===l&&(e=!1!==o.filterProducts()&&e),e}),null,null)),u.qb(2,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(4,540672,null,0,h.f,[[8,null],[8,null],[6,h.j],[2,h.r]],{form:[0,"form"]},null),u.Gb(2048,null,h.k,null,[h.f]),u.qb(6,16384,null,0,h.l,[[4,h.k]],null,null)],(function(n,l){n(l,4,0,l.component.search)}),(function(n,l){n(l,1,0,u.Bb(l,6).ngClassUntouched,u.Bb(l,6).ngClassTouched,u.Bb(l,6).ngClassPristine,u.Bb(l,6).ngClassDirty,u.Bb(l,6).ngClassValid,u.Bb(l,6).ngClassInvalid,u.Bb(l,6).ngClassPending)}))}var P=function(){function n(n){this.contactService=n,this.selectedIndex=-1,this.activeFirstLetter=new u.m}return n.prototype.ngOnInit=function(){var n=this;this.firstLetterSub=this.contactService.contactFirstLetters.subscribe((function(l){n.firstLetters=l,n.removeElementClass()}))},n.prototype.selectFirstLetter=function(n,l){this.setElementClassToActive(l),this.activeFirstLetter.emit(n)},n.prototype.ngOnDestroy=function(){this.firstLetterSub.unsubscribe()},n.prototype.setElementClassToActive=function(n){this.selectedIndex=n},n.prototype.removeElementClass=function(){this.setElementClassToActive(-1)},n}(),E=u.pb({encapsulation:0,styles:[[".first__letter__container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.first__letter__container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px;padding:10px;font-weight:700;font-size:24px}.first__letter__container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:red}"]],data:{}});function w(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"h2",[],[[2,"active",null]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.selectFirstLetter(n.context.$implicit,n.context.index)&&u),u}),null,null)),(n()(),u.Ib(1,null,[" ",""])),u.Fb(2,1)],null,(function(n,l){n(l,0,0,l.component.selectedIndex===l.context.index);var t=u.Jb(l,1,0,n(l,2,0,u.Bb(l.parent,0),l.context.$implicit));n(l,1,0,t)}))}function A(n){return u.Kb(0,[u.Db(0,s.o,[]),(n()(),u.rb(1,0,null,null,2,"div",[["class","first__letter__container"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,w)),u.qb(3,278528,null,0,s.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.firstLetters)}),null)}var j=t("mrSG"),T=function(){function n(n){this.contactService=n}return n.prototype.ngOnInit=function(){var n=this;this.contactSub=this.contactService.contactList.subscribe((function(l){n.contactList=l,n.filteredContactList=j.g(n.contactList)}))},n.prototype.ngOnDestroy=function(){this.contactSub.unsubscribe()},n.prototype.filterListByFirstLetter=function(n){this.filteredContactList=n?this.contactList.filter((function(l){return l.name[0].toLocaleLowerCase()===n.toLocaleLowerCase()})):this.contactList},n}(),K=u.pb({encapsulation:0,styles:[[".go__new__contact[_ngcontent-%COMP%]{background:red;color:#fff!important;width:50px;height:50px;border-radius:100px;text-align:center;font-size:35px;position:fixed;bottom:50px;right:50px}.go__new__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}"]],data:{}});function D(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-contact-list",[],null,null,null,d,p)),u.qb(1,114688,null,0,b,[],{contactList:[0,"contactList"]},null)],(function(n,l){n(l,1,0,l.component.filteredContactList)}),null)}function F(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Empty list"]))],null,null)}function M(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-search",[],null,null,null,S,q)),u.qb(1,114688,null,0,m,[k],null,null),(n()(),u.rb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Contacts"])),(n()(),u.rb(4,0,null,null,1,"app-first-letter-filter",[],null,[[null,"activeFirstLetter"]],(function(n,l,t){var u=!0;return"activeFirstLetter"===l&&(u=!1!==n.component.filterListByFirstLetter(t)&&u),u}),A,E)),u.qb(5,245760,null,0,P,[k],null,{activeFirstLetter:"activeFirstLetter"}),(n()(),u.gb(16777216,null,null,1,null,D)),u.qb(7,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u.gb(0,[["emptyList",2]],null,0,null,F)),(n()(),u.rb(9,0,null,null,3,"div",[["class","go__new__contact"]],null,null,null,null,null)),(n()(),u.rb(10,0,null,null,2,"a",[["routerLink","profile/new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Bb(n,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.qb(11,671744,null,0,r.n,[r.l,r.a,s.g],{routerLink:[0,"routerLink"]},null),(n()(),u.Ib(-1,null,[" + "]))],(function(n,l){var t=l.component;n(l,1,0),n(l,5,0),n(l,7,0,0!==(null==t.filteredContactList?null:t.filteredContactList.length),u.Bb(l,8)),n(l,11,0,"profile/new")}),(function(n,l){n(l,10,0,u.Bb(l,11).target,u.Bb(l,11).href)}))}function N(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-contact-page",[],null,null,null,M,K)),u.qb(1,245760,null,0,T,[k],null,null)],(function(n,l){n(l,1,0)}),null)}var G=u.nb("app-contact-page",T,N,{},{},[]),V=function(){function n(){}return n.validate=function(n){return/^[\+]+[0-9]/.test(n.value)&&n.value.length>=10&&n.value.length<=11?null:{invalidPhone:!0}},n}(),R=function(){function n(n,l,t,u){this.router=n,this.route=l,this.contactService=t,this.fb=u,this.error=null,this.contact=null,this.emailControl=new h.e("",[h.o.required,h.o.email]),this.nameControl=new h.e("",[h.o.required]),this.phoneControl=new h.e("",[V.validate]),this.form=u.group({email:this.emailControl,name:this.nameControl,phone:this.phoneControl})}return n.prototype.ngOnInit=function(){var n=this;this.errorSub=this.contactService.error.subscribe((function(l){n.error=l}))},n.prototype.save=function(){this.contact=this.form.value,this.contact.id=this.setId(),this.contactService.newContact(this.contact)},n.prototype.setId=function(){return Math.floor(1e5*Math.random())},n.prototype.ngOnDestroy=function(){this.errorSub.unsubscribe()},n}(),U=u.pb({encapsulation:0,styles:[[""]],data:{}});function Y(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Name is required "]))],null,null)}function z(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Email is required "]))],null,null)}function J(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Not valid email "]))],null,null)}function Z(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Not valid format. Phone number must contains + and 10 or 11 numbers. Example: +1234567891 "]))],null,null)}function $(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Add New Contact"])),(n()(),u.rb(2,0,null,null,38,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var e=!0,o=n.component;return"submit"===l&&(e=!1!==u.Bb(n,4).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.Bb(n,4).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.save()&&e),e}),null,null)),u.qb(3,16384,null,0,h.s,[],null,null),u.qb(4,540672,null,0,h.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Gb(2048,null,h.b,null,[h.h]),u.qb(6,16384,null,0,h.m,[[4,h.b]],null,null),(n()(),u.rb(7,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Name"])),(n()(),u.rb(9,0,null,null,5,"input",[["formControlName","name"],["name","name"],["placeholder","Enter Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,10)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,10)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(10,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(12,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(14,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,Y)),u.qb(16,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(17,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Email"])),(n()(),u.rb(19,0,null,null,5,"input",[["formControlName","email"],["name","email"],["placeholder","Enter Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,20)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,20).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,20)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,20)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(20,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(22,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(24,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,z)),u.qb(26,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,J)),u.qb(28,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(29,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Phone"])),(n()(),u.rb(31,0,null,null,5,"input",[["formControlName","phone"],["name","phone"],["placeholder","Enter Phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,32)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,32).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,32)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,32)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(32,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(34,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(36,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,Z)),u.qb(38,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(39,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.Ib(-1,null,[" Add Contact "]))],(function(n,l){var t=l.component;n(l,4,0,t.form),n(l,12,0,"name"),n(l,16,0,t.form.get("name").hasError("required")&&t.form.get("name").dirty),n(l,22,0,"email"),n(l,26,0,t.form.get("email").hasError("required")&&t.form.get("email").dirty),n(l,28,0,t.form.get("email").hasError("email")&&t.form.get("email").dirty),n(l,34,0,"phone"),n(l,38,0,t.form.get("phone").hasError("invalidPhone")&&t.form.get("phone").dirty)}),(function(n,l){var t=l.component;n(l,2,0,u.Bb(l,6).ngClassUntouched,u.Bb(l,6).ngClassTouched,u.Bb(l,6).ngClassPristine,u.Bb(l,6).ngClassDirty,u.Bb(l,6).ngClassValid,u.Bb(l,6).ngClassInvalid,u.Bb(l,6).ngClassPending),n(l,9,0,u.Bb(l,14).ngClassUntouched,u.Bb(l,14).ngClassTouched,u.Bb(l,14).ngClassPristine,u.Bb(l,14).ngClassDirty,u.Bb(l,14).ngClassValid,u.Bb(l,14).ngClassInvalid,u.Bb(l,14).ngClassPending),n(l,19,0,u.Bb(l,24).ngClassUntouched,u.Bb(l,24).ngClassTouched,u.Bb(l,24).ngClassPristine,u.Bb(l,24).ngClassDirty,u.Bb(l,24).ngClassValid,u.Bb(l,24).ngClassInvalid,u.Bb(l,24).ngClassPending),n(l,31,0,u.Bb(l,36).ngClassUntouched,u.Bb(l,36).ngClassTouched,u.Bb(l,36).ngClassPristine,u.Bb(l,36).ngClassDirty,u.Bb(l,36).ngClassValid,u.Bb(l,36).ngClassInvalid,u.Bb(l,36).ngClassPending),n(l,39,0,t.form.invalid)}))}function Q(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-new-contact",[],null,null,null,$,U)),u.qb(1,245760,null,0,R,[r.l,r.a,k,h.d],null,null)],(function(n,l){n(l,1,0)}),null)}var H=u.nb("app-new-contact",R,Q,{},{},[]),W=function(){function n(){this.error=null}return n.prototype.ngOnInit=function(){this.error&&(console.log(this.error.status),console.log(this.error.statusText))},n}(),X=u.pb({encapsulation:0,styles:[[".error[_ngcontent-%COMP%]{margin:auto;text-align:center;color:red}"]],data:{}});function nn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"div",[["class","error"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ib(2,null,[" "," - ",""])),(n()(),u.rb(3,0,null,null,3,"a",[["routerLink","/contacts"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Bb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.qb(4,671744,null,0,r.n,[r.l,r.a,s.g],{routerLink:[0,"routerLink"]},null),(n()(),u.rb(5,0,null,null,1,"button",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Go to Contact Page"]))],(function(n,l){n(l,4,0,"/contacts")}),(function(n,l){var t=l.component;n(l,2,0,t.error.status,t.error.statusText),n(l,3,0,u.Bb(l,4).target,u.Bb(l,4).href)}))}var ln=function(){function n(n,l,t,u){this.router=n,this.route=l,this.contactService=t,this.fb=u,this.editAble=!1,this.error=null,this.contact=null,this.emailControl=new h.e("",[h.o.required,h.o.email]),this.nameControl=new h.e("",[h.o.required]),this.phoneControl=new h.e("",[V.validate]),this.form=u.group({email:this.emailControl,name:this.nameControl,phone:this.phoneControl})}return n.prototype.ngOnInit=function(){var n=this;this.errorSub=this.contactService.error.subscribe((function(l){n.error=l,console.log(n.error)})),this.contactSub=this.contactService.contact.subscribe((function(l){n.contact=l,console.log(n.contact),n.contact&&n.contactInit(n.contact)})),this.route.paramMap.subscribe((function(l){l.has("id")?(console.log("loading"),v.a.IS_LOCAL_DATABASE?n.contactService.localSearchContactList(+l.get("id")):n.contactService.searchContact(l.get("id"))):n.router.navigateByUrl("/contact")}))},n.prototype.contactInit=function(n){this.emailControl.setValue(n.email||""),this.nameControl.setValue(n.name||""),this.phoneControl.setValue(n.phone||"")},n.prototype.save=function(){this.contact.name=this.form.value.name,this.contact.email=this.form.value.email,this.contact.phone=this.form.value.phone,this.contactService.updateContact(this.contact)},n.prototype.delete=function(){console.log("delete called"),this.contactService.deleteContact(this.contact.id.toString())},n.prototype.isValidPhone=function(n){return/^[\+]+[0-9]/.test(n)&&n.length>=10&&n.length<=11},n.prototype.ngOnDestroy=function(){this.contactSub.unsubscribe()},n}(),tn=u.pb({encapsulation:0,styles:[[".not__exist[_ngcontent-%COMP%]{margin:auto;text-align:center}.read__only__profile[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:auto;width:100%;max-width:250px}.read__only__block[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.read__only__block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:right;margin-right:30px}.button__container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]],data:{}});function un(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-error",[],null,null,null,nn,X)),u.qb(1,114688,null,0,W,[],{error:[0,"error"]},null)],(function(n,l){n(l,1,0,l.component.error)}),null)}function en(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,23,"div",[["class","read__only__profile"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,4,"div",[["class","read__only__block"]],null,null,null,null,null)),(n()(),u.rb(2,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Name:"])),(n()(),u.rb(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ib(5,null,["",""])),(n()(),u.rb(6,0,null,null,4,"div",[["class","read__only__block"]],null,null,null,null,null)),(n()(),u.rb(7,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Email:"])),(n()(),u.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ib(10,null,["",""])),(n()(),u.rb(11,0,null,null,7,"div",[["class","read__only__block"]],null,null,null,null,null)),(n()(),u.rb(12,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Phone:"])),(n()(),u.rb(14,0,null,null,4,"p",[],null,null,null,null,null)),u.Gb(512,null,s.r,s.s,[u.s,u.t,u.k,u.D]),u.qb(16,278528,null,0,s.h,[s.r],{ngClass:[0,"ngClass"]},null),u.Eb(17,{error:0}),(n()(),u.Ib(18,null,["",""])),(n()(),u.rb(19,0,null,null,4,"div",[["class","button__container"]],null,null,null,null,null)),(n()(),u.rb(20,0,null,null,1,"button",[["class","warning"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.delete()&&u),u}),null,null)),(n()(),u.Ib(-1,null,["Delete"])),(n()(),u.rb(22,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=0!=(n.component.editAble=!0)&&u),u}),null,null)),(n()(),u.Ib(-1,null,["Edit"]))],(function(n,l){var t=l.component,u=n(l,17,0,!t.isValidPhone(t.contact.phone));n(l,16,0,u)}),(function(n,l){var t=l.component;n(l,5,0,t.contact.name),n(l,10,0,t.contact.email),n(l,18,0,t.contact.phone)}))}function on(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Name is required "]))],null,null)}function rn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Email is required "]))],null,null)}function an(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Not valid email "]))],null,null)}function cn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"p",[["class","error"]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Not valid format. Phone number must contains + and 10 or 11 numbers. Example: +1234567891 "]))],null,null)}function sn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,38,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var e=!0,o=n.component;return"submit"===l&&(e=!1!==u.Bb(n,2).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.Bb(n,2).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.save()&&e),e}),null,null)),u.qb(1,16384,null,0,h.s,[],null,null),u.qb(2,540672,null,0,h.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Gb(2048,null,h.b,null,[h.h]),u.qb(4,16384,null,0,h.m,[[4,h.b]],null,null),(n()(),u.rb(5,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Name"])),(n()(),u.rb(7,0,null,null,5,"input",[["formControlName","name"],["name","name"],["placeholder","Enter Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,8)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,8).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,8)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,8)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(8,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(10,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(12,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,on)),u.qb(14,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(15,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Email"])),(n()(),u.rb(17,0,null,null,5,"input",[["formControlName","email"],["name","email"],["placeholder","Enter Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,18)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,18).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,18)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,18)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(18,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(20,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(22,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,rn)),u.qb(24,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,an)),u.qb(26,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(27,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Phone"])),(n()(),u.rb(29,0,null,null,5,"input",[["formControlName","phone"],["name","phone"],["placeholder","Enter Phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.Bb(n,30)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Bb(n,30).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Bb(n,30)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Bb(n,30)._compositionEnd(t.target.value)&&e),e}),null,null)),u.qb(30,16384,null,0,h.c,[u.D,u.k,[2,h.a]],null,null),u.Gb(1024,null,h.j,(function(n){return[n]}),[h.c]),u.qb(32,671744,null,0,h.g,[[3,h.b],[8,null],[8,null],[6,h.j],[2,h.r]],{name:[0,"name"]},null),u.Gb(2048,null,h.k,null,[h.g]),u.qb(34,16384,null,0,h.l,[[4,h.k]],null,null),(n()(),u.gb(16777216,null,null,1,null,cn)),u.qb(36,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(37,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.Ib(-1,null,[" Save Contact "]))],(function(n,l){var t=l.component;n(l,2,0,t.form),n(l,10,0,"name"),n(l,14,0,t.form.get("name").hasError("required")&&t.form.get("name").dirty),n(l,20,0,"email"),n(l,24,0,t.form.get("email").hasError("required")&&t.form.get("email").dirty),n(l,26,0,t.form.get("email").hasError("email")&&t.form.get("email").dirty),n(l,32,0,"phone"),n(l,36,0,t.form.get("phone").hasError("invalidPhone")&&t.form.get("phone").dirty)}),(function(n,l){var t=l.component;n(l,0,0,u.Bb(l,4).ngClassUntouched,u.Bb(l,4).ngClassTouched,u.Bb(l,4).ngClassPristine,u.Bb(l,4).ngClassDirty,u.Bb(l,4).ngClassValid,u.Bb(l,4).ngClassInvalid,u.Bb(l,4).ngClassPending),n(l,7,0,u.Bb(l,12).ngClassUntouched,u.Bb(l,12).ngClassTouched,u.Bb(l,12).ngClassPristine,u.Bb(l,12).ngClassDirty,u.Bb(l,12).ngClassValid,u.Bb(l,12).ngClassInvalid,u.Bb(l,12).ngClassPending),n(l,17,0,u.Bb(l,22).ngClassUntouched,u.Bb(l,22).ngClassTouched,u.Bb(l,22).ngClassPristine,u.Bb(l,22).ngClassDirty,u.Bb(l,22).ngClassValid,u.Bb(l,22).ngClassInvalid,u.Bb(l,22).ngClassPending),n(l,29,0,u.Bb(l,34).ngClassUntouched,u.Bb(l,34).ngClassTouched,u.Bb(l,34).ngClassPristine,u.Bb(l,34).ngClassDirty,u.Bb(l,34).ngClassValid,u.Bb(l,34).ngClassInvalid,u.Bb(l,34).ngClassPending),n(l,37,0,t.form.invalid)}))}function bn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ib(2,null,["","'s Profile"])),(n()(),u.gb(16777216,null,null,1,null,en)),u.qb(4,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u.gb(0,[["editForm",2]],null,0,null,sn))],(function(n,l){n(l,4,0,!l.component.editAble,u.Bb(l,5))}),(function(n,l){n(l,2,0,l.component.contact.name)}))}function pn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"div",[["class","not__exist"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["User not exist"])),(n()(),u.rb(3,0,null,null,3,"a",[["routerLink","/contacts"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Bb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.qb(4,671744,null,0,r.n,[r.l,r.a,s.g],{routerLink:[0,"routerLink"]},null),(n()(),u.rb(5,0,null,null,1,"button",[],null,null,null,null,null)),(n()(),u.Ib(-1,null,["Go to Contact Page"]))],(function(n,l){n(l,4,0,"/contacts")}),(function(n,l){n(l,3,0,u.Bb(l,4).target,u.Bb(l,4).href)}))}function gn(n){return u.Kb(0,[(n()(),u.gb(16777216,null,null,1,null,un)),u.qb(1,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,bn)),u.qb(3,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u.gb(0,[["notExist",2]],null,0,null,pn))],(function(n,l){var t=l.component;n(l,1,0,t.error),n(l,3,0,t.contact,u.Bb(l,4))}),null)}function fn(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-edit-contact",[],null,null,null,gn,tn)),u.qb(1,245760,null,0,ln,[r.l,r.a,k,h.d],null,null)],(function(n,l){n(l,1,0)}),null)}var dn=u.nb("app-edit-contact",ln,fn,{},{},[]),hn={title:"Contacts"},mn={title:"New Profile"},vn={title:"Profile Details"},Cn=function(){return function(){}}(),_n=t("PCNd");t.d(l,"ContactsModuleNgFactory",(function(){return yn}));var yn=u.ob(e,[],(function(n){return u.zb([u.Ab(512,u.j,u.Z,[[8,[o.a,G,H,dn]],[3,u.j],u.x]),u.Ab(4608,s.l,s.k,[u.u,[2,s.u]]),u.Ab(4608,h.q,h.q,[]),u.Ab(4608,h.d,h.d,[]),u.Ab(1073742336,s.b,s.b,[]),u.Ab(1073742336,h.p,h.p,[]),u.Ab(1073742336,h.i,h.i,[]),u.Ab(1073742336,h.n,h.n,[]),u.Ab(1073742336,r.o,r.o,[[2,r.t],[2,r.l]]),u.Ab(1073742336,Cn,Cn,[]),u.Ab(1073742336,_n.a,_n.a,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,r.j,(function(){return[[{path:"",component:T,data:hn},{path:"profile",children:[{path:"new",data:mn,component:R},{path:"details/:id",data:vn,component:ln}]},{path:"",redirectTo:"",pathMatch:"full"}]]}),[])])}))}}]);