(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed43fafc"],{"0393":function(e,t,a){"use strict";var n=a("f3f3"),i=(a("0481"),a("210b"),a("604c")),s=a("d9bd");t["a"]=i["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var a=this.getValue(e,t),n=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(n)}}})},"166a":function(e,t,a){},"1eff":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-3"},[a("uploadingDialog",{attrs:{uploadingDialog:this.uploadingDialog}}),a("mySnackBar",{attrs:{MySnackBar:this.MySnackBar}}),a("v-container",[a("v-row",{staticClass:"pt-2 mb-2 d-flex justify-space-between align-baseline"},[a("div",[e._v(" Enhanced Test Form")]),a("div",["/"!=this.$router.currentRoute.path?a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"red darken-3"},on:{click:e.formReviewUpload}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-file-pdf")])],1):e._e(),"/"!=this.$router.currentRoute.path?a("v-btn",{staticClass:"mx-2",attrs:{fab:"",medium:"",color:"success"},on:{click:e.formReview}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-presentation-play")])],1):e._e()],1)])],1),a("v-row",{staticClass:"mt-0",attrs:{justify:"center"}},[a("v-expansion-panels",{staticClass:"expansion_panels"},[a("v-expansion-panel",{staticClass:"expansion_panel mb-1"},[a("v-expansion-panel-header",[e._v("Enhanced Test Instructions")]),a("v-expansion-panel-content",[a("v-container",{staticClass:"header"},[e._v(" Any fails in section 1, the tank life cannot be extended and a revalve/exchange will be required. If no fails are recorded in section 1 then section 2 can be completed to extend the life of the vessel, a standard 10 year test must also be completed. ")])],1)],1),a("customer",{attrs:{customer:e.customer}}),a("v-expansion-panel",{staticClass:"expansion_pane mb-1"},[a("v-expansion-panel-header",[e._v("Vessel(s)")]),a("v-expansion-panel-content",[a("v-container",[a("v-row",{attrs:{dense:""}},e._l(e.limitedVessels,(function(t,n){return a("v-col",{key:n,attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{outlined:"",dense:"",label:t.label},model:{value:t.serialNumber,callback:function(a){e.$set(t,"serialNumber",a)},expression:"item.serialNumber"}})],1)})),1)],1)],1)],1),a("v-expansion-panel",{staticClass:"dl_expansion_pane mb-1"},[a("v-expansion-panel-header",{staticClass:"dl_expansion_panel_header",attrs:{dense:""}},[e._v("Section 1 - Check List")]),a("v-expansion-panel-content",{staticClass:"dl_expansion_panel_content"},[a("v-container",[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Criteria ")]),a("th",{staticClass:"text-left"},[e._v(" Pass/Fail ")])])]),a("tbody",e._l(e.section_1,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.criteria))]),a("td",[a("toggle-button",{attrs:{value:t.criteria,labels:{checked:"Pass",unchecked:"Fail"},"switch-color":{checked:"#25EF02",unchecked:"red"},color:"#82C7EB",width:60,height:28},on:{change:function(e){return t.value}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)])})),0)]},proxy:!0}])})],1)],1)],1),a("v-expansion-panel",{staticClass:"dl_expansion_panel  mb-1"},[a("v-expansion-panel-header",{staticClass:"dl_expansion_panel_header",attrs:{dense:""}},[e._v("Section 2 - Test Results and Replacement/s")]),a("v-expansion-panel-content",{staticClass:"dl_expansion_panel_content"},[a("v-container",[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Criteria ")]),a("th",{staticClass:"text-left"},[e._v(" Completed ")])])]),a("tbody",e._l(e.section_2,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.criteria))]),a("td",[a("toggle-button",{attrs:{value:t.criteria,labels:{checked:"Yes",unchecked:"No"},"switch-color":{checked:"#25EF02",unchecked:"red"},color:"#82C7EB",width:60,height:26},on:{change:function(e){return t.value}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)])})),0)]},proxy:!0}])})],1)],1)],1),a("v-expansion-panel",{staticClass:"expansion_panel mb-2"})],1)],1)],1)},i=[],s=(a("fb6a"),a("56d7")),o=a("af0d"),l={name:"enhancedTest",formName:"enhancedTest",destroyed:function(){s["store"].consoleLog("enhancedTest destroyed");var e=this.generateSaveObject(),t=this.customer["ACCOUNT"],a=this.$options.formName;this.saveDocument(t,a,e)},created:function(){s["store"].consoleLog("enhancedTest created"),this.customer=JSON.parse(localStorage.getItem("equalResponseCustomer")),this.salesman=JSON.parse(localStorage.getItem("equalResponseSalesman")),this.engineer=JSON.parse(localStorage.getItem("equalResponseEngineer"));var e=this.customer["ACCOUNT"],t=this.$options.formName;this.retrieveDocument(e,t)},methods:{saveDocument:function(e,t,a){var n=new o["a"](this.$dbName);n.collection(e).doc(t).set(a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},retrieveDocument:function(e,t){var a=this,n=new o["a"](this.$dbName);n.collection(e).doc(t).get().then((function(e){null!=e&&(a.vessels=e.formReviewData.vessels,a.section_1=e.formReviewData.section_1,a.section_2=e.formReviewData.section_2)})).catch((function(e){console.log(e)}))},showSnackBar:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"You need to review the form first...";this.MySnackBar.text=t,this.MySnackBar.showImage="icon",this.MySnackBar.show=!0,setTimeout((function(){e.MySnackBar.show=!1}),1e3)},showUploadingDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Uploading PDF...";this.uploadingDialog.message=e,this.uploadingDialog.showDialog=!0},closeUploadingDialog:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"PDF Uploaded...";this.uploadingDialog.message=t,setTimeout((function(){e.uploadingDialog.message="",e.uploadingDialog.showDialog=!1}),2e3)},generateSaveObject:function(){var e={formReviewName:"enhancedTest",formReviewURL:this.$restServer.enhancedTestURL,formReviewData:{requestedResponse:"pdf",customer:this.customer,salesman:this.salesman,engineer:this.engineer,vessels:this.vessels,section_1:this.section_1,section_2:this.section_2}};return e},generateLoggingObject:function(){return{engineer:this.engineer["ENGINEER_ID"].toLowerCase(),account:this.customer["ACCOUNT"].toLowerCase(),formName:this.formName}},formReviewUpload:function(){var e=this.$restServer.uploadPDFToDropBoxURL,t=s["store"].retrieveFormReviewResponse();if(t){var a=this;t["loggingObject"]=this.generateLoggingObject(),this.showUploadingDialog(),this.$http.post(e,t).then((function(e){s["store"].resetFormReviewResponse(),a.closeUploadingDialog()})).catch((function(e){a.closeUploadingDialog(e.message),localStorage.removeItem("equalResponsePdfReviewObject"),console.log(e)}))}else this.showSnackBar("You need to review the form first...")},formReview:function(e){try{var t=this.generateSaveObject();s["store"].saveFormObject("enhancedTest",t),this.$router.push({name:"FormReview",params:t})}catch(e){alert(e)}}},computed:{limitedVessels:function(){return this.vesselLimit?this.vessels.slice(0,this.vesselLimit):this.vessels},getSection1Labels:function(){var e={checked:"Foo",unchecked:"Bar"};return e}},data:function(){return{options:{penColor:"#c0f"},MySnackBar:{show:!1,text:"Default Text",showImage:"icon"},uploadingDialog:{showDialog:!1,message:""},formName:"enhancedTest",signature:{},customer:{},salesman:{},engineer:{},vesselLimit:1,vessels:[{label:"Vessel 1 Serial Number",serialNumber:""},{label:"Vessel 2 Serial Number",serialNumber:""},{label:"Vessel 3 Serial Number",serialNumber:""}],section_1:[{id:"1",criteria:"Calor Multi - 66/80",value:!1},{id:"2",criteria:"Combo Valve - Calor 84/10, 84/12 or 66/40",value:!1},{id:"3",criteria:"Filler valve not fitted with manual shut off",value:!1},{id:"4",criteria:"Flange or manway studs corroded",value:!1},{id:"5",criteria:"Tank in liquid service",value:!1},{id:"6",criteria:"Bottom liquid offtake",value:!1},{id:"7",criteria:"No Data plate or illegible",value:!1},{id:"8",criteria:"Float gauge has non-stainless steel screws",value:!1}],section_2:[{id:"1",criteria:"Excess flow on service valve",value:!1},{id:"2",criteria:"Vapour valve letby test",value:!1},{id:"3",criteria:"Vapour valve stem leak check",value:!1},{id:"4",criteria:"Regs fitted with UPSO/OPSO (if not upgrade)",value:!1},{id:"5",criteria:"Fill valve seat leak check",value:!1},{id:"6",criteria:"Fill valve back check leak check",value:!1},{id:"7",criteria:"Liquid withdrawel cap seal leak check",value:!1},{id:"8",criteria:"Fill new filler valve washer",value:!1},{id:"12",criteria:"Replace contents gauge if unreadable",value:!1},{id:"13",criteria:'1/4" pressure gauge/plug on vapour value replaced with 1/4" stainless plug ',value:!1},{id:"14",criteria:"Soundness Test",value:!1}]}}},r=l,c=(a("57d0"),a("2877")),u=a("6544"),d=a.n(u),h=a("8336"),p=a("62ad"),v=a("a523"),f=a("cd55"),m=a("49e2"),g=a("c865"),b=a("0393"),x=a("132d"),w=a("0fd9"),y=a("1f4f"),_=a("8654"),k=Object(c["a"])(r,n,i,!1,null,"72261384",null);t["default"]=k.exports;d()(k,{VBtn:h["a"],VCol:p["a"],VContainer:v["a"],VExpansionPanel:f["a"],VExpansionPanelContent:m["a"],VExpansionPanelHeader:g["a"],VExpansionPanels:b["a"],VIcon:x["a"],VRow:w["a"],VSimpleTable:y["a"],VTextField:_["a"]})},"1f4f":function(e,t,a){"use strict";var n=a("f3f3"),i=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),o=a("58df");t["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"210b":function(e,t,a){},"322a":function(e,t,a){},"57d0":function(e,t,a){"use strict";a("322a")},"604c":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("f3f3"),i=(a("a9e3"),a("4de4"),a("caad"),a("2532"),a("a434"),a("159b"),a("fb6a"),a("7db0"),a("c740"),a("166a"),a("a452")),s=a("7560"),o=a("58df"),l=a("d9bd"),r=Object(o["a"])(i["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,a){return e.toggleMethod(e.getValue(t,a))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.internalValue===t};var t=this.internalValue;return Array.isArray(t)?function(e){return t.includes(e)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return null==e.value||""===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,a=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,a)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),a=this.getValue(e,t);this.items.splice(t,1);var n=this.selectedValues.indexOf(a);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==a})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var a=this.getValue(e,t);e.isActive=this.toggleMethod(a)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var a=t.find((function(e){return!e.disabled}));if(a){var n=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,n))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],a=t.slice(),n=a.findIndex((function(t){return t===e}));this.mandatory&&n>-1&&a.length-1<1||null!=this.max&&n<0&&a.length+1>this.max||(n>-1?a.splice(n,1):a.push(e),this.internalValue=a)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}});r.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"8b37":function(e,t,a){},a434:function(e,t,a){"use strict";var n=a("23e7"),i=a("23cb"),s=a("a691"),o=a("50c4"),l=a("7b0b"),r=a("65f0"),c=a("8418"),u=a("1dde"),d=u("splice"),h=Math.max,p=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var a,n,u,d,m,g,b=l(this),x=o(b.length),w=i(e,x),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=x-w):(a=y-2,n=p(h(s(t),0),x-w)),x+a-n>v)throw TypeError(f);for(u=r(b,n),d=0;d<n;d++)m=w+d,m in b&&c(u,d,b[m]);if(u.length=n,a<n){for(d=w;d<x-n;d++)m=d+n,g=d+a,m in b?b[g]=b[m]:delete b[g];for(d=x;d>x-n+a;d--)delete b[d-1]}else if(a>n)for(d=x-n;d>w;d--)m=d+n-1,g=d+a-1,m in b?b[g]=b[m]:delete b[g];for(d=0;d<a;d++)b[d+w]=arguments[d+2];return b.length=x-n+a,u}})},c740:function(e,t,a){"use strict";var n=a("23e7"),i=a("b727").findIndex,s=a("44d2"),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)}}]);
//# sourceMappingURL=chunk-ed43fafc.18ac41d6.js.map