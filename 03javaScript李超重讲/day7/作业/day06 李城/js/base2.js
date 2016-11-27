//清除一个字符串数组中的空格，输出里面的内容，调用方法：removeArrObj(数组名称,''); 
function  removeArrObj(arr,obj){
	for(var i=0; i<arr.length; i++){
      	//console.log(arr.length);
        if(arr[i]==obj){
          	arr.splice(i,1);
          	i--;
        }  	
        console.log(i);
       }
}

//绑定事件
function  bindEvent(obj,event,fn,bl){
	if(obj.addEventListener){	
		//IE11和标准浏览器
		obj.addEventListener(event,fn,bl);
	}else{
		//IE6~10
		obj.attachEvent('on'+event,fn);
	}
	
}

//取消绑定事件
function  removeEvent(obj,event,fn,bl){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fn,bl);
	}else{
	    obj.detachEvent('on'+event,fn);	
	}
}

//取消或禁止事件传递
function cancelEvTrans(ev){
	if(ev.stopPropagation){
		//标准
	   	ev.stopPropagation();  
	 }else
	 	//IE6~IE8
	   	ev.cancelBubble=true;   
}