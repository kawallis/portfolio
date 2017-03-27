
function Project(object) {
  this.title = object.title;
  this.subtitle = object.subtitle;
  this.link = object.link;
  this.picture = object.picture;
  this.publishedOn = object.publishedOn;
}

Project.all =[];

Project.prototype.toHtml = function () {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

Project.loadAll = rawData => {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.map(obj => {Project.all.push(new Project(obj))});
  // rawData.forEach(function(ele) {
  //   Project.all.push(new Project(ele));
  // });
};

// allProjects.forEach(function(a){
//   $('#articles').append(a.toHtml());
// });

Project.fetchAll = () => {
  if (localStorage.rawData) {
    var parsedData = JSON.parse(localStorage.rawData);
    Project.loadAll(parsedData); 
    objectsView.initIndexPage();
  } else {
    $.ajax({
      url: '/data/projects.json',
      method: 'GET',
      success: function(data) {
        var rawDataJSON = JSON.stringify(data);
        localStorage.setItem('rawData', rawDataJSON);
        Project.fetchAll();
      }, 
      error: function(err) {
        console.log('in error handler', err);
      }
    });
  }
};