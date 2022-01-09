<%@ page language="java" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String LoginInfo=(String)request.getSession().getAttribute("LoginInfo");
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>用户注册</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
    <script src="<%=path %>/ez_assets/js/jquery.min.js" type="text/javascript"></script>
	<link href="<%=path %>/jsp/css/login/skin13/style.css" rel="stylesheet" type="text/css" />
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

	<script>
		if(self!=top) {
			top.location = self.location;
		}
		function dl(){
		      var username=$("#loginName").val();
		      var password=$("#password").val();
		      if(username==""){
		         alert("填写用户姓名")
		          return false;
		      }
		      if(password==""){
		         alert("填写密码")
		         return false;
		      }
		      $("#form").submit();
	   }
	   $(function(){
	        document.onkeydown=function(event){
			   var e = event||window.event||arguments.callee.callee.arguments[0];
			   if(e&&e.keyCode == 13){
			     dl();
			   }
			}
	   })
	</script>
	<style>
		#cursorMessageDiv {
			position: absolute;
			z-index: 99999;
			border: solid 1px #cc9933;
			background: #ffffcc;
			padding: 2px;
			margin: 0px;
			display: none;
			line-height:150%;
		}
	</style>
  </head>
  
  <body>
    <div class="login_top"></div>
	<div class="login_middle" style="margin-top: 300px;">
		<div class="login_middlecenter">
			<form action="register" class="login_form" method="post" id="form">
					<label style="font-size:30px;color:#fff;display:inline-block;margin:30px">用户登录</label>
				<div class="login_ys">
					<label>账号:</label>
					<input type="text" id="name" name="loginName" value="admin" >
					<input type="hidden" id="id" name="id"  value="2"> 
				</div>
				<div class="login_ys">
					<label>密码:</label>
					<input type="password" id="password" name="password" value="123456" >
				</div>			
				<div class="login_button">
					<input type="submit" id="register_button" value="注&nbsp;&nbsp;&nbsp;&nbsp;册" onfocus="this.blur()"/>
				</div>
				<div class="login_button">
					<input type="button" id="return" value="返&nbsp;&nbsp;&nbsp;&nbsp;回"/>
					<script>
					$(document).ready(function(){
						$('#return').click(function(){
							window.location.href = "login.jsp";
						})
					})
						
					</script>
				</div>
			</form>
			<div class="login_info"><span <%if(LoginInfo == null || LoginInfo.equalsIgnoreCase("ok")){ %> style="display:none;" <%}%>>用户名或密码错误，请重新输入。</span></div>
		</div>
	</div>
	<div class="login_bottom"></div>
  </body>
</html>
