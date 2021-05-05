
  FlowRouter.route('/login', {
    name: 'login',
    async action() {
      await import('../imports/ui/Login');
      BlazeLayout.render('home', {main: 'login'});
    }
  }); 
  
  FlowRouter.route('/', {
    name: 'home',
     async action() {
      await import('../imports/ui/App');
      BlazeLayout.render('home',{main:'app'});
    }
  }); 
  