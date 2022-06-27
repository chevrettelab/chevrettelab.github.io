

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGalleryCustomizer.js
 # J1 Adapter for Gallery Customizer
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-06-27 05:03:17 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.justifiedGalleryCustomizer = (function (j1, window) {
  var environment       = 'development';
  var galleryOptions    = {};
  var customizerOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.justifiedGalleryCustomizer',
        generated:   '2022-06-27 05:03:17 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.justifiedGalleryCustomizer;
      logger  = log4javascript.getLogger('j1.adapter.justifiedGalleryCustomizer');
      /* eslint-disable */
      galleryOptions    = $.extend({}, {"enabled":true, "xhr_data_path":"/assets/data/galleries.json", "instance_type":"multiple", "rowHeight":170, "galleries":[{"gallery":{"enabled":true, "type":"image", "id":"jg_example", "title":"Example of LightGallery Lightbox", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China"], "captions_lightbox":[], "gallery_options":{"rowHeight":250, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_old_times", "show_delay":200, "title":"GrandPa around the 1930th", "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/old_times", "thumb_path":"/assets/images/modules/gallery/old_times", "images":["image_01.jpg", "image_02.jpg", "image_03.jpg", "image_04.jpg"], "captions_gallery":["GrandPa's 80th Birthday", "GrandPa's 80th Birthday", "GrandPa's annual journey", "GrandPa's annual journey"], "captions_lightbox":[], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_customizer", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg", "gints-gailis_b.jpg", "steven-diaz_b.jpg", "denys-nevozhai-2_b.jpg", "johan-mouchet_b.jpg", "emmad-mazhari_b.jpg", "federico-rizzarelli_b.jpg", "andreas-brucker_b.jpg", "thomas-tucker_b.jpg", "luca-bravo_b.jpg", "ethan-brooke_b.jpg", "oskars-sylwan_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China", "Shangri-La Hotel Jakarta - Indonesia", "Tokyo seen from World Trade Center Observation Deck - Japan", "Young couple over Shenzhen - China", "The Queen Bee at the Eureka Tower - Melbourne Southbank Australia", "Chicago - United States", "Shanghai - China", "Cityscape of Bangkok Downtown - Thailand", "Sunset over Taipei City - Taiwan", "Brooklyn Bridge New York - United States", "Lotte World Tower Seoul - South Korea", "New York City", "United States"], "captions_lightbox":[], "gallery_options":{"rowHeight":150, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"video-html5", "id":"jg_video_html5", "show_delay":300, "title":false, "theme":"city", "video_path":"/assets/videos/gallery/html5", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["video1.mp4", "video2.mp4"], "captions_gallery":["PeckPocketed", "Rollin`Wild"], "captions_lightbox":["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>", "<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"], "poster":["video1-poster.jpg", "video2-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_youtube", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["//youtube.com/watch?v=X5Cfi7U4eL4", "//youtube.com/watch?v=Nck6BZga7TQ", "//youtube.com/watch?v=F2SXmzk8ve4", "//youtube.com/watch?v=ln3wAdRAim4"], "captions_gallery":["Carpool Karaoke - Lady Gaga", "Carpool Karaoke - Adele", "Carpool Karaoke - Gwen Stefani", "Carpool Karaoke - First Lady Michelle Obama"], "captions_lightbox":["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>", "<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>", "<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>", "<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"], "poster":["video_gaga-poster.jpg", "video_adele-poster.jpg", "video_gwen-poster.jpg", "video_michelle-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_youtube_2", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/gallery/voice_kids_de_2021", "thumb_path":"/assets/videos/gallery/voice_kids_de_2021", "videos":["//youtube.com/watch?v=aQqPgLMgO-I", "//youtube.com/watch?v=Bl6tkAgaP1g", "//youtube.com/watch?v=GuiOYCv9NTI", "//youtube.com/watch?v=1bvE2mgJ22I"], "player_params":["start: 0, end: 148", "start: 0, end: 122", "start: 0, end: 104", "start: 10, end: 173"], "captions_gallery":["The Voice Kids Germany 2021 - Constance", "The Voice Kids Germany 2021 - Elisa", "The Voice Kids Germany 2021 - Ben", "The Voice Kids Germany 2021 - The Battle"], "captions_lightbox":["<p>14-year-old Constance has dreamed of being on The Voice Kids stage for a very long time. Your dream has finally come true! She performs a breathtaking version of Sia's song Alive.</p>", "<p>14-year-old Elisa is fascinated by the classics of pop music. Her version of Hey Jude from The Beatles comes with a lot of feeling.</p>", "<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>", "<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"], "poster":["constance.jpg", "elisa.jpg", "ben.jpg", "battle.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_vimeo", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["//vimeo.com/175582480", "//vimeo.com/179528528"], "captions_gallery":["Vogue -  Adriana Lima", "Young Fashion - Kick It Old School"], "captions_lightbox":["<p>Adriana Lima on Vimeo</p>", "<p>Kick It Old School on Vimeo</p>"], "poster":["adriana-lima-poster.jpg", "kick-it-old-school-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_dailymotion", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery/dailymotion", "thumb_path":"/assets/videos/gallery/dailymotion", "videos":["//dai.ly/x887s09", "//dai.ly/x87ycik"], "captions_gallery":["Guided Meditation: Morning Energy", "Beginner Mat Pilates: Core Workout"], "captions_lightbox":["<p>Guided Meditation: Morning Energy</p>", "<p>Beginner Mat Pilates: Core Workout</p>"], "poster":["meditation.jpg", "pilates.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_vk", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery/vk", "thumb_path":"/assets/videos/gallery/vk", "videos":["//vk.com/video_ext.php?oid=-114944820&id=456242413&hash=ef5be3f71500f8df", "//vk.com/video_ext.php?oid=-114944820&id=456239717&hash=f6651448bfb14b90"], "captions_gallery":["Otter plague", "Looked at the shark's mouth (whale shark)"], "captions_lightbox":["<p>Otter plague</p>", "<p>Looked at the shark's mouth (whale shark)</p>"], "poster":["otter.jpg", "hai.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}]});
      customizerOptions = $.extend({}, {"enabled":true, "title":"Mega Cities", "xhr_container_id":"customizer", "xhr_data_element":"galleryCustomizer", "xhr_data_path":"/assets/data/gallery_customizer/index.html", "max_gallery_width":1024, "gallery_settings":{"rowHeight":150, "margins":1, "border":0, "captions":true, "randomize":false, "justifyLastRow":false, "hideLastRow":false}});
      /* eslint-enable */
      // -----------------------------------------------------------------------
      // data loader
      // -----------------------------------------------------------------------
      j1.loadHTML ({
        xhr_container_id:   customizerOptions.xhr_container_id,
        xhr_data_path:      customizerOptions.xhr_data_path,
        xhr_data_element:   customizerOptions.xhr_data_element },
        'j1.adapter.gallery_customizer',
        'null'
      );
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_data_loaded = setInterval(function() {
        if (j1.getState() == 'finished' && j1.xhrDOMState['#customizer'] == 'success' && j1.adapter.justifiedGallery.getState() == 'finished') {
          var galleryId             = '#jg_customizer';
          var $formId               = $('#jg-customizer-form');
          var $instance             = $('#jg_customizer');
          var rangeRowHeigth        = document.getElementById('jgSlider_row_heigth');
          var rangeThumbSpacing     = document.getElementById('jgSlider_thumb_spacing');
          var rangeGalleryPadding   = document.getElementById('jgSlider_gallery_padding');
          var kbdDelay              = 750;
          var imageHeightMin        = 100;
          logger.info('\n' + 'module is being initialized');
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'loading HTML portion of the customizer finished on id: #' + customizerOptions.xhr_container_id);
          // -------------------------------------------------------------------
          // load gallery data
          //
          j1.adapter.justifiedGallery.initialize(galleryOptions);
          // -------------------------------------------------------------------
          // initialize customizer ui
          //
          if ($formId.length) {
            var dependencies_met_sliders_loaded = setInterval(function() {
              if (j1.adapter.rangeSlider.getState() == 'finished') {
                logger.info('\n' + 'initialize customizer ui');
                rangeRowHeigth.noUiSlider.on('update', function (values, handle) {
                  $instance.justifiedGallery({rowHeight: values[handle]});
                });
                rangeThumbSpacing.noUiSlider.on('update', function (values, handle) {
                  $instance.justifiedGallery({margins: values[handle]});
                });
                rangeGalleryPadding.noUiSlider.on('update', function (values, handle) {
                  $instance.justifiedGallery({border: values[handle]});
                });
                $('input:checkbox[name="captions"]').on('click', function (e) {
                  var value = $(this).is(':checked');
                  $instance.justifiedGallery({captions: value});
                  if(environment === 'development') {
                    logText = '\n' + 'gallery on ID ' +galleryId+ ' changed captions to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="random"]').on('click', function (e) {
                  var value = $(this).is(':checked');
                  $instance.justifiedGallery({randomize: value});
                  if(environment === 'development') {
                    logText = '\n' + 'gallery on ID ' +galleryId+ ' changed randomize to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="justify_last_row"]').on('click', function (e) {
                  var value = $(this).is(':checked');
                  if (value == true) {
                    value = 'justify';
                    $instance.justifiedGallery({lastRow: value});
                  } else {
                    value = 'nojustify';
                    $instance.justifiedGallery({lastRow: value});
                  }
                  if(environment === 'development') {
                    logText = '\n' + 'gallery on ID ' +galleryId+ ' changed lastRow to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="hide_last_row"]').on('click', function (e) {
                  var value = $(this).is(':checked');
                  if (value == true) {
                    value = 'hide';
                    $instance.justifiedGallery({lastRow: value});
                  } else {
                    value = 'nojustify';
                    $instance.justifiedGallery({lastRow: value});
                  }
                  if(environment === 'development') {
                    logText = '\n' + 'gallery on ID ' +galleryId+ ' changed lastRow to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('#jg-customizer-form button[name="reset-defaults"]').on('click', function (e) {
                  rangeRowHeigth.noUiSlider.set(customizerOptions.gallery_settings.rowHeight);
                  rangeThumbSpacing.noUiSlider.set(customizerOptions.gallery_settings.margins);
                  rangeGalleryPadding.noUiSlider.set(customizerOptions.gallery_settings.border);
                  $('input:checkbox[name="captions"]').val('on').filter('[value="on"]').prop('checked', customizerOptions.gallery_settings.captions);
                  $('input:checkbox[name="random"]').val('off').filter('[value="off"]').prop('checked', customizerOptions.gallery_settings.randomize);
                  $('input:checkbox[name="justify_last_row"]').val('on').filter('[value="on"]').prop('checked', customizerOptions.gallery_settings.justifyLastRow);
                  $('input:checkbox[name="hide_last_row"]').val('off').filter('[value="off"]').prop('checked', customizerOptions.gallery_settings.hideLastRow);
                  // -----------------------------------------------------------
                  // set gallery options
                  //
                  $instance.justifiedGallery({
                    rowHeight:          customizerOptions.gallery_settings.rowHeight,
                    maxRowHeight:       customizerOptions.gallery_settings.maxRowHeight,
                    lastRow:            customizerOptions.gallery_settings.lastRow,
                    margins:            customizerOptions.gallery_settings.margins,
                    border:             customizerOptions.gallery_settings.border,
                    randomize:          customizerOptions.gallery_settings.randomize,
                    sort:               customizerOptions.gallery_settings.sort,
                    refreshTime:        customizerOptions.gallery_settings.refreshTime,
                    refreshSensitivity: customizerOptions.gallery_settings.refreshSensitivity,
                    justifyThreshold:   customizerOptions.gallery_settings.justifyThreshold,
                    captions:           customizerOptions.gallery_settings.captions
                  });
                  if(environment === 'development') {
                    logText = '\n' + 'gallery on ID ' +galleryId+ ' reset to default values';
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                clearInterval(dependencies_met_sliders_loaded);
              }
            }, 25);
          } // END if formId (customizer ui)
          // -----------------------------------------------------------
          // set drawer events (button toggler)
          // See: https://jsfiddle.net/prathviraj080/vbbbw46a/1/
          //
          $('button.drawer-toggler').click(function(){
            $('button.drawer-toggler span.mdi').toggleClass('mdi-menu mdi-close');
          });
          $('button.drawer-toggler').click(function(){
            $('button.drawer-toggler').toggleClass('fadeIn rotateIn');
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          logger.debug('\n' + 'met dependencies for: loadHTML');
          clearInterval(dependencies_met_data_loaded);
        } // END dependencies_met_data_loaded
      }, 25);
    }, // END init
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
        //
        // Place handling of command|action here
        //
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



