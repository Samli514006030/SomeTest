	var oText1=document.getElementById('text1');
	var oBtn=document.getElementById('btn');
	var oContent=document.getElementById('content');
	var oInput=document.getElementsByTagName('input');
	var oLi=document.getElementsByTagName('li');
	var aDiv=document.getElementsByClassName('board')
	oBtn.onclick=function(){  
		//  这里是在留言板输入文字
		oContent.innerHTML+='<img src="img/tt.png">'+'<span>闯到江湖20年</span>'+'<li>'+oText1.value+'</li>'
	}
	
	for(var i=0;i<oInput.length;i++){   
		
		oInput[i].onclick=function(){
			for (var i=0;i<oInput.length;i++) {
				oInput[i].className='';
				aDiv[i].style.display='none';
			};
				aDiv[i].style.display='block';
				this.className='active';
				
		};
	};
