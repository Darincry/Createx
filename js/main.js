$(function () {
    let mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active');
        $(this).addClass('directions__filter-btn--active');
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinity: true,
        appendDots: $('.team__dots'),
        dots: true,
        draggable: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },

            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },

            },

            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },

            },
        ]
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')   
    })

    $('.testimonials__slider').slick({
        arrows: false,
        slidesToShow: 1,
        infinity: true,
        draggble: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        responsive:
        [
            {
                breakpoint: 700,
                settings: {
                    
                },

            },
        ]
    })
    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')   
    })

    $('.program__acc-link').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $('.header__nav-link, .header__top-btn, .footer__go-top a').on( 'click', function(e){ 
        e.preventDefault();
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 700 // скорость прокрутки
            );
        }
        return false;
    });



    setInterval(() => {

        if ($(window).scrollTop() > 0 && $('.header__top'). hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow');
        } else {
            $('.burger').removeClass('burger--follow');
        }   
    }, 0);


    $('.burger, .overlay, .header__top a').on('click', function(e) {
        e.preventDefault();
        $('.header__top').toggleClass('header__top--open')
        $('.burger').toggleClass('burger--open')
        $('.overlay').toggleClass('overlay--show')
    })

    $('.footer__top-title').on('click', function() {
        $(this).next().slideToggle()
    })

    $('.footer__top-title'). on('click', function() {
        $(this).toggleClass('footer__top-title--active')
    })

})