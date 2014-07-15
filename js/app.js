App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('pups', { path: '/' }, function() {
    this.resource('pup', { path: '/:name' });
  });
});

App.PupsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('pup');
  }
});

App.PupsController = Ember.ArrayController.extend({
  add: function() {
    var name = this.get('newName');
    var color = this.get('newColor');

    var pup = this.store.createRecord('pup', {
      name: name,
      color: color
    });

    pup.save();
  }    
});

App.PupController = Ember.ObjectController.extend({
  update: function() {
    var pup = this.get('model');
    var name = this.get('name');
    var color = this.get('color');

    pup.set({
      name: name,
      color: color
    });


    pup.save();
  },
  destroy: function() {
    var pup = this.get('model');

    pup.deleteRecord();
    this.transitionTo('pups');
  }
});

App.Pup = DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string')
});

App.Pup.FIXTURES = [
  {
    id: 0,
    name: 'Marshall',
    color: 'Red'
  },
  {
    id: 1,
    name: 'Chase',
    color: 'Red'
  },
  {
    id: 2,
    name: 'Zuma',
    color: 'Orange'
  },
  {
    id: 3,
    name: 'Sky',
    color: 'Pink'
  },
  {
    id: 4,
    name: 'Rocky',
    color: 'Green'
  },
  {
    id: 5,
    name: 'Rubble',
    color: 'Yellow'
  }
];
