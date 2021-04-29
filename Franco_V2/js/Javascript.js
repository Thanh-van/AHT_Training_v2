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
function Autocomplete() {
	var availableTags = [];
    var name = $('.featured__item-text-name a h2');
    for (var i = 0; i < name.length; i++) {
    	availableTags.push(name[i].innerText);
    }
    $("#tags").autocomplete({
      source: availableTags
    });
}
$(document).ready(function(){

  $('#add_seach').click(function(e) {	
  	$('.seach_box').addClass("seach__active"); 
	e.preventDefault();
	});
  $('#seach__close').click(function(e) {	
  	$('.seach_box').removeClass("seach__active"); 
	e.preventDefault();
	});
  
  $("#cart_add").click(function(e) {	
  		$('.shop__cart__main').addClass('shop__cart__main__click');
		e.preventDefault();
	});

  $("#close_cart").click(function(e) {	
  		$('.shop__cart__main').removeClass('shop__cart__main__click');
		e.preventDefault();
	});
  

  $('.blog__icon ul li a').click(function(e) {
  	e.preventDefault();
  	var width = $('.slide_defaul').width();
  	var margin = $('.slide_defaul').css('margin-right');
  	margin = parseInt(margin.replace("px",""));
  	var x= $('.blog__main-item ul li');
  		var tam=parseInt(width)*3+margin*3;
  		if (win > 768 ) {
  			tam=parseInt(width)*3+margin*3;
  		}else{
  			tam=parseInt(width)*2+margin*2.3;
  		}
  		var win=$( window ).width();
  	if (e.target.className === "slide sl1") {
  		$('.slide_defaul').css("margin-left","0px");
  	}
  	if (e.target.className === "slide sl2") {
  	  	$('.slide_defaul').css('margin-left','-'+tam+'px');	
  	}
  	if (e.target.className === "slide sl3") {
  			$('.slide_defaul').css('margin-left','-'+tam*2+'px');	
		}
	if (e.target.className === "slide sl4") {
		  		if (win < 426 ) {
  			tam=parseInt(width)*2+margin*2.5;
  		}
		$('.slide_defaul').css('margin-left','-'+tam*3+'px');	
	}
	if (e.target.className === "slide sl5") {
		  		if (win < 426 ) {
  			tam=parseInt(width)*2+margin*2.5;
  		}
		$('.slide_defaul').css('margin-left','-'+tam*4+'px');	
	}
  			$('.slide').removeClass('icon_active');
  		
  			//console.log(x[0]);
  			$(e.target).addClass("icon_active");
  		
	});
  Autocomplete();
});