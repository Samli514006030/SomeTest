var box = document.getElementById("box");
var init = document.getElementById("init");
var start = document.getElementById("start");
var startBlink = document.getElementById("startBlink");
var firstPanel = document.getElementById("firstPanel");
var pointer1 = document.getElementById("pointer1");
var pointed1 = document.getElementById("pointed1");
var secondPanel = document.getElementById("secondPanel");
var secPanelName = document.getElementById("secPanelName");
var thirdPanel = document.getElementById("thirdPanel");
var thrPanelName = document.getElementById("thrPanelName");
var footer = document.getElementById("footer");
var oInput = footer.getElementsByTagName("input");
var oSpan = footer.getElementsByTagName("span");
var longPole = document.getElementById("longPole");
var shortPole = document.getElementById("shortPole");
var autoPlay = document.getElementById("autoPlay");
var volum = true;
var aNames = ["李为龙", "邓晓丰", "陈健", "吴闻", "刘世颖", "韦文会", "冼瑞健", "李家盛", "程建政", "周喜良", "孙志亮", "钟利民", "张超凡", "陈峰", "樊占军", "李城", "马红亮", "阳聪", "俞钧龙", "傅超军", "刘驰誉", "钟伟伟", "刘志明", "李君", "朱何优", "贾亚丽"];
var iNow = 1;
var time = 40;
var showStart ="";
var hiddenStart="";
var closeStart=false;
var slowDown = false;
var timer1 = "";
var timer2 = "";
var timer3 = "";
var times1 = 1;
var times2 = 1;
var times3 = 1;
var str = "超哥，要不咱们今天又来整点小段子？";
window.onload = function() {
	box.style.display = "none";
	strPrinter(str);
}

function strPrinter(str) {
	var index = 0;
	var t = setInterval(function() {
		init.innerHTML += str.charAt(index++);
		if(index == str.length - 1) {
			init.innerHTML += "<img src='img/坏笑.png'/>";
			setTimeout(function() {
				dialogue();
				clearInterval(t);
			}, 1000);
		}
	}, 100);
}

