// gjz EzDialog

/*
	var pars1 = {title: "测试标题", message:"测试消息"};
	var ezd1 = new EzDialog(pars1);
	ezd1.show();

	var pars2 = {title: "测试标题", message:"测试消息", size:"large", btns:[["确定", "btn btn-primary", function(){console.log("确定");}], ["取消", "btn btn-primary", function(){console.log("取消");}]]};
	var ezd2 = new EzDialog(pars2);
	ezd2.show();

	var ezd3 = new EzDialog("info", "提示信息");
	ezd3.show();

	var ezd4 = new EzDialog("success", "成功信息");
	ezd4.show();

	var ezd5 = new EzDialog("warn", "警告信息");
	ezd5.show();

	var ezd6 = new EzDialog("error", "错误信息");
	ezd6.show();

	var ezd7 = new EzDialog("success", "成功信息", 3000);
	ezd7.show();

	var ezd8 = new EzDialog("warn", "警告信息", [["确定", "btn btn-primary", function(){console.log("确定");}], ["取消", "btn btn-primary", function(){console.log("取消");}]]);
	ezd8.show();

	var ezd9 = new EzDialog("info", "提示信息", []);
	ezd9.show();

	var pars10 = {title: "测试标题", message:"<button class='btn btn-sm btn-primary js-close-dialog'><span class='fa fa-remove'></span>页面内关闭</button>", size:"small", btns:[["确定", "btn btn-primary", function(){console.log("确定");}], ["取消", "btn btn-primary", function(){console.log("取消");}]]};
	var ezd10 = new EzDialog(pars10);
	ezd10.show();

	$(document).off("click", ".js-close-dialog").on("click", ".js-close-dialog", function(click){
		ezd10.close();
	});

	var pars11 = {title: "测试标题", url:"ui/ui_modal_url1.html", size:"small", btns:[["确定", "btn btn-primary", function(){console.log("确定");}], ["取消", "btn btn-primary", function(){console.log("取消");}]]};
	var ezd11 = new EzDialog(pars11);
	ezd11.show();

	EzuiAlert("标题", "内容");
*/

