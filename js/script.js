Fancybox.defaults.placeFocusBack = false;
Fancybox.defaults.autoFocus = false;


// Select start --------------------------
function customSelect(element) {
	element.parents('.js-select__list').find('.js-select__item').removeClass('selected');
	element.addClass('selected');
	element.parents('.js-input').addClass('focus');
	let text = element.text().trim();
	let value = element.data('value');
	element.parents('.js-select').eq(0).find('.js-select__value').text(text);
	element.parents('.js-select').eq(0).find('input[type="hidden"]').val(value).trigger('change')
}

$(document).on('click', '.js-select__trigger', function (e) {
	if (!$(this).parents('.js-select').eq(0).hasClass('open')) {
		$('.js-select').removeClass('open').find('.js-select__list').removeClass('open');
		if ($(this).parents('.js-select').length > 1) {
			$(this).parents('.js-select').addClass('open').find('.js-select__list').addClass('open');
		}
		$(this).parents('.js-select').eq(0).addClass('open').find('.js-select__list').eq(0).addClass('open');
		if ($(this).parents('.js-select').find('input[type="hidden"]').val() !== '') {
			$(this).parents('.js-input').addClass('focus')
		} else {
			$(this).parents('.js-input').removeClass('focus')
		}
	} else {
		$(this).parents('.js-select').eq(0).removeClass('open').find('.js-select__list').eq(0).removeClass('open');
		if ($(this).parents('.js-select').find('input[type="hidden"]').val() !== '') {
			$(this).parents('.js-input').addClass('focus')
		} else {
			$(this).parents('.js-input').removeClass('focus')
		}
	}
});
$(document).on('click', '.js-select__close', function () {
	$(this).parents('.js-select').eq(0).find('.js-select__trigger').removeClass('open')
	$(this).parents('.js-select').eq(0).removeClass('open').find('.js-select__list').removeClass('open');
});
$(document).on('click', '.js-select__item', function () {
	if (!$(this).hasClass('selected')) {
		customSelect($(this))
	}
	$(this).parents('.js-select').eq(0).find('.js-select__trigger').removeClass('open')
	$(this).parents('.js-select').eq(0).removeClass('open').find('.js-select__list').removeClass('open');
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.js-select__trigger').length && !$(e.target).closest('.js-select__list').length) {
		$('.js-select.open').removeClass('open');
		$('.js-select__list.open').removeClass('open');
		// if ($('.js-select.open').find('input[type="hidden"]').val() !== '') {
		// 	$('.js-select.open').parents('.js-input').addClass('focus')
		// } else {
		// 	$('.js-select.open').parents('.js-input').removeClass('focus')
		// }
	}
});
$(document).ready(function () {
	$('.js-select').each(function (index, value) {
		$(value).find('.js-select__item').each(function (index, item) {
			if ($(item).hasClass('selected')) {
				$(item).trigger('click')
				customSelect($(item));
			}
		});
	});
	canLoad = true
})

// Select end --------------------------


function offerSlider() {
	let offerSlider = new Swiper(".offer-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		pagination: {
			el: ".offer-slider__pagination",
			clickable: true
		}
	});
}

function storiesBlockSlider() {
	let storiesBlockSlider = new Swiper(".stories-block-slider.swiper-container", {
		slidesPerView: 'auto',
		spaceBetween: 15,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		scrollbar: {
			el: ".stories-block-slider__scrollbar",
			draggable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 'auto',
				spaceBetween: 35,
			}
		}
	});
}

function tagsSlider() {
	let tagsSlider = new Swiper(".tags-slider.swiper-container", {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		scrollbar: {
			el: ".tags-slider__scrollbar",
			draggable: true,
		}
	});
}

function categoriesSlider() {
	let categoriesSlider = new Swiper(".categories-slider.swiper-container", {
		slidesPerView: 1.8,
		spaceBetween: 15,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		navigation: {
			nextEl: ".categories-slider__next",
			prevEl: ".categories-slider__prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2.5,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
	});
}

function stockSlider() {
	let stockSlider = new Swiper(".stock-slider.swiper-container", {
		slidesPerView: 2,
		spaceBetween: 10,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		navigation: {
			nextEl: ".stock-slider__next",
			prevEl: ".stock-slider__prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 1.4,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		}
	});
}

function productSlider() {
	let productSlider = new Swiper(".product-slider.swiper-container", {
		slidesPerView: 2,
		spaceBetween: 10,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		pagination: {
			el: ".product-slider__pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".product-slider__next",
			prevEl: ".product-slider__prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
	});
}

function setProductsSlider() {
	let setProductsSlider = new Swiper(".set-products-slider.swiper-container", {
		slidesPerView: 2,
		spaceBetween: 10,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		pagination: {
			el: ".set-products-slider__pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".set-products-slider__next",
			prevEl: ".set-products-slider__prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		}
	});
}

function sliderImages() {
	let sliderImages = new Swiper(".slider-images.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		pagination: {
			el: ".slider-images__pagination",
			clickable: true
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		}
	});
}

function giftSlider() {
	let giftSlider = new Swiper(".gift-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		pagination: {
			el: ".gift-slider__pagination",
			clickable: true
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
		}
	});
}

