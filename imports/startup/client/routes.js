import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/recipie/recipie.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    this.render('App_body', 'App_home');
  },
});
FlowRouter.route('/recipie/:id', {
  name: 'Recipie.show',
  action() {
    this.render('App_body', 'full_recipie');
  },
});

FlowRouter.notFound = {
  action() {
    this.render('App_body', 'App_notFound');
  },
};
