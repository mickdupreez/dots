!function() {
    "use strict";
    let e, t, a, r;
    !function(e) {
        e.ShortcutEnabledChange = "tabKiller.shortcutEnabledChange", e.ShortcutKeyChange = "tabKiller.shortcutKeyChange", 
        e.ShortcutKeyModifierChange = "tabKiller.shortcutKeyModifierChange", e.SafePageValueChange = "tabKiller.safePageValueChange", 
        e.SafePageTabDetailsChange = "tabKiller.safePageTabDetailsChange", e.GetState = "tabKiller.getState", 
        e.UpdateStateInTab = "tabKiller.updateStateInTab", e.Engage = "tabKiller.engage", 
        e.SaveTabs = "tabKiller.saveTabs", e.ClearSavedTabs = "tabKiller.clearSavedTabs";
    }(e || (e = {})), function(e) {
        e.None = "none", e.Alt = "alt", e.Meta = "meta", e.Ctrl = "ctrl", e.Shift = "shift";
    }(t || (t = {})), function(e) {
        e.Blank = "blank", e.NewTab = "newTab";
    }(a || (a = {})), function(e) {
        e.Ltr = "ltr", e.Rtl = "rtl";
    }(r || (r = {}));
    let n = null;
    chrome.runtime.sendMessage({
        type: e.GetState
    }, e => {
        n = e;
    }), chrome.runtime.onMessage.addListener((t, a) => {
        t && chrome.runtime.id === a.id && t.type === e.UpdateStateInTab && (n = t.value);
    }), document.addEventListener("keydown", a => {
        if (!n || !n.shortcutEnabled) return;
        if (a.key !== n.shortcutKey && String.fromCharCode(a.keyCode) !== n.shortcutKey) return;
        const r = [ a.metaKey, a.ctrlKey, a.altKey, a.shiftKey ].filter(Boolean), i = n.shortcutKeyModifier === t.None ? 0 : 1;
        r.length > i || (n.shortcutKeyModifier === t.None || n.shortcutKeyModifier === t.Meta && a.metaKey || n.shortcutKeyModifier === t.Ctrl && a.ctrlKey || n.shortcutKeyModifier === t.Alt && a.altKey || n.shortcutKeyModifier === t.Shift && a.shiftKey) && chrome.runtime.sendMessage(chrome.runtime.id, {
            type: e.Engage
        });
    }, !1);
}();
