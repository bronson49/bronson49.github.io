import{e as s,o as l,c as t,F as a,h as c,t as e,p as i,r as o,z as r,A as d,a as u,C as n,D as p,s as _,E as x,g,n as v,u as T,b as E,w as m,d as b}from"./pLsLbqKE.js";const h=s({__name:"TableRow",props:["list"],setup:s=>(i,o)=>(l(),t("tr",null,[(l(!0),t(a,null,c(s.list,(s=>(l(),t("td",null,e(s),1)))),256))]))}),y=i("/images/nav/arrow-frame.svg"),C={key:0,class:"title"},w={class:"accordion-body"},A=s({__name:"accordion",props:["title","defaultOpen","showToggleArrow","openOnlyByArrow"],setup(s){const a=s,c=o(),i=o(a.defaultOpen),T=o({"max-height":"0"}),E=()=>{var s;i.value?T.value["max-height"]=((null==(s=null==c?void 0:c.value)?void 0:s.scrollHeight)||0)+"px":T.value["max-height"]="0"};r((()=>i.value),(()=>E()));const m=()=>{a.openOnlyByArrow||(i.value=!i.value)},b=()=>{i.value=!i.value};return d((()=>{E()})),(a,o)=>(l(),t("div",{class:v(["accordion",{open:g(i)}])},[u("div",{class:"accordion-head",onClick:m},[s.title?(l(),t("div",C,e(s.title),1)):n(a.$slots,"title",{key:1}),s.showToggleArrow?(l(),t("div",{key:2,class:"accordion-head-arrow",onClick:p(b,["stop"])},o[0]||(o[0]=[u("img",{src:y,alt:""},null,-1)]))):_("",!0)]),u("div",{class:"accordion-body-wrapper",ref_key:"body",ref:c,style:x(g(T))},[u("div",w,[n(a.$slots,"body")])],4)],2))}}),f=i("/images/products/extreme-premium.png"),R=i("/images/products/extreme-efb.png"),M=i("/images/products/extreme-jis.png"),X=i("/images/products/extreme-efb-asia.png"),k={class:"product_page"},B={class:"section"},O={class:"container"},F={class:"product_acc_content"},I={class:"products_acc_list"},j={class:"products_acc_table"},D={class:"product_acc_content"},S={class:"products_acc_list"},$={class:"products_acc_table"},z={class:"products_acc_table"},H={class:"products_acc_table"},J=s({__name:"product",setup(s){T({title:"Продукти EXTREME"});const i=["Завдяки використанню високощільної свинцевої пасти збільшено термін експлуатації.","Використовується тільки високоякісний електроліт без домішок.","Вібраційна стійкість.","Стійкість до глибоких розрядів та перезаряду.","Високощільний комбінований сепаратор, що запобігає виникненню короткого замикання між пластинами.","Наявність спеціальної волоконно-оптичної ізоляції, яка захищає пластини від деформації.","Використання технології Са/Са.","Ціна на акумулятори EXTREME є привабливою для нашого ринку."];return(s,o)=>{const r=h,d=A;return l(),t("div",k,[u("section",B,[u("div",O,[o[6]||(o[6]=u("h1",{class:"section_title","data-aos":"fade-right"},"Види акумуляторів EXTREME: ",-1)),E(d,{class:"products_acc",showToggleArrow:!0},{title:m((()=>o[0]||(o[0]=[u("div",{class:"products_acc_title"},[u("img",{src:f,alt:""}),b(" EXTREME PREMIUM ")],-1)]))),body:m((()=>[u("div",F,[u("div",I,[o[1]||(o[1]=u("div",{class:"products_acc_list_title"}," Переваги: ",-1)),u("ul",null,[(l(),t(a,null,c(i,(s=>u("li",null,e(s),1))),64))])]),u("table",j,[u("thead",null,[E(r,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[E(r,{list:["6CT-50 А,Аз (0)","207х175х175","480"]}),E(r,{list:["6CT-50 А,Аз (1)","207х175х175","480"]}),E(r,{list:["6CT-60 А,Аз (0)","242x175x175","600"]}),E(r,{list:["6CT-60 А,Аз (1)","242x175x175","600"]}),E(r,{list:["6CT-65 А,Аз (0)","242x175x190","640"]}),E(r,{list:["6CT-65 А,Аз (1)","242x175x190","640"]}),E(r,{list:["6CT-74 А,Аз (0)","276x175x190","720"]}),E(r,{list:["6CT-100 А,Аз (0)","353x175x190","850"]})])])])])),_:1}),E(d,{class:"products_acc",showToggleArrow:!0},{title:m((()=>o[2]||(o[2]=[u("div",{class:"products_acc_title"},[u("img",{src:R,alt:""}),b(" EXTREME EFB ")],-1)]))),body:m((()=>[u("div",D,[u("div",S,[o[3]||(o[3]=u("div",{class:"products_acc_list_title"}," Переваги: ",-1)),u("ul",null,[(l(),t(a,null,c(i,(s=>u("li",null,e(s),1))),64))])]),u("table",$,[u("thead",null,[E(r,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[E(r,{list:["6CT-63 А,Аз (0)","242x175x175","620"]}),E(r,{list:["6CT-63 А,Аз (1)","242x175x175","620"]}),E(r,{list:["6CT-78 А,Аз (0)","276x175x175","750"]}),E(r,{list:["6CT-110 А,Аз (0)","353x175x190","920"]})])])])])),_:1}),E(d,{class:"products_acc",showToggleArrow:!0},{title:m((()=>o[4]||(o[4]=[u("div",{class:"products_acc_title"},[u("img",{src:M,alt:""}),b(" EXTREME RED JIS ")],-1)]))),body:m((()=>[u("table",z,[u("thead",null,[E(r,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[E(r,{list:["6СТ-50 Аз (0)","234x129x220","390"]}),E(r,{list:["6СТ-50 Аз (1)","234x129x220","390"]})])])])),_:1}),E(d,{class:"products_acc",showToggleArrow:!0},{title:m((()=>o[5]||(o[5]=[u("div",{class:"products_acc_title"},[u("img",{src:X,alt:""}),b(" EXTREME EFB ASIA ")],-1)]))),body:m((()=>[u("table",H,[u("thead",null,[E(r,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[E(r,{list:["6CT-65 Аз (0)","232x175x220","600"]}),E(r,{list:["6CT-65 Аз (1)","232x175x220","600"]}),E(r,{list:["6CT-75 Аз (0)","259x175x220","700"]}),E(r,{list:["6CT-75 Аз (1)","259x175x220","700"]}),E(r,{list:["6CT-100 Аз (0)","302x175x224","850"]}),E(r,{list:["6CT-100 Аз (1)","302x175x224","850"]})])])])),_:1})])])])}}});export{J as default};
