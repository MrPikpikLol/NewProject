/*jslint browser: true*/
/*global $, jQuery ,AOS*/


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
    /*END RECENT BLOG SLIDER JS*/




/*$(window).on('resize', function(event){
    var windowSize = $(window).width();
    if(windowSize < 768){
        $('.dropdown-submenu a').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    }
});*/

}(jQuery));
