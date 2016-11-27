
	//留言版
		
			var show = document.getElementById('show');
			var txt = document.getElementById('txt');
			var tj = document.getElementById('tj');
			var bq = document.getElementById('bq');
			var yc = document.getElementById('yc');
			i=1;
			tj.onclick = function(){
			 	show.innerHTML=i+'楼'+':'+txt.value+'<br/>'+show.innerHTML;
				i++;	
				txt.value = '';
//				if(txt.value==''){
//					alert('请提交内容呢');
//				}
			};
			bq.onclick = function(){
				yc.style.display='block';
				
			}
			txt.index = true;
			txt.onfocus = function(){
				if(txt.index){
					txt.value = '';
					txt.index = false;
				}
			}
			txt.onblur = function(){
				if(txt.value==''){
					txt.value = '请提交内容';
					txt.index = true;
				}
			}
