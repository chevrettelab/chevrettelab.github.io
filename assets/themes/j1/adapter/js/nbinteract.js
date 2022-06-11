

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/nbinteract.js
 # J1 Adapter for nbinteract
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-06-11 17:40:02 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.nbinteract = (function (j1, window) {
  var environment     = 'development';
  var moduleOptions   = {};
  var moduleSettings  = {};
  var message         = {};
  var spinnerOpts     = {                                                       // (default) options for a spinner
    lines:      13,                                                             // number of lines to draw
    length:     38,                                                             // length of each line
    width:      17,                                                             // line thickness
    radius:     45,                                                             // radius of the inner circle
    scale:      2,                                                              // scales overall size of the spinner
    corners:    1,                                                              // corner roundness (0..1)
    speed:      0.5,                                                            // rounds per second
    rotate:     0,                                                              // rotation offset
    animation: 'spinner-line-fade-more',                                        // CSS animation name for the lines: spinner-line-fade-quick | spinner-line-shrink | spinner-line-fade-more
    direction:  1,                                                              // 1: clockwise, -1: counterclockwise
    color:      '#424242',                                                      // CSS color or array of colors: orange (EF6C00) | blue (1565C0) | gray (424242)
    fadeColor:  'transparent',                                                  // CSS color or array of colors
    top:        '70%',                                                          // top position relative to parent
    left:       '50%',                                                          // left position relative to parent
    shadow:     '0 0 1px transparent',                                          // box-shadow for the lines
    zIndex:     2000000000,                                                     // z-index (defaults to 2e9)
    className:  'spinner',                                                      // CSS class assined to the spinner
    position:   'fixed',                                                        // element positioning:  absolute|fixed
  };
  var spinnerStarted = false;                                                   // switch to indicate a started spinner
  var nbiContentModalInfoID       = 'nbiModalInfoBody';                         // ID of the content (messages) for the INFO modal
  var nbiContentModalSuccessID    = 'nbiModalSuccessBody';                      // ID of the content (messages) for the SUCCESS modal
  var nbiContentModalErrorID      = 'nbiModalErrorBody';                        // ID of the content (messages) for the SUCCESS modal
  var nbiModalInfoID              = '#' + 'nbiModalTopInfo';                    // ID of the SUCCESS modal
  var nbiModalSuccessID           = '#' + 'nbiModalTRSuccess';                  // ID of the SUCCESS modal
  var nbiModalErrorID             = '#' + 'nbiModalTLDanger';                   // ID of the ERROR modal
  var nbinteract_prepared         = false;                                      // switch to indicate if ???
  var nbiModalSuccessMessagesID   = 'nbiModalSuccessMessages';                  // UL contalner SUCCESS messages
  var nbiModalErrorMessagesID     = 'nbiModalErrorMessages';                    // UL contalner ERROR messahes
  var nbiShowMessages;                                                          // switch to show NBI messages
  var nbiIndicateNbiActivity;                                                   // switch to show a spinner while NBI is being initialized
  var nbiModalAutoClose;                                                        // switch to auto-close nbi message modals
  var nbiModalAutoCloseDelay;                                                   // delay auto-close nbi message modals
  var nbiInitTimeout;                                                           // delay indicate NBI failed
  var nbiInitMathJax;                                                           // Load and run MathJax at runtime
  var textbooks;                                                                // ALL notebokks enabled
  var textbook;                                                                 // current textbook (processed)
  var target;                                                                   // target container for the (activity) spinner
  var spinner;                                                                  // the (activity) spinner
  var nbiModal;
  var _this;
  var interact;
  var logger;
  var coreLogger;
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
      var settings = $.extend ({
        module_name: 'j1.adapter.nbinteract',
        generated:   '2022-06-11 17:40:02 +0000'
      }, options);
      moduleOptions = $.extend({}, {"spec":"jekyll-one/j1-binder-repo/main", "baseUrl":"https://mybinder.org", "provider":"gh", "button_styles":"btn btn-primary btn-raised hidden", "show_nbi_messages":false, "indicate_nbi_activity":true, "nbi_messages_auto_close":true, "nbi_init_timeout":180000, "nbi_messages_auto_close_delay":3500, "nbi_init_mathjax":true, "textbooks":[{"textbook":{"enabled":false, "id":"j1_altair_base", "xhr_data":"j1_altair_visualization.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false, "altair_cleanups":true}}, {"textbook":{"enabled":false, "id":"j1_altair_interactive", "xhr_data":"j1_altair_interactive.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false, "altair_cleanups":true}}, {"textbook":{"enabled":false, "id":"j1_altair_interactive_test", "xhr_data":"j1_altair_interactive_test.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false, "altair_cleanups":true}}, {"textbook":{"enabled":true, "id":"j1_climate_change_forecast", "xhr_data":"j1_climate_change_forecast.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":true}}, {"textbook":{"enabled":true, "id":"j1_interactive_widgets", "xhr_data":"j1_interactive_widgets.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":false, "id":"j1_odes_in_python", "xhr_data":"j1_odes_in_python.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"j1_ode_selected", "xhr_data":"j1_ode_selected.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":false, "id":"j1_pandas_intro", "xhr_data":"j1_pandas_creating_reading_and_writing.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"j1_docs_example_dynamic", "xhr_data":"j1_docs_example_dynamic.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_tutorial_interact", "xhr_data":"nbi_docs_tutorial_interact.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_tutorial_monty_hall", "xhr_data":"nbi_docs_tutorial_monty_hall.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_recipes_graphing", "xhr_data":"nbi_docs_recipes_graphing.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_recipes_layout", "xhr_data":"nbi_docs_recipes_layout.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_recipes_interactive_questions", "xhr_data":"nbi_docs_recipes_interactive_questions.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_empirical_distributions", "xhr_data":"nbi_docs_examples_empirical_distributions.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_examples_sampling_from_a_population", "xhr_data":"nbi_docs_examples_sampling_from_a_population.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_examples_variability_of_the_sample_mean", "xhr_data":"nbi_docs_examples_variability_of_the_sample_mean.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":true}}, {"textbook":{"enabled":true, "id":"nbi_docs_examples_correlation", "xhr_data":"nbi_docs_examples_correlation.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":true}}, {"textbook":{"enabled":true, "id":"nbi_docs_examples_linear_regression", "xhr_data":"nbi_docs_examples_linear_regression.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_examples_probability_distribution_plots", "xhr_data":"nbi_docs_examples_probability_distribution_plots.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}, {"textbook":{"enabled":true, "id":"nbi_docs_central_limit_theorem", "xhr_data":"nbi_docs_examples_central_limit_theorem.html", "xhr_data_path":"/pages/public/jupyter/notebooks/textbooks", "use_mathjax":false}}]});
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                   = j1.adapter.nbinteract;
      logger                  = log4javascript.getLogger('j1.adapter.nbinteract');
      nbiModalAutoClose       = moduleOptions.nbi_messages_auto_close;
      nbiModalAutoCloseDelay  = moduleOptions.nbi_messages_auto_close_delay;
      nbiInitTimeout          = moduleOptions.nbi_init_timeout;
      nbiShowMessages         = moduleOptions.show_nbi_messages;
      nbiIndicateNbiActivity  = moduleOptions.indicate_nbi_activity;
      nbiInitMathJax          = moduleOptions.nbi_init_mathjax;
      // -----------------------------------------------------------------------
      // load|configure Mathjax
      // -----------------------------------------------------------------------
      if (nbiInitMathJax) {
        _this.initMathJax();
      }
      // -----------------------------------------------------------------------
      // load HTML data for all modals used by nbInteract
      // -----------------------------------------------------------------------
      _this.loadNbiModals();
      // -----------------------------------------------------------------------
      // load the HTML portion for all textbooks configured|enabled
      // -----------------------------------------------------------------------
      _this.loadNbiTextbooks(moduleOptions);
      // -------------------------------------------------------------------
      // run a spinner to indicate activity of 'nbInteract' if enabled
      // -------------------------------------------------------------------
      $(document).ready(function() {
        if (nbiIndicateNbiActivity && !spinnerStarted) {
          spinnerStarted = true;
          target  = document.getElementById('content');
          spinner = new Spinner(spinnerOpts).spin(target);
        }
      });
      // -----------------------------------------------------------------------
      // register callbacks (actions) for all modals used
      // -----------------------------------------------------------------------
      if (nbiShowMessages) {
        _this.registerNbiModalsCB();
      }
      // -----------------------------------------------------------------------
      // interactNbiTextbooks()
      // connect to the configured BinderHub instance to create a
      // Jupyter kernel if required
      // -----------------------------------------------------------------------
      _this.interactNbiTextbooks(moduleOptions);
    }, // END init
    // -------------------------------------------------------------------------
    // initMathJax()
    // load|configure MathJax at runtime
    // See: https://docs.mathjax.org/en/v2.7-latest/options/preprocessors/tex2jax.html
    // -------------------------------------------------------------------------
    initMathJax: function () {
      var scriptMathjax       = document.createElement('script');
      var scriptMathjaxConfig = document.createElement('script');
      scriptMathjax.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_HTML');
      scriptMathjaxConfig.setAttribute('type','text/x-mathjax-config');
      scriptMathjaxConfig.innerHTML = `
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                processEscapes: true,
                processEnvironments: true,
                processClass: "mathjax",
                ignoreClass: "nomathjax"
            },
            // jadams, 2022-04-22, NOTE: 'MathJax_Display' overloaded by
            // THEME CSS. Unclear how to configure 'HTML-CSS' correctly.
            //
            // Center justify equations in code and markdown cells. Elsewhere
            // we use CSS to left justify single line equations in code cells.
            displayAlign: 'center',
            "HTML-CSS": {
                styles: {'.MathJax_Display': {
                  "margin": 0,
                }},
                linebreaks: { automatic: true }
            }
        });
      `;
      // add Mathjax resources
      //
      document.head.appendChild(scriptMathjax);
      document.head.appendChild(scriptMathjaxConfig);
      return;
    }, // END intMathjax
    // -------------------------------------------------------------------------
    // loadNbiTextbooks()
    // load the HTML portion for all textbooks configured (enabled)
    // -------------------------------------------------------------------------
    loadNbiTextbooks: function (settings) {
      var textbooks = settings.textbooks;
      textbooks.forEach (function (elm) {
        if (elm.textbook.enabled) {
          textbook = elm.textbook;
          var textbook_id = textbook.id;
          var $selector = $('#' + textbook_id);
          // load the HTML portion for the textbook
          //
          if ($selector.length) {
            _this.loadTextbookHTML ({
              xhr_container_id:   textbook.id,
              xhr_data:           textbook.xhr_data,
              xhr_data_path:      textbook.xhr_data_path,
              use_mathjax:        textbook.use_mathjax,
              altair_cleanups:    textbook.altair_cleanups,
              buttonStyles:       settings.button_styles,
            });
          }
        }
      });
    },
    // -------------------------------------------------------------------------
    // interactNbiTextbooks()
    // connect to the configured BinderHub instance to create a
    // Jupyter kernel if required. A BinderHub instance in created
    // on a per textbook basis but trigeered only done once,
    // controlled by nbinteract_prepared.
    // -------------------------------------------------------------------------
    interactNbiTextbooks: function (options) {
      var textbook = options;
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      var log_text = '\n' + 'nbinteract is being initialized';
      logger.info(log_text);
      // var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget')
      if ($('#j1_climate_change_forecast').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_climate_change_forecast').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: j1_climate_change_forecast';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: j1_climate_change_forecast');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: j1_climate_change_forecast')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: j1_climate_change_forecast
      if ($('#j1_interactive_widgets').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_interactive_widgets').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: j1_interactive_widgets';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: j1_interactive_widgets');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: j1_interactive_widgets')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: j1_interactive_widgets
      if ($('#j1_ode_selected').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_ode_selected').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: j1_ode_selected';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: j1_ode_selected');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: j1_ode_selected')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: j1_ode_selected
      if ($('#j1_docs_example_dynamic').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_docs_example_dynamic').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: j1_docs_example_dynamic';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: j1_docs_example_dynamic');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: j1_docs_example_dynamic')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: j1_docs_example_dynamic
      if ($('#nbi_docs_tutorial_interact').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_tutorial_interact').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_tutorial_interact';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_tutorial_interact');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_tutorial_interact')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_tutorial_interact
      if ($('#nbi_docs_tutorial_monty_hall').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_tutorial_monty_hall').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_tutorial_monty_hall';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_tutorial_monty_hall');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_tutorial_monty_hall')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_tutorial_monty_hall
      if ($('#nbi_docs_recipes_graphing').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_graphing').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_recipes_graphing';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_recipes_graphing');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_recipes_graphing')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_recipes_graphing
      if ($('#nbi_docs_recipes_layout').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_layout').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_recipes_layout';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_recipes_layout');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_recipes_layout')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_recipes_layout
      if ($('#nbi_docs_recipes_interactive_questions').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_interactive_questions').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_recipes_interactive_questions';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_recipes_interactive_questions');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_recipes_interactive_questions')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_recipes_interactive_questions
      if ($('#nbi_docs_empirical_distributions').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_empirical_distributions').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_empirical_distributions';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_empirical_distributions');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_empirical_distributions')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_empirical_distributions
      if ($('#nbi_docs_examples_sampling_from_a_population').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_sampling_from_a_population').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_examples_sampling_from_a_population';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_examples_sampling_from_a_population');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_examples_sampling_from_a_population')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_examples_sampling_from_a_population
      if ($('#nbi_docs_examples_variability_of_the_sample_mean').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_variability_of_the_sample_mean').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_examples_variability_of_the_sample_mean';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_examples_variability_of_the_sample_mean');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_examples_variability_of_the_sample_mean')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_examples_variability_of_the_sample_mean
      if ($('#nbi_docs_examples_correlation').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_correlation').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_examples_correlation';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_examples_correlation');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_examples_correlation')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_examples_correlation
      if ($('#nbi_docs_examples_linear_regression').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_linear_regression').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_examples_linear_regression';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_examples_linear_regression');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_examples_linear_regression')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_examples_linear_regression
      if ($('#nbi_docs_examples_probability_distribution_plots').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_probability_distribution_plots').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_examples_probability_distribution_plots';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_examples_probability_distribution_plots');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_examples_probability_distribution_plots')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_examples_probability_distribution_plots
      if ($('#nbi_docs_central_limit_theorem').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_central_limit_theorem').attr('data-nb-textbook') == 'loaded') {
            var nbiButtonsFound = document.querySelectorAll('.js-nbinteract-widget').length
            if (nbiIndicateNbiActivity && nbiButtonsFound == 1) {
              var log_text = '\n' + 'non-nbi textbook found, skip NBI initialization for: nbi_docs_central_limit_theorem';
              logger.warn(log_text);
              spinner.stop();
            }
            if(!nbinteract_prepared && nbiButtonsFound > 1) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.warn('NBI initialialization failed on textbook: nbi_docs_central_limit_theorem');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for textbook: nbi_docs_central_limit_theorem')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END textbook_id: nbi_docs_central_limit_theorem
    },
    // -------------------------------------------------------------------------
    // loadTextbookHTML()
    // Load HTML data asychronously using XHR|jQuery on an element
    // (e.g. <div>) specified by xhr_container_id, xhr_data_path
    // -------------------------------------------------------------------------
    loadTextbookHTML: function (options) {
      var html_data_path    = options.xhr_data_path + '/' + options.xhr_data;
      var id                = options.xhr_container_id;
      var mathjaxEnabled    = options.use_mathjax;
      var cleanupAltair     = options.altair_cleanups;
      var $selector         = $('#' + id);
      var logText;
      var cb_load_closure = function(id, mathjaxFlag) {
        return function (responseTxt, statusTxt, xhr) {
          var logger = log4javascript.getLogger('j1.adapter.loadHTML');
          if (statusTxt === 'success') {
            j1.setXhrDataState(id, statusTxt);
            j1.setXhrDomState(id, 'pending');
            // set data attribute to indicate HTML data loaded
            //
            $selector.attr('data-nb-textbook', 'loaded');
            // run HTML cleanups
            //
            $selector.find('button').replaceWith( function() {
              return '<button class="' + options.buttonStyles + ' js-nbinteract-widget"> Loading widgets ...</button>';
            });
            // enable MathJax for the (current) J1 Textbook container
            // processed if enabled for the (containing) textbook
            //
            var currentTextbook = document.getElementById(id);
            if (mathjaxFlag) {
              currentTextbook.classList.add('mathjax');
            } else {
              currentTextbook.classList.add('nomathjax');
            }
            // ------------------------------------------------------------------
            // see: https://www.codingexercises.com/replace-all-instances-of-css-class-in-vanilla-js
            // see: https://wiki.selfhtml.org/wiki/JavaScript/Operatoren/Rest-_oder_Spread-Operator
            // ------------------------------------------------------------------
            // disable (Google) translation for all HTML 'output_wrapper' elements
            //
            var output_wrapper = document.getElementsByClassName('output_wrapper');
            [...output_wrapper].forEach(function(x) {
              if (!x.className.includes('notranslate')) {
                x.className += ' notranslate';
              }
            });
            // cleanups for Altair for all HTML 'output_wrapper' elements
            //
            if (cleanupAltair) {
              var reUnderscores = new RegExp(/_/, 'g');
              var reMultipleSpaces = new RegExp(/\s+/, 'g');
              var reMultipleSpacesStart = new RegExp(/^\s+/, 'g');
              var reMultipleSpacesEnd = new RegExp(/\s+$/, 'g');
              var reSkipWords = new RegExp(/vgsid|bla/, 'g');
              var reDuplicateWords = new RegExp(/(\b\S.+\b)(?=.*\1)/, 'g');
              var content;
              var newContent;
              var newContentWritten = false;
              var isWidget;
              var isPageRendered = false;
              var outputDiv;
              var childNodes;
              var clientHeight;
              var lastWidget = false;
              var allID = document.querySelectorAll('*[id^="altair-viz"]');
              // check/wait for ALL widgets in the page are rendered (by JS)
              // if rendering finished, flag 'isPageRendered' is set to 'true'
              //
              for (var l = 0; l < allID.length; l++) {
                outputDiv = document.getElementById(allID[l].id);
                var dependencies_met_page_rendered = setInterval(function() {
                  lastWidget = (l == allID.length) ? true : false;
                  if (outputDiv.clientHeight && lastWidget && !isPageRendered) {
                    isPageRendered = true;
                    logger.debug('\n' + 'last widget rendered ' + outputDiv.id + ' : ' + outputDiv.clientHeight);
                    clearInterval(dependencies_met_page_rendered);
                  }
                }, 25);  // END interval
              } // END for all ID
              var dependencies_met_widgets_updated = setInterval(function() {
                if (isPageRendered) {
                  for (var item of allID) {
                  	outputDiv = document.getElementById(item.id);
                    logger.debug('\n' + 'processing widget on id: ' + item.id);
                  	childNodes = outputDiv.getElementsByClassName('vega-bind-name');
                  	if (childNodes.length) {
                  		for (var i = 0; i < childNodes.length; i++) {
                  		  content = childNodes[i].innerHTML;
                  		  newContent = content.replace(reUnderscores, ' ');
                  		  newContent  = newContent.replace(reDuplicateWords, '');
                  		  newContent  = newContent.replace(reSkipWords, '');
                  		  newContent  = newContent.replace(reMultipleSpaces, ' ');
                  		  newContent  = newContent.replace(reMultipleSpacesStart, '');
                  		  newContent  = newContent.replace(reMultipleSpacesEnd, '');
                  		  childNodes[i].innerHTML = newContent;
                  		  newContentWritten = true;
                  		} // END for
                  	} // END if childNodes.length
                  } // END for
                  logger.debug('\n' + 'all widgets updated');
                  clearInterval(dependencies_met_widgets_updated);
                }
              }, 25);  // END interval
            } // END if cleanupAltair
            // disable MathJax for all HTML 'output_wrapper' elements
            //
            [...output_wrapper].forEach(function(x) {
              if (x.className.includes('nomathjax')) {
                x.className += ' nomathjax';
              }
            });
            // make all 'image' elements responsive (BS@4)
            //
            var images = document.getElementsByTagName('img');;
            [...images].forEach(function(x) {
              if (!x.className.includes('img-fluid')) {
                x.className += 'img-fluid';
              }
            });
            // NOTE: DISABLED. Doesn't work that way. The class 'nbinteract-hide_in'
            // is used in combination with hidden code cells as well!
            //
            // Remove all childs in a element having the class 'nbinteract-hide_in'
            // document.querySelectorAll('.nbinteract-hide_in').forEach(el => el.remove());
            // Adding class on input_area NOT needed. This element contains
            // and 'highlight' element that is processed for 'notranslate'
            // in adapter rouge.js already
            //
            // var input_area = document.getElementsByClassName('input_area');
            // [...input_area].forEach(x => x.className += " notranslate");
            // cleanup headlines in textbook HTML and add an id used by toccer
            //
            $selector.find('h1').replaceWith( function() {
              // return '<h1 id="' + $(this)[0].id.replace(/\$/g, '') + '">' + $(this).text().slice(0,-1) + '</h1>';
              return '<h1 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h1>';
            });
            $selector.find('h2').replaceWith( function() {
              return '<h2 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h2>';
            });
            $selector.find('h3').replaceWith( function() {
              return '<h3 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h3>';
            });
            $selector.find('h4').replaceWith( function() {
              return '<h4 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h4>';
            });
            $selector.find('h5').replaceWith( function() {
              return '<h5 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h5>';
            });
            logText = '\n' + 'data loaded successfully on id: ' + id;
            logger.info(logText);
          }
          if (statusTxt === 'error') {
            // jadams, 2020-07-21: to be checked why id could be UNDEFINED
            if (typeof(id) != "undefined") {
              var state = 'failed';
              if (nbiIndicateNbiActivity) {
                spinner.stop();
              }
              // logger.info('\n' + 'set state for ' + mod + ' to: ' + state);
              // jadams, 2020-07-21: intermediate state should DISABLED
              // executeFunctionByName(mod + '.setState', window, state);
              j1.setXhrDataState(id, statusTxt);
              j1.setXhrDomState(id, 'pending');
              logText = '\n' + 'loading data failed on id: ' +id+ ', error ' + xhr.status + ': ' + xhr.statusText;
              logger.error(logText);
              state = false;
            }
          }
        };
      };
      // failsafe - prevent XHR load errors
      //
      if (options.xhr_data !== '') {
        logger.info('\n' + 'HTML data file found: ' + options.xhr_data);
      } else  {
        logger.warning('\n' + 'no HTML data file found, loading data aborted');
        return;
      }
      if ($selector.length) {
        $selector.load( html_data_path, cb_load_closure(id, mathjaxEnabled));
      }
      return;
    },
    // -------------------------------------------------------------------------
    // registerNbiModalsCB()
    // regsiter callbacks for all (NBI) modals used
    // -------------------------------------------------------------------------
    registerNbiModalsCB: function () {
      // auto-scroll to the END of the SUCCESS messages
      // see: https://stackoverflow.com/questions/7303948/how-to-auto-scroll-to-end-of-div-when-data-is-added
      //
      window.setInterval(function() {
        var contentModalSuccess = document.getElementById(nbiContentModalSuccessID);
        contentModalSuccess.scrollTop = contentModalSuccess.scrollHeight;
      }, 500);
      // remove all INFO messages on modal CLOSED
      //
      $('#nbiModalTopInfo').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalInfoMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTopInfo: remove all messages');
          _this.removeModalMessages(nbiModalInfoMessagesID);
        }
      });
      // remove all SUCCESS messages on modal CLOSED
      //
      $('#nbiModalTRSuccess').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalSuccessMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTRSuccess: remove all messages');
          _this.removeModalMessages(nbiModalSuccessMessagesID);
        }
      });
      // remove all ERROR messages on modal CLOSED
      //
      $('#nbiModalTLDanger').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalErrorMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTLDanger: remove all messages');
          _this.removeModalMessages(nbiModalErrorMessagesID);
        }
        if (nbiIndicateNbiActivity) {
          spinner.stop();
        }
      });
    },
    // -------------------------------------------------------------------------
    // loadNbiModals()
    // Load HTML data for all (NBI) modals used
    // -------------------------------------------------------------------------
    loadNbiModals: function () {
      const nbiModalTopInfo = `
        <div id="nbiModalTopInfo"
          class="modal fade top"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-keyboard="false"
          data-backdrop="static">
          <div class="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
            <!-- Icon -->
            <div class="text-center">
              <i class="mdi mdi-10x mdi-progress-clock mdi-spin md-green mb-1"></i>
            </div>
            <!-- Content -->
            <div class="modal-content">
              <!-- Body -->
              <div id="nbiModalInfoBody" class="modal-body">
                <div>
                  <ul id="nbiModalInfoMessages"></ul>
                </div>
                <!-- Footer -->
                <div class="modal-footer justify-content-center">
                  <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
                </div>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      const nbiModalTRSuccess = `
        <div id="nbiModalTRSuccess"
          class="modal fade right"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-bs-keyboard="false"
          data-bs-backdrop="static">
          <div class="modal-dialog modal-dialog-scrollable modal-side-2x modal-top-right modal-notify modal-success" role="document">
            <!-- Content -->
            <div class="modal-content">
              <!-- Header -->
              <div class="modal-header">
                <p class="lead">Info - NbInteract</p>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="mdi mdi-close mdi-dark mdi-48px"></i>
                </button>
              </div>
              <!-- Icon -->
              <div class="text-center">
                <i class="mdi mdi-10x mdi-loading mdi-spin md-green mb-1"></i>
              </div>
              <!-- Body -->
              <div id="nbiModalSuccessBody" class="modal-body">
                <div>
                  <p> Initializing your Binder. This may take a while ...</p>
                  <ul id="nbiModalSuccessMessages"></ul>
                </div>
              </div>
              <!-- Footer -->
              <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      const nbiModalTLDanger = `
        <div id="nbiModalTLDanger"
          class="modal fade left"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-bs-keyboard="false"
          data-bs-backdrop="static">
          <div class="modal-dialog modal-side-2x modal-top-left modal-notify modal-danger" role="document">
            <!-- Content -->
            <div id="nbiModalErrorBody" class="modal-content">
              <!--Header-->
              <div class="modal-header">
                <p class="lead">Error - NbInteract</p>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="mdi mdi-close mdi-dark mdi-48px"></i>
                </button>
              </div>
              <!-- Icon -->
              <div class="text-center">
                <i class="mdi mdi-10x mdi-alert md-red mb-1"></i>
              </div>
              <!-- Body -->
              <div id="nbiModalErrorBody" class="modal-body">
                <p> Initializing NbInteract failed:</p>
                <div>
                  <ul id="nbiModalErrorMessages"></ul>
                </div>
              </div>
              <!-- Footer -->
              <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-info';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTopInfo;
      document.body.appendChild(nbiModal);
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-success';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTRSuccess;
      document.body.appendChild(nbiModal);
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-danger';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTLDanger;
      document.body.appendChild(nbiModal);
    },
    // -------------------------------------------------------------------------
    // messageHandler()
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message      = JSON.stringify(message, undefined, 2);
      var messageSuccessUL  = document.getElementById(nbiModalSuccessMessagesID);
      var messageErrorUL    = document.getElementById(nbiModalErrorMessagesID);
      var message;
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      // -----------------------------------------------------------------------
      //  command|nbi_init_finished
      //
      if (message.type === 'command' && message.action === 'nbi_init_finished') {
        _this.setState('finished');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'initializing module finished');
        if (nbiShowMessages) {
          if (nbiModalAutoClose) {
            window.setTimeout(function() {
               $(nbiModalSuccessID).modal('hide');
            }, nbiModalAutoCloseDelay);
          }
        }
        if (nbiIndicateNbiActivity) {
          spinner.stop();
        }
      } // END message command/nbi_init_finished
      // -----------------------------------------------------------------------
      //  command|info
      //
      if (message.type === 'command' && message.action === 'info') {
//      var reMessageTS         = new RegExp('/(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,9})?(?:Z|[+-][01]\d:[0-5]\d)/');
        var messageTS;
        // remove timestamp|loglevel from message if exists
        //
        messageTS = message.text.split('] ')[1];
        if (messageTS) {
          message.text = messageTS;
        }
        _this.appendModalMessage(messageSuccessUL, message.text)
        logger.debug('\n' + message.text);
        // show the info modal
        //
        if (nbiShowMessages) {
          if ($(nbiModalSuccessID).is(':hidden')) {
            $(nbiModalSuccessID).modal('show');
          }
        }
      } // END message command/info
      // -----------------------------------------------------------------------
      //  command|error
      //
      if (message.type === 'command' && message.action === 'error') {
        var messageTS;
        // remove timestamp|loglevel from message if exists
        //
        messageTS = message.text.split('] ')[1];
        if (messageTS) {
          message.text = messageTS;
        }
        _this.appendModalMessage(messageErrorUL, message.text)
        logger.error('\n' + message.text);
        // stop the (progress) spinner (currently NOT used)
        //
        // if (moduleOptions.indicate_nbi_activity) {
        //   spinner.stop();
        // }
        if (nbiShowMessages) {
          // hide the info modal if shown
          //
          $(nbiModalSuccessID).on('shown.bs.modal', function () {
            $(nbiModalSuccessID).modal('hide');
          });
          // hide the info modal uncondionally (need ???)
          //
          $(nbiModalSuccessID).modal('hide');
          // show the error modal
          //
          $(nbiModalSuccessID).on('hidden.bs.modal', function () {
            if ($(nbiModalErrorID).is(':hidden')) {
              $(nbiModalErrorID).modal('show');
              // auto-close the error modal
              //
              if (nbiModalAutoClose) {
                window.setTimeout(function() {
                  $(nbiModalErrorID).modal('hide');
                }, nbiModalAutoCloseDelay);
              }
            }
          });
        }
        if (nbiIndicateNbiActivity) {
          spinner.stop();
        }
      } // END message command/error
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // getNbiButtonsState()
    // Gets the current (processing) state of NBI widget buttons
    // -------------------------------------------------------------------------
    getNbiButtonState: function () {
      var state;
      var cellButtons = document.querySelectorAll('.js-nbinteract-widget')
      if (cellButtons.length) {
        state = true;
      } else {
        state = false;
      }
      return state;
     }, // END getNbiButtonsState
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
    }, // END getState
    // -------------------------------------------------------------------------
    // appendModalMessage()
    // Appends a message to given (NBI) modal
    // -------------------------------------------------------------------------
    appendModalMessage: function (elmID, msg) {
      var li = document.createElement('li');
        li.setAttribute('class','item');
        elmID.appendChild(li);
        li.innerHTML = li.innerHTML + msg;
    },  // END appendModalMessage
    // -------------------------------------------------------------------------
    // removeModalMessages()
    // Remove (clear) all modal messages if a given (NBI) modal
    // -------------------------------------------------------------------------
    removeModalMessages: function (elmID) {
      var ul = document.getElementById(elmID);
      var listLength = ul.children.length;
      if (listLength) {
        for (var i = 0; i < listLength; i++) {
          ul.removeChild(ul.children[0]);
        }
      }
    }  // END removeModalMessages
  }; // END return
})(j1, window);



