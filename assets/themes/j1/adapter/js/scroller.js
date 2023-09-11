

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for scroller
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-11 12:35:03 -0400
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.scroller = (function (j1, window) {
var environment   = 'development';
var language      = 'en';
var user_agent    = platform.ua;
var moduleOptions = {};
var _this;
var logger;
var logText;
var lastPageInfo;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.scroller',
        generated:   '2023-09-11 12:35:03 -0400'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this = j1.adapter.scroller;
      logger = log4javascript.getLogger('j1.adapter.scroller');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      _this.generate_scrollers();
      _this.setState('finished');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module initialized successfully');
    }, // END init
    // -------------------------------------------------------------------------
    // generate_scrollers()
    // generate scrollers configured|enabled
    // -------------------------------------------------------------------------
    generate_scrollers: function () {
      logger = log4javascript.getLogger('j1.adapter.scroller');
      logText = '\n' + 'scrollers are being initialized';
      logger.info(logText);
      // START generate scrollers
      var dependencies_met_page_ready = setInterval (function (options) {
        if (j1.getState() === 'finished') {
          var container = '#' + 'home_intro_panel';
          // scroller_id: home_intro_panel
          logText = '\n' + 'scroller of type showOnScroll is being initialized on: ' + 'home_intro_panel';
          logger.info(logText);
          // Create an scroller instance of showOnScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'home_intro_panel',
              type:           'showOnScroll',
              container:      'home_intro_panel',
              showDelay:      1000,
              scrollOffset:   500,
            });
          }
          // END scroller_id: home_intro_panel
          // scroller_id: home_news_panel
          logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'home_news_panel';
          logger.info(logText);
          var container = '#' + 'home_news_panel-scroll-group';
          var pagePath  = '/assets/data/news_panel_posts/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          }
          // Create an scroller instance of infiniteScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'home_news_panel',
              type:           'infiniteScroll',
              pagePath:       '/assets/data/news_panel_posts/page',
              elementScroll:  true,
              scrollOffset:   100,
              lastPage:       3,
              infoLastPage:   true,
              lastPageInfo:   lastPageInfo,
            });
          }
          // END scroller_id: home_news_panel
          // scroller_id: blog_navigator_preview
          logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'blog_navigator_preview';
          logger.info(logText);
          var container = '#' + 'timeline';
          var pagePath  = '/pages/public/blog/navigator/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          }
          // Create an scroller instance of infiniteScroll if container exists
          if ($(container).length) {
            $(container).scroller({
              id:             'blog_navigator_preview',
              type:           'infiniteScroll',
              pagePath:       '/pages/public/blog/navigator/page',
              elementScroll:  true,
              scrollOffset:   200,
              lastPage:       4,
              infoLastPage:   false,
              lastPageInfo:   lastPageInfo,
            });
          }
          // END scroller_id: blog_navigator_preview
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
      // END generate scrollers
    },
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
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



