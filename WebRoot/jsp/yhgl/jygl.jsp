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
	<title>用户管理</title>
	<script type="text/javascript" src="../js/baseJs.js"></script>
    <script src="<%=contextPath %>/ez_assets/js/ui/ezuiDialog.js" type="text/javascript"></script>
    <script src="<%=contextPath %>/ez_assets/js/form/ezuiFileinput.js" type="text/javascript"></script>	
<style>
	@import url("../css/index.css");
	@import url("../xljh/css/xljh.css");
</style>
<script type="text/javascript">
	
</script>
</head>
<body>
	<div class="row">
		<div class="col-md-2">
			<div class="bigbox box-primary portlet light contentheight">
				<div class="portlet-title">
			        <div class="caption">
			            <span class="caption-subject font-blue sbold ">
			                <i class="fa fa-bell"></i>&nbsp;&nbsp;用户</span>
			        </div>
			    </div>
		        <div style="overflow: auto;height: calc(100vh - 42px);">
		             <ul id="treeTeacher" class="ztree"></ul>
				</div>
			</div>
		</div>
		<div class="col-md-10">
			<div class="bigbox box-primary portlet light contentheight">
				<div class="portlet-title">
			        <div class="caption">
			            <span class="caption-subject font-blue sbold ">
			                <i class="fa fa-bell"></i>&nbsp;&nbsp;用户列表</span>
			        </div>
			    </div>
		        <div style="overflow: auto;height: calc(100vh - 42px);">
		            <div class="table-scrollable margin-top-0">
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="form-group" id="ss">
	    <form action="#" id="upForm">
	         <input type="hidden" name="jxz" id="jxzWindow" value="" style="float: right"/>
		     <div class="col-md-3">
			     <div class="fileinput fileinput-new" data-provides="fileinput" style="margin: 20px 20px;">
			            <div class="input-group input-large">
			                <div class="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
			                   <i class="fa fa-file fileinput-exists"></i>&nbsp;
			                    <span class="fileinput-filename" id="spanFile" style="width: 85%;"> </span>
			                </div>
			               <span class="input-group-addon btn default btn-file">
			                    <span class="fileinput-new"> 选择文件</span>
			                    <span class="fileinput-exists">替换文件</span>
			                    <input type="file" name="upExcel" onchange="selectfile(this)" multiple="multiple"> </span>
			                  <a href="#" class="input-group-addon btn blue fileinput-exists" data-dismiss="fileinput">移除文件</a>
			            </div>
			        </div>
	   		 </div>
	    </form>
	</div>
	
</body>
</html>