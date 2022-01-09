<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String contextPath = request.getContextPath();
	request.setAttribute("contextPath",contextPath);
%>
<style>
#editRoleForm{
    padding-top: 10px;
}
#editRoleForm.form-horizontal .control-label{
	padding-top: 0.5rem;
}

</style>
<script type="text/javascript">
	var roleId_new = "${param.roleId }";
	$(function(){
		$('#editRoleForm').ezValidator();
		if(roleId_new != null && roleId_new !=""){
	   		$.ajax({
	   			url: "<%=contextPath %>/rf/getRoleById?id="+roleId_new,
	   	        type:'POST',
	   	        cache:false,
	   	        async:false,
	   	        success:function(data){
	   	        	$("#roleName").val(data.roleName);
	   	        	$("#info").val(data.info);
	   	        }
		    }); 
		}
	});
</script>
<form action="#"  class="form-horizontal" id="editRoleForm">
	 <div class="row">
	 	 <div class="col-md-12 padding-right-8">
			   <div class="form-group margin-top-10">
		           <label class="control-label col-md-4">角色名称：<span class="required"> * </span></label>
		           <div class="col-md-8">
		               <div class="input-icon right">
		                   <input id="roleName" type="text" class="form-control" name="roleName" value="" 
		                   	onkeyup="value=value.replace(/[<#@$%&>!~\^*' ]/g,'')" data-validate="{required:true,maxlength:100}"/>
		               </div>
		           </div>
		       </div>
		       <div class="form-group margin-top-10">
		           <label class="control-label col-md-4">备注：</label>
		           <div class="col-md-8">
		               <div class="input-icon right">
				   			<textarea id='info' name='info' data-validate="{required:false,maxlength:1000}" class="form-control" rows="3"></textarea>
		               </div>
		           </div>
		       </div>
		   </div>
	  </div>                 
</form>