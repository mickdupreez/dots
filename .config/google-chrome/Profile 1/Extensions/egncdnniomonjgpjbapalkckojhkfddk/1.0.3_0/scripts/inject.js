(function () {
    /* from page -> content script (you are here) -> background */
    document.addEventListener('FloatingMiniPlayerExtension', function (e) {
        chrome.extension.sendMessage(e.detail);
    }, false);


    setInterval(function () {
    // setTimeout(function () {
        var link = document.getElementsByTagName('a');

        for (var i = 0; i < link.length; i++) {

            if ((/thumbnail-container/.test(link[i].parentNode.className) ||
                /yt-lockup-thumbnail/.test(link[i].parentNode.className) ||
                /ux-thumb-wrap/.test(link[i].parentNode.className) ||
                /thumb-wrapper/.test(link[i].parentNode.className) ||
                /related-playlist/.test(link[i].className) ||
                /ytg-nav-endpoint/.test(link[i].parentNode.className)) && // gaming.youtube.com
                parseId(link[i].href) !== false
            ) {
                if (link[i].parentNode.getElementsByClassName('FloatingForYoutubeThumbnailButton').length > 0) continue;

                var button = document.createElement('button');
                button.className = 'FloatingForYoutubeThumbnailButton video-actions';
                button.dataset.url = link[i].href;

                button.addEventListener('mouseover', function () {
                    var tooltip = document.createElement('div');
                    tooltip.className = 'FloatingForYoutubeTooltip';
                    tooltip.innerHTML = 'Open in<br>Floating for YouTube™';

                    var rect = this.getBoundingClientRect();
                    tooltip.style.left = rect.left + this.offsetWidth / 2 + 'px';
                    tooltip.style.top = rect.top + (document.documentElement.scrollTop || document.body.scrollTop) + 'px';
                    document.body.appendChild(tooltip);

                    setTimeout(function (self) {
                        self.classList.add('FloatingForYoutubeTooltipShow');
                    }, 10, tooltip);
                });

                button.addEventListener('mouseleave', function () {
                    var tooltip = document.getElementsByClassName('FloatingForYoutubeTooltip');
                    if (tooltip.length > 0) {
                        for (var j = 0; j < tooltip.length; j++) {
                            tooltip[j].classList.remove('FloatingForYoutubeTooltipShow');

                            setTimeout(function (self) {
                                try {
                                    document.body.removeChild(self);
                                } catch (e) {
                                }
                            }, 300, tooltip[j]);
                        }
                    }
                });

                button.addEventListener('click', function (event) {
                    event.preventDefault();

                    document.dispatchEvent(
                        new CustomEvent('FloatingMiniPlayerExtension', {
                            'detail': {
                                'action': 'play',
                                'time': 0,
                                'url': this.dataset.url
                            }
                        })
                    );
                });

                if (/related-playlist/.test(link[i].className)) {
                    var insElm = link[i].querySelector('.yt-pl-thumb-overlay');

                    if (insElm) {
                        insElm.parentNode.appendChild(button);
                    }
                // Featured Playlists
                } else if (/yt-lockup-thumbnail/.test(link[i].parentNode.className) && /yt-lockup-playlist/.test(link[i].parentNode.parentNode.parentNode.className)) {
                    link[i].appendChild(button);
                } else {
                    link[i].parentNode.appendChild(button);
                }
            }
        }
    }, 1000);

    function parseId(url) {
        // http://stackoverflow.com/a/14701040
        var match = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/.exec(url);

        if (match instanceof Array && match[2] !== undefined) {
            return match[2];
        } else {
            return false;
        }
    }

})();
