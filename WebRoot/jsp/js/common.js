var fontSize = 10;
$("html").css("font-size",fontSize+"px");
//设置banner条名字
function intpage(banner){
	$("#banner").html("<i class='fa fa-map-marker' aria-hidden='true'></i>  &nbsp;"+banner);
}
//默认选中树的第一个子节点
function firstNode(nodes){
	for(var i in nodes){
		if(nodes[i].children){
			this.firstNode(nodes[i].children);
		}else{
			return nodes[i].id
		}
	}
}
//js截取时间 yyyy-mm-dd hh:mm:ss
function subDate(date){
	if(date!=null){
		if(date.length>11){
			return date.substring(0,10);
		}
	}
	return date
}
//时间格式化
function dateFormatter(date){
	var time = new Date(date);
	var year = time.getFullYear();
	var month = Number(Number(time.getMonth()) + 1 ) >= 10 ? Number(time.getMonth()) + 1 : '0' + Number(Number(time.getMonth()) + 1);
	var day = Number(time.getDate()) >= 10 ? time.getDate() : '0' + time.getDate();
	var hour = Number(time.getHours()) >= 10 ? time.getHours() :'0' + time.getHours();
	var minutes = Number(time.getMinutes()) >= 10 ? time.getMinutes() :'0' + time.getMinutes();
	var second = Number(time.getSeconds()) >= 10 ? time.getSeconds() :'0' + time.getSeconds();
	return year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+second; 
}

/*var fixedWidth = 1918;
var curWidth = window.outerWidth;
var curFontSize = (fontSize * curWidth)/fixedWidth;
$("html").css("font-size",curFontSize+"px");
$(window).resize(function(){
	var fontSize = 10;
	var fixedWidth = 1918;
	var curWidth = window.outerWidth;
	var curFontSize = (fontSize * curWidth)/fixedWidth;
	$("html").css("font-size",curFontSize+"px");
});*/