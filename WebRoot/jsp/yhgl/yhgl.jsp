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
<link href="<%=contextPath %>/ez_assets/css/ezui.css" rel="stylesheet" type="text/css" />
<link href="<%=contextPath %>/ez_assets/css/skin/grayblue/style.css" rel="stylesheet" type="text/css" />
<script src="<%=contextPath %>/ez_assets/js/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<%=contextPath %>/jsp/js/common.js"></script>
<script src="<%=contextPath %>/ez_assets/js/bootstrap.js" type="text/javascript"></script>
<script src="<%=contextPath %>/ez_assets/js/ezui.js" type="text/javascript"></script>
<style>
	body{
		overflow: hidden;
	}
	#ultabs41{
		height: 38px;
	}
	#ultabs41 > li{
		position: relative;
	    display: block;
	}
	#ultabs41 > li > a {
		padding: 5px 10px;
		height: 36px;
	    color: white;
	    font-size: 18px;
	    width: 105px;
	    text-align: center;
	    border-radius: 5px 5px 5px 5px;
	}
	#ultabs41 > li > a:hover{
		background: #448ccc;
	}

</style>

</head>
<body>
	 <!-- 标签页导航开始tabbable-line为底部划线的样式 -->
 <div class="tabbable-custom">
 <!-- 标签页导航开始 -->
   <ul class="nav nav-tabs" id="ultabs41">
       <li class="active" onclick="changeIframe1();">
           <a href="#tab_3_1" data-toggle="tab">用户管理</a>
        </li>
       <li  onclick="changeIframe2();">
           <a href="#tab_3_3" data-toggle="tab">角色管理</a>
       </li>
       <li  onclick="changeIframe3();">
           <a href="#tab_3_3" data-toggle="tab">机构管理</a>
       </li>
   </ul>
   <div class="tab-content"  style="width: 100%;border: none;padding: 0px;" id="tab_3_1">
        <iframe width="100%" height="100%" frameborder="0" allowtransparency="true" name="iframeChild0" id="iframeChild00" 
        		src="../yhgl/jygl.jsp"></iframe> 
   </div> 
 </div>
	
</body>

<script type="text/javascript">
$(function(){
	window.onresize = onWindowSize;
	onWindowSize();
});
function onWindowSize(){
	var parentheight=document.documentElement.clientHeight-38;
	$(".tab-content").height(parentheight+'px');
}
//教员管理
function changeIframe1(){
    var banner=encodeURI(encodeURI("教员管理"));
    $("#iframeChild00").attr("src","../yhgl/jygl.jsp");
};
//角色管理
function changeIframe2(){
    var banner=encodeURI(encodeURI("角色管理"));
    $("#iframeChild00").attr("src","../yhgl/jsgl.jsp");
};
function changeIframe3(){
    var banner=encodeURI(encodeURI("机构管理"));
    $("#iframeChild00").attr("src","../yhgl/jggl.jsp");
};
</script>
</html>
