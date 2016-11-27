// JavaScript Document

	
	var box1=document.getElementsByClassName('box1');  
	var box2=document.getElementsByClassName('box2');
	var box3=document.getElementsByClassName('box3');
	var box4=document.getElementsByClassName('box4');
	var box5=document.getElementsByClassName('box5');	
	var ipn=document.getElementById('inp1');
	var odiv=document.getElementById('odiv');
	var odiv1=document.getElementById('odiv1');
	var odiv2=document.getElementById('odiv2');
	
	var arr=['朱何忧','俞均龙','李为龙','钟利民','马行亮','李君','傅超军','刘驰誉','周喜良','陈健','李家盛','钟伟伟','贾亚丽','邓晓丰','程建政','吴闻','冼锐健','陈峰','张超凡','韦文会','李诚','樊占军',];
	var i=0;
	var otime;
	var a=true;
	ipn.onclick=function(){
		if(a){
		clearInterval(otime);
		odiv2.style.display='none';
		ipn.value='停止点名';
		otime=setInterval(
		function(){
			odiv.innerHTML=arr[i];
			odiv1.innerHTML=parseInt(Math.random()*20);
		for(var b=0;b<box1.length;b++ ){
			if(box1[b].innerHTML==arr[i]){
				box1[b].style.background='blue';
				}
			 else{
				 box1[b].style.background='';
				 }	
			}
		for(var b=0;b<box2.length;b++ ){
			if(box2[b].innerHTML==arr[i]){
				box2[b].style.background='red';
				}
			 else{
				 box2[b].style.background='';
				 }	
			}
		for(var b=0;b<box3.length;b++ ){
			if(box3[b].innerHTML==arr[i]){
				box3[b].style.background='yellow';
				}
			 else{
				 box3[b].style.background='';
				 }	
			}
		for(var b=0;b<box4.length;b++ ){
			if(box4[b].innerHTML==arr[i]){
				box4[b].style.background='purple';
				}
			 else{
				 box4[b].style.background='';
				 }	
			}
			if(box5[0].innerHTML==arr[i]){
				box5[0].style.background='blue';
				}
			 else{
				 box5[0].style.background='';
				 }
			i++;
		  if(i==arr.length){
			  i=0;
			  } 	
		},50)}
		else{
			clearInterval(otime);
			ipn.value='开始点名';
			odiv2.style.display='block';
			odiv2.innerHTML='恭喜：'+odiv.innerHTML;
			}
		  a=!a;
		};
	
		
		
		
	