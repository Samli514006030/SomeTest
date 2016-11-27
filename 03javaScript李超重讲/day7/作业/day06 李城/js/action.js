var aDiv = document.getElementsByTagName('div');
var windowX = windowWidth();
var windowY = windowHeight();

document.onmousemove = function(ev) {
	var ev = ev || window.event;
	var x = ev.pageX;
	var y = ev.pageY;

	//向左移动,不反转
	if(x + 300 <= windowX && y + 300 <= windowY) {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.top = y + i * 100 + "px";
			aDiv[i].style.left = x + i * 100 + "px";
		}
	}

	//触碰右边界,反转
	if(x + 300 >= windowX && y + 300 <= windowY && x < windowX - 100) {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.top = y + i * 100 + "px";
			aDiv[i].style.left = x - i * 100 + "px";
		}
	}

	//触碰下边界,反转
	if(y + 300 >= windowY && y < windowY - 100 && x < windowX - 300) {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.top = y - i * 100 + "px";
			aDiv[i].style.left = x + i * 100 + "px";
		}
	}
}

function windowWidth() {
	return document.documentElement.clientWidth || document.body.clientWidth;
}

function windowHeight() {
	return document.documentElement.clientHeight || document.body.clientHeight;
}