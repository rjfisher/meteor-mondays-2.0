Template.register.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var user = $(e.target).find('[name=username]').val();
    var pass = $(e.target).find('[name=password]').val();

    Accounts.createUser({
      username: user,
      email: user,
      password: pass
    }, function(error) {
      if (error) {
        Bert.alert(error.reason, 'danger', 'fixed-top');
        return;
      }

      Bert.alert('Welcome to Meteor-Mondays!', 'success', 'fixed-top');
      Router.go('home');
    });

    // Add new user to the 'users' group.
    Roles.addUsersToRoles(Meteor.user()._id, ['user'], 'meteor-mondays.com');
    return;
  }
});
