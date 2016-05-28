var sponsorList = $(".ul-sponsor ul");

$("#load-more").click(function (){
	event.preventDefault();
	$(".photos-hide").show(500);
	$("#load-more").hide();
});

$(".message").bind("submit",function(){
	event.preventDefault();
	$(".sended-message").show();
	$(".sended-message").fadeOut(3000); 
	$(".message").children().each(function(){
		$(this).val("");
	});
});

$(".sponsor-left").click(function(){
	event.preventDefault();
	// var position = sponsorList.position();
	// var newPosition = position.left-205;
	// sponsorList.css("transform", "translateX("+newPosition+"px)");
	var firstLi = $(".ul-sponsor ul li:first-child");
	firstLi.detach();
	// sponsorList.css("left", "0");
	sponsorList.append(firstLi);
	sponsorList.css("transform", "translateX(0px)");
});

$(".sponsor-right").click(function(){
	event.preventDefault();
	// var position = sponsorList.position();
	// var newPosition = position.left+205;
	// sponsorList.css("transform", "translateX("+newPosition+"px)");
	var lastLi = $(".ul-sponsor ul li:last-child");
	lastLi.detach();
	sponsorList.prepend(lastLi);
});