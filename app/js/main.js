$(function () {
	$('.slider-top').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	$('.shop-filters__price-input').ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function (data) {
			$('.shop-filter__price-from').text(data.from);
			$('.shop-filter__price-to').text(data.to);
		},
		onChange: function (data) {
			$('.shop-filter__price-from').text(data.from);
			$('.shop-filter__price-to').text(data.to);
		}
	});
	$('.shop-filters__recent-stars').rateYo({
		starWidth: '12px',
		readOnly: true,
	})
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