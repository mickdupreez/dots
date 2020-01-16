var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === 'background-to-options') {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": 'options-to-background', "method": id, "data": data})}
  }
})();

var config = {
  "elements": {},
  "themes": {"number": 38},
  "host": {
    "name": function (url) {
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
    }
  },
  "click": {
    "handle": function () {
      var id = this.id;
      var checked = this.checked;
      /*  */
      if (id.indexOf("dark_") !== -1) {
        for (var i = 1; i <= config.themes.number; i++) document.getElementById("dark_" + i).checked = false;
        document.getElementById(id).checked = checked;
      }
      /*  */
      var tmp = {};
      for (var name in website.custom.rules) tmp[name] = document.getElementById(name).checked;
      for (var i = 1; i <= config.themes.number; i++) {
        var name = "dark_" + i;
        tmp[name] = document.getElementById(name).checked;
      }
      chrome.storage.local.set(tmp, function () {});
    }
  },
  "update": function () {
    var tmp = {"whitelist": [], "state": "light", "custom": ''};
    var arr = [...document.querySelectorAll("input[type='checkbox']")];
    var color = {"normal": "rgb(110, 110, 110)", "highlight": "rgb(193, 193, 193)"};
    /*  */
    chrome.storage.local.get(tmp, function (e) {
      config.elements.custom.value = e.custom;
      config.elements.whitelist.value = e.whitelist.join(', ');
    });
    /*  */
    for (var i = 0; i < arr.length; i++) {
      var checkbox = arr[i];
      if (checkbox) {
        var label = checkbox.parentNode;
        if (label) {
          label.style.color = checkbox.checked ? color.highlight : color.normal;
        }
      }
    }
  },
  "load": function () {
    config.update();
    window.removeEventListener("load", config.load, false);
    /*  */
    var test = document.getElementById("test-dark-mode");
    var newtab = document.getElementById("dark-new-tab");
    var donation = document.getElementById("make-a-donation");
    var support = document.getElementById("open-support-page");
    /*  */
    test.addEventListener("click", function () {background.send("test-dark-mode")});
    newtab.addEventListener("click", function () {background.send("dark-new-tab")});
    donation.addEventListener("click", function () {background.send("make-a-donation")});
    support.addEventListener("click", function () {background.send("open-support-page")});
    /*  */
    for (var name in website.custom.rules) document.getElementById(name).addEventListener("click", config.click.handle);
    for (var i = 1; i <= config.themes.number; i++) document.getElementById("dark_" + i).addEventListener("click", config.click.handle);
    /*  */
    config.elements.custom.addEventListener("keyup", function () {chrome.storage.local.set({"custom": this.value}, function () {})});
    config.elements.support.addEventListener("click", function () {chrome.storage.local.set({"support": this.checked}, function () {})});
    /*  */
    config.elements.whitelist.addEventListener("change", function () {
      var tmp = [];
      var whitelist = config.elements.whitelist.value || '';
      var hosts = whitelist.split(/\s*\,\s*/);
      for (var i = 0; i < hosts.length; i++) tmp.push(config.host.name(hosts[i]));
      tmp = tmp.filter(function (element, index, array) {return element && array.indexOf(element) === index});
      chrome.storage.local.set({"whitelist": tmp}, function () {});
    });
  },
  "contentloaded": function () {
    config.elements.custom = document.getElementById("custom");
    config.elements.support = document.getElementById("support");
    config.elements.whitelist = document.getElementById("whitelist");
    var firefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    document.removeEventListener("DOMContentLoaded", config.contentloaded, false);
    /*  */
    var tmp = {};
    for (var name in website.custom.rules) tmp[name] = true;
    for (var i = 1; i <= config.themes.number; i++) tmp["dark_" + i] = false;
    tmp["dark_1"] = true;
    tmp["support"] = firefox ? false : true;
    /*  */
    chrome.storage.local.get(tmp, function (e) {
      config.elements.support.checked = e.support;
      for (var name in website.custom.rules) document.getElementById(name).checked = e[name];
      for (var i = 1; i <= config.themes.number; i++) {
        var name = "dark_" + i;
        document.getElementById(name).checked = e[name];
      }
      /*  */
      config.update();
    });
    /*  */
    var editor = new Behave({
      "tabSize": 2,
      "fence": false,
      "softTabs": true,
      "autoOpen": true,
      "overwrite": true,
      "autoStrip": true,
      "autoIndent": true,
      "replaceTab": true,
      "textarea": config.elements.custom
    });
  }
};

chrome.storage.onChanged.addListener(config.update);
window.addEventListener("load", config.load, false);
document.addEventListener("DOMContentLoaded", config.contentloaded, false);
