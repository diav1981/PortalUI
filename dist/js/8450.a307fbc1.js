"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[8450],{39880:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(66252),n=a(56612);const r={class:"page-title-box d-sm-flex align-items-center justify-content-between"},i={class:"mb-sm-0"},u={class:"page-title-right"},s={class:"breadcrumb m-0"};function m(e,t,a,m,o,b){const c=(0,l.up)("b-link"),d=(0,l.up)("b-col"),p=(0,l.up)("b-row");return(0,l.wg)(),(0,l.j4)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("h4",i,(0,n.zw)(a.title),1),(0,l._)("div",u,[(0,l._)("ol",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.items,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,n.C_)(["breadcrumb-item",{active:e[0]}]),key:t},[(0,l.Wm)(c,{href:"javascript: void(0);"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.text),1)])),_:2},1024)],2)))),128))])])])])),_:1})])),_:1})}var o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}}},b=a(83744);const c=(0,b.Z)(o,[["render",m]]);var d=c},38450:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(66252);function n(e,t,a,n,r,i){const u=(0,l.up)("PageHeader"),s=(0,l.up)("b-card-title"),m=(0,l.up)("b-card-header"),o=(0,l.up)("apexchart"),b=(0,l.up)("b-card-body"),c=(0,l.up)("b-card"),d=(0,l.up)("b-col"),p=(0,l.up)("b-row"),h=(0,l.up)("Layout");return(0,l.wg)(),(0,l.j4)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{title:r.title,items:r.items},null,8,["title","items"]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{lg:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{"no-body":""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"justify-content-between d-flex align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Simple Bubble Chart")])),_:1})])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"apex-charts",height:"350",dir:"ltr",series:r.simpleBubbleChart.series,options:r.simpleBubbleChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(d,{lg:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{"no-body":""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"justify-content-between d-flex align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("3D Bubble Chart")])),_:1})])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"apex-charts",height:"350",dir:"ltr",series:r.bubble3DChart.series,options:r.bubble3DChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var r=a(80701),i=a(84433),u=a(39880);a(57658);function s(e){return e=JSON.parse(e),e.map((function(e){var t=e.replace(" ","");if(-1===t.indexOf(",")){var a=getComputedStyle(document.documentElement).getPropertyValue(t);return a?(a=a.replace(" ",""),a):t}var l=e.split(",");if(2==l.length){var n=getComputedStyle(document.documentElement).getPropertyValue(l[0]);return n="rgba("+n+","+l[1]+")",n}return t}))}function m(e,t,a){var l=0,n=[];while(l<t){var r=Math.floor(750*Math.random())+1,i=Math.floor(Math.random()*(a.max-a.min+1))+a.min,u=Math.floor(61*Math.random())+15;n.push([r,i,u]),864e5,l++}return n}const o={series:[{name:"Bubble1",data:m(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:m(new Date("12 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:m(new Date("13 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:m(new Date("14 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{chart:{height:350,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{opacity:.8},title:{text:"Simple Bubble Chart",style:{fontWeight:500}},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},colors:s('["--vz-primary", "--vz-info", "--vz-warning", "--vz-success"]')}},b={series:[{name:"Product1",data:m(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:m(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product3",data:m(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product4",data:m(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{chart:{height:350,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{type:"gradient"},title:{text:"3D Bubble Chart",style:{fontWeight:500}},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},theme:{palette:"palette2"},colors:s('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]')}};var c={page:{title:"Bubble Charts",meta:[{name:"description",content:i.WL}]},components:{Layout:r.Z,PageHeader:u.Z},data(){return{simpleBubbleChart:o,bubble3DChart:b,title:"Bubble Charts",items:[{text:"Apexcharts",href:"/"},{text:"Bubble Charts",active:!0}]}}},d=a(83744);const p=(0,d.Z)(c,[["render",n]]);var h=p}}]);
//# sourceMappingURL=8450.a307fbc1.js.map