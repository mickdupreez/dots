(function () {

    var time = 0;

    if (document.getElementById('movie_player') !== null) {
        /* stop player */
        document.getElementById('movie_player').pauseVideo();
        time = Math.floor(document.getElementById('movie_player').getCurrentTime())
    }

    /* send current time to extension */
    document.dispatchEvent(
        new CustomEvent('FloatingMiniPlayerExtension', {
            'detail': {
                'action': 'play',
                'time': time,
                'url': document.URL
            }
        })
    );

})();
