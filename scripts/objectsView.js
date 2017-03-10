var objectsView = {};

$(document).ready(function () {
  $('#heading').hide().fadeIn(1000); 
  console.log('clicking');
});


$('.icon-align-justify').click(function() {
  $('.icon-align-justify').toggleClass('rotate');
  // $('#menu').hide();
  $('.nav-one li').toggle('slow');
});

objectsView.handleMainNav = function() {
  $('.icon-book').on('click', function() {
    $('#' + $(this).data('content')).fadeIn();
  });
};

objectsView.handleNavDrop = function() {
  $('.nav-drop').on('click', '.tab', function() {
    console.log($('.nav-drop'));
    $('.icon-align-justify').toggleClass('rotate');
    $('.nav-one li').toggle('slow');
    $('.tab-content').hide();
    $('#articles').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
};

objectsView.handleMainNav();
objectsView.handleNavDrop();