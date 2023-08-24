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






    const noticeSlide01 = new Swiper(".notice_slide01", {
        slidesPerView: 4,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide01.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide01.slideNext();
    });
    const noticeSlide02 = new Swiper(".notice_slide02", {
        slidesPerView: 4,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide02.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide02.slideNext();
    });
    const noticeSlide03 = new Swiper(".notice_slide03", {
        slidesPerView: 4,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide03.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide03.slideNext();
    });
    const noticeSlide04 = new Swiper(".notice_slide04", {
        slidesPerView: 4,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide04.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide04.slideNext();
    });
    const noticeSlide05 = new Swiper(".notice_slide05", {
        slidesPerView: 4,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide05.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide05.slideNext();
    });




    $('.ns_slide01').slick({
        arrows: false,
        fade: true,
        asNavFor: '.ns_slide02',

    })


    $('.ns_slide02').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

        focusOnSelect: true

    })

    $('.event_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    })




    $('.mainevent .arrows .prev').on('click', function (e) {
        $('.event_slide').slick('slickPrev')
    });
    $('.mainevent .arrows .next').on('click', function (e) {
        $('.event_slide').slick('slickNext')
    });

    $('.mainnews .arrows .prev').on('click', function (e) {
        $('.ns_slide01').slick('slickPrev')
    });
    $('.mainnews .arrows .next').on('click', function (e) {
        $('.ns_slide01').slick('slickNext')
    });




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