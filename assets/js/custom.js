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


// Responsive menu start
(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".navbar-toggler").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('.navbar ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('.navbar ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            function multiTg() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49505 5.64469L9.79476 1.34485C10.0684 1.07133 10.0684 0.627862 9.79476 0.354473C9.52135 0.0810617 9.0779 0.0810617 8.80451 0.354473L4.99993 4.15917L1.19548 0.354583C0.921955 0.0811719 0.478552 0.0811719 0.205141 0.354583C-0.0683805 0.627994 -0.0683805 1.07144 0.205141 1.34496L4.50491 5.6448C4.64169 5.78151 4.82075 5.84978 4.99991 5.84978C5.17915 5.84978 5.35835 5.78138 5.49505 5.64469Z" fill="#F59427"/></svg></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    if ($(this).hasClass('submenu-opened')) {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');
                        $('.has-sub > .submenu-button + a').removeClass('active');
                    } else {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');
                        $(this).addClass('submenu-opened');
                        $('.has-sub > .submenu-opened + a').addClass('active');
                    }

                    if ($(this).siblings('ul').hasClass('open')) {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                    } else {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        $(this).siblings('ul').addClass('open');
                    }

                });
                cssmenu.find('a').on('click', function () {
                    if ($(this).attr('href') == '#') {

                        $(this).siblings('span').toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open');
                        } else {
                            $(this).siblings('ul').addClass('open');
                        }
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            function resizeFix() {
                var mediasize = 1023;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').addClass('open');
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})($);
// Responsive menu end

// Menu Start
    jQuery(".navbar-toggler").click(function(){
      jQuery('.mobile-menu-main').toggleClass('active');  
      jQuery('body').toggleClass('menu-open');
    });
  
    jQuery("#menu-main-menu li span.submenu-button").on('click', function() {                
        if( jQuery(this).parent().find(".submenu-button").hasClass("active") ){
          jQuery(this).parent().find(".submenu-button").removeClass("active");
        } else {
          jQuery(".submenu-button").removeClass("active");
          jQuery(this).parent().find(".submenu-button").addClass("active");
        }
        if( jQuery(this).parent().find(".sub-menu").hasClass("active") ){
          jQuery(this).parent().find(".sub-menu").removeClass("active"); 
        } else {
          jQuery(".sub-menu").removeClass("active");
          jQuery(this).parent().find(".sub-menu").addClass("active"); 
        }    
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