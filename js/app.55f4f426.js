(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({home:"home"}[e]||e)+"."+{"chunk-2d0d6e7b":"377271cc","chunk-2d22c101":"b4771b98","chunk-3ece9ce1":"ba9545d1","chunk-0219726d":"ea7f1ae3","chunk-6424cffb":"cf53a6b3","chunk-7027d5dc":"69669513","chunk-cc80a5d4":"af346e45","chunk-64fd69ee":"9746c799","chunk-638f2bad":"75ac5542","chunk-9a034aec":"ef56ef57","chunk-746849fb":"0550ec15","chunk-7f100b71":"bfef31ff","chunk-b2750d0a":"e7d2341c","chunk-dcdef982":"dd131739","chunk-ed43fafc":"18ac41d6",home:"f080f681"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-3ece9ce1":1,"chunk-0219726d":1,"chunk-6424cffb":1,"chunk-7027d5dc":1,"chunk-cc80a5d4":1,"chunk-64fd69ee":1,"chunk-638f2bad":1,"chunk-9a034aec":1,"chunk-7f100b71":1,"chunk-b2750d0a":1,"chunk-dcdef982":1,"chunk-ed43fafc":1,home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({home:"home"}[e]||e)+"."+{"chunk-2d0d6e7b":"31d6cfe0","chunk-2d22c101":"31d6cfe0","chunk-3ece9ce1":"eca2f07a","chunk-0219726d":"ac0e6acd","chunk-6424cffb":"40b31ced","chunk-7027d5dc":"c30e4fbf","chunk-cc80a5d4":"a82fbd8b","chunk-64fd69ee":"01242594","chunk-638f2bad":"37ae51f2","chunk-9a034aec":"3bb5f8d3","chunk-746849fb":"31d6cfe0","chunk-7f100b71":"be338a9e","chunk-b2750d0a":"7136a787","chunk-dcdef982":"f8c55be8","chunk-ed43fafc":"47641b38",home:"e61961f0"}[e]+".css",r=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3095:function(e,t,n){},"49dd":function(e,t,n){"use strict";n("d3ba")},5323:function(e,t,n){"use strict";n("ce94")},"53e7":function(e,t,n){"use strict";n("3095")},"555a":function(e,t,n){e.exports=n.p+"img/icon.4c5b0b39.png"},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Ye}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d81d"),n("caad"),n("2532");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background},attrs:{id:"main"}},[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("a",{attrs:{href:"https://equalresponse.co.uk/",target:"_blank"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("555a"),transition:"scale-transition",width:"30"}})],1),a("span",{staticClass:"shrink mr-1 mt-1 hidden-sm-and-down"},[e._v("Engineer PWA")]),a("span",{staticClass:"shrink  mt-1"},[e._v(e._s(this.version)+" - © Equal Response Ltd "+e._s((new Date).getFullYear()))])]),a("v-spacer"),"/"===this.$router.currentRoute.path?a("div",[this.showByPassButton?a("v-btn",{attrs:{color:"success"},on:{click:e.byPass}},[e._v("Bypass")]):e._e()],1):e._e(),"/engineer"===this.$router.currentRoute.path?a("div",[this.showManageUsersButton?a("v-btn",{attrs:{color:"success"},on:{click:e.userManagementClick}},[e._v("Users")]):e._e()],1):e._e()],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:"",color:"primary",bottom:"",fixed:"",dark:"",padless:""}},[a("v-col",{staticClass:"d-flex align-center justify-space-between"},["/"!=this.$router.currentRoute.path?a("v-btn",{attrs:{color:"success"},on:{click:e.goBack}},[a("v-icon",{attrs:{dark:"",left:""}},[e._v("mdi-arrow-left")]),e._v("Back ")],1):e._e(),"/"!=this.$router.currentRoute.path?a("v-btn",{attrs:{color:"success"},on:{click:e.logOff}},[a("v-icon",{attrs:{dark:"",left:""}},[e._v("mdi-logout")]),e._v("Logoff ")],1):e._e()],1)],1)],1)},r=[],s={name:"app",methods:{userManagementClick:function(){this.$router.push("/userManagement")},logOff:function(){Ye.removeDatabase(),Ye.resetPhotos(),Ye.resetSignature(),this.resetLocalStorage(),this.$router.push("/")},goBack:function(){this.$router.back()},byPass:function(){var e={ENGINEER_ID:"gary",ENGINEER_PASSWORD:"mlwh2000",ENGINEER_EMAIL:"gary@extragas.co.uk",ENGINNER_NAME:"",RECORD_FOUND:!0,EXCEPTION:""},t={REQUEST_DATABASE:"ACCOUNT",REQUEST_INDEXFILE:"ACCOUNT",REQUEST_SEEKVALUE:"EXT01003",REQUEST_ERROR:"FALSE",RECORD_FOUND:"TRUE",ACCOUNT:"EXT01003",NAME:"Extrafuel Tester 1",NAMEXTN:"",ROADPREF:"Queensbury House",ROAD:"Harborough Road",DISTRICT:"Maidwell",TOWN:"Northampton",COUNTY:"Northamptonshire",POSTCODE:"NN6 9JA",CONTACT:"",TYPE:"01",INVACCT:"EXT01003",PAYACCT:"EXT01003",MAPREF:"",ROUTE:0,PAGE:0,CASH:"1",GROUP:0,DELIVERY:"N",PHONE:"",PHONEH:"07801219868",PHONEW:"",FAX:"",TERMS:7,ORDER:"N",LSTPART:"MISC",LSTQTY:1,LSTORD:533830,LSTDATE:"2020-09-03",OPENDB:60,OPENCR:0,OPENCSH:0,OPENPDB:0,OPENPCR:0,OPENPCSH:0,DBNMBR:0,PRNTDN:"Y",PRNTINV:"E",IT:6,CARFREE:.04,CREDLIM:750,MINORD:0,OPENORD:0,NMBR:"",CDISC:0,T:"D",ADDED:"2014-09-23",EDITED:"2020-10-05",SETTLE:0,SALESMAN:"COR",REBATE_REF:"",INVTYPE:6,EEC:"N",BR:4,ACCBAND:"FIX325",OTT:"Y",STATEMNT:"E",STATTYPE:1,COUNTRY:"",CLASS:"C",STERM:30,CCRED:0,TR:0,SUPPSETTLE:0,ACCTCONT:"",ACCTCPHONE:"",GENCONT:"",GENCPHONE:"",ST:"D",FACTORED:"N",USER1:"AG,AG",USER2:"",RC:"",NOOTT:"N",CHKPOINTS:0,OPENORD_Y:"",CURRENCY:"826",CLASSEXT:"T",SOURCE:"",SUPP_REF:"",VATNO:"",OPENORD_P:"1",BATCH_OPEN:"Y",HAS_SETTLE:"Y",PURCH_NOM:0,MAINT_DATE:"2014-09-23",IDS_CUST:"N",IDS_SUPP:"N",EMAIL:"jw@webs.limited, tom@awebserver.co.uk",INVORDER:"",CARR_VAL:"",SUBCONT:"N",SUPPID:0,FIRSTSALE:"2014-09-28",RC2:"12",RC3:"CP",CMETHOD:"",OPENORDBR:0,NO_TERMS:"N",CHNGACCT:"",CHNGDATE:"- -",NOMSALE:0,USER3:"450,450",USER4:"",USER5:"263702,263652",USER6:"31/12/2017,31/12/2017",PART:"BLKRN",CARRBAND:"",QBORDVAL:0,PO_OPTIONS:"0.0",OPT_PO:"N",GET_POINTS:"",HIREXCWKND:"N",PO_CANCEL:"Y",SAGEDEPT:0,MOBILE:"",MAXATTACH:0,STOPREASON:"",USER7:"",USER8:"tankmonitoring@extragas.co.uk",USER9:"",EMAIL_INV:"",EMAIL_STAT:"",CHKPTSDATE:"- -",BATCH_LTRS:"Y",STLCNOO:"N",RATE:0,USERDATE1:"2017-08-21",USERDATE2:"2018-08-21",LIMIT_FLAG:"",ACCBAND2:"",DEF_VAT:"",COUN_CODE:"",PIPEDRIVE:"",GDPR_OPTIN:"Y",POINT_MULT:"",GDPR_NATUR:"N",GDPR_AGE16:"N",GDPR_BY:"",GDPR_STAMP:"",SLC_PERC:0,CARDCHECK:"",LATITUDE:"",LONGITUDE:"",EORI:"",INCOTERMS:""};localStorage.setItem("equalResponseEngineer",JSON.stringify(e)),localStorage.setItem("equalResponseCustomer",JSON.stringify(t)),Ye.setManageUsersPermission(!0),Ye.setFormsAllowed(JSON.parse('[{"text":"All","value":"all","disabled":false}]')),this.$router.push({name:"Engineer",params:{isByPass:!0}})}},computed:{theme:function(){var e=this.$vuetify.theme.dark?"dark":"light";return e},showByPassButton:function(){return Ye.showByPassButton},showManageUsersButton:function(){return Ye.showManageUsersButton},version:function(){return Ye.version}},data:function(){return{links:["Home","Camera","Team"]}}},i=s,l=(n("5323"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),p=n("40dc"),h=n("8336"),f=n("62ad"),m=n("a523"),g=n("553a"),v=n("132d"),b=n("adda"),R=n("f6c4"),E=n("2fa4"),S=Object(l["a"])(i,o,r,!1,null,"329b4300",null),k=S.exports;u()(S,{VApp:d["a"],VAppBar:p["a"],VBtn:h["a"],VCol:f["a"],VContainer:m["a"],VFooter:g["a"],VIcon:v["a"],VImg:b["a"],VMain:R["a"],VSpacer:E["a"]});var C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var N=n("8c4f");a["a"].use(N["a"]);var T=new N["a"]({mode:"hash",routes:[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"a55b"))},meta:{guest:!0}},{path:"/index.html",name:"Index",component:function(){return n.e("home").then(n.bind(null,"a55b"))},meta:{guest:!0}},{path:"/engineer",name:"Engineer",component:function(){return Promise.all([n.e("chunk-64fd69ee"),n.e("chunk-9a034aec")]).then(n.bind(null,"7489"))},meta:{guest:!0}},{path:"/forgotPassword",name:"forgotPassword",component:function(){return n.e("chunk-2d22c101").then(n.bind(null,"f243"))},meta:{guest:!0}},{path:"/enhancedTest",name:"EnhancedTest",component:function(){return n.e("chunk-ed43fafc").then(n.bind(null,"1eff"))},meta:{guest:!0}},{path:"/testCertificate",name:"TestCertificate",component:function(){return Promise.all([n.e("chunk-3ece9ce1"),n.e("chunk-0219726d")]).then(n.bind(null,"5743"))},meta:{guest:!0}},{path:"/selfOwnedCommercial",name:"selfOwnedCommercial",component:function(){return Promise.all([n.e("chunk-3ece9ce1"),n.e("chunk-7027d5dc")]).then(n.bind(null,"a3fa"))},meta:{guest:!0}},{path:"/annualInspection",name:"AnnualInspection",component:function(){return n.e("chunk-b2750d0a").then(n.bind(null,"3bf4"))},meta:{guest:!0}},{path:"/reBrand",name:"Rebrand",component:function(){return Promise.all([n.e("chunk-3ece9ce1"),n.e("chunk-6424cffb")]).then(n.bind(null,"36c1"))},meta:{guest:!0}},{path:"/meterRead",name:"meterRead",component:function(){return n.e("chunk-dcdef982").then(n.bind(null,"583b"))},meta:{guest:!0}},{path:"/jobSheet",name:"jobSheet",component:function(){return Promise.all([n.e("chunk-3ece9ce1"),n.e("chunk-cc80a5d4")]).then(n.bind(null,"19f7"))},meta:{guest:!0}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-746849fb").then(n.bind(null,"34c3b"))},meta:{guest:!0}},{path:"/formReview",name:"FormReview",component:function(){return n.e("chunk-7f100b71").then(n.bind(null,"7562"))},meta:{guest:!0}},{path:"/administratorView",name:"AdministrataorView",component:function(){return n.e("chunk-2d0d6e7b").then(n.bind(null,"7518"))},meta:{guest:!0}},{path:"/userManagement",name:"UserManagement",component:function(){return Promise.all([n.e("chunk-64fd69ee"),n.e("chunk-638f2bad")]).then(n.bind(null,"1d56"))},meta:{guest:!0}}]});T.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))||e.matched.some((function(e){return e.meta.guest})),n()}));var U=T,O=n("f309"),_=n("fcf4");a["a"].use(O["a"]);var D=new O["a"]({theme:{dark:!1,themes:{light:{primary:"#006fa5",secondary:_["a"].grey.darken1,accent:_["a"].shades.black,error:_["a"].red.accent3,background:"#f5f5f5"},dark:{primary:_["a"].blue.lighten3,background:_["a"].indigo.base}}}}),w=n("bc3a"),P=n.n(w),A=(n("d1e78"),n("5363"),n("af0d")),x=n("f206"),y=n.n(x),I=n("825ae"),L=n("2169"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",{staticClass:"expansion_panel mb-1"},[n("v-expansion-panel-header",[e._v("Customer ")]),n("v-expansion-panel-content",[n("v-form",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Customer Name"},model:{value:e.customer.NAME,callback:function(t){e.$set(e.customer,"NAME",t)},expression:"customer.NAME"}}),n("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Customer ID"},model:{value:e.customer.ACCOUNT,callback:function(t){e.$set(e.customer,"ACCOUNT",t)},expression:"customer.ACCOUNT"}}),n("v-textarea",{attrs:{readonly:"",dense:"",outlined:"",label:"Address"},model:{value:e.formatCustomerAddress,callback:function(t){e.formatCustomerAddress=t},expression:"formatCustomerAddress"}})],1),n("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Postcode"},model:{value:e.customer.POSTCODE,callback:function(t){e.$set(e.customer,"POSTCODE",t)},expression:"customer.POSTCODE"}}),n("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Home Phone"},model:{value:e.customer.PHONEH,callback:function(t){e.$set(e.customer,"PHONEH",t)},expression:"customer.PHONEH"}}),n("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Mobile Phone"},model:{value:e.customer.PHONEM,callback:function(t){e.$set(e.customer,"PHONEM",t)},expression:"customer.PHONEM"}})],1)],1)],1)],1)],1)},V=[],B={name:"Customer",props:{customer:Object},computed:{formatCustomerAddress:function(){var e=this.$props.customer.NMBR+" "+this.$props.customer.ROAD+", "+this.$props.customer.DISTRICT+", "+this.$props.customer.TOWN+", "+this.$props.customer.COUNTY;return e}}},$=B,F=n("cd55"),j=n("49e2"),q=n("c865"),H=n("4bd4"),G=n("0fd9"),Y=n("8654"),J=n("a844"),X=Object(l["a"])($,M,V,!1,null,null,null),K=X.exports;u()(X,{VCol:f["a"],VExpansionPanel:F["a"],VExpansionPanelContent:j["a"],VExpansionPanelHeader:q["a"],VForm:H["a"],VRow:G["a"],VTextField:Y["a"],VTextarea:J["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:e.caption,disabled:!e.enabled,dense:"",outlined:"",readonly:"",clearable:"",value:e.curDate}},a))]}}]),model:{value:e.fromDateMenu,callback:function(t){e.fromDateMenu=t},expression:"fromDateMenu"}},[n("v-date-picker",{attrs:{locale:"en-in",value:e.curDate,"no-title":""},on:{input:e.dateSelected}})],1)},W=[],z={props:["curDate","caption","enabled"],methods:{dateSelected:function(e){this.fromDateMenu=!1,this.$emit("updated",e)}},data:function(){return{fromDateMenu:!1}}},Z=z,ee=n("2e4b"),te=n("e449"),ne=Object(l["a"])(Z,Q,W,!1,null,null,null),ae=ne.exports;u()(ne,{VDatePicker:ee["a"],VMenu:te["a"],VTextField:Y["a"]});var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[e._v("Engineer Signature")]),n("v-card-text",{staticClass:"pt-4"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",dense:"",label:"Engineer Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("DateSelector",{attrs:{caption:"Date",enabled:!0,curDate:e.date},on:{updated:function(t){e.date=t}}})],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex justify-center"},[n("strong",[e._v("Signature:")])])])],1),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex justify-center"},[n("VueSignaturePad",{ref:"signaturePad",attrs:{id:"signature",width:"300px",height:"90px",options:{onBegin:function(){e.$refs.signaturePad.resizeCanvas()}}}})],1)])],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.cancelSignature}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.resetSignature}},[e._v("Reset")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.continueSignature}},[e._v("Continue")])],1)],1)},re=[],se=(n("b0c0"),{name:"SignaturePad",methods:{cancelSignature:function(){this.$refs.signaturePad.clearSignature(),Ye.resetSignature(),this.$emit("SignatureCanceled")},resetSignature:function(){this.$refs.signaturePad.clearSignature(),Ye.resetSignature()},continueSignature:function(){var e=this.$refs.signaturePad.saveSignature(),t=(e.isEmpty,e.data),n=void 0===t?"":t,a={signature:n,date:this.date,name:this.name};Ye.saveSignature(a),this.$emit("SignatureUpdated",a)}},mounted:function(){this.$nextTick((function(){var e=JSON.parse(localStorage.getItem("equalResponseEngineer"));this.name=e.ENGINEER_NAME?e.ENGINEER_NAME:"N/A",this.date=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}))},data:function(){return{name:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}}}),ie=se,le=(n("49dd"),n("b0af")),ce=n("99d9"),ue=n("ce7e"),de=Object(l["a"])(ie,oe,re,!1,null,"6aa1cff0",null),pe=de.exports;u()(de,{VBtn:h["a"],VCard:le["a"],VCardActions:ce["a"],VCardText:ce["b"],VCardTitle:ce["c"],VCol:f["a"],VDivider:ue["a"],VRow:G["a"],VSpacer:E["a"],VTextField:Y["a"]});var he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:e.caption,disabled:!e.enabled,dense:"",outlined:"",readonly:"",clearable:"",value:e.curTime}},a))]}}]),model:{value:e.fromTimeMenu,callback:function(t){e.fromTimeMenu=t},expression:"fromTimeMenu"}},[n("v-time-picker",{attrs:{locale:"en-in",value:e.curTime,scrollable:""},on:{change:e.timeSelected}})],1)},fe=[],me={props:["curTime","caption","enabled"],methods:{timeSelected:function(e){this.fromTimeMenu=!1,this.$emit("updated",e)}},data:function(){return{fromTimeMenu:!1}}},ge=me,ve=n("c964"),be=Object(l["a"])(ge,he,fe,!1,null,null,null),Re=be.exports;u()(be,{VMenu:te["a"],VTextField:Y["a"],VTimePicker:ve["a"]});var Ee=n("fdeb"),Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{rounded:"pill",timeout:"2500",top:"",middle:"",color:"primary",elevation:"24"},model:{value:e.MySnackBar.show,callback:function(t){e.$set(e.MySnackBar,"show",t)},expression:"MySnackBar.show"}},["icon"==e.MySnackBar.showImage?n("v-icon",[e._v(" mdi-alert-circle-outline ")]):e._e(),n("span",{staticClass:"ml-2 message"},[e._v(e._s(this.MySnackBar.text))]),"progress"==e.MySnackBar.showImage?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)},ke=[],Ce={props:{MySnackBar:Object}},Ne=Ce,Te=(n("53e7"),n("490a")),Ue=n("2db4"),Oe=Object(l["a"])(Ne,Se,ke,!1,null,"84e5d2a2",null),_e=Oe.exports;u()(Oe,{VIcon:v["a"],VProgressCircular:Te["a"],VSnackbar:Ue["a"]});var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-3"},[n("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.uploadingDialog.showDialog,callback:function(t){e.$set(e.uploadingDialog,"showDialog",t)},expression:"uploadingDialog.showDialog"}},[n("v-card",{staticClass:"mx-auto",attrs:{"min-width":"300"}},[n("v-card-title",{staticClass:"primary white--text"},[e._v("Uploading Form")]),n("v-container",{staticStyle:{height:"200px"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[n("span",[n("v-icon",[e._v("mdi-file-pdf")]),e._v(" "+e._s(e.uploadingDialog.message)+" ")],1)]),n("v-col",{attrs:{cols:"8"}},[n("v-progress-linear",{attrs:{color:"deep-purple accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],1)],1)],1)},we=[],Pe={props:{uploadingDialog:Object}},Ae=Pe,xe=n("169a"),ye=n("8e36"),Ie=Object(l["a"])(Ae,De,we,!1,null,null,null),Le=Ie.exports;u()(Ie,{VCard:le["a"],VCardTitle:ce["c"],VCol:f["a"],VContainer:m["a"],VDialog:xe["a"],VIcon:v["a"],VProgressLinear:ye["a"],VRow:G["a"]});var Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-3"},[n("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.uploadingRebrandDialog.showDialog,callback:function(t){e.$set(e.uploadingRebrandDialog,"showDialog",t)},expression:"uploadingRebrandDialog.showDialog"}},[n("v-card",{staticClass:"mx-auto",attrs:{"min-width":"400"}},[n("v-card-title",{staticClass:"primary white--text"},[e._v("Uploading Rebrand Form")]),n("v-card-text",[n("v-col",{staticClass:"text-subtitle-1",attrs:{cols:"12"}},[e.uploadingRebrandDialog.pdfMessage?n("span",[n("v-icon",[e._v("mdi-file-pdf")]),e._v(" "+e._s(e.uploadingRebrandDialog.pdfMessage)+" ")],1):e._e()]),n("v-divider"),n("v-col",{staticClass:"text-subtitle-1",attrs:{cols:"12"}},[e.uploadingRebrandDialog.photoUpload["status"]?n("span",[n("v-icon",[e._v("mdi-file-pdf")]),e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["status"])+" ")],1):e._e()]),e.uploadingRebrandDialog.photoUpload["current-boiler-plate"]?n("v-card-text",[e._v(" current-boiler-plate : "+e._s(e.uploadingRebrandDialog.photoUpload["current-boiler-plate"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["appliance-position"]?n("v-card-text",[e._v(" appliance-position : "+e._s(e.uploadingRebrandDialog.photoUpload["appliance-position"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["ecv-valve"]?n("v-card-text",[e._v(" ecv-valve : "+e._s(e.uploadingRebrandDialog.photoUpload["ecv-valve"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["fuel-type"]?n("v-card-text",[e._v(" fuel-type : "+e._s(e.uploadingRebrandDialog.photoUpload["fuel-type"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["power-supply"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["power-supply"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["building-work"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["building-work"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["additional-photo-1"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["additional-photo-1"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["additional-photo-2"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["additional-photo-2"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["additional-photo-3"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["additional-photo-3"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["additional-photo-4"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["additional-photo-4"])+" ")]):e._e(),e.uploadingRebrandDialog.photoUpload["additional-photo-5"]?n("v-card-text",[e._v(" "+e._s(e.uploadingRebrandDialog.photoUpload["additional-photo-5"])+" ")]):e._e()],1)],1)],1)],1)},Ve=[],Be={props:{uploadingRebrandDialog:Object}},$e=Be,Fe=Object(l["a"])($e,Me,Ve,!1,null,null,null),je=Fe.exports;u()(Fe,{VCard:le["a"],VCardText:ce["b"],VCardTitle:ce["c"],VCol:f["a"],VDialog:xe["a"],VDivider:ue["a"],VIcon:v["a"]}),a["a"].use(y.a),a["a"].use(I["a"]),a["a"].use(L["a"]),a["a"].component("customer",K),a["a"].component("DateSelector",ae),a["a"].component("SignaturePad",pe),a["a"].component("TimeSelector",Re),a["a"].component("EngineerUpdate",Ee["a"]),a["a"].component("mySnackBar",_e),a["a"].component("uploadingDialog",Le),a["a"].component("uploadingRebrandDialog",je),a["a"].config.productionTip=!1;var qe={serverURL:"http://localhost/server/public/",loginURL:"http://localhost/server/public/login",updateURL:"http://localhost/server/public/update",searchURL:"http://localhost/server/public/search",baseController:"http://localhost/server/public/pdf/enhancedTest",enhancedTestURL:"http://localhost/server/public/pdf/enhancedTest",annualInspectionURL:"http://localhost/server/public/pdf/annualInspection",reBrandURL:"http://localhost/server/public/pdf/reBrand",jobSheetURL:"http://localhost/server/public/pdf/jobSheet",testCertificateURL:"http://localhost/server/public/pdf/testCertificate",selfOwnedCommercialURL:"http://localhost/server/public/pdf/selfOwnedCommercial",uploadPDFToDropBoxURL:"http://localhost/server/public/dropbox/uploadPDFToDropBox",formsUploadStatusURL:"http://localhost/server/public/formUpload/formsUploadStatus",formUploadCompletedURL:"http://localhost/server/public/formUpload/formUploadCompleted",createUserURL:"http://localhost/server/public/user/createUser",readUserURL:"http://localhost/server/public/user/readUser",updateUserURL:"http://localhost/server/public/user/updateUser",deleteUserURL:"http://localhost/server/public/user/deleteUser",updatePasswordURL:"http://localhost/server/public/user/updatePassword",blankPhoto:"http://localhost/server/public/photo/blankphoto",photoUpload:"http://localhost/server/public/photo/upload"},He={serverURL:"https://engineer.equalresponse.co.uk/server/public/",loginURL:"https://engineer.equalresponse.co.uk/server/public/login",updateURL:"https://engineer.equalresponse.co.uk/server/public/update",searchURL:"https://engineer.equalresponse.co.uk/server/public/search",baseController:"https://engineer.equalresponse.co.uk/server/public/pdf/enhancedTest",enhancedTestURL:"https://engineer.equalresponse.co.uk/server/public/pdf/enhancedTest",annualInspectionURL:"https://engineer.equalresponse.co.uk/server/public/pdf/annualInspection",reBrandURL:"https://engineer.equalresponse.co.uk/server/public/pdf/reBrand",jobSheetURL:"https://engineer.equalresponse.co.uk/server/public/pdf/jobSheet",testCertificateURL:"https://engineer.equalresponse.co.uk/server/public/pdf/testCertificate",selfOwnedCommercialURL:"https://engineer.equalresponse.co.uk/server/public/pdf/selfOwnedCommercial",uploadPDFToDropBoxURL:"https://engineer.equalresponse.co.uk/server/public/dropbox/uploadPDFToDropBox",formsUploadStatusURL:"https://engineer.equalresponse.co.uk/server/public/formUpload/formsUploadStatus",formUploadCompletedURL:"https://engineer.equalresponse.co.uk/server/public/formUpload/formUploadCompleted",createUserURL:"https://engineer.equalresponse.co.uk/server/public/user/createUser",readUserURL:"https://engineer.equalresponse.co.uk/server/public/user/readUser",updateUserURL:"https://engineer.equalresponse.co.uk/server/public/user/updateUser",deleteUserURL:"https://engineer.equalresponse.co.uk/server/public/user/deleteUser",updatePasswordURL:"https://engineer.equalresponse.co.uk/server/public/user/updatePassword",blankPhoto:"https://engineer.equalresponse.co.uk/server/public/photo/blankphoto",photoUpload:"https://engineer.equalresponse.co.uk/server/public/photo/upload"},Ge=!1;a["a"].prototype.$restServer=Ge?qe:He,a["a"].prototype.$http=P.a,a["a"].prototype.$dbName="EqualResponse",a["a"].mixin({methods:{storePdfReviewObject:function(e){localStorage.setItem("equalResponsePdfReviewObject",JSON.stringify(e))},resetPdfReviewObject:function(){localStorage.removeItem("equalResponsePdfReviewObject")},pdfReviewUpload:function(){var e=localStorage.getItem("equalResponsePdfReviewObject"),t=this.$restServer.uploadPDFToDropBoxURL;this.$http.post(t,e).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},resetLocalStorage:function(){localStorage.removeItem("equalResponsePdfReviewObject"),localStorage.removeItem("equalResponseFormReview"),localStorage.removeItem("annualInspectionFormReview"),localStorage.removeItem("enhancedTestFormReview"),localStorage.removeItem("rebrandFormReview"),localStorage.removeItem("jobSheetFormReview"),localStorage.removeItem("testCertificateFormReview"),localStorage.removeItem("selfOwnedCommercialFormReview"),localStorage.removeItem("equalResponseEngineer"),localStorage.removeItem("equalResponseCustomer"),localStorage.removeItem("equalResponseSaleman")}}});var Ye=new a["a"]({data:{debugOn:!1,formsUploadStatus:null,showByPassButton:!1,showManageUsersButton:!1,formsAllowed:[],version:"1.0.26",signature:null,photos:[],formReviewResponse:null,formReviewObjects:{jobSheet:null,reBrand:null,testCertificate:null,enhancedTest:null,annualInspection:null,selfOwnedCommercial:null}},methods:{removeDatabase:function(){var e=new A["a"](this.$dbName);e&&e.delete()},removeDocument:function(e,t){var n=new A["a"](this.$dbName);n&&n.collection(e).doc(t).delete()},consoleLog:function(e){this.debugOn&&console.log(e)},setFormsAllowed:function(e){try{var t=e.map((function(e){return e.value.toLowerCase()}));this.formsAllowed=t,this.consoleLog("forms allowed = ".concat(t))}catch(n){this.consoleLog(n),this.formsAllowed=[]}},isFormAllowed:function(e){try{if(this.formsAllowed.includes("all"))return!0;var t=e.toLowerCase();return this.formsAllowed.includes(t)}catch(n){return this.consoleLog(n),!1}},setManageUsersPermission:function(e){this.showManageUsersButton=e},getPhotosCount:function(){return this.consoleLog("Getting Photo Count"),this.photos.length},resetPhotos:function(){this.consoleLog("Resetting Photos"),this.photos=[]},getPhotos:function(){return this.consoleLog("Getting Photos"),this.photos},setPhotos:function(e){this.consoleLog("Setting Photos"),this.photos=e},saveFormsUploadStatus:function(e){this.formsUploadStatus=e},saveFormObject:function(e,t){this.formReviewObjects["".concat(e)]=t},retrieveFormObject:function(e){return this.formReviewObjects["".concat(e)]},clearFormObject:function(e){this.formReviewObjects["".concat(e)]=null},saveFormReviewResponse:function(e){this.formReviewResponse=e},resetFormReviewResponse:function(){this.formReviewResponse=null},retrieveFormReviewResponse:function(){return this.formReviewResponse},saveSignature:function(e){this.signature=e},resetSignature:function(){this.signature=null},retrieveSignature:function(){return this.signature}}});new a["a"]({router:U,vuetify:D,render:function(e){return e(k)}}).$mount("#app")},ce94:function(e,t,n){},d3ba:function(e,t,n){},eb1c:function(e,t,n){},f949:function(e,t,n){"use strict";n("eb1c")},fdeb:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-snackbar",{attrs:{timeout:e.snackbar.timeout,absolute:"",outlined:"",rounded:"pill",color:"primary",top:""},model:{value:e.snackbar.display,callback:function(t){e.$set(e.snackbar,"display",t)},expression:"snackbar.display"}},[e._v(" "+e._s(e.snackbar.displayText)+" ")]),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{autofocus:"",dense:"",label:"Name of Engineer",outlined:"",required:"",rules:e.nameRules,clearable:""},on:{"click:clear":function(t){e.valid=!1}},model:{value:e.engineer.ENGINEER_NAME,callback:function(t){e.$set(e.engineer,"ENGINEER_NAME",t)},expression:"engineer.ENGINEER_NAME"}}),n("v-row",{staticClass:"d-flex justify-end",attrs:{dense:""}},[n("v-btn",{staticClass:"mr-1",attrs:{color:"primary"},on:{click:e.resetForm}},[e._v("Reset")]),n("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.updateEngineerName}},[e._v("Update")])],1)],1)],1)],1)],1)},o=[],r=n("56d7"),s={name:"EngineerUpdate",methods:{showSnackbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.snackbar.displayText=e,this.snackbar.display=!0,this.snackbar.color=t},updateEngineerName:function(){var e=this,t=this,n=t.$restServer.updateURL,a={engineerId:this.engineer.ENGINEER_ID,engineerName:this.engineer.ENGINEER_NAME};r["store"].consoleLog("Updating Engineer name, EngineerId :'".concat(this.engineer.ENGINEER_ID,"'")),t.$http.post(n,a).then((function(n){if(!n.data.RECORD_UPDATED)throw"Update Engineer Name failed, EngineerId : '".concat(e.engineer.ENGINEER_ID);t.showSnackbar("Engineer's name was updated successfully");var a=JSON.stringify(e.engineer);a&&localStorage.setItem("equalResponseEngineer",a),r["store"].consoleLog("Updated engineer name, EngineerId : '".concat(e.engineer.ENGINEER_ID,"'"))})).catch((function(e){t.showSnackbar(e,"red darken-2"),r["store"].consoleLog(e)}))},updateEngineerEmail:function(){var e=this,t=this,n=t.$restServer.updateURL,a={engineerId:this.engineer.ENGINEER_ID,engineerEmail:this.engineer.ENGINEER_EMAIL};t.$http.post(n,a).then((function(n){if(!n.data.RECORD_UPDATED)throw"Update Record Failed";t.showSnackbar("Enginner Email Updated !!");var a=JSON.stringify(e.engineer);a&&localStorage.setItem("equalResponseEngineer",a)})).catch((function(e){t.showSnackbar(e),console.log(e)}))},resetForm:function(){this.engineer=JSON.parse(localStorage.getItem("equalResponseEngineer"))}},mounted:function(){this.$nextTick((function(){this.engineer=JSON.parse(localStorage.getItem("equalResponseEngineer"))}))},data:function(){return{snackbar:{displayText:"",display:!1,timeout:2e3,color:""},engineer:{},valid:!1,nameRules:[function(e){return!!e||"Name is required"}]}}},i=s,l=(n("f949"),n("2877")),c=n("6544"),u=n.n(c),d=n("8336"),p=n("62ad"),h=n("4bd4"),f=n("0fd9"),m=n("2db4"),g=n("8654"),v=Object(l["a"])(i,a,o,!1,null,"055d3ad8",null);t["a"]=v.exports;u()(v,{VBtn:d["a"],VCol:p["a"],VForm:h["a"],VRow:f["a"],VSnackbar:m["a"],VTextField:g["a"]})}});
//# sourceMappingURL=app.55f4f426.js.map