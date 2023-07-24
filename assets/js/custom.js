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