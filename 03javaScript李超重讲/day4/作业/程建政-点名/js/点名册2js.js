// JavaScript Document
 
var inp=document.getElementById('inp');
var box1=document.getElementById('box1');
var box2=document.getElementById('box2');
var box3=document.getElementById('box3');

var arr=[['朱','何','忧'],['俞','均','龙'],['李','为','龙'],['钟','利','民'],['马','行','亮'],['李','','君'],['傅','超','军'],['刘','驰','誉'],['周','喜','良'],['陈','','健'],['李','家','盛'],['钟','伟','伟'],['贾','亚','丽'],['邓','晓','丰'],['程','建','政'],['吴','','闻'],['冼','锐','健'],['陈','','峰'],['张','超','凡'],['韦','文','会'],['李','','诚'],['樊','占','军']];
var arrb=['-1','1','-1','1','-1','1','-1','0'];
var i=0;
var a=true;
var otime;
var otime1;
var otime2;
inp.onclick=function(){
	if(a){
	clearInterval(otime);
	clearInterval(otime1);
	clearInterval(otime2);
	inp.value='结束点名';	
	 otime=setInterval(
	   function(){
	   box1.innerHTML=arr[i][0];
	   box2.innerHTML=arr[i][1];
	   box3.innerHTML=arr[i][2];
	   i++;
	   if(i>21)
	   {i=0;}
	   },10)}
	 else{
		  clearInterval(otime);
		  clearInterval(otime1);
		  clearInterval(otime2);
		  inp.value='开始点名';
		  col();
		  douD();
		  } 
		a=!a;  
	}
	
	

function col(){
	 var b=true;
		  otime1=setInterval(
		   function(){
			 if(b){
			  box1.style.color='red';
			  box2.style.color='pink';
			  box3.style.color='gold';
			  }
			 else{ 
			 box1.style.color='blue';
			 box2.style.color='purple';
			 box3.style.color='green';
			 } 
			 b=!b;
			 },100
			)
	};
	
	
function douD(){
	var c=0;
	otime2=setInterval(
	 function(){
		 box1.style.left=(150-arrb[c])+'px';
		 box3.style.left=(310-arrb[c])+'px';
		 box2.style.top=(arrb[c]-220)+'px';
		 c++;
		 if(c>7)
		 c=0;
		 }
	)
}	
	