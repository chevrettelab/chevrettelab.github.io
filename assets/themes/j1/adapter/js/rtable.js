

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-01 01:39:52 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.rtable = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var frontmatterOptions;
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
        module_name: 'j1.adapter.rtable',
        generated:   '2022-07-01 01:39:52 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rtable;
      logger  = log4javascript.getLogger('j1.adapter.rtable');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // create settings object from frontmatterOptions
      frontmatterOptions = options != null ? $.extend({}, options) : {};
      moduleOptions = $.extend({}, {"enabled":true, "breakpoint":992});
      if (typeof frontmatterOptions !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, frontmatterOptions);
      }
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          // -------------------------------------------------------------------
          // rtable initializer
          // -------------------------------------------------------------------
          var log_text = '\n' + 'rtable is being initialized';
          logger.info(log_text);
          // Add data attributes for tablesaw to all tables of a page
          // as Asciidoctor has NO option to pass 'data attributes'
          // See: https://stackoverflow.com/questions/50600405/how-to-add-custom-data-attributes-with-asciidoctor
          //
          $('table').each(function(){
            var curTable = $(this);
            var log_text;
            // jadams, 2020-09-16: class 'rtable' indicate use of 'tablesaw'
            if ($(curTable).hasClass('rtable')) {
              // jadams, 2020-09-16: add needed CSS class/attribute for tablesaw
              $(curTable).addClass('tablesaw');
              $(curTable).attr('data-tablesaw-mode','stack');
              Tablesaw.init(curTable, moduleOptions);
              // set initial state for all table/colgroup elements
              //
              if ($(window).width() < moduleOptions.breakpoint) {
                log_text = '\n' + 'hide colgroups: ' + curTable.attr('id')
                curTable.find('colgroup').hide();
                logger.debug(log_text);
              } else {
                log_text = '\n' + 'show colgroup: ' + curTable.attr('id')
                curTable.find('colgroup').show();
                logger.debug(log_text);
              }
            } // END if hasClass 'rtable'
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
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


