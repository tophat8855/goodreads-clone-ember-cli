import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('authors', function() {
    this.route('author', {path: '/:author_id'});
  });

  this.resource('books', function() {
    this.resource('book', {path: '/:book_id'}, function() {
      this.route('review', {path: '/:review_id'});
    });
  });
});

export default Router;
