"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[8424],{39880:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(66252),l=a(56612);const s={class:"page-title-box d-sm-flex align-items-center justify-content-between"},n={class:"mb-sm-0"},i={class:"page-title-right"},o={class:"breadcrumb m-0"};function u(e,t,a,u,c,d){const m=(0,r.up)("b-link"),p=(0,r.up)("b-col"),h=(0,r.up)("b-row");return(0,r.wg)(),(0,r.j4)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{cols:"12"},{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r._)("h4",n,(0,l.zw)(a.title),1),(0,r._)("div",i,[(0,r._)("ol",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.items,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,l.C_)(["breadcrumb-item",{active:e[0]}]),key:t},[(0,r.Wm)(m,{href:"javascript: void(0);"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.text),1)])),_:2},1024)],2)))),128))])])])])),_:1})])),_:1})}var c={components:{},props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}}},d=a(83744);const m=(0,d.Z)(c,[["render",u]]);var p=m},78424:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(66252);function l(e,t,a,l,s,n){const i=(0,r.up)("PageHeader"),o=(0,r.up)("b-card-title"),u=(0,r.up)("b-card-header"),c=(0,r.up)("apexchart"),d=(0,r.up)("b-card-body"),m=(0,r.up)("b-card"),p=(0,r.up)("b-col"),h=(0,r.up)("b-row"),y=(0,r.up)("Layout");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{title:s.title,items:s.items},null,8,["title","items"]),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{lg:"6"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{"no-body":""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"justify-content-between d-flex align-items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Basic Treemap Chart")])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"apex-charts",height:"350",dir:"ltr",series:s.treemapChart.series,options:s.treemapChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1}),(0,r.Wm)(p,{lg:"6"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{"no-body":""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"justify-content-between d-flex align-items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Multi-Dimensional Treemap Chart")])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"apex-charts",height:"350",dir:"ltr",series:s.multiSeriesChart.series,options:s.multiSeriesChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{lg:"6"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{"no-body":""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"justify-content-between d-flex align-items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Distributed Treemap Chart (Different Color for each Cell) ")])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"apex-charts",height:"350",dir:"ltr",series:s.distributedChart.series,options:s.distributedChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1}),(0,r.Wm)(p,{lg:"6"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{"no-body":""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"justify-content-between d-flex align-items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Treemap Chart with Color Ranges")])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"apex-charts",height:"350",dir:"ltr",series:s.colorRangeChart.series,options:s.colorRangeChart.chartOptions},null,8,["series","options"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var s=a(80701),n=a(84433),i=a(39880);function o(e){return e=JSON.parse(e),e.map((function(e){var t=e.replace(" ","");if(-1===t.indexOf(",")){var a=getComputedStyle(document.documentElement).getPropertyValue(t);return a?(a=a.replace(" ",""),a):t}var r=e.split(",");if(2==r.length){var l=getComputedStyle(document.documentElement).getPropertyValue(r[0]);return l="rgba("+l+","+r[1]+")",l}return t}))}const u={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap",toolbar:{show:!1}},colors:o('["--vz-success"]'),title:{text:"Basic Treemap",style:{fontWeight:500}}}},c={series:[{name:"Desktops",data:[{x:"ABC",y:10},{x:"DEF",y:60},{x:"XYZ",y:41}]},{name:"Mobile",data:[{x:"ABCD",y:10},{x:"DEFG",y:20},{x:"WXYZ",y:51},{x:"PQR",y:30},{x:"MNO",y:20},{x:"CDE",y:30}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap",toolbar:{show:!1}},title:{text:"Multi-dimensional Treemap",align:"center",style:{fontWeight:500}},colors:o('["--vz-primary","--vz-success"]')}},d={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap",toolbar:{show:!1}},title:{text:"Distibuted Treemap (different color for each cell)",align:"center",style:{fontWeight:500}},colors:o('["--vz-primary", "--vz-secondary", "--vz-success", "--vz-info","--vz-warning", "--vz-danger"]'),plotOptions:{treemap:{distributed:!0,enableShades:!1}}}},m={series:[{data:[{x:"INTC",y:1.2},{x:"GS",y:.4},{x:"CVX",y:-1.4},{x:"GE",y:2.7},{x:"CAT",y:-.3},{x:"RTX",y:5.1},{x:"CSCO",y:-2.3},{x:"JNJ",y:2.1},{x:"PG",y:.3},{x:"TRV",y:.12},{x:"MMM",y:-2.31},{x:"NKE",y:3.98},{x:"IYT",y:1.67}]}],chartOptions:{legend:{show:!1},chart:{height:350,type:"treemap",toolbar:{show:!1}},title:{text:"Treemap with Color scale",style:{fontWeight:500}},dataLabels:{enabled:!0,style:{fontSize:"12px"},formatter:function(e,t){return[e,t.value]},offsetY:-4},plotOptions:{treemap:{enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,colorScale:{ranges:[{from:-6,to:0,color:"#3577F1"},{from:.001,to:6,color:"#f7666e"}]}}}}};var p={page:{title:"Treemap Charts",meta:[{name:"description",content:n.WL}]},components:{Layout:s.Z,PageHeader:i.Z},data(){return{treemapChart:u,multiSeriesChart:c,distributedChart:d,colorRangeChart:m,title:"Treemaps Charts",items:[{text:"Apexcharts",href:"/"},{text:"Treemaps Charts",active:!0}]}}},h=a(83744);const y=(0,h.Z)(p,[["render",l]]);var f=y}}]);
//# sourceMappingURL=8424.ceb0bc01.js.map