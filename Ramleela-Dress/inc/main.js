$(".product1-carousel").owlCarousel({
    autoplay: true,
    items: 5,
    dots: true,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 2,
        },
        485: {
            items: 2,
        },
        768: {
            items: 3,
        },
        960: {
            items: 4,
        },
        1200: {
            items: 5,
        },
    },
});