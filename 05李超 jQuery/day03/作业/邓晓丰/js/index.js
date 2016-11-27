var ali = $('#warp li');
var acontent = $('.content');
var nowPage = 0;
var action = 0;
$(window).keydown(function(ev) {
	$(':animated').finish();
	if(ev.keyCode == 39) {
		if(nowPage == ali.length - 1) {
			return;
		}
		next();
	} else if(ev.keyCode == 37) {
		if(nowPage == 0) {
			return;
		}
		last();
	}
});

$(document).click(function() {
	$(':animated').finish();
	var child = acontent.eq(nowPage).children();
	if(action >= child.length) {
		if(nowPage == ali.length - 1) {
			return;
		}
		next();
		return;
	}
	showTime(child.eq(action), 500);
	action++;
});

function next() {
	action = 0;
	ali.eq(nowPage).hide(600, function() {
		nowPage++;
		showTime(ali.eq(nowPage), 500);
	});
}

function last() {
	action = 0;
	ali.eq(nowPage).hide(600, function() {
		nowPage--;
		showTime(ali.eq(nowPage), 500);
	});
}

function showTime(jq, time) {
	var i = parseInt(Math.random() * 3);
	switch(i) {
		case 0:
			jq.show(time);
			break;
		case 1:
			jq.slideDown(time);
			break;
		case 2:
			jq.fadeIn(time);
			break;
	}
}