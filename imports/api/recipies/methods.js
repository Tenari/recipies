import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Recipies } from './recipies.js';

Meteor.methods({
  'recipies.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Recipies.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
