// JavaScript Document

$(".the_add_get").css({width:$(window).width()-15});

/*select 选择部门、角色*/
var select_value1;
var select_value2;
$("select").css({opacity:"0"});

$("select").each(function() {
    select_value2 = $(this).find("option:selected").text();
	var index = select_value2.indexOf("--------");
	var index2 = select_value2.indexOf("----");
	if(index >= 0){
		select_value2 = select_value2.substring(index + 8);
	}else{
		select_value2 = select_value2.substring(index2 + 4);
	}	

    select_value2 = select_value2.length > 18 ? select_value2.substring(0, 18) + "..." : select_value2;
    //印章、人员页面“隶属部门”
    $(this).next(".the_div_toa").html(select_value2);
    //人员页面“用户角色”
    $(this).next(".selRole").html(select_value2);
    //人员页面“认证类型”
    $(this).next(".selAuthType").html(select_value2);
    
    select_value2 = select_value2.length > 25 ? select_value2.substring(0, 25) + "..." : select_value2;
    //各个列表页面 多条件查询中的“隶属部门”
    $(this).next(".the_div_toa2").html(select_value2);
    
    select_value2 = select_value2.length > 50 ? select_value2.substring(0, 50) + "..." : select_value2;
    //选择签章人列表页面中的“部门名称”
    $(this).next(".the_div_toa5").html(select_value2);
    //选择证书列表页面中的“USBKey序列号”
    $(this).next(".the_div_toa6").html(select_value2);
});

$("select").click(function(){
    select_value1 = $(this).find("option:selected").text();
	var index = select_value1.indexOf("--------");
	var index2 = select_value1.indexOf("----");
	if(index >= 0){
		select_value1 = select_value1.substring(index + 8);
	}else{
		select_value1 = select_value1.substring(index2 + 4);
	}
    select_value1 = select_value1.length > 25 ? select_value1.substring(0, 25) + "..." : select_value1;
     //印章、人员页面“隶属部门”
    //$(this).next(".the_div_toa").html(select_value1);
	//各个列表页面 多条件查询中的“隶属部门”
	$(this).next(".the_div_toa2").html(select_value1);
});

/*列表页面的“操作类型”*/
$("#optype").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa3").html(select_value1);
});
/*列表页面的“用户角色”*/
$("#roleId").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa3").html(select_value1);
});

/*列表页面的“签章方式”*/
$("#signMethodId").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa4").html(select_value1);
});

/*列表页面的“印章状态”*/
$("#status").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa4").html(select_value1);
});

/*申请证书 页面的"所在省份”*/
$("#s1").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa7").html(select_value1);
});

/*申请证书 页面的"所在城市*/
$("#s2").click(function(){
    select_value1 = $(this).find("option:selected").text();
	//列表页面 多条件查询中的“操作类型”
	$(this).next(".the_div_toa8").html(select_value1);
});

/*selset 性别*/
function stopPropagation(e) {
	if (e.stopPropagation) 
		e.stopPropagation();
	else 
		e.cancelBubble = true;
	}
	
	$(document).bind('click',function(){
		$('.select_way').children("ul").css('display','none');
	});
	
	$('.select_way').bind('click',function(e){
		$(this).children("ul").slideToggle(0);
		$('.select_way').not(this).children("ul").fadeOut(0);
		stopPropagation(e);
});

var select_value;
$(".select_way").children("ul").children("li").click(function(){
	select_value=$(this).text().substring(0,14);
	$(this).parent("ul").siblings("input").val(select_value);
});

$(".select_way").children("ul").children("li").hover(function(){
		$(this).css({width:$(this).parent("ul").width()-40});
		$(this).css({background:"#f1f7fa"});
		if($(this).parent("ul").width()>=900){$(this).parent("ul").css({width:"900px",overflow:"auto"});}else{
			$(this).parent("ul").css({width:"auto",overflow:"hidden"});
		}
	},function(){
		$(this).css({background:"#fff"});
});
$(".select_way").children("input").click(function(){
	$(this).blur();	
});



$("#box_wrap").css({opacity:"0.3"});

