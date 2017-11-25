/*Initial Slick Slider*/


;
(function ($) {
	"use strict";
	/*Isotope*/
	$(document).ready(function () {
		const $elements = $('.grid').isotope({
			itemSelector: '.grid-img',
			percentPosition: true
		});

		$('.grid__btn').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			console.log(this);
			$elements.isotope({
				filter: filterValue
			});
		});

		$('.grid__btn').on('click', function () {
			$('.grid__filters').find('.grid__btn--checked').removeClass('grid__btn--checked');
			$(this).addClass('grid__btn--checked');
			console.log(this);
		});
	});
	/* Isotop*/
	$(".navlist").on("click","a", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 500);
  $(".navlist").find('.navlist__item__link--active').removeClass('navlist__item__link--active');
  $( this ).addClass('navlist__item__link--active');
});

$(".scroll-to").on("click", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 1000);
});


	/*Slider*/
	$(function () {
		$('.team__slide').slick({
			dots: true,
            autoplaySpeed: 4000
		});
	});
	$('.test__slider').slick({
		dots: true,
		autoplaySpeed: 4000
	});
	/*slider*/

/*MAP*/
    function initMap() {
        var uluru = {lat: 49.568517, lng: 34.585530};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }


	$(window).on('load', function () {
		initMap();
	});
})(jQuery);
