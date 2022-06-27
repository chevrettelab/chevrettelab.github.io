

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/navigator.js
 # JS Adapter for J1 Navigator
 #
 # Product/Info:
 # 
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see 
 # -----------------------------------------------------------------------------
 # NOTE: For AJAX (XHR) loads see
 #  https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
 # -----------------------------------------------------------------------------
 # NOTE: For getStyleValue helper see
 #  https://stackoverflow.com/questions/16965515/how-to-get-a-style-attribute-from-a-css-class-by-javascript-jquery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-06-27 06:03:44 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.navigator = (function (j1, window) {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var environment                 = 'development';
  var dclFinished                 = false;
  var moduleOptions               = {};
  var nav_menu_id                 = '';
  var nav_quicklinks_id           = '';
  var authclient_modals_id        = '';
  var authclient_xhr_data_element = 'authClientModals';
  var authclient_modals_data_path = '/assets/data/authclient/index.html';
  var nav_menu_data_path          = '';
  var nav_quicklinks_data_path    = '';
  var colors_data_path            = '';
  var font_size_data_path         = '';
  var cookie_names                = j1.getCookieNames();
  var cookie_user_session_name    = cookie_names.user_session;
  var user_session                = {};
  var user_session_merged         = {};
  var session_state               = {};
  var themerEnabled               = true;                 //was (test): false;
  var authClientEnabled;
  var appDetected;
  var json_data;
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // module initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.navigator',
        generated:   '2022-06-27 06:03:44 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this         = j1.adapter.navigator;
      logger        = log4javascript.getLogger('j1.adapter.navigator');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      var authConfig                                = {};
      var navDefaults                               = {};
      var navBarConfig                              = {};
      var navMenuConfig                             = {};
      var navQuicklinksConfig                       = {};
      var navTopsearchConfig                        = {};
      var navAuthClientConfig                       = {};
      var navBarOptions                             = {};
      var navMenuOptions                            = {};
      var navQuicklinksOptions                      = {};
      var navTopsearchOptions                       = {};
      var navAuthClientOptions                      = {};
      var navAuthMAnagerConfig                      = {};
      var user_state                                = {};
      var cookie_names                              = j1.getCookieNames();
      var cookie_user_state_name                    = cookie_names.user_state;
      var themerOptions                             = {};
      var interval_count                            = 0;
      var user_state_detected;
      var themes_count;
      var max_count                                 = 100;
      var gaCookies                                 = j1.findCookie('_ga');
      var j1Cookies                                 = j1.findCookie('j1');
      navDefaults                                   = $.extend({}, {"enabled":true, "icon_family":"MDI", "icon_style":"mdi", "icon_color":"mdi-grey", "icon_size":"mdi-sm", "nav_primary_color":"#2196F3", "nav_bar":{"enabled":false, "translation":"notranslate", "container_id":"navigator_nav_navbar", "media_breakpoint":"lg", "brand_position":"right", "brand_type":"image", "brand_type_collapsed":"text", "fixed":true, "style":"overlay", "color":"light", "position":"left", "bottom_line_height":1, "bottom_line_color":"#EEEEEE", "background_color_full":"rgba(0, 0, 0, 0.4)", "background_color_collapsed":"#2196F3", "background_color_scrolled":"#2196F3"}, "nav_mmenu":{"enabled":false, "nav_main_menu":"navigator_nav_menu", "nav_quicklinks":"quicklinks", "mmenu_plugin":{"node":"null", "mediaQuery":"all", "max_width":100000}, "mmenu_navigator":{"selected":"Selected", "slidingSubmenus":true, "title":"Navigation", "theme":"dark"}, "mmenu_drawer":{"position":"right"}}, "nav_menu":{"enabled":false, "xhr_container_id":"navigator_nav_menu", "xhr_data_element":"desktop_menu", "xhr_data_path":"/assets/data/menu/index.html", "raised_level":5, "delay_menu_open":200, "max_height":550, "menu_font_size":"larger", "megamenu_font_size":"small", "icon_family":"MDI", "icon_style":"mdi", "icon_color":"#9E9E9E", "icon_size":"mdi-sm", "menu_item_color":"rgba(255, 255, 255, 0.5)", "menu_item_color_hover":"rgba(255, 255, 255, 0.9)", "dropdown_style":"raised", "dropdown_item_style":"flat", "dropdown_animate":false, "dropdown_animate_in":"slideInDown", "dropdown_animate_out":"fadeOutDown", "dropdown_animate_duration":0.75, "dropdown_item_min_width":15, "dropdown_menu_max_height":25.5, "dropdown_font_size":"small", "dropdown_padding_x":18, "dropdown_padding_y":10, "dropdown_item_color":"#212121", "dropdown_border_color":"#3f51b5", "dropdown_border_top":0, "dropdown_border_radius":0, "dropdown_background_color_hover":"#ECEFF1", "dropdown_background_color_active":"#CFD8DC"}, "nav_quicklinks":{"enabled":false, "xhr_container_id":"navigator_nav_quicklinks", "xhr_data_element":"quicklinks", "xhr_data_path":"/assets/data/quicklinks/index.html", "icon_family":"MDI", "icon_color":"rgba(255, 255, 255, 0.5)", "icon_color_hover":"rgba(255, 255, 255, 0.9)", "icon_size":"mdi-2x", "home_icon":"home-variant", "home_url":"none", "home_label":"Home", "back_icon":"subdirectory-arrow-left", "back_url":"none", "back_label":"Page back", "disqus_icon":"disqus", "disqus_url":"none", "disqus_label":"Disqus", "github_icon":"github", "github_url":"none", "github_label":"Github", "patreon_icon":"patreon", "patreon_url":"none", "patreon_label":"Patreon", "facebook_icon":"facebook", "facebook_url":"none", "facebook_label":"Facebook", "twitter_icon":"twitter", "twitter_url":"none", "twitter_label":"Twitter", "quicksearch_icon":"magnify", "quicksearch_action":"quicksearch", "quicksearch_label":"Search", "cookies_icon":false, "cookies_action":"cookie-consent", "cookies_label":"Cookie Consent", "translate_icon":false, "translate_action":"translate", "translate_label":"Google Translate", "r_text_icon":false, "r_text_action":"rtext", "r_text_label":"Text Resizer"}, "nav_topsearch":{"enabled":false, "container_id":"navigator_nav_topsearch", "type":"quicksearch", "icon_family":"MDI", "icon_color":"#FFFFFF", "icon_size":"mdi-2x", "search_icon":"magnify", "close_icon":"close", "clear_icon":"format-clear", "input_color":"rgba(0, 0, 0, 0.7)", "background_color":"#FAFAFA", "placeholder":"Your search expression", "search_heading_lead":"", "result_heading_lead":""}});
      navBarConfig                                  = $.extend({}, {"enabled":true, "translation":"notranslate", "container_id":"navigator_nav_navbar", "media_breakpoint":"lg", "brand_position":"right", "brand_type":"image", "brand_type_collapsed":"text", "fixed":true, "style":"overlay", "color":"light", "position":"left", "bottom_line_height":1, "bottom_line_color":"#EEEEEE", "background_color_full":"rgba(0, 0, 0, 0.4)", "background_color_collapsed":"#2196F3", "background_color_scrolled":"#2196F3"});
      navMenuConfig                                 = $.extend({}, {"enabled":true, "xhr_container_id":"navigator_nav_menu", "xhr_data_element":"desktop_menu", "xhr_data_path":"/assets/data/menu/index.html", "raised_level":5, "delay_menu_open":200, "max_height":550, "menu_font_size":"larger", "megamenu_font_size":"small", "icon_family":"MDI", "icon_style":"mdi", "icon_color":"#9E9E9E", "icon_size":"mdi-sm", "menu_item_color":"rgba(255, 255, 255, 0.5)", "menu_item_color_hover":"rgba(255, 255, 255, 0.9)", "dropdown_style":"raised", "dropdown_item_style":"flat", "dropdown_animate":false, "dropdown_animate_in":"slideInDown", "dropdown_animate_out":"fadeOutDown", "dropdown_animate_duration":0.75, "dropdown_item_min_width":15, "dropdown_menu_max_height":25.5, "dropdown_font_size":"small", "dropdown_padding_x":18, "dropdown_padding_y":10, "dropdown_item_color":"#212121", "dropdown_border_color":"#3f51b5", "dropdown_border_top":0, "dropdown_border_radius":0, "dropdown_background_color_hover":"#ECEFF1", "dropdown_background_color_active":"#CFD8DC", "delay_open_menu":250});
      navQuicklinksConfig                           = $.extend({}, {"enabled":true, "xhr_container_id":"navigator_nav_quicklinks", "xhr_data_element":"quicklinks", "xhr_data_path":"/assets/data/quicklinks/index.html", "icon_family":"MDI", "icon_color":"rgba(255, 255, 255, 0.5)", "icon_color_hover":"rgba(255, 255, 255, 0.9)", "icon_size":"mdi-2x", "home_icon":"home-variant", "home_url":"/", "home_label":"Home", "back_icon":"subdirectory-arrow-left", "back_url":"none", "back_label":"Page back", "disqus_icon":"disqus", "disqus_url":"none", "disqus_label":"Disqus", "github_icon":"github", "github_url":"none", "github_label":"Github", "patreon_icon":"patreon", "patreon_url":"none", "patreon_label":"Patreon", "facebook_icon":"facebook", "facebook_url":"none", "facebook_label":"Facebook", "twitter_icon":"twitter", "twitter_url":"https://www.twitter.com/wildtypeMC", "twitter_label":"Twitter", "quicksearch_icon":"magnify", "quicksearch_action":"quicksearch", "quicksearch_label":"Search", "cookies_icon":false, "cookies_action":"cookie-consent", "cookies_label":"Cookie Consent", "translate_icon":false, "translate_action":"translate", "translate_label":"Google Translate", "r_text_icon":false, "r_text_action":"rtext", "r_text_label":"Text Resizer", "r_text_sizer":false});
      navTopsearchConfig                            = $.extend({}, {"enabled":true, "container_id":"navigator_nav_topsearch", "type":"quicksearch", "icon_family":"MDI", "icon_color":"#FFFFFF", "icon_size":"mdi-2x", "search_icon":"magnify", "close_icon":"close", "clear_icon":"format-clear", "input_color":"rgba(0, 0, 0, 0.7)", "background_color":"#FAFAFA", "placeholder":"Your search expression", "search_heading_lead":"", "result_heading_lead":""});
      navAuthClientConfig                           = $.extend({}, {"enabled":true, "xhr_container_id":"authclient_modals", "xhr_data_element":"authClientModals", "xhr_data_path":"/assets/data/authclient/index.html", "signin_modal_id":"modalOmniSignIn", "hide_on_cookies_declined":true, "icon_family":"MDI", "signin_icon":"login", "signout_icon":"logout", "auth_signin_modal":{"title":"SignIn", "body_text":"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"}, "auth_signout_modal":{"title":"SignOut", "body_text":"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"}, "auth_disqus":{"id":1, "title":"Disqus", "text":"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."}, "auth_github":{"id":2, "title":"Github", "text":"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}});
      navAuthMAnagerConfig                          = $.extend({}, {"enabled":true, "j1_auth":{"enabled":false, "ssl":false, "content":{"public":["\\W*((?i)assets(?-i))\\W*", "\\W*((?i)public(?-i))\\W*"], "protected":["\\W*((?i)protected(?-i))\\W*"], "private":["\\W*((?i)private(?-i))\\W*"]}, "providers":{"activated":["github", "disqus"], "disqus":{"provider_url":"https://disqus.com", "strategy":"member", "scope":[], "users":["all"], "permissions":["protected"], "data_fields":[], "conditions":{"protected":{"enabled":true, "users":{"blacklist":[]}}, "private":{"enabled":false, "users":{"whitelist":["all"], "blacklist":[]}}}}, "github":{"provider_url":"https://github.com", "strategy":"member", "scope":[], "users":["all"], "permissions":["protected", "private"], "data_fields":[], "conditions":{"protected":{"enabled":true, "users":{"blacklist":[]}}, "private":{"enabled":true, "users":{"whitelist":["all"], "blacklist":[]}}}}}}, "auth_client":{"enabled":true, "auth_signin_modal":{"title":"SignIn", "body_text":"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"}, "auth_signout_modal":{"title":"SignOut", "body_text":"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"}, "auth_disqus":{"id":1, "title":"Disqus", "text":"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."}, "auth_github":{"id":2, "title":"Github", "text":"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}}});
      authClientEnabled                             = navAuthMAnagerConfig.enabled;
      themerOptions                                 = $.extend({}, {"enabled":true, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/previewer/theme/", "menu_icon_family":"MDI", "menu_icon_color":"#9E9E9E", "menu_icon_size":"mdi-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
      // Merge|Overload module CONFIG by DEFAULTS
      //
      navBarOptions                                 = j1.mergeData(navBarConfig, navDefaults.nav_bar);
      navMenuOptions                                = j1.mergeData(navMenuConfig, navDefaults.nav_menu);
      navQuicklinksOptions                          = j1.mergeData(navQuicklinksConfig, navDefaults.nav_quicklinks);
      navTopsearchOptions                           = j1.mergeData(navTopsearchConfig, navDefaults.nav_topsearch);
      navAuthClientConfig                           = j1.mergeData(navAuthClientConfig, navDefaults.nav_authclient);
      // save config settings into the adapter object for global access
      //
      _this['navDefaults']           = navDefaults;
      _this['navBarOptions']         = navBarOptions;
      _this['navMenuOptions']        = navMenuOptions;
      _this['navQuicklinksOptions']  = navQuicklinksOptions;
      _this['navTopsearchOptions']   = navTopsearchOptions;
      _this['navAuthClientConfig']   = navAuthClientConfig;
      _this['navAuthManagerConfig']  = navAuthMAnagerConfig;
      // Load (individual) frontmatter options (currently NOT used)
      if (options  != null) { var frontmatterOptions = $.extend({}, options) }
      /* eslint-enable */
      // -----------------------------------------------------------------------
      // Load HTML data (AJAX)
      // -----------------------------------------------------------------------
      // jadams, 202-06-24: Promise (chain) if $.when seems NOT to work correctly.
      // It seems a chain using .then will be a better solution to make it sure
      // that the last Deferred set the state to 'data_loaded'.
      // Found the final state randomly set to 'null' what prevent the module
      // to run mmenuInitializer.
      // Workaround: Set 'data_loaded' to be returned by all Deferred in
      // the chain.
      // See: https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
      // authclient_xhr_data_element
      // -----------------------------------------------------------------------
      // data loader
      // -----------------------------------------------------------------------
      j1.loadHTML({
        xhr_container_id:   navQuicklinksOptions.xhr_container_id,
        xhr_data_path:      navQuicklinksOptions.xhr_data_path,
        xhr_data_element:   navQuicklinksOptions.xhr_data_element },
        'j1.adapter.navigator',
        null);
      j1.loadHTML({
        xhr_container_id:   navAuthClientConfig.xhr_container_id,
        xhr_data_path:      navAuthClientConfig.xhr_data_path,
        xhr_data_element:   navAuthClientConfig.xhr_data_element },
        'j1.adapter.navigator',
        null);
      j1.loadHTML({
        xhr_container_id:   navMenuOptions.xhr_container_id,
        xhr_data_path:      navMenuOptions.xhr_data_path,
        xhr_data_element:   navMenuOptions.xhr_data_element },
        'j1.adapter.navigator',
        'data_loaded');
        var dependencies_met_load_menu_finished = setInterval (function () {
  	      if (j1.xhrDOMState['#'+navQuicklinksOptions.xhr_container_id] === 'success' &&
            j1.xhrDOMState['#'+navAuthClientConfig.xhr_container_id] === 'success' &&
            j1.xhrDOMState['#'+navMenuOptions.xhr_container_id] === 'success' ) {
            // continue if all AJAX loads (loadHTML) has finished
            _this.setState('processing');
            logger.info('\n' + 'status: ' + _this.getState());
            logger.info('\n' + 'initialize navigator core');
            // Detect|Set J1 App status
            appDetected       = j1.appDetected();
            authClientEnabled = j1.authEnabled();
            logger.info('\n' + 'application status detected: ' + appDetected);
            j1.core.navigator.init (_this.navDefaults, _this.navMenuOptions);
            // load themes (to menu) if themer is enabled|finished
            if (themerEnabled) {
              logText = '\n' + 'theme switcher: enabled';
              logger.info(logText);
              // detect j1 user state cookie
              user_state_detected = j1.existsCookie(cookie_user_state_name);
              if (user_state_detected) {
                user_state        = j1.readCookie(cookie_user_state_name);
              }  else {
                logger.error('\n' + 'cookie not found: j1.user.state');
                logger.debug('\n' + 'j1 cookies found:' + j1Cookies.length);
                j1Cookies.forEach(item => console.log('j1.core.switcher: ' + item));
                logger.debug('\n' + 'ga cookies found:' + gaCookies.length);
                gaCookies.forEach(item => console.log('j1.core.switcher: ' + item));
              }
              // jadams, 2021-07-03: wait until navigator CORE get finished
              var dependencies_met_page_finished = setInterval(function() {
                if (j1.adapter.navigator.getState() == 'core_initialized') {
                  logText = '\n' + 'load themes';
                  logger.info(logText);
                  // load LOCAL themes from JSON data
                  logText = '\n' + 'load local themes (json file)';
                  logger.info(logText);
                  $('#local_themes').bootstrapThemeSwitcher({
                    localFeed: themerOptions.localThemes
                  });
                  // load REMOTE themes from Bootswatch API (localFeed EMPTY!)
                  $('#remote_themes').bootstrapThemeSwitcher({
                    localFeed: '',
                    bootswatchApiVersion: themerOptions.bootswatchApiVersion
                  });
                  // jadams, 2021-04-22: Up to now, it is unclear why in some
                  // cases the menu bar is NOT fully loaded for THEMES
                  // TODO: Add additional checks to find the reason
                  // added same checks (as already done by adapter themer) to
                  // check if remote theme menu detected as LOADED
                  //
                  var dependencies_met_remote_themes_loaded = setInterval(function() {
                    interval_count += 1;
                    themes_count = document.getElementById("remote_themes").getElementsByTagName("li").length;
                    if ( themes_count > 0  ) {
                      logger.info('\n' + 'remote themes loaded: successfully');
                      logger.info('\n' + 'remote themes loaded: successfully after: ' + interval_count * 25 + ' ms');
                      clearInterval(dependencies_met_remote_themes_loaded);
                    } else {
                        logger.debug('\n' + 'wait for theme to be loaded: ' + user_state.theme_name);
                    }
                    if (interval_count > max_count) {
                      logger.warn('\n' + 'remote themes loading: failed');
                      logger.warn('\n' + 'continue processing');
                      clearInterval(dependencies_met_remote_themes_loaded);
                    }
                    clearInterval(dependencies_met_page_finished);
                  }, 25);
                }
//              _this.setState('initialized');
                _this.setState('finished');
              }, 25); // END 'dependencies_met_page_finished'
            } else {
              logText = '\n' + 'theme switcher detected as: disabled';
              logger.info(logText);
              _this.setState('finished');
            }
            // -----------------------------------------------------------------
            // event handler|css styles
            // -----------------------------------------------------------------
            var dependencies_met_initialized = setInterval(function() {
              if (themerEnabled) {
                // for themes, initialize if page is visible (DOM ready)
                if (j1.getState() === 'finished') {
                  _this.setState('processing');
                  // set general|global theme colors
                  logger.info('\n' + 'initializing dynamic CSS styles');
                  _this.setCSS (
                    navDefaults, navBarOptions, navMenuOptions,
                    navQuicklinksOptions, navTopsearchOptions
                  );
                  logger.info('\n' + 'init auth client');
                  _this.initAuthClient(_this.navAuthManagerConfig);
                  _this.setState('finished');
                  logger.debug('\n' + 'state: ' + _this.getState());
                  logger.info('\n' + 'module initialized successfully');
                  logger.debug('\n' + 'met dependencies for: j1');
                  clearInterval(dependencies_met_initialized);
                }
              } else {
                // no themes used
                _this.setState('processing');
                // set general|global theme colors
                logger.info('\n' + 'apply dynamic CSS styles');
                _this.setCSS (
                  navDefaults, navBarOptions, navMenuOptions,
                  navQuicklinksOptions, navTopsearchOptions
                );
                logger.info('\n' + 'init auth client');
                _this.initAuthClient(_this.navAuthManagerConfig);
                _this.setState('finished');
                logger.debug('\n' + 'state: ' + _this.getState());
                clearInterval(dependencies_met_initialized);
              }
            }, 25); // END 'dependencies_met_initialized'
            logger.debug('\n' + 'met dependencies for: themer');
            clearInterval(dependencies_met_load_menu_finished);
          }
        }, 25); // END 'dependencies_met_load_menu_finished'
      // --------------------------------------------------------------------
      // Register event 'reset on resize' to call j1.core.navigator on
      // manageDropdownMenu to manage the (current) NAV menu for
      // desktop or mobile
      // ---------------------------------------------------------------------
      $(window).on('resize', function() {
        j1.core.navigator.manageDropdownMenu(navDefaults, navMenuOptions);
        // jadams, 2020-07-10: cause severe trouble on mobile devices if
        // OnScreen Kbd comes up and reduces the window size (resize event)
        // DISABLED
        // -------------------------------------------------------------------
        // Hide|Close topSearch on resize event
        // $('.top-search').slideUp();
        // Manage sticky NAV bars
        setTimeout (function() {
          j1.core.navigator.navbarSticky();
        }, 500);
        // Scroll the page one pixel back and forth to get
        // the right position for the toccer
        $(window).scrollTop($(window).scrollTop()+1);
        $(window).scrollTop($(window).scrollTop()-1);
      });
    }, // END init
    // -------------------------------------------------------------------------
    // initialize JS portion for the dialogs (modals) used by J1AuthClient
    // NOTE: Currently cookie updates NOT processed at the NAV module
    //       All updates on Cookies are managed by Cookie Consent.
    //       To be considered to re-add cookie updates for the auth state
    // -------------------------------------------------------------------------
    initAuthClient: function(auth_config) {
      var logger        = log4javascript.getLogger('j1.adapter.navigator.initAuthClient');
      var user_session  = j1.readCookie(cookie_user_session_name);
      _this.modalEventHandler(auth_config);
      if (j1.appDetected() && j1.authEnabled()) {
        // Toggle/Set SignIn/SignOut icon|link in QuickLinks
        // See: https://stackoverflow.com/questions/13524107/how-to-set-data-attributes-in-html-elements
        if (user_session.authenticated === 'true') {
          // Set SignOut
          $('#navLinkSignInOut').attr('data-bs-target', '#modalOmniSignOut');
          $('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout');
        } else {
          // Set SignIn
          $('#navLinkSignInOut').attr('data-bs-target', '#modalOmniSignIn');
          $('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login');
        }
      }
      return true;
    }, // END initAuthClient
    // -------------------------------------------------------------------------
    // modalEventHandler
    // Manage button click events for all BS Modals
    // See: https://www.nickang.com/add-event-listener-for-loop-problem-in-javascript/
    // -------------------------------------------------------------------------
    modalEventHandler: function (options) {
      // var logger      = log4javascript.getLogger('j1.adapter.navigator.EventHandler');
      var authConfig  = options.j1_auth;
      var route;
      var provider;
      var provider_url;
      var allowed_users;
      var logText;
      var signIn = {
        provider:         authConfig.providers.activated[0],
        users:            authConfig.providers[authConfig.providers['activated'][0]]['users'],
        do:               false
      };
      var signOut = {
        provider:         authConfig.providers.activated[0],
        providerSignOut:  false,
        do:               false
      };
      logText = '\n' + 'initialize button click events';
      logger.info(logText);
      // Manage button click events for modal "signInOutButton"
      // -----------------------------------------------------------------------
      $('ul.nav-pills > li').click(function (e) {
        e.preventDefault();
        // jadams, 2019-07-30: To be checked if needed
        signIn.provider       = $(this).text().trim();
        signIn.provider       = signIn.provider.toLowerCase();
        signIn.allowed_users  = signIn.users.toString();
      });
      $('a.btn').click(function() {
        if (this.id === 'signInButton') {
          signIn.do = true;
        } else {
          signIn.do = false;
        }
        if (this.id === 'signOutButton') {
          signOut.do = true;
        } else {
          signOut.do = false;
        }
      });
      $('input:checkbox[name="providerSignOut"]').on('click', function (e) {
        e.stopPropagation();
        signOut.providerSignOut = $('input:checkbox[name="providerSignOut"]').is(':checked');
        if(environment === 'development') {
          logText = '\n' + 'provider signout set to: ' + signOut.providerSignOut;
          logger.info(logText);
        }
      });
      // Manage pre events on modal "modalOmniSignIn"
      // -----------------------------------------------------------------------
      $('#modalOmniSignOut').on('show.bs.modal', function() {
          var modal = $(this);
          logger.info('\n' + 'place current user data');
          user_session = j1.readCookie(cookie_user_session_name);
          modal.find('.user-info').text('You are signed in to provider: ' + user_session.provider);
      }); // END SHOW modalOmniSignOut
      // Manage post events on modal "modalOmniSignIn"
      // -----------------------------------------------------------------------
      $('#modalOmniSignIn').on('hidden.bs.modal', function() {
        if (signIn.do == true) {
          provider      = signIn.provider.toLowerCase();
          allowed_users = signIn.users.toString();
          logText       = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          var route = '/authentication?request=signin&provider=' +provider+ '&allowed_users=' +allowed_users;
          logText = '\n' + 'call middleware for signin on route: ' + route;
          logger.info(logText);
          window.location.href = route;
        } else {
          provider = signIn.provider.toLowerCase();
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'login declined for provider: ' +provider;
          logger.info(logText);
        }
      }); // END post events "modalOmniSignIn"
      // Manage post events on modal "modalOmniSignOut"
      // -----------------------------------------------------------------------
      $('#modalOmniSignOut').on('hidden.bs.modal', function() {
        if (signOut.do == true) {
          logger.info('\n' + 'load active provider from cookie: ' + cookie_user_session_name);
          user_session  = j1.readCookie(cookie_user_session_name);
          provider      = user_session.provider;
          provider_url  = user_session.provider_site_url;
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'initiate signout for provider: ' +provider;
          logger.info(logText);
          var route = '/authentication?request=signout&provider=' + provider + '&provider_signout=' + signOut.providerSignOut; // + '/logout/';
          logText = '\n' + 'call middleware on route : ' +route;
          logger.info(logText);
          window.location.href = route;
        } else {
          provider = signOut.provider.toLowerCase();
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'signout declined for provider: ' +provider ;
          logger.info(logText);
        }
      }); // END post events "modalSignOut"
      logText = '\n' + 'initialize button click events completed';
      logger.info(logText);
      return true;
    }, // END modalEventHandler
    // -------------------------------------------------------------------------
    // setCSS
    // Set dynamic CSS styles
    // -------------------------------------------------------------------------
    setCSS: function (navDefaults, navBarOptions, navMenuOptions, navQuicklinksOptions, navTopsearchOptions) {
      var logger              = log4javascript.getLogger('j1.adapter.navigator.setCSS');
      var gridBreakpoint_lg   = '992px';
      var gridBreakpoint_md   = '768px';
      var gridBreakpoint_sm   = '576px';
      var navPrimaryColor     = navDefaults.nav_primary_color;
      logger.info('\n' + 'set dynamic styles for the theme loaded');
      // Set|Resolve navMenuOptions
      // ------------------------------------------------------------------------
      navMenuOptions.dropdown_font_size               = navMenuOptions.dropdown_font_size;
      navMenuOptions.megamenu_font_size               = navMenuOptions.megamenu_font_size;
      // Set|Resolve navBarOptions
      // -----------------------------------------------------------------------
      navBarOptions.background_color_full             = navBarOptions.background_color_full;
      // Set|Resolve navMenuOptions
      // -----------------------------------------------------------------------
      navMenuOptions.menu_item_color                  = navMenuOptions.menu_item_color;
      navMenuOptions.menu_item_color_hover            = navMenuOptions.menu_item_color_hover;
      navMenuOptions.menu_item_dropdown_color         = navMenuOptions.menu_item_dropdown_color;
      navMenuOptions.dropdown_item_color              = navMenuOptions.dropdown_item_color;
      navMenuOptions.dropdown_background_color_hover  = navMenuOptions.dropdown_background_color_hover;
      navMenuOptions.dropdown_background_color_active = navMenuOptions.dropdown_background_color_active;
      navMenuOptions.dropdown_border_color            = navMenuOptions.dropdown_border_color;
      // Set|Resolve navQuicklinksOptions
      // -----------------------------------------------------------------------
      navQuicklinksOptions.icon_color                 = navQuicklinksOptions.icon_color;
      navQuicklinksOptions.icon_color_hover           = navQuicklinksOptions.icon_color_hover;
      navQuicklinksOptions.background_color           = navQuicklinksOptions.background_color;
      // Set|Resolve navTopsearchOptions
      // -----------------------------------------------------------------------
      navTopsearchOptions.input_color                 = navTopsearchOptions.input_color;
      navTopsearchOptions.background_color            = navTopsearchOptions.background_color;
      // Set dymanic styles
      // -----------------------------------------------------------------------
      // navBar styles
      // -----------------------------------------------------------------------
      // read current background colors
      var bg_primary    = $('#bg-primary').css('background-color');
      var bg_table      = $('body').css('background-color');
      // set navbar background colors
      var bg_scrolled   = bg_primary;
      var bg_collapsed  = bg_primary;
      // set current body background color for all tables
      $('table').css('background', bg_table);
      $('head').append('<style>.mdi-bg-primary {color: ' +bg_scrolled+ ';}</style>');
      // Size of brand image
      $('head').append('<style>.navbar-brand > img { height: 72px !important; }</style>');
      // Navbar transparent-light (light)
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator.navbar-transparent.light { background-color: ' +navBarOptions.background_color_full+ ' !important; border-bottom: solid 0px !important; } }</style>');
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator.navbar-scrolled.light { background-color: ' +bg_scrolled+ ' !important; } }</style>');
      $('head').append('<style id="dynNav">@media (max-width: ' +gridBreakpoint_md+ ') { nav.navbar.navigator.navbar-transparent.light { background-color: ' +navBarOptions.background_color_full+ ' !important; border-bottom: solid 0px !important; } }</style>');
      $('head').append('<style id="dynNav">@media (max-width: ' +gridBreakpoint_md+ ') { nav.navbar.navigator.navbar-scrolled.light { background-color: ' +bg_scrolled+ ' !important; } }</style>');
      $('head').append('<style id="dynNav">@media (min-width: ' +gridBreakpoint_md+ ') { nav.navbar.navigator.navbar-transparent.light { background-color: ' +navBarOptions.background_color_full+ ' !important; border-bottom: solid 0px !important; } }</style>');
      $('head').append('<style id="dynNav">@media (min-width: ' +gridBreakpoint_md+ ') { nav.navbar.navigator.navbar-scrolled.light { background-color: ' +bg_scrolled+ ' !important; } }</style>');
      $('head').append('<style id="dynNav">@media (max-width: ' +gridBreakpoint_sm+ ') { nav.navbar.navigator.navbar-transparent.light { background-color: ' +navBarOptions.background_color_full+ ' !important; border-bottom: solid 0px !important; } }</style>');
      $('head').append('<style id="dynNav">@media (max-width: ' +gridBreakpoint_sm+ ') { nav.navbar.navigator.navbar-scrolled.light { background-color: ' +bg_scrolled+ ' !important; } }</style>');
      // navQuicklinks styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.attr-nav> ul > li > a { color: ' +navQuicklinksOptions.icon_color+ ' !important; }</style>');
      $('head').append('<style>.attr-nav> ul > li > a:hover { color: ' +navQuicklinksOptions.icon_color_hover+ ' !important; }</style>');
      // navMenu styles
      // -----------------------------------------------------------------------
      // Remove background for anchor
      $('head').append('<style>.dropdown-menu > .active > a { background-color: transparent !important; }</style>');
      // hover menu-item|menu-sub-item
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator .dropdown-item:focus, nav.navbar.navigator .dropdown-item:hover, nav.navbar.navigator .nav-sub-item:focus, nav.navbar.navigator .nav-sub-item:hover { background: ' +navMenuOptions.dropdown_background_color_hover+ ' !important; }}</style>');
      // Limit 1st dropdown item width
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator ul.nav.navbar-right .dropdown-menu .dropdown-menu { left: -' +navMenuOptions.dropdown_item_min_width+ 'rem !important; } }</style>');
      // Limit last (2nd) dropdown in height (nav.navbar.navigator li.dropdown ul.dropdown-menu ul.dropdown-menu)
      // !important
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator li.dropdown ul.dropdown-menu ul.dropdown-menu  { top: -' +navMenuOptions.dropdown_border_top+ 'px !important; max-height: ' +navMenuOptions.dropdown_menu_max_height+ 'em; } }</style>');
      //  Set dropdown item colors
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator ul.nav > li > a { color: ' +navMenuOptions.menu_item_color+ ' !important; } }</style>');
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator ul.nav > li > a:hover { color: ' +navMenuOptions.menu_item_color_hover+ ' !important; } }</style>');
      // Dropdown menu styles
      // jadams, 2021-11-19: changed color to fixed value of '#616161'
      // jadams, 2017-11-30: removed left padding from dropdown mwenu (for new j1nav style based on Navigator|Slate)
      // $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator li.dropdown ul.dropdown-menu { animation-duration: ' +navMenuOptions.dropdown_animate_duration+ 's !important; color: ' +bg_scrolled+ ' !important; min-width: ' +navMenuOptions.dropdown_item_min_width+ 'rem !important; border-top: solid ' +navMenuOptions.dropdown_border_top+ 'px !important; border-radius: ' +navMenuOptions.dropdown_border_radius+ 'px !important; left: 0; } }</style>');
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator li.dropdown ul.dropdown-menu { animation-duration: ' +navMenuOptions.dropdown_animate_duration+ 's !important; color: #616161 !important; min-width: ' +navMenuOptions.dropdown_item_min_width+ 'rem !important; border-top: solid ' +navMenuOptions.dropdown_border_top+ 'px !important; border-radius: ' +navMenuOptions.dropdown_border_radius+ 'px !important; left: 0; } }</style>');
      // jadams, 2017-11-22: configure dropdown_font_size|color
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator li.dropdown ul.dropdown-menu > li > a { color: ' +navMenuOptions.dropdown_item_color+ ' !important; font-size: ' +navMenuOptions.dropdown_font_size+ ' !important; font-weight: 400; } }</style>');
      $('head').append('<style>@media (min-width: ' +gridBreakpoint_lg+ ') { nav.navbar.navigator ul.dropdown-menu.megamenu-content .content ul.menu-col li a { color: ' +navMenuOptions.dropdown_item_color+ ' !important; font-size: ' +navMenuOptions.megamenu_font_size+ ' !important; font-weight: 400; } }</style>');
      // navQuicklinks styles
      // -----------------------------------------------------------------------
      // navTopSearch Styles
      // -----------------------------------------------------------------------
      // jadams, 2020-07-08: disabled because colors for icons set by the icon font settings
//    $('head').append('<style>.top-search .input-group-addon { color: ' +navTopsearchOptions.input_color+ ' !important; }</style>');
      $('head').append('<style>.top-search { background-color: ' +navTopsearchOptions.background_color+ ' !important; }</style>');
      $('head').append('<style>.top-search input.form-control { color: ' +navTopsearchOptions.input_color+ ' !important; }</style>');
      // Timeline styles
      // -----------------------------------------------------------------------
  	  $('head').append('<style>.timeline > li > .timeline-panel:after {border-right-color: ' +bg_scrolled+ '; border-left-color: ' +bg_scrolled+ ';}</style>');
      $('head').append('<style>.tmicon {background: ' +bg_scrolled+ ';}</style>');
      // Heading styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.heading:after {background: ' +bg_scrolled+ ' !important;}</style>');
      // Tag Cloud styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.tag-cloud ul li a {background-color: ' +bg_scrolled+ ' !important;}</style>');
      // $('head').append('<style>.tag-cloud ul li a:hover {background-color: #212121 !important;}</style>');
      // Toccer styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.is-active-link::before {background-color: ' +bg_scrolled+ ' !important;}</style>');
      // BS extended Modal styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.modal-dialog.modal-notify.modal-primary .modal-header {background-color: ' +bg_scrolled+ ';}</style>');
      // BS nav|pills styles
      // -----------------------------------------------------------------------
      $('head').append('<style>.nav-pills .nav-link.active, .nav-pills .show > .nav-link {background-color: ' +bg_scrolled+ ' !important;}</style>');
      return true;
    }, // END setCSS
    // -------------------------------------------------------------------------
    // messageHandler
    // Manage messages (paylods) send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      // var json_message = JSON.stringify(message, undefined, 2);              // multiline
      var json_message = JSON.stringify(message);
      _this.setState(message.action);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.info(logText);
      logText = '\n' + 'set state to: ' + message.action;
      logger.info(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
      }
      if (message.type === 'command' && message.action === 'status') {
        logger.info('\n' + 'messageHandler: received - ' + message.action);
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



