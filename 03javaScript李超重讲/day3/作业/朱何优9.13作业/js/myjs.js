var box = document.getElementById("box");
var start = document.getElementById("start");
var str = "2016年初青云志马上开拍，导演正在横店召集演员做最后准备。。。";
var action = document.getElementById("action");
function Student(name,age) {
     this.name = name;
     this.age = age;
     this.addElement = function(){
     	var oAblock = box.getElementsByTagName("a");
		if(oAblock.length<26){
			stu.push(this);
     		box.innerHTML +="<a href='#'>"+this.name+","+this.age+"</a>";
		}else{
			alert("班级只有26个成员不能超员！");
		}
     }
     this.removeLast = function(){
     	var oAblock = box.getElementsByTagName("a");
     	if(oAblock.length>1){
			stu.pop();
     		box.removeChild(oAblock[oAblock.length-1]);
		}else{
			alert("已经是最后一个了不能删除！");
		}
     }
     this.removeAny = function (index) {
   		var oAblock = box.getElementsByTagName("a");
   		if(oAblock.length>1){
			for(i in oAblock){
       			var str = oAblock[i].innerText.split(',');
       			if(str[0]==this.name){
       				box.removeChild(oAblock[i]);
       				stu.splice(index,1);
       				break;
       			}
       		}
		}else{
			alert("已经是最后一个了不能删除！");
		}
   		
     }
}
var stu =[new Student('张超凡','男'),new Student('刘世颖','男'),new Student('朱何优','男'),new Student('陈健','男'),new Student('孙志亮','男'),
new Student('吴闻','男'),new Student('程建政','男'),new Student('钟利民','男'),new Student('李城','男'),new Student('刘文兵','男')];
window.onload = function(){
	var input = document.getElementsByTagName("input");
	for(i in input){
		if(input[i].type=="text"){
			input[i].value="";
		}
	}
	inteval(str);
	function insert1(){
		box.innerHTML="<span style='color: red;font-size: 24px;'>碧瑶何在？</span><br/>";
		setTimeout(function(){
			box.innerHTML+="众人：。。。。。。。。<br/>";
			insert2();
		},2000);
		function insert2(){
			setTimeout(function(){
				box.innerHTML+="<span style='color: red;font-size: 24px;'>陆雪琪何在？</span><br/>";
				insert3();
			},2000);
		}
		function insert3(){
			setTimeout(function(){
				box.innerHTML+="众人：。。。。。。。。。。。。<br/>";
				insert4();
			},2000);
		}
		function insert4(){
			setTimeout(function(){
				box.innerHTML+="<span style='color: red;font-size: 24px;'>张小凡何在？</span><br/>";
				insert5();
			},2000);
		}
		function insert5(){
			setTimeout(function(){
				box.innerHTML+="<img id='cold' src='img/cold.jpg' width='60px' height='60px'/><span style='color: black;font-size: 18px;'>导演，你串错剧组了，这里没有张小凡只有张超凡。。。(开个玩笑，超哥莫当真哈！)</span><br/>";
				start.style.display="block";
			},4000);
		}
	}
	
	function inteval(str){
		var index=0;
		var t = setInterval(function(){
			box.innerHTML+=str.charAt(index++);
			if(index==str.length-1){
				setTimeout(function(){
					insert1();
					clearInterval(t);
				},3000);	
			}
		},200);
	}
}
function checkAblock(){
	var oAblock = box.getElementsByTagName("a");
	for (var i=0;i<oAblock.length;i++) {
		oAblock[i].onclick=function(){
			for (var j=0;j<oAblock.length;j++) {
				oAblock[j].className="";
			}
			this.className="active";
		}
	}
}
start.onclick=function(){
	box.innerHTML="";
	var temp=0;
	var timer=setInterval(function(){
			var student = stu[temp++];
			box.innerHTML +="<a href='#'>"+student.name+","+student.age+"</a>";
		
	},2000);
	setTimeout(function(){
			after();
			start.style.display="none";
			clearInterval(timer);
	},20000);
	
}
function after(){
	checkAblock();
	action.style.display="block";
	var input1 = document.createElement("input");
	input1.type="button";
	input1.value="添加新成员";
	action.appendChild(input1);
	var input2 = document.createElement("input");
	input2.type="button";
	input2.value="移除末尾成员";
	action.appendChild(input2);
	var input3 = document.createElement("input");
	input3.type="button";
	input3.value="移除指定成员";
	action.appendChild(input3);
	var input4 = document.createElement("input");
	input4.type="button";
	input4.value="移除选中成员";
	action.appendChild(input4);
	var img = document.createElement("img");
	img.src="img/类的创建.png";
	img.title="创建对象主要代码段";
	img.alt="主要代码段";
	action.appendChild(img);
	img.style.cssText="position: absolute;right: 0;top: 0;";
	var p = document.createElement("p");
	p.innerHTML="备注：添加新成员姓名和年龄都检查，还可以检测汉字<br/>移除指定成员只检查姓名也可以检查汉字<br/>移除选中成员还在完善中";
	p.style.color="brown";
	action.appendChild(p);
	input1.onclick=function(){
		var oInput = document.getElementsByTagName("input");
		var addName = oInput[1].value;
		var age = oInput[2].value;
		var reg = /^[\u4E00-\u9FA5]+$/; 
		var isCN = reg.test(addName);
		var flag=true;
		for(index in stu){
			if(stu[index].name==addName){
				alert(addName+"已存在！请勿反复添加！");
				flag=false;
				break;
			}
		}
		if(flag){
			if(addName.length>3||addName.length<1){
				alert("您输入的位数不对！");
			}else if(age!='男'&&age!='女'){
				alert("对不起！我们班不收人妖！");
			}else if(addName.length>0&&addName.length<4&&isCN){
				var student = new Student(addName,age);
				student.addElement();
			}else{
				alert("您输入的不是汉字！");
			}
			
		}
		checkAblock();
	}
	input2.onclick=function(){
		var lastStu =stu[stu.length-1];
		lastStu.removeLast();
		checkAblock();
	}
	input3.onclick=function(){
		var oInput = document.getElementsByTagName("input");
		var checkName = oInput[1].value;
		var reg = /^[\u4E00-\u9FA5]+$/; 
		var isCN = reg.test(checkName);
		var flag=false;
		if(checkName.length>0&&checkName.length<4&&isCN){
			for(index in stu){
				if(stu[index].name==checkName){
					stu[index].removeAny(index);
					flag=true;
					break;
				}
			}
			if(!flag){
				alert("未找到"+checkName+"！请重新检查！");
			}
		}else{
			alert("您输入的名字有误！请重新检查！");
		}
		checkAblock();
	}
	input4.onclick=function(){
		var checkName = "";
		var flag=false;
		var oAblock = box.getElementsByTagName("a");
		for (var i=0;i<oAblock.length;i++) {
			if(oAblock[i].className=="active"){
				checkName=oAblock[i].name;
				flag=true;
				break;
			}
		}
		if(flag){
			console.log(flag);
			for(index in stu){
				if(stu[index].name==checkName){
					stu[index].removeAny(index);
					break;
				}
			}
		}
		checkAblock();
	}
}
