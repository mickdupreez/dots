(function () {

    if (document.getElementsByClassName('FloatingForYoutubePlayerButton').length) return;

    var playerControls, playerControlsInterval;

    playerControlsInterval = setInterval(function () {

        playerControls = document.getElementsByClassName('ytp-right-controls');

        if (playerControls.length) {

            clearInterval(playerControlsInterval);

            if (document.getElementsByClassName('FloatingForYoutubePlayerButton').length) return; // prevet multiple pins bug

            var playerButton = document.createElement('button');
            playerButton.className = 'ytp-button FloatingForYoutubePlayerButton';
            playerButton.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><defs><path d="M28,14.8 L26.95,15.85Q26.95,15.85 25.7,16.1Q25.7,16.1 25.25,16.15Q25.25,16.15 24.9,16.15L24.6,16.1L19.9,20.75L20.05,21.3L20.2,21.95Q20.2,21.95 20.25,22.6Q20.25,22.6 20.25,24.7Q20.25,24.7 18.85,26.1L15.2,22.5L12.35,25.3Q12.35,25.3 9.9,26.95Q9.9,26.95 9.15,27.45Q9.15,27.45 8.5,27.8L8,28L8.2,27.55L8.55,26.85Q8.55,26.85 9.05,26.1Q9.05,26.1 10.7,23.6Q10.7,23.6 13.55,20.75L9.9,17.15L11.35,15.75Q11.35,15.75 13.4,15.75Q13.4,15.75 14.05,15.8Q14.05,15.8 14.7,15.95L15.2,16.1L19.9,11.4L19.85,11.1L19.85,10.7Q19.85,10.7 19.95,10.35Q19.95,10.35 20.15,9.05Q20.15,9.05 21.2,8" id="fytp-svg-40"></path></defs><use class="ytp-svg-shadow" xlink:href="#fytp-svg-40"></use><use class="ytp-svg-fill" xlink:href="#fytp-svg-40"></use></svg>';

            playerButton.addEventListener('mouseover', function () {
                var tooltip = document.getElementsByClassName('ytp-tooltip'),
                    tooltipText = document.getElementsByClassName('ytp-tooltip-text');

                if (tooltip.length > 0 && tooltipText.length) {
                    tooltip[0].style.display = 'block';
                    tooltip[0].style.opacity = '1';
                    tooltip[0].style.textAlign = 'center';
                    tooltip[0].style.maxWidth = 'none';
                    tooltipText[0].innerHTML = 'Open in Floating<br/>for YouTube™';
                    tooltipText[0].style.display = 'block';
                    tooltipText[0].style.whiteSpace = 'nowrap';

                    setTimeout(function () {
                        tooltip[0].style.display = 'block';
                    }, 100);
                }
            });

            playerButton.addEventListener('mouseleave', function () {
                var tooltip = document.getElementsByClassName('ytp-tooltip');
                if (tooltip.length > 0) {
                    tooltip[0].style.display = 'none';
                }
            });

            playerButton.addEventListener('click', function (event) {
                event.preventDefault();

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

            });

            playerControls[0].appendChild(playerButton);
        }

    }, 200);

})();
