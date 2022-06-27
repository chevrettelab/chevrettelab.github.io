

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtextResizer.js
 # Liquid template to adapt rtextResizer functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-06-27 05:10:46 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.rtextResizer = (function (j1, window) {
  var environment       = 'development';
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
        module_name: 'j1.adapter.rtextResizer',
        generated:   '2022-06-27 05:10:46 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rtextResizer;
      logger  = log4javascript.getLogger('j1.adapter.rtextResizer');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // data loader
      // -----------------------------------------------------------------------
      j1.loadHTML ({
        xhr_container_id:   'rtext_resizer_container',
        xhr_data_path:      '/assets/data/rtext_resizer/index.html',
        xhr_data_element:   'rtext_resizer_modal' },
        'j1.adapter.rtextResizer',
        'null'
      );
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_data_loaded = setInterval(function() {
        var logger = log4javascript.getLogger('j1.adapter.rtextResizer');
        if (j1.xhrDOMState['#rtext_resizer_container'] == 'success') {
          var $modalContainer = $('#rtext_resizer_modal');
          logger.info('\n' + 'loading rtext resizer modal finished on id: #' + 'rtext_resizer');
          logger.info('\n' + 'initialize resizer ui');
          if ($modalContainer.length) {
            var environment     = 'development';
            var logger          = log4javascript.getLogger('j1.template.rtext-resizer');
            var $el             = $("main[class*='r-text']");
            var base_classes    = $("main[class*='r-text']").attr('class').replace(/r-text-[0-9]*/g, '');
            var r_text_default  = ' r-text-300';
            var r_text_larger   = ' r-text-400';
            var r_text_largest  = ' r-text-500';
            var cl;
            var value;
            $('input:checkbox[name="textsize-300"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-400"]').prop('checked', false);
              $('input:checkbox[name="textsize-500"]').prop('checked', false);
              if (value == true) {
                cl = r_text_default;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
            $('input:checkbox[name="textsize-400"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-300"]').prop('checked', false);
              $('input:checkbox[name="textsize-500"]').prop('checked', false);
              if (value == true) {
                cl = r_text_larger;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
            $('input:checkbox[name="textsize-500"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-300"]').prop('checked', false);
              $('input:checkbox[name="textsize-400"]').prop('checked', false);
              if (value == true) {
                cl = r_text_largest;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
          } // END form events
          clearInterval(dependencies_met_data_loaded);
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          logger.debug('\n' + 'met dependencies for: loadHTML');
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



