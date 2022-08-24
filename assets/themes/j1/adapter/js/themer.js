

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-08-24 14:41:56 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.themer = (function (j1, window) {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var environment               = 'development';
  var themerOptions             = $.extend({}, {"enabled":true, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/previewer/theme/", "menu_icon_family":"MDI", "menu_icon_color":"#9E9E9E", "menu_icon_size":"mdi-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
  var url                       = new liteURL(window.location.href);
  var secure                    = (url.protocol.includes('https')) ? true : false;
  var user_state                = {};
  var user_consent              = {};
  var cookie_names              = j1.getCookieNames();
  var user_state_detected       = false;
  var styleLoaded               = false;
  var id                        = 'default';
  var user_state_cookie;
  var theme_css_html;
  var _this;
  var logger;
  var logText;
  var cookie_written;
  var cssExtension              = (environment === 'production') ? '.min.css' : '.css';
  var default_theme_name        = 'UnoLight';
  var default_theme_author      = 'J1 Team';
  var default_theme_author_url  = 'https://jekyll.one/';
  var default_theme_css_name    = default_theme_name.toLowerCase();
  var default_theme_css         = '/assets/themes/j1/core/css/themes/' + default_theme_css_name + '/bootstrap' + cssExtension;
  var interval_count            = 0;
  var max_count                 = themerOptions.retries;
  var j1Cookies;
  var gaCookies;
  var url;
  var baseUrl;
  var error_page;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  function styleSheetLoaded(styleSheet) {
    var sheets = document.styleSheets, stylesheet = sheets[(sheets.length - 1)];
    // find CSS file 'styleSheetName' in document
    for(var i in document.styleSheets) {
      if(sheets[i].href && sheets[i].href.indexOf(styleSheet) > -1) {
        return true;
      }
    }
    return false;
  }
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
        module_name: 'j1.adapter.themer',
        generated:   '2022-08-24 14:41:56 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this       = j1.adapter.themer;
      url         = new liteURL(window.location.href);
      baseUrl     = url.origin;
      error_page  = url.origin + '/204.html';
      j1Cookies   = j1.findCookie('j1');
      gaCookies   = j1.findCookie('_ga');
      logger      = log4javascript.getLogger('j1.adapter.themer');
      // initialize state flag
      _this.state = 'started';
      logger.debug('\n' + 'state: ' + _this.getState());
      // jadams, 2021-07-25: problem seems NOT an timing issue on the iPad
      // platform. (General) Dependency should be REMOVED!!!
      // TODO: Isolate redirect for iPad ONLY!!!
      //
      // jadams, 2021-07-11: added dependecy on the user state cookie
      // Found timing issues testing mobile devices (iPad)
      var dependencies_met_user_state_available = setInterval (function () {
        user_state_detected = j1.existsCookie(cookie_names.user_state);
        // counter how often the check should be done for the existence
        // of the user state cookie
        interval_count += 1;
        if (user_state_detected) {
           user_state        = j1.readCookie(cookie_names.user_state);
           user_consent      = j1.readCookie(cookie_names.user_consent);
           logger.info('\n' + 'cookie ' +  cookie_names.user_state + ' successfully loaded after: ' + interval_count * 25 + ' ms');
           // initial theme data
           if (user_state.theme_css === '') {
             user_state.theme_name       = default_theme_name;
             user_state.theme_css        = default_theme_css;
             user_state.theme_author     = default_theme_author;
             user_state.theme_author_url = default_theme_author_url;
             cookie_written = j1.writeCookie({
               name:     cookie_names.user_state,
               data:     user_state,
               secure:   secure,
               expires:  365
             });
             if (!cookie_written) {
                 logger.error('\n' + 'failed to write cookie: ' + cookie_names.user_consent);
             }
           }
           styleLoaded     = styleSheetLoaded(user_state.theme_css);
           theme_css_html  = '<link rel="stylesheet" id="' + id + '" href="' + user_state.theme_css + '" type="text/css" />';
           // check cookie consistency
           if (Object.keys(user_state).length > 2)  {
             // loading theme CSS file except on UNO
             if (!user_state.theme_name.includes('Uno') || !styleLoaded) {
               $('head').append(theme_css_html);
             }
           } else {
             logger.fatal('\n' + 'inconsistent state detected for cookie: ' + cookie_names.user_state);
           }
           // set the theme switcher state
           user_state.theme_switcher = themerOptions.enabled;
           // jadams, 2021-08-10: moved hide|show themes menu to
           // j1 adapter (displayPage)
           //
           // jadams, 2021-07-25: hide|show themes menu on cookie consent
           // (analysis|personalization) settings. BootSwatch is a 3rd party
           // is using e.g GA. Because NO control is possible on 3rd parties,
           // for GDPR compliance, themes feature may disabled on
           // privacy settings
           //
           // if (!user_consent.analysis || !user_consent.personalization)  {
           //   logger.warn('\n' + 'disable themes feature because of privacy settings');
           //   $("#themes_menu").hide();
           // } else {
           //   $("#themes_menu").show();
           // }
           if (themerOptions.enabled) {
           // enable BS ThemeSwitcher
           logger.info('\n' + 'themes detected as: enabled');
           logger.info('\n' + 'theme is being initialized: ' + user_state.theme_name);
           /* eslint-disable */
           // load list of remote themes
           $('#remote_themes').bootstrapThemeSwitcher.defaults = {
             debug:                    themerOptions.debug,
             saveToCookie:             themerOptions.saveToCookie,
             cssThemeLink:             themerOptions.cssThemeLink,
             cookieThemeName:          themerOptions.cookieThemeName,
             cookieDefaultThemeName:   themerOptions.cookieDefaultThemeName,
             cookieThemeCss:           themerOptions.cookieThemeCss,
             cookieThemeExtensionCss:  themerOptions.cookieThemeExtensionCss,
             cookieExpiration:         themerOptions.cookieExpiration,
             cookiePath:               themerOptions.cookiePath,
             defaultCssFile:           themerOptions.defaultCssFile,
             bootswatchApiUrl:         themerOptions.bootswatchApiUrl,
             bootswatchApiVersion:     themerOptions.bootswatchApiVersion,
             loadFromBootswatch:       themerOptions.loadFromBootswatch,
             localFeed:                themerOptions.localThemes,
             excludeBootswatch:        themerOptions.excludeBootswatch,
             includeBootswatch:        themerOptions.includeBootswatch,
             skipIncludeBootswatch:    themerOptions.skipIncludeBootswatch
           };
           /* eslint-enable */
           logger.info('\n' + 'theme loaded: ' + user_state.theme_name);
           logger.info('\n' + 'theme css file: ' + user_state.theme_css);
           _this.setState('finished');
           logger.debug('\n' + 'state: ' + _this.getState());
           logger.info('\n' + 'module initialized successfully');
         } else {
           _this.setState('finished');
           logger.debug('\n' + 'state: ' + _this.getState());
           logger.info('\n' + 'themes detected as: disabled');
         }
          clearInterval(dependencies_met_user_state_available);
        }
        if (interval_count > max_count) {
          logger.error('\n' + 'interval max count reached: ' + max_count);
          logger.error('\n' + 'check failed after: ' + max_count * 25 + ' ms');
          logger.error('\n' + 'loading cookie failed: ' + cookie_names.user_state);
          logger.debug('\n' + 'j1 cookies found:' + j1Cookies.length);
          j1Cookies.forEach(item => console.log('j1.core.switcher: ' + item));
          logger.debug('\n' + 'ga cookies found:' + gaCookies.length);
          gaCookies.forEach(item => console.log('j1.core.switcher: ' + item));
          // jadams, 2021-07-15: redirect to homepage
          // NOTE: UNCLEAR why it is needed to create the user state
          // cookie THIS way
          //
          logger.warn('\n' + 'redirect to home page');
//        window.location.href = error_page;
          window.location.href = '/';
          clearInterval(dependencies_met_user_state_available);
        }
      }, 25); // END dependencies_met_user_state_available
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.info(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        logger.info('\n' + message.text);
        //
        // Place handling of other command|action here
        //
      }
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



