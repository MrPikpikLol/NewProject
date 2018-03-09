
(function ($) {

    "use strict";

    var $window = $(window),
        $body = $('body'),
        $appyMenu = $('.appy-menu'),
        $testiSlider = $('.testimonial-slider'),
        $screenShotsSlider = $('.screenshots-slider'),
        $countUp = $('.count-num span'),
        $teamSlider = $('.team-slider'),
        $blogSlider = $('.recent-blog-slider');


    /*START PRELOADER JS & REFRESH AOS*/
    $window.on('load', function () {
        $('.preloader').delay(350).fadeOut('slow');
        AOS.refresh();
    });
    /*END PRELOADER JS & REFRESH AOS*/

    $(document).ready(function () {


        /*START AOS JS*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 600
        });
        /*END AOS JS*/

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu'
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.scroll-section').on('click touchend', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 0) {
                $appyMenu.addClass("sticky");
            } else {
                $appyMenu.removeClass("sticky");
            }
        });
        /*END MENU JS*/

/*-------Galerie-----------*/
        if ($testiSlider.length > 0) {
            $testiSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                responsiveClass: true
            });
        }
/*-------wow js------------*/
        wow = new WOW(
                      {
                      boxClass:     'wow',

                    })
                    wow.init();

    });


}(jQuery));
