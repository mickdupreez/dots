// Generated by CoffeeScript 1.10.0
(function() {
  window.Clipboard = (function() {
    var createTextArea;

    function Clipboard() {}

    createTextArea = function(data) {
      var textNode;
      textNode = $('<textarea>').val(data);
      $(document.documentElement).append(textNode);
      return textNode;
    };

    Clipboard.copy = function(msg) {
      var textNode;
      textNode = createTextArea(msg.value);
      textNode.select();
      document.execCommand('Copy');
      return $(textNode).remove();
    };

    Clipboard.read = function() {
      var $textNode, result, textNode;
      textNode = createTextArea('');
      textNode.select();
      document.execCommand('paste');
      $textNode = $(textNode);
      result = $textNode.val();
      $textNode.remove();
      return result;
    };

    return Clipboard;

  })();

}).call(this);
