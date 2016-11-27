var statics=document.getElementsByClassName('Statics')[0];
var names=document.getElementById('names');
var sexs=document.getElementById('sexs');
var add=document.getElementById('add');
var del=document.getElementById('del');

var array=[];

array.push(new objArr('陈建','男'));
array.push(new objArr('程建政','男'));
array.push(new objArr('傅超军','男'));
array.push(new objArr('贾亚丽','女'));
array.push(new objArr('李城','男'));
array.push(new objArr('李为龙','男'));
array.push(new objArr('马红亮','男'));
array.push(new objArr('吴闻','男'));
array.push(new objArr('俞均龙','男'));
array.push(new objArr('邓晓丰','男'));

show();

add.onclick=function(){
	var a=names.value;
	var b=sexs.value;
	//传递完数据后清空输入框
	names.value='';
	sexs.value='';
	//判断是否与之前已有数据重叠
	for(var i=0;i<array.length;i++){
		if(a===array[i].name){
			alert(a+" 已经显示了哦！");
			return;
		}
	}
	//检测是否有输入框没有输入数据
	if(a=='' || b=='') 
	{
		alert("信息录入不完整哦！");
		return;
	}
	//检测姓名是否输入为数字
	else if(!isNaN(a))
	{
		alert("姓名不能输入数字哦！");
		return;
	}
	//检测性别是否输入为数字
	else if(!isNaN(b))
	{
		alert("性别不能输入数字哦！");
		return;
	}
	//调用函数，push进数组
	else{
		array.push(new objArr(a,b));
		//清空重新遍历array数组，重新显示
		statics.innerHTML='';
		show();
		alert("恭喜您，增加成功！");
	}
	
	
	
}

del.onclick=function(){
	array.pop();
	statics.innerHTML='';
	show();
	alert("恭喜您，删除成功！");
}

names.focus();

function objArr(name,sex){
	this.name=name;
	this.sex=sex;
}

function show(){
	for(var i=0;i<array.length;i++){
		statics.innerHTML += array[i].name+'&nbsp'+array[i].sex+'<br />';
	}
}