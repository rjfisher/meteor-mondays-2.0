Template.navigation.helpers({
  isHome: function() {
    return Router.current().route.path() === "/";
  },

  username: function() {
    return Meteor.user() ? Meteor.user().profile.name : '';
  }
});
