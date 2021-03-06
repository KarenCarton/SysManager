<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<%
		String contextPath = (String)request.getContextPath();
	    request.setAttribute("contextPath",contextPath);
	%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>角色管理</title>
	<script type="text/javascript" src="../js/baseJs.js"></script>
<style>
	@import url("../css/index.css");
</style>
<script type="text/javascript">
	var roleId = "",roleIds = "",functionIds="";
	var setting = {
		    data: {
			    simpleData: { enable: true },
			},
			check: { enable: true },
			callback : {
				onCheck: zTreeOnCheck,
			}
	};
	$(function(){
		//菜单树
	    $.ajax({
	  			url: "<%=contextPath %>/rf/getFunctionTree",
	  	        type:'GET',
	  	        cache:false,
	  	        async:false,
	  	        success:function(data){
	    			$.fn.zTree.init($("#treeCd"), setting, data);
	    			var treeObj = $.fn.zTree.getZTreeObj("treeCd");
					treeObj.expandAll(true);
	  	        }
	    });
	    //角色列表
	    $.ajax({
	  			url: "<%=contextPath %>/rf/getAllRoles",
	  	        type:'POST',
	  	        cache:false,
	  	        async:false,
	  	        success:function(data){
					var $table = $('#roleTable');
				    $table.find('tbody tr').remove();
					var html = '';
					$(data).each(function(i, x) {
					     html += '<tr data-id="' + x.roleId +'" onclick="setBackground(this)">'+
		  	        				'<td class="words-center col-md-1 " style="width:2%;">'+
										'<input type="checkbox" name="checkbox" value="'+x.roleId+'"/>'+
									'</td>'+
						   			'<td class="col-md-1 words-center" style="width:2%;">'+(i+1)+'</td>'+
						   			'<td class="col-md-1 words-center roleName">'+x.roleName+'</td>'+
						   			'<td class="col-md-3 words-center">'+x.info+'</td>'+
					   			'</tr>';
					});
					$table.append(html);
					$('.fixed-thead').tableScroll({className : 'defaultScroll'}).init();
	  	        }
	    });
	    
		//删除
		$("#delete").click(function(){
			if(roleId == null || roleId == ""){
				var alertModal=new top.EzuiModal('danger','请选择某一个角色');
           		alertModal.show();
			}else{
				deleteRole();
				roleId = "";
				roleIds = "";
			}
		});
		//默认列表点击第一行
		$("#roleTable tbody tr:first").trigger("click");
		//查询
		$("#cxtjQ input").keyup(function(){
			$("#roleTable tbody tr").hide();
			$("#roleTable tbody tr td.roleName").filter(":contains('"+$(this).val()+"')")
												.parent().show();
		}).keyup();
	});
	//每个角色对应的功能菜单
	function zTreeCheckByRole(){
   		$.ajax({
   			url: "<%=contextPath %>/rf/getRoleById?id="+roleId,
   	        type:'POST',
   	        cache:false,
   	        async:false,
   	        success:function(data){
   	        	let funList = data.functionList;
				var zTreeObj = $.fn.zTree.getZTreeObj("treeCd");
				var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
				zTreeObj.checkAllNodes(false);
				if(nodes != null && nodes != ""){
					for(let j in nodes){
						if(funList != null && funList != "" && funList.length > 0){
							for(let i in funList){
								if(funList[i].id == nodes[j].id){
									zTreeObj.checkNode(nodes[j], true, true, true);
								}
							}
						}
					}
   	        	}
   	        }
	    }); 
	}
	function zTreeOnCheck(){
		functionIds = "";
		var zTreeObj = $.fn.zTree.getZTreeObj("treeCd");
		var nodes = zTreeObj.getCheckedNodes(true);
		if(nodes != null && nodes != ""){
			for(let i in nodes){
				//let halfcheck = nodes[i].getCheckStatus().half;
				//if(!halfcheck){
					functionIds += nodes[i].id + ",";
				//}
			}
		}
	}
	//保存菜单树ids
	function saveFIds(){
		if(roleId == null || roleId == ""){
			var alertModal=new top.EzuiModal('danger','请选择某一个角色');
       		alertModal.show();
       		return false;
		}
		if(functionIds == null || functionIds == ""){
			var alertModal=new top.EzuiModal('danger','请勾选菜单');
       		alertModal.show();
       		return false;
		}
		$.ajax({
				type:'POST',
				url:"<%=contextPath %>/rf/addRoleFunction?roleId="+roleId+"&functionIds="+functionIds,
				async:false,
				success:function(res){
		        		if(res.state==true){
		                    //添加成功模态框
		                    var alertModal=new top.EzuiModal('success','成功',1000);
		                    alertModal.show();
		                    location.reload();
	             		}else{
          			 		var alertModal=new top.EzuiModal('danger','失败');
              				alertModal.show();
	             		}
				}
		});
		
	}
	// 设置table选中背景颜色
	function setBackground(obj){
		var trs = $(".table_jhList tr");
		for(var i=0; i<trs.length; i++){
			if(trs[i] == obj){
				trs[i].style.background = "#929BA7";
			}else{
				trs[i].style.background = "#5E6E86";
			}
		}
		roleId = $(obj).data("id");
		zTreeCheckByRole();
	}
	/* 添加或修改角色 */
	function editJs(type){
		if(roleId == null || roleId == "" && type != "add"){
			var alertModal=new top.EzuiModal('danger','请选择某一个角色');
       		alertModal.show();
       		return false;
		}
		var url = '<%=contextPath %>/rf/saveOrUpdateRole';
	    var addModal=new EzuiModal();
	    addModal.id="editModalUrl";
        addModal.showCancelButton="true";
	    addModal.size="small";
	    addModal.okEvent=function(){
			     var result = $('#editRoleForm').valid();
			     if(!result){
		         	 var alertModal=new top.EzuiModal('danger','请将信息填写完整');
		             alertModal.show();
			         return false;
			     }
		         var params=$('#editRoleForm').serialize();
	 		 	 $.ajax({
	 					type:'POST',
						url:url,
						async:false,
						data:params,
						success:function(res){
			                if(res.state==true){
			                     //添加成功模态框
			                     var alertModal=new top.EzuiModal('success','成功',1000);
			                     alertModal.show();
			                     location.reload();
	                		 }else{
	                			 var alertModal=new top.EzuiModal('danger','失败');
	                    		 alertModal.show();
	                		 }
						}
				});
	    };
	    if(type == "edit"){
			addModal.title="修改角色";
		    url += '?roleId='+roleId;
	    	addModal.url="<%=contextPath %>/jsp/yhgl/editRole.jsp?roleId="+roleId;
	   		$.ajax({
	   			url: "<%=contextPath %>/rf/getUserRoleByRoleId?roleId="+roleId,
	   	        type:'POST',
	   	        cache:false,
	   	        async:false,
	   	        success:function(data){
	   	        	if(data != null && data != "" && data .length > 0){
				        var alertModal = new EzuiModal();
				        alertModal.content = "角色已关联用户，是否进行修改?";
				        alertModal.mark = "info";
				        alertModal.title = "提示";
				        alertModal.size = "small";
        				alertModal.showCancelButton="true";
				        alertModal.okEvent = function () {
	   				 		addModal.showPage();
				        };
				        alertModal.show();
	   	        	}else{
		   	        	addModal.showPage();
	   	        	}
	   	        }
		    });
	    }else if(type == "add"){
		    addModal.title="添加角色";
	    	addModal.url="<%=contextPath %>/jsp/yhgl/editRole.jsp";
	    	addModal.showPage();
	    }
	}
	function deleteRole(){
		var strUrl = "<%=contextPath %>/user/delete/role?ids=";
		if(roleIds != null && roleIds != ""){
			strUrl += roleIds;
		}else{
			strUrl += roleId;
		}
		alert("111");
		alert(roleId);
		var defaultModal=new top.EzuiModal('info',"确定要删除吗?");  
		defaultModal.showCancelButton="true";
		defaultModal.okEvent=function(){
			$.ajax({
				type:'DELETE',url:strUrl,async:false,
				success:function(res){
				},
				error:function(res){
				},
			});
			//删除后重新加载
            location.reload();
		}
	    defaultModal.show();
	}
	//全选checkbox
	$(document).off('click', '#checkbox_all').on('click', '#checkbox_all', function() {
		var flag = $("#checkbox_all").prop("checked");
		var $role = $("input:checkbox[name=checkbox]");
		roleIds = "";
		if (flag) {
			$role.each(function(i) {
				$(this).prop("checked", true);
				let Id = $(this).val();
	      		roleIds += Id + ",";
			});
		}else if (flag == false) {
			$role.each(function() {
				$(this).prop("checked", false);
			});
		}
	});
	$(document).off('click', 'input:checkbox[name=checkbox]').on('click', 'input:checkbox[name=checkbox]', function() {
		var $role = $("input:checkbox[name=checkbox]");
		roleIds = "";
		$role.each(function() {
			let flag = $(this).prop("checked");
			if(flag){
				let Id = $(this).val();
	      		roleIds += Id + ",";
			}
		});
	});
