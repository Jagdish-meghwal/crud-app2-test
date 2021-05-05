import {Meteor}  from 'meteor/meteor';
import {PostCollection} from '../../imports/db/PostCollection'

Meteor.publish('posts', function publishTasks() {
   console.log("-----in publish ");
    return PostCollection.find({});
  });