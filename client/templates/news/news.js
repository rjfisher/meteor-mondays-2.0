Template.news.helpers({
  newsItems: function() {
    return News.find({}).fetch();
  }
});
