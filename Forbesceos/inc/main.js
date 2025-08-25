$(".news-carousel").owlCarousel({
    autoplay: true,
    items: 4,
    dots: false,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        485: {
            items: 1,
        },
        768: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});