webpackJsonp([55],{1016:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"problem"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.getTabName},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"refunds",label:"退款"}}),e._v(" "),a("el-tab-pane",{attrs:{name:"changeOrders",label:"改单"}}),e._v(" "),a("el-tab-pane",{attrs:{name:"systemFreeze",label:"系统冻结"}}),e._v(" "),a("keep-alive",[a("router-view")],1)],1)],1)},staticRenderFns:[]}},768:function(e,t,a){var r=a(10)(a(852),a(1016),null,null);e.exports=r.exports},852:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeName:"refunds"}},methods:{getTabName:function(e,t){this.$router.push({path:"/provider/order/problem/"+e.name,query:{activeName:this.activeName}})}},mounted:function(){this.$router.push({path:"/provider/order/problem/refunds",query:{activeName:this.activeName}})}}}});
//# sourceMappingURL=55.dab9c52b9485e744093a.js.map