function dialogue() {
	var index = 0;
	var str = ["<br/>别JB瞎搞，赶快给我直入主题！<img src='img/咒骂.png'/>", "<br/>表这样子吓人家嘛，马上呈献<img src='img/不开心.png'/>", "<br/>请点击开启超哥版厕所选号系统<img src='img/开心.png'/><br/>"];
	var t = setInterval(function() {
		init.innerHTML += str[index++];
		if(index == str.length) {
			start.style.display = "block";
			clearInterval(t);
		}
	}, 2000);
}
start.onclick = function() {
	init.style.display = "none";
	box.style.display = "block";
	var myMusic = document.getElementById("myMusic");
	myMusic.play();
//	方法名不要和变量名一样!!!火狐调试器要看安全那里!!!!!!!!!!!!!!!!!!
	staBlink();
}
function staBlink(){
	hiddenStart=setInterval(function(){
		startBlink.style.display="none";
	},2000);
	setTimeout(function(){
		showStart=setInterval(function(){
			startBlink.style.display="block";
		},2000);
	},1000);
}
function clearStart(){
	if(closeStart){
		clearInterval(showStart);
		clearInterval(hiddenStart);
		startBlink.style.display="none";
	}
}
autoPlay.onclick = function() {
	var myMusic = document.getElementById("myMusic");
	if(volum) {
		myMusic.volume = 0;
		autoPlay.style.background = "url(img/musicOFF.gif)";
	} else {
		myMusic.volume = 1;
		autoPlay.style.background = "url(img/musicON.gif)";
	}
	volum = !volum;
}
oInput[0].onclick = function() {
	closeStart=true;
	clearStart();
	clearInterval(timer1);
	time = 40;
	slowDown = false;
	longPole.style.display = "none";
	shortPole.style.display = "block";
	pointed1.style.display = "none";
	for(var i = 0; i < aNames.length; i++) {
		var Person = document.createElement("div");
		Person.className = "Person";
		Person.style.top = -(i + 1) * 111 + 'px';
		firstPanel.appendChild(Person);
		var Names = document.createElement("div");
		Names.className = "names";
		Names.innerHTML = aNames[i];
		Person.appendChild(Names);
	}
	timer1 = setInterval("toScroll()", time);
}
oInput[1].onclick = function() {
	stopScroll(firstPanel);
}
oInput[2].onclick = function() {
	closeStart=true;
	clearStart();
	clearInterval(timer2);
	longPole.style.display = "none";
	shortPole.style.display = "block";
	pointed2.style.display = "none";
	pointer2.style.display = "block";
	timer2 = setInterval(function() {
		var index = Math.floor(Math.random() * 25);
		secPanelName.innerHTML = aNames[index];
	}, 60);

}
oInput[3].onclick = function() {
	longPole.style.display = "block";
	shortPole.style.display = "none";
	var pointed2 = document.getElementById("pointed2");
	pointed2.style.display = "block";
	pointer2.style.display = "none";
	clearInterval(timer2);
	oSpan[1].innerHTML += "第" + (times2++) + "次选中的是：" + secPanelName.innerHTML + "<br/>";
}
oInput[4].onclick = function() {
	closeStart=true;
	clearStart();
	clearInterval(timer3);
	longPole.style.display = "none";
	shortPole.style.display = "block";
	pointed3.style.display = "none";
	pointer3.style.display = "block";
	timer3 = setInterval(function() {
		var index = Math.floor(Math.random() * 25);
		thrPanelName.innerHTML = aNames[index];
	}, 60);

}
oInput[5].onclick = function() {
	var pointed3 = document.getElementById("pointed3");
	pointed3.style.display = "block";
	pointer3.style.display = "none";
	longPole.style.display = "block";
	shortPole.style.display = "none";
	clearInterval(timer3);
	toShake(Person3);
	setTimeout(function() {
		for(i in aNames) {
			if(aNames[i] == thrPanelName.innerHTML) {
				var index = Math.floor(Math.random() * i);
				thrPanelName.innerHTML = aNames[index];
				break;
			}
		}
		oSpan[2].innerHTML += "第" + (times3++) + "次选中的是：" + thrPanelName.innerHTML + "<br/>";
	}, 1000);

}

function toScroll() {
	pointer1.style.display = "block";
	firstPanel.style.top = (37 * iNow++) + 12 + 'px';
	if(slowDown) {
		console.log(iNow);
		clearInterval(timer1);
		time += 10;
		timer1 = setInterval("toScroll()", time);
	}
	if(iNow / 3 == aNames.length) {
		iNow = 0;
	}
}

function stopScroll() {
	slowDown = true;
	setTimeout(function() {
		longPole.style.display = "block";
		shortPole.style.display = "none";
		pointed1.style.display = "block";
		pointer1.style.display = "none";
		var index = parseInt(iNow / 3);
		firstPanel.style.top = "12px";
		if(aNames[index - 1] == undefined) {
			aNames[index - 1] = "李超";
		}
		firstPanel.innerHTML = "<div class='Person' id='Person1'><div class='names'>" + aNames[index - 1] + "</div></div>";
		oSpan[0].innerHTML += "第" + (times1++) + "次选中的是" + aNames[index - 1] + "<br/>";
		clearInterval(timer1);
	}, 4000);
}

function toShake(obj) {
	var arr = [];
	var iNow = 0;
	for(var i = 14; i > 0; i -= 2) {
		arr.push(i);
		arr.push(-i);
	}
	arr.push(0);
	var timer = setInterval(function() {
		obj.style.top = arr[iNow] + 'px';
		iNow++;
		if(iNow == arr.length) {
			clearInterval(timer);
		}
	}, 50);
}