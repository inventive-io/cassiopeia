(function ($) {
	var $document = $(document);

	$document.ready(function () {
		$('.project').on('click', function() {
			var index = $(this).data('index');
			$('.proj[data-index="' + index + '"]').addClass('proj--active');
		});

		$('.head__nav li').on('click', function() {
			var section = $(this).data('section');

			if (section === 'work') {
				$('.about').removeClass('section--active');
				$('.work').addClass('section--active');
			} else {
				$('.work').removeClass('section--active');
				$('.about').addClass('section--active');
			}
		});

		$('.proj__icon').on('click', function(e) {
			$('.proj').removeClass('proj--active');
		});
    });

})(jQuery);