/*印章“认证类型”*/
$('input[type="radio"].the05_changc_01').css({opacity:"0"});
$('input[type="radio"].the05_changc_02').css({opacity:"0"});
$('.the_input_div input[type="checkbox"]').css({opacity:"0"});

/*角色管理  弹窗中的checkbox*/
$('input[type="radio"].the_changc_01').css({opacity:"0"});
$('input[type="radio"].the_changc_02').css({opacity:"0"});
$('input[type="radio"].the_changc_03').css({opacity:"0"});

$('.upload_box .file').css({opacity:"0"});



/*头部弹小窗口*/
$("#pop_the").click(function(){
	$("#pop_the_to_top").fadeToggle(300);	
});
function searchAll(){
	$("#pop_the_to").slideToggle();
}


function fadeOutAll(){
	$("#pop_the_to_top").fadeOut(0);
}



$("#info_to").click(function(){
	$("#content").children("li").fadeOut(0);
	$(".content_li_02").fadeIn(0);
});

 
$(".c_li_06_wrap").children("li").each(function(){
	$(this).children("i").children("a").eq(0).click(function(){
	$(".c_li_06_wrap").fadeOut(0);
	$(".content_li_06").children("h4").fadeOut(0);
	$(".content_li_06").children("h3").eq(0).fadeOut(0);
	$(".content_li_06").children("h3").eq(1).fadeIn(0);
	
	$(".c_li_06_wrap_second").fadeIn(0);
	$(".c_li_06_wrap_second_02").fadeIn(0);
	$(".c_li_06_wrap_second_03").fadeIn(0);
	
	$(".li_06_add_the").fadeIn(0);
	$(".li_06_add_the_2").fadeIn(0);
	$(".li_06_add_the_3").fadeIn(0);
	$(".li_06_add_the_4").fadeIn(0);	
	});
});

/*待批印章--新建*/
$(".content_add_05").click(function(){
	
	window.location.href="add_dlpi.html";
	parent.frames['the_top'].fadeOutAll();
});

$(".content_add_06").click(function(){

window.location.href = "add_dlpi.html";
	parent.frames['the_top'].fadeOutAll();

});


/*05——删除*/
/*$(".c_li_06_wrap").children("li").each(function(){
	$(this).children("i").children("a").eq(2).click(function(){
		$(this).parent("i").parent("li").slideUp(1000,function(){
			$(this).remove();
		});	
	});
});*/







/*05*/
$(".c_li_05_wrap").children("li").each(function(){
	$(this).children("i").children("a").eq(0).click(function(){
		$(".c_li_05_wrap").fadeOut(0);
		$(".content_li_05").children("h4").fadeOut(0);
		$(".content_li_05").children("h3").eq(0).fadeOut(0);
		$(".content_li_05").children("h3").eq(1).fadeIn(0);
		
	});	
});



/*05——删除*/
/*$(".c_li_05_wrap").children("li").each(function(){
	$(this).children("i").children("a").eq(1).click(function(){
		$(this).parent("i").parent("li").slideUp(1000,function(){
			$(this).remove();
			if($(".c_li_05_wrap").children("li:gt(1)").length=="0"){$(".content_li_05").children("h4").eq(0).fadeOut(0);}
		});	
	});
});*/

/*05——上传图片*/
$(".the_goto_img").eq(0).click(function(){
	$("#box_wrap").fadeIn(0);
	$(".upload_box").fadeIn(0);
});

$(".upload_to_exit_01").click(function(){
	$("#box_wrap").fadeOut(0);	
	$(".upload_box").fadeOut(0);
});

/*$(".upload_to").click(function(){
	$("#box_wrap").fadeOut(0);	
	$(".upload_box").fadeOut(0);
});*/






/*添加人员
$(".add_people").click(function(){
	window.location.href="add_people.html";
	top.frames['the_top'].fadeOutAll();
});*/


/*左侧栏切换*/
var side_i;
var side_num;
var side_ii;
$(".sidebar_menu").children("li").children("strong").click(function(){
	$(this).siblings("ul").slideToggle(600,function(){$(window).trigger("resize");});
	$(this).children("span").children("img").eq(0).slideToggle(400);
	$(this).children("span").children("img").eq(1).slideToggle(400);
});


