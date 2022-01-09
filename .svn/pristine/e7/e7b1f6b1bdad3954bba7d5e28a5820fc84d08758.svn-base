var quiLanguage={

	select:{
		promptMessage:"请选择",
		noItemMessage:"无内容",
		loadingMessage:"数据加载中...",
		paramErrorMessage:"单选下拉框参数格式有误！（提示：json数据的属性和名称必须以双引号包围）",
		dataErrorMessage:"单选下拉框data属性设置的数据格式有误！（提示：放在标签中的json数据的属性和名称必须以双引号包围）",
		urlErrorMessage:"单选下拉框数据源出错，请检查url路径",
		ldError:"无内容"
	},
	selectTree:{
		promptMessage:"请选择",
		paramErrorMessage:"树形下拉框参数格式有误！（提示：json数据的属性和名称必须以双引号包围）",
		dataErrorMessage:"树形下拉框data属性设置的数据格式有误！（提示：放在标签中的json数据的属性和名称必须以双引号包围）",
		urlErrorMessage:"树形下拉框数据源出错，请检查url路径",
		promptMessageErrorMessage:"异步加载设置selectedValue无效，需手动设置组件的relText和relValue属性。"
	},
	selectCustom:{
		promptMessage:"请选择"
	},
	messager:{
		title:"信息提示"
	},
	jsError:{
		splitModeMessage:"非IE浏览器本地打开时会产生跨域问题，要把此框架发布到web服务目录下访问。如果要跨域访问，请使用框架的分离模式。",
		pathMessage0:"导航页面无法通过路径：",
		pathMessage1:"内容页面无法通过路径：",
		pathMessage2:"加载CSS，请检查prePath和主页的themeColor设置的是否正确。FireFox浏览器请把此框架发布到web服务目录下访问。",
		pathMessage3:"导航页面的prePath配置成功，组件主题风格已成功加载！",
		pathMessage4:"内容页面的prePath配置成功，组件主题风格已成功加载！",
		pathMessage5:"加载CSS，请检查主页的skinPath设置的是否正确。",
		pathMessage6:"主页的skinPath配置成功！",
		spliter:"分隔条出错，注意脚本的引入：spliter.js",
		autoComplete:"自动完成框出错，注意脚本的引入：autoComplete.js",
		color:"颜色选择器出错，注意脚本的引入：color.js",
		keypad:"软键盘控件出错，注意脚本的引入：keypad.js",
		stepper:"数字步进器出错，注意脚本的引入：stepper.js",
		treeTable:"table树形表格出错，注意脚本的引入：treeTable.js",
		detailTable:"table父子表格出错，注意脚本的引入：detailTable.js",
		imgPreview:"图片预览出错，注意脚本的引入：imgPreview.js",
		imgZoom:"图片区域放大出错，注意脚本的引入：imgZoom.js",
		imgFrame:"图片区域放大出错，注意脚本的引入：imgZoom.js",
		imgFade:"图片渐显出错，注意脚本的引入：imgFade.js",
		floatPanel:"浮动面板出错，注意脚本的引入：floatPanel.js",
		selectTree:"树形下拉框出错，注意脚本的引入：selectTree.js，ztree.js和ztree.css",
		selectCustom:"组合下拉框出错，注意脚本的引入：selectCustom.js",
		suggestion:"自动提示框出错，注意脚本的引入：suggestion.js",
		filter:"条件过滤器出错，注意脚本的引入：filter.js",
		lister:"双向选择器出错，注意脚本的引入：lister.js",
		listerTree:"树形双选器出错，注意脚本的引入：listerTree.js",
		rating:"评星级控件出错，注意脚本的引入：rating.js",
		basicTab:"基本选项卡出错，注意脚本的引入：basicTab.js",
		basicTabModern:"基本选项卡出错，注意脚本的引入：basicTabModern.js",
		verticalTab:"纵向选项卡出错，注意脚本的引入：verticalTab.js",
		accordion:"抽屉容器出错，注意脚本的引入：accordion.js",
		pageNumber:"数字分页组件出错，注意脚本的引入：pageNumber.js",
		pageArrow:"箭头分页组件出错，注意脚本的引入：pageArrow.js",
		WdatePicker:"日期选择框出错，注意脚本的引入：WdatePicker.js",
		capslock:"注意：大写键开启了",
		idInfo:"管理器id已经存在",
		ieDetectTitle:"提示"
	}
};
function uncompile(code)
{
return code;
}
var prePath="";
var parentTopHeight;
var broswerFlag;
var splitMode=false;
/**
 * 单选树的默认设置
 */
var sigleSelectionSetting = {
		view: {
			dblClickExpand: false,
			selectedMulti: false
		},
		data: {
		    //列表形式，非嵌套的数据，通过 id，parentId确定节点间的父子关系
			simpleData: {
				enable: true
			}
		},
		callback: {
			onClick: zTreeSelectItemClick
		}
	};

