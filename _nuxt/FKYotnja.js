import{e as s,o as l,c as t,F as a,A as e,t as c,p as o,r as i,x as r,y as d,a as u,B as n,C as x,m as p,D as g,g as _,n as T,u as m,b as v,w as b,d as y}from"./D60OZN0G.js";const E=s({__name:"TableRow",props:["list"],setup:s=>(o,i)=>(l(),t("tr",null,[(l(!0),t(a,null,e(s.list,(s=>(l(),t("td",null,c(s),1)))),256))]))}),h=o("/images/nav/arrow-frame.svg"),C={key:0,class:"title"},w={class:"accordion-body"},A=s({__name:"accordion",props:["title","defaultOpen","showToggleArrow","openOnlyByArrow"],setup(s){const a=s,e=i(),o=i(a.defaultOpen),m=i({"max-height":"0"}),v=()=>{var s;o.value?m.value["max-height"]=((null==(s=null==e?void 0:e.value)?void 0:s.scrollHeight)||0)+"px":m.value["max-height"]="0"};r((()=>o.value),(()=>v()));const b=()=>{a.openOnlyByArrow||(o.value=!o.value)},y=()=>{o.value=!o.value};return d((()=>{v()})),(a,i)=>(l(),t("div",{class:T(["accordion",{open:_(o)}])},[u("div",{class:"accordion-head",onClick:b},[s.title?(l(),t("div",C,c(s.title),1)):n(a.$slots,"title",{key:1}),s.showToggleArrow?(l(),t("div",{key:2,class:"accordion-head-arrow",onClick:x(y,["stop"])},i[0]||(i[0]=[u("img",{src:h,alt:""},null,-1)]))):p("",!0)]),u("div",{class:"accordion-body-wrapper",ref_key:"body",ref:e,style:g(_(m))},[u("div",w,[n(a.$slots,"body")])],4)],2))}}),f=o("/images/products/extreme-premium.png"),R=o("/images/products/extreme-efb.png"),M=o("/images/products/extreme-jis.png"),k=o("/images/products/extreme-efb-asia.png"),X={class:"product_page"},B={class:"section"},O={class:"container"},F={class:"products_acc_table"},I={class:"products_acc_table"},j={class:"products_acc_table"},D={class:"products_acc_table"},S=s({__name:"product",setup:s=>(m({title:"Продукти EXTREME"}),(s,a)=>{const e=E,c=A;return l(),t("div",X,[u("section",B,[u("div",O,[a[4]||(a[4]=u("h1",{class:"section_title","data-aos":"fade-right"},"Види акумуляторів EXTREME: ",-1)),v(c,{class:"products_acc",showToggleArrow:!0},{title:b((()=>a[0]||(a[0]=[u("div",{class:"products_acc_title"},[u("img",{src:f,alt:""}),y(" EXTREME PREMIUM ")],-1)]))),body:b((()=>[u("table",F,[u("thead",null,[v(e,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[v(e,{list:["6CT-50 А,Аз (0)","207х175х175","480"]}),v(e,{list:["6CT-50 А,Аз (1)","207х175х175","480"]}),v(e,{list:["6CT-60 А,Аз (0)","242x175x175","600"]}),v(e,{list:["6CT-60 А,Аз (1)","242x175x175","600"]}),v(e,{list:["6CT-65 А,Аз (0)","242x175x190","640"]}),v(e,{list:["6CT-65 А,Аз (1)","242x175x190","640"]}),v(e,{list:["6CT-74 А,Аз (0)","276x175x190","720"]}),v(e,{list:["6CT-100 А,Аз (0)","353x175x190","850"]})])])])),_:1}),v(c,{class:"products_acc",showToggleArrow:!0},{title:b((()=>a[1]||(a[1]=[u("div",{class:"products_acc_title"},[u("img",{src:R,alt:""}),y(" EXTREME EFB ")],-1)]))),body:b((()=>[u("table",I,[u("thead",null,[v(e,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[v(e,{list:["6CT-63 А,Аз (0)","242x175x175","620"]}),v(e,{list:["6CT-63 А,Аз (1)","242x175x175","620"]}),v(e,{list:["6CT-78 А,Аз (0)","276x175x175","750"]}),v(e,{list:["6CT-110 А,Аз (0)","353x175x190","920"]})])])])),_:1}),v(c,{class:"products_acc",showToggleArrow:!0},{title:b((()=>a[2]||(a[2]=[u("div",{class:"products_acc_title"},[u("img",{src:M,alt:""}),y(" EXTREME RED JIS ")],-1)]))),body:b((()=>[u("table",j,[u("thead",null,[v(e,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[v(e,{list:["6СТ-50 Аз (0)","234x129x220","390"]}),v(e,{list:["6СТ-50 Аз (1)","234x129x220","390"]})])])])),_:1}),v(c,{class:"products_acc",showToggleArrow:!0},{title:b((()=>a[3]||(a[3]=[u("div",{class:"products_acc_title"},[u("img",{src:k,alt:""}),y(" EXTREME EFB ASIA ")],-1)]))),body:b((()=>[u("table",D,[u("thead",null,[v(e,{list:["Артикул","Розміри, мм","Пусковий ток, А"]})]),u("tbody",null,[v(e,{list:["6CT-65 Аз (0)","232x175x220","600"]}),v(e,{list:["6CT-65 Аз (1)","232x175x220","600"]}),v(e,{list:["6CT-75 Аз (0)","259x175x220","700"]}),v(e,{list:["6CT-75 Аз (1)","259x175x220","700"]}),v(e,{list:["6CT-100 Аз (0)","302x175x224","850"]}),v(e,{list:["6CT-100 Аз (1)","302x175x224","850"]})])])])),_:1})])])])})});export{S as default};