$(".scrollbar").hide(0);
$("#scrollbar1").hover(function(){
	if($(".sidebar_menu").height()<=$(window).height()){}
	else{
		$(".scrollbar").show(0);/*,function(){$(".thumb").trigger("mouseup");});*/
		$(".thumb").trigger("mouseup");
	}
	
},function(){
	$(".scrollbar").hide(0);
	/*$(".thumb").trigger("mouseup");*/
});

$(".thumb").mouseup(function(){});



$(".sidebar_menu li ul li a").click(function(){
	$(".sidebar_menu li ul li a").removeClass("current_a");	
	$(this).addClass("current_a");
	$(".sidebar_menu li").removeClass("current_li");	
	$(this).parent("li").parents("ul").parents("li").addClass("current_li");
	
	parent.frames['the_top'].fadeOutAll();
	
	
	
	side_num=$(this).parent("li").parent("ul").parent("li").index();
	side_ii=$(this).parent("li").index();
	switch(side_num){
		case 0: side_i=side_ii;
				$(".menu_head").children("li").eq(0).children("a").addClass("current_thea");
				$(".menu_head").children("li").eq(0).children("a").parent("li").siblings("li").children("a").removeClass("current_thea");	

				break;
		case 1: 
				side_i=side_ii+4;
				$(".menu_head").children("li").eq(1).children("a").addClass("current_thea");
				$(".menu_head").children("li").eq(1).children("a").parent("li").siblings("li").children("a").removeClass("current_thea");
		
				break;
		case 2: side_i=side_ii+6;
				$(".menu_head").children("li").eq(3).children("a").addClass("current_thea");
				$(".menu_head").children("li").eq(3).children("a").parent("li").siblings("li").children("a").removeClass("current_thea");
				
				break;
		case 3: side_i=side_ii+8;
		
				$(".menu_head").children("li").eq(2).children("a").addClass("current_thea");
				$(".menu_head").children("li").eq(2).children("a").parent("li").siblings("li").children("a").removeClass("current_thea");
		
				break;
		case 4: side_i=side_ii+11;
		
				$(".menu_head").children("li").children("a").removeClass("current_thea");
				
				break;		
	}	

});


$(".viewport").css({height:$(window).height()});
$(".overview").css({height:$(".sidebar_menu").height()});
$(window).resize(function(){
	$(".viewport").css({height:$(window).height()});
	$(".overview").css({height:$(".sidebar_menu").height()});
	if($(".sidebar_menu").height()<=$(window).height()){
		$(".scrollbar").hide(0);
		$(".overview").css({height:$(window).height()});	
	}else{
		$(".scrollbar").show(0);
		}
	$(".the_add_get").css({width:$(window).width()-15});
})






