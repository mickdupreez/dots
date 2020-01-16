(function () {

    var wlids = [],
        elms = document.querySelectorAll('#pl-video-table .pl-video-title-link'); // WL list

    elms.length || (elms = document.querySelectorAll('#watch-appbar-playlist .playlist-video')); // WL detail

    // parse elms for YT ids
    for (var i = 0, len = elms.length; i < len; i += 1) {

        if (match = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/.exec(elms[i].getAttribute('href'))) {

            if (match instanceof Array && match[2] !== undefined) {
                wlids.push(match[2]);
            }
        }
    }

    /* send current time to extension */
    document.dispatchEvent(
        new CustomEvent('FloatingMiniPlayerExtension', {
            'detail': {
                'action': 'watchlater',
                'list': wlids,
                'url': document.URL
            }
        })
    );

})();
