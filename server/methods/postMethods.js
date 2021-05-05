import { Meteor } from 'meteor/meteor';
import { PostCollection } from '../../imports/db/PostCollection';

Meteor.methods({
  async 'post.add'  (data) {
    var title=data.title;
    var description=data.description;
    var id=await PostCollection.insert({
        title,
        description,
        createdAt: new Date(),
    });
    if(id){
        return id;
    }
    else{
      throw new Meteor.Error('server error');
    }        
  },
  async 'post.update'  (data) {
    var id=data.id;
    var title=data.title;
    var description=data.description;
    var id=await PostCollection.update(
      { _id: id },
      {
        $set: {
          title,
          description,
        }
      }
   )
    
    if(id){
        return id;
    }
    else{
      throw new Meteor.Error('server error');
    }        
  },
  async 'post.remove'(postId) {
    console.log(postId);

    const post = PostCollection.findOne({ _id: postId });
    
    if (!post) {
      throw new Meteor.Error('Access denied.');
    }

    await PostCollection.remove(postId);
  },
  async 'post.edit'(postId) {
    console.log(postId);

    const post = PostCollection.findOne({ _id: postId });
    
    if (!post) {
      throw new Meteor.Error('Access denied.');
    }

    return post;
  },

});
