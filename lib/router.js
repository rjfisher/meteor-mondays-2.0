/* Authentication Functions */
var requireAdmin = function() {
  Roles.userIsInRole(Meteor.user(), 'admin', 'meteor-mondays') ? this.next() : Router.go('home');
};

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFound: 'notFound'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/logout', {
  name: 'logout',
  action: function() {
    if (Meteor.user() !== null) {
      Meteor.logout(function() {
        Bert.alert('You have been successfully logged out.', 'success', 'fixed-top');
        Router.go('home');
      });
    }
  }
});

Router.route('/register', {
  name: 'register'
});

Router.route('/news', {
  name: 'news'
});

Router.route('/admin', {
  name: 'admin'
});

Router.route('/', {
  name: 'home'
});

Router.onBeforeAction(requireAdmin, {
  only: ['admin']
});
