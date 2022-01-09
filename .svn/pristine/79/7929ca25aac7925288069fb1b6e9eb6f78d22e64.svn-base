// JavaScript Document

function getExplorer() {
var explorer = window.navigator.userAgent ;
if(explorer.indexOf("Chrome") >= 0){
	function openWin() { 
           var url='add_select_a.html';
           var name='add';
           var iWidth=546;
           var iHeight=420; 
           var iTop = (window.screen.availHeight - 30 - iHeight) / 2;  
           var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
           window.open(url,name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); 
	};
	$("#select_the_area").click(function(){
	openWin();})
}else if (explorer.indexOf("Firefox") >= 0) {
	function openWin() { 
           var url='add_select_a.html';
           var name='add';  
           var iWidth=546;
           var iHeight=420; 
           var iTop = (window.screen.availHeight - 30 - iHeight) / 2;  
           var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
           window.open(url,name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); 
	};
	$("#select_the_area").click(function(){
	openWin();})	
}else{
	function ondbGuanLianADId(){
	  adId = window.showModalDialog('add_select_a.html',null,'dialogWidth:546px;dialogHeight:420px;center:yes;help:no;resizable:no;status:no');
	  }
	  $("#select_the_area").click(function(){
	ondbGuanLianADId();})
	}
}
getExplorer();
