<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String contextPath = (String)request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<base />
	<script src="<%=contextPath %>/jsp/js/baseJs.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=contextPath %>/jsp/mainFrame/script/mlyj.js"></script>
	<title>系统管理</title>
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<style type="text/css">
		.header{
			left: 0px;
			top: 0px;
		}
		iframe{
			width: 100%;
			height: 100%;
			border: none;
		}
		.topMap{
		    /* height: 835px; */
		    /* height: 87%; */
		    height: calc(100% - 140px);
		    width: 50%;
		    position: absolute;
		    right: 0px;
    		top: 98px;
   		    padding-right: 0.6rem;
		}
	</style>
</head>
<body>
	<div class="header" style="height: 98px;width:100%">
		<iframe name="bannerFrame" src="getBanner?flag=index&type=dk"></iframe>
	</div>
	<div class="maincontent box" style="height: calc(100vh - 129px);width:100%;">
		<div class="box-center">
			<iframe name="workFrame" src="../jsp/mainFrame/indexGlobal_jczc.jsp?userflag=${userflag }"></iframe>
		</div>
	</div>
	<div class="footer" style="float: left;height: 31px;width:100%">
		<iframe name="bottomFrame" src="../jsp/mainFrame/bottom.jsp"></iframe>
	</div>
	
<script type="text/javascript">
</script>
</body>
</html>
