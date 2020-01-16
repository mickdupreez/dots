
var webviewElm = document.getElementById('webview'),
    donateElm = document.getElementById('donate');

donateElm.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.innerHTML = 'Thanks &#10084;';
    window.open(e.target.href);
}, false);

webviewElm.addEventListener('contentload', function () {
    webviewElm.contentWindow.postMessage('Send appWindow reference', "*");
});

window.addEventListener('message', function(e) {

    if (e.data === 'fullscreen') {
        chrome.runtime.sendMessage('fullscreen');
    } else {
        window.open(e.data);
    }

}, false);
