		var box=document.getElementById('box');
		document.onmousemove=function(ev){
			var ev=ev||window.event;
			
//			var x=ev.clientX;
//			var y=ev.clientY;
//			console.log('ev.clientX;'+x);
//			console.log('ev.clienty;'+y);
		
			var x=ev.pageX;
			var y=ev.pageY;
			console.log('ev.pageX;'+x);
			console.log('ev.pageY;'+y);
			
			box.style.left=x+'px';
			box.style.top=y+'px';
			
		}
