$(function () {
	$('.slider-top').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	const mixer1 = mixitup('.products__items', {
		selectors: {
			control: '.filter-1'
		}
	});
	const mixer2 = mixitup('.new__items', {
		selectors: {
			control: '.filter-2'
		}
	});
});