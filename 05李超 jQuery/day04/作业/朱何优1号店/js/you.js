var num=0;
var list =null;
var timer=null;
var bannerColor=["#02caff","#ec3a4a","#68bef4","#560099","#e3e3dc","#fef961","#e5395f","#f9a52c","white"];
$(function(){
	clearInterval(timer);
	lunbo();
	$("#leftblock").hide();
	$(window).scrollTop(0);
	$(":text").val("");
	$("#navList a:lt(3)").addClass("redA");
	$("#banner").addClass("banner1");
	setSearchLeft($("#searchbox"),90);
	setSearchLeft($("#suggestGoods"),130);
	$("#foldBanner").on("click",function(){
		Math.round($("#banner").height())==300?$("#banner")[0].className="banner1":$("#banner")[0].className="banner2";
	});
	timer = setInterval(lunbo,2000);
	$.get('goods.txt',function(data,status){
		if("success" == status){
		  list = data.split("m");
		  list.num=0;
		  setInterval(function(){
		  	if(list.num==list.length){
		  		list.num=0;
		  	}
		    var	listGoods =  list[list.num++].split(" ");
		    for (var i=0;i<$("#suggestGoods a").length;i++) {
		    	$("#suggestGoods a")[i].innerText=listGoods[i];
		    }
		  },2000);
		}
	});
	
});

$("#helps ul").hover(function(){
	$(this).childNodes().show();
},function(){
	$(this).childNodes().hide();
});

$("#lunboPrev").on("click",function(){
	if(num==1){
		num=9;
	}else{
		num--;
	}
	change(num);
});

$("#lunboNext").on("click",function(){
	if(num==9){
		num=1;
	}else{
		num++;
	}
	change(num);
});

$("#spanList span").click(function(ev){
	clearInterval(timer);
	change($(ev.target).index()+1);
});

$("#mainBanner").hover(function(){
	clearInterval(timer);
	$("#lunboPrev").show();
	$("#lunboNext").show();
},function(){
	clearInterval(timer);
	timer = setInterval(lunbo,2000);
	$("#lunboPrev").hide();
	$("#lunboNext").hide();
});

$("#destination").mouseover(function(ev){
	$(this).css("cursor","pointer");
	$("#citys").show();
});

$("#citys").hover(function(){
		$("#citys").show();
	},function(){
		$("#citys").hide();
	});
function lunbo(){
	num=num%9+1;
	change(num);
}

function change(num){
	$("#lunbotu>img").attr("src","img/banner_"+num+".jpg");
	$("#mainBanner:first").css("background",bannerColor[num-1]);
	$("#mainBanner:nth-of-type(3)").css("background",bannerColor[num-1]);
	$("#spanList>span").eq(num-1).addClass("currentSpan");
	$("#spanList>span").eq(num-1).siblings().removeClass("currentSpan");
}

function setSearchLeft(obj,num){
	var searchLeft =($(window).width()-obj.width())/2-num;
	obj.css("left",searchLeft+"px");
}

$(window).on("scroll",function(){
	var windowTop = $(window).scrollTop();
	$("#leftblock").css("top",200+windowTop+"px").show();
	if(parseInt($("#leftblock").css("top"))<500){
		$("#leftblock").hide();
	}
	$("#rightbar").css("top",200+windowTop+"px");
	if(windowTop>116){
		$("#searchbox").css("position","fixed");
		setSearchLeft($("#searchbox"),15);
	}else{
		$("#searchbox").css("position","absolute");
		setSearchLeft($("#searchbox"),90);
	}
});



