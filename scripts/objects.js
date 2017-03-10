var allProjects = [];

function Project(object) {
  this.title = object.title;
  this.subtitle = object.subtitle;
  this.link = object.link;
  this.picture = object.picture;
  this.publishedOn = object.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newArticle = $('section.template').clone().removeClass('template');

  $newArticle.find('button a').attr('href', this.link);
  $newArticle.find('h1:first').text(this.title);
  $newArticle.find('h3:first').text(this.subtitle);
  //need to change to image still
  $newArticle.find('div:first').css({
    'background-image': 'url(' + this.picture + ')',
    'background-repeat':'no-repeat'
  } );
  return $newArticle;
};

projects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projects.forEach(function(ele) {
  allProjects.push(new Project(ele));
});

allProjects.forEach(function(a){
  $('#articles').append(a.toHtml());
});