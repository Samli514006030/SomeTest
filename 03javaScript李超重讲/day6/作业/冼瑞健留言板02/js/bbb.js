var aContent=document.getElementById('content');
var oInt=document.getElementById('int');
var oBtn=document.getElementById('btn');
var i=1;

oBtn.onclick=function(){

		var date=new Date();
		var  	month=date.getMonth();  
		var  	dat=date.getDate();
		var  	h=date.getHours();
		var  	m=date.getMinutes();
		var  	s=date.getSeconds();
		
		aContent.innerHTML+='<div id=\"box5\"><div id=\"box6\"><a href=\"#\"><img src=\"img/001.jpg\" /></a></div><div class=\"neirong\"><span>'
							+i+'&nbsp;楼:&nbsp;&nbsp;<a href=\"#\">匿名用户</a></span><span class=\"rig\">'
							+month+'/'+dat+'&nbsp;'+h+':'+m+':'+s+'</span><p>'
							+oInt.value+'</p></div></div>'
						i++;
		oInt.value='';
}
//oInt.onclick=function(){
//	oInt.value='';
//}
oInt.onfocus=function(){
	oInt.value='';
}
oInt.onblur=function(){
	oInt.value='请输入留言内容！！';
}
