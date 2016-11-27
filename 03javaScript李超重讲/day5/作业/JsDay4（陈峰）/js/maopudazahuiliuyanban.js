

//获取元素
var Text=document.getElementById('Text');
var headImg=document.getElementById('headimg');
var user=document.getElementById('uesr');
var expressionImg=document.getElementById('expressionImg');
var btn=document.getElementById('btn');
var center=document.getElementById('center');

//初始化输入框样式
Text.onmousedown=function(){
	Text.value='';
	Text.style.color='black';
};
//console.log(Text.value);

//未输入内容提交报错 

	btn.onclick=function(){
		if (Text.value=='在此输入内容，马上回复楼主...'||Text.value=='') {
			alert('请输入回复的内容!');
		} else{
			var p=document.createElement('p');
			p.innerHTML+='<img src="img/用户头像.png" />';
			p.innerHTML+=Text.value;
			center.appendChild(p);
			Text.value='在此输入内容，马上回复楼主...';
		};
	};
