!function() {
    "use strict";
    function e(e, t) {
        return void 0 === t ? {
            type: e
        } : {
            type: e,
            value: t
        };
    }
    let t;
    !function(e) {
        e.IsAvailableChange = "proxy.isAvailable", e.StateChange = "proxy.stateChange", 
        e.SelectedLocationChange = "proxy.selectedLocationChange", e.Connect = "proxy.connect", 
        e.Disconnect = "proxy.disconnect", e.PacDataChange = "proxy.pacDataChange", e.CredentialsConfigInvalid = "proxy.credentialsConfigInvalid", 
        e.CredentialsConfigReceived = "proxy.credentialsConfigReceived", e.LocationsConfigReceived = "proxy.locationsConfigReceived", 
        e.AutoConnectEnabledChange = "proxy.autoConnectEnabledChange", e.AutoConnectSiteAdd = "proxy.autoConnectSiteAdd", 
        e.AutoConnectSiteRemove = "proxy.autoConnectSiteRemove", e.AutoConnectSiteChange = "proxy.autoConnectSiteChange", 
        e.DisableConflictingExtensions = "proxy.disableConflictingExtensions", e.GetState = "proxy.getState";
    }(t || (t = {}));
    const n = {
        autoConnectEnabledChange: n => e(t.AutoConnectEnabledChange, n),
        autoConnectSiteAdd: (n, r) => e(t.AutoConnectSiteAdd, {
            host: n,
            location: r
        }),
        autoConnectSiteChange: (n, r, i) => e(t.AutoConnectSiteChange, {
            index: n,
            host: r,
            location: i
        }),
        autoConnectSiteRemove: n => e(t.AutoConnectSiteRemove, n),
        connect: n => e(t.Connect, n),
        credentialsConfigInvalid: () => e(t.CredentialsConfigInvalid),
        credentialsConfigReceived: n => e(t.CredentialsConfigReceived, n),
        disableConflictingExtensions: () => e(t.DisableConflictingExtensions),
        disconnect: () => e(t.Disconnect),
        getState: () => e(t.GetState),
        isAvailableChange: n => e(t.IsAvailableChange, n),
        locationsConfigReceived: n => e(t.LocationsConfigReceived, n),
        pacDataChange: n => e(t.PacDataChange, n),
        selectedLocationChange: n => e(t.SelectedLocationChange, n),
        stateChange: n => e(t.StateChange, n)
    };
    let r, i, o, s;
    !function(e) {
        e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", 
        e.Disconnecting = "disconnecting";
    }(r || (r = {})), function(e) {
        e.FixedServers = "fixed_servers", e.PacScript = "pac_script", e.Direct = "direct";
    }(i || (i = {})), function(e) {
        e.Ga = "ga", e.Burger = "burger";
    }(o || (o = {})), function(e) {
        e.ConfigReceived = "shepherd.configReceived";
    }(s || (s = {}));
    const a = {
        configReceived: (t, n, r, i, o, a) => e(s.ConfigReceived, {
            config: t,
            ttl: n,
            abTests: r,
            configId: i,
            configName: o,
            configVersion: a
        })
    };
    let l;
    !function(e) {
        e.Startup = "startup", e.GetState = "getState", e.StateChange = "stateChange", e.Installed = "installed", 
        e.Updated = "updated";
    }(l || (l = {}));
    const u = () => e(l.Installed), h = () => e(l.Startup), c = t => e(l.Updated, {
        previousVersion: t
    });
    let f;
    !function(e) {
        e.ClientCountryCodeChange = "analytics.clientCountryCodeChange", e.CreateSession = "analytics.createSession", 
        e.HeartbeatTracked = "analytics.heartbeatTracked", e.TrackEvent = "analytics.trackEvent", 
        e.TrackView = "analytics.trackView", e.UninstallUrlDirty = "analytics.uninstallUrlDirty";
    }(f || (f = {}));
    const d = {
        clientCountryCodeChange: t => e(f.ClientCountryCodeChange, t),
        createSession: () => e(f.CreateSession),
        heartbeatTracked: () => e(f.HeartbeatTracked),
        trackEvent: (t, n, r, i) => e(f.TrackEvent, {
            category: t,
            action: n,
            label: r,
            view: i
        }),
        trackView: t => e(f.TrackView, t),
        uninstallUrlDirty: () => e(f.UninstallUrlDirty)
    };
    let p, g, m, y;
    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    !function(e) {
        e.Lifecycle = "Lifecycle", e.Notification = "Notification";
    }(p || (p = {})), function(e) {
        e.Installation = "Installation", e.Heartbeat = "Heartbeat", e.Update = "Update", 
        e.Click = "Click";
    }(g || (g = {})), function(e) {
        e.WholeNotification = "Whole Notification", e.Close = "Close", e.MoreStartFreeDownload = "More: Start Free Download", 
        e.MoreNextTime = "More: Next time";
    }(m || (m = {})), function(e) {
        e.Notification = "Notification";
    }(y || (y = {}));
    var b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function w(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    function _(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var E = 1e3, S = 6e4, T = 36e5, C = 24 * T, x = function(e, t) {
        t = t || {};
        var n, r, i = typeof e;
        if ("string" === i && e.length > 0) return function(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return 315576e5 * n;

                      case "weeks":
                      case "week":
                      case "w":
                        return 6048e5 * n;

                      case "days":
                      case "day":
                      case "d":
                        return n * C;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * T;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * S;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * E;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }(e);
        if ("number" === i && !1 === isNaN(e)) return t.long ? (n = e, (r = Math.abs(n)) >= C ? k(n, r, C, "day") : r >= T ? k(n, r, T, "hour") : r >= S ? k(n, r, S, "minute") : r >= E ? k(n, r, E, "second") : n + " ms") : function(e) {
            var t = Math.abs(e);
            return t >= C ? Math.round(e / C) + "d" : t >= T ? Math.round(e / T) + "h" : t >= S ? Math.round(e / S) + "m" : t >= E ? Math.round(e / E) + "s" : e + "ms";
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
    function k(e, t, n, r) {
        var i = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (i ? "s" : "");
    }
    var I = _(function(e, t) {
        t.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e);
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (r++, "%c" === e && (i = r));
            }), t.splice(i, 0, n);
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug");
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }, t.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, t.storage = function() {
            try {
                return localStorage;
            } catch (e) {}
        }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        e.exports = function(e) {
            function t(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return n.colors[Math.abs(t) % n.colors.length];
            }
            function n(e) {
                let o;
                function s(...e) {
                    if (!s.enabled) return;
                    const t = s, r = Number(new Date()), i = r - (o || r);
                    t.diff = i, t.prev = o, t.curr = r, o = r, e[0] = n.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let a = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, i) => {
                        if ("%%" === r) return r;
                        a++;
                        const o = n.formatters[i];
                        if ("function" == typeof o) {
                            const n = e[a];
                            r = o.call(t, n), e.splice(a, 1), a--;
                        }
                        return r;
                    }), n.formatArgs.call(t, e), (t.log || n.log).apply(t, e);
                }
                return s.namespace = e, s.enabled = n.enabled(e), s.useColors = n.useColors(), s.color = t(e), 
                s.destroy = r, s.extend = i, "function" == typeof n.init && n.init(s), n.instances.push(s), 
                s;
            }
            function r() {
                const e = n.instances.indexOf(this);
                return -1 !== e && (n.instances.splice(e, 1), !0);
            }
            function i(e, t) {
                return n(this.namespace + (void 0 === t ? ":" : t) + e);
            }
            function o(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, n.disable = function() {
                const e = [ ...n.names.map(o), ...n.skips.map(o).map(e => "-" + e) ].join(",");
                return n.enable(""), e;
            }, n.enable = function(e) {
                let t;
                n.save(e), n.names = [], n.skips = [];
                const r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
                for (t = 0; t < i; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < n.instances.length; t++) {
                    const e = n.instances[t];
                    e.enabled = n.enabled(e.namespace);
                }
            }, n.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let t, r;
                for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
                for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
                return !1;
            }, n.humanize = x, Object.keys(e).forEach(t => {
                n[t] = e[t];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = t, 
            n.enable(n.load()), n;
        }(t);
        const {formatters: n} = e.exports;
        n.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        };
    });
    I.log, I.formatArgs, I.save, I.load, I.useColors, I.storage, I.colors;
    const A = I("runtimeInfo");
    let P, N, L;
    !function(e) {
        e.Win = "win", e.Mac = "mac", e.Unknown = "unknown";
    }(P || (P = {})), function(e) {
        e.Arm = "arm", e.X86 = "x86-32", e.X64 = "x86-64", e.Unknown = "unknown";
    }(N || (N = {})), function(e) {
        e.Chrome = "chrome", e.Firefox = "firefox", e.Other = "other";
    }(L || (L = {}));
    const R = new class {
        constructor(e) {
            v(this, "_brand", void 0), v(this, "_extensionVersion", void 0), v(this, "_permissions", void 0), 
            v(this, "_optionalPermissions", void 0), v(this, "_contentScriptPaths", void 0), 
            v(this, "_browser", void 0), v(this, "_name", void 0), v(this, "_shortName", void 0), 
            v(this, "_os", void 0), v(this, "_arch", void 0), e.short_name || A("short_name not defined in manifest"), 
            this._brand = e.short_name, this._extensionVersion = e.version, this._permissions = e.permissions, 
            this._optionalPermissions = e.optional_permissions || [], this._name = e.name, this._shortName = e.short_name, 
            this._contentScriptPaths = this.extractPathsFromContentScripts(e.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = L.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = L.Firefox : this._browser = L.Other, 
            A("extension version: %s", this._extensionVersion);
        }
        get brand() {
            if (!this._brand) throw new Error("Invalid runtime info brand value.");
            return this._brand;
        }
        get extensionVersion() {
            return this._extensionVersion;
        }
        get permissions() {
            return this._permissions;
        }
        get optionalPermissions() {
            return this._optionalPermissions;
        }
        get contentScriptPaths() {
            return this._contentScriptPaths;
        }
        get os() {
            switch (this._os) {
              case P.Mac:
              case P.Win:
                return this._os;

              default:
                return P.Unknown;
            }
        }
        get arch() {
            switch (this._arch) {
              case N.Arm:
              case N.X86:
              case N.X64:
                return this._arch;

              default:
                return N.Unknown;
            }
        }
        get browser() {
            return this._browser;
        }
        get name() {
            return this._name;
        }
        get shortName() {
            return this._shortName;
        }
        handleGetPlatformInfo(e) {
            e && (this._os = e.os, this._arch = e.arch);
        }
        extractPathsFromContentScripts(e) {
            if (!e) return [];
            const t = e.reduce(function(e, t) {
                return t.js.forEach(t => {
                    const n = t.split("/");
                    e.add(n[n.length - 1]);
                }), e;
            }, new Set());
            return Array.from(t);
        }
    }(chrome.runtime.getManifest());
    chrome.runtime.getPlatformInfo(R.handleGetPlatformInfo.bind(R));
    const O = new class {
        constructor() {
            v(this, "store", void 0);
        }
        setStore(e) {
            this.store = e;
        }
        dispatch(e) {
            return this.store.dispatch(e);
        }
        getState() {
            return this.store.getState();
        }
    }();
    function F() {}
    function U() {
        U.init.call(this);
    }
    function B(e) {
        return void 0 === e._maxListeners ? U.defaultMaxListeners : e._maxListeners;
    }
    function M(e, t, n, r) {
        var i, o, s, a;
        if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
        if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), 
        o = e._events), s = o[t]) : (o = e._events = new F(), e._eventsCount = 0), s) {
            if ("function" == typeof s ? s = o[t] = r ? [ n, s ] : [ s, n ] : r ? s.unshift(n) : s.push(n), 
            !s.warned && (i = B(e)) && i > 0 && s.length > i) {
                s.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, 
                a = l, "function" == typeof console.warn ? console.warn(a) : console.log(a);
            }
        } else s = o[t] = n, ++e._eventsCount;
        return e;
    }
    function V(e, t, n) {
        var r = !1;
        function i() {
            e.removeListener(t, i), r || (r = !0, n.apply(e, arguments));
        }
        return i.listener = n, i;
    }
    function z(e) {
        var t = this._events;
        if (t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (n) return n.length;
        }
        return 0;
    }
    function j(e, t) {
        for (var n = new Array(t); t--; ) n[t] = e[t];
        return n;
    }
    F.prototype = Object.create(null), U.EventEmitter = U, U.usingDomains = !1, U.prototype.domain = void 0, 
    U.prototype._events = void 0, U.prototype._maxListeners = void 0, U.defaultMaxListeners = 10, 
    U.init = function() {
        this.domain = null, U.usingDomains && (void 0).active && (void 0).Domain, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new F(), 
        this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, U.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
        return this._maxListeners = e, this;
    }, U.prototype.getMaxListeners = function() {
        return B(this);
    }, U.prototype.emit = function(e) {
        var t, n, r, i, o, s, a, l = "error" === e;
        if (s = this._events) l = l && null == s.error; else if (!l) return !1;
        if (a = this.domain, l) {
            if (t = arguments[1], !a) {
                if (t instanceof Error) throw t;
                var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw u.context = t, u;
            }
            return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, 
            t.domain = a, t.domainThrown = !1, a.emit("error", t), !1;
        }
        if (!(n = s[e])) return !1;
        var h = "function" == typeof n;
        switch (r = arguments.length) {
          case 1:
            !function(e, t, n) {
                if (t) e.call(n); else for (var r = e.length, i = j(e, r), o = 0; o < r; ++o) i[o].call(n);
            }(n, h, this);
            break;

          case 2:
            !function(e, t, n, r) {
                if (t) e.call(n, r); else for (var i = e.length, o = j(e, i), s = 0; s < i; ++s) o[s].call(n, r);
            }(n, h, this, arguments[1]);
            break;

          case 3:
            !function(e, t, n, r, i) {
                if (t) e.call(n, r, i); else for (var o = e.length, s = j(e, o), a = 0; a < o; ++a) s[a].call(n, r, i);
            }(n, h, this, arguments[1], arguments[2]);
            break;

          case 4:
            !function(e, t, n, r, i, o) {
                if (t) e.call(n, r, i, o); else for (var s = e.length, a = j(e, s), l = 0; l < s; ++l) a[l].call(n, r, i, o);
            }(n, h, this, arguments[1], arguments[2], arguments[3]);
            break;

          default:
            for (i = new Array(r - 1), o = 1; o < r; o++) i[o - 1] = arguments[o];
            !function(e, t, n, r) {
                if (t) e.apply(n, r); else for (var i = e.length, o = j(e, i), s = 0; s < i; ++s) o[s].apply(n, r);
            }(n, h, this, i);
        }
        return !0;
    }, U.prototype.addListener = function(e, t) {
        return M(this, e, t, !1);
    }, U.prototype.on = U.prototype.addListener, U.prototype.prependListener = function(e, t) {
        return M(this, e, t, !0);
    }, U.prototype.once = function(e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.on(e, V(this, e, t)), this;
    }, U.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.prependListener(e, V(this, e, t)), this;
    }, U.prototype.removeListener = function(e, t) {
        var n, r, i, o, s;
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        if (!(r = this._events)) return this;
        if (!(n = r[e])) return this;
        if (n === t || n.listener && n.listener === t) 0 == --this._eventsCount ? this._events = new F() : (delete r[e], 
        r.removeListener && this.emit("removeListener", e, n.listener || t)); else if ("function" != typeof n) {
            for (i = -1, o = n.length; o-- > 0; ) if (n[o] === t || n[o].listener && n[o].listener === t) {
                s = n[o].listener, i = o;
                break;
            }
            if (i < 0) return this;
            if (1 === n.length) {
                if (n[0] = void 0, 0 == --this._eventsCount) return this._events = new F(), this;
                delete r[e];
            } else !function(e, t) {
                for (var n = i, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
                e.pop();
            }(n);
            r.removeListener && this.emit("removeListener", e, s || t);
        }
        return this;
    }, U.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!(n = this._events)) return this;
        if (!n.removeListener) return 0 === arguments.length ? (this._events = new F(), 
        this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new F() : delete n[e]), 
        this;
        if (0 === arguments.length) {
            for (var r, i = Object.keys(n), o = 0; o < i.length; ++o) "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"), this._events = new F(), this._eventsCount = 0, 
            this;
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (t) do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]);
        return this;
    }, U.prototype.listeners = function(e) {
        var t, n = this._events;
        return n && (t = n[e]) ? "function" == typeof t ? [ t.listener || t ] : function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t;
        }(t) : [];
    }, U.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : z.call(e, t);
    }, U.prototype.listenerCount = z, U.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
    var D = _(function(e, t) {
        !function(n, r) {
            var i = "model", o = "name", s = "type", a = "vendor", l = "version", u = "mobile", h = "tablet", c = {
                extend: function(e, t) {
                    var n = {};
                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                    return n;
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                },
                lowerize: function(e) {
                    return e.toLowerCase();
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }
            }, f = {
                rgx: function(e, t) {
                    for (var n, r, i, o, s, a, l = 0; l < t.length && !s; ) {
                        var u = t[l], h = t[l + 1];
                        for (n = r = 0; n < u.length && !s; ) if (s = u[n++].exec(e)) for (i = 0; i < h.length; i++) a = s[++r], 
                        "object" == typeof (o = h[i]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : void 0 : this[o[0]] = a ? o[1].call(this, a, o[2]) : void 0 : 4 == o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : void 0) : this[o] = a || void 0;
                        l += 2;
                    }
                },
                str: function(e, t) {
                    for (var n in t) if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var r = 0; r < t[n].length; r++) if (c.has(t[n][r], e)) return "?" === n ? void 0 : n;
                    } else if (c.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e;
                }
            }, d = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": [ "SD", "KF" ]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: [ "NT 5.1", "NT 5.2" ],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: [ "NT 6.4", "NT 10.0" ],
                            RT: "ARM"
                        }
                    }
                }
            }, p = {
                browser: [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ o, l ], [ /(opios)[\/\s]+([\w\.]+)/i ], [ [ o, "Opera Mini" ], l ], [ /\s(opr)\/([\w\.]+)/i ], [ [ o, "Opera" ], l ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i ], [ o, l ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ o, "IE" ], l ], [ /(edge|edgios|edga)\/((\d+)?[\w\.]+)/i ], [ [ o, "Edge" ], l ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ o, "Yandex" ], l ], [ /(puffin)\/([\w\.]+)/i ], [ [ o, "Puffin" ], l ], [ /(focus)\/([\w\.]+)/i ], [ [ o, "Firefox Focus" ], l ], [ /(opt)\/([\w\.]+)/i ], [ [ o, "Opera Touch" ], l ], [ /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i ], [ [ o, "UCBrowser" ], l ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ o, /_/g, " " ], l ], [ /(micromessenger)\/([\w\.]+)/i ], [ [ o, "WeChat" ], l ], [ /(brave)\/([\w\.]+)/i ], [ [ o, "Brave" ], l ], [ /(qqbrowserlite)\/([\w\.]+)/i ], [ o, l ], [ /(QQ)\/([\d\.]+)/i ], [ o, l ], [ /m?(qqbrowser)[\/\s]?([\w\.]+)/i ], [ o, l ], [ /(BIDUBrowser)[\/\s]?([\w\.]+)/i ], [ o, l ], [ /(2345Explorer)[\/\s]?([\w\.]+)/i ], [ o, l ], [ /(MetaSr)[\/\s]?([\w\.]+)/i ], [ o ], [ /(LBBROWSER)/i ], [ o ], [ /xiaomi\/miuibrowser\/([\w\.]+)/i ], [ l, [ o, "MIUI Browser" ] ], [ /;fbav\/([\w\.]+);/i ], [ l, [ o, "Facebook" ] ], [ /safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i ], [ o, l ], [ /headlesschrome(?:\/([\w\.]+)|\s)/i ], [ l, [ o, "Chrome Headless" ] ], [ /\swv\).+(chrome)\/([\w\.]+)/i ], [ [ o, /(.+)/, "$1 WebView" ], l ], [ /((?:oculus|samsung)browser)\/([\w\.]+)/i ], [ [ o, /(.+(?:g|us))(.+)/, "$1 $2" ], l ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i ], [ l, [ o, "Android Browser" ] ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i ], [ o, l ], [ /(dolfin)\/([\w\.]+)/i ], [ [ o, "Dolphin" ], l ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ o, "Chrome" ], l ], [ /(coast)\/([\w\.]+)/i ], [ [ o, "Opera Coast" ], l ], [ /fxios\/([\w\.-]+)/i ], [ l, [ o, "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ l, [ o, "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ l, o ], [ /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ [ o, "GSA" ], l ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ o, [ l, f.str, d.browser.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ o, l ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ o, "Netscape" ], l ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ o, l ] ],
                cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ "architecture", "amd64" ] ], [ /(ia32(?=;))/i ], [ [ "architecture", c.lowerize ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ "architecture", "ia32" ] ], [ /windows\s(ce|mobile);\sppc;/i ], [ [ "architecture", "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ "architecture", /ower/, "", c.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ "architecture", "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ "architecture", c.lowerize ] ] ],
                device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ i, a, [ s, h ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ i, [ a, "Apple" ], [ s, h ] ], [ /(apple\s{0,1}tv)/i ], [ [ i, "Apple TV" ], [ a, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ a, i, [ s, h ] ], [ /(kf[A-z]+)\sbuild\/.+silk\//i ], [ i, [ a, "Amazon" ], [ s, h ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i ], [ [ i, f.str, d.device.amazon.model ], [ a, "Amazon" ], [ s, u ] ], [ /android.+aft([bms])\sbuild/i ], [ i, [ a, "Amazon" ], [ s, "smarttv" ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ i, a, [ s, u ] ], [ /\((ip[honed|\s\w*]+);/i ], [ i, [ a, "Apple" ], [ s, u ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ a, i, [ s, u ] ], [ /\(bb10;\s(\w+)/i ], [ i, [ a, "BlackBerry" ], [ s, u ] ], [ /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i ], [ i, [ a, "Asus" ], [ s, h ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i ], [ [ a, "Sony" ], [ i, "Xperia Tablet" ], [ s, h ] ], [ /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i ], [ i, [ a, "Sony" ], [ s, u ] ], [ /\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i ], [ a, i, [ s, "console" ] ], [ /android.+;\s(shield)\sbuild/i ], [ i, [ a, "Nvidia" ], [ s, "console" ] ], [ /(playstation\s[34portablevi]+)/i ], [ i, [ a, "Sony" ], [ s, "console" ] ], [ /(sprint\s(\w+))/i ], [ [ a, f.str, d.device.sprint.vendor ], [ i, f.str, d.device.sprint.model ], [ s, u ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ a, i, [ s, h ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i ], [ a, [ i, /_/g, " " ], [ s, u ] ], [ /(nexus\s9)/i ], [ i, [ a, "HTC" ], [ s, h ] ], [ /d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i ], [ i, [ a, "Huawei" ], [ s, u ] ], [ /(microsoft);\s(lumia[\s\w]+)/i ], [ a, i, [ s, u ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ i, [ a, "Microsoft" ], [ s, "console" ] ], [ /(kin\.[onetw]{3})/i ], [ [ i, /\./g, " " ], [ a, "Microsoft" ], [ s, u ] ], [ /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i ], [ i, [ a, "Motorola" ], [ s, u ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ i, [ a, "Motorola" ], [ s, h ] ], [ /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i ], [ [ a, c.trim ], [ i, c.trim ], [ s, "smarttv" ] ], [ /hbbtv.+maple;(\d+)/i ], [ [ i, /^/, "SmartTV" ], [ a, "Samsung" ], [ s, "smarttv" ] ], [ /\(dtv[\);].+(aquos)/i ], [ i, [ a, "Sharp" ], [ s, "smarttv" ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ a, "Samsung" ], i, [ s, h ] ], [ /smart-tv.+(samsung)/i ], [ a, [ s, "smarttv" ], i ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i ], [ [ a, "Samsung" ], i, [ s, u ] ], [ /sie-(\w*)/i ], [ i, [ a, "Siemens" ], [ s, u ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i ], [ [ a, "Nokia" ], i, [ s, u ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ i, [ a, "Acer" ], [ s, h ] ], [ /android.+([vl]k\-?\d{3})\s+build/i ], [ i, [ a, "LG" ], [ s, h ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ a, "LG" ], i, [ s, h ] ], [ /(lg) netcast\.tv/i ], [ a, i, [ s, "smarttv" ] ], [ /(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i ], [ i, [ a, "LG" ], [ s, u ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ i, [ a, "Lenovo" ], [ s, h ] ], [ /linux;.+((jolla));/i ], [ a, i, [ s, u ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ a, i, [ s, "wearable" ] ], [ /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i ], [ a, i, [ s, u ] ], [ /crkey/i ], [ [ i, "Chromecast" ], [ a, "Google" ] ], [ /android.+;\s(glass)\s\d/i ], [ i, [ a, "Google" ], [ s, "wearable" ] ], [ /android.+;\s(pixel c)[\s)]/i ], [ i, [ a, "Google" ], [ s, h ] ], [ /android.+;\s(pixel( [23])?( xl)?)\s/i ], [ i, [ a, "Google" ], [ s, u ] ], [ /android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i ], [ [ i, /_/g, " " ], [ a, "Xiaomi" ], [ s, u ] ], [ /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i ], [ [ i, /_/g, " " ], [ a, "Xiaomi" ], [ s, h ] ], [ /android.+;\s(m[1-5]\snote)\sbuild/i ], [ i, [ a, "Meizu" ], [ s, h ] ], [ /(mz)-([\w-]{2,})/i ], [ [ a, "Meizu" ], i, [ s, u ] ], [ /android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i ], [ i, [ a, "OnePlus" ], [ s, u ] ], [ /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i ], [ i, [ a, "RCA" ], [ s, h ] ], [ /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i ], [ i, [ a, "Dell" ], [ s, h ] ], [ /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i ], [ i, [ a, "Verizon" ], [ s, h ] ], [ /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i ], [ [ a, "Barnes & Noble" ], i, [ s, h ] ], [ /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i ], [ i, [ a, "NuVision" ], [ s, h ] ], [ /android.+;\s(k88)\sbuild/i ], [ i, [ a, "ZTE" ], [ s, h ] ], [ /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i ], [ i, [ a, "Swiss" ], [ s, u ] ], [ /android.+[;\/]\s*(zur\d{3})\s+build/i ], [ i, [ a, "Swiss" ], [ s, h ] ], [ /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i ], [ i, [ a, "Zeki" ], [ s, h ] ], [ /(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i ], [ [ a, "Dragon Touch" ], i, [ s, h ] ], [ /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i ], [ i, [ a, "Insignia" ], [ s, h ] ], [ /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i ], [ i, [ a, "NextBook" ], [ s, h ] ], [ /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i ], [ [ a, "Voice" ], i, [ s, u ] ], [ /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i ], [ [ a, "LvTel" ], i, [ s, u ] ], [ /android.+;\s(PH-1)\s/i ], [ i, [ a, "Essential" ], [ s, u ] ], [ /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i ], [ i, [ a, "Envizen" ], [ s, h ] ], [ /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i ], [ a, i, [ s, h ] ], [ /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i ], [ i, [ a, "MachSpeed" ], [ s, h ] ], [ /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i ], [ a, i, [ s, h ] ], [ /android.+[;\/]\s*TU_(1491)\s+build/i ], [ i, [ a, "Rotor" ], [ s, h ] ], [ /android.+(KS(.+))\s+build/i ], [ i, [ a, "Amazon" ], [ s, h ] ], [ /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i ], [ a, i, [ s, h ] ], [ /\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i ], [ [ s, c.lowerize ], a, i ], [ /(android[\w\.\s\-]{0,9});.+build/i ], [ i, [ a, "Generic" ] ] ],
                engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ l, [ o, "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ o, l ], [ /rv\:([\w\.]{1,9}).+(gecko)/i ], [ l, o ] ],
                os: [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ o, l ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ o, [ l, f.str, d.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ o, "Windows" ], [ l, f.str, d.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ o, "BlackBerry" ], l ], [ /(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i ], [ o, l ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i ], [ [ o, "Symbian" ], l ], [ /\((series40);/i ], [ o ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ o, "Firefox OS" ], l ], [ /(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i ], [ o, l ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ o, "Chromium OS" ], l ], [ /(sunos)\s?([\w\.\d]*)/i ], [ [ o, "Solaris" ], l ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i ], [ o, l ], [ /(haiku)\s(\w+)/i ], [ o, l ], [ /cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i ], [ [ l, /_/g, "." ], [ o, "iOS" ] ], [ /(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ o, "Mac OS" ], [ l, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i ], [ o, l ] ]
            }, g = function(e, t) {
                if ("object" == typeof e && (t = e, e = void 0), !(this instanceof g)) return new g(e, t).getResult();
                var r = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""), i = t ? c.extend(p, t) : p;
                return this.getBrowser = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, r, i.browser), e.major = c.major(e.version), e;
                }, this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return f.rgx.call(e, r, i.cpu), e;
                }, this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return f.rgx.call(e, r, i.device), e;
                }, this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, r, i.engine), e;
                }, this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, r, i.os), e;
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    };
                }, this.getUA = function() {
                    return r;
                }, this.setUA = function(e) {
                    return r = e, this;
                }, this;
            };
            g.VERSION = "0.7.19", g.BROWSER = {
                NAME: o,
                MAJOR: "major",
                VERSION: l
            }, g.CPU = {
                ARCHITECTURE: "architecture"
            }, g.DEVICE = {
                MODEL: i,
                VENDOR: a,
                TYPE: s,
                CONSOLE: "console",
                MOBILE: u,
                SMARTTV: "smarttv",
                TABLET: h,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            }, g.ENGINE = {
                NAME: o,
                VERSION: l
            }, g.OS = {
                NAME: o,
                VERSION: l
            }, e.exports && (t = e.exports = g), t.UAParser = g;
            var m = n && (n.jQuery || n.Zepto);
            if (void 0 !== m && !m.ua) {
                var y = new g();
                m.ua = y.getResult(), m.ua.get = function() {
                    return y.getUA();
                }, m.ua.set = function(e) {
                    y.setUA(e);
                    var t = y.getResult();
                    for (var n in t) m.ua[n] = t[n];
                };
            }
        }("object" == typeof window ? window : b);
    });
    D.UAParser;
    const Y = {
        _activity(e, t) {
            let n = Object.assign({
                common: {
                    session_id: this._sessionId,
                    test_id: this._abTests.map(function(e) {
                        return e.test_id;
                    }).join(","),
                    test_group_id: this._abTests.map(function(e) {
                        return e.test_group_id;
                    }).join(","),
                    error_state: this._errorState
                }
            }, t), r = {
                type: 5,
                subtype: e,
                time: Date.now()
            };
            this.sendEvent({
                event: r,
                activity: n
            });
        },
        activity: {
            click: 1,
            view: 2,
            ipm: 3
        },
        heartbeat(e) {
            let t = {
                uptime: e
            }, n = {
                type: 2,
                subtype: 1,
                time: Date.now()
            };
            this.sendEvent({
                event: n,
                heartbeat: t
            });
        }
    };
    var H = {
        bind: function(e) {
            let t = {};
            for (let n in Y) if (n.startsWith("_") || "function" != typeof Y[n]) {
                if ("object" == typeof Y[n]) {
                    t[n] = {};
                    for (let r in Y[n]) t[n][r] = Y["_" + n].bind(e, Y[n][r]);
                }
            } else t[n] = Y[n].bind(e);
            return t;
        }
    };
    const {browserNameToEnum: q, platformNameToEnum: $, cpuToEnum: W} = {
        browserNameToEnum: function(e) {
            return "avast secure browser" === (e = e.toLowerCase()) || "avg secure browser" === e ? 2 : e.includes("chrome") ? 3 : e.includes("firefox") ? 4 : e.includes("safari") ? 5 : e.includes("edge") ? 6 : e.includes("opera") ? 7 : "ie" === e ? 8 : "ucbrowser" === e ? 11 : "yandex" === e ? 12 : "coc coc" === e ? 13 : "chromium" === e ? 14 : "vivaldi" === e ? 15 : 1;
        },
        platformNameToEnum: function(e) {
            return e ? e.startsWith("Win") ? 1 : e.startsWith("Mac") ? 2 : e.startsWith("iP") ? 3 : e.toLowerCase().startsWith("android") ? 5 : 4 : 5;
        },
        cpuToEnum: function(e) {
            return "arm" === e ? 3 : "arm64" === e ? 4 : "amd64" === e || "ia64" === e ? 2 : "ia32" === e ? 2 : 5;
        }
    }, K = 5e3, G = 500;
    class Z extends U {
        constructor(e, t, n) {
            super(), this._localStorage = n.localStorage || localStorage, this._retries = 0, 
            this._url = e, this._adapter = t, this._options = n, this._flushInterval = null, 
            this._eventsCache = {}, this._storageKey = n.storageKey || "records", this._sessionId = n.session_id || Z.createSessionId(), 
            this._errorState = 0, this._abTests = [], this.send = H.bind(this), this._loadEvents().then(e => {
                [ ...Object.keys(e), ...Object.keys(this._eventsCache) ].forEach(t => this._eventsCache[t] = [ ...e[t] || [], ...this._eventsCache[t] || [] ]), 
                this.flush(), this._flushInterval = setInterval(() => {
                    this.flush();
                }, n.batchTimeoutMs || K), this.emit(Z.Event.INITIALIZED);
            });
        }
        updateIdentity(e) {
            return this._updateOptions("identity", e);
        }
        updateProduct(e) {
            return this._updateOptions("product", e);
        }
        updateGeo(e) {
            return this._updateOptions("geo", e);
        }
        updateInstallation(e) {
            return this._updateOptions("installation", e);
        }
        updateLicense(e) {
            return this._updateOptions("license", e);
        }
        updateShepherd(e) {
            return this._updateOptions("shepherd", e);
        }
        get hasPendingEvents() {
            return Object.keys(this._eventsCache).some(e => 0 !== this._eventsCache[e].length);
        }
        static createSessionId() {
            return function(e) {
                for (var t = ""; e-- > 0; ) t += Math.floor(16 * Math.random()).toString(16);
                return t;
            }(24);
        }
        setSessionId(e) {
            return this._sessionId = e, this;
        }
        setErrorState(e) {
            return this._errorState = e, this;
        }
        setHTTPErrorState(e) {
            let t = e;
            return 0 == e ? t = -1 : e < 400 && (t = 0), this.setErrorState(t), this;
        }
        setABTest(e, t) {
            let n = this._abTests.find(function(t) {
                return t.test_id === e;
            });
            return n ? n.test_group_id = t : (this._abTests.push({
                test_id: e,
                test_group_id: t
            }), this._abTests.sort(function(e, t) {
                return e.test_id < t.test_id ? -1 : e.test_id > t.test_id ? 1 : 0;
            })), this;
        }
        setABTests(e) {
            if (!Array.isArray(e) || e.some(e => "string" != typeof e.test_id || "string" != typeof e.test_group_id)) throw new Error("Invalid parameter:", JSON.stringify(e, null, 2));
            return this._abTests = e, this._abTests.sort(function(e, t) {
                return e.test_id < t.test_id ? -1 : e.test_id > t.test_id ? 1 : 0;
            }), this;
        }
        sendEvent(e) {
            const t = Object.assign({}, e);
            if (t.event && void 0 !== t.event.type) if (1 !== t.event.type) this._eventsCache[t.event.type] || (this._eventsCache[t.event.type] = []), 
            this._eventsCache[t.event.type].push(t), this._flushInterval && this._localStorage.setItem(this._storageKey, JSON.stringify(this._eventsCache)), 
            this._eventsCache[t.event.type].length < (this._options.batchSizeLimit || G) || this.flush({
                type: t.event.type
            }); else try {
                fetch(this._url, this._adapter({
                    record: [ this._updateRecord(t) ],
                    common: {
                        send_time: Date.now()
                    }
                }));
            } catch (e) {
                console.error(e);
            } else console.error("missing event.type at " + JSON.stringify(t));
        }
        flush(e) {
            if (e && void 0 !== e.type && 0 == this._eventsCache[e.type].length || !this.hasPendingEvents) return Promise.resolve(null);
            if (e && e.doNotVerify) if (void 0 !== e.type) {
                let t = Object.assign({}, this._eventsCache);
                delete t[e.type], this._localStorage.setItem(this._storageKey, JSON.stringify(t));
            } else this._localStorage.setItem(this._storageKey, "{}");
            const t = e && "undefined" !== e.type ? [ e.type ] : Object.keys(this._eventsCache);
            return Promise.all(t.map(e => {
                try {
                    let t = {
                        record: this._eventsCache[e].map(this._updateRecord.bind(this)),
                        common: {
                            send_time: Date.now()
                        }
                    };
                    const n = this._adapter(t);
                    return fetch(this._url, n).then(t => t.status >= 400 && t.status < 500 || ++this._retries >= (this._options.maxRetries || 3) ? (this._clearEvents(e), 
                    t.text().then(e => "Data rejected: " + t.status + " " + t.statusText + "\n" + e)) : t.status >= 500 ? "Burger failure: " + t.status + " " + t.statusText : (this._clearEvents(e), 
                    this.emit(Z.Event.FLUSHED), null)).catch(e => this._options.ignoreNetworkErrors ? (this._retries = 0, 
                    null) : e);
                } catch (t) {
                    return console.error(t), this._clearEvents(e), Promise.resolve(t);
                }
            })).then(e => {
                if (1 == e.length) return e[0];
                const t = e.filter(e => null !== e);
                return t.length > 0 ? t.join(", ") : null;
            });
        }
        _updateOptions(e, t) {
            for (var n in t) void 0 === t[n] ? this._options[e] && delete this._options[e][n] : (this._options[e] || (this._options[e] = {}), 
            this._options[e][n] = t[n]);
            return this;
        }
        _updateRecord(e) {
            if (this._options.identity && (e.identity = this._options.identity), this._options.product && (e.product = this._options.product), 
            this._options.platform && (e.platform = this._options.platform), this._options.license && (e.license = this._options.license), 
            this._options.installation && (e.installation = this._options.installation), this._options.shepherd && (e.shepherd = this._options.shepherd), 
            this._options.geo && (e.geo = this._options.geo), "undefined" != typeof navigator && navigator.userAgent) {
                let t = D(navigator.userAgent);
                e.browser = {
                    browser: q(t.browser.name),
                    version: t.browser.version
                }, navigator.language && (e.browser.lang = navigator.language);
            }
            if ("undefined" != typeof navigator && (e.platform = {
                os: $(navigator.platform),
                time_zone: -new Date().getTimezoneOffset()
            }, navigator.userAgent)) {
                let t = D(navigator.userAgent);
                e.platform.version = t.os.version, e.platform.architecture = W(t.cpu.architecture);
            }
            return e;
        }
        _loadEvents() {
            return Promise.resolve(this._localStorage.getItem(this._storageKey)).then(e => e ? JSON.parse(e) : {}).then(e => Array.isArray(e) || "object" != typeof e ? {} : e).catch(() => (this._localStorage.setItem(this._storageKey, "{}"), 
            {}));
        }
        _clearEvents(e) {
            this._retries = 0, void 0 === e ? this._eventsCache = {} : delete this._eventsCache[e], 
            !this._flushInterval || this._options && this._options.doNotVerify || this._localStorage.setItem(this._storageKey, JSON.stringify(this._eventsCache));
        }
    }
    Z.Event = {
        INITIALIZED: "initialized",
        FLUSHED: "flushed"
    };
    var J = Z, X = _(function(e) {
        var t, n;
        t = b, n = function() {
            function e(e, t, n) {
                this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
            }
            function t(e) {
                return !0 === (e && e.__isLong__);
            }
            e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
                value: !0,
                enumerable: !1,
                configurable: !1
            }), e.isLong = t;
            var n = {}, r = {};
            function i(e, t) {
                var i, o, a;
                return t ? (a = 0 <= (e >>>= 0) && e < 256) && (o = r[e]) ? o : (i = s(e, (0 | e) < 0 ? -1 : 0, !0), 
                a && (r[e] = i), i) : (a = -128 <= (e |= 0) && e < 128) && (o = n[e]) ? o : (i = s(e, e < 0 ? -1 : 0, !1), 
                a && (n[e] = i), i);
            }
            function o(e, t) {
                if (isNaN(e) || !isFinite(e)) return t ? g : p;
                if (t) {
                    if (e < 0) return g;
                    if (e >= c) return w;
                } else {
                    if (e <= -f) return _;
                    if (e + 1 >= f) return b;
                }
                return e < 0 ? o(-e, t).neg() : s(e % h | 0, e / h | 0, t);
            }
            function s(t, n, r) {
                return new e(t, n, r);
            }
            e.fromInt = i, e.fromNumber = o, e.fromBits = s;
            var a = Math.pow;
            function l(e, t, n) {
                if (0 === e.length) throw Error("empty string");
                if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return p;
                if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                var r;
                if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
                if (0 === r) return l(e.substring(1), t, n).neg();
                for (var i = o(a(n, 8)), s = p, u = 0; u < e.length; u += 8) {
                    var h = Math.min(8, e.length - u), c = parseInt(e.substring(u, u + h), n);
                    if (h < 8) {
                        var f = o(a(n, h));
                        s = s.mul(f).add(o(c));
                    } else s = (s = s.mul(i)).add(o(c));
                }
                return s.unsigned = t, s;
            }
            function u(t) {
                return t instanceof e ? t : "number" == typeof t ? o(t) : "string" == typeof t ? l(t) : s(t.low, t.high, t.unsigned);
            }
            e.fromString = l, e.fromValue = u;
            var h = 4294967296, c = h * h, f = c / 2, d = i(1 << 24), p = i(0);
            e.ZERO = p;
            var g = i(0, !0);
            e.UZERO = g;
            var m = i(1);
            e.ONE = m;
            var y = i(1, !0);
            e.UONE = y;
            var v = i(-1);
            e.NEG_ONE = v;
            var b = s(-1, 2147483647, !1);
            e.MAX_VALUE = b;
            var w = s(-1, -1, !0);
            e.MAX_UNSIGNED_VALUE = w;
            var _ = s(0, -2147483648, !1);
            e.MIN_VALUE = _;
            var E = e.prototype;
            return E.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low;
            }, E.toNumber = function() {
                return this.unsigned ? (this.high >>> 0) * h + (this.low >>> 0) : this.high * h + (this.low >>> 0);
            }, E.toString = function(e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                    if (this.eq(_)) {
                        var t = o(e), n = this.div(t), r = n.mul(t).sub(this);
                        return n.toString(e) + r.toInt().toString(e);
                    }
                    return "-" + this.neg().toString(e);
                }
                for (var i = o(a(e, 6), this.unsigned), s = this, l = ""; ;) {
                    var u = s.div(i), h = (s.sub(u.mul(i)).toInt() >>> 0).toString(e);
                    if ((s = u).isZero()) return h + l;
                    for (;h.length < 6; ) h = "0" + h;
                    l = "" + h + l;
                }
            }, E.getHighBits = function() {
                return this.high;
            }, E.getHighBitsUnsigned = function() {
                return this.high >>> 0;
            }, E.getLowBits = function() {
                return this.low;
            }, E.getLowBitsUnsigned = function() {
                return this.low >>> 0;
            }, E.getNumBitsAbs = function() {
                if (this.isNegative()) return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
                for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--) ;
                return 0 != this.high ? t + 33 : t + 1;
            }, E.isZero = function() {
                return 0 === this.high && 0 === this.low;
            }, E.isNegative = function() {
                return !this.unsigned && this.high < 0;
            }, E.isPositive = function() {
                return this.unsigned || this.high >= 0;
            }, E.isOdd = function() {
                return 1 == (1 & this.low);
            }, E.isEven = function() {
                return 0 == (1 & this.low);
            }, E.equals = function(e) {
                return t(e) || (e = u(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
            }, E.eq = E.equals, E.notEquals = function(e) {
                return !this.eq(e);
            }, E.neq = E.notEquals, E.lessThan = function(e) {
                return this.comp(e) < 0;
            }, E.lt = E.lessThan, E.lessThanOrEqual = function(e) {
                return this.comp(e) <= 0;
            }, E.lte = E.lessThanOrEqual, E.greaterThan = function(e) {
                return this.comp(e) > 0;
            }, E.gt = E.greaterThan, E.greaterThanOrEqual = function(e) {
                return this.comp(e) >= 0;
            }, E.gte = E.greaterThanOrEqual, E.compare = function(e) {
                if (t(e) || (e = u(e)), this.eq(e)) return 0;
                var n = this.isNegative(), r = e.isNegative();
                return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
            }, E.comp = E.compare, E.negate = function() {
                return !this.unsigned && this.eq(_) ? _ : this.not().add(m);
            }, E.neg = E.negate, E.add = function(e) {
                t(e) || (e = u(e));
                var n = this.high >>> 16, r = 65535 & this.high, i = this.low >>> 16, o = 65535 & this.low, a = e.high >>> 16, l = 65535 & e.high, h = e.low >>> 16, c = 0, f = 0, d = 0, p = 0;
                return d += (p += o + (65535 & e.low)) >>> 16, f += (d += i + h) >>> 16, c += (f += r + l) >>> 16, 
                c += n + a, s((d &= 65535) << 16 | (p &= 65535), (c &= 65535) << 16 | (f &= 65535), this.unsigned);
            }, E.subtract = function(e) {
                return t(e) || (e = u(e)), this.add(e.neg());
            }, E.sub = E.subtract, E.multiply = function(e) {
                if (this.isZero()) return p;
                if (t(e) || (e = u(e)), e.isZero()) return p;
                if (this.eq(_)) return e.isOdd() ? _ : p;
                if (e.eq(_)) return this.isOdd() ? _ : p;
                if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(d) && e.lt(d)) return o(this.toNumber() * e.toNumber(), this.unsigned);
                var n = this.high >>> 16, r = 65535 & this.high, i = this.low >>> 16, a = 65535 & this.low, l = e.high >>> 16, h = 65535 & e.high, c = e.low >>> 16, f = 65535 & e.low, g = 0, m = 0, y = 0, v = 0;
                return y += (v += a * f) >>> 16, m += (y += i * f) >>> 16, y &= 65535, m += (y += a * c) >>> 16, 
                g += (m += r * f) >>> 16, m &= 65535, g += (m += i * c) >>> 16, m &= 65535, g += (m += a * h) >>> 16, 
                g += n * f + r * c + i * h + a * l, s((y &= 65535) << 16 | (v &= 65535), (g &= 65535) << 16 | (m &= 65535), this.unsigned);
            }, E.mul = E.multiply, E.divide = function(e) {
                if (t(e) || (e = u(e)), e.isZero()) throw Error("division by zero");
                if (this.isZero()) return this.unsigned ? g : p;
                var n, r, i;
                if (this.unsigned) {
                    if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return g;
                    if (e.gt(this.shru(1))) return y;
                    i = g;
                } else {
                    if (this.eq(_)) return e.eq(m) || e.eq(v) ? _ : e.eq(_) ? m : (n = this.shr(1).div(e).shl(1)).eq(p) ? e.isNegative() ? m : v : (r = this.sub(e.mul(n)), 
                    i = n.add(r.div(e)));
                    if (e.eq(_)) return this.unsigned ? g : p;
                    if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                    if (e.isNegative()) return this.div(e.neg()).neg();
                    i = p;
                }
                for (r = this; r.gte(e); ) {
                    n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
                    for (var s = Math.ceil(Math.log(n) / Math.LN2), l = s <= 48 ? 1 : a(2, s - 48), h = o(n), c = h.mul(e); c.isNegative() || c.gt(r); ) c = (h = o(n -= l, this.unsigned)).mul(e);
                    h.isZero() && (h = m), i = i.add(h), r = r.sub(c);
                }
                return i;
            }, E.div = E.divide, E.modulo = function(e) {
                return t(e) || (e = u(e)), this.sub(this.div(e).mul(e));
            }, E.mod = E.modulo, E.not = function() {
                return s(~this.low, ~this.high, this.unsigned);
            }, E.and = function(e) {
                return t(e) || (e = u(e)), s(this.low & e.low, this.high & e.high, this.unsigned);
            }, E.or = function(e) {
                return t(e) || (e = u(e)), s(this.low | e.low, this.high | e.high, this.unsigned);
            }, E.xor = function(e) {
                return t(e) || (e = u(e)), s(this.low ^ e.low, this.high ^ e.high, this.unsigned);
            }, E.shiftLeft = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : s(0, this.low << e - 32, this.unsigned);
            }, E.shl = E.shiftLeft, E.shiftRight = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : s(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
            }, E.shr = E.shiftRight, E.shiftRightUnsigned = function(e) {
                if (t(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
                var n = this.high;
                return e < 32 ? s(this.low >>> e | n << 32 - e, n >>> e, this.unsigned) : s(32 === e ? n : n >>> e - 32, 0, this.unsigned);
            }, E.shru = E.shiftRightUnsigned, E.toSigned = function() {
                return this.unsigned ? s(this.low, this.high, !1) : this;
            }, E.toUnsigned = function() {
                return this.unsigned ? this : s(this.low, this.high, !0);
            }, E.toBytes = function(e) {
                return e ? this.toBytesLE() : this.toBytesBE();
            }, E.toBytesLE = function() {
                var e = this.high, t = this.low;
                return [ 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255 ];
            }, E.toBytesBE = function() {
                var e = this.high, t = this.low;
                return [ e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t ];
            }, e;
        }, e && e.exports ? e.exports = n() : (t.dcodeIO = t.dcodeIO || {}).Long = n();
    }), Q = _(function(e) {
        var t, n;
        t = b, n = function(e) {
            var t = function(e, n, i) {
                if (void 0 === e && (e = t.DEFAULT_CAPACITY), void 0 === n && (n = t.DEFAULT_ENDIAN), 
                void 0 === i && (i = t.DEFAULT_NOASSERT), !i) {
                    if ((e |= 0) < 0) throw RangeError("Illegal capacity");
                    n = !!n, i = !!i;
                }
                this.buffer = 0 === e ? r : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), 
                this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = n, 
                this.noAssert = i;
            };
            t.VERSION = "5.0.1", t.LITTLE_ENDIAN = !0, t.BIG_ENDIAN = !1, t.DEFAULT_CAPACITY = 16, 
            t.DEFAULT_ENDIAN = t.BIG_ENDIAN, t.DEFAULT_NOASSERT = !1, t.Long = e || null;
            var n = t.prototype;
            n.__isByteBuffer__, Object.defineProperty(n, "__isByteBuffer__", {
                value: !0,
                enumerable: !1,
                configurable: !1
            });
            var r = new ArrayBuffer(0), i = String.fromCharCode;
            function o(e) {
                var t = 0;
                return function() {
                    return t < e.length ? e.charCodeAt(t++) : null;
                };
            }
            function s() {
                var e = [], t = [];
                return function() {
                    if (0 === arguments.length) return t.join("") + i.apply(String, e);
                    e.length + arguments.length > 1024 && (t.push(i.apply(String, e)), e.length = 0), 
                    Array.prototype.push.apply(e, arguments);
                };
            }
            function a(e, t, n, r, i) {
                var o, s, a = 8 * i - r - 1, l = (1 << a) - 1, u = l >> 1, h = -7, c = n ? i - 1 : 0, f = n ? -1 : 1, d = e[t + c];
                for (c += f, o = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; o = 256 * o + e[t + c], 
                c += f, h -= 8) ;
                for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + e[t + c], c += f, 
                h -= 8) ;
                if (0 === o) o = 1 - u; else {
                    if (o === l) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                    s += Math.pow(2, r), o -= u;
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - r);
            }
            function l(e, t, n, r, i, o) {
                var s, a, l, u = 8 * o - i - 1, h = (1 << u) - 1, c = h >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t) / Math.LN2), 
                t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (s++, 
                l /= 2), s + c >= h ? (a = 0, s = h) : s + c >= 1 ? (a = (t * l - 1) * Math.pow(2, i), 
                s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, 
                d += p, a /= 256, i -= 8) ;
                for (s = s << i | a, u += i; u > 0; e[n + d] = 255 & s, d += p, s /= 256, u -= 8) ;
                e[n + d - p] |= 128 * g;
            }
            t.accessor = function() {
                return Uint8Array;
            }, t.allocate = function(e, n, r) {
                return new t(e, n, r);
            }, t.concat = function(e, n, r, i) {
                "boolean" != typeof n && "string" == typeof n || (i = r, r = n, n = void 0);
                for (var o, s = 0, a = 0, l = e.length; a < l; ++a) t.isByteBuffer(e[a]) || (e[a] = t.wrap(e[a], n)), 
                (o = e[a].limit - e[a].offset) > 0 && (s += o);
                if (0 === s) return new t(0, r, i);
                var u, h = new t(s, r, i);
                for (a = 0; a < l; ) (o = (u = e[a++]).limit - u.offset) <= 0 || (h.view.set(u.view.subarray(u.offset, u.limit), h.offset), 
                h.offset += o);
                return h.limit = h.offset, h.offset = 0, h;
            }, t.isByteBuffer = function(e) {
                return !0 === (e && e.__isByteBuffer__);
            }, t.type = function() {
                return ArrayBuffer;
            }, t.wrap = function(e, r, i, o) {
                if ("string" != typeof r && (o = i, i = r, r = void 0), "string" == typeof e) switch (void 0 === r && (r = "utf8"), 
                r) {
                  case "base64":
                    return t.fromBase64(e, i);

                  case "hex":
                    return t.fromHex(e, i);

                  case "binary":
                    return t.fromBinary(e, i);

                  case "utf8":
                    return t.fromUTF8(e, i);

                  case "debug":
                    return t.fromDebug(e, i);

                  default:
                    throw Error("Unsupported encoding: " + r);
                }
                if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
                var s;
                if (t.isByteBuffer(e)) return (s = n.clone.call(e)).markedOffset = -1, s;
                if (e instanceof Uint8Array) s = new t(0, i, o), e.length > 0 && (s.buffer = e.buffer, 
                s.offset = e.byteOffset, s.limit = e.byteOffset + e.byteLength, s.view = new Uint8Array(e.buffer)); else if (e instanceof ArrayBuffer) s = new t(0, i, o), 
                e.byteLength > 0 && (s.buffer = e, s.offset = 0, s.limit = e.byteLength, s.view = e.byteLength > 0 ? new Uint8Array(e) : null); else {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                    (s = new t(e.length, i, o)).limit = e.length;
                    for (var a = 0; a < e.length; ++a) s.view[a] = e[a];
                }
                return s;
            }, n.writeBitSet = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                var r, i = t, o = e.length, s = o >> 3, a = 0;
                for (t += this.writeVarint32(o, t); s--; ) r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, 
                this.writeByte(r, t++);
                if (a < o) {
                    var l = 0;
                    for (r = 0; a < o; ) r |= (1 & !!e[a++]) << l++;
                    this.writeByte(r, t++);
                }
                return n ? (this.offset = t, this) : t - i;
            }, n.readBitSet = function(e) {
                var t = void 0 === e;
                t && (e = this.offset);
                var n, r = this.readVarint32(e), i = r.value, o = i >> 3, s = 0, a = [];
                for (e += r.length; o--; ) n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), 
                a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), 
                a[s++] = !!(64 & n), a[s++] = !!(128 & n);
                if (s < i) {
                    var l = 0;
                    for (n = this.readByte(e++); s < i; ) a[s++] = !!(n >> l++ & 1);
                }
                return t && (this.offset = e), a;
            }, n.readBytes = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength);
                }
                var r = this.slice(t, t + e);
                return n && (this.offset += e), r;
            }, n.writeBytes = n.append, n.writeInt8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), 
                this;
            }, n.writeByte = n.writeInt8, n.readInt8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                }
                var n = this.view[e];
                return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n;
            }, n.readByte = n.readInt8, n.writeUint8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), 
                this;
            }, n.writeUInt8 = n.writeUint8, n.readUint8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                }
                var n = this.view[e];
                return t && (this.offset += 1), n;
            }, n.readUInt8 = n.readUint8, n.writeInt16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, 
                this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), 
                n && (this.offset += 2), this;
            }, n.writeShort = n.writeInt16, n.readInt16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, 
                n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), 
                n;
            }, n.readShort = n.readInt16, n.writeUint16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, 
                this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), 
                n && (this.offset += 2), this;
            }, n.writeUInt16 = n.writeUint16, n.readUint16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, 
                n |= this.view[e + 1]), t && (this.offset += 2), n;
            }, n.readUInt16 = n.readUint16, n.writeInt32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, 
                this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
                this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), 
                n && (this.offset += 4), this;
            }, n.writeInt = n.writeInt32, n.readInt32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
                n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
                n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), 
                n |= 0, t && (this.offset += 4), n;
            }, n.readInt = n.readInt32, n.writeUint32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, 
                this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
                this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), 
                n && (this.offset += 4), this;
            }, n.writeUInt32 = n.writeUint32, n.readUint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
                n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
                n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), 
                t && (this.offset += 4), n;
            }, n.readUInt32 = n.readUint32, e && (n.writeInt64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                    if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                    if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                    if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), 
                n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low, s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, 
                this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, 
                this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, 
                this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, 
                n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, 
                this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
            }, n.writeLong = n.writeInt64, n.readInt64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
                }
                var r = 0, i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], 
                r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
                i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
                i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
                t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], 
                r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !1);
                return n && (this.offset += 8), o;
            }, n.readLong = n.readInt64, n.writeUint64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                    if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                    if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                    if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), 
                n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low, s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, 
                this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, 
                this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, 
                this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, 
                n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, 
                this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
            }, n.writeUInt64 = n.writeUint64, n.readUint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
                }
                var r = 0, i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], 
                r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
                i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
                i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
                t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], 
                r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !0);
                return n && (this.offset += 8), o;
            }, n.readUInt64 = n.readUint64), n.writeFloat32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, l(this.view, e, t, this.littleEndian, 23, 4), 
                n && (this.offset += 4), this;
            }, n.writeFloat = n.writeFloat32, n.readFloat32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                }
                var n = a(this.view, e, this.littleEndian, 23, 4);
                return t && (this.offset += 4), n;
            }, n.readFloat = n.readFloat32, n.writeFloat64 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                t += 8;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, l(this.view, e, t, this.littleEndian, 52, 8), 
                n && (this.offset += 8), this;
            }, n.writeDouble = n.writeFloat64, n.readFloat64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
                }
                var n = a(this.view, e, this.littleEndian, 52, 8);
                return t && (this.offset += 8), n;
            }, n.readDouble = n.readFloat64, t.MAX_VARINT32_BYTES = 5, t.calculateVarint32 = function(e) {
                return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5;
            }, t.zigZagEncode32 = function(e) {
                return ((e |= 0) << 1 ^ e >> 31) >>> 0;
            }, t.zigZagDecode32 = function(e) {
                return e >>> 1 ^ -(1 & e) | 0;
            }, n.writeVarint32 = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                    if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                }
                var i, o = t.calculateVarint32(e);
                n += o;
                var s = this.buffer.byteLength;
                for (n > s && this.resize((s *= 2) > n ? s : n), n -= o, e >>>= 0; e >= 128; ) i = 127 & e | 128, 
                this.view[n++] = i, e >>>= 7;
                return this.view[n++] = e, r ? (this.offset = n, this) : o;
            }, n.writeVarint32ZigZag = function(e, n) {
                return this.writeVarint32(t.zigZagEncode32(e), n);
            }, n.readVarint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                }
                var n, r = 0, i = 0;
                do {
                    if (!this.noAssert && e > this.limit) {
                        var o = Error("Truncated");
                        throw o.truncated = !0, o;
                    }
                    n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r;
                } while (0 != (128 & n));
                return i |= 0, t ? (this.offset = e, i) : {
                    value: i,
                    length: r
                };
            }, n.readVarint32ZigZag = function(e) {
                var n = this.readVarint32(e);
                return "object" == typeof n ? n.value = t.zigZagDecode32(n.value) : n = t.zigZagDecode32(n), 
                n;
            }, e && (t.MAX_VARINT64_BYTES = 10, t.calculateVarint64 = function(t) {
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
                var n = t.toInt() >>> 0, r = t.shiftRightUnsigned(28).toInt() >>> 0, i = t.shiftRightUnsigned(56).toInt() >>> 0;
                return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10;
            }, t.zigZagEncode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), 
                t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
            }, t.zigZagDecode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), 
                t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
            }, n.writeVarint64 = function(n, r) {
                var i = void 0 === r;
                if (i && (r = this.offset), !this.noAssert) {
                    if ("number" == typeof n) n = e.fromNumber(n); else if ("string" == typeof n) n = e.fromString(n); else if (!(n && n instanceof e)) throw TypeError("Illegal value: " + n + " (not an integer or Long)");
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
                }
                "number" == typeof n ? n = e.fromNumber(n, !1) : "string" == typeof n ? n = e.fromString(n, !1) : !1 !== n.unsigned && (n = n.toSigned());
                var o = t.calculateVarint64(n), s = n.toInt() >>> 0, a = n.shiftRightUnsigned(28).toInt() >>> 0, l = n.shiftRightUnsigned(56).toInt() >>> 0;
                r += o;
                var u = this.buffer.byteLength;
                switch (r > u && this.resize((u *= 2) > r ? u : r), r -= o, o) {
                  case 10:
                    this.view[r + 9] = l >>> 7 & 1;

                  case 9:
                    this.view[r + 8] = 9 !== o ? 128 | l : 127 & l;

                  case 8:
                    this.view[r + 7] = 8 !== o ? a >>> 21 | 128 : a >>> 21 & 127;

                  case 7:
                    this.view[r + 6] = 7 !== o ? a >>> 14 | 128 : a >>> 14 & 127;

                  case 6:
                    this.view[r + 5] = 6 !== o ? a >>> 7 | 128 : a >>> 7 & 127;

                  case 5:
                    this.view[r + 4] = 5 !== o ? 128 | a : 127 & a;

                  case 4:
                    this.view[r + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;

                  case 3:
                    this.view[r + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;

                  case 2:
                    this.view[r + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;

                  case 1:
                    this.view[r] = 1 !== o ? 128 | s : 127 & s;
                }
                return i ? (this.offset += o, this) : o;
            }, n.writeVarint64ZigZag = function(e, n) {
                return this.writeVarint64(t.zigZagEncode64(e), n);
            }, n.readVarint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
                }
                var r = t, i = 0, o = 0, s = 0, a = 0;
                if (i = 127 & (a = this.view[t++]), 128 & a && (i |= (127 & (a = this.view[t++])) << 7, 
                (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 14, 
                (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 21, 
                (128 & a || this.noAssert && void 0 === a) && (o = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 7, 
                (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 14, 
                (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 21, 
                (128 & a || this.noAssert && void 0 === a) && (s = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (s |= (127 & (a = this.view[t++])) << 7, 
                128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");
                var l = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);
                return n ? (this.offset = t, l) : {
                    value: l,
                    length: t - r
                };
            }, n.readVarint64ZigZag = function(n) {
                var r = this.readVarint64(n);
                return r && r.value instanceof e ? r.value = t.zigZagDecode64(r.value) : r = t.zigZagDecode64(r), 
                r;
            }), n.writeCString = function(e, t) {
                var n = void 0 === t;
                n && (t = this.offset);
                var r, i = e.length;
                if (!this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    for (r = 0; r < i; ++r) if (0 === e.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                i = h.calculateUTF16asUTF8(o(e))[1], t += i + 1;
                var s = this.buffer.byteLength;
                return t > s && this.resize((s *= 2) > t ? s : t), t -= i + 1, h.encodeUTF16toUTF8(o(e), function(e) {
                    this.view[t++] = e;
                }.bind(this)), this.view[t++] = 0, n ? (this.offset = t, this) : i;
            }, n.readCString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                }
                var n, r = e, i = -1;
                return h.decodeUTF8toUTF16(function() {
                    if (0 === i) return null;
                    if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                    return 0 === (i = this.view[e++]) ? null : i;
                }.bind(this), n = s(), !0), t ? (this.offset = e, n()) : {
                    string: n(),
                    length: e - r
                };
            }, n.writeIString = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                var r, i = t;
                r = h.calculateUTF16asUTF8(o(e), this.noAssert)[1], t += 4 + r;
                var s = this.buffer.byteLength;
                if (t > s && this.resize((s *= 2) > t ? s : t), t -= 4 + r, this.littleEndian ? (this.view[t + 3] = r >>> 24 & 255, 
                this.view[t + 2] = r >>> 16 & 255, this.view[t + 1] = r >>> 8 & 255, this.view[t] = 255 & r) : (this.view[t] = r >>> 24 & 255, 
                this.view[t + 1] = r >>> 16 & 255, this.view[t + 2] = r >>> 8 & 255, this.view[t + 3] = 255 & r), 
                t += 4, h.encodeUTF16toUTF8(o(e), function(e) {
                    this.view[t++] = e;
                }.bind(this)), t !== i + 4 + r) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + r));
                return n ? (this.offset = t, this) : t - i;
            }, n.readIString = function(e) {
                var n = void 0 === e;
                if (n && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                }
                var r = e, i = this.readUint32(e), o = this.readUTF8String(i, t.METRICS_BYTES, e += 4);
                return e += o.length, n ? (this.offset = e, o.string) : {
                    string: o.string,
                    length: e - r
                };
            }, t.METRICS_CHARS = "c", t.METRICS_BYTES = "b", n.writeUTF8String = function(e, t) {
                var n, r = void 0 === t;
                if (r && (t = this.offset), !this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                    if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                }
                var i = t;
                n = h.calculateUTF16asUTF8(o(e))[1], t += n;
                var s = this.buffer.byteLength;
                return t > s && this.resize((s *= 2) > t ? s : t), t -= n, h.encodeUTF16toUTF8(o(e), function(e) {
                    this.view[t++] = e;
                }.bind(this)), r ? (this.offset = t, this) : t - i;
            }, n.writeString = n.writeUTF8String, t.calculateUTF8Chars = function(e) {
                return h.calculateUTF16asUTF8(o(e))[0];
            }, t.calculateUTF8Bytes = function(e) {
                return h.calculateUTF16asUTF8(o(e))[1];
            }, t.calculateString = t.calculateUTF8Bytes, n.readUTF8String = function(e, n, r) {
                "number" == typeof n && (r = n, n = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), void 0 === n && (n = t.METRICS_CHARS), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
                }
                var o, a = 0, l = r;
                if (n === t.METRICS_CHARS) {
                    if (o = s(), h.decodeUTF8(function() {
                        return a < e && r < this.limit ? this.view[r++] : null;
                    }.bind(this), function(e) {
                        ++a, h.UTF8toUTF16(e, o);
                    }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
                    return i ? (this.offset = r, o()) : {
                        string: o(),
                        length: r - l
                    };
                }
                if (n === t.METRICS_BYTES) {
                    if (!this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength);
                    }
                    var u = r + e;
                    if (h.decodeUTF8toUTF16(function() {
                        return r < u ? this.view[r++] : null;
                    }.bind(this), o = s(), this.noAssert), r !== u) throw RangeError("Illegal range: Truncated data, " + r + " == " + u);
                    return i ? (this.offset = r, o()) : {
                        string: o(),
                        length: r - l
                    };
                }
                throw TypeError("Unsupported metrics: " + n);
            }, n.readString = n.readUTF8String, n.writeVString = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                    if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                }
                var i, s, a = n;
                i = h.calculateUTF16asUTF8(o(e), this.noAssert)[1], s = t.calculateVarint32(i), 
                n += s + i;
                var l = this.buffer.byteLength;
                if (n > l && this.resize((l *= 2) > n ? l : n), n -= s + i, n += this.writeVarint32(i, n), 
                h.encodeUTF16toUTF8(o(e), function(e) {
                    this.view[n++] = e;
                }.bind(this)), n !== a + i + s) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + s));
                return r ? (this.offset = n, this) : n - a;
            }, n.readVString = function(e) {
                var n = void 0 === e;
                if (n && (e = this.offset), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                }
                var r = e, i = this.readVarint32(e), o = this.readUTF8String(i.value, t.METRICS_BYTES, e += i.length);
                return e += o.length, n ? (this.offset = e, o.string) : {
                    string: o.string,
                    length: e - r
                };
            }, n.append = function(e, n, r) {
                "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), !this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
                }
                e instanceof t || (e = t.wrap(e, n));
                var o = e.limit - e.offset;
                if (o <= 0) return this;
                r += o;
                var s = this.buffer.byteLength;
                return r > s && this.resize((s *= 2) > r ? s : r), r -= o, this.view.set(e.view.subarray(e.offset, e.limit), r), 
                e.offset += o, i && (this.offset += o), this;
            }, n.appendTo = function(e, t) {
                return e.append(this, t), this;
            }, n.assert = function(e) {
                return this.noAssert = !e, this;
            }, n.capacity = function() {
                return this.buffer.byteLength;
            }, n.clear = function() {
                return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, 
                this;
            }, n.clone = function(e) {
                var n = new t(0, this.littleEndian, this.noAssert);
                return e ? (n.buffer = new ArrayBuffer(this.buffer.byteLength), n.view = new Uint8Array(n.buffer)) : (n.buffer = this.buffer, 
                n.view = this.view), n.offset = this.offset, n.markedOffset = this.markedOffset, 
                n.limit = this.limit, n;
            }, n.compact = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                }
                if (0 === e && t === this.buffer.byteLength) return this;
                var n = t - e;
                if (0 === n) return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), 
                this.offset = 0, this.limit = 0, this;
                var i = new ArrayBuffer(n), o = new Uint8Array(i);
                return o.set(this.view.subarray(e, t)), this.buffer = i, this.view = o, this.markedOffset >= 0 && (this.markedOffset -= e), 
                this.offset = 0, this.limit = n, this;
            }, n.copy = function(e, n) {
                if (void 0 === e && (e = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (n >>>= 0, e < 0 || e > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + n + " <= " + this.buffer.byteLength);
                }
                if (e === n) return new t(0, this.littleEndian, this.noAssert);
                var r = n - e, i = new t(r, this.littleEndian, this.noAssert);
                return i.offset = 0, i.limit = r, i.markedOffset >= 0 && (i.markedOffset -= e), 
                this.copyTo(i, 0, e, n), i;
            }, n.copyTo = function(e, n, r, i) {
                var o, s;
                if (!this.noAssert && !t.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                if (n = (s = void 0 === n) ? e.offset : 0 | n, r = (o = void 0 === r) ? this.offset : 0 | r, 
                i = void 0 === i ? this.limit : 0 | i, n < 0 || n > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + n + " <= " + e.buffer.byteLength);
                if (r < 0 || i > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
                var a = i - r;
                return 0 === a ? e : (e.ensureCapacity(n + a), e.view.set(this.view.subarray(r, i), n), 
                o && (this.offset += a), s && (e.offset += a), this);
            }, n.ensureCapacity = function(e) {
                var t = this.buffer.byteLength;
                return t < e ? this.resize((t *= 2) > e ? t : e) : this;
            }, n.fill = function(e, t, n) {
                var r = void 0 === t;
                if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), 
                void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                    if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
                }
                if (t >= n) return this;
                for (;t < n; ) this.view[t++] = e;
                return r && (this.offset = t), this;
            }, n.flip = function() {
                return this.limit = this.offset, this.offset = 0, this;
            }, n.mark = function(e) {
                if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                    if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
                }
                return this.markedOffset = e, this;
            }, n.order = function(e) {
                if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                return this.littleEndian = !!e, this;
            }, n.LE = function(e) {
                return this.littleEndian = void 0 === e || !!e, this;
            }, n.BE = function(e) {
                return this.littleEndian = void 0 !== e && !e, this;
            }, n.prepend = function(e, n, r) {
                "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), !this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
                }
                e instanceof t || (e = t.wrap(e, n));
                var o = e.limit - e.offset;
                if (o <= 0) return this;
                var s = o - r;
                if (s > 0) {
                    var a = new ArrayBuffer(this.buffer.byteLength + s), l = new Uint8Array(a);
                    l.set(this.view.subarray(r, this.buffer.byteLength), o), this.buffer = a, this.view = l, 
                    this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, 
                    r += s;
                } else new Uint8Array(this.buffer);
                return this.view.set(e.view.subarray(e.offset, e.limit), r - o), e.offset = e.limit, 
                i && (this.offset -= o), this;
            }, n.prependTo = function(e, t) {
                return e.prepend(this, t), this;
            }, n.printDebug = function(e) {
                "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
            }, n.remaining = function() {
                return this.limit - this.offset;
            }, n.reset = function() {
                return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, 
                this;
            }, n.resize = function(e) {
                if (!this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                    if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e);
                }
                if (this.buffer.byteLength < e) {
                    var t = new ArrayBuffer(e), n = new Uint8Array(t);
                    n.set(this.view), this.buffer = t, this.view = n;
                }
                return this;
            }, n.reverse = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                }
                return e === t ? this : (Array.prototype.reverse.call(this.view.subarray(e, t)), 
                this);
            }, n.skip = function(e) {
                if (!this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                    e |= 0;
                }
                var t = this.offset + e;
                if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                return this.offset = t, this;
            }, n.slice = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                }
                var n = this.clone();
                return n.offset = e, n.limit = t, n;
            }, n.toBuffer = function(e) {
                var t = this.offset, n = this.limit;
                if (!this.noAssert) {
                    if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                    if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                    if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
                }
                if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
                if (t === n) return r;
                var i = new ArrayBuffer(n - t);
                return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(t, n), 0), i;
            }, n.toArrayBuffer = n.toBuffer, n.toString = function(e, t, n) {
                if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                switch ("number" == typeof e && (n = t = e = "utf8"), e) {
                  case "utf8":
                    return this.toUTF8(t, n);

                  case "base64":
                    return this.toBase64(t, n);

                  case "hex":
                    return this.toHex(t, n);

                  case "binary":
                    return this.toBinary(t, n);

                  case "debug":
                    return this.toDebug();

                  case "columns":
                    return this.toColumns();

                  default:
                    throw Error("Unsupported encoding: " + e);
                }
            };
            var u = function() {
                for (var e = {}, t = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], n = [], r = 0, i = t.length; r < i; ++r) n[t[r]] = r;
                return e.encode = function(e, n) {
                    for (var r, i; null !== (r = e()); ) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (n(t[63 & ((i |= r >> 4 & 15) | r >> 4 & 15)]), 
                    i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), 
                    n(61))) : (n(t[63 & i]), n(61), n(61));
                }, e.decode = function(e, t) {
                    var r, i, o;
                    function s(e) {
                        throw Error("Illegal character code: " + e);
                    }
                    for (;null !== (r = e()); ) if (void 0 === (i = n[r]) && s(r), null !== (r = e()) && (void 0 === (o = n[r]) && s(r), 
                    t(i << 2 >>> 0 | (48 & o) >> 4), null !== (r = e()))) {
                        if (void 0 === (i = n[r])) {
                            if (61 === r) break;
                            s(r);
                        }
                        if (t((15 & o) << 4 >>> 0 | (60 & i) >> 2), null !== (r = e())) {
                            if (void 0 === (o = n[r])) {
                                if (61 === r) break;
                                s(r);
                            }
                            t((3 & i) << 6 >>> 0 | o);
                        }
                    }
                }, e.test = function(e) {
                    return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e);
                }, e;
            }();
            n.toBase64 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, 
                (e |= 0) < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
                var n;
                return u.encode(function() {
                    return e < t ? this.view[e++] : null;
                }.bind(this), n = s()), n();
            }, t.fromBase64 = function(e, n) {
                if ("string" != typeof e) throw TypeError("str");
                var r = new t(e.length / 4 * 3, n), i = 0;
                return u.decode(o(e), function(e) {
                    r.view[i++] = e;
                }), r.limit = i, r;
            }, t.btoa = function(e) {
                return t.fromBinary(e).toBase64();
            }, t.atob = function(e) {
                return t.fromBase64(e).toBinary();
            }, n.toBinary = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, 
                (e |= 0) < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
                if (e === t) return "";
                for (var n = [], r = []; e < t; ) n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), 
                n = []);
                return r.join("") + String.fromCharCode.apply(String, n);
            }, t.fromBinary = function(e, n) {
                if ("string" != typeof e) throw TypeError("str");
                for (var r, i = 0, o = e.length, s = new t(o, n); i < o; ) {
                    if ((r = e.charCodeAt(i)) > 255) throw RangeError("illegal char code: " + r);
                    s.view[i++] = r;
                }
                return s.limit = o, s;
            }, n.toDebug = function(e) {
                for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r; ) {
                    if (-1 !== n && (i += (t = this.view[n]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), 
                    e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
                        for (;i.length < 51; ) i += " ";
                        s += i + o + "\n", i = o = "";
                    }
                    n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : "";
                }
                if (e && " " !== i) {
                    for (;i.length < 51; ) i += " ";
                    s += i + o + "\n";
                }
                return e ? s : i;
            }, t.fromDebug = function(e, n, r) {
                for (var i, o, s = e.length, a = new t((s + 1) / 3 | 0, n, r), l = 0, u = 0, h = !1, c = !1, f = !1, d = !1, p = !1; l < s; ) {
                    switch (i = e.charAt(l++)) {
                      case "!":
                        if (!r) {
                            if (c || f || d) {
                                p = !0;
                                break;
                            }
                            c = f = d = !0;
                        }
                        a.offset = a.markedOffset = a.limit = u, h = !1;
                        break;

                      case "|":
                        if (!r) {
                            if (c || d) {
                                p = !0;
                                break;
                            }
                            c = d = !0;
                        }
                        a.offset = a.limit = u, h = !1;
                        break;

                      case "[":
                        if (!r) {
                            if (c || f) {
                                p = !0;
                                break;
                            }
                            c = f = !0;
                        }
                        a.offset = a.markedOffset = u, h = !1;
                        break;

                      case "<":
                        if (!r) {
                            if (c) {
                                p = !0;
                                break;
                            }
                            c = !0;
                        }
                        a.offset = u, h = !1;
                        break;

                      case "]":
                        if (!r) {
                            if (d || f) {
                                p = !0;
                                break;
                            }
                            d = f = !0;
                        }
                        a.limit = a.markedOffset = u, h = !1;
                        break;

                      case ">":
                        if (!r) {
                            if (d) {
                                p = !0;
                                break;
                            }
                            d = !0;
                        }
                        a.limit = u, h = !1;
                        break;

                      case "'":
                        if (!r) {
                            if (f) {
                                p = !0;
                                break;
                            }
                            f = !0;
                        }
                        a.markedOffset = u, h = !1;
                        break;

                      case " ":
                        h = !1;
                        break;

                      default:
                        if (!r && h) {
                            p = !0;
                            break;
                        }
                        if (o = parseInt(i + e.charAt(l++), 16), !r && (isNaN(o) || o < 0 || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                        a.view[u++] = o, h = !0;
                    }
                    if (p) throw TypeError("Illegal str: Invalid symbol at " + l);
                }
                if (!r) {
                    if (!c || !d) throw TypeError("Illegal str: Missing offset or limit");
                    if (u < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + u + " < " + s);
                }
                return a;
            }, n.toHex = function(e, t) {
                if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                }
                for (var n, r = new Array(t - e); e < t; ) (n = this.view[e++]) < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));
                return r.join("");
            }, t.fromHex = function(e, n, r) {
                if (!r) {
                    if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                    if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
                }
                for (var i, o = e.length, s = new t(o / 2 | 0, n), a = 0, l = 0; a < o; a += 2) {
                    if (i = parseInt(e.substring(a, a + 2), 16), !r && (!isFinite(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                    s.view[l++] = i;
                }
                return s.limit = l, s;
            };
            var h = function() {
                var e = {
                    MAX_CODEPOINT: 1114111,
                    encodeUTF8: function(e, t) {
                        var n = null;
                        for ("number" == typeof e && (n = e, e = function() {
                            return null;
                        }); null !== n || null !== (n = e()); ) n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), 
                        t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), 
                        t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null;
                    },
                    decodeUTF8: function(e, t) {
                        for (var n, r, i, o, s = function(e) {
                            e = e.slice(0, e.indexOf(null));
                            var t = Error(e.toString());
                            throw t.name = "TruncatedError", t.bytes = e, t;
                        }; null !== (n = e()); ) if (0 == (128 & n)) t(n); else if (192 == (224 & n)) null === (r = e()) && s([ n, r ]), 
                        t((31 & n) << 6 | 63 & r); else if (224 == (240 & n)) (null === (r = e()) || null === (i = e())) && s([ n, r, i ]), 
                        t((15 & n) << 12 | (63 & r) << 6 | 63 & i); else {
                            if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                            (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([ n, r, i, o ]), 
                            t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o);
                        }
                    },
                    UTF16toUTF8: function(e, t) {
                        for (var n, r = null; null !== (n = null !== r ? r : e()); ) n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), 
                        r = null) : t(n);
                        null !== r && t(r);
                    },
                    UTF8toUTF16: function(e, t) {
                        var n = null;
                        for ("number" == typeof e && (n = e, e = function() {
                            return null;
                        }); null !== n || null !== (n = e()); ) n <= 65535 ? t(n) : (t(55296 + ((n -= 65536) >> 10)), 
                        t(n % 1024 + 56320)), n = null;
                    },
                    encodeUTF16toUTF8: function(t, n) {
                        e.UTF16toUTF8(t, function(t) {
                            e.encodeUTF8(t, n);
                        });
                    },
                    decodeUTF8toUTF16: function(t, n) {
                        e.decodeUTF8(t, function(t) {
                            e.UTF8toUTF16(t, n);
                        });
                    },
                    calculateCodePoint: function(e) {
                        return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                    },
                    calculateUTF8: function(e) {
                        for (var t, n = 0; null !== (t = e()); ) n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                        return n;
                    },
                    calculateUTF16asUTF8: function(t) {
                        var n = 0, r = 0;
                        return e.UTF16toUTF8(t, function(e) {
                            ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                        }), [ n, r ];
                    }
                };
                return e;
            }();
            return n.toUTF8 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                    if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                    if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                    if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                }
                var n;
                try {
                    h.decodeUTF8toUTF16(function() {
                        return e < t ? this.view[e++] : null;
                    }.bind(this), n = s());
                } catch (n) {
                    if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t);
                }
                return n();
            }, t.fromUTF8 = function(e, n, r) {
                if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                var i = new t(h.calculateUTF16asUTF8(o(e), !0)[1], n, r), s = 0;
                return h.encodeUTF16toUTF8(o(e), function(e) {
                    i.view[s++] = e;
                }), i.limit = s, i;
            }, t;
        }, e && e.exports ? e.exports = function() {
            var e;
            try {
                e = X;
            } catch (e) {}
            return n(e);
        }() : (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = n(t.dcodeIO.Long);
    }), ee = {}, te = _(function(e) {
        var t, n;
        t = b, n = function(e, t) {
            var n, r = {};
            return r.ByteBuffer = e, r.Long = e.Long || null, r.VERSION = "5.0.3", r.WIRE_TYPES = {}, 
            r.WIRE_TYPES.VARINT = 0, r.WIRE_TYPES.BITS64 = 1, r.WIRE_TYPES.LDELIM = 2, r.WIRE_TYPES.STARTGROUP = 3, 
            r.WIRE_TYPES.ENDGROUP = 4, r.WIRE_TYPES.BITS32 = 5, r.PACKABLE_WIRE_TYPES = [ r.WIRE_TYPES.VARINT, r.WIRE_TYPES.BITS64, r.WIRE_TYPES.BITS32 ], 
            r.TYPES = {
                int32: {
                    name: "int32",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: 0
                },
                uint32: {
                    name: "uint32",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: 0
                },
                sint32: {
                    name: "sint32",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: 0
                },
                int64: {
                    name: "int64",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: r.Long ? r.Long.ZERO : void 0
                },
                uint64: {
                    name: "uint64",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: r.Long ? r.Long.UZERO : void 0
                },
                sint64: {
                    name: "sint64",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: r.Long ? r.Long.ZERO : void 0
                },
                bool: {
                    name: "bool",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: !1
                },
                double: {
                    name: "double",
                    wireType: r.WIRE_TYPES.BITS64,
                    defaultValue: 0
                },
                string: {
                    name: "string",
                    wireType: r.WIRE_TYPES.LDELIM,
                    defaultValue: ""
                },
                bytes: {
                    name: "bytes",
                    wireType: r.WIRE_TYPES.LDELIM,
                    defaultValue: null
                },
                fixed32: {
                    name: "fixed32",
                    wireType: r.WIRE_TYPES.BITS32,
                    defaultValue: 0
                },
                sfixed32: {
                    name: "sfixed32",
                    wireType: r.WIRE_TYPES.BITS32,
                    defaultValue: 0
                },
                fixed64: {
                    name: "fixed64",
                    wireType: r.WIRE_TYPES.BITS64,
                    defaultValue: r.Long ? r.Long.UZERO : void 0
                },
                sfixed64: {
                    name: "sfixed64",
                    wireType: r.WIRE_TYPES.BITS64,
                    defaultValue: r.Long ? r.Long.ZERO : void 0
                },
                float: {
                    name: "float",
                    wireType: r.WIRE_TYPES.BITS32,
                    defaultValue: 0
                },
                enum: {
                    name: "enum",
                    wireType: r.WIRE_TYPES.VARINT,
                    defaultValue: 0
                },
                message: {
                    name: "message",
                    wireType: r.WIRE_TYPES.LDELIM,
                    defaultValue: null
                },
                group: {
                    name: "group",
                    wireType: r.WIRE_TYPES.STARTGROUP,
                    defaultValue: null
                }
            }, r.MAP_KEY_TYPES = [ r.TYPES.int32, r.TYPES.sint32, r.TYPES.sfixed32, r.TYPES.uint32, r.TYPES.fixed32, r.TYPES.int64, r.TYPES.sint64, r.TYPES.sfixed64, r.TYPES.uint64, r.TYPES.fixed64, r.TYPES.bool, r.TYPES.string, r.TYPES.bytes ], 
            r.ID_MIN = 1, r.ID_MAX = 536870911, r.convertFieldsToCamelCase = !1, r.populateAccessors = !0, 
            r.populateDefaults = !0, r.Util = ((n = {}).IS_NODE = !("object" != typeof process || process + "" != "[object process]" || process.browser), 
            n.XHR = function() {
                for (var e = [ function() {
                    return new XMLHttpRequest();
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP");
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } ], t = null, n = 0; n < e.length; n++) {
                    try {
                        t = e[n]();
                    } catch (e) {
                        continue;
                    }
                    break;
                }
                if (!t) throw Error("XMLHttpRequest is not supported");
                return t;
            }, n.fetch = function(e, t) {
                if (t && "function" != typeof t && (t = null), n.IS_NODE) {
                    var r = ee;
                    if (t) r.readFile(e, function(e, n) {
                        t(e ? null : "" + n);
                    }); else try {
                        return r.readFileSync(e);
                    } catch (e) {
                        return null;
                    }
                } else {
                    var i = n.XHR();
                    if (i.open("GET", e, !!t), i.setRequestHeader("Accept", "text/plain"), "function" == typeof i.overrideMimeType && i.overrideMimeType("text/plain"), 
                    !t) return i.send(null), 200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null;
                    if (i.onreadystatechange = function() {
                        4 == i.readyState && (200 == i.status || 0 == i.status && "string" == typeof i.responseText ? t(i.responseText) : t(null));
                    }, 4 == i.readyState) return;
                    i.send(null);
                }
            }, n.toCamelCase = function(e) {
                return e.replace(/_([a-zA-Z])/g, function(e, t) {
                    return t.toUpperCase();
                });
            }, n), r.Lang = {
                DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
                RULE: /^(?:required|optional|repeated|map)$/,
                TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                NUMBER_OCT: /^0[0-7]+$/,
                NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                BOOL: /^(?:true|false)$/i,
                ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                WHITESPACE: /\s/,
                STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
            }, r.DotProto = function(e, t) {
                var n = {}, r = function(e) {
                    this.source = e + "", this.index = 0, this.line = 1, this.stack = [], this._stringOpen = null;
                }, i = r.prototype;
                i._readString = function() {
                    var e = '"' === this._stringOpen ? t.STRING_DQ : t.STRING_SQ;
                    e.lastIndex = this.index - 1;
                    var n = e.exec(this.source);
                    if (!n) throw Error("unterminated string");
                    return this.index = e.lastIndex, this.stack.push(this._stringOpen), this._stringOpen = null, 
                    n[1];
                }, i.next = function() {
                    if (this.stack.length > 0) return this.stack.shift();
                    if (this.index >= this.source.length) return null;
                    if (null !== this._stringOpen) return this._readString();
                    var e, n, r;
                    do {
                        for (e = !1; t.WHITESPACE.test(r = this.source.charAt(this.index)); ) if ("\n" === r && ++this.line, 
                        ++this.index === this.source.length) return null;
                        if ("/" === this.source.charAt(this.index)) if (++this.index, "/" === this.source.charAt(this.index)) {
                            for (;"\n" !== this.source.charAt(++this.index); ) if (this.index == this.source.length) return null;
                            ++this.index, ++this.line, e = !0;
                        } else {
                            if ("*" !== (r = this.source.charAt(this.index))) return "/";
                            do {
                                if ("\n" === r && ++this.line, ++this.index === this.source.length) return null;
                                n = r, r = this.source.charAt(this.index);
                            } while ("*" !== n || "/" !== r);
                            ++this.index, e = !0;
                        }
                    } while (e);
                    if (this.index === this.source.length) return null;
                    var i = this.index;
                    if (t.DELIM.lastIndex = 0, !t.DELIM.test(this.source.charAt(i++))) for (;i < this.source.length && !t.DELIM.test(this.source.charAt(i)); ) ++i;
                    var o = this.source.substring(this.index, this.index = i);
                    return '"' !== o && "'" !== o || (this._stringOpen = o), o;
                }, i.peek = function() {
                    if (0 === this.stack.length) {
                        var e = this.next();
                        if (null === e) return null;
                        this.stack.push(e);
                    }
                    return this.stack[0];
                }, i.skip = function(e) {
                    var t = this.next();
                    if (t !== e) throw Error("illegal '" + t + "', '" + e + "' expected");
                }, i.omit = function(e) {
                    return this.peek() === e && (this.next(), !0);
                }, i.toString = function() {
                    return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
                }, n.Tokenizer = r;
                var o = function(e) {
                    this.tn = new r(e), this.proto3 = !1;
                }, s = o.prototype;
                function a(e, n) {
                    var r = -1, i = 1;
                    if ("-" == e.charAt(0) && (i = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) r = parseInt(e); else if (t.NUMBER_HEX.test(e)) r = parseInt(e.substring(2), 16); else {
                        if (!t.NUMBER_OCT.test(e)) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
                        r = parseInt(e.substring(1), 8);
                    }
                    if (r = i * r | 0, !n && r < 0) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
                    return r;
                }
                function l(e) {
                    var n = 1;
                    if ("-" == e.charAt(0) && (n = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) return n * parseInt(e, 10);
                    if (t.NUMBER_HEX.test(e)) return n * parseInt(e.substring(2), 16);
                    if (t.NUMBER_OCT.test(e)) return n * parseInt(e.substring(1), 8);
                    if ("inf" === e) return n * (1 / 0);
                    if ("nan" === e) return NaN;
                    if (t.NUMBER_FLT.test(e)) return n * parseFloat(e);
                    throw Error("illegal number value: " + (n < 0 ? "-" : "") + e);
                }
                function u(e, t, n) {
                    void 0 === e[t] ? e[t] = n : (Array.isArray(e[t]) || (e[t] = [ e[t] ]), e[t].push(n));
                }
                return s.parse = function() {
                    var e, n, r = {
                        name: "[ROOT]",
                        package: null,
                        messages: [],
                        enums: [],
                        imports: [],
                        options: {},
                        services: []
                    }, i = !0;
                    try {
                        for (;e = this.tn.next(); ) switch (e) {
                          case "package":
                            if (!i || null !== r.package) throw Error("unexpected 'package'");
                            if (e = this.tn.next(), !t.TYPEREF.test(e)) throw Error("illegal package name: " + e);
                            this.tn.skip(";"), r.package = e;
                            break;

                          case "import":
                            if (!i) throw Error("unexpected 'import'");
                            ("public" === (e = this.tn.peek()) || (n = "weak" === e)) && this.tn.next(), e = this._readString(), 
                            this.tn.skip(";"), n || r.imports.push(e);
                            break;

                          case "syntax":
                            if (!i) throw Error("unexpected 'syntax'");
                            this.tn.skip("="), "proto3" === (r.syntax = this._readString()) && (this.proto3 = !0), 
                            this.tn.skip(";");
                            break;

                          case "message":
                            this._parseMessage(r, null), i = !1;
                            break;

                          case "enum":
                            this._parseEnum(r), i = !1;
                            break;

                          case "option":
                            this._parseOption(r);
                            break;

                          case "service":
                            this._parseService(r);
                            break;

                          case "extend":
                            this._parseExtend(r);
                            break;

                          default:
                            throw Error("unexpected '" + e + "'");
                        }
                    } catch (e) {
                        throw e.message = "Parse error at line " + this.tn.line + ": " + e.message, e;
                    }
                    return delete r.name, r;
                }, o.parse = function(e) {
                    return new o(e).parse();
                }, s._readString = function() {
                    var e, t, n = "";
                    do {
                        if ("'" !== (t = this.tn.next()) && '"' !== t) throw Error("illegal string delimiter: " + t);
                        n += this.tn.next(), this.tn.skip(t), e = this.tn.peek();
                    } while ('"' === e || '"' === e);
                    return n;
                }, s._readValue = function(e) {
                    var n = this.tn.peek();
                    if ('"' === n || "'" === n) return this._readString();
                    if (this.tn.next(), t.NUMBER.test(n)) return l(n);
                    if (t.BOOL.test(n)) return "true" === n.toLowerCase();
                    if (e && t.TYPEREF.test(n)) return n;
                    throw Error("illegal value: " + n);
                }, s._parseOption = function(e, n) {
                    var r = this.tn.next(), i = !1;
                    if ("(" === r && (i = !0, r = this.tn.next()), !t.TYPEREF.test(r)) throw Error("illegal option name: " + r);
                    var o = r;
                    i && (this.tn.skip(")"), o = "(" + o + ")", r = this.tn.peek(), t.FQTYPEREF.test(r) && (o += r, 
                    this.tn.next())), this.tn.skip("="), this._parseOptionValue(e, o), n || this.tn.skip(";");
                }, s._parseOptionValue = function(e, n) {
                    var r = this.tn.peek();
                    if ("{" !== r) u(e.options, n, this._readValue(!0)); else for (this.tn.skip("{"); "}" !== (r = this.tn.next()); ) {
                        if (!t.NAME.test(r)) throw Error("illegal option name: " + n + "." + r);
                        this.tn.omit(":") ? u(e.options, n + "." + r, this._readValue(!0)) : this._parseOptionValue(e, n + "." + r);
                    }
                }, s._parseService = function(e) {
                    var n = this.tn.next();
                    if (!t.NAME.test(n)) throw Error("illegal service name at line " + this.tn.line + ": " + n);
                    var r = {
                        name: n,
                        rpc: {},
                        options: {}
                    };
                    for (this.tn.skip("{"); "}" !== (n = this.tn.next()); ) if ("option" === n) this._parseOption(r); else {
                        if ("rpc" !== n) throw Error("illegal service token: " + n);
                        this._parseServiceRPC(r);
                    }
                    this.tn.omit(";"), e.services.push(r);
                }, s._parseServiceRPC = function(e) {
                    var n = this.tn.next();
                    if (!t.NAME.test(n)) throw Error("illegal rpc service method name: " + n);
                    var r = n, i = {
                        request: null,
                        response: null,
                        request_stream: !1,
                        response_stream: !1,
                        options: {}
                    };
                    if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.request_stream = !0, 
                    n = this.tn.next()), !t.TYPEREF.test(n)) throw Error("illegal rpc service request type: " + n);
                    if (i.request = n, this.tn.skip(")"), "returns" !== (n = this.tn.next()).toLowerCase()) throw Error("illegal rpc service request type delimiter: " + n);
                    if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.response_stream = !0, 
                    n = this.tn.next()), i.response = n, this.tn.skip(")"), "{" === (n = this.tn.peek())) {
                        for (this.tn.next(); "}" !== (n = this.tn.next()); ) {
                            if ("option" !== n) throw Error("illegal rpc service token: " + n);
                            this._parseOption(i);
                        }
                        this.tn.omit(";");
                    } else this.tn.skip(";");
                    void 0 === e.rpc && (e.rpc = {}), e.rpc[r] = i;
                }, s._parseMessage = function(e, n) {
                    var r = !!n, i = this.tn.next(), o = {
                        name: "",
                        fields: [],
                        enums: [],
                        messages: [],
                        options: {},
                        services: [],
                        oneofs: {}
                    };
                    if (!t.NAME.test(i)) throw Error("illegal " + (r ? "group" : "message") + " name: " + i);
                    for (o.name = i, r && (this.tn.skip("="), n.id = a(this.tn.next()), o.isGroup = !0), 
                    "[" === (i = this.tn.peek()) && n && this._parseFieldOptions(n), this.tn.skip("{"); "}" !== (i = this.tn.next()); ) if (t.RULE.test(i)) this._parseMessageField(o, i); else if ("oneof" === i) this._parseMessageOneOf(o); else if ("enum" === i) this._parseEnum(o); else if ("message" === i) this._parseMessage(o); else if ("option" === i) this._parseOption(o); else if ("service" === i) this._parseService(o); else if ("extensions" === i) o.hasOwnProperty("extensions") ? o.extensions = o.extensions.concat(this._parseExtensionRanges()) : o.extensions = this._parseExtensionRanges(); else if ("reserved" === i) this._parseIgnored(); else if ("extend" === i) this._parseExtend(o); else {
                        if (!t.TYPEREF.test(i)) throw Error("illegal message token: " + i);
                        if (!this.proto3) throw Error("illegal field rule: " + i);
                        this._parseMessageField(o, "optional", i);
                    }
                    return this.tn.omit(";"), e.messages.push(o), o;
                }, s._parseIgnored = function() {
                    for (;";" !== this.tn.peek(); ) this.tn.next();
                    this.tn.skip(";");
                }, s._parseMessageField = function(e, n, r) {
                    if (!t.RULE.test(n)) throw Error("illegal message field rule: " + n);
                    var i, o = {
                        rule: n,
                        type: "",
                        name: "",
                        options: {},
                        id: 0
                    };
                    if ("map" === n) {
                        if (r) throw Error("illegal type: " + r);
                        if (this.tn.skip("<"), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field type: " + i);
                        if (o.keytype = i, this.tn.skip(","), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field: " + i);
                        if (o.type = i, this.tn.skip(">"), i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
                        o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), 
                        this.tn.skip(";");
                    } else if ("group" === (r = void 0 !== r ? r : this.tn.next())) {
                        var s = this._parseMessage(e, o);
                        if (!/^[A-Z]/.test(s.name)) throw Error("illegal group name: " + s.name);
                        o.type = s.name, o.name = s.name.toLowerCase(), this.tn.omit(";");
                    } else {
                        if (!t.TYPE.test(r) && !t.TYPEREF.test(r)) throw Error("illegal message field type: " + r);
                        if (o.type = r, i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
                        o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), 
                        this.tn.skip(";");
                    }
                    return e.fields.push(o), o;
                }, s._parseMessageOneOf = function(e) {
                    var n = this.tn.next();
                    if (!t.NAME.test(n)) throw Error("illegal oneof name: " + n);
                    var r, i = n, o = [];
                    for (this.tn.skip("{"); "}" !== (n = this.tn.next()); ) (r = this._parseMessageField(e, "optional", n)).oneof = i, 
                    o.push(r.id);
                    this.tn.omit(";"), e.oneofs[i] = o;
                }, s._parseFieldOptions = function(e) {
                    this.tn.skip("[");
                    for (var t = !0; "]" !== this.tn.peek(); ) t || this.tn.skip(","), this._parseOption(e, !0), 
                    t = !1;
                    this.tn.next();
                }, s._parseEnum = function(e) {
                    var n = {
                        name: "",
                        values: [],
                        options: {}
                    }, r = this.tn.next();
                    if (!t.NAME.test(r)) throw Error("illegal name: " + r);
                    for (n.name = r, this.tn.skip("{"); "}" !== (r = this.tn.next()); ) if ("option" === r) this._parseOption(n); else {
                        if (!t.NAME.test(r)) throw Error("illegal name: " + r);
                        this.tn.skip("=");
                        var i = {
                            name: r,
                            id: a(this.tn.next(), !0)
                        };
                        "[" === (r = this.tn.peek()) && this._parseFieldOptions({
                            options: {}
                        }), this.tn.skip(";"), n.values.push(i);
                    }
                    this.tn.omit(";"), e.enums.push(n);
                }, s._parseExtensionRanges = function() {
                    var t, n, r, i = [];
                    do {
                        for (n = []; ;) {
                            switch (t = this.tn.next()) {
                              case "min":
                                r = e.ID_MIN;
                                break;

                              case "max":
                                r = e.ID_MAX;
                                break;

                              default:
                                r = l(t);
                            }
                            if (n.push(r), 2 === n.length) break;
                            if ("to" !== this.tn.peek()) {
                                n.push(r);
                                break;
                            }
                            this.tn.next();
                        }
                        i.push(n);
                    } while (this.tn.omit(","));
                    return this.tn.skip(";"), i;
                }, s._parseExtend = function(e) {
                    var n = this.tn.next();
                    if (!t.TYPEREF.test(n)) throw Error("illegal extend reference: " + n);
                    var r = {
                        ref: n,
                        fields: []
                    };
                    for (this.tn.skip("{"); "}" !== (n = this.tn.next()); ) if (t.RULE.test(n)) this._parseMessageField(r, n); else {
                        if (!t.TYPEREF.test(n)) throw Error("illegal extend token: " + n);
                        if (!this.proto3) throw Error("illegal field rule: " + n);
                        this._parseMessageField(r, "optional", n);
                    }
                    return this.tn.omit(";"), e.messages.push(r), r;
                }, s.toString = function() {
                    return "Parser at line " + this.tn.line;
                }, n.Parser = o, n;
            }(r, r.Lang), r.Reflect = function(t) {
                var n = {}, r = function(e, t, n) {
                    this.builder = e, this.parent = t, this.name = n, this.className;
                }, i = r.prototype;
                i.fqn = function() {
                    for (var e = this.name, t = this; null != (t = t.parent); ) e = t.name + "." + e;
                    return e;
                }, i.toString = function(e) {
                    return (e ? this.className + " " : "") + this.fqn();
                }, i.build = function() {
                    throw Error(this.toString(!0) + " cannot be built directly");
                }, n.T = r;
                var o = function(e, t, n, i, o) {
                    r.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = i || {}, 
                    this.syntax = o || "proto2";
                }, s = o.prototype = Object.create(r.prototype);
                s.getChildren = function(e) {
                    if (null == (e = e || null)) return this.children.slice();
                    for (var t = [], n = 0, r = this.children.length; n < r; ++n) this.children[n] instanceof e && t.push(this.children[n]);
                    return t;
                }, s.addChild = function(e) {
                    var t;
                    if (t = this.getChild(e.name)) if (t instanceof h.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName; else {
                        if (!(e instanceof h.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                        e.name = e.originalName;
                    }
                    this.children.push(e);
                }, s.getChild = function(e) {
                    for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n) if (this.children[n][t] === e) return this.children[n];
                    return null;
                }, s.resolve = function(e, t) {
                    var r, i = "string" == typeof e ? e.split(".") : e, o = this, s = 0;
                    if ("" === i[s]) {
                        for (;null !== o.parent; ) o = o.parent;
                        s++;
                    }
                    do {
                        do {
                            if (!(o instanceof n.Namespace)) {
                                o = null;
                                break;
                            }
                            if (!(r = o.getChild(i[s])) || !(r instanceof n.T) || t && !(r instanceof n.Namespace)) {
                                o = null;
                                break;
                            }
                            o = r, s++;
                        } while (s < i.length);
                        if (null != o) break;
                        if (null !== this.parent) return this.parent.resolve(e, t);
                    } while (null != o);
                    return o;
                }, s.qn = function(e) {
                    var t = [], r = e;
                    do {
                        t.unshift(r.name), r = r.parent;
                    } while (null !== r);
                    for (var i = 1; i <= t.length; i++) {
                        var o = t.slice(t.length - i);
                        if (e === this.resolve(o, e instanceof n.Namespace)) return o.join(".");
                    }
                    return e.fqn();
                }, s.build = function() {
                    for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r) (e = n[r]) instanceof o && (t[e.name] = e.build());
                    return Object.defineProperty && Object.defineProperty(t, "$options", {
                        value: this.buildOpt()
                    }), t;
                }, s.buildOpt = function() {
                    for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
                        var i = t[n], o = this.options[t[n]];
                        e[i] = o;
                    }
                    return e;
                }, s.getOption = function(e) {
                    return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null;
                }, n.Namespace = o;
                var a = function(e, n, r, i, o) {
                    if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, 
                    r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name);
                }, l = a.prototype;
                function u(e, n) {
                    if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new t.Long(e.low, e.high, void 0 === n ? e.unsigned : n);
                    if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
                    if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
                    throw Error("not convertible to Long");
                }
                a.defaultFieldValue = function(n) {
                    if ("string" == typeof n && (n = t.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                    return n == t.TYPES.bytes ? new e(0) : n.defaultValue;
                }, l.toString = function() {
                    return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
                }, l.verifyValue = function(n) {
                    var r = this;
                    function i(e, t) {
                        throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + e + " (" + t + ")");
                    }
                    switch (this.type) {
                      case t.TYPES.int32:
                      case t.TYPES.sint32:
                      case t.TYPES.sfixed32:
                        return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), 
                        n > 4294967295 ? 0 | n : n;

                      case t.TYPES.uint32:
                      case t.TYPES.fixed32:
                        return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), 
                        n < 0 ? n >>> 0 : n;

                      case t.TYPES.int64:
                      case t.TYPES.sint64:
                      case t.TYPES.sfixed64:
                        if (t.Long) try {
                            return u(n, !1);
                        } catch (e) {
                            i(typeof n, e.message);
                        } else i(typeof n, "requires Long.js");

                      case t.TYPES.uint64:
                      case t.TYPES.fixed64:
                        if (t.Long) try {
                            return u(n, !0);
                        } catch (e) {
                            i(typeof n, e.message);
                        } else i(typeof n, "requires Long.js");

                      case t.TYPES.bool:
                        return "boolean" != typeof n && i(typeof n, "not a boolean"), n;

                      case t.TYPES.float:
                      case t.TYPES.double:
                        return "number" != typeof n && i(typeof n, "not a number"), n;

                      case t.TYPES.string:
                        return "string" == typeof n || n && n instanceof String || i(typeof n, "not a string"), 
                        "" + n;

                      case t.TYPES.bytes:
                        return e.isByteBuffer(n) ? n : e.wrap(n, "base64");

                      case t.TYPES.enum:
                        var o = this.resolvedType.getChildren(t.Reflect.Enum.Value);
                        for (a = 0; a < o.length; a++) {
                            if (o[a].name == n) return o[a].id;
                            if (o[a].id == n) return o[a].id;
                        }
                        if ("proto3" === this.syntax) return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), 
                        (n > 4294967295 || n < 0) && i(typeof n, "not in range for uint32"), n;
                        i(n, "not a valid enum value");

                      case t.TYPES.group:
                      case t.TYPES.message:
                        if (n && "object" == typeof n || i(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;
                        if (n instanceof t.Builder.Message) {
                            var s = {};
                            for (var a in n) n.hasOwnProperty(a) && (s[a] = n[a]);
                            n = s;
                        }
                        return new this.resolvedType.clazz(n);
                    }
                    throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")");
                }, l.calculateLength = function(n, r) {
                    if (null === r) return 0;
                    var i;
                    switch (this.type) {
                      case t.TYPES.int32:
                        return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);

                      case t.TYPES.uint32:
                        return e.calculateVarint32(r);

                      case t.TYPES.sint32:
                        return e.calculateVarint32(e.zigZagEncode32(r));

                      case t.TYPES.fixed32:
                      case t.TYPES.sfixed32:
                      case t.TYPES.float:
                        return 4;

                      case t.TYPES.int64:
                      case t.TYPES.uint64:
                        return e.calculateVarint64(r);

                      case t.TYPES.sint64:
                        return e.calculateVarint64(e.zigZagEncode64(r));

                      case t.TYPES.fixed64:
                      case t.TYPES.sfixed64:
                        return 8;

                      case t.TYPES.bool:
                        return 1;

                      case t.TYPES.enum:
                        return e.calculateVarint32(r);

                      case t.TYPES.double:
                        return 8;

                      case t.TYPES.string:
                        return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;

                      case t.TYPES.bytes:
                        if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                        return e.calculateVarint32(r.remaining()) + r.remaining();

                      case t.TYPES.message:
                        return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;

                      case t.TYPES.group:
                        return (i = this.resolvedType.calculate(r)) + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                    }
                    throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
                }, l.encodeValue = function(n, r, i) {
                    if (null === r) return i;
                    switch (this.type) {
                      case t.TYPES.int32:
                        r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                        break;

                      case t.TYPES.uint32:
                        i.writeVarint32(r);
                        break;

                      case t.TYPES.sint32:
                        i.writeVarint32ZigZag(r);
                        break;

                      case t.TYPES.fixed32:
                        i.writeUint32(r);
                        break;

                      case t.TYPES.sfixed32:
                        i.writeInt32(r);
                        break;

                      case t.TYPES.int64:
                      case t.TYPES.uint64:
                        i.writeVarint64(r);
                        break;

                      case t.TYPES.sint64:
                        i.writeVarint64ZigZag(r);
                        break;

                      case t.TYPES.fixed64:
                        i.writeUint64(r);
                        break;

                      case t.TYPES.sfixed64:
                        i.writeInt64(r);
                        break;

                      case t.TYPES.bool:
                        "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                        break;

                      case t.TYPES.enum:
                        i.writeVarint32(r);
                        break;

                      case t.TYPES.float:
                        i.writeFloat32(r);
                        break;

                      case t.TYPES.double:
                        i.writeFloat64(r);
                        break;

                      case t.TYPES.string:
                        i.writeVString(r);
                        break;

                      case t.TYPES.bytes:
                        if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                        var o = r.offset;
                        i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                        break;

                      case t.TYPES.message:
                        var s = new e().LE();
                        this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                        break;

                      case t.TYPES.group:
                        this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                        break;

                      default:
                        throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
                    }
                    return i;
                }, l.decode = function(e, n, r) {
                    if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                    var i, o;
                    switch (this.type) {
                      case t.TYPES.int32:
                        return 0 | e.readVarint32();

                      case t.TYPES.uint32:
                        return e.readVarint32() >>> 0;

                      case t.TYPES.sint32:
                        return 0 | e.readVarint32ZigZag();

                      case t.TYPES.fixed32:
                        return e.readUint32() >>> 0;

                      case t.TYPES.sfixed32:
                        return 0 | e.readInt32();

                      case t.TYPES.int64:
                        return e.readVarint64();

                      case t.TYPES.uint64:
                        return e.readVarint64().toUnsigned();

                      case t.TYPES.sint64:
                        return e.readVarint64ZigZag();

                      case t.TYPES.fixed64:
                        return e.readUint64();

                      case t.TYPES.sfixed64:
                        return e.readInt64();

                      case t.TYPES.bool:
                        return !!e.readVarint32();

                      case t.TYPES.enum:
                        return e.readVarint32();

                      case t.TYPES.float:
                        return e.readFloat();

                      case t.TYPES.double:
                        return e.readDouble();

                      case t.TYPES.string:
                        return e.readVString();

                      case t.TYPES.bytes:
                        if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                        return (i = e.clone()).limit = i.offset + o, e.offset += o, i;

                      case t.TYPES.message:
                        return o = e.readVarint32(), this.resolvedType.decode(e, o);

                      case t.TYPES.group:
                        return this.resolvedType.decode(e, -1, r);
                    }
                    throw Error("[INTERNAL] Illegal decode type");
                }, l.valueFromString = function(n) {
                    if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                    switch (this.type) {
                      case t.TYPES.int32:
                      case t.TYPES.sint32:
                      case t.TYPES.sfixed32:
                      case t.TYPES.uint32:
                      case t.TYPES.fixed32:
                        return this.verifyValue(parseInt(n));

                      case t.TYPES.int64:
                      case t.TYPES.sint64:
                      case t.TYPES.sfixed64:
                      case t.TYPES.uint64:
                      case t.TYPES.fixed64:
                        return this.verifyValue(n);

                      case t.TYPES.bool:
                        return "true" === n;

                      case t.TYPES.string:
                        return this.verifyValue(n);

                      case t.TYPES.bytes:
                        return e.fromBinary(n);
                    }
                }, l.valueToString = function(e) {
                    if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                    return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString();
                }, n.Element = a;
                var h = function(e, t, n, r, i, s) {
                    o.call(this, e, t, n, r, s), this.className = "Message", this.extensions = void 0, 
                    this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, 
                    this._fieldsByName = null;
                }, c = h.prototype = Object.create(o.prototype);
                function f(e, n) {
                    var r = n.readVarint32(), i = 7 & r, o = r >>> 3;
                    switch (i) {
                      case t.WIRE_TYPES.VARINT:
                        do {
                            r = n.readUint8();
                        } while (128 == (128 & r));
                        break;

                      case t.WIRE_TYPES.BITS64:
                        n.offset += 8;
                        break;

                      case t.WIRE_TYPES.LDELIM:
                        r = n.readVarint32(), n.offset += r;
                        break;

                      case t.WIRE_TYPES.STARTGROUP:
                        f(o, n);
                        break;

                      case t.WIRE_TYPES.ENDGROUP:
                        if (o === e) return !1;
                        throw Error("Illegal GROUPEND after unknown group: " + o + " (" + e + " expected)");

                      case t.WIRE_TYPES.BITS32:
                        n.offset += 4;
                        break;

                      default:
                        throw Error("Illegal wire type in unknown group " + e + ": " + i);
                    }
                    return !0;
                }
                c.build = function(n) {
                    if (this.clazz && !n) return this.clazz;
                    var r = function(t, n) {
                        var r = n.getChildren(t.Reflect.Message.Field), i = n.getChildren(t.Reflect.Message.OneOf), o = function(s, a) {
                            t.Builder.Message.call(this);
                            for (var l = 0, u = i.length; l < u; ++l) this[i[l].name] = null;
                            for (l = 0, u = r.length; l < u; ++l) {
                                var h = r[l];
                                this[h.name] = h.repeated ? [] : h.map ? new t.Map(h) : null, !h.required && "proto3" !== n.syntax || null === h.defaultValue || (this[h.name] = h.defaultValue);
                            }
                            var c;
                            if (arguments.length > 0) if (1 !== arguments.length || null === s || "object" != typeof s || !("function" != typeof s.encode || s instanceof o) || Array.isArray(s) || s instanceof t.Map || e.isByteBuffer(s) || s instanceof ArrayBuffer || t.Long && s instanceof t.Long) for (l = 0, 
                            u = arguments.length; l < u; ++l) void 0 !== (c = arguments[l]) && this.$set(r[l].name, c); else this.$set(s);
                        }, s = o.prototype = Object.create(t.Builder.Message.prototype);
                        s.add = function(e, r, i) {
                            var o = n._fieldsByName[e];
                            if (!i) {
                                if (!o) throw Error(this + "#" + e + " is undefined");
                                if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                                if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
                                r = o.verifyValue(r, !0);
                            }
                            return null === this[e] && (this[e] = []), this[e].push(r), this;
                        }, s.$add = s.add, s.set = function(e, r, i) {
                            if (e && "object" == typeof e) {
                                for (var o in i = r, e) e.hasOwnProperty(o) && void 0 !== (r = e[o]) && void 0 === n._oneofsByName[o] && this.$set(o, r, i);
                                return this;
                            }
                            var s = n._fieldsByName[e];
                            if (i) this[e] = r; else {
                                if (!s) throw Error(this + "#" + e + " is not a field: undefined");
                                if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                                this[s.name] = r = s.verifyValue(r);
                            }
                            if (s && s.oneof) {
                                var a = this[s.oneof.name];
                                null !== r ? (null !== a && a !== s.name && (this[a] = null), this[s.oneof.name] = s.name) : a === e && (this[s.oneof.name] = null);
                            }
                            return this;
                        }, s.$set = s.set, s.get = function(e, r) {
                            if (r) return this[e];
                            var i = n._fieldsByName[e];
                            if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                            if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                            return this[i.name];
                        }, s.$get = s.get;
                        for (var a = 0; a < r.length; a++) {
                            var l = r[a];
                            l instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function(e) {
                                var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                                    return e.toUpperCase().replace("_", "");
                                });
                                t = t.substring(0, 1).toUpperCase() + t.substring(1);
                                var r = e.originalName.replace(/([A-Z])/g, function(e) {
                                    return "_" + e;
                                }), i = function(t, n) {
                                    return this[e.name] = n ? t : e.verifyValue(t), this;
                                }, o = function() {
                                    return this[e.name];
                                };
                                null === n.getChild("set" + t) && (s["set" + t] = i), null === n.getChild("set_" + r) && (s["set_" + r] = i), 
                                null === n.getChild("get" + t) && (s["get" + t] = o), null === n.getChild("get_" + r) && (s["get_" + r] = o);
                            }(l);
                        }
                        function u(n, r, i, o) {
                            if (null === n || "object" != typeof n) {
                                if (o && o instanceof t.Reflect.Enum) {
                                    var s = t.Reflect.Enum.getName(o.object, n);
                                    if (null !== s) return s;
                                }
                                return n;
                            }
                            if (e.isByteBuffer(n)) return r ? n.toBase64() : n.toBuffer();
                            if (t.Long.isLong(n)) return i ? n.toString() : t.Long.fromValue(n);
                            var a;
                            if (Array.isArray(n)) return a = [], n.forEach(function(e, t) {
                                a[t] = u(e, r, i, o);
                            }), a;
                            if (a = {}, n instanceof t.Map) {
                                for (var l = n.entries(), h = l.next(); !h.done; h = l.next()) a[n.keyElem.valueToString(h.value[0])] = u(h.value[1], r, i, n.valueElem.resolvedType);
                                return a;
                            }
                            var c = n.$type, f = void 0;
                            for (var d in n) n.hasOwnProperty(d) && (c && (f = c.getChild(d)) ? a[d] = u(n[d], r, i, f.resolvedType) : a[d] = u(n[d], r, i));
                            return a;
                        }
                        return s.encode = function(t, r) {
                            "boolean" == typeof t && (r = t, t = void 0);
                            var i = !1;
                            t || (t = new e(), i = !0);
                            var o = t.littleEndian;
                            try {
                                return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o);
                            } catch (e) {
                                throw t.LE(o), e;
                            }
                        }, o.encode = function(e, t, n) {
                            return new o(e).encode(t, n);
                        }, s.calculate = function() {
                            return n.calculate(this);
                        }, s.encodeDelimited = function(t, r) {
                            var i = !1;
                            t || (t = new e(), i = !0);
                            var o = new e().LE();
                            return n.encode(this, o, r).flip(), t.writeVarint32(o.remaining()), t.append(o), 
                            i ? t.flip() : t;
                        }, s.encodeAB = function() {
                            try {
                                return this.encode().toArrayBuffer();
                            } catch (e) {
                                throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e;
                            }
                        }, s.toArrayBuffer = s.encodeAB, s.encodeNB = function() {
                            try {
                                return this.encode().toBuffer();
                            } catch (e) {
                                throw e.encoded && (e.encoded = e.encoded.toBuffer()), e;
                            }
                        }, s.toBuffer = s.encodeNB, s.encode64 = function() {
                            try {
                                return this.encode().toBase64();
                            } catch (e) {
                                throw e.encoded && (e.encoded = e.encoded.toBase64()), e;
                            }
                        }, s.toBase64 = s.encode64, s.encodeHex = function() {
                            try {
                                return this.encode().toHex();
                            } catch (e) {
                                throw e.encoded && (e.encoded = e.encoded.toHex()), e;
                            }
                        }, s.toHex = s.encodeHex, s.toRaw = function(e, t) {
                            return u(this, !!e, !!t, this.$type);
                        }, s.encodeJSON = function() {
                            return JSON.stringify(u(this, !0, !0, this.$type));
                        }, o.decode = function(t, r, i) {
                            "string" == typeof r && (i = r, r = -1), "string" == typeof t ? t = e.wrap(t, i || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                            var o = t.littleEndian;
                            try {
                                var s = n.decode(t.LE(), r);
                                return t.LE(o), s;
                            } catch (e) {
                                throw t.LE(o), e;
                            }
                        }, o.decodeDelimited = function(t, r) {
                            if ("string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), 
                            t.remaining() < 1) return null;
                            var i = t.offset, o = t.readVarint32();
                            if (t.remaining() < o) return t.offset = i, null;
                            try {
                                var s = n.decode(t.slice(t.offset, t.offset + o).LE());
                                return t.offset += o, s;
                            } catch (e) {
                                throw t.offset += o, e;
                            }
                        }, o.decode64 = function(e) {
                            return o.decode(e, "base64");
                        }, o.decodeHex = function(e) {
                            return o.decode(e, "hex");
                        }, o.decodeJSON = function(e) {
                            return new o(JSON.parse(e));
                        }, s.toString = function() {
                            return n.toString();
                        }, Object.defineProperty && (Object.defineProperty(o, "$options", {
                            value: n.buildOpt()
                        }), Object.defineProperty(s, "$options", {
                            value: o.$options
                        }), Object.defineProperty(o, "$type", {
                            value: n
                        }), Object.defineProperty(s, "$type", {
                            value: n
                        })), o;
                    }(t, this);
                    this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};
                    for (var i, o = 0, s = this.children.length; o < s; o++) if ((i = this.children[o]) instanceof m || i instanceof h || i instanceof b) {
                        if (r.hasOwnProperty(i.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + i.toString(!0) + " cannot override static property '" + i.name + "'");
                        r[i.name] = i.build();
                    } else if (i instanceof h.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, 
                    this._fieldsByName[i.name] = i; else if (i instanceof h.OneOf) this._oneofsByName[i.name] = i; else if (!(i instanceof h.OneOf || i instanceof v)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));
                    return this.clazz = r;
                }, c.encode = function(e, t, n) {
                    for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) i = e[(r = this._fields[s]).name], 
                    r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);
                    if (null !== o) {
                        var l = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
                        throw l.encoded = t, l;
                    }
                    return t;
                }, c.calculate = function(e) {
                    for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
                        if (n = e[(t = this._fields[i]).name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                        r += t.calculate(n, e);
                    }
                    return r;
                }, c.decode = function(e, n, r) {
                    "number" != typeof n && (n = -1);
                    for (var i, o, s, a, l = e.offset, u = new this.clazz(); e.offset < l + n || -1 === n && e.remaining() > 0; ) {
                        if (s = (i = e.readVarint32()) >>> 3, (o = 7 & i) === t.WIRE_TYPES.ENDGROUP) {
                            if (s !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (r ? r + " expected" : "not a group") + ")");
                            break;
                        }
                        if (a = this._fieldsById[s]) {
                            if (a.repeated && !a.options.packed) u[a.name].push(a.decode(o, e)); else if (a.map) {
                                var h = a.decode(o, e);
                                u[a.name].set(h[0], h[1]);
                            } else if (u[a.name] = a.decode(o, e), a.oneof) {
                                var c = u[a.oneof.name];
                                null !== c && c !== a.name && (u[c] = null), u[a.oneof.name] = a.name;
                            }
                        } else switch (o) {
                          case t.WIRE_TYPES.VARINT:
                            e.readVarint32();
                            break;

                          case t.WIRE_TYPES.BITS32:
                            e.offset += 4;
                            break;

                          case t.WIRE_TYPES.BITS64:
                            e.offset += 8;
                            break;

                          case t.WIRE_TYPES.LDELIM:
                            var d = e.readVarint32();
                            e.offset += d;
                            break;

                          case t.WIRE_TYPES.STARTGROUP:
                            for (;f(s, e); ) ;
                            break;

                          default:
                            throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + o);
                        }
                    }
                    for (var p = 0, g = this._fields.length; p < g; ++p) if (null === u[(a = this._fields[p]).name]) if ("proto3" === this.syntax) u[a.name] = a.defaultValue; else {
                        if (a.required) {
                            var m = Error("Missing at least one required field for " + this.toString(!0) + ": " + a.name);
                            throw m.decoded = u, m;
                        }
                        t.populateDefaults && null !== a.defaultValue && (u[a.name] = a.defaultValue);
                    }
                    return u;
                }, n.Message = h;
                var d = function(e, n, i, o, s, a, l, u, c, f) {
                    r.call(this, e, n, a), this.className = "Message.Field", this.required = "required" === i, 
                    this.repeated = "repeated" === i, this.map = "map" === i, this.keyType = o || null, 
                    this.type = s, this.resolvedType = null, this.id = l, this.options = u || {}, this.defaultValue = null, 
                    this.oneof = c || null, this.syntax = f || "proto2", this.originalName = this.name, 
                    this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof h.ExtensionField || (this.name = t.Util.toCamelCase(this.name));
                }, p = d.prototype = Object.create(r.prototype);
                p.build = function() {
                    this.element = new a(this.type, this.resolvedType, !1, this.syntax, this.name), 
                    this.map && (this.keyElement = new a(this.keyType, void 0, !0, this.syntax, this.name)), 
                    "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = a.defaultFieldValue(this.type);
                }, p.verifyValue = function(e, n) {
                    n = n || !1;
                    var r, i = this;
                    function o(e, t) {
                        throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")");
                    }
                    if (null === e) return this.required && o(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && o(typeof e, "proto3 field without field presence cannot be null"), 
                    null;
                    if (this.repeated && !n) {
                        Array.isArray(e) || (e = [ e ]);
                        var s = [];
                        for (r = 0; r < e.length; r++) s.push(this.element.verifyValue(e[r]));
                        return s;
                    }
                    return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || o(typeof e, "expected ProtoBuf.Map or raw object for map field"), 
                    new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && o(typeof e, "no array expected"), 
                    this.element.verifyValue(e));
                }, p.hasWirePresence = function(e, n) {
                    if ("proto3" !== this.syntax) return null !== e;
                    if (this.oneof && n[this.oneof.name] === this.name) return !0;
                    switch (this.type) {
                      case t.TYPES.int32:
                      case t.TYPES.sint32:
                      case t.TYPES.sfixed32:
                      case t.TYPES.uint32:
                      case t.TYPES.fixed32:
                        return 0 !== e;

                      case t.TYPES.int64:
                      case t.TYPES.sint64:
                      case t.TYPES.sfixed64:
                      case t.TYPES.uint64:
                      case t.TYPES.fixed64:
                        return 0 !== e.low || 0 !== e.high;

                      case t.TYPES.bool:
                        return e;

                      case t.TYPES.float:
                      case t.TYPES.double:
                        return 0 !== e;

                      case t.TYPES.string:
                        return e.length > 0;

                      case t.TYPES.bytes:
                        return e.remaining() > 0;

                      case t.TYPES.enum:
                        return 0 !== e;

                      case t.TYPES.message:
                        return null !== e;

                      default:
                        return !0;
                    }
                }, p.encode = function(n, r, i) {
                    if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                    if (null === n || this.repeated && 0 == n.length) return r;
                    try {
                        var o;
                        if (this.repeated) if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                            r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                            var s = r.offset;
                            for (o = 0; o < n.length; o++) this.element.encodeValue(this.id, n[o], r);
                            var a = r.offset - s, l = e.calculateVarint32(a);
                            if (l > 1) {
                                var u = r.slice(s, r.offset);
                                s += l - 1, r.offset = s, r.append(u);
                            }
                            r.writeVarint32(a, s - l);
                        } else for (o = 0; o < n.length; o++) r.writeVarint32(this.id << 3 | this.type.wireType), 
                        this.element.encodeValue(this.id, n[o], r); else this.map ? n.forEach(function(n, i, o) {
                            var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                            r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(s), r.writeVarint32(8 | this.keyType.wireType), 
                            this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), 
                            this.element.encodeValue(2, n, r);
                        }, this) : this.hasWirePresence(n, i) && (r.writeVarint32(this.id << 3 | this.type.wireType), 
                        this.element.encodeValue(this.id, n, r));
                    } catch (e) {
                        throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                    }
                    return r;
                }, p.calculate = function(n, r) {
                    if (n = this.verifyValue(n), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                    if (null === n || this.repeated && 0 == n.length) return 0;
                    var i = 0;
                    try {
                        var o, s;
                        if (this.repeated) if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                            for (i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0, o = 0; o < n.length; o++) s += this.element.calculateLength(this.id, n[o]);
                            i += e.calculateVarint32(s), i += s;
                        } else for (o = 0; o < n.length; o++) i += e.calculateVarint32(this.id << 3 | this.type.wireType), 
                        i += this.element.calculateLength(this.id, n[o]); else this.map ? n.forEach(function(n, r, o) {
                            var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                            i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), i += e.calculateVarint32(s), 
                            i += s;
                        }, this) : this.hasWirePresence(n, r) && (i += e.calculateVarint32(this.id << 3 | this.type.wireType), 
                        i += this.element.calculateLength(this.id, n));
                    } catch (e) {
                        throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                    }
                    return i;
                }, p.decode = function(e, n, r) {
                    var i, o;
                    if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
                    if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                        o = n.readVarint32(), o = n.offset + o;
                        for (var s = []; n.offset < o; ) s.push(this.decode(this.type.wireType, n, !0));
                        return s;
                    }
                    if (this.map) {
                        var l = a.defaultFieldValue(this.keyType);
                        if (i = a.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                        var u = n.clone();
                        for (u.limit = u.offset + o, n.offset += o; u.remaining() > 0; ) {
                            var h = u.readVarint32();
                            e = 7 & h;
                            var c = h >>> 3;
                            if (1 === c) l = this.keyElement.decode(u, e, c); else {
                                if (2 !== c) throw Error("Unexpected tag in map field key/value submessage");
                                i = this.element.decode(u, e, c);
                            }
                        }
                        return [ l, i ];
                    }
                    return this.element.decode(n, e, this.id);
                }, n.Message.Field = d;
                var g = function(e, t, n, r, i, o, s) {
                    d.call(this, e, t, n, null, r, i, o, s), this.extension;
                };
                g.prototype = Object.create(d.prototype), n.Message.ExtensionField = g, n.Message.OneOf = function(e, t, n) {
                    r.call(this, e, t, n), this.fields = [];
                };
                var m = function(e, t, n, r, i) {
                    o.call(this, e, t, n, r, i), this.className = "Enum", this.object = null;
                };
                m.getName = function(e, t) {
                    for (var n, r = Object.keys(e), i = 0; i < r.length; ++i) if (e[n = r[i]] === t) return n;
                    return null;
                }, (m.prototype = Object.create(o.prototype)).build = function(e) {
                    if (this.object && !e) return this.object;
                    for (var n = new t.Builder.Enum(), r = this.getChildren(m.Value), i = 0, o = r.length; i < o; ++i) n[r[i].name] = r[i].id;
                    return Object.defineProperty && Object.defineProperty(n, "$options", {
                        value: this.buildOpt(),
                        enumerable: !1
                    }), this.object = n;
                }, n.Enum = m;
                var y = function(e, t, n, i) {
                    r.call(this, e, t, n), this.className = "Enum.Value", this.id = i;
                };
                y.prototype = Object.create(r.prototype), n.Enum.Value = y;
                var v = function(e, t, n, i) {
                    r.call(this, e, t, n), this.field = i;
                };
                v.prototype = Object.create(r.prototype), n.Extension = v;
                var b = function(e, t, n, r) {
                    o.call(this, e, t, n, r), this.className = "Service", this.clazz = null;
                };
                (b.prototype = Object.create(o.prototype)).build = function(n) {
                    return this.clazz && !n ? this.clazz : this.clazz = function(t, n) {
                        for (var r = function(e) {
                            t.Builder.Service.call(this), this.rpcImpl = e || function(e, t, n) {
                                setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
                            };
                        }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) !function(t) {
                            i[t.name] = function(r, i) {
                                try {
                                    try {
                                        r = t.resolvedRequestType.clazz.decode(e.wrap(r));
                                    } catch (e) {
                                        if (!(e instanceof TypeError)) throw e;
                                    }
                                    if (null === r || "object" != typeof r) throw Error("Illegal arguments");
                                    r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r)), 
                                    this.rpcImpl(t.fqn(), r, function(e, r) {
                                        if (e) i(e); else {
                                            null === r && (r = "");
                                            try {
                                                r = t.resolvedResponseType.clazz.decode(r);
                                            } catch (e) {}
                                            r && r instanceof t.resolvedResponseType.clazz ? i(null, r) : i(Error("Illegal response type received in service method " + n.name + "#" + t.name));
                                        }
                                    });
                                } catch (e) {
                                    setTimeout(i.bind(this, e), 0);
                                }
                            }, r[t.name] = function(e, n, i) {
                                new r(e)[t.name](n, i);
                            }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                                value: t.buildOpt()
                            }), Object.defineProperty(i[t.name], "$options", {
                                value: r[t.name].$options
                            }));
                        }(o[s]);
                        return Object.defineProperty && (Object.defineProperty(r, "$options", {
                            value: n.buildOpt()
                        }), Object.defineProperty(i, "$options", {
                            value: r.$options
                        }), Object.defineProperty(r, "$type", {
                            value: n
                        }), Object.defineProperty(i, "$type", {
                            value: n
                        })), r;
                    }(t, this);
                }, n.Service = b;
                var w = function(e, t, n, i) {
                    r.call(this, e, t, n), this.className = "Service.Method", this.options = i || {};
                };
                (w.prototype = Object.create(r.prototype)).buildOpt = s.buildOpt, n.Service.Method = w;
                var _ = function(e, t, n, r, i, o, s, a) {
                    w.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, 
                    this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, 
                    this.resolvedResponseType = null;
                };
                return _.prototype = Object.create(w.prototype), n.Service.RPCMethod = _, n;
            }(r), r.Builder = function(e, t, n) {
                var r = function(e) {
                    this.ns = new n.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, 
                    this.result = null, this.files = {}, this.importRoot = null, this.options = e || {};
                }, i = r.prototype;
                return r.isMessage = function(e) {
                    return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc;
                }, r.isMessageField = function(e) {
                    return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id;
                }, r.isEnum = function(e) {
                    return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length);
                }, r.isService = function(e) {
                    return !("string" != typeof e.name || "object" != typeof e.rpc || !e.rpc);
                }, r.isExtend = function(e) {
                    return "string" == typeof e.ref;
                }, i.reset = function() {
                    return this.ptr = this.ns, this;
                }, i.define = function(e) {
                    if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                    return e.split(".").forEach(function(e) {
                        var t = this.ptr.getChild(e);
                        null === t && this.ptr.addChild(t = new n.Namespace(this, this.ptr, e)), this.ptr = t;
                    }, this), this;
                }, i.create = function(t) {
                    if (!t) return this;
                    if (Array.isArray(t)) {
                        if (0 === t.length) return this;
                        t = t.slice();
                    } else t = [ t ];
                    for (var i = [ t ]; i.length > 0; ) {
                        if (t = i.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
                        for (;t.length > 0; ) {
                            var o = t.shift();
                            if (r.isMessage(o)) {
                                var s = new n.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax), a = {};
                                o.oneofs && Object.keys(o.oneofs).forEach(function(e) {
                                    s.addChild(a[e] = new n.Message.OneOf(this, s, e));
                                }, this), o.fields && o.fields.forEach(function(e) {
                                    if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
                                    if (e.options && "object" != typeof e.options) throw Error("illegal field options in " + s.name + "#" + e.name);
                                    var t = null;
                                    if ("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
                                    e = new n.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, o.syntax), 
                                    t && t.fields.push(e), s.addChild(e);
                                }, this);
                                var l = [];
                                if (o.enums && o.enums.forEach(function(e) {
                                    l.push(e);
                                }), o.messages && o.messages.forEach(function(e) {
                                    l.push(e);
                                }), o.services && o.services.forEach(function(e) {
                                    l.push(e);
                                }), o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [ o.extensions ] : s.extensions = o.extensions), 
                                this.ptr.addChild(s), l.length > 0) {
                                    i.push(t), t = l, l = null, this.ptr = s, s = null;
                                    continue;
                                }
                                l = null;
                            } else if (r.isEnum(o)) s = new n.Enum(this, this.ptr, o.name, o.options, o.syntax), 
                            o.values.forEach(function(e) {
                                s.addChild(new n.Enum.Value(this, s, e.name, e.id));
                            }, this), this.ptr.addChild(s); else if (r.isService(o)) s = new n.Service(this, this.ptr, o.name, o.options), 
                            Object.keys(o.rpc).forEach(function(e) {
                                var t = o.rpc[e];
                                s.addChild(new n.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options));
                            }, this), this.ptr.addChild(s); else {
                                if (!r.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
                                if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function(t) {
                                    if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);
                                    if (s.extensions) {
                                        var r = !1;
                                        if (s.extensions.forEach(function(e) {
                                            t.id >= e[0] && t.id <= e[1] && (r = !0);
                                        }), !r) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)");
                                    }
                                    var i = t.name;
                                    this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                                    var o = new n.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options), a = new n.Extension(this, this.ptr, t.name, o);
                                    o.extension = a, this.ptr.addChild(a), s.addChild(o);
                                }, this); else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined");
                            }
                            o = null, s = null;
                        }
                        t = null, this.ptr = this.ptr.parent;
                    }
                    return this.resolved = !1, this.result = null, this;
                }, i.import = function(t, n) {
                    var r = "/";
                    if ("string" == typeof n) {
                        if (e.Util.IS_NODE && (n = ee.resolve(n)), !0 === this.files[n]) return this.reset();
                        this.files[n] = !0;
                    } else if ("object" == typeof n) {
                        var i, o = n.root;
                        if (e.Util.IS_NODE && (o = ee.resolve(o)), (o.indexOf("\\") >= 0 || n.file.indexOf("\\") >= 0) && (r = "\\"), 
                        i = e.Util.IS_NODE ? ee.join(o, n.file) : o + r + n.file, !0 === this.files[i]) return this.reset();
                        this.files[i] = !0;
                    }
                    if (t.imports && t.imports.length > 0) {
                        var s, a = !1;
                        "object" == typeof n ? (this.importRoot = n.root, a = !0, s = this.importRoot, n = n.file, 
                        (s.indexOf("\\") >= 0 || n.indexOf("\\") >= 0) && (r = "\\")) : "string" == typeof n ? this.importRoot ? s = this.importRoot : n.indexOf("/") >= 0 ? "" === (s = n.replace(/\/[^\/]*$/, "")) && (s = "/") : n.indexOf("\\") >= 0 ? (s = n.replace(/\\[^\\]*$/, ""), 
                        r = "\\") : s = "." : s = null;
                        for (var l = 0; l < t.imports.length; l++) if ("string" == typeof t.imports[l]) {
                            if (!s) throw Error("cannot determine import root");
                            var u = t.imports[l];
                            if ("google/protobuf/descriptor.proto" === u) continue;
                            if (u = e.Util.IS_NODE ? ee.join(s, u) : s + r + u, !0 === this.files[u]) continue;
                            /\.proto$/i.test(u) && !e.DotProto && (u = u.replace(/\.proto$/, ".json"));
                            var h = e.Util.fetch(u);
                            if (null === h) throw Error("failed to import '" + u + "' in '" + n + "': file not found");
                            /\.json$/i.test(u) ? this.import(JSON.parse(h + ""), u) : this.import(e.DotProto.Parser.parse(h), u);
                        } else n ? /\.(\w+)$/.test(n) ? this.import(t.imports[l], n.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                            return t + "_import" + l + "." + n;
                        })) : this.import(t.imports[l], n + "_import" + l) : this.import(t.imports[l]);
                        a && (this.importRoot = null);
                    }
                    t.package && this.define(t.package), t.syntax && function e(t) {
                        t.messages && t.messages.forEach(function(n) {
                            n.syntax = t.syntax, e(n);
                        }), t.enums && t.enums.forEach(function(e) {
                            e.syntax = t.syntax;
                        });
                    }(t);
                    var c = this.ptr;
                    return t.options && Object.keys(t.options).forEach(function(e) {
                        c.options[e] = t.options[e];
                    }), t.messages && (this.create(t.messages), this.ptr = c), t.enums && (this.create(t.enums), 
                    this.ptr = c), t.services && (this.create(t.services), this.ptr = c), t.extends && this.create(t.extends), 
                    this.reset();
                }, i.resolveAll = function() {
                    var r;
                    if (null == this.ptr || "object" == typeof this.ptr.type) return this;
                    if (this.ptr instanceof n.Namespace) this.ptr.children.forEach(function(e) {
                        this.ptr = e, this.resolveAll();
                    }, this); else if (this.ptr instanceof n.Message.Field) {
                        if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type]; else {
                            if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                            if (!(r = (this.ptr instanceof n.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                            if (this.ptr.resolvedType = r, r instanceof n.Enum) {
                                if (this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== r.syntax) throw Error("proto3 message cannot reference proto2 enum");
                            } else {
                                if (!(r instanceof n.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                this.ptr.type = r.isGroup ? e.TYPES.group : e.TYPES.message;
                            }
                        }
                        if (this.ptr.map) {
                            if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                            this.ptr.keyType = e.TYPES[this.ptr.keyType];
                        }
                        "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
                    } else if (this.ptr instanceof e.Reflect.Service.Method) {
                        if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                        if (!((r = this.ptr.parent.resolve(this.ptr.requestName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                        if (this.ptr.resolvedRequestType = r, !((r = this.ptr.parent.resolve(this.ptr.responseName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                        this.ptr.resolvedResponseType = r;
                    } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
                    return this.reset();
                }, i.build = function(e) {
                    if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), 
                    null === this.result && (this.result = this.ns.build()), !e) return this.result;
                    for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                        if (!n[t[r]]) {
                            n = null;
                            break;
                        }
                        n = n[t[r]];
                    }
                    return n;
                }, i.lookup = function(e, t) {
                    return e ? this.ns.resolve(e, t) : this.ns;
                }, i.toString = function() {
                    return "Builder";
                }, r.Message = function() {}, r.Enum = function() {}, r.Service = function() {}, 
                r;
            }(r, r.Lang, r.Reflect), r.Map = function(e, t) {
                var n = function(e, n) {
                    if (!e.map) throw Error("field is not a map");
                    if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), 
                    this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, 
                    Object.defineProperty(this, "size", {
                        get: function() {
                            return Object.keys(this.map).length;
                        }
                    }), n) for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = this.keyElem.valueFromString(r[i]), s = this.valueElem.verifyValue(n[r[i]]);
                        this.map[this.keyElem.valueToString(o)] = {
                            key: o,
                            value: s
                        };
                    }
                }, r = n.prototype;
                function i(e) {
                    var t = 0;
                    return {
                        next: function() {
                            return t < e.length ? {
                                done: !1,
                                value: e[t++]
                            } : {
                                done: !0
                            };
                        }
                    };
                }
                return r.clear = function() {
                    this.map = {};
                }, r.delete = function(e) {
                    var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)), n = t in this.map;
                    return delete this.map[t], n;
                }, r.entries = function() {
                    for (var e, t = [], n = Object.keys(this.map), r = 0; r < n.length; r++) t.push([ (e = this.map[n[r]]).key, e.value ]);
                    return i(t);
                }, r.keys = function() {
                    for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) e.push(this.map[t[n]].key);
                    return i(e);
                }, r.values = function() {
                    for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) e.push(this.map[t[n]].value);
                    return i(e);
                }, r.forEach = function(e, t) {
                    for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this);
                }, r.set = function(e, t) {
                    var n = this.keyElem.verifyValue(e), r = this.valueElem.verifyValue(t);
                    return this.map[this.keyElem.valueToString(n)] = {
                        key: n,
                        value: r
                    }, this;
                }, r.get = function(e) {
                    var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                    if (t in this.map) return this.map[t].value;
                }, r.has = function(e) {
                    return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map;
                }, n;
            }(0, r.Reflect), r.loadProto = function(e, t, n) {
                return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, 
                t = void 0), r.loadJson(r.DotProto.Parser.parse(e), t, n);
            }, r.protoFromString = r.loadProto, r.loadProtoFile = function(e, t, n) {
                if (t && "object" == typeof t ? (n = t, t = null) : t && "function" == typeof t || (t = null), 
                t) return r.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                    if (null !== i) try {
                        t(null, r.loadProto(i, n, e));
                    } catch (e) {
                        t(e);
                    } else t(Error("Failed to fetch file"));
                });
                var i = r.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                return null === i ? null : r.loadProto(i, n, e);
            }, r.protoFromFile = r.loadProtoFile, r.newBuilder = function(e) {
                return void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = r.convertFieldsToCamelCase), 
                void 0 === e.populateAccessors && (e.populateAccessors = r.populateAccessors), new r.Builder(e);
            }, r.loadJson = function(e, t, n) {
                return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, 
                t = null), t && "object" == typeof t || (t = r.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), 
                t.import(e, n), t.resolveAll(), t;
            }, r.loadJsonFile = function(e, t, n) {
                if (t && "object" == typeof t ? (n = t, t = null) : t && "function" == typeof t || (t = null), 
                t) return r.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                    if (null !== i) try {
                        t(null, r.loadJson(JSON.parse(i), n, e));
                    } catch (e) {
                        t(e);
                    } else t(Error("Failed to fetch file"));
                });
                var i = r.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                return null === i ? null : r.loadJson(JSON.parse(i), n, e);
            }, r;
        }, e && e.exports ? e.exports = n(Q) : (t.dcodeIO = t.dcodeIO || {}).ProtoBuf = n(t.dcodeIO.ByteBuffer);
    }).newBuilder({}).import({
        package: null,
        syntax: "proto2",
        options: {
            java_outer_classname: "TestEnvelopeProto"
        },
        messages: [ {
            name: "Browser",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "BrowserType",
                name: "browser",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "version",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "lang",
                id: 3
            } ]
        }, {
            name: "EnvelopeCommon",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "send_time",
                id: 1
            } ]
        }, {
            name: "Event",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int32",
                name: "type",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "subtype",
                id: 2
            }, {
                rule: "optional",
                type: "int64",
                name: "time",
                id: 3
            }, {
                rule: "optional",
                type: "int64",
                name: "reception_time",
                id: 4
            } ]
        }, {
            name: "Geo",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "bytes",
                name: "ip",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "country",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "region",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "city",
                id: 4
            }, {
                rule: "optional",
                type: "double",
                name: "latitude",
                id: 5
            }, {
                rule: "optional",
                type: "double",
                name: "longitude",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "isp",
                id: 7
            }, {
                rule: "optional",
                type: "int64",
                name: "asn",
                id: 8
            } ]
        }, {
            name: "Identity",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "guid",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "hwid",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "uuid",
                id: 3
            } ]
        }, {
            name: "Installation",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "aiid",
                id: 1
            }, {
                rule: "optional",
                type: "int64",
                name: "time",
                id: 2
            }, {
                rule: "optional",
                type: "SetupAction",
                name: "action",
                id: 3
            } ]
        }, {
            name: "License",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "wallet_key",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "container_id",
                id: 2
            }, {
                rule: "optional",
                type: "LicenseEdition",
                name: "edition",
                id: 3
            }, {
                rule: "optional",
                type: "ModeType",
                name: "type",
                id: 4
            }, {
                rule: "optional",
                type: "bool",
                name: "subscription_mode",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "schema_id",
                id: 6
            }, {
                rule: "optional",
                type: "int64",
                name: "issued",
                id: 7
            }, {
                rule: "optional",
                type: "int64",
                name: "activation",
                id: 8
            }, {
                rule: "optional",
                type: "int64",
                name: "valid_thru",
                id: 9
            }, {
                rule: "optional",
                type: "int32",
                name: "count",
                id: 10
            }, {
                rule: "optional",
                type: "int32",
                name: "count_device",
                id: 11
            } ]
        }, {
            name: "Platform",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "OperatingSystem",
                name: "os",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "version",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "build",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "ubr",
                id: 4
            }, {
                rule: "optional",
                type: "Architecture",
                name: "architecture",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "score",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "lang",
                id: 7
            }, {
                rule: "optional",
                type: "sint32",
                name: "time_zone",
                id: 8
            } ]
        }, {
            name: "Product",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int32",
                name: "id",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "edition",
                id: 2
            }, {
                rule: "optional",
                type: "ModeType",
                name: "mode",
                id: 3
            }, {
                rule: "optional",
                type: "StateType",
                name: "state",
                id: 4
            }, {
                rule: "optional",
                type: "string",
                name: "lang",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "version_app",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "version_gui",
                id: 7
            }, {
                rule: "optional",
                type: "int32",
                name: "build",
                id: 8
            }, {
                rule: "optional",
                type: "string",
                name: "partner_id",
                id: 9
            } ]
        }, {
            name: "Shepherd",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "id",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "name",
                id: 2
            }, {
                rule: "optional",
                type: "int64",
                name: "version",
                id: 3
            } ]
        }, {
            name: "Activity",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "ActivityCommon",
                name: "common",
                id: 1
            }, {
                rule: "optional",
                type: "ActivityObject",
                name: "object",
                id: 2
            }, {
                rule: "optional",
                type: "ActivityTime",
                name: "time",
                id: 3
            }, {
                rule: "optional",
                type: "ActivityScope",
                name: "scope",
                id: 4
            }, {
                rule: "optional",
                type: "ActivityCustom",
                name: "custom",
                id: 5
            } ]
        }, {
            name: "ActivityCommon",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "session_id",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "test_id",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "test_group_id",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "error_state",
                id: 4
            } ]
        }, {
            name: "ActivityObject",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "category",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "action",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "label",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "view",
                id: 4
            } ]
        }, {
            name: "ActivityTime",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "request",
                id: 1
            }, {
                rule: "optional",
                type: "int64",
                name: "response",
                id: 2
            }, {
                rule: "optional",
                type: "int64",
                name: "render",
                id: 3
            } ]
        }, {
            name: "ActivityScope",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "hit",
                id: 1
            }, {
                rule: "optional",
                type: "int64",
                name: "session",
                id: 2
            }, {
                rule: "optional",
                type: "int64",
                name: "user_level",
                id: 3
            } ]
        }, {
            name: "ActivityCustom",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "a1",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "a2",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "a3",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "a4",
                id: 4
            }, {
                rule: "optional",
                type: "string",
                name: "a5",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "a6",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "a7",
                id: 7
            }, {
                rule: "optional",
                type: "string",
                name: "a8",
                id: 8
            }, {
                rule: "optional",
                type: "string",
                name: "a9",
                id: 9
            }, {
                rule: "optional",
                type: "string",
                name: "a10",
                id: 10
            }, {
                rule: "optional",
                type: "string",
                name: "f1",
                id: 11
            }, {
                rule: "optional",
                type: "string",
                name: "f2",
                id: 12
            }, {
                rule: "optional",
                type: "string",
                name: "f3",
                id: 13
            }, {
                rule: "optional",
                type: "string",
                name: "f4",
                id: 14
            }, {
                rule: "optional",
                type: "string",
                name: "f5",
                id: 15
            }, {
                rule: "optional",
                type: "string",
                name: "f6",
                id: 16
            }, {
                rule: "optional",
                type: "string",
                name: "f7",
                id: 17
            }, {
                rule: "optional",
                type: "string",
                name: "f8",
                id: 18
            }, {
                rule: "optional",
                type: "string",
                name: "f9",
                id: 19
            }, {
                rule: "optional",
                type: "string",
                name: "f10",
                id: 20
            } ]
        }, {
            name: "ActivityEnvelope",
            syntax: "proto2",
            fields: [ {
                rule: "repeated",
                type: "ActivityRecord",
                name: "record",
                id: 1
            }, {
                rule: "optional",
                type: "EnvelopeCommon",
                name: "common",
                id: 2
            } ]
        }, {
            name: "ActivityRecord",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "Event",
                name: "event",
                id: 1
            }, {
                rule: "optional",
                type: "Identity",
                name: "identity",
                id: 2
            }, {
                rule: "optional",
                type: "Product",
                name: "product",
                id: 3
            }, {
                rule: "optional",
                type: "Platform",
                name: "platform",
                id: 4
            }, {
                rule: "optional",
                type: "Geo",
                name: "geo",
                id: 5
            }, {
                rule: "optional",
                type: "Installation",
                name: "installation",
                id: 6
            }, {
                rule: "optional",
                type: "License",
                name: "license",
                id: 7
            }, {
                rule: "optional",
                type: "Shepherd",
                name: "shepherd",
                id: 8
            }, {
                rule: "optional",
                type: "Browser",
                name: "browser",
                id: 10
            }, {
                rule: "optional",
                type: "Activity",
                name: "activity",
                id: 1e3
            } ]
        }, {
            name: "ConnectivityChecker",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "event_time",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "service_id",
                id: 2
            }, {
                rule: "optional",
                type: "int32",
                name: "status_code",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "error_code",
                id: 4
            }, {
                rule: "optional",
                type: "int32",
                name: "vpn",
                id: 5
            }, {
                rule: "optional",
                type: "int32",
                name: "wifi",
                id: 6
            }, {
                rule: "optional",
                type: "int32",
                name: "ipv4",
                id: 7
            }, {
                rule: "optional",
                type: "int32",
                name: "ipv6",
                id: 8
            }, {
                rule: "optional",
                type: "int32",
                name: "count",
                id: 9
            } ]
        }, {
            name: "ConnectivityCheckerEnvelope",
            syntax: "proto2",
            fields: [ {
                rule: "repeated",
                type: "ConnectivityCheckerRecord",
                name: "record",
                id: 1
            }, {
                rule: "optional",
                type: "EnvelopeCommon",
                name: "common",
                id: 2
            } ]
        }, {
            name: "ConnectivityCheckerRecord",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "Event",
                name: "event",
                id: 1
            }, {
                rule: "optional",
                type: "Identity",
                name: "identity",
                id: 2
            }, {
                rule: "optional",
                type: "Product",
                name: "product",
                id: 3
            }, {
                rule: "optional",
                type: "Platform",
                name: "platform",
                id: 4
            }, {
                rule: "optional",
                type: "Geo",
                name: "geo",
                id: 5
            }, {
                rule: "optional",
                type: "Installation",
                name: "installation",
                id: 6
            }, {
                rule: "optional",
                type: "License",
                name: "license",
                id: 7
            }, {
                rule: "optional",
                type: "Shepherd",
                name: "shepherd",
                id: 8
            }, {
                rule: "optional",
                type: "ConnectivityChecker",
                name: "connectivity_checker",
                id: 1e3
            } ]
        }, {
            name: "Heartbeat",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "uptime",
                id: 1
            }, {
                rule: "optional",
                type: "HeartbeatAV",
                name: "av",
                id: 2
            }, {
                rule: "optional",
                type: "HeartbeatVPN",
                name: "vpn",
                id: 3
            } ]
        }, {
            name: "HeartbeatAV",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "HeartbeatWinAV",
                name: "windows",
                id: 1
            } ]
        }, {
            name: "HeartbeatWinAV",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "WinAVGSMainStatus",
                name: "gs_main_status",
                id: 1
            } ]
        }, {
            name: "HeartbeatVPN",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "string",
                name: "vpn_name",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "connections_succeeded",
                id: 2
            }, {
                rule: "optional",
                type: "int32",
                name: "connections_failed",
                id: 3
            } ]
        }, {
            name: "HeartbeatEnvelope",
            syntax: "proto2",
            fields: [ {
                rule: "repeated",
                type: "HeartbeatRecord",
                name: "record",
                id: 1
            }, {
                rule: "optional",
                type: "EnvelopeCommon",
                name: "common",
                id: 2
            } ]
        }, {
            name: "HeartbeatRecord",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "Event",
                name: "event",
                id: 1
            }, {
                rule: "optional",
                type: "Identity",
                name: "identity",
                id: 2
            }, {
                rule: "optional",
                type: "Product",
                name: "product",
                id: 3
            }, {
                rule: "optional",
                type: "Platform",
                name: "platform",
                id: 4
            }, {
                rule: "optional",
                type: "Geo",
                name: "geo",
                id: 5
            }, {
                rule: "optional",
                type: "Installation",
                name: "installation",
                id: 6
            }, {
                rule: "optional",
                type: "License",
                name: "license",
                id: 7
            }, {
                rule: "optional",
                type: "Shepherd",
                name: "shepherd",
                id: 8
            }, {
                rule: "optional",
                type: "Browser",
                name: "browser",
                id: 10
            }, {
                rule: "optional",
                type: "Heartbeat",
                name: "heartbeat",
                id: 1e3
            } ]
        }, {
            name: "Order",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "int64",
                name: "unique_id",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "ordering",
                id: 2
            } ]
        }, {
            name: "InternalEnvelope",
            syntax: "proto2",
            fields: [ {
                rule: "repeated",
                type: "InternalRecord",
                name: "record",
                id: 1
            }, {
                rule: "optional",
                type: "EnvelopeCommon",
                name: "common",
                id: 2
            } ]
        }, {
            name: "InternalRecord",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "Event",
                name: "event",
                id: 1
            }, {
                rule: "optional",
                type: "Identity",
                name: "identity",
                id: 2
            }, {
                rule: "optional",
                type: "Product",
                name: "product",
                id: 3
            }, {
                rule: "optional",
                type: "Platform",
                name: "platform",
                id: 4
            }, {
                rule: "optional",
                type: "Geo",
                name: "geo",
                id: 5
            }, {
                rule: "optional",
                type: "Installation",
                name: "installation",
                id: 6
            }, {
                rule: "optional",
                type: "License",
                name: "license",
                id: 7
            }, {
                rule: "optional",
                type: "Shepherd",
                name: "shepherd",
                id: 8
            }, {
                rule: "optional",
                type: "Order",
                name: "order",
                id: 9
            }, {
                rule: "optional",
                type: "Browser",
                name: "browser",
                id: 10
            } ]
        }, {
            name: "TestEnvelope",
            syntax: "proto2",
            fields: [ {
                rule: "repeated",
                type: "TestRecord",
                name: "record",
                id: 1
            }, {
                rule: "optional",
                type: "EnvelopeCommon",
                name: "common",
                id: 2
            } ]
        }, {
            name: "TestRecord",
            syntax: "proto2",
            fields: [ {
                rule: "optional",
                type: "Event",
                name: "event",
                id: 1
            }, {
                rule: "optional",
                type: "Geo",
                name: "geo",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "test_id",
                id: 1e3
            } ]
        } ],
        enums: [ {
            name: "BrowserType",
            syntax: "proto2",
            values: [ {
                name: "OTHER_BROWSER",
                id: 1
            }, {
                name: "AVAST_SECURE_BROWSER",
                id: 2
            }, {
                name: "CHROME",
                id: 3
            }, {
                name: "FIREFOX",
                id: 4
            }, {
                name: "SAFARI",
                id: 5
            }, {
                name: "EDGE",
                id: 6
            }, {
                name: "OPERA",
                id: 7
            }, {
                name: "IE",
                id: 8
            }, {
                name: "PALE_MOON",
                id: 9
            }, {
                name: "NETSCAPE",
                id: 10
            }, {
                name: "UC",
                id: 11
            }, {
                name: "YAB",
                id: 12
            }, {
                name: "COC_COC",
                id: 13
            }, {
                name: "CHROMIUM",
                id: 14
            }, {
                name: "VIVALDI",
                id: 15
            } ]
        }, {
            name: "SetupAction",
            syntax: "proto2",
            values: [ {
                name: "NEW",
                id: 1
            }, {
                name: "UPGRADE",
                id: 2
            }, {
                name: "REINSTALL",
                id: 3
            } ]
        }, {
            name: "LicenseEdition",
            syntax: "proto2",
            values: [ {
                name: "AV_FREE",
                id: 1
            }, {
                name: "AV_PRO",
                id: 2
            }, {
                name: "AV_AIS",
                id: 3
            }, {
                name: "AV_APR",
                id: 4
            }, {
                name: "AV_BUSINESS",
                id: 5
            }, {
                name: "AV_VPN",
                id: 6
            }, {
                name: "GF_SRV",
                id: 7
            }, {
                name: "AV_PSW",
                id: 8
            }, {
                name: "AV_PAP",
                id: 9
            }, {
                name: "AV_PSM",
                id: 10
            }, {
                name: "AV_ASH",
                id: 12
            }, {
                name: "AV_SOHO",
                id: 13
            }, {
                name: "AV_AVG_PRO",
                id: 14
            }, {
                name: "AV_AVG_FREE",
                id: 15
            }, {
                name: "AV_AVG_BUSINESS",
                id: 16
            }, {
                name: "PCT_AVG_PRO",
                id: 17
            }, {
                name: "AVG_VPN",
                id: 18
            }, {
                name: "HMA_VPN_CONSUMER",
                id: 19
            }, {
                name: "HMA_VPN_TRIAL",
                id: 20
            }, {
                name: "HMA_VPN_BUSINESS",
                id: 21
            }, {
                name: "GF_V2",
                id: 22
            } ]
        }, {
            name: "ModeType",
            syntax: "proto2",
            values: [ {
                name: "NO_LICENSE",
                id: 1
            }, {
                name: "FREE",
                id: 2
            }, {
                name: "TRIAL",
                id: 3
            }, {
                name: "PAID",
                id: 4
            }, {
                name: "OEM",
                id: 5
            }, {
                name: "PRE_AUTH_TRIAL",
                id: 6
            }, {
                name: "BETA",
                id: 7
            }, {
                name: "FREEMIUM",
                id: 8
            }, {
                name: "TRIAL_HARDCODED",
                id: 9
            } ]
        }, {
            name: "StateType",
            syntax: "proto2",
            values: [ {
                name: "ACTIVE",
                id: 1
            }, {
                name: "EXPIRED",
                id: 2
            } ]
        }, {
            name: "OperatingSystem",
            syntax: "proto2",
            values: [ {
                name: "WINDOWS",
                id: 1
            }, {
                name: "OSX",
                id: 2
            }, {
                name: "IOS",
                id: 3
            }, {
                name: "LINUX",
                id: 4
            }, {
                name: "ANDROID",
                id: 5
            } ]
        }, {
            name: "Architecture",
            syntax: "proto2",
            values: [ {
                name: "X86",
                id: 1
            }, {
                name: "X64",
                id: 2
            }, {
                name: "ARM",
                id: 3
            }, {
                name: "ARM64",
                id: 4
            }, {
                name: "MIPS",
                id: 5
            } ]
        }, {
            name: "WinAVGSMainStatus",
            syntax: "proto2",
            values: [ {
                name: "NULL",
                id: 0
            }, {
                name: "GREEN",
                id: 1
            }, {
                name: "YELLOW",
                id: 2
            }, {
                name: "RED",
                id: 3
            } ]
        } ],
        isNamespace: !0
    }).build();
    const ne = {
        HeartbeatEnvelope: 2,
        ActivityEnvelope: 5
    }, re = Object.keys(ne).reduce(function(e, t) {
        return e[ne[t]] = t, e;
    }, {});
    var ie = {
        create: function(e) {
            return function(t) {
                const n = t.record[0].event.type;
                return {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/octet-stream"
                    },
                    body: new (0, e[re[n]])(t).encodeAB()
                };
            };
        }
    }, oe = _(function(e, t) {
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.assign = function(e) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                var n = t.shift();
                if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (var i in n) r(n, i) && (e[i] = n[i]);
                }
            }
            return e;
        }, t.shrinkBuf = function(e, t) {
            return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
        };
        var i = {
            arraySet: function(e, t, n, r, i) {
                if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i); else for (var o = 0; o < r; o++) e[i + o] = t[n + o];
            },
            flattenChunks: function(e) {
                var t, n, r, i, o, s;
                for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
                for (s = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) o = e[t], s.set(o, i), 
                i += o.length;
                return s;
            }
        }, o = {
            arraySet: function(e, t, n, r, i) {
                for (var o = 0; o < r; o++) e[i + o] = t[n + o];
            },
            flattenChunks: function(e) {
                return [].concat.apply([], e);
            }
        };
        t.setTyped = function(e) {
            e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, i)) : (t.Buf8 = Array, 
            t.Buf16 = Array, t.Buf32 = Array, t.assign(t, o));
        }, t.setTyped(n);
    }), se = (oe.assign, oe.shrinkBuf, oe.setTyped, oe.Buf8, oe.Buf16, oe.Buf32, 4);
    function ae(e) {
        for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    var le = 0, ue = 256, he = ue + 1 + 29, ce = 30, fe = 19, de = 2 * he + 1, pe = 15, ge = 16, me = 256, ye = 16, ve = 17, be = 18, we = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], _e = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], Ee = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], Se = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], Te = new Array(2 * (he + 2));
    ae(Te);
    var Ce = new Array(2 * ce);
    ae(Ce);
    var xe = new Array(512);
    ae(xe);
    var ke = new Array(256);
    ae(ke);
    var Ie = new Array(29);
    ae(Ie);
    var Ae, Pe, Ne, Le = new Array(ce);
    function Re(e, t, n, r, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, 
        this.max_length = i, this.has_stree = e && e.length;
    }
    function Oe(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
    }
    function Fe(e) {
        return e < 256 ? xe[e] : xe[256 + (e >>> 7)];
    }
    function Ue(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
    }
    function Be(e, t, n) {
        e.bi_valid > ge - n ? (e.bi_buf |= t << e.bi_valid & 65535, Ue(e, e.bi_buf), e.bi_buf = t >> ge - e.bi_valid, 
        e.bi_valid += n - ge) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
    }
    function Me(e, t, n) {
        Be(e, n[2 * t], n[2 * t + 1]);
    }
    function Ve(e, t) {
        var n = 0;
        do {
            n |= 1 & e, e >>>= 1, n <<= 1;
        } while (--t > 0);
        return n >>> 1;
    }
    function ze(e, t, n) {
        var r, i, o = new Array(pe + 1), s = 0;
        for (r = 1; r <= pe; r++) o[r] = s = s + n[r - 1] << 1;
        for (i = 0; i <= t; i++) {
            var a = e[2 * i + 1];
            0 !== a && (e[2 * i] = Ve(o[a]++, a));
        }
    }
    function je(e) {
        var t;
        for (t = 0; t < he; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < ce; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < fe; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[2 * me] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
    }
    function De(e) {
        e.bi_valid > 8 ? Ue(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), 
        e.bi_buf = 0, e.bi_valid = 0;
    }
    function Ye(e, t, n, r) {
        var i = 2 * t, o = 2 * n;
        return e[i] < e[o] || e[i] === e[o] && r[t] <= r[n];
    }
    function He(e, t, n) {
        for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && Ye(t, e.heap[i + 1], e.heap[i], e.depth) && i++, 
        !Ye(t, r, e.heap[i], e.depth)); ) e.heap[n] = e.heap[i], n = i, i <<= 1;
        e.heap[n] = r;
    }
    function qe(e, t, n) {
        var r, i, o, s, a = 0;
        if (0 !== e.last_lit) do {
            r = e.pending_buf[e.d_buf + 2 * a] << 8 | e.pending_buf[e.d_buf + 2 * a + 1], i = e.pending_buf[e.l_buf + a], 
            a++, 0 === r ? Me(e, i, t) : (Me(e, (o = ke[i]) + ue + 1, t), 0 !== (s = we[o]) && Be(e, i -= Ie[o], s), 
            Me(e, o = Fe(--r), n), 0 !== (s = _e[o]) && Be(e, r -= Le[o], s));
        } while (a < e.last_lit);
        Me(e, me, t);
    }
    function $e(e, t) {
        var n, r, i, o = t.dyn_tree, s = t.stat_desc.static_tree, a = t.stat_desc.has_stree, l = t.stat_desc.elems, u = -1;
        for (e.heap_len = 0, e.heap_max = de, n = 0; n < l; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = u = n, 
        e.depth[n] = 0) : o[2 * n + 1] = 0;
        for (;e.heap_len < 2; ) o[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, 
        e.depth[i] = 0, e.opt_len--, a && (e.static_len -= s[2 * i + 1]);
        for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) He(e, o, n);
        i = l;
        do {
            n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], He(e, o, 1), r = e.heap[1], e.heap[--e.heap_max] = n, 
            e.heap[--e.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, 
            o[2 * n + 1] = o[2 * r + 1] = i, e.heap[1] = i++, He(e, o, 1);
        } while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1], function(e, t) {
            var n, r, i, o, s, a, l = t.dyn_tree, u = t.max_code, h = t.stat_desc.static_tree, c = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, g = 0;
            for (o = 0; o <= pe; o++) e.bl_count[o] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < de; n++) (o = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > p && (o = p, 
            g++), l[2 * r + 1] = o, r > u || (e.bl_count[o]++, s = 0, r >= d && (s = f[r - d]), 
            a = l[2 * r], e.opt_len += a * (o + s), c && (e.static_len += a * (h[2 * r + 1] + s)));
            if (0 !== g) {
                do {
                    for (o = p - 1; 0 === e.bl_count[o]; ) o--;
                    e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[p]--, g -= 2;
                } while (g > 0);
                for (o = p; 0 !== o; o--) for (r = e.bl_count[o]; 0 !== r; ) (i = e.heap[--n]) > u || (l[2 * i + 1] !== o && (e.opt_len += (o - l[2 * i + 1]) * l[2 * i], 
                l[2 * i + 1] = o), r--);
            }
        }(e, t), ze(o, u, e.bl_count);
    }
    function We(e, t, n) {
        var r, i, o = -1, s = t[1], a = 0, l = 7, u = 4;
        for (0 === s && (l = 138, u = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = s, 
        s = t[2 * (r + 1) + 1], ++a < l && i === s || (a < u ? e.bl_tree[2 * i] += a : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, 
        e.bl_tree[2 * ye]++) : a <= 10 ? e.bl_tree[2 * ve]++ : e.bl_tree[2 * be]++, a = 0, 
        o = i, 0 === s ? (l = 138, u = 3) : i === s ? (l = 6, u = 3) : (l = 7, u = 4));
    }
    function Ke(e, t, n) {
        var r, i, o = -1, s = t[1], a = 0, l = 7, u = 4;
        for (0 === s && (l = 138, u = 3), r = 0; r <= n; r++) if (i = s, s = t[2 * (r + 1) + 1], 
        !(++a < l && i === s)) {
            if (a < u) do {
                Me(e, i, e.bl_tree);
            } while (0 != --a); else 0 !== i ? (i !== o && (Me(e, i, e.bl_tree), a--), Me(e, ye, e.bl_tree), 
            Be(e, a - 3, 2)) : a <= 10 ? (Me(e, ve, e.bl_tree), Be(e, a - 3, 3)) : (Me(e, be, e.bl_tree), 
            Be(e, a - 11, 7));
            a = 0, o = i, 0 === s ? (l = 138, u = 3) : i === s ? (l = 6, u = 3) : (l = 7, u = 4);
        }
    }
    ae(Le);
    var Ge = !1;
    function Ze(e, t, n, r) {
        Be(e, (le << 1) + (r ? 1 : 0), 3), function(e, t, n, r) {
            De(e), Ue(e, n), Ue(e, ~n), oe.arraySet(e.pending_buf, e.window, t, n, e.pending), 
            e.pending += n;
        }(e, t, n);
    }
    var Je, Xe = {
        _tr_init: function(e) {
            Ge || (function() {
                var e, t, n, r, i, o = new Array(pe + 1);
                for (n = 0, r = 0; r < 28; r++) for (Ie[r] = n, e = 0; e < 1 << we[r]; e++) ke[n++] = r;
                for (ke[n - 1] = r, i = 0, r = 0; r < 16; r++) for (Le[r] = i, e = 0; e < 1 << _e[r]; e++) xe[i++] = r;
                for (i >>= 7; r < ce; r++) for (Le[r] = i << 7, e = 0; e < 1 << _e[r] - 7; e++) xe[256 + i++] = r;
                for (t = 0; t <= pe; t++) o[t] = 0;
                for (e = 0; e <= 143; ) Te[2 * e + 1] = 8, e++, o[8]++;
                for (;e <= 255; ) Te[2 * e + 1] = 9, e++, o[9]++;
                for (;e <= 279; ) Te[2 * e + 1] = 7, e++, o[7]++;
                for (;e <= 287; ) Te[2 * e + 1] = 8, e++, o[8]++;
                for (ze(Te, he + 1, o), e = 0; e < ce; e++) Ce[2 * e + 1] = 5, Ce[2 * e] = Ve(e, 5);
                Ae = new Re(Te, we, ue + 1, he, pe), Pe = new Re(Ce, _e, 0, ce, pe), Ne = new Re(new Array(0), Ee, 0, fe, 7);
            }(), Ge = !0), e.l_desc = new Oe(e.dyn_ltree, Ae), e.d_desc = new Oe(e.dyn_dtree, Pe), 
            e.bl_desc = new Oe(e.bl_tree, Ne), e.bi_buf = 0, e.bi_valid = 0, je(e);
        },
        _tr_stored_block: Ze,
        _tr_flush_block: function(e, t, n, r) {
            var i, o, s = 0;
            e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                var t, n = 4093624447;
                for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                for (t = 32; t < ue; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                return 0;
            }(e)), $e(e, e.l_desc), $e(e, e.d_desc), s = function(e) {
                var t;
                for (We(e, e.dyn_ltree, e.l_desc.max_code), We(e, e.dyn_dtree, e.d_desc.max_code), 
                $e(e, e.bl_desc), t = fe - 1; t >= 3 && 0 === e.bl_tree[2 * Se[t] + 1]; t--) ;
                return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
            }(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, 
            n + 4 <= i && -1 !== t ? Ze(e, t, n, r) : e.strategy === se || o === i ? (Be(e, 2 + (r ? 1 : 0), 3), 
            qe(e, Te, Ce)) : (Be(e, 4 + (r ? 1 : 0), 3), function(e, t, n, r) {
                var i;
                for (Be(e, t - 257, 5), Be(e, n - 1, 5), Be(e, r - 4, 4), i = 0; i < r; i++) Be(e, e.bl_tree[2 * Se[i] + 1], 3);
                Ke(e, e.dyn_ltree, t - 1), Ke(e, e.dyn_dtree, n - 1);
            }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), qe(e, e.dyn_ltree, e.dyn_dtree)), 
            je(e), r && De(e);
        },
        _tr_tally: function(e, t, n) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, 
            e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, 
            t--, e.dyn_ltree[2 * (ke[n] + ue + 1)]++, e.dyn_dtree[2 * Fe(t)]++), e.last_lit === e.lit_bufsize - 1;
        },
        _tr_align: function(e) {
            Be(e, 2, 3), Me(e, me, Te), function(e) {
                16 === e.bi_valid ? (Ue(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, 
                e.bi_buf >>= 8, e.bi_valid -= 8);
            }(e);
        }
    }, Qe = function(e, t, n, r) {
        for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== n; ) {
            n -= s = n > 2e3 ? 2e3 : n;
            do {
                o = o + (i = i + t[r++] | 0) | 0;
            } while (--s);
            i %= 65521, o %= 65521;
        }
        return i | o << 16 | 0;
    }, et = function() {
        for (var e, t = [], n = 0; n < 256; n++) {
            e = n;
            for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[n] = e;
        }
        return t;
    }(), tt = function(e, t, n, r) {
        var i = et, o = r + n;
        e ^= -1;
        for (var s = r; s < o; s++) e = e >>> 8 ^ i[255 & (e ^ t[s])];
        return -1 ^ e;
    }, nt = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }, rt = 0, it = 4, ot = 0, st = -2, at = -1, lt = 1, ut = 4, ht = 2, ct = 8, ft = 9, dt = 286, pt = 30, gt = 19, mt = 2 * dt + 1, yt = 15, vt = 3, bt = 258, wt = bt + vt + 1, _t = 42, Et = 113, St = 1, Tt = 2, Ct = 3, xt = 4;
    function kt(e, t) {
        return e.msg = nt[t], t;
    }
    function It(e) {
        return (e << 1) - (e > 4 ? 9 : 0);
    }
    function At(e) {
        for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    function Pt(e) {
        var t = e.state, n = t.pending;
        n > e.avail_out && (n = e.avail_out), 0 !== n && (oe.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), 
        e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 
        0 === t.pending && (t.pending_out = 0));
    }
    function Nt(e, t) {
        Xe._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), 
        e.block_start = e.strstart, Pt(e.strm);
    }
    function Lt(e, t) {
        e.pending_buf[e.pending++] = t;
    }
    function Rt(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
    }
    function Ot(e, t) {
        var n, r, i = e.max_chain_length, o = e.strstart, s = e.prev_length, a = e.nice_match, l = e.strstart > e.w_size - wt ? e.strstart - (e.w_size - wt) : 0, u = e.window, h = e.w_mask, c = e.prev, f = e.strstart + bt, d = u[o + s - 1], p = u[o + s];
        e.prev_length >= e.good_match && (i >>= 2), a > e.lookahead && (a = e.lookahead);
        do {
            if (u[(n = t) + s] === p && u[n + s - 1] === d && u[n] === u[o] && u[++n] === u[o + 1]) {
                o += 2, n++;
                do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < f);
                if (r = bt - (f - o), o = f - bt, r > s) {
                    if (e.match_start = t, s = r, r >= a) break;
                    d = u[o + s - 1], p = u[o + s];
                }
            }
        } while ((t = c[t & h]) > l && 0 != --i);
        return s <= e.lookahead ? s : e.lookahead;
    }
    function Ft(e) {
        var t, n, r, i, o, s, a, l, u, h, c = e.w_size;
        do {
            if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= c + (c - wt)) {
                oe.arraySet(e.window, e.window, c, c, 0), e.match_start -= c, e.strstart -= c, e.block_start -= c, 
                t = n = e.hash_size;
                do {
                    r = e.head[--t], e.head[t] = r >= c ? r - c : 0;
                } while (--n);
                t = n = c;
                do {
                    r = e.prev[--t], e.prev[t] = r >= c ? r - c : 0;
                } while (--n);
                i += c;
            }
            if (0 === e.strm.avail_in) break;
            if (s = e.strm, a = e.window, l = e.strstart + e.lookahead, u = i, h = void 0, (h = s.avail_in) > u && (h = u), 
            n = 0 === h ? 0 : (s.avail_in -= h, oe.arraySet(a, s.input, s.next_in, h, l), 1 === s.state.wrap ? s.adler = Qe(s.adler, a, h, l) : 2 === s.state.wrap && (s.adler = tt(s.adler, a, h, l)), 
            s.next_in += h, s.total_in += h, h), e.lookahead += n, e.lookahead + e.insert >= vt) for (o = e.strstart - e.insert, 
            e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + vt - 1]) & e.hash_mask, 
            e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < vt)); ) ;
        } while (e.lookahead < wt && 0 !== e.strm.avail_in);
    }
    function Ut(e, t) {
        for (var n, r; ;) {
            if (e.lookahead < wt) {
                if (Ft(e), e.lookahead < wt && t === rt) return St;
                if (0 === e.lookahead) break;
            }
            if (n = 0, e.lookahead >= vt && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + vt - 1]) & e.hash_mask, 
            n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
            0 !== n && e.strstart - n <= e.w_size - wt && (e.match_length = Ot(e, n)), e.match_length >= vt) if (r = Xe._tr_tally(e, e.strstart - e.match_start, e.match_length - vt), 
            e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= vt) {
                e.match_length--;
                do {
                    e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + vt - 1]) & e.hash_mask, 
                    n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
                } while (0 != --e.match_length);
                e.strstart++;
            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], 
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask; else r = Xe._tr_tally(e, 0, e.window[e.strstart]), 
            e.lookahead--, e.strstart++;
            if (r && (Nt(e, !1), 0 === e.strm.avail_out)) return St;
        }
        return e.insert = e.strstart < vt - 1 ? e.strstart : vt - 1, t === it ? (Nt(e, !0), 
        0 === e.strm.avail_out ? Ct : xt) : e.last_lit && (Nt(e, !1), 0 === e.strm.avail_out) ? St : Tt;
    }
    function Bt(e, t) {
        for (var n, r, i; ;) {
            if (e.lookahead < wt) {
                if (Ft(e), e.lookahead < wt && t === rt) return St;
                if (0 === e.lookahead) break;
            }
            if (n = 0, e.lookahead >= vt && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + vt - 1]) & e.hash_mask, 
            n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
            e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = vt - 1, 
            0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - wt && (e.match_length = Ot(e, n), 
            e.match_length <= 5 && (e.strategy === lt || e.match_length === vt && e.strstart - e.match_start > 4096) && (e.match_length = vt - 1)), 
            e.prev_length >= vt && e.match_length <= e.prev_length) {
                i = e.strstart + e.lookahead - vt, r = Xe._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - vt), 
                e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do {
                    ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + vt - 1]) & e.hash_mask, 
                    n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
                } while (0 != --e.prev_length);
                if (e.match_available = 0, e.match_length = vt - 1, e.strstart++, r && (Nt(e, !1), 
                0 === e.strm.avail_out)) return St;
            } else if (e.match_available) {
                if ((r = Xe._tr_tally(e, 0, e.window[e.strstart - 1])) && Nt(e, !1), e.strstart++, 
                e.lookahead--, 0 === e.strm.avail_out) return St;
            } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (r = Xe._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), 
        e.insert = e.strstart < vt - 1 ? e.strstart : vt - 1, t === it ? (Nt(e, !0), 0 === e.strm.avail_out ? Ct : xt) : e.last_lit && (Nt(e, !1), 
        0 === e.strm.avail_out) ? St : Tt;
    }
    function Mt(e, t, n, r, i) {
        this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, 
        this.func = i;
    }
    function Vt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, 
        this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, 
        this.method = ct, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, 
        this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, 
        this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, 
        this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, 
        this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, 
        this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, 
        this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new oe.Buf16(2 * mt), 
        this.dyn_dtree = new oe.Buf16(2 * (2 * pt + 1)), this.bl_tree = new oe.Buf16(2 * (2 * gt + 1)), 
        At(this.dyn_ltree), At(this.dyn_dtree), At(this.bl_tree), this.l_desc = null, this.d_desc = null, 
        this.bl_desc = null, this.bl_count = new oe.Buf16(yt + 1), this.heap = new oe.Buf16(2 * dt + 1), 
        At(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new oe.Buf16(2 * dt + 1), 
        At(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, 
        this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, 
        this.bi_valid = 0;
    }
    function zt(e) {
        var t;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = ht, (t = e.state).pending = 0, 
        t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? _t : Et, 
        e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = rt, Xe._tr_init(t), ot) : kt(e, st);
    }
    function jt(e) {
        var t, n = zt(e);
        return n === ot && ((t = e.state).window_size = 2 * t.w_size, At(t.head), t.max_lazy_match = Je[t.level].max_lazy, 
        t.good_match = Je[t.level].good_length, t.nice_match = Je[t.level].nice_length, 
        t.max_chain_length = Je[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, 
        t.insert = 0, t.match_length = t.prev_length = vt - 1, t.match_available = 0, t.ins_h = 0), 
        n;
    }
    function Dt(e, t, n, r, i, o) {
        if (!e) return st;
        var s = 1;
        if (t === at && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), i < 1 || i > ft || n !== ct || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > ut) return kt(e, st);
        8 === r && (r = 9);
        var a = new Vt();
        return e.state = a, a.strm = e, a.wrap = s, a.gzhead = null, a.w_bits = r, a.w_size = 1 << a.w_bits, 
        a.w_mask = a.w_size - 1, a.hash_bits = i + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, 
        a.hash_shift = ~~((a.hash_bits + vt - 1) / vt), a.window = new oe.Buf8(2 * a.w_size), 
        a.head = new oe.Buf16(a.hash_size), a.prev = new oe.Buf16(a.w_size), a.lit_bufsize = 1 << i + 6, 
        a.pending_buf_size = 4 * a.lit_bufsize, a.pending_buf = new oe.Buf8(a.pending_buf_size), 
        a.d_buf = 1 * a.lit_bufsize, a.l_buf = 3 * a.lit_bufsize, a.level = t, a.strategy = o, 
        a.method = n, jt(e);
    }
    Je = [ new Mt(0, 0, 0, 0, function(e, t) {
        var n = 65535;
        for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
            if (e.lookahead <= 1) {
                if (Ft(e), 0 === e.lookahead && t === rt) return St;
                if (0 === e.lookahead) break;
            }
            e.strstart += e.lookahead, e.lookahead = 0;
            var r = e.block_start + n;
            if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, 
            Nt(e, !1), 0 === e.strm.avail_out)) return St;
            if (e.strstart - e.block_start >= e.w_size - wt && (Nt(e, !1), 0 === e.strm.avail_out)) return St;
        }
        return e.insert = 0, t === it ? (Nt(e, !0), 0 === e.strm.avail_out ? Ct : xt) : (e.strstart > e.block_start && (Nt(e, !1), 
        e.strm.avail_out), St);
    }), new Mt(4, 4, 8, 4, Ut), new Mt(4, 5, 16, 8, Ut), new Mt(4, 6, 32, 32, Ut), new Mt(4, 4, 16, 16, Bt), new Mt(8, 16, 32, 32, Bt), new Mt(8, 16, 128, 128, Bt), new Mt(8, 32, 128, 256, Bt), new Mt(32, 128, 258, 1024, Bt), new Mt(32, 258, 258, 4096, Bt) ];
    var Yt = {
        deflateInit: function(e, t) {
            return Dt(e, t, ct, 15, 8, 0);
        },
        deflateInit2: Dt,
        deflateReset: jt,
        deflateResetKeep: zt,
        deflateSetHeader: function(e, t) {
            return e && e.state ? 2 !== e.state.wrap ? st : (e.state.gzhead = t, ot) : st;
        },
        deflate: function(e, t) {
            var n, r, i, o;
            if (!e || !e.state || t > 5 || t < 0) return e ? kt(e, st) : st;
            if (r = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === r.status && t !== it) return kt(e, 0 === e.avail_out ? -5 : st);
            if (r.strm = e, n = r.last_flush, r.last_flush = t, r.status === _t) if (2 === r.wrap) e.adler = 0, 
            Lt(r, 31), Lt(r, 139), Lt(r, 8), r.gzhead ? (Lt(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), 
            Lt(r, 255 & r.gzhead.time), Lt(r, r.gzhead.time >> 8 & 255), Lt(r, r.gzhead.time >> 16 & 255), 
            Lt(r, r.gzhead.time >> 24 & 255), Lt(r, 9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0), 
            Lt(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (Lt(r, 255 & r.gzhead.extra.length), 
            Lt(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = tt(e.adler, r.pending_buf, r.pending, 0)), 
            r.gzindex = 0, r.status = 69) : (Lt(r, 0), Lt(r, 0), Lt(r, 0), Lt(r, 0), Lt(r, 0), 
            Lt(r, 9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0), Lt(r, 3), r.status = Et); else {
                var s = ct + (r.w_bits - 8 << 4) << 8;
                s |= (r.strategy >= 2 || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6, 
                0 !== r.strstart && (s |= 32), s += 31 - s % 31, r.status = Et, Rt(r, s), 0 !== r.strstart && (Rt(r, e.adler >>> 16), 
                Rt(r, 65535 & e.adler)), e.adler = 1;
            }
            if (69 === r.status) if (r.gzhead.extra) {
                for (i = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                Pt(e), i = r.pending, r.pending !== r.pending_buf_size)); ) Lt(r, 255 & r.gzhead.extra[r.gzindex]), 
                r.gzindex++;
                r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = 73);
            } else r.status = 73;
            if (73 === r.status) if (r.gzhead.name) {
                i = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                    Pt(e), i = r.pending, r.pending === r.pending_buf_size)) {
                        o = 1;
                        break;
                    }
                    o = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0, 
                    Lt(r, o);
                } while (0 !== o);
                r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                0 === o && (r.gzindex = 0, r.status = 91);
            } else r.status = 91;
            if (91 === r.status) if (r.gzhead.comment) {
                i = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                    Pt(e), i = r.pending, r.pending === r.pending_buf_size)) {
                        o = 1;
                        break;
                    }
                    o = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0, 
                    Lt(r, o);
                } while (0 !== o);
                r.gzhead.hcrc && r.pending > i && (e.adler = tt(e.adler, r.pending_buf, r.pending - i, i)), 
                0 === o && (r.status = 103);
            } else r.status = 103;
            if (103 === r.status && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Pt(e), 
            r.pending + 2 <= r.pending_buf_size && (Lt(r, 255 & e.adler), Lt(r, e.adler >> 8 & 255), 
            e.adler = 0, r.status = Et)) : r.status = Et), 0 !== r.pending) {
                if (Pt(e), 0 === e.avail_out) return r.last_flush = -1, ot;
            } else if (0 === e.avail_in && It(t) <= It(n) && t !== it) return kt(e, -5);
            if (666 === r.status && 0 !== e.avail_in) return kt(e, -5);
            if (0 !== e.avail_in || 0 !== r.lookahead || t !== rt && 666 !== r.status) {
                var a = 2 === r.strategy ? function(e, t) {
                    for (var n; ;) {
                        if (0 === e.lookahead && (Ft(e), 0 === e.lookahead)) {
                            if (t === rt) return St;
                            break;
                        }
                        if (e.match_length = 0, n = Xe._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, 
                        e.strstart++, n && (Nt(e, !1), 0 === e.strm.avail_out)) return St;
                    }
                    return e.insert = 0, t === it ? (Nt(e, !0), 0 === e.strm.avail_out ? Ct : xt) : e.last_lit && (Nt(e, !1), 
                    0 === e.strm.avail_out) ? St : Tt;
                }(r, t) : 3 === r.strategy ? function(e, t) {
                    for (var n, r, i, o, s = e.window; ;) {
                        if (e.lookahead <= bt) {
                            if (Ft(e), e.lookahead <= bt && t === rt) return St;
                            if (0 === e.lookahead) break;
                        }
                        if (e.match_length = 0, e.lookahead >= vt && e.strstart > 0 && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
                            o = e.strstart + bt;
                            do {} while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
                            e.match_length = bt - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                        }
                        if (e.match_length >= vt ? (n = Xe._tr_tally(e, 1, e.match_length - vt), e.lookahead -= e.match_length, 
                        e.strstart += e.match_length, e.match_length = 0) : (n = Xe._tr_tally(e, 0, e.window[e.strstart]), 
                        e.lookahead--, e.strstart++), n && (Nt(e, !1), 0 === e.strm.avail_out)) return St;
                    }
                    return e.insert = 0, t === it ? (Nt(e, !0), 0 === e.strm.avail_out ? Ct : xt) : e.last_lit && (Nt(e, !1), 
                    0 === e.strm.avail_out) ? St : Tt;
                }(r, t) : Je[r.level].func(r, t);
                if (a !== Ct && a !== xt || (r.status = 666), a === St || a === Ct) return 0 === e.avail_out && (r.last_flush = -1), 
                ot;
                if (a === Tt && (1 === t ? Xe._tr_align(r) : 5 !== t && (Xe._tr_stored_block(r, 0, 0, !1), 
                3 === t && (At(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, 
                r.insert = 0))), Pt(e), 0 === e.avail_out)) return r.last_flush = -1, ot;
            }
            return t !== it ? ot : r.wrap <= 0 ? 1 : (2 === r.wrap ? (Lt(r, 255 & e.adler), 
            Lt(r, e.adler >> 8 & 255), Lt(r, e.adler >> 16 & 255), Lt(r, e.adler >> 24 & 255), 
            Lt(r, 255 & e.total_in), Lt(r, e.total_in >> 8 & 255), Lt(r, e.total_in >> 16 & 255), 
            Lt(r, e.total_in >> 24 & 255)) : (Rt(r, e.adler >>> 16), Rt(r, 65535 & e.adler)), 
            Pt(e), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? ot : 1);
        },
        deflateEnd: function(e) {
            var t;
            return e && e.state ? (t = e.state.status) !== _t && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== Et && 666 !== t ? kt(e, st) : (e.state = null, 
            t === Et ? kt(e, -3) : ot) : st;
        },
        deflateSetDictionary: function(e, t) {
            var n, r, i, o, s, a, l, u, h = t.length;
            if (!e || !e.state) return st;
            if (2 === (o = (n = e.state).wrap) || 1 === o && n.status !== _t || n.lookahead) return st;
            for (1 === o && (e.adler = Qe(e.adler, t, h, 0)), n.wrap = 0, h >= n.w_size && (0 === o && (At(n.head), 
            n.strstart = 0, n.block_start = 0, n.insert = 0), u = new oe.Buf8(n.w_size), oe.arraySet(u, t, h - n.w_size, n.w_size, 0), 
            t = u, h = n.w_size), s = e.avail_in, a = e.next_in, l = e.input, e.avail_in = h, 
            e.next_in = 0, e.input = t, Ft(n); n.lookahead >= vt; ) {
                r = n.strstart, i = n.lookahead - (vt - 1);
                do {
                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + vt - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], 
                    n.head[n.ins_h] = r, r++;
                } while (--i);
                n.strstart = r, n.lookahead = vt - 1, Ft(n);
            }
            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, 
            n.lookahead = 0, n.match_length = n.prev_length = vt - 1, n.match_available = 0, 
            e.next_in = a, e.input = l, e.avail_in = s, n.wrap = o, ot;
        },
        deflateInfo: "pako deflate (from Nodeca project)"
    }, Ht = !0, qt = !0;
    try {
        String.fromCharCode.apply(null, [ 0 ]);
    } catch (e) {
        Ht = !1;
    }
    try {
        String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (e) {
        qt = !1;
    }
    for (var $t = new oe.Buf8(256), Wt = 0; Wt < 256; Wt++) $t[Wt] = Wt >= 252 ? 6 : Wt >= 248 ? 5 : Wt >= 240 ? 4 : Wt >= 224 ? 3 : Wt >= 192 ? 2 : 1;
    function Kt(e, t) {
        if (t < 65534 && (e.subarray && qt || !e.subarray && Ht)) return String.fromCharCode.apply(null, oe.shrinkBuf(e, t));
        for (var n = "", r = 0; r < t; r++) n += String.fromCharCode(e[r]);
        return n;
    }
    $t[254] = $t[254] = 1;
    var Gt = {
        string2buf: function(e) {
            var t, n, r, i, o, s = e.length, a = 0;
            for (i = 0; i < s; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (r = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
            i++), a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new oe.Buf8(a), o = 0, i = 0; o < a; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (r = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
            i++), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, 
            t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, 
            t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
            return t;
        },
        buf2binstring: function(e) {
            return Kt(e, e.length);
        },
        binstring2buf: function(e) {
            for (var t = new oe.Buf8(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
            return t;
        },
        buf2string: function(e, t) {
            var n, r, i, o, s = t || e.length, a = new Array(2 * s);
            for (r = 0, n = 0; n < s; ) if ((i = e[n++]) < 128) a[r++] = i; else if ((o = $t[i]) > 4) a[r++] = 65533, 
            n += o - 1; else {
                for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < s; ) i = i << 6 | 63 & e[n++], 
                o--;
                o > 1 ? a[r++] = 65533 : i < 65536 ? a[r++] = i : (i -= 65536, a[r++] = 55296 | i >> 10 & 1023, 
                a[r++] = 56320 | 1023 & i);
            }
            return Kt(a, r);
        },
        utf8border: function(e, t) {
            var n;
            for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
            return n < 0 ? t : 0 === n ? t : n + $t[e[n]] > t ? n : t;
        }
    }, Zt = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, 
        this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, 
        this.data_type = 2, this.adler = 0;
    }, Jt = Object.prototype.toString, Xt = 0, Qt = -1, en = 0, tn = 8;
    function nn(e) {
        if (!(this instanceof nn)) return new nn(e);
        this.options = oe.assign({
            level: Qt,
            method: tn,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: en,
            to: ""
        }, e || {});
        var t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), 
        this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Zt(), 
        this.strm.avail_out = 0;
        var n = Yt.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (n !== Xt) throw new Error(nt[n]);
        if (t.header && Yt.deflateSetHeader(this.strm, t.header), t.dictionary) {
            var r;
            if (r = "string" == typeof t.dictionary ? Gt.string2buf(t.dictionary) : "[object ArrayBuffer]" === Jt.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, 
            (n = Yt.deflateSetDictionary(this.strm, r)) !== Xt) throw new Error(nt[n]);
            this._dict_set = !0;
        }
    }
    function rn(e, t) {
        var n = new nn(t);
        if (n.push(e, !0), n.err) throw n.msg || nt[n.err];
        return n.result;
    }
    nn.prototype.push = function(e, t) {
        var n, r, i = this.strm, o = this.options.chunkSize;
        if (this.ended) return !1;
        r = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = Gt.string2buf(e) : "[object ArrayBuffer]" === Jt.call(e) ? i.input = new Uint8Array(e) : i.input = e, 
        i.next_in = 0, i.avail_in = i.input.length;
        do {
            if (0 === i.avail_out && (i.output = new oe.Buf8(o), i.next_out = 0, i.avail_out = o), 
            1 !== (n = Yt.deflate(i, r)) && n !== Xt) return this.onEnd(n), this.ended = !0, 
            !1;
            0 !== i.avail_out && (0 !== i.avail_in || 4 !== r && 2 !== r) || ("string" === this.options.to ? this.onData(Gt.buf2binstring(oe.shrinkBuf(i.output, i.next_out))) : this.onData(oe.shrinkBuf(i.output, i.next_out)));
        } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n);
        return 4 === r ? (n = Yt.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, 
        n === Xt) : 2 !== r || (this.onEnd(Xt), i.avail_out = 0, !0);
    }, nn.prototype.onData = function(e) {
        this.chunks.push(e);
    }, nn.prototype.onEnd = function(e) {
        e === Xt && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = oe.flattenChunks(this.chunks)), 
        this.chunks = [], this.err = e, this.msg = this.strm.msg;
    };
    var on = {
        Deflate: nn,
        deflate: rn,
        deflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, rn(e, t);
        },
        gzip: function(e, t) {
            return (t = t || {}).gzip = !0, rn(e, t);
        }
    };
    const sn = I("analytics/burger");
    class an {
        constructor(e, t) {
            v(this, "adapter", void 0), v(this, "browserStorage", void 0), v(this, "client", void 0), 
            v(this, "clientAdapter", void 0), this.adapter = t, this.browserStorage = e;
            const n = {
                getItem: this.browserStorage.get.bind(this.browserStorage),
                setItem: this.browserStorage.set.bind(this.browserStorage)
            }, r = O.getState(), i = this.adapter(r), o = r.shepherd.config.analytics.burgerUrl;
            this.clientAdapter = ie.create(te), this.client = new J(o, this.gzippedClientAdapter.bind(this), {
                batchTimeoutMs: 60 * (r.shepherd.config.analytics.burgerBatchTimeoutMinutes || 0) * 1e3,
                localStorage: n,
                storageKey: "_events",
                identity: i.identity,
                product: i.product,
                platform: i.platform,
                geo: i.geo,
                installation: i.installation,
                license: i.license,
                shepherd: i.shepherd,
                session_id: r.analytics.sessionId
            }), this.client.on(J.Event.INITIALIZED, () => {
                sn("burger client initialized");
            }), this.client.on(J.Event.FLUSHED, () => {
                sn("burger client flushed"), O.dispatch(d.uninstallUrlDirty());
            });
        }
        trackView(e) {
            this.updateClient(), this.client.send.activity.view({
                object: {
                    category: e,
                    action: "view"
                }
            });
        }
        trackEvent(e, t, n, r) {
            this.updateClient(), this.client.send.activity.click({
                object: {
                    category: e,
                    action: t,
                    label: n,
                    view: r
                }
            });
        }
        trackHeartbeat() {
            this.updateClient();
            const e = O.getState();
            this.client.send.heartbeat(Date.now() - e.analytics.startupTime);
        }
        flush() {
            return this.client.flush();
        }
        getParamsForUninstallUrl() {
            const e = this.client._updateRecord({
                event: {
                    type: 1,
                    subtype: 1
                }
            });
            try {
                const t = {
                    record: [ {
                        event: e.event,
                        identity: {
                            guid: e.identity.guid
                        },
                        product: {
                            id: e.product.id,
                            mode: e.product.mode,
                            version_app: e.product.version_app
                        },
                        platform: {
                            os: e.platform.os
                        },
                        browser: {
                            browser: e.browser.browser
                        }
                    } ]
                }, n = new te.ActivityEnvelope(t).encode64().replace(/=/g, "");
                return sn("packing this burger envelope to uninstall url: %O (%d bytes)", t, n.length), 
                {
                    burger: n
                };
            } catch (e) {
                return sn("cant encode envelope, error: %O", e), {};
            }
        }
        gzippedClientAdapter(e) {
            sn("processing burger envelope: %O", e);
            const t = this.clientAdapter(e);
            try {
                t.body = on.gzip(t.body), t.headers["Content-Encoding"] = "gzip";
            } catch (e) {
                sn("could not gzip burger envelope: %O", e);
            }
            return t;
        }
        updateClient() {
            const e = O.getState(), t = this.adapter(e), n = Object.keys(e.shepherd.abTests).map(t => ({
                test_group_id: e.shepherd.abTests[t],
                test_id: t
            }));
            this.client.setSessionId(e.analytics.sessionId).setABTests(n).updateGeo(t.geo).updateIdentity(t.identity).updateInstallation(t.installation).updateLicense(t.license).updateProduct(t.product).updateShepherd(t.shepherd);
        }
    }
    function ln(e, t, n) {
        var r = {
            day: "numeric",
            month: "short",
            year: "numeric"
        };
        switch (n) {
          case "full":
            r.weekday = "long";

          case "long":
            r.month = "long";
            break;

          case "short":
            r.month = "numeric";
        }
        return new Date(e).toLocaleDateString(t, r);
    }
    function un(e) {
        if (!isFinite(e)) return String(e);
        var t = "";
        e < 0 ? (t = "-", e = Math.abs(e)) : e = Number(e);
        var n = e % 60, r = [ Math.round(n) === n ? n : n.toFixed(3) ];
        return e < 60 ? r.unshift(0) : (e = Math.round((e - r[0]) / 60), r.unshift(e % 60), 
        e >= 60 && (e = Math.round((e - r[0]) / 60), r.unshift(e))), t + r.shift() + ":" + r.map(function(e) {
            return e < 10 ? "0" + String(e) : String(e);
        }).join(":");
    }
    function hn(e, t, n) {
        var r = {
            second: "numeric",
            minute: "numeric",
            hour: "numeric"
        };
        switch (n) {
          case "full":
          case "long":
            r.timeZoneName = "short";
            break;

          case "short":
            delete r.second;
        }
        return new Date(e).toLocaleTimeString(t, r);
    }
    var cn = {
        date: function() {
            return ln;
        },
        duration: function() {
            return un;
        },
        number: function(e) {
            var t = function(e, t, n) {
                var r = n && n.split(":") || [], i = {
                    integer: {
                        maximumFractionDigits: 0
                    },
                    percent: {
                        style: "percent"
                    },
                    currency: {
                        style: "currency",
                        currency: r[1] && r[1].trim() || CURRENCY,
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                };
                return new Intl.NumberFormat(t, i[r[0]] || {}).format(e);
            }.toString().replace("CURRENCY", JSON.stringify(e.currency || "USD")).match(/\(([^)]*)\)[^{]*{([\s\S]*)}/);
            return new Function(t[1], t[2]);
        },
        time: function() {
            return hn;
        }
    };
    function fn(e, t, n, r) {
        this.message = e, this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError", 
        "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, fn);
    }
    !function(e, t) {
        function n() {
            this.constructor = e;
        }
        n.prototype = t.prototype, e.prototype = new n();
    }(fn, Error), fn.buildMessage = function(e, t) {
        var n = {
            literal: function(e) {
                return '"' + i(e.text) + '"';
            },
            class: function(e) {
                var t, n = "";
                for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? o(e.parts[t][0]) + "-" + o(e.parts[t][1]) : o(e.parts[t]);
                return "[" + (e.inverted ? "^" : "") + n + "]";
            },
            any: function(e) {
                return "any character";
            },
            end: function(e) {
                return "end of input";
            },
            other: function(e) {
                return e.description;
            }
        };
        function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
        }
        function i(e) {
            return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                return "\\x0" + r(e);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                return "\\x" + r(e);
            });
        }
        function o(e) {
            return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                return "\\x0" + r(e);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                return "\\x" + r(e);
            });
        }
        return "Expected " + function(e) {
            var t, r, i, o = new Array(e.length);
            for (t = 0; t < e.length; t++) o[t] = (i = e[t], n[i.type](i));
            if (o.sort(), o.length > 0) {
                for (t = 1, r = 1; t < o.length; t++) o[t - 1] !== o[t] && (o[r] = o[t], r++);
                o.length = r;
            }
            switch (o.length) {
              case 1:
                return o[0];

              case 2:
                return o[0] + " or " + o[1];

              default:
                return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1];
            }
        }(e) + " but " + function(e) {
            return e ? '"' + i(e) + '"' : "end of input";
        }(t) + " found.";
    };
    var dn = function(e, t) {
        t = void 0 !== t ? t : {};
        var n, r = {}, i = {
            start: Xe
        }, o = Xe, s = "#", a = $e("#", !1), l = function() {
            return dt[0];
        }, u = function() {
            return {
                type: "octothorpe"
            };
        }, h = function(e) {
            return e.join("");
        }, c = "{", f = $e("{", !1), d = "}", p = $e("}", !1), g = function(e) {
            return {
                type: "argument",
                arg: e
            };
        }, m = ",", y = $e(",", !1), v = "select", b = $e("select", !1), w = function(e, n) {
            return t.strict && dt.unshift(!1), n;
        }, _ = function(e, n) {
            return t.strict && dt.shift(), {
                type: "select",
                arg: e,
                cases: n
            };
        }, E = "plural", S = $e("plural", !1), T = "selectordinal", C = $e("selectordinal", !1), x = function(e, t) {
            return dt.unshift(!0), t;
        }, k = function(e, n, r, i) {
            var o = ("selectordinal" === n ? t.ordinal : t.cardinal) || [ "zero", "one", "two", "few", "many", "other" ];
            return o && o.length && i.forEach(function(t) {
                if (isNaN(t.key) && o.indexOf(t.key) < 0) throw new Error("Invalid key `" + t.key + "` for argument `" + e + "`. Valid " + n + " keys for this locale are `" + o.join("`, `") + "`, and explicit keys like `=0`.");
            }), dt.shift(), {
                type: n,
                arg: e,
                offset: r || 0,
                cases: i
            };
        }, I = function(e, t, n) {
            return {
                type: "function",
                arg: e,
                key: t,
                param: n
            };
        }, A = Ke("identifier"), P = /^[^\t-\r \x85\u200E\u200F\u2028\u2029!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/, N = We([ [ "\t", "\r" ], " ", "", "‎", "‏", "\u2028", "\u2029", [ "!", "/" ], [ ":", "@" ], [ "[", "^" ], "`", [ "{", "~" ], [ "¡", "§" ], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", [ "‐", "‧" ], [ "‰", "‾" ], [ "⁁", "⁓" ], [ "⁕", "⁞" ], [ "←", "⑟" ], [ "─", "❵" ], [ "➔", "⯿" ], [ "⸀", "⹿" ], [ "、", "〃" ], [ "〈", "〠" ], "〰", "﴾", "﴿", "﹅", "﹆" ], !0, !1), L = function(e, t) {
            return {
                key: e,
                tokens: t
            };
        }, R = function(e) {
            return e;
        }, O = Ke("plural offset"), F = "offset", U = $e("offset", !1), B = ":", M = $e(":", !1), V = function(e) {
            return e;
        }, z = "=", j = $e("=", !1), D = "number", Y = $e("number", !1), H = "date", q = $e("date", !1), $ = "time", W = $e("time", !1), K = "spellout", G = $e("spellout", !1), Z = "ordinal", J = $e("ordinal", !1), X = "duration", Q = $e("duration", !1), ee = function(e) {
            if (t.strict || /^\d/.test(e)) return !1;
            switch (e.toLowerCase()) {
              case "select":
              case "plural":
              case "selectordinal":
                return !1;

              default:
                return !0;
            }
        }, te = function(e) {
            return e;
        }, ne = function(e) {
            return !t.strict;
        }, re = function(e) {
            return {
                tokens: e
            };
        }, ie = function(e) {
            return {
                tokens: [ e.join("") ]
            };
        }, oe = Ke("a valid (strict) function parameter"), se = /^[^'{}]/, ae = We([ "'", "{", "}" ], !0, !1), le = function(e) {
            return e.join("");
        }, ue = "'", he = $e("'", !1), ce = function(e) {
            return e;
        }, fe = function(e) {
            return "{" + e.join("") + "}";
        }, de = Ke("doubled apostrophe"), pe = "''", ge = $e("''", !1), me = function() {
            return "'";
        }, ye = /^[^']/, ve = We([ "'" ], !0, !1), be = "'{", we = $e("'{", !1), _e = function(e) {
            return "{" + e.join("");
        }, Ee = "'}", Se = $e("'}", !1), Te = function(e) {
            return "}" + e.join("");
        }, Ce = Ke("escaped string"), xe = "'#", ke = $e("'#", !1), Ie = function(e) {
            return "#" + e.join("");
        }, Ae = function(e) {
            return e[0];
        }, Pe = Ke("plain char"), Ne = /^[^{}#\0-\x08\x0E-\x1F\x7F]/, Le = We([ "{", "}", "#", [ "\0", "\b" ], [ "", "" ], "" ], !0, !1), Re = function(e) {
            return !dt[0];
        }, Oe = function(e) {
            return e;
        }, Fe = Ke("integer"), Ue = /^[0-9]/, Be = We([ [ "0", "9" ] ], !1, !1), Me = Ke("white space"), Ve = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/, ze = We([ [ "\t", "\r" ], " ", "", "‎", "‏", "\u2028", "\u2029" ], !1, !1), je = 0, De = [ {
            line: 1,
            column: 1
        } ], Ye = 0, He = [], qe = 0;
        if ("startRule" in t) {
            if (!(t.startRule in i)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
            o = i[t.startRule];
        }
        function $e(e, t) {
            return {
                type: "literal",
                text: e,
                ignoreCase: t
            };
        }
        function We(e, t, n) {
            return {
                type: "class",
                parts: e,
                inverted: t,
                ignoreCase: n
            };
        }
        function Ke(e) {
            return {
                type: "other",
                description: e
            };
        }
        function Ge(t) {
            var n, r = De[t];
            if (r) return r;
            for (n = t - 1; !De[n]; ) n--;
            for (r = {
                line: (r = De[n]).line,
                column: r.column
            }; n < t; ) 10 === e.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
            return De[t] = r, r;
        }
        function Ze(e, t) {
            var n = Ge(e), r = Ge(t);
            return {
                start: {
                    offset: e,
                    line: n.line,
                    column: n.column
                },
                end: {
                    offset: t,
                    line: r.line,
                    column: r.column
                }
            };
        }
        function Je(e) {
            je < Ye || (je > Ye && (Ye = je, He = []), He.push(e));
        }
        function Xe() {
            var e, t;
            for (e = [], t = Qe(); t !== r; ) e.push(t), t = Qe();
            return e;
        }
        function Qe() {
            var t, n, i;
            if ((t = function() {
                var t, n, i, o;
                return t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 0 === qe && Je(f)), 
                n !== r && ut() !== r && (i = et()) !== r && ut() !== r ? (125 === e.charCodeAt(je) ? (o = d, 
                je++) : (o = r, 0 === qe && Je(p)), o !== r ? t = n = g(i) : (je = t, t = r)) : (je = t, 
                t = r), t;
            }()) === r && (t = function() {
                var t, n, i, o, s, a, l, u, h;
                if (t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 0 === qe && Je(f)), 
                n !== r) if (ut() !== r) if ((i = et()) !== r) if (ut() !== r) if (44 === e.charCodeAt(je) ? (o = m, 
                je++) : (o = r, 0 === qe && Je(y)), o !== r) if (ut() !== r) if (e.substr(je, 6) === v ? (s = v, 
                je += 6) : (s = r, 0 === qe && Je(b)), s !== r && (s = w(i, s)), s !== r) if ((s = ut()) !== r) if (44 === e.charCodeAt(je) ? (a = m, 
                je++) : (a = r, 0 === qe && Je(y)), a !== r) if (ut() !== r) {
                    if (l = [], (u = tt()) !== r) for (;u !== r; ) l.push(u), u = tt(); else l = r;
                    l !== r && (u = ut()) !== r ? (125 === e.charCodeAt(je) ? (h = d, je++) : (h = r, 
                    0 === qe && Je(p)), h !== r ? t = n = _(i, l) : (je = t, t = r)) : (je = t, t = r);
                } else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, 
                t = r; else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, 
                t = r; else je = t, t = r;
                return t;
            }()) === r && (t = function() {
                var t, n, i, o, s, a, l, u, h, g, v;
                if (t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 0 === qe && Je(f)), 
                n !== r) if (ut() !== r) if ((i = et()) !== r) if (ut() !== r) if (44 === e.charCodeAt(je) ? (o = m, 
                je++) : (o = r, 0 === qe && Je(y)), o !== r) if (ut() !== r) if (je, e.substr(je, 6) === E ? (a = E, 
                je += 6) : (a = r, 0 === qe && Je(S)), a === r && (e.substr(je, 13) === T ? (a = T, 
                je += 13) : (a = r, 0 === qe && Je(C))), a !== r && (a = x(i, a)), (s = a) !== r) if ((a = ut()) !== r) if (44 === e.charCodeAt(je) ? (l = m, 
                je++) : (l = r, 0 === qe && Je(y)), l !== r) if (ut() !== r) if ((u = function() {
                    var t, n, i, o;
                    return qe++, t = je, ut() !== r ? (e.substr(je, 6) === F ? (n = F, je += 6) : (n = r, 
                    0 === qe && Je(U)), n !== r && ut() !== r ? (58 === e.charCodeAt(je) ? (i = B, je++) : (i = r, 
                    0 === qe && Je(M)), i !== r && ut() !== r && (o = lt()) !== r && ut() !== r ? t = V(o) : (je = t, 
                    t = r)) : (je = t, t = r)) : (je = t, t = r), qe--, t === r && (r, 0 === qe && Je(O)), 
                    t;
                }()) === r && (u = null), u !== r) {
                    if (h = [], (g = nt()) !== r) for (;g !== r; ) h.push(g), g = nt(); else h = r;
                    h !== r && (g = ut()) !== r ? (125 === e.charCodeAt(je) ? (v = d, je++) : (v = r, 
                    0 === qe && Je(p)), v !== r ? t = n = k(i, s, u, h) : (je = t, t = r)) : (je = t, 
                    t = r);
                } else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, 
                t = r; else je = t, t = r; else je = t, t = r; else je = t, t = r; else je = t, 
                t = r; else je = t, t = r; else je = t, t = r;
                return t;
            }()) === r && (t = function() {
                var t, n, i, o, s, a, l;
                return t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 0 === qe && Je(f)), 
                n !== r && ut() !== r && (i = et()) !== r && ut() !== r ? (44 === e.charCodeAt(je) ? (o = m, 
                je++) : (o = r, 0 === qe && Je(y)), o !== r && ut() !== r && (s = function() {
                    var t, n, i, o, s;
                    return e.substr(je, 6) === D ? (t = D, je += 6) : (t = r, 0 === qe && Je(Y)), t === r && (e.substr(je, 4) === H ? (t = H, 
                    je += 4) : (t = r, 0 === qe && Je(q)), t === r && (e.substr(je, 4) === $ ? (t = $, 
                    je += 4) : (t = r, 0 === qe && Je(W)), t === r && (e.substr(je, 8) === K ? (t = K, 
                    je += 8) : (t = r, 0 === qe && Je(G)), t === r && (e.substr(je, 7) === Z ? (t = Z, 
                    je += 7) : (t = r, 0 === qe && Je(J)), t === r && (e.substr(je, 8) === X ? (t = X, 
                    je += 8) : (t = r, 0 === qe && Je(Q)), t === r && (t = je, n = je, qe++, e.substr(je, 6) === v ? (i = v, 
                    je += 6) : (i = r, 0 === qe && Je(b)), qe--, i === r ? n = void 0 : (je = n, n = r), 
                    n !== r ? (i = je, qe++, e.substr(je, 6) === E ? (o = E, je += 6) : (o = r, 0 === qe && Je(S)), 
                    qe--, o === r ? i = void 0 : (je = i, i = r), i !== r ? (o = je, qe++, e.substr(je, 13) === T ? (s = T, 
                    je += 13) : (s = r, 0 === qe && Je(C)), qe--, s === r ? o = void 0 : (je = o, o = r), 
                    o !== r && (s = et()) !== r && (ee(s) ? void 0 : r) !== r ? t = n = te(s) : (je = t, 
                    t = r)) : (je = t, t = r)) : (je = t, t = r))))))), t;
                }()) !== r && ut() !== r ? ((a = function() {
                    var t, n, i, o;
                    if (t = je, ut() !== r) if (44 === e.charCodeAt(je) ? (n = m, je++) : (n = r, 0 === qe && Je(y)), 
                    n !== r) {
                        for (i = [], o = Qe(); o !== r; ) i.push(o), o = Qe();
                        i !== r && (o = (o = ne(i)) ? void 0 : r) !== r ? t = re(i) : (je = t, t = r);
                    } else je = t, t = r; else je = t, t = r;
                    if (t === r) if (t = je, ut() !== r) if (44 === e.charCodeAt(je) ? (n = m, je++) : (n = r, 
                    0 === qe && Je(y)), n !== r) {
                        for (i = [], o = it(); o !== r; ) i.push(o), o = it();
                        i !== r ? t = ie(i) : (je = t, t = r);
                    } else je = t, t = r; else je = t, t = r;
                    return t;
                }()) === r && (a = null), a !== r ? (125 === e.charCodeAt(je) ? (l = d, je++) : (l = r, 
                0 === qe && Je(p)), l !== r ? t = n = I(i, s, a) : (je = t, t = r)) : (je = t, t = r)) : (je = t, 
                t = r)) : (je = t, t = r), t;
            }()) === r && (t = je, 35 === e.charCodeAt(je) ? (n = s, je++) : (n = r, 0 === qe && Je(a)), 
            n !== r && (i = (i = l()) ? void 0 : r) !== r ? t = n = u() : (je = t, t = r), t === r)) {
                if (t = je, n = [], (i = at()) !== r) for (;i !== r; ) n.push(i), i = at(); else n = r;
                n !== r && (n = h(n)), t = n;
            }
            return t;
        }
        function et() {
            var t, n, i;
            if (qe++, t = je, n = [], P.test(e.charAt(je)) ? (i = e.charAt(je), je++) : (i = r, 
            0 === qe && Je(N)), i !== r) for (;i !== r; ) n.push(i), P.test(e.charAt(je)) ? (i = e.charAt(je), 
            je++) : (i = r, 0 === qe && Je(N)); else n = r;
            return t = n !== r ? e.substring(t, je) : n, qe--, t === r && (n = r, 0 === qe && Je(A)), 
            t;
        }
        function tt() {
            var e, t, n;
            return e = je, ut() !== r && (t = et()) !== r && ut() !== r && (n = rt()) !== r ? e = L(t, n) : (je = e, 
            e = r), e;
        }
        function nt() {
            var t, n, i;
            return t = je, ut() !== r && (n = function() {
                var t, n, i;
                return (t = et()) === r && (t = je, 61 === e.charCodeAt(je) ? (n = z, je++) : (n = r, 
                0 === qe && Je(j)), n !== r && (i = lt()) !== r ? t = n = V(i) : (je = t, t = r)), 
                t;
            }()) !== r && ut() !== r && (i = rt()) !== r ? t = L(n, i) : (je = t, t = r), t;
        }
        function rt() {
            var t, n, i, o, s, a;
            if (t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 0 === qe && Je(f)), 
            n !== r) if (i = je, (o = ut()) !== r ? (s = je, qe++, 123 === e.charCodeAt(je) ? (a = c, 
            je++) : (a = r, 0 === qe && Je(f)), qe--, a !== r ? (je = s, s = void 0) : s = r, 
            s !== r ? i = o = [ o, s ] : (je = i, i = r)) : (je = i, i = r), i === r && (i = null), 
            i !== r) {
                for (o = [], s = Qe(); s !== r; ) o.push(s), s = Qe();
                o !== r && (s = ut()) !== r ? (125 === e.charCodeAt(je) ? (a = d, je++) : (a = r, 
                0 === qe && Je(p)), a !== r ? t = n = R(o) : (je = t, t = r)) : (je = t, t = r);
            } else je = t, t = r; else je = t, t = r;
            return t;
        }
        function it() {
            var t, n, i, o;
            if (qe++, t = je, n = [], se.test(e.charAt(je)) ? (i = e.charAt(je), je++) : (i = r, 
            0 === qe && Je(ae)), i !== r) for (;i !== r; ) n.push(i), se.test(e.charAt(je)) ? (i = e.charAt(je), 
            je++) : (i = r, 0 === qe && Je(ae)); else n = r;
            if (n !== r && (n = le(n)), (t = n) === r && (t = ot()) === r && (t = je, 39 === e.charCodeAt(je) ? (n = ue, 
            je++) : (n = r, 0 === qe && Je(he)), n !== r && (i = st()) !== r ? (39 === e.charCodeAt(je) ? (o = ue, 
            je++) : (o = r, 0 === qe && Je(he)), o !== r ? t = n = ce(i) : (je = t, t = r)) : (je = t, 
            t = r), t === r)) if (t = je, 123 === e.charCodeAt(je) ? (n = c, je++) : (n = r, 
            0 === qe && Je(f)), n !== r) {
                for (i = [], o = it(); o !== r; ) i.push(o), o = it();
                i !== r ? (125 === e.charCodeAt(je) ? (o = d, je++) : (o = r, 0 === qe && Je(p)), 
                o !== r ? t = n = fe(i) : (je = t, t = r)) : (je = t, t = r);
            } else je = t, t = r;
            return qe--, t === r && (n = r, 0 === qe && Je(oe)), t;
        }
        function ot() {
            var t, n;
            return qe++, e.substr(je, 2) === pe ? (n = pe, je += 2) : (n = r, 0 === qe && Je(ge)), 
            n !== r && (n = me()), qe--, (t = n) === r && (n = r, 0 === qe && Je(de)), t;
        }
        function st() {
            var t, n, i;
            if ((t = ot()) === r) {
                if (t = je, n = [], ye.test(e.charAt(je)) ? (i = e.charAt(je), je++) : (i = r, 0 === qe && Je(ve)), 
                i !== r) for (;i !== r; ) n.push(i), ye.test(e.charAt(je)) ? (i = e.charAt(je), 
                je++) : (i = r, 0 === qe && Je(ve)); else n = r;
                n !== r && (n = h(n)), t = n;
            }
            return t;
        }
        function at() {
            var t, n;
            return (t = ot()) === r && (t = function() {
                var t, n, i, o, s, a;
                if (qe++, (t = function() {
                    var t, n, i, o;
                    if (t = je, e.substr(je, 2) === be ? (n = be, je += 2) : (n = r, 0 === qe && Je(we)), 
                    n !== r) {
                        for (i = [], o = st(); o !== r; ) i.push(o), o = st();
                        i !== r ? (39 === e.charCodeAt(je) ? (o = ue, je++) : (o = r, 0 === qe && Je(he)), 
                        o !== r ? t = n = _e(i) : (je = t, t = r)) : (je = t, t = r);
                    } else je = t, t = r;
                    if (t === r) if (t = je, e.substr(je, 2) === Ee ? (n = Ee, je += 2) : (n = r, 0 === qe && Je(Se)), 
                    n !== r) {
                        for (i = [], o = st(); o !== r; ) i.push(o), o = st();
                        i !== r ? (39 === e.charCodeAt(je) ? (o = ue, je++) : (o = r, 0 === qe && Je(he)), 
                        o !== r ? t = n = Te(i) : (je = t, t = r)) : (je = t, t = r);
                    } else je = t, t = r;
                    return t;
                }()) === r) {
                    if (t = je, n = je, i = je, e.substr(je, 2) === xe ? (o = xe, je += 2) : (o = r, 
                    0 === qe && Je(ke)), o !== r) {
                        for (s = [], a = st(); a !== r; ) s.push(a), a = st();
                        s !== r ? (39 === e.charCodeAt(je) ? (a = ue, je++) : (a = r, 0 === qe && Je(he)), 
                        a !== r ? i = o = Ie(s) : (je = i, i = r)) : (je = i, i = r);
                    } else je = i, i = r;
                    i !== r && (o = (o = l()) ? void 0 : r) !== r ? n = i = [ i, o ] : (je = n, n = r), 
                    n !== r && (n = Ae(n)), (t = n) === r && (39 === e.charCodeAt(je) ? (t = ue, je++) : (t = r, 
                    0 === qe && Je(he)));
                }
                return qe--, t === r && (n = r, 0 === qe && Je(Ce)), t;
            }()) === r && (t = je, 35 === e.charCodeAt(je) ? (n = s, je++) : (n = r, 0 === qe && Je(a)), 
            n !== r && (Re(n) ? void 0 : r) !== r ? t = n = Oe(n) : (je = t, t = r), t === r && (t = function() {
                var t;
                return qe++, Ne.test(e.charAt(je)) ? (t = e.charAt(je), je++) : (t = r, 0 === qe && Je(Le)), 
                qe--, t === r && 0 === qe && Je(Pe), t;
            }())), t;
        }
        function lt() {
            var t, n, i;
            if (qe++, t = je, n = [], Ue.test(e.charAt(je)) ? (i = e.charAt(je), je++) : (i = r, 
            0 === qe && Je(Be)), i !== r) for (;i !== r; ) n.push(i), Ue.test(e.charAt(je)) ? (i = e.charAt(je), 
            je++) : (i = r, 0 === qe && Je(Be)); else n = r;
            return t = n !== r ? e.substring(t, je) : n, qe--, t === r && (n = r, 0 === qe && Je(Fe)), 
            t;
        }
        function ut() {
            var t, n, i;
            for (qe++, t = je, n = [], Ve.test(e.charAt(je)) ? (i = e.charAt(je), je++) : (i = r, 
            0 === qe && Je(ze)); i !== r; ) n.push(i), Ve.test(e.charAt(je)) ? (i = e.charAt(je), 
            je++) : (i = r, 0 === qe && Je(ze));
            return t = n !== r ? e.substring(t, je) : n, qe--, t === r && (n = r, 0 === qe && Je(Me)), 
            t;
        }
        var ht, ct, ft, dt = [ !1 ];
        if ((n = o()) !== r && je === e.length) return n;
        throw n !== r && je < e.length && Je({
            type: "end"
        }), ht = He, ct = Ye < e.length ? e.charAt(Ye) : null, ft = Ye < e.length ? Ze(Ye, Ye + 1) : Ze(Ye, Ye), 
        new fn(fn.buildMessage(ht, ct), ht, ct, ft);
    }, pn = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.propname = function(e, t) {
            if (/^[A-Z_$][0-9A-Z_$]*$/i.test(e) && !n[e]) return t ? `${t}.${e}` : e;
            {
                const n = JSON.stringify(e);
                return t ? t + `[${n}]` : n;
            }
        }, t.funcname = function(e) {
            const t = e.trim().replace(/\W+/g, "_");
            return n[t] || r[t] || /^\d/.test(t) ? "_" + t : t;
        }, t.bidiMarkText = function(e, t) {
            const n = i.test(t), r = JSON.stringify(n ? "‏" : "‎");
            return `${r} + ${e} + ${r}`;
        };
        const n = {
            break: !0,
            continue: !0,
            delete: !0,
            else: !0,
            for: !0,
            function: !0,
            if: !0,
            in: !0,
            new: !0,
            return: !0,
            this: !0,
            typeof: !0,
            var: !0,
            void: !0,
            while: !0,
            with: !0,
            case: !0,
            catch: !0,
            default: !0,
            do: !0,
            finally: !0,
            instanceof: !0,
            switch: !0,
            throw: !0,
            try: !0
        }, r = {
            debugger: !0,
            class: !0,
            enum: !0,
            extends: !0,
            super: !0,
            const: !0,
            export: !0,
            import: !0,
            null: !0,
            true: !0,
            false: !0,
            implements: !0,
            let: !0,
            private: !0,
            public: !0,
            yield: !0,
            interface: !0,
            package: !0,
            protected: !0,
            static: !0
        }, i = new RegExp("^" + [ "ar", "ckb", "fa", "he", "ks($|[^bfh])", "lrc", "mzn", "pa-Arab", "ps", "ug", "ur", "uz-Arab", "yi" ].join("|^"));
    });
    w(pn), pn.propname, pn.funcname, pn.bidiMarkText;
    var gn = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, t.default = class {
            constructor(e) {
                this.mf = e, this.lc = null, this.locales = {}, this.runtime = {}, this.formatters = {};
            }
            compile(e, t, n) {
                if ("object" != typeof e) {
                    this.lc = t;
                    const r = n[t] || {
                        cardinal: [],
                        ordinal: []
                    };
                    return r.strict = !!this.mf.strictNumberSign, `function(d) { return ${dn(e, r).map(e => this.token(e)).join(" + ") || '""'}; }`;
                }
                {
                    const o = {};
                    for (var r in e) {
                        var i = n.hasOwnProperty(r) ? r : t;
                        o[r] = this.compile(e[r], i, n);
                    }
                    return o;
                }
            }
            cases(e, t) {
                let n = "select" === e.type || !this.mf.hasCustomPluralFuncs;
                const r = e.cases.map(({key: e, tokens: r}) => {
                    "other" === e && (n = !1);
                    const i = r.map(e => this.token(e, t));
                    return (0, pn.propname)(e) + ": " + (i.join(" + ") || '""');
                });
                if (n) throw new Error("No 'other' form found in " + JSON.stringify(e));
                return `{ ${r.join(", ")} }`;
            }
            token(e, t) {
                if ("string" == typeof e) return JSON.stringify(e);
                let n, r = [ (0, pn.propname)(e.arg, "d") ];
                switch (e.type) {
                  case "argument":
                    return this.mf.bidiSupport ? (0, pn.bidiMarkText)(r[0], this.lc) : r[0];

                  case "select":
                    n = "select", t && this.mf.strictNumberSign && (t = null), r.push(this.cases(e, t)), 
                    this.runtime.select = !0;
                    break;

                  case "selectordinal":
                    n = "plural", r.push(0, (0, pn.funcname)(this.lc), this.cases(e, e), 1), this.locales[this.lc] = !0, 
                    this.runtime.plural = !0;
                    break;

                  case "plural":
                    n = "plural", r.push(e.offset || 0, (0, pn.funcname)(this.lc), this.cases(e, e)), 
                    this.locales[this.lc] = !0, this.runtime.plural = !0;
                    break;

                  case "function":
                    if (!(e.key in this.mf.fmt) && e.key in this.mf.constructor.formatters) {
                        const t = this.mf.constructor.formatters[e.key];
                        this.mf.fmt[e.key] = t(this.mf);
                    }
                    if (!this.mf.fmt[e.key]) throw new Error(`Formatting function ${JSON.stringify(e.key)} not found!`);
                    if (r.push(JSON.stringify(this.lc)), e.param) {
                        t && this.mf.strictNumberSign && (t = null);
                        const n = e.param.tokens.map(e => this.token(e, t));
                        r.push("(" + (n.join(" + ") || '""') + ").trim()");
                    }
                    n = (0, pn.propname)(e.key, "fmt"), this.formatters[e.key] = !0;
                    break;

                  case "octothorpe":
                    if (!t) return '"#"';
                    n = "number", r = [ (0, pn.propname)(t.arg, "d"), JSON.stringify(t.arg) ], t.offset && r.push(t.offset), 
                    this.runtime.number = !0;
                }
                if (!n) throw new Error("Parser error for token " + JSON.stringify(e));
                return `${n}(${r.join(", ")})`;
            }
        };
    });
    w(gn);
    var mn = _(function(e, t) {
        var n, r = [ {
            cardinal: [ "other" ],
            ordinal: [ "other" ]
        }, {
            cardinal: [ "one", "other" ],
            ordinal: [ "other" ]
        }, {
            cardinal: [ "one", "other" ],
            ordinal: [ "one", "other" ]
        }, {
            cardinal: [ "one", "two", "other" ],
            ordinal: [ "other" ]
        } ];
        n = {
            af: r[1],
            ak: r[1],
            am: r[1],
            ar: {
                cardinal: [ "zero", "one", "two", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            ars: {
                cardinal: [ "zero", "one", "two", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            as: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "many", "other" ]
            },
            asa: r[1],
            ast: r[1],
            az: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "few", "many", "other" ]
            },
            be: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "few", "other" ]
            },
            bem: r[1],
            bez: r[1],
            bg: r[1],
            bh: r[1],
            bm: r[0],
            bn: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "many", "other" ]
            },
            bo: r[0],
            br: {
                cardinal: [ "one", "two", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            brx: r[1],
            bs: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "other" ]
            },
            ca: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "other" ]
            },
            ce: r[1],
            cgg: r[1],
            chr: r[1],
            ckb: r[1],
            cs: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            cy: {
                cardinal: [ "zero", "one", "two", "few", "many", "other" ],
                ordinal: [ "zero", "one", "two", "few", "many", "other" ]
            },
            da: r[1],
            de: r[1],
            dsb: {
                cardinal: [ "one", "two", "few", "other" ],
                ordinal: [ "other" ]
            },
            dv: r[1],
            dz: r[0],
            ee: r[1],
            el: r[1],
            en: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "other" ]
            },
            eo: r[1],
            es: r[1],
            et: r[1],
            eu: r[1],
            fa: r[1],
            ff: r[1],
            fi: r[1],
            fil: r[2],
            fo: r[1],
            fr: r[2],
            fur: r[1],
            fy: r[1],
            ga: {
                cardinal: [ "one", "two", "few", "many", "other" ],
                ordinal: [ "one", "other" ]
            },
            gd: {
                cardinal: [ "one", "two", "few", "other" ],
                ordinal: [ "one", "two", "few", "other" ]
            },
            gl: r[1],
            gsw: r[1],
            gu: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "many", "other" ]
            },
            guw: r[1],
            gv: {
                cardinal: [ "one", "two", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            ha: r[1],
            haw: r[1],
            he: {
                cardinal: [ "one", "two", "many", "other" ],
                ordinal: [ "other" ]
            },
            hi: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "many", "other" ]
            },
            hr: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "other" ]
            },
            hsb: {
                cardinal: [ "one", "two", "few", "other" ],
                ordinal: [ "other" ]
            },
            hu: r[2],
            hy: r[2],
            ia: r[1],
            id: r[0],
            ig: r[0],
            ii: r[0],
            in: r[0],
            io: r[1],
            is: r[1],
            it: {
                cardinal: [ "one", "other" ],
                ordinal: [ "many", "other" ]
            },
            iu: r[3],
            iw: {
                cardinal: [ "one", "two", "many", "other" ],
                ordinal: [ "other" ]
            },
            ja: r[0],
            jbo: r[0],
            jgo: r[1],
            ji: r[1],
            jmc: r[1],
            jv: r[0],
            jw: r[0],
            ka: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "many", "other" ]
            },
            kab: r[1],
            kaj: r[1],
            kcg: r[1],
            kde: r[0],
            kea: r[0],
            kk: {
                cardinal: [ "one", "other" ],
                ordinal: [ "many", "other" ]
            },
            kkj: r[1],
            kl: r[1],
            km: r[0],
            kn: r[1],
            ko: r[0],
            ks: r[1],
            ksb: r[1],
            ksh: {
                cardinal: [ "zero", "one", "other" ],
                ordinal: [ "other" ]
            },
            ku: r[1],
            kw: r[3],
            ky: r[1],
            lag: {
                cardinal: [ "zero", "one", "other" ],
                ordinal: [ "other" ]
            },
            lb: r[1],
            lg: r[1],
            lkt: r[0],
            ln: r[1],
            lo: {
                cardinal: [ "other" ],
                ordinal: [ "one", "other" ]
            },
            lt: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            lv: {
                cardinal: [ "zero", "one", "other" ],
                ordinal: [ "other" ]
            },
            mas: r[1],
            mg: r[1],
            mgo: r[1],
            mk: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "many", "other" ]
            },
            ml: r[1],
            mn: r[1],
            mo: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "one", "other" ]
            },
            mr: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "other" ]
            },
            ms: {
                cardinal: [ "other" ],
                ordinal: [ "one", "other" ]
            },
            mt: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            my: r[0],
            nah: r[1],
            naq: r[3],
            nb: r[1],
            nd: r[1],
            ne: r[2],
            nl: r[1],
            nn: r[1],
            nnh: r[1],
            no: r[1],
            nqo: r[0],
            nr: r[1],
            nso: r[1],
            ny: r[1],
            nyn: r[1],
            om: r[1],
            or: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "two", "few", "many", "other" ]
            },
            os: r[1],
            pa: r[1],
            pap: r[1],
            pl: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            prg: {
                cardinal: [ "zero", "one", "other" ],
                ordinal: [ "other" ]
            },
            ps: r[1],
            pt: r[1],
            "pt-PT": r[1],
            rm: r[1],
            ro: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "one", "other" ]
            },
            rof: r[1],
            root: r[0],
            ru: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            rwk: r[1],
            sah: r[0],
            saq: r[1],
            sc: {
                cardinal: [ "one", "other" ],
                ordinal: [ "many", "other" ]
            },
            scn: {
                cardinal: [ "one", "other" ],
                ordinal: [ "many", "other" ]
            },
            sd: r[1],
            sdh: r[1],
            se: r[3],
            seh: r[1],
            ses: r[0],
            sg: r[0],
            sh: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "other" ]
            },
            shi: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "other" ]
            },
            si: r[1],
            sk: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "other" ]
            },
            sl: {
                cardinal: [ "one", "two", "few", "other" ],
                ordinal: [ "other" ]
            },
            sma: r[3],
            smi: r[3],
            smj: r[3],
            smn: r[3],
            sms: r[3],
            sn: r[1],
            so: r[1],
            sq: {
                cardinal: [ "one", "other" ],
                ordinal: [ "one", "many", "other" ]
            },
            sr: {
                cardinal: [ "one", "few", "other" ],
                ordinal: [ "other" ]
            },
            ss: r[1],
            ssy: r[1],
            st: r[1],
            sv: r[2],
            sw: r[1],
            syr: r[1],
            ta: r[1],
            te: r[1],
            teo: r[1],
            th: r[0],
            ti: r[1],
            tig: r[1],
            tk: {
                cardinal: [ "one", "other" ],
                ordinal: [ "few", "other" ]
            },
            tl: r[2],
            tn: r[1],
            to: r[0],
            tr: r[1],
            ts: r[1],
            tzm: r[1],
            ug: r[1],
            uk: {
                cardinal: [ "one", "few", "many", "other" ],
                ordinal: [ "few", "other" ]
            },
            ur: r[1],
            uz: r[1],
            ve: r[1],
            vi: {
                cardinal: [ "other" ],
                ordinal: [ "one", "other" ]
            },
            vo: r[1],
            vun: r[1],
            wa: r[1],
            wae: r[1],
            wo: r[0],
            xh: r[1],
            xog: r[1],
            yi: r[1],
            yo: r[0],
            yue: r[0],
            zh: r[0],
            zu: r[1]
        }, e.exports = n;
    }), yn = _(function(e, t) {
        var n;
        n = {
            af: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ak: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            am: function(e, t) {
                return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            ar: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e && n[0].slice(-2);
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : r >= 3 && r <= 10 ? "few" : r >= 11 && r <= 99 ? "many" : "other";
            },
            ars: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e && n[0].slice(-2);
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : r >= 3 && r <= 10 ? "few" : r >= 11 && r <= 99 ? "many" : "other";
            },
            as: function(e, t) {
                return t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            asa: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ast: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            az: function(e, t) {
                var n = String(e).split(".")[0], r = n.slice(-1), i = n.slice(-2), o = n.slice(-3);
                return t ? 1 == r || 2 == r || 5 == r || 7 == r || 8 == r || 20 == i || 50 == i || 70 == i || 80 == i ? "one" : 3 == r || 4 == r || 100 == o || 200 == o || 300 == o || 400 == o || 500 == o || 600 == o || 700 == o || 800 == o || 900 == o ? "few" : 0 == n || 6 == r || 40 == i || 60 == i || 90 == i ? "many" : "other" : 1 == e ? "one" : "other";
            },
            be: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e, i = r && n[0].slice(-1), o = r && n[0].slice(-2);
                return t ? 2 != i && 3 != i || 12 == o || 13 == o ? "other" : "few" : 1 == i && 11 != o ? "one" : i >= 2 && i <= 4 && (o < 12 || o > 14) ? "few" : r && 0 == i || i >= 5 && i <= 9 || o >= 11 && o <= 14 ? "many" : "other";
            },
            bem: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            bez: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            bg: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            bh: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            bm: function(e, t) {
                return "other";
            },
            bn: function(e, t) {
                return t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            bo: function(e, t) {
                return "other";
            },
            br: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e, i = r && n[0].slice(-1), o = r && n[0].slice(-2), s = r && n[0].slice(-6);
                return t ? "other" : 1 == i && 11 != o && 71 != o && 91 != o ? "one" : 2 == i && 12 != o && 72 != o && 92 != o ? "two" : (3 == i || 4 == i || 9 == i) && (o < 10 || o > 19) && (o < 70 || o > 79) && (o < 90 || o > 99) ? "few" : 0 != e && r && 0 == s ? "many" : "other";
            },
            brx: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            bs: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = r.slice(-2), l = i.slice(-1), u = i.slice(-2);
                return t ? "other" : o && 1 == s && 11 != a || 1 == l && 11 != u ? "one" : o && s >= 2 && s <= 4 && (a < 12 || a > 14) || l >= 2 && l <= 4 && (u < 12 || u > 14) ? "few" : "other";
            },
            ca: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? 1 == e || 3 == e ? "one" : 2 == e ? "two" : 4 == e ? "few" : "other" : 1 == e && n ? "one" : "other";
            },
            ce: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            cgg: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            chr: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ckb: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            cs: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1];
                return t ? "other" : 1 == e && i ? "one" : r >= 2 && r <= 4 && i ? "few" : i ? "other" : "many";
            },
            cy: function(e, t) {
                return t ? 0 == e || 7 == e || 8 == e || 9 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e || 4 == e ? "few" : 5 == e || 6 == e ? "many" : "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e ? "few" : 6 == e ? "many" : "other";
            },
            da: function(e, t) {
                var n = String(e).split("."), r = n[0], i = Number(n[0]) == e;
                return t ? "other" : 1 != e && (i || 0 != r && 1 != r) ? "other" : "one";
            },
            de: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            dsb: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-2), a = i.slice(-2);
                return t ? "other" : o && 1 == s || 1 == a ? "one" : o && 2 == s || 2 == a ? "two" : o && (3 == s || 4 == s) || 3 == a || 4 == a ? "few" : "other";
            },
            dv: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            dz: function(e, t) {
                return "other";
            },
            ee: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            el: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            en: function(e, t) {
                var n = String(e).split("."), r = !n[1], i = Number(n[0]) == e, o = i && n[0].slice(-1), s = i && n[0].slice(-2);
                return t ? 1 == o && 11 != s ? "one" : 2 == o && 12 != s ? "two" : 3 == o && 13 != s ? "few" : "other" : 1 == e && r ? "one" : "other";
            },
            eo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            es: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            et: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            eu: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            fa: function(e, t) {
                return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            ff: function(e, t) {
                return t ? "other" : e >= 0 && e < 2 ? "one" : "other";
            },
            fi: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            fil: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = i.slice(-1);
                return t ? 1 == e ? "one" : "other" : o && (1 == r || 2 == r || 3 == r) || o && 4 != s && 6 != s && 9 != s || !o && 4 != a && 6 != a && 9 != a ? "one" : "other";
            },
            fo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            fr: function(e, t) {
                return t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other";
            },
            fur: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            fy: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            ga: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? 1 == e ? "one" : "other" : 1 == e ? "one" : 2 == e ? "two" : r && e >= 3 && e <= 6 ? "few" : r && e >= 7 && e <= 10 ? "many" : "other";
            },
            gd: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? 1 == e || 11 == e ? "one" : 2 == e || 12 == e ? "two" : 3 == e || 13 == e ? "few" : "other" : 1 == e || 11 == e ? "one" : 2 == e || 12 == e ? "two" : r && e >= 3 && e <= 10 || r && e >= 13 && e <= 19 ? "few" : "other";
            },
            gl: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            gsw: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            gu: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            guw: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            gv: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = r.slice(-1), s = r.slice(-2);
                return t ? "other" : i && 1 == o ? "one" : i && 2 == o ? "two" : !i || 0 != s && 20 != s && 40 != s && 60 != s && 80 != s ? i ? "other" : "many" : "few";
            },
            ha: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            haw: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            he: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = Number(n[0]) == e, s = o && n[0].slice(-1);
                return t ? "other" : 1 == e && i ? "one" : 2 == r && i ? "two" : i && (e < 0 || e > 10) && o && 0 == s ? "many" : "other";
            },
            hi: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            hr: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = r.slice(-2), l = i.slice(-1), u = i.slice(-2);
                return t ? "other" : o && 1 == s && 11 != a || 1 == l && 11 != u ? "one" : o && s >= 2 && s <= 4 && (a < 12 || a > 14) || l >= 2 && l <= 4 && (u < 12 || u > 14) ? "few" : "other";
            },
            hsb: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-2), a = i.slice(-2);
                return t ? "other" : o && 1 == s || 1 == a ? "one" : o && 2 == s || 2 == a ? "two" : o && (3 == s || 4 == s) || 3 == a || 4 == a ? "few" : "other";
            },
            hu: function(e, t) {
                return t ? 1 == e || 5 == e ? "one" : "other" : 1 == e ? "one" : "other";
            },
            hy: function(e, t) {
                return t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other";
            },
            ia: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            id: function(e, t) {
                return "other";
            },
            ig: function(e, t) {
                return "other";
            },
            ii: function(e, t) {
                return "other";
            },
            in: function(e, t) {
                return "other";
            },
            io: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            is: function(e, t) {
                var n = String(e).split("."), r = n[0], i = Number(n[0]) == e, o = r.slice(-1), s = r.slice(-2);
                return t ? "other" : i && 1 == o && 11 != s || !i ? "one" : "other";
            },
            it: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && n ? "one" : "other";
            },
            iu: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            iw: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = Number(n[0]) == e, s = o && n[0].slice(-1);
                return t ? "other" : 1 == e && i ? "one" : 2 == r && i ? "two" : i && (e < 0 || e > 10) && o && 0 == s ? "many" : "other";
            },
            ja: function(e, t) {
                return "other";
            },
            jbo: function(e, t) {
                return "other";
            },
            jgo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ji: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            jmc: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            jv: function(e, t) {
                return "other";
            },
            jw: function(e, t) {
                return "other";
            },
            ka: function(e, t) {
                var n = String(e).split(".")[0], r = n.slice(-2);
                return t ? 1 == n ? "one" : 0 == n || r >= 2 && r <= 20 || 40 == r || 60 == r || 80 == r ? "many" : "other" : 1 == e ? "one" : "other";
            },
            kab: function(e, t) {
                return t ? "other" : e >= 0 && e < 2 ? "one" : "other";
            },
            kaj: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            kcg: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            kde: function(e, t) {
                return "other";
            },
            kea: function(e, t) {
                return "other";
            },
            kk: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e, i = r && n[0].slice(-1);
                return t ? 6 == i || 9 == i || r && 0 == i && 0 != e ? "many" : "other" : 1 == e ? "one" : "other";
            },
            kkj: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            kl: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            km: function(e, t) {
                return "other";
            },
            kn: function(e, t) {
                return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            ko: function(e, t) {
                return "other";
            },
            ks: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ksb: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ksh: function(e, t) {
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : "other";
            },
            ku: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            kw: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            ky: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            lag: function(e, t) {
                var n = String(e).split(".")[0];
                return t ? "other" : 0 == e ? "zero" : 0 != n && 1 != n || 0 == e ? "other" : "one";
            },
            lb: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            lg: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            lkt: function(e, t) {
                return "other";
            },
            ln: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            lo: function(e, t) {
                return t && 1 == e ? "one" : "other";
            },
            lt: function(e, t) {
                var n = String(e).split("."), r = n[1] || "", i = Number(n[0]) == e, o = i && n[0].slice(-1), s = i && n[0].slice(-2);
                return t ? "other" : 1 == o && (s < 11 || s > 19) ? "one" : o >= 2 && o <= 9 && (s < 11 || s > 19) ? "few" : 0 != r ? "many" : "other";
            },
            lv: function(e, t) {
                var n = String(e).split("."), r = n[1] || "", i = r.length, o = Number(n[0]) == e, s = o && n[0].slice(-1), a = o && n[0].slice(-2), l = r.slice(-2), u = r.slice(-1);
                return t ? "other" : o && 0 == s || a >= 11 && a <= 19 || 2 == i && l >= 11 && l <= 19 ? "zero" : 1 == s && 11 != a || 2 == i && 1 == u && 11 != l || 2 != i && 1 == u ? "one" : "other";
            },
            mas: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            mg: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            mgo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            mk: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = r.slice(-2), l = i.slice(-1), u = i.slice(-2);
                return t ? 1 == s && 11 != a ? "one" : 2 == s && 12 != a ? "two" : 7 != s && 8 != s || 17 == a || 18 == a ? "other" : "many" : o && 1 == s && 11 != a || 1 == l && 11 != u ? "one" : "other";
            },
            ml: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            mn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            mo: function(e, t) {
                var n = String(e).split("."), r = !n[1], i = Number(n[0]) == e && n[0].slice(-2);
                return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && i >= 1 && i <= 19 ? "few" : "other";
            },
            mr: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : "other" : e >= 0 && e <= 1 ? "one" : "other";
            },
            ms: function(e, t) {
                return t && 1 == e ? "one" : "other";
            },
            mt: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e && n[0].slice(-2);
                return t ? "other" : 1 == e ? "one" : 0 == e || r >= 2 && r <= 10 ? "few" : r >= 11 && r <= 19 ? "many" : "other";
            },
            my: function(e, t) {
                return "other";
            },
            nah: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            naq: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            nb: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            nd: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ne: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? r && e >= 1 && e <= 4 ? "one" : "other" : 1 == e ? "one" : "other";
            },
            nl: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            nn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            nnh: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            no: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            nqo: function(e, t) {
                return "other";
            },
            nr: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            nso: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            ny: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            nyn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            om: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            or: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? 1 == e || 5 == e || r && e >= 7 && e <= 9 ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : 1 == e ? "one" : "other";
            },
            os: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            pa: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            pap: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            pl: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = r.slice(-1), s = r.slice(-2);
                return t ? "other" : 1 == e && i ? "one" : i && o >= 2 && o <= 4 && (s < 12 || s > 14) ? "few" : i && 1 != r && (0 == o || 1 == o) || i && o >= 5 && o <= 9 || i && s >= 12 && s <= 14 ? "many" : "other";
            },
            prg: function(e, t) {
                var n = String(e).split("."), r = n[1] || "", i = r.length, o = Number(n[0]) == e, s = o && n[0].slice(-1), a = o && n[0].slice(-2), l = r.slice(-2), u = r.slice(-1);
                return t ? "other" : o && 0 == s || a >= 11 && a <= 19 || 2 == i && l >= 11 && l <= 19 ? "zero" : 1 == s && 11 != a || 2 == i && 1 == u && 11 != l || 2 != i && 1 == u ? "one" : "other";
            },
            ps: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            pt: function(e, t) {
                var n = String(e).split(".")[0];
                return t ? "other" : 0 == n || 1 == n ? "one" : "other";
            },
            "pt-PT": function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            rm: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ro: function(e, t) {
                var n = String(e).split("."), r = !n[1], i = Number(n[0]) == e && n[0].slice(-2);
                return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && i >= 1 && i <= 19 ? "few" : "other";
            },
            rof: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            root: function(e, t) {
                return "other";
            },
            ru: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = r.slice(-1), s = r.slice(-2);
                return t ? "other" : i && 1 == o && 11 != s ? "one" : i && o >= 2 && o <= 4 && (s < 12 || s > 14) ? "few" : i && 0 == o || i && o >= 5 && o <= 9 || i && s >= 11 && s <= 14 ? "many" : "other";
            },
            rwk: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            sah: function(e, t) {
                return "other";
            },
            saq: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            sc: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && n ? "one" : "other";
            },
            scn: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && n ? "one" : "other";
            },
            sd: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            sdh: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            se: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            seh: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ses: function(e, t) {
                return "other";
            },
            sg: function(e, t) {
                return "other";
            },
            sh: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = r.slice(-2), l = i.slice(-1), u = i.slice(-2);
                return t ? "other" : o && 1 == s && 11 != a || 1 == l && 11 != u ? "one" : o && s >= 2 && s <= 4 && (a < 12 || a > 14) || l >= 2 && l <= 4 && (u < 12 || u > 14) ? "few" : "other";
            },
            shi: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? "other" : e >= 0 && e <= 1 ? "one" : r && e >= 2 && e <= 10 ? "few" : "other";
            },
            si: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "";
                return t ? "other" : 0 == e || 1 == e || 0 == r && 1 == i ? "one" : "other";
            },
            sk: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1];
                return t ? "other" : 1 == e && i ? "one" : r >= 2 && r <= 4 && i ? "few" : i ? "other" : "many";
            },
            sl: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = r.slice(-2);
                return t ? "other" : i && 1 == o ? "one" : i && 2 == o ? "two" : i && (3 == o || 4 == o) || !i ? "few" : "other";
            },
            sma: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            smi: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            smj: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            smn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            sms: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other";
            },
            sn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            so: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            sq: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e, i = r && n[0].slice(-1), o = r && n[0].slice(-2);
                return t ? 1 == e ? "one" : 4 == i && 14 != o ? "many" : "other" : 1 == e ? "one" : "other";
            },
            sr: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = r.slice(-2), l = i.slice(-1), u = i.slice(-2);
                return t ? "other" : o && 1 == s && 11 != a || 1 == l && 11 != u ? "one" : o && s >= 2 && s <= 4 && (a < 12 || a > 14) || l >= 2 && l <= 4 && (u < 12 || u > 14) ? "few" : "other";
            },
            ss: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ssy: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            st: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            sv: function(e, t) {
                var n = String(e).split("."), r = !n[1], i = Number(n[0]) == e, o = i && n[0].slice(-1), s = i && n[0].slice(-2);
                return t ? 1 != o && 2 != o || 11 == s || 12 == s ? "other" : "one" : 1 == e && r ? "one" : "other";
            },
            sw: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            syr: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ta: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            te: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            teo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            th: function(e, t) {
                return "other";
            },
            ti: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            tig: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            tk: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e && n[0].slice(-1);
                return t ? 6 == r || 9 == r || 10 == e ? "few" : "other" : 1 == e ? "one" : "other";
            },
            tl: function(e, t) {
                var n = String(e).split("."), r = n[0], i = n[1] || "", o = !n[1], s = r.slice(-1), a = i.slice(-1);
                return t ? 1 == e ? "one" : "other" : o && (1 == r || 2 == r || 3 == r) || o && 4 != s && 6 != s && 9 != s || !o && 4 != a && 6 != a && 9 != a ? "one" : "other";
            },
            tn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            to: function(e, t) {
                return "other";
            },
            tr: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ts: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            tzm: function(e, t) {
                var n = String(e).split("."), r = Number(n[0]) == e;
                return t ? "other" : 0 == e || 1 == e || r && e >= 11 && e <= 99 ? "one" : "other";
            },
            ug: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            uk: function(e, t) {
                var n = String(e).split("."), r = n[0], i = !n[1], o = Number(n[0]) == e, s = o && n[0].slice(-1), a = o && n[0].slice(-2), l = r.slice(-1), u = r.slice(-2);
                return t ? 3 == s && 13 != a ? "few" : "other" : i && 1 == l && 11 != u ? "one" : i && l >= 2 && l <= 4 && (u < 12 || u > 14) ? "few" : i && 0 == l || i && l >= 5 && l <= 9 || i && u >= 11 && u <= 14 ? "many" : "other";
            },
            ur: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            uz: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            ve: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            vi: function(e, t) {
                return t && 1 == e ? "one" : "other";
            },
            vo: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            vun: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            wa: function(e, t) {
                return t ? "other" : 0 == e || 1 == e ? "one" : "other";
            },
            wae: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            wo: function(e, t) {
                return "other";
            },
            xh: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            xog: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            yi: function(e, t) {
                var n = !String(e).split(".")[1];
                return t ? "other" : 1 == e && n ? "one" : "other";
            },
            yo: function(e, t) {
                return "other";
            },
            yue: function(e, t) {
                return "other";
            },
            zh: function(e, t) {
                return "other";
            },
            zu: function(e, t) {
                return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
            }
        }, e.exports = n;
    }), vn = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getPlural = function(e, t) {
            for (let n = String(e); n; n = n.replace(/[-_]?[^-_]*$/, "")) {
                const e = r.default[n];
                if (e) return o(n, e, t);
            }
            throw new Error("Localisation function not found for locale " + JSON.stringify(e));
        }, t.getAllPlurals = function(e) {
            const t = {}, n = Object.keys(r.default);
            for (let i = 0; i < n.length; ++i) {
                const s = n[i];
                t[s] = o(s, r.default[s], e);
            }
            return t;
        };
        var n = i(mn), r = i(yn);
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, r) {
            var i = function() {
                return t.apply(this, arguments);
            };
            if (i.toString = (() => t.toString()), r) i.cardinal = [], i.ordinal = []; else {
                const t = n.default[e] || {};
                i.cardinal = t.cardinal, i.ordinal = t.ordinal;
            }
            return i;
        }
    });
    w(vn), vn.getPlural, vn.getAllPlurals;
    var bn = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        class n {
            constructor(e) {
                this.plural = function(e, t, n, r, i) {
                    if ({}.hasOwnProperty.call(r, e)) return r[e];
                    t && (e -= t);
                    var o = n(e, i);
                    return o in r ? r[o] : r.other;
                }, this.select = function(e, t) {
                    return {}.hasOwnProperty.call(t, e) ? t[e] : t.other;
                }, this.mf = e, this.setStrictNumber(e.strictNumberSign);
            }
            setStrictNumber(e) {
                this.number = e ? n.strictNumber : n.defaultNumber;
            }
            toString(e, t) {
                const n = {}, r = Object.keys(t.locales);
                for (let t = 0; t < r.length; ++t) {
                    const i = r[t];
                    n[(0, pn.funcname)(i)] = e[i];
                }
                const i = Object.keys(t.runtime);
                for (let e = 0; e < i.length; ++e) {
                    const t = i[e];
                    n[t] = this[t];
                }
                const o = Object.keys(t.formatters);
                if (o.length > 0) {
                    n.fmt = {};
                    for (let e = 0; e < o.length; ++e) {
                        const t = o[e];
                        n.fmt[t] = this.mf.fmt[t];
                    }
                }
                return function e(t, n) {
                    if ("object" != typeof t) {
                        const e = t.toString().replace(/^(function )\w*/, "$1"), n = /([ \t]*)\S.*$/.exec(e);
                        return n ? e.replace(new RegExp("^" + n[1], "mg"), "") : e;
                    }
                    const r = [];
                    for (let i in t) {
                        const o = e(t[i], n + 1);
                        r.push(0 === n ? `var ${i} = ${o};\n` : `${(0, pn.propname)(i)}: ${o}`);
                    }
                    if (0 === n) return r.join("");
                    if (0 === r.length) return "{}";
                    let i = "  ";
                    for (;--n; ) i += "  ";
                    return `{\n${r.join(",\n").replace(/^/gm, i)}\n}`;
                }(n, 0);
            }
        }
        t.default = n, n.defaultNumber = function(e, t, n) {
            if (!n) return e;
            if (isNaN(e)) throw new Error("Can't apply offset:" + n + " to argument `" + t + "` with non-numerical value " + JSON.stringify(e) + ".");
            return e - n;
        }, n.strictNumber = function(e, t, n) {
            if (isNaN(e)) throw new Error("Argument `" + t + "` has non-numerical value " + JSON.stringify(e) + ".");
            return e - (n || 0);
        };
    });
    w(bn);
    var wn = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = o(cn), r = o(gn), i = o(bn);
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        class s {
            static escape(e, t) {
                const n = t ? /[#{}]/g : /[{}]/g;
                return String(e).replace(n, "'$&'");
            }
            constructor(e) {
                if (this.pluralFuncs = {}, "string" == typeof e) this.pluralFuncs[e] = (0, vn.getPlural)(e), 
                this.defaultLocale = e; else if (Array.isArray(e)) e.forEach(e => {
                    this.pluralFuncs[e] = (0, vn.getPlural)(e);
                }), this.defaultLocale = e[0]; else {
                    for (const t in e) if (e.hasOwnProperty(t)) {
                        if ("function" != typeof e[t]) throw new Error("Expected function value for locale " + JSON.stringify(t));
                        this.pluralFuncs[t] = e[t], this.defaultLocale || (this.defaultLocale = t);
                    }
                    this.defaultLocale ? this.hasCustomPluralFuncs = !0 : this.defaultLocale = s.defaultLocale;
                }
                this.fmt = {}, this.runtime = new i.default(this);
            }
            addFormatters(e) {
                for (const t in e) e.hasOwnProperty(t) && (this.fmt[t] = e[t]);
                return this;
            }
            disablePluralKeyChecks() {
                this.noPluralKeyChecks = !0;
                for (const e in this.pluralFuncs) {
                    const t = this.pluralFuncs[e];
                    t && (t.cardinal = [], t.ordinal = []);
                }
                return this;
            }
            setBiDiSupport(e) {
                return this.bidiSupport = !!e || void 0 === e, this;
            }
            setStrictNumberSign(e) {
                return this.strictNumberSign = !!e || void 0 === e, this.runtime.setStrictNumber(this.strictNumberSign), 
                this;
            }
            compile(e, t) {
                let n = {};
                if (0 === Object.keys(this.pluralFuncs).length) if (t) {
                    const e = (0, vn.getPlural)(t, this.noPluralKeyChecks);
                    if (!e) {
                        const e = JSON.stringify(t);
                        throw new Error(`Locale ${e} not found!`);
                    }
                    n[t] = e;
                } else t = this.defaultLocale, n = (0, vn.getAllPlurals)(this.noPluralKeyChecks); else if (t) {
                    const e = this.pluralFuncs[t];
                    if (!e) {
                        const e = JSON.stringify(t), n = JSON.stringify(this.pluralFuncs);
                        throw new Error(`Locale ${e} not found in ${n}!`);
                    }
                    n[t] = e;
                } else t = this.defaultLocale, n = this.pluralFuncs;
                const i = new r.default(this), o = i.compile(e, t, n);
                if ("object" != typeof e) {
                    const e = new Function("number, plural, select, fmt", (0, pn.funcname)(t), "return " + o), r = this.runtime;
                    return e(r.number, r.plural, r.select, this.fmt, n[t]);
                }
                const s = this.runtime.toString(n, i) + "\n", a = function e(t, n) {
                    if (n || (n = 0), "object" != typeof t) return t;
                    let r = "";
                    for (let e = 0; e < n; ++e) r += "  ";
                    const i = [];
                    for (const o in t) {
                        const s = e(t[o], n + 1);
                        i.push(`\n${r}  ${(0, pn.propname)(o)}: ${s}`);
                    }
                    return `{${i.join(",")}\n${r}}`;
                }(o), l = new Function(s + "return " + a)();
                if (l.hasOwnProperty("toString")) throw new Error("The top-level message key `toString` is reserved");
                return l.toString = function(e) {
                    return e && "export default" !== e ? e.indexOf(".") > -1 ? s + e + " = " + a : s + [ "(function (root, G) {", '  if (typeof define === "function" && define.amd) { define(G); }', '  else if (typeof exports === "object") { module.exports = G; }', "  else { " + (0, 
                    pn.propname)(e, "root") + " = G; }", "})(this, " + a + ");" ].join("\n") : s + "export default " + a;
                }, l;
            }
        }
        t.default = s, s.defaultLocale = "en", s.formatters = n.default;
    });
    w(wn);
    var _n = wn.default;
    let En, Sn, Tn, Cn, xn, kn;
    function In(e, t) {
        const n = chrome.i18n.getMessage(e);
        return t && xn ? (kn[e] || (kn[e] = xn.compile(n)), kn[e](t)) : n;
    }
    function An() {
        return Pn().split("-")[0];
    }
    function Pn() {
        return Cn || chrome.i18n.getUILanguage();
    }
    !function(e) {
        e.None = "none", e.Alt = "alt", e.Meta = "meta", e.Ctrl = "ctrl", e.Shift = "shift";
    }(En || (En = {})), function(e) {
        e.Blank = "blank", e.NewTab = "newTab";
    }(Sn || (Sn = {})), function(e) {
        e.Ltr = "ltr", e.Rtl = "rtl";
    }(Tn || (Tn = {})), (Cn = In("language_code").replace("_", "-")) && (xn = new _n(Cn), 
    kn = {});
    const Nn = I("analytics/ga");
    var Ln;
    !function(e) {
        e.Event = "event", e.ScreenView = "screenview";
    }(Ln || (Ln = {}));
    class Rn {
        constructor(e) {
            v(this, "lastIpInfoRequest", void 0), v(this, "adapter", void 0), e && (this.adapter = e);
        }
        trackView(e) {
            this.trackOnlyLifecycleEvents() || this.track(Ln.ScreenView, {
                cd: e
            });
        }
        trackEvent(e, t, n) {
            this.trackOnlyLifecycleEvents() && e !== p.Lifecycle || this.track(Ln.Event, {
                ea: t,
                ec: e,
                el: n
            });
        }
        trackHeartbeat() {
            this.trackEvent(p.Lifecycle, g.Heartbeat, R.extensionVersion);
        }
        async refreshClientCountryCode() {
            let e = O.getState();
            if (e.proxy) if (navigator.onLine && e.proxy.state === r.Disconnected) if (this.lastIpInfoRequest && this.lastIpInfoRequest > Date.now() - 864e5) Nn("skipping ip info check, too soon to check"); else try {
                const t = await fetch(Rn.ipInfoUrl);
                if (t.ok) {
                    const n = await t.json();
                    (e = O.getState()).proxy.state === r.Disconnected ? O.dispatch(d.clientCountryCodeChange(n.country)) : Nn("proxy state not disconnected anymore, cannot trust ip info");
                }
            } catch (e) {
                Nn("error while fetching ip info: %O", e);
            } finally {
                this.lastIpInfoRequest = Date.now();
            } else Nn("not online or proxy on, cannot check ip info");
        }
        getParamsForUninstallUrl() {
            return {
                p_hid: O.getState().analytics.guid
            };
        }
        async track(e, t) {
            if (!this.adapter) return void Nn("no ga parameters adapter available, not tracking");
            const n = O.getState(), r = new URLSearchParams(), i = this.adapter(n);
            r.append("v", "1"), r.append("t", e), r.append("cid", n.analytics.guid), r.append("ul", Pn()), 
            r.append("av", n.analytics.currentVersion), r.append("aip", "1"), Object.keys(i).forEach(e => {
                "string" == typeof i[e] && r.append(e, i[e]);
            }), Object.keys(t).forEach(e => {
                "string" == typeof t[e] && r.append(e, t[e]);
            }), r.append("z", Math.floor(1e8 + 9e8 * Math.random()).toString());
            const o = new Request(Rn.gaUrl, {
                body: r.toString(),
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            });
            try {
                Nn("ga params: %s", r.toString()), await fetch(o);
            } catch (e) {
                Nn("error while tracking to ga: %O", e);
            }
        }
        trackOnlyLifecycleEvents() {
            return O.getState().shepherd.config.analytics.gaOnlyLifecycleEvents;
        }
    }
    function On(e, t) {
        const n = R.browser === L.Firefox ? "extension_firefox" : "extension_chrome", r = new URL(e);
        return r.searchParams.append("utm_medium", "prg_link"), r.searchParams.append("utm_source", n), 
        r.searchParams.append("utm_campaign", t.campaign), t.content && r.searchParams.append("utm_content", t.content), 
        t.term && r.searchParams.append("utm_term", t.term), t.otherParams && Object.keys(t.otherParams).forEach(e => {
            r.searchParams.append(e, t.otherParams[e]);
        }), r.href;
    }
    function Fn(e) {
        return e ? "1" : "0";
    }
    v(Rn, "gaUrl", "https://www.google-analytics.com/collect"), v(Rn, "ipInfoUrl", "https://ip-info.ff.avast.com/v2/info");
    const Un = I("analytics");
    class Bn {
        constructor(e) {
            v(this, "gaAdapter", void 0), v(this, "burgerAdapter", void 0), v(this, "browserStorage", void 0), 
            v(this, "burger", void 0), v(this, "ga", void 0), e && (this.gaAdapter = e.gaAdapter || null, 
            this.burgerAdapter = e.burgerAdapter || null, this.browserStorage = e.browserStorage || null);
        }
        init() {
            Un("initializing"), this.initOrRemoveTrackers(), chrome.alarms.onAlarm.addListener(this.handleAlarm.bind(this)), 
            chrome.alarms.create(Bn.alarmName, {
                periodInMinutes: Bn.alarmInterval
            }), window.addEventListener("online", this.handleConnectivityChange.bind(this));
        }
        trackEvent(e, t, n, r) {
            this.burger ? this.burger.trackEvent(e, t, n, r) : this.ga ? this.ga.trackEvent(e, t, n) : Un("not tracking event, burger/ga not initialized");
        }
        trackView(e) {
            this.burger ? this.burger.trackView(e) : this.ga ? this.ga.trackView(e) : Un("not tracking view, burger/ga not initialized");
        }
        trackLifecycleEvent(e) {
            this.burger ? this.trackHeartbeat() : this.ga ? this.ga.trackEvent(p.Lifecycle, e, R.extensionVersion) : Un("not tracking lifecycle event, burger/ga not initialized");
        }
        async initOrRemoveTrackers() {
            const e = O.getState(), t = e.shepherd.config.analytics && e.shepherd.config.analytics.trackToGa, n = e.shepherd.config.analytics && e.shepherd.config.analytics.trackToBurger;
            t && !this.ga && this.gaAdapter ? (Un("initializing ga tracker"), this.ga = new Rn(this.gaAdapter)) : !t && this.ga && (Un("removing ga tracker"), 
            this.ga = null), n && !this.burger && this.browserStorage && this.burgerAdapter ? (Un("initializing burger tracker"), 
            this.burger = new an(this.browserStorage, this.burgerAdapter)) : !n && this.burger && (Un("removing burger tracker"), 
            await this.burger.flush(), this.burger = null);
        }
        refreshClientCountryCode() {
            this.ga && this.ga.refreshClientCountryCode();
        }
        updateUninstallUrl() {
            const e = O.getState(), t = e.shepherd.config.analytics.utmCampaignUninstall || e.shepherd.config.analytics.utmCampaign, n = e.shepherd.config.analytics.uninstallUrl;
            if (!n) return void Un("not updating uninstall url, analytics.uninstallUrl not set in shepherd config");
            let r;
            this.burger && e.shepherd.config.analytics.uninstallTabType === o.Burger ? r = this.burger.getParamsForUninstallUrl() : this.ga && e.shepherd.config.analytics.uninstallTabType === o.Ga && (r = this.ga.getParamsForUninstallUrl());
            let i = On(n, {
                campaign: t,
                otherParams: r
            });
            i.length > 255 && (i = On(n, {
                campaign: t
            }), Un("uninstall url too long, stripping otherParams")), Un("updating uninstall url: %s (%d)", i, i.length), 
            chrome.runtime.setUninstallURL(i);
        }
        trackHeartbeatIfNecessary() {
            Un("checking if heartbeat should be tracked");
            const e = O.getState(), t = Date.now(), n = 60 * e.shepherd.config.analytics.heartbeatIntervalHours * 60 * 1e3;
            e.analytics.lastHeartbeat + n > t || this.trackHeartbeat();
        }
        trackHeartbeat() {
            Un("tracking heartbeat"), this.burger ? this.burger.trackHeartbeat() : this.ga ? this.ga.trackHeartbeat() : Un("not tracking heartbeat, burger/ga not initialized"), 
            O.dispatch(d.heartbeatTracked());
        }
        handleAlarm(e) {
            e.name === Bn.alarmName && this.trackHeartbeatIfNecessary();
        }
        handleConnectivityChange() {
            this.trackHeartbeatIfNecessary(), this.refreshClientCountryCode();
        }
    }
    function Mn(e, ...t) {
        return Object.assign.apply(this, [].concat({}, e, ...t));
    }
    function Vn(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case l.Updated:
            return Mn(e, {
                currentVersion: R.extensionVersion,
                updateTime: Date.now()
            });

          case f.HeartbeatTracked:
            return Mn(e, {
                lastHeartbeat: Date.now()
            });

          case f.ClientCountryCodeChange:
            return Mn(e, {
                clientCountryCode: t.value
            });

          case f.CreateSession:
            return Mn(e, {
                sessionId: J.createSessionId(),
                sessionStart: Date.now()
            });
        }
        return e;
    }
    function zn(e) {
        let t = "";
        for (;e-- > 0; ) t += Math.floor(16 * Math.random()).toString(16);
        return t;
    }
    v(Bn, "alarmName", "analytics/heartbeat"), v(Bn, "alarmInterval", 15);
    const jn = {
        guid: zn(8) + "-" + zn(4) + "-" + zn(4) + "-" + zn(4) + "-" + zn(12),
        installationTime: Date.now(),
        installationVersion: R.extensionVersion,
        updateTime: null,
        currentVersion: R.extensionVersion,
        currentVersionBuild: Number(R.extensionVersion.split(".").pop()),
        lastHeartbeat: 0,
        clientCountryCode: null,
        sessionId: null,
        sessionStart: null,
        startupTime: Date.now()
    }, Dn = [ "guid", "installationTime", "installationVersion", "updateTime", "currentVersion", "lastHeartbeat", "clientCountryCode" ], Yn = I("browserStorage");
    var Hn = Array.isArray, qn = Object.keys, $n = Object.prototype.hasOwnProperty, Wn = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
            var r, i, o, s = Hn(t), a = Hn(n);
            if (s && a) {
                if ((i = t.length) != n.length) return !1;
                for (r = i; 0 != r--; ) if (!e(t[r], n[r])) return !1;
                return !0;
            }
            if (s != a) return !1;
            var l = t instanceof Date, u = n instanceof Date;
            if (l != u) return !1;
            if (l && u) return t.getTime() == n.getTime();
            var h = t instanceof RegExp, c = n instanceof RegExp;
            if (h != c) return !1;
            if (h && c) return t.toString() == n.toString();
            var f = qn(t);
            if ((i = f.length) !== qn(n).length) return !1;
            for (r = i; 0 != r--; ) if (!$n.call(n, f[r])) return !1;
            for (r = i; 0 != r--; ) if (!e(t[o = f[r]], n[o])) return !1;
            return !0;
        }
        return t != t && n != n;
    };
    const Kn = I("statePersist"), Gn = "_state";
    class Zn {
        constructor(e, t) {
            v(this, "browserStorage", void 0), v(this, "paths", void 0);
            const n = [];
            Object.keys(t).forEach(function(e) {
                t[e].forEach(function(t) {
                    t.includes(".") ? Kn("no support for persisting nested properties: %s:%s", e, t) : n.push({
                        root: e,
                        subpath: t
                    });
                });
            }), this.browserStorage = e, this.paths = n;
        }
        load() {
            return this.browserStorage.get(Gn) || null;
        }
        clear() {
            this.browserStorage.set(Gn, null);
        }
        buildMiddleware() {
            let e = null;
            return t => n => r => {
                let i;
                const o = n(r), s = t.getState();
                return s !== e && (i = this.paths.reduce((e, t) => (e[t.root] = e[t.root] || {}, 
                e[t.root][t.subpath] = s[t.root][t.subpath], e), {})), e = s, !i || Wn(this.browserStorage.get(Gn), i) ? o : (this.browserStorage.set(Gn, i), 
                o);
            };
        }
    }
    var Jn = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }(), Xn = {
        INIT: "@@redux/INIT" + Math.random().toString(36).substring(7).split("").join("."),
        REPLACE: "@@redux/REPLACE" + Math.random().toString(36).substring(7).split("").join(".")
    }, Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, er = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function tr(e, t, n) {
        var r;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(tr)(e, t);
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var i = e, o = t, s = [], a = s, l = !1;
        function u() {
            a === s && (a = s.slice());
        }
        function h() {
            if (l) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return o;
        }
        function c(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (l) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return u(), a.push(e), function() {
                if (t) {
                    if (l) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    t = !1, u();
                    var n = a.indexOf(e);
                    a.splice(n, 1);
                }
            };
        }
        function f(e) {
            if (!function(e) {
                if ("object" !== (void 0 === e ? "undefined" : Qn(e)) || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (l) throw new Error("Reducers may not dispatch actions.");
            try {
                l = !0, o = i(o, e);
            } finally {
                l = !1;
            }
            for (var t = s = a, n = 0; n < t.length; n++) (0, t[n])();
            return e;
        }
        return f({
            type: Xn.INIT
        }), (r = {
            dispatch: f,
            subscribe: c,
            getState: h,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                i = e, f({
                    type: Xn.REPLACE
                });
            }
        })[Jn] = function() {
            var e, t = c;
            return (e = {
                subscribe: function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : Qn(e)) || null === e) throw new TypeError("Expected the observer to be an object.");
                    function n() {
                        e.next && e.next(h());
                    }
                    return n(), {
                        unsubscribe: t(n)
                    };
                }
            })[Jn] = function() {
                return this;
            }, e;
        }, r;
    }
    function nr(e, t) {
        var n = t && t.type;
        return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    var rr = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.repeat = function(e, t) {
            return new Array(t + 1).join(e);
        }, r = t.pad = function(e, t) {
            return n("0", t - e.toString().length) + e;
        };
        t.formatTime = function(e) {
            return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3);
        }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date;
    });
    w(rr), rr.repeat, rr.pad, rr.formatTime, rr.timer;
    var ir = _(function(e, t) {
        e.exports = function(e) {
            var t, n, r = [];
            function i(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
            }
            function o(e, t) {
                Object.defineProperty(this, "kind", {
                    value: e,
                    enumerable: !0
                }), t && t.length && Object.defineProperty(this, "path", {
                    value: t,
                    enumerable: !0
                });
            }
            function s(e, t, n) {
                s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "rhs", {
                    value: n,
                    enumerable: !0
                });
            }
            function a(e, t) {
                a.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function l(e, t) {
                l.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function u(e, t, n) {
                u.super_.call(this, "A", e), Object.defineProperty(this, "index", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "item", {
                    value: n,
                    enumerable: !0
                });
            }
            function h(e, t, n) {
                var r = e.slice((n || t) + 1 || e.length);
                return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e;
            }
            function c(e) {
                var t = typeof e;
                return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
            }
            function f(t, n, r, i, o, d, p) {
                var g = (o = o || []).slice(0);
                if (void 0 !== d) {
                    if (i) {
                        if ("function" == typeof i && i(g, d)) return;
                        if ("object" == typeof i) {
                            if (i.prefilter && i.prefilter(g, d)) return;
                            if (i.normalize) {
                                var m = i.normalize(g, d, t, n);
                                m && (t = m[0], n = m[1]);
                            }
                        }
                    }
                    g.push(d);
                }
                "regexp" === c(t) && "regexp" === c(n) && (t = t.toString(), n = n.toString());
                var y = typeof t, v = typeof n;
                if ("undefined" === y) "undefined" !== v && r(new a(g, n)); else if ("undefined" === v) r(new l(g, t)); else if (c(t) !== c(n)) r(new s(g, t, n)); else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0) r(new s(g, t, n)); else if ("object" === y && null !== t && null !== n) {
                    if ((p = p || []).indexOf(t) < 0) {
                        if (p.push(t), Array.isArray(t)) {
                            var b;
                            for (t.length, b = 0; b < t.length; b++) b >= n.length ? r(new u(g, b, new l(e, t[b]))) : f(t[b], n[b], r, i, g, b, p);
                            for (;b < n.length; ) r(new u(g, b, new a(e, n[b++])));
                        } else {
                            var w = Object.keys(t), _ = Object.keys(n);
                            w.forEach(function(o, s) {
                                var a = _.indexOf(o);
                                a >= 0 ? (f(t[o], n[o], r, i, g, o, p), _ = h(_, a)) : f(t[o], e, r, i, g, o, p);
                            }), _.forEach(function(t) {
                                f(e, n[t], r, i, g, t, p);
                            });
                        }
                        p.length = p.length - 1;
                    }
                } else t !== n && ("number" === y && isNaN(t) && isNaN(n) || r(new s(g, t, n)));
            }
            function d(t, n, r, i) {
                return i = i || [], f(t, n, function(e) {
                    e && i.push(e);
                }, r), i.length ? i : e;
            }
            function p(e, t, n) {
                if (e && t && n && n.kind) {
                    for (var r = e, i = -1, o = n.path ? n.path.length - 1 : 0; ++i < o; ) void 0 === r[n.path[i]] && (r[n.path[i]] = "number" == typeof n.path[i] ? [] : {}), 
                    r = r[n.path[i]];
                    switch (n.kind) {
                      case "A":
                        !function e(t, n, r) {
                            if (r.path && r.path.length) {
                                var i, o = t[n], s = r.path.length - 1;
                                for (i = 0; i < s; i++) o = o[r.path[i]];
                                switch (r.kind) {
                                  case "A":
                                    e(o[r.path[i]], r.index, r.item);
                                    break;

                                  case "D":
                                    delete o[r.path[i]];
                                    break;

                                  case "E":
                                  case "N":
                                    o[r.path[i]] = r.rhs;
                                }
                            } else switch (r.kind) {
                              case "A":
                                e(t[n], r.index, r.item);
                                break;

                              case "D":
                                t = h(t, n);
                                break;

                              case "E":
                              case "N":
                                t[n] = r.rhs;
                            }
                            return t;
                        }(n.path ? r[n.path[i]] : r, n.index, n.item);
                        break;

                      case "D":
                        delete r[n.path[i]];
                        break;

                      case "E":
                      case "N":
                        r[n.path[i]] = n.rhs;
                    }
                }
            }
            return t = "object" == typeof b && b ? b : "undefined" != typeof window ? window : {}, 
            (n = t.DeepDiff) && r.push(function() {
                void 0 !== n && t.DeepDiff === d && (t.DeepDiff = n, n = e);
            }), i(s, o), i(a, o), i(l, o), i(u, o), Object.defineProperties(d, {
                diff: {
                    value: d,
                    enumerable: !0
                },
                observableDiff: {
                    value: f,
                    enumerable: !0
                },
                applyDiff: {
                    value: function(e, t, n) {
                        e && t && f(e, t, function(r) {
                            n && !n(e, t, r) || p(e, t, r);
                        });
                    },
                    enumerable: !0
                },
                applyChange: {
                    value: p,
                    enumerable: !0
                },
                revertChange: {
                    value: function(e, t, n) {
                        if (e && t && n && n.kind) {
                            var r, i, o = e;
                            for (i = n.path.length - 1, r = 0; r < i; r++) void 0 === o[n.path[r]] && (o[n.path[r]] = {}), 
                            o = o[n.path[r]];
                            switch (n.kind) {
                              case "A":
                                !function e(t, n, r) {
                                    if (r.path && r.path.length) {
                                        var i, o = t[n], s = r.path.length - 1;
                                        for (i = 0; i < s; i++) o = o[r.path[i]];
                                        switch (r.kind) {
                                          case "A":
                                            e(o[r.path[i]], r.index, r.item);
                                            break;

                                          case "D":
                                          case "E":
                                            o[r.path[i]] = r.lhs;
                                            break;

                                          case "N":
                                            delete o[r.path[i]];
                                        }
                                    } else switch (r.kind) {
                                      case "A":
                                        e(t[n], r.index, r.item);
                                        break;

                                      case "D":
                                      case "E":
                                        t[n] = r.lhs;
                                        break;

                                      case "N":
                                        t = h(t, n);
                                    }
                                    return t;
                                }(o[n.path[r]], n.index, n.item);
                                break;

                              case "D":
                              case "E":
                                o[n.path[r]] = n.lhs;
                                break;

                              case "N":
                                delete o[n.path[r]];
                            }
                        }
                    },
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return void 0 !== n;
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return r && (r.forEach(function(e) {
                            e();
                        }), r = null), d;
                    },
                    enumerable: !0
                }
            }), d;
        }();
    }), or = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n, o) {
            var s = (0, r.default)(e, t);
            try {
                o ? n.groupCollapsed("diff") : n.group("diff");
            } catch (e) {
                n.log("diff");
            }
            s ? s.forEach(function(e) {
                var t = e.kind, r = function(e) {
                    var t = e.kind, n = e.path, r = e.lhs, i = e.rhs, o = e.index, s = e.item;
                    switch (t) {
                      case "E":
                        return [ n.join("."), r, "→", i ];

                      case "N":
                        return [ n.join("."), i ];

                      case "D":
                        return [ n.join(".") ];

                      case "A":
                        return [ n.join(".") + "[" + o + "]", s ];

                      default:
                        return [];
                    }
                }(e);
                n.log.apply(n, [ "%c " + i[t].text, function(e) {
                    return "color: " + i[e].color + "; font-weight: bold";
                }(t) ].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)));
            }) : n.log("—— no diff ——");
            try {
                n.groupEnd();
            } catch (e) {
                n.log("—— diff end —— ");
            }
        };
        var n, r = (n = ir) && n.__esModule ? n : {
            default: n
        }, i = {
            E: {
                color: "#2196F3",
                text: "CHANGED:"
            },
            N: {
                color: "#4CAF50",
                text: "ADDED:"
            },
            D: {
                color: "#F44336",
                text: "DELETED:"
            },
            A: {
                color: "#2196F3",
                text: "ARRAY:"
            }
        };
        e.exports = t.default;
    });
    w(or);
    var sr = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.printBuffer = function(e, t) {
            var n = t.logger, r = t.actionTransformer, s = t.titleFormatter, a = void 0 === s ? function(e) {
                var t = e.timestamp, n = e.duration;
                return function(e, r, i) {
                    var o = [ "action" ];
                    return o.push("%c" + String(e.type)), t && o.push("%c@ " + r), n && o.push("%c(in " + i.toFixed(2) + " ms)"), 
                    o.join(" ");
                };
            }(t) : s, l = t.collapsed, u = t.colors, h = t.level, c = t.diff, f = void 0 === t.titleFormatter;
            e.forEach(function(s, d) {
                var p = s.started, g = s.startedTime, m = s.action, y = s.prevState, v = s.error, b = s.took, w = s.nextState, _ = e[d + 1];
                _ && (w = _.prevState, b = _.started - p);
                var E = r(m), S = "function" == typeof l ? l(function() {
                    return w;
                }, m, s) : l, T = (0, rr.formatTime)(g), C = u.title ? "color: " + u.title(E) + ";" : "", x = [ "color: gray; font-weight: lighter;" ];
                x.push(C), t.timestamp && x.push("color: gray; font-weight: lighter;"), t.duration && x.push("color: gray; font-weight: lighter;");
                var k = a(E, T, b);
                try {
                    S ? u.title && f ? n.groupCollapsed.apply(n, [ "%c " + k ].concat(x)) : n.groupCollapsed(k) : u.title && f ? n.group.apply(n, [ "%c " + k ].concat(x)) : n.group(k);
                } catch (e) {
                    n.log(k);
                }
                var I = o(h, E, [ y ], "prevState"), A = o(h, E, [ E ], "action"), P = o(h, E, [ v, y ], "error"), N = o(h, E, [ w ], "nextState");
                I && (u.prevState ? n[I]("%c prev state", "color: " + u.prevState(y) + "; font-weight: bold", y) : n[I]("prev state", y)), 
                A && (u.action ? n[A]("%c action    ", "color: " + u.action(E) + "; font-weight: bold", E) : n[A]("action    ", E)), 
                v && P && (u.error ? n[P]("%c error     ", "color: " + u.error(v, y) + "; font-weight: bold;", v) : n[P]("error     ", v)), 
                N && (u.nextState ? n[N]("%c next state", "color: " + u.nextState(w) + "; font-weight: bold", w) : n[N]("next state", w)), 
                c && (0, i.default)(y, w, n, S);
                try {
                    n.groupEnd();
                } catch (e) {
                    n.log("—— log end ——");
                }
            });
        };
        var r, i = (r = or) && r.__esModule ? r : {
            default: r
        };
        function o(e, t, r, i) {
            switch (void 0 === e ? "undefined" : n(e)) {
              case "object":
                return "function" == typeof e[i] ? e[i].apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)) : e[i];

              case "function":
                return e(t);

              default:
                return e;
            }
        }
    });
    w(sr), sr.printBuffer;
    var ar = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            level: "log",
            logger: console,
            logErrors: !0,
            collapsed: void 0,
            predicate: void 0,
            duration: !1,
            timestamp: !0,
            stateTransformer: function(e) {
                return e;
            },
            actionTransformer: function(e) {
                return e;
            },
            errorTransformer: function(e) {
                return e;
            },
            colors: {
                title: function() {
                    return "inherit";
                },
                prevState: function() {
                    return "#9E9E9E";
                },
                action: function() {
                    return "#03A9F4";
                },
                nextState: function() {
                    return "#4CAF50";
                },
                error: function() {
                    return "#F20404";
                }
            },
            diff: !1,
            diffPredicate: void 0,
            transformer: void 0
        }, e.exports = t.default;
    });
    w(ar);
    var lr = _(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logger = t.createLogger = t.defaults = void 0;
        var n, r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, i = (n = ar) && n.__esModule ? n : {
            default: n
        };
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r({}, i.default, e), n = t.logger, o = t.stateTransformer, s = t.errorTransformer, a = t.predicate, l = t.logErrors, u = t.diffPredicate;
            if (void 0 === n) return function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
            function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            var h = [];
            return function(e) {
                var n = e.getState;
                return function(e) {
                    return function(i) {
                        if ("function" == typeof a && !a(n, i)) return e(i);
                        var c = {};
                        h.push(c), c.started = rr.timer.now(), c.startedTime = new Date(), c.prevState = o(n()), 
                        c.action = i;
                        var f = void 0;
                        if (l) try {
                            f = e(i);
                        } catch (e) {
                            c.error = s(e);
                        } else f = e(i);
                        c.took = rr.timer.now() - c.started, c.nextState = o(n());
                        var d = t.diff && "function" == typeof u ? u(n, i) : t.diff;
                        if ((0, sr.printBuffer)(h, r({}, t, {
                            diff: d
                        })), h.length = 0, c.error) throw c.error;
                        return f;
                    };
                };
            };
        }
        var s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, n = e.getState;
            if ("function" == typeof t || "function" == typeof n) return o()({
                dispatch: t,
                getState: n
            });
            console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
        };
        t.defaults = i.default, t.createLogger = o, t.logger = s, t.default = s;
    });
    w(lr), lr.logger;
    var ur = lr.createLogger, hr = (lr.defaults, w(_(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t) {
                return function(n) {
                    return function(r) {
                        var i = t.getState(), o = n(r), s = t.getState();
                        return e(i, s, r, t.dispatch), o;
                    };
                };
            };
        };
    })));
    const cr = I("store");
    function fr(e, t) {
        Wn(e, t) || chrome.runtime.sendMessage({
            type: l.StateChange,
            value: {
                state: t
            }
        }, function() {
            chrome.runtime.lastError;
        });
    }
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = window.browser);
    const dr = new class {
        constructor() {
            v(this, "cache", void 0), v(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(e) {
            return new Promise(t => {
                chrome && chrome.storage || t(), this.usingStorage = !0, chrome.storage.local.get(e || null, e => {
                    this.cache = e, t();
                });
            });
        }
        get(e) {
            return this.cache[e];
        }
        set(e, t) {
            null == t || void 0 === t ? (this.usingStorage && chrome.storage.local.remove(e, () => {
                chrome.runtime.lastError && Yn('could not remove key "%s" from browser storage (%O)', e, chrome.runtime.lastError);
            }), delete this.cache[e]) : (this.usingStorage && chrome.storage.local.set({
                [e]: t
            }, () => {
                chrome.runtime.lastError && Yn('could not set key "%s" in browser storage (%O)', e, chrome.runtime.lastError);
            }), this.cache[e] = t);
        }
    }(), pr = I("bgLdr");
    let gr;
    !function(e) {
        e.AvastVpn = "AvastVpn", e.AvastVpnStandalone = "AvastVpnStandalone", e.AvgVpn = "AvgVpn", 
        e.HmaProxy = "HmaProxy", e.Unknown = "Unknown";
    }(gr || (gr = {}));
    const mr = new class {
        constructor() {
            switch (v(this, "_shepherdId", void 0), v(this, "_productId", void 0), v(this, "_productBrand", void 0), 
            this._shepherdId = "115" == Number("115") ? "115" : "", this._productId = gr.HmaProxy ? gr.HmaProxy : gr.Unknown, 
            this._productId) {
              case gr.AvastVpn:
              case gr.AvastVpnStandalone:
                this._productBrand = "SecureLine";
                break;

              case gr.AvgVpn:
                this._productBrand = "SecureVpn";
                break;

              default:
                this._productBrand = this._productId;
            }
        }
        get shepherdId() {
            return this._shepherdId;
        }
        get productId() {
            return this._productId;
        }
        get isProduction() {
            return !0;
        }
        get productBrand() {
            return this._productBrand;
        }
    }();
    let yr, vr;
    I("features"), function(e) {
        e.Proxy = "proxy", e.Vpn = "vpn", e.WebRtc = "webRtc", e.TabKiller = "tabKiller", 
        e.Shepherd = "shepherd", e.Analytics = "analytics", e.Spc = "spc", e.Notifications = "notifications";
    }(yr || (yr = {})), function(e) {
        e.NotificationClose = "notifications.notificationClose", e.NotificationOpen = "notifications.notificationOpen", 
        e.ProxyConnectionsPostpone = "notifications.proxyConnectionsPostpone", e.ProxyConnectionsTrigger = "notifications.proxyConnectionsTrigger", 
        e.SitePostpone = "notifications.sitePostpone", e.SiteTrigger = "notifications.siteTrigger";
    }(vr || (vr = {}));
    const br = {
        notificationClose: t => e(vr.NotificationClose, {
            notificationId: t
        }),
        notificationOpen: (t, n, r, i) => e(vr.NotificationOpen, {
            notificationId: t,
            id: n,
            type: r,
            site: i
        }),
        proxyConnectionsPostpone: t => e(vr.ProxyConnectionsPostpone, {
            id: t
        }),
        proxyConnectionsTrigger: t => e(vr.ProxyConnectionsTrigger, {
            id: t
        }),
        sitePostpone: (t, n) => e(vr.SitePostpone, {
            id: t,
            site: n
        }),
        siteTrigger: (t, n) => e(vr.SiteTrigger, {
            id: t,
            site: n
        })
    }, wr = I("notifications/triggers");
    class _r {
        constructor(e) {
            v(this, "webNavigationListeners", void 0), v(this, "proxyConnectionListeners", void 0), 
            v(this, "knownIds", void 0), this.webNavigationListeners = [], this.proxyConnectionListeners = [], 
            this.knownIds = e;
        }
        init() {
            wr("initializing"), this.setUpTriggers();
        }
        setUpTriggers() {
            const e = O.getState(), t = e.shepherd.config.notifications && e.shepherd.config.notifications.triggers;
            for (;this.webNavigationListeners.length > 0; ) chrome.webNavigation.onCompleted.removeListener(this.webNavigationListeners.pop());
            this.proxyConnectionListeners = [], t ? t.forEach(e => {
                e.id ? e.enabled ? this.knownIds.includes(e.id) ? Array.isArray(e.sites) && Number.isInteger(e.daysBetween) && Number.isInteger(e.limit) ? e.sites.forEach(t => {
                    this.setUpSiteTrigger(e, t);
                }) : Array.isArray(e.proxyConnections) ? this.setUpProxyConnectionsTrigger(e) : wr("invalid trigger: %O", e) : wr("unknown trigger id: %s", e.id) : wr("trigger %s is disabled", e.id) : wr("trigger has no id: %O", e);
            }) : wr("triggers not defined");
        }
        handleProxyConnect() {
            this.proxyConnectionListeners.forEach(e => {
                e();
            });
        }
        getSiteTriggerHistory(e, t) {
            const n = O.getState();
            let r = {};
            if (n.notifications.history && n.notifications.history[e]) {
                const i = n.notifications.history[e];
                i && i.sites && "object" == typeof i.sites[t] && (r = i.sites[t]);
            }
            return {
                shown: Array.isArray(r.shown) ? r.shown : [],
                nextNotSoonerThan: r.nextNotSoonerThan
            };
        }
        setUpSiteTrigger(e, t) {
            wr("setting up trigger for %s (%s)", e.id, t);
            let {shown: n, nextNotSoonerThan: r} = this.getSiteTriggerHistory(e.id, t);
            if (n && n.length >= e.limit) return void wr("not setting up web navigation listener for %s (%s), limit reached", e.id, t);
            const i = i => {
                if (i.frameId > 0) wr("no hit for %s (%s), not main frame", e.id, t); else if (({shown: n, nextNotSoonerThan: r} = this.getSiteTriggerHistory(e.id, t)), 
                n && n.length >= e.limit) wr("no hit for %s (%s), limit reached", e.id, t); else {
                    if (n && n.length > 0) {
                        const r = n[n.length - 1] + 86400 * e.daysBetween * 1e3;
                        if (r && r > i.timeStamp) return void wr("no hit for %s (%s), too soon", e.id, t);
                    }
                    r > Date.now() ? wr("no hit for %s (%s), previously postponed", e.id, t) : O.dispatch(br.siteTrigger(e.id, t));
                }
            };
            return chrome.webNavigation.onCompleted.addListener(i, {
                url: [ {
                    hostSuffix: t
                } ]
            }), this.webNavigationListeners.push(i), i;
        }
        getProxyConnectionsTriggerHistory(e) {
            const t = O.getState();
            if (t.notifications.history && t.notifications.history[e]) {
                const n = t.notifications.history[e];
                if (Array.isArray(n.proxyConnections)) return n.proxyConnections;
            }
            return [];
        }
        setUpProxyConnectionsTrigger(e) {
            wr("setting up proxy connections trigger %s", e.id);
            let t = this.getProxyConnectionsTriggerHistory(e.id);
            if (t.length >= e.proxyConnections.length) return void wr("not setting up proxy connections trigger for %s, limit reached", e.id);
            const n = () => {
                if ((t = this.getProxyConnectionsTriggerHistory(e.id)).length >= e.proxyConnections.length) return void wr("no hit for %s, limit reached", e.id);
                const n = e.proxyConnections.map((t, n) => t - (n > 0 ? e.proxyConnections[n - 1] : 0));
                (t.length > 0 ? t[t.length - 1] : 0) + n[t.length] > O.getState().notifications.proxyConnectionCount ? wr("no hit for %s, too soon", e.id) : O.dispatch(br.proxyConnectionsTrigger(e.id));
            };
            return this.proxyConnectionListeners.push(n), n;
        }
    }
    let Er, Sr, Tr;
    !function(e) {
        e.Postpone = "postpone";
    }(Er || (Er = {})), function(e) {
        e.ProxyConnections = "proxyConnections", e.Site = "site";
    }(Sr || (Sr = {})), function(e) {
        e.Notification = "notification";
    }(Tr || (Tr = {}));
    const Cr = I("notifications");
    class xr {
        constructor(e) {
            v(this, "definitions", void 0), this.definitions = e.definitions;
        }
        get knownIds() {
            return this.definitions.map(e => e.id);
        }
        init() {
            Cr("initializing"), chrome.notifications.onClicked.addListener(this.handleNotificationClick.bind(this)), 
            chrome.notifications.onButtonClicked.addListener(this.handleNotificationButtonClick.bind(this)), 
            chrome.notifications.onClosed.addListener(this.handleNotificationClose.bind(this));
        }
        async showNotification(e, t, n) {
            const r = this.definitions.find(t => t.id === e);
            if (!r) return void Cr("cannot show notification, unknown notification id: %s", e);
            Cr("showing notification for %s", e);
            const i = {
                type: "basic",
                iconUrl: chrome.extension.getURL("img/icon96-active.png"),
                title: r.title,
                message: r.message
            };
            R.browser === L.Chrome && r.buttons && (i.buttons = r.buttons.map(e => ({
                title: e.title
            })), i.requireInteraction = !0);
            const o = `${e}__${Date.now()}`;
            O.dispatch(br.notificationOpen(o, e, t, n)), chrome.notifications.create(o, i, () => {
                O.dispatch(d.trackView(y.Notification));
            });
        }
        handleNotificationClick(e) {
            Cr("notification %s clicked", e);
            const t = O.getState().notifications.openNotifications[e], n = t && t.id, r = this.definitions.find(e => e.id === n);
            r && this.maybeOpenLinkInUrl(n, r.clickLink), O.dispatch(d.trackEvent(p.Notification, g.Click, m.WholeNotification)), 
            this.clearNotification(e);
        }
        handleNotificationButtonClick(e, t) {
            Cr("notification %s button %d clicked", e, t);
            const n = O.getState().notifications.openNotifications[e], r = n && n.id, i = this.definitions.find(e => e.id === r);
            if (i && i.buttons && i.buttons.length > t) {
                const e = i.buttons[t];
                if (this.maybeOpenLinkInUrl(r, e.clickLink), e.eventLabel && O.dispatch(d.trackEvent(p.Notification, g.Click, e.eventLabel)), 
                e.action === Er.Postpone) switch (n.type) {
                  case Sr.ProxyConnections:
                    O.dispatch(br.proxyConnectionsPostpone(r));
                    break;

                  case Sr.Site:
                    O.dispatch(br.sitePostpone(r, n.site));
                }
            }
            this.clearNotification(e);
        }
        handleNotificationClose(e, t) {
            Cr("notification %s closed, by user: %O", e, t), O.dispatch(d.trackEvent(p.Notification, g.Click, m.Close)), 
            this.clearNotification(e);
        }
        clearNotification(e) {
            chrome.notifications.clear(e, t => {
                O.dispatch(br.notificationClose(e));
            });
        }
        maybeOpenLinkInUrl(e, t) {
            var n;
            t && (n = On(t, {
                campaign: O.getState().shepherd.config.analytics.utmCampaign,
                content: Tr.Notification,
                term: e
            }), chrome.tabs.create({
                url: n
            }));
        }
    }
    function kr(e, n) {
        switch (e = void 0 === e ? {} : e, n.type) {
          case t.Connect:
            return Mn(e, {
                proxyConnectionCount: e.proxyConnectionCount + 1
            });

          case vr.NotificationOpen:
            return Mn(e, {
                openNotifications: Mn(e.openNotifications, {
                    [n.value.notificationId]: {
                        id: n.value.id,
                        type: n.value.type,
                        site: n.value.site
                    }
                })
            });

          case vr.NotificationClose:
            {
                const t = Mn(e.openNotifications);
                return delete t[n.value.notificationId], Mn(e, {
                    openNotifications: t
                });
            }

          case vr.ProxyConnectionsTrigger:
            {
                const t = e.history[n.value.id] || {}, r = t.proxyConnections || [];
                return Mn(e, {
                    history: Mn(e.history, {
                        [n.value.id]: Mn(t, {
                            proxyConnections: r.concat(e.proxyConnectionCount)
                        })
                    })
                });
            }

          case vr.ProxyConnectionsPostpone:
            {
                const t = e.history[n.value.id] || {}, r = t.proxyConnections || [];
                return Mn(e, {
                    history: Mn(e.history, {
                        [n.value.id]: Mn(t, {
                            proxyConnections: r.slice(0, -1)
                        })
                    })
                });
            }

          case vr.SiteTrigger:
            {
                const t = e.history[n.value.id] || {}, r = t.sites || {}, i = r[n.value.site] || {}, o = i.shown || [];
                return Mn(e, {
                    history: Mn(e.history, {
                        [n.value.id]: Mn(t, {
                            sites: Mn(r, {
                                [n.value.site]: Mn(i, {
                                    nextNotSoonerThan: void 0,
                                    shown: o.concat(Date.now())
                                })
                            })
                        })
                    })
                });
            }

          case vr.SitePostpone:
            {
                const t = e.history[n.value.id] || {}, r = t.sites || {}, i = r[n.value.site] || {}, o = i.shown || [];
                return Mn(e, {
                    history: Mn(e.history, {
                        [n.value.id]: Mn(t, {
                            sites: Mn(r, {
                                [n.value.site]: Mn(i, {
                                    nextNotSoonerThan: Date.now() + 864e5,
                                    shown: o.slice(0, -1)
                                })
                            })
                        })
                    })
                });
            }
        }
        return e;
    }
    const Ir = {
        proxyConnectionCount: 0,
        history: {},
        postponed: {},
        openNotifications: {}
    }, Ar = [ "proxyConnectionCount", "history", "postponed" ];
    function Pr(e, t) {
        const n = e();
        let r = R.name;
        if (n.proxy) {
            let e;
            if (n.proxy.activeLocation && n.proxy.activeLocation.locationDetails) {
                const t = n.proxy.activeLocation.locationDetails;
                e = `Disguised as ${t.countryName}, ${t.cityName}`;
            } else e = n.proxy.activeLocation ? "Disguised" : "Not disguised";
            r += `\n${e}`;
        }
        n.tabKiller && (r += n.tabKiller.savedTabs ? `\n${n.tabKiller.savedTabs.length} saved tabs` : ""), 
        r && chrome.browserAction.setTitle({
            title: r,
            tabId: t
        });
    }
    function Nr(e, t) {
        const n = e();
        let r;
        n.tabKiller && (r = n.tabKiller.savedTabs ? n.tabKiller.savedTabs.length.toString() : ""), 
        chrome.browserAction.setBadgeText({
            text: r,
            tabId: t
        }), chrome.browserAction.setBadgeBackgroundColor({
            color: "#FFCC01",
            tabId: t
        });
    }
    const Lr = I("management");
    function Rr(e) {
        return new Promise(t => {
            chrome.management.setEnabled(e, !1, () => {
                chrome.runtime.lastError ? Lr("could not disable extension %s: %s", e, chrome.runtime.lastError) : Lr("extension %s disabled", e), 
                t();
            });
        });
    }
    async function Or(e) {
        Lr("going to disable all extensions with %s permission", e);
        const t = await new Promise(e => {
            chrome.management.getAll(t => {
                e(t);
            });
        });
        for (const n of t) n.id !== chrome.runtime.id && n.enabled && n.permissions && n.permissions.includes(e) && (Lr("trying to disable extension: %s / %s", n.name, n.id), 
        await Rr(n.id));
    }
    const Fr = I("proxyConfigManager");
    class Ur {
        constructor() {
            v(this, "isFetching", !1);
        }
        init() {
            Fr("initializing"), chrome.alarms.onAlarm.addListener(this.handleAlarm.bind(this)), 
            chrome.alarms.create(Ur.alarmName, {
                periodInMinutes: Ur.alarmInterval
            }), window.addEventListener("online", this.handleConnectivityChange.bind(this)), 
            this.fetchConfigsIfNecessary();
        }
        async fetchConfigsIfNecessary() {
            if (this.isFetching) return void Fr("already updating configs");
            Fr("checking if config updates are necessary"), this.isFetching = !0;
            const e = O.getState(), t = Date.now();
            try {
                (await Promise.all([ this.fetchLocationsConfig(e, t), this.fetchCredentialsConfig(e, t) ])).find(e => !1 === e) && Fr("error while updating configs");
            } catch (e) {
                Fr("error while updating configs: %O", e);
            } finally {
                this.isFetching = !1;
            }
        }
        handleAlarm(e) {
            e.name === Ur.alarmName && this.fetchConfigsIfNecessary();
        }
        handleConnectivityChange() {
            this.fetchConfigsIfNecessary();
        }
        async fetchLocationsConfig(e, t) {
            if (e.proxy.nextLocationsConfigUpdate > t && Array.isArray(e.proxy.locations)) return null;
            Fr("updating locations config");
            const r = {
                licenseType: "FREE",
                extensionVersion: R.extensionVersion,
                language: An()
            }, i = await this.fetchConfig(Ur.locationsConfigUrlPath, r);
            return i && O.dispatch(n.locationsConfigReceived(i)), !!i;
        }
        async fetchCredentialsConfig(e, t) {
            if (e.proxy.nextCredentialsConfigUpdate > t && e.proxy.credentials) return null;
            Fr("updating credentials config");
            const r = await this.fetchConfig(Ur.credentialsConfigUrlPath);
            return r && O.dispatch(n.credentialsConfigReceived(r)), !!r;
        }
        async fetchConfig(e, t) {
            const n = Ur.controllerUrl + e, r = JSON.stringify(t || {}), i = new Request(n, {
                body: r,
                method: "POST"
            });
            try {
                const e = await fetch(i);
                return await e.json();
            } catch (e) {
                return Fr("error while updating config from %s: %O", n, e), null;
            }
        }
    }
    let Br;
    function Mr(e) {
        return e.levelOfControl === Br.Controlled || e.levelOfControl === Br.Controllable;
    }
    function Vr(e) {
        return e.levelOfControl === Br.Controlled;
    }
    v(Ur, "controllerUrl", "https://slc.ff.avast.com"), v(Ur, "locationsConfigUrlPath", "/v1/httpProxy/getLocationList"), 
    v(Ur, "credentialsConfigUrlPath", "/v1/httpProxy/getCredentials"), v(Ur, "alarmName", "proxy/config"), 
    v(Ur, "alarmInterval", 10), function(e) {
        e.Controllable = "controllable_by_this_extension", e.Controlled = "controlled_by_this_extension";
    }(Br || (Br = {}));
    const zr = "js/pac.js", jr = [ "localhost", "127.0.0.1" ];
    function Dr(e) {
        return e ? `HTTPS ${e.fqdn}:${e.port}` : "DIRECT";
    }
    function isMatchingHost(e, t) {
        return e === t || !(e.length <= t.length || !e.endsWith(t)) && "." === e[e.length - t.length - 1];
    }
    const Yr = I("proxyChrome");
    class Hr {
        init() {
            Yr("initializing"), chrome.proxy.settings.get({}, this.handleConfig), chrome.proxy.settings.onChange.addListener(this.handleConfig);
        }
        updateProxy() {
            const e = O.getState(), t = e.proxy.activeLocation, n = jr.map(e => `isMatchingHost(host, '${e}')`).join(" || "), o = e.proxy.autoConnectSites.map(e => ({
                host: e.host,
                rule: Dr(e.location)
            })), s = {
                pacScript: {
                    data: `\n\t\t\t${isMatchingHost.toString()}\n\t\t\tconst autoConnectEnabled = ${e.proxy.autoConnectEnabled};\n\t\t\tconst autoConnectHosts = ${JSON.stringify(o)};\n\n\t\t\tfunction FindProxyForURL(url, host) {\n\t\t\t\tif (autoConnectEnabled) {\n\t\t\t\t\tconst autoConnectHost = autoConnectHosts.find((site) => isMatchingHost(host, site.host));\n\n\t\t\t\t\tif (autoConnectHost) {\n\t\t\t\t\t\treturn autoConnectHost.rule;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (${e.proxy.state !== r.Connected}) {\n\t\t\t\t\treturn 'DIRECT';\n\t\t\t\t}\n\n\t\t\t\tif (${n}) {\n\t\t\t\t\treturn 'DIRECT';\n\t\t\t\t}\n\n\t\t\t\tif (${Boolean(e.proxy.activeLocation)}) {\n\t\t\t\t\treturn '${Dr(t)}';\n\t\t\t\t}\n\n\t\t\t\treturn 'DIRECT';\n\t\t\t}\n\t\t`
                },
                mode: i.PacScript
            };
            Yr("setting chrome pac script to: %O", s.pacScript), chrome.proxy.settings.set({
                value: s,
                scope: "regular"
            });
        }
        refreshSettings() {
            chrome.proxy.settings.get({}, this.handleConfig);
        }
        handleConfig(e) {
            Yr("handling chrome settings change: %O", e);
            const t = O.getState(), o = Mr(e);
            o !== t.proxy.isAvailable && O.dispatch(n.isAvailableChange(o));
            const s = Vr(e), a = e.value.mode === i.PacScript && Boolean(t.proxy.activeLocation), l = s && a ? r.Connected : r.Disconnected;
            l !== t.proxy.state && O.dispatch(n.stateChange(l));
        }
    }
    const qr = I("proxyFirefox");
    class $r {
        init() {
            qr("initializing"), browser.proxy.register(zr);
        }
        updateProxy() {
            const e = O.getState(), t = {
                activeLocation: e.proxy.activeLocation,
                proxyState: e.proxy.state,
                autoConnectEnabled: e.proxy.autoConnectEnabled,
                autoConnectSites: e.proxy.autoConnectSites
            };
            qr("sending message to proxy script: %O", t), browser.runtime.sendMessage(n.pacDataChange(t), {
                toProxyScript: !0
            }).then(e => {
                e && (qr("proxy script wants to update proxy state: %s", e), O.dispatch(n.stateChange(e)));
            });
        }
        refreshSettings() {}
    }
    const Wr = I("proxy"), Kr = {
        16: "img/icon16.png",
        32: "img/icon32.png",
        48: "img/icon48.png",
        64: "img/icon64.png",
        96: "img/icon96.png"
    }, Gr = {
        16: "img/icon16-active.png",
        32: "img/icon32-active.png",
        48: "img/icon48-active.png",
        64: "img/icon64-active.png",
        96: "img/icon96-active.png"
    };
    class Zr {
        constructor(e) {
            if (v(this, "_proxyImpl", void 0), e) this._proxyImpl = e; else if ("object" == typeof browser && browser.proxy) this._proxyImpl = new $r(); else {
                if ("object" != typeof chrome || !chrome.proxy) throw new Error("no proxy API available, proxy feature will be unavailable");
                this._proxyImpl = new Hr();
            }
        }
        init() {
            Wr("initializing");
            const e = [ "http://*/*", "https://*/*" ];
            chrome.webRequest.onAuthRequired.addListener(this.handleAuthRequired, {
                urls: e
            }, [ "blocking" ]), chrome.webRequest.onErrorOccurred.addListener(this.handleWebRequestError, {
                urls: e
            }), chrome.proxy.onProxyError.addListener(this.handleProxyError), chrome.tabs.onActivated.addListener(this.handleTabActivated.bind(this)), 
            chrome.tabs.onUpdated.addListener(this.handleTabUpdated.bind(this)), this._proxyImpl.init();
        }
        updateProxy() {
            this._proxyImpl.updateProxy(), chrome.tabs.query({
                active: !0
            }, e => {
                e.forEach(e => {
                    this.updateIcon(e);
                });
            });
        }
        refreshSettings() {
            this._proxyImpl.refreshSettings();
        }
        handleAuthRequired(e) {
            if (!e.isProxy) return {};
            const t = O.getState().proxy.credentials, r = {};
            if (t) {
                const n = {
                    username: t.username,
                    password: t.password
                };
                Wr("providing credentials to proxy %s: %O", e.challenger.host, n), r.authCredentials = n;
            } else Wr("not providing credentials to proxy %s due to invalid credentials", e.challenger.host), 
            O.dispatch(n.credentialsConfigInvalid());
            return r;
        }
        handleProxyError(e) {
            Wr("proxy error: %O", e);
        }
        handleWebRequestError(e) {
            O.getState().proxy.state === r.Connected && "main_frame" === e.type && Wr("webrequest error: %s (%s), %O", e.error, e.url);
        }
        handleTabActivated(e) {
            chrome.tabs.get(e.tabId, e => {
                !chrome.runtime.lastError && e && this.updateIcon(e);
            });
        }
        handleTabUpdated(e, t, n) {
            n && (t.url || t.status) && this.updateIcon(n);
        }
        isConnectedOnTab(e, t) {
            if (t.proxy.state === r.Connected) return !0;
            if (!t.proxy.autoConnectEnabled) return !1;
            let n;
            try {
                const t = new URL(e);
                n = t.host;
            } catch (t) {
                return Wr('cannot create URL from "%s"', e), !1;
            }
            return !!n && !!t.proxy.autoConnectSites.find(e => isMatchingHost(n, e.host));
        }
        updateIcon(e) {
            if (e.active) {
                const t = O.getState();
                let n;
                n = this.isConnectedOnTab(e.url, t) ? Gr : Kr, chrome.browserAction.setIcon({
                    path: n,
                    tabId: e.id
                }, () => {
                    chrome.runtime.lastError && Wr("error while setting browser action icon: %s", chrome.runtime.lastError);
                });
            }
        }
    }
    function Jr(e, n) {
        switch (e = void 0 === e ? {} : e, n.type) {
          case t.LocationsConfigReceived:
            {
                const t = [], r = [ ...n.value.proxyLocationsConfiguration.optimalLocations, ...n.value.proxyLocationsConfiguration.locations ];
                let i;
                if (i = e.selectedLocation ? r.find(t => t.locationKey === e.selectedLocation.locationKey) : r.find(e => null === e.locationKey), 
                t.push({
                    locations: r,
                    nextLocationsConfigUpdate: Date.now() + 1e3 * n.value.nextUpdateInSeconds,
                    selectedLocation: i || r[0]
                }), e.autoConnectSites.length) {
                    const n = e.autoConnectSites.map(e => {
                        let t;
                        return e.location && (t = r.find(t => t.locationKey === e.location.locationKey)), 
                        t || (t = r.find(e => null === e.locationKey)), Mn(e, {
                            location: t
                        });
                    });
                    t.push({
                        autoConnectSites: n
                    });
                }
                return Mn(e, ...t);
            }

          case t.CredentialsConfigInvalid:
            return Mn(e, {
                nextCredentialsConfigUpdate: Date.now()
            });

          case t.CredentialsConfigReceived:
            return Mn(e, {
                credentials: {
                    username: n.value.username,
                    password: n.value.password
                },
                nextCredentialsConfigUpdate: Date.now() + 6048e5
            });

          case t.Connect:
            return Mn(e, {
                activeLocation: n.value,
                state: r.Connecting
            });

          case t.Disconnect:
            return Mn(e, {
                activeLocation: null,
                state: r.Disconnecting
            });

          case t.IsAvailableChange:
            return Mn(e, {
                isAvailable: n.value
            });

          case t.StateChange:
            return Mn(e, {
                state: n.value
            });

          case t.SelectedLocationChange:
            return Mn(e, {
                selectedLocation: n.value
            });

          case t.AutoConnectEnabledChange:
            return Mn(e, {
                autoConnectEnabled: n.value
            });

          case t.AutoConnectSiteAdd:
            return Mn(e, {
                autoConnectEnabled: !0,
                autoConnectSites: e.autoConnectSites.concat([ {
                    host: n.value.host,
                    location: n.value.location
                } ])
            });

          case t.AutoConnectSiteChange:
            return Mn(e, {
                autoConnectSites: e.autoConnectSites.map((e, t) => t === n.value.index ? Mn(e, {
                    host: n.value.host,
                    location: n.value.location
                }) : e)
            });

          case t.AutoConnectSiteRemove:
            return Mn(e, {
                autoConnectSites: e.autoConnectSites.filter((e, t) => t !== n.value)
            });
        }
        return e;
    }
    const Xr = {
        isAvailable: null,
        state: null,
        locations: [],
        activeLocation: null,
        selectedLocation: null,
        nextLocationsConfigUpdate: Date.now(),
        credentials: null,
        nextCredentialsConfigUpdate: Date.now(),
        autoConnectEnabled: !1,
        autoConnectSites: []
    }, Qr = [ "locations", "activeLocation", "selectedLocation", "nextLocationsConfigUpdate", "credentials", "nextCredentialsConfigUpdate", "autoConnectEnabled", "autoConnectSites" ];
    var ei = _(function(e) {
        function t(e) {
            return e instanceof Buffer || e instanceof Date || e instanceof RegExp;
        }
        function n(e) {
            if (e instanceof Buffer) {
                var t = Buffer.alloc ? Buffer.alloc(e.length) : new Buffer(e.length);
                return e.copy(t), t;
            }
            if (e instanceof Date) return new Date(e.getTime());
            if (e instanceof RegExp) return new RegExp(e);
            throw new Error("Unexpected situation");
        }
        function r(e, t) {
            return "__proto__" === t ? void 0 : e[t];
        }
        var i = e.exports = function() {
            if (arguments.length < 1 || "object" != typeof arguments[0]) return !1;
            if (arguments.length < 2) return arguments[0];
            var e, o, s = arguments[0];
            return Array.prototype.slice.call(arguments, 1).forEach(function(a) {
                "object" != typeof a || null === a || Array.isArray(a) || Object.keys(a).forEach(function(l) {
                    return o = r(s, l), (e = r(a, l)) === s ? void 0 : "object" != typeof e || null === e ? void (s[l] = e) : Array.isArray(e) ? void (s[l] = function e(r) {
                        var o = [];
                        return r.forEach(function(r, s) {
                            "object" == typeof r && null !== r ? Array.isArray(r) ? o[s] = e(r) : t(r) ? o[s] = n(r) : o[s] = i({}, r) : o[s] = r;
                        }), o;
                    }(e)) : t(e) ? void (s[l] = n(e)) : "object" != typeof o || null === o || Array.isArray(o) ? void (s[l] = i({}, e)) : void (s[l] = i(o, e));
                });
            }), s;
        };
    });
    const ti = {
        nextUpdate: Date.now(),
        config: {
            proxy: {},
            analytics: {},
            notifications: {},
            popup: {}
        },
        abTests: {}
    }, ni = [ "nextUpdate", "config", "configId", "configName", "configVersion", "abTests" ];
    window.Buffer = window.Buffer || class {};
    const ri = I("shepherd/utils");
    function ii(e, t) {
        const n = localStorage.shepherdOverrides ? JSON.parse(localStorage.shepherdOverrides) : null, r = ei(e, t || void 0);
        return n ? (ri("merging local shepherd overrides: %O", n), ei(r, n)) : r;
    }
    function oi(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case s.ConfigReceived:
            const n = {};
            return "string" == typeof t.value.abTests && t.value.abTests.split(",").forEach(e => {
                if ("string" == typeof e && e.includes(":")) {
                    const [t, r] = e.split(":");
                    n[t] = r;
                }
            }), Mn(e, {
                abTests: n,
                config: ii(e.config, t.value.config),
                configId: t.value.configId,
                configName: t.value.configName,
                configVersion: t.value.configVersion,
                nextUpdate: Date.now() + 1e3 * t.value.ttl
            });
        }
        return e;
    }
    const si = I("shepherd");
    class ai {
        constructor() {
            v(this, "isFetching", !1);
        }
        init() {
            si("initializing"), chrome.alarms.onAlarm.addListener(this.handleAlarm.bind(this)), 
            chrome.alarms.create(ai.alarmName, {
                periodInMinutes: ai.alarmInterval
            }), window.addEventListener("online", this.handleConnectivityChange.bind(this)), 
            this.fetchConfigIfNecessary();
        }
        handleAlarm(e) {
            e.name === ai.alarmName && this.fetchConfigIfNecessary();
        }
        handleConnectivityChange() {
            this.fetchConfigIfNecessary();
        }
        async fetchConfigIfNecessary() {
            if (!mr.shepherdId) return void si("shepherd id not specified, not updating config");
            if (this.isFetching) return void si("already updating config");
            si("checking if config update is necessary");
            const e = O.getState(), t = Date.now();
            if (!(e.shepherd.nextUpdate > t)) {
                this.isFetching = !0;
                try {
                    await this.fetchConfig();
                } catch (e) {
                    si("error while updating config: %O", e);
                } finally {
                    this.isFetching = !1;
                }
            }
        }
        async fetchConfig() {
            si("updating config");
            const e = O.getState(), t = R.extensionVersion.split("."), n = new URLSearchParams();
            n.append("p_pro", mr.shepherdId), n.append("p_lng", An()), n.append("p_vep", t[0] || "0"), 
            n.append("p_ves", t[1] || "0"), n.append("p_vbd", t[2] || "0"), n.append("p_hid", e.analytics.guid), 
            n.append("p_bwe", R.browser === L.Firefox ? "1" : "0");
            const r = new XMLHttpRequest();
            r.open("POST", ai.shepherdUrl, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
            r.onreadystatechange = (() => {
                if (r.readyState === XMLHttpRequest.DONE) if (200 === r.status) try {
                    const e = JSON.parse(r.responseText), t = Number(r.getResponseHeader("TTL")) || ai.defaultTtl, n = r.getResponseHeader("AB-Tests"), i = Number(r.getResponseHeader("Config-Id")), o = r.getResponseHeader("Config-Name"), s = Number(r.getResponseHeader("Config-Version"));
                    O.dispatch(a.configReceived(e, t, n, i, o, s));
                } catch (e) {
                    si("error while processing shepherd response: %O", e);
                } else si("non-ok status code from shepherd: %s", r.status);
            }), r.send(n.toString());
        }
    }
    v(ai, "shepherdUrl", "https://shepherd.ff.avast.com"), v(ai, "alarmName", "shepherd"), 
    v(ai, "alarmInterval", 30), v(ai, "defaultTtl", 86400);
    const li = new class {
        constructor() {
            v(this, "extensionInitialized", void 0), v(this, "onInstalledDetails", void 0), 
            this.extensionInitialized = !1, chrome.runtime.onInstalled.addListener(this.handleInstalled.bind(this));
        }
        init() {
            this.extensionInitialized = !0, this.onInstalledDetails && this.dispatchInstalled(this.onInstalledDetails);
        }
        handleInstalled(e) {
            this.extensionInitialized ? this.dispatchInstalled(e) : this.onInstalledDetails = e;
        }
        dispatchInstalled(e) {
            switch (e.reason) {
              case "install":
                O.dispatch(u());
                break;

              case "update":
                O.dispatch(c(e.previousVersion));
            }
            this.onInstalledDetails = null;
        }
    }(), ui = {
        [l.Startup]() {
            li.init();
        },
        [l.GetState](e, t, n) {
            n.meta && n.meta.callback && n.meta.callback({
                state: t()
            });
        }
    };
    let hi;
    !function(e) {
        e.ShortcutEnabledChange = "tabKiller.shortcutEnabledChange", e.ShortcutKeyChange = "tabKiller.shortcutKeyChange", 
        e.ShortcutKeyModifierChange = "tabKiller.shortcutKeyModifierChange", e.SafePageValueChange = "tabKiller.safePageValueChange", 
        e.SafePageTabDetailsChange = "tabKiller.safePageTabDetailsChange", e.GetState = "tabKiller.getState", 
        e.UpdateStateInTab = "tabKiller.updateStateInTab", e.Engage = "tabKiller.engage", 
        e.SaveTabs = "tabKiller.saveTabs", e.ClearSavedTabs = "tabKiller.clearSavedTabs";
    }(hi || (hi = {}));
    const ci = {
        clearSavedTabs: () => e(hi.ClearSavedTabs),
        engage: () => e(hi.Engage),
        getState: () => e(hi.GetState),
        safePageTabDetailsChange: (t, n) => e(hi.SafePageTabDetailsChange, {
            tabId: t,
            tabUrl: n
        }),
        safePageValueChange: t => e(hi.SafePageValueChange, {
            value: t
        }),
        saveTabs: t => e(hi.SaveTabs, t),
        shortcutEnabledChange: t => e(hi.ShortcutEnabledChange, t),
        shortcutKeyChange: t => e(hi.ShortcutKeyChange, t),
        shortcutKeyModifierChange: t => e(hi.ShortcutKeyModifierChange, t),
        updateStateInTab: t => e(hi.UpdateStateInTab, t)
    };
    function fi(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case hi.ShortcutEnabledChange:
            return Mn(e, {
                shortcutEnabled: t.value
            });

          case hi.ShortcutKeyChange:
            return Mn(e, {
                shortcutKey: t.value
            });

          case hi.ShortcutKeyModifierChange:
            return Mn(e, {
                shortcutKeyModifier: t.value
            });

          case hi.SafePageValueChange:
            return Mn(e, {
                safePage: Mn(e.safePage, {
                    value: t.value.value
                })
            });

          case hi.SafePageTabDetailsChange:
            return Mn(e, {
                safePage: Mn(e.safePage, {
                    tabId: t.value.tabId,
                    tabUrl: t.value.tabUrl
                })
            });

          case hi.SaveTabs:
            return Mn(e, {
                savedTabs: t.value
            });

          case hi.ClearSavedTabs:
            return Mn(e, {
                savedTabs: null
            });
        }
        return e;
    }
    const di = {
        shortcutEnabled: !1,
        shortcutKey: "F4",
        shortcutKeyModifier: En.None,
        savedTabs: null,
        safePage: {
            value: Sn.NewTab
        }
    }, pi = [ "shortcutEnabled", "shortcutKey", "shortcutKeyModifier", "savedTabs", "safePage" ];
    In("no_modifier_key");
    const gi = I("tabKiller");
    class mi {
        init() {
            gi("initializing"), chrome.tabs.onActivated.addListener(this.handleTabActivation.bind(this));
        }
        getShortcutState() {
            const e = O.getState();
            return {
                shortcutEnabled: e.tabKiller.shortcutEnabled,
                shortcutKey: e.tabKiller.shortcutKey,
                shortcutKeyModifier: e.tabKiller.shortcutKeyModifier
            };
        }
        notifyCurrentTab() {
            chrome.tabs.query({
                active: !0
            }, e => {
                e.forEach(e => {
                    this.sendStateToTab(e.id);
                });
            });
        }
        engage() {
            const e = O.getState();
            Array.isArray(e.tabKiller.savedTabs) ? this.restore() : this.hide();
        }
        hide() {
            const e = O.getState();
            chrome.tabs.query({
                currentWindow: !0
            }, t => {
                const n = t.filter(e => (function(t) {
                    return !e.url.startsWith("about:");
                })()).map(e => ({
                    active: e.active,
                    id: e.id,
                    index: e.index,
                    pinned: e.pinned,
                    url: e.url
                })), r = n.map(e => e.id);
                O.dispatch(ci.saveTabs(n));
                const {safePage: i} = e.tabKiller, o = function(e) {
                    return e === Sn.Blank ? "about:blank" : e !== Sn.NewTab ? e.includes("://") || e.startsWith("about:") ? e : `http://${e}` : void 0;
                }(i.value);
                chrome.tabs.create({
                    url: o
                }, e => {
                    O.dispatch(ci.safePageTabDetailsChange(e.id, e.url));
                }), chrome.tabs.remove(r);
            });
        }
        restore() {
            const e = O.getState();
            e.tabKiller.savedTabs.sort((e, t) => e.active ? 1 : t.active ? -1 : e.index - t.index).forEach(e => {
                chrome.tabs.create({
                    index: e.index,
                    url: function(e) {
                        switch (e) {
                          case "about:newtab":
                            return;

                          default:
                            return e;
                        }
                    }(e.url),
                    pinned: e.pinned,
                    active: e.active
                });
            });
            const {safePage: t} = e.tabKiller;
            t.tabId && chrome.tabs.get(t.tabId, e => {
                t.tabUrl === e.url ? chrome.tabs.remove(t.tabId) : gi('not closing safe page, url changed from "%s" to "%s"', t.tabUrl, e.url), 
                O.dispatch(ci.safePageTabDetailsChange());
            }), O.dispatch(ci.clearSavedTabs());
        }
        handleTabActivation(e) {
            this.sendStateToTab(e.tabId);
        }
        sendStateToTab(e) {
            const t = this.getShortcutState();
            chrome.tabs.sendMessage(e, ci.updateStateInTab(t), () => {
                chrome.runtime.lastError;
            });
        }
    }
    const yi = {
        proxy: {},
        analytics: {
            gaOnlyLifecycleEvents: !1,
            heartbeatIntervalHours: 24,
            trackToGa: !0,
            trackToBurger: !1,
            uninstallTabType: o.Ga,
            uninstallUrl: R.browser === L.Firefox ? "https://www.hidemyass.com/survey-qualtrics?qp_sid=SV_9zCFvb8sWOzYN1P" : "https://www.hidemyass.com/survey-qualtrics?qp_sid=SV_e8uVPY3yg4wutjD",
            utmCampaign: "hma_mvp",
            utmCampaignUninstall: "hma_mvp_uninstall"
        },
        notifications: {
            triggers: []
        },
        popup: {
            urlFeedback: "https://support.hidemyass.com/hc/requests/new?ticket_form_id=669988",
            urlHelp: "https://support.hidemyass.com/hc/articles/360017143734"
        }
    }, vi = "https://www.hidemyass.com/downloads", bi = [ {
        id: "streaming",
        title: In("unblock_even_more_content"),
        message: In("go_pro_for_optimized_streaming_locations"),
        clickLink: vi,
        buttons: [ {
            title: In("download"),
            clickLink: vi,
            eventLabel: m.MoreStartFreeDownload
        }, {
            title: In("next_time"),
            eventLabel: m.MoreNextTime,
            action: Er.Postpone
        } ]
    }, {
        id: "desktop_client",
        title: In("stop_privacy_leaks"),
        message: In("get_hma_pro_vpn_for_total_protection"),
        clickLink: vi,
        buttons: [ {
            title: In("download"),
            clickLink: vi,
            eventLabel: m.MoreStartFreeDownload
        }, {
            title: In("next_time"),
            eventLabel: m.MoreNextTime,
            action: Er.Postpone
        } ]
    } ];
    let wi;
    !function(e) {
        e.IsSupportedChange = "webrtc.isSupportedChange", e.IsAvailableChange = "webrtc.isAvailableChange", 
        e.IsEnabledChange = "webrtc.isEnabledChange", e.Toggle = "webrtc.toggle", e.DisableConflictingExtensions = "webrtc.disableConflictingExtensions";
    }(wi || (wi = {}));
    const _i = {
        disableConflictingExtensions: () => e(wi.DisableConflictingExtensions),
        isAvailableChange: t => e(wi.IsAvailableChange, t),
        isEnabledChange: t => e(wi.IsEnabledChange, t),
        isSupportedChange: t => e(wi.IsSupportedChange, t),
        toggle: () => e(wi.Toggle)
    };
    function Ei(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case wi.IsSupportedChange:
            return Mn(e, {
                isSupported: t.value
            });

          case wi.IsEnabledChange:
            return Mn(e, {
                isEnabled: t.value
            });

          case wi.IsAvailableChange:
            return Mn(e, {
                isAvailable: t.value
            });
        }
        return e;
    }
    const Si = {
        isSupported: null,
        isAvailable: null,
        isEnabled: null
    }, Ti = [];
    let Ci;
    !function(e) {
        e.DisableNonProxiedUdp = "disable_non_proxied_udp", e.Default = "default";
    }(Ci || (Ci = {}));
    const xi = I("webRtc");
    class ki {
        constructor(e = !1) {
            v(this, "enableByDefault", void 0), v(this, "webRtcIpHandlingPolicy", void 0), this.enableByDefault = e, 
            chrome.privacy && chrome.privacy.network && (this.webRtcIpHandlingPolicy = chrome.privacy.network.webRTCIPHandlingPolicy);
        }
        init() {
            xi("initializing");
            const e = !!this.webRtcIpHandlingPolicy;
            O.dispatch(_i.isSupportedChange(e)), e && (this.webRtcIpHandlingPolicy.get({}, this.handleConfig), 
            this.webRtcIpHandlingPolicy.onChange && this.webRtcIpHandlingPolicy.onChange.addListener(this.handleConfig));
        }
        installed() {
            const e = O.getState();
            this.enableByDefault && !e.webRtc.isEnabled && (xi("enabling by default"), this.toggle());
        }
        toggle() {
            const e = O.getState();
            if (!e.webRtc.isSupported) return;
            const t = e.webRtc.isEnabled ? Ci.Default : Ci.DisableNonProxiedUdp;
            this.webRtcIpHandlingPolicy.set({
                value: t,
                scope: "regular"
            }, () => {
                this.webRtcIpHandlingPolicy.onChange || this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
            });
        }
        refreshSettings() {
            this.webRtcIpHandlingPolicy && this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
        }
        handleConfig(e) {
            xi("handling settings change: %O", e);
            const t = O.getState(), n = Mr(e);
            n !== t.webRtc.isAvailable && O.dispatch(_i.isAvailableChange(n));
            const r = Vr(e), i = e.value === Ci.DisableNonProxiedUdp, o = r && i;
            o !== t.webRtc.isEnabled && O.dispatch(_i.isEnabledChange(o));
        }
    }
    let Ii, Ai;
    switch (mr.productId) {
      case gr.HmaProxy:
        Ii = function(e) {
            const t = {
                an: "Hidemyass Browser Extension",
                tid: "UA-58120669-58",
                cd1: e.analytics.guid,
                cd2: e.proxy.selectedLocation && e.proxy.selectedLocation.locationKey || "auto",
                cd3: Fn(e.proxy.autoConnectEnabled),
                cd4: e.proxy.autoConnectSites.length.toString(),
                cd5: Fn(e.tabKiller.shortcutEnabled),
                cd11: Fn(mr.isProduction)
            };
            return e.analytics.clientCountryCode && (t.cd12 = e.analytics.clientCountryCode), 
            t;
        }, Ai = bi;
    }
    !async function(e) {
        await dr.init();
        const {reducers: i, generators: o, initialState: a, persistedPaths: u} = function(e) {
            const i = new Bn({
                gaAdapter: Ii
            }), o = new Zr(), a = new ki(!0), u = new mi(), h = new ai(), c = new xr({
                definitions: Ai
            });
            var p;
            return {
                reducers: {
                    [yr.Analytics]: Vn,
                    [yr.Proxy]: Jr,
                    [yr.WebRtc]: Ei,
                    [yr.TabKiller]: fi,
                    [yr.Shepherd]: oi,
                    [yr.Notifications]: kr
                },
                initialState: {
                    [yr.Analytics]: jn,
                    [yr.Proxy]: Xr,
                    [yr.WebRtc]: Si,
                    [yr.TabKiller]: function(e) {
                        const t = {
                            shortcutKey: R.os === P.Mac ? "K" : "F4",
                            shortcutKeyModifier: R.os === P.Mac ? En.Meta : En.None
                        };
                        return {
                            ...di,
                            ...t,
                            ...e
                        };
                    },
                    [yr.Shepherd]: (p = yi, function(e) {
                        const t = ii(ti.config, p), n = ii(t, e ? e.config : null);
                        return {
                            ...ti,
                            ...e,
                            config: n
                        };
                    }),
                    [yr.Notifications]: Ir
                },
                persistedPaths: {
                    [yr.Analytics]: Dn,
                    [yr.Proxy]: Qr,
                    [yr.WebRtc]: Ti,
                    [yr.TabKiller]: pi,
                    [yr.Shepherd]: ni,
                    [yr.Notifications]: Ar
                },
                generators: [ ui, function(e) {
                    const n = {};
                    return n[l.Startup] = (t => {
                        e.init(), t(d.createSession()), t(d.uninstallUrlDirty());
                    }), n[l.GetState] = (e => {
                        e(d.createSession());
                    }), n[l.Installed] = (() => {
                        e.trackLifecycleEvent(g.Installation), e.refreshClientCountryCode();
                    }), n[l.Updated] = (() => {
                        e.trackLifecycleEvent(g.Update);
                    }), n[s.ConfigReceived] = (t => {
                        e.initOrRemoveTrackers(), t(d.uninstallUrlDirty());
                    }), n[t.StateChange] = ((t, n, i) => {
                        i.value === r.Disconnected && e.refreshClientCountryCode();
                    }), n[f.TrackEvent] = ((t, n, r) => {
                        e.trackEvent(r.value.category, r.value.action, r.value.label, r.value.view);
                    }), n[f.TrackView] = ((t, n, r) => {
                        e.trackView(r.value);
                    }), n[f.UninstallUrlDirty] = (() => {
                        e.updateUninstallUrl();
                    }), n;
                }(i), function(e) {
                    const r = {}, i = new Ur();
                    return e && (r[l.Startup] = function() {
                        e.init(), i.init();
                    }, r[l.GetState] = function() {
                        i.fetchConfigsIfNecessary();
                    }, r[t.Connect] = (() => {
                        e.updateProxy();
                    }), r[t.Disconnect] = (() => {
                        e.updateProxy();
                    }), r[t.LocationsConfigReceived] = (() => {
                        e.updateProxy();
                    }), r[t.AutoConnectEnabledChange] = (() => {
                        e.updateProxy();
                    }), r[t.AutoConnectSiteAdd] = (() => {
                        e.updateProxy();
                    }), r[t.AutoConnectSiteChange] = (() => {
                        e.updateProxy();
                    }), r[t.AutoConnectSiteRemove] = (() => {
                        e.updateProxy();
                    }), r[t.SelectedLocationChange] = ((e, t, r) => {
                        e(n.connect(r.value));
                    }), r[t.StateChange] = ((t, n) => {
                        e.updateProxy(), Nr(n), Pr(n);
                    }), r[t.CredentialsConfigInvalid] = (() => {
                        i.fetchConfigsIfNecessary();
                    }), r[t.DisableConflictingExtensions] = (async () => {
                        await Or("proxy"), e.refreshSettings();
                    }), r[t.GetState] = function(e, t, n) {
                        n.meta && n.meta.callback && n.meta.sender.id === chrome.runtime.id && n.meta.callback({
                            state: t().proxy.state
                        });
                    }), r;
                }(o), function(e) {
                    const t = {};
                    return t[l.Startup] = (() => {
                        e.init();
                    }), t[l.Installed] = (() => {
                        e.installed();
                    }), t[wi.Toggle] = (() => {
                        e.toggle();
                    }), t[wi.DisableConflictingExtensions] = (async () => {
                        await Or("privacy"), e.refreshSettings();
                    }), t;
                }(a), function(e) {
                    const t = {};
                    return t[l.Startup] = function() {
                        e.init();
                    }, t[hi.ShortcutEnabledChange] = function() {
                        e.notifyCurrentTab();
                    }, t[hi.ShortcutKeyChange] = function() {
                        e.notifyCurrentTab();
                    }, t[hi.ShortcutKeyModifierChange] = function() {
                        e.notifyCurrentTab();
                    }, t[hi.Engage] = function() {
                        e.engage();
                    }, t[hi.GetState] = function(t, n, r) {
                        r.meta && r.meta.callback && r.meta.sender.id === chrome.runtime.id && r.meta.callback(e.getShortcutState());
                    }, t[hi.SaveTabs] = function(e, t, n) {
                        Nr(t), Pr(t);
                    }, t[hi.ClearSavedTabs] = function(e, t, n) {
                        Nr(t), Pr(t);
                    }, t;
                }(u), function(e) {
                    const t = {};
                    return e && (t[l.Startup] = function() {
                        e.init();
                    }), t;
                }(h), function(e) {
                    const n = {}, r = new _r(e.knownIds);
                    return n[l.Startup] = (() => {
                        r.init(), e.init();
                    }), n[s.ConfigReceived] = (() => {
                        r.setUpTriggers();
                    }), n[t.Connect] = (() => {
                        r.handleProxyConnect();
                    }), n[vr.SiteTrigger] = ((t, n, r) => {
                        e.showNotification(r.value.id, Sr.Site, r.value.site);
                    }), n[vr.ProxyConnectionsTrigger] = ((t, n, r) => {
                        e.showNotification(r.value.id, Sr.ProxyConnections);
                    }), n;
                }(c) ]
            };
        }(), c = new Zn(dr, u), p = c.load();
        p && (pr("persisted state: %O", p), Object.keys(p).forEach(e => {
            a[e] && p[e] && ("function" == typeof a[e] ? a[e] = a[e](p[e]) : a[e] = {
                ...a[e],
                ...p[e]
            });
        })), Object.keys(a).forEach(e => {
            "function" == typeof a[e] && (a[e] = a[e]());
        }), pr("initial state: %O", a);
        const m = function(e, t, n, r) {
            const i = t.map(e => (function(e) {
                return function(t) {
                    const n = t.dispatch, r = t.getState;
                    return function(t) {
                        return function(i) {
                            const o = t(i), s = e[i.type];
                            return s && s.call(e, n, r, i), o;
                        };
                    };
                };
            })(e)).concat([ hr(fr), cr.enabled && ur({
                diff: !0,
                predicate: (e, t) => (t.type || console.error("unknown action type", t), !t.type.includes("getState")),
                collapsed: () => !0,
                duration: !0,
                timestamp: !0
            }), r && r.buildMiddleware() ]).filter(e => e);
            return tr(function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var i = t[r];
                    "function" == typeof e[i] && (n[i] = e[i]);
                }
                var o = Object.keys(n), s = void 0;
                try {
                    !function(e) {
                        Object.keys(e).forEach(function(t) {
                            var n = e[t];
                            if (void 0 === n(void 0, {
                                type: Xn.INIT
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if (void 0 === n(void 0, {
                                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + Xn.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
                        });
                    }(n);
                } catch (e) {
                    s = e;
                }
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
                    if (s) throw s;
                    for (var r = !1, i = {}, a = 0; a < o.length; a++) {
                        var l = o[a], u = n[l], h = e[l], c = u(h, t);
                        if (void 0 === c) {
                            var f = nr(l, t);
                            throw new Error(f);
                        }
                        i[l] = c, r = r || c !== h;
                    }
                    return r ? i : e;
                };
            }(e), n, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var o = e.apply(void 0, r), s = function() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                        }, a = {
                            getState: o.getState,
                            dispatch: function() {
                                return s.apply(void 0, arguments);
                            }
                        }, l = t.map(function(e) {
                            return e(a);
                        });
                        return s = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return 0 === t.length ? function(e) {
                                return e;
                            } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                                return function() {
                                    return e(t.apply(void 0, arguments));
                                };
                            });
                        }.apply(void 0, l)(o.dispatch), er({}, o, {
                            dispatch: s
                        });
                    };
                };
            }.apply(null, i));
        }(i, o, a, c);
        O.setStore(m), O.dispatch(h()), chrome.runtime.onMessage.addListener(function(e, t, n) {
            if (e.type) return O.dispatch({
                ...e,
                meta: {
                    sender: t,
                    callback: n
                }
            }), void 0 !== n;
        });
    }();
}();
