// JavaScript Document

function getExplorer() {
var explorer = window.navigator.userAgent ;
if(explorer.indexOf("Chrome") >= 0){
	function openWin() { 
           var url='seclect_a.html';
           var name='add';  
           var iWidth=680;
           var iHeight=540; 
           var iTop = (window.screen.availHeight - 30 - iHeight) / 2;  
           var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
           window.open(url,name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); 
	};
	$("#select_the_area_05").click(function(){
	openWin();})
}else if (explorer.indexOf("Firefox") >= 0) {
	function openWin() { 
           var url='seclect_a.html';
           var name='add';  
           var iWidth=680;
           var iHeight=540; 
           var iTop = (window.screen.availHeight - 30 - iHeight) / 2;  
           var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
           window.open(url,name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); 
	};
	$("#select_the_area_05").click(function(){
	openWin();})	
}else{
	function ondbGuanLianADId(){
	  adId = window.showModalDialog('seclect_a.html', null ,'dialogWidth:680px;dialogHeight:540px;center:yes;help:no;resizable:no;status:no');
	}
	
	$("#select_the_area_05").click(function(){
		ondbGuanLianADId();})
	}
}
getExplorer();