/*内容宽高调整*/
function resize_content(){
/*$("#wrap").css({height:$(window).height()});	*/

	$(".c_li_07_wrap_left").css({height:$(window).height()-69});
	$(".c_li_07_wrap_right").css({height:$(window).height()-69});
	
	
	$(".content_li_01").css({height:$(window).height(),overflow:"auto"});
	$(".content_li_02").css({height:$(window).height(),overflow:"auto"});
	
//	if($(".c_li_03_wrap").height()>=($(window).height()-69-160)){
//			$(".c_li_03_wrap").css({height:$(window).height()-69-120,overflow:"auto"});
//		}else{
//			$(".c_li_03_wrap").css({height:"auto",overflow:"auto"});
	//	}
	$(".c_li_03_wrap").css({ height: $(window).height() - 69 - 120, overflow: "auto" });
	
	
	$(".content_li_04").css({height:$(window).height(),overflow:"auto"});
	
	
	
//	if($(".c_li_05_wrap").height()>=($(window).height()-69-60)){
//			$(".c_li_05_wrap").css({height:$(window).height()-69-60,overflow:"auto"});
//		}else{
//			$(".c_li_05_wrap").css({height:"auto",overflow:"auto"});
//	}
	$(".c_li_05_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	
	
//	if($("#content_add_seal").height()>=($(window).height())){
//			$("#content_add_seal").css({height:$(window).height(),overflow:"auto"});
//		}else{
//			$("#content_add_seal").css({height:"auto",overflow:"auto"});
//    }
    $("#content_add_seal").css({ height: $(window).height(), overflow: "auto" });
	
//	if($("#content_publish_seal").height()>=($(window).height())){
//			$("#content_publish_seal").css({height:$(window).height(),overflow:"auto"});
//		}else{
//			$("#content_publish_seal").css({height:"auto",overflow:"auto"});
//    }
    $("#content_publish_seal").css({ height: $(window).height(), overflow: "auto" });
	
//	if($("#content_add_people").height()>=($(window).height())){
//			$("#content_add_people").css({height:$(window).height(),overflow:"auto"});
//		}else{
//			$("#content_add_people").css({height:"auto",overflow:"auto"});
//	}
    $("#content_add_people").css({ height: $(window).height(), overflow: "auto" });
	
//	if($("#content_dlpi_approval").height()>=($(window).height())){
//			$("#content_dlpi_approval").css({height:$(window).height(),overflow:"auto"});
//		}else{
//			$("#content_dlpi_approval").css({height:"auto",overflow:"auto"});
//	}
	$("#content_dlpi_approval").css({ height: $(window).height(), overflow: "auto" });
	
//	if($(".c_li_06_wrap").height()>=($(window).height()-69-60)){
//			$(".c_li_06_wrap").css({height:$(window).height()-69-60,overflow:"auto"});
//		}else{
//			$(".c_li_06_wrap").css({height:"auto",overflow:"auto"});
//	}
	$(".c_li_06_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });


//	if ($("#content_add_dlpi").height() >= ($(window).height())) {
//			$("#content_add_dlpi").css({height:$(window).height(),overflow:"auto"});
//		}else{
//			$("#content_add_dlpi").css({height:"auto",overflow:"auto"});
//	}
	$("#content_add_dlpi").css({ height: $(window).height(), overflow: "auto" });
	
//	if($(".c_li_08_wrap").height()>=($(window).height()-69-60)){
//			$(".c_li_08_wrap").css({height:$(window).height()-69-60,overflow:"auto"});
//		}else{
//			$(".c_li_08_wrap").css({height:"auto",overflow:"auto"});
	//	}
	$(".c_li_08_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	
//	if($(".c_li_09_wrap").height()>=($(window).height()-69-60)){
//			$(".c_li_09_wrap").css({height:$(window).height()-69-60,overflow:"auto"});
//		}else{
//			$(".c_li_09_wrap").css({height:"auto",overflow:"auto"});
//	}
	$(".c_li_09_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	/*管理操作日志横向滚动条*/
	$(".c_li_10_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	
	$(".content_li_10").css({height:$(window).height(),overflow:"auto"});
	
//	if($(".c_li_11_wrap").height()>=($(window).height()-69-60)){
//			$(".c_li_11_wrap").css({height:$(window).height()-69-60,overflow:"auto"});
//		}else{
//			$(".c_li_11_wrap").css({height:"auto",overflow:"auto"});
	//	}
	$(".c_li_11_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	
	$(".content_li_12").css({height:$(window).height(),overflow:"auto"});
	
	
	$(".c_li_15_wrap").css({ height: $(window).height() - 69 - 60, overflow: "auto" });
	
}
resize_content();

$(window).resize(function() {
    resize_content();
})



/*调整宽高*/
$("#content").css({ width: $(window).width() });
/*添加印章页面，页面自动显示滚动条*/
//$("#content_add_dlpi").css({ height: $(window).height(), overflow: "auto" });

$("#content").css({height:$(window).height()});	
$("#content li.content_li_12 div").css({marginTop:($(window).height()-70)/2-100});
$(window).resize(function(){
	$("#content").css({width:$(window).width()});
	$("#content").css({height:$(window).height()});
	$("#content li.content_li_12 div").css({marginTop:($(window).height()-70)/2-100});
});


/*全选*/
$("#the_all").click(function(){
	if($(".c_li_05_wrap li input").attr("checked")=="checked"){
	$(".c_li_05_wrap li input").removeAttr("checked");
	}else{$(".c_li_05_wrap li input").attr("checked","checked");}
});

/*全选*/
$("#the_all_06").click(function(){
	if($(".c_li_06_wrap li input").attr("checked")=="checked"){
	$(".c_li_06_wrap li input").removeAttr("checked");
	}else{$(".c_li_06_wrap li input").attr("checked","checked");}
});


/*全选  人员列表*/
/*
$("#the_all_08").click(function(){
	if($(".c_li_08_wrap li input").attr("checked")=="checked"){
	$(".c_li_08_wrap li input").removeAttr("checked");
	}else{$(".c_li_08_wrap li input").attr("checked","checked");}
});
*/


/*第一个节点点击添加*/
$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(0).click(function(){
	$(this).children("img").attr("src","img/add_node_01_2.png");
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(1).children("img").attr("src","img/add_node_02_1.png");
	
	$(".c_li_07_wrap_right").children(".add_li_07").fadeIn(0);
	/*$(".c_li_07_wrap_right").children(".add_li_07_2").fadeOut(0);
	
	$(".c_li_07_wrap_right").children("li").eq(0).fadeOut(0);*/
	$(".c_li_07_wrap_right").children(".add_li_07").siblings("li").fadeOut(0);
	return false;
	
});

/*第二个节点点击添加*/
$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(1).click(function(){
	$(this).children("img").attr("src","img/add_node_02_2.png");
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(0).children("img").attr("src","img/add_node_01_1.png");
	
	$(".c_li_07_wrap_right").children(".add_li_07_2").fadeIn(0);
	/*$(".c_li_07_wrap_right").children(".add_li_07").fadeOut(0);*/
	
	$(".c_li_07_wrap_right").children(".add_li_07_2").siblings("li").fadeOut(0);
});

/*第一个节点取消*/
$("#li_07_no_the").click(function(){
	$(".c_li_07_wrap_right").children(".add_li_07").fadeOut(0);
	$(".c_li_07_wrap_right").children(".add_li_07_2").fadeOut(0);
	
	$(".c_li_07_wrap_right").children("li").eq(0).fadeIn(0);
	
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(0).children("img").attr("src","img/add_node_01_1.png");
	return false;
});
/*第一个节点保存*/
$("#li_07_yes_the").click(function(){
	$(".c_li_07_wrap_right").children(".add_li_07").fadeOut(0);
	$(".c_li_07_wrap_right").children(".add_li_07_2").fadeOut(0);
	
	$(".c_li_07_wrap_right").children("li").eq(0).fadeIn(0);
	
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(0).children("img").attr("src","img/add_node_01_1.png");
	return false;
});

/*第二个节点取消*/
$("#li_07_no_the_2").click(function(){
	$(".c_li_07_wrap_right").children(".add_li_07").fadeOut(0);
	$(".c_li_07_wrap_right").children(".add_li_07_2").fadeOut(0);
	
	$(".c_li_07_wrap_right").children("li").eq(0).fadeIn(0);
	
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(1).children("img").attr("src","img/add_node_02_1.png");
	return false;
});
/*第二个节点保存*/
$("#li_07_yes_the_2").click(function(){
	$(".c_li_07_wrap_right").children(".add_li_07").fadeOut(0);
	$(".c_li_07_wrap_right").children(".add_li_07_2").fadeOut(0);
	
	$(".c_li_07_wrap_right").children("li").eq(0).fadeIn(0);
	
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(1).children("img").attr("src","img/add_node_02_1.png");
	return false;
});

$("#search_07").click(function(){
	$(".seach_li_07").fadeIn(0);
	$(".seach_li_07").siblings("li").fadeOut(0);
	
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(0).children("img").attr("src","img/add_node_01_1.png");
	$(".c_li_07_wrap_left").children(".c_li_07_first").children("a").eq(1).children("img").attr("src","img/add_node_02_1.png");
	return false;
})








/*角色管理 弹窗*/
/*外黑框大小控制*/
$("#box_wrap").css("height",$(window).height()*3+"px").css("margin-top",-3*$(window).height()/2+"px");

$(window).resize(function(){
	$("#box_wrap").css("height",$(window).height()*4+"px").css("margin-top",-2*$(window).height()+"px");
});

/*$(".chang_li_03").click(function(){
	$("#box_wrap").fadeIn(0);
	$(".role_box").fadeIn(0);	
});*/

$("#role_box_yes").click(function(){
	$("#box_wrap").fadeOut(0);
	$(".role_box").fadeOut(0);
	return false;
});
$("#cancelBtn").click(function(){
	$("#box_wrap").fadeOut(0);
	$(".role_box").fadeOut(0);
	return false;
});
$("#closeBtn").click(function(){
	$("#box_wrap").fadeOut(0);
	$(".role_box").fadeOut(0);
	return false;
});
$(".to_exit_01").click(function(){
	$("#box_wrap").fadeOut(0);
	$(".role_box").fadeOut(0);
	return false;
});



/*添加管辖部门*/
$("#box_wrap_dept").css("height",$(window).height()*3+"px").css("margin-top",-3*$(window).height()/2+"px");

$(window).resize(function(){
	$("#box_wrap_dept").css("height",$(window).height()*4+"px").css("margin-top",-2*$(window).height()+"px");
});

$(".the_a_blo_01").click(function(){
	$(".branch_box").fadeOut(0);
	$("#box_wrap_dept").fadeOut(0);
})

$(".the_a_blo_02").click(function(){
	$(".branch_box").fadeOut(0);
	$("#box_wrap_dept").fadeOut(0);
})

$(".the_a_blo_03").click(function(){
	$(".branch_box").fadeOut(0);
	$("#box_wrap_dept").fadeOut(0);
})

$(".branch_to_exit_01").click(function(){
	$(".branch_box").fadeOut(0);
	$("#box_wrap_dept").fadeOut(0);
})





/*选择签章人 关闭页面操作*/
/*$(".signature_the_a_blo_01").click(function(){
	window.parent.hide_the_a();
})

$(".signature_the_a_blo_02").click(function(){
	window.parent.hide_the_a();
})

$(".signature_to_exit_01").click(function(){
	window.parent.hide_the_a();
})

//$("#select_the_area_06").click(function(){
//	$("#ifra_the").fadeIn(0);
//})

/*头部链接*/
$(".menu_head").children("li").children("a").click(function(){
	$(this).addClass("current_thea");
	$(this).parent("li").siblings("li").children("a").removeClass("current_thea");
});

$(".menu_head").children("li").eq(0).children("a").click(function(){
	
	$(".sidebar_menu li ul li a").removeClass("current_a");	
	$(".sidebar_menu").children("li").children("ul").children("li").eq(0).children("a").addClass("current_a");
	$(".sidebar_menu").children("li").removeClass("current_li");	
	$(".sidebar_menu").children("li").eq(0).addClass("current_li");
	
	$("#content").children("li").fadeOut(0);
	$("#content").children("li").eq(0).fadeIn(0);
});

$(".menu_head").children("li").eq(1).children("a").click(function(){
	
	$(".sidebar_menu li ul li a").removeClass("current_a");	
	$(".sidebar_menu").children("li").children("ul").children("li").eq(4).children("a").addClass("current_a");
	$(".sidebar_menu").children("li").removeClass("current_li");	
	$(".sidebar_menu").children("li").eq(1).addClass("current_li");
	
	$("#content").children("li").fadeOut(0);
	$("#content").children("li").eq(4).fadeIn(0);
});

$(".menu_head").children("li").eq(2).children("a").click(function(){
	
	$(".sidebar_menu li ul li a").removeClass("current_a");	
	$(".sidebar_menu").children("li").children("ul").children("li").eq(8).children("a").addClass("current_a");
	$(".sidebar_menu").children("li").removeClass("current_li");	
	$(".sidebar_menu").children("li").eq(3).addClass("current_li");
	
	$("#content").children("li").fadeOut(0);
	$("#content").children("li").eq(8).fadeIn(0);
});

$(".menu_head").children("li").eq(3).children("a").click(function(){
	
	$(".sidebar_menu li ul li a").removeClass("current_a");	
	$(".sidebar_menu").children("li").children("ul").children("li").eq(6).children("a").addClass("current_a");
	$(".sidebar_menu").children("li").removeClass("current_li");	
	$(".sidebar_menu").children("li").eq(2).addClass("current_li");
	
	$("#content").children("li").fadeOut(0);
	$("#content").children("li").eq(6).fadeIn(0);
});


/*角色管理之删除*/
/*$(".add_the_remove").click(function(){
	$(this).parent("strong").parent("li").slideUp(1000,function(){
		$(this).remove();
	});
});*/

/*角色管理之添加*/
/*$(".li_03_add_the").click(function(){
	$(".c_li_03_wrap").children("li").eq(0).after('<li class="the_add_change"><strong>2</strong><strong>新角色</strong><strong><a href="javascript:;" class="chang_li_03">编辑</a></strong><strong><a href="javascript:;" class="add_the_remove">删除</a></strong></li>');
	
	if($(".c_li_03_wrap").height()>=($(window).height()-69-120)){
		$(".c_li_03_wrap").css({height:$(window).height()-69-120,overflow:"auto"});
	}else{
		$(".c_li_03_wrap").css({height:"auto",overflow:"auto"});
}
	
	
	
	
	$(".chang_li_03").each(function() {
        $(this).eq(0).click(function(){
			$("#box_wrap").fadeIn(0);
			$(".role_box").fadeIn(0);
    	});	
	});
	
	
	$(".add_the_remove").click(function(){
		$(this).parent("strong").parent("li").slideUp(1000,function(){
			$(this).remove();
		});
	
	});
	
});*/



/*根证书管理之删除*/
$(".c_li_04_wrap").children("li").children("em").children("a").click(function(){
	//$(this).parent("em").parent("li").slideUp(600,function(){
	$(this).parent("em").parent("li").slideUp(500,function(){
		$(this).remove();
	});
});


/*05待批印章之批量删除*/
$("#remover_05_all").click(function(){
	$(".c_li_05_wrap").children("li").each(function(){
        if($(this).children("b").children("input").attr("checked")=="checked"){
			if($(this).index()!="1"){	
				$(this).slideUp(600,function(){
					$(this).remove();
					
					if($(".c_li_05_wrap").children("li:gt(1)").length=="0"){$(".content_li_05").children("h4").eq(0).fadeOut(0);}
				});
			}
		}
    });

});

/*印章“认证类型”radio颜色改变*/
$("input[type='radio'][name='authType']").each(function() {
	//alert($(this).attr("checked"));
    if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url("+urlPartOfPath+"/img/radio_02.png) no-repeat center"});
		if($(this).attr("disabled")=="disabled"){$(this).siblings("input[type='radio']").prev().css({"background":"url("+urlPartOfPath+"/img/radio_03.png) no-repeat center"});}else{}
	}
});


$("input[type='radio'][name='authType']").change(function(){
	if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url("+urlPartOfPath+"/img/radio_02.png) no-repeat center"});
		$(this).siblings("input[type='radio']").prev().css({"background":"url("+urlPartOfPath+"/img/radio_01.png) no-repeat center"});
	}	
});

/*radio颜色改变*/
/*$("input[type='radio']").each(function() {
    if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url(img/radio_02.png) no-repeat center"});
		if($(this).attr("disabled")=="disabled"){$(this).siblings("input[type='radio']").prev().css({"background":"url(img/radio_03.png) no-repeat center"});}else{}
	}
});


$("input[type='radio']").change(function(){
	if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url(img/radio_02.png) no-repeat center"});
		$(this).siblings("input[type='radio']").prev().css({"background":"url(img/radio_01.png) no-repeat center"});
	}	
});






$("input[type='checkbox']").each(function() {
    if($(this).attr("checked")=="checked"){
		$(this).parent("div").css({"background":"url(img/checkbox_checked.png) no-repeat center"});
	}else{
		$(this).parent("div").css({"background":"url(img/checkbox_no.png) no-repeat center"});
		if($(this).attr("disabled")=="disabled"){$(this).parent("div").css({"background":"url(img/checkbox_no_01.png) no-repeat center"});}else{}
	}
});


$("input[type='checkbox']").change(function(){
	if($(this).attr("checked")=="checked"){
		$(this).parent("div").css({"background":"url(img/checkbox_checked.png) no-repeat center"});
	}else{
		$(this).parent("div").css({"background":"url(img/checkbox_no.png) no-repeat center"});
	}	
});*/

$(":disabled").parent("div").next("label").addClass("label_color_connot");











/*
$(".c_li_07_wrap_left dl").each(function() {
    if($(this).children("dd").is(':has(dl)')){
		$(this).css({background:"none"});
	}else{
		
	}
});
*/


/*部门管理 左侧部门树*/
$(".c_li_07_wrap_left dl").each(function() {
	$(this).children("dt").children("label").click(function() {
        $(this).parent().siblings("dd").stop(true, true);
        $(this).parent().siblings("dd").slideToggle(0);
        if ($(this).parent().siblings("dd").css("display") != "block") {
            $(this).parent().children("label").css({ background: "url("+urlPartOfPath+"/img/lileft_07_strong_02.png) no-repeat 30px center" });
        } else {
            $(this).parent().children("label").css({ background: "url("+urlPartOfPath+"/img/lileft_07_strong_01.png) no-repeat 30px center" });
        }
    })
});

/*内容07  左边隐藏等*/
$(".c_li_07_wrap_left").children("li").children("label").click(function(){
	$(this).siblings("dl").stop(true,true);
	$(this).siblings("dl").slideToggle(0);
	if($(this).siblings("dl").css("display")!="block"){
		$(this).css({background:"url("+urlPartOfPath+"/img/lileft_07_strong_02.png) no-repeat 6px center"});
	}else{
		$(this).css({background:"url("+urlPartOfPath+"/img/lileft_07_strong_01.png) no-repeat 6px center"});
	}
});



/*添加管辖部门*/
/*$(".branch_wrap_left dl").each(function() {
    $(this).children("dt").click(function(){
		$(this).siblings("dd").stop(true,true);
		$(this).siblings("dd").fadeToggle(200);
		
        //alert("each:"+$(this).siblings("dd").css("display"));
		if($(this).siblings("dd").css("display")!="block"){
			$(this).children("a").css({background:"url(img/lileft_07_strong_02.png) no-repeat 30px center"});
		}else{
			$(this).children("a").css({background:"url(img/lileft_07_strong_01.png) no-repeat 30px center"});
		}
	})
});

$(".branch_wrap_left").children("li").children("strong").click(function(){
	$(this).siblings("dl").stop(true,true);
	$(this).siblings("dl").slideToggle(0);
	if($(this).siblings("dl").css("display")!="block"){
		$(this).css({background:"url(img/lileft_07_strong_02.png) no-repeat 6px center"});
	}else{
		$(this).css({background:"url(img/lileft_07_strong_01.png) no-repeat 6px center"});
	}
});*/

/*添加管辖部门*/
$(".branch_wrap_left dl").each(function() {
    $(this).children("dt").children("a").click(function() {
        $(this).parent().siblings("dd").stop(true, true);
        $(this).parent().siblings("dd").fadeToggle(0);
        if ($(this).parent().siblings("dd").css("display") != "block") {
            $(this).parent().children("a").css({ background: "url("+urlPartOfPath+"/img/lileft_07_strong_02.png) no-repeat 30px center" });
        } else {
        	$(this).parent().children("a").css({ background: "url("+urlPartOfPath+"/img/lileft_07_strong_01.png) no-repeat 30px center" });
            //$(this).parent().children("a").css({ background: "url(/img/lileft_07_strong_01.png) no-repeat 30px center" });
        }
    })
});


$(".the_click_a").click(function(){
	$(this).fadeOut(0);	
},function(){$(this).fadeIn(0)});