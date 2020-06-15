$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',

});
// venobox//
$(document).ready(() => {
    $('.venobox').venobox(
        {
            spinner: 'wandering-cubes',
            framewidth: '800px',
            frameheight: '800px',
            border: '10px',
            share: [],
            infinigall: true,
            closeColor: '#fff',
            numeratio: true,
        }
    );
});
// preloader-start//
// let preloader = document.getElementById('preloader');
//
// function pre() {
//     preloader.style.display = 'none';
// }
// function pre() {
//     setTimeout(function () {
//         $('#preloader').fadeOut();
//         // $('#loader').fadeOut('slow');
//     }, 4000);
// }

// preloader-end //
// service Part Slider //
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',


});
// Tm_slide_left//
$('.left_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',
    asNavFor: '.right_slide',


});
$('.right_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.left_slide',
    arrows: false,


});
///counter-up//
$('.up').counterUp({
    delay: 10,
    time: 1000
});
//stiky-header//
$(document).ready(
    $(window).scroll(
        () => {
            if ($(window).scrollTop() > 300) {
                $('.st-menu').addClass('stiky')
            } else {
                $('.st-menu').removeClass('stiky')
            }

        }
    )
);
// animation scroll js
let html_body = $('html, body');
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 87
            }, 1500);
            return false;
        }
    }
});


$(document).ready(
    //back to top fadetoogle//
    $(window).scroll(
        () => {
            if ($(window).scrollTop() > 100) {
                $('.back-top').fadeIn();


            } else {
                $('.back-top').fadeOut();
            }


        }
    )
);
$(document).ready(
    //back to top effect//
    $('.back-top').click(
        () => {
            $('html,body').animate({scrollTop: 0}, 1500);

        }
    )
);

$('.th-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
});


// scroolpy
$('body').scrollspy({
    target: '.navbar',
    offset: 100
})
//Smooth Scrolling //
// $('a[href*="#"]').on('click', function(e){
//     $('html,body').animate({
//         scrollTop: $($(this).attr('href')).offset().top - 88
//     },1500);
//     e.preventDefault();
// });

// offsetValue = 40;
// $('body').data().scrollspy.options.offset = offsetValue;
// // force scrollspy to recalculate the offsets to your targets
// $('body').data().scrollspy.process();


// var offset = 80;
// $('.navbar li a').click(function(event) {
//     event.preventDefault();
//     $($(this).attr('href'))[0].scrollIntoView();
//     scrollBy(0, -offset);
// });
// $(window).on('activate.bs.scrollspy', function (e,obj) {
//     console.log("This event is firing...",e);
//
//
//
// });

//preloader//
$(window).on("load", () => $("#preloader").fadeOut('800'));



