
  FlowRouter.route('/display', {
    name: 'display',
    async action() {
      await import('../imports/ui/display');
      BlazeLayout.render('home', {main: 'display'});
    }
  }); 
  
  FlowRouter.route('/', {
    name: 'home',
     async action() {
      await import('../imports/ui/App');
      BlazeLayout.render('home',{main:'app'});
    }
  }); 
  