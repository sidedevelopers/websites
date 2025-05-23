// sticky navbar start
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('sticky-navbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        }
        else {
            document.getElementById('sticky-navbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
});
// sticky navbar end

$(".hp-carousel").owlCarousel({
    autoplay: true,
    items: 3,
    dots: false,
    loop: true,
    nav: true,
    margin: 20,
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
            items: 3,
        },
    },
});

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 3,
    dots: false,
    loop: true,
    nav: true,
    margin: 20,
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
            items: 2,
        },
        1200: {
            items: 3,
        },
    },
});

$(".insta-carousel").owlCarousel({
    autoplay: true,
    items: 5,
    dots: false,
    loop: false,
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