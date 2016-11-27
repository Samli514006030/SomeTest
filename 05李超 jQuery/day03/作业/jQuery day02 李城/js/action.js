//顶部闪烁
var oh1 = $('h1');
var ileft = -300;

setInterval(function() {
	//累积偏移量
	ileft += 10;

	if(ileft == 800) {
		ileft = -300;
	}
	//设置背景位置
	oh1.css('background-position', ileft);
}, 20);

//图片1实现效果:1 鼠标移动到图片上时,图片宽高扩大一倍,其他两幅图片缩小
//					       2 鼠标离开图片,恢复原样
$('#box :first-child').mouseover(function() {
	$(this).animate({
		width: "50%",
		height: "50%"
	}, 1000);
	$('#box :nth-child(2)').animate({
		width: "15%",
		height: "15%"
	}, 1000);
	$('#box :last-child').animate({
		width: "15%",
		height: "15%"
	}, 1000);
});

$('#box :first-child').mouseout(function() {
	$(this).animate({
		width: "25%",
		height: "25%"
	}, 1000);
	$('#box :nth-child(2)').animate({
		width: "25%",
		height: "25%"
	}, 1000);
	$('#box :last-child').animate({
		width: "25%",
		height: "25%"
	}, 1000);
});

//图片2实现效果：1.鼠标移动到图片上方，图片隐藏
$('#box :nth-child(2)').mouseover(function() {
	$(this).toggle(500);
});
$('#box :nth-child(2)').mouseout(function() {
	$(this).toggle(500);
});

//图片3实现效果：淡入淡出
$('#box :last-child').hover(function() {
	$(this).fadeTo('slow', 0.5, 'linear');
});

$('#box :last-child').mouseout(function() {
	$(this).fadeTo('fast', 1, 'linear');
});