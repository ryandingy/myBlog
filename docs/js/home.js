jQuery( function( $ ) {
    $( document ).ready( function() {
        
        var banner_swiper = new Swiper('#banner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            effect: "fade",
/*
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
*/
            spaceBetween: 0,
            autoplay: 6000,
            loop: true,
            speed: 900            
        });
        
    });
});