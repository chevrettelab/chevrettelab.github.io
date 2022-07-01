

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-01 02:47:39 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.analytics = (function (j1, window) {
var url             = new liteURL(window.location.href);
var hostname        = url.hostname;
var environment     = 'development';
var gaScript        = document.createElement('script');
var providerID      = 'G-LZQRG2DCFB';
var skipAllHosts    = 'localhost, 127.0.0.1';
var validProviderID = (providerID.includes('your')) ? false : true;
var optInOut        = false;
var anonymizeIP     = false;
var cookie_names    = j1.getCookieNames();
var date            = new Date();
var timestamp_now   = date.toISOString();
var skipHost        = false;
var skipHosts;
var gaCookies;
var user_consent;
var gaExists;
var _this;
var logger;
var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // [INFO   ] [j1.adapter.analytics                    ] [ detected analytics provider (j1_config): google} ]
      // [INFO   ] [j1.adapter.analytics                    ] [ start processing load region head, layout:  ]
      // [INFO   ] [j1.adapter.analytics                    ] [ place provider: Google Adsense ]
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.analytics',
        generated:   '2022-07-01 02:47:39 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this = j1.adapter.analytics;
      logger = log4javascript.getLogger('j1.adapter.analytics.google');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // remove cookies on invalid GA config or left from a previous
      // session/page view if they exists
      // ---------------------------------------------------------------------
      gaCookies = j1.findCookie('_ga');
      gaCookies.forEach(function (item) {
        logger.warn('\n' + 'delete cookie created by Google Analytics: ' + item);
        if (hostname == 'localhost') {
          j1.removeCookie({ name: item, domain: false, secure: false });
        } else {
          j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
        }
      });
      var dependencies_met_page_ready = setInterval(function() {
        if (j1.getState() == 'finished') {
          gaExists  = document.getElementById('google-tag-manager');
          skipHosts = skipAllHosts.replace(/,/g, ' ');
          skipHost = skipHosts.includes(hostname);
          user_consent  = j1.readCookie(cookie_names.user_consent);
          if (user_consent.analysis && skipHost && validProviderID) {
            logger.warn('\n' + 'Google Analytics skipped for: ' + hostname);
          }
          if (!gaExists && !skipHost) {
            // add ga api dynamically in the head section
            // -----------------------------------------------------------------
            logger.info('\n' + 'Google Analytics added for: ' + hostname);
            logger.info('\n' + 'Google Analytics API added in section: head');
            gaScript.async = true;
            gaScript.id    = 'google-tag-manager';
            gaScript.src   = '//www.googletagmanager.com/gtag/js?id=' + providerID;
            document.head.appendChild(gaScript);
          }
          user_consent  = j1.readCookie(cookie_names.user_consent);
          if (user_consent.analysis) {
            if (validProviderID) {
              logger.info('\n' + 'user consent on analytics: ' + user_consent.analysis);
              logger.info('\n' + 'enable Google Analytics on ID: ' + providerID);
              GTagOptIn.register(providerID);
              GTagOptIn.optIn();
            } else {
              logger.warn('\n' + 'invalid trackig id detected for Google Analytics: ' + providerID);
            }
          } else {
            logger.info('\n' + 'user consent on analytics: ' + user_consent.analysis);
            logger.warn('\n' + 'disable Google Analytics on ID: ' + providerID);
            GTagOptIn.register(providerID);
            GTagOptIn.optOut();
          }
          clearInterval(dependencies_met_page_ready);
        } // END if getState 'finished'
      }, 25);
      // [INFO   ] [j1.adapter.analytics                    ] [ end processing ]
      return;
    }, // END init
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



