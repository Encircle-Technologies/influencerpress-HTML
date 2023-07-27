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

// Circle Start
// $(document).ready(function () {
//     var text = document.querySelector(".text");
//     text.innerHTML = text.innerText
//     .split("")
//     .map(
//         (char, i) => `<span style="transform:rotate(${i * 14.7}deg)">${char}</span>`
//     )
//     .join("");
// });
// $(document).ready(function () {
//   var textC = document.querySelector(".text-c");
//   textC.innerHTML = textC.innerText
//   .split("")
//   .map(
//       (char, i) => `<span style="transform:rotate(${i * 16}deg)">${char}</span>`
//   )
//   .join("");
// });
// Circle End

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

// parallax Start
$(document).ready(function() {
  $(window).on('resize', function(){
    var $theWindowSize = $(this).width();
    if($theWindowSize < 1200) {
      $('.img-grid-parallax').each(function(){
          var img = $(this);
          var imgParent = $(this).parent();
          function parallaxImg () {
            var speed = img.data('speed');
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();
        
        
            var winBottom = winY + winH;
        
            // If block is shown on screen
            if (winBottom > imgY && winY < imgY + parentH) {
              var imgBottom = ((winBottom - imgY) * speed);
              var imgTop = winH + parentH;
              var imgPercent = ((imgBottom / imgTop) * 100) + (10 - (speed * 30));
            }
            img.css({
              transform: 'translate(0, ' + imgPercent + 'px) rotate(-30deg)'
            });
          }
          $(document).on({
            scroll: function () {
              parallaxImg();
            }, ready: function () {
              parallaxImg();
            }
          });
      });
    } 
  });
  $('.img-parallax').each(function(){
      var img1 = $(this);
      var imgParent1 = $(this).parent();
      function parallaxImg () {
        var speed1 = img1.data('speed');
        var imgY1 = imgParent1.offset().top;
        var winY1 = $(this).scrollTop();
        var winH1 = $(this).height();
        var parentH1 = imgParent1.innerHeight();
    
    
        var winBottom = winY1 + winH1;
    
        // If block is shown on screen
        if (winBottom > imgY1 && winY1 < imgY1 + parentH1) {
          var imgBottom1 = ((winBottom - imgY1) * speed1);
          var imgTop1 = winH1 + parentH1;
          var imgPercent1 = ((imgBottom1 / imgTop1) * 100) + (1 - (speed1 * 10));
        }
        img1.css({
          transform: 'translate(0, ' + imgPercent1 + 'px)'
        });
      }
      $(document).on({
        scroll: function () {
          parallaxImg();
        }, ready: function () {
          parallaxImg();
        }
      });
  });
});
// parallax End

// client slider start
$(document).ready(function($) {
  var rtlswiper = new Swiper(".rtl", {
      loop: true,
      slidesPerView: 3.5,
      spaceBetween: 22,
      speed: 2000,
      // centeredSlides: true,
      autoplay: {
          delay: 1500,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.05,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 22,
        },
      },
  });

  var ltrswiper = new Swiper(".ltr", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 22,
      // centeredSlides: true,
      speed: 2000,
      autoplay: {
          delay: 1500,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      },
  });

  var rtlswiper1 = new Swiper(".client-testimonial-slider .rtl", {
    loop: true,
    spaceBetween: 22,
    speed: 2000,
    centeredSlides: false,
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 22,
      },
    },
  });
  var ltrswiper1 = new Swiper(".client-testimonial-slider .ltr", {
      loop: true,
      spaceBetween: 22,
      centeredSlides: true,
      speed: 2500,
      autoplay: {
          delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 22,
        },
      },
  });

  var rtlswiper2 = new Swiper(".client-testimonial-slider .rtl2", {
    loop: true,
    spaceBetween: 22,
    speed: 3000,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.4,
        spaceBetween: 22,
      },
    },
  });
  var ltrswiper2 = new Swiper(".client-testimonial-slider .ltr2", {
    loop: true,
    spaceBetween: 22,
    // centeredSlides: true,
    speed: 3500,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 22,
      },
    },
  });

  const imgslider = new Swiper(".img-slider-inner", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 2.2,
    spaceBetween: 40,
    speed: 1500,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
  });

  var processswiper = new Swiper(".process-slider", {
    loop: true,
    slidesPerView: 3.6,
    spaceBetween: 140,
    centeredSlides: false,
    speed: 1500,
    autoplay: {
        delay: 0,
    },
  });

});
// client slider end

// video play Start
jQuery(document).ready(function ($) {
  if ($('.video_overlay').length) {
      $('.video').parent().click(function () {
          if ($(this).children(".video").get(0).paused) {
              $(this).children(".video").get(0).play();
              $(this).parent().find('.circle-play-b').hide();
          } else {
              $(this).children(".video").get(0).pause();
              $(this).parent().find('.circle-play-b').show();
          }
      });
  }
});