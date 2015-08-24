$(document).ready(function(){
	$(".parentText").click(function(){
		$(this).parent().find(".childText").slideToggle("slow");
	});
	$(".collapseHead").click(function(){
		$(this).parent().parent().find(".employment").slideToggle("slow");
	});
});
