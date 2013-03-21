$(function () {
	$(".title-content h2").fitText();
	$(".title-content h3").fitText(1.5);
});

window.onload = function() {
	var windowWidth = 0;
	
	if ( window.screen.width < window.outerWidth){
		windowWidth = window.screen.width;
	}
	else{
		windowWidth = window.outerWidth;
	}
	// if im not mobile
	if(window.matchMedia("(min-width:30em)").matches){
		$("[data-src]").each(loadNormalImage);
	}
	// if i am mobile
	else{
		$("[data-src]").each(loadMobileImage);
	}
}


function loadMobileImage()
{
	//if the data-show-mobile attribute doesn't exist
	if(!$(this).data("show-mobile") || 
		$(this).data("show-mobile").toLowerCase() == "no") return;
	
	var imgSrcLarge = $(this).data("src");
	var imgSrcSmall = $(this).data("src-480");
	
	if(imgSrcSmall)	//if there is a small image defined
	{
		//create an image based on small src
		$("<img src='" + imgSrcSmall + "'>").appendTo($(this));
	}
	else
	{
		//create an image based on large src
		$("<img src='" + imgSrcLarge + "'>").appendTo($(this));
	}
}

function loadNormalImage() {
	var imageSrc = $(this).data("src");
	$("<img src='"+imageSrc+"' >").appendTo($(this));
}


