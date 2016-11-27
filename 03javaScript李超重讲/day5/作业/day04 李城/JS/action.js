var box = document.getElementById('box');
var btn = document.getElementsByClassName('btn')[0];
var reponseContent=document.getElementById('reponseContent');
var look = document.getElementById('look');
var express = document.getElementById('express');
var close = document.getElementById('close');
var bottom = document.getElementsByClassName('bottom')[0];

var index=0;

box.onclick=function(){
	box.innerHTML='';
}

btn.onclick=function(){
	var content=box.innerHTML;
	if(content==''){
		alert("内容不能为空哦");
		return;
	}
	var minBox=document.createElement('div');
	minBox.className='reponse';
	minBox.style.top=170+index*60+'px';
	index++;
	minBox.innerHTML='<a href="#">第'+index+'楼：</a>'+content;
	minBox.innerHTML+='<img class="active1" src="images/response.gif"/>';
	
	//时间戳
	var time=new Date();
	var timeSpan=document.createElement('span');
	timeSpan.innerHTML=time.toLocaleString( );
	minBox.appendChild(timeSpan);
	
	reponseContent.appendChild(minBox);
	box.innerHTML='';
}

look.onclick=function(){
	express.style.display="block";
}

close.onclick=function(){
	express.style.display="none";
}

for(var i=1;i<10;i++){
	bottom.innerHTML+='<img class="active" src="images/'+i+'.gif"/>';
}

var active=document.getElementsByClassName('active');

for(var i=0;i<active.length;i++){
	active[i].index=i;
	active[i].onclick=function(){
		num=0;
		num=this.index+1;
		box.innerHTML +='<img src="images/'+num+'.gif"/>';
	}
}
