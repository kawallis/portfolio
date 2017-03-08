$(document).ready(function () {
  $('body').fadeIn(3000); 
});

$('.icon-align-justify').click(function() {
  $('.icon-align-justify').toggleClass('rotate');
  $('.nav-one li').toggle('slow');
});