</script>
</head>
<body>
	<div class="row">
		<div class="col-md-9">
			<div class="bigbox box-primary portlet light contentheight">
				<div class="portlet-title">
			        <div class="caption">
			            <span class="caption-subject font-blue sbold ">
			                <i class="fa fa-bell"></i>&nbsp;&nbsp;角色管理</span>
			        </div>
					<!-- <a class="btsmall twosmall" href="#" id="delete"><span class="bianji">删除</span></a>
			 	    <a class="btsmall twosmall" href="javascript:editJs('edit')"><span class="bianji">修改</span></a>
	                <a class="btsmall twosmall" href="javascript:editJs('add')"><span class="bianji">添加</span></a> -->
	                
	                <a class="a_Btn_green" href="#" id="delete"><i class="fa fa-remove"></i> 删除</a>
                	<a class="a_Btn_green" href="javascript:editJs('edit')"><i class="fa fa-edit"></i> 修改</a>
                	<a class="a_Btn_green" href="javascript:editJs('add')"><i class="fa fa-plus-circle"></i> 添加</a>
	                
			    </div>
                <div style="display: inline-block;float: left;">
	                <form id="cxtjQ" style="display: inline-flex;align-items: center;padding-left: 10px;">
	                	  <label class="control-label">角色名称：</label>
	                	  <input type="text" class="form-control" name="jsmc" value=""/>
	                </form>
	            </div>
		        <div style="height: calc(100vh - 42px);">
		            <div class="table-scrollable margin-top-0">
						<table class="table table-striped table-bordered table-advance table-hover tablewrap fixed-thead table_jhList" id="roleTable">
							<thead><tr>
								<th class="words-center col-md-1 " style="width:2%;">
									<input type="checkbox" id="checkbox_all"/>
								</th>
								<th class="words-center col-md-1 " style="width:2%;">序号</th>
								<th class="words-center col-md-1 ">角色名称</th>
								<th class="words-center col-md-3 ">备注</th>
							</tr></thead>
							<tbody style="height: calc(100vh - 113px);"></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="bigbox box-primary portlet light contentheight" style="height: calc(100vh);">
				<div class="portlet-title">
			        <div class="caption">
			            <span class="caption-subject font-blue sbold ">
			                <i class="fa fa-bell"></i>&nbsp;&nbsp;功能操作权限</span>
			        </div>
			    </div>
		        <div style="overflow: auto;height: calc(100vh - 80px);padding-left: 15px;">
		             <ul id="treeCd" class="ztree"></ul>
				</div>
	         	<div class="buttonBottom">
                	<a class="a_Btn_green" href="#" onclick="zTreeCheckByRole()"><i class="fa fa-times-circle"></i> 取消</a>
	                <a class="a_Btn_green" href="#" onclick="saveFIds()"><i class="fa fa-check"></i> 确定</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>