!function() {
    "use strict";
    let e, n, t, o;
    !function(e) {
        e.IsAvailableChange = "proxy.isAvailable", e.StateChange = "proxy.stateChange", 
        e.SelectedLocationChange = "proxy.selectedLocationChange", e.Connect = "proxy.connect", 
        e.Disconnect = "proxy.disconnect", e.PacDataChange = "proxy.pacDataChange", e.CredentialsConfigInvalid = "proxy.credentialsConfigInvalid", 
        e.CredentialsConfigReceived = "proxy.credentialsConfigReceived", e.LocationsConfigReceived = "proxy.locationsConfigReceived", 
        e.AutoConnectEnabledChange = "proxy.autoConnectEnabledChange", e.AutoConnectSiteAdd = "proxy.autoConnectSiteAdd", 
        e.AutoConnectSiteRemove = "proxy.autoConnectSiteRemove", e.AutoConnectSiteChange = "proxy.autoConnectSiteChange", 
        e.DisableConflictingExtensions = "proxy.disableConflictingExtensions", e.GetState = "proxy.getState";
    }(e || (e = {})), function(e) {
        e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", 
        e.Disconnecting = "disconnecting";
    }(n || (n = {})), function(e) {
        e.FixedServers = "fixed_servers", e.PacScript = "pac_script", e.Direct = "direct";
    }(t || (t = {})), function(e) {
        e.Ga = "ga", e.Burger = "burger";
    }(o || (o = {})), chrome.runtime.sendMessage({
        type: e.GetState
    }, e => {
        document.dispatchEvent(new CustomEvent("proxyExtensionEnabledChange", {
            detail: e.state === n.Connected
        }));
    });
    const i = document.createElement("script"), c = document.body || document.documentElement;
    i.innerHTML = `(${function() {
        window._extensionStatus = window.__extension || {}, window._extensionStatus.installed = !0, 
        window._extensionStatus.enabled = null, document.addEventListener("proxyExtensionEnabledChange", function(e) {
            window._extensionStatus.enabled = e.detail;
        });
    }.toString()})()`, c && c.appendChild(i);
}();
