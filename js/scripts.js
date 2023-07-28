$( function() {
    $( "#accordion" ).accordion();
} );

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });

});


$(document).ready(function(){

    $('.part2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:0
            }
        }
    });

});