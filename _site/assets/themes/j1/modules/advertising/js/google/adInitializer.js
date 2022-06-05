

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/modules/advertising/js/google/adInitializer.js
 # JS helper for Google Adsense to initialze all units in a page
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2022 Juergen Adams
 #
 #  J1 Template is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
*/
$(document).ready(function() {
  // [INFO   ] [j1.adapter.advertising                  ] [ detected advertising provider: google} ]
  // [INFO   ] [j1.adapter.advertising                  ] [ advertising detected as: true ]
  var logger              = log4javascript.getLogger('j1.core.advertising.google');
  var ads_found           = document.getElementsByClassName('adsbygoogle').length;
  var cookie_names        = j1.getCookieNames();
  var user_consent        = j1.readCookie(cookie_names.user_consent);
  var providerID          = '<your-publisher-id>';
  var validProviderID     = (providerID.includes('your')) ? false : true;
  var advertisingProvider = 'Google Adsense';
  var dependencies_met_page_ready = setInterval (function (options) {
    if (j1.getState() === 'finished') {
      if (!validProviderID) {
        logger.warn('\n' + 'disabled provider: ' + advertisingProvider);
        clearInterval(dependencies_met_page_ready);
        return false;
      }
      if (user_consent.personalization) {
        if (ads_found) {
          logger.info('\n' + 'initialize all ads in page: #' + ads_found);
          [].forEach.call(document.querySelectorAll('.adsbygoogle'), function() {
            (adsbygoogle = window.adsbygoogle || []).push({});
          });
        } else {
          logger.warn('\n' + 'no ads found in page');
        }
      } else {
        logger.warn('\n' + 'initializing ads skipped');
        logger.warn('\n' + 'consent on cookies disabled for personalization');
      }
      clearInterval(dependencies_met_page_ready);
    }
  }, 25);
});



