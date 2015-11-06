requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  }
});

require([
  'ramda',
  'jquery'
],
function (_, $) {
  // Utility //
  var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
  });

  var img = function(url) {
    return $('<img />', { src: url });
  }

  var Impure = {
    getJSON: _.curry(function(callback, url) {
      $.getJSON(url, callback);
    }),

    setHtml: _.curry(function(sel, html) {
      $(sel).html(html);
    })
  }

  // App Logic //
  var url = function(term) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' +
      term + '&format=json&jsoncallback=?';
  }

  // Original
  // var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
  // var srcs = _.compose(_.map(mediaUrl), _.prop('items'));
  // var images = _.compose(_.map(img), srcs);
  // var renderImages = _.compose(Impure.setHtml('body'), images);
  // var app = _.compose(Impure.getJSON(renderImages), url);

  // map's composition law
  // var law = compose(map(f), map(g)) == map(compose(f, g));


  // Refactored due to composition law
  var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
  var mediaToImg = _.compose(img, mediaUrl);
  var images = _.compose(_.map(mediaToImg), _.props('items'));
  var renderImages = _.compose(Impure.setHtml('body'), images);
  var app = _.compose(Impure.getJSON(renderImages), url);

  app("cats");
});

// Parametricity: a function will act on all types in a uniform manner.
