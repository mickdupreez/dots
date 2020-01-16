// parse parameter from url
function getUrlVars(url, variable) {
    var vars = {}, hash,
        hashes = url.slice(url.indexOf('?') + 1).split('&');

    for (var i = 0, len = hashes.length; i < len; i += 1) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars[variable];
}

// parse video id from url
function parseId(url) {
    // http://stackoverflow.com/a/14701040
    var match = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/.exec(url);

    if (match instanceof Array && match[2] !== undefined) {
        return match[2];
    } else {
        return false;
    }
}

// parse time from url
function parseTime(url) {
    var sec = 0,
        msk = [1, 60, 3600],
        pr1 = url.split(/\?t=|\#t=/), // XXhXXmXXs&some
        len = 0;

    if (pr1.length > 1) {

        var atm = pr1[1]
                .split(/\&|s/)[0] // XXhXXmXX
                .split(/h|m/).reverse(), // [s,?m,?h]
            len = atm.length;
    }

    if (!len) {
        return false;
    } else {
        for (var i = 0; i < len; i += 1) {
            sec += parseInt(atm[i]) * msk[i];
        }
        return sec;
    }
}

// load webview
function webview(obj, url, time) {

    url = url.replace(/^\s+|\s+$/g, ''); // remove newlines

    var videoId = parseId(url),
        listId = getUrlVars(url, 'list'),
        embedUrl = '';

    obj.externalUrl = '';

    if (videoId) {
        embedUrl = 'https://www.youtube.com/embed/' + videoId + '?';
        obj.externalUrl = 'https://www.youtube.com/watch?v=' + videoId;

        embedUrl += 'autoplay=1';

        if (typeof listId !== 'undefined') {
            embedUrl += '&list=' + listId;
            obj.externalUrl += '&list=' + listId;
        } else {

            if (typeof time !== 'undefined' && time !== false) {
                embedUrl += '&start=' + time;
            }
        }

        obj.src = embedUrl + '&showinfo=0&enablejsapi=1&version=3&autohide=1';

        return true;
    } else {
        return false;
    }
}

// load webview
function webviewPlaylist(obj, url, list) {

    var index = getUrlVars(url, 'index');
    index = index ? index -1 : 0;

    if (list.length) {
        embedUrl = 'https://www.youtube.com/embed/' + list[index] + '?';
        list.splice(index, 1);
        embedUrl += list.length ? 'playlist=' + list.join(',') + '&':'';
        embedUrl += 'autoplay=1&showinfo=0&enablejsapi=1&version=3&autohide=1';
        embedUrl += '&index=' + index;

        obj.src = embedUrl;

        return true;
    } else {
        return false;
    }
}


function webviewAdsCss(webviewObj, enabled) {

    webviewObj.insertCSS({
        'file': enabled ? 'styles/inject.ads.css' : 'styles/inject.noads.css'
    });
}

function createWindow(param) {
    chrome.app.window.create('window.html', {
        frame: 'none',
        id: 'FloatingYouTube',
        'bounds': {
            'width': 320,
            'height': 180,
            'left': 20,
            'top': 50
        },
        minWidth: 266,
        minHeight: 150,
        alwaysOnTop: true,
        resizable: true
    }, function (appwindow) {

        appwindow.contentWindow.onload = function () {

            var webviewObj = appwindow.contentWindow.document.getElementById('webview'),
                bodyObj = appwindow.contentWindow.document.getElementById('body'),
                buttonsObj = appwindow.contentWindow.document.getElementById('buttons'),
                closeObj = appwindow.contentWindow.document.getElementById('close-window-button'),
                unlockObj = appwindow.contentWindow.document.getElementById('unlock-window-button'),
                lockObj = appwindow.contentWindow.document.getElementById('lock-window-button'),
                noadsObj = appwindow.contentWindow.document.getElementById('noads-window-button'),
                adsObj = appwindow.contentWindow.document.getElementById('ads-window-button'),
                helpObj = appwindow.contentWindow.document.getElementById('help-window-button'),
                closeHelpObj = appwindow.contentWindow.document.getElementById('close-help-window-button'),
                helpContainerObj = appwindow.contentWindow.document.getElementById('help-container'),
                linkObj = appwindow.contentWindow.document.getElementById('link'),
                backgroundObj = appwindow.contentWindow.document.getElementById('background'),
                timeout = null,
                helpOpened = false;

            closeObj.onclick = function () {
                appwindow.contentWindow.close();
            };
            lockObj.onclick = function () {
                lockObj.style.display = 'none';
                unlockObj.style.display = 'block';
                appwindow.setAlwaysOnTop(false);
            };
            unlockObj.onclick = function () {
                unlockObj.style.display = 'none';
                lockObj.style.display = 'block';
                appwindow.setAlwaysOnTop(true);
            };
            helpObj.onclick = function () {
                helpObj.style.display = 'none';
                closeHelpObj.style.display = 'block';
                helpContainerObj.classList.remove('fadeout');
                helpContainerObj.classList.add('fadein');
                helpOpened = true;
                backgroundObj.style.display = 'block';
            };
            closeHelpObj.onclick = function () {
                closeHelpObj.style.display = 'none';
                helpObj.style.display = 'block';
                helpContainerObj.classList.remove('fadein');
                helpContainerObj.classList.add('fadeout');
                helpOpened = false;
                backgroundObj.style.display = 'none';
            };
            noadsObj.onclick = function () {
                noadsObj.style.display = 'none';
                adsObj.style.display = 'block';
                chrome.storage.local.set({ 'ads': true });
                showAds = true;
                webviewAdsCss(webviewObj, true);
            };
            adsObj.onclick = function () {
                adsObj.style.display = 'none';
                noadsObj.style.display = 'block';
                chrome.storage.local.set({ 'ads': false });
                showAds = false;
                webviewAdsCss(webviewObj, false);
            };
            toggleFullscreen = function () {
                if (appwindow.isFullscreen()) {
                    appwindow.restore();
                } else {
                    appwindow.fullscreen();
                }
            };

            unlockObj.style.display = 'none';
            closeHelpObj.style.display = 'none';
            backgroundObj.style.display = 'none';

            if (showAds) {
                noadsObj.style.display = 'none';
            } else {
                adsObj.style.display = 'none';
            }

            bodyObj.onmousemove = function () {
                buttonsObj.classList.remove('fadeout');
                buttonsObj.classList.add('fadein');
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (false === helpOpened) {
                        buttonsObj.classList.remove('fadein');
                        buttonsObj.classList.add('fadeout');
                    }
                }, 1500);
            };

            linkObj.onclick = function (event) {
                event.preventDefault();
                window.open('https://chrome.google.com/webstore/detail/egncdnniomonjgpjbapalkckojhkfddk');
            };

            switch (param.launch) {
                case 'watchlater':
                    webviewPlaylist(webviewObj, param.url, param.list);
                    break;

                case 'play':
                    webview(webviewObj, param.url, param.time);
                    break;

                default:
                    var inputObj = appwindow.contentWindow.document.getElementById('input');
                    inputObj.style.display = 'block';
                    linkObj.style.display = hasExt ? 'none' : 'block';

                    inputObj.addEventListener('paste', function (event) {
                        setTimeout(function lazyPaste() {

                            var time = parseTime(event.target.value);

                            if (webview(webviewObj, event.target.value, time)) {
                                linkObj.style.display = 'none';
                                inputObj.style.display = 'none';
                                webviewObj.style.display = 'block';
                            }
                        }, 250);
                    });
                    inputObj.focus();
                    break;
            }

            appwindow.contentWindow.document.addEventListener('keydown', function(event) {

                if (event.keyCode === 70) { // 'f' key
                    toggleFullscreen();
                }

                if (event.keyCode === 37) { // '<' left arrow
                    appwindow.outerBounds.left -= 10;
                }

                if (event.keyCode === 38) { // '^' up arrow
                    appwindow.outerBounds.top -= 10;
                }

                if (event.keyCode === 39) { // '>' right arrow
                    appwindow.outerBounds.left += 10;
                }

                if (event.keyCode === 40) { // 'v' down arrow
                    appwindow.outerBounds.top += 10;
                }

                if (event.keyCode === 107 || (event.keyCode === 187 && event.shiftKey === true)) { // '+' plus

                    var width = appwindow.outerBounds.width + 32,
                        height = Math.round(width * (9 / 16));

                    appwindow.outerBounds.top -= 9;
                    appwindow.outerBounds.left -= 16;

                    appwindow.outerBounds.width = width;
                    appwindow.outerBounds.height = height;
                }

                if (event.keyCode === 109 || (event.keyCode === 189 && event.shiftKey === false)) { // '-' minus
                    var width = appwindow.outerBounds.width - 32,
                        height = Math.round(width * (9 / 16));

                    if (appwindow.outerBounds.width > appwindow.outerBounds.minWidth) {
                        appwindow.outerBounds.top += 9;
                        appwindow.outerBounds.left += 16;
                    }

                    appwindow.outerBounds.width = width;
                    appwindow.outerBounds.height = height;
                }

            }, true);

            // adblock
            webviewObj.request.onBeforeRequest.addListener(
                function(details) {
                    return { cancel: details.url.indexOf('doubleclick.net/') != -1 && showAds === false };
                },
                { urls: ['<all_urls>'] },
                ['blocking']
            );

            var cssFiles = [
                'styles/inject.player.css',
                showAds ? 'styles/inject.ads.css' : 'styles/inject.noads.css'
            ];

            webviewObj.addContentScripts([
                {
                    name: 'playerCSS',
                    matches: ['*://*.youtube.com/*'],
                    css: { files: cssFiles },
                    run_at: 'document_start'
                }, {
                    name: 'playerJS',
                    matches: ['*://*.youtube.com/*'],
                    js: {
                        files: ['scripts/inject.player.js']
                    },
                    run_at: 'document_end'
                }]
            );

            chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
                if (request === 'fullscreen') {
                    toggleFullscreen();
                }
            });
        };

    });
}

