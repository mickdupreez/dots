
(function() {

    var appWindow, interval;

    window.addEventListener('load', function load(){

        interval = setInterval(function () {
            var youtubeButton = document.getElementsByClassName('ytp-youtube-button')[0],
                fullscreenButton = document.getElementsByClassName('ytp-fullscreen-button')[0];

            if (youtubeButton !== undefined && fullscreenButton !== undefined) {
                clearInterval(interval);

                youtubeButton.onclick = function(e) {
                    e.preventDefault();
                    appWindow.postMessage(e.target.href, '*');
                };

                fullscreenButton.onclick = function(e) {
                    e.preventDefault();
                    appWindow.postMessage('fullscreen', '*');
                };
            }

        }, 500);
    });

    window.addEventListener('message', function (e) {
        appWindow = e.source;
    }, false);

})();
