var num=0;
var timer=null;
var bannerColor=["#02caff","#ec3a4a","#68bef4","#560099","#e3e3dc","#fef961","#e5395f","#f9a52c","white"];
$(function(){
	clearInterval(timer);
	$("#leftblock").hide();
	$(window).scrollTop(0);
	$(":text").val("前端坑很多，勇于采坑才能练就大神之路！fighting!").css("color","red");
	$("#navList a:lt(3)").addClass("redA");
	$("#banner").addClass("banner1");
	setSearchLeft($("#searchbox"),90);
	setSearchLeft($("#suggestGoods"),130);
	$("#foldBanner").on("click",function(){
		Math.round($("#banner").height())==300?$("#banner")[0].className="banner1":$("#banner")[0].className="banner2";
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
	timer = setInterval(lunbo,2000);
});

$("#mainBanner").hover(function(){
	clearInterval(timer);
	$(this).css("cursor","pointer");
	$("#lunboPrev").css("top","160px").show();
	$("#lunboNext").css("top","160px").show();
},function(){
	timer = setInterval(lunbo,2000);
	$(this).css("cursor","");
	$("#lunboPrev").hide();
	$("#lunboNext").hide();
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

$(window).on("reload",function(){
		clearInterval(timer);
		timer = setInterval(lunbo,2000);
});


