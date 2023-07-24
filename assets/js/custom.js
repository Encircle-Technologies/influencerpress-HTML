/*Sticky Header*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('is-sticky');
    } else {
        $('.header').removeClass('is-sticky');
    }
});
/*Sticky Header*/

$(document).ready(function() {
    if ($('.sub-menu li > div').hasClass('current-menu-item')){      
        $('.parent-menu').removeClass('current-menu-item');     
        var ids = $('.sub-menu li > div').attr('data-menuid');           
        $('#'+ ids).addClass('current-menu-item');
    }

    if ($(window).width() > 1024) {                         
        $(".navbar>ul>li:first-child").on('mouseover',function () {
            $('.header').addClass("active");
        }).on('mouseout', function() {
            $('.header').removeClass('active');
        });        
    }
});


// Menu Start
    jQuery(".navbar-toggler").click(function(){
      jQuery('.mobile-menu-main').toggleClass('active');  
      jQuery('html').toggleClass('menu-open');
    });
// Menu End


// Footer Animation start
if ($('.footer').length) {
    $(".animate-newsletter").click(function () {
        $(".newsletter-form").slideToggle('slow');
        $('.animate-icon').toggleClass("rotate__reduce-icon")
    });
    $(".newsletter-form").hide();
}
// Footer Animation end


// Swiper slider start
    const testimonial = new Swiper(".testimonial-slider", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
        },
    });

    const insta = new Swiper(".insta-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".insta-button-next",
            prevEl: ".insta-button-prev",
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
        },
    });

    const discoverslide = new Swiper(".discover-slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".discover-slide-button-next",
            prevEl: ".discover-slide-button-prev",            
        },
        breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
        },
    });

    const accommodationslide = new Swiper(".accommodation-slide", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".accommodation-slide-button-next",
            prevEl: ".accommodation-slide-button-prev",            
        },
        breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
        },
    });

    const modelslider = new Swiper(".modal-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        // autoplay: {
        //     delay: 500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: ".modal-button-next",
            prevEl: ".modal-button-prev",
        },
    });

    const storiesslide = new Swiper(".stories-slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: ".stories-slide-button-next",
            prevEl: ".stories-slide-button-prev",            
        },
        breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
        },
    });

// Swiper slider end

// Modal Start
$(document).ready(function() {
    $('.btn').click(function(){
        // var buttonId = $(this).attr('class');
        $('#modal-container').removeAttr('class').addClass('open');
        $('body').addClass('modal-active');
    });    
    $('#modal-container').click(function(){
        $(this).removeClass('open');
        $('body').removeClass('modal-active');
    });
});
// Modal End