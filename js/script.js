// Модальное окно
$(document).ready(function () {
  $('#open_call').on('click', function() {
    $('.modal').toggleClass('open');
  });
  $('.modal__block-close').on('click', function() {
    $('.modal').toggleClass('open');
  });
});


//Слайдер с фотками
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})