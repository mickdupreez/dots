// Generated by CoffeeScript 1.10.0
(function() {
  window.Url = (function() {
    var search;

    function Url() {}

    Url.tabopen = function() {
      return Url.open(false, true);
    };

    desc(Url.tabopen, 'Same as `o`, but open URLs or search in a new tab');

    Url.openWithDefault = function() {
      return Url.open(true, false);
    };

    desc(Url.openWithDefault, 'Same as `o`, open URLs or search but edit current URL');

    Url.tabopenWithDefault = function() {
      return Url.open(true, true);
    };

    desc(Url.tabopenWithDefault, 'Same as `t`, open URLs or search in a new tab but edit current URL');

    Url.open = function(withDefault, newTab) {
      var content, title;
      title = newTab ? 'TabOpen: ' : 'Open: ';
      content = withDefault ? location.href : getSelected() || '';
      return Dialog.start({
        title: title,
        content: content,
        search: search,
        newTab: newTab
      });
    };

    desc(Url.open, 'Open URLs or search');

    Url.open.options = {
      noautocomplete: {
        description: 'Disable autocomplete',
        example: 'set noautocomplete'
      },
      searchengines: {
        description: 'JSON of search engines',
        example: 'set searchengines={"google":"https://www.google.com/search?q={{keyword}}", "yahoo":"https://search.yahoo.com/search?p={{keyword}}"}'
      },
      defaultsearch: {
        description: 'Default search engine name',
        example: 'set defaultsearch=yahoo'
      },
      autocomplete_prev: {
        description: 'Select previous result',
        example: 'set autocomplete_prev=<Up>'
      },
      autocomplete_next: {
        description: 'Select next result',
        example: 'set autocomplete_prev=<Down>'
      },
      autocomplete_next_10: {
        description: 'Select next 10th result',
        example: 'set autocomplete_prev=<Tab>'
      },
      autocomplete_prev_10: {
        description: 'Select previous 10th result',
        example: 'set autocomplete_prev=<S-Tab>'
      }
    };

    search = function(keyword) {
      return Post({
        action: 'Tab.autoComplete',
        keyword: keyword
      });
    };

    Url.parent = function() {
      var hostname, hostnames, i, j, pathname, pathnames, port, ref;
      pathnames = location.pathname.split('/');
      if (pathnames[pathnames.length - 1] === '') {
        pathnames.pop();
      }
      hostnames = location.hostname.split('.');
      for (i = j = 0, ref = times(); 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (pathnames.length <= 1) {
          if (hostnames.length > 2) {
            hostnames.shift();
          }
        } else {
          pathnames.pop();
        }
      }
      hostname = hostnames.join('.');
      pathname = pathnames.join('/');
      port = location.port ? ":" + location.port : '';
      return Post({
        action: 'Tab.openUrl',
        url: location.protocol + "//" + hostname + port + pathname
      });
    };

    desc(Url.parent, 'Go to parent {count} URL');

    Url.root = function() {
      return location.pathname = '/';
    };

    desc(Url.root, 'Go to the root of the website');

    Url.tabReferer = function() {
      return Url.referer(true);
    };

    desc(Url.tabReferer, 'Same as `gr`, but open in a new tab');

    Url.referer = function(newTab) {
      if (newTab == null) {
        newTab = false;
      }
      if (document.referrer) {
        return Post({
          action: 'Tab.openUrl',
          url: document.referrer,
          newTab: newTab,
          active: true
        });
      }
    };

    desc(Url.referer, 'Go to the referrer');

    Url.decrement = function() {
      return Url.increment(-1);
    };

    desc(Url.decrement, 'Decrement the last number in URL by {count}');

    Url.increment = function(direction) {
      var after, before, count, newNumber, newNumberStr, number, ref;
      count = times() * (direction || 1);
      if (document.location.href.match(/(.*?)(\d+)(\D*)$/)) {
        ref = [RegExp.$1, RegExp.$2, RegExp.$3], before = ref[0], number = ref[1], after = ref[2];
        newNumber = parseInt(number, 10) + count;
        newNumberStr = String(Math.max(newNumber, 0));
        if (/^0/.test(number)) {
          while (newNumberStr.length < number.length) {
            newNumberStr = '0' + newNumberStr;
          }
        }
        return Post({
          action: 'Tab.openUrl',
          url: before + newNumberStr + after
        });
      }
    };

    desc(Url.increment, 'Increment the last number in URL by {count}');

    Url.viewSourceNewTab = function() {
      return Url.viewSource(true);
    };

    desc(Url.viewSourceNewTab, 'View source code in a new tab');

    Url.viewSource = function(newTab) {
      return Post({
        action: 'Tab.toggleViewSource',
        newTab: newTab
      });
    };

    desc(Url.viewSource, 'View source code in current tab');

    Url.shortUrl = function(msg) {
      if (msg != null ? msg.url : void 0) {
        Clipboard.copy(msg.url);
        return CmdBox.set({
          title: "[Copied] Shortened URL: " + msg.url,
          timeout: 4000
        });
      } else {
        CmdBox.set({
          title: 'Shortening current URL',
          timeout: 4000
        });
        return Post({
          action: 'shortUrl'
        });
      }
    };

    desc(Url.shortUrl, 'Copy shorten URL to clipboard, the URL is shortened by `http://goo.gl`, You can use your account after grant auth in option page');

    Url.openFromClipboardAndFocusNewTab = function() {
      return Url.openFromClipboard(true, true);
    };

    desc(Url.openFromClipboardAndFocusNewTab, 'Same as `p`, but open selected text or clipboard content in a new tab and activate it');

    Url.openFromClipboardNewTab = function() {
      return Url.openFromClipboard(true, false);
    };

    desc(Url.openFromClipboardNewTab, 'Same as `p`, but open selected text or clipboard content in a new tab');

    Url.openFromClipboard = function(newTab, active) {
      var selectedText;
      if (newTab == null) {
        newTab = false;
      }
      if (active == null) {
        active = false;
      }
      selectedText = getSelected();
      if (selectedText !== '') {
        return Post({
          action: 'Tab.openUrl',
          url: selectedText,
          newTab: newTab,
          active: active
        });
      } else {
        return Post({
          action: 'Tab.openFromClipboard',
          newTab: newTab,
          active: active
        });
      }
    };

    desc(Url.openFromClipboard, 'Open selected text or clipboard content in current tab. If not a valid URL, make a search');

    return Url;

  })();

}).call(this);
