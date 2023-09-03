$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    
    
    //===== Slick
    
    $('.slider-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        fade:true,
        pauseOnHover: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
        
    
    //===== 
    
    new WOW().init();
    
    
    
    
    
    
});