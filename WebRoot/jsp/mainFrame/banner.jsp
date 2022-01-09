<%@ page language="java" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>banner.jsp</title>
	<link href="../css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="../jsp/easyui/jquery.easyui.min.js"></script>
	<style type="text/css">
	.userInfoDiv{
	   color: #F4F4F5;/* #273661; */
	    font-family: 微软雅黑;
	    line-height: 28px;
	    padding-left: 30px;
	    font-size: 14px;
	    float: left;
	    width: 600px;
	    border: 0px solid black;
	}
	
	.bottomPage{
		margin-top: 70px;
	    padding: 0px;
	    background-image:linear-gradient(to top,#1E1F1F 0%,#778FA9 100%);
	}
	.button{
		background:url(../jsp/mainFrame/img/logoutButton_n.gif) left top no-repeat;
		width:83px;
		height:23px;
		display:block;
		text-align:center;
		text-decoration:none;
		font-size:13px;
		font-weight:bolder;
		line-height:22px;
		float:right;
		margin:2px 3px;
	}

	.navBtn {
	    color:#F4F4F5 ;/* #273661; */
	    float: right;
	    margin: 4px 10px 4px 4px;
	    font-size: 17px;
	}
	</style>
	<script type="text/javascript">
	  var flag = "${flag}";
	  var type = "${type}";
	  var userflag = "${userflag}";
	  var backUrl = "";
  	  $(function(){
  	 
  	  })
	</script>
</HEAD>
<BODY class="bannerPage" style="margin: 0px">
	<div id="bannerDiv">
		<div id ="divBanner" style="background:url(../jsp/mainFrame/img/lhzzxdxljczcpt.jpg);font-size:30px;font-weight:bolder;color:white;padding-left:0px;height:70px;">
		</div>
	</div>
	<div class="" style="margin-top: -70px;">
	</div>
	<div class="bottomPage" style="width: 100%;height: 28px">
		<a href="loginOut" target="_top" title="退出系统" id="loginOut">
			<span class="navBtn" ><i class="fa fa-power-off" ></i></span> 
		</a>
		
		<div class="userInfoDiv">
			<i class="fa fa-user-circle-o" aria-hidden="true"></i> 
			登录用户：<b>${CURRENT_USER.userName}</b>
		</div>
	</div>
	
</BODY>
</html>
