$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.png" alt="Electron Club">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService();
		}, 50)
	});

	$('.carousel-services').owlCarousel({
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});


	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths  = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();

			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize({

	})

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	})

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});


	//Resize Window
	function onResize(){
			$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize();carouselService();};

});


$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
})