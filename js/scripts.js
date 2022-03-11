$(document).ready(function (){
    $('.nav-toggle').click(function (){
        $('.overlay').show();
        $('.nav-menus-wrapper').animate({
            left:0,
        })
    })

    $('.overlay').click(function (){
       $(this).hide();
       $('.nav-menus-wrapper').animate({
           left:'-400px',
       })
    });
    $('.iconClose').click(function (){
        $('.overlay').hide();
        $('.nav-menus-wrapper').animate({
            left:'-400px',
        })
    });

    $('.hasSub').click(function (){
        $('.nav-dropdown').slideUp(100);

        $(this).find('.nav-dropdown').slideToggle(100);
    });

    $(window).scroll(function () {
        var sctop = $(this).scrollTop();
        if(sctop > 50){
            $('.header_area').addClass('fixedmenu');
        }
        else{
            $('.header_area').removeClass('fixedmenu');
        }
    });


})
