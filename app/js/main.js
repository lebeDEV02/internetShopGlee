$(function () {
	$('.slider-top').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
	function my_prettify(n) {
		return n.toFixed(2);
	}
	$('.shop-filters__price-input').ionRangeSlider({
		type: "double",
		prefix: "$",
		prettify: my_prettify,
		step: 0.01,
		onStart: function (data) {
			$('.shop-filter__price-from').text(data.from_pretty);
			$('.shop-filter__price-to').text(data.to_pretty);
		},
		onChange: function (data) {
			$('.shop-filter__price-from').text(data.from_pretty);
			$('.shop-filter__price-to').text(data.to_pretty);
		}
	});
	$('.shop-filters__recent-stars').rateYo({
		starWidth: '12px',
		readOnly: true,
	});
	$('.shop-list__stars').rateYo({
		starWidth: '18px',
		readOnly: true,
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
	$('.user-nav__link--first').on('click', function () {
		$('.user-nav__wrapper').toggleClass('active');
	});
});