/**
 * 多选下拉框的设置，且为非分组的
 */
var multiNoGroupSelectionSetting = {
	view: {
		selectedMulti: true,
		showIcon: false,
		showLine: false
	},
	check: {
		enable: true,
		chkboxType: { "Y": "", "N": "" }
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {
		onClick: zTreeSelectItemClick
	}
};

/**
 * 多选下拉树的设置
 */
var multiTreeSelectionSetting = {
	view: {
		selectedMulti:false
	},
	check: {
		enable: true,
		chkboxType:{ "Y": "", "N": "" }
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {
		onClick: zTreeSelectItemClick
	}
};

/**
 * 允许全选的多选下拉树的设置
 */
var multiTreeSelectionSetting2 = {
	view: {
		selectedMulti:false
	},
	check: {
		enable: true,
		chkboxType:{ "Y": "ps", "N": "ps" }
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {
		onClick: zTreeSelectItemClick
	}
};
var asyncSetting;

/*树形下拉框组件start*/
jQuery.fn.extend({
	selectTreeRender: function(el) {
		return this.each(function() {
			$(this).html("");
			new jQuery.SelectTreeBox(this,el);
		});
	},
	selectTreeAddItem: function(el) {
		this.each(function() {
			// var dataStr=$(this).attr("data");
		    //转为json
			var dataObj=$(this).data("data");
			//获取数据前缀
			var dataRoot="treeNodes";
			if($(this).attr("dataRoot")){
				dataRoot=$(this).attr("dataRoot");
			}
			var finalData;
			if(dataObj[dataRoot]){
				finalData=dataObj[dataRoot]
			}
			else{
				finalData=dataObj;
			}
			//添加数据项
			finalData.push(el);
			//重新设置data属性
			//$(this).attr("data",JSON.stringify(dataObj));
			$(this).data("data",dataObj);
			//选中该项
			//$(this).attr("selectedValue",100);
			//刷新下拉框
		   $(this).html("")
		   new jQuery.SelectTreeBox(this);
		});
	},
	selectTreeRemoveItem: function(el) {
		this.each(function() {
			
			// var dataStr=$(this).attr("data");
		    //转为json
			var dataObj=$(this).data("data");
			//获取要删除的索引
			var delIdx=-1;
			//获取数据前缀
			var dataRoot="treeNodes";
			if($(this).attr("dataRoot")){
				dataRoot=$(this).attr("dataRoot");
			}
			var finalData;
			if(dataObj[dataRoot]){
				finalData=dataObj[dataRoot]
			}
			else{
				finalData=dataObj;
			}
			$.each(finalData, function(idx, item){
				if(item.id.toString()==el){
					delIdx=idx;
				}
			})
			//删除项
			if(delIdx!=-1){
				finalData.splice(delIdx,1);
			}
			//重新设置data属性
			//$(this).attr("data",JSON.stringify(dataObj));
			$(this).data("data",dataObj);
			//取消选中项
			//$(this).attr("selectedValue","");
			//刷新下拉框
		   $(this).html("")
		   new jQuery.SelectTreeBox(this);
		});
	},
	setValue:function(value){
		var $instance=$(this); 
		$instance.attr("selectedValue",value)
     	$instance.selectTreeRender(); 
	}
});

//设置深度，不被其他组件盖住
var depth=500;
//定义初始标识
var selectTree_id = 1;
jQuery.SelectTreeBox = function(selectobj,el) {
	var opt = {};
	//文本框样式为selectbox
	opt.inputClass = opt.inputClass || "selectbox";
	//内容层样式为selectbox-tree
	opt.containerClass = opt.containerClass || "selectbox-tree";
	//内容项鼠标移入样式为current
	opt.hoverClass = opt.hoverClass || "current";
	//内容项选中的样式为current
	opt.currentClass = opt.selectedClass || "selected";
	opt.debug = opt.debug || false;
	
	var selInputHeight=32;
	//var selButtonWidth=24;
	var selButtonWidth=0;
	var defaultSelWidth=0;
	var fontSize=12;
	var fontFamily="微软雅黑";
	//得到class=selectTree元素
	var $select = $(selectobj);
	$select.css("width","100%");
	if(!splitMode){
		var $parentThemeDom=$(window.top.document.getElementById("theme"));
		if($parentThemeDom.attr("selInputHeight")!=null){
			selInputHeight=Number($parentThemeDom.attr("selInputHeight"));
		}
		if($parentThemeDom.attr("selButtonWidth")!=null){
			selButtonWidth=Number($parentThemeDom.attr("selButtonWidth"));
		}
		if($parentThemeDom.attr("defaultSelWidth")!=null){
			defaultSelWidth=Number($parentThemeDom.attr("defaultSelWidth"));
		}
		fontSize="12";
		fontFamily="微软雅黑";
	}
	else{
		if($select.attr("selInputHeight")!=null){
			selInputHeight=Number($select.attr("selInputHeight"));
		}
		if($select.attr("selButtonWidth")!=null){
			selButtonWidth=Number($select.attr("selButtonWidth"));
		}
	}
	
	//每渲染一次标识+1
	selectTree_id++;
	
	//定义初始文本
	var promptText=uncompile(quiLanguage.selectTree.promptMessage);

	var promptIcon=prePath+"libs/icons/mark.png";

	//得到当前点击的input的id
	var curInputId="0_input";

	//得到当前点击的button的id
	var curButtonId="0_button";

	//标识是否使用键盘让文本框处于焦点
	var inFocus = false;

	$select.addClass("mainCon");
	if($select.attr("selAlign")=="right"){
		$select.css("float","right");
	}
	
	if($select.attr("prompt")!=null){
		promptText=$select.attr("prompt");
	}
	
	if($select.attr("promptIcon")!=null){
		promptIcon=$select.attr("promptIcon");
	}
	
	//创建内容容器
	var $container = setupContainer(opt);
	//创建树容器
	var $treeContainer=$('<ul class="ztree"></ul>');
	$treeContainer.attr("id","selectTree"+selectTree_id+"_tree");
 
	//$treeContainer.css("width","auto");
	//创建文本框
	var $input = setupInput(opt);
	
	//创建隐藏域
	var $hidden = setupHidden(opt);
	
	
	
//	//定义下拉按钮
//	var $selBtn;
//	//修正浏览器导致按钮错位问题
//	$selBtn= $("<input type='button' value=' ' class='selBtn' tabindex='-1'/>");
//	
	//multiMode用于标识是否是多选模式
	var multiMode=false;
	if($select.attr("multiMode")!=null){
		if($select.attr("multiMode")=="true"||$select.attr("multiMode")==true){
			multiMode=true;
//			$selBtn.addClass("selBtnMuiti");
			if($select.attr("noGroup")=="true"||$select.attr("noGroup")==true){
				$treeContainer.addClass("noGroupZtree");
			}
			else{
				$treeContainer.addClass("multiSelectZtree");
			}
		}
		else{
			multiMode=false;
		}
	}
	
	//如果处于禁用，让按钮也禁用
	if($select.attr("disabled")=="disabled"||$select.attr("disabled")=="true"||$select.attr("disabled")==true){
		//$selBtn.attr("disabled",true);
//		if(multiMode==true){
//			$selBtn.addClass("selBtn_disabledMuiti");
//		}
//		else{
//			$selBtn.addClass("selBtn_disabled");
//		}
		$input.addClass("selectbox_disabled");
	}
	
//	$selBtn.attr("id", "selectTree"+selectTree_id+"_button");
	
	//定义文本框默认长度
	var inputWidth=97;
	
	//如果设置了selWidth，则以selWidth长度为准
	if ($select.attr("selWidth")!=null) {
		inputWidth=Number($select.attr("selWidth"))-selButtonWidth;
	}
	else if(defaultSelWidth!=0){
		inputWidth=defaultSelWidth-selButtonWidth;
	}else if (defaultSelWidth==0){
		inputWidth="auto";
	}
	//$input.css("width";inputWidth);
	//$treeContainer.width(inputWidth);
	$treeContainer.css("fontFamily",fontFamily);
	$treeContainer.css("fontSize",fontSize);
	$input.css("fontFamily",fontFamily);
	$input.css("fontSize",fontSize);
	
	
	//添加主容器
	var $table=$('<table cellspacing="0" cellpadding="0" style="border-style:none;width: 100%;"><tr><td class="ali01" style="border-style:none;padding:0;margin:0;"></td><td class="ali01" style="border-style:none;padding:0;margin:0;"></td></tr></table>')
	$table.find("td").eq(0).append($input);
	//$table.find("td").eq(1).append($selBtn);

	//在主容器中添加文本框、按钮、内容层和隐藏域
	$select.append($table);
	$select.append($container);
	$select.append($hidden);
	$container.append($treeContainer);
	
	//用selectedValue标识是否初始时有选中项
	var selectedValue="";
	if($select.attr("selectedValue")){
		selectedValue=$select.attr("selectedValue");
	}
	
	//用edit标识是否能编辑
	var edit=false;
	if($select.attr("editable")!=null){
		if($select.attr("editable")=="true"){
			edit=true;
		}
		else{
			edit=false;
		}
	}

	// 隐藏选项层
	$container.hide();

	// 获取数据前缀
	var dataRoot="treeNodes";
	if($select.attr("dataRoot")){
		dataRoot=$select.attr("dataRoot");
	}
	
	// 获取参数
	var paramsStr=$select.attr("params");
	var paramsObj;
	if(paramsStr){
		try {
			paramsObj=JSON.parse(paramsStr);
		}
		catch(e){
			paramsObj=[];
			alert(uncompile(quiLanguage.selectTree.paramErrorMessage))
		}
	}
	else{
		paramsObj=[];
	}
	// 获取数据
	var dataObj="";
	var urlStr=$select.attr("url");
	var dataStr=$select.attr("data");
	var dataObj2=$select.data("data");
	if($select.attr("asyncMode")=="true"||$select.attr("asyncMode")==true){
		var autoParamStr=$select.attr("autoParam");
		var autoParam;
		if(autoParamStr){
			try {
				autoParam=JSON.parse(autoParamStr);
			}
			catch(e){
				autoParam=[];
				alert(uncompile(quiLanguage.selectTree.paramErrorMessage))
			}
		}
		else{
			autoParam=["id", "name"];
		}
		createOptions2(urlStr,autoParam,paramsObj);
	}
	else{
		// 优先使用data
		if(dataObj2){
			createOptions(dataObj2);
		}
		else if(dataStr){
			try {
				dataObj=JSON.parse(dataStr);
			}
			catch(e){
				dataObj="";
				alert(uncompile(quiLanguage.selectTree.dataErrorMessage))
			}
			$select.data("data",dataObj);
			createOptions(dataObj);
		}
		else if(urlStr){
			var dataType="json";
			if($select.attr("dataType")){
				dataType=$select.attr("dataType");
			}
			$.ajax({ 
			url: $select.attr("url"), 
			dataType:dataType,
			data:paramsObj,
			error:function(){
				alert(uncompile(quiLanguage.selectTree.urlErrorMessage))
			},
			success: function(data){
				var myData;
				if(dataType=="text"){
					myData=eval("("+data+")");
				}
				else{
					myData=data;
				}
				$select.data("data",myData);
				dataObj=myData;
				createOptions(myData);
				
		    }
			});
		}	
	}

	if (!edit) {
		// 如果不能编辑，点击文本框弹出下拉框
		$input.css({
			"cursor":"pointer"
		});
		$input.click(function(event){//弹出时的高度处理
			curInputId=$(event.target).attr("id");
			setHeight();
			// 内容层每弹出一次，主体深度+1，以避免被另一个下拉框遮住
			depth++;
			$select.css({
				"zIndex": depth
			});
			if($container.attr("hasfocus")==0){
				showMe();
			}
			else{
				hideMe();
			}
		})
	}else{
		// 如果可编辑，则无点击文本框弹出层的代码
		$input.css({
			"cursor":"text"
		});
		//监听文本框改变，重新为editValue赋值
		$input.change(function(){
			$select.attr("editValue",$(this).val());
			$hidden.val($(this).val());
		});
	}
	
//	$selBtn//点击按钮处理与上面一样
//	.click(function(event){
//			curButtonId=$(event.target).attr("id");
//			setHeight();
//			//内容层每弹出一次，主体深度+1，以避免被另一个下拉框遮住
//			depth++;
//			$select.css({
//				"zIndex": depth
//			});
//			if($container.attr("hasfocus")==0){
//				showMe()
//			}
//			else{
//				hideMe()
//			}
//	});
	
	function setHeight(){
			var oldScrollTop=$container[0].scrollTop;
			//先还原
			$container.css({
				"overflowY":"visible",
				"overflowX":"visible"
			});
			$container.width("");
			$container.height("");
			var usefulHeight=200;
			usefulHeight=window.document.documentElement.clientHeight-($select.offset().top-$(window).scrollTop()) - 30;
			
			var trueWidth;
			if (!$select.attr("boxWidth")) {
				//trueWidth=$container.width();
				//trueWidth="auto";
			}
			$container.css({
				"overflowY":"auto",
				"overflowX":"hidden"
			});
			if (!$select.attr("boxWidth")) {
				$container.width(trueWidth);
			}
			else{
				$container.width(Number($select.attr("boxWidth")));
			}
			
			
			var boxHeight=0;
			if($select.attr("boxHeight")){
				boxHeight=Number($select.attr("boxHeight"));
			}
			
			//设置容器高度
			if(boxHeight!=0){
				$container.height(boxHeight);
				
				//强制向上展开
				if ($select.attr("openDirection")  == "top") {
					$container.css({
						top: -boxHeight
					});
				}
				//强制向下展开
				else if ($select.attr("openDirection")  == "bottom"){
					$container.css({
						top:selInputHeight
					});
					if(broswerFlag=="IE6"||broswerFlag=="IE7"||broswerFlag=="IE8"||broswerFlag=="IE9"||broswerFlag=="IE10"||broswerFlag=="IE11"){
						$container[0].scrollTop=oldScrollTop;
					}
				}
				//智能判断方向
				else {
					if (usefulHeight < boxHeight) {//如果底部容纳不下
						if($select.offset().top>boxHeight){//如果上部能容纳下,向上展开
							$container.css({
								top: -boxHeight
							});
						}
						else if(usefulHeight<100&&$select.offset().top>usefulHeight&&$select.offset().top>100){//如果上部也容纳不下，并且底部不足100,向上展开并强制高度，出滚动条
							$container.css({
								top: -boxHeight
							});
						}
						else{//上面容纳不下，下面大于100，则向下展开，并强制高度，出滚动条
							$container.css({
								top:selInputHeight
							});
							if(broswerFlag=="IE6"||broswerFlag=="IE7"||broswerFlag=="IE8"||broswerFlag=="IE9"||broswerFlag=="IE10"||broswerFlag=="IE11"){
								$container[0].scrollTop=oldScrollTop;
							}
						}
					}
					else{
						$container.css({
							top:selInputHeight
						});
					}
				}
			}
			//没有设置boxHeight
			else{
				//强制向上展开
				if ($select.attr("openDirection")  == "top") {
					if($select.offset().top>$container.height()){//如果上部能容纳下
						$container.css({
							top: -$container.height()
						});
					}
					else{//如果上部容纳不下，向上展开并强制高度，出滚动条
						$container.height($mainCon.offset().top);
						
						$container.css({
							top: -$mainCon.offset().top
						});
					}
				}
				//强制向下展开
				else if ($select.attr("openDirection")  == "bottom") {
					if (usefulHeight < $container.height()) {//如果底部容纳不下，向下展开并强制高度，出滚动条
						
						$container.css({
							top:selInputHeight
						});
						$container.height(usefulHeight);
						if(broswerFlag=="IE6"||broswerFlag=="IE7"||broswerFlag=="IE8"||broswerFlag=="IE9"||broswerFlag=="IE10"||broswerFlag=="IE11"){
							$container[0].scrollTop=oldScrollTop;
						}
					}
					else{//底部能容纳下
						$container.css({
							top: selInputHeight
						});
					}
				}
				//智能判断方向
				else {
					//获取内容页中slect所在位置距离最底部的高度
					if (usefulHeight < $container.height()) {//如果底部容纳不下
						if($select.offset().top>$container.height()){//如果上部能容纳下,向上展开
							$container.css({
								top: -$container.height()
							});
						}
						else if(usefulHeight<100&&$select.offset().top>usefulHeight&&$select.offset().top>100){//如果上部也容纳不下，并且底部不足100,向上展开并强制高度，出滚动条
							$container.height($select.offset().top);
							
							$container.css({
								top: -$select.offset().top
							});
						}
						else{//上面容纳不下，下面大于100，则向下展开，并强制高度，出滚动条
							
							$container.css({
								top:selInputHeight
							});
							$container.height(usefulHeight);
							if(broswerFlag=="IE6"||broswerFlag=="IE7"||broswerFlag=="IE8"||broswerFlag=="IE9"||broswerFlag=="IE10"||broswerFlag=="IE11"){
								$container[0].scrollTop=oldScrollTop;
							}
						}
					}
					else{
						$container.css({
							top:selInputHeight
						});
					}
				}
			}
			
			//设置最小宽度
			if (!$select.attr("boxWidth")) {
				if($container.width()<inputWidth+selButtonWidth){
					$container.width(inputWidth+selButtonWidth)
				}
			}
	}
	
	//创建总容器，是一个class=mainCon的div
	function setupMainCon() {
		var $con=$("<div></div>");
		$con.addClass("mainCon");
		$con.css("width","100%");
		return $con;
	}
	
	//创建内容容器
	function setupContainer(options) {
		//创建div id为num_container
		var $container=$("<div class='selectTree-dropdown'></div>");
		$container.attr('id', "selectTree"+selectTree_id+'_container');
		$container.addClass(options.containerClass);
		//标识内容层是否展开
		$container.attr("hasfocus",0);
		//$container.css("width","auto");
		return $container;
	}
	
	//创建文本框
	function setupInput(options) {
		//创建input元素 id为num_input，class为selectbox
		var input = document.createElement("input");
		var $input = $(input);
		$input.attr("id", "selectTree"+selectTree_id+"_input");
		$input.attr("type", "text");
		$input.addClass(options.inputClass);
		$input.addClass("form-control");
		$input.addClass("selectTree-input");
		//$input.css("width","auto");
		//关闭自动完成
		$input.attr("autocomplete", "off");
		
		//根据$select设置的editable属性判断是否可编辑
		var seledit=false;
		if($select.attr("editable")!=null){
			if($select.attr("editable")=="true"){
				seledit=true;
			}
			else{
				seledit=false;
			}
		}
		if(!seledit){
			$input.attr("readonly", "readonly");
		}
		else{
			$input.attr("readonly", false);
		}
		
		//根据$select设置的disabled属性判断是否禁用，添加inputDisabled样式
		if($select.attr("disabled")=="disabled"||$select.attr("disabled")=="true"||$select.attr("disabled")==true){
			$input.attr("disabled",true);
			$input.addClass("inputDisabled");
		}
		
		return $input;	
	}
	
	//创建隐藏域
	function setupHidden(options) {
		//创建hidden元素 id为num_input，class为selectbox
		var input = document.createElement("input");
		var $input = $(input);
		
		$input.attr("type", "hidden");
		if($select.attr("name")!=null){
			$input.attr("name",$select.attr("name"));
		}
		return $input;	
	}
	
	//选中项后处理
	function setCurrent(str,uid) {
		//为$select的relText和relValue属性赋值
		$select.attr("relText",str);
		$select.attr("relValue",uid);
		
		$hidden.val(uid);
		//为文本框赋值
		$input.val(str);
		
		//如果可编辑，为editValue赋值
		if(edit=="true"||edit==true){
			$select.attr("editValue",$input.val());
			$hidden.val($input.val());
		}
		
		//设置焦点
		$select.focus();
		return true;
	}
	
	//获取原容器内容
	function createOptions(dataObj) {
		if(!dataObj){
			return;
		}
		var finalData;
		if(dataObj[dataRoot]){
			finalData=dataObj[dataRoot]
		}
		else{
			finalData=dataObj;
		}
		//初始化树
		if(multiMode==true){
			
			if(promptText!=null && promptText!=""){
				//如果默认的框没有设置值
				var newNode = {name:promptText,id:"",icon:promptIcon};
				if(finalData[0].name==promptText){
					finalData.splice(0,1);
				}
				finalData.unshift(newNode);
			}
			//设置初始文本
			for(var m=0;m<finalData.length;m++){
				finalData[m].checked=false;
			}
			if(selectedValue==""){
				if(promptText!=null && promptText!=""){
					$input.val(promptText);
					$select.attr("relText",promptText);
					$select.attr("relValue","");
				}else{
					$input.val("");
					$select.attr("relText","");
					$select.attr("relValue","");
				}			
				$select.data("selectedNodes",null);
				$hidden.val("");
			}
			else{
				var selectedValueArr=selectedValue.split(",");
				var msg="";
				for(var j=0;j<selectedValueArr.length;j++){
					for(var k=0;k<finalData.length;k++){
						if(finalData[k].id.toString()==selectedValueArr[j]){
							finalData[k].checked=true;
							msg=msg+finalData[k].name+",";
							continue;
						}
					}
				}
				if (msg.length > 0 ){
					msg = msg.substring(0, msg.length-1);
				} 
				setCurrent(msg,selectedValue);
				if($select.attr("showInfo")=="false"||$select.attr("showInfo")==false){
					
				}
				else{
					$input.attr("title",msg);
					try {
						addTooltip($input[0]);
					}
					catch(e){}
				}
			}
			
			if($select.attr("noGroup")=="true"||$select.attr("noGroup")==true){
				if(el){
					$.fn.zTree.init($treeContainer, el, finalData); 
				}
				else{
					$.fn.zTree.init($treeContainer, multiNoGroupSelectionSetting, finalData); 
				}
			}
			else if($select.attr("allSelectable")=="true"||$select.attr("allSelectable")==true){
				if(el){
					$.fn.zTree.init($treeContainer, el, finalData); 
				}
				else{
					$.fn.zTree.init($treeContainer, multiTreeSelectionSetting2, finalData); 
				}
			}
			else{
				if(el){
					$.fn.zTree.init($treeContainer, el, finalData); 
				}
				else{
					$.fn.zTree.init($treeContainer, multiTreeSelectionSetting, finalData); 
				}
			}
			var zTree = $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
			if(zTree){
				var checkedNodes = zTree.getCheckedNodes(true);
				$select.data("selectedNodes",checkedNodes);
			}
		}
		else{
			if(promptText!=null && promptText!=""){
				//如果默认的框没有设置值
				var newNode = {name:promptText,id:"",icon:promptIcon};
				if(finalData[0].name==promptText){
					finalData.splice(0,1);
				}
				finalData.unshift(newNode);
			}
			if(el){
				$.fn.zTree.init($treeContainer, el, finalData); 
			}
			else{
				$.fn.zTree.init($treeContainer, sigleSelectionSetting, finalData); 
			}
			
			
			//设置初始文本
			if(selectedValue==""){
				if(promptText!=null && promptText!=""){
					$input.val(promptText);
					$select.attr("relText",promptText);
					$select.attr("relValue","");
				}else{
					$input.val("");
					$select.attr("relText","");
					$select.attr("relValue","");
				}
				$select.data("selectedNode",null);
				$hidden.val("");
			}
			else{
				//设置初始值
				$select.attr("relValue",selectedValue);
				$hidden.val(selectedValue);
				
				var zTreeObj= $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
				//转为简单数组
				var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
				//遍历节点，找到对应的名称并给文本框和relText赋值
				for(var i=0;i<nodes.length;i++){
					if(nodes[i].id.toString()==selectedValue){
						//选中该节点
						zTreeObj.selectNode(nodes[i]);
						$select.attr("relText",nodes[i].name);
						$select.data("selectedNode",nodes[i]);
						$input.val(nodes[i].name);
						
					}
				}
			}
		}

		//为$select的editValue属性赋值
		if(edit==true){
			if(selectedValue==""){
				$select.attr("editValue",promptText);
			}
			else{
				$select.attr("editValue",$select.attr("relText"));
			}
		}
	}
	
	function createOptions2(urlStr,autoParam,paramsObj) {
		//初始化树
		if(multiMode==true){
			//设置初始文本
			if(selectedValue==""){
				if(promptText!=null && promptText!=""){
					$input.val(promptText);
					$select.attr("relText",promptText);
					$select.attr("relValue","");
				}else{
					$input.val("");
					$select.attr("relText","");
					$select.attr("relValue","");
				}
				$select.data("selectedNodes",null);
				$hidden.val("");
			}
			else{
				alert(uncompile(quiLanguage.selectTree.promptMessageErrorMessage))
			}
			
			asyncSetting = {
				async: {
					enable: true,
					dataType: 'JSON',
					dataName: dataRoot,
					url: urlStr,
					autoParam: autoParam,
					otherParam:paramsObj
				},
				view: {
					selectedMulti:false
				},
				check: {
					enable: true,
					chkboxType:{ "Y": "", "N": "" }
				},
				data: {
					simpleData: {
						enable: true
					}
				},
				callback: {
					onClick: zTreeSelectItemClick
				}
			}
			
			if(el){
				$.fn.zTree.init($treeContainer, el); 
			}
			else{
				$.fn.zTree.init($treeContainer, asyncSetting); 
			}
			var zTree = $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
			if(zTree){
				var checkedNodes = zTree.getCheckedNodes(true);
				$select.data("selectedNodes",checkedNodes);
			}
		}
		else{
			asyncSetting = {
				async: {
					enable: true,
					dataType: 'JSON',
					dataName: dataRoot,
					url: urlStr,
					autoParam: autoParam,
					otherParam:paramsObj
				},
				view: {
					dblClickExpand: false,
					selectedMulti: false
				},
				data: {
				    //列表形式，非嵌套的数据，通过 id，parentId确定节点间的父子关系
					simpleData: {
						enable: true
					}
				},
				callback: {
					onClick: zTreeSelectItemClick
				}
			}
			if(el){
				$.fn.zTree.init($treeContainer, el); 
			}
			else{
				$.fn.zTree.init($treeContainer, asyncSetting); 
			}
			
			
			//设置初始文本
			if(selectedValue==""){
				if(promptText!=null && promptText!=""){
					$input.val(promptText);
					$select.attr("relText",promptText);
					$select.attr("relValue","");
				}else{
					$input.val("");
					$select.attr("relText","");
					$select.attr("relValue","");
				}
				$select.data("selectedNode",null);
				$hidden.val("");
			}
			else{
				//设置初始值
				$select.attr("relValue",selectedValue);
				$hidden.val(selectedValue);
				
				var zTreeObj= $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
				//转为简单数组
				var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
				//遍历节点，找到对应的名称并给文本框和relText赋值
				for(var i=0;i<nodes.length;i++){
					if(nodes[i].id.toString()==selectedValue){
						//选中该节点
						zTreeObj.selectNode(nodes[i]);
						$select.attr("relText",nodes[i].name);
						$select.data("selectedNode",nodes[i]);
						$input.val(nodes[i].name);
						
					}
				}
			}
			
			if(promptText!=null && promptText!=""){
				var zTree= $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
				var newNode = {name:promptText,id:"",icon:promptIcon};
				newNode = zTree.addNodes(null, newNode);
			}
		}

		//为$select的editValue属性赋值
		if(edit==true){
			if(selectedValue==""){
				$select.attr("editValue",promptText);
			}
			else{
				$select.attr("editValue",$select.attr("relText"));
			}
		}
	}
	
	//隐藏层，设置hasfocus标志位
	function hideMe() { 
		//标识内容层是否展开
		$container.attr("hasfocus",0);
		$container.hide();
		$("body").unbind("mousedown", onBodyDown);
		
		//多选模式下，在下拉列表关闭时进行赋值
		if(multiMode==true){
			//获取zTree对象
			var zTree = $.fn.zTree.getZTreeObj($treeContainer.attr("id"));
			if(zTree){
				//得到选中的数据集
				var checkedNodes = zTree.getCheckedNodes(true);
				var selectNodes=[];
				var msg3="";
				var msg4="";
				for(var i=0;i<checkedNodes.length;i++){
					if($select.attr("exceptParent")=="true"||$select.attr("exceptParent")==true){
						if(checkedNodes[i].isParent){
							continue;
						}
					}
					selectNodes.push(checkedNodes[i]);
					msg3=msg3+checkedNodes[i].name+",";
					msg4=msg4+checkedNodes[i].id+",";
				}
				$select.data("selectedNodes",selectNodes);
				if (msg3.length > 0 ){
					msg3 = msg3.substring(0, msg3.length-1);
				} 
				if (msg4.length > 0 ){
					msg4 = msg4.substring(0, msg4.length-1);
				} 
				if(msg3==""){
					msg3=promptText;
				}
				setCurrent(msg3,msg4);
				if(msg3==promptText){
					$input.attr("title"," ");
				}
				else{
					$input.attr("title",msg3);
				}
				
				try {
					addTooltip($input[0]);
				}
				catch(e){}
				}
			
		}
		
		//单选与多选都会触发change事件
		try {
			$select.trigger("change");
		}
		catch(e){}
		
	}
	function showMe() {
		//标识内容层是否展开
		$container.attr("hasfocus",1);
		depth++;
		$select.css({
			"zIndex": depth
		});
		$container.show();
		$("body").bind("mousedown", onBodyDown);
	}
	function onBodyDown(event) {
		if ($container.attr("hasfocus") == 0) {
		}else {
			var curDivId = curInputId.substr(0, curInputId.lastIndexOf('_input')) + '_container';
			if ($(event.target).attr("id") == curInputId
					|| $(event.target).attr("id") == curButtonId
					|| $(event.target).parent().attr("class") == "ztree"
					|| $(event.target).attr("class") == "ztree"
					|| $(event.target).parents(".ztree").length > 0
					|| $(event.target).attr("class") == "selectbox-tree"
					|| $(event.target).attr("id") == curDivId) {
				if($(event.target).parents(".ztree").length > 0 ){
					setTimeout(function(){
						setHeight()
					},500)
				}
			}
			else {
				hideMe();
			}
		}
	}
	function getCurrentSelected() {
		return $select.val();
	}
	function getCurrentValue() {
		return $input.val();
	}
	
};	
/*单选下拉框*/


function getPosition(value,array){//获得数组值的索引
		for(var i=0;i<array.length;i++){
			if(value==array[i]){
				return i;
				break;
			}
		}
	}
String.prototype.trim = function()
{
    // 用正则表达式将前后空格，用空字符串替代。
    return this.replace(/(^\s*)|(\s*$)/g, "");
} 

//ztree下拉组件选中项时触发
function zTreeSelectItemClick(event,treeId,treeNode){
	var $select=$("#"+treeId).parents(".selectTree");
	var $hidden=$("#"+treeId).parents(".mainCon").find('input[type="hidden"]');
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	
	if($select.attr("multiMode")=="true"||$select.attr("multiMode")==true){
		if(treeNode.clickExpand==true||treeNode.clickExpand=="true"){//点击该节点展开而不是勾选
			//允许全选时
			if($select.attr("allSelectable")=="true"||$select.attr("allSelectable")==true){
				zTree.checkNode(treeNode,'',true);
				zTree.expandNode(treeNode,true);
			}
			else{
				zTree.expandNode(treeNode);
			}
		}
		else{//点击勾选
			zTree.checkNode(treeNode);
		}
	}
	else{//单选模式
		if(treeNode.clickExpand==true||treeNode.clickExpand=="true"){//点击该节点展开而不是选中
			zTree.expandNode(treeNode);
		}
		else{//点击选中
			var $input
			$input=$("#"+treeId).parents(".mainCon").find("input[class*=selectbox]");
			
			$input.val(treeNode.name)
			$select.attr("relText",treeNode.name);
			$select.attr("relValue",treeNode.id);
			$select.data("selectedNode",treeNode);
			$hidden.val(treeNode.id);
			if($select.attr("editable")=="true"||$select.attr("editable")==true){
				$select.attr("editValue",$input.val());
				$hidden.val($input.val());
			}
			$select.focus();
			var $container=$("#"+treeId).parents(".mainCon").find("div[class=selectbox-tree]");
			$container.hide()
			$container.attr("hasfocus",0);
			
			
			try {
				$select.trigger("change");
			}
			catch(e){}
		}
	}
}


function zTreeSelectAddItem($select,pid,id,name){
		//转为简单数组
		var zTreeObj=$.fn.zTree.getZTreeObj($select.find("ul").eq(0).attr("id"));
		var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].id==pid){
				zTreeObj.addNodes(nodes[i],{id:id, pId:nodes[i].id, name:name});
			}
		}
}
function zTreeSelectRemoveItem($select,id){
		//转为简单数组
		var zTreeObj=$.fn.zTree.getZTreeObj($select.find("ul").eq(0).attr("id"));
		var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].id==id){
				zTreeObj.removeNode(nodes[i]);
			}
		}
}
