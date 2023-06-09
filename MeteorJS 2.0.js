// Server
Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, {
      fields: { other: 1, things: 1 }
    });
  }
  
  this.ready();
});

// Client
Meteor.subscribe('userData');
