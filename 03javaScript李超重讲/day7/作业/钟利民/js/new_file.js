//js
var div = document.getElementsByTagName('div');

document.onmousemove = function(ev) {

	ev = ev || window.event;
	var x = ev.clientX;
	var y = ev.clientY;
		
		for(var i=0;i<div.length;i++){
			
		div[i].style.left =  x +50*i+'px';
		div[i].style.top = y +50*i+'px';
		}
		 console.log(div[i]);
//	div[0].style.left = x + "px";
//	div[1].style.left = x + 50 + 'px';
//	div[2].style.left = x + 100 + 'px';
//
//	div[0].style.top = y + "px";
//	div[1].style.top = y + 50 + 'px';
//	div[2].style.top = y + 100 + 'px';
//	a = 1280 - (parseInt(div[0].style.left));
//	b = 150 - a;
//	console.log*(b)
//	console.log(x)
//	if(x >= 1130) {
//		div[2].style.left = x+100 -b+ 'px';
//		console.log(div[2].style.left)
//	};
	
					if(x>1200){
						div[1].style.left = x-50+'px';
						div[2].style.left = x-100+'px';
					}
//				if(x>1000){
//						div[1].style.left =x-50+'px';
//					}	

};