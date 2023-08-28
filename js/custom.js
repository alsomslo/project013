$(function () {


    $('.menu').on('click', function () {
        $('.gnb').toggleClass('on');

    });
    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });



    $(window).on('resize', function () {
        $('.gnb .sub').removeAttr('style')
    });
    $('.sub>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.sub>li>ul').stop().slideUp();
    });



    $(window).on('resize', function () {
        $('.sub>li>a .sub>li>ul').removeAttr('style')
    });






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
        slidesPerView: 1,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: -10,
                // centeredSlides: true,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 30,

            }
        }

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide01.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide01.slideNext();
    });
    const noticeSlide02 = new Swiper(".notice_slide02", {
        slidesPerView: 1,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: -10,
                // centeredSlides: true,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 30,

            }
        }

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide02.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide02.slideNext();
    });
    const noticeSlide03 = new Swiper(".notice_slide03", {
        slidesPerView: 1,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: -10,
                // centeredSlides: true,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 30,

            }
        }
    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide03.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide03.slideNext();
    });
    const noticeSlide04 = new Swiper(".notice_slide04", {
        slidesPerView: 1,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: -10,
                // centeredSlides: true,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 30,

            }
        }

    });
    $('.mainnotice .arrows .prev').on('click', function (e) {
        noticeSlide04.slidePrev();
    });
    $('.mainnotice .arrows .next').on('click', function (e) {
        noticeSlide04.slideNext();
    });
    const noticeSlide05 = new Swiper(".notice_slide05", {
        slidesPerView: 1,
        //centeredSlides: false,
        //loop: true,
        //spaceBetween: -10,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: -10,
                // centeredSlides: true,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 30,

            }
        }

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
        centerpadding: 10,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }

            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                }

            }
        ]
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