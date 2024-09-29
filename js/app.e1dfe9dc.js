(function(){"use strict";var e={8702:function(e,t,a){var n=a(5130),s=a(6768);const o={class:"d-flex flex-column min-vh-100 bg-light"},r={class:"container-xxl"};function l(e,t,a,n,l,i){const c=(0,s.g2)("loading"),d=(0,s.g2)("the-header"),u=(0,s.g2)("app-pkdex-search"),p=(0,s.g2)("app-pkdex-grid"),m=(0,s.g2)("the-footer"),k=(0,s.g2)("the-error-modal");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c,{active:l.isLoading,"onUpdate:active":t[0]||(t[0]=e=>l.isLoading=e),"can-cancel":!0,"on-cancel":e.onCancel,"is-full-page":e.fullPage,color:"red",loader:"dots"},null,8,["active","on-cancel","is-full-page"]),(0,s.Lk)("div",o,[(0,s.bF)(d),(0,s.Lk)("div",r,[(0,s.bF)(u,{onSearchPkmn:i.getPkmn},null,8,["onSearchPkmn"]),null!==l.pkmnData&&!1===l.isModalVisible?((0,s.uX)(),(0,s.Wv)(p,{key:0,"pkmn-data":l.pkmnData},null,8,["pkmn-data"])):(0,s.Q3)("",!0)]),(0,s.bF)(m),l.isModalVisible?((0,s.uX)(),(0,s.Wv)(k,{key:0,"error-request":l.errorRequest,onCloseModal:i.closeModal},null,8,["error-request","onCloseModal"])):(0,s.Q3)("",!0)])],64)}var i=a.p+"img/pokeapi.b164a226.png";const c={class:"navbar navbar-dark bg-dark"};function d(e,t){return(0,s.uX)(),(0,s.CE)("nav",c,t[0]||(t[0]=[(0,s.Fv)('<div class="container"><a class="navbar-brand" href="#"><img src="'+i+'" alt="Logo" width="80" height="36" class="d-inline-block align-text-top"></a><header class="d-flex justify-content-center"><ul class="nav nav-pills"><li class="nav-item"><a href="#" class="nav-link active text-white bg-grey" aria-current="page"> Home </a></li><li class="nav-item"><a href="#" class="nav-link">Github Page</a></li><li class="nav-item"><a href="#" class="nav-link">About</a></li></ul></header></div>',1)]))}var u=a(1241);const p={},m=(0,u.A)(p,[["render",d]]);var k=m;const h={class:"container text-center pt-4"},v={class:"row"},f={class:"col-6"},b={class:"mb-3"},g={class:"mb-3"};function y(e,t,a,o,r,l){return(0,s.uX)(),(0,s.CE)("div",h,[(0,s.Lk)("div",v,[t[8]||(t[8]=(0,s.Lk)("div",{class:"col-3"},null,-1)),(0,s.Lk)("div",f,[(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>l.searchPkmnCheck&&l.searchPkmnCheck(...e)),["prevent"]))},[(0,s.Lk)("fieldset",null,[t[6]||(t[6]=(0,s.Lk)("legend",null,"Search for a Pokémon!",-1)),(0,s.Lk)("div",b,[t[3]||(t[3]=(0,s.Lk)("label",{class:"form-label pt-2"},"Try it now!",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>r.data.searchQuery=e),placeholder:"Insert a pokemon name or number"},null,512),[[n.Jo,r.data.searchQuery]])]),(0,s.Lk)("div",g,[t[5]||(t[5]=(0,s.Lk)("label",{class:"form-label pt-2"},"Select Search Term",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=e=>r.data.searchType=e)},t[4]||(t[4]=[(0,s.Lk)("option",{value:"-1",disabled:"",hidden:""},"Select a option",-1),(0,s.Lk)("option",{value:"pokemon"},"Pokémon General info",-1),(0,s.Lk)("option",{value:"pokemon-species",disabled:""}," Pokémon Species ",-1)]),512),[[n.u1,r.data.searchType]])]),t[7]||(t[7]=(0,s.Lk)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1))])],32)]),t[9]||(t[9]=(0,s.Lk)("div",{class:"col-3"},null,-1))])])}var L={data(){return{data:{searchQuery:"",searchType:"-1"}}},methods:{searchPkmnCheck(){if(""===this.data.searchQuery||"-1"===this.data.searchType)return void console.log("error empty search");let e=parseInt(this.data.searchQuery,10).toString();isNaN(e)||(this.data.searchQuery=e),this.$emit("search-pkmn",this.data),this.data.searchQuery=""}}};const x=(0,u.A)(L,[["render",y]]);var P=x;const w={class:"mt-auto py-3 my-4 border-top"};function C(e,t){return(0,s.uX)(),(0,s.CE)("div",w,t[0]||(t[0]=[(0,s.Fv)('<footer class="d-flex flex-wrap justify-content-between align-items-center container"><p class="col-md-4 mb-0 text-body-secondary"> © 2024 Vue.js Exercise project </p><a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"><img src="'+i+'" alt="Logo" width="80" height="36" class="d-inline-block align-text-top"></a><ul class="nav col-md-4 justify-content-end"><li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Github Page</a></li><li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li></ul></footer>',1)]))}const j={},D=(0,u.A)(j,[["render",C]]);var M=D,_=a(4232);const S={class:"container"},T={class:"row justify-content-start border"},E={class:"col-sm-4"},A={class:"row border"},O={class:"col-sm"},F={class:"row border"},X=["src","alt"],I={class:"row border"},Q={class:"text-center"},q={class:"col-sm-8"},R={class:"row border"},U={class:"col-sm"},V={class:"row border"},K={class:"col-sm"},N={class:"list-group-item bg-light text-start"},W={class:"row border"},$={class:"col-sm"},G={class:"row border"},H={class:"col-sm border"},B={class:"list-group-item bg-light text-start"},J={class:"col-sm border"},z={class:"list-group-item bg-light text-start"};function Y(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",S,[t[4]||(t[4]=(0,s.Lk)("div",{class:"row justify-content-start border"},[(0,s.Lk)("div",{class:"col-sm"},[(0,s.Lk)("h2",null,[(0,s.Lk)("strong",null,"Pokémon info")])])],-1)),(0,s.Lk)("div",T,[(0,s.Lk)("div",E,[(0,s.Lk)("div",A,[(0,s.Lk)("div",O,"Pokédex #"+(0,_.v_)(a.pkmnData.data.id),1)]),(0,s.Lk)("div",F,[(0,s.Lk)("img",{src:a.pkmnData.data.sprites.other["official-artwork"]["front_default"],alt:"Pokémon Sprite for: "+r.pkmnName,width:"100%",height:"100%"},null,8,X)]),(0,s.Lk)("div",I,[(0,s.Lk)("p",Q,"Pokémon Name: "+(0,_.v_)(r.pkmnName),1)])]),(0,s.Lk)("div",q,[(0,s.Lk)("div",R,[(0,s.Lk)("div",U,[t[0]||(t[0]=(0,s.Lk)("strong",null,"Type/",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.pkmnData.data.types,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,_.C4)(["pokemon-label",e.type.name])},(0,_.v_)(r.pkmnType(e)),3)))),128))])]),(0,s.Lk)("div",V,[(0,s.Lk)("div",K,[t[2]||(t[2]=(0,s.Lk)("strong",null,"Abilities",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.pkmnData.data.abilities,((e,a)=>((0,s.uX)(),(0,s.CE)("ul",{class:"list-group list-group-flush",key:a},[(0,s.Lk)("li",N,[(0,s.eW)((0,_.v_)(r.pkmnAbility(e))+": ",1),t[1]||(t[1]=(0,s.Lk)("br",null,null,-1)),(0,s.eW)(" "+(0,_.v_)(o.abilityDescription[a]),1)])])))),128))])]),(0,s.Lk)("div",W,[(0,s.Lk)("div",$,[t[3]||(t[3]=(0,s.Lk)("p",null,"Base Stats:",-1)),(0,s.Lk)("div",G,[(0,s.Lk)("div",H,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(3,(e=>(0,s.Lk)("ul",{class:"list-group list-group-flush",key:e},[(0,s.Lk)("li",B,(0,_.v_)(r.pkmnStat(a.pkmnData.data.stats[e-1])),1)]))),64))]),(0,s.Lk)("div",J,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(3,(e=>(0,s.Lk)("ul",{class:"list-group list-group-flush",key:e},[(0,s.Lk)("li",z,(0,_.v_)(r.pkmnStat(a.pkmnData.data.stats[e+2])),1)]))),64))])])])])])])])}a(4114);var Z=a(4373);function ee(){let e=Z.A.create({headers:{Prefer:"odata.include-annotations=*"}});return e.interceptors.response.use((e=>e),(e=>Promise.reject(e))),e}var te={props:{pkmnData:Object},data(){return{axiosInstance:ee(),abilityDescription:[]}},mounted(){console.log("on mounted"),this.getPkmnAbilityDescription()},updated(){console.log("on update"),this.getPkmnAbilityDescription()},computed:{pkmnName(){return this.pkmnData.data.name[0].toUpperCase()+this.pkmnData.data.name.slice(1)}},methods:{pkmnStat(e){console.log(e);let t=e.stat.name.split("-"),a="";return t.forEach((e=>{a+=e[0].toUpperCase()+e.slice(1)+" "})),a+": "+e["base_stat"]},pkmnType(e){return e.type.name[0].toUpperCase()+e.type.name.slice(1)},pkmnAbility(e){let t=e.ability.name.split("-"),a="";return t.forEach((e=>{a+=e[0].toUpperCase()+e.slice(1)+" "})),a},getPkmnAbilityDescription(){if(this.pkmnData){let e=this.pkmnData.data.abilities,t=[];for(let a=0;a<e.length;a++)t.push(this.axiosInstance.get(e[a].ability.url));Promise.all(t).then((e=>{for(let t=0;t<e.length;t++){let a=e[t].data.effect_entries.filter((e=>"en"===e.language.name));this.abilityDescription[t]=a[0].effect}}))}}}};const ae=(0,u.A)(te,[["render",Y],["__scopeId","data-v-6f9b44ed"]]);var ne=ae;function se(){const e="https://pokeapi.co/api/v2/";let t=Z.A.create({baseURL:e,headers:{Prefer:"odata.include-annotations=*"}});return t.interceptors.response.use((e=>e),(e=>Promise.reject(e))),t}const oe={class:"modal fade show modal-dialog-centered"},re={class:"modal-dialog"},le={class:"modal-content"},ie={class:"modal-header"},ce={class:"modal-title fs-5"},de={class:"modal-body"},ue={class:"modal-footer"};function pe(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[t[4]||(t[4]=(0,s.Lk)("div",{class:"modal-backdrop fade show",tabindex:"-1"},null,-1)),(0,s.Lk)("div",oe,[(0,s.Lk)("div",re,[(0,s.Lk)("div",le,[(0,s.Lk)("div",ie,[(0,s.Lk)("h1",ce,(0,_.v_)(a.errorRequest.errorTitle),1),(0,s.Lk)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>r.closeModal&&r.closeModal(...e))})]),(0,s.Lk)("div",de,[t[2]||(t[2]=(0,s.eW)(" The entered Pokémon is invalid, please enter a valid Pokémon.")),t[3]||(t[3]=(0,s.Lk)("br",null,null,-1)),(0,s.eW)(" Error Message: "+(0,_.v_)(a.errorRequest.errorMessage),1)]),(0,s.Lk)("div",ue,[(0,s.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>r.closeModal&&r.closeModal(...e))}," Close ")])])])])],64)}var me={props:{errorRequest:Object},methods:{closeModal(){this.$emit("close-modal")}}};const ke=(0,u.A)(me,[["render",pe]]);var he=ke,ve=a(3699),fe=a.n(ve),be={components:{TheHeader:k,AppPkdexSearch:P,TheFooter:M,AppPkdexGrid:ne,TheErrorModal:he,Loading:fe()},data(){return{axiosInstance:se(),isLoading:!1,pkmnData:null,isModalVisible:!1,errorRequest:{errorTitle:"",errorMessage:""}}},methods:{getPkmn(e){this.isLoading=!0;let t=`/${e.searchType}/${e.searchQuery}`;this.axiosInstance.get(t).then((e=>{this.pkmnData=e})).catch((e=>{this.errorRequest.errorMessage=e.message,this.errorRequest.errorTitle=e.response.data,this.isModalVisible=!0})).finally((()=>{this.isLoading=!1}))},closeModal(){this.isModalVisible=!1}}};const ge=(0,u.A)(be,[["render",l]]);var ye=ge;(0,n.Ef)(ye).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,o){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],o=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<r&&(r=o));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,r=n[0],l=n[1],i=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(i)var d=i(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkvue_pokedex_project"]=self["webpackChunkvue_pokedex_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(8702)}));n=a.O(n)})();
//# sourceMappingURL=app.e1dfe9dc.js.map