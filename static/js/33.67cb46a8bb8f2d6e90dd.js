webpackJsonp([33],{1016:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("h1",[t._v("悦视觉平台确认单")]),t._v(" "),a("el-row",{staticClass:"order-info"},[a("el-col",{attrs:{span:10}},[t._v("注：相同客户订单号确认单已最后一次为准")]),t._v(" "),a("el-col",{attrs:{span:7}},[t._v("客户订单号："),a("span",{domProps:{textContent:t._s(t.confirmInfo.orderNumber)}})])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("table",{staticClass:"company-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("To")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("分销商公司名称")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("联系人：")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("联系电话：")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("传真")]),t._v(" "),a("td")])]),t._v(" "),a("tfoot")],1)]),t._v(" "),a("el-col",{attrs:{span:11,offset:2}},[a("table",{staticClass:"company-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("From")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("平台公司名称")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("联系人：")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("联系电话：")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("传真")]),t._v(" "),a("td")])]),t._v(" "),a("tfoot")],1)])],1),t._v(" "),a("h4",[t._v("客户信息")]),t._v(" "),a("el-table",{staticClass:"traveler-table",staticStyle:{width:"100%"},attrs:{data:t.confirmInfo.traveler,border:""}},[a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",align:"center",label:"性别",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",align:"center",label:"类型",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"birthday",align:"center",label:"生日"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nationality",align:"center",label:"国籍"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeOfCertificate",align:"center",width:"140",label:"出行人证件类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"licenseNumber",align:"center",label:"证件号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"validPeriod",align:"center",label:"证件有效期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",align:"center",label:"电话"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.confirmInfo.pInfo,border:""}},[a("el-table-column",{attrs:{prop:"scheduledItems",align:"center",label:"预定项目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"confirmState",align:"center",label:"确认状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"person",align:"center",label:"份数/人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dateStart",align:"center",label:"出发日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dateEnd",align:"center",label:"返回日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"卖价"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("成人:"+t._s(parseInt(e.row.adultPrice).toFixed(2)))]),t._v(" "),a("p",[t._v("儿童:"+t._s(parseInt(e.row.childrenPrice).toFixed(2)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"totalPrice",align:"center",label:"卖价总价"}})],1),t._v(" "),a("h4",[t._v("备注")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:6}})],1)],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"print"},[a("el-button",{attrs:{type:"primary",size:"large"}},[t._v("打印")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"large"}},[t._v("下载")])],1)],1)],1)},staticRenderFns:[]}},753:function(t,e,a){a(953);var r=a(10)(a(837),a(1016),"data-v-680090f8",null);t.exports=r.exports},837:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{confirmInfo:{orderNumber:"123456",traveler:[{name:"LVLINLIN(吕琳琳)",sex:"女",type:"成人",birthday:"1982-12-07",nationality:"中国大陆",typeOfCertificate:"护照",licenseNumber:"G50530240",validPeriod:"2026-05-31",phone:"13911999253"}],pInfo:[{scheduledItems:"旅拍写真·【巴厘岛旅拍婚纱照2日1晚游】 赠送后期产品包邮、及拍摄用车-巴厘岛套餐A",confirmState:"已确认",person:"2人",dateStart:"2017-06-09",dateEnd:"2017-06-10",adultPrice:"4780",childrenPrice:"4780",totalPrice:"9560.00"}]}}}}},908:function(t,e,a){e=t.exports=a(721)(),e.push([t.i,"h1[data-v-680090f8]{text-align:center}.order-info[data-v-680090f8]{margin-bottom:20px}.company-table[data-v-680090f8]{border-collapse:collapse;border:1px solid #dfe6ec;width:100%}.company-table tr[data-v-680090f8]{background:#fff;line-height:30px}.company-table td[data-v-680090f8],.company-table th[data-v-680090f8]{border:1px solid #dfe6ec;padding:10px}.company-table tr td[data-v-680090f8]:first-child{width:180px;text-align:center}.traveler-table[data-v-680090f8]{margin-bottom:20px}.print[data-v-680090f8]{text-align:center;margin-top:20px}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/distributor/order/confirmSheet.vue"],names:[],mappings:"AACA,oBACC,iBAAmB,CACnB,AACD,6BACC,kBAAmB,CACnB,AACD,gCACC,yBAAyB,AACzB,yBAA0B,AAC1B,UAAW,CACX,AACD,mCACC,gBAAiB,AACjB,gBAAkB,CAClB,AACD,sEACI,yBAA0B,AAC1B,YAAc,CACjB,AACD,kDACC,YAAY,AACZ,iBAAmB,CACnB,AACD,iCACC,kBAAmB,CACnB,AACD,wBACC,kBAAmB,AACnB,eAAgB,CAChB",file:"confirmSheet.vue",sourcesContent:["\nh1[data-v-680090f8]{\n\ttext-align: center;\n}\n.order-info[data-v-680090f8]{\n\tmargin-bottom:20px;\n}\n.company-table[data-v-680090f8]{\n\tborder-collapse:collapse;\n\tborder: 1px solid #dfe6ec;\n\twidth:100%;\n}\n.company-table tr[data-v-680090f8]{\n\tbackground: #fff;\n\tline-height: 30px;\n}\n.company-table th[data-v-680090f8],.company-table td[data-v-680090f8]{\n    border: 1px solid #dfe6ec;\n    padding: 10px;\n}\n.company-table tr td[data-v-680090f8]:first-child{\n\twidth:180px;\n\ttext-align: center;\n}\n.traveler-table[data-v-680090f8]{\n\tmargin-bottom:20px;\n}\n.print[data-v-680090f8]{\n\ttext-align: center;\n\tmargin-top:20px;\n}\n"],sourceRoot:""}])},953:function(t,e,a){var r=a(908);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(722)("71de947c",r,!0)}});
//# sourceMappingURL=33.67cb46a8bb8f2d6e90dd.js.map