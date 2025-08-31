$('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    fade: true,
    // arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        },
    ]
});