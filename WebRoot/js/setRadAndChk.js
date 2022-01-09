/*角色管理页面的radio和checkbox的设置*/
/*radio颜色改变*/
$("input[type='radio']").each(function() {
	//alert("radio each");
    if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url("+urlPartOfPath+"/img/radio_02.png) no-repeat center"});
		if($(this).attr("disabled")=="disabled"){$(this).siblings("input[type='radio']").prev().css({"background":"url("+urlPartOfPath+"/img/radio_03.png) no-repeat center"});}else{}
	}
});


$("input[type='radio']").change(function(){
	//alert("radio change");
	if($(this).attr("checked")=="checked"){
		$(this).prev().css({"background":"url("+urlPartOfPath+"/img/radio_02.png) no-repeat center"});
		$(this).siblings("input[type='radio']").prev().css({"background":"url("+urlPartOfPath+"/img/radio_01.png) no-repeat center"});
	}
});


$("input[type='checkbox']").each(function() {
	//alert("checkbox each");
    if($(this).attr("checked")=="checked"){
		$(this).parent("div").css({"background":"url("+urlPartOfPath+"/img/checkbox_checked.png) no-repeat center"});
	}else{
		$(this).parent("div").css({"background":"url("+urlPartOfPath+"/img/checkbox_no.png) no-repeat center"});
		if($(this).attr("disabled")=="disabled"){$(this).parent("div").css({"background":"url("+urlPartOfPath+"/img/checkbox_no_01.png) no-repeat center"});}else{}
	}
});


$("input[type='checkbox']").change(function(){
	//alert("checkbox change");
	if($(this).attr("checked")=="checked"){
		$(this).parent("div").css({"background":"url("+urlPartOfPath+"/img/checkbox_checked.png) no-repeat center"});
	}else{
		$(this).parent("div").css({"background":"url("+urlPartOfPath+"/img/checkbox_no.png) no-repeat center"});
	}	
});