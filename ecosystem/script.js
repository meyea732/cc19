$(document).ready(function() {

	$(function() {
		$("#spookyszn").delay(5000).fadeIn();
	})
	$(function() {
		$("#spookyszn").delay(200).fadeOut();
	})
	$(function() {
		$("#spookyszn").delay(3000).fadeIn();
	})
	$(function() {
		$("#spookyszn").delay(200).fadeOut();
	})
	$(function() {
		$("#spookyszn").delay(2000).fadeIn();
	})
	$(function() {
		$("#spookyszn").delay(200).fadeOut();
	})
	$(function() {
		$("#spookyszn").delay(1000).fadeIn();
	})
	$(function() {
		$("#spookyszn").delay(200).fadeOut();
	})
	function addCreature() {
		$(this).removeClass("square");
		$(this).addClass("creature");
		$(this).click(addSmile);
	}
	function addSmile() {
		var newSmile = $("<div></div");
		newSmile.addClass("smile");
		$(this).append(newSmile);
		$(newSmile).click(addFrown);
	}
	function addFrown() {
		$(this).removeClass("smile");
		$(this).addClass("frown");
	}
	$(".square").click(addCreature);
	$(".creature").click(addSmile);
	$(".smile").click(addFrown);
});