function sliderColors() {
	let sliderColors = new Swiper(".slider-colors.swiper-container", {
		slidesPerView: 'auto',
		spaceBetween: 12,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		scrollbar: {
			el: ".slider-colors__scrollbar",
			draggable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
		}
	});
}

function personalSlider() {
	let personalSlider = new Swiper(".personal-slider.swiper-container", {
		slidesPerView: 1.08,
		spaceBetween: 20,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		freeMode: true,
		scrollbar: {
			el: ".personal-slider__scrollbar",
			draggable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		}
	});
}

function personalSliderInner() {
	let personalSliderInner = new Swiper(".personal-slider-inner.swiper-container", {
		slidesPerView: 1.08,
		spaceBetween: 20,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		freeMode: true,
		scrollbar: {
			el: ".personal-slider-inner__scrollbar",
			draggable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3.2,
				spaceBetween: 20,
			},
			1340: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
	});
}

function bouquetsLookSlider() {
	let bouquetsLookSlider = new Swiper(".bouquets-look-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		centeredSlides: true,
		pagination: {
			el: ".bouquets-look-slider__pagination",
			clickable: true
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				speed: 700,
			},
			992: {
				speed: 1000,
				slidesPerView: 3,
				spaceBetween: 160,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 185,
			},
		}
	});
}

function sliderType() {
	let prev, next, scrollbar;
	$(".slider-type.swiper-container").each(function (index, value) {
		prev = $(value).parents('.slider-type-block').find('.slider-type__prev')[0];
		next = $(value).parents('.slider-type-block').find('.slider-type__next')[0];
		scrollbar = $(value).parents('.slider-type-block').find('.slider-type__scrollbar')[0];
		let sliderType = new Swiper(value, {
			slidesPerView: 'auto',
			spaceBetween: 10,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			speed: 700,
			freeMode: true,
			scrollbar: {
				el: scrollbar,
				draggable: true,
			},
			navigation: {
				nextEl: next,
				prevEl: prev,
			}
		});
	});
}

function cardSliders() {

	if ($('.card-slider__slide').length > 1) {
		let cardSliderThumbs = new Swiper(".card-slider-thumbs.swiper-container", {
			spaceBetween: 10,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			breakpoints: {
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			},
		});
		let cardSlider = new Swiper(".card-slider.swiper-container", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			navigation: {
				nextEl: ".card-slider__next",
				prevEl: ".card-slider__prev",
			},
			pagination: {
				el: ".card-slider__pagination",
				clickable: true
			},
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: 20,
				}
			},
			thumbs: {
				swiper: cardSliderThumbs,
				autoScrollOffset: 1
			},
		});
	} else {
		let cardSlider = new Swiper(".card-slider.swiper-container", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			navigation: {
				nextEl: ".card-slider__next",
				prevEl: ".card-slider__prev",
			},
			pagination: {
				el: ".card-slider__pagination",
				clickable: true
			},
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: 20,
				}
			},
		});
	}
}

function bouquetDesignerSlider() {

	if ($('.bouquet-designer-slider').length) {
		let bouquetDesignerSlider = undefined;
		function initSwiper() {
			var screenWidth = $(window).width();
			if (screenWidth < 992 && bouquetDesignerSlider == undefined) {
				bouquetDesignerSlider = new Swiper(".bouquet-designer-slider.swiper-container", {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: false,
					observer: true,
					observeParents: true,
					watchOverflow: true,
					touchReleaseOnEdges: true,
					speed: 700,
					freeMode: true,
					scrollbar: {
						el: ".bouquet-designer-slider__scrollbar",
						draggable: true,
					},
					navigation: {
						nextEl: ".bouquet-designer-slider__next",
						prevEl: ".bouquet-designer-slider__prev",
					},
					breakpoints: {
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						}
					}
				});
			} else if (screenWidth > 991 && bouquetDesignerSlider != undefined) {
				bouquetDesignerSlider.destroy();
				bouquetDesignerSlider = undefined;
				$('.bouquet-designer-slider').find('.swiper-wrapper').removeAttr('style');
				$('.bouquet-designer-slider').find('.swiper-slide').removeAttr('style');
			}

		}
		initSwiper();
		$(window).resize(function () {
			initSwiper();
		});
	}
}

