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

app.use('/display', (req,res)=>{

  res.json('hello from server');;
});
//app.listen(4000);
WebApp.connectHandlers.use(app);