var objectsView = {};

$(document).ready(function () {
  $('body').hide();
  $('body').fadeIn(2000);
});

// for the hamburger menu
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

//for the drop down menu
objectsView.handleNavDrop = function() {
  $('.nav-drop').on('click', '.tab', function() {
    $('.icon-align-justify').toggleClass('rotate');
    $('.nav-one li').toggle('slow');
    $('.tab-content').hide();
    $('#articles').hide();
    $('#' + $(this).data('content')).fadeIn();
    $('#' + $(this).data('head')).fadeIn();
    $('.nav-drop').toggle('slow');
    $('.nav-one').toggleClass('background');
  });
};

//for the icons that need to be added by media query
objectsView.iconHandler = function () {
  $('#icon-container').on('click', '.tab', function () {
    $(this).effect('shake');
  });
};

//for the contact box that pops up
objectsView.contactHandler = function () {
  $('.icon-times-circle').on('click', function () {
    $('#contact').effect('blind'); 
  });
};

objectsView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#articles').append(a.toHtml());
  });
};

objectsView.handleMainNav();
objectsView.handleNavDrop();
objectsView.iconHandler();
objectsView.contactHandler();