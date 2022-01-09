/**
 * @author gjz
 * @version v2019.11.01.01
 * @data 2019年11月1日
 * 
 * 封装功能：元素大小改变监听
 *
 * 触发方式：浏览器渲染元素的宽度改变、浏览器渲染的高度改变、浏览器全屏与退出全屏
 *
 * 调用参数说明：
 *     $(selector).onresize(type, callback, options);
 *     selector : 选择器
 *     type : 操作类型(bind / unbind / debug)
 *         bind : 绑定元素
 *         unbind : 解绑元素
 *         debug : 切换日志输出
 *     callback : 触发回调(node, values)
 *         node : 改变大小的节点
 *         oldstyles : 改变前的样式
 *         styles : 改变后的样式
 *     options : 初始化参数
 *         checkTime : 绑定元素检查时间间隔(默认500ms, 最小100ms)
 *         debug : 是否输出日志(默认false)
 *
 * 调用示例：
 *     $("html").onresize('bind', function(node, oldstyles, style){
 *         onresizeCallback();
 *     },{checkTime:200, debug:true});
 * 
 * 其他：绑定元素要先存在才能添加监听，dom元素改变不影响触发，但是dom元素移除后重新添加需要重新绑定
 * 
 */

;(function(window,document,$){
	const objList = [];// 绑定列表
	let isDebugger = false;// 是否输出调试信息
	let checkTime = 500;// 默认检查时间
	let isFullScreenChangeCallback = false;// 全屏/退出全屏事件监听回调标记
	let timer = null;// 定时器对象

	/**
	 * 绑定
	 * @param selector 选择器名称
	 * @param callback 触发回调
	 * @returns
	 */
	function bind(selector, callback) {
		let nodes = $(selector);
		let length = nodes.length;
		if(isDebugger){
			console.info('bind selector [' + selector + '] length [' + length + ']');
		}
		if(length <= 0){
			console.info('bind selector [' + selector + '] is not found');
			return;
		}
		for(let i = length - 1; i >= 0; i--){
			let obj = {
				selector: selector,
				callback: callback,
				node: nodes[i],
				isFull: isFullScreen(),
				styles:{
					width: getStyle(nodes[i], "width"),
					height: getStyle(nodes[i], "height"),
					padding: getStyle(nodes[i], "padding"),
					margin: getStyle(nodes[i], "margin"),
					border: getStyle(nodes[i], "border"),
				}
			}
			objList.push(obj);
		}
	}

	/**
	 * 解绑
	 * @param selector 选择器名称
	 * @returns
	 */
	function unbind(selector) {
		let length = objList.length;
		for(let i = length - 1; i >= 0; i--){
			let obj = objList[i];
			if(obj.selector == selector){
				objList.splice(i, 1);
			}
		}
		if(isDebugger){
			console.info('unbind selector [' + selector + '] length [' + length + ' to ' + objList.length + ']');
		}
	}

	/**
	 * 获取ele元素的attr属性浏览器渲染值
	 * @param ele 计算元素
	 * @param attr 渲染属性
	 * @returns
	 */
	function getStyle(ele, attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(ele,null)[attr];
		}
		return ele.currentStyle[attr];
	}

	/**
	 * 当前是否全屏
	 * @returns
	 */
	function isFullScreen(){
		return document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen;
	}

	/**
	 * style1的属性是否和style2的属性一致
	 * @param style1 样式集合
	 * @param style2 样式集合
	 * @returns
	 */
	function isEqul(style1, style2) {
		let isEqul = true;
		for (var i in style1) {
			if (style1[i] !== style2[i]) {
				isEqul = false;
			}
		}
		return isEqul;
	}

	/**
	 * 启动定时器
	 * @returns
	 */
	function start(){
		if(timer){
			return;
		}
		timer = setInterval(() => {
			for (let i = objList.length - 1; i >= 0; i--) {
				try{
					let node = objList[i].node;
					let isFull = isFullScreen();
					let styles = {
							width: getStyle(node, 'width'),
							height: getStyle(node, 'height'),
							padding: getStyle(node, "padding"),
							margin: getStyle(node, "margin"),
							border: getStyle(node, "border"),// 监听border需要元素本身支持border样式
					}
					if(isDebugger){
						console.info('[' + objList[i].selector + '] old styles [' + JSON.stringify(objList[i].styles) + '] styles [' + JSON.stringify(styles) + '] isfull [' + objList[i].isFull + '/' + isFull + ']');
					}
					if(!isEqul(objList[i].styles, styles) || isFull != objList[i].isFull || isFullScreenChangeCallback){
						if(isDebugger){
							console.info('node [' + objList[i].selector + '] resize');
						}
						let oldstyles = objList[i].styles;
						objList[i].callback && objList[i].callback(node, oldstyles, styles);
						objList[i].styles = styles;
						objList[i].isFull = isFull;
					}
				}catch(e){
					console.error(e);
				}
			}
			isFullScreenChangeCallback = false;
		}, checkTime);
	}

	/**
	 * 停止定时器
	 * @returns
	 */
	function stop(){
		window.clearInterval(timer);
		timer = null;
	}

	/**
	 * 全屏/退出全屏事件监听回调
	 * @param event
	 * @returns
	 */
	function fullscreenChangeCallback(event){
		console.log("fullscreenchange : " + isFullScreen());
		isFullScreenChangeCallback = true;
	}
	document.onfullscreenchange = document.onmozfullscreenchange = document.onwebkitfullscreenchange = fullscreenChangeCallback;

	/**
	 * 将onresize方法绑定到jquery上，每次调用返回当前的绑定列表
	 */
	$.fn.onresize = function(type, callback, options){
		if(options && typeof options == "object"){
			if(options.debug){
				isDebugger = options.debug;// 设置默认是否显示日志
			}
			if(options.checkTime){
				if(checkTime != options.checkTime){
					stop();// 检查时间改变 -> 停止
				}
				if(checkTime < 100 || isNaN(checkTime)){
					checkTime = 100;
				}
				checkTime = options.checkTime;// 设置检查时间
			}
		}
		start();// 启动 / 重启
		if('bind' == type){
			bind(this.selector, callback);// 绑定
		}else if('unbind' == type){
			unbind(this.selector);// 解绑
		}else if('debug' == type){
			if(isDebugger){
				console.info('hide resize listener debugger log');
			}else{
				console.info('show resize listener debugger log');
			}
			isDebugger = !isDebugger;// 切换日志输出
		}
		return objList;// 返回当前绑定列表
	}
})(window,document,jQuery);