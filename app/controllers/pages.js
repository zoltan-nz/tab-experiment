import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    pageChanged(pageId) {
      this.transitionToRoute('pages.page', pageId);
    }

  }
});
