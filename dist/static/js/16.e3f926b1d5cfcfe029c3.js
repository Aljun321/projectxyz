webpackJsonp([16],{1003:function(t,e,a){var n=a(874);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("01d2ebcf",n,!0)},1188:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-6 mx-auto custom-holder"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:a(585)},on:{click:function(e){t.redirect("/")}}})]),t._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[t._v("\n      Request to Reset\n    ")]),t._v(" "),n("div",{staticClass:"input-holder"},[""!=t.errorMessage?n("div",{staticClass:"login-message-holder login-spacer"},[null===t.successMessage&&null!==t.errorMessage?n("span",{staticClass:"text-danger text-center"},[n("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage))]):n("span",{staticClass:"text-primary text-center"},[t._v(t._s(t.successMessage))])]):t._e(),t._v(" "),!0===t.hide?n("div",{staticClass:"login-spacer",staticStyle:{"margin-bottom":"25px !important","text-align":"justify"}},[t._v("\n        We send recovery email to your email address at "),n("b",[t._v(t._s(t.email))]),t._v(".\n        Please give us a moment, it may take few minutes. Please check your email address to continue.\n      ")]):t._e(),t._v(" "),!1===t.hide?n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Type your Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}):t._e(),t._v(" "),n("br"),t._v(" "),!1===t.hide?n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(e){t.request()}}},[t._v("Send Request")]):t._e(),n("button",{staticClass:"btn btn-danger btn-block login-spacer",on:{click:function(e){t.redirect("/")}}},[t._v("Back to Login")]),t._v(" "),n("br"),t._v(" "),n("br")])])])},staticRenderFns:[]}},341:function(t,e,a){a(1003);var n=a(113)(a(802),a(1188),"data-v-0dba3437",null);t.exports=n.exports},585:function(t,e,a){t.exports=a.p+"static/img/logo.f2a8427.png"},646:function(t,e,a){a(707);var n=a(113)(a(668),a(734),"data-v-cffe6768",null);t.exports=n.exports},665:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){},data:function(){return{}},props:{},methods:{}}},666:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){this.defaultValue=!!this.default_value&&this.default_value},data:function(){return{defaultValue:!1}},props:{input_setting:Object,default_value:String,db_name:String,form_data:Object,form_status:String},methods:{valueChanged:function(t){$(t.target).val($(t.target).is(":checked")),this.$emit("change",t,this.db_name)}}}},667:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",components:{"radio-button":a(715),"check-box":a(713),"check-list":a(712),"select-input":a(716),select2:a(717),"textarea-input":a(720),"single-image":a(718),"table-input":a(719)},create:function(){},mounted:function(){this.initSetting()},props:{input_name:String,db_name:String,field_name:String,label:String,label_style:Object,label_colspan:Number,form_data:{type:Object,default:function(){return{}}},input_type:String,input_setting:Object,input_style:Object,placeholder:String,muted_text:String,form_data_updated:Boolean,form_status:String,default_value:[String,Number],error_list:Object},data:function(){return{dbName:null,labelText:null,labelStyle:{},labelColspan:3,inputType:"text",inputSetting:{},inputStyle:{},inputPlaceholder:null,feedbackStatusClass:"",feedbackStatus:0,feedbackMessage:"",value:null}},watch:{form_data_updated:function(t){this.feedbackStatus=0,this.feedbackMessage=""},error_list:function(t){void 0!==this.error_list[this.db_name]&&(this.feedbackStatus=2,this.feedbackMessage=this.error_list[this.db_name][0])},feedbackStatus:function(t){switch(this.feedbackMessage=this.feedbackMessage,1*t){case 1:this.feedbackStatusClass="has-success";break;case 2:this.feedbackStatusClass="has-danger";break;case 3:this.feedbackStatusClass="has-warning";break;default:this.feedbackStatusClass=""}}},methods:{initSetting:function(){this.dbName=this.db_name,this.labelText=this.label?this.label:this.input_name,this.labelStyle=this.label_style,this.labelColspan=void 0!==this.label_colspan?this.label_colspan:4,this.inputType=this.input_type?this.input_type:"text",this.inputStyle=this.input_style,this.inputPlaceholder=this.placeholder?this.placeholder:this.input_name},formDataUpdated:function(){},valueChanged:function(t,e){this.feedbackStatus=0,this.feedbackMessage="",this.$emit("value_changed",t,e)}}}},668:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),i=a.n(n);e.default={name:"",components:{"input-cell":a(714)},beforeCreate:function(){this.$options.components.inputGroupRecursive=a(646)},create:function(){},mounted:function(){this.initializeInput()},data:function(){return{inputList:{},valueFunctionList:{},inputInitialized:!1,fieldNameList:{}}},props:{inputs:Object,form_data:Object,form_data_updated:Boolean,form_status:String,error_list:Object},watch:{form_data_updated:function(t){for(var e in this.inputList){var a=this.inputList[e].field_name,n=this.inputList[e].field_name;if(void 0!==this.valueFunctionList[a]){var i=this.valueFunctionList[n](this.form_data);for(var s in i)this.formDataChanged(this.fieldNameList[s],i[s])}else this.formDataChanged(a,this.form_data[n])}}},methods:{formGroupDataChanged:function(t,e){this.$emit("form_data_changed",t,e)},valueChanged:function(t,e){var a=void 0!==e?e:$(t.target).attr("name");if(void 0!==this.valueFunctionList[a]){var n=this.valueFunctionList[a](this.form_data);for(var i in n)this.formDataChanged(this.fieldNameList[i],n[i])}else this.formDataChanged(this.fieldNameList[a],$(t.target).val())},formDataChanged:function(t,e){this.$emit("form_data_changed",t,this.dataFormat(t,e))},initializeInput:function(){this.inputList={};for(var t in this.inputs){i.a.set(this.inputList,t,this.inputs[t]);var e=t.split("."),a=t;if(e.length>1)for(var n=e[0],s=1;s<e.length;s++)n+="*"===e[s]?"[]":"["+e[s]+"]";if(i.a.set(this.inputList[t],"field_name",t),void 0===this.inputList[t].db_name&&i.a.set(this.inputList[t],"db_name",a),void 0===this.inputList[t].input_name&&i.a.set(this.inputList[t],"input_name",this.StringUnderscoreToPhrase(t)),void 0===this.inputList[t].input_type&&i.a.set(this.inputList[t],"input_type","text"),void 0===this.inputList[t].col&&i.a.set(this.inputList[t],"col","12"),i.a.set(this.inputList[t],"feedback_status",0),i.a.set(this.inputList[t],"feedback_message",""),void 0===this.inputList[t].default_value&&i.a.set(this.inputList[t],"default_value",null),void 0===this.inputList[t].data_format){var o=void 0;this.inputList[t].input_type,o="text",i.a.set(this.inputList[t],"data_format",o)}this.formDataChanged(this.inputList[t].field_name,this.inputList[t].default_value),void 0!==this.inputList[t].value_function&&(this.valueFunctionList[t]=this.inputList[t].value_function),i.a.set(this.fieldNameList,this.inputList[t].db_name,this.inputList[t].field_name)}this.inputInitialized=!0},dataFormat:function(t,e){if(void 0===t)return null;var a=e||this.inputList[t].default_value;switch(this.inputList[t].data_format){case"decimal":return(1*a).toFixed(2);case"number":return 1*a;default:return a}}}}},669:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){},data:function(){return{}},props:{},methods:{}}},670:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){this.initInputSetting()},data:function(){return{options:[],option_lookup:{},defaultValue:null}},props:{input_setting:Object,default_value:[String,Number],db_name:String,form_data:Object,form_status:String},watch:{form_status:function(t){"create"!==t&&"editing"!==t&&"view"!==t||void 0!==this.input_setting.option_function&&this.input_setting.option_function(this)},options:function(t){}},methods:{initInputSetting:function(){void 0!==this.input_setting.options&&this.setOption(this.input_setting.options),this.defaultValue=this.default_value?this.default_value:null},setOption:function(t){this.options=t,this.option_lookup={};for(var e in this.options)this.option_lookup[this.options[e].value]=this.options[e].label},valueChanged:function(t){this.$emit("value_changed",t)}}}},671:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){this.initInput()},data:function(){return{value:1,options:{results:[]}}},props:{input_setting:Object,default_value:String,db_name:String,form_data:Object,form_status:String,placeholder:String},methods:{initInput:function(){var t=this,e=this;this.placeholder?this.placeholder:$(this.$refs.select).select2({data:this.value,minimumInputLength:3,placeholder:"Select",query:function(e){var a={condition:[{column:"first_name",clause:"like",value:"%"+e.term+"%"}]};void 0!==e.term&&(t.options.results=[]),t.APIRequest("account_information/retrieve",a,function(a){if(a.data)for(var n=0;n<a.data.length;n++)t.options.results.push({id:a.data[n].id,text:a.data[n].first_name+" "+a.data[n].middle_name+" "+a.data[n].last_name});e.callback(t.options)})}}).on("change",function(t){e.value=this.value,e.$emit("change",t)})}}}},672:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(27);e.default={name:"",create:function(){},mounted:function(){this.initInputSetting()},data:function(){return{imgStyle:{},defaultImageSrc:a(711),imageSrc:null}},props:{input_setting:Object,default_value:String,db_name:String,field_name:String,form_data:Object,form_status:String,form_data_updated:Boolean},watch:{form_data_updated:function(t){var e=this.db_name.replace("_file","");this.form_data[e]?this.imageSrc=n.default.IMAGE_URL+"department_logo/"+this.form_data[e]:this.imageSrc=this.defaultImageSrc}},methods:{initInputSetting:function(){void 0!==this.input_setting?(this.imgStyle=void 0!==this.input_setting.image_style?this.input_setting.image_style:{width:"100%"},this.defaultValue=this.default_value?this.default_value:null):this.imgStyle={width:"100%"},this.imageSrc=this.defaultImageSrc},triggerFileInput:function(){if("view"===this.form_status)return!1;$(this.$refs.fileInput).trigger("click")},inputFileChanged:function(t){var e=this,a=t.target;if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(t){e.imageSrc=t.target.result},n.readAsDataURL(a.files[0])}},valueChanged:function(t){this.$emit("value_changed",t)}}}},673:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),i=a.n(n);e.default={name:"",create:function(){},mounted:function(){this.initConfig(),this.initColumnSetting()},data:function(){return{columnSetting:[[],[]],linearColumnSetting:[],tableEntries:[],currentSort:null,action:{add_entry:!0,remove_entry:!0},columnCount:0,deletedForeignTable:[]}},props:{form_data_updated:Boolean,input_setting:Object,default_value:String,db_name:String,form_data:Object,form_status:String,placeholder:String},watch:{form_data_updated:function(t){this.tableEntries=this.form_data[this.db_name]?this.form_data[this.db_name]:[],this.deletedForeignTable=[]}},methods:{addEntry:function(){for(var t={id:0},e=0;e<this.linearColumnSetting.length;e++)t[this.linearColumnSetting[e].db_name]=null;this.tableEntries.push(t)},initColumnSetting:function(){var t=this.input_setting.column_setting;for(var e in t){this.columnCount++;var a=t[e];if(i.a.set(a,"db_name",void 0!==a.db_name?a.db_name:e),this.initColumn(a),this.columnSetting[0].push(a),a.sub_columns){var n=0;for(var s in a.sub_columns){n++;var o=a.sub_columns[s];i.a.set(o,"db_name",s),this.initColumn(o),this.columnSetting[1].push(o),this.linearColumnSetting.push(o)}i.a.set(a,"sub_column_count",n)}else this.linearColumnSetting.push(a)}},initConfig:function(){if(void 0!==this.input_setting.action)for(var t=0;t<this.input_setting.action.length;t++)this.action[this.input_setting.action[t]]=!0},initColumn:function(t){void 0===t.name&&i.a.set(t,"name",this.StringUnderscoreToPhrase(t.db_name)),void 0===t.type&&i.a.set(t,"type","text"),void 0===t.sort&&i.a.set(t,"sort",0),void 0===t.value_function&&i.a.set(t,"value_function",function(t,e){var a=e.split("."),n=void 0;if(a.length>1){n=t;for(var i=0;i<a.length&&void 0!==n[a[i]];i++)n=n[a[i]]}else n=t[e];return n}),void 0===t.sub_columns&&i.a.set(t,"sub_columns",null)},removeEntry:function(t,e){console.log(this.tableEntries.splice(t,1)),e&&this.deletedForeignTable.push(e)}}}},674:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",create:function(){},mounted:function(){},data:function(){return{}},props:{},methods:{}}},680:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"TableInput.vue",sourceRoot:""}])},684:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CheckList.vue",sourceRoot:""}])},685:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"InputCell.vue",sourceRoot:""}])},688:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Select.vue",sourceRoot:""}])},689:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"RadioButton.vue",sourceRoot:""}])},690:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Textarea.vue",sourceRoot:""}])},691:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SingleImage.vue",sourceRoot:""}])},692:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,".hidden[data-v-cffe6768]{display:none}","",{version:3,sources:["C:/xampp/htdocs/projectxyz/src/components/input_field/InputGroup.vue"],names:[],mappings:"AACA,yBACE,YAAa,CACd",file:"InputGroup.vue",sourcesContent:["\n.hidden[data-v-cffe6768]{\r\n  display: none\n}\r\n"],sourceRoot:""}])},693:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,".hide[data-v-e49cd162]{display:none}","",{version:3,sources:["C:/xampp/htdocs/projectxyz/src/components/input_field/Select2.vue"],names:[],mappings:"AACA,uBACE,YAAa,CACd",file:"Select2.vue",sourcesContent:["\n.hide[data-v-e49cd162]{\n  display: none\n}\n"],sourceRoot:""}])},694:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Checkbox.vue",sourceRoot:""}])},695:function(t,e,a){var n=a(680);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("7a01720d",n,!0)},699:function(t,e,a){var n=a(684);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("f383e1ec",n,!0)},700:function(t,e,a){var n=a(685);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("6207d47e",n,!0)},703:function(t,e,a){var n=a(688);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("52c47e8b",n,!0)},704:function(t,e,a){var n=a(689);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("7b828c87",n,!0)},705:function(t,e,a){var n=a(690);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("4b9efafa",n,!0)},706:function(t,e,a){var n=a(691);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("4ba58e65",n,!0)},707:function(t,e,a){var n=a(692);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("209466a8",n,!0)},708:function(t,e,a){var n=a(693);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("ce01fd84",n,!0)},709:function(t,e,a){var n=a(694);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(309)("563edcfd",n,!0)},711:function(t,e){t.exports="data:image/png;base64,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"},712:function(t,e,a){a(699);var n=a(113)(a(665),a(726),"data-v-55a72e1f",null);t.exports=n.exports},713:function(t,e,a){a(709);var n=a(113)(a(666),a(736),"data-v-ef25e00c",null);t.exports=n.exports},714:function(t,e,a){a(700);var n=a(113)(a(667),a(727),"data-v-5d6295a5",null);t.exports=n.exports},715:function(t,e,a){a(704);var n=a(113)(a(669),a(731),"data-v-712abfa6",null);t.exports=n.exports},716:function(t,e,a){a(703);var n=a(113)(a(670),a(730),"data-v-67aa2073",null);t.exports=n.exports},717:function(t,e,a){a(708);var n=a(113)(a(671),a(735),"data-v-e49cd162",null);t.exports=n.exports},718:function(t,e,a){a(706);var n=a(113)(a(672),a(733),"data-v-74e47f8c",null);t.exports=n.exports},719:function(t,e,a){a(695);var n=a(113)(a(673),a(722),"data-v-14161eda",null);t.exports=n.exports},720:function(t,e,a){a(705);var n=a(113)(a(674),a(732),"data-v-73cd17f1",null);t.exports=n.exports},722:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[a("thead",[a("tr",[t._l(t.columnSetting[0],function(e,n){return a("th",{attrs:{rowspan:e.sub_columns?1:2,colspan:e.sub_columns?e.sub_column_count:1},on:{click:function(e){t.changeSort(0,n)}}},[t._v("\n          "+t._s(e.name)+"\n          ")])}),t._v(" "),t.action.remove_entry?a("th"):t._e()],2),t._v(" "),a("tr",t._l(t.columnSetting[1],function(e,n){return a("th",{attrs:{rowspan:e.sub_columns?1:2,colspan:e.sub_columns?e.sub_column_count:1},on:{click:function(e){t.changeSort(1,n)}}},[t._v("\n          "+t._s(e.name)+"\n          ")])}))]),t._v(" "),a("tbody",t._l(t.tableEntries,function(e,n){return a("tr",{on:{click:function(a){t.$emit("row_clicked",n,e.id)}}},[a("input",{attrs:{type:"hidden",name:t.db_name+"["+n+"][id]"},domProps:{value:e.id}}),t._v(" "),t._l(t.linearColumnSetting,function(i){return a("td",["select"===i.input_type?a("select",{staticClass:"form-control",attrs:{name:t.db_name+"["+n+"]["+i.db_name+"]"},domProps:{value:e[i.db_name]||i.default_value}},t._l(i.select_option,function(n){return a("option",{domProps:{value:n.value,selected:(e[i.db_name]||i.default_value)===n.value&&"selected"}},[t._v(t._s(n.label))])})):a("input",{directives:[{name:"model",rawName:"v-model",value:e[i.db_name],expression:"tableEntry[columnSetting['db_name']]"}],staticClass:"form-control",attrs:{name:t.db_name+"["+n+"]["+i.db_name+"]"},domProps:{value:e[i.db_name]},on:{input:function(a){a.target.composing||t.$set(e,i.db_name,a.target.value)}}})])}),t._v(" "),t.action.remove_entry?a("td",[a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.removeEntry(n,e.id)}}},[a("i",{staticClass:"fa fa-remove",attrs:{"aria-hidden":"true"}})])]):t._e()],2)})),t._v(" "),a("tfoot",[t.action.add_entry?a("tr",[a("td",{attrs:{colspan:t.columnCount+(t.action.add_entry?1:0)}},[a("button",{staticClass:"btn btn-sm btn-primary pull-right",attrs:{type:"button"},on:{click:t.addEntry}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" Add")])])]):t._e()])]),t._v(" "),t._l(t.deletedForeignTable,function(e,n){return a("input",{attrs:{name:"deleted_foreign_table["+t.db_name+"]["+n+"]"},domProps:{value:e}})})],2)},staticRenderFns:[]}},726:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:""}}),t._v("\n      Option one is this and that—be sure to include why it's great\n    ")])])])}]}},727:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row",class:[t.feedbackStatus?"has-feedback":"",t.feedbackStatusClass]},["hidden"===t.inputType?a("input",{attrs:{type:"text",name:t.dbName},domProps:{value:t.form_data[t.db_name]?t.form_data[t.db_name]:t.default_value},on:{change:t.valueChanged}}):[t.labelColspan?a("label",{staticClass:"col-form-label",class:"col-sm-"+t.labelColspan},[t._v(t._s(t.labelText)+" :")]):t._e(),t._v(" "),a("div",{class:"col-sm-"+(12-(12!==t.labelColspan?t.labelColspan:0))},["radio"===t.inputType?a("radio-button",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,default_value:t.default_value}}):"checklist"===t.inputType?a("check-list",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name}}):"select"===t.inputType?a("select-input",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,form_data:t.form_data,form_status:t.form_status,default_value:t.default_value},on:{change:t.valueChanged}}):"single_image"===t.inputType?a("single-image",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,form_data:t.form_data,form_status:t.form_status,form_data_updated:t.form_data_updated},on:{change:t.valueChanged}}):"textarea"===t.inputType?a("textarea-input",{attrs:{input_setting:t.input_setting}}):"checkbox"===t.inputType?a("check-box",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,form_data:t.form_data,form_status:t.form_status,default_value:t.default_value},on:{change:t.valueChanged}}):"select2"===t.inputType?a("select2",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,form_data:t.form_data,form_status:t.form_status,default_value:t.default_value,placeholder:t.placeholder},on:{change:t.valueChanged}}):"table-input"===t.inputType?a("table-input",{attrs:{input_setting:t.input_setting,db_name:t.dbName,field_name:t.field_name,form_data:t.form_data,form_status:t.form_status,default_value:t.default_value,placeholder:t.placeholder,form_data_updated:t.form_data_updated},on:{change:t.valueChanged}}):"static"===t.inputType?[t._v("\n        "+t._s(t.form_data[t.db_name])+"\n      ")]:["view"!==t.form_status?a("input",{staticClass:"form-control",attrs:{name:t.db_name,placeholder:t.inputPlaceholder,type:t.inputType},domProps:{value:t.form_data[t.db_name]?t.form_data[t.db_name]:t.default_value},on:{change:t.valueChanged}}):a("span",{staticClass:"form-control"},[t._v(t._s(t.form_data[t.db_name])+" ")])],t._v(" "),t.feedbackMessage?a("div",{staticClass:"form-control-feedback"},[t._v(t._s(t.feedbackMessage))]):t._e(),t._v(" "),t.muted_text?a("small",{staticClass:"form-text text-muted"},[t._v(t._s(t.muted_text))]):t._e()],2)]],2)},staticRenderFns:[]}},730:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["view"!==t.form_status?a("select",{staticClass:"form-control",attrs:{name:t.db_name},domProps:{value:t.form_data[t.db_name]?t.form_data[t.db_name]:t.defaultValue},on:{change:function(e){t.$emit("change",e)}}},t._l(t.options,function(e){return a("option",{domProps:{value:e.value,selected:e.value===t.form_data[t.db_name]&&"selected"}},[t._v("\n      "+t._s(e.label)+"\n    ")])})):a("span",{staticClass:"form-control"},[t._v(t._s(this.option_lookup[t.form_data[t.db_name]]))])])},staticRenderFns:[]}},731:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",checked:""}}),t._v("\n      Option one is this and that—be sure to include why it's great\n    ")])])])}]}},732:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("textarea")])}]}},733:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{style:t.imgStyle,attrs:{src:t.imageSrc},on:{click:t.triggerFileInput}}),t._v(" "),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",name:t.db_name},on:{change:t.inputFileChanged}}),t._v(" "),"view"!==t.form_status?a("small",[t._v("Click the image to select an image file to upload")]):t._e()])},staticRenderFns:[]}},734:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[t._l(t.inputList,function(e){return["group"===e.input_type?a("div",{class:"col-sm-"+e.col},[a("input-group-recursive",{attrs:{inputs:e.inputs,form_data:t.form_data,form_data_updated:t.form_data_updated,form_status:t.form_status,error_list:t.error_list},on:{form_data_changed:t.formGroupDataChanged}})],1):a("div",{class:["hidden"===e.input_type?"hidden":"","col-sm-"+e.col]},[a("input-cell",{attrs:{input_name:e.input_name,field_name:e.field_name,db_name:e.db_name,input_setting:e.input_setting,input_type:e.input_type,input_style:e.input_style,colspan:e.colspan,label_colspan:e.label_colspan,placeholder:e.placeholder,default_value:e.default_value,feedback_message:e.feedback_message,feedback_status:e.feedback_status,muted_text:e.muted_text,form_data:t.form_data,form_data_updated:t.form_data_updated,form_status:t.form_status,error_list:t.error_list},on:{value_changed:t.valueChanged}})],1)]})],2)])},staticRenderFns:[]}},735:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:"view"===t.form_status?"hide":""},[a("select",{ref:"select",staticStyle:{width:"100%"},attrs:{name:t.db_name}})]),t._v(" "),"view"===t.form_status?a("span",{staticClass:"form-control"},[t._v("hey")]):t._e()])},staticRenderFns:[]}},736:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{attrs:{type:"hidden",name:t.db_name},domProps:{value:t.form_data[t.db_name]?t.form_data[t.db_name]:t.defaultValue}}),t._v(" "),a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",readonly:"view"===t.form_status},domProps:{value:t.form_data[t.db_name]?t.form_data[t.db_name]:t.defaultValue},on:{change:t.valueChanged}})])])])},staticRenderFns:[]}},802:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(19);e.default={name:"",components:{"input-group":a(646)},mounted:function(){},data:function(){return{email:null,flag:!1,errorMessage:null,successMessage:null,hide:!1}},methods:{request:function(){var t=this;this.validate();var e={email:this.email};!0===this.flag&&($("#loading").css({display:"block"}),this.APIRequest("accounts/request_reset",e).then(function(e){$("#loading").css({display:"none"}),t.hide=!0}))},validate:function(){null===this.email||""===this.email?(this.flag=!1,this.errorMessage="Please enter your Email Address"):this.flag=!0},redirect:function(t){n.a.push(t)}}}},874:function(t,e,a){e=t.exports=a(308)(),e.push([t.i,".custom-holder[data-v-0dba3437]{margin-top:100px}.signup-header[data-v-0dba3437]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-0dba3437]{width:70px;height:70px}.signup-header img[data-v-0dba3437]:hover{cursor:pointer}.header-title[data-v-0dba3437]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.input-holder[data-v-0dba3437]{width:90%;margin:0 5%}.btn[data-v-0dba3437]{height:50px!important}.form-control[data-v-0dba3437]{height:45px!important}.site-title[data-v-0dba3437]{margin-top:25px;width:100%;float:left}.site-title img[data-v-0dba3437]{width:50px;float:left;margin-right:10px;margin-left:5%}.site-title .app-name[data-v-0dba3437]{float:left}@media (max-width:991px){.custom-holder[data-v-0dba3437]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/projectxyz/src/modules/home/RequestResetPassword.vue"],names:[],mappings:"AACA,gCACE,gBAAkB,CACnB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,WAAY,AACZ,WAAa,CACd,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,sBACE,qBAAwB,CACzB,AACD,+BACE,qBAAwB,CACzB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,uCACE,UAAY,CACb,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"RequestResetPassword.vue",sourcesContent:["\n.custom-holder[data-v-0dba3437]{\r\n  margin-top: 100px;\n}\n.signup-header[data-v-0dba3437]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-0dba3437]{\r\n  width: 70px;\r\n  height: 70px;\n}\n.signup-header img[data-v-0dba3437]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-0dba3437]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.input-holder[data-v-0dba3437]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.btn[data-v-0dba3437]{\r\n  height: 50px !important;\n}\n.form-control[data-v-0dba3437]{\r\n  height: 45px !important;\n}\n.site-title[data-v-0dba3437]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-0dba3437]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\r\n  margin-left: 5%;\n}\n.site-title .app-name[data-v-0dba3437]{\r\n  float: left;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-0dba3437]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=16.e3f926b1d5cfcfe029c3.js.map