'use strict';

(function(module) {
  const homeController = {};
  homeController.index = () => {
    Project.fetchAll(objectsView.initIndexPage);

    $('main > section').hide();
    $('#articles').show();
  };

  module.homeController = homeController;
})(window);