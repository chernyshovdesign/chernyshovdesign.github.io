$(document).ready(function(){

    // mob nav open/close
    $('.close-mob-nav, .overlay, .menu a').click(function (){
        $('.wrap-mob-nav, .overlay').removeClass('open_panel');
        $(this).parents('body').removeClass('body_panel');
        $(this).parents('html').removeClass('body_panel');
    });
    $('.open-mob-nav').click(function (e){
        $('.wrap-mob-nav, .overlay').toggleClass('open_panel');
        e.preventDefault();
        $(this).parents('body').toggleClass('body_panel');
        $(this).parents('html').toggleClass('body_panel');
    });

    // slider-top
    var swiper = new Swiper('.swiper-container-top', {
        navigation: {
            nextEl: '.swiper-button-next-top',
            prevEl: '.swiper-button-prev-top'
        },
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 10,
        loop: true
    });

    // slider-gallery
    var swiper = new Swiper('.swiper-container-gallery', {
        navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery'
        },
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            735: {
                spaceBetween: 0,
                slidesPerView: 1
            },
        },
        loop: true
    });

    // scroll-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroller').fadeIn();
        } else {
            $('.scroller').fadeOut();
        }
    });
    $('.scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

    //scroll to block
    $(".wrapper").on("click","a.scroll", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // appendTo
    $(window).resize(function() {
        if($(window).width() < 414) {
            $('.section-top .location').appendTo($('.section-top__slider'));
        }
    }).resize();
});

