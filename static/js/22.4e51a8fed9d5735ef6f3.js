webpackJsonp([22],{775:function(t,e,a){a(933);var n=a(10)(a(859),a(981),"data-v-0e6b90d9",null);t.exports=n.exports},859:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(70);e.default={data:function(){return{wareId:"",currPage:1,pageSize:10,total:0,activityList:[{wareId:10001,wareName:"三亚旅拍",status:1},{wareId:10002,wareName:"三亚旅拍",status:0}],filter:{code:"",name:""}}},methods:{formatStatus:function(t){return 1===t.status?"上架":0===t.status?"下架":"未知"},formatUpdateTime:function(t){return t.updateTime&&this.$moment(t.updateTime).format("YYYY-MM-DD HH:mm:ss")},handleSizeChange:function(t){this.pageSize=t},handleCurrentChange:function(t){this.currPage=t},getActivityList:function(){var t=this,e={parentId:this.wareId};(0,n.readWareActivity)(e).then(function(e){console.log(e),"0001"===e.data.code?t.activityList=e.data.result.wareActivityList:t.$message.error(e.data.message)}).catch(function(t){console.log(t)})},handleShelf:function(t){var e=this,a=1===t.status?"下架":"上架",r=1===t.status?0:1;this.$confirm("确定"+a+"该推荐活动？","提示",{type:"warning"}).then(function(){var a={wareId:t.wareId,upDownStatus:r,wareType:2};(0,n.updateWareInfoUpDownStatus)(a).then(function(t){"0001"===t.data.code?(e.$message.success(t.data.message),e.getActivityList()):e.$message.error(t.data.message)}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t),e.$message("取消操作")})}},mounted:function(){this.wareId=parseInt(this.$route.query.wareId),this.wareId&&this.getActivityList()}}},888:function(t,e,a){e=t.exports=a(722)(),e.push([t.i,".el-card[data-v-0e6b90d9]{margin:15px}.el-card__body[data-v-0e6b90d9]{padding:30px}.input-width .el-input[data-v-0e6b90d9]{width:240px}.input-unit[data-v-0e6b90d9]{margin-left:5px;vertical-align:top}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/provider/ware/activityShelfList.vue"],names:[],mappings:"AACA,0BACC,WAAa,CACb,AACD,gCACC,YAAc,CACd,AACD,wCACC,WAAa,CACb,AACD,6BACC,gBAAiB,AACjB,kBAAoB,CACpB",file:"activityShelfList.vue",sourcesContent:["\n.el-card[data-v-0e6b90d9] {\n\tmargin: 15px;\n}\n.el-card__body[data-v-0e6b90d9] {\n\tpadding: 30px;\n}\n.input-width .el-input[data-v-0e6b90d9] {\n\twidth: 240px;\n}\n.input-unit[data-v-0e6b90d9] {\n\tmargin-left: 5px;\n\tvertical-align: top;\n}\n"],sourceRoot:""}])},933:function(t,e,a){var n=a(888);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(723)("792caefc",n,!0)},981:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-row",{staticClass:"toolbar"},[a("el-form",{attrs:{inline:!0,model:t.filter}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"输入活动ID"},model:{value:t.filter.code,callback:function(e){t.filter.code=e},expression:"filter.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"输入活动名称"},model:{value:t.filter.name,callback:function(e){t.filter.name=e},expression:"filter.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary"},on:{click:t.getActivityList}},[t._v("搜索")]),t._v(" "),a("back-button")],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.activityList,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"wareId",label:"活动ID",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"wareName",label:"活动名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"wareDesc",label:"活动描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"180px",formatter:t.formatUpdateTime}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100px",formatter:t.formatStatus}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleShelf(e.row)}}},[t._v("上架")]):t._e(),t._v(" "),1===e.row.status?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleShelf(e.row)}}},[t._v("下架")]):t._e()]}}])})],1),t._v(" "),a("el-row",{staticClass:"toolbar"},[a("el-pagination",{attrs:{"current-page":t.currPage,"page-size":t.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=22.4e51a8fed9d5735ef6f3.js.map