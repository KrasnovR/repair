$(document).ready(function () {
  $('#open_call').on('click', function() {
    $('.modal').toggleClass('open');
  });
  $('.modal__block-close').on('click', function() {
    $('.modal').toggleClass('open');
  });
});