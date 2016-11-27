	var arr=[
				'李为龙','邓晓丰','陈健','吴闻','刘世颖','韦文会','冼瑞健','李家盛','程建政','周喜良','孙志亮',
				'钟利民','张超凡','陈峰'	,'樊占军','李城','朱何优','阳聪','俞钧龙','傅超军','刘驰誉','钟伟伟',
				'刘志明','李君','马红亮'	,'贾亚丽']; //数组
				
				
				var oBox1=document.getElementById('box1')
				var oBtn = document.getElementById('btn');
				var oBtn1 = document.getElementById('btn1');
				var oCtn = document.getElementById('content');
				var timer=null;	
		
			oBtn.onclick=function(){
//				for (var i=0;i<arr.length;i++) {
//				oCtn.innerHTML+="<a>"+arr[i]+"</a>";
//			};
				clearInterval(timer);
				timer=setInterval(function(){
				var num =Math.floor(Math.random()*arr.length); 
				oCtn.innerHTML="<a>"+arr[num]+"</a>";
				 },30);
				 
				oBtn1.onclick=function(){
					clearInterval(timer);
				};
};
			