var extId = 'egncdnniomonjgpjbapalkckojhkfddk', // Chrome store extension ID
    devId = 'njjcenliidblmhnpfnoancnmgmginnai', // Development extension ID
    hasExt = false;
    showAds = true;

chrome.runtime.onMessageExternal.addListener(function (request, sender) {
    if (typeof request.launch === 'undefined') {
        return;
    }

    if (sender.id === extId || sender.id === devId) {
        chrome.storage.local.set({ 'extension': true });
        hasExt = true;
    }

    if (0 === chrome.app.window.getAll().length) {
        createWindow(request);
    } else {
        var appwindow = chrome.app.window.getAll()[0];

        appwindow.close();

        setTimeout(function () {
            createWindow(request);
        }, 1000);

    }
});

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') {
        chrome.storage.local.set({ 'extension': false });
        chrome.storage.local.set({ 'ads': true });
    }
});

chrome.app.runtime.onLaunched.addListener(function () {

    chrome.storage.local.get('extension', function (saved) {
        if (typeof saved.extension === 'undefined') {
            chrome.storage.local.set({ 'extension': false });
        } else {
            hasExt = saved.extension;
        }
    });

    chrome.storage.local.get('ads', function (saved) {
        if (typeof saved.ads === 'undefined') {
            chrome.storage.local.set({ 'ads': true });
        } else {
            showAds = saved.ads;
        }
    });

    createWindow({ 'launch': 'empty' });
});

var minimized = false;
chrome.commands.onCommand.addListener(function(command) {
    var appwindow = chrome.app.window.getAll()[0],
        webview = appwindow.contentWindow.document.getElementById('webview');

    if (false === appwindow.isMinimized() && false === minimized) {
        if (webview.contentWindow !== null) {
            webview.contentWindow.postMessage(JSON.stringify({
                "event": "command",
                "func": "pauseVideo"
            }), "*");
        }

        appwindow.minimize();
        minimized = true;
    } else {
        if (webview.contentWindow !== null) {
            webview.contentWindow.postMessage(JSON.stringify({
                "event": "command",
                "func": "playVideo"
            }), "*");
        }

        appwindow.restore();
        minimized = false;
    }
});
