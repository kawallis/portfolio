
function Project(object) {
  this.title = object.title;
  this.subtitle = object.subtitle;
  this.link = object.link;
  this.picture = object.picture;
  this.publishedOn = object.publishedOn;
}

Project.all =[];

Project.prototype.toHtml = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};
Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

// allProjects.forEach(function(a){
//   $('#articles').append(a.toHtml());
// });

Project.fetchAll = function() {
  if (localStorage.rawData) {
    // When rawData is already in localStorage,
    // we can load it with the .loadAll function above,
    // and then render the index page (using the proper method on the articleView object).
    var parsedData = JSON.parse(localStorage.rawData);
    Project.loadAll(parsedData); //TODO DONE: What do we pass in to loadAll()? New variable parsedData
    //TODO DONE: What method do we call to render the index page?
    objectsView.initIndexPage();
  } else {
    // TODO DONE: When we don't already have the rawData,
    // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
    // cache it in localStorage so we can skip the server call next time,
    // then load all the data into Article.all with the .loadAll function above,
    // and then render the index page.
    $.ajax({
      url: 'data/projects.json',
      method: 'GET',
      success: function(data) {
        console.log(data);
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