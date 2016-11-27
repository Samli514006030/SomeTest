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
		
		aContent.innerHTML+='<div class=\"neirong\"><span>'
						+i
						+'&nbsp;楼</span><span class=\"rig\">'
						+month+'/'+dat+'&nbsp;'+h+':'+m+':'+s
						+'</span><p>'
						+oInt.value+'</p>';
						i++;
}
oInt.onclick=function(){
	oInt.value='';
}
