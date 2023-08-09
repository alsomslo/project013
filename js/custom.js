$(function () {

    const mainSlide = new Swiper('.mainslide', {
        loop: true,
        parallax: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slideActiveClass: 'on',

    });




    const swiper = new Swiper(".nt_tap_detail>li", {
        slidesPerView: 4,
        centeredSlides: false,
        loop: true,
        spaceBetween: -10,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.ns_slide01').slick({
        arrows: false,

    })

    $('.ns_slide02').slick({
        arrows: false,

    })
    $('.ns_slide03').slick({
        arrows: false,

    })




    $('.sv_tap .middel .tap_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.sv_tap .middel .tap_menu li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.sv_tap .right .tap_detail>li').eq(idx).addClass('on').siblings().removeClass('on');
    })
    $(' .nt_tap_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(' .nt_tap_menu li').eq(idx).addClass('on').siblings().removeClass('on');
        $(' .right .nt_tap_detail>li').eq(idx).addClass('on').siblings().removeClass('on');
    })
})