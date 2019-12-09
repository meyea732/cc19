	$(function (){
var $window = $(window);
var win_height_padded = $window.height() * 1.1;
	$window.on('scroll', revealOnScroll);
	function revealOnScroll() {
		var scrolled = $window.scrollTop(), win_height_padded = $window.height() * 1.1;
		$('.revealOnScroll:not(.animated').each(function() {
			var $this = $(this), offsetTop = $this.offset().top;
			if (scrolled + win_height_padded > offsetTop) {
					if ($this.data('timeout')) {
						window.setTimeout(function () {
							$this.addClass('animated ') + $this.data('animation');
					}, parseInt($this.data('timeout'), 10));
				} else {
					$this.addCLass('animated ') +$this.data('animation');
				}
			}
		});
		$('.revealOnScroll.animated').each(function(index) {
			var $this = $(this), offsetTop = this.offset().top;
			if (scrolled + win_height_padded < offsetTop) {
				$(this) .removeClass('animated fadeInUp flipInX lightSpeedIn');
			}
		});
	}
	revealOnScroll;
});