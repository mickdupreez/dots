document.addEventListener('FloatingMiniPlayerExtension', function (e) {
    chrome.extension.sendMessage(e.detail);
}, false);

(function () {

    var newElement = document.createElement('button');

    newElement.className = 'ytp-button ytp-watch-later-button';
    newElement.setAttribute('title', 'Open in Floating for YouTube™');
    newElement.innerHTML = '<div class="ytp-watch-later-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><defs><path d="M28,14.8 L26.95,15.85Q26.95,15.85 25.7,16.1Q25.7,16.1 25.25,16.15Q25.25,16.15 24.9,16.15L24.6,16.1L19.9,20.75L20.05,21.3L20.2,21.95Q20.2,21.95 20.25,22.6Q20.25,22.6 20.25,24.7Q20.25,24.7 18.85,26.1L15.2,22.5L12.35,25.3Q12.35,25.3 9.9,26.95Q9.9,26.95 9.15,27.45Q9.15,27.45 8.5,27.8L8,28L8.2,27.55L8.55,26.85Q8.55,26.85 9.05,26.1Q9.05,26.1 10.7,23.6Q10.7,23.6 13.55,20.75L9.9,17.15L11.35,15.75Q11.35,15.75 13.4,15.75Q13.4,15.75 14.05,15.8Q14.05,15.8 14.7,15.95L15.2,16.1L19.9,11.4L19.85,11.1L19.85,10.7Q19.85,10.7 19.95,10.35Q19.95,10.35 20.15,9.05Q20.15,9.05 21.2,8" id="fytp-svg-40"></path></defs><use class="ytp-svg-shadow" xlink:href="#fytp-svg-40"></use><use class="ytp-svg-fill" xlink:href="#fytp-svg-40"></use></svg></div>';

    newElement.onclick = function () {

        var time = 0,
            videos = document.getElementsByTagName('video');

        if (videos.length) {
            /* stop player */
            videos[0].pause();
            time = Math.floor(videos[0].currentTime)
        }

        document.dispatchEvent(
            new CustomEvent('FloatingMiniPlayerExtension', {
                'detail': {
                    'action': 'play',
                    'time': time,
                    'url': document.URL
                }
            })
        );
    };


    document.addEventListener('DOMNodeInserted', function (node) {
        var element = node.target || null;

        if (element && element.className === 'ytp-chrome-top-buttons') {
            element.appendChild(newElement);
        }

        if (element && element.className === 'ytp-title') {
            element.style.paddingRight = "108px";
        }
    });

})();
