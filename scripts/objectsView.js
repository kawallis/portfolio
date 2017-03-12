var objectsView = {};

$(document).ready(function () {
  $('body').hide();
  $('body').fadeIn(2000);
});


$('.icon-align-justify').click(function() {
  $('.icon-align-justify').toggleClass('rotate');
  $('.nav-one').toggleClass('background');
  $('.nav-drop').toggle('slow');
});

objectsView.handleMainNav = function() {
  $('.icon-book').on('click', function() {
    $('#' + $(this).data('content')).fadeIn();
  });
};

objectsView.handleNavDrop = function() {
  $('.nav-drop').on('click', '.tab', function() {
    $('.icon-align-justify').toggleClass('rotate');
    $('.nav-one li').toggle('slow');
    $('.tab-content').hide();
    $('#articles').hide();
    $('#' + $(this).data('content')).fadeIn();
    $('#' + $(this).data('head')).fadeIn();
    $('.nav-drop').toggle('slow');
  });
};

objectsView.iconHandler = function () {
  $('#icon-container').on('click', '.tab', function () {
    $(this).effect('shake');
  });
};

objectsView.contactHandler = function () {
  $('.icon-times-circle').on('click', function () {
    $('#contact').effect('blind'); 
  });
};

objectsView.handleMainNav();
objectsView.handleNavDrop();
objectsView.iconHandler();
objectsView.contactHandler();