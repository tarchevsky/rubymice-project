import Swiper, { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper'
const slider = new Swiper('.slider', {
	loop: true,
	preloadImages: false,
	lazy: true,
	speed: 2000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	modules: [Navigation, Pagination, Mousewheel, Autoplay],
	pagination: {
		el: '.slider-pagination.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.slider-button-next.swiper-button-next',
		prevEl: '.slider-button-prev.swiper-button-prev',
	},
	// mousewheel: {
	//     invert: true,
	// },
	breakpoints: {
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
})
// const slideBeyond = new Swiper('.slide-beyond.swiper', {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     // Disable preloading of all images
//     preloadImages: false,
//     // Enable lazy loading
//     lazy: true,
//     modules: [Scrollbar, Mousewheel],
//     scrollbar: {
//         el: '.slide-beyond-scrollbar.swiper-scrollbar',
//         // hide: true,
//         draggable: true,
//     },
//     mousewheel: {
//         invert: false,
//     },
//     breakpoints: {
//         250: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//         1300: {
//             slidesPerView: 4,
//         }
//     },
// });
