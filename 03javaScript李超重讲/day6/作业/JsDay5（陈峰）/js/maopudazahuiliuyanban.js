

//获取元素
var Text=document.getElementById('Text');
var headImg=document.getElementById('headimg');
var user=document.getElementById('uesr');
var expressionImg=document.getElementById('expressionImg');
var btn=document.getElementById('btn');
var center=document.getElementById('center');

//初始化输入框
Text.value='在此输入内容，马上回复楼主...';

//当获取输入框焦点时初始化输入框样式
Text.onfocus=function(){
	if(Text.value=='在此输入内容，马上回复楼主...'||Text.value==''){
		Text.value='';
		Text.style.color='black';
		Text.style.border='1px solid blue';
	}
};
//console.log(Text.value);

//当输入框失去焦点时回复输入框初始化样式
Text.onblur=function(){
	if(Text.value==''){
		Text.value='在此输入内容，马上回复楼主...';
		Text.style.color='gray';
		Text.style.border='1px solid #b9b9b9'
	}
}

//获取时间


//未输入内容提交报错
btn.onclick=function(){
	if (Text.value=='在此输入内容，马上回复楼主...'||Text.value=='') {
		Text.style.border='2px solid red';
		Text.style.color='red';
	} else{
		var li=document.createElement('li');
		var ul=document.createElement('ul');
		var div1=document.createElement('div');
		var Span=document.createElement('span');
		
		div1.innerHTML='<img src="img/用户头像.png" />';
		
		Span.innerHTML=Text.value;
		li.appendChild(div1);
		li.appendChild(Span);
		center.appendChild(li);
		Text.value='在此输入内容，马上回复楼主...';
		Text.style.color='gray';
		Text.style.border='1px solid #b9b9b9'
	};
};
