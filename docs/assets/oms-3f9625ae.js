import{j as n,_ as V,k as R,o as c,c as g,a as s,e as p,b as l,w as d,E as U,m as L,n as W,q as m,i as N,s as P,u as v,v as C}from"./index-ee16fe4a.js";const T=e=>n.request({url:"/mall/oms-order-return-apply/add",method:"post",data:e}),y=e=>n.request({method:"get",url:"/mall/oms-order-return-apply/del/"+e.id}),k=e=>n.request({url:"/mall/oms-order-return-apply/edit",method:"post",data:e}),A=e=>n.request({url:"/mall/oms-order-return-apply/page",method:"post",data:e}),E=R({data(){return{topics:[],page:{current:0,size:10},oms:{companyAddressId:0,createTime:0,description:"",handleMan:0,handleNote:"",handleTime:"",id:"",memberUsername:"",orderId:0,orderSn:"",productAttr:"",productBrand:"",productCount:"",productName:0,productPic:"",productPrice:"",productRealPrice:"",proofPics:"",reason:0,receiveMan:"",receiveNote:"",receiveTime:"",returnAmount:0,returnName:"",returnName:"",status:""},dialogFormVisible:!1,formLabelWidth:70,dialogVisible:!1,choiceRow:{}}},mounted(){this.getPage()},methods:{del(e){y({id:e}).then(o=>{this.getPage()})},save(){this.choiceRow.id==0?T(this.choiceRow).then(e=>{this.dialogFormVisible=!1,this.getPage()}):k(this.choiceRow).then(e=>{this.dialogFormVisible=!1,this.getPage()})},handleEdit(e,o){this.choiceRow=o,this.dialogFormVisible=!0},toAdd(){this.choiceRow=this.oms,this.dialogFormVisible=!0},getPage(){A(this.page).then(e=>{console.log("收到的数据:"+JSON.stringify(e)),this.topics=e.data.page.records,console.log("----------------"+JSON.stringify(this.topics[0]))})}}}),F={class:""},I={class:"tools"},$={class:"dialog-footer"};function B(e,o,M,S,q,z){const r=U,u=N,h=L,t=P,i=v,b=C,f=W;return c(),g("div",F,[s("h3",null,[p(e.$slots,"default")]),s("div",I,[l(r,{icon:"Plus",onClick:e.toAdd},null,8,["onClick"])]),p(e.$slots,"header"),l(h,{data:e.topics,style:{width:"100%"}},{default:d(()=>[l(u,{prop:"id",label:"编号",width:"80"}),l(u,{prop:"companyAddressId",label:"收货地址id",width:"180"}),l(u,{prop:"productId",label:"商品id",width:"100"}),l(u,{prop:"createTime",label:"创建时间",width:"100"}),l(u,{prop:"memberUsername",label:"会员用户名",width:"180"}),l(u,{prop:"returnName",label:"退货人姓名",width:"180"}),l(u,{prop:"productName",label:"商品名称",width:"180"}),l(u,{prop:"productBrand",label:"品牌",width:"100"}),l(u,{prop:"productAttr",label:"商品属性",width:"180"}),l(u,{prop:"description",label:"描述",width:"180"}),l(u,{prop:"reason",label:"原因",width:"180"}),l(u,{label:"操作"},{default:d(a=>[l(r,{size:"small",onClick:w=>e.handleEdit(a.$index,a.row)},{default:d(()=>[m("编辑")]),_:2},1032,["onClick"]),l(r,{size:"small",type:"danger",onClick:w=>e.del(a.row.id)},{default:d(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(f,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[26]||(o[26]=a=>e.dialogFormVisible=a),title:"编辑/新建"},{footer:d(()=>[s("span",$,[l(r,{onClick:o[25]||(o[25]=a=>e.dialogFormVisible=!1)},{default:d(()=>[m("取消")]),_:1}),l(r,{type:"primary",onClick:e.save},{default:d(()=>[m(" 保存 ")]),_:1},8,["onClick"])])]),default:d(()=>[l(b,{model:e.choiceRow,rules:e.rules},{default:d(()=>[l(i,{label:"收货地址id","label-width":e.formLabelWidth,prop:"id"},{default:d(()=>[l(t,{modelValue:e.choiceRow.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.choiceRow.id=a),modelModifiers:{number:!0},autocomplete:"off",type:"text"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"申请时间","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.createTime,"onUpdate:modelValue":o[1]||(o[1]=a=>e.choiceRow.createTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"描述","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.createTime,"onUpdate:modelValue":o[2]||(o[2]=a=>e.choiceRow.createTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"处理人员","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.handleMan,"onUpdate:modelValue":o[3]||(o[3]=a=>e.choiceRow.handleMan=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"处理备注","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.handleNote,"onUpdate:modelValue":o[4]||(o[4]=a=>e.choiceRow.handleNote=a),autocomplete:"off",rows:3,type:"textarea"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"处理时间","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.handleTime,"onUpdate:modelValue":o[5]||(o[5]=a=>e.choiceRow.handleTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"会员用户名","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.memberUsername,"onUpdate:modelValue":o[6]||(o[6]=a=>e.choiceRow.memberUsername=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"订单id","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.orderId,"onUpdate:modelValue":o[7]||(o[7]=a=>e.choiceRow.orderId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"订单编号","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.orderSn,"onUpdate:modelValue":o[8]||(o[8]=a=>e.choiceRow.orderSn=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"商品销售属性","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productAttr,"onUpdate:modelValue":o[9]||(o[9]=a=>e.choiceRow.productAttr=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"商品品牌","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productBrand,"onUpdate:modelValue":o[10]||(o[10]=a=>e.choiceRow.productBrand=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"退货数量","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productCount,"onUpdate:modelValue":o[11]||(o[11]=a=>e.choiceRow.productCount=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"退货商品id","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productId,"onUpdate:modelValue":o[12]||(o[12]=a=>e.choiceRow.productId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"商品名称","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productName,"onUpdate:modelValue":o[13]||(o[13]=a=>e.choiceRow.productName=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"商品图片","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productPic,"onUpdate:modelValue":o[14]||(o[14]=a=>e.choiceRow.productPic=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"商品实际支付单价","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.productRealPrice,"onUpdate:modelValue":o[15]||(o[15]=a=>e.choiceRow.productRealPrice=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"凭证图片","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.proofPics,"onUpdate:modelValue":o[16]||(o[16]=a=>e.choiceRow.proofPics=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"原因","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.reason,"onUpdate:modelValue":o[17]||(o[17]=a=>e.choiceRow.reason=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"收货人","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.receiveMan,"onUpdate:modelValue":o[18]||(o[18]=a=>e.choiceRow.receiveMan=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"收货备注","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.receiveNote,"onUpdate:modelValue":o[19]||(o[19]=a=>e.choiceRow.receiveNote=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"收货备注","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.receiveTime,"onUpdate:modelValue":o[20]||(o[20]=a=>e.choiceRow.receiveTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"退款金额","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.returnAmount,"onUpdate:modelValue":o[21]||(o[21]=a=>e.choiceRow.returnAmount=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"退货人姓名","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.returnName,"onUpdate:modelValue":o[22]||(o[22]=a=>e.choiceRow.returnName=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"退货人电话","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.returnPhone,"onUpdate:modelValue":o[23]||(o[23]=a=>e.choiceRow.returnPhone=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"申请状态","label-width":e.formLabelWidth},{default:d(()=>[l(t,{modelValue:e.choiceRow.status,"onUpdate:modelValue":o[24]||(o[24]=a=>e.choiceRow.status=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}const J=V(E,[["render",B]]);export{J as default};
