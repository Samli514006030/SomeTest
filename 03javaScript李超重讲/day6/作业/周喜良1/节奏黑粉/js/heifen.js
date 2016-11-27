	        var btn=document.getElementById('btn');
			var obox1=document.getElementById('box1');
			var obox2=document.getElementById('box2');
			var index=1;
			
			
			//创建时间
			var date=new Date();
			console.log(date);
			var h=date.getHours();
			var s=date.getMinutes();
			var m=date.getSeconds();
			var year=date.getFullYear();
			var month=date.getMonth()+1;
			var day=date.getDay();
//			console.log(''+h+':'+s+':'+m+'');
            var str=year+'年'+month+'月'+day+'日 '+h+':'+s+':'+m;
			console.log(str);
			
			obox1.value='在此输入内容，马上回复楼主';
			//调用
			obox1.onfocus=show1;
			
			btn.onclick=show;
			
			//输入框提示
			function show1(){
				obox1.value='';
			}
			//obox2 显示
			function  show(){
				
				if(obox1.value==''){
					alert('大爷你不留下点足迹嘛');					
				obox1.style.border='1px solid red';
				}
			//创建p节点
			var p1=document.createElement('p');
			//初始化节点
			    p1.innerHTML+='<img src="img/留言板/tx.gif" />';
				p1.innerHTML+=index+'匿名用户';				
				p1.innerHTML+='  ';				
				p1.innerHTML+=obox1.value;
				p1.innerHTML+='&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+str;
				
				
			//添加
			    obox2.appendChild(p1);
			    index++;
			    console.log(p1);			    
			    obox1.value='';
			    obox1.value='在此输入内容，马上回复楼主';
		  }		