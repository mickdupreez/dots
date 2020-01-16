// Generated by CoffeeScript 1.10.0
(function() {
  window.Option = (function() {
    var googleSearch, options;

    function Option() {}

    googleSearch = 'https://www.google.com/search?q={{keyword}}';

    options = {
      nextpattern: ['(下|后)一?(页|頁|篇|张)', '^\\s*Next\\s*$', '^>$', '^More$', '(^(>>|››|»)\\|?)|((»|››|>>)\\|?$)'],
      previouspattern: ['(上|前)一(页|頁|篇|张)', '^\\s*Prev(ious)?\\s*$', '^<$', '(^(<<|‹‹|«)\\|?)|((<<|‹‹|«)\\|?$)'],
      enable_vrome_key: '<C-Esc>',
      disablesites: '',
      server_port: 20000,
      searchengines: {
        google: googleSearch,
        yahoo: 'https://search.yahoo.com/search?p={{keyword}}',
        bing: 'https://www.bing.com/search?q={{keyword}}',
        wikipedia: 'https://www.wikipedia.org/wiki/Special:Search/{{keyword}}',
        answers: 'https://www.answers.com/main/ntquery?s={{keyword}}',
        twitter: 'https://twitter.com/search/{{keyword}}'
      },
      defaultsearch: 'google',
      autocomplete_next: '<Down>',
      autocomplete_prev: '<Up>',
      autocomplete_next_10: '<Tab>',
      autocomplete_prev_10: '<S-Tab>',
      hintkeys: 'masdfghjklqwertyuiopzxcvbn',
      useletters: 1,
      showstatus: 1,
      show_disabled_text: 1,
      follow_new_tab: 0,
      completion_items: 'url,search-engine,bookmarks,history,search'
    };

    Option.get = function(key) {
      var configure, e, error, error1, isPlus, option, ref, value;
      configure = (ref = Settings.get('@configure.set')) != null ? ref[key] : void 0;
      option = options[key];
      if ($.isArray(configure)) {
        value = configure[0], isPlus = configure[1];
        if ($.isArray(option)) {
          try {
            value = value.startsWith('[') ? JSON.parse(value) : [value];
          } catch (error) {
            e = error;
            value = [];
          }
          option = isPlus ? option.concat(value) : value;
        } else if ($.isPlainObject(option)) {
          try {
            value = JSON.parse(value);
          } catch (error1) {
            e = error1;
            value = {};
          }
          if (isPlus) {
            $.extend(option, value);
          } else {
            option = value;
          }
        } else {
          option = isPlus ? option + value : value;
        }
      }
      return option;
    };

    Option.defaultSearchUrl = function(url) {
      var searchengine, searchengines;
      searchengines = Option.get('searchengines');
      searchengine = searchengines[Option.get('defaultsearch')];
      if (searchengine) {
        return searchengine.replace('{{keyword}}', url);
      }
      return googleSearch.replace('{{keyword}}', url);
    };

    return Option;

  })();

}).call(this);
