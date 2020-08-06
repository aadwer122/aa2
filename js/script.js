$(document).ready(function(){
    $('[data-modal=consult]').on('click',function(){
        $('.overlay,#consult').fadeIn('slow');
    });
    $('.button_modal').on('click',function(){
        $('.overlay,#consult').fadeOut('slow');
        $('#thanks').fadeIn('slow');
    });
    $('.modal__close').on('click',function(){
        $('.overlay,#consult,#thanks').fadeOut('slow');
    });
});

