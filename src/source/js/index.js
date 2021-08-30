$(document).ready(function (){
    // console.log($(window).width())
    menuButton();
    $( window ).resize(function() {
        menuButton();
     });

    $(document).on('click', '.menu-small', function(){
        $('.menu').addClass('open');
        $('.menu__closer').addClass('open');
        $('body').css('overflow', 'hidden');
      });
      $('.menu__closer').on('click', function(){
        $('.menu').removeClass('open');
        $('.menu__closer').removeClass('open');
        $('body').css('overflow', 'visible');
      });

    $(".select").select2({
        placeholder: "Country",
    });
});

function menuButton(){
    if ($(window).width() < 1024){
        if (!$(document).find('.menu-small').length > 0){
            $( ".header .container" ).append( "<div class='menu-small'>menu</div>" );
        }
    } else {
        $(document).find('.menu-small').remove();
    } 
}