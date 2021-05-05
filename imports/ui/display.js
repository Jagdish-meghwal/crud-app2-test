import './display.html'
import { Meteor } from 'meteor/meteor';

Template.login.onCreated(function() {

});

Template.post.helpers({
    posts(){
            //return PostCollection.find({},{sort: { createdAt: -1 }}).fetch();  
    },

});