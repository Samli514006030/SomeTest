

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

var X = window.innerWidth;
var Y = window.innerHeight;
//console.log(X);
//console.log(Y);
	
document.onmousemove=function(ev){
	ev = ev || window.event;
	var x1 = ev.pageX;
	var y1 = ev.pageY;
	
	if((X-(x1+300)>=0)&&(Y-(y1+300)>=0)){
		div1.style.left = x1+'px';
		div1.style.top = y1+'px';
		div2.style.left = (x1+100)+'px';
		div2.style.top = (y1+100)+'px';
		div3.style.left = (x1+200)+'px';
		div3.style.top = (y1+200)+'px';
	}else if((Y-(y1+300)<0)&&(X-(x1+300)<0)){
		div1.style.left = (x1-100)+'px';
		div1.style.top = (y1-100)+'px';
		div2.style.left = (x1-200)+'px';
		div2.style.top = (y1-200)+'px';
		div3.style.left = (x1-300)+'px';
		div3.style.top = (y1-300)+'px';
	}else if(X-(x1+300)<0){
		div1.style.left = (x1-100)+'px';
		div1.style.top = y1+'px';
		div2.style.left = (x1-200)+'px';
		div2.style.top = (y1+100)+'px';
		div3.style.left = (x1-300)+'px';
		div3.style.top = (y1+200)+'px';
	}else if(Y-(y1+300)<0){
		div1.style.left = x1+'px';
		div1.style.top = (y1-100)+'px';
		div2.style.left = (x1+100)+'px';
		div2.style.top = (y1-200)+'px';
		div3.style.left = (x1+200)+'px';
		div3.style.top = (y1-300)+'px';
	}
	
}
