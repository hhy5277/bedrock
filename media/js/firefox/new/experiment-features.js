/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    if (window.site.platform !== 'windows') {
        return;
    }

    var cooper = new Mozilla.TrafficCop({
        id: 'experiment-firefox-new-features',
        variations: {
            'v=a': 33.3, // control
            'v=b': 33.3, // 3 short features
            'v=c': 33.3, // long-form features
        }
    });

    cooper.init();

})(window.Mozilla);
