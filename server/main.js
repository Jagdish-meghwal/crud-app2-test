import { Meteor } from 'meteor/meteor';
import express from 'express';
import { WebApp } from 'meteor/webapp';
import cors from 'cors';
Meteor.startup(() => {
  // code to run on server at startup
});
var app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.get('/display',async (req,res)=>{  
  res.json("get api called");
})

app.post('/post',async(req,res)=>{
  console.log('post');
  res.json('post api called '+JSON.stringify(JSON.stringify(req.body)));
});

app.listen(4000);
WebApp.connectHandlers.use(app);