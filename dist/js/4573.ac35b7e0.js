"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[4573],{39880:function(e,t,l){l.d(t,{Z:function(){return p}});var a=l(66252),n=l(56612);const s={class:"page-title-box d-sm-flex align-items-center justify-content-between"},o={class:"mb-sm-0"},r={class:"page-title-right"},c={class:"breadcrumb m-0"};function u(e,t,l,u,i,d){const m=(0,a.up)("b-link"),p=(0,a.up)("b-col"),f=(0,a.up)("b-row");return(0,a.wg)(),(0,a.j4)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("h4",o,(0,n.zw)(l.title),1),(0,a._)("div",r,[(0,a._)("ol",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.items,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,n.C_)(["breadcrumb-item",{active:e[0]}]),key:t},[(0,a.Wm)(m,{href:"javascript: void(0);"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.text),1)])),_:2},1024)],2)))),128))])])])])),_:1})])),_:1})}var i={components:{},props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}}},d=l(83744);const m=(0,d.Z)(i,[["render",u]]);var p=m},74573:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});var a=l(66252),n=l(56612);const s={class:"p-3"},o={class:"mt-3 table-hscroll"},r={class:"table table-nowrap table-hover"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"Name"),(0,a._)("th",{scope:"col"},"Type"),(0,a._)("th",{scope:"col"},"Start Date"),(0,a._)("th",{scope:"col"},"End Date"),(0,a._)("th",{scope:"col"},"Fee (£/MWh)")])],-1),u={scope:"row"},i={href:"#",class:"fw-semibold"};function d(e,t,l,d,m,p){const f=(0,a.up)("PageHeader"),h=(0,a.up)("b-col"),_=(0,a.up)("b-row"),w=(0,a.up)("b-card-body"),b=(0,a.up)("b-card"),g=(0,a.up)("Layout");return(0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{title:m.title,items:m.items},null,8,["title","items"]),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{xxl:"5"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{"no-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"p-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"align-items-end"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{sm:"12"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("table",r,[c,(0,a._)("tbody",null,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(30,(e=>(0,a._)("tr",{key:e},[(0,a._)("th",u,[(0,a._)("a",i,(0,n.zw)(e),1)]),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(4,(e=>(0,a._)("td",{key:e},"1.02"))),64))]))),64))])])])])])),_:1}),(0,a.Wm)(h,{sm:"4"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}l(57658);var m=l(80701),p=l(39880),f=l(84433),h={page:{title:"Baskets",meta:[{name:"description",content:f.WL}]},data(){return{title:"Baskets",items:[{text:"Trading",href:"/"},{text:"Baskets",active:!0}],deliveryMonths:[],selectedMonth:""}},components:{Layout:m.Z,PageHeader:p.Z},methods:{generateDeliveryMonthArray(){const e=new Date,t=e.getFullYear(),l=e.getMonth(),a=[];for(let n=0;n<72;n++){const e=t-Math.floor(n/12),s=(l-n%12+12)%12,o=new Date(e,s).toLocaleString("default",{month:"long"}),r=`${o} ${e}`;a.push(r)}this.deliveryMonths=a,console.log(this.deliveryMonths)}},mounted(){this.generateDeliveryMonthArray()}},_=l(83744);const w=(0,_.Z)(h,[["render",d]]);var b=w}}]);
//# sourceMappingURL=4573.ac35b7e0.js.map