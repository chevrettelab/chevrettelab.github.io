

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rangeSlider.js
 # J1 Adapter for J1 Module rangeSlider
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-01-14 21:22:59 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.rangeSlider = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var instances     = [];
  var frontmatterOptions;
  var elms;
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  function insertAfter(newNode, referenceNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
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
        module_name: 'j1.adapter.rangeSlider',
        generated:   '2023-01-14 21:22:59 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rangeSlider;
      logger  = log4javascript.getLogger('j1.adapter.rangeSlider');
      // create settings object from frontmatterOptions
      frontmatterOptions = options != null ? $.extend({}, options) : {};
      moduleOptions = $.extend({}, {"enabled":true, "options":{"orientation":"horizontal", "connect":true, "step":1, "cbOnUpdate":"j1.adapter.rangeSlider.cbOnUpdate", "format":{"decimals":0}}, "sliders":[{"slider":{"enabled":true, "id":"example_slider", "options":{"label":"Slider 1, range: [0,100], start at: 20", "start":20, "range":{"min":0, "max":100}}}}, {"slider":{"enabled":true, "id":"example_slider_2", "options":{"label":"Slider 2, range: [0,200], start at: 80", "start":80, "range":{"min":0, "max":200}}}}, {"slider":{"enabled":true, "id":"jgSlider_row_heigth", "options":{"label":"Image Row Height [px]", "start":150, "range":{"min":100, "max":300}}}}, {"slider":{"enabled":true, "id":"jgSlider_thumb_spacing", "options":{"label":"Thumb Image Spacing [px]", "start":1, "range":{"min":0, "max":10}}}}, {"slider":{"enabled":true, "id":"jgSlider_gallery_padding", "options":{"label":"Gallery Padding [px]", "start":0, "range":{"min":0, "max":50}}}}]});
      if (typeof frontmatterOptions !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, frontmatterOptions);
      }
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          logger.info('\n' + 'module is being initialized');
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          var dependencies_met_elms_loaded = setInterval(function() {
            elms = document.querySelectorAll('.range-slider');
            if (elms.length) {
              logger.info('\n' + 'number of rangeSlider elements found: ' + elms.length);
              // -------------------------------------------------------------------
              // slider initializer
              // -------------------------------------------------------------------
              var log_text = '\n' + 'rangeSlider elements are being initialized';
              logger.info(log_text);
                elms.forEach(function (elm) {
                  var id = elm.id;
                  if (id === 'example_slider') {
                    // processing rangeSlider: example_slider
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider = document.getElementById('example_slider');
                    var instance = noUiSlider.create(slider_example_slider, {
                       start:       [20],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     100
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    var el = document.createElement("label");
                    el.classList.add('range-slider-label');
                    el.innerHTML = 'Slider 1, range: [0,100], start at: 20';
                    var div = document.getElementById(id);
                    insertAfter(el, div);
                    slider_example_slider.noUiSlider.on('update', function (values, handle) {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach(function (elm) {
                  var id = elm.id;
                  if (id === 'example_slider_2') {
                    // processing rangeSlider: example_slider_2
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider_2 = document.getElementById('example_slider_2');
                    var instance = noUiSlider.create(slider_example_slider_2, {
                       start:       [80],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     200
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    var el = document.createElement("label");
                    el.classList.add('range-slider-label');
                    el.innerHTML = 'Slider 2, range: [0,200], start at: 80';
                    var div = document.getElementById(id);
                    insertAfter(el, div);
                    slider_example_slider_2.noUiSlider.on('update', function (values, handle) {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach(function (elm) {
                  var id = elm.id;
                  if (id === 'jgSlider_row_heigth') {
                    // processing rangeSlider: jgSlider_row_heigth
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_row_heigth = document.getElementById('jgSlider_row_heigth');
                    var instance = noUiSlider.create(slider_jgSlider_row_heigth, {
                       start:       [150],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     100,
                         'max':     300
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    var el = document.createElement("label");
                    el.classList.add('range-slider-label');
                    el.innerHTML = 'Image Row Height [px]';
                    var div = document.getElementById(id);
                    insertAfter(el, div);
                    slider_jgSlider_row_heigth.noUiSlider.on('update', function (values, handle) {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach(function (elm) {
                  var id = elm.id;
                  if (id === 'jgSlider_thumb_spacing') {
                    // processing rangeSlider: jgSlider_thumb_spacing
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_thumb_spacing = document.getElementById('jgSlider_thumb_spacing');
                    var instance = noUiSlider.create(slider_jgSlider_thumb_spacing, {
                       start:       [1],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     10
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    var el = document.createElement("label");
                    el.classList.add('range-slider-label');
                    el.innerHTML = 'Thumb Image Spacing [px]';
                    var div = document.getElementById(id);
                    insertAfter(el, div);
                    slider_jgSlider_thumb_spacing.noUiSlider.on('update', function (values, handle) {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach(function (elm) {
                  var id = elm.id;
                  if (id === 'jgSlider_gallery_padding') {
                    // processing rangeSlider: jgSlider_gallery_padding
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_gallery_padding = document.getElementById('jgSlider_gallery_padding');
                    var instance = noUiSlider.create(slider_jgSlider_gallery_padding, {
                       start:       [0],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     50
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    var el = document.createElement("label");
                    el.classList.add('range-slider-label');
                    el.innerHTML = 'Gallery Padding [px]';
                    var div = document.getElementById(id);
                    insertAfter(el, div);
                    slider_jgSlider_gallery_padding.noUiSlider.on('update', function (values, handle) {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
              if (instances.length) {
                logger.info('\n' + 'number of rangeSlider instances configured: ' + instances.length);
                _this.setState('finished');
                logger.debug('\n' + 'state: ' + _this.getState());
                logger.info('\n' + 'initializing module finished');
              } else {
                logger.error('\n' + 'no configured rangeSlider instances found');
                logger.warning('\n' + 'initializing module failed');
              }
            } // ENF if elms
            clearInterval(dependencies_met_elms_loaded);
          }, 25);
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // cbOnClick)
    // Called by the rangeSlider CORE module when and dropdown element
    // is clicked
    // -------------------------------------------------------------------------
    cbOnclick: function (event) {
      var logger  = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClick');
      var itemEl = $(event.target).closest('li')[0];
      // logText = '\n' + 'entered cbOnClick on id: ' + id;
      // logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnOpen()
    // Called by the rangeSlider CORE module when dropdown get opened
    // -------------------------------------------------------------------------
    cbOnOpen: function (elm) {
      var logger  = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnOpen');
      var id      = elm.id;
      logText = '\n' + 'entered cbOnOpen on id: ' + id;
      logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnClose()
    // Called by the rangeSlider CORE module when dropdown get closed
    // -------------------------------------------------------------------------
    cbOnClose: function (elm) {
      var logger    = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClose');
      var id        = elm.id;
      var listItems = '#' + elm.id + " li";
      var menuItems = document.querySelectorAll(listItems);
      var activeItem;
      var activeValue;
      // Loop through each <li> element and mark selected menuItem by class active
      for (var i=0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains('active')) {
            activeItem  = i;
            activeValue = menuItems[i].dataset.target;
        }
      }
      logText = '\n' + 'entered cbOnClose on id: ' + id;
      logger.info(logText);
      logText = '\n' + 'item selected: ' + activeItem;
      logger.info(logText);
      logText = '\n' + 'value selected: ' + activeValue;
      logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // messageHandler
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



