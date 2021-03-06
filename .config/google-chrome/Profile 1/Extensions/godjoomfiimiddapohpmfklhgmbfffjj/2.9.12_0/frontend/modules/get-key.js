// Generated by CoffeeScript 1.10.0
(function() {
  var i, j, key, keys, len, ref, shiftNums, specialKeys;

  keys = {
    Backspace: 'BackSpace',
    Escape: 'Esc',
    ' ': 'Space'
  };

  shiftNums = {
    '`': '~',
    '1': '!',
    '2': '@',
    '3': '#',
    '4': '$',
    '5': '%',
    '6': '^',
    '7': '&',
    '8': '*',
    '9': '(',
    '0': ')',
    '-': '_',
    '=': '+',
    ';': ':',
    "'": '"',
    ',': '<',
    '.': '>',
    '/': '?',
    '\\': '|'
  };

  specialKeys = {};

  ref = ['Enter', 'Space', 'BackSpace', 'Tab', 'Esc', 'Left', 'Right', 'Up', 'Down', 'Home', 'End', 'PageUp', 'PageDown'];
  for (i = 0, len = ref.length; i < len; i++) {
    key = ref[i];
    specialKeys[key] = null;
  }

  for (key = j = 1; j <= 12; key = ++j) {
    specialKeys["F" + key] = null;
  }

  window.getKey = function(evt) {
    var ctrl, meta, ref1, shift;
    evt = evt.originalEvent || evt;
    if (isModifierKey(evt.key)) {
      return evt.key;
    }
    if (evt.DOM_KEY_LOCATION_NUMPAD === evt.location) {
      return evt.keyCode - 96;
    }
    key = (ref1 = keys[evt.key]) != null ? ref1 : evt.key;
    ctrl = evt.ctrlKey ? 'C-' : '';
    meta = evt.metaKey || evt.altKey ? 'M-' : '';
    shift = evt.shiftKey ? 'S-' : '';
    if (key in specialKeys) {
      return "<" + ctrl + meta + shift + key + ">";
    }
    if (evt.shiftKey) {
      key = key.toUpperCase();
      if (shiftNums[key]) {
        key = shiftNums[key];
      }
    }
    if (ctrl || meta) {
      return "<" + ctrl + meta + key + ">";
    } else {
      return key;
    }
  };

}).call(this);
