$(function () {

	$('.wrapper').addClass('loaded');

	// BURGER TOGGLE
	$('.menu__icon').click(function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});


	// IBG
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();


	// FIXED HEADER
	var header = $('#header');
	var headerH = header.innerHeight();
	var scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, headerH);

	$(window).on('scroll resize', function () {
		var headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, headerH);
	});

	function checkScroll(scrollPos, headerH) {
		if (scrollPos > headerH + 20) { header.addClass('fixed'); } else {
			header.removeClass('fixed');
		}
	};


	// SLIDER
	$(document).ready(function () {
		if ($('.slider__body').length > 0) {
			$('.slider__body').slick({
				// autoplay: true,
				// autoplaySpeed: 3000,
				// infinite: false,
				dots: true,
				arrows: false,
				accessibility: false,
				slidesToShow: 1,
				adaptiveHeight: true,
				nextArrow: '<button type="button" class="slick-next"></button>',
				prevArrow: '<button type="button" class="slick-prev"></button>',
				// responsive: [{
				// 	breakpoint: 768,
				// 	settings: {}
				// }]
			});
		}
	});

	// SMOOTH SCROLL
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		var elementId = $(this).data('scroll');
		var elementOffset = $(elementId).offset().top;

		$('.menu__list a').removeClass('link-active');
		$(this).addClass('link-active');
	
		$('.menu__body').removeClass('active');
		$('.menu__icon').removeClass('active');
		$('body').removeClass('lock');
		
		$('html, body').animate({ scrollTop: elementOffset - 69 }, 1500);
	});

	
	
	// FIELDS
	function forms() {
		$('input,textarea').focus(function () {
			if ($(this).val() == $(this).attr('data-value')) {
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
				if ($(this).attr('data-type') == 'pass') {
					$(this).attr('type', 'password');
				};
				$(this).val('');
			};
			removeError($(this));
		});
		$('input[data-value], textarea[data-value]').each(function () {
			if (this.value == '' || this.value == $(this).attr('data-value')) {
				if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
					$(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
				} else {
					this.value = $(this).attr('data-value');
				}
			}
			if (this.value != $(this).attr('data-value') && this.value != '') {
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
				if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
					$(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
				}
			}
			$(this).click(function () {
				if (this.value == $(this).attr('data-value')) {
					if ($(this).attr('data-type') == 'pass') {
						$(this).attr('type', 'password');
					};
					this.value = '';
				};
			});
			$(this).blur(function () {
				if (this.value == '') {
					if (!$(this).hasClass('l')) {
						this.value = $(this).attr('data-value');
					}
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
					if ($(this).attr('data-type') == 'pass') {
						$(this).attr('type', 'text');
					};
				};
				if ($(this).hasClass('vn')) {
					formValidate($(this));
				}
			});
		});
		$('.form-input__viewpass').click(function (event) {
			if ($(this).hasClass('active')) {
				$(this).parent().find('input').attr('type', 'password');
			} else {
				$(this).parent().find('input').attr('type', 'text');
			}
			$(this).toggleClass('active');
		});
	}
	forms();


})





























