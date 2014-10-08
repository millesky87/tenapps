(function(){
'use strict';

var Blog = Backbone.Model.extend({
  urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/posts"

});



  var CreateBlogView = Backbone.View.extend({
    tagName: 'form',
    template: _.template($('#create-blog').text()),
    events:{
     "submit": "createBlog"

    },

    createBlog: function(event){
      event.preventDefault();
    var data = this.$el.serializeObject();

    var blog = new Blog(data);
      blog.save();
    },

    initialize: function(opts){



      var options = _.defaults({}, opts, {
        $container: $('body')
      });


      options.$container.append(this.el);


      this.render();

    },
    render: function(){
      this.$el.html( this.template());
    }
});

  $(document).ready(function(){
    var createblogView = new CreateBlogView();
  });
$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};
})();
