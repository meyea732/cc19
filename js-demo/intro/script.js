$(document).ready(function() {
	var text = "Hello world!";
	var box = $("#box");
	var addTextToBox = function() {
		//box.append(text);
		var textBox = $("<span></span>");
		textBox.addClass("text-box");
		textBox.append(text);
		box.append(textBox);
	}
	box.click(addTextToBox);
});