function mainFilterSlider() {
	// Скрипт для слайдеров в фильтрах --------------------------
	if ($('.js-slider-noui-slider').length) {
		$('.js-slider-noui-slider').each(function (index, value) {
			let from = $(value).parents('.js-slider-noui').find('.js-slider-noui-from');
			let to = $(value).parents('.js-slider-noui').find('.js-slider-noui-to');
			let min = $(value).data('min');
			let max = $(value).data('max');
			noUiSlider.create(value, {
				start: [min, max],
				connect: true,
				step: 1,
				range: {
					'min': min,
					'max': max
				},
				format: wNumb({
					decimals: 0,
					thousand: ' '

				}),
			}).on('update', function (values, handle, unencoded) {
				$(value).parents('.js-slider-noui').find('.js-slider-noui-from').val(values[0]);
				$(value).parents('.js-slider-noui').find('.js-slider-noui-to').val(values[1]);
				$(value).parents('.js-slider-noui').find('.js-slider-noui-from-text').text(values[0]);
				$(value).parents('.js-slider-noui').find('.js-slider-noui-to-text').text(values[1]);
			});

			$(from).on('change', function () {
				let parent = $(this).parents('.js-slider-noui');
				let to = $(value).find('.js-slider-noui-to').val();
				value.noUiSlider.set([$(this).val(), to]);

			});
			$(to).on('change', function () {
				let parent = $(this).parents('.js-slider-noui');
				let from = $(parent).find('.js-slider-noui-from').val();
				value.noUiSlider.set([from, $(this).val()]);
			});
		});
	}
	// Скрипт для слайдеров в фильтрах end --------------------------
}
function focusInput(item) {
	if (item.val() !== '') {
		item.parents('.js-input').addClass('focus')
	} else {
		item.parents('.js-input').removeClass('focus')
	}
}
function colorName(element) {
	let items = $(element).parents('.js-colors-block').find('.js-colors-block__item');
	let text = '';
	items.each(function (index, value) {
		if ($(value).find('input').prop('checked')) {
			text = $(value).data('name');
		}
	});
	if (text.length) {
		$(element).parents('.js-colors-block').find('.js-colors-block__bottom').addClass('active');
		$(element).parents('.js-colors-block').find('.js-colors-block__text').text(text);
	} else {
		$(element).parents('.js-colors-block').find('.js-colors-block__bottom').removeClass('active');
	}
}
$(document).on('change', '.js-colors-block__item input', function () {
	colorName($(this))
});
$(document).on('click', '.js-input__clear', function () {
	$(this).parents('.js-input').find('input').val('');
	$(this).parents('.js-input').removeClass('focus');
});


$(document).ready(function () {
	const da = new DynamicAdapt("max");
	da.init();
	Fancybox.bind("[data-fancybox]", {
		autoFocus: false
	});
	$('input[type="tel"]').inputmask({ "mask": "+7(999) 999-9999" });
	offerSlider()
	storiesBlockSlider();
	tagsSlider();
	categoriesSlider();
	stockSlider();
	productSlider();
	sliderColors();
	sliderType();
	mainFilterSlider();
	cardSliders();
	setProductsSlider();
	sliderImages();
	giftSlider();
	bouquetsLookSlider();
	personalSlider();
	personalSliderInner();
	bouquetDesignerSlider();

	$(".js-input input, .js-input textarea").each(function (index, value) {
		focusInput($(this))
	});

	$(".js-colors-block").each(function (index, value) {
		let item = $(value).find('.js-colors-block__item').eq(0)
		colorName(item[0])
	});

	$(".main-date").each(function (index, value) {
		let button = {
			content: 'Сегодня',
			onClick: (dp) => {
				const date = new Date();
				dp.selectDate(date);
				dp.setViewDate(date);
			}
		}
		new AirDatepicker(value, {
			buttons: [button, 'clear'],
			minDate: new Date()

		})
	});

})


$(document).on('focusin', '.js-input input, .js-input textarea', function () {
	$(this).parents('.js-input').addClass('focus');
});
$(document).on('focusout', '.js-input input, .js-input textarea', function () {
	focusInput($(this));
});
$(document).on('change', '.js-input input, .js-input textarea', function () {
	focusInput($(this))
});



