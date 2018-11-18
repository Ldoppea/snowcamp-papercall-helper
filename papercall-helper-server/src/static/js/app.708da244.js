(function(n){function t(t){for(var e,r,o=t[0],u=t[1],l=t[2],m=0,f=[];m<o.length;m++)r=o[m],i[r]&&f.push(i[r][0]),i[r]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var n,t=0;t<a.length;t++){for(var s=a[t],e=!0,o=1;o<s.length;o++){var u=s[o];0!==i[u]&&(e=!1)}e&&(a.splice(t--,1),n=r(r.s=s[0]))}return n}var e={},i={app:0},a=[];function r(t){if(e[t])return e[t].exports;var s=e[t]={i:t,l:!1,exports:{}};return n[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=n,r.c=e,r.d=function(n,t,s){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:s})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(s,e,function(t){return n[t]}.bind(null,e));return s},r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/papercall/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),s()})({0:function(n,t,s){n.exports=s("56d7")},"02b2":function(n,t,s){"use strict";var e=s("370e"),i=s.n(e);i.a},"0b5e":function(n,t,s){"use strict";var e=s("df74"),i=s.n(e);i.a},"1c8d":function(n,t,s){"use strict";var e=s("d55e"),i=s.n(e);i.a},2856:function(n,t,s){},"2a4a":function(n,t,s){"use strict";var e=s("a72b"),i=s.n(e);i.a},"2db0":function(n,t,s){"use strict";var e=s("df21"),i=s.n(e);i.a},"370e":function(n,t,s){},4957:function(n,t,s){"use strict";var e=s("c969"),i=s.n(e);i.a},"4c65":function(n,t,s){"use strict";var e=s("f2fc"),i=s.n(e);i.a},"56d7":function(n,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var e=s("2b0e"),i=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{attrs:{id:"app"}},[s("navigator")],1)},a=[],r=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"navigator"},[s("input",{directives:[{name:"model",rawName:"v-model",value:n.apiToken,expression:"apiToken"}],attrs:{placeholder:"Papercall API Token"},domProps:{value:n.apiToken},on:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.submit(t):null},input:function(t){t.target.composing||(n.apiToken=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:n.emailAddress,expression:"emailAddress"}],attrs:{placeholder:"Email address"},domProps:{value:n.emailAddress},on:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.submit(t):null},input:function(t){t.target.composing||(n.emailAddress=t.target.value)}}}),s("button",{on:{click:n.submit}},[n._v("Load data")]),s("br"),s("label",{attrs:{for:"filterEmail"}},[n._v("Filter rated by you")]),s("input",{directives:[{name:"model",rawName:"v-model",value:n.filterByEmail,expression:"filterByEmail"}],attrs:{type:"checkbox",id:"filterEmail"},domProps:{checked:Array.isArray(n.filterByEmail)?n._i(n.filterByEmail,null)>-1:n.filterByEmail},on:{change:function(t){var s=n.filterByEmail,e=t.target,i=!!e.checked;if(Array.isArray(s)){var a=null,r=n._i(s,a);e.checked?r<0&&(n.filterByEmail=s.concat([a])):r>-1&&(n.filterByEmail=s.slice(0,r).concat(s.slice(r+1)))}else n.filterByEmail=i}}}),n.isLoaded?s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[n._v("Authors")]),n._v(" |\n    "),s("router-link",{attrs:{to:"/languages"}},[n._v("Languages")]),n._v(" |\n    "),s("router-link",{attrs:{to:"/tags"}},[n._v("Tags")]),n._v(" |\n    "),s("router-link",{attrs:{to:"/travelers"}},[n._v("Travelers")])],1):n._e(),n.isLoaded?s("router-view"):n._e(),n.isLoading?s("div",{staticClass:"loading-spinner"},[s("atom-spinner",{attrs:{"animation-duration":1e3,size:40,color:"#FF0000"}})],1):n._e()],1)},o=[],u="ACTION_INIT_SUBMISSIONS",l="ACTION_INIT_EVENT",c="ACTION_INIT_PAPERCALL_TOKEN",m="INIT_SUBMISSIONS",f="INIT_EVENT",h="INIT_PAPERCALL_TOKEN",g="INIT_PAPERCALL_EMAIL",b="IS_LOADING_TRUE",p="IS_LOADING_FALSE",d="SET_EMAIL_FILTER",v="SET_STATUS_FILTER",_=s("4583"),k={name:"navigator",components:{AtomSpinner:_["a"]},data:function(){return{apiToken:"",emailAddress:""}},mounted:function(){this.apiToken=localStorage.getItem("PAPERCALL_TOKEN"),this.emailAddress=localStorage.getItem("PAPERCALL_EMAIL")},computed:{isLoading:function(){return this.$store.getters.isLoading},isLoaded:function(){return 0!==this.$store.getters.submissions.length&&void 0!==this.$store.getters.event},filterByEmail:{get:function(){return this.$store.getters.filterByEmail},set:function(n){this.$store.commit(d,n)}}},methods:{submit:function(){localStorage.setItem("PAPERCALL_TOKEN",this.apiToken),localStorage.setItem("PAPERCALL_EMAIL",this.emailAddress),this.$store.dispatch(c,{papercallToken:this.apiToken,papercallEmail:this.emailAddress})}}},S=k,T=(s("1c8d"),s("2877")),y=Object(T["a"])(S,r,o,!1,null,null,null);y.options.__file="Navigator.vue";var E=y.exports,L={components:{Navigator:E}},O=L,w=(s("5c0b"),Object(T["a"])(O,i,a,!1,null,null,null));w.options.__file="App.vue";var A=w.exports,N=s("8c4f"),B=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"authors-view"},[s("h1",[n._v("Authors")]),s("div",n._l(n.statusList,function(t){return s("div",{key:t.name},[s("input",{attrs:{type:"checkbox",name:"checkbox-status-"+t.name},domProps:{checked:t.value},on:{click:function(s){n.clickCb(t)}}}),s("label",{attrs:{for:"checkbox-status-"+t.name}},[n._v(n._s(t.name))])])})),n._l(n.submissionsByAuthor,function(n){return s("author",{key:n.speakerName,attrs:{authorData:n,aknowledgeFeedback:""}})})],2)},C=[],F=(s("7f7f"),s("c93e")),D=(s("a481"),s("28a5"),s("ac6a"),s("456d"),s("f559"),function(n,t){return n.reduce(function(n,s){return(n[s[t]]=n[s[t]]||[]).push(s),n},{})}),j=D,I=function(n){return"French"===n||"English"===n},x=function(n){var t=n.tags.filter(I);return 1===t.length&&"French"===t[0]},P=function(n){var t=n.tags.filter(I);return 1===t.length&&"English"===t[0]},$=function(n){var t=n.tags.filter(I);return 2===t.length},W=function(n){var t=n.tags.filter(I);return 0===t.length},R=function(n){return n.talk.talk_format.startsWith("Workshop")},M=function(n){return n.talk.talk_format.startsWith("Talk")},U=function(n){var t=j(n,"speakerName"),s=Object.keys(t).map(function(n){var s=t[n];return{speakerName:n,hasFeedback:s.some(function(n){return void 0!==n.feedbacks&&n.feedbacks.length>0}),submissions:s}});return s},G=function(n){return{id:n.id,speakerName:n.profile.name,speakerLocation:n.profile.location,talkName:n.talk.title,tags:n.tags,languages:n.tags.filter(I),feedbacks:n.feedback.map(function(n){return{user:n.user.name,body:n.body,creationDate:n.created_at}}),ratings:n.ratings,isConference:n.talk.talk_format.startsWith("Talk"),isUniversity:n.talk.talk_format.startsWith("Workshop"),status:n.state}},K=function(n,t){return n.flatMap(function(n){return n.ratings}).flatMap(function(n){return n.comments.split("\r\n")}).filter(function(n){return n.startsWith("".concat(t,": "))}).map(function(n){return n.replace("".concat(t,": "),"")})},V=function(n,t){return n.flatMap(function(n){return n.ratings}).flatMap(function(n){return n.comments.split("\r\n")}).some(function(n){return n.startsWith(t)})},z={languageTagFilter:I,isFrenchSubmission:x,isEnglishSubmission:P,isBothLanguagesSubmission:$,isNoLanguageSubmission:W,groupByAuthors:U,submissionToSubmissionLight:G,isWorkshopSubmission:R,isTalkSubmission:M,getSubmissionsTagContent:K,getSubmissionsTagPresence:V},J=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:n.filteredSubmissions.length>0,expression:"filteredSubmissions.length > 0"}],staticClass:"author"},[s("div",{staticClass:"author-header"},[s("span",[s("b",[n._v(n._s(n.authorData.speakerName))]),n._v(" ("+n._s(n.authorData.submissions.length)+" submissions)")]),n.aknowledgeFeedback&&n.authorData.hasFeedback?s("span",{staticClass:"feedback-indicator"},[n._v("received Feedback")]):n._e()]),n._l(n.filteredSubmissions,function(t){return s("submission",{key:t.id,attrs:{submissionData:t,showTags:n.showTags,showLanguages:n.showLanguages}})}),n.authorData.media&&n.authorData.media.length>0?s("div",{staticClass:"media-container"},n._l(n.authorData.media,function(n){return s("media",{key:n.id,attrs:{url:n}})})):n._e(),(!n.authorData.media||n.authorData.media&&0==n.authorData.media.length)&&n.authorData.noPreviousTalk?s("div",{staticClass:"no-media-container"},[n._v("\n    No talk found on web\n  ")]):n._e(),n.authorData.warnings&&n.authorData.warnings.length>0?s("div",{staticClass:"warning-container"},n._l(n.authorData.warnings,function(t){return s("div",{key:t.id},[n._v("/!\\ "+n._s(t.value))])})):n._e(),n.showFinancial?s("div",{staticClass:"financial-container"},[n.authorData.financialOk.includes("Yes")?s("div",{staticClass:"financial-ok"},[n._v("Is financial OK")]):n._e(),n.authorData.financialOk.includes("No")?s("div",{staticClass:"financial-nok"},[n._v("Is not financial OK")]):n._e(),n.authorData.financialOk.includes("Maybe")?s("div",{staticClass:"financial-maybe"},[n._v("Should be financial OK")]):n._e()]):n._e()],2)},Y=[],q=(s("6762"),s("2fdb"),function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"submission",class:[n.submissionData.isConference?"conference":"university",n.filterByEmail&&n.hasBeenRated?"rated-submission":"","status-"+n.submissionData.status]},[s("div",{staticClass:"rating"},[s("span",{staticClass:"rating-label"},[n._v("Your rating ")]),s("div",{staticClass:"rating-stars"},[n.hasBeenRated?s("star-rating",{attrs:{rating:n.userRating,increment:.01,"fixed-points":2,"star-size":20,"show-rating":!1,"read-only":""}}):n._e()],1)]),s("a",{staticClass:"submission-link",attrs:{href:"https://www.papercall.io/cfps/1343/submissions/"+n.submissionData.id}},[n._v(n._s(n.submissionData.talkName))]),s("span",{staticClass:"submission-format"},[n._v(" : "+n._s(n.submissionData.isConference?"Talk":"Workshop"))]),s("span",{staticClass:"submission-status"},[n._v(" - "+n._s(n.submissionData.status))]),n.showLanguages&&void 0!==n.submissionData.languages&&n.submissionData.languages.length>0?s("div",{staticClass:"languages"},n._l(n.submissionData.languages,function(t){return s("span",{key:t,class:"language-"+t},[n._v("\n      "+n._s(t)+"\n    ")])})):n.showLanguages?s("div",{staticClass:"languages"},[s("span",{staticClass:"language-undefined"},[n._v("NO LANGUAGE SET")])]):n._e(),n.showTags?s("div",{staticClass:"tags"},n._l(n.submissionData.tags,function(t){return s("span",{key:t,class:"tag tag-"+t},[n._v("\n      "+n._s(t)+"\n    ")])})):n._e()])}),H=[],Q=(s("7514"),s("c1da")),X=s.n(Q),Z={name:"submission",props:{submissionData:Object,showTags:Boolean,showLanguages:Boolean},components:{StarRating:X.a},data:function(){return{}},computed:{filterByEmail:function(){return this.$store.getters.filterByEmail},hasBeenRated:function(){var n=this;return this.submissionData.ratings.some(function(t){return t.user.email===n.$store.getters.papercallEmail})},userRating:function(){var n=this,t=0,s=this.submissionData.ratings.find(function(t){return t.user.email===n.$store.getters.papercallEmail});return s&&(t=parseFloat(s.value)),t/20}},mounted:function(){},methods:{}},nn=Z,tn=(s("0b5e"),Object(T["a"])(nn,q,H,!1,null,null,null));tn.options.__file="Submission.vue";var sn=tn.exports,en=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"media"},[s("iframe",{attrs:{width:"200",height:"112",src:n.embedUrl,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])},an=[],rn={name:"media",props:{url:String},data:function(){return{}},computed:{embedUrl:function(){return this.url.replace("https://www.youtube.com/","https://www.youtube.com/embed/").replace("https://youtu.be/","https://www.youtube.com/embed/").replace("https://vimeo.com/","https://player.vimeo.com/video/")}},mounted:function(){},methods:{}},on=rn,un=(s("4c65"),Object(T["a"])(on,en,an,!1,null,null,null));un.options.__file="Media.vue";var ln=un.exports,cn={name:"author",props:{authorData:Object,aknowledgeFeedback:Boolean,showTags:Boolean,showLanguages:Boolean,showFinancial:Boolean},components:{Submission:sn,Media:ln},data:function(){return{}},computed:{filters:function(){return this.$store.getters.filterStatus.filter(function(n){return!0===n.value}).map(function(n){return n.name})},filteredSubmissions:function(){var n=this;return this.authorData.submissions.filter(function(t){return n.filters.includes(t.status)})}},mounted:function(){},methods:{}},mn=cn,fn=(s("02b2"),Object(T["a"])(mn,J,Y,!1,null,null,null));fn.options.__file="Author.vue";var hn=fn.exports,gn={name:"authors",components:{Author:hn},data:function(){return{}},computed:{submissionsByAuthor:function(){var n=this.$store.getters.submissions,t=n.map(z.submissionToSubmissionLight),s=z.groupByAuthors(t).map(function(n){return Object(F["a"])({},n,{media:z.getSubmissionsTagContent(n.submissions,"PreviousTalk"),noPreviousTalk:z.getSubmissionsTagPresence(n.submissions,"NoPreviousTalk"),warnings:z.getSubmissionsTagContent(n.submissions,"Warning").map(function(n,t){return{id:t,value:n}})})});return s},statusList:function(){return this.$store.getters.filterStatus}},mounted:function(){},methods:{clickCb:function(n){console.log(n),this.$store.commit(v,{statusName:n.name,value:!n.value})}}},bn=gn,pn=(s("4957"),Object(T["a"])(bn,B,C,!1,null,null,null));pn.options.__file="Authors.vue";var dn=pn.exports,vn=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"languages-view"},[s("h1",[n._v("All")]),s("div",[s("ul",[s("li",[n._v("NO LANGUAGE SET - "+n._s(n.numberOfNoneSubmissions))]),s("li",[n._v("French - "+n._s(n.numberOfFrenchSubmissions))]),s("li",[n._v("English - "+n._s(n.numberOfEnglishSubmissions))]),s("li",[n._v("French or English - "+n._s(n.numberOfBothSubmissions))])])]),s("h1",[n._v("Workshops")]),s("div",[s("ul",[s("li",[n._v("NO LANGUAGE SET - "+n._s(n.numberOfNoneSubmissionsWorkshop))]),s("li",[n._v("French - "+n._s(n.numberOfFrenchSubmissionsWorkshop))]),s("li",[n._v("English - "+n._s(n.numberOfEnglishSubmissionsWorkshop))]),s("li",[n._v("French or English - "+n._s(n.numberOfBothSubmissionsWorkshop))])])]),s("h1",[n._v("Talks")]),s("div",[s("ul",[s("li",[n._v("NO LANGUAGE SET - "+n._s(n.numberOfNoneSubmissionsTalk))]),s("li",[n._v("French - "+n._s(n.numberOfFrenchSubmissionsTalk))]),s("li",[n._v("English - "+n._s(n.numberOfEnglishSubmissionsTalk))]),s("li",[n._v("French or English - "+n._s(n.numberOfBothSubmissionsTalk))])])]),n.submissionsNone.length>0?s("h2",[n._v("NO LANGUAGE SET - "+n._s(n.numberOfNoneSubmissions))]):n._e(),n._l(n.submissionsNone,function(n){return s("author",{key:"none"+n.speakerName,attrs:{authorData:n,showLanguages:""}})}),s("h2",[n._v("French - "+n._s(n.numberOfFrenchSubmissions))]),n._l(n.submissionsFrench,function(n){return s("author",{key:"french"+n.speakerName,attrs:{authorData:n,showLanguages:""}})}),s("h2",[n._v("English - "+n._s(n.numberOfEnglishSubmissions))]),n._l(n.submissionsEnglish,function(n){return s("author",{key:"english"+n.speakerName,attrs:{authorData:n,showLanguages:""}})}),n.submissionsBoth.length>0?s("h2",[n._v("French or English - "+n._s(n.numberOfBothSubmissions))]):n._e(),n._l(n.submissionsBoth,function(n){return s("author",{key:"both"+n.speakerName,attrs:{authorData:n,showLanguages:""}})})],2)},_n=[],kn={name:"languages",components:{Submission:sn,Author:hn},data:function(){return{}},computed:{numberOfFrenchSubmissions:function(){return this.countSubmissionsByLanguage(z.isFrenchSubmission)},numberOfEnglishSubmissions:function(){return this.countSubmissionsByLanguage(z.isEnglishSubmission)},numberOfNoneSubmissions:function(){return this.countSubmissionsByLanguage(z.isNoLanguageSubmission)},numberOfBothSubmissions:function(){return this.countSubmissionsByLanguage(z.isBothLanguagesSubmission)},submissionsFrench:function(){return this.getSubmissionsByLanguage(z.isFrenchSubmission)},submissionsEnglish:function(){return this.getSubmissionsByLanguage(z.isEnglishSubmission)},submissionsBoth:function(){return this.getSubmissionsByLanguage(z.isBothLanguagesSubmission)},submissionsNone:function(){return this.getSubmissionsByLanguage(z.isNoLanguageSubmission)},numberOfFrenchSubmissionsWorkshop:function(){return this.countSubmissionsByTypeAndLanguage(z.isWorkshopSubmission,z.isFrenchSubmission)},numberOfEnglishSubmissionsWorkshop:function(){return this.countSubmissionsByTypeAndLanguage(z.isWorkshopSubmission,z.isEnglishSubmission)},numberOfNoneSubmissionsWorkshop:function(){return this.countSubmissionsByTypeAndLanguage(z.isWorkshopSubmission,z.isNoLanguageSubmission)},numberOfBothSubmissionsWorkshop:function(){return this.countSubmissionsByTypeAndLanguage(z.isWorkshopSubmission,z.isBothLanguagesSubmission)},numberOfFrenchSubmissionsTalk:function(){return this.countSubmissionsByTypeAndLanguage(z.isTalkSubmission,z.isFrenchSubmission)},numberOfEnglishSubmissionsTalk:function(){return this.countSubmissionsByTypeAndLanguage(z.isTalkSubmission,z.isEnglishSubmission)},numberOfNoneSubmissionsTalk:function(){return this.countSubmissionsByTypeAndLanguage(z.isTalkSubmission,z.isNoLanguageSubmission)},numberOfBothSubmissionsTalk:function(){return this.countSubmissionsByTypeAndLanguage(z.isTalkSubmission,z.isBothLanguagesSubmission)}},mounted:function(){},methods:{getSubmissionsByLanguage:function(n){var t=this.$store.getters.submissions,s=t.filter(n).map(z.submissionToSubmissionLight),e=z.groupByAuthors(s);return e},countSubmissionsByLanguage:function(n){return this.$store.getters.submissions.filter(n).length},countSubmissionsByTypeAndLanguage:function(n,t){return this.$store.getters.submissions.filter(n).filter(t).length}}},Sn=kn,Tn=Object(T["a"])(Sn,vn,_n,!1,null,null,null);Tn.options.__file="Languages.vue";var yn=Tn.exports,En=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"tags-view"},[s("h1",[n._v("Official Tags")]),s("div",[s("ul",n._l(n.submissions,function(t){return s("li",{key:t.tag},[n._v("\n        "+n._s(t.tag)+" ("+n._s(t.count)+")\n      ")])}))]),n._l(n.submissions,function(t){return s("div",{key:t.tag,staticClass:"tag-container"},[s("div",{class:t.isBad?"bad-tag-title":"tag-title"},[n._v(n._s(t.tag)+" ("+n._s(t.count)+" submissions)")]),n._l(t.submissions,function(n){return s("author",{key:t+"_"+n.speakerName,attrs:{authorData:n,showTags:""}})})],2)})],2)},Ln=[],On=s("8afe"),wn={name:"tags",components:{Submission:sn,Author:hn},data:function(){return{}},computed:{eventTags:function(){return this.$store.getters.event.cfp.tags.filter(function(n){return"English"!==n&&"French"!==n})},submissions:function(){return this.getSubmissionsByTags()},submissionsWithNoTag:function(){return this.getSubmissionsWithNoTags()}},mounted:function(){},methods:{getSubmissionsByTags:function(){var n=this.$store.getters.submissions,t=n.map(z.submissionToSubmissionLight),s=this.eventTags.map(function(n){var s=t.filter(function(t){return t.tags.includes(n)}),e=z.groupByAuthors(s);return{tag:n,count:s.length,submissions:e}});return[this.getSubmissionsWithNoTags()].concat(Object(On["a"])(s))},getSubmissionsWithNoTags:function(){var n=this,t=this.$store.getters.submissions,s=t.map(z.submissionToSubmissionLight),e=s.filter(function(t){return n.eventTags.map(function(n){return t.tags.includes(n)}).every(function(n){return!1===n})}),i=z.groupByAuthors(e);return{tag:"Missing official tag",isBad:!0,count:e.length,submissions:i}},countSubmissionsByLanguage:function(n){return this.$store.getters.submissions.filter(n).length}}},An=wn,Nn=(s("2a4a"),Object(T["a"])(An,En,Ln,!1,null,null,null));Nn.options.__file="Tags.vue";var Bn=Nn.exports,Cn=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"travelers-view"},[s("h1",[n._v("Travelers")]),n.mustTravel.length>0?s("h2",[n._v("UNKNOWN - "+n._s(n.maybeNeedToTravel.length))]):n._e(),n._l(n.maybeNeedToTravel,function(n){return s("author",{key:"maybeNeedToTravel"+n.speakerName,attrs:{authorData:n,aknowledgeFeedback:"",showFinancial:""}})}),n.mustTravel.length>0?s("h2",[n._v("MUST TRAVEL - "+n._s(n.mustTravel.length))]):n._e(),n._l(n.mustTravel,function(n){return s("author",{key:"mustTravel"+n.speakerName,attrs:{authorData:n,aknowledgeFeedback:"",showFinancial:""}})})],2)},Fn=[],Dn={name:"travelers",components:{Author:hn},data:function(){return{}},computed:{submissionsByAuthor:function(){var n=this.$store.getters.submissions,t=n.map(z.submissionToSubmissionLight),s=z.groupByAuthors(t).map(function(n){return Object(F["a"])({},n,{country:z.getSubmissionsTagContent(n.submissions,"Country"),financialOk:z.getSubmissionsTagContent(n.submissions,"FinancialOk")})});return s},mustTravel:function(){return this.submissionsByAuthor.filter(function(n){return n.country.includes("Alien")})},noNeedToTravel:function(){return this.submissionsByAuthor.filter(function(n){return n.country.includes("France")})},maybeNeedToTravel:function(){return this.submissionsByAuthor.filter(function(n){return 0===n.country.length})}},mounted:function(){},methods:{}},jn=Dn,In=(s("2db0"),Object(T["a"])(jn,Cn,Fn,!1,null,null,null));In.options.__file="Travelers.vue";var xn=In.exports;e["a"].use(N["a"]);var Pn,$n,Wn=new N["a"]({mode:"history",base:"/papercall/",routes:[{path:"/",name:"Authors",component:dn},{path:"/languages",name:"Languages",component:yn},{path:"/tags",name:"Tags",component:Bn},{path:"/travelers",name:"Travelers",component:xn}]}),Rn=s("2f62"),Mn=s("a322"),Un=(s("96cf"),s("3040")),Gn=s("bc3a"),Kn=s.n(Gn),Vn=function(){var n="http://www.alpesjug.org/papercall/";return console.log("base url is",n),Kn.a.create({baseURL:n})},zn={fetchSubmissions:function(n){return Vn().post("submissions",{token:n})},fetchEvent:function(n){return Vn().post("event",{token:n})}},Jn={submissions:[],filterStatus:[{name:"submitted",value:!0},{name:"accepted",value:!0},{name:"rejected",value:!0},{name:"waitlist",value:!0}]},Yn={submissions:function(n){return n.submissions},filterStatus:function(n){return n.filterStatus}},qn=Object(Mn["a"])({},u,function(){var n=Object(Un["a"])(regeneratorRuntime.mark(function n(t,s){var e,i,a;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,i=s.papercallToken,console.log("load submissions"),n.next=5,zn.fetchSubmissions(i);case 5:a=n.sent,e(m,{submissions:a.data});case 7:case"end":return n.stop()}},n,this)}));return function(t,s){return n.apply(this,arguments)}}()),Hn=(Pn={},Object(Mn["a"])(Pn,m,function(n,t){var s=t.submissions;n.submissions=s}),Object(Mn["a"])(Pn,v,function(n,t){var s=t.statusName,e=t.value;n.filterStatus.find(function(n){return n.name===s}).value=e}),Pn),Qn={state:Jn,getters:Yn,actions:qn,mutations:Hn},Xn={event:void 0},Zn={event:function(n){return n.event}},nt=Object(Mn["a"])({},l,function(){var n=Object(Un["a"])(regeneratorRuntime.mark(function n(t,s){var e,i,a;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,i=s.papercallToken,console.log("load event"),n.next=5,zn.fetchEvent(i);case 5:a=n.sent,e(f,{event:a.data});case 7:case"end":return n.stop()}},n,this)}));return function(t,s){return n.apply(this,arguments)}}()),tt=Object(Mn["a"])({},f,function(n,t){var s=t.event;n.event=s}),st={state:Xn,getters:Zn,actions:nt,mutations:tt},et={papercallToken:void 0,papercallEmail:void 0,filterByEmail:!1,isLoading:!1},it={papercallToken:function(n){return n.papercallToken},papercallEmail:function(n){return n.papercallEmail},filterByEmail:function(n){return n.filterByEmail},isLoading:function(n){return n.isLoading}},at=Object(Mn["a"])({},c,function(){var n=Object(Un["a"])(regeneratorRuntime.mark(function n(t,s){var e,i,a,r;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,i=t.dispatch,a=s.papercallToken,r=s.papercallEmail,n.next=4,e(b);case 4:return n.next=6,e(h,{papercallToken:a});case 6:return n.next=8,e(g,{papercallEmail:r});case 8:return n.next=10,i(l,{papercallToken:a});case 10:return n.next=12,i(u,{papercallToken:a});case 12:return n.next=14,e(p);case 14:case"end":return n.stop()}},n,this)}));return function(t,s){return n.apply(this,arguments)}}()),rt=($n={},Object(Mn["a"])($n,h,function(n,t){var s=t.papercallToken;n.papercallToken=s}),Object(Mn["a"])($n,g,function(n,t){var s=t.papercallEmail;n.papercallEmail=s}),Object(Mn["a"])($n,b,function(n){n.isLoading=!0}),Object(Mn["a"])($n,p,function(n){n.isLoading=!1}),Object(Mn["a"])($n,d,function(n,t){n.filterByEmail=t}),$n),ot={state:et,getters:it,actions:at,mutations:rt};e["a"].use(Rn["a"]);var ut=new Rn["a"].Store({state:{},modules:{submissions:Qn,event:st,token:ot},mutations:{},actions:{}});e["a"].config.productionTip=!1,new e["a"]({router:Wn,store:ut,render:function(n){return n(A)}}).$mount("#app")},"5c0b":function(n,t,s){"use strict";var e=s("2856"),i=s.n(e);i.a},a72b:function(n,t,s){},c969:function(n,t,s){},d55e:function(n,t,s){},df21:function(n,t,s){},df74:function(n,t,s){},f2fc:function(n,t,s){}});
//# sourceMappingURL=app.708da244.js.map