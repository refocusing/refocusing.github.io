$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        moveSlides: 1, 
        minSlides: 1, 
        maxSlides: 1, 
        slideWidth: 300,
        pause: 3000,
        captions: true,
        pager: true,
        pagerType: 'short'
    });
});