var objectsView = {};

$(document).ready(function () {
  $('#heading').hide().fadeIn(1000); 
  console.log('clicking');
});


$('.icon-align-justify').click(function() {
  $('.icon-align-justify').toggleClass('rotate');
  $('.nav-one li').toggle('slow');
});

objectsView.handleMainNav = function() {
  $('.icon-book').on('click', function() {
    $('#' + $(this).data('content')).fadeIn();
  });
};

objectsView.handleMainNav();