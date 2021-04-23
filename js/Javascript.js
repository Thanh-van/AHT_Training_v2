function nav_bar() {
	var x=$(".header__nav-link-menu,.flex-center-item-center-content");
	var body=$("body");
	console.log(x[0].className);
	if (x[0].className === "header__nav-link-menu flex-center-item-center-content Menu_bar") {
		body.css("margin-left","0");
		body.css("transition","all .3s ease");
		x.removeClass('Menu_bar');
	}else{
		x.addClass('Menu_bar');	

		body.css("margin-left","-60%");
				body.css("transition","all .3s ease");
	}
}
function seach() {
	$('.seach_box').css("visibility","visible");
	$('.seach__main').css("top","10%");
}

$(document).ready(function(){
  $('.fa-times').click(function() {
  	$('.seach__main').css("top","-100%");
  	$('.seach_box').css("visibility","hidden");
});
});