(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a034aec"],{"0393":function(e,t,s){"use strict";var a=s("f3f3"),o=(s("0481"),s("210b"),s("604c")),i=s("d9bd");t["a"]=o["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var s=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(a)}}})},"210b":function(e,t,s){},7489:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",{attrs:{dense:""}},[s("v-snackbar",{attrs:{timeout:e.snackbar.timeout,absolute:"",outlined:"",rounded:"pill",color:"primary",top:""},model:{value:e.snackbar.display,callback:function(t){e.$set(e.snackbar,"display",t)},expression:"snackbar.display"}},[s("v-icon",{staticClass:"mr-2",attrs:{color:"red"}},[e._v("mdi-alert-circle-outline")]),e._v(" "+e._s(e.snackbar.displayText)+" ")],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{staticClass:"d-flex align-baseline",attrs:{label:"Enter Customer ID",rules:e.customerRules,required:"",solo:"",clearable:"",placeholder:"Enter Customer ID"},on:{"click:clear":e.onClearClicked},scopedSlots:e._u([{key:"append-outer",fn:function(){return[s("v-btn",{attrs:{color:"primary",dark:""},on:{click:e.searchAccounts}},[e._v(" Find  "),e.isSearchingActive?s("v-progress-circular",{attrs:{size:"18",right:"",indeterminate:""}}):s("v-icon",{attrs:{dark:"",right:""}},[e._v("mdi-account-search")])],1)]},proxy:!0}]),model:{value:e.customer_search_id,callback:function(t){e.customer_search_id=t},expression:"customer_search_id"}})],1)],1),s("v-row",{staticStyle:{"margin-bottom":"10px"},attrs:{dense:""}},[s("v-expansion-panels",{staticClass:"expansion_panels"},[s("v-expansion-panel",{staticClass:"expansion_panel"},[s("v-expansion-panel-header",[s("span",[s("v-icon",{attrs:{left:""}},[e._v(" "+e._s("mdi-eye"))]),e._v(" My Engineer Account - '"+e._s(e.engineer.ENGINEER_ID)+"' ")],1)]),s("v-expansion-panel-content",[s("engineer-update")],1)],1)],1)],1),s("v-row",{staticStyle:{"margin-bottom":"10px"},attrs:{dense:""}},[s("v-col",[s("v-expansion-panels",{staticClass:"expansion_panels",attrs:{disabled:!e.isCustomerValid,value:e.isCustomerValid?0:null}},[s("v-expansion-panel",{staticClass:"expansion_panel"},[s("v-expansion-panel-header",[s("span",[s("v-icon",{attrs:{left:""}},[e._v(e._s(e.isCustomerValid?"mdi-eye":"mdi-eye-off"))]),e._v(" Customer Information ")],1)]),s("v-expansion-panel-content",[s("v-form",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Customer Name"},model:{value:e.customer.NAME,callback:function(t){e.$set(e.customer,"NAME",t)},expression:"customer.NAME"}}),s("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Customer ID"},model:{value:e.customer.ACCOUNT,callback:function(t){e.$set(e.customer,"ACCOUNT",t)},expression:"customer.ACCOUNT"}}),s("v-textarea",{attrs:{readonly:"",dense:"",outlined:"",label:"Address"},model:{value:e.formatCustomerAddress,callback:function(t){e.formatCustomerAddress=t},expression:"formatCustomerAddress"}})],1),s("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Postcode"},model:{value:e.customer.POSTCODE,callback:function(t){e.$set(e.customer,"POSTCODE",t)},expression:"customer.POSTCODE"}}),s("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Home Phone"},model:{value:e.customer.PHONEH,callback:function(t){e.$set(e.customer,"PHONEH",t)},expression:"customer.PHONEH"}}),s("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"Mobile Phone"},model:{value:e.customer.PHONEM,callback:function(t){e.$set(e.customer,"PHONEM",t)},expression:"customer.PHONEM"}})],1)],1)],1)],1)],1)],1)],1)],1),s("v-row",{staticStyle:{"margin-bottom":"10px"},attrs:{dense:""}},[s("v-col",{staticStyle:{"margin-bottom":"40px"}},[s("v-expansion-panels",{staticClass:"expansion_panels",attrs:{disabled:!e.isCustomerValid,value:e.isCustomerValid?0:null}},[s("v-expansion-panel",{staticClass:"dl_expansion_panel"},[s("v-expansion-panel-header",{staticClass:"dl_expansion_panel_header"},[s("span",[s("v-icon",{attrs:{left:""}},[e._v(e._s(e.isCustomerValid?"mdi-eye":"mdi-eye-off"))]),e._v(" Engineer Forms ")],1)]),s("v-expansion-panel-content",{staticClass:"dl_expansion_panel_content"},[s("v-list-item-group",{staticClass:"mb-2",attrs:{"active-class":"pink--text"}},[e._l(e.engineerItems,(function(t,a){return[e.isThisFormAllowed(t)?s("v-list-item",{key:a,staticStyle:{display:"flex","align-items":"baseline"},attrs:{disabled:e.disableFormsListItem(t)},on:{click:function(s){return s.stopPropagation(),e.onItemClicked(t.link)}}},[s("v-list-item-icon",{staticStyle:{display:"flex","flex-flow":"column"}},[s("v-icon",{staticClass:"mdi-36px",attrs:{color:"red darken-3"}},[e._v("mdi-file-pdf")])],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:e._s(t.title)}}),s("v-list-item-subtitle",{domProps:{textContent:e._s(t.headline)}}),s("v-list-item-subtitle",{domProps:{textContent:e._s(t.subtitle)}}),e.disableFormsListItem(t)?s("div",[s("v-list-item-subtitle",[e._v("Not Availible")]),s("v-list-item-subtitle",[e._v("LastUpload : "+e._s(e.formsUploadStatus[""+t.formName].uploadedTime))])],1):e._e()],1),e.showOverride(t)?s("v-btn",{style:[e.isDisabled?{"pointer-events":"none"}:{"pointer-events":"auto"}],attrs:{fab:"",small:"",tile:"",color:"success",disabled:e.disableOverride()},on:{click:function(s){return s.stopPropagation(),e.onItemClicked(t.link)}}},[s("v-icon",[e._v("mdi-account-supervisor-circle-outline")])],1):e._e()],1):e._e(),a<e.engineerItems.length-1?s("v-divider",{key:a+10}):e._e()]}))],2)],1)],1)],1)],1)],1)],1)},o=[],i=(s("7db0"),s("fdeb")),n=s("56d7"),r={name:"Engineer",created:function(){if(this.$route.params.isByPass){var e=JSON.parse(localStorage.getItem("equalResponseCustomer"));return this.isCustomerValid=this.$route.params.isByPass,this.customer_search_id=e.ACCOUNT,void(this.customer=e)}this.isCustomerValid=!1,this.customer={};e=JSON.parse(localStorage.getItem("equalResponseCustomer"));e&&(this.customer_search_id=e.ACCOUNT,this.customer=e,this.isCustomerValid=!0)},mounted:function(){this.$nextTick((function(){this.engineer=JSON.parse(localStorage.getItem("equalResponseEngineer")),n["store"].consoleLog("Engineer View Mounted"),n["store"].consoleLog(this.engineer),this.getFormsUploadStatus()}))},components:{EngineerUpdate:i["a"]},computed:{formatCustomerAddress:function(){var e=this.customer.NMBR+" "+this.customer.ROAD+", "+this.customer.DISTRICT+", "+this.customer.TOWN+", "+this.customer.COUNTY;return e}},data:function(){return{formsUploadStatus:null,isSearchingActive:!1,snackbar:{displayText:"",display:!1,timeout:1e3},isCustomerValid:!1,customer_search_id:"",customer:{},engineer:{},select:null,isDisabled:!0,customerRules:[function(e){return!!e||"Customer ID is required"},function(e){return e&&e.length<=10||"Customer ID must be less than 10 characters"},function(e){return e&&e.length>2||"Customer ID be more than 3 characters"}],engineerItems:[{formName:"enhancedTest",title:"Enhanced Test",headline:"Supplementary Checks",subtitle:"",link:"/enhancedTest",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"annualInspection",title:"Annual Liquid Inspection",headline:"Annual Liquid Inspection form",subtitle:"For liquid installations",link:"/annualInspection",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"testCertificate",title:"Test Certificate",headline:"Bulk Tank Periodic Examination",subtitle:"",link:"/testCertificate",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"reBrand",title:"Re Brand",headline:"Re-branding",subtitle:"",link:"/reBrand",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"jobSheet",title:"Job Sheet",headline:"Gas Installation Report",subtitle:"Form & Emergency Call",link:"/jobsheet",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"selfOwnedCommercial",title:"Self Owned Commercial",headline:"Tank Survey Form Vessel Details",subtitle:"",link:"/selfOwnedCommercial",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{formName:"meters",title:"Meter Reading",headline:"Customer Meter Reads",subtitle:"",link:"/meterRead",flex:6,src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"}],checkbox:!1,result:"",alert:!1}},methods:{showOverride:function(e){var t=!1;return void 0==e.formName?t=!1:"rebrand"==e.formName.toLowerCase()&&(t=!0),t},disableOverride:function(){var e=!1;if(this.engineer["FORMS"]){var t=this.engineer["FORMS"].find((function(e){return"restrictoverride"===e.value.toLowerCase()}));console.log("is restricted: ",t),void 0===t?(e=!1,this.isDisabled=!1):(e=!0,this.isDisabled=!0)}return e},isThisFormAllowed:function(e){return n["store"].isFormAllowed(e.formName)},disableFormsListItem:function(e){return null!==this.formsUploadStatus&&("rebrand"===e.formName.toLowerCase()&&!!this.formsUploadStatus["".concat(e.formName)])},getFormsUploadStatus:function(){var e=this;if(n["store"].consoleLog("getFormsUploadStatus()"),this.isCustomerValid){var t=this.$restServer.formsUploadStatusURL,s=this.customer["ACCOUNT"].toLowerCase(),a=this.engineer["ENGINEER_ID"].toLowerCase();this.$http.post(t,{account:s,engineer:a}).then((function(t){n["store"].saveFormsUploadStatus(t.data),e.formsUploadStatus=t.data})).catch((function(e){n["store"].consoleLog(e)}))}},showSnackbar:function(e){this.snackbar.displayText=e,this.snackbar.display=!0},onItemClicked:function(e){this.$router.push(e)},onClearClicked:function(){this.isCustomerValid=!1,this.allFormsUploadStatus},searchAccounts:function(){if(null!==this.customer_search_id&&!(this.customer_search_id.length<2))try{var e=this.$restServer.searchURL+"/"+this.customer_search_id,t=this;t.isCustomerValid=!1,t.isSearchingActive=!0,this.$http.get(e).then((function(e){if(t.isSearchingActive=!1,"TRUE"!==e.data.RECORD_FOUND){localStorage.removeItem("equalResponseCustomer"),t.customer={},t.isCustomerValid=!1;var s=e.data.faultstring?e.data.faultstring:"'".concat(e.data["REQUEST_SEEKVALUE"],"' - Record Not Found");throw s}localStorage.setItem("equalResponseCustomer",JSON.stringify(e.data)),t.customer=JSON.parse(localStorage.getItem("equalResponseCustomer")),t.isCustomerValid=!0,t.getFormsUploadStatus()})).catch((function(e){console.log(e),t.isCustomerValid=!1,t.isSearchingActive=!1,t.customer={},t.showSnackbar(e)}))}catch(s){console.log(s),self.isCustomerValid=!1,self.isSearchingActive=!1,self.customer={},self.showSnackbar(s)}}}},l=r,c=(s("81fd"),s("2877")),u=s("6544"),d=s.n(u),m=s("8336"),p=s("62ad"),h=s("ce7e"),f=s("cd55"),v=s("49e2"),b=s("c865"),C=s("0393"),g=s("4bd4"),x=s("132d"),_=s("da13"),S=s("5d23"),k=s("1baa"),y=s("34c3"),N=s("490a"),I=s("0fd9"),O=s("2db4"),V=s("8654"),E=s("a844"),A=Object(c["a"])(l,a,o,!1,null,"5f3771d6",null);t["default"]=A.exports;d()(A,{VBtn:m["a"],VCol:p["a"],VDivider:h["a"],VExpansionPanel:f["a"],VExpansionPanelContent:v["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:C["a"],VForm:g["a"],VIcon:x["a"],VListItem:_["a"],VListItemContent:S["a"],VListItemGroup:k["a"],VListItemIcon:y["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VProgressCircular:N["a"],VRow:I["a"],VSnackbar:O["a"],VTextField:V["a"],VTextarea:E["a"]})},"81fd":function(e,t,s){"use strict";s("8bbf")},"8bbf":function(e,t,s){}}]);
//# sourceMappingURL=chunk-9a034aec.ef56ef57.js.map