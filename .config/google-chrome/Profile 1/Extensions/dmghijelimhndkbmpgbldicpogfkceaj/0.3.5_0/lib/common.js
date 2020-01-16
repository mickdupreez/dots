app.update = function (state) {
  app.button.label = "Current State: " + state.toUpperCase();
  app.button.icon = {
    "path": {
      "16": '../../data/icons/' + (state ? state + '/' : '') + '16.png',
      "32": '../../data/icons/' + (state ? state + '/' : '') + '32.png',
      "48": '../../data/icons/' + (state ? state + '/' : '') + '48.png',
      "64": '../../data/icons/' + (state ? state + '/' : '') + '64.png'
    }
  };
};

app.hostname = function (url) {
  url = url.replace("www.", '');
  var s = url.indexOf("//") + 2;
  if (s > 1) {
    var o = url.indexOf('/', s);
    if (o > 0) return url.substring(s, o);
    else {
      o = url.indexOf('?', s);
      if (o > 0) return url.substring(s, o);
      else return url.substring(s);
    }
  } else return url;
};

chrome.contextMenus.create({
  "contexts": ["page"],
  "id": "dark-mode-context-menu",
  "title": "Exclude from dark mode"
});

chrome.contextMenus.onClicked.addListener(function (e) {
  if (e.menuItemId === "dark-mode-context-menu") {
    var pageUrl = e.pageUrl;
    chrome.storage.local.get({"whitelist": []}, function (o) {
      var whitelist = o.whitelist;
      whitelist.push(app.hostname(pageUrl));
      whitelist = whitelist.filter(function (element, index, array) {return element && array.indexOf(element) === index});
      chrome.storage.local.set({"whitelist": whitelist}, function () {});
    });
  }
});

app.button.onCommand(function () {
  config.addon.state = config.addon.state === "dark" ? "light" : "dark";
  app.update(config.addon.state);
});

app.options.receive("dark-new-tab", function () {app.tab.open(config.page.newtab)});
app.options.receive("test-dark-mode", function () {app.tab.open(config.page.test)});
app.options.receive("open-support-page", function () {app.tab.open(app.homepage())});
app.options.receive("make-a-donation", function () {app.tab.open(app.homepage() + "?reason=support")});

window.setTimeout(function () {app.update(config.addon.state)}, 300);
