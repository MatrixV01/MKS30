// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }
});

// Example use:
var songModelData = { title: 'My Song' }

var song = new SongModel(songModelData)
song.play()

song.get('title') //=> 'My Song'
song.set('other', 'prop')

song.on('change', function() {
  console.log("The song changed")
})
song.trigger('change') //=> console logs: "The song changed"

// Example collection:
var Songs = Backbone.Collection.extend({
  model: SongModel
});

// Example use:
var songs = new Songs()

songs.add({ title: 'New Song' })
songs.length //=> 1
songs.at(0) //=> a Backbone.Model, specifically a SongModel






// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // Controller code
  events: {
    'click': function() {
      this.model.play();
    }
  },

  // View code
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  initialize: function (options) {
    this.listenTo(this.model, 'add remove', this.render)
    // this.el    = options.el
    // this.$el   = $(options.el)
    // this.model = options.model
  },

});

// Example use:
var libView = new LibraryEntryView({
  el: $('.some-element'),
  model: new SongModel({ title: 'The Song' })
})
