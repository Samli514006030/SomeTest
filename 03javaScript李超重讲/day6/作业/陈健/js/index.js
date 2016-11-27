var messages=document.getElementById('messages');
var liuyan=document.getElementById('liuyan');
var btn=document.getElementById('btn');
var users=document.getElementById('users');

var arrUsers=['用户','李思','王武','晓明','萧红','007','广告位'];
var jsUsers={};
jsUsers.name='';
jsUsers.message='';

//添加用户列表
addUser();

//获取用户列表对象
var aUser=users.getElementsByTagName('li');

//选择用户
for (var i=1;i<aUser.length;i++) {
	aUser[i].onclick=function(){
		resetBgColor();
		this.style.backgroundColor='#e3e2df';
		jsUsers.name=this.innerHTML;
	}
}

//发送留言
btn.onclick=function(){
	jsUsers.message=liuyan.value;
	if(jsUsers.name==''){
		alert('请选择用户');
	}
	else if(jsUsers.message==''){
		alert('留言不能为空');
	}
	else{
		createMessage();
		liuyan.value='';
		jsUsers.message='';
	}
}

function addUser(){
	for (i in arrUsers) {
		var user=document.createElement('li');
		if(i==0){
			user.style.backgroundColor='#d1d0cb';
			user.style.fontWeight='700';
		}
		user.innerHTML=arrUsers[i];
		users.appendChild(user);
	}
}

function resetBgColor(){
	for (var i=1;i<aUser.length;i++) {
		aUser[i].style.backgroundColor='#f6f6f6';
	}
}

function createMessage(){
	var messageBox=document.createElement('div');
	var mess1=document.createElement('strong');
	var mess2=document.createElement('span');
	mess1.innerHTML=jsUsers.name+':';
	mess2.innerHTML=jsUsers.message+'<br>';
	messageBox.appendChild(mess1);
	messageBox.appendChild(mess2);
	messages.appendChild(messageBox);
}
