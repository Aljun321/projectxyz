webpackJsonp([53],{1099:function(t,a,e){var n=e(970);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(309)("77da475d",n,!0)},1284:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:e(585)},on:{click:function(a){t.redirect("/")}}})]),t._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"10px"}},[t._v("\n        Verification\n      ")]),t._v(" "),n("div",{staticClass:"signup-holder"},[n("br"),t._v(" "),n("div",[n("div",{staticClass:"login-spacer",class:{"text-danger":!1===t.flag},staticStyle:{"margin-bottom":"25px !important","text-align":"justify"}},[t._v("\n            "+t._s(t.message)+"\n          ")]),t._v(" "),!1===t.verified?n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(a){t.update()}}},[t._v("Continue")]):t._e(),t._v(" "),!0===t.verified&&t.user.userID<=0?n("button",{staticClass:"btn btn-danger btn-block login-spacer",on:{click:function(a){t.redirect("/")}}},[t._v("Back to Login")]):t._e()])])])])])},staticRenderFns:[]}},340:function(t,a,e){e(1099);var n=e(113)(e(801),e(1284),"data-v-a84a1fe2",null);t.exports=n.exports},585:function(t,a,e){t.exports=e.p+"static/img/logo.f2a8427.png"},801:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(19),i=e(33);a.default={mounted:function(){this.username=this.$route.params.username,this.code=this.$route.params.code,this.retrieveAccount(),this.setMessage(),null!==this.account&&this.validate()},data:function(){return{username:this.$route.params.username,code:this.$route.params.code,account:null,flag:null,message:null,user:i.a.user,verified:!1}},methods:{setMessage:function(){this.message="Hi "+this.username+"! Please click the button to verify your email address here in ClassWorx"},retrieveAccount:function(){var t=this,a={condition:[{column:"username",value:this.username,clause:"="},{column:"code",value:this.code,clause:"="}]};this.APIRequest("accounts/retrieve",a).then(function(a){a.data.length>0?t.account=a.data[0]:t.account=null})},update:function(){var t=this;if(this.retrieveAccount(),!0===this.validate()&&null!==this.account){var a={id:this.account.id,status:"VERIFIED"};$("#loading").css({display:"block"}),this.APIRequest("accounts/update_verification",a).then(function(a){$("#loading").css({display:"none"}),!0===a.data?(t.message="Congratulations! You've have successfully verified your account. Kindly click Continue Button to login.",t.flag=!0,t.verified=!0):(t.flag=!1,t.verified=!1,t.message="Sorry! Internal Error. Kindly verify again or contact the system support.")})}else this.flag=!1,this.message="Sorry! Internal Error. Kindly verify again or contact the system support."},validate:function(){return null!==this.username||null!==this.code?(this.flag=!0,!0):(this.flag=!1,!1)},redirect:function(t){n.a.push(t)}}}},970:function(t,a,e){a=t.exports=e(308)(),a.push([t.i,".signup-container[data-v-a84a1fe2]{margin-top:50px}.signup-header[data-v-a84a1fe2]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-a84a1fe2]{height:75px!important;width:75px!important}.signup-header img[data-v-a84a1fe2]:hover{cursor:pointer}.header-title[data-v-a84a1fe2]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.input-holder[data-v-a84a1fe2]{width:90%;margin:0 5%}.form-control[data-v-a84a1fe2]{height:45px!important}.btn[data-v-a84a1fe2]{height:50px!important}.input-group[data-v-a84a1fe2]{margin-top:5px;margin-bottom:5px}.site-title[data-v-a84a1fe2]{margin-top:25px;width:100%;float:left}.site-title img[data-v-a84a1fe2]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-a84a1fe2]{float:left}@media (max-width:991px){.custom-holder[data-v-a84a1fe2]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/projectxyz/src/modules/home/LoginByVerification.vue"],names:[],mappings:"AACA,mCACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,sBAAwB,AACxB,oBAAuB,CACxB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"LoginByVerification.vue",sourcesContent:["\n.signup-container[data-v-a84a1fe2]{\r\n  margin-top: 50px;\n}\n.signup-header[data-v-a84a1fe2]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-a84a1fe2]{\r\n  height: 75px !important;\r\n  width: 75px !important;\n}\n.signup-header img[data-v-a84a1fe2]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-a84a1fe2]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.input-holder[data-v-a84a1fe2]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-a84a1fe2]{\r\n  height: 45px !important;\n}\n.btn[data-v-a84a1fe2]{\r\n  height: 50px !important;\n}\n.input-group[data-v-a84a1fe2]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-a84a1fe2]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-a84a1fe2]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-a84a1fe2]{\r\n  float: left;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-a84a1fe2]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=53.5eef7d54b413a3055d66.js.map