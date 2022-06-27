

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGallery.js
 # JS Adapter for JustifiedGallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2016 Miro Mannino
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-06-27 05:45:11 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.justifiedGallery = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.justifiedGallery',
        generated:   '2022-06-27 05:45:11 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this = j1.adapter.justifiedGallery;
      logger = log4javascript.getLogger('j1.adapter.justifiedGallery');
      var dependencies_met_j1_finished= setInterval(function() {
        if (j1.getState() == 'finished') {
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          // Load  module DEFAULTS|CONFIG
          //
          /* eslint-disable */
          moduleOptions = $.extend({}, {"enabled":true, "xhr_data_path":"/assets/data/galleries.json", "instance_type":"multiple", "rowHeight":170, "galleries":[{"gallery":{"enabled":true, "type":"image", "id":"jg_example", "title":"Example of LightGallery Lightbox", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China"], "captions_lightbox":[], "gallery_options":{"rowHeight":250, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_old_times", "show_delay":200, "title":"GrandPa around the 1930th", "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/old_times", "thumb_path":"/assets/images/modules/gallery/old_times", "images":["image_01.jpg", "image_02.jpg", "image_03.jpg", "image_04.jpg"], "captions_gallery":["GrandPa's 80th Birthday", "GrandPa's 80th Birthday", "GrandPa's annual journey", "GrandPa's annual journey"], "captions_lightbox":[], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_customizer", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg", "gints-gailis_b.jpg", "steven-diaz_b.jpg", "denys-nevozhai-2_b.jpg", "johan-mouchet_b.jpg", "emmad-mazhari_b.jpg", "federico-rizzarelli_b.jpg", "andreas-brucker_b.jpg", "thomas-tucker_b.jpg", "luca-bravo_b.jpg", "ethan-brooke_b.jpg", "oskars-sylwan_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China", "Shangri-La Hotel Jakarta - Indonesia", "Tokyo seen from World Trade Center Observation Deck - Japan", "Young couple over Shenzhen - China", "The Queen Bee at the Eureka Tower - Melbourne Southbank Australia", "Chicago - United States", "Shanghai - China", "Cityscape of Bangkok Downtown - Thailand", "Sunset over Taipei City - Taiwan", "Brooklyn Bridge New York - United States", "Lotte World Tower Seoul - South Korea", "New York City", "United States"], "captions_lightbox":[], "gallery_options":{"rowHeight":150, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"video-html5", "id":"jg_video_html5", "show_delay":300, "title":false, "theme":"city", "video_path":"/assets/videos/gallery/html5", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["video1.mp4", "video2.mp4"], "captions_gallery":["PeckPocketed", "Rollin`Wild"], "captions_lightbox":["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>", "<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"], "poster":["video1-poster.jpg", "video2-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_youtube", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["//youtube.com/watch?v=X5Cfi7U4eL4", "//youtube.com/watch?v=Nck6BZga7TQ", "//youtube.com/watch?v=F2SXmzk8ve4", "//youtube.com/watch?v=ln3wAdRAim4"], "captions_gallery":["Carpool Karaoke - Lady Gaga", "Carpool Karaoke - Adele", "Carpool Karaoke - Gwen Stefani", "Carpool Karaoke - First Lady Michelle Obama"], "captions_lightbox":["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>", "<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>", "<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>", "<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"], "poster":["video_gaga-poster.jpg", "video_adele-poster.jpg", "video_gwen-poster.jpg", "video_michelle-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_youtube_2", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/gallery/voice_kids_de_2021", "thumb_path":"/assets/videos/gallery/voice_kids_de_2021", "videos":["//youtube.com/watch?v=aQqPgLMgO-I", "//youtube.com/watch?v=Bl6tkAgaP1g", "//youtube.com/watch?v=GuiOYCv9NTI", "//youtube.com/watch?v=1bvE2mgJ22I"], "player_params":["start: 0, end: 148", "start: 0, end: 122", "start: 0, end: 104", "start: 10, end: 173"], "captions_gallery":["The Voice Kids Germany 2021 - Constance", "The Voice Kids Germany 2021 - Elisa", "The Voice Kids Germany 2021 - Ben", "The Voice Kids Germany 2021 - The Battle"], "captions_lightbox":["<p>14-year-old Constance has dreamed of being on The Voice Kids stage for a very long time. Your dream has finally come true! She performs a breathtaking version of Sia's song Alive.</p>", "<p>14-year-old Elisa is fascinated by the classics of pop music. Her version of Hey Jude from The Beatles comes with a lot of feeling.</p>", "<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>", "<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"], "poster":["constance.jpg", "elisa.jpg", "ben.jpg", "battle.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_vimeo", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["//vimeo.com/175582480", "//vimeo.com/179528528"], "captions_gallery":["Vogue -  Adriana Lima", "Young Fashion - Kick It Old School"], "captions_lightbox":["<p>Adriana Lima on Vimeo</p>", "<p>Kick It Old School on Vimeo</p>"], "poster":["adriana-lima-poster.jpg", "kick-it-old-school-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_dailymotion", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery/dailymotion", "thumb_path":"/assets/videos/gallery/dailymotion", "videos":["//dai.ly/x887s09", "//dai.ly/x87ycik"], "captions_gallery":["Guided Meditation: Morning Energy", "Beginner Mat Pilates: Core Workout"], "captions_lightbox":["<p>Guided Meditation: Morning Energy</p>", "<p>Beginner Mat Pilates: Core Workout</p>"], "poster":["meditation.jpg", "pilates.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_vk", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery/vk", "thumb_path":"/assets/videos/gallery/vk", "videos":["//vk.com/video_ext.php?oid=-114944820&id=456242413&hash=ef5be3f71500f8df", "//vk.com/video_ext.php?oid=-114944820&id=456239717&hash=f6651448bfb14b90"], "captions_gallery":["Otter plague", "Looked at the shark's mouth (whale shark)"], "captions_lightbox":["<p>Otter plague</p>", "<p>Looked at the shark's mouth (whale shark)</p>"], "poster":["otter.jpg", "hai.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}]});
          /* eslint-enable */
          if (typeof settings !== 'undefined') {
            moduleOptions = j1.mergeData(moduleOptions, settings);
          }
          _this.initialize(moduleOptions);
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          clearInterval(dependencies_met_j1_finished);
        }
      }, 25);
    },
    // -----------------------------------------------------------------------
    // Load AJAX data and initialize the jg gallery
    // -----------------------------------------------------------------------
    initialize: function (options) {
      logger = log4javascript.getLogger('j1.adapter.justifiedGallery');
      _this.setState('running');
      logger.debug('\n' + 'state: ' + _this.getState());
          // Create an gallery instance if id: jg_example exists
          if ($('#jg_example').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_example';
          logger.info(logText);
          // Place HTML markup for the title
          var gallery_title = '<div class="jg-gallery-title">Example of LightGallery Lightbox</div>';
          $('#jg_example').before(gallery_title);
          $('#jg_example').addClass('justified-gallery ');
            // Collect image gallery data from data file (xhr_data_path)
            $.getJSON('/assets/data/galleries.json', function (data) {
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_example']) {
                var img               = data['jg_example'][i].img;
                var captions_gallery  = data['jg_example'][i].captions_gallery;
                var captions_lightbox = data['jg_example'][i].captions_lightbox;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '  <img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  ' <img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_example').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_example');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 250,
                    "margins": 1,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_example'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_example').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_example';
                      logger.info(logText);
                    }, 250);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 250,
                    "margins": 1,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_example'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_example').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_example';
                      logger.info(logText);
                      }, 250);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_old_times exists
          if ($('#jg_old_times').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_old_times';
          logger.info(logText);
          // Place HTML markup for the title
          var gallery_title = '<div class="jg-gallery-title">GrandPa around the 1930th</div>';
          $('#jg_old_times').before(gallery_title);
          $('#jg_old_times').addClass('justified-gallery ');
            // Collect image gallery data from data file (xhr_data_path)
            $.getJSON('/assets/data/galleries.json', function (data) {
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_old_times']) {
                var img               = data['jg_old_times'][i].img;
                var captions_gallery  = data['jg_old_times'][i].captions_gallery;
                var captions_lightbox = data['jg_old_times'][i].captions_lightbox;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '  <img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  ' <img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_old_times').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_old_times');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_old_times'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_old_times').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_old_times';
                      logger.info(logText);
                    }, 200);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_old_times'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_old_times').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_old_times';
                      logger.info(logText);
                      }, 200);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_customizer exists
          if ($('#jg_customizer').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_customizer';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_customizer').addClass('justified-gallery ');
            // Collect image gallery data from data file (xhr_data_path)
            $.getJSON('/assets/data/galleries.json', function (data) {
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_customizer']) {
                var img               = data['jg_customizer'][i].img;
                var captions_gallery  = data['jg_customizer'][i].captions_gallery;
                var captions_lightbox = data['jg_customizer'][i].captions_lightbox;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '  <img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  ' <img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_customizer').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_customizer');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 150,
                    "margins": 1,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_customizer'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_customizer').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_customizer';
                      logger.info(logText);
                    }, 250);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 150,
                    "margins": 1,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "mode": "lg-fade",
                      "cssEasing": "cubic-bezier(0.25, 0, 0.25, 1)",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_customizer'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_customizer').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_customizer';
                      logger.info(logText);
                      }, 250);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_html5 exists
          if ($('#jg_video_html5').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_html5';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_html5').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_html5']) {
                var img               = data['jg_video_html5'][i].image_path + '/' + data['jg_video_html5'][i].poster;
                var captions_gallery  = data['jg_video_html5'][i].captions_gallery;
                var captions_lightbox = data['jg_video_html5'][i].captions_lightbox;
                var video_id          = data['jg_video_html5'][i].video_id;
                var video             = data['jg_video_html5'][i].video;
                var theme             = data['jg_video_html5'][i].theme;
                var player_params     = data['jg_video_html5'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-html="#' +video_id+ '">' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_html5']) {
                var video        = data['jg_video_html5'][i].video_path + '/' + data['jg_video_html5'][i].video;
                var poster       = data['jg_video_html5'][i].image_path + '/' + data['jg_video_html5'][i].poster;
                var caption      = data['jg_video_html5'][i].captions_lightbox;
                var video_id     = data['jg_video_html5'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-city"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_html5').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_html5').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_html5');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_html5'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_html5').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_html5';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_html5'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_html5').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_html5';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_online_youtube exists
          if ($('#jg_video_online_youtube').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_online_youtube';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_online_youtube').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_online_youtube']) {
                var img               = data['jg_video_online_youtube'][i].image_path + '/' + data['jg_video_online_youtube'][i].poster;
                var captions_gallery  = data['jg_video_online_youtube'][i].captions_gallery;
                var captions_lightbox = data['jg_video_online_youtube'][i].captions_lightbox;
                var video_id          = data['jg_video_online_youtube'][i].video_id;
                var video             = data['jg_video_online_youtube'][i].video;
                var theme             = data['jg_video_online_youtube'][i].theme;
                var player_params     = data['jg_video_online_youtube'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-src="' +video+ '"';
                  content += ' data-options="' +player_params+ '"' + '>' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_online_youtube']) {
                var video        = data['jg_video_online_youtube'][i].video_path + '/' + data['jg_video_online_youtube'][i].video;
                var poster       = data['jg_video_online_youtube'][i].image_path + '/' + data['jg_video_online_youtube'][i].poster;
                var caption      = data['jg_video_online_youtube'][i].captions_lightbox;
                var video_id     = data['jg_video_online_youtube'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_online_youtube').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_online_youtube').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_online_youtube');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_youtube'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_youtube').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_youtube';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_youtube'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_youtube').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_youtube';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_online_youtube_2 exists
          if ($('#jg_video_online_youtube_2').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_online_youtube_2';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_online_youtube_2').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_online_youtube_2']) {
                var img               = data['jg_video_online_youtube_2'][i].image_path + '/' + data['jg_video_online_youtube_2'][i].poster;
                var captions_gallery  = data['jg_video_online_youtube_2'][i].captions_gallery;
                var captions_lightbox = data['jg_video_online_youtube_2'][i].captions_lightbox;
                var video_id          = data['jg_video_online_youtube_2'][i].video_id;
                var video             = data['jg_video_online_youtube_2'][i].video;
                var theme             = data['jg_video_online_youtube_2'][i].theme;
                var player_params     = data['jg_video_online_youtube_2'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-src="' +video+ '"';
                  content += ' data-options="' +player_params+ '"' + '>' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_online_youtube_2']) {
                var video        = data['jg_video_online_youtube_2'][i].video_path + '/' + data['jg_video_online_youtube_2'][i].video;
                var poster       = data['jg_video_online_youtube_2'][i].image_path + '/' + data['jg_video_online_youtube_2'][i].poster;
                var caption      = data['jg_video_online_youtube_2'][i].captions_lightbox;
                var video_id     = data['jg_video_online_youtube_2'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_online_youtube_2').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_online_youtube_2').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_online_youtube_2');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_youtube_2'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_youtube_2').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_youtube_2';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                      "videojs": true,
                      "videojsOptions": {},
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_youtube_2'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_youtube_2').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_youtube_2';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_online_vimeo exists
          if ($('#jg_video_online_vimeo').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_online_vimeo';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_online_vimeo').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_online_vimeo']) {
                var img               = data['jg_video_online_vimeo'][i].image_path + '/' + data['jg_video_online_vimeo'][i].poster;
                var captions_gallery  = data['jg_video_online_vimeo'][i].captions_gallery;
                var captions_lightbox = data['jg_video_online_vimeo'][i].captions_lightbox;
                var video_id          = data['jg_video_online_vimeo'][i].video_id;
                var video             = data['jg_video_online_vimeo'][i].video;
                var theme             = data['jg_video_online_vimeo'][i].theme;
                var player_params     = data['jg_video_online_vimeo'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-src="' +video+ '"';
                  content += ' data-options="' +player_params+ '"' + '>' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_online_vimeo']) {
                var video        = data['jg_video_online_vimeo'][i].video_path + '/' + data['jg_video_online_vimeo'][i].video;
                var poster       = data['jg_video_online_vimeo'][i].image_path + '/' + data['jg_video_online_vimeo'][i].poster;
                var caption      = data['jg_video_online_vimeo'][i].captions_lightbox;
                var video_id     = data['jg_video_online_vimeo'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_online_vimeo').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_online_vimeo').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_online_vimeo');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_vimeo'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_vimeo').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_vimeo';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_vimeo'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_vimeo').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_vimeo';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_online_dailymotion exists
          if ($('#jg_video_online_dailymotion').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_online_dailymotion';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_online_dailymotion').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_online_dailymotion']) {
                var img               = data['jg_video_online_dailymotion'][i].image_path + '/' + data['jg_video_online_dailymotion'][i].poster;
                var captions_gallery  = data['jg_video_online_dailymotion'][i].captions_gallery;
                var captions_lightbox = data['jg_video_online_dailymotion'][i].captions_lightbox;
                var video_id          = data['jg_video_online_dailymotion'][i].video_id;
                var video             = data['jg_video_online_dailymotion'][i].video;
                var theme             = data['jg_video_online_dailymotion'][i].theme;
                var player_params     = data['jg_video_online_dailymotion'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-src="' +video+ '"';
                  content += ' data-options="' +player_params+ '"' + '>' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_online_dailymotion']) {
                var video        = data['jg_video_online_dailymotion'][i].video_path + '/' + data['jg_video_online_dailymotion'][i].video;
                var poster       = data['jg_video_online_dailymotion'][i].image_path + '/' + data['jg_video_online_dailymotion'][i].poster;
                var caption      = data['jg_video_online_dailymotion'][i].captions_lightbox;
                var video_id     = data['jg_video_online_dailymotion'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_online_dailymotion').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_online_dailymotion').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_online_dailymotion');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_dailymotion'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_dailymotion').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_dailymotion';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_dailymotion'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_dailymotion').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_dailymotion';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
          // Create an gallery instance if id: jg_video_online_vk exists
          if ($('#jg_video_online_vk').length) {
          logText = '\n' + 'gallery is being initialized on id: #jg_video_online_vk';
          logger.info(logText);
          // Place HTML markup for the title
          $('#jg_video_online_vk').addClass('justified-gallery ');
            // Collect html5 video gallery data from data file (xhr_data_path)
            //
            $.getJSON('/assets/data/galleries.json', function (data) {
              var play_button = '/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png';
              var content = '';
              var gallery_class = 'justified-gallery';
              gallery_class += ' light-gallery ';
              for (var i in data['jg_video_online_vk']) {
                var img               = data['jg_video_online_vk'][i].image_path + '/' + data['jg_video_online_vk'][i].poster;
                var captions_gallery  = data['jg_video_online_vk'][i].captions_gallery;
                var captions_lightbox = data['jg_video_online_vk'][i].captions_lightbox;
                var video_id          = data['jg_video_online_vk'][i].video_id;
                var video             = data['jg_video_online_vk'][i].video;
                var theme             = data['jg_video_online_vk'][i].theme;
                var player_params     = data['jg_video_online_vk'][i].player_params;
                var lightbox          = 'lg';
                if (captions_lightbox != null && lightbox == 'lg') {
                  content +=  '<a data-sub-html="' +captions_lightbox+ '" ';
                  content += ' data-src="' +video+ '"';
                  content += ' data-options="' +player_params+ '"' + '>' + '\n';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_lightbox+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                } else {
                  content +=  '<a data-sub-html="' +captions_gallery+ '" ';
                  content +=  'href="' +img+ '">' + '\n';
                  content +=  '<img src="' +img+ '" img alt="' +captions_gallery+ '">' + '\n';
                  content +=  '<span><img class="justified-gallery img-overlay" src="/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png" alt="Play Button"></span>' + '\n';
                }
                content +=  '</a>' + '\n';
              } // END for
              // hidden container for the video-js player
              //
              var hidden_video_div = '';
              for (var i in data['jg_video_online_vk']) {
                var video        = data['jg_video_online_vk'][i].video_path + '/' + data['jg_video_online_vk'][i].video;
                var poster       = data['jg_video_online_vk'][i].image_path + '/' + data['jg_video_online_vk'][i].poster;
                var caption      = data['jg_video_online_vk'][i].captions_lightbox;
                var video_id     = data['jg_video_online_vk'][i].video_id;
                var video_type   = video.substr(video.lastIndexOf('.') + 1);
                hidden_video_div += '<div style="display:none;" id="' +video_id+ '">' + '\n';
                hidden_video_div += '  <video class="lg-video-object lg-html5 video-js vjs-theme-"' + '\n';
                hidden_video_div += '         poster="' +poster+ '" controls="" preload="none">' + '\n';
                hidden_video_div += '    <source src="' +video+ '" type="video/' +video_type+ '">' + '\n';
                hidden_video_div += '    Your browser does not support HTML5 video.' + '\n';
                hidden_video_div += '  </video>' + '\n';
                hidden_video_div += '</div>' + '\n';
              }
              $('#jg_video_online_vk').before(hidden_video_div);
              // Hide gallery container (until lightGallery is NOT initialized)
              // and place HTML markup
              $('#jg_video_online_vk').hide().html(content);
              // Initialize and run the gallery using individual gallery|lightbox options
                var gallery_selector = $('#jg_video_online_vk');
                if (options !== undefined) {
                  // lightbox initialized on COMPLETE event of justifiedGallery
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  })
                  /* eslint-enable */
                  .on('jg.complete', function (e) {
                    e.stopPropagation();
                    // options enabled
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_vk'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_vk').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_vk';
                      logger.info(logText);
                    }, 300);
                  });
                } else {
                  /* eslint-disable */
                  gallery_selector.justifiedGallery({
                    "rowHeight": 200,
                    "margins": 5,
                  /* eslint-enable */
                  }).on('jg.complete', function (e) {
                     e.stopPropagation();
                    // lightbox initialized on COMPLETE event of justifiedGallery
                    /* eslint-disable */
                    gallery_selector.lightGallery({
                      "lightbox": "lg",
                    });
                    /* eslint-enable */
                    // Initialize instance variable of lightGallery (for later access)
                    j1['jg_video_online_vk'] = gallery_selector.data('lightGallery');
                    // Show gallery DIV element if jg has completed *and* the
                    // lightbox is initialized (delayed)
                    setTimeout(function() {
                      $('#jg_video_online_vk').show();
                      logText = '\n' + 'initializing gallery finished on id: #jg_video_online_vk';
                      logger.info(logText);
                      }, 300);
                  });
                }
               // ENDIF lightbox "lg"
                // ENDIF lightbox "cb"
            }); // END getJSON
          } //end gallery
         // ENDIF gallery enabled
    }, // END function initialize
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        _this.setState('finished');
        logger.info('\n' + message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);



