(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"2a71":function(a,t,e){a.exports=e.p+"img/extragas-logo.043bad8d.jpeg"},a55b:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",{attrs:{elevation:"1",outlined:""}},[s("div",{staticClass:"mb-3 mt-3 d-flex justify-center",attrs:{id:"imgholder"}},[s("v-snackbar",{attrs:{timeout:"1000",absolute:"",outlined:"",rounded:"pill",color:"primary",top:""},model:{value:a.snackbar.display,callback:function(t){a.$set(a.snackbar,"display",t)},expression:"snackbar.display"}},[s("v-icon",{staticClass:"mr-2",attrs:{color:"red"}},[a._v("mdi-alert-circle-outline")]),a._v(" "+a._s(a.snackbar.displayText)+" ")],1),s("v-img",{staticClass:"mx-2",attrs:{src:e("2a71"),"max-width":"150",contain:""}})],1),s("v-divider",{staticClass:"mb-4"},[a._v("insert")]),s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[s("span",{staticClass:"form_labels"},[a._v("Email or Username:")]),s("v-text-field",{attrs:{rules:a.usernameRules,label:"Username:",required:"",dense:"",solo:""},model:{value:a.username,callback:function(t){a.username=t},expression:"username"}}),a._e(),s("v-text-field",{attrs:{"append-icon":a.showPassword?"mdi-eye":"mdi-eye-off",type:a.showPassword?"text":"password",rules:a.passwordRules,label:"Password:",required:"",dense:"",solo:""},on:{"click:append":function(t){a.showPassword=!a.showPassword}},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"justify-start"},[s("v-btn",{attrs:{color:"primary"},on:{click:a.handleSignon}},[a._v("Sign-on  "),a.isSignonActive?s("v-progress-circular",{attrs:{size:"18",right:"",indeterminate:""}}):s("v-icon",{attrs:{dark:"",right:""}},[a._v("mdi-account-search")])],1)],1),s("v-row",{staticClass:"justify-start"},[a._e()])],1)],1)],1),s("v-divider"),a._e()],1)],1)],1)],1)},r=[],i=(e("99af"),e("56d7")),n={name:"Login",beforeDestroy:function(){},destroyed:function(){},created:function(){this.resetLocalStorage()},computed:{showReport:function(){return this.result.length>1},fullName:function(){var a=this;return function(t){return"".concat(t," ").concat(a.firstName," ").concat(a.lastName)}}},data:function(){return{isSignonActive:!1,showPassword:!1,snackbar:{displayText:"",display:!1},valid:!0,username:"",usernameRules:[function(a){return!!a||"User Name is required"},function(a){return a&&a.length<=10||"User Name must be less than 10 characters"}],password:"",passwordRules:[function(a){return!!a||"Password is required"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,result:""}},methods:{showSnackbar:function(a){this.snackbar.displayText=a,this.snackbar.display=!0},handleSignon:function(a){var t=this;a.preventDefault();try{var e=this,s=this.$refs.form.validate();if(s){e.isSignonActive=!0;var r=this.$restServer.loginURL;this.$http.post(r,{sales_id:this.username,password:this.password}).then((function(a){if(e.isSignonActive=!1,!a.data["RECORD_FOUND"]){var t=a.data["EXCEPTION"]?a.data["EXCEPTION"]:"record not found";throw"Sign-On Failed - ".concat(t)}localStorage.setItem("equalResponseEngineer",JSON.stringify(a.data)),i["store"].removeDatabase(),i["store"].setManageUsersPermission(a.data["MANAGE_USERS"]),i["store"].setFormsAllowed(a.data["FORMS"]),e.$router.push("/engineer")})).catch((function(a){t.isSignonActive=!1,t.showSnackbar(a)}))}}catch(a){this.isSignonActive=!1,this.showSnackbar(a)}},administratorClicked:function(){this.$router.push("/administratorView")},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset(),this.result=""},resetValidation:function(){this.$refs.form.resetValidation()}}},o=n,c=(e("dfa7"),e("2877")),l=e("6544"),d=e.n(l),u=e("8336"),f=e("b0af"),m=e("99d9"),v=e("62ad"),h=e("a523"),p=e("ce7e"),w=e("4bd4"),b=e("132d"),g=e("adda"),k=e("490a"),y=e("0fd9"),S=e("2db4"),x=e("2fa4"),V=e("8654"),C=Object(c["a"])(o,s,r,!1,null,"99ac6a0a",null);t["default"]=C.exports;d()(C,{VBtn:u["a"],VCard:f["a"],VCardActions:m["a"],VCol:v["a"],VContainer:h["a"],VDivider:p["a"],VForm:w["a"],VIcon:b["a"],VImg:g["a"],VProgressCircular:k["a"],VRow:y["a"],VSnackbar:S["a"],VSpacer:x["a"],VTextField:V["a"]})},d625:function(a,t,e){},dfa7:function(a,t,e){"use strict";e("d625")}}]);
//# sourceMappingURL=home.f080f681.js.map