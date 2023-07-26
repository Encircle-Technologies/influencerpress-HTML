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
$(document).ready(function () {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 14.7}deg)">${char}</span>`
        )
        .join("");
    });
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
$(document).ready(function() {
var rtlswiper = new Swiper(".rtl", {
    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 22,
    speed: 2000,
    // centeredSlides: true,
    autoplay: {
        delay: 1500,
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
});
$(".rtl").mouseenter(function() {
  rtlswiper.autoplay.stop();
});

$(".rtl").mouseleave(function() {
  rtlswiper.autoplay.start();
});
$(".ltr").mouseenter(function() {
  ltrswiper.autoplay.stop();
});

$(".ltr").mouseleave(function() {
  ltrswiper.autoplay.start();
});
});
// client slider end