

var pageX = document.documentElement.clientWidth;
var pageY = document.documentElement.clientHeight;
var oPage = document.getElementById('page');
if(pageY>540){
	oPage.style.marginBottom = 	(parseInt(pageY)-540)/2+'px'
	oPage.style.marginTop = 	(parseInt(pageY)-540)/2+'px'
}
$(function(){
//	console.log(document.documentElement.clientHeight);
//	console.log(document.documentElement.clientWidth);
	
//	var page = $('#page');
//	console.log(page.css('margin-top'));
//	
//	if(pageY>540){
//		page.css('margin-top') = (parseInt(pageY)-540)/2+'px';
//		page.css('margin-bottom') = (parseInt(pageY)-540)/2+'px';
//		console.log((parseInt(pageY)-540)/2);
////		page.style.marginTop='pageY-540)/2';
////	    page.style.marginBottom='pageY-540)/2';
//		console.log(page.css('margin-top'));
//	}
});