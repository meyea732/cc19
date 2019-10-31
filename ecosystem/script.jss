$(document).ready(function() {

	function addCreature() {
		$(this).removeClass("square");
		$(this).addClass("creature");
		$(this).click(addMouth);
	}
	function addMouth() {
		var newMouth = $("<div></div");
		newMouth.addClass("smile");
		$(this).append(newMouth);
	}
	$(".square").click(addCreature);
	$(".creature").click(addMouth);
});