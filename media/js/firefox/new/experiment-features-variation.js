/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var features = document.querySelectorAll('.c-card-feature');

    for (var i = 0; i < features.length; i++) {
        features[i].addEventListener('click', function(e) {

            if (e.currentTarget) {
                var label = e.currentTarget.getAttribute('data-id');

                window.dataLayer.push({
                    'event': 'in-page-interaction',
                    'eAction': 'feature click',
                    'eLabel': label
                });
            }
        }, false);
    }

    function getLocale() {
        var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
        var locale;

        switch(lang) {
        case 'en-GB':
            locale = 'gb';
            break;
        case 'de':
            locale = 'de';
            break;
        }

        return locale;
    }

    function setAttribution(variation, locale) {
        var params = {
            /* eslint-disable camelcase */
            utm_source: 'www.mozilla.org',
            utm_medium: 'firefox_features',
            utm_campaign: 'firefox_new_page',
            utm_content: 'eu_exp02_' + locale + '_' + variation
            /* eslint-enable camelcase */
        };

        function trackGAEvent() {
            window.dataLayer.push({
                'data-ex-name': 'eu_exp02_' + locale,
                'data-ex-variant': 'v_' + variation
            });
        }

        Mozilla.CustomStubAttribution.init(params, trackGAEvent);
    }

    var variation = document.querySelector('.main-download').getAttribute('data-variant');
    var locale = getLocale();

    if (variation && locale) {
        setAttribution(variation, locale);
    }

})(window.Mozilla);
