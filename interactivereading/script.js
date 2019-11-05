$(document).ready(function() {

	var box = $("#box");
	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();

	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		var pageHeight = $(document).innerHeight();
		
		
		var scrolledDecimal = scrollTop/(pageHeight - windowHeight);
		var scrolledPercent = 100-(scrolledDecimal*100);

		water.css({
			top: scrolledPercent+"%"
		});
	});

	var fire = $(".fire");
	$.each(fire, function(index, fire) {
		var rotate = Math.random() * (30);
		var x = Math.random() * windowWidth;
		var y = Math.random() * windowHeight;

		setTimeout(function() {
			$(fire).css({
				opacity: 1
			});
		}, 2000*index);

	});
});