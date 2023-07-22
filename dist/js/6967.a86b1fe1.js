"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[6967],{85117:function(e,t,a){var l=a(66330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+l(t)+" of "+l(e))}},30541:function(e,t,a){var l=a(82109),s=a(47908),r=a(26244),o=a(83658),d=a(85117),n=a(7207),i=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u=i||!c();l({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(e){var t=s(this),a=r(t),l=arguments.length;if(l){n(a+l);var i=a;while(i--){var c=i+l;i in t?t[c]=t[i]:d(t,c)}for(var u=0;u<l;u++)t[u]=arguments[u]}return o(t,a+l)}})},16967:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ve}});var l=a(66252),s=a(58061),r=a(56612);const o=(0,l._)("h5",{class:"card-title mb-0"},"Order History",-1),d={class:"d-flex gap-1 flex-wrap"},n=(0,l._)("i",{class:"ri-add-line align-bottom me-1"},null,-1),i=(0,l._)("i",{class:"ri-file-download-line align-bottom me-1"},null,-1),c=(0,l._)("i",{class:"ri-delete-bin-2-line"},null,-1),u={class:"search-box"},m=(0,l._)("i",{class:"ri-search-line search-icon"},null,-1),p=(0,l._)("i",{class:"ri-equalizer-fill me-1 align-bottom"},null,-1),h={class:"nav nav-tabs nav-tabs-custom nav-success mb-3",role:"tablist"},f={class:"nav-item"},v=(0,l._)("i",{class:"ri-store-2-fill me-1 align-bottom"},null,-1),g={class:"nav-item"},y=(0,l._)("i",{class:"ri-checkbox-circle-line me-1 align-bottom"},null,-1),_={class:"nav-item"},b=(0,l._)("i",{class:"ri-truck-line me-1 align-bottom"},null,-1),k={class:"nav-item"},w=(0,l._)("i",{class:"ri-arrow-left-right-fill me-1 align-bottom"},null,-1),C={class:"nav-item"},D=(0,l._)("i",{class:"ri-close-circle-line me-1 align-bottom"},null,-1),P={class:"table-responsive table-card mb-1"},I={class:"table table-nowrap align-middle",id:"orderTable"},S=(0,l._)("thead",{class:"text-muted table-light"},[(0,l._)("tr",{class:"text-uppercase fs-13"},[(0,l._)("th",{scope:"col",style:{width:"25px"}},[(0,l._)("div",{class:"form-check"},[(0,l._)("input",{class:"form-check-input",type:"checkbox",id:"checkAll",value:"option"})])]),(0,l._)("th",{class:"sort","data-sort":"id"},"Order ID"),(0,l._)("th",{class:"sort","data-sort":"customer_name"},"Customer"),(0,l._)("th",{class:"sort","data-sort":"product_name"},"Product"),(0,l._)("th",{class:"sort","data-sort":"date"},"Order Date"),(0,l._)("th",{class:"sort","data-sort":"amount"},"Amount"),(0,l._)("th",{class:"sort","data-sort":"payment"},"Payment Method"),(0,l._)("th",{class:"sort","data-sort":"status"},"Delivery Status"),(0,l._)("th",{class:"sort","data-sort":"city"},"Action")])],-1),x={key:0},W=(0,l._)("th",{scope:"row"},[(0,l._)("div",{class:"form-check"},[(0,l._)("input",{class:"form-check-input",type:"checkbox",name:"chk_child",value:"option1"})])],-1),B={class:"id"},E={class:"customer_name"},A={class:"product_name"},V={class:"date"},M=(0,l._)("small",{class:"text-muted"},"02:21 AM",-1),O={class:"amount"},U={class:"payment"},T={class:"status"},N={class:"list-inline hstack gap-2 mb-0"},Z={class:"list-inline-item",title:"View"},F=(0,l._)("i",{class:"ri-eye-fill fs-16"},null,-1),L={class:"list-inline-item edit","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Edit"},z=(0,l._)("i",{class:"ri-pencil-fill fs-16"},null,-1),G={class:"list-inline-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Remove"},R=(0,l._)("i",{class:"ri-delete-bin-5-fill fs-16"},null,-1),$={class:"noresult",style:{display:"none"}},q={class:"text-center"},H=(0,l._)("h5",{class:"mt-2"},"Sorry! No Result Found",-1),j=(0,l._)("p",{class:"text-muted"}," We've searched more than 150+ Orders We did not find any orders for you search. ",-1),Q={class:"d-flex justify-content-end"},Y={class:"pagination-wrap hstack gap-2",style:{display:"flex"}},J={class:"pagination listjs-pagination mb-0"},K=["onClick"],X=(0,l._)("input",{type:"hidden",id:"id-field"},null,-1),ee=(0,l._)("div",{class:"mb-3",id:"modal-id"},[(0,l._)("label",{for:"orderId",class:"form-label"},"ID"),(0,l._)("input",{type:"text",pattern:"\\d*",id:"orderId",class:"form-control",placeholder:"ID",maxlength:"3"})],-1),te=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"customername-field",class:"form-label"},"Customer Name"),(0,l._)("input",{type:"text",id:"customername",class:"form-control",placeholder:"Enter Name",required:""})],-1),ae=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"productname",class:"form-label"},"Product"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"productname-field",id:"productname",required:""},[(0,l._)("option",{value:""},"Product"),(0,l._)("option",{value:"Puma Tshirt"},"Puma Tshirt"),(0,l._)("option",{value:"Adidas Sneakers"}," Adidas Sneakers "),(0,l._)("option",{value:"350 ml Glass Grocery Container"}," 350 ml Glass Grocery Container "),(0,l._)("option",{value:"American egale outfitters Shirt"}," American egale outfitters Shirt "),(0,l._)("option",{value:"Galaxy Watch4"},"Galaxy Watch4"),(0,l._)("option",{value:"Apple iPhone 12"}," Apple iPhone 12 "),(0,l._)("option",{value:"Funky Prints T-shirt"}," Funky Prints T-shirt "),(0,l._)("option",{value:"USB Flash Drive Personalized with 3D Print"}," USB Flash Drive Personalized with 3D Print "),(0,l._)("option",{value:"Oxford Button-Down Shirt"}," Oxford Button-Down Shirt "),(0,l._)("option",{value:"Classic Short Sleeve Shirt"}," Classic Short Sleeve Shirt "),(0,l._)("option",{value:"Half Sleeve T-Shirts (Blue)"}," Half Sleeve T-Shirts (Blue) "),(0,l._)("option",{value:"Noise Evolve Smartwatch"}," Noise Evolve Smartwatch ")])],-1),le={class:"mb-3"},se=(0,l._)("label",{for:"date-field",class:"form-label"},"Order Date",-1),re=(0,l._)("div",null,[(0,l._)("label",{for:"amount-field",class:"form-label"},"Amount"),(0,l._)("input",{type:"text",id:"amount",class:"form-control",placeholder:"Total amount",required:""})],-1),oe=(0,l._)("div",null,[(0,l._)("label",{for:"payment-field",class:"form-label"},"Payment Method"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"payment-method",id:"payment"},[(0,l._)("option",{value:""},"Payment Method"),(0,l._)("option",{value:"Mastercard"},"Mastercard"),(0,l._)("option",{value:"Visa"},"Visa"),(0,l._)("option",{value:"COD"},"COD"),(0,l._)("option",{value:"Paypal"},"Paypal")])],-1),de=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"delivered-status",class:"form-label"},"Delivery Status"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"delivered-status",id:"delivered"},[(0,l._)("option",{value:""},"Delivery Status"),(0,l._)("option",{value:"Pending"},"Pending"),(0,l._)("option",{value:"Inprogress"},"Inprogress"),(0,l._)("option",{value:"Cancelled"},"Cancelled"),(0,l._)("option",{value:"Pickups"},"Pickups"),(0,l._)("option",{value:"Delivered"},"Delivered"),(0,l._)("option",{value:"Returns"},"Returns")])],-1),ne={class:"hstack gap-2 justify-content-end"},ie=(0,l._)("input",{type:"hidden",id:"id-field"},null,-1),ce=(0,l._)("div",{class:"mb-3",id:"modal-id"},[(0,l._)("label",{for:"orderId",class:"form-label"},"ID"),(0,l._)("input",{type:"text",pattern:"\\d*",id:"edtorderId",class:"form-control",placeholder:"ID",maxlength:"3",readonly:""})],-1),ue=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"customername-field",class:"form-label"},"Customer Name"),(0,l._)("input",{type:"text",id:"edtcustomername",class:"form-control",placeholder:"Enter Name",required:""})],-1),me=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"productname",class:"form-label"},"Product"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"productname-field",id:"edtproductname"},[(0,l._)("option",{value:""},"Product"),(0,l._)("option",{value:"Puma Tshirt"},"Puma Tshirt"),(0,l._)("option",{value:"Adidas Sneakers"}," Adidas Sneakers "),(0,l._)("option",{value:"350 ml Glass Grocery Container"}," 350 ml Glass Grocery Container "),(0,l._)("option",{value:"American egale outfitters Shirt"}," American egale outfitters Shirt "),(0,l._)("option",{value:"Galaxy Watch4"},"Galaxy Watch4"),(0,l._)("option",{value:"Apple iPhone 12"}," Apple iPhone 12 "),(0,l._)("option",{value:"Funky Prints T-shirt"}," Funky Prints T-shirt "),(0,l._)("option",{value:"USB Flash Drive Personalized with 3D Print"}," USB Flash Drive Personalized with 3D Print "),(0,l._)("option",{value:"Oxford Button-Down Shirt"}," Oxford Button-Down Shirt "),(0,l._)("option",{value:"Classic Short Sleeve Shirt"}," Classic Short Sleeve Shirt "),(0,l._)("option",{value:"Half Sleeve T-Shirts (Blue)"}," Half Sleeve T-Shirts (Blue) "),(0,l._)("option",{value:"Noise Evolve Smartwatch"}," Noise Evolve Smartwatch ")])],-1),pe={class:"mb-3"},he=(0,l._)("label",{for:"date-field",class:"form-label"},"Order Date",-1),fe=(0,l._)("div",null,[(0,l._)("label",{for:"amount-field",class:"form-label"},"Amount"),(0,l._)("input",{type:"text",id:"edtamount",class:"form-control",placeholder:"Total amount",required:""})],-1),ve=(0,l._)("div",null,[(0,l._)("label",{for:"payment-field",class:"form-label"},"Payment Method"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"payment-method",id:"edtpayment"},[(0,l._)("option",{value:""},"Payment Method"),(0,l._)("option",{value:"Mastercard"},"Mastercard"),(0,l._)("option",{value:"Visa"},"Visa"),(0,l._)("option",{value:"COD"},"COD"),(0,l._)("option",{value:"Paypal"},"Paypal")])],-1),ge=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"delivered-status",class:"form-label"},"Delivery Status"),(0,l._)("select",{class:"form-control","data-trigger":"",name:"delivered-status",id:"edtdelivered"},[(0,l._)("option",{value:""},"Delivery Status"),(0,l._)("option",{value:"Pending"},"Pending"),(0,l._)("option",{value:"Inprogress"},"Inprogress"),(0,l._)("option",{value:"Cancelled"},"Cancelled"),(0,l._)("option",{value:"Pickups"},"Pickups"),(0,l._)("option",{value:"Delivered"},"Delivered"),(0,l._)("option",{value:"Returns"},"Returns")])],-1),ye={class:"hstack gap-2 justify-content-end"};function _e(e,t,a,_e,be,ke){const we=(0,l.up)("PageHeader"),Ce=(0,l.up)("b-col"),De=(0,l.up)("b-button"),Pe=(0,l.up)("b-row"),Ie=(0,l.up)("b-card-header"),Se=(0,l.up)("flat-pickr"),xe=(0,l.up)("Multiselect"),We=(0,l.up)("b-form"),Be=(0,l.up)("b-card-body"),Ee=(0,l.up)("b-link"),Ae=(0,l.up)("b-badge"),Ve=(0,l.up)("router-link"),Me=(0,l.up)("lottie"),Oe=(0,l.up)("b-modal"),Ue=(0,l.up)("b-card"),Te=(0,l.up)("Layout"),Ne=(0,l.Q2)("b-tooltip");return(0,l.wg)(),(0,l.j4)(Te,null,{default:(0,l.w5)((()=>[(0,l.Wm)(we,{title:be.title,items:be.items},null,8,["title","items"]),(0,l.Wm)(Pe,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Ce,{lg:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ue,{"no-body":"",id:"orderList"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ie,{class:"border-0"},{default:(0,l.w5)((()=>[(0,l.Wm)(Pe,{class:"align-items-center gy-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ce,{cols:"sm"},{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(Ce,{sm:"auto"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Wm)(De,{type:"button",variant:"secondary",class:"add-btn",id:"create-btn",onClick:t[0]||(t[0]=e=>be.createModal=!be.createModal)},{default:(0,l.w5)((()=>[n,(0,l.Uk)(" Create Order ")])),_:1}),(0,l.Wm)(De,{type:"button",variant:"success",class:"ms-1"},{default:(0,l.w5)((()=>[i,(0,l.Uk)(" Import ")])),_:1}),(0,l.Wm)(De,{variant:"soft-danger",class:"me-1",id:"remove-actions",onClick:ke.deleteMultiple},{default:(0,l.w5)((()=>[c])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Be,{class:"border border-dashed border-end-0 border-start-0"},{default:(0,l.w5)((()=>[(0,l.Wm)(We,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Pe,{class:"g-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ce,{xxl:"5",sm:"6"},{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control search","onUpdate:modelValue":t[1]||(t[1]=e=>be.searchQuery=e),placeholder:"Search for order ID, customer, order status or something..."},null,512),[[s.nr,be.searchQuery]]),m])])),_:1}),(0,l.Wm)(Ce,{xxl:"2",sm:"6"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(Se,{placeholder:"Select date",modelValue:be.date2,"onUpdate:modelValue":t[2]||(t[2]=e=>be.date2=e),config:be.config,class:"form-control flatpickr-input",id:"demo-datepicker"},null,8,["modelValue","config"])])])),_:1}),(0,l.Wm)(Ce,{xxl:"2",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(xe,{class:"form-control",modelValue:be.status1,"onUpdate:modelValue":t[3]||(t[3]=e=>be.status1=e),"close-on-select":!0,searchable:!0,"create-option":!0,onInput:ke.onChangePayment,options:[{value:"",label:"Status"},{value:"All",label:"All"},{value:"Pending",label:"Pending"},{value:"Inprogress",label:"Inprogress"},{value:"Cancelled",label:"Cancelled"},{value:"Pickups",label:"Pickups"},{value:"Returns",label:"Returns"},{value:"Delivered",label:"Delivered"}]},null,8,["modelValue","onInput"])])])),_:1}),(0,l.Wm)(Ce,{xxl:"2",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(xe,{class:"form-control",modelValue:be.value1,"onUpdate:modelValue":t[4]||(t[4]=e=>be.value1=e),"close-on-select":!0,searchable:!0,"create-option":!0,onInput:ke.onChangeStatus,options:[{value:"",label:"Select Payment"},{value:"All",label:"All"},{value:"Mastercard",label:"Mastercard"},{value:"Paypal",label:"Paypal"},{value:"Visa",label:"Visa"},{value:"COD",label:"COD"}]},null,8,["modelValue","onInput"])])])),_:1}),(0,l.Wm)(Ce,{xxl:"1",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(De,{type:"button",variant:"primary",class:"w-100",onClick:ke.SearchData},{default:(0,l.w5)((()=>[p,(0,l.Uk)(" Filters ")])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Be,{class:"pt-0"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("ul",h,[(0,l._)("li",f,[(0,l.Wm)(Ee,{class:"nav-link active All py-3","data-bs-toggle":"tab",id:"All",href:"#home1",role:"tab",onClick:t[5]||(t[5]=e=>ke.changecategory("All")),"aria-selected":"true"},{default:(0,l.w5)((()=>[v,(0,l.Uk)(" All Orders ")])),_:1})]),(0,l._)("li",g,[(0,l.Wm)(Ee,{class:"nav-link py-3 Delivered","data-bs-toggle":"tab",id:"Delivered",href:"#delivered",role:"tab",onClick:t[6]||(t[6]=e=>ke.changecategory("Delivered")),"aria-selected":"false"},{default:(0,l.w5)((()=>[y,(0,l.Uk)(" Delivered ")])),_:1})]),(0,l._)("li",_,[(0,l.Wm)(Ee,{class:"nav-link py-3 Pickups","data-bs-toggle":"tab",id:"Pickups",href:"#pickups",role:"tab",onClick:t[7]||(t[7]=e=>ke.changecategory("Pickups")),"aria-selected":"false"},{default:(0,l.w5)((()=>[b,(0,l.Uk)(" Pickups "),(0,l.Wm)(Ae,{variant:"danger",class:"align-middle ms-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("2")])),_:1})])),_:1})]),(0,l._)("li",k,[(0,l.Wm)(Ee,{class:"nav-link py-3 Returns","data-bs-toggle":"tab",id:"Returns",href:"#returns",role:"tab",onClick:t[8]||(t[8]=e=>ke.changecategory("Returns")),"aria-selected":"false"},{default:(0,l.w5)((()=>[w,(0,l.Uk)(" Returns ")])),_:1})]),(0,l._)("li",C,[(0,l.Wm)(Ee,{class:"nav-link py-3 Cancelled","data-bs-toggle":"tab",id:"Cancelled",href:"#cancelled",role:"tab",onClick:t[9]||(t[9]=e=>ke.changecategory("Cancelled")),"aria-selected":"false"},{default:(0,l.w5)((()=>[D,(0,l.Uk)(" Cancelled ")])),_:1})])]),(0,l._)("div",P,[(0,l._)("table",I,[S,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(ke.resultQuery,((e,t)=>((0,l.wg)(),(0,l.iD)("tbody",{class:"list form-check-all",key:t},["All"==be.statuscategory||be.statuscategory==e.status?((0,l.wg)(),(0,l.iD)("tr",x,[W,(0,l._)("td",B,[(0,l.Wm)(Ve,{to:"/ecommerce/order-details",class:"fw-medium link-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.orderId),1)])),_:2},1024)]),(0,l._)("td",E,(0,r.zw)(e.customer),1),(0,l._)("td",A,(0,r.zw)(e.product),1),(0,l._)("td",V,[(0,l.Uk)((0,r.zw)(e.orderDate)+" ",1),M]),(0,l._)("td",O,"$"+(0,r.zw)(e.amount),1),(0,l._)("td",U,(0,r.zw)(e.payment),1),(0,l._)("td",T,[(0,l._)("span",{class:(0,r.C_)(["badge text-uppercase",{"badge-soft-primary":"Inprogress"==e.status,"badge-soft-info":"Pickups"==e.status,"badge-soft-success":"Delivered"==e.status,"badge-soft-danger":"Cancelled"==e.status,"badge-soft-secondary":"Returns"==e.status,"badge-soft-warning":"Pending"==e.status}])},(0,r.zw)(e.status),3)]),(0,l._)("td",null,[(0,l._)("ul",N,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("li",Z,[(0,l.Wm)(Ve,{to:"/ecommerce/order-details",class:"text-primary d-inline-block"},{default:(0,l.w5)((()=>[F])),_:1})])),[[Ne,void 0,void 0,{hover:!0}]]),(0,l._)("li",L,[(0,l.Wm)(Ee,{variant:"text-primary",class:"d-inline-block edit-item-btn",onClick:t=>ke.editdata(e)},{default:(0,l.w5)((()=>[z])),_:2},1032,["onClick"])]),(0,l._)("li",G,[(0,l.Wm)(Ee,{class:"text-danger d-inline-block remove-item-btn",onClick:t=>ke.deletedata(e)},{default:(0,l.w5)((()=>[R])),_:2},1032,["onClick"])])])])])):(0,l.kq)("",!0)])))),128))]),(0,l._)("div",$,[(0,l._)("div",q,[(0,l.Wm)(Me,{class:"avatar-xl",colors:"primary:#121331,secondary:#08a88a",options:be.defaultOptions,height:75,width:75},null,8,["options"]),H,j])])]),(0,l._)("div",Q,[(0,l._)("div",Y,[1!=be.page?((0,l.wg)(),(0,l.j4)(Ee,{key:0,class:(0,r.C_)(["page-item pagination-prev",{disabled:1==be.page}]),href:"#",onClick:t[10]||(t[10]=e=>be.page--)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Previous ")])),_:1},8,["class"])):(0,l.kq)("",!0),(0,l._)("ul",J,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(be.pages,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,r.C_)({active:e==be.page,disabled:"..."==e}),key:t,onClick:t=>be.page=e},[(0,l.Wm)(Ee,{class:"page",href:"#","data-i":"1","data-page":"8"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e),1)])),_:2},1024)],10,K)))),128))]),be.page<be.pages.length?((0,l.wg)(),(0,l.j4)(Ee,{key:1,class:"page-item pagination-next",href:"#",onClick:t[11]||(t[11]=e=>be.page++)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Next ")])),_:1})):(0,l.kq)("",!0)])])]),(0,l.Wm)(Oe,{modelValue:be.createModal,"onUpdate:modelValue":t[14]||(t[14]=e=>be.createModal=e),"hide-footer":"",title:"Add Order","header-class":"p-3 bg-light",class:"v-modal-custom",centered:"","no-close-on-backdrop":""},{default:(0,l.w5)((()=>[(0,l.Wm)(We,{action:"#",id:"addform",class:"tablelist-form",autocomplete:"off"},{default:(0,l.w5)((()=>[X,ee,te,ae,(0,l._)("div",le,[se,(0,l.Wm)(Se,{placeholder:"Select date",modelValue:be.date2,"onUpdate:modelValue":t[12]||(t[12]=e=>be.date2=e),config:be.timeConfig,class:"form-control flatpickr-input",id:"orderdate"},null,8,["modelValue","config"])]),(0,l.Wm)(Pe,{class:"gy-4 mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ce,{md:"6"},{default:(0,l.w5)((()=>[re])),_:1}),(0,l.Wm)(Ce,{md:"6"},{default:(0,l.w5)((()=>[oe])),_:1})])),_:1}),de,(0,l._)("div",ne,[(0,l.Wm)(De,{type:"button",variant:"light",onClick:t[13]||(t[13]=e=>be.createModal=!1),id:"closemodal"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Close ")])),_:1}),(0,l.Wm)(De,{type:"button",variant:"primary",id:"add-btn",onClick:ke.addorder},{default:(0,l.w5)((()=>[(0,l.Uk)(" Add Order ")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Oe,{modelValue:be.editOrderModal,"onUpdate:modelValue":t[17]||(t[17]=e=>be.editOrderModal=e),id:"EditModal","hide-footer":"",title:"Edit Order","header-class":"p-3 bg-light",class:"v-modal-custom",centered:"","no-close-on-backdrop":""},{default:(0,l.w5)((()=>[(0,l.Wm)(We,{action:"#",id:"editform",class:"tablelist-form",autocomplete:"off"},{default:(0,l.w5)((()=>[ie,ce,ue,me,(0,l._)("div",pe,[he,(0,l.Wm)(Se,{placeholder:"Select date",modelValue:be.date2,"onUpdate:modelValue":t[15]||(t[15]=e=>be.date2=e),config:be.timeConfig,class:"form-control flatpickr-input",id:"edtorderdate"},null,8,["modelValue","config"])]),(0,l.Wm)(Pe,{class:"gy-4 mb-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ce,{md:"6"},{default:(0,l.w5)((()=>[fe])),_:1}),(0,l.Wm)(Ce,{md:"6"},{default:(0,l.w5)((()=>[ve])),_:1})])),_:1}),ge,(0,l._)("div",ye,[(0,l.Wm)(De,{type:"button",variant:"light",onClick:t[16]||(t[16]=e=>be.editOrderModal=!1),id:"edtclosemodal"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Close ")])),_:1}),(0,l.Wm)(De,{type:"button",variant:"success",id:"add-btn",onClick:ke.updateorder},{default:(0,l.w5)((()=>[(0,l.Uk)(" Update ")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}a(57658),a(30541);var be=a(39810),ke=a(60547),we=a(86455),Ce=a.n(we),De=a(80701),Pe=a(84433),Ie=a(39880),Se=a(6154),xe=a(724),We=a(98804),Be={page:{title:"Orders",meta:[{name:"description",content:Pe.WL}]},data(){return{title:"Orders",items:[{text:"Ecommerce",href:"/"},{text:"Orders",active:!0}],createModal:!1,editOrderModal:!1,page:1,perPage:8,pages:[],value:null,status:null,status1:null,statuscategory:"All",value1:null,searchQuery:null,config:{wrap:!0,altFormat:"M j, Y",altInput:!0,dateFormat:"d M, Y",mode:"range"},timeConfig:{enableTime:!1,dateFormat:"d M, Y"},date:null,date2:null,defaultOptions:{animationData:xe},orders:[{id:1,orderId:"#VZ2101",customer:"Frank Hook",product:"Puma Tshirt",orderDate:"20 Dec, 2021",amount:"$654",payment:"Mastercard",status:"Pending",statusClass:"warning"},{id:2,orderId:"#VZ2102",customer:"Rickey Teran",product:"Adidas Sneakers",orderDate:"16 Dec, 2021",amount:"$354",payment:"Paypal",status:"Cancelled",statusClass:"danger"},{id:3,orderId:"#VZ2103",customer:"James Price",product:"350 ml Glass Grocery Container",orderDate:"28 Nov, 2021",amount:"$829",payment:"Visa",status:"Inprogress",statusClass:"secondary"},{id:4,orderId:"#VZ2104",customer:"Nettie Deloatch",product:"American egale outfitters Shirt",orderDate:"22 Nov, 2021",amount:"$142",payment:"COD",status:"Pending",statusClass:"warning"},{id:5,orderId:"#VZ2105",customer:"Thomas Taylor",product:"Galaxy Watch4",orderDate:"12 Nov, 2021",amount:"$408",payment:"Mastercard",status:"Pickups",statusClass:"info"},{id:6,orderId:"#VZ2106",customer:"James Price",product:"Apple iPhone 12",orderDate:"05 Nov, 2021",amount:"$1240",payment:"Visa",status:"Inprogress",statusClass:"secondary"},{id:7,orderId:"#VZ2107",customer:"Nancy Martino",product:"Funky Prints T-shirt",orderDate:"31 Oct, 2021",amount:"$180",payment:"COD",status:"Returns",statusClass:"primary"},{id:8,orderId:"#VZ2108",customer:"Alexis Clarke",product:"USB Flash Drive Personalized with 3D Print",orderDate:"25 Oct, 2021",amount:"$247",payment:"Paypal",status:"Delivered",statusClass:"success"},{id:9,orderId:"#VZ2109",customer:"Donald Palmer",product:"Oxford Button-Down Shirt",orderDate:"19 Oct, 2021",amount:"$373",payment:"Visa",status:"Pickups",statusClass:"info"},{id:10,orderId:"#VZ2110",customer:"Henry Baird",product:"Classic Short Sleeve Shirt",orderDate:"13 Oct, 2021",amount:"$342",payment:"Mastercard",status:"Inprogress",statusClass:"secondary"},{id:11,orderId:"#VZ2111",customer:"Diana Kohler",product:"Half Sleeve T-Shirts (Blue)",orderDate:"01 Oct, 2021",amount:"$874",payment:"Visa",status:"Delivered",statusClass:"success"},{id:12,orderId:"#VZ2112",customer:"Alexis Clarke",product:"Noise Evolve Smartwatch",orderDate:"29 Sep, 2021",amount:"$1021",payment:"Mastercard",status:"Cancelled",statusClass:"danger"}],isStatus:null,isPayment:null}},components:{Layout:De.Z,PageHeader:Ie.Z,lottie:We.Z,Multiselect:be.Z,flatPickr:ke.Z},computed:{displayedPosts(){return this.paginate(this.orders)},resultQuery(){if(this.searchQuery){const e=this.searchQuery.toLowerCase();return this.displayedPosts.filter((t=>t.orderId.toLowerCase().includes(e)||t.customer.toLowerCase().includes(e)||t.product.toLowerCase().includes(e)||t.orderDate.toLowerCase().includes(e)||t.amount.toString().toLowerCase().includes(e)||t.payment.toLowerCase().includes(e)||t.status.toLowerCase().includes(e)))}if(null!==this.date){if(null!==this.date)var e=this.date.split(" to ")[0],t=this.date.split(" to ")[1];return this.displayedPosts.filter((a=>new Date(a.orderDate.slice(0,12))>=new Date(e)&&new Date(a.orderDate.slice(0,12))<=new Date(t)?a:null))}return null!==this.status||null!==this.value?this.displayedPosts.filter((e=>{if(null==this.status||null==this.value)return this.status===e.status||this.value===e.payment?e:null;if(this.status===e.status){if(this.value===e.payment)return e;if("All"==this.value)return e}else{if("All"==this.value&&"All"==this.status)return e;if("All"==this.status&&this.value===e.payment)return e}})):this.displayedPosts}},watch:{},created(){this.setPages()},filters:{trimWords(e){return e.split(" ").splice(0,20).join(" ")+"..."}},beforeMount(){Se.Z.get("https://api-node.themesbrand.website/apps/order").then((e=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.orders=[],e.data.data.forEach((e=>{var a=new Date(e.orderDate);e.orderDate=a.getDate()+" "+t[a.getMonth()]+", "+a.getFullYear(),this.orders.push(e)}))})).catch((e=>{console.log(e)}))},mounted(){var e=document.getElementById("checkAll");e&&(e.onclick=function(){var t=document.querySelectorAll('.form-check-all input[type="checkbox"]');1==e.checked?t.forEach((function(e){e.checked=!0,e.closest("tr").classList.add("table-active"),document.getElementById("remove-actions").style.display="block"})):t.forEach((function(e){e.checked=!1,e.closest("tr").classList.remove("table-active"),document.getElementById("remove-actions").style.display="none"}))});var t=document.querySelectorAll("#orderTable .form-check-input");Array.from(t).forEach((function(e){e.addEventListener("change",(function(e){var t=document.querySelectorAll("#orderTable .form-check-input:checked").length;e.target.closest("tr").classList.contains("table-active"),document.getElementById("remove-actions").style.display=t>0?"block":"none"}))}))},methods:{onChangeStatus(e){this.isStatus=e},onChangePayment(e){this.isPayment=e},setPages(){let e=Math.ceil(this.orders.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)},paginate(e){let t=this.page,a=this.perPage,l=t*a-a,s=t*a;return e.slice(l,s)},editdata(e){this.editOrderModal=!0;let t=this.orders.findIndex((t=>t.orderId==e.orderId));document.getElementById("edtorderId").value=this.orders[t]._id,document.getElementById("edtcustomername").value=this.orders[t].customer,document.getElementById("edtproductname").value=this.orders[t].product,document.getElementById("edtorderdate").value=this.orders[t].orderDate,document.getElementById("edtamount").value=this.orders[t].amount,document.getElementById("edtpayment").value=this.orders[t].payment,document.getElementById("edtdelivered").value=this.orders[t].status},updateorder(){let e=this.orders.findIndex((e=>e._id==document.getElementById("edtorderId").value));this.orders[e].customer=document.getElementById("edtcustomername").value,this.orders[e].product=document.getElementById("edtproductname").value,this.orders[e].orderDate=document.getElementById("edtorderdate").value,this.orders[e].amount=document.getElementById("edtamount").value,this.orders[e].payment=document.getElementById("edtpayment").value,this.orders[e].status=document.getElementById("edtdelivered").value,"Pending"==this.orders[e].status?this.orders[e].statusClass="warning":"Inprogress"==this.orders[e].status?this.orders[e].statusClass="secondary":"Cancelled"==this.orders[e].status?this.orders[e].statusClass="danger":"Pickups"==this.orders[e].status?this.orders[e].statusClass="info":"Delivered"==this.orders[e].status?this.orders[e].statusClass="success":this.orders[e].statusClass="danger",document.getElementById("edtclosemodal").click(),Se.Z.patch(`https://api-node.themesbrand.website/apps/order/${document.getElementById("edtorderId").value}`,this.orders[e]).then((()=>{})).catch((e=>{console.log(e)}))},deletedata(e){Ce().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#f46a6a",confirmButtonColor:"#34c38f",confirmButtonText:"Yes, delete it!"}).then((t=>{t.value&&(this.orders.splice(this.orders.indexOf(e),1),Se.Z["delete"](`https://api-node.themesbrand.website/apps/order/${e._id}`).then((()=>{})).catch((e=>{console.log(e)})),Ce().fire("Deleted!","Your file has been deleted.","success"))}))},deleteMultiple(){let e=[];var t=document.getElementsByName("chk_child");if(t.forEach((function(t){if(1==t.checked){var a=t.parentNode.parentNode.parentNode,l=a.querySelector(".id a").innerHTML;e.push(l)}})),"undefined"!==typeof e&&e.length>0){if(!confirm("Are you sure you want to delete this?"))return!1;var a=this.orders;e.forEach((function(e){a=a.filter((function(t){return t.orderId!=e}))})),this.orders=a,document.getElementById("checkAll").checked=!1;var l=document.getElementsByName("chk_child");l.forEach((function(e){1==e.checked&&(e.checked=!1,e.closest("tr").classList.remove("table-active"))}))}else Ce().fire({title:"Please select at least one checkbox",confirmButtonClass:"btn btn-info",buttonsStyling:!1,showCloseButton:!0})},addorder(){var e,t=document.getElementById("orderId").value,a=document.getElementById("customername").value,l=document.getElementById("productname").value,s=document.getElementById("orderdate").value,r=document.getElementById("amount").value,o=document.getElementById("payment").value,d=document.getElementById("delivered").value;if(e="Pending"==d?"warning":"Inprogress"==d?"secondary":"Cancelled"==d?"danger":"Pickups"==d?"info":"Delivered"==d?"success":"danger",null!=t&&null!=a&&null!=l&&null!=s&&null!=r&&null!=o&&null!=d){var n={_id:"x",orderId:"#VZ2"+t,customer:a,product:l,orderDate:s,amount:r,payment:o,status:d,statusClass:e};this.orders.unshift(n),Se.Z.post("https://api-node.themesbrand.website/apps/order",n).then((()=>{document.getElementById("addform").reset()})).catch((e=>{console.log(e)}))}document.getElementById("closemodal").click(),document.getElementById("addform").reset()},SearchData(){this.resultQuery,this.date=this.date2,this.status=this.status1,this.value=this.value1},changecategory(e){this.statuscategory=e}}},Ee=a(83744);const Ae=(0,Ee.Z)(Be,[["render",_e]]);var Ve=Ae}}]);
//# sourceMappingURL=6967.a86b1fe1.js.map