$(document).on('change', '.js-designer-photo__file', function () {
	if ($(this).val()) {
		let file = $(this)[0].files[0];
		let imgSrc;
		if (file) {
			imgSrc = URL.createObjectURL(file);
		}
		let fileName = $(this).val().split('/').pop().split('\\').pop();
		$('.js-designer-photo').find('.js-designer-photo__name').text(fileName);
		$('.js-designer-photo').find('.js-designer-photo__img').attr('src', imgSrc);
		Fancybox.close();
		Fancybox.show([{ src: "#upload-photo-preview", type: "inline" }]);
	}
});
$(document).on('click', '.js-designer-photo__close', function () {
	$('.js-designer-photo').find('.js-designer-photo__name-btn').text($('.js-designer-photo__name').text());
	$('.js-designer-photo').find('.js-designer-photo__btn').addClass('active').removeAttr('data-fancybox');
	Fancybox.close();
});
$(document).on('click', '.js-designer-photo__clear', function () {
	$('.js-designer-photo__file').val('')
	Fancybox.close();
});
$(document).on('click', '.js-designer-photo__btn', function (e) {
	if ($(this).hasClass('active')) {
		$('.js-designer-photo__file').val('');
		$('.js-designer-photo').find('.js-designer-photo__name-btn').text('Собрать по вашему фото');
		$(this).removeClass('active').attr('data-fancybox', '');
	}
});

$(document).on('click', '.js-filter__btn', function () {
	$('.js-filter').addClass('open');
	$('body').addClass('lock');
});
$(document).on('click', '.js-filter__close', function () {
	$('.js-filter').removeClass('open');
	$('body').removeClass('lock');
});

$(document).on('click', '.js-menu__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$('.js-menu').addClass('open');
		$('body').addClass('lock');
	} else {
		$(this).removeClass('open');
		$('.js-menu').removeClass('open');
		$('body').removeClass('lock');
	}
});

$(document).on('click', '.js-sub-menu__btn', function () {
	if (!$(this).parents('.js-sub-menu').hasClass('open')) {
		$(this).parents('.js-sub-menu').addClass('open');
	} else {
		$(this).parents('.js-sub-menu').removeClass('open');
	}
});

$(document).on('mouseenter', '.js-sub-menu', function () {
	if ($(window).width() > 767) {
		$(this).addClass('open');
	}
});
$(document).on('mouseleave', '.js-sub-menu', function () {
	if ($(window).width() > 767) {
		$(this).removeClass('open');
	}
});


$(document).on('click', '.js-sub-sub-menu__btn', function () {
	if (!$(this).parents('.js-sub-sub-menu').hasClass('open')) {
		$(this).parents('.js-sub-sub-menu').addClass('open');
	} else {
		$(this).parents('.js-sub-sub-menu').removeClass('open');
	}
});

// quantity start --------------------------
$(document).on('click', '.js-quantity-btn', function (event) {
	let input = $(this).parents('.js-quantity').find('input');
	let val = parseInt(input.val());
	if ($(this).hasClass('js-quantity-minus')) {
		val = val - 1;
	} else {
		val = val + 1;
	}
	if (val < 1) {
		val = 1
	}
	input.val(val).trigger('change')
});
// quantity end --------------------------


$(document).on('click', '.js-block-btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$(this).parents('.js-block').find('.js-block-body').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-block').find('.js-block-body').removeClass('open');
	}
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.js-block-btn').length && !$(e.target).closest('.js-block-body').length) {
		$('.js-block-btn').removeClass('open');
		$('.js-block-body').removeClass('open');
	}
});
$(document).on('click', '.js-block-checkbox__btn', function () {
	if (!$(this).parents('.js-block-checkbox').hasClass('open')) {
		$(this).parents('.js-block-checkbox').addClass('open');
	} else {
		$(this).parents('.js-block-checkbox').removeClass('open');
	}
});




// spoiler start ===============================================
$(document).on('click', '.js-spoiler-title', function () {
	let parents = $(this).parents('.js-spoiler');
	if (!parents.hasClass('js-spoiler-double')) {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').removeClass('active').slideUp(300);
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').slideUp(300);
		}
	} else {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideUp(300);
		}
	}
});
// spoiler end ===============================================


// Tabs start --------------------------
$(document).on('click', '.js-tab-nav-item', function () {
	let thisValueData = $(this).data('tab');
	if (!$(this).hasClass('active')) {
		$(this).parents('.js-tab').find('.js-tab-nav-item').removeClass('active');
		$(this).addClass('active');
	}
	let contentData = $(this).parents('.js-tab').find('.js-tab-body-item');
	contentData.each(function () {
		if ($(this).data('tab') == thisValueData) {
			contentData.removeClass('active').hide();
			$(this).addClass('active').show();
		}
	});
});
// Tabs end --------------------------

$(document).on('click', '.js-new-address-add__btn', function () {
	$('.js-new-address-add').addClass('open');
});