var allProjects = [];

function Project(object) {
  this.title = object.title;
  this.subtitle = object.subtitle;
  this.link = object.link;
  this.picture = object.picture;
  this.publishedOn = object.publishedOn;
}

Project.prototype.toHtml = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
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