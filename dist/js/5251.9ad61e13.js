"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[5251],{35251:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var l=a(66252),n=a(56612),o=a(58061);const i={class:"input-group"},s=(0,l._)("label",{class:"input-group-text",style:{width:"150px"},for:"igMonth"},"Delivery Month",-1),c=["value"],r={class:"input-group"},d=(0,l._)("label",{class:"input-group-text",style:{width:"150px"},for:"igMpan"},"MPAN",-1),p=["value"],u={class:"nav nav-tabs mb-3",role:"tablist"},h={class:"nav-item"},m={class:"nav-item"},v={class:"tab-content text-muted"},D={class:"tab-pane",id:"active",role:"tabpanel"},g={class:"p-3"},w={key:0},b={class:"mt-3 table-hscroll"},_={class:"table table-nowrap table-hover"},y=(0,l._)("th",{scope:"col"},"Date",-1),M={scope:"row"},f={key:1,class:"centered-children-200"},C=(0,l._)("p",null,"No Data Available",-1),k=[C],A={class:"tab-pane active",id:"reactive",role:"tabpanel"},W={class:"p-3"},x={key:0},z={class:"mt-3 table-hscroll"},Z={class:"table table-nowrap table-hover"},H=(0,l._)("th",{scope:"col"},"Date",-1),Y={scope:"row"},F={key:1,class:"centered-children-200"},K=(0,l._)("p",null,"No Data Available",-1),L=[K];function P(e,t,a,C,K,P){const R=(0,l.up)("PageHeader"),$=(0,l.up)("b-link"),T=(0,l.up)("b-col"),V=(0,l.up)("b-row"),G=(0,l.up)("b-card-body"),S=(0,l.up)("b-card"),U=(0,l.up)("Layout");return(0,l.wg)(),(0,l.j4)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(R,{title:K.title,items:K.items},null,8,["title","items"]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(T,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{"no-body":""},{default:(0,l.w5)((()=>[(0,l.Wm)(G,{class:"p-0"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[s,(0,l.wy)((0,l._)("select",{class:"form-select",id:"igMonth","onUpdate:modelValue":t[0]||(t[0]=e=>K.selectedMonth=e),onChange:t[1]||(t[1]=(...e)=>P.handleDropdownChange&&P.handleDropdownChange(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.deliveryMonths,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.dt,value:e.dt},(0,n.zw)(e.monthYearString),9,c)))),128))],544),[[o.bM,K.selectedMonth]])]),(0,l._)("div",r,[d,(0,l.wy)((0,l._)("select",{class:"form-select",id:"igMpan","onUpdate:modelValue":t[2]||(t[2]=e=>K.selectedMpan=e),onChange:t[3]||(t[3]=(...e)=>P.handleDropdownChange&&P.handleDropdownChange(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.mpanList,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.mpanCore,value:e.mpanCore},(0,n.zw)(e.mpanCore),9,p)))),128))],544),[[o.bM,K.selectedMpan]])]),(0,l._)("ul",u,[(0,l._)("li",h,[(0,l.Wm)($,{class:"nav-link active","data-bs-toggle":"tab",href:"#active",role:"tab","aria-selected":"true"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Active ")])),_:1})]),(0,l._)("li",m,[(0,l.Wm)($,{class:"nav-link","data-bs-toggle":"tab",href:"#reactive",role:"tab","aria-selected":"false"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Reactive ")])),_:1})])]),(0,l._)("div",v,[(0,l._)("div",D,[(0,l.Wm)(V,{class:"align-items-end"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{sm:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",g,[P.isActiveDataAvailable?((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",b,[(0,l._)("table",_,[(0,l._)("thead",null,[(0,l._)("tr",null,[y,((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(50,(e=>(0,l._)("th",{key:e,scope:"col"},(0,n.zw)(e),1))),64))])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.activeConsumptionData,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.billableDate},[(0,l._)("th",M,(0,n.zw)(new Date(e.billableDate).toLocaleDateString("en-GB")),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(50,((t,a)=>(0,l._)("td",{key:a},(0,n.zw)(e["_"+(a+1)]),1))),64))])))),128))])])])])):((0,l.wg)(),(0,l.iD)("div",f,k))])])),_:1}),(0,l.Wm)(T,{sm:"4"})])),_:1})]),(0,l._)("div",A,[(0,l.Wm)(V,{class:"align-items-end"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{sm:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",W,[P.isReactiveDataAvailable?((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",z,[(0,l._)("table",Z,[(0,l._)("thead",null,[(0,l._)("tr",null,[H,((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(50,(e=>(0,l._)("th",{key:e,scope:"col"},(0,n.zw)(e),1))),64))])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.reactiveConsumptionData,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.billableDate},[(0,l._)("th",Y,(0,n.zw)(new Date(e.billableDate).toLocaleDateString("en-GB")),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(50,((t,a)=>(0,l._)("td",{key:a},(0,n.zw)(e["_"+(a+1)]),1))),64))])))),128))])])])])):((0,l.wg)(),(0,l.iD)("div",F,L))])])),_:1}),(0,l.Wm)(T,{sm:"4"})])),_:1})])])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var R=a(80701),$=a(39880),T=a(84433),V=a(25471),G=a(46255),S=a(56794),U=a(43703),E=a(4135),N=a(6154),B={page:{title:"Metered Consumption",meta:[{name:"description",content:T.WL}]},data(){return{title:"Metered Consumption",items:[{text:"Industry Flows",href:"/"},{text:"Metered Consumption",active:!0}],deliveryMonths:[],selectedMonth:null,selectedFromDate:null,selectedToDate:null,mpanList:null,activeConsumptionData:null,reactiveConsumptionData:null,selectedMpan:null,activeTab:0}},components:{Layout:R.Z,PageHeader:$.Z},computed:{isActiveDataAvailable(){return!!this.activeConsumptionData&&this.activeConsumptionData.length>0},isReactiveDataAvailable(){return!!this.reactiveConsumptionData&&this.reactiveConsumptionData.length>0}},methods:{async fetchActiveConsumptionData(){console.log("fetching data");const e=`http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/MeteredConsumption/GetActiveMC/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;try{const t=await N.Z.get(e);this.activeConsumptionData=t.data,console.log(this.activeConsumptionData)}catch(t){console.error("Error fetching active consumption data:",t)}},async fetchReactiveConsumptionData(){const e=`http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/MeteredConsumption/GetReactiveMC/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;try{const t=await N.Z.get(e);this.reactiveConsumptionData=t.data}catch(t){console.error("Error fetching active consumption data:",t)}},async fetchMpanData(){const e="http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/mpan/";try{const t=await N.Z.get(e);this.mpanList=t.data}catch(t){console.error("Error fetching Mpan data:",t)}},generateDeliveryMonthArray(){const e=new Date,t=(0,V.Z)(e,6),a=(0,G.Z)({start:t,end:e}),l=a.map((e=>{const t=(0,S.Z)(e,"MMMM yyyy"),a=(0,U.Z)(e);return{dt:a,monthYearString:t}}));this.deliveryMonths=l.reverse()},handleDropdownChange(){null!==this.selectedMpan&&null!==this.selectedMonth&&(this.selectedFromDate=(0,S.Z)(this.selectedMonth,"yyyy-MM-dd"),this.selectedToDate=(0,S.Z)((0,E.Z)(this.selectedMonth),"yyyy-MM-dd"),this.fetchActiveConsumptionData(),this.fetchReactiveConsumptionData())}},mounted(){this.fetchMpanData(),this.generateDeliveryMonthArray()}},j=a(83744);const I=(0,j.Z)(B,[["render",P]]);var q=I}}]);
//# sourceMappingURL=5251.9ad61e13.js.map