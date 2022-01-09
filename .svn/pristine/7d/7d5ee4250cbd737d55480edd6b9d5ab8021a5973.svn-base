// JavaScript Document

/*调整宽高*/
$("#wrap").css({width:$(window).width()});
$("#wrap").css({height:$(window).height()});
$(window).resize(function(){
	$("#wrap").css({width:$(window).width()});
	$("#wrap").css({height:$(window).height()});
});


var the_val;
$(".right input[type='text']").focus(function(){
	$(this).css({border:"1px solid #6ac2ee"});
	$(this).val("");
});

$(".right input[type='text']").blur(function(){
	$(this).css({border:"1px solid #bdc9d1"});
});

/*$("#loginBtn").click(function(){
	location.href="default.html";
	return false;	
});*/

/*div 遮罩层*/

/*外黑框大小控制*/
$("#box_wrap").css("height",$(window).height()*3+"px").css("margin-top",-3*$(window).height()/2+"px");

$(window).resize(function(){
	$("#box_wrap").css("height",$(window).height()*4+"px").css("margin-top",-2*$(window).height()+"px");
});

/*修改初始密码的“关闭”按钮*/
$(".to_exit").click(function(){
	$("#box_wrap").slideUp(1000);
	$("#box_wrap_the").slideUp(1000);
	$(".pass_box").slideUp(1000);
	$("#newPasswd").val("");
	$("#newPasswd2").val("");
});

/*修改初始密码的“取消”按钮*/
$("#cancel_to").click(function(){
	$("#box_wrap").slideUp(1000);
	$("#box_wrap_the").slideUp(1000);
	$(".pass_box").slideUp(1000);
});

/*$("#yes_to").click(function(){
	$("#box_wrap").slideUp(1000);
	$("#box_wrap_the").slideUp(1000);
	$(".pass_box").slideUp(1000);
	return false;
});*/