$(document).ready(function(){

$('.popup').delay(4000).fadeIn(500);
$('.popup .cerrar').click(function(){
    $('.popup').fadeOut();
})

      $('.menu-icon').on('click', function(){
        $('nav').slideToggle();
      })
})
