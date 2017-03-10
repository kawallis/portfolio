var objectsView = {};

$(document).ready(function () {
  $('body').hide();
  $('body').fadeIn(2000);
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