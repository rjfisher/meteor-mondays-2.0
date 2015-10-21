if (News.find().count() === 0) {
  console.log('Adding admin user to default system!');

  // add me to the system by default
  id = Accounts.createUser({
    email: 'me@robfisher.us',
    password: "password",
    profile: { name: 'Rob Fisher' }
  });

  // add user to admin group
  Roles.addUsersToRoles(id, ['user', 'admin'], 'meteor-mondays');
}
