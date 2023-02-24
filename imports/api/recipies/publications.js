import { Meteor } from 'meteor/meteor';
import { Recipies } from './recipies.js';

Meteor.publish('recipies.all', function () {
  return Recipies.find();
});
