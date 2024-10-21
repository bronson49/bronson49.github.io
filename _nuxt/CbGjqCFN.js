import{p as t,e,l as s,o as a,c as i,a as l,t as c,g as n,b as o,k as r,n as b,m as d,r as _,X as u,P as p,Y as f,Z as y,$ as m,v as h,h as v,F as g,A as S,y as T}from"./TQnpaPhU.js";import{I as k,a as C,b as x,c as M,d as A,e as w,_ as N}from"./B7keC4Uh.js";import{u as I,B as j,M as D,Y as O,a as B,E,b as Y}from"./DJk9_8qx.js";const $=t("/images/widget/add-car-circle.svg"),q={class:"cs_head"},F={class:"cs_h_title"},G={class:"cs_h_sub-title"},P=e({__name:"head",setup(t){const{t:e}=s({useScope:"local"}),r=I(),b=function(){r.activeBlock="start"};return(t,s)=>(a(),i("div",q,[s[0]||(s[0]=l("img",{src:$,class:"cs_h_icon",alt:"add car"},null,-1)),l("p",F,c(n(e)("select_by_car")),1),l("p",G,c(n(e)("select_by_car_sub-title")),1),o(n(k),{filled:"",class:"cs_h_cancel","font-controlled":!1,onClick:b})]))}});function U(t){const e=t;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{ru:{select_by_car:{t:0,b:{t:2,i:[{t:3}],s:"Подбор по автомобилю"}},"select_by_car_sub-title":{t:0,b:{t:2,i:[{t:3}],s:"Отфильтрует каталог товаров и запчастей под выбранный автомобиль"}}},uk:{select_by_car:{t:0,b:{t:2,i:[{t:3}],s:"Підбір по автомобілю"}},"select_by_car_sub-title":{t:0,b:{t:2,i:[{t:3}],s:"Відфільтрує каталог товарів та запчастин під обраний автомобіль"}}}}})}U(P);const V=["brands","models","years","bodyType","engine","modification"],X={brands:{title:"brand",status:"active",slug:"brands",visible:!0,prevStep:"",nextStep:"models",url:"",list:[],action:"defaultStepAction"},models:{title:"model",status:"disabled",slug:"models",visible:!0,prevStep:"brands",nextStep:"years",url:"",list:[],action:"defaultStepAction"},years:{title:"year_of_production",status:"disabled",slug:"years",visible:!0,prevStep:"models",nextStep:"bodyType",url:"",list:[],action:"defaultStepAction"},bodyType:{title:"body_type",status:"",slug:"bodyType",visible:!1,prevStep:"years",nextStep:"engine",url:"",list:[],action:"defaultStepAction"},engine:{title:"engine",status:"",slug:"engine",visible:!1,prevStep:"bodyType",nextStep:"modification",url:"",list:[],action:"defaultStepAction"},modification:{title:"modification",status:"",slug:"modification",visible:!1,prevStep:"engine",url:"",list:[],action:"defaultStepAction"}},Z={tabs:{},create(t){return this.tabs=Object.assign({},X),t&&this.replaceDefaultTabs(t),this.tabs},replaceDefaultTabs(t){for(const e in t)!1===t[e]?this.tabs=Object.keys(this.tabs).filter((t=>t!==e)).reduce(((t,e)=>(t[e]=this.tabs[e],t)),{}):this.tabs[e]=Object.assign(this.tabs[e],t[e])}},z=r("widgetSteps",{state:()=>({openMobileCarSelect:!1,tempCar:{brands:"",models:"",years:"",bodyType:"",engine:"",modification:""},tabs:{},activeTabName:"",searchInputMinify:!1}),getters:{activeTab(){return this.tabs[this.activeTabName]}},actions:{afterSelectModification(){console.log("afterSelectModification action")},getStepData({stepName:t}){let e=[];"brands"===t&&(e=j),"models"===t&&(e=D),"years"===t&&(e=O),"bodyType"===t&&(e=B),"engine"===t&&(e=E),"modification"===t&&(e=Y),this.tabs[t].list=e},defaultStepAction(t,e){this.activeTabName=t,this.tabs[t].visible=!0,this.tabs[t].status="active",this.clearActiveTabStatuses(t),0===this.tabs[t].list.length&&this.getStepData({stepName:t}),e&&e.clearNextSteps&&this.clearStepsAfter(t)},clearStepsAfter(t){const e=V.findIndex((e=>e===t));~e&&V.forEach(((t,s)=>{this.tabs[t]&&s>e&&(this.tempCar[t]="",this.tabs[t].list=[],this.tabs[t].status="disabled",["bodyType","engine","modification"].includes(t)&&(this.tabs[t].visible=!1))}))},clearActiveTabStatuses(t){V.forEach((e=>{e!==t&&this.tabs[e]&&"active"===this.tabs[e].status&&(this.tabs[e].status="filled")}))},createTabs(t={}){this.tabs=Z.create(t)}}}),H={class:"arrow_down"},J=e({__name:"TabItem",props:{tab:{type:Object,required:!0}},setup(t){const{t:e}=s({useScope:"local"}),r=t,_=z(),u=function(){_.openMobileCarSelect=!0;const t=r.tab.slug;if("disabled"!==r.tab.status||_.tempCar[t]){const e=_.tabs[t].action;_[e](t)}};return(s,r)=>t.tab.visible?(a(),i("div",{key:0,class:b(["cs_tab_item",{[t.tab.status]:t.tab.status}]),onClick:u},[l("span",null,c(n(_).tempCar[t.tab.slug]||n(e)(t.tab.title)),1),l("span",H,[o(n(C),{"font-controlled":!1,filled:""})])],2)):d("",!0)}});function K(t){const e=t;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{ru:{brand:{t:0,b:{t:2,i:[{t:3}],s:"Бренд"}},model:{t:0,b:{t:2,i:[{t:3}],s:"Модель"}},year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"Год выпуска"}},body_type:{t:0,b:{t:2,i:[{t:3}],s:"Тип кузова"}},engine:{t:0,b:{t:2,i:[{t:3}],s:"Двигатель"}},modification:{t:0,b:{t:2,i:[{t:3}],s:"Модификация"}}},uk:{brand:{t:0,b:{t:2,i:[{t:3}],s:"Бренд"}},model:{t:0,b:{t:2,i:[{t:3}],s:"Модель"}},year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"Рік випуску"}},body_type:{t:0,b:{t:2,i:[{t:3}],s:"Тип кузова"}},engine:{t:0,b:{t:2,i:[{t:3}],s:"Двигун"}},modification:{t:0,b:{t:2,i:[{t:3}],s:"Модифікація"}}}}})}K(J);const L={class:"cs_tab_list"},Q=["placeholder"],R={key:2,class:"error-message"},W={class:"message-container"},tt={class:"message"},et={class:"csts_mobile_text"},st=e({__name:"tabs",setup(t){const{t:e}=s({useScope:"local"}),r=z(),T=_(""),k=_(""),C=_(!1),w=u({mask:"******************"}),N=p((()=>{const t=T.value.length;return!!t&&(t<8?"error":"success")}));return(t,s)=>{const _=J,u=f("maska");return a(),i("div",L,[l("div",{class:b(["cs_tab_search",{disabled:n(C),minify:n(r).searchInputMinify}]),onClick:s[1]||(s[1]=t=>n(r).searchInputMinify=!1)},[o(n(x),{class:"prepend_icon","font-controlled":!1,filled:""}),y(l("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>h(T)?T.value=t:null),type:"text",placeholder:n(e)("search_placeholder")},null,8,Q),[[m,n(T)],[u,n(w)]]),"error"===n(N)?(a(),v(n(M),{key:0,class:"valid_icon","font-controlled":!1,filled:""})):d("",!0),"success"===n(N)?(a(),v(n(A),{key:1,class:"valid_icon","font-controlled":!1,filled:""})):d("",!0),n(k)?(a(),i("div",R,[s[3]||(s[3]=l("span",{class:"triangle"},null,-1)),l("div",W,[o(n(M),{"font-controlled":!1,filled:""}),l("span",tt,c(n(k)),1)])])):d("",!0)],2),l("span",et,c(n(e)("select_car_manual")),1),(a(!0),i(g,null,S(n(r).tabs,(t=>(a(),v(_,{key:t.slug,tab:t,onClick:s[2]||(s[2]=t=>n(r).searchInputMinify=!0)},null,8,["tab"])))),128))])}}});function at(t){const e=t;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{ru:{search_placeholder:{t:0,b:{t:2,i:[{t:3}],s:"Введите гос или vin номер"}},select_car_manual:{t:0,b:{t:2,i:[{t:3}],s:"или выберите автомобиль вручную"}}},uk:{search_placeholder:{t:0,b:{t:2,i:[{t:3}],s:"Введіть державний або vin номер"}},select_car_manual:{t:0,b:{t:2,i:[{t:3}],s:"або виберіть автомобіль вручну"}}}}})}at(st);const it={class:"cs_b_header"},lt={class:"cs_b_search"},ct=["placeholder"],nt={class:"cs_b_all-brands-title"},ot={class:"cs_b_items_wrapper"},rt=["onClick"],bt=e({__name:"body",setup(t){const e=I(),r=z(),{t:_}=s({useScope:"local"}),u=function(){r.openMobileCarSelect=!1};return(t,s)=>n(r).activeTab?(a(),i("div",{key:0,class:b(["cs_body",{by_10:["brands","models"].includes(n(r).activeTab.slug),by_5:"years"===n(r).activeTab.slug,by_3:"engine"===n(r).activeTab.slug,active_mobile:n(r).openMobileCarSelect}])},[l("div",it,[o(n(w),{"font-controlled":!1,filled:"",width:"16",height:"16",onClick:u}),l("span",null,c(n(_)("select"))+" "+c(n(_)(n(r).activeTab.title)),1),o(n(k),{"font-controlled":!1,filled:"",width:"13",height:"13",onClick:u})]),l("div",lt,[o(n(A),{"font-controlled":!1,filled:"",width:"16",height:"16"}),l("input",{type:"text",placeholder:t.$t("search")},null,8,ct)]),l("div",nt,c(n(_)("all_"+n(r).activeTab.title)),1),l("div",ot,[(a(!0),i(g,null,S(n(r).activeTab.list,(t=>(a(),i("div",{key:t.id,class:"cs_b_item",onClick:s=>function(t){if(r.tempCar[r.activeTabName]=t.title,"modification"!==r.activeTabName){const t=r.activeTab.nextStep,e=r.tabs[t].action;r.activeTab.status="filled",r.tempCar[t]="",r[e](t,{clearNextSteps:!0}),r.searchInputMinify=!0}else r.afterSelectModification(),e.activeBlock="garage",e.getGarage()}(t)},c(t.title),9,rt)))),128))])],2)):d("",!0)}});function dt(t){const e=t;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{ru:{select:{t:0,b:{t:2,i:[{t:3}],s:"Виберіть"}},brand:{t:0,b:{t:2,i:[{t:3}],s:"марку"}},model:{t:0,b:{t:2,i:[{t:3}],s:"модель"}},year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"год выпуска"}},body_type:{t:0,b:{t:2,i:[{t:3}],s:"тип кузова"}},engine:{t:0,b:{t:2,i:[{t:3}],s:"двигатель"}},modification:{t:0,b:{t:2,i:[{t:3}],s:"модификацию"}},all_brand:{t:0,b:{t:2,i:[{t:3}],s:"Все марки"}},all_model:{t:0,b:{t:2,i:[{t:3}],s:"Все модели"}},all_year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"Все года"}},all_body_type:{t:0,b:{t:2,i:[{t:3}],s:"Все типы кузова"}},all_engine:{t:0,b:{t:2,i:[{t:3}],s:"Все двигатели"}},all_modification:{t:0,b:{t:2,i:[{t:3}],s:"Все модификации"}}},uk:{select:{t:0,b:{t:2,i:[{t:3}],s:"Выберите"}},brand:{t:0,b:{t:2,i:[{t:3}],s:"марку"}},model:{t:0,b:{t:2,i:[{t:3}],s:"модель"}},year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"рік випуску"}},body_type:{t:0,b:{t:2,i:[{t:3}],s:"тип кузова"}},engine:{t:0,b:{t:2,i:[{t:3}],s:"двигун"}},modification:{t:0,b:{t:2,i:[{t:3}],s:"модифікацію"}},all_brand:{t:0,b:{t:2,i:[{t:3}],s:"Всі марки"}},all_model:{t:0,b:{t:2,i:[{t:3}],s:"Всі моделі"}},all_year_of_production:{t:0,b:{t:2,i:[{t:3}],s:"Всі роки"}},all_body_type:{t:0,b:{t:2,i:[{t:3}],s:"Всі типи кузова"}},all_engine:{t:0,b:{t:2,i:[{t:3}],s:"Всі двигуни"}},all_modification:{t:0,b:{t:2,i:[{t:3}],s:"Усі модифікації"}}}}})}dt(bt);const _t={class:"car_select"},ut={class:"cs_body_wrapper"},pt=e({__name:"index",setup(t){const e=z();return e.createTabs(),T((()=>{const t=e.tabs.brands.action;e[t]("brands")})),(t,e)=>{const s=P,c=st,n=bt,r=N;return a(),i("section",_t,[o(s),l("div",ut,[o(c),o(n),o(r)])])}}});export{pt as default};
