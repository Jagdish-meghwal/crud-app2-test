import './App.html'

import { Meteor } from 'meteor/meteor';

import { PostCollection } from '../db/PostCollection';

Template.post.onCreated( function () {
    Meteor.subscribe('posts');

});
var update=false;
var id="";
Template.form.events({
    'submit form':function (event){
        event.preventDefault();
        var title = $('[name=title]').val();
        var description =$('[name=description]').val();
        
        alert(update+id);
        if(!update){

        Meteor.call('post.add',{title,description},(err,id)=>{
            if(err){
                alert(err);
            }
            else{
                document.getElementById("title").value="";
                document.getElementById("description").value="";
            }
        });
       }
       else{
        Meteor.call('post.update',{id,title,description},(err,id)=>{
            if(err){
                alert(err);
            }
            else{
                document.getElementById("title").value="";
                document.getElementById("description").value="";
                update=false;
                id="";
            }
        });
       }

    }

});
Template.post.helpers({
    posts(){
            return PostCollection.find({},{sort: { createdAt: -1 }}).fetch();  
    },

});
Template.post.events({
    'click .delete'() {
        Meteor.call('post.remove', this._id);
      },
      'click .edit'() {
        Meteor.call('post.edit',this._id,(err,post)=>{
            if(err){
                alert(err);
            }
            else{
                document.getElementById("title").value=post.title;
                document.getElementById("description").value=post.description;
                id=post._id;
                update=true;
            }
        });
      },
      
})