function EzDialog(options, msg, extra){
	var params = {};
	if(options == null){
		options = "info";
		msg = "提示";
		extra = [];
	}
	// 默认参数
	params.show = false;
	if(options.esc == null || options.esc == true || options.esc == "true"){
		params.onEscape = true;
		params.backdrop = true;
	}else{
		params.onEscape = false;
		params.backdrop = false;
	}
	if(options.animate == null || options.animate == true || options.animate == "true"){
		params.animate = true;
	}else{
		params.animate = false;
	}
	// 默认样式
	if(options.titFontSize == null){
		params.titFontSize = "16px";
	}else{
		params.titFontSize = options.titFontSize;
	}
	if(options.titAlign == null || !(options.titAlign == "left") || options.titAlign == "center" || options.titAlign == "right"){
		params.titAlign = "center";
	}else{
		params.titAlign = options.titAlign;
	}
	if(options.msgAlign == null || !(options.msgAlign == "left" || options.msgAlign == "center" || options.msgAlign == "right")){
		params.msgAlign = "left";
	}else{
		params.msgAlign = options.msgAlign;
	}
	if(options.btnAlign == null || !(options.btnAlign == "left" || options.btnAlign == "center" || options.btnAlign == "right")){
		params.btnAlign = "center";
	}else{
		params.btnAlign = options.btnAlign;
	}
	if(options.title == null){
		params.title = "";
	}else{
		params.title = options.title;
	}
	// 弹出框参数
	if(typeof(options) == "string"){
		// 简单弹框
		params.size = "small";
		if(extra != null){
			if(typeof(extra) == "number"){
				params.timeout = extra;
			}else{
				// 按钮参数
				if(extra == null || !Array.isArray(extra)){
					var btns = {};
					btns["btn0"] = {label:"确定", className:"btn btn-primary js-bootbox-dialogg-ok", callback:function(){}};
					params.buttons = btns;
				}else{
					var btns = {};
					for(var i=0; i<extra.length; i++){
						if(Array.isArray(extra[i])){
							var className = null;
							if(extra[i].length < 2 || extra[i][1] == null || extra[i][1] == ""){
								className = "btn btn-primary";
							}else{
								className = extra[i][1];
							}
							var callback = null;
							if(extra[i].length < 3 || extra[i][2] == null || extra[i][2] == ""){
								callback = function(){};
							}else{
								callback = extra[i][2];
							}
							btns["btn" + i] = {label: extra[i][0], className:className, callback:callback};
						}else{
							console.log("parames is error, [" + extra[i] + "] is not array");
							continue;
						}
					}
					params.buttons = btns;
				}
			}
		}
		var iconRootPath = contextPath + '/rs/ezframe/img/icon';
		switch(options){
			case "success":{
				params.message="<div class='dialog-success'><img src='" + iconRootPath + "/icon-dialog-success.png' /><br><label>" + msg + "</label></div>";
			};
	        break;
			case "warn":{
				params.message="<div class='dialog-warn'><img src='" + iconRootPath + "/icon-dialog-warn.png' /><br><label>" + msg + "</label></div>";
			}
			break;
			case "info":{
				params.message="<div class='dialog-info'><img src='" + iconRootPath + "/icon-dialog-info.png' /><br><label>" + msg + "</label></div>";
			}
			break;
			case "error":{
				params.message="<div class='dialog-error'><img src='" + iconRootPath + "/icon-dialog-warn.png' /><br><label>" + msg + "</label></div>"; 
			}
			break;
			default:{
				params.message="<div class='dialog-info'><img src='" + iconRootPath + "/icon-dialog-info.png' /><br><label>" + msg + "</label></div>";
			}
		}
	}else{
		// 自定义弹框
		params.message = "";
		if(options.url != null && options.url != ""){
			params.url = options.url;
			$.ajax({
				url : params.url,
				async : false,
				type : 'GET',
				success : function(data) {
					params.message = data;
				}
			});
		}else if(options.id != null && options.id != ""){
			params.id = options.id;
			params.message = $("#" + options.id).html();
		}else{
			if(options.message == null || options.message == ""){
				params.message = " ";
			}else{
				params.message = options.message;
			}
		}
		if(options.className == null || options.className == ""){
			params.className = "js-bootbox-dialog";
		}else{
			params.className = options.className;
		}
		if(options.size == null || options.size == ""){
			params.size = "small";
		}else{
			params.size = options.size;
		}
		// 按钮参数
		if(options.btns == null || !Array.isArray(options.btns)){
			var btns = {};
			btns["btn0"] = {label:"确定", className:"btn btn-primary js-bootbox-dialogg-ok", callback:function(){}};
			params.buttons = btns;
		}else{
			var btns = {};
			for(var i=0; i<options.btns.length; i++){
				if(Array.isArray(options.btns[i])){
					btns["btn" + i] = {label: options.btns[i][0], className:options.btns[i][1], callback:options.btns[i][2]};
				}else{
					console.log("parames is error, [" + options.btns[i] + "] is not array");
					continue;
				}
			}
			params.buttons = btns;
		}
		// 关闭回调
		if(options.closeCallback == null){
			params.closeCallback = function(e){};
		}else{
			params.closeCallback = options.closeCallback;
		}
	}
	this.params = params;
	this.dialog = bootbox.dialog(params);
	// 对齐方式
	$(this.dialog).find(".modal-title").css("font-size", params.titFontSize);
	$(this.dialog).find(".modal-header").css("text-align", params.titAlign);
	$(this.dialog).find(".modal-body").css("text-align", params.msgAlign);
	$(this.dialog).find(".modal-footer").css("text-align", params.btnAlign);
	// 关闭回调
	this.dialog.on("hidden.bs.modal", params.closeCallback);
}

EzDialog.prototype.show = function(isShowParams){
	if(isShowParams){
		console.log("dialog params : " + JSON.stringify(this.params));
	}
	var dialog = this.dialog;
	dialog.modal("show");
	if(this.params.timeout != null){
		setTimeout(function(){
			dialog.modal("hide");
		}, this.params.timeout);
	}

	var parames = this.parames;
}

EzDialog.prototype.close = function(){
	this.dialog.modal("hide");
}

function EzuiAlert(title, message){
	if(message != null && message != ""){
		var params = {title: title, message:message, size:"small", btns:[], titAlign:"left"};
	}else{
		var params = {message:title, size:"small", btns:[], titAlign: "left"};
	}
	var dialog = new EzDialog(params);
	dialog.show();
	return dialog;
}