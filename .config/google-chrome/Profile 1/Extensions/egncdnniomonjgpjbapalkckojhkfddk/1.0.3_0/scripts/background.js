var appId = 'jjphmlaoffndcnecccgemfdaaoighkel', // Chrome store app ID
    devId = 'ccbkpncclncpligpkcmflejgolpihden', // Development app ID
    hasApp = false,
    enabledApp = false,
    watchLater = false,

    pauseAndSendTime = function () {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL('scripts/inject.watch.js');
        s.onload = function () {
            this.parentNode.removeChild(this);
        };
        (document.head || document.documentElement).appendChild(s);
    },

    sendWatchLater = function () {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL('scripts/inject.watchlater.js');
        s.onload = function () {
            this.parentNode.removeChild(this);
        };
        (document.head || document.documentElement).appendChild(s);
    },

    pauseAndSendTimePlayer = function () {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL('scripts/inject.player.js');
        s.onload = function () {
            this.parentNode.removeChild(this);
        };
        (document.head || document.documentElement).appendChild(s);
    },

    extractCode = function (injected) {
        return injected.toString().split('\n').slice(1, -1).join('\n');
    },

    scanUrl = function (details) {

        // youtube.com list=WL // Watch Later
        if (/http(s)?:\/\/(www.)?youtu(\.be|be\.com|be-nocookie\.com)\/.*(list=WL).*/.test(details.url)) {
            watchLater = true;
            chrome.pageAction.show(details.tabId);
            return true;
        }

        // youtube.com || youtu.be || youtube-nocookie.com
        if (/http(s)?:\/\/(www.|gaming.)?youtu(\.be|be\.com|be-nocookie\.com)?\/(?!user\/).*/.test(details.url) &&
            /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/.test(details.url)) {
            chrome.pageAction.show(details.tabId);
            return true;
        } else {
            chrome.pageAction.hide(details.tabId);
        }

        return false;
    },

    checkForApp = function (extension) {
        if (typeof chrome.runtime.lastError === 'undefined' && typeof extension !== 'undefined') {
            hasApp = true;
            enabledApp = extension.enabled;
        } else {
            hasApp = false;
        }
    },

    checkForDevApp = function (extension) {
        if (typeof chrome.runtime.lastError === 'undefined' && typeof extension !== 'undefined') {
            hasApp = true;
            enabledApp = extension.enabled;
            appId = devId;
        }
    },

    checkForApps = function (cb) {
        /* search for player app */
        chrome.management.get(appId, function (extension) {
            checkForApp(extension);
        });

        /* search for player dev app */
        chrome.management.get(devId, function (extension) {
            checkForDevApp(extension);
            doActions(cb);
        });
    },

    doActions = function (cb) {
        if (!hasApp) {
            // redirect to chrome webstore to download player app
            if (window.confirm('Floating for YouTube™ App is not installed. You must install it first.')) {
                chrome.tabs.create({url: 'https://chrome.google.com/webstore/detail/' + appId});
            }
        } else if (!enabledApp) {
            // redirect to chrome webstore to download player app
            if (window.confirm('Floating for YouTube™ App is disabled. You must enable it in Settings - Extensions or at chrome://extensions/')) {
                chrome.tabs.create({url: 'chrome://extensions/'});
            }
        } else {
            cb();
        }
    };


///* run */
chrome.pageAction.onClicked.addListener(function (tab) {

    checkForApps(function () {

        if (watchLater) {
            // open player app send Watch Later list
            chrome.tabs.executeScript({
                code: extractCode(sendWatchLater)
            });
        } else {
            // open player app at time
            chrome.tabs.executeScript({
                code: extractCode(pauseAndSendTime)
            });
        }
    });
});

/* launch player app */
//chrome.extension.onMessage.addListener(function (data, tab) {
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    checkForApps(function () {

        switch (request.action) {
            case 'play':
                chrome.runtime.sendMessage(appId, {
                    'launch': 'play',
                    'url': request.url,
                    'time': request.time
                });
                break;
            case 'watchlater':
                chrome.runtime.sendMessage(appId, {
                    'launch': 'watchlater',
                    'url': request.url,
                    'list': request.list
                });
                break;
            case 'install':
                chrome.tabs.create({
                    'url': 'https://chrome.google.com/webstore/detail/' + appId
                });
                break;
        }
    });
});


/* show icon if right url appears */
// onHistoryStateUpdated - YouTube AJAX navigation
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    if (scanUrl(details)) {
        chrome.tabs.executeScript({
            code: extractCode(pauseAndSendTimePlayer)
        });
    }
});

// onDOMContentLoaded - other cases
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    if (details.frameId === 0) {
        scanUrl(details);
    }
});
