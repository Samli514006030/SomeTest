var add=document.getElementById('button1');
			var del1=document.getElementById('button2');
			var del2=document.getElementById('button3');
			var getName=document.getElementById('name');
			var oShow=document.getElementById('show');
			var message=document.getElementById('message');
			var nan=document.getElementById('nan');
			var nv=document.getElementById('nv');
			var arr=new Array;
			var person=new Object;
			
			//初始化
			var str=['程建政', '刘世颖',  '邓晓峰', '傅超军', '张超凡', '俞均龙', '陈峰', 
			'周喜良', '朱何优',  '吴闻', '刘志明','樊占军','李诚','贾亚丽'];
			for (var i=0;i<str.length;i++) {				
				if(str[i]=='贾亚丽'){
					var person={name:str[i],sex:'女'};
				}
				else{
					var person={name:str[i],sex:'男'};
				}
				arr.push(person);
			}			
			show();	
			
			//添加成员			
			add.onclick=function(){
				var na=getName.value;
				if(na==''){					
				showMessage('亲，不能输入为空哦');				
				return;			
			    }
				else{
					var s=nan.checked?'男':'女'; 
					person={name:na,sex:s};
					arr.push(person);
					show();
					showMessage('添加成功');		
				}
			}
			
			//删除1			
			del1.onclick=function(){
				if(arr.length==0){
				showMessage('亲，没有人啊');
				return;					
				}
				else{					
					arr.pop(person);
					show();
					showMessage('删除成功');
				}
			}
			
			//删除2
			del2.onclick=function(){
				showMessage('亲，没有这个人')
				var na=getName.value;
				if(na==''){					
				showMessage('亲，不能输入为空哦');				
				return;			
			   }				
				if(arr.length==0){
				showMessage('亲，没人啊');
				return;					
				}				
				for (var i=0;i<arr.length;i++) {
					if(arr[i].name==na){
						arr.splice(i,1);
						show();
						showMessage('删除成功');
						return;					
					}					
				}			
			}

		//显示信息
		function show(){
			oShow.innerHTML='';
			for (var i=0;i<arr.length;i++) {
				if(arr[i].sex=='女'){
				    oShow.innerHTML+='<span class="nv">'+arr[i].name+'</span>';			                    
				}
				else{
					oShow.innerHTML+='<span class="nan">'+arr[i].name+'</span>';				
				}
			}		
		}
		
		//提示信息
		function showMessage(str){
			message.innerHTML=str;			
			setTimeout(function(){
				message.innerHTML='';			
			},1000);	
		}	