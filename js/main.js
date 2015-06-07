$(document).ready(function () {

    var slider = $("#owl-example");
    slider.owlCarousel({
        singleItem: true,
        autoPlay: 7500
    });

    var buttonMenu = $('.menu'),
        nav = $('.nav');
    buttonMenu.on('click', function () {
        nav.slideToggle();
    })

});