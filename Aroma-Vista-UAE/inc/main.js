const swiper = new Swiper('.hero-swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    keyboard: {
        enabled: true,
    },
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            pagination: false,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});


const swiper2 = new Swiper('.products-swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    keyboard: {
        enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});