var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

document.onmousemove=function(ev){
	var ev = ev || window.event;
	box1.style.left= ev.pageX +'px';
	box1.style.top= ev.pageY + 'px';
	
	box2.style.left= ev.pageX +100 +'px';
	box2.style.top= ev.pageY + 100 +'px';
	
	box3.style.left= ev.pageX +200 +'px';
	box3.style.top= ev.pageY +200 + 'px';
	
  
//  console.log(document.documentElement.clientHeight);
//	
//	if(ev.clientX == (document.documentElement.clientWidth-300)){
//		box2.style.left= ev.pageX -200 +'px';
//		box3.style.left= ev.pageX -300 +'px';
//	};
//	
	
	
};






