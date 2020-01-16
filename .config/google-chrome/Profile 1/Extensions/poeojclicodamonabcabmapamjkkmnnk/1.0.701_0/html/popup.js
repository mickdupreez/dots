!function() {
    "use strict";
    function t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var n = 1e3, r = 6e4, o = 36e5, i = 24 * o, a = function(t, e) {
        e = e || {};
        var a, c, l = typeof t;
        if ("string" === l && t.length > 0) return function(t) {
            if (!((t = String(t)).length > 100)) {
                var e = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var a = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return 315576e5 * a;

                      case "weeks":
                      case "week":
                      case "w":
                        return 6048e5 * a;

                      case "days":
                      case "day":
                      case "d":
                        return a * i;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return a * o;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return a * r;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return a * n;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return a;

                      default:
                        return;
                    }
                }
            }
        }(t);
        if ("number" === l && !1 === isNaN(t)) return e.long ? (a = t, (c = Math.abs(a)) >= i ? s(a, c, i, "day") : c >= o ? s(a, c, o, "hour") : c >= r ? s(a, c, r, "minute") : c >= n ? s(a, c, n, "second") : a + " ms") : function(t) {
            var e = Math.abs(t);
            return e >= i ? Math.round(t / i) + "d" : e >= o ? Math.round(t / o) + "h" : e >= r ? Math.round(t / r) + "m" : e >= n ? Math.round(t / n) + "s" : t + "ms";
        }(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function s(t, e, n, r) {
        var o = e >= 1.5 * n;
        return Math.round(t / n) + " " + r + (o ? "s" : "");
    }
    var c = e(function(t, e) {
        e.log = function(...t) {
            return "object" == typeof console && console.log && console.log(...t);
        }, e.formatArgs = function(e) {
            if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            let r = 0, o = 0;
            e[0].replace(/%[a-zA-Z%]/g, t => {
                "%%" !== t && (r++, "%c" === t && (o = r));
            }), e.splice(o, 0, n);
        }, e.save = function(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
        }, e.load = function() {
            let t;
            try {
                t = e.storage.getItem("debug");
            } catch (t) {}
            return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), 
            t;
        }, e.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, e.storage = function() {
            try {
                return localStorage;
            } catch (t) {}
        }(), e.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        t.exports = function(t) {
            function e(t) {
                let e = 0;
                for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                return n.colors[Math.abs(e) % n.colors.length];
            }
            function n(t) {
                let i;
                function a(...t) {
                    if (!a.enabled) return;
                    const e = a, r = Number(new Date()), o = r - (i || r);
                    e.diff = o, e.prev = i, e.curr = r, i = r, t[0] = n.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                    let s = 0;
                    t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                        if ("%%" === r) return r;
                        s++;
                        const i = n.formatters[o];
                        if ("function" == typeof i) {
                            const n = t[s];
                            r = i.call(e, n), t.splice(s, 1), s--;
                        }
                        return r;
                    }), n.formatArgs.call(e, t), (e.log || n.log).apply(e, t);
                }
                return a.namespace = t, a.enabled = n.enabled(t), a.useColors = n.useColors(), a.color = e(t), 
                a.destroy = r, a.extend = o, "function" == typeof n.init && n.init(a), n.instances.push(a), 
                a;
            }
            function r() {
                const t = n.instances.indexOf(this);
                return -1 !== t && (n.instances.splice(t, 1), !0);
            }
            function o(t, e) {
                return n(this.namespace + (void 0 === e ? ":" : e) + t);
            }
            function i(t) {
                return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t;
            }, n.disable = function() {
                const t = [ ...n.names.map(i), ...n.skips.map(i).map(t => "-" + t) ].join(",");
                return n.enable(""), t;
            }, n.enable = function(t) {
                let e;
                n.save(t), n.names = [], n.skips = [];
                const r = ("string" == typeof t ? t : "").split(/[\s,]+/), o = r.length;
                for (e = 0; e < o; e++) r[e] && ("-" === (t = r[e].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
                for (e = 0; e < n.instances.length; e++) {
                    const t = n.instances[e];
                    t.enabled = n.enabled(t.namespace);
                }
            }, n.enabled = function(t) {
                if ("*" === t[t.length - 1]) return !0;
                let e, r;
                for (e = 0, r = n.skips.length; e < r; e++) if (n.skips[e].test(t)) return !1;
                for (e = 0, r = n.names.length; e < r; e++) if (n.names[e].test(t)) return !0;
                return !1;
            }, n.humanize = a, Object.keys(t).forEach(e => {
                n[e] = t[e];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = e, 
            n.enable(n.load()), n;
        }(e);
        const {formatters: n} = t.exports;
        n.j = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message;
            }
        };
    }), l = (c.log, c.formatArgs, c.save, c.load, c.useColors, c.storage, c.colors, 
    Object.freeze({}));
    function u(t) {
        return null == t;
    }
    function d(t) {
        return null != t;
    }
    function p(t) {
        return !0 === t;
    }
    function f(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
    }
    function h(t) {
        return null !== t && "object" == typeof t;
    }
    var A = Object.prototype.toString;
    function m(t) {
        return "[object Object]" === A.call(t);
    }
    function v(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
    }
    function g(t) {
        return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
    }
    function b(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
    }
    function _(t, e) {
        for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()];
        } : function(t) {
            return n[t];
        };
    }
    _("slot,component", !0);
    var C = _("key,ref,slot,slot-scope,is");
    function y(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
        }
    }
    var w = Object.prototype.hasOwnProperty;
    function x(t, e) {
        return w.call(t, e);
    }
    function E(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n));
        };
    }
    var k = /-(\w)/g, S = E(function(t) {
        return t.replace(k, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }), D = E(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }), B = /\B([A-Z])/g, T = E(function(t) {
        return t.replace(B, "-$1").toLowerCase();
    }), K = Function.prototype.bind ? function(t, e) {
        return t.bind(e);
    } : function(t, e) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
        }
        return n._length = t.length, n;
    };
    function O(t, e) {
        e = e || 0;
        for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
        return r;
    }
    function F(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
    }
    function $(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && F(e, t[n]);
        return e;
    }
    function L(t, e, n) {}
    var j = function(t, e, n) {
        return !1;
    }, N = function(t) {
        return t;
    };
    function I(t, e) {
        if (t === e) return !0;
        var n = h(t), r = h(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
            var o = Array.isArray(t), i = Array.isArray(e);
            if (o && i) return t.length === e.length && t.every(function(t, n) {
                return I(t, e[n]);
            });
            if (o || i) return !1;
            var a = Object.keys(t), s = Object.keys(e);
            return a.length === s.length && a.every(function(n) {
                return I(t[n], e[n]);
            });
        } catch (t) {
            return !1;
        }
    }
    function P(t, e) {
        for (var n = 0; n < t.length; n++) if (I(t[n], e)) return n;
        return -1;
    }
    function R(t) {
        var e = !1;
        return function() {
            e || (e = !0, t.apply(this, arguments));
        };
    }
    var V = [ "component", "directive", "filter" ], z = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], q = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: j,
        isReservedAttr: j,
        isUnknownElement: j,
        getTagNamespace: L,
        parsePlatformTagName: N,
        mustUseProp: j,
        _lifecycleHooks: z
    };
    function M(t, e, n, r) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        });
    }
    var U, H = /[^\w.$]/, G = "__proto__" in {}, W = "undefined" != typeof window, J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, X = J && WXEnvironment.platform.toLowerCase(), Y = W && window.navigator.userAgent.toLowerCase(), Q = Y && /msie|trident/.test(Y), Z = Y && Y.indexOf("msie 9.0") > 0, tt = Y && Y.indexOf("edge/") > 0, et = (Y && Y.indexOf("android"), 
    Y && /iphone|ipad|ipod|ios/.test(Y) || "ios" === X), nt = (Y && /chrome\/\d+/.test(Y), 
    {}.watch), rt = !1;
    if (W) try {
        var ot = {};
        Object.defineProperty(ot, "passive", {
            get: function() {
                rt = !0;
            }
        }), window.addEventListener("test-passive", null, ot);
    } catch (t) {}
    var it = function() {
        return void 0 === U && (U = !W && !J && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), 
        U;
    }, at = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function st(t) {
        return "function" == typeof t && /native code/.test(t.toString());
    }
    var ct, lt = "undefined" != typeof Symbol && st(Symbol) && "undefined" != typeof Reflect && st(Reflect.ownKeys);
    ct = "undefined" != typeof Set && st(Set) ? Set : function() {
        function t() {
            this.set = Object.create(null);
        }
        return t.prototype.has = function(t) {
            return !0 === this.set[t];
        }, t.prototype.add = function(t) {
            this.set[t] = !0;
        }, t.prototype.clear = function() {
            this.set = Object.create(null);
        }, t;
    }();
    var ut = L, dt = 0, pt = function() {
        this.id = dt++, this.subs = [];
    };
    pt.prototype.addSub = function(t) {
        this.subs.push(t);
    }, pt.prototype.removeSub = function(t) {
        y(this.subs, t);
    }, pt.prototype.depend = function() {
        pt.target && pt.target.addDep(this);
    }, pt.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
    }, pt.target = null;
    var ft = [];
    function ht(t) {
        pt.target && ft.push(pt.target), pt.target = t;
    }
    function At() {
        pt.target = ft.pop();
    }
    var mt = function(t, e, n, r, o, i, a, s) {
        this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
        this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
        this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
        this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
        this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
        this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }, vt = {
        child: {
            configurable: !0
        }
    };
    vt.child.get = function() {
        return this.componentInstance;
    }, Object.defineProperties(mt.prototype, vt);
    var gt = function(t) {
        void 0 === t && (t = "");
        var e = new mt();
        return e.text = t, e.isComment = !0, e;
    };
    function bt(t) {
        return new mt(void 0, void 0, void 0, String(t));
    }
    function _t(t) {
        var e = new mt(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
        return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
        e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
        e.isCloned = !0, e;
    }
    var Ct = Array.prototype, yt = Object.create(Ct);
    [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
        var e = Ct[t];
        M(yt, t, function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var o, i = e.apply(this, n), a = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                o = n;
                break;

              case "splice":
                o = n.slice(2);
            }
            return o && a.observeArray(o), a.dep.notify(), i;
        });
    });
    var wt = Object.getOwnPropertyNames(yt), xt = !0;
    function Et(t) {
        xt = t;
    }
    var kt = function(t) {
        this.value = t, this.dep = new pt(), this.vmCount = 0, M(t, "__ob__", this), Array.isArray(t) ? ((G ? function(t, e, n) {
            t.__proto__ = e;
        } : function(t, e, n) {
            for (var r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                M(t, i, e[i]);
            }
        })(t, yt, wt), this.observeArray(t)) : this.walk(t);
    };
    function St(t, e) {
        var n;
        if (h(t) && !(t instanceof mt)) return x(t, "__ob__") && t.__ob__ instanceof kt ? n = t.__ob__ : xt && !it() && (Array.isArray(t) || m(t)) && Object.isExtensible(t) && !t._isVue && (n = new kt(t)), 
        e && n && n.vmCount++, n;
    }
    function Dt(t, e, n, r, o) {
        var i = new pt(), a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get;
            s || 2 !== arguments.length || (n = t[e]);
            var c = a && a.set, l = !o && St(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = s ? s.call(t) : n;
                    return pt.target && (i.depend(), l && (l.dep.depend(), Array.isArray(e) && function t(e) {
                        for (var n = void 0, r = 0, o = e.length; r < o; r++) (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), 
                        Array.isArray(n) && t(n);
                    }(e))), e;
                },
                set: function(e) {
                    var r = s ? s.call(t) : n;
                    e === r || e != e && r != r || (c ? c.call(t, e) : n = e, l = !o && St(e), i.notify());
                }
            });
        }
    }
    function Bt(t, e, n) {
        if (Array.isArray(t) && v(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
        n;
        if (e in t && !(e in Object.prototype)) return t[e] = n, n;
        var r = t.__ob__;
        return t._isVue || r && r.vmCount ? n : r ? (Dt(r.value, e, n), r.dep.notify(), 
        n) : (t[e] = n, n);
    }
    function Tt(t, e) {
        if (Array.isArray(t) && v(e)) t.splice(e, 1); else {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || x(t, e) && (delete t[e], n && n.dep.notify());
        }
    }
    kt.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) Dt(t, e[n]);
    }, kt.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++) St(t[e]);
    };
    var Kt = q.optionMergeStrategies;
    function Ot(t, e) {
        if (!e) return t;
        for (var n, r, o, i = Object.keys(e), a = 0; a < i.length; a++) r = t[n = i[a]], 
        o = e[n], x(t, n) ? m(r) && m(o) && Ot(r, o) : Bt(t, n, o);
        return t;
    }
    function Ft(t, e, n) {
        return n ? function() {
            var r = "function" == typeof e ? e.call(n, n) : e, o = "function" == typeof t ? t.call(n, n) : t;
            return r ? Ot(r, o) : o;
        } : e ? t ? function() {
            return Ot("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
        } : e : t;
    }
    function $t(t, e) {
        return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
    }
    function Lt(t, e, n, r) {
        var o = Object.create(t || null);
        return e ? F(o, e) : o;
    }
    Kt.data = function(t, e, n) {
        return n ? Ft(t, e, n) : e && "function" != typeof e ? t : Ft(t, e);
    }, z.forEach(function(t) {
        Kt[t] = $t;
    }), V.forEach(function(t) {
        Kt[t + "s"] = Lt;
    }), Kt.watch = function(t, e, n, r) {
        if (t === nt && (t = void 0), e === nt && (e = void 0), !e) return Object.create(t || null);
        if (!t) return e;
        var o = {};
        for (var i in F(o, t), e) {
            var a = o[i], s = e[i];
            a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
        }
        return o;
    }, Kt.props = Kt.methods = Kt.inject = Kt.computed = function(t, e, n, r) {
        if (!t) return e;
        var o = Object.create(null);
        return F(o, t), e && F(o, e), o;
    }, Kt.provide = Ft;
    var jt = function(t, e) {
        return void 0 === e ? t : e;
    };
    function Nt(t, e, n) {
        "function" == typeof e && (e = e.options), function(t, e) {
            var n = t.props;
            if (n) {
                var r, o, i = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i[S(o)] = {
                    type: null
                }); else if (m(n)) for (var a in n) o = n[a], i[S(a)] = m(o) ? o : {
                    type: o
                };
                t.props = i;
            }
        }(e), function(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                    from: n[o]
                }; else if (m(n)) for (var i in n) {
                    var a = n[i];
                    r[i] = m(a) ? F({
                        from: i
                    }, a) : {
                        from: a
                    };
                }
            }
        }(e), function(t) {
            var n = e.directives;
            if (n) for (var r in n) {
                var o = n[r];
                "function" == typeof o && (n[r] = {
                    bind: o,
                    update: o
                });
            }
        }();
        var r = e.extends;
        if (r && (t = Nt(t, r, n)), e.mixins) for (var o = 0, i = e.mixins.length; o < i; o++) t = Nt(t, e.mixins[o], n);
        var a, s = {};
        for (a in t) c(a);
        for (a in e) x(t, a) || c(a);
        function c(r) {
            var o = Kt[r] || jt;
            s[r] = o(t[r], e[r], n, r);
        }
        return s;
    }
    function It(t, e, n, r) {
        if ("string" == typeof n) {
            var o = t[e];
            if (x(o, n)) return o[n];
            var i = S(n);
            if (x(o, i)) return o[i];
            var a = D(i);
            return x(o, a) ? o[a] : o[n] || o[i] || o[a];
        }
    }
    function Pt(t, e, n, r) {
        var o = e[t], i = !x(n, t), a = n[t], s = zt(Boolean, o.type);
        if (s > -1) if (i && !x(o, "default")) a = !1; else if ("" === a || a === T(t)) {
            var c = zt(String, o.type);
            (c < 0 || s < c) && (a = !0);
        }
        if (void 0 === a) {
            a = function(t, e, n) {
                if (x(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== Rt(e.type) ? r.call(t) : r;
                }
            }(r, o, t);
            var l = xt;
            Et(!0), St(a), Et(l);
        }
        return a;
    }
    function Rt(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
    }
    function Vt(t, e) {
        return Rt(t) === Rt(e);
    }
    function zt(t, e) {
        if (!Array.isArray(e)) return Vt(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++) if (Vt(e[n], t)) return n;
        return -1;
    }
    function qt(t, e, n) {
        if (e) for (var r = e; r = r.$parent; ) {
            var o = r.$options.errorCaptured;
            if (o) for (var i = 0; i < o.length; i++) try {
                if (!1 === o[i].call(r, t, e, n)) return;
            } catch (t) {
                Mt(t, r, "errorCaptured hook");
            }
        }
        Mt(t, e, n);
    }
    function Mt(t, e, n) {
        if (q.errorHandler) try {
            return q.errorHandler.call(null, t, e, n);
        } catch (t) {
            Ut(t);
        }
        Ut(t);
    }
    function Ut(t, e, n) {
        if (!W && !J || "undefined" == typeof console) throw t;
        console.error(t);
    }
    var Ht, Gt, Wt = [], Jt = !1;
    function Xt() {
        Jt = !1;
        var t = Wt.slice(0);
        Wt.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
    }
    var Yt = !1;
    if ("undefined" != typeof setImmediate && st(setImmediate)) Gt = function() {
        setImmediate(Xt);
    }; else if ("undefined" == typeof MessageChannel || !st(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Gt = function() {
        setTimeout(Xt, 0);
    }; else {
        var Qt = new MessageChannel(), Zt = Qt.port2;
        Qt.port1.onmessage = Xt, Gt = function() {
            Zt.postMessage(1);
        };
    }
    if ("undefined" != typeof Promise && st(Promise)) {
        var te = Promise.resolve();
        Ht = function() {
            te.then(Xt), et && setTimeout(L);
        };
    } else Ht = Gt;
    function ee(t, e) {
        var n;
        if (Wt.push(function() {
            if (t) try {
                t.call(e);
            } catch (t) {
                qt(t, e, "nextTick");
            } else n && n(e);
        }), Jt || (Jt = !0, Yt ? Gt() : Ht()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
            n = t;
        });
    }
    var ne = new ct();
    function re(t) {
        !function t(e, n) {
            var r, o, i = Array.isArray(e);
            if (!(!i && !h(e) || Object.isFrozen(e) || e instanceof mt)) {
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a);
                }
                if (i) for (r = e.length; r--; ) t(e[r], n); else for (r = (o = Object.keys(e)).length; r--; ) t(e[o[r]], n);
            }
        }(t, ne), ne.clear();
    }
    var oe, ie = E(function(t) {
        var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return {
            name: t = r ? t.slice(1) : t,
            once: n,
            capture: r,
            passive: e
        };
    });
    function ae(t) {
        function e() {
            var t = arguments, n = e.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), o = 0; o < r.length; o++) r[o].apply(null, t);
        }
        return e.fns = t, e;
    }
    function se(t, e, n, r, o) {
        var i, a, s, c;
        for (i in t) a = t[i], s = e[i], c = ie(i), u(a) || (u(s) ? (u(a.fns) && (a = t[i] = ae(a)), 
        n(c.name, a, c.once, c.capture, c.passive, c.params)) : a !== s && (s.fns = a, t[i] = s));
        for (i in e) u(t[i]) && r((c = ie(i)).name, e[i], c.capture);
    }
    function ce(t, e, n) {
        var r;
        t instanceof mt && (t = t.data.hook || (t.data.hook = {}));
        var o = t[e];
        function i() {
            n.apply(this, arguments), y(r.fns, i);
        }
        u(o) ? r = ae([ i ]) : d(o.fns) && p(o.merged) ? (r = o).fns.push(i) : r = ae([ o, i ]), 
        r.merged = !0, t[e] = r;
    }
    function le(t, e, n, r, o) {
        if (d(e)) {
            if (x(e, n)) return t[n] = e[n], o || delete e[n], !0;
            if (x(e, r)) return t[n] = e[r], o || delete e[r], !0;
        }
        return !1;
    }
    function ue(t) {
        return f(t) ? [ bt(t) ] : Array.isArray(t) ? function t(e, n) {
            var r, o, i, a, s = [];
            for (r = 0; r < e.length; r++) u(o = e[r]) || "boolean" == typeof o || (a = s[i = s.length - 1], 
            Array.isArray(o) ? o.length > 0 && (de((o = t(o, (n || "") + "_" + r))[0]) && de(a) && (s[i] = bt(a.text + o[0].text), 
            o.shift()), s.push.apply(s, o)) : f(o) ? de(a) ? s[i] = bt(a.text + o) : "" !== o && s.push(bt(o)) : de(o) && de(a) ? s[i] = bt(a.text + o.text) : (p(e._isVList) && d(o.tag) && u(o.key) && d(n) && (o.key = "__vlist" + n + "_" + r + "__"), 
            s.push(o)));
            return s;
        }(t) : void 0;
    }
    function de(t) {
        return d(t) && d(t.text) && !1 === t.isComment;
    }
    function pe(t, e) {
        return (t.__esModule || lt && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
        h(t) ? e.extend(t) : t;
    }
    function fe(t) {
        return t.isComment && t.asyncFactory;
    }
    function he(t) {
        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (d(n) && (d(n.componentOptions) || fe(n))) return n;
        }
    }
    function Ae(t, e, n) {
        n ? oe.$once(t, e) : oe.$on(t, e);
    }
    function me(t, e) {
        oe.$off(t, e);
    }
    function ve(t, e, n) {
        oe = t, se(e, n || {}, Ae, me), oe = void 0;
    }
    function ge(t, e) {
        var n = {};
        if (!t) return n;
        for (var r = 0, o = t.length; r < o; r++) {
            var i = t[r], a = i.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(i); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
            }
        }
        for (var l in n) n[l].every(be) && delete n[l];
        return n;
    }
    function be(t) {
        return t.isComment && !t.asyncFactory || " " === t.text;
    }
    function _e(t, e) {
        e = e || {};
        for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? _e(t[n], e) : e[t[n].key] = t[n].fn;
        return e;
    }
    var Ce = null;
    function ye(t) {
        for (;t && (t = t.$parent); ) if (t._inactive) return !0;
        return !1;
    }
    function we(t, e) {
        if (e) {
            if (t._directInactive = !1, ye(t)) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) we(t.$children[n]);
            xe(t, "activated");
        }
    }
    function xe(t, e) {
        ht();
        var n = t.$options[e];
        if (n) for (var r = 0, o = n.length; r < o; r++) try {
            n[r].call(t);
        } catch (n) {
            qt(n, t, e + " hook");
        }
        t._hasHookEvent && t.$emit("hook:" + e), At();
    }
    var Ee = [], ke = [], Se = {}, De = !1, Be = !1, Te = 0;
    function Ke() {
        var t, e;
        for (Be = !0, Ee.sort(function(t, e) {
            return t.id - e.id;
        }), Te = 0; Te < Ee.length; Te++) e = (t = Ee[Te]).id, Se[e] = null, t.run();
        var n = ke.slice(), r = Ee.slice();
        Te = Ee.length = ke.length = 0, Se = {}, De = Be = !1, function(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, we(t[e], !0);
        }(n), function(t) {
            for (var e = t.length; e--; ) {
                var n = t[e], r = n.vm;
                r._watcher === n && r._isMounted && xe(r, "updated");
            }
        }(r), at && q.devtools && at.emit("flush");
    }
    var Oe = 0, Fe = function(t, e, n, r, o) {
        this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
        this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
        this.cb = n, this.id = ++Oe, this.active = !0, this.dirty = this.lazy, this.deps = [], 
        this.newDeps = [], this.depIds = new ct(), this.newDepIds = new ct(), this.expression = "", 
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            if (!H.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]];
                    }
                    return t;
                };
            }
        }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
    };
    Fe.prototype.get = function() {
        var t;
        ht(this);
        var e = this.vm;
        try {
            t = this.getter.call(e, e);
        } catch (t) {
            if (!this.user) throw t;
            qt(t, e, 'getter for watcher "' + this.expression + '"');
        } finally {
            this.deep && re(t), At(), this.cleanupDeps();
        }
        return t;
    }, Fe.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, Fe.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
        this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, Fe.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
            var e = t.id;
            if (null == Se[e]) {
                if (Se[e] = !0, Be) {
                    for (var n = Ee.length - 1; n > Te && Ee[n].id > t.id; ) n--;
                    Ee.splice(n + 1, 0, t);
                } else Ee.push(t);
                De || (De = !0, ee(Ke));
            }
        }(this);
    }, Fe.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || h(t) || this.deep) {
                var e = this.value;
                if (this.value = t, this.user) try {
                    this.cb.call(this.vm, t, e);
                } catch (t) {
                    qt(t, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, t, e);
            }
        }
    }, Fe.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
    }, Fe.prototype.depend = function() {
        for (var t = this.deps.length; t--; ) this.deps[t].depend();
    }, Fe.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || y(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            this.active = !1;
        }
    };
    var $e = {
        enumerable: !0,
        configurable: !0,
        get: L,
        set: L
    };
    function Le(t, e, n) {
        $e.get = function() {
            return this[e][n];
        }, $e.set = function(t) {
            this[e][n] = t;
        }, Object.defineProperty(t, n, $e);
    }
    var je = {
        lazy: !0
    };
    function Ne(t, e, n) {
        var r = !it();
        "function" == typeof n ? ($e.get = r ? Ie(e) : n, $e.set = L) : ($e.get = n.get ? r && !1 !== n.cache ? Ie(e) : n.get : L, 
        $e.set = n.set ? n.set : L), Object.defineProperty(t, e, $e);
    }
    function Ie(t) {
        return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e) return e.dirty && e.evaluate(), pt.target && e.depend(), e.value;
        };
    }
    function Pe(t, e, n, r) {
        return m(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
    }
    function Re(t, e) {
        if (t) {
            for (var n = Object.create(null), r = lt ? Reflect.ownKeys(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }) : Object.keys(t), o = 0; o < r.length; o++) {
                for (var i = r[o], a = t[i].from, s = e; s; ) {
                    if (s._provided && x(s._provided, a)) {
                        n[i] = s._provided[a];
                        break;
                    }
                    s = s.$parent;
                }
                if (!s && "default" in t[i]) {
                    var c = t[i].default;
                    n[i] = "function" == typeof c ? c.call(e) : c;
                }
            }
            return n;
        }
    }
    function Ve(t, e) {
        var n, r, o, i, a;
        if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
        o = t.length; r < o; r++) n[r] = e(t[r], r); else if ("number" == typeof t) for (n = new Array(t), 
        r = 0; r < t; r++) n[r] = e(r + 1, r); else if (h(t)) for (i = Object.keys(t), n = new Array(i.length), 
        r = 0, o = i.length; r < o; r++) a = i[r], n[r] = e(t[a], a, r);
        return d(n) && (n._isVList = !0), n;
    }
    function ze(t, e, n, r) {
        var o, i = this.$scopedSlots[t];
        if (i) n = n || {}, r && (n = F(F({}, r), n)), o = i(n) || e; else {
            var a = this.$slots[t];
            a && (a._rendered = !0), o = a || e;
        }
        var s = n && n.slot;
        return s ? this.$createElement("template", {
            slot: s
        }, o) : o;
    }
    function qe(t) {
        return It(this.$options, "filters", t) || N;
    }
    function Me(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
    }
    function Ue(t, e, n, r, o) {
        var i = q.keyCodes[e] || n;
        return o && r && !q.keyCodes[e] ? Me(o, r) : i ? Me(i, t) : r ? T(r) !== e : void 0;
    }
    function He(t, e, n, r, o) {
        if (n && h(n)) {
            var i;
            Array.isArray(n) && (n = $(n));
            var a = function(a) {
                if ("class" === a || "style" === a || C(a)) i = t; else {
                    var s = t.attrs && t.attrs.type;
                    i = r || q.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                a in i || (i[a] = n[a], o && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                    n[a] = t;
                }));
            };
            for (var s in n) a(s);
        }
        return t;
    }
    function Ge(t, e) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[t];
        return r && !e ? r : (Je(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), 
        r);
    }
    function We(t, e, n) {
        return Je(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }
    function Je(t, e, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Xe(t[r], e + "_" + r, n); else Xe(t, e, n);
    }
    function Xe(t, e, n) {
        t.isStatic = !0, t.key = e, t.isOnce = n;
    }
    function Ye(t, e) {
        if (e && m(e)) {
            var n = t.on = t.on ? F({}, t.on) : {};
            for (var r in e) {
                var o = n[r], i = e[r];
                n[r] = o ? [].concat(o, i) : i;
            }
        }
        return t;
    }
    function Qe(t) {
        t._o = We, t._n = b, t._s = g, t._l = Ve, t._t = ze, t._q = I, t._i = P, t._m = Ge, 
        t._f = qe, t._k = Ue, t._b = He, t._v = bt, t._e = gt, t._u = _e, t._g = Ye;
    }
    function Ze(t, e, n, r, o) {
        var i, a = o.options;
        x(r, "_uid") ? (i = Object.create(r))._original = r : (i = r, r = r._original);
        var s = p(a._compiled), c = !s;
        this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || l, 
        this.injections = Re(a.inject, r), this.slots = function() {
            return ge(n, r);
        }, s && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || l), 
        a._scopeId ? this._c = function(t, e, n, o) {
            var s = cn(i, t, e, n, o, c);
            return s && !Array.isArray(s) && (s.fnScopeId = a._scopeId, s.fnContext = r), s;
        } : this._c = function(t, e, n, r) {
            return cn(i, t, e, n, r, c);
        };
    }
    function tn(t, e, n, r) {
        var o = _t(t);
        return o.fnContext = n, o.fnOptions = r, e.slot && ((o.data || (o.data = {})).slot = e.slot), 
        o;
    }
    function en(t, e) {
        for (var n in e) t[S(n)] = e[n];
    }
    Qe(Ze.prototype);
    var nn = {
        init: function(t, e, n, r) {
            if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var o = t;
                nn.prepatch(o, o);
            } else (t.componentInstance = function(t, e, n, r) {
                var o = {
                    _isComponent: !0,
                    parent: Ce,
                    _parentVnode: t,
                    _parentElm: n || null,
                    _refElm: r || null
                }, i = t.data.inlineTemplate;
                return d(i) && (o.render = i.render, o.staticRenderFns = i.staticRenderFns), new t.componentOptions.Ctor(o);
            }(t, 0, n, r)).$mount(e ? t.elm : void 0, e);
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            !function(t, e, n, r, o) {
                var i = !!(o || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== l);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = o, t.$attrs = r.data.attrs || l, t.$listeners = n || l, 
                e && t.$options.props) {
                    Et(!1);
                    for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var u = s[c], d = t.$options.props;
                        a[u] = Pt(u, d, e, t);
                    }
                    Et(!0), t.$options.propsData = e;
                }
                n = n || l;
                var p = t.$options._parentListeners;
                t.$options._parentListeners = n, ve(t, n, p), i && (t.$slots = ge(o, r.context), 
                t.$forceUpdate());
            }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
        },
        insert: function(t) {
            var e, n = t.context, r = t.componentInstance;
            r._isMounted || (r._isMounted = !0, xe(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, 
            ke.push(e)) : we(r, !0));
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                if (!(n && (e._directInactive = !0, ye(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                    xe(e, "deactivated");
                }
            }(e, !0) : e.$destroy());
        }
    }, rn = Object.keys(nn);
    function on(t, e, n, r, o) {
        if (!u(t)) {
            var i = n.$options._base;
            if (h(t) && (t = i.extend(t)), "function" == typeof t) {
                var a;
                if (u(t.cid) && void 0 === (t = function(t, e, n) {
                    if (p(t.error) && d(t.errorComp)) return t.errorComp;
                    if (d(t.resolved)) return t.resolved;
                    if (p(t.loading) && d(t.loadingComp)) return t.loadingComp;
                    if (!d(t.contexts)) {
                        var r = t.contexts = [ n ], o = !0, i = function() {
                            for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
                        }, a = R(function(n) {
                            t.resolved = pe(n, e), o || i();
                        }), s = R(function(e) {
                            d(t.errorComp) && (t.error = !0, i());
                        }), c = t(a, s);
                        return h(c) && ("function" == typeof c.then ? u(t.resolved) && c.then(a, s) : d(c.component) && "function" == typeof c.component.then && (c.component.then(a, s), 
                        d(c.error) && (t.errorComp = pe(c.error, e)), d(c.loading) && (t.loadingComp = pe(c.loading, e), 
                        0 === c.delay ? t.loading = !0 : setTimeout(function() {
                            u(t.resolved) && u(t.error) && (t.loading = !0, i());
                        }, c.delay || 200)), d(c.timeout) && setTimeout(function() {
                            u(t.resolved) && s(null);
                        }, c.timeout))), o = !1, t.loading ? t.loadingComp : t.resolved;
                    }
                    t.contexts.push(n);
                }(a = t, i, n))) return function(t, e, n, r, o) {
                    var i = gt();
                    return i.asyncFactory = t, i.asyncMeta = {
                        data: e,
                        context: n,
                        children: r,
                        tag: o
                    }, i;
                }(a, e, n, r, o);
                e = e || {}, un(t), d(e.model) && function(t, e) {
                    var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                    (e.props || (e.props = {}))[n] = e.model.value;
                    var o = e.on || (e.on = {});
                    d(o[r]) ? o[r] = [ e.model.callback ].concat(o[r]) : o[r] = e.model.callback;
                }(t.options, e);
                var s = function(t, e, n) {
                    var r = e.options.props;
                    if (!u(r)) {
                        var o = {}, i = t.attrs, a = t.props;
                        if (d(i) || d(a)) for (var s in r) {
                            var c = T(s);
                            le(o, a, s, c, !0) || le(o, i, s, c, !1);
                        }
                        return o;
                    }
                }(e, t);
                if (p(t.options.functional)) return function(t, e, n, r, o) {
                    var i = t.options, a = {}, s = i.props;
                    if (d(s)) for (var c in s) a[c] = Pt(c, s, e || l); else d(n.attrs) && en(a, n.attrs), 
                    d(n.props) && en(a, n.props);
                    var u = new Ze(n, a, o, r, t), p = i.render.call(null, u._c, u);
                    if (p instanceof mt) return tn(p, n, u.parent, i);
                    if (Array.isArray(p)) {
                        for (var f = ue(p) || [], h = new Array(f.length), A = 0; A < f.length; A++) h[A] = tn(f[A], n, u.parent, i);
                        return h;
                    }
                }(t, s, e, n, r);
                var c = e.on;
                if (e.on = e.nativeOn, p(t.options.abstract)) {
                    var f = e.slot;
                    e = {}, f && (e.slot = f);
                }
                !function(t) {
                    for (var e = t.hook || (t.hook = {}), n = 0; n < rn.length; n++) {
                        var r = rn[n];
                        e[r] = nn[r];
                    }
                }(e);
                var A = t.options.name || o;
                return new mt("vue-component-" + t.cid + (A ? "-" + A : ""), e, void 0, void 0, void 0, n, {
                    Ctor: t,
                    propsData: s,
                    listeners: c,
                    tag: o,
                    children: r
                }, a);
            }
        }
    }
    var an = 1, sn = 2;
    function cn(t, e, n, r, o, i) {
        return (Array.isArray(n) || f(n)) && (o = r, r = n, n = void 0), p(i) && (o = sn), 
        function(t, e, n, r, o) {
            if (d(n) && d(n.__ob__)) return gt();
            if (d(n) && d(n.is) && (e = n.is), !e) return gt();
            var i, a, s;
            (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                default: r[0]
            }, r.length = 0), o === sn ? r = ue(r) : o === an && (r = function(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }(r)), "string" == typeof e) ? (a = t.$vnode && t.$vnode.ns || q.getTagNamespace(e), 
            i = q.isReservedTag(e) ? new mt(q.parsePlatformTagName(e), n, r, void 0, void 0, t) : d(s = It(t.$options, "components", e)) ? on(s, n, t, r, e) : new mt(e, n, r, void 0, void 0, t)) : i = on(e, n, t, r);
            return Array.isArray(i) ? i : d(i) ? (d(a) && function t(e, n, r) {
                if (e.ns = n, "foreignObject" === e.tag && (n = void 0, r = !0), d(e.children)) for (var o = 0, i = e.children.length; o < i; o++) {
                    var a = e.children[o];
                    d(a.tag) && (u(a.ns) || p(r) && "svg" !== a.tag) && t(a, n, r);
                }
            }(i, a), d(n) && function(t) {
                h(t.style) && re(t.style), h(t.class) && re(t.class);
            }(n), i) : gt();
        }(t, e, n, r, o);
    }
    var ln = 0;
    function un(t) {
        var e = t.options;
        if (t.super) {
            var n = un(t.super);
            if (n !== t.superOptions) {
                t.superOptions = n;
                var r = function(t) {
                    var e, n = t.options, r = t.extendOptions, o = t.sealedOptions;
                    for (var i in n) n[i] !== o[i] && (e || (e = {}), e[i] = dn(n[i], r[i], o[i]));
                    return e;
                }(t);
                r && F(t.extendOptions, r), (e = t.options = Nt(n, t.extendOptions)).name && (e.components[e.name] = t);
            }
        }
        return e;
    }
    function dn(t, e, n) {
        if (Array.isArray(t)) {
            var r = [];
            n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
            for (var o = 0; o < t.length; o++) (e.indexOf(t[o]) >= 0 || n.indexOf(t[o]) < 0) && r.push(t[o]);
            return r;
        }
        return t;
    }
    function pn(t) {
        this._init(t);
    }
    function fn(t) {
        return t && (t.Ctor.options.name || t.tag);
    }
    function hn(t, e) {
        return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : (n = t, 
        "[object RegExp]" === A.call(n) && t.test(e));
        var n;
    }
    function An(t, e) {
        var n = t.cache, r = t.keys, o = t._vnode;
        for (var i in n) {
            var a = n[i];
            if (a) {
                var s = fn(a.componentOptions);
                s && !e(s) && mn(n, i, r, o);
            }
        }
    }
    function mn(t, e, n, r) {
        var o = t[e];
        !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, y(n, e);
    }
    !function(t) {
        t.prototype._init = function(t) {
            var e = this;
            e._uid = ln++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }(e, t) : e.$options = Nt(un(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
            function(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }(e), function(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && ve(t, e);
            }(e), function(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = ge(e._renderChildren, r), t.$scopedSlots = l, t._c = function(e, n, r, o) {
                    return cn(t, e, n, r, o, !1);
                }, t.$createElement = function(e, n, r, o) {
                    return cn(t, e, n, r, o, !0);
                };
                var o = n && n.data;
                Dt(t, "$attrs", o && o.attrs || l, null, !0), Dt(t, "$listeners", e._parentListeners || l, null, !0);
            }(e), xe(e, "beforeCreate"), function(t) {
                var e = Re(t.$options.inject, t);
                e && (Et(!1), Object.keys(e).forEach(function(n) {
                    Dt(t, n, e[n]);
                }), Et(!0));
            }(e), function(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {}, r = t._props = {}, o = t.$options._propKeys = [];
                    t.$parent && Et(!1);
                    var i = function(i) {
                        o.push(i);
                        var a = Pt(i, e, n, t);
                        Dt(r, i, a), i in t || Le(t, "_props", i);
                    };
                    for (var a in e) i(a);
                    Et(!0);
                }(t, e.props), e.methods && function(t, e) {
                    for (var n in t.$options.props, e) t[n] = null == e[n] ? L : K(e[n], t);
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    m(e = t._data = "function" == typeof e ? function(t, e) {
                        ht();
                        try {
                            return t.call(e, e);
                        } catch (t) {
                            return qt(t, e, "data()"), {};
                        } finally {
                            At();
                        }
                    }(e, t) : e || {}) || (e = {});
                    for (var n, r = Object.keys(e), o = t.$options.props, i = (t.$options.methods, r.length); i--; ) {
                        var a = r[i];
                        o && x(o, a) || 36 !== (n = (a + "").charCodeAt(0)) && 95 !== n && Le(t, "_data", a);
                    }
                    St(e, !0);
                }(t) : St(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null), r = it();
                    for (var o in e) {
                        var i = e[o], a = "function" == typeof i ? i : i.get;
                        r || (n[o] = new Fe(t, a || L, L, je)), o in t || Ne(t, o, i);
                    }
                }(t, e.computed), e.watch && e.watch !== nt && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r)) for (var o = 0; o < r.length; o++) Pe(t, n, r[o]); else Pe(t, n, r);
                    }
                }(t, e.watch);
            }(e), function(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }(e), xe(e, "created"), e.$options.el && e.$mount(e.$options.el);
        };
    }(pn), function(t) {
        Object.defineProperty(t.prototype, "$data", {
            get: function() {
                return this._data;
            }
        }), Object.defineProperty(t.prototype, "$props", {
            get: function() {
                return this._props;
            }
        }), t.prototype.$set = Bt, t.prototype.$delete = Tt, t.prototype.$watch = function(t, e, n) {
            if (m(e)) return Pe(this, t, e, n);
            (n = n || {}).user = !0;
            var r = new Fe(this, t, e, n);
            return n.immediate && e.call(this, r.value), function() {
                r.teardown();
            };
        };
    }(pn), function(t) {
        var e = /^hook:/;
        t.prototype.$on = function(t, n) {
            if (Array.isArray(t)) for (var r = 0, o = t.length; r < o; r++) this.$on(t[r], n); else (this._events[t] || (this._events[t] = [])).push(n), 
            e.test(t) && (this._hasHookEvent = !0);
            return this;
        }, t.prototype.$once = function(t, e) {
            var n = this;
            function r() {
                n.$off(t, r), e.apply(n, arguments);
            }
            return r.fn = e, n.$on(t, r), n;
        }, t.prototype.$off = function(t, e) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(t)) {
                for (var r = 0, o = t.length; r < o; r++) this.$off(t[r], e);
                return n;
            }
            var i = n._events[t];
            if (!i) return n;
            if (!e) return n._events[t] = null, n;
            if (e) for (var a, s = i.length; s--; ) if ((a = i[s]) === e || a.fn === e) {
                i.splice(s, 1);
                break;
            }
            return n;
        }, t.prototype.$emit = function(t) {
            var e = this._events[t];
            if (e) {
                e = e.length > 1 ? O(e) : e;
                for (var n = O(arguments, 1), r = 0, o = e.length; r < o; r++) try {
                    e[r].apply(this, n);
                } catch (e) {
                    qt(e, this, 'event handler for "' + t + '"');
                }
            }
            return this;
        };
    }(pn), function(t) {
        t.prototype._update = function(t, e) {
            var n = this;
            n._isMounted && xe(n, "beforeUpdate");
            var r = n.$el, o = n._vnode, i = Ce;
            Ce = n, n._vnode = t, o ? n.$el = n.__patch__(o, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), 
            n.$options._parentElm = n.$options._refElm = null), Ce = i, r && (r.__vue__ = null), 
            n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, t.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update();
        }, t.prototype.$destroy = function() {
            var t = this;
            if (!t._isBeingDestroyed) {
                xe(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                var e = t.$parent;
                !e || e._isBeingDestroyed || t.$options.abstract || y(e.$children, t), t._watcher && t._watcher.teardown();
                for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                xe(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
            }
        };
    }(pn), function(t) {
        Qe(t.prototype), t.prototype.$nextTick = function(t) {
            return ee(t, this);
        }, t.prototype._render = function() {
            var t, e = this, n = e.$options, r = n.render, o = n._parentVnode;
            o && (e.$scopedSlots = o.data.scopedSlots || l), e.$vnode = o;
            try {
                t = r.call(e._renderProxy, e.$createElement);
            } catch (n) {
                qt(n, e, "render"), t = e._vnode;
            }
            return t instanceof mt || (t = gt()), t.parent = o, t;
        };
    }(pn);
    var vn = [ String, RegExp, Array ], gn = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: vn,
                exclude: vn,
                max: [ String, Number ]
            },
            created: function() {
                this.cache = Object.create(null), this.keys = [];
            },
            destroyed: function() {
                for (var t in this.cache) mn(this.cache, t, this.keys);
            },
            mounted: function() {
                var t = this;
                this.$watch("include", function(e) {
                    An(t, function(t) {
                        return hn(e, t);
                    });
                }), this.$watch("exclude", function(e) {
                    An(t, function(t) {
                        return !hn(e, t);
                    });
                });
            },
            render: function() {
                var t = this.$slots.default, e = he(t), n = e && e.componentOptions;
                if (n) {
                    var r = fn(n), o = this.include, i = this.exclude;
                    if (o && (!r || !hn(o, r)) || i && r && hn(i, r)) return e;
                    var a = this.cache, s = this.keys, c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    a[c] ? (e.componentInstance = a[c].componentInstance, y(s, c), s.push(c)) : (a[c] = e, 
                    s.push(c), this.max && s.length > parseInt(this.max) && mn(a, s[0], s, this._vnode)), 
                    e.data.keepAlive = !0;
                }
                return e || t && t[0];
            }
        }
    };
    !function(t) {
        var e = {
            get: function() {
                return q;
            }
        };
        Object.defineProperty(t, "config", e), t.util = {
            warn: ut,
            extend: F,
            mergeOptions: Nt,
            defineReactive: Dt
        }, t.set = Bt, t.delete = Tt, t.nextTick = ee, t.options = Object.create(null), 
        V.forEach(function(e) {
            t.options[e + "s"] = Object.create(null);
        }), t.options._base = t, F(t.options.components, gn), function(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = O(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                e.push(t), this;
            };
        }(t), function(t) {
            t.mixin = function(t) {
                return this.options = Nt(this.options, t), this;
            };
        }(t), function(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this, r = n.cid, o = t._Ctor || (t._Ctor = {});
                if (o[r]) return o[r];
                var i = t.name || n.options.name, a = function(t) {
                    this._init(t);
                };
                return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                a.options = Nt(n.options, t), a.super = n, a.options.props && function(t) {
                    var e = t.options.props;
                    for (var n in e) Le(t.prototype, "_props", n);
                }(a), a.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var n in e) Ne(t.prototype, n, e[n]);
                }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, V.forEach(function(t) {
                    a[t] = n[t];
                }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, 
                a.sealedOptions = F({}, a.options), o[r] = a, a;
            };
        }(t), function(t) {
            V.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && m(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                    "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                };
            });
        }(t);
    }(pn), Object.defineProperty(pn.prototype, "$isServer", {
        get: it
    }), Object.defineProperty(pn.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext;
        }
    }), Object.defineProperty(pn, "FunctionalRenderContext", {
        value: Ze
    }), pn.version = "2.5.17";
    var bn = _("style,class"), _n = _("input,textarea,option,select,progress"), Cn = _("contenteditable,draggable,spellcheck"), yn = _("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), wn = "http://www.w3.org/1999/xlink", xn = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    }, En = function(t) {
        return xn(t) ? t.slice(6, t.length) : "";
    }, kn = function(t) {
        return null == t || !1 === t;
    };
    function Sn(t, e) {
        return {
            staticClass: Dn(t.staticClass, e.staticClass),
            class: d(t.class) ? [ t.class, e.class ] : e.class
        };
    }
    function Dn(t, e) {
        return t ? e ? t + " " + e : t : e || "";
    }
    function Bn(t) {
        return Array.isArray(t) ? function(t) {
            for (var e, n = "", r = 0, o = t.length; r < o; r++) d(e = Bn(t[r])) && "" !== e && (n && (n += " "), 
            n += e);
            return n;
        }(t) : h(t) ? function(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e;
        }(t) : "string" == typeof t ? t : "";
    }
    var Tn = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, Kn = _("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), On = _("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Fn = function(t) {
        return Kn(t) || On(t);
    }, $n = Object.create(null), Ln = _("text,number,password,search,email,tel,url"), jn = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), 
            n);
        },
        createElementNS: function(t, e) {
            return document.createElementNS(Tn[t], e);
        },
        createTextNode: function(t) {
            return document.createTextNode(t);
        },
        createComment: function(t) {
            return document.createComment(t);
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n);
        },
        removeChild: function(t, e) {
            t.removeChild(e);
        },
        appendChild: function(t, e) {
            t.appendChild(e);
        },
        parentNode: function(t) {
            return t.parentNode;
        },
        nextSibling: function(t) {
            return t.nextSibling;
        },
        tagName: function(t) {
            return t.tagName;
        },
        setTextContent: function(t, e) {
            t.textContent = e;
        },
        setStyleScope: function(t, e) {
            t.setAttribute(e, "");
        }
    }), Nn = {
        create: function(t, e) {
            In(e);
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (In(t, !0), In(e));
        },
        destroy: function(t) {
            In(t, !0);
        }
    };
    function In(t, e) {
        var n = t.data.ref;
        if (d(n)) {
            var r = t.context, o = t.componentInstance || t.elm, i = r.$refs;
            e ? Array.isArray(i[n]) ? y(i[n], o) : i[n] === o && (i[n] = void 0) : t.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [ o ] : i[n] = o;
        }
    }
    var Pn = new mt("", {}, []), Rn = [ "create", "activate", "update", "remove", "destroy" ];
    function Vn(t, e) {
        return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && d(t.data) === d(e.data) && function(t, e) {
            if ("input" !== t.tag) return !0;
            var n, r = d(n = t.data) && d(n = n.attrs) && n.type, o = d(n = e.data) && d(n = n.attrs) && n.type;
            return r === o || Ln(r) && Ln(o);
        }(t, e) || p(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && u(e.asyncFactory.error));
    }
    function zn(t, e, n) {
        var r, o, i = {};
        for (r = e; r <= n; ++r) d(o = t[r].key) && (i[o] = r);
        return i;
    }
    var qn = {
        create: Mn,
        update: Mn,
        destroy: function(t) {
            Mn(t, Pn);
        }
    };
    function Mn(t, e) {
        (t.data.directives || e.data.directives) && function(t, e) {
            var n, r, o, i = t === Pn, a = e === Pn, s = Hn(t.data.directives, t.context), c = Hn(e.data.directives, e.context), l = [], u = [];
            for (n in c) r = s[n], o = c[n], r ? (o.oldValue = r.value, Wn(o, "update", e, t), 
            o.def && o.def.componentUpdated && u.push(o)) : (Wn(o, "bind", e, t), o.def && o.def.inserted && l.push(o));
            if (l.length) {
                var d = function() {
                    for (var n = 0; n < l.length; n++) Wn(l[n], "inserted", e, t);
                };
                i ? ce(e, "insert", d) : d();
            }
            if (u.length && ce(e, "postpatch", function() {
                for (var n = 0; n < u.length; n++) Wn(u[n], "componentUpdated", e, t);
            }), !i) for (n in s) c[n] || Wn(s[n], "unbind", t, t, a);
        }(t, e);
    }
    var Un = Object.create(null);
    function Hn(t, e) {
        var n, r, o = Object.create(null);
        if (!t) return o;
        for (n = 0; n < t.length; n++) (r = t[n]).modifiers || (r.modifiers = Un), o[Gn(r)] = r, 
        r.def = It(e.$options, "directives", r.name);
        return o;
    }
    function Gn(t) {
        return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
    }
    function Wn(t, e, n, r, o) {
        var i = t.def && t.def[e];
        if (i) try {
            i(n.elm, t, n, r, o);
        } catch (r) {
            qt(r, n.context, "directive " + t.name + " " + e + " hook");
        }
    }
    var Jn = [ Nn, qn ];
    function Xn(t, e) {
        var n = e.componentOptions;
        if (!(d(n) && !1 === n.Ctor.options.inheritAttrs || u(t.data.attrs) && u(e.data.attrs))) {
            var r, o, i = e.elm, a = t.data.attrs || {}, s = e.data.attrs || {};
            for (r in d(s.__ob__) && (s = e.data.attrs = F({}, s)), s) o = s[r], a[r] !== o && Yn(i, r, o);
            for (r in (Q || tt) && s.value !== a.value && Yn(i, "value", s.value), a) u(s[r]) && (xn(r) ? i.removeAttributeNS(wn, En(r)) : Cn(r) || i.removeAttribute(r));
        }
    }
    function Yn(t, e, n) {
        t.tagName.indexOf("-") > -1 ? Qn(t, e, n) : yn(e) ? kn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, 
        t.setAttribute(e, n)) : Cn(e) ? t.setAttribute(e, kn(n) || "false" === n ? "false" : "true") : xn(e) ? kn(n) ? t.removeAttributeNS(wn, En(e)) : t.setAttributeNS(wn, e, n) : Qn(t, e, n);
    }
    function Qn(t, e, n) {
        if (kn(n)) t.removeAttribute(e); else {
            if (Q && !Z && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                var r = function(e) {
                    e.stopImmediatePropagation(), t.removeEventListener("input", r);
                };
                t.addEventListener("input", r), t.__ieph = !0;
            }
            t.setAttribute(e, n);
        }
    }
    var Zn = {
        create: Xn,
        update: Xn
    };
    function tr(t, e) {
        var n = e.elm, r = e.data, o = t.data;
        if (!(u(r.staticClass) && u(r.class) && (u(o) || u(o.staticClass) && u(o.class)))) {
            var i = function(t) {
                for (var e = t.data, n = t, r = t; d(r.componentInstance); ) (r = r.componentInstance._vnode) && r.data && (e = Sn(r.data, e));
                for (;d(n = n.parent); ) n && n.data && (e = Sn(e, n.data));
                return o = e.staticClass, i = e.class, d(o) || d(i) ? Dn(o, Bn(i)) : "";
                var o, i;
            }(e), a = n._transitionClasses;
            d(a) && (i = Dn(i, Bn(a))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i);
        }
    }
    var er, nr = {
        create: tr,
        update: tr
    }, rr = "__r", or = "__c";
    function ir(t, e, n, r, o) {
        var i;
        e = (i = e)._withTask || (i._withTask = function() {
            Yt = !0;
            var t = i.apply(null, arguments);
            return Yt = !1, t;
        }), n && (e = function(t, e, n) {
            var r = er;
            return function o() {
                null !== t.apply(null, arguments) && ar(e, o, n, r);
            };
        }(e, t, r)), er.addEventListener(t, e, rt ? {
            capture: r,
            passive: o
        } : r);
    }
    function ar(t, e, n, r) {
        (r || er).removeEventListener(t, e._withTask || e, n);
    }
    function sr(t, e) {
        if (!u(t.data.on) || !u(e.data.on)) {
            var n = e.data.on || {}, r = t.data.on || {};
            er = e.elm, function(t) {
                if (d(t[rr])) {
                    var e = Q ? "change" : "input";
                    t[e] = [].concat(t[rr], t[e] || []), delete t[rr];
                }
                d(t[or]) && (t.change = [].concat(t[or], t.change || []), delete t[or]);
            }(n), se(n, r, ir, ar, e.context), er = void 0;
        }
    }
    var cr = {
        create: sr,
        update: sr
    };
    function lr(t, e) {
        if (!u(t.data.domProps) || !u(e.data.domProps)) {
            var n, r, o = e.elm, i = t.data.domProps || {}, a = e.data.domProps || {};
            for (n in d(a.__ob__) && (a = e.data.domProps = F({}, a)), i) u(a[n]) && (o[n] = "");
            for (n in a) {
                if (r = a[n], "textContent" === n || "innerHTML" === n) {
                    if (e.children && (e.children.length = 0), r === i[n]) continue;
                    1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
                }
                if ("value" === n) {
                    o._value = r;
                    var s = u(r) ? "" : String(r);
                    ur(o, s) && (o.value = s);
                } else o[n] = r;
            }
        }
    }
    function ur(t, e) {
        return !t.composing && ("OPTION" === t.tagName || function(t, e) {
            var n = !0;
            try {
                n = document.activeElement !== t;
            } catch (t) {}
            return n && t.value !== e;
        }(t, e) || function(t, e) {
            var n = t.value, r = t._vModifiers;
            if (d(r)) {
                if (r.lazy) return !1;
                if (r.number) return b(n) !== b(e);
                if (r.trim) return n.trim() !== e.trim();
            }
            return n !== e;
        }(t, e));
    }
    var dr = {
        create: lr,
        update: lr
    }, pr = E(function(t) {
        var e = {}, n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            if (t) {
                var r = t.split(n);
                r.length > 1 && (e[r[0].trim()] = r[1].trim());
            }
        }), e;
    });
    function fr(t) {
        var e = hr(t.style);
        return t.staticStyle ? F(t.staticStyle, e) : e;
    }
    function hr(t) {
        return Array.isArray(t) ? $(t) : "string" == typeof t ? pr(t) : t;
    }
    var Ar, mr = /^--/, vr = /\s*!important$/, gr = function(t, e, n) {
        if (mr.test(e)) t.style.setProperty(e, n); else if (vr.test(n)) t.style.setProperty(e, n.replace(vr, ""), "important"); else {
            var r = _r(e);
            if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o]; else t.style[r] = n;
        }
    }, br = [ "Webkit", "Moz", "ms" ], _r = E(function(t) {
        if (Ar = Ar || document.createElement("div").style, "filter" !== (t = S(t)) && t in Ar) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < br.length; n++) {
            var r = br[n] + e;
            if (r in Ar) return r;
        }
    });
    function Cr(t, e) {
        var n = e.data, r = t.data;
        if (!(u(n.staticStyle) && u(n.style) && u(r.staticStyle) && u(r.style))) {
            var o, i, a = e.elm, s = r.staticStyle, c = r.normalizedStyle || r.style || {}, l = s || c, p = hr(e.data.style) || {};
            e.data.normalizedStyle = d(p.__ob__) ? F({}, p) : p;
            var f = function(t, e) {
                for (var n, r = {}, o = t; o.componentInstance; ) (o = o.componentInstance._vnode) && o.data && (n = fr(o.data)) && F(r, n);
                (n = fr(t.data)) && F(r, n);
                for (var i = t; i = i.parent; ) i.data && (n = fr(i.data)) && F(r, n);
                return r;
            }(e);
            for (i in l) u(f[i]) && gr(a, i, "");
            for (i in f) (o = f[i]) !== l[i] && gr(a, i, null == o ? "" : o);
        }
    }
    var yr = {
        create: Cr,
        update: Cr
    };
    function wr(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.add(e);
        }) : t.classList.add(e); else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
        }
    }
    function xr(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.remove(e);
        }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
            for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
            (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
        }
    }
    function Er(t) {
        if (t) {
            if ("object" == typeof t) {
                var e = {};
                return !1 !== t.css && F(e, kr(t.name || "v")), F(e, t), e;
            }
            return "string" == typeof t ? kr(t) : void 0;
        }
    }
    var kr = E(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        };
    }), Sr = W && !Z, Dr = "transition", Br = "animation", Tr = "transition", Kr = "transitionend", Or = "animation", Fr = "animationend";
    Sr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Tr = "WebkitTransition", 
    Kr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Or = "WebkitAnimation", 
    Fr = "webkitAnimationEnd"));
    var $r = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t();
    };
    function Lr(t) {
        $r(function() {
            $r(t);
        });
    }
    function jr(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), wr(t, e));
    }
    function Nr(t, e) {
        t._transitionClasses && y(t._transitionClasses, e), xr(t, e);
    }
    function Ir(t, e, n) {
        var r = Rr(t, e), o = r.type, i = r.timeout, a = r.propCount;
        if (!o) return n();
        var s = o === Dr ? Kr : Fr, c = 0, l = function() {
            t.removeEventListener(s, u), n();
        }, u = function(e) {
            e.target === t && ++c >= a && l();
        };
        setTimeout(function() {
            c < a && l();
        }, i + 1), t.addEventListener(s, u);
    }
    var Pr = /\b(transform|all)(,|$)/;
    function Rr(t, e) {
        var n, r = window.getComputedStyle(t), o = r[Tr + "Delay"].split(", "), i = r[Tr + "Duration"].split(", "), a = Vr(o, i), s = r[Or + "Delay"].split(", "), c = r[Or + "Duration"].split(", "), l = Vr(s, c), u = 0, d = 0;
        return e === Dr ? a > 0 && (n = Dr, u = a, d = i.length) : e === Br ? l > 0 && (n = Br, 
        u = l, d = c.length) : d = (n = (u = Math.max(a, l)) > 0 ? a > l ? Dr : Br : null) ? n === Dr ? i.length : c.length : 0, 
        {
            type: n,
            timeout: u,
            propCount: d,
            hasTransform: n === Dr && Pr.test(r[Tr + "Property"])
        };
    }
    function Vr(t, e) {
        for (;t.length < e.length; ) t = t.concat(t);
        return Math.max.apply(null, e.map(function(e, n) {
            return zr(e) + zr(t[n]);
        }));
    }
    function zr(t) {
        return 1e3 * Number(t.slice(0, -1));
    }
    function qr(t, e) {
        var n = t.elm;
        d(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = Er(t.data.transition);
        if (!u(r) && !d(n._enterCb) && 1 === n.nodeType) {
            for (var o = r.css, i = r.type, a = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, l = r.appearClass, p = r.appearToClass, f = r.appearActiveClass, A = r.beforeEnter, m = r.enter, v = r.afterEnter, g = r.enterCancelled, _ = r.beforeAppear, C = r.appear, y = r.afterAppear, w = r.appearCancelled, x = r.duration, E = Ce, k = Ce.$vnode; k && k.parent; ) E = (k = k.parent).context;
            var S = !E._isMounted || !t.isRootInsert;
            if (!S || C || "" === C) {
                var D = S && l ? l : a, B = S && f ? f : c, T = S && p ? p : s, K = S && _ || A, O = S && "function" == typeof C ? C : m, F = S && y || v, $ = S && w || g, L = b(h(x) ? x.enter : x), j = !1 !== o && !Z, N = Hr(O), I = n._enterCb = R(function() {
                    j && (Nr(n, T), Nr(n, B)), I.cancelled ? (j && Nr(n, D), $ && $(n)) : F && F(n), 
                    n._enterCb = null;
                });
                t.data.show || ce(t, "insert", function() {
                    var e = n.parentNode, r = e && e._pending && e._pending[t.key];
                    r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), O && O(n, I);
                }), K && K(n), j && (jr(n, D), jr(n, B), Lr(function() {
                    Nr(n, D), I.cancelled || (jr(n, T), N || (Ur(L) ? setTimeout(I, L) : Ir(n, i, I)));
                })), t.data.show && (e && e(), O && O(n, I)), j || N || I();
            }
        }
    }
    function Mr(t, e) {
        var n = t.elm;
        d(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = Er(t.data.transition);
        if (u(r) || 1 !== n.nodeType) return e();
        if (!d(n._leaveCb)) {
            var o = r.css, i = r.type, a = r.leaveClass, s = r.leaveToClass, c = r.leaveActiveClass, l = r.beforeLeave, p = r.leave, f = r.afterLeave, A = r.leaveCancelled, m = r.delayLeave, v = r.duration, g = !1 !== o && !Z, _ = Hr(p), C = b(h(v) ? v.leave : v), y = n._leaveCb = R(function() {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), 
                g && (Nr(n, s), Nr(n, c)), y.cancelled ? (g && Nr(n, a), A && A(n)) : (e(), f && f(n)), 
                n._leaveCb = null;
            });
            m ? m(w) : w();
        }
        function w() {
            y.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), 
            l && l(n), g && (jr(n, a), jr(n, c), Lr(function() {
                Nr(n, a), y.cancelled || (jr(n, s), _ || (Ur(C) ? setTimeout(y, C) : Ir(n, i, y)));
            })), p && p(n, y), g || _ || y());
        }
    }
    function Ur(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function Hr(t) {
        if (u(t)) return !1;
        var e = t.fns;
        return d(e) ? Hr(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
    }
    function Gr(t, e) {
        !0 !== e.data.show && qr(e);
    }
    var Wr = function(t) {
        var e, n, r = {}, o = t.modules, i = t.nodeOps;
        for (e = 0; e < Rn.length; ++e) for (r[Rn[e]] = [], n = 0; n < o.length; ++n) d(o[n][Rn[e]]) && r[Rn[e]].push(o[n][Rn[e]]);
        function a(t) {
            var e = i.parentNode(t);
            d(e) && i.removeChild(e, t);
        }
        function s(t, e, n, o, a, s, u) {
            if (d(t.elm) && d(s) && (t = s[u] = _t(t)), t.isRootInsert = !a, !function(t, e, n, o) {
                var i = t.data;
                if (d(i)) {
                    var a = d(t.componentInstance) && i.keepAlive;
                    if (d(i = i.hook) && d(i = i.init) && i(t, !1, n, o), d(t.componentInstance)) return c(t, e), 
                    p(a) && function(t, e, n, o) {
                        for (var i, a = t; a.componentInstance; ) if (d(i = (a = a.componentInstance._vnode).data) && d(i = i.transition)) {
                            for (i = 0; i < r.activate.length; ++i) r.activate[i](Pn, a);
                            e.push(a);
                            break;
                        }
                        l(n, t.elm, o);
                    }(t, e, n, o), !0;
                }
            }(t, e, n, o)) {
                var f = t.data, A = t.children, g = t.tag;
                d(g) ? (t.elm = t.ns ? i.createElementNS(t.ns, g) : i.createElement(g, t), v(t), 
                h(t, A, e), d(f) && m(t, e), l(n, t.elm, o)) : p(t.isComment) ? (t.elm = i.createComment(t.text), 
                l(n, t.elm, o)) : (t.elm = i.createTextNode(t.text), l(n, t.elm, o));
            }
        }
        function c(t, e) {
            d(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), 
            t.elm = t.componentInstance.$el, A(t) ? (m(t, e), v(t)) : (In(t), e.push(t));
        }
        function l(t, e, n) {
            d(t) && (d(n) ? n.parentNode === t && i.insertBefore(t, e, n) : i.appendChild(t, e));
        }
        function h(t, e, n) {
            if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) s(e[r], n, t.elm, null, !0, e, r); else f(t.text) && i.appendChild(t.elm, i.createTextNode(String(t.text)));
        }
        function A(t) {
            for (;t.componentInstance; ) t = t.componentInstance._vnode;
            return d(t.tag);
        }
        function m(t, n) {
            for (var o = 0; o < r.create.length; ++o) r.create[o](Pn, t);
            d(e = t.data.hook) && (d(e.create) && e.create(Pn, t), d(e.insert) && n.push(t));
        }
        function v(t) {
            var e;
            if (d(e = t.fnScopeId)) i.setStyleScope(t.elm, e); else for (var n = t; n; ) d(e = n.context) && d(e = e.$options._scopeId) && i.setStyleScope(t.elm, e), 
            n = n.parent;
            d(e = Ce) && e !== t.context && e !== t.fnContext && d(e = e.$options._scopeId) && i.setStyleScope(t.elm, e);
        }
        function g(t, e, n, r, o, i) {
            for (;r <= o; ++r) s(n[r], i, t, e, !1, n, r);
        }
        function b(t) {
            var e, n, o = t.data;
            if (d(o)) for (d(e = o.hook) && d(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
            if (d(e = t.children)) for (n = 0; n < t.children.length; ++n) b(t.children[n]);
        }
        function C(t, e, n, r) {
            for (;n <= r; ++n) {
                var o = e[n];
                d(o) && (d(o.tag) ? (y(o), b(o)) : a(o.elm));
            }
        }
        function y(t, e) {
            if (d(e) || d(t.data)) {
                var n, o = r.remove.length + 1;
                for (d(e) ? e.listeners += o : e = function(t, e) {
                    function n() {
                        0 == --n.listeners && a(t);
                    }
                    return n.listeners = e, n;
                }(t.elm, o), d(n = t.componentInstance) && d(n = n._vnode) && d(n.data) && y(n, e), 
                n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                d(n = t.data.hook) && d(n = n.remove) ? n(t, e) : e();
            } else a(t.elm);
        }
        function w(t, e, n, r) {
            for (var o = n; o < r; o++) {
                var i = e[o];
                if (d(i) && Vn(t, i)) return o;
            }
        }
        function x(t, e, n) {
            if (p(n) && d(t.parent)) t.parent.data.pendingInsert = e; else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
        }
        var E = _("attrs,class,staticClass,staticStyle,key");
        function k(t, e, n, r) {
            var o, i = e.tag, a = e.data, s = e.children;
            if (r = r || a && a.pre, e.elm = t, p(e.isComment) && d(e.asyncFactory)) return e.isAsyncPlaceholder = !0, 
            !0;
            if (d(a) && (d(o = a.hook) && d(o = o.init) && o(e, !0), d(o = e.componentInstance))) return c(e, n), 
            !0;
            if (d(i)) {
                if (d(s)) if (t.hasChildNodes()) if (d(o = a) && d(o = o.domProps) && d(o = o.innerHTML)) {
                    if (o !== t.innerHTML) return !1;
                } else {
                    for (var l = !0, u = t.firstChild, f = 0; f < s.length; f++) {
                        if (!u || !k(u, s[f], n, r)) {
                            l = !1;
                            break;
                        }
                        u = u.nextSibling;
                    }
                    if (!l || u) return !1;
                } else h(e, s, n);
                if (d(a)) {
                    var A = !1;
                    for (var v in a) if (!E(v)) {
                        A = !0, m(e, n);
                        break;
                    }
                    !A && a.class && re(a.class);
                }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
        }
        return function(t, e, n, o, a, c) {
            if (!u(e)) {
                var l, f = !1, h = [];
                if (u(t)) f = !0, s(e, h, a, c); else {
                    var m = d(t.nodeType);
                    if (!m && Vn(t, e)) !function t(e, n, o, a) {
                        if (e !== n) {
                            var c = n.elm = e.elm;
                            if (p(e.isAsyncPlaceholder)) d(n.asyncFactory.resolved) ? k(e.elm, n, o) : n.isAsyncPlaceholder = !0; else if (p(n.isStatic) && p(e.isStatic) && n.key === e.key && (p(n.isCloned) || p(n.isOnce))) n.componentInstance = e.componentInstance; else {
                                var l, f = n.data;
                                d(f) && d(l = f.hook) && d(l = l.prepatch) && l(e, n);
                                var h = e.children, m = n.children;
                                if (d(f) && A(n)) {
                                    for (l = 0; l < r.update.length; ++l) r.update[l](e, n);
                                    d(l = f.hook) && d(l = l.update) && l(e, n);
                                }
                                u(n.text) ? d(h) && d(m) ? h !== m && function(e, n, r, o, a) {
                                    for (var c, l, p, f = 0, h = 0, A = n.length - 1, m = n[0], v = n[A], b = r.length - 1, _ = r[0], y = r[b], x = !a; f <= A && h <= b; ) u(m) ? m = n[++f] : u(v) ? v = n[--A] : Vn(m, _) ? (t(m, _, o), 
                                    m = n[++f], _ = r[++h]) : Vn(v, y) ? (t(v, y, o), v = n[--A], y = r[--b]) : Vn(m, y) ? (t(m, y, o), 
                                    x && i.insertBefore(e, m.elm, i.nextSibling(v.elm)), m = n[++f], y = r[--b]) : Vn(v, _) ? (t(v, _, o), 
                                    x && i.insertBefore(e, v.elm, m.elm), v = n[--A], _ = r[++h]) : (u(c) && (c = zn(n, f, A)), 
                                    u(l = d(_.key) ? c[_.key] : w(_, n, f, A)) ? s(_, o, e, m.elm, !1, r, h) : Vn(p = n[l], _) ? (t(p, _, o), 
                                    n[l] = void 0, x && i.insertBefore(e, p.elm, m.elm)) : s(_, o, e, m.elm, !1, r, h), 
                                    _ = r[++h]);
                                    f > A ? g(e, u(r[b + 1]) ? null : r[b + 1].elm, r, h, b, o) : h > b && C(0, n, f, A);
                                }(c, h, m, o, a) : d(m) ? (d(e.text) && i.setTextContent(c, ""), g(c, null, m, 0, m.length - 1, o)) : d(h) ? C(0, h, 0, h.length - 1) : d(e.text) && i.setTextContent(c, "") : e.text !== n.text && i.setTextContent(c, n.text), 
                                d(f) && d(l = f.hook) && d(l = l.postpatch) && l(e, n);
                            }
                        }
                    }(t, e, h, o); else {
                        if (m) {
                            if (1 === t.nodeType && t.hasAttribute("data-server-rendered") && (t.removeAttribute("data-server-rendered"), 
                            n = !0), p(n) && k(t, e, h)) return x(e, h, !0), t;
                            l = t, t = new mt(i.tagName(l).toLowerCase(), {}, [], void 0, l);
                        }
                        var v = t.elm, _ = i.parentNode(v);
                        if (s(e, h, v._leaveCb ? null : _, i.nextSibling(v)), d(e.parent)) for (var y = e.parent, E = A(e); y; ) {
                            for (var S = 0; S < r.destroy.length; ++S) r.destroy[S](y);
                            if (y.elm = e.elm, E) {
                                for (var D = 0; D < r.create.length; ++D) r.create[D](Pn, y);
                                var B = y.data.hook.insert;
                                if (B.merged) for (var T = 1; T < B.fns.length; T++) B.fns[T]();
                            } else In(y);
                            y = y.parent;
                        }
                        d(_) ? C(0, [ t ], 0, 0) : d(t.tag) && b(t);
                    }
                }
                return x(e, h, f), e.elm;
            }
            d(t) && b(t);
        };
    }({
        nodeOps: jn,
        modules: [ Zn, nr, cr, dr, yr, W ? {
            create: Gr,
            activate: Gr,
            remove: function(t, e) {
                !0 !== t.data.show ? Mr(t, e) : e();
            }
        } : {} ].concat(Jn)
    });
    Z && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && no(t, "input");
    });
    var Jr = {
        inserted: function(t, e, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? ce(n, "postpatch", function() {
                Jr.componentUpdated(t, e, n);
            }) : Xr(t, e, n.context), t._vOptions = [].map.call(t.options, Zr)) : ("textarea" === n.tag || Ln(t.type)) && (t._vModifiers = e.modifiers, 
            e.modifiers.lazy || (t.addEventListener("compositionstart", to), t.addEventListener("compositionend", eo), 
            t.addEventListener("change", eo), Z && (t.vmodel = !0)));
        },
        componentUpdated: function(t, e, n) {
            if ("select" === n.tag) {
                Xr(t, e, n.context);
                var r = t._vOptions, o = t._vOptions = [].map.call(t.options, Zr);
                o.some(function(t, e) {
                    return !I(t, r[e]);
                }) && (t.multiple ? e.value.some(function(t) {
                    return Qr(t, o);
                }) : e.value !== e.oldValue && Qr(e.value, o)) && no(t, "change");
            }
        }
    };
    function Xr(t, e, n) {
        Yr(t, e), (Q || tt) && setTimeout(function() {
            Yr(t, e);
        }, 0);
    }
    function Yr(t, e, n) {
        var r = e.value, o = t.multiple;
        if (!o || Array.isArray(r)) {
            for (var i, a, s = 0, c = t.options.length; s < c; s++) if (a = t.options[s], o) i = P(r, Zr(a)) > -1, 
            a.selected !== i && (a.selected = i); else if (I(Zr(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
            o || (t.selectedIndex = -1);
        }
    }
    function Qr(t, e) {
        return e.every(function(e) {
            return !I(e, t);
        });
    }
    function Zr(t) {
        return "_value" in t ? t._value : t.value;
    }
    function to(t) {
        t.target.composing = !0;
    }
    function eo(t) {
        t.target.composing && (t.target.composing = !1, no(t.target, "input"));
    }
    function no(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function ro(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : ro(t.componentInstance._vnode);
    }
    var oo = {
        model: Jr,
        show: {
            bind: function(t, e, n) {
                var r = e.value, o = (n = ro(n)).data && n.data.transition, i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && o ? (n.data.show = !0, qr(n, function() {
                    t.style.display = i;
                })) : t.style.display = r ? i : "none";
            },
            update: function(t, e, n) {
                var r = e.value;
                !r != !e.oldValue && ((n = ro(n)).data && n.data.transition ? (n.data.show = !0, 
                r ? qr(n, function() {
                    t.style.display = t.__vOriginalDisplay;
                }) : Mr(n, function() {
                    t.style.display = "none";
                })) : t.style.display = r ? t.__vOriginalDisplay : "none");
            },
            unbind: function(t, e, n, r, o) {
                o || (t.style.display = t.__vOriginalDisplay);
            }
        }
    }, io = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [ Number, String, Object ]
    };
    function ao(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? ao(he(e.children)) : t;
    }
    function so(t) {
        var e = {}, n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var o = n._parentListeners;
        for (var i in o) e[S(i)] = o[i];
        return e;
    }
    function co(t, e) {
        if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
            props: e.componentOptions.propsData
        });
    }
    var lo = {
        name: "transition",
        props: io,
        abstract: !0,
        render: function(t) {
            var e = this, n = this.$slots.default;
            if (n && (n = n.filter(function(t) {
                return t.tag || fe(t);
            })).length) {
                var r = this.mode, o = n[0];
                if (function(t) {
                    for (;t = t.parent; ) if (t.data.transition) return !0;
                }(this.$vnode)) return o;
                var i = ao(o);
                if (!i) return o;
                if (this._leaving) return co(t, o);
                var a = "__transition-" + this._uid + "-";
                i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : f(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                var s = (i.data || (i.data = {})).transition = so(this), c = this._vnode, l = ao(c);
                if (i.data.directives && i.data.directives.some(function(t) {
                    return "show" === t.name;
                }) && (i.data.show = !0), l && l.data && !function(t, e) {
                    return e.key === t.key && e.tag === t.tag;
                }(i, l) && !fe(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var u = l.data.transition = F({}, s);
                    if ("out-in" === r) return this._leaving = !0, ce(u, "afterLeave", function() {
                        e._leaving = !1, e.$forceUpdate();
                    }), co(t, o);
                    if ("in-out" === r) {
                        if (fe(i)) return c;
                        var d, p = function() {
                            d();
                        };
                        ce(s, "afterEnter", p), ce(s, "enterCancelled", p), ce(u, "delayLeave", function(t) {
                            d = t;
                        });
                    }
                }
                return o;
            }
        }
    }, uo = F({
        tag: String,
        moveClass: String
    }, io);
    function po(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function fo(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
    }
    function ho(t) {
        var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, o = e.top - n.top;
        if (r || o) {
            t.data.moved = !0;
            var i = t.elm.style;
            i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s";
        }
    }
    delete uo.mode;
    var Ao = {
        Transition: lo,
        TransitionGroup: {
            props: uo,
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = so(this), s = 0; s < o.length; s++) {
                    var c = o[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (i.push(c), 
                    n[c.key] = c, (c.data || (c.data = {})).transition = a);
                }
                if (r) {
                    for (var l = [], u = [], d = 0; d < r.length; d++) {
                        var p = r[d];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? l.push(p) : u.push(p);
                    }
                    this.kept = t(e, null, l), this.removed = u;
                }
                return t(e, null, i);
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
            },
            updated: function() {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, e) && (t.forEach(po), t.forEach(fo), t.forEach(ho), 
                this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                    if (t.data.moved) {
                        var n = t.elm, r = n.style;
                        jr(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Kr, n._moveCb = function t(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Kr, t), n._moveCb = null, 
                            Nr(n, e));
                        });
                    }
                }));
            },
            methods: {
                hasMove: function(t, e) {
                    if (!Sr) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        xr(n, t);
                    }), wr(n, e), n.style.display = "none", this.$el.appendChild(n);
                    var r = Rr(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform;
                }
            }
        }
    };
    function mo(t) {
        return Object.prototype.toString.call(t).indexOf("Error") > -1;
    }
    function vo(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
    }
    pn.config.mustUseProp = function(t, e, n) {
        return "value" === n && _n(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    }, pn.config.isReservedTag = Fn, pn.config.isReservedAttr = bn, pn.config.getTagNamespace = function(t) {
        return On(t) ? "svg" : "math" === t ? "math" : void 0;
    }, pn.config.isUnknownElement = function(t) {
        if (!W) return !0;
        if (Fn(t)) return !1;
        if (t = t.toLowerCase(), null != $n[t]) return $n[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1 ? $n[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : $n[t] = /HTMLUnknownElement/.test(e.toString());
    }, F(pn.options.directives, oo), F(pn.options.components, Ao), pn.prototype.__patch__ = W ? Wr : L, 
    pn.prototype.$mount = function(t, e) {
        return function(t, e, n) {
            var r;
            return t.$el = e, t.$options.render || (t.$options.render = gt), xe(t, "beforeMount"), 
            r = function() {
                t._update(t._render(), n);
            }, new Fe(t, r, L, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, xe(t, "mounted")), 
            t;
        }(this, t = t && W ? function(t) {
            return "string" == typeof t ? document.querySelector(t) || document.createElement("div") : t;
        }(t) : void 0, e);
    }, W && setTimeout(function() {
        q.devtools && at && at.emit("init", pn);
    }, 0);
    var go = {
        name: "RouterView",
        functional: !0,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function(t, e) {
            var n = e.props, r = e.children, o = e.parent, i = e.data;
            i.routerView = !0;
            for (var a = o.$createElement, s = n.name, c = o.$route, l = o._routerViewCache || (o._routerViewCache = {}), u = 0, d = !1; o && o._routerRoot !== o; ) o.$vnode && o.$vnode.data.routerView && u++, 
            o._inactive && (d = !0), o = o.$parent;
            if (i.routerViewDepth = u, d) return a(l[s], i, r);
            var p = c.matched[u];
            if (!p) return l[s] = null, a();
            var f = l[s] = p.components[s];
            i.registerRouteInstance = function(t, e) {
                var n = p.instances[s];
                (e && n !== t || !e && n === t) && (p.instances[s] = e);
            }, (i.hook || (i.hook = {})).prepatch = function(t, e) {
                p.instances[s] = e.componentInstance;
            };
            var h = i.props = function(t, e) {
                switch (typeof e) {
                  case "undefined":
                    return;

                  case "object":
                    return e;

                  case "function":
                    return e(t);

                  case "boolean":
                    return e ? t.params : void 0;
                }
            }(c, p.props && p.props[s]);
            if (h) {
                h = i.props = vo({}, h);
                var A = i.attrs = i.attrs || {};
                for (var m in h) f.props && m in f.props || (A[m] = h[m], delete h[m]);
            }
            return a(f, i, r);
        }
    }, bo = /[!'()*]/g, _o = function(t) {
        return "%" + t.charCodeAt(0).toString(16);
    }, Co = /%2C/g, yo = function(t) {
        return encodeURIComponent(t).replace(bo, _o).replace(Co, ",");
    }, wo = decodeURIComponent;
    function xo(t) {
        var e = {};
        return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
            var n = t.replace(/\+/g, " ").split("="), r = wo(n.shift()), o = n.length > 0 ? wo(n.join("=")) : null;
            void 0 === e[r] ? e[r] = o : Array.isArray(e[r]) ? e[r].push(o) : e[r] = [ e[r], o ];
        }), e) : e;
    }
    var Eo = /\/?$/;
    function ko(t, e, n, r) {
        var o = r && r.options.stringifyQuery, i = e.query || {};
        try {
            i = So(i);
        } catch (t) {}
        var a = {
            name: e.name || t && t.name,
            meta: t && t.meta || {},
            path: e.path || "/",
            hash: e.hash || "",
            query: i,
            params: e.params || {},
            fullPath: Bo(e, o),
            matched: t ? function(t) {
                for (var e = []; t; ) e.unshift(t), t = t.parent;
                return e;
            }(t) : []
        };
        return n && (a.redirectedFrom = Bo(n, o)), Object.freeze(a);
    }
    function So(t) {
        if (Array.isArray(t)) return t.map(So);
        if (t && "object" == typeof t) {
            var e = {};
            for (var n in t) e[n] = So(t[n]);
            return e;
        }
        return t;
    }
    var Do = ko(null, {
        path: "/"
    });
    function Bo(t, e) {
        var n = t.path, r = t.query;
        void 0 === r && (r = {});
        var o = t.hash;
        return void 0 === o && (o = ""), (n || "/") + (e || function(t) {
            var e = t ? Object.keys(t).map(function(e) {
                var n = t[e];
                if (void 0 === n) return "";
                if (null === n) return yo(e);
                if (Array.isArray(n)) {
                    var r = [];
                    return n.forEach(function(t) {
                        void 0 !== t && (null === t ? r.push(yo(e)) : r.push(yo(e) + "=" + yo(t)));
                    }), r.join("&");
                }
                return yo(e) + "=" + yo(n);
            }).filter(function(t) {
                return t.length > 0;
            }).join("&") : null;
            return e ? "?" + e : "";
        })(r) + o;
    }
    function To(t, e) {
        return e === Do ? t === e : !!e && (t.path && e.path ? t.path.replace(Eo, "") === e.path.replace(Eo, "") && t.hash === e.hash && Ko(t.query, e.query) : !(!t.name || !e.name) && t.name === e.name && t.hash === e.hash && Ko(t.query, e.query) && Ko(t.params, e.params));
    }
    function Ko(t, e) {
        if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e;
        var n = Object.keys(t), r = Object.keys(e);
        return n.length === r.length && n.every(function(n) {
            var r = t[n], o = e[n];
            return "object" == typeof r && "object" == typeof o ? Ko(r, o) : String(r) === String(o);
        });
    }
    var Oo, Fo = [ String, Object ], $o = [ String, Array ], Lo = {
        name: "RouterLink",
        props: {
            to: {
                type: Fo,
                required: !0
            },
            tag: {
                type: String,
                default: "a"
            },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: {
                type: $o,
                default: "click"
            }
        },
        render: function(t) {
            var e = this, n = this.$router, r = this.$route, o = n.resolve(this.to, r, this.append), i = o.location, a = o.route, s = o.href, c = {}, l = n.options.linkActiveClass, u = n.options.linkExactActiveClass, d = null == l ? "router-link-active" : l, p = null == u ? "router-link-exact-active" : u, f = null == this.activeClass ? d : this.activeClass, h = null == this.exactActiveClass ? p : this.exactActiveClass, A = i.path ? ko(null, i, null, n) : a;
            c[h] = To(r, A), c[f] = this.exact ? c[h] : function(t, e) {
                return 0 === t.path.replace(Eo, "/").indexOf(e.path.replace(Eo, "/")) && (!e.hash || t.hash === e.hash) && function(t, e) {
                    for (var n in e) if (!(n in t)) return !1;
                    return !0;
                }(t.query, e.query);
            }(r, A);
            var m = function(t) {
                jo(t) && (e.replace ? n.replace(i) : n.push(i));
            }, v = {
                click: jo
            };
            Array.isArray(this.event) ? this.event.forEach(function(t) {
                v[t] = m;
            }) : v[this.event] = m;
            var g = {
                class: c
            };
            if ("a" === this.tag) g.on = v, g.attrs = {
                href: s
            }; else {
                var b = function t(e) {
                    if (e) for (var n, r = 0; r < e.length; r++) {
                        if ("a" === (n = e[r]).tag) return n;
                        if (n.children && (n = t(n.children))) return n;
                    }
                }(this.$slots.default);
                b ? (b.isStatic = !1, (b.data = vo({}, b.data)).on = v, (b.data.attrs = vo({}, b.data.attrs)).href = s) : g.on = v;
            }
            return t(this.tag, g, this.$slots.default);
        }
    };
    function jo(t) {
        if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
            if (t.currentTarget && t.currentTarget.getAttribute) {
                var e = t.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(e)) return;
            }
            return t.preventDefault && t.preventDefault(), !0;
        }
    }
    var No = "undefined" != typeof window;
    function Io(t, e, n) {
        var r = t.charAt(0);
        if ("/" === r) return t;
        if ("?" === r || "#" === r) return e + t;
        var o = e.split("/");
        n && o[o.length - 1] || o.pop();
        for (var i = t.replace(/^\//, "").split("/"), a = 0; a < i.length; a++) {
            var s = i[a];
            ".." === s ? o.pop() : "." !== s && o.push(s);
        }
        return "" !== o[0] && o.unshift(""), o.join("/");
    }
    function Po(t) {
        return t.replace(/\/\//g, "/");
    }
    var Ro = Array.isArray || function(t) {
        return "[object Array]" == Object.prototype.toString.call(t);
    }, Vo = function t(e, n, r) {
        return Ro(n) || (r = n || r, n = []), r = r || {}, e instanceof RegExp ? function(t, e) {
            var n = t.source.match(/\((?!\?)/g);
            if (n) for (var r = 0; r < n.length; r++) e.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
            return Yo(t, e);
        }(e, n) : Ro(e) ? function(e, n, r) {
            for (var o = [], i = 0; i < e.length; i++) o.push(t(e[i], n, r).source);
            return Yo(new RegExp("(?:" + o.join("|") + ")", Qo(r)), n);
        }(e, n, r) : function(t, e, n) {
            return Zo(Ho(t, n), e, n);
        }(e, n, r);
    }, zo = Ho, qo = Wo, Mo = Zo, Uo = new RegExp([ "(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))" ].join("|"), "g");
    function Ho(t, e) {
        for (var n, r = [], o = 0, i = 0, a = "", s = e && e.delimiter || "/"; null != (n = Uo.exec(t)); ) {
            var c = n[0], l = n[1], u = n.index;
            if (a += t.slice(i, u), i = u + c.length, l) a += l[1]; else {
                var d = t[i], p = n[2], f = n[3], h = n[4], A = n[5], m = n[6], v = n[7];
                a && (r.push(a), a = "");
                var g = null != p && null != d && d !== p, b = "+" === m || "*" === m, _ = "?" === m || "*" === m, C = n[2] || s, y = h || A;
                r.push({
                    name: f || o++,
                    prefix: p || "",
                    delimiter: C,
                    optional: _,
                    repeat: b,
                    partial: g,
                    asterisk: !!v,
                    pattern: y ? Xo(y) : v ? ".*" : "[^" + Jo(C) + "]+?"
                });
            }
        }
        return i < t.length && (a += t.substr(i)), a && r.push(a), r;
    }
    function Go(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    function Wo(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
        return function(n, r) {
            for (var o = "", i = n || {}, a = (r || {}).pretty ? Go : encodeURIComponent, s = 0; s < t.length; s++) {
                var c = t[s];
                if ("string" != typeof c) {
                    var l, u = i[c.name];
                    if (null == u) {
                        if (c.optional) {
                            c.partial && (o += c.prefix);
                            continue;
                        }
                        throw new TypeError('Expected "' + c.name + '" to be defined');
                    }
                    if (Ro(u)) {
                        if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(u) + "`");
                        if (0 === u.length) {
                            if (c.optional) continue;
                            throw new TypeError('Expected "' + c.name + '" to not be empty');
                        }
                        for (var d = 0; d < u.length; d++) {
                            if (l = a(u[d]), !e[s].test(l)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(l) + "`");
                            o += (0 === d ? c.prefix : c.delimiter) + l;
                        }
                    } else {
                        if (l = c.asterisk ? encodeURI(u).replace(/[?#]/g, function(t) {
                            return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                        }) : a(u), !e[s].test(l)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + l + '"');
                        o += c.prefix + l;
                    }
                } else o += c;
            }
            return o;
        };
    }
    function Jo(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function Xo(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1");
    }
    function Yo(t, e) {
        return t.keys = e, t;
    }
    function Qo(t) {
        return t.sensitive ? "" : "i";
    }
    function Zo(t, e, n) {
        Ro(e) || (n = e || n, e = []);
        for (var r = (n = n || {}).strict, o = !1 !== n.end, i = "", a = 0; a < t.length; a++) {
            var s = t[a];
            if ("string" == typeof s) i += Jo(s); else {
                var c = Jo(s.prefix), l = "(?:" + s.pattern + ")";
                e.push(s), s.repeat && (l += "(?:" + c + l + ")*"), i += l = s.optional ? s.partial ? c + "(" + l + ")?" : "(?:" + c + "(" + l + "))?" : c + "(" + l + ")";
            }
        }
        var u = Jo(n.delimiter || "/"), d = i.slice(-u.length) === u;
        return r || (i = (d ? i.slice(0, -u.length) : i) + "(?:" + u + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + u + "|$)", 
        Yo(new RegExp("^" + i, Qo(n)), e);
    }
    Vo.parse = zo, Vo.compile = function(t, e) {
        return Wo(Ho(t, e));
    }, Vo.tokensToFunction = qo, Vo.tokensToRegExp = Mo;
    var ti = Object.create(null);
    function ei(t, e, n) {
        try {
            return (ti[t] || (ti[t] = Vo.compile(t)))(e || {}, {
                pretty: !0
            });
        } catch (t) {
            return "";
        }
    }
    function ni(t, e, n, r) {
        var o = e || [], i = n || Object.create(null), a = r || Object.create(null);
        t.forEach(function(t) {
            !function t(e, n, r, o, i, a) {
                var s = o.path, c = o.name, l = o.pathToRegexpOptions || {}, u = function(t, e, n) {
                    return l.strict || (t = t.replace(/\/$/, "")), "/" === t[0] ? t : null == e ? t : Po(e.path + "/" + t);
                }(s, i);
                "boolean" == typeof o.caseSensitive && (l.sensitive = o.caseSensitive);
                var d = {
                    path: u,
                    regex: function(t, e) {
                        return Vo(u, [], e);
                    }(0, l),
                    components: o.components || {
                        default: o.component
                    },
                    instances: {},
                    name: c,
                    parent: i,
                    matchAs: a,
                    redirect: o.redirect,
                    beforeEnter: o.beforeEnter,
                    meta: o.meta || {},
                    props: null == o.props ? {} : o.components ? o.props : {
                        default: o.props
                    }
                };
                (o.children && o.children.forEach(function(o) {
                    var i = a ? Po(a + "/" + o.path) : void 0;
                    t(e, n, r, o, d, i);
                }), void 0 !== o.alias) && (Array.isArray(o.alias) ? o.alias : [ o.alias ]).forEach(function(a) {
                    var s = {
                        path: a,
                        children: o.children
                    };
                    t(e, n, r, s, i, d.path || "/");
                });
                n[d.path] || (e.push(d.path), n[d.path] = d), c && (r[c] || (r[c] = d));
            }(o, i, a, t);
        });
        for (var s = 0, c = o.length; s < c; s++) "*" === o[s] && (o.push(o.splice(s, 1)[0]), 
        c--, s--);
        return {
            pathList: o,
            pathMap: i,
            nameMap: a
        };
    }
    function ri(t, e, n, r) {
        var o = "string" == typeof t ? {
            path: t
        } : t;
        if (o.name || o._normalized) return o;
        if (!o.path && o.params && e) {
            (o = vo({}, o))._normalized = !0;
            var i = vo(vo({}, e.params), o.params);
            if (e.name) o.name = e.name, o.params = i; else if (e.matched.length) {
                var a = e.matched[e.matched.length - 1].path;
                o.path = ei(a, i, e.path);
            }
            return o;
        }
        var s = function(t) {
            var e = "", n = "", r = t.indexOf("#");
            r >= 0 && (e = t.slice(r), t = t.slice(0, r));
            var o = t.indexOf("?");
            return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), {
                path: t,
                query: n,
                hash: e
            };
        }(o.path || ""), c = e && e.path || "/", l = s.path ? Io(s.path, c, n || o.append) : c, u = function(t, e, n) {
            void 0 === e && (e = {});
            var o, i = r && r.options.parseQuery || xo;
            try {
                o = i(t || "");
            } catch (t) {
                o = {};
            }
            for (var a in e) o[a] = e[a];
            return o;
        }(s.query, o.query), d = o.hash || s.hash;
        return d && "#" !== d.charAt(0) && (d = "#" + d), {
            _normalized: !0,
            path: l,
            query: u,
            hash: d
        };
    }
    function oi(t, e) {
        var n = ni(t), r = n.pathList, o = n.pathMap, i = n.nameMap;
        function a(t, n, a) {
            var c = ri(t, n, !1, e), l = c.name;
            if (l) {
                var u = i[l];
                if (!u) return s(null, c);
                var d = u.regex.keys.filter(function(t) {
                    return !t.optional;
                }).map(function(t) {
                    return t.name;
                });
                if ("object" != typeof c.params && (c.params = {}), n && "object" == typeof n.params) for (var p in n.params) !(p in c.params) && d.indexOf(p) > -1 && (c.params[p] = n.params[p]);
                if (u) return c.path = ei(u.path, c.params), s(u, c, a);
            } else if (c.path) {
                c.params = {};
                for (var f = 0; f < r.length; f++) {
                    var h = r[f], A = o[h];
                    if (ii(A.regex, c.path, c.params)) return s(A, c, a);
                }
            }
            return s(null, c);
        }
        function s(t, n, r) {
            return t && t.redirect ? function(t, n) {
                var r = t.redirect, o = "function" == typeof r ? r(ko(t, n, null, e)) : r;
                if ("string" == typeof o && (o = {
                    path: o
                }), !o || "object" != typeof o) return s(null, n);
                var c = o, l = c.name, u = c.path, d = n.query, p = n.hash, f = n.params;
                return d = c.hasOwnProperty("query") ? c.query : d, p = c.hasOwnProperty("hash") ? c.hash : p, 
                f = c.hasOwnProperty("params") ? c.params : f, l ? (i[l], a({
                    _normalized: !0,
                    name: l,
                    query: d,
                    hash: p,
                    params: f
                }, void 0, n)) : u ? a({
                    _normalized: !0,
                    path: ei(function(t, e) {
                        return Io(t, e.parent ? e.parent.path : "/", !0);
                    }(u, t), f),
                    query: d,
                    hash: p
                }, void 0, n) : s(null, n);
            }(t, r || n) : t && t.matchAs ? function(t, e, n) {
                var r = a({
                    _normalized: !0,
                    path: ei(n, e.params)
                });
                if (r) {
                    var o = r.matched, i = o[o.length - 1];
                    return e.params = r.params, s(i, e);
                }
                return s(null, e);
            }(0, n, t.matchAs) : ko(t, n, r, e);
        }
        return {
            match: a,
            addRoutes: function(t) {
                ni(t, r, o, i);
            }
        };
    }
    function ii(t, e, n) {
        var r = e.match(t);
        if (!r) return !1;
        if (!n) return !0;
        for (var o = 1, i = r.length; o < i; ++o) {
            var a = t.keys[o - 1], s = "string" == typeof r[o] ? decodeURIComponent(r[o]) : r[o];
            a && (n[a.name || "pathMatch"] = s);
        }
        return !0;
    }
    var ai = Object.create(null);
    function si() {
        window.history.replaceState({
            key: bi()
        }, "", window.location.href.replace(window.location.origin, "")), window.addEventListener("popstate", function(t) {
            var e;
            li(), t.state && t.state.key && (e = t.state.key, vi = e);
        });
    }
    function ci(t, e, n, r) {
        if (t.app) {
            var o = t.options.scrollBehavior;
            o && t.app.$nextTick(function() {
                var i = function() {
                    var t = bi();
                    if (t) return ai[t];
                }(), a = o.call(t, e, n, r ? i : null);
                a && ("function" == typeof a.then ? a.then(function(t) {
                    fi(t, i);
                }).catch(function(t) {}) : fi(a, i));
            });
        }
    }
    function li() {
        var t = bi();
        t && (ai[t] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        });
    }
    function ui(t) {
        return pi(t.x) || pi(t.y);
    }
    function di(t) {
        return {
            x: pi(t.x) ? t.x : window.pageXOffset,
            y: pi(t.y) ? t.y : window.pageYOffset
        };
    }
    function pi(t) {
        return "number" == typeof t;
    }
    function fi(t, e) {
        var n, r = "object" == typeof t;
        if (r && "string" == typeof t.selector) {
            var o = document.querySelector(t.selector);
            if (o) {
                var i = t.offset && "object" == typeof t.offset ? t.offset : {};
                e = function(t, e) {
                    var n = document.documentElement.getBoundingClientRect(), r = t.getBoundingClientRect();
                    return {
                        x: r.left - n.left - e.x,
                        y: r.top - n.top - e.y
                    };
                }(o, i = {
                    x: pi((n = i).x) ? n.x : 0,
                    y: pi(n.y) ? n.y : 0
                });
            } else ui(t) && (e = di(t));
        } else r && ui(t) && (e = di(t));
        e && window.scrollTo(e.x, e.y);
    }
    var hi, Ai = No && (-1 === (hi = window.navigator.userAgent).indexOf("Android 2.") && -1 === hi.indexOf("Android 4.0") || -1 === hi.indexOf("Mobile Safari") || -1 !== hi.indexOf("Chrome") || -1 !== hi.indexOf("Windows Phone")) && window.history && "pushState" in window.history, mi = No && window.performance && window.performance.now ? window.performance : Date, vi = gi();
    function gi() {
        return mi.now().toFixed(3);
    }
    function bi() {
        return vi;
    }
    function _i(t, e) {
        li();
        var n = window.history;
        try {
            e ? n.replaceState({
                key: vi
            }, "", t) : (vi = gi(), n.pushState({
                key: vi
            }, "", t));
        } catch (n) {
            window.location[e ? "replace" : "assign"](t);
        }
    }
    function Ci(t) {
        _i(t, !0);
    }
    function yi(t, e, n) {
        var r = function(o) {
            o >= t.length ? n() : t[o] ? e(t[o], function() {
                r(o + 1);
            }) : r(o + 1);
        };
        r(0);
    }
    function wi(t, e) {
        return xi(t.map(function(t) {
            return Object.keys(t.components).map(function(n) {
                return e(t.components[n], t.instances[n], t, n);
            });
        }));
    }
    function xi(t) {
        return Array.prototype.concat.apply([], t);
    }
    var Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    function ki(t) {
        var e = !1;
        return function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            if (!e) return e = !0, t.apply(this, n);
        };
    }
    var Si = function(t, e) {
        this.router = t, this.base = function(t) {
            if (!t) if (No) {
                var e = document.querySelector("base");
                t = (t = e && e.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "");
            } else t = "/";
            return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "");
        }(e), this.current = Do, this.pending = null, this.ready = !1, this.readyCbs = [], 
        this.readyErrorCbs = [], this.errorCbs = [];
    };
    function Di(t, e, n, r) {
        var o = wi(t, function(t, r, o, i) {
            var a = function(t, e) {
                return "function" != typeof t && (t = Oo.extend(t)), t.options[e];
            }(t, e);
            if (a) return Array.isArray(a) ? a.map(function(t) {
                return n(t, r, o, i);
            }) : n(a, r, o, i);
        });
        return xi(r ? o.reverse() : o);
    }
    function Bi(t, e) {
        if (e) return function() {
            return t.apply(e, arguments);
        };
    }
    Si.prototype.listen = function(t) {
        this.cb = t;
    }, Si.prototype.onReady = function(t, e) {
        this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e));
    }, Si.prototype.onError = function(t) {
        this.errorCbs.push(t);
    }, Si.prototype.transitionTo = function(t, e, n) {
        var r = this, o = this.router.match(t, this.current);
        this.confirmTransition(o, function() {
            r.updateRoute(o), e && e(o), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach(function(t) {
                t(o);
            }));
        }, function(t) {
            n && n(t), t && !r.ready && (r.ready = !0, r.readyErrorCbs.forEach(function(e) {
                e(t);
            }));
        });
    }, Si.prototype.confirmTransition = function(t, e, n) {
        var r = this, o = this.current, i = function(t) {
            mo(t) && (r.errorCbs.length ? r.errorCbs.forEach(function(e) {
                e(t);
            }) : console.error(t)), n && n(t);
        };
        if (To(t, o) && t.matched.length === o.matched.length) return this.ensureURL(), 
        i();
        var a, s = function(t, e) {
            var n, r = Math.max(t.length, e.length);
            for (n = 0; n < r && t[n] === e[n]; n++) ;
            return {
                updated: e.slice(0, n),
                activated: e.slice(n),
                deactivated: t.slice(n)
            };
        }(this.current.matched, t.matched), c = s.updated, l = s.deactivated, u = s.activated, d = [].concat(function(t) {
            return Di(t, "beforeRouteLeave", Bi, !0);
        }(l), this.router.beforeHooks, function(t) {
            return Di(t, "beforeRouteUpdate", Bi);
        }(c), u.map(function(t) {
            return t.beforeEnter;
        }), (a = u, function(t, e, n) {
            var r = !1, o = 0, i = null;
            wi(a, function(t, e, a, s) {
                if ("function" == typeof t && void 0 === t.cid) {
                    r = !0, o++;
                    var c, l = ki(function(e) {
                        var r;
                        ((r = e).__esModule || Ei && "Module" === r[Symbol.toStringTag]) && (e = e.default), 
                        t.resolved = "function" == typeof e ? e : Oo.extend(e), a.components[s] = e, --o <= 0 && n();
                    }), u = ki(function(t) {
                        var e = "Failed to resolve async component " + s + ": " + t;
                        i || (i = mo(t) ? t : new Error(e), n(i));
                    });
                    try {
                        c = t(l, u);
                    } catch (t) {
                        u(t);
                    }
                    if (c) if ("function" == typeof c.then) c.then(l, u); else {
                        var d = c.component;
                        d && "function" == typeof d.then && d.then(l, u);
                    }
                }
            }), r || n();
        }));
        this.pending = t;
        var p = function(e, n) {
            if (r.pending !== t) return i();
            try {
                e(t, o, function(t) {
                    !1 === t || mo(t) ? (r.ensureURL(!0), i(t)) : "string" == typeof t || "object" == typeof t && ("string" == typeof t.path || "string" == typeof t.name) ? (i(), 
                    "object" == typeof t && t.replace ? r.replace(t) : r.push(t)) : n(t);
                });
            } catch (t) {
                i(t);
            }
        };
        yi(d, p, function() {
            var n = [];
            yi(function(t, e, n) {
                return Di(t, "beforeRouteEnter", function(t, r, o, i) {
                    return function(t, e, n, r, o) {
                        return function(i, a, s) {
                            return t(i, a, function(t) {
                                s(t), "function" == typeof t && r.push(function() {
                                    !function t(e, n, r, o) {
                                        n[r] && !n[r]._isBeingDestroyed ? e(n[r]) : o() && setTimeout(function() {
                                            t(e, n, r, o);
                                        }, 16);
                                    }(t, e.instances, n, o);
                                });
                            });
                        };
                    }(t, o, i, e, n);
                });
            }(u, n, function() {
                return r.current === t;
            }).concat(r.router.resolveHooks), p, function() {
                if (r.pending !== t) return i();
                r.pending = null, e(t), r.router.app && r.router.app.$nextTick(function() {
                    n.forEach(function(t) {
                        t();
                    });
                });
            });
        });
    }, Si.prototype.updateRoute = function(t) {
        var e = this.current;
        this.current = t, this.cb && this.cb(t), this.router.afterHooks.forEach(function(n) {
            n && n(t, e);
        });
    };
    var Ti = function(t) {
        function e(e, n) {
            var r = this;
            t.call(this, e, n);
            var o = e.options.scrollBehavior, i = Ai && o;
            i && si();
            var a = Ki(this.base);
            window.addEventListener("popstate", function(t) {
                var n = r.current, o = Ki(r.base);
                r.current === Do && o === a || r.transitionTo(o, function(t) {
                    i && ci(e, t, n, !0);
                });
            });
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
        e.prototype.go = function(t) {
            window.history.go(t);
        }, e.prototype.push = function(t, e, n) {
            var r = this, o = this.current;
            this.transitionTo(t, function(t) {
                _i(Po(r.base + t.fullPath)), ci(r.router, t, o, !1), e && e(t);
            }, n);
        }, e.prototype.replace = function(t, e, n) {
            var r = this, o = this.current;
            this.transitionTo(t, function(t) {
                Ci(Po(r.base + t.fullPath)), ci(r.router, t, o, !1), e && e(t);
            }, n);
        }, e.prototype.ensureURL = function(t) {
            if (Ki(this.base) !== this.current.fullPath) {
                var e = Po(this.base + this.current.fullPath);
                t ? _i(e) : Ci(e);
            }
        }, e.prototype.getCurrentLocation = function() {
            return Ki(this.base);
        }, e;
    }(Si);
    function Ki(t) {
        var e = decodeURI(window.location.pathname);
        return t && 0 === e.indexOf(t) && (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash;
    }
    var Oi = function(t) {
        function e(e, n, r) {
            t.call(this, e, n), r && function(t) {
                var e = Ki(t);
                if (!/^\/#/.test(e)) return window.location.replace(Po(t + "/#" + e)), !0;
            }(this.base) || Fi();
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
        e.prototype.setupListeners = function() {
            var t = this, e = this.router.options.scrollBehavior, n = Ai && e;
            n && si(), window.addEventListener(Ai ? "popstate" : "hashchange", function() {
                var e = t.current;
                Fi() && t.transitionTo($i(), function(r) {
                    n && ci(t.router, r, e, !0), Ai || Ni(r.fullPath);
                });
            });
        }, e.prototype.push = function(t, e, n) {
            var r = this, o = this.current;
            this.transitionTo(t, function(t) {
                ji(t.fullPath), ci(r.router, t, o, !1), e && e(t);
            }, n);
        }, e.prototype.replace = function(t, e, n) {
            var r = this, o = this.current;
            this.transitionTo(t, function(t) {
                Ni(t.fullPath), ci(r.router, t, o, !1), e && e(t);
            }, n);
        }, e.prototype.go = function(t) {
            window.history.go(t);
        }, e.prototype.ensureURL = function(t) {
            var e = this.current.fullPath;
            $i() !== e && (t ? ji(e) : Ni(e));
        }, e.prototype.getCurrentLocation = function() {
            return $i();
        }, e;
    }(Si);
    function Fi() {
        var t = $i();
        return "/" === t.charAt(0) || (Ni("/" + t), !1);
    }
    function $i() {
        var t = window.location.href, e = t.indexOf("#");
        return -1 === e ? "" : decodeURI(t.slice(e + 1));
    }
    function Li(t) {
        var e = window.location.href, n = e.indexOf("#");
        return (n >= 0 ? e.slice(0, n) : e) + "#" + t;
    }
    function ji(t) {
        Ai ? _i(Li(t)) : window.location.hash = t;
    }
    function Ni(t) {
        Ai ? Ci(Li(t)) : window.location.replace(Li(t));
    }
    var Ii = function(t) {
        function e(e, n) {
            t.call(this, e, n), this.stack = [], this.index = -1;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
        e.prototype.push = function(t, e, n) {
            var r = this;
            this.transitionTo(t, function(t) {
                r.stack = r.stack.slice(0, r.index + 1).concat(t), r.index++, e && e(t);
            }, n);
        }, e.prototype.replace = function(t, e, n) {
            var r = this;
            this.transitionTo(t, function(t) {
                r.stack = r.stack.slice(0, r.index).concat(t), e && e(t);
            }, n);
        }, e.prototype.go = function(t) {
            var e = this, n = this.index + t;
            if (!(n < 0 || n >= this.stack.length)) {
                var r = this.stack[n];
                this.confirmTransition(r, function() {
                    e.index = n, e.updateRoute(r);
                });
            }
        }, e.prototype.getCurrentLocation = function() {
            var t = this.stack[this.stack.length - 1];
            return t ? t.fullPath : "/";
        }, e.prototype.ensureURL = function() {}, e;
    }(Si), Pi = function(t) {
        void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], 
        this.resolveHooks = [], this.afterHooks = [], this.matcher = oi(t.routes || [], this);
        var e = t.mode || "hash";
        switch (this.fallback = "history" === e && !Ai && !1 !== t.fallback, this.fallback && (e = "hash"), 
        No || (e = "abstract"), this.mode = e, e) {
          case "history":
            this.history = new Ti(this, t.base);
            break;

          case "hash":
            this.history = new Oi(this, t.base, this.fallback);
            break;

          case "abstract":
            this.history = new Ii(this, t.base);
        }
    }, Ri = {
        currentRoute: {
            configurable: !0
        }
    };
    function Vi(t, e) {
        return t.push(e), function() {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1);
        };
    }
    function zi(t, e) {
        return void 0 === e ? {
            type: t
        } : {
            type: t,
            value: e
        };
    }
    let qi;
    Pi.prototype.match = function(t, e, n) {
        return this.matcher.match(t, e, n);
    }, Ri.currentRoute.get = function() {
        return this.history && this.history.current;
    }, Pi.prototype.init = function(t) {
        var e = this;
        if (this.apps.push(t), !this.app) {
            this.app = t;
            var n = this.history;
            if (n instanceof Ti) n.transitionTo(n.getCurrentLocation()); else if (n instanceof Oi) {
                var r = function() {
                    n.setupListeners();
                };
                n.transitionTo(n.getCurrentLocation(), r, r);
            }
            n.listen(function(t) {
                e.apps.forEach(function(e) {
                    e._route = t;
                });
            });
        }
    }, Pi.prototype.beforeEach = function(t) {
        return Vi(this.beforeHooks, t);
    }, Pi.prototype.beforeResolve = function(t) {
        return Vi(this.resolveHooks, t);
    }, Pi.prototype.afterEach = function(t) {
        return Vi(this.afterHooks, t);
    }, Pi.prototype.onReady = function(t, e) {
        this.history.onReady(t, e);
    }, Pi.prototype.onError = function(t) {
        this.history.onError(t);
    }, Pi.prototype.push = function(t, e, n) {
        this.history.push(t, e, n);
    }, Pi.prototype.replace = function(t, e, n) {
        this.history.replace(t, e, n);
    }, Pi.prototype.go = function(t) {
        this.history.go(t);
    }, Pi.prototype.back = function() {
        this.go(-1);
    }, Pi.prototype.forward = function() {
        this.go(1);
    }, Pi.prototype.getMatchedComponents = function(t) {
        var e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute;
        return e ? [].concat.apply([], e.matched.map(function(t) {
            return Object.keys(t.components).map(function(e) {
                return t.components[e];
            });
        })) : [];
    }, Pi.prototype.resolve = function(t, e, n) {
        var r = ri(t, e || this.history.current, n, this), o = this.match(r, e), i = o.redirectedFrom || o.fullPath;
        return {
            location: r,
            route: o,
            href: function(t, e, n) {
                var r = "hash" === n ? "#" + e : e;
                return t ? Po(t + "/" + r) : r;
            }(this.history.base, i, this.mode),
            normalizedTo: r,
            resolved: o
        };
    }, Pi.prototype.addRoutes = function(t) {
        this.matcher.addRoutes(t), this.history.current !== Do && this.history.transitionTo(this.history.getCurrentLocation());
    }, Object.defineProperties(Pi.prototype, Ri), Pi.install = function t(e) {
        if (!t.installed || Oo !== e) {
            t.installed = !0, Oo = e;
            var n = function(t) {
                return void 0 !== t;
            }, r = function(t, e) {
                var r = t.$options._parentVnode;
                n(r) && n(r = r.data) && n(r = r.registerRouteInstance) && r(t, e);
            };
            e.mixin({
                beforeCreate: function() {
                    n(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, 
                    this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, 
                    r(this, this);
                },
                destroyed: function() {
                    r(this);
                }
            }), Object.defineProperty(e.prototype, "$router", {
                get: function() {
                    return this._routerRoot._router;
                }
            }), Object.defineProperty(e.prototype, "$route", {
                get: function() {
                    return this._routerRoot._route;
                }
            }), e.component("RouterView", go), e.component("RouterLink", Lo);
            var o = e.config.optionMergeStrategies;
            o.beforeRouteEnter = o.beforeRouteLeave = o.beforeRouteUpdate = o.created;
        }
    }, Pi.version = "3.0.2", No && window.Vue && window.Vue.use(Pi), function(t) {
        t.ClientCountryCodeChange = "analytics.clientCountryCodeChange", t.CreateSession = "analytics.createSession", 
        t.HeartbeatTracked = "analytics.heartbeatTracked", t.TrackEvent = "analytics.trackEvent", 
        t.TrackView = "analytics.trackView", t.UninstallUrlDirty = "analytics.uninstallUrlDirty";
    }(qi || (qi = {}));
    const Mi = (t, e, n, r) => zi(qi.TrackEvent, {
        category: t,
        action: e,
        label: n,
        view: r
    }), Ui = t => zi(qi.TrackView, t);
    function Hi(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    const Gi = c("runtimeInfo");
    let Wi, Ji, Xi;
    !function(t) {
        t.Win = "win", t.Mac = "mac", t.Unknown = "unknown";
    }(Wi || (Wi = {})), function(t) {
        t.Arm = "arm", t.X86 = "x86-32", t.X64 = "x86-64", t.Unknown = "unknown";
    }(Ji || (Ji = {})), function(t) {
        t.Chrome = "chrome", t.Firefox = "firefox", t.Other = "other";
    }(Xi || (Xi = {}));
    const Yi = new class {
        constructor(t) {
            Hi(this, "_brand", void 0), Hi(this, "_extensionVersion", void 0), Hi(this, "_permissions", void 0), 
            Hi(this, "_optionalPermissions", void 0), Hi(this, "_contentScriptPaths", void 0), 
            Hi(this, "_browser", void 0), Hi(this, "_name", void 0), Hi(this, "_shortName", void 0), 
            Hi(this, "_os", void 0), Hi(this, "_arch", void 0), t.short_name || Gi("short_name not defined in manifest"), 
            this._brand = t.short_name, this._extensionVersion = t.version, this._permissions = t.permissions, 
            this._optionalPermissions = t.optional_permissions || [], this._name = t.name, this._shortName = t.short_name, 
            this._contentScriptPaths = this.extractPathsFromContentScripts(t.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = Xi.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = Xi.Firefox : this._browser = Xi.Other, 
            Gi("extension version: %s", this._extensionVersion);
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
              case Wi.Mac:
              case Wi.Win:
                return this._os;

              default:
                return Wi.Unknown;
            }
        }
        get arch() {
            switch (this._arch) {
              case Ji.Arm:
              case Ji.X86:
              case Ji.X64:
                return this._arch;

              default:
                return Ji.Unknown;
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
        handleGetPlatformInfo(t) {
            t && (this._os = t.os, this._arch = t.arch);
        }
        extractPathsFromContentScripts(t) {
            if (!t) return [];
            const e = t.reduce(function(t, e) {
                return e.js.forEach(e => {
                    const n = e.split("/");
                    t.add(n[n.length - 1]);
                }), t;
            }, new Set());
            return Array.from(e);
        }
    }(chrome.runtime.getManifest());
    function Qi(t, e) {
        const n = Yi.browser === Xi.Firefox ? "extension_firefox" : "extension_chrome", r = new URL(t);
        return r.searchParams.append("utm_medium", "prg_link"), r.searchParams.append("utm_source", n), 
        r.searchParams.append("utm_campaign", e.campaign), e.content && r.searchParams.append("utm_content", e.content), 
        e.term && r.searchParams.append("utm_term", e.term), e.otherParams && Object.keys(e.otherParams).forEach(t => {
            r.searchParams.append(t, e.otherParams[t]);
        }), r.href;
    }
    chrome.runtime.getPlatformInfo(Yi.handleGetPlatformInfo.bind(Yi));
    const Zi = c("messages");
    function ta(t, e) {
        Zi('sending message to background, action "%s": %O', t.type, t), chrome.runtime.sendMessage(t, function(n) {
            e && e(n), chrome.runtime.lastError && Zi("sendActionToBg for %s generated error", t.type, chrome.runtime.lastError);
        });
    }
    function ea(t) {
        chrome.tabs.create({
            url: t
        });
    }
    const na = {
        model: {
            prop: "checked",
            event: "toggleSwitcher"
        },
        props: {
            checked: Boolean,
            disabled: Boolean
        },
        data: () => ({}),
        computed: {},
        methods: {
            toggleSwitcher() {
                this.$emit("toggleSwitcher", !this.checked);
            }
        }
    };
    var ra = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "switcher_wrap"
        }, [ e("button", {
            staticClass: "switcher",
            class: {
                "-checked": this.checked
            },
            attrs: {
                disabled: this.disabled
            },
            on: {
                click: this.toggleSwitcher
            }
        }, [ e("span", {
            staticClass: "switcher_handle"
        }) ]) ]);
    };
    ra._withStripped = !0;
    var oa = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof na ? na.options : na) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Switcher.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-22fd328a";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: ra,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-22fd328a_0", {
            source: "\n.switcher[data-v-22fd328a] {\n  flex: 1;\n  background-color: rgba(19,36,52,0.4);\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: background-color 0.2s ease;\n}\n.switcher_handle[data-v-22fd328a] {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.2s ease;\n  border-radius: 50%;\n  box-shadow: 0 5px 10px 0 rgba(19,36,52,0.2);\n}\n.switcher_wrap[data-v-22fd328a] {\n  width: 35px;\n  height: 20px;\n  display: flex;\n  position: relative;\n}\n.switcher.-checked[data-v-22fd328a] {\n  background-color: #fecb2f;\n}\n.switcher.-checked .switcher_handle[data-v-22fd328a] {\n  transform: translateX(15px);\n}\n.switcher[data-v-22fd328a]:enabled {\n  cursor: pointer;\n}\n.switcher[data-v-22fd328a]:disabled {\n  opacity: 0.5;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Switcher.vue", "Switcher.vue" ],
                names: [],
                mappings: ";AAyCA;EACA,QAAA;EACA,qCAAA;EACA,oBAAA;EACA,uBAAA;EACA,uCAAA;CCxCC;AD0CD;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,gCAAA;EACA,mBAAA;EACA,4CAAA;CCxCC;AD2CD;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;CCzCC;AD4CD;EACA,0BAAA;CC1CC;AD4CD;EACA,4BAAA;CC1CC;AD8CD;EACA,gBAAA;CC5CC;AD+CD;EACA,aAAA;CC7CC",
                file: "Switcher.vue",
                sourcesContent: [ null, ".switcher {\n  flex: 1;\n  background-color: rgba(19,36,52,0.4);\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: background-color 0.2s ease;\n}\n.switcher_handle {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.2s ease;\n  border-radius: 50%;\n  box-shadow: 0 5px 10px 0 rgba(19,36,52,0.2);\n}\n.switcher_wrap {\n  width: 35px;\n  height: 20px;\n  display: flex;\n  position: relative;\n}\n.switcher.-checked {\n  background-color: #fecb2f;\n}\n.switcher.-checked .switcher_handle {\n  transform: translateX(15px);\n}\n.switcher:enabled {\n  cursor: pointer;\n}\n.switcher:disabled {\n  opacity: 0.5;\n}\n" ]
            },
            media: void 0
        });
    });
    const ia = {
        components: {
            Switcher: oa
        },
        model: {
            prop: "switcherChecked",
            event: "toggleSwitcher"
        },
        props: {
            title: {
                type: String,
                required: !0
            },
            switcherChecked: {
                type: Boolean
            },
            switcherDisabled: {
                type: Boolean,
                default: !1
            },
            withBack: {
                type: Boolean,
                default: !1
            },
            withBurger: {
                type: Boolean,
                default: !1
            },
            withSwitcher: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({}),
        computed: {
            switcherValue: {
                get() {
                    return this.switcherChecked;
                },
                set() {
                    this.$emit("toggleSwitcher", !this.switcherChecked);
                }
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    };
    var aa = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "screen"
        }, [ n("div", {
            staticClass: "header color_dark"
        }, [ t.withBurger ? n("div", {
            staticClass: "header_btn -burger"
        }, [ n("router-link", {
            staticClass: "btn -icon",
            attrs: {
                to: "drawer"
            }
        }, [ n("img", {
            attrs: {
                src: "/img/drawer-on-dark.svg",
                width: "20",
                height: "20"
            }
        }) ]) ], 1) : t._e(), t._v(" "), t.withBack ? n("div", {
            staticClass: "header_btn -back"
        }, [ t.withBack ? n("button", {
            staticClass: "btn -icon screen_back",
            on: {
                click: t.back
            }
        }, [ n("img", {
            attrs: {
                src: "/img/arrow-right-on-dark.svg",
                width: "20",
                height: "20"
            }
        }) ]) : t._e() ]) : t._e(), t._v(" "), n("div", {
            staticClass: "text -small",
            class: {
                header_title_with_switcher: t.withSwitcher
            }
        }, [ t._v("\n\t\t\t" + t._s(t.title) + "\n\t\t") ]), t._v(" "), t.withSwitcher ? n("span", {
            staticClass: "header_switch"
        }, [ n("switcher", {
            attrs: {
                disabled: t.switcherDisabled
            },
            model: {
                value: t.switcherValue,
                callback: function(e) {
                    t.switcherValue = e;
                },
                expression: "switcherValue"
            }
        }) ], 1) : t.withBurger || t.withBack ? n("span", {
            staticClass: "header_spacer"
        }) : t._e() ]), t._v(" "), n("div", {
            staticClass: "contents"
        }, [ t._t("default") ], 2) ]);
    };
    aa._withStripped = !0;
    var sa = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof ia ? ia.options : ia) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Screen.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-2685ec00";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: aa,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-2685ec00_0", {
            source: "\n[dir=rtl] .screen_back[data-v-2685ec00] {\n  transform: scaleX(-1);\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Screen.vue", "Screen.vue" ],
                names: [],
                mappings: ";AA0FA;EACA,sBAAA;CCzFC",
                file: "Screen.vue",
                sourcesContent: [ null, "[dir=rtl] .screen_back {\n  transform: scaleX(-1);\n}\n" ]
            },
            media: void 0
        });
    });
    let ca, la, ua, da, pa, fa, ha;
    !function(t) {
        t.About = "About", t.AutoDisguiseDashboard = "Auto Disguise / Dashboard", t.AutoDisguiseSettings = "Auto Disguise / Settings", 
        t.Dashboard = "Dashboard", t.Location = "Location", t.Settings = "Settings", t.TabKillerDashboard = "Tab Killer / Dashboard", 
        t.TabKillerSettings = "Tab Killer / Settings";
    }(ca || (ca = {})), function(t) {
        t.About = "About", t.AutoDisguise = "Auto Disguise", t.Burger = "Burger", t.Dashboard = "Dashboard", 
        t.Location = "Location", t.Settings = "Settings", t.TabKiller = "Tab Killer";
    }(la || (la = {})), function(t) {
        t.TurnOn = "Turn On", t.TurnOff = "Turn Off", t.Location = "Location", t.AutoDisguise = "Auto Disguise", 
        t.TabKiller = "Tab Killer", t.GetBuy = "Get Buy", t.ChooseNew = "Choose a new", 
        t.Save = "Save", t.Keyboard = "Keyboard", t.ChangePage = "Change Page", t.View = "View", 
        t.Click = "Click", t.WebRtcBlocker = "Web RTC Blocker", t.TermsConditions = "Terms Conditions", 
        t.PrivacyPolicy = "Privacy Policy";
    }(ua || (ua = {})), function(t) {
        t.Settings = "Settings", t.Help = "Help", t.Feedback = "Feedback", t.About = "About", 
        t.RateUs = "Rate us", t.On = "On", t.Off = "Off", t.SafePageBlank = "blank", t.SafePageCustom = "custom", 
        t.SafePageTab = "tab";
    }(da || (da = {})), function(t) {
        t.Location = "location", t.Dashboard = "dashboard";
    }(pa || (pa = {})), function(t) {
        t.A = "a_do_more", t.B = "b_280", t.C = "c_190", t.D = "d_stream";
    }(fa || (fa = {})), function(t) {
        t.A = "a_location", t.B = "b_stream";
    }(ha || (ha = {}));
    const Aa = {
        components: {
            Screen: sa
        },
        props: {
            bgState: Object
        },
        data: () => ({}),
        computed: {
            productName: () => Yi.shortName,
            version: () => Yi.extensionVersion
        },
        created() {
            ta(Ui(ca.About));
        },
        methods: {
            termsAndConditionsClick() {
                ea(Qi("https://www.hidemyass.com/legal/vpn-terms", {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign
                })), ta(Mi(la.About, ua.TermsConditions));
            },
            privacyPolicyClick() {
                ea(Qi("https://www.hidemyass.com/legal/privacy", {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign
                })), ta(Mi(la.About, ua.PrivacyPolicy));
            }
        }
    };
    var ma = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("screen", {
            attrs: {
                "with-back": "",
                title: t.translate("about")
            }
        }, [ n("div", {
            staticClass: "about contents_secondary color_dark -bg"
        }, [ n("div", {
            staticClass: "about_contents"
        }, [ n("div", {
            staticClass: "about_logo g_margin_bottom_2"
        }, [ n("img", {
            staticClass: "about_logo_img g_margin_bottom_1",
            attrs: {
                src: "/img/donkey-about.png",
                width: "144",
                height: "153"
            }
        }) ]), t._v(" "), n("h1", {
            staticClass: "h1 g_margin_top__3 g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t" + t._s(t.productName) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "text -regular -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("version", {
            version: t.version
        })) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "about_links"
        }, [ n("button", {
            staticClass: "a g_margin_bottom_1",
            on: {
                click: t.termsAndConditionsClick
            }
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("terms_and_conditions")) + "\n\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "a",
            on: {
                click: t.privacyPolicyClick
            }
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("privacy_policy")) + "\n\t\t\t") ]) ]) ]) ]);
    };
    ma._withStripped = !0;
    var va = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Aa ? Aa.options : Aa) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/About.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-86d4ae06";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: ma,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-86d4ae06_0", {
            source: "\n.about[data-v-86d4ae06] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  padding: 50px 16px;\n}\n.about_logo[data-v-86d4ae06] {\n  width: 130px;\n  height: 130px;\n  background-color: rgba(255,255,255,0.15);\n  border-radius: 50%;\n  position: relative;\n  margin: 20px auto;\n}\n.about_logo_img[data-v-86d4ae06] {\n  position: absolute;\n  top: -14px;\n  left: -7px;\n}\n.about_links[data-v-86d4ae06] {\n  display: flex;\n  flex-direction: column;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/About.vue", "About.vue" ],
                names: [],
                mappings: ";AA4FA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,+BAAA;EACA,eAAA;EACA,mBAAA;CC3FC;AD6FD;EACA,aAAA;EACA,cAAA;EACA,yCAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;CC3FC;AD6FD;EACA,mBAAA;EACA,WAAA;EACA,WAAA;CC3FC;AD+FD;EACA,cAAA;EACA,uBAAA;CC7FC",
                file: "About.vue",
                sourcesContent: [ null, ".about {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  padding: 50px 16px;\n}\n.about_logo {\n  width: 130px;\n  height: 130px;\n  background-color: rgba(255,255,255,0.15);\n  border-radius: 50%;\n  position: relative;\n  margin: 20px auto;\n}\n.about_logo_img {\n  position: absolute;\n  top: -14px;\n  left: -7px;\n}\n.about_links {\n  display: flex;\n  flex-direction: column;\n}\n" ]
            },
            media: void 0
        });
    });
    let ga;
    !function(t) {
        t.IsAvailableChange = "proxy.isAvailable", t.StateChange = "proxy.stateChange", 
        t.SelectedLocationChange = "proxy.selectedLocationChange", t.Connect = "proxy.connect", 
        t.Disconnect = "proxy.disconnect", t.PacDataChange = "proxy.pacDataChange", t.CredentialsConfigInvalid = "proxy.credentialsConfigInvalid", 
        t.CredentialsConfigReceived = "proxy.credentialsConfigReceived", t.LocationsConfigReceived = "proxy.locationsConfigReceived", 
        t.AutoConnectEnabledChange = "proxy.autoConnectEnabledChange", t.AutoConnectSiteAdd = "proxy.autoConnectSiteAdd", 
        t.AutoConnectSiteRemove = "proxy.autoConnectSiteRemove", t.AutoConnectSiteChange = "proxy.autoConnectSiteChange", 
        t.DisableConflictingExtensions = "proxy.disableConflictingExtensions", t.GetState = "proxy.getState";
    }(ga || (ga = {}));
    const ba = {
        props: {
            icon: {
                type: String,
                required: !0
            }
        },
        data: () => ({
            isOpen: !1
        }),
        computed: {},
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    };
    var _a = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", [ n("button", {
            staticClass: "buttondrop btn -icon",
            class: {
                "-open": t.isOpen
            },
            on: {
                click: t.toggle
            }
        }, [ n("img", {
            attrs: {
                src: t.icon,
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), n("transition", {
            attrs: {
                name: "buttondrop"
            }
        }, [ t.isOpen ? n("div", {
            staticClass: "buttondrop_drop"
        }, [ n("div", {
            staticClass: "buttondrop_drop_overlay",
            on: {
                click: t.toggle
            }
        }), t._v(" "), n("div", {
            staticClass: "buttondrop_drop_contents block",
            on: {
                click: t.toggle
            }
        }, [ t._t("default") ], 2) ]) : t._e() ]) ], 1);
    };
    _a._withStripped = !0;
    var Ca = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof ba ? ba.options : ba) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/ButtonDrop.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-0c3146d0";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: _a,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-0c3146d0_0", {
            source: "\n.buttondrop_drop[data-v-0c3146d0] {\n  position: absolute;\n  z-index: 10001;\n  top: -8px;\n  right: -8px;\n  color: #132434;\n}\n.buttondrop_drop_overlay[data-v-0c3146d0] {\n  content: '';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: default;\n  background-color: rgba(19,36,52,0.3);\n}\n.buttondrop_drop_contents[data-v-0c3146d0] {\n  position: relative;\n  min-width: 138px;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n}\n.buttondrop-enter-active[data-v-0c3146d0],\n.buttondrop-leave-active[data-v-0c3146d0] {\n  transition: min-width 0.19s ease;\n}\n.buttondrop-enter-active .buttondrop_drop_overlay[data-v-0c3146d0],\n.buttondrop-leave-active .buttondrop_drop_overlay[data-v-0c3146d0],\n.buttondrop-enter-active .buttondrop_drop_contents[data-v-0c3146d0],\n.buttondrop-leave-active .buttondrop_drop_contents[data-v-0c3146d0] {\n  transition: opacity 0.19s ease;\n}\n.buttondrop-enter[data-v-0c3146d0],\n.buttondrop-leave-to[data-v-0c3146d0] {\n  min-width: 1px;\n}\n.buttondrop-enter .buttondrop_drop_overlay[data-v-0c3146d0],\n.buttondrop-leave-to .buttondrop_drop_overlay[data-v-0c3146d0],\n.buttondrop-enter .buttondrop_drop_contents[data-v-0c3146d0],\n.buttondrop-leave-to .buttondrop_drop_contents[data-v-0c3146d0] {\n  opacity: 0;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/ButtonDrop.vue", "ButtonDrop.vue" ],
                names: [],
                mappings: ";AA2CA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;CC1CC;AD4CD;EACA,YAAA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,gBAAA;EACA,qCAAA;CC1CC;AD6CD;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;CC3CC;ADiDD;;EAGA,iCAAA;CChDC;ADkDD;;;;EAEA,+BAAA;CC9CC;ADiDD;;EAEA,eAAA;CC/CC;ADiDD;;;;EAEA,WAAA;CC7CC",
                file: "ButtonDrop.vue",
                sourcesContent: [ null, ".buttondrop_drop {\n  position: absolute;\n  z-index: 10001;\n  top: -8px;\n  right: -8px;\n  color: #132434;\n}\n.buttondrop_drop_overlay {\n  content: '';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: default;\n  background-color: rgba(19,36,52,0.3);\n}\n.buttondrop_drop_contents {\n  position: relative;\n  min-width: 138px;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n}\n.buttondrop-enter-active,\n.buttondrop-leave-active {\n  transition: min-width 0.19s ease;\n}\n.buttondrop-enter-active .buttondrop_drop_overlay,\n.buttondrop-leave-active .buttondrop_drop_overlay,\n.buttondrop-enter-active .buttondrop_drop_contents,\n.buttondrop-leave-active .buttondrop_drop_contents {\n  transition: opacity 0.19s ease;\n}\n.buttondrop-enter,\n.buttondrop-leave-to {\n  min-width: 1px;\n}\n.buttondrop-enter .buttondrop_drop_overlay,\n.buttondrop-leave-to .buttondrop_drop_overlay,\n.buttondrop-enter .buttondrop_drop_contents,\n.buttondrop-leave-to .buttondrop_drop_contents {\n  opacity: 0;\n}\n" ]
            },
            media: void 0
        });
    });
    const ya = {
        props: {
            location: Object,
            short: {
                type: Boolean,
                default: !1
            },
            tag: {
                type: String,
                default: "div"
            }
        },
        data: () => ({}),
        computed: {
            isOptimal() {
                return !this.location || null === this.location.locationKey;
            }
        }
    };
    var wa = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return t.isOptimal ? n(t.tag, {
            tag: "component"
        }, [ t.short ? [ t._v("\n\t\t" + t._s(t.translate("auto")) + "\n\t") ] : [ t._v("\n\t\t" + t._s(t.translate("auto_location")) + "\n\t") ] ], 2) : n(t.tag, {
            tag: "component"
        }, [ t._v("\n\t" + t._s(t.location.locationDetails.countryName) + ", " + t._s(t.location.locationDetails.cityName) + "\n") ]);
    };
    wa._withStripped = !0;
    const xa = {
        components: {
            LocationName: function(t, e, n, r, o, i, a, s) {
                const c = ("function" == typeof ya ? ya.options : ya) || {};
                return c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/LocationName.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: wa,
                staticRenderFns: []
            })
        },
        props: {
            icon: {
                type: String,
                required: !1
            },
            location: Object,
            short: {
                type: Boolean,
                default: !1
            },
            tag: {
                type: String,
                default: "div"
            }
        },
        data: () => ({}),
        computed: {
            flagClass() {
                const t = this.location;
                return t && "string" == typeof t.locationKey && t.locationDetails ? `flag_${t.locationDetails.countryId}` : "flag_auto";
            },
            isOptimal() {
                return !this.location || null === this.location.locationKey;
            }
        }
    };
    var Ea = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n(t.tag, {
            tag: "component",
            staticClass: "location"
        }, [ n("div", {
            staticClass: "location_flag flag",
            class: t.flagClass
        }), t._v(" "), n("location-name", {
            staticClass: "location_name",
            attrs: {
                short: "",
                location: t.location
            }
        }), t._v(" "), t.icon ? n("div", {
            staticClass: "location_icon"
        }, [ n("img", {
            attrs: {
                src: t.icon,
                width: "20",
                height: "20"
            }
        }) ]) : t._e() ], 1);
    };
    Ea._withStripped = !0;
    var ka = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof xa ? xa.options : xa) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Location.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0;
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ea,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-7257510d_0", {
            source: "\n.location {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.location_flag {\n  margin-inline-end: 16px;\n  -webkit-margin-end: 16px;\n  -moz-margin-end: 16px;\n}\n.location_name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.location_icon {\n  margin-inline-start: 16px;\n  -webkit-margin-start: 16px;\n  -moz-margin-start: 16px;\n  flex: 1;\n  text-align: end;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Location.vue", "Location.vue" ],
                names: [],
                mappings: ";AAuDA;EACA,cAAA;EACA,oBAAA;EACA,iBAAA;CCtDC;ADwDD;ECtDE,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;CACvB;ADuDD;EACA,iBAAA;EACA,wBAAA;EACA,oBAAA;CCrDC;ADwDD;ECtDE,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;EDsD1B,QAAA;EACA,gBAAA;CCpDC",
                file: "Location.vue",
                sourcesContent: [ null, ".location {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.location_flag {\n  margin-inline-end: 16px;\n  -webkit-margin-end: 16px;\n  -moz-margin-end: 16px;\n}\n.location_name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.location_icon {\n  margin-inline-start: 16px;\n  -webkit-margin-start: 16px;\n  -moz-margin-start: 16px;\n  flex: 1;\n  text-align: end;\n}\n" ]
            },
            media: void 0
        });
    });
    const Sa = c("autoConnect"), Da = {
        components: {
            Location: ka,
            ButtonDrop: Ca,
            Screen: sa
        },
        props: {
            bgState: Object,
            currentTabHost: {
                type: String,
                required: !1,
                default: ""
            },
            popupState: Object,
            screenView: {
                type: String,
                required: !1
            }
        },
        computed: {
            autoConnectEnabled: {
                get() {
                    return this.bgState.proxy.autoConnectEnabled;
                },
                set(t) {
                    ta((t => zi(ga.AutoConnectEnabledChange, t))(t));
                }
            },
            autoConnectSites() {
                return this.bgState.proxy.autoConnectSites;
            },
            optimalLocation() {
                return this.bgState.proxy.locations.find(t => null === t.locationKey);
            }
        },
        created() {
            !1 === this.popupState.autoConnectTooltipDismissed && this.hideAutoConnectTooltip(), 
            this.screenView ? ta(Ui(this.screenView)) : Sa("screenView not available, not tracking view");
        },
        methods: {
            remove(t) {
                ta((t => zi(ga.AutoConnectSiteRemove, t))(t));
            }
        }
    };
    var Ba = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("screen", {
            attrs: {
                title: t.translate("auto_disguise"),
                "with-back": "",
                "with-switcher": ""
            },
            model: {
                value: t.autoConnectEnabled,
                callback: function(e) {
                    t.autoConnectEnabled = e;
                },
                expression: "autoConnectEnabled"
            }
        }, [ n("div", {
            staticClass: "autoconnect contents_main color_light -bg"
        }, [ n("div", {
            staticClass: "autoconnect_block text -secondary g_margin_bottom_1"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("automatically_disguise_my_location")) + "\n\t\t") ]), t._v(" "), n("div", {
            staticClass: "autoconnect_block -scroll"
        }, [ n("router-link", {
            staticClass: "autoconnect_add",
            attrs: {
                to: {
                    name: "autoConnectSite",
                    params: {
                        initialHost: t.currentTabHost,
                        initialLocation: t.optimalLocation
                    }
                },
                tag: "button",
                replace: ""
            }
        }, [ n("span", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("add_website")) + "\n\t\t\t\t") ]), t._v(" "), n("img", {
            attrs: {
                src: "/img/plus-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), t._l(t.autoConnectSites, function(e, r) {
            return n("div", {
                key: r,
                staticClass: "autoconnect_item block"
            }, [ n("div", {
                staticClass: "text -small -secondary g_margin_bottom__3"
            }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("when_i_visit_this_website")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
                staticClass: "autoconnect_item_host text color_dark -text g_margin_bottom_1"
            }, [ t._v("\n\t\t\t\t\t" + t._s(e.host) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
                staticClass: "text -small -secondary g_margin_bottom__3"
            }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("disguise_my_location_as")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
                staticClass: "text color_dark -text"
            }, [ n("location", {
                attrs: {
                    short: "",
                    location: e.location
                }
            }) ], 1), t._v(" "), n("button-drop", {
                staticClass: "autoconnect_item_more",
                attrs: {
                    icon: "/img/more-on-light.svg"
                }
            }, [ n("div", {
                staticClass: "list"
            }, [ n("button", {
                staticClass: "list_item text -regular",
                on: {
                    click: function(e) {
                        t.remove(r);
                    }
                }
            }, [ t._v("\n\t\t\t\t\t\t\t" + t._s(t.translate("remove")) + "\n\t\t\t\t\t\t") ]), t._v(" "), n("span", {
                staticClass: "list_separator"
            }), t._v(" "), n("router-link", {
                staticClass: "list_item text -regular",
                attrs: {
                    to: {
                        name: "autoConnectSite",
                        params: {
                            index: r,
                            initialHost: e.host,
                            initialLocation: e.location
                        }
                    },
                    tag: "button",
                    replace: ""
                }
            }, [ t._v("\n\t\t\t\t\t\t\t" + t._s(t.translate("edit")) + "\n\t\t\t\t\t\t") ]) ], 1) ]) ], 1);
        }) ], 2), t._v(" "), n("router-view", {
            attrs: {
                "bg-state": t.bgState
            }
        }) ], 1) ]);
    };
    Ba._withStripped = !0;
    var Ta = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Da ? Da.options : Da) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/AutoConnect.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-e1b1309e";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ba,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-e1b1309e_0", {
            source: "\n.autoconnect[data-v-e1b1309e] {\n  padding-top: 30px;\n}\n.autoconnect_block[data-v-e1b1309e] {\n  padding: 0 16px;\n}\n.autoconnect_block.-scroll[data-v-e1b1309e] {\n  overflow-x: hidden;\n  overflow-y: overlay;\n  flex: 1;\n  padding-bottom: 30px;\n}\n.autoconnect_add[data-v-e1b1309e] {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  border: 1px solid rgba(19,36,52,0.25);\n  border-radius: 10px;\n}\n.autoconnect_item[data-v-e1b1309e] {\n  margin-top: 20px;\n  position: relative;\n}\n.autoconnect_item_host[data-v-e1b1309e] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.autoconnect_item_more[data-v-e1b1309e] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n[dir=rtl] .autoconnect_item_more[data-v-e1b1309e] {\n  right: auto;\n  left: 8px;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/AutoConnect.vue", "AutoConnect.vue" ],
                names: [],
                mappings: ";AA0IA;EACA,kBAAA;CCzIC;AD2ID;EACA,gBAAA;CCzIC;AD2ID;EACA,mBAAA;EACA,oBAAA;EACA,QAAA;EACA,qBAAA;CCzIC;AD6ID;EACA,aAAA;EACA,YAAA;EACA,cAAA;EACA,+BAAA;EACA,oBAAA;EACA,gBAAA;EACA,sCAAA;EACA,oBAAA;CC3IC;AD8ID;EACA,iBAAA;EACA,mBAAA;CC5IC;AD8ID;EACA,oBAAA;EACA,iBAAA;EACA,wBAAA;CC5IC;AD+ID;EACA,mBAAA;EACA,SAAA;EACA,WAAA;CC7IC;AD+ID;EACA,YAAA;EACA,UAAA;CC7IC",
                file: "AutoConnect.vue",
                sourcesContent: [ null, ".autoconnect {\n  padding-top: 30px;\n}\n.autoconnect_block {\n  padding: 0 16px;\n}\n.autoconnect_block.-scroll {\n  overflow-x: hidden;\n  overflow-y: overlay;\n  flex: 1;\n  padding-bottom: 30px;\n}\n.autoconnect_add {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  border: 1px solid rgba(19,36,52,0.25);\n  border-radius: 10px;\n}\n.autoconnect_item {\n  margin-top: 20px;\n  position: relative;\n}\n.autoconnect_item_host {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.autoconnect_item_more {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n[dir=rtl] .autoconnect_item_more {\n  right: auto;\n  left: 8px;\n}\n" ]
            },
            media: void 0
        });
    });
    const Ka = {
        components: {
            Location: ka
        },
        props: {
            bgState: Object,
            popupState: Object,
            selectedLocation: {
                type: Object,
                required: !0
            },
            firstSeparator: {
                type: Boolean,
                required: !1,
                default: !1
            },
            lastSeparator: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        data: () => ({}),
        computed: {
            locations() {
                return [ ...this.bgState.proxy.locations ].sort((t, e) => t.locationDetails ? e.locationDetails ? t.locationDetails.countryName.localeCompare(e.locationDetails.countryName) : 1 : -1);
            }
        },
        methods: {
            isSelected(t) {
                return t.locationKey === this.selectedLocation.locationKey;
            },
            selectLocation(t) {
                this.$emit("select", t);
            }
        }
    };
    var Oa = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "locationList list"
        }, [ t.firstSeparator ? n("div", {
            staticClass: "locationList_separator"
        }) : t._e(), t._v(" "), t._l(t.locations, function(e, r) {
            return [ n("button", {
                key: e.fqdn,
                staticClass: "list_item",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(n) {
                        t.selectLocation(e);
                    }
                }
            }, [ n("location", {
                attrs: {
                    location: e,
                    icon: t.isSelected(e) ? "/img/tick-on-light.svg" : ""
                }
            }) ], 1), t._v(" "), t.lastSeparator || r < t.locations.length - 1 ? n("div", {
                key: e.fqdn + "_sep",
                staticClass: "list_separator"
            }) : t._e() ];
        }) ], 2);
    };
    Oa._withStripped = !0;
    var Fa = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Ka ? Ka.options : Ka) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/LocationList.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-727ef68b";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Oa,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-727ef68b_0", {
            source: "\n.locationList[data-v-727ef68b] {\n  flex: 1;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/LocationList.vue", "LocationList.vue" ],
                names: [],
                mappings: ";AAoFA;EACA,QAAA;CCnFC",
                file: "LocationList.vue",
                sourcesContent: [ null, ".locationList {\n  flex: 1;\n}\n" ]
            },
            media: void 0
        });
    });
    const $a = {
        components: {
            LocationList: Fa,
            Location: ka
        },
        directives: {
            autofocus: {
                inserted(t, e, n) {
                    t.focus(), n.context.hasIndex || t.select();
                }
            }
        },
        props: {
            bgState: Object,
            popupState: Object,
            index: {
                type: Number,
                required: !1,
                default: -1
            },
            initialHost: {
                type: String,
                required: !1,
                default: ""
            },
            initialLocation: {
                type: Object,
                required: !1,
                default: null
            }
        },
        data() {
            return {
                rawHost: this.initialHost,
                location: this.initialLocation,
                locationsOpen: !1
            };
        },
        computed: {
            hasIndex() {
                return this.index >= 0;
            },
            host() {
                try {
                    return new URL(this.hostWithProtocol).host;
                } catch (t) {
                    return "";
                }
            },
            hostValid() {
                return !!this.host && !this.host.endsWith(".") && !this.host.startsWith(".") && this.host.includes(".");
            },
            hostWithProtocol() {
                return /^[a-zA-Z]+:\/\/.*/.test(this.rawHost) ? this.rawHost : `https://${this.rawHost}`;
            }
        },
        methods: {
            closeLocations() {
                this.locationsOpen = !1;
            },
            selectLocation(t) {
                this.location = t;
            },
            submit() {
                this.hasIndex ? ta(((t, e, n) => zi(ga.AutoConnectSiteChange, {
                    index: t,
                    host: e,
                    location: n
                }))(this.index, this.host, this.location)) : ta(((t, e) => zi(ga.AutoConnectSiteAdd, {
                    host: t,
                    location: e
                }))(this.host, this.location));
                const t = this.location.locationKey || "auto";
                ta(Mi(la.AutoDisguise, ua.Save, t)), this.$router.replace("/autoConnect");
            },
            toggleLocations() {
                this.locationsOpen = !this.locationsOpen;
            }
        }
    };
    var La = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "site"
            }
        }, [ n("div", {
            staticClass: "site_wrap",
            on: {
                click: t.closeLocations
            }
        }, [ n("div", {
            staticClass: "site color_light -bg"
        }, [ n("form", {
            on: {
                submit: function(e) {
                    return e.preventDefault(), t.submit(e);
                }
            }
        }, [ n("div", {
            staticClass: "text -small -secondary g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("when_i_visit_this_website")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "g_margin_bottom_1"
        }, [ n("input", {
            directives: [ {
                name: "model",
                rawName: "v-model",
                value: t.rawHost,
                expression: "rawHost"
            }, {
                name: "autofocus",
                rawName: "v-autofocus"
            } ],
            staticClass: "site_input block",
            attrs: {
                type: "text"
            },
            domProps: {
                value: t.rawHost
            },
            on: {
                input: function(e) {
                    e.target.composing || (t.rawHost = e.target.value);
                }
            }
        }) ]), t._v(" "), n("div", {
            staticClass: "text -small -secondary g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("disguise_my_location_as")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "site_location_wrap g_margin_bottom_2"
        }, [ n("button", {
            staticClass: "site_location block",
            attrs: {
                type: "button"
            },
            on: {
                click: function(e) {
                    return e.stopPropagation(), t.toggleLocations(e);
                }
            }
        }, [ n("location", {
            attrs: {
                location: t.location,
                icon: "/img/arrow-down-on-white.svg"
            }
        }) ], 1), t._v(" "), n("transition", {
            attrs: {
                name: "siteLocations"
            }
        }, [ t.locationsOpen ? n("div", {
            staticClass: "site_location_list block"
        }, [ n("location-list", {
            attrs: {
                "bg-state": t.bgState,
                "popup-state": t.popupState,
                "selected-location": t.location
            },
            on: {
                select: t.selectLocation
            }
        }) ], 1) : t._e() ]) ], 1), t._v(" "), n("div", {
            staticClass: "site_buttons"
        }, [ n("button", {
            staticClass: "btn -primary -inline -low -small",
            attrs: {
                type: "submit",
                disabled: !t.hostValid
            }
        }, [ t._v("\n\t\t\t\t\t\t" + t._s(t.translate("save")) + "\n\t\t\t\t\t") ]), t._v(" "), n("router-link", {
            staticClass: "btn -secondary -inline -low -small",
            attrs: {
                to: "/autoConnect",
                tag: "button",
                replace: ""
            }
        }, [ t._v("\n\t\t\t\t\t\t" + t._s(t.translate("cancel")) + "\n\t\t\t\t\t") ]) ], 1) ]) ]) ]) ]);
    };
    La._withStripped = !0;
    var ja = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof $a ? $a.options : $a) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/AutoConnectSite.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-75793f4f";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: La,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-75793f4f_0", {
            source: "\n.site[data-v-75793f4f] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 30px 16px;\n  border-radius: 10px;\n  box-shadow: 0 10px 18px 0 rgba(19,36,52,0.1);\n}\n.site_wrap[data-v-75793f4f] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 70px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(19,36,52,0.3);\n  z-index: 10;\n}\n.site_input[data-v-75793f4f] {\n  width: 100%;\n}\n.site_location[data-v-75793f4f] {\n  width: 100%;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.site_location_list[data-v-75793f4f] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0;\n  max-height: 305px;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  z-index: 1;\n}\n.site_location_wrap[data-v-75793f4f] {\n  position: relative;\n}\n.site_buttons[data-v-75793f4f] {\n  display: flex;\n  justify-content: center;\n}\n.site_buttons .btn[data-v-75793f4f] {\n  min-width: 120px;\n  margin: 0;\n}\n.site_buttons .btn + .btn[data-v-75793f4f] {\n  margin-inline-start: 20px;\n  -webkit-margin-start: 20px;\n  -moz-margin-start: 20px;\n}\n.site-enter-active[data-v-75793f4f],\n.site-leave-active[data-v-75793f4f] {\n  transition: opacity 0.19s ease;\n}\n.site-enter-active .site[data-v-75793f4f],\n.site-leave-active .site[data-v-75793f4f] {\n  transition: opacity 0.19s ease, transform 0.19s ease;\n}\n.site-enter[data-v-75793f4f],\n.site-leave-to[data-v-75793f4f] {\n  opacity: 0;\n}\n.site-enter .site[data-v-75793f4f],\n.site-leave-to .site[data-v-75793f4f] {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.siteLocations-enter-active[data-v-75793f4f],\n.siteLocations-leave-active[data-v-75793f4f] {\n  transition: max-height 0.19s ease, opacity 0.19s ease;\n  overflow: hidden;\n}\n.siteLocations-enter[data-v-75793f4f],\n.siteLocations-leave-to[data-v-75793f4f] {\n  max-height: 50px;\n  opacity: 0;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/AutoConnectSite.vue", "AutoConnectSite.vue" ],
                names: [],
                mappings: ";AAkLA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,6CAAA;CCjLC;ADmLD;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,wBAAA;EACA,cAAA;EACA,uBAAA;EACA,+BAAA;EACA,YAAA;CCjLC;ADoLD;EACA,YAAA;CClLC;ADqLD;EACA,YAAA;EACA,eAAA;EACA,kBAAA;CCnLC;ADqLD;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;CCnLC;ADsLD;EACA,mBAAA;CCpLC;ADwLD;EACA,cAAA;EACA,wBAAA;CCtLC;ADwLD;EACA,iBAAA;EACA,UAAA;CCtLC;ADyLD;ECvLE,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;CACzB;AD2LD;;EAEA,+BAAA;CCzLC;AD0LD;;EACA,qDAAA;CCvLC;AD0LD;;EAEA,WAAA;CCxLC;ADyLD;;EACA,WAAA;EACA,6BAAA;CCtLC;AD0LD;;EAEA,sDAAA;EACA,iBAAA;CCxLC;AD0LD;;EAEA,iBAAA;EACA,WAAA;CCxLC",
                file: "AutoConnectSite.vue",
                sourcesContent: [ null, ".site {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 30px 16px;\n  border-radius: 10px;\n  box-shadow: 0 10px 18px 0 rgba(19,36,52,0.1);\n}\n.site_wrap {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 70px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(19,36,52,0.3);\n  z-index: 10;\n}\n.site_input {\n  width: 100%;\n}\n.site_location {\n  width: 100%;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.site_location_list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0;\n  max-height: 305px;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  z-index: 1;\n}\n.site_location_wrap {\n  position: relative;\n}\n.site_buttons {\n  display: flex;\n  justify-content: center;\n}\n.site_buttons .btn {\n  min-width: 120px;\n  margin: 0;\n}\n.site_buttons .btn + .btn {\n  margin-inline-start: 20px;\n  -webkit-margin-start: 20px;\n  -moz-margin-start: 20px;\n}\n.site-enter-active,\n.site-leave-active {\n  transition: opacity 0.19s ease;\n}\n.site-enter-active .site,\n.site-leave-active .site {\n  transition: opacity 0.19s ease, transform 0.19s ease;\n}\n.site-enter,\n.site-leave-to {\n  opacity: 0;\n}\n.site-enter .site,\n.site-leave-to .site {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.siteLocations-enter-active,\n.siteLocations-leave-active {\n  transition: max-height 0.19s ease, opacity 0.19s ease;\n  overflow: hidden;\n}\n.siteLocations-enter,\n.siteLocations-leave-to {\n  max-height: 50px;\n  opacity: 0;\n}\n" ]
            },
            media: void 0
        });
    });
    let Na, Ia, Pa, Ra;
    !function(t) {
        t.Connecting = "connecting", t.Connected = "connected", t.Disconnected = "disconnected", 
        t.Disconnecting = "disconnecting";
    }(Na || (Na = {})), function(t) {
        t.FixedServers = "fixed_servers", t.PacScript = "pac_script", t.Direct = "direct";
    }(Ia || (Ia = {})), function(t) {
        t.Ga = "ga", t.Burger = "burger";
    }(Pa || (Pa = {})), function(t) {
        t.ShortcutEnabledChange = "tabKiller.shortcutEnabledChange", t.ShortcutKeyChange = "tabKiller.shortcutKeyChange", 
        t.ShortcutKeyModifierChange = "tabKiller.shortcutKeyModifierChange", t.SafePageValueChange = "tabKiller.safePageValueChange", 
        t.SafePageTabDetailsChange = "tabKiller.safePageTabDetailsChange", t.GetState = "tabKiller.getState", 
        t.UpdateStateInTab = "tabKiller.updateStateInTab", t.Engage = "tabKiller.engage", 
        t.SaveTabs = "tabKiller.saveTabs", t.ClearSavedTabs = "tabKiller.clearSavedTabs";
    }(Ra || (Ra = {}));
    const Va = {
        props: {
            bgState: Object,
            short: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({}),
        computed: {
            autoConnectEnabled() {
                return this.bgState.proxy.autoConnectEnabled;
            },
            autoConnectNumSites() {
                return this.bgState.proxy.autoConnectSites.length;
            }
        }
    };
    var za = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return t.autoConnectEnabled ? n("span", [ t.short ? [ t._v("\n\t\t" + t._s(t.translate("auto_disguise_sites", {
            sites: t.autoConnectNumSites
        })) + "\n\t") ] : [ t._v("\n\t\t" + t._s(t.translate("on_auto_disguise_sites", {
            sites: t.autoConnectNumSites
        })) + "\n\t") ] ], 2) : n("span", [ t._v("\n\t" + t._s(t.translate("off")) + "\n") ]);
    };
    za._withStripped = !0;
    var qa = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Va ? Va.options : Va) || {};
        return c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/AutoConnectStatus.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: za,
        staticRenderFns: []
    });
    const Ma = {
        components: {},
        props: {
            bgState: Object,
            popupState: Object,
            autoConnectTooltipVisible: {
                type: Boolean,
                required: !0
            },
            switchTooltipVisible: {
                type: Boolean,
                required: !0
            },
            tabKillerTooltipVisible: {
                type: Boolean,
                required: !0
            }
        },
        data: () => ({}),
        computed: {
            tooltipVisible() {
                return this.autoConnectTooltipVisible || this.switchTooltipVisible || this.tabKillerTooltipVisible;
            }
        }
    };
    var Ua = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "bubble"
            }
        }, [ t.tooltipVisible ? n("div", {
            staticClass: "bubble onboarding"
        }, [ t.switchTooltipVisible ? n("div", {
            staticClass: "bubble_body -tip -tip-top-center onboarding_switch"
        }, [ n("div", {
            staticClass: "text -regular color_dark -text g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("disguise_yourself_now")) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("what_are_you_waiting_for")) + "\n\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "bubble_close",
            on: {
                click: t.hideSwitchTooltip
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]) : t._e(), t._v(" "), t.autoConnectTooltipVisible ? n("div", {
            staticClass: "bubble_body -tip -tip-bottom-left onboarding_autoDisguise"
        }, [ n("div", {
            staticClass: "text -regular color_dark -text g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("disguise_yourself_automatically")) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("too_lazy_to_click_the_on_button")) + "\n\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "bubble_close",
            on: {
                click: t.hideAutoConnectTooltip
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]) : t._e(), t._v(" "), t.tabKillerTooltipVisible ? n("div", {
            staticClass: "bubble_body -tip -tip-bottom-right onboarding_tabKiller"
        }, [ n("div", {
            staticClass: "text -regular color_dark -text g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("looking_at_forbidden_sites")) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("hey_no_judgements")) + "\n\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "bubble_close",
            on: {
                click: t.hideTabKillerTooltip
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]) : t._e() ]) : t._e() ]);
    };
    Ua._withStripped = !0;
    var Ha = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Ma ? Ma.options : Ma) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Onboarding.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-72247c0c";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ua,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-72247c0c_0", {
            source: "\n.onboarding_switch[data-v-72247c0c] {\n  top: 288px;\n}\n.onboarding_autoDisguise[data-v-72247c0c] {\n  bottom: 186px;\n}\n.onboarding_tabKiller[data-v-72247c0c] {\n  bottom: 186px;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Onboarding.vue", "Onboarding.vue" ],
                names: [],
                mappings: ";AAmFA;EACA,WAAA;CClFC;ADqFD;EACA,cAAA;CCnFC;ADsFD;EACA,cAAA;CCpFC",
                file: "Onboarding.vue",
                sourcesContent: [ null, ".onboarding_switch {\n  top: 288px;\n}\n.onboarding_autoDisguise {\n  bottom: 186px;\n}\n.onboarding_tabKiller {\n  bottom: 186px;\n}\n" ]
            },
            media: void 0
        });
    });
    function Ga(t, e, n) {
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
        return new Date(t).toLocaleDateString(e, r);
    }
    function Wa(t) {
        if (!isFinite(t)) return String(t);
        var e = "";
        t < 0 ? (e = "-", t = Math.abs(t)) : t = Number(t);
        var n = t % 60, r = [ Math.round(n) === n ? n : n.toFixed(3) ];
        return t < 60 ? r.unshift(0) : (t = Math.round((t - r[0]) / 60), r.unshift(t % 60), 
        t >= 60 && (t = Math.round((t - r[0]) / 60), r.unshift(t))), e + r.shift() + ":" + r.map(function(t) {
            return t < 10 ? "0" + String(t) : String(t);
        }).join(":");
    }
    function Ja(t, e, n) {
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
        return new Date(t).toLocaleTimeString(e, r);
    }
    var Xa = {
        date: function() {
            return Ga;
        },
        duration: function() {
            return Wa;
        },
        number: function(t) {
            var e = function(t, e, n) {
                var r = n && n.split(":") || [], o = {
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
                return new Intl.NumberFormat(e, o[r[0]] || {}).format(t);
            }.toString().replace("CURRENCY", JSON.stringify(t.currency || "USD")).match(/\(([^)]*)\)[^{]*{([\s\S]*)}/);
            return new Function(e[1], e[2]);
        },
        time: function() {
            return Ja;
        }
    };
    function Ya(t, e, n, r) {
        this.message = t, this.expected = e, this.found = n, this.location = r, this.name = "SyntaxError", 
        "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, Ya);
    }
    !function(t, e) {
        function n() {
            this.constructor = t;
        }
        n.prototype = e.prototype, t.prototype = new n();
    }(Ya, Error), Ya.buildMessage = function(t, e) {
        var n = {
            literal: function(t) {
                return '"' + o(t.text) + '"';
            },
            class: function(t) {
                var e, n = "";
                for (e = 0; e < t.parts.length; e++) n += t.parts[e] instanceof Array ? i(t.parts[e][0]) + "-" + i(t.parts[e][1]) : i(t.parts[e]);
                return "[" + (t.inverted ? "^" : "") + n + "]";
            },
            any: function(t) {
                return "any character";
            },
            end: function(t) {
                return "end of input";
            },
            other: function(t) {
                return t.description;
            }
        };
        function r(t) {
            return t.charCodeAt(0).toString(16).toUpperCase();
        }
        function o(t) {
            return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                return "\\x0" + r(t);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                return "\\x" + r(t);
            });
        }
        function i(t) {
            return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                return "\\x0" + r(t);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                return "\\x" + r(t);
            });
        }
        return "Expected " + function(t) {
            var e, r, o, i = new Array(t.length);
            for (e = 0; e < t.length; e++) i[e] = (o = t[e], n[o.type](o));
            if (i.sort(), i.length > 0) {
                for (e = 1, r = 1; e < i.length; e++) i[e - 1] !== i[e] && (i[r] = i[e], r++);
                i.length = r;
            }
            switch (i.length) {
              case 1:
                return i[0];

              case 2:
                return i[0] + " or " + i[1];

              default:
                return i.slice(0, -1).join(", ") + ", or " + i[i.length - 1];
            }
        }(t) + " but " + function(t) {
            return t ? '"' + o(t) + '"' : "end of input";
        }(e) + " found.";
    };
    var Qa = function(t, e) {
        e = void 0 !== e ? e : {};
        var n, r = {}, o = {
            start: Qt
        }, i = Qt, a = "#", s = Ht("#", !1), c = function() {
            return fe[0];
        }, l = function() {
            return {
                type: "octothorpe"
            };
        }, u = function(t) {
            return t.join("");
        }, d = "{", p = Ht("{", !1), f = "}", h = Ht("}", !1), A = function(t) {
            return {
                type: "argument",
                arg: t
            };
        }, m = ",", v = Ht(",", !1), g = "select", b = Ht("select", !1), _ = function(t, n) {
            return e.strict && fe.unshift(!1), n;
        }, C = function(t, n) {
            return e.strict && fe.shift(), {
                type: "select",
                arg: t,
                cases: n
            };
        }, y = "plural", w = Ht("plural", !1), x = "selectordinal", E = Ht("selectordinal", !1), k = function(t, e) {
            return fe.unshift(!0), e;
        }, S = function(t, n, r, o) {
            var i = ("selectordinal" === n ? e.ordinal : e.cardinal) || [ "zero", "one", "two", "few", "many", "other" ];
            return i && i.length && o.forEach(function(e) {
                if (isNaN(e.key) && i.indexOf(e.key) < 0) throw new Error("Invalid key `" + e.key + "` for argument `" + t + "`. Valid " + n + " keys for this locale are `" + i.join("`, `") + "`, and explicit keys like `=0`.");
            }), fe.shift(), {
                type: n,
                arg: t,
                offset: r || 0,
                cases: o
            };
        }, D = function(t, e, n) {
            return {
                type: "function",
                arg: t,
                key: e,
                param: n
            };
        }, B = Wt("identifier"), T = /^[^\t-\r \x85\u200E\u200F\u2028\u2029!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/, K = Gt([ [ "\t", "\r" ], " ", "", "‎", "‏", "\u2028", "\u2029", [ "!", "/" ], [ ":", "@" ], [ "[", "^" ], "`", [ "{", "~" ], [ "¡", "§" ], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", [ "‐", "‧" ], [ "‰", "‾" ], [ "⁁", "⁓" ], [ "⁕", "⁞" ], [ "←", "⑟" ], [ "─", "❵" ], [ "➔", "⯿" ], [ "⸀", "⹿" ], [ "、", "〃" ], [ "〈", "〠" ], "〰", "﴾", "﴿", "﹅", "﹆" ], !0, !1), O = function(t, e) {
            return {
                key: t,
                tokens: e
            };
        }, F = function(t) {
            return t;
        }, $ = Wt("plural offset"), L = "offset", j = Ht("offset", !1), N = ":", I = Ht(":", !1), P = function(t) {
            return t;
        }, R = "=", V = Ht("=", !1), z = "number", q = Ht("number", !1), M = "date", U = Ht("date", !1), H = "time", G = Ht("time", !1), W = "spellout", J = Ht("spellout", !1), X = "ordinal", Y = Ht("ordinal", !1), Q = "duration", Z = Ht("duration", !1), tt = function(t) {
            if (e.strict || /^\d/.test(t)) return !1;
            switch (t.toLowerCase()) {
              case "select":
              case "plural":
              case "selectordinal":
                return !1;

              default:
                return !0;
            }
        }, et = function(t) {
            return t;
        }, nt = function(t) {
            return !e.strict;
        }, rt = function(t) {
            return {
                tokens: t
            };
        }, ot = function(t) {
            return {
                tokens: [ t.join("") ]
            };
        }, it = Wt("a valid (strict) function parameter"), at = /^[^'{}]/, st = Gt([ "'", "{", "}" ], !0, !1), ct = function(t) {
            return t.join("");
        }, lt = "'", ut = Ht("'", !1), dt = function(t) {
            return t;
        }, pt = function(t) {
            return "{" + t.join("") + "}";
        }, ft = Wt("doubled apostrophe"), ht = "''", At = Ht("''", !1), mt = function() {
            return "'";
        }, vt = /^[^']/, gt = Gt([ "'" ], !0, !1), bt = "'{", _t = Ht("'{", !1), Ct = function(t) {
            return "{" + t.join("");
        }, yt = "'}", wt = Ht("'}", !1), xt = function(t) {
            return "}" + t.join("");
        }, Et = Wt("escaped string"), kt = "'#", St = Ht("'#", !1), Dt = function(t) {
            return "#" + t.join("");
        }, Bt = function(t) {
            return t[0];
        }, Tt = Wt("plain char"), Kt = /^[^{}#\0-\x08\x0E-\x1F\x7F]/, Ot = Gt([ "{", "}", "#", [ "\0", "\b" ], [ "", "" ], "" ], !0, !1), Ft = function(t) {
            return !fe[0];
        }, $t = function(t) {
            return t;
        }, Lt = Wt("integer"), jt = /^[0-9]/, Nt = Gt([ [ "0", "9" ] ], !1, !1), It = Wt("white space"), Pt = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/, Rt = Gt([ [ "\t", "\r" ], " ", "", "‎", "‏", "\u2028", "\u2029" ], !1, !1), Vt = 0, zt = [ {
            line: 1,
            column: 1
        } ], qt = 0, Mt = [], Ut = 0;
        if ("startRule" in e) {
            if (!(e.startRule in o)) throw new Error("Can't start parsing from rule \"" + e.startRule + '".');
            i = o[e.startRule];
        }
        function Ht(t, e) {
            return {
                type: "literal",
                text: t,
                ignoreCase: e
            };
        }
        function Gt(t, e, n) {
            return {
                type: "class",
                parts: t,
                inverted: e,
                ignoreCase: n
            };
        }
        function Wt(t) {
            return {
                type: "other",
                description: t
            };
        }
        function Jt(e) {
            var n, r = zt[e];
            if (r) return r;
            for (n = e - 1; !zt[n]; ) n--;
            for (r = {
                line: (r = zt[n]).line,
                column: r.column
            }; n < e; ) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
            return zt[e] = r, r;
        }
        function Xt(t, e) {
            var n = Jt(t), r = Jt(e);
            return {
                start: {
                    offset: t,
                    line: n.line,
                    column: n.column
                },
                end: {
                    offset: e,
                    line: r.line,
                    column: r.column
                }
            };
        }
        function Yt(t) {
            Vt < qt || (Vt > qt && (qt = Vt, Mt = []), Mt.push(t));
        }
        function Qt() {
            var t, e;
            for (t = [], e = Zt(); e !== r; ) t.push(e), e = Zt();
            return t;
        }
        function Zt() {
            var e, n, o;
            if ((e = function() {
                var e, n, o, i;
                return e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 0 === Ut && Yt(p)), 
                n !== r && le() !== r && (o = te()) !== r && le() !== r ? (125 === t.charCodeAt(Vt) ? (i = f, 
                Vt++) : (i = r, 0 === Ut && Yt(h)), i !== r ? e = n = A(o) : (Vt = e, e = r)) : (Vt = e, 
                e = r), e;
            }()) === r && (e = function() {
                var e, n, o, i, a, s, c, l, u;
                if (e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 0 === Ut && Yt(p)), 
                n !== r) if (le() !== r) if ((o = te()) !== r) if (le() !== r) if (44 === t.charCodeAt(Vt) ? (i = m, 
                Vt++) : (i = r, 0 === Ut && Yt(v)), i !== r) if (le() !== r) if (t.substr(Vt, 6) === g ? (a = g, 
                Vt += 6) : (a = r, 0 === Ut && Yt(b)), a !== r && (a = _(o, a)), a !== r) if ((a = le()) !== r) if (44 === t.charCodeAt(Vt) ? (s = m, 
                Vt++) : (s = r, 0 === Ut && Yt(v)), s !== r) if (le() !== r) {
                    if (c = [], (l = ee()) !== r) for (;l !== r; ) c.push(l), l = ee(); else c = r;
                    c !== r && (l = le()) !== r ? (125 === t.charCodeAt(Vt) ? (u = f, Vt++) : (u = r, 
                    0 === Ut && Yt(h)), u !== r ? e = n = C(o, c) : (Vt = e, e = r)) : (Vt = e, e = r);
                } else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, 
                e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, 
                e = r; else Vt = e, e = r;
                return e;
            }()) === r && (e = function() {
                var e, n, o, i, a, s, c, l, u, A, g;
                if (e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 0 === Ut && Yt(p)), 
                n !== r) if (le() !== r) if ((o = te()) !== r) if (le() !== r) if (44 === t.charCodeAt(Vt) ? (i = m, 
                Vt++) : (i = r, 0 === Ut && Yt(v)), i !== r) if (le() !== r) if (Vt, t.substr(Vt, 6) === y ? (s = y, 
                Vt += 6) : (s = r, 0 === Ut && Yt(w)), s === r && (t.substr(Vt, 13) === x ? (s = x, 
                Vt += 13) : (s = r, 0 === Ut && Yt(E))), s !== r && (s = k(o, s)), (a = s) !== r) if ((s = le()) !== r) if (44 === t.charCodeAt(Vt) ? (c = m, 
                Vt++) : (c = r, 0 === Ut && Yt(v)), c !== r) if (le() !== r) if ((l = function() {
                    var e, n, o, i;
                    return Ut++, e = Vt, le() !== r ? (t.substr(Vt, 6) === L ? (n = L, Vt += 6) : (n = r, 
                    0 === Ut && Yt(j)), n !== r && le() !== r ? (58 === t.charCodeAt(Vt) ? (o = N, Vt++) : (o = r, 
                    0 === Ut && Yt(I)), o !== r && le() !== r && (i = ce()) !== r && le() !== r ? e = P(i) : (Vt = e, 
                    e = r)) : (Vt = e, e = r)) : (Vt = e, e = r), Ut--, e === r && (r, 0 === Ut && Yt($)), 
                    e;
                }()) === r && (l = null), l !== r) {
                    if (u = [], (A = ne()) !== r) for (;A !== r; ) u.push(A), A = ne(); else u = r;
                    u !== r && (A = le()) !== r ? (125 === t.charCodeAt(Vt) ? (g = f, Vt++) : (g = r, 
                    0 === Ut && Yt(h)), g !== r ? e = n = S(o, a, l, u) : (Vt = e, e = r)) : (Vt = e, 
                    e = r);
                } else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, 
                e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, e = r; else Vt = e, 
                e = r; else Vt = e, e = r; else Vt = e, e = r;
                return e;
            }()) === r && (e = function() {
                var e, n, o, i, a, s, c;
                return e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 0 === Ut && Yt(p)), 
                n !== r && le() !== r && (o = te()) !== r && le() !== r ? (44 === t.charCodeAt(Vt) ? (i = m, 
                Vt++) : (i = r, 0 === Ut && Yt(v)), i !== r && le() !== r && (a = function() {
                    var e, n, o, i, a;
                    return t.substr(Vt, 6) === z ? (e = z, Vt += 6) : (e = r, 0 === Ut && Yt(q)), e === r && (t.substr(Vt, 4) === M ? (e = M, 
                    Vt += 4) : (e = r, 0 === Ut && Yt(U)), e === r && (t.substr(Vt, 4) === H ? (e = H, 
                    Vt += 4) : (e = r, 0 === Ut && Yt(G)), e === r && (t.substr(Vt, 8) === W ? (e = W, 
                    Vt += 8) : (e = r, 0 === Ut && Yt(J)), e === r && (t.substr(Vt, 7) === X ? (e = X, 
                    Vt += 7) : (e = r, 0 === Ut && Yt(Y)), e === r && (t.substr(Vt, 8) === Q ? (e = Q, 
                    Vt += 8) : (e = r, 0 === Ut && Yt(Z)), e === r && (e = Vt, n = Vt, Ut++, t.substr(Vt, 6) === g ? (o = g, 
                    Vt += 6) : (o = r, 0 === Ut && Yt(b)), Ut--, o === r ? n = void 0 : (Vt = n, n = r), 
                    n !== r ? (o = Vt, Ut++, t.substr(Vt, 6) === y ? (i = y, Vt += 6) : (i = r, 0 === Ut && Yt(w)), 
                    Ut--, i === r ? o = void 0 : (Vt = o, o = r), o !== r ? (i = Vt, Ut++, t.substr(Vt, 13) === x ? (a = x, 
                    Vt += 13) : (a = r, 0 === Ut && Yt(E)), Ut--, a === r ? i = void 0 : (Vt = i, i = r), 
                    i !== r && (a = te()) !== r && (tt(a) ? void 0 : r) !== r ? e = n = et(a) : (Vt = e, 
                    e = r)) : (Vt = e, e = r)) : (Vt = e, e = r))))))), e;
                }()) !== r && le() !== r ? ((s = function() {
                    var e, n, o, i;
                    if (e = Vt, le() !== r) if (44 === t.charCodeAt(Vt) ? (n = m, Vt++) : (n = r, 0 === Ut && Yt(v)), 
                    n !== r) {
                        for (o = [], i = Zt(); i !== r; ) o.push(i), i = Zt();
                        o !== r && (i = (i = nt(o)) ? void 0 : r) !== r ? e = rt(o) : (Vt = e, e = r);
                    } else Vt = e, e = r; else Vt = e, e = r;
                    if (e === r) if (e = Vt, le() !== r) if (44 === t.charCodeAt(Vt) ? (n = m, Vt++) : (n = r, 
                    0 === Ut && Yt(v)), n !== r) {
                        for (o = [], i = oe(); i !== r; ) o.push(i), i = oe();
                        o !== r ? e = ot(o) : (Vt = e, e = r);
                    } else Vt = e, e = r; else Vt = e, e = r;
                    return e;
                }()) === r && (s = null), s !== r ? (125 === t.charCodeAt(Vt) ? (c = f, Vt++) : (c = r, 
                0 === Ut && Yt(h)), c !== r ? e = n = D(o, a, s) : (Vt = e, e = r)) : (Vt = e, e = r)) : (Vt = e, 
                e = r)) : (Vt = e, e = r), e;
            }()) === r && (e = Vt, 35 === t.charCodeAt(Vt) ? (n = a, Vt++) : (n = r, 0 === Ut && Yt(s)), 
            n !== r && (o = (o = c()) ? void 0 : r) !== r ? e = n = l() : (Vt = e, e = r), e === r)) {
                if (e = Vt, n = [], (o = se()) !== r) for (;o !== r; ) n.push(o), o = se(); else n = r;
                n !== r && (n = u(n)), e = n;
            }
            return e;
        }
        function te() {
            var e, n, o;
            if (Ut++, e = Vt, n = [], T.test(t.charAt(Vt)) ? (o = t.charAt(Vt), Vt++) : (o = r, 
            0 === Ut && Yt(K)), o !== r) for (;o !== r; ) n.push(o), T.test(t.charAt(Vt)) ? (o = t.charAt(Vt), 
            Vt++) : (o = r, 0 === Ut && Yt(K)); else n = r;
            return e = n !== r ? t.substring(e, Vt) : n, Ut--, e === r && (n = r, 0 === Ut && Yt(B)), 
            e;
        }
        function ee() {
            var t, e, n;
            return t = Vt, le() !== r && (e = te()) !== r && le() !== r && (n = re()) !== r ? t = O(e, n) : (Vt = t, 
            t = r), t;
        }
        function ne() {
            var e, n, o;
            return e = Vt, le() !== r && (n = function() {
                var e, n, o;
                return (e = te()) === r && (e = Vt, 61 === t.charCodeAt(Vt) ? (n = R, Vt++) : (n = r, 
                0 === Ut && Yt(V)), n !== r && (o = ce()) !== r ? e = n = P(o) : (Vt = e, e = r)), 
                e;
            }()) !== r && le() !== r && (o = re()) !== r ? e = O(n, o) : (Vt = e, e = r), e;
        }
        function re() {
            var e, n, o, i, a, s;
            if (e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 0 === Ut && Yt(p)), 
            n !== r) if (o = Vt, (i = le()) !== r ? (a = Vt, Ut++, 123 === t.charCodeAt(Vt) ? (s = d, 
            Vt++) : (s = r, 0 === Ut && Yt(p)), Ut--, s !== r ? (Vt = a, a = void 0) : a = r, 
            a !== r ? o = i = [ i, a ] : (Vt = o, o = r)) : (Vt = o, o = r), o === r && (o = null), 
            o !== r) {
                for (i = [], a = Zt(); a !== r; ) i.push(a), a = Zt();
                i !== r && (a = le()) !== r ? (125 === t.charCodeAt(Vt) ? (s = f, Vt++) : (s = r, 
                0 === Ut && Yt(h)), s !== r ? e = n = F(i) : (Vt = e, e = r)) : (Vt = e, e = r);
            } else Vt = e, e = r; else Vt = e, e = r;
            return e;
        }
        function oe() {
            var e, n, o, i;
            if (Ut++, e = Vt, n = [], at.test(t.charAt(Vt)) ? (o = t.charAt(Vt), Vt++) : (o = r, 
            0 === Ut && Yt(st)), o !== r) for (;o !== r; ) n.push(o), at.test(t.charAt(Vt)) ? (o = t.charAt(Vt), 
            Vt++) : (o = r, 0 === Ut && Yt(st)); else n = r;
            if (n !== r && (n = ct(n)), (e = n) === r && (e = ie()) === r && (e = Vt, 39 === t.charCodeAt(Vt) ? (n = lt, 
            Vt++) : (n = r, 0 === Ut && Yt(ut)), n !== r && (o = ae()) !== r ? (39 === t.charCodeAt(Vt) ? (i = lt, 
            Vt++) : (i = r, 0 === Ut && Yt(ut)), i !== r ? e = n = dt(o) : (Vt = e, e = r)) : (Vt = e, 
            e = r), e === r)) if (e = Vt, 123 === t.charCodeAt(Vt) ? (n = d, Vt++) : (n = r, 
            0 === Ut && Yt(p)), n !== r) {
                for (o = [], i = oe(); i !== r; ) o.push(i), i = oe();
                o !== r ? (125 === t.charCodeAt(Vt) ? (i = f, Vt++) : (i = r, 0 === Ut && Yt(h)), 
                i !== r ? e = n = pt(o) : (Vt = e, e = r)) : (Vt = e, e = r);
            } else Vt = e, e = r;
            return Ut--, e === r && (n = r, 0 === Ut && Yt(it)), e;
        }
        function ie() {
            var e, n;
            return Ut++, t.substr(Vt, 2) === ht ? (n = ht, Vt += 2) : (n = r, 0 === Ut && Yt(At)), 
            n !== r && (n = mt()), Ut--, (e = n) === r && (n = r, 0 === Ut && Yt(ft)), e;
        }
        function ae() {
            var e, n, o;
            if ((e = ie()) === r) {
                if (e = Vt, n = [], vt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), Vt++) : (o = r, 0 === Ut && Yt(gt)), 
                o !== r) for (;o !== r; ) n.push(o), vt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), 
                Vt++) : (o = r, 0 === Ut && Yt(gt)); else n = r;
                n !== r && (n = u(n)), e = n;
            }
            return e;
        }
        function se() {
            var e, n;
            return (e = ie()) === r && (e = function() {
                var e, n, o, i, a, s;
                if (Ut++, (e = function() {
                    var e, n, o, i;
                    if (e = Vt, t.substr(Vt, 2) === bt ? (n = bt, Vt += 2) : (n = r, 0 === Ut && Yt(_t)), 
                    n !== r) {
                        for (o = [], i = ae(); i !== r; ) o.push(i), i = ae();
                        o !== r ? (39 === t.charCodeAt(Vt) ? (i = lt, Vt++) : (i = r, 0 === Ut && Yt(ut)), 
                        i !== r ? e = n = Ct(o) : (Vt = e, e = r)) : (Vt = e, e = r);
                    } else Vt = e, e = r;
                    if (e === r) if (e = Vt, t.substr(Vt, 2) === yt ? (n = yt, Vt += 2) : (n = r, 0 === Ut && Yt(wt)), 
                    n !== r) {
                        for (o = [], i = ae(); i !== r; ) o.push(i), i = ae();
                        o !== r ? (39 === t.charCodeAt(Vt) ? (i = lt, Vt++) : (i = r, 0 === Ut && Yt(ut)), 
                        i !== r ? e = n = xt(o) : (Vt = e, e = r)) : (Vt = e, e = r);
                    } else Vt = e, e = r;
                    return e;
                }()) === r) {
                    if (e = Vt, n = Vt, o = Vt, t.substr(Vt, 2) === kt ? (i = kt, Vt += 2) : (i = r, 
                    0 === Ut && Yt(St)), i !== r) {
                        for (a = [], s = ae(); s !== r; ) a.push(s), s = ae();
                        a !== r ? (39 === t.charCodeAt(Vt) ? (s = lt, Vt++) : (s = r, 0 === Ut && Yt(ut)), 
                        s !== r ? o = i = Dt(a) : (Vt = o, o = r)) : (Vt = o, o = r);
                    } else Vt = o, o = r;
                    o !== r && (i = (i = c()) ? void 0 : r) !== r ? n = o = [ o, i ] : (Vt = n, n = r), 
                    n !== r && (n = Bt(n)), (e = n) === r && (39 === t.charCodeAt(Vt) ? (e = lt, Vt++) : (e = r, 
                    0 === Ut && Yt(ut)));
                }
                return Ut--, e === r && (n = r, 0 === Ut && Yt(Et)), e;
            }()) === r && (e = Vt, 35 === t.charCodeAt(Vt) ? (n = a, Vt++) : (n = r, 0 === Ut && Yt(s)), 
            n !== r && (Ft(n) ? void 0 : r) !== r ? e = n = $t(n) : (Vt = e, e = r), e === r && (e = function() {
                var e;
                return Ut++, Kt.test(t.charAt(Vt)) ? (e = t.charAt(Vt), Vt++) : (e = r, 0 === Ut && Yt(Ot)), 
                Ut--, e === r && 0 === Ut && Yt(Tt), e;
            }())), e;
        }
        function ce() {
            var e, n, o;
            if (Ut++, e = Vt, n = [], jt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), Vt++) : (o = r, 
            0 === Ut && Yt(Nt)), o !== r) for (;o !== r; ) n.push(o), jt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), 
            Vt++) : (o = r, 0 === Ut && Yt(Nt)); else n = r;
            return e = n !== r ? t.substring(e, Vt) : n, Ut--, e === r && (n = r, 0 === Ut && Yt(Lt)), 
            e;
        }
        function le() {
            var e, n, o;
            for (Ut++, e = Vt, n = [], Pt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), Vt++) : (o = r, 
            0 === Ut && Yt(Rt)); o !== r; ) n.push(o), Pt.test(t.charAt(Vt)) ? (o = t.charAt(Vt), 
            Vt++) : (o = r, 0 === Ut && Yt(Rt));
            return e = n !== r ? t.substring(e, Vt) : n, Ut--, e === r && (n = r, 0 === Ut && Yt(It)), 
            e;
        }
        var ue, de, pe, fe = [ !1 ];
        if ((n = i()) !== r && Vt === t.length) return n;
        throw n !== r && Vt < t.length && Yt({
            type: "end"
        }), ue = Mt, de = qt < t.length ? t.charAt(qt) : null, pe = qt < t.length ? Xt(qt, qt + 1) : Xt(qt, qt), 
        new Ya(Ya.buildMessage(ue, de), ue, de, pe);
    }, Za = e(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.propname = function(t, e) {
            if (/^[A-Z_$][0-9A-Z_$]*$/i.test(t) && !n[t]) return e ? `${e}.${t}` : t;
            {
                const n = JSON.stringify(t);
                return e ? e + `[${n}]` : n;
            }
        }, e.funcname = function(t) {
            const e = t.trim().replace(/\W+/g, "_");
            return n[e] || r[e] || /^\d/.test(e) ? "_" + e : e;
        }, e.bidiMarkText = function(t, e) {
            const n = o.test(e), r = JSON.stringify(n ? "‏" : "‎");
            return `${r} + ${t} + ${r}`;
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
        }, o = new RegExp("^" + [ "ar", "ckb", "fa", "he", "ks($|[^bfh])", "lrc", "mzn", "pa-Arab", "ps", "ug", "ur", "uz-Arab", "yi" ].join("|^"));
    });
    t(Za), Za.propname, Za.funcname, Za.bidiMarkText;
    var ts = e(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.default = class {
            constructor(t) {
                this.mf = t, this.lc = null, this.locales = {}, this.runtime = {}, this.formatters = {};
            }
            compile(t, e, n) {
                if ("object" != typeof t) {
                    this.lc = e;
                    const r = n[e] || {
                        cardinal: [],
                        ordinal: []
                    };
                    return r.strict = !!this.mf.strictNumberSign, `function(d) { return ${Qa(t, r).map(t => this.token(t)).join(" + ") || '""'}; }`;
                }
                {
                    const i = {};
                    for (var r in t) {
                        var o = n.hasOwnProperty(r) ? r : e;
                        i[r] = this.compile(t[r], o, n);
                    }
                    return i;
                }
            }
            cases(t, e) {
                let n = "select" === t.type || !this.mf.hasCustomPluralFuncs;
                const r = t.cases.map(({key: t, tokens: r}) => {
                    "other" === t && (n = !1);
                    const o = r.map(t => this.token(t, e));
                    return (0, Za.propname)(t) + ": " + (o.join(" + ") || '""');
                });
                if (n) throw new Error("No 'other' form found in " + JSON.stringify(t));
                return `{ ${r.join(", ")} }`;
            }
            token(t, e) {
                if ("string" == typeof t) return JSON.stringify(t);
                let n, r = [ (0, Za.propname)(t.arg, "d") ];
                switch (t.type) {
                  case "argument":
                    return this.mf.bidiSupport ? (0, Za.bidiMarkText)(r[0], this.lc) : r[0];

                  case "select":
                    n = "select", e && this.mf.strictNumberSign && (e = null), r.push(this.cases(t, e)), 
                    this.runtime.select = !0;
                    break;

                  case "selectordinal":
                    n = "plural", r.push(0, (0, Za.funcname)(this.lc), this.cases(t, t), 1), this.locales[this.lc] = !0, 
                    this.runtime.plural = !0;
                    break;

                  case "plural":
                    n = "plural", r.push(t.offset || 0, (0, Za.funcname)(this.lc), this.cases(t, t)), 
                    this.locales[this.lc] = !0, this.runtime.plural = !0;
                    break;

                  case "function":
                    if (!(t.key in this.mf.fmt) && t.key in this.mf.constructor.formatters) {
                        const e = this.mf.constructor.formatters[t.key];
                        this.mf.fmt[t.key] = e(this.mf);
                    }
                    if (!this.mf.fmt[t.key]) throw new Error(`Formatting function ${JSON.stringify(t.key)} not found!`);
                    if (r.push(JSON.stringify(this.lc)), t.param) {
                        e && this.mf.strictNumberSign && (e = null);
                        const n = t.param.tokens.map(t => this.token(t, e));
                        r.push("(" + (n.join(" + ") || '""') + ").trim()");
                    }
                    n = (0, Za.propname)(t.key, "fmt"), this.formatters[t.key] = !0;
                    break;

                  case "octothorpe":
                    if (!e) return '"#"';
                    n = "number", r = [ (0, Za.propname)(e.arg, "d"), JSON.stringify(e.arg) ], e.offset && r.push(e.offset), 
                    this.runtime.number = !0;
                }
                if (!n) throw new Error("Parser error for token " + JSON.stringify(t));
                return `${n}(${r.join(", ")})`;
            }
        };
    });
    t(ts);
    var es = e(function(t, e) {
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
        }, t.exports = n;
    }), ns = e(function(t, e) {
        var n;
        n = {
            af: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ak: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            am: function(t, e) {
                return e ? "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            ar: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t && n[0].slice(-2);
                return e ? "other" : 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : r >= 3 && r <= 10 ? "few" : r >= 11 && r <= 99 ? "many" : "other";
            },
            ars: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t && n[0].slice(-2);
                return e ? "other" : 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : r >= 3 && r <= 10 ? "few" : r >= 11 && r <= 99 ? "many" : "other";
            },
            as: function(t, e) {
                return e ? 1 == t || 5 == t || 7 == t || 8 == t || 9 == t || 10 == t ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : 6 == t ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            asa: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ast: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            az: function(t, e) {
                var n = String(t).split(".")[0], r = n.slice(-1), o = n.slice(-2), i = n.slice(-3);
                return e ? 1 == r || 2 == r || 5 == r || 7 == r || 8 == r || 20 == o || 50 == o || 70 == o || 80 == o ? "one" : 3 == r || 4 == r || 100 == i || 200 == i || 300 == i || 400 == i || 500 == i || 600 == i || 700 == i || 800 == i || 900 == i ? "few" : 0 == n || 6 == r || 40 == o || 60 == o || 90 == o ? "many" : "other" : 1 == t ? "one" : "other";
            },
            be: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t, o = r && n[0].slice(-1), i = r && n[0].slice(-2);
                return e ? 2 != o && 3 != o || 12 == i || 13 == i ? "other" : "few" : 1 == o && 11 != i ? "one" : o >= 2 && o <= 4 && (i < 12 || i > 14) ? "few" : r && 0 == o || o >= 5 && o <= 9 || i >= 11 && i <= 14 ? "many" : "other";
            },
            bem: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            bez: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            bg: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            bh: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            bm: function(t, e) {
                return "other";
            },
            bn: function(t, e) {
                return e ? 1 == t || 5 == t || 7 == t || 8 == t || 9 == t || 10 == t ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : 6 == t ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            bo: function(t, e) {
                return "other";
            },
            br: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t, o = r && n[0].slice(-1), i = r && n[0].slice(-2), a = r && n[0].slice(-6);
                return e ? "other" : 1 == o && 11 != i && 71 != i && 91 != i ? "one" : 2 == o && 12 != i && 72 != i && 92 != i ? "two" : (3 == o || 4 == o || 9 == o) && (i < 10 || i > 19) && (i < 70 || i > 79) && (i < 90 || i > 99) ? "few" : 0 != t && r && 0 == a ? "many" : "other";
            },
            brx: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            bs: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = r.slice(-2), c = o.slice(-1), l = o.slice(-2);
                return e ? "other" : i && 1 == a && 11 != s || 1 == c && 11 != l ? "one" : i && a >= 2 && a <= 4 && (s < 12 || s > 14) || c >= 2 && c <= 4 && (l < 12 || l > 14) ? "few" : "other";
            },
            ca: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? 1 == t || 3 == t ? "one" : 2 == t ? "two" : 4 == t ? "few" : "other" : 1 == t && n ? "one" : "other";
            },
            ce: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            cgg: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            chr: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ckb: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            cs: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1];
                return e ? "other" : 1 == t && o ? "one" : r >= 2 && r <= 4 && o ? "few" : o ? "other" : "many";
            },
            cy: function(t, e) {
                return e ? 0 == t || 7 == t || 8 == t || 9 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : 3 == t || 4 == t ? "few" : 5 == t || 6 == t ? "many" : "other" : 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : 3 == t ? "few" : 6 == t ? "many" : "other";
            },
            da: function(t, e) {
                var n = String(t).split("."), r = n[0], o = Number(n[0]) == t;
                return e ? "other" : 1 != t && (o || 0 != r && 1 != r) ? "other" : "one";
            },
            de: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            dsb: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-2), s = o.slice(-2);
                return e ? "other" : i && 1 == a || 1 == s ? "one" : i && 2 == a || 2 == s ? "two" : i && (3 == a || 4 == a) || 3 == s || 4 == s ? "few" : "other";
            },
            dv: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            dz: function(t, e) {
                return "other";
            },
            ee: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            el: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            en: function(t, e) {
                var n = String(t).split("."), r = !n[1], o = Number(n[0]) == t, i = o && n[0].slice(-1), a = o && n[0].slice(-2);
                return e ? 1 == i && 11 != a ? "one" : 2 == i && 12 != a ? "two" : 3 == i && 13 != a ? "few" : "other" : 1 == t && r ? "one" : "other";
            },
            eo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            es: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            et: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            eu: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            fa: function(t, e) {
                return e ? "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            ff: function(t, e) {
                return e ? "other" : t >= 0 && t < 2 ? "one" : "other";
            },
            fi: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            fil: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = o.slice(-1);
                return e ? 1 == t ? "one" : "other" : i && (1 == r || 2 == r || 3 == r) || i && 4 != a && 6 != a && 9 != a || !i && 4 != s && 6 != s && 9 != s ? "one" : "other";
            },
            fo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            fr: function(t, e) {
                return e ? 1 == t ? "one" : "other" : t >= 0 && t < 2 ? "one" : "other";
            },
            fur: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            fy: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            ga: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? 1 == t ? "one" : "other" : 1 == t ? "one" : 2 == t ? "two" : r && t >= 3 && t <= 6 ? "few" : r && t >= 7 && t <= 10 ? "many" : "other";
            },
            gd: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? 1 == t || 11 == t ? "one" : 2 == t || 12 == t ? "two" : 3 == t || 13 == t ? "few" : "other" : 1 == t || 11 == t ? "one" : 2 == t || 12 == t ? "two" : r && t >= 3 && t <= 10 || r && t >= 13 && t <= 19 ? "few" : "other";
            },
            gl: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            gsw: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            gu: function(t, e) {
                return e ? 1 == t ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : 6 == t ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            guw: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            gv: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = r.slice(-1), a = r.slice(-2);
                return e ? "other" : o && 1 == i ? "one" : o && 2 == i ? "two" : !o || 0 != a && 20 != a && 40 != a && 60 != a && 80 != a ? o ? "other" : "many" : "few";
            },
            ha: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            haw: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            he: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = Number(n[0]) == t, a = i && n[0].slice(-1);
                return e ? "other" : 1 == t && o ? "one" : 2 == r && o ? "two" : o && (t < 0 || t > 10) && i && 0 == a ? "many" : "other";
            },
            hi: function(t, e) {
                return e ? 1 == t ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : 6 == t ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            hr: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = r.slice(-2), c = o.slice(-1), l = o.slice(-2);
                return e ? "other" : i && 1 == a && 11 != s || 1 == c && 11 != l ? "one" : i && a >= 2 && a <= 4 && (s < 12 || s > 14) || c >= 2 && c <= 4 && (l < 12 || l > 14) ? "few" : "other";
            },
            hsb: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-2), s = o.slice(-2);
                return e ? "other" : i && 1 == a || 1 == s ? "one" : i && 2 == a || 2 == s ? "two" : i && (3 == a || 4 == a) || 3 == s || 4 == s ? "few" : "other";
            },
            hu: function(t, e) {
                return e ? 1 == t || 5 == t ? "one" : "other" : 1 == t ? "one" : "other";
            },
            hy: function(t, e) {
                return e ? 1 == t ? "one" : "other" : t >= 0 && t < 2 ? "one" : "other";
            },
            ia: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            id: function(t, e) {
                return "other";
            },
            ig: function(t, e) {
                return "other";
            },
            ii: function(t, e) {
                return "other";
            },
            in: function(t, e) {
                return "other";
            },
            io: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            is: function(t, e) {
                var n = String(t).split("."), r = n[0], o = Number(n[0]) == t, i = r.slice(-1), a = r.slice(-2);
                return e ? "other" : o && 1 == i && 11 != a || !o ? "one" : "other";
            },
            it: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? 11 == t || 8 == t || 80 == t || 800 == t ? "many" : "other" : 1 == t && n ? "one" : "other";
            },
            iu: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            iw: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = Number(n[0]) == t, a = i && n[0].slice(-1);
                return e ? "other" : 1 == t && o ? "one" : 2 == r && o ? "two" : o && (t < 0 || t > 10) && i && 0 == a ? "many" : "other";
            },
            ja: function(t, e) {
                return "other";
            },
            jbo: function(t, e) {
                return "other";
            },
            jgo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ji: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            jmc: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            jv: function(t, e) {
                return "other";
            },
            jw: function(t, e) {
                return "other";
            },
            ka: function(t, e) {
                var n = String(t).split(".")[0], r = n.slice(-2);
                return e ? 1 == n ? "one" : 0 == n || r >= 2 && r <= 20 || 40 == r || 60 == r || 80 == r ? "many" : "other" : 1 == t ? "one" : "other";
            },
            kab: function(t, e) {
                return e ? "other" : t >= 0 && t < 2 ? "one" : "other";
            },
            kaj: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            kcg: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            kde: function(t, e) {
                return "other";
            },
            kea: function(t, e) {
                return "other";
            },
            kk: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t, o = r && n[0].slice(-1);
                return e ? 6 == o || 9 == o || r && 0 == o && 0 != t ? "many" : "other" : 1 == t ? "one" : "other";
            },
            kkj: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            kl: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            km: function(t, e) {
                return "other";
            },
            kn: function(t, e) {
                return e ? "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            ko: function(t, e) {
                return "other";
            },
            ks: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ksb: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ksh: function(t, e) {
                return e ? "other" : 0 == t ? "zero" : 1 == t ? "one" : "other";
            },
            ku: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            kw: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            ky: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            lag: function(t, e) {
                var n = String(t).split(".")[0];
                return e ? "other" : 0 == t ? "zero" : 0 != n && 1 != n || 0 == t ? "other" : "one";
            },
            lb: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            lg: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            lkt: function(t, e) {
                return "other";
            },
            ln: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            lo: function(t, e) {
                return e && 1 == t ? "one" : "other";
            },
            lt: function(t, e) {
                var n = String(t).split("."), r = n[1] || "", o = Number(n[0]) == t, i = o && n[0].slice(-1), a = o && n[0].slice(-2);
                return e ? "other" : 1 == i && (a < 11 || a > 19) ? "one" : i >= 2 && i <= 9 && (a < 11 || a > 19) ? "few" : 0 != r ? "many" : "other";
            },
            lv: function(t, e) {
                var n = String(t).split("."), r = n[1] || "", o = r.length, i = Number(n[0]) == t, a = i && n[0].slice(-1), s = i && n[0].slice(-2), c = r.slice(-2), l = r.slice(-1);
                return e ? "other" : i && 0 == a || s >= 11 && s <= 19 || 2 == o && c >= 11 && c <= 19 ? "zero" : 1 == a && 11 != s || 2 == o && 1 == l && 11 != c || 2 != o && 1 == l ? "one" : "other";
            },
            mas: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            mg: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            mgo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            mk: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = r.slice(-2), c = o.slice(-1), l = o.slice(-2);
                return e ? 1 == a && 11 != s ? "one" : 2 == a && 12 != s ? "two" : 7 != a && 8 != a || 17 == s || 18 == s ? "other" : "many" : i && 1 == a && 11 != s || 1 == c && 11 != l ? "one" : "other";
            },
            ml: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            mn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            mo: function(t, e) {
                var n = String(t).split("."), r = !n[1], o = Number(n[0]) == t && n[0].slice(-2);
                return e ? 1 == t ? "one" : "other" : 1 == t && r ? "one" : !r || 0 == t || 1 != t && o >= 1 && o <= 19 ? "few" : "other";
            },
            mr: function(t, e) {
                return e ? 1 == t ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : "other" : t >= 0 && t <= 1 ? "one" : "other";
            },
            ms: function(t, e) {
                return e && 1 == t ? "one" : "other";
            },
            mt: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t && n[0].slice(-2);
                return e ? "other" : 1 == t ? "one" : 0 == t || r >= 2 && r <= 10 ? "few" : r >= 11 && r <= 19 ? "many" : "other";
            },
            my: function(t, e) {
                return "other";
            },
            nah: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            naq: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            nb: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            nd: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ne: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? r && t >= 1 && t <= 4 ? "one" : "other" : 1 == t ? "one" : "other";
            },
            nl: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            nn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            nnh: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            no: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            nqo: function(t, e) {
                return "other";
            },
            nr: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            nso: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            ny: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            nyn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            om: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            or: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? 1 == t || 5 == t || r && t >= 7 && t <= 9 ? "one" : 2 == t || 3 == t ? "two" : 4 == t ? "few" : 6 == t ? "many" : "other" : 1 == t ? "one" : "other";
            },
            os: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            pa: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            pap: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            pl: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = r.slice(-1), a = r.slice(-2);
                return e ? "other" : 1 == t && o ? "one" : o && i >= 2 && i <= 4 && (a < 12 || a > 14) ? "few" : o && 1 != r && (0 == i || 1 == i) || o && i >= 5 && i <= 9 || o && a >= 12 && a <= 14 ? "many" : "other";
            },
            prg: function(t, e) {
                var n = String(t).split("."), r = n[1] || "", o = r.length, i = Number(n[0]) == t, a = i && n[0].slice(-1), s = i && n[0].slice(-2), c = r.slice(-2), l = r.slice(-1);
                return e ? "other" : i && 0 == a || s >= 11 && s <= 19 || 2 == o && c >= 11 && c <= 19 ? "zero" : 1 == a && 11 != s || 2 == o && 1 == l && 11 != c || 2 != o && 1 == l ? "one" : "other";
            },
            ps: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            pt: function(t, e) {
                var n = String(t).split(".")[0];
                return e ? "other" : 0 == n || 1 == n ? "one" : "other";
            },
            "pt-PT": function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            rm: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ro: function(t, e) {
                var n = String(t).split("."), r = !n[1], o = Number(n[0]) == t && n[0].slice(-2);
                return e ? 1 == t ? "one" : "other" : 1 == t && r ? "one" : !r || 0 == t || 1 != t && o >= 1 && o <= 19 ? "few" : "other";
            },
            rof: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            root: function(t, e) {
                return "other";
            },
            ru: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = r.slice(-1), a = r.slice(-2);
                return e ? "other" : o && 1 == i && 11 != a ? "one" : o && i >= 2 && i <= 4 && (a < 12 || a > 14) ? "few" : o && 0 == i || o && i >= 5 && i <= 9 || o && a >= 11 && a <= 14 ? "many" : "other";
            },
            rwk: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            sah: function(t, e) {
                return "other";
            },
            saq: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            sc: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? 11 == t || 8 == t || 80 == t || 800 == t ? "many" : "other" : 1 == t && n ? "one" : "other";
            },
            scn: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? 11 == t || 8 == t || 80 == t || 800 == t ? "many" : "other" : 1 == t && n ? "one" : "other";
            },
            sd: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            sdh: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            se: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            seh: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ses: function(t, e) {
                return "other";
            },
            sg: function(t, e) {
                return "other";
            },
            sh: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = r.slice(-2), c = o.slice(-1), l = o.slice(-2);
                return e ? "other" : i && 1 == a && 11 != s || 1 == c && 11 != l ? "one" : i && a >= 2 && a <= 4 && (s < 12 || s > 14) || c >= 2 && c <= 4 && (l < 12 || l > 14) ? "few" : "other";
            },
            shi: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? "other" : t >= 0 && t <= 1 ? "one" : r && t >= 2 && t <= 10 ? "few" : "other";
            },
            si: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "";
                return e ? "other" : 0 == t || 1 == t || 0 == r && 1 == o ? "one" : "other";
            },
            sk: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1];
                return e ? "other" : 1 == t && o ? "one" : r >= 2 && r <= 4 && o ? "few" : o ? "other" : "many";
            },
            sl: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = r.slice(-2);
                return e ? "other" : o && 1 == i ? "one" : o && 2 == i ? "two" : o && (3 == i || 4 == i) || !o ? "few" : "other";
            },
            sma: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            smi: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            smj: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            smn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            sms: function(t, e) {
                return e ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";
            },
            sn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            so: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            sq: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t, o = r && n[0].slice(-1), i = r && n[0].slice(-2);
                return e ? 1 == t ? "one" : 4 == o && 14 != i ? "many" : "other" : 1 == t ? "one" : "other";
            },
            sr: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = r.slice(-2), c = o.slice(-1), l = o.slice(-2);
                return e ? "other" : i && 1 == a && 11 != s || 1 == c && 11 != l ? "one" : i && a >= 2 && a <= 4 && (s < 12 || s > 14) || c >= 2 && c <= 4 && (l < 12 || l > 14) ? "few" : "other";
            },
            ss: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ssy: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            st: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            sv: function(t, e) {
                var n = String(t).split("."), r = !n[1], o = Number(n[0]) == t, i = o && n[0].slice(-1), a = o && n[0].slice(-2);
                return e ? 1 != i && 2 != i || 11 == a || 12 == a ? "other" : "one" : 1 == t && r ? "one" : "other";
            },
            sw: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            syr: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ta: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            te: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            teo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            th: function(t, e) {
                return "other";
            },
            ti: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            tig: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            tk: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t && n[0].slice(-1);
                return e ? 6 == r || 9 == r || 10 == t ? "few" : "other" : 1 == t ? "one" : "other";
            },
            tl: function(t, e) {
                var n = String(t).split("."), r = n[0], o = n[1] || "", i = !n[1], a = r.slice(-1), s = o.slice(-1);
                return e ? 1 == t ? "one" : "other" : i && (1 == r || 2 == r || 3 == r) || i && 4 != a && 6 != a && 9 != a || !i && 4 != s && 6 != s && 9 != s ? "one" : "other";
            },
            tn: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            to: function(t, e) {
                return "other";
            },
            tr: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ts: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            tzm: function(t, e) {
                var n = String(t).split("."), r = Number(n[0]) == t;
                return e ? "other" : 0 == t || 1 == t || r && t >= 11 && t <= 99 ? "one" : "other";
            },
            ug: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            uk: function(t, e) {
                var n = String(t).split("."), r = n[0], o = !n[1], i = Number(n[0]) == t, a = i && n[0].slice(-1), s = i && n[0].slice(-2), c = r.slice(-1), l = r.slice(-2);
                return e ? 3 == a && 13 != s ? "few" : "other" : o && 1 == c && 11 != l ? "one" : o && c >= 2 && c <= 4 && (l < 12 || l > 14) ? "few" : o && 0 == c || o && c >= 5 && c <= 9 || o && l >= 11 && l <= 14 ? "many" : "other";
            },
            ur: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            uz: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            ve: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            vi: function(t, e) {
                return e && 1 == t ? "one" : "other";
            },
            vo: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            vun: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            wa: function(t, e) {
                return e ? "other" : 0 == t || 1 == t ? "one" : "other";
            },
            wae: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            wo: function(t, e) {
                return "other";
            },
            xh: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            xog: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
            },
            yi: function(t, e) {
                var n = !String(t).split(".")[1];
                return e ? "other" : 1 == t && n ? "one" : "other";
            },
            yo: function(t, e) {
                return "other";
            },
            yue: function(t, e) {
                return "other";
            },
            zh: function(t, e) {
                return "other";
            },
            zu: function(t, e) {
                return e ? "other" : t >= 0 && t <= 1 ? "one" : "other";
            }
        }, t.exports = n;
    }), rs = e(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getPlural = function(t, e) {
            for (let n = String(t); n; n = n.replace(/[-_]?[^-_]*$/, "")) {
                const t = r.default[n];
                if (t) return i(n, t, e);
            }
            throw new Error("Localisation function not found for locale " + JSON.stringify(t));
        }, e.getAllPlurals = function(t) {
            const e = {}, n = Object.keys(r.default);
            for (let o = 0; o < n.length; ++o) {
                const a = n[o];
                e[a] = i(a, r.default[a], t);
            }
            return e;
        };
        var n = o(es), r = o(ns);
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t, e, r) {
            var o = function() {
                return e.apply(this, arguments);
            };
            if (o.toString = (() => e.toString()), r) o.cardinal = [], o.ordinal = []; else {
                const e = n.default[t] || {};
                o.cardinal = e.cardinal, o.ordinal = e.ordinal;
            }
            return o;
        }
    });
    t(rs), rs.getPlural, rs.getAllPlurals;
    var os = e(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        class n {
            constructor(t) {
                this.plural = function(t, e, n, r, o) {
                    if ({}.hasOwnProperty.call(r, t)) return r[t];
                    e && (t -= e);
                    var i = n(t, o);
                    return i in r ? r[i] : r.other;
                }, this.select = function(t, e) {
                    return {}.hasOwnProperty.call(e, t) ? e[t] : e.other;
                }, this.mf = t, this.setStrictNumber(t.strictNumberSign);
            }
            setStrictNumber(t) {
                this.number = t ? n.strictNumber : n.defaultNumber;
            }
            toString(t, e) {
                const n = {}, r = Object.keys(e.locales);
                for (let e = 0; e < r.length; ++e) {
                    const o = r[e];
                    n[(0, Za.funcname)(o)] = t[o];
                }
                const o = Object.keys(e.runtime);
                for (let t = 0; t < o.length; ++t) {
                    const e = o[t];
                    n[e] = this[e];
                }
                const i = Object.keys(e.formatters);
                if (i.length > 0) {
                    n.fmt = {};
                    for (let t = 0; t < i.length; ++t) {
                        const e = i[t];
                        n.fmt[e] = this.mf.fmt[e];
                    }
                }
                return function t(e, n) {
                    if ("object" != typeof e) {
                        const t = e.toString().replace(/^(function )\w*/, "$1"), n = /([ \t]*)\S.*$/.exec(t);
                        return n ? t.replace(new RegExp("^" + n[1], "mg"), "") : t;
                    }
                    const r = [];
                    for (let o in e) {
                        const i = t(e[o], n + 1);
                        r.push(0 === n ? `var ${o} = ${i};\n` : `${(0, Za.propname)(o)}: ${i}`);
                    }
                    if (0 === n) return r.join("");
                    if (0 === r.length) return "{}";
                    let o = "  ";
                    for (;--n; ) o += "  ";
                    return `{\n${r.join(",\n").replace(/^/gm, o)}\n}`;
                }(n, 0);
            }
        }
        e.default = n, n.defaultNumber = function(t, e, n) {
            if (!n) return t;
            if (isNaN(t)) throw new Error("Can't apply offset:" + n + " to argument `" + e + "` with non-numerical value " + JSON.stringify(t) + ".");
            return t - n;
        }, n.strictNumber = function(t, e, n) {
            if (isNaN(t)) throw new Error("Argument `" + e + "` has non-numerical value " + JSON.stringify(t) + ".");
            return t - (n || 0);
        };
    });
    t(os);
    var is = e(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i(Xa), r = i(ts), o = i(os);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        class a {
            static escape(t, e) {
                const n = e ? /[#{}]/g : /[{}]/g;
                return String(t).replace(n, "'$&'");
            }
            constructor(t) {
                if (this.pluralFuncs = {}, "string" == typeof t) this.pluralFuncs[t] = (0, rs.getPlural)(t), 
                this.defaultLocale = t; else if (Array.isArray(t)) t.forEach(t => {
                    this.pluralFuncs[t] = (0, rs.getPlural)(t);
                }), this.defaultLocale = t[0]; else {
                    for (const e in t) if (t.hasOwnProperty(e)) {
                        if ("function" != typeof t[e]) throw new Error("Expected function value for locale " + JSON.stringify(e));
                        this.pluralFuncs[e] = t[e], this.defaultLocale || (this.defaultLocale = e);
                    }
                    this.defaultLocale ? this.hasCustomPluralFuncs = !0 : this.defaultLocale = a.defaultLocale;
                }
                this.fmt = {}, this.runtime = new o.default(this);
            }
            addFormatters(t) {
                for (const e in t) t.hasOwnProperty(e) && (this.fmt[e] = t[e]);
                return this;
            }
            disablePluralKeyChecks() {
                this.noPluralKeyChecks = !0;
                for (const t in this.pluralFuncs) {
                    const e = this.pluralFuncs[t];
                    e && (e.cardinal = [], e.ordinal = []);
                }
                return this;
            }
            setBiDiSupport(t) {
                return this.bidiSupport = !!t || void 0 === t, this;
            }
            setStrictNumberSign(t) {
                return this.strictNumberSign = !!t || void 0 === t, this.runtime.setStrictNumber(this.strictNumberSign), 
                this;
            }
            compile(t, e) {
                let n = {};
                if (0 === Object.keys(this.pluralFuncs).length) if (e) {
                    const t = (0, rs.getPlural)(e, this.noPluralKeyChecks);
                    if (!t) {
                        const t = JSON.stringify(e);
                        throw new Error(`Locale ${t} not found!`);
                    }
                    n[e] = t;
                } else e = this.defaultLocale, n = (0, rs.getAllPlurals)(this.noPluralKeyChecks); else if (e) {
                    const t = this.pluralFuncs[e];
                    if (!t) {
                        const t = JSON.stringify(e), n = JSON.stringify(this.pluralFuncs);
                        throw new Error(`Locale ${t} not found in ${n}!`);
                    }
                    n[e] = t;
                } else e = this.defaultLocale, n = this.pluralFuncs;
                const o = new r.default(this), i = o.compile(t, e, n);
                if ("object" != typeof t) {
                    const t = new Function("number, plural, select, fmt", (0, Za.funcname)(e), "return " + i), r = this.runtime;
                    return t(r.number, r.plural, r.select, this.fmt, n[e]);
                }
                const a = this.runtime.toString(n, o) + "\n", s = function t(e, n) {
                    if (n || (n = 0), "object" != typeof e) return e;
                    let r = "";
                    for (let t = 0; t < n; ++t) r += "  ";
                    const o = [];
                    for (const i in e) {
                        const a = t(e[i], n + 1);
                        o.push(`\n${r}  ${(0, Za.propname)(i)}: ${a}`);
                    }
                    return `{${o.join(",")}\n${r}}`;
                }(i), c = new Function(a + "return " + s)();
                if (c.hasOwnProperty("toString")) throw new Error("The top-level message key `toString` is reserved");
                return c.toString = function(t) {
                    return t && "export default" !== t ? t.indexOf(".") > -1 ? a + t + " = " + s : a + [ "(function (root, G) {", '  if (typeof define === "function" && define.amd) { define(G); }', '  else if (typeof exports === "object") { module.exports = G; }', "  else { " + (0, 
                    Za.propname)(t, "root") + " = G; }", "})(this, " + s + ");" ].join("\n") : a + "export default " + s;
                }, c;
            }
        }
        e.default = a, a.defaultLocale = "en", a.formatters = n.default;
    });
    t(is);
    var as = is.default;
    let ss, cs, ls;
    !function(t) {
        t.None = "none", t.Alt = "alt", t.Meta = "meta", t.Ctrl = "ctrl", t.Shift = "shift";
    }(ss || (ss = {})), function(t) {
        t.Blank = "blank", t.NewTab = "newTab";
    }(cs || (cs = {})), function(t) {
        t.Ltr = "ltr", t.Rtl = "rtl";
    }(ls || (ls = {}));
    const us = [ "ar", "dv", "fa", "ha", "he", "ks", "ku", "ps", "ur", "yi" ];
    let ds, ps, fs;
    function hs(t, e) {
        const n = chrome.i18n.getMessage(t);
        return e && ps ? (fs[t] || (fs[t] = ps.compile(n)), fs[t](e)) : n;
    }
    (ds = hs("language_code").replace("_", "-")) && (ps = new as(ds), fs = {}), ss.None, 
    cs.NewTab;
    const As = [ "Escape", "F4", "F12", "Tab", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], ms = {
        [ss.None]: hs("no_modifier_key"),
        [ss.Meta]: "Cmd"
    };
    function vs(t) {
        return Object.keys(ms).includes(t) ? ms[t] : t;
    }
    function gs(t) {
        return t !== cs.Blank && t !== cs.NewTab;
    }
    const bs = {
        props: {
            bgState: Object,
            short: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({}),
        computed: {
            tabKillerNumTabsSaved() {
                return this.bgState.tabKiller.savedTabs.length;
            },
            tabKillerEnabled() {
                return this.bgState.tabKiller.shortcutEnabled;
            },
            tabKillerString() {
                return function(t) {
                    let e = "";
                    return t.shortcutKeyModifier !== ss.None && (e = `${vs(t.shortcutKeyModifier)} + `), 
                    (e += t.shortcutKey).toUpperCase();
                }(this.bgState.tabKiller);
            },
            tabKillerTabsHidden() {
                return Array.isArray(this.bgState.tabKiller.savedTabs);
            }
        }
    };
    var _s = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return t.tabKillerTabsHidden ? n("span", [ t._v("\n\t" + t._s(t.translate("tabs_hidden", {
            hidden: t.tabKillerNumTabsSaved
        })) + "\n") ]) : t.tabKillerEnabled ? n("span", [ t.short ? [ t._v("\n\t\t" + t._s(t.translate("press_shortcut", {
            shortcut: t.tabKillerString
        })) + "\n\t") ] : [ t._v("\n\t\t" + t._s(t.translate("on_press_shortcut", {
            shortcut: t.tabKillerString
        })) + "\n\t") ] ], 2) : n("span", [ t._v("\n\t" + t._s(t.translate("off")) + "\n") ]);
    };
    _s._withStripped = !0;
    var Cs = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof bs ? bs.options : bs) || {};
        return c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerStatus.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: _s,
        staticRenderFns: []
    });
    const ys = {
        props: {
            link: {
                type: String,
                required: !0
            },
            linkScreenView: {
                type: String,
                required: !1
            },
            title: {
                type: String,
                required: !0
            },
            actionAvailable: {
                type: Boolean,
                required: !1,
                default: !1
            },
            actionLabel: {
                type: String,
                required: !1
            },
            contentsClass: {
                type: [ String, Object ],
                required: !1,
                default: ""
            }
        },
        data: () => ({}),
        computed: {
            routerLinkTo() {
                const t = {
                    name: this.link
                };
                return this.linkScreenView && (t.params = {
                    screenView: this.linkScreenView
                }), t;
            }
        }
    };
    var ws = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "tile"
        }, [ n("div", {
            staticClass: "tile_title text -small -secondary -light"
        }, [ t._v("\n\t\t" + t._s(t.title) + "\n\t") ]), t._v(" "), n("router-link", {
            staticClass: "tile_contents block -clickable",
            class: t.contentsClass,
            attrs: {
                to: t.routerLinkTo,
                tag: "div"
            },
            on: {
                click: function(e) {
                    t.$emit("click");
                }
            }
        }, [ n("div", {
            staticClass: "tile_description text -regular color_dark -text"
        }, [ t._t("description") ], 2), t._v(" "), t._t("contents"), t._v(" "), t.actionAvailable ? n("button", {
            staticClass: "a",
            on: {
                click: function(e) {
                    t.$emit("action");
                }
            }
        }, [ t._v("\n\t\t\t" + t._s(t.actionLabel) + "\n\t\t") ]) : t._e() ], 2) ], 1);
    };
    ws._withStripped = !0;
    var xs = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof ys ? ys.options : ys) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Tile.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-5cd09618";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: ws,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-5cd09618_0", {
            source: "\n.tile[data-v-5cd09618] {\n  flex: 1 1 40%;\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  position: relative;\n  margin: 8px 16px;\n}\n.tile_title[data-v-5cd09618] {\n  margin-bottom: 10px;\n}\n.tile_contents[data-v-5cd09618] {\n  width: 100%;\n  cursor: pointer;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.tile_description[data-v-5cd09618] {\n  flex: 1;\n  width: 100%;\n}\n.tile + .tile[data-v-5cd09618] {\n  margin-inline-start: 0;\n  -webkit-margin-start: 0;\n  -moz-margin-start: 0;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Tile.vue", "Tile.vue" ],
                names: [],
                mappings: ";AAqFA;EACA,cAAA;EACA,cAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;CCpFC;ADsFD;EACA,oBAAA;CCpFC;ADuFD;EACA,YAAA;EACA,gBAAA;EACA,QAAA;EACA,cAAA;EACA,uBAAA;EACA,wBAAA;CCrFC;ADwFD;EACA,QAAA;EACA,YAAA;CCtFC;ADyFD;ECvFE,uBAAuB;EACvB,wBAAwB;EACxB,qBAAqB;CACtB",
                file: "Tile.vue",
                sourcesContent: [ null, ".tile {\n  flex: 1 1 40%;\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  position: relative;\n  margin: 8px 16px;\n}\n.tile_title {\n  margin-bottom: 10px;\n}\n.tile_contents {\n  width: 100%;\n  cursor: pointer;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.tile_description {\n  flex: 1;\n  width: 100%;\n}\n.tile + .tile {\n  margin-inline-start: 0;\n  -webkit-margin-start: 0;\n  -moz-margin-start: 0;\n}\n" ]
            },
            media: void 0
        });
    }), Es = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "loading"
        }, [ e("div", {
            staticClass: "block loading_block"
        }, [ e("img", {
            staticClass: "loading_icon",
            attrs: {
                src: "/img/loading-on-light.svg"
            }
        }), this._v(" "), e("span", {
            staticClass: "span color_dark -text loading_text"
        }, [ this._v("\n\t\t\t" + this._s(this.translate("loading_hma")) + "\n\t\t") ]) ]) ]);
    };
    Es._withStripped = !0;
    var ks = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Loading.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-543f1a0c";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Es,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-543f1a0c_0", {
            source: "\n.loading[data-v-543f1a0c] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 30000;\n  background-color: rgba(19,36,52,0.3);\n  padding: 16px;\n}\n.loading_block[data-v-543f1a0c] {\n  display: flex;\n  align-items: center;\n}\n.loading_text[data-v-543f1a0c] {\n  padding-inline-start: 16px;\n  -webkit-padding-start: 16px;\n  -moz-padding-start: 16px;\n}\n.loading_icon[data-v-543f1a0c] {\n  animation: rotation-data-v-543f1a0c 1.7s linear infinite;\n}\n@-moz-keyframes rotation-data-v-543f1a0c {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes rotation-data-v-543f1a0c {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@-o-keyframes rotation-data-v-543f1a0c {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes rotation-data-v-543f1a0c {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Loading.vue", "Loading.vue" ],
                names: [],
                mappings: ";AAuBA;EACA,gBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,qCAAA;EACA,cAAA;CCtBC;ADwBD;EACA,cAAA;EACA,oBAAA;CCtBC;ADwBD;EAzBA,2BAAA;ECIE,4BAA4B;EDF9B,yBAAA;CCIC;ADsBD;EACA,yDAAA;CCpBC;ADPD;AACA;IACA,wBAAA;CCSG;ADPH;IACA,0BAAA;CCSG;CACF;ADfD;AACA;IACA,wBAAA;CCiBG;ADfH;IACA,0BAAA;CCiBG;CACF;ADvBD;AACA;IACA,wBAAA;CCyBG;ADvBH;IACA,0BAAA;CCyBG;CACF;AD/BD;AACA;IACA,wBAAA;CCiCG;AD/BH;IACA,0BAAA;CCiCG;CACF",
                file: "Loading.vue",
                sourcesContent: [ null, ".loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 30000;\n  background-color: rgba(19,36,52,0.3);\n  padding: 16px;\n}\n.loading_block {\n  display: flex;\n  align-items: center;\n}\n.loading_text {\n  padding-inline-start: 16px;\n  -webkit-padding-start: 16px;\n  -moz-padding-start: 16px;\n}\n.loading_icon {\n  animation: rotation 1.7s linear infinite;\n}\n@-moz-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n" ]
            },
            media: void 0
        });
    }, {});
    const Ss = c("dashboard"), Ds = {
        components: {
            Onboarding: Ha,
            Location: ka,
            TabKillerStatus: Cs,
            AutoConnectStatus: qa,
            Screen: sa,
            Tile: xs,
            Loading: ks
        },
        props: {
            bgState: Object,
            currentTabHost: {
                type: String,
                required: !1,
                default: ""
            },
            popupState: Object
        },
        data: () => ({
            drawerVisible: !1,
            autoConnectTooltipTimerId: null,
            autoConnectTooltipReady: !1,
            tabKillerTooltipTimerId: null,
            tabKillerTooltipReady: !1,
            ScreenView: ca,
            BannerVariantDashboard: fa
        }),
        computed: {
            autoConnectTooltipVisible() {
                return !(!this.popupState.switchTooltipDismissed || this.popupState.autoConnectTooltipDismissed || !this.autoConnectTooltipReady);
            },
            isAutoConnected() {
                return !!(this.currentTabHost && this.bgState.proxy.autoConnectEnabled && this.bgState.proxy.autoConnectSites.find(t => (function(t, e) {
                    return t === e || !(t.length <= e.length || !t.endsWith(e)) && "." === t[t.length - e.length - 1];
                })(this.currentTabHost, t.host)));
            },
            isConfigurationLoaded() {
                return this.bgState.proxy.locations && this.bgState.proxy.credentials;
            },
            isConnected() {
                return this.bgState.proxy.state === Na.Connected;
            },
            activeLocation() {
                return this.bgState.proxy.activeLocation;
            },
            selectedLocation() {
                return this.bgState.proxy.selectedLocation;
            },
            state() {
                return this.bgState.proxy.state;
            },
            tabKillerTileActionLabel() {
                return this.tabKillerTabsHidden ? this.translate("reopen_tabs") : this.translate("hide_tabs");
            },
            tabKillerTabsHidden() {
                return Array.isArray(this.bgState.tabKiller.savedTabs);
            },
            switchTooltipVisible() {
                return !this.popupState.switchTooltipDismissed;
            },
            tabKillerTooltipVisible() {
                return !(!this.popupState.switchTooltipDismissed || !this.popupState.autoConnectTooltipDismissed || this.popupState.tabKillerTooltipDismissed || !this.tabKillerTooltipReady);
            },
            bannerVariant() {
                switch (this.bgState.shepherd.config.popup.bannerVariantDashboard) {
                  case fa.A:
                  case fa.B:
                  case fa.C:
                  case fa.D:
                    return this.bgState.shepherd.config.popup.bannerVariantDashboard;

                  default:
                    return fa.A;
                }
            }
        },
        watch: {
            state(t) {
                t === Na.Connected && this.maybeScheduleAutoConnectTooltip();
            }
        },
        created() {
            this.maybeScheduleAutoConnectTooltip(), this.maybeScheduleTabKillerTooltip(), ta(Ui(ca.Dashboard));
        },
        beforeDestroy() {
            this.autoConnectTooltipTimerId && (Ss("clearing auto connect tooltip timer"), clearTimeout(this.autoConnectTooltipTimerId)), 
            this.tabKillerTooltipTimerId && (Ss("clearing tab killer tooltip timer"), clearTimeout(this.tabKillerTooltipTimerId));
        },
        methods: {
            maybeScheduleAutoConnectTooltip() {
                this.popupState.switchTooltipDismissed && !this.popupState.autoConnectTooltipDismissed && this.scheduleAutoConnectTooltip();
            },
            maybeScheduleTabKillerTooltip() {
                this.popupState.switchTooltipDismissed && this.popupState.autoConnectTooltipDismissed && !this.popupState.tabKillerTooltipDismissed && this.scheduleTabKillerTooltip();
            },
            proxyToggle() {
                let t;
                switch (Ss("clicked switch"), this.state) {
                  case Na.Connected:
                  case Na.Connecting:
                    ta((() => zi(ga.Disconnect))()), t = ua.TurnOff;
                    break;

                  case Na.Disconnected:
                    ta((t => zi(ga.Connect, t))(this.selectedLocation)), t = ua.TurnOn;
                }
                ta(Mi(la.Dashboard, t)), this.switchTooltipVisible && this.hideSwitchTooltip();
            },
            scheduleAutoConnectTooltip() {
                Ss("scheduling auto connect tooltip"), this.autoConnectTooltipTimerId = setTimeout(() => {
                    this.autoConnectTooltipReady = !0, this.updatePopupState({
                        ...this.popupState,
                        autoConnectTooltipDismissed: !1
                    });
                }, 2500);
            },
            scheduleTabKillerTooltip() {
                Ss("scheduling tab killer tooltip"), this.tabKillerTooltipTimerId = setTimeout(() => {
                    this.tabKillerTooltipReady = !0, this.updatePopupState({
                        ...this.popupState,
                        tabKillerTooltipDismissed: !1
                    });
                }, 2500);
            },
            tabKillerTileAction() {
                ta((() => zi(Ra.Engage))());
            },
            realLocationClick() {
                ea(Qi("https://www.hidemyass.com/ip-info", {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign
                }));
            },
            upsellBannerClick(t) {
                ta(Mi(la.Dashboard, ua.GetBuy, t)), this.openUpsellBanner(pa.Dashboard, t);
            },
            openUpsellBanner(t, e) {
                ea(Qi("https://www.hidemyass.com/pricing", {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign,
                    content: t,
                    term: e
                }));
            },
            changeLocationClick() {
                ta(Mi(la.Dashboard, ua.Location));
            },
            autoConnectTileClick() {
                ta(Mi(la.Dashboard, ua.AutoDisguise));
            },
            tabKillerTileClick() {
                ta(Mi(la.Dashboard, ua.TabKiller));
            }
        }
    };
    var Bs = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("screen", {
            attrs: {
                "with-burger": "",
                title: t.translate("product_name_short")
            }
        }, [ n("div", {
            staticClass: "dashboard"
        }, [ n("div", {
            staticClass: "h1 dashboard_status"
        }, [ t.isAutoConnected ? n("span", {
            staticClass: "color_attention -text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("your_location_is_auto_disguised")) + "\n\t\t\t") ]) : t.isConnected ? n("span", {
            staticClass: "color_attention -text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("your_location_is_disguised")) + "\n\t\t\t") ]) : n("span", [ t._v("\n\t\t\t\t" + t._s(t.translate("your_location_is_exposed")) + "\n\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "btn -icon",
            on: {
                click: t.realLocationClick
            }
        }, [ n("img", {
            attrs: {
                src: "/img/info-on-dark.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]), t._v(" "), n("div", {
            staticClass: "dashboard_spacer"
        }), t._v(" "), n("div", {
            staticClass: "contents_main dashboard_contents color_light -bg"
        }, [ n("div", {
            staticClass: "dashboard_switch",
            class: {
                dashboard_onboarding: t.switchTooltipVisible
            },
            on: {
                click: t.proxyToggle
            }
        }, [ t.isConnected ? n("span", {
            staticClass: "dashboard_switch_art -on"
        }) : n("span", {
            staticClass: "dashboard_switch_art -off"
        }), t._v(" "), n("button", {
            staticClass: "btn -primary",
            class: {
                "-primary": !t.isConnected,
                "-secondary": t.isConnected
            }
        }, [ t.isConnected ? [ t._v("\n\t\t\t\t\t\t" + t._s(t.translate("turn_off")) + "\n\t\t\t\t\t") ] : [ t._v("\n\t\t\t\t\t\t" + t._s(t.translate("turn_on")) + "\n\t\t\t\t\t") ] ], 2) ]), t._v(" "), n("div", {
            staticClass: "dashboard_tiles"
        }, [ n("tile", {
            attrs: {
                link: "locations",
                title: t.translate(t.isConnected ? "disguised_as" : "disguise_as")
            },
            on: {
                click: t.changeLocationClick
            }
        }, [ n("location", {
            staticClass: "dashboard_location",
            attrs: {
                slot: "description",
                icon: "/img/arrow-down-on-white.svg",
                location: t.selectedLocation
            },
            slot: "description"
        }) ], 1) ], 1), t._v(" "), n("div", {
            staticClass: "dashboard_tiles -multi"
        }, [ n("tile", {
            attrs: {
                link: "autoConnect",
                title: t.translate("auto_disguise"),
                "contents-class": {
                    dashboard_onboarding: t.autoConnectTooltipVisible
                },
                "link-screen-view": t.ScreenView.AutoDisguiseDashboard
            },
            on: {
                click: t.autoConnectTileClick
            }
        }, [ n("auto-connect-status", {
            attrs: {
                slot: "description",
                short: "",
                "bg-state": t.bgState
            },
            slot: "description"
        }), t._v(" "), t.isAutoConnected ? n("div", {
            staticClass: "dashboard_tiles_autoDisguiseStatus",
            attrs: {
                slot: "contents"
            },
            slot: "contents"
        }, [ n("img", {
            attrs: {
                src: "/img/tick-on-light.svg",
                width: "20",
                height: "20"
            }
        }), t._v(" " + t._s(t.translate("active")) + "\n\t\t\t\t\t") ]) : t._e() ], 1), t._v(" "), n("tile", {
            attrs: {
                link: "tabKiller",
                title: t.translate("tab_killer"),
                "action-label": t.tabKillerTileActionLabel,
                "action-available": "",
                "contents-class": {
                    dashboard_onboarding: t.tabKillerTooltipVisible
                },
                "link-screen-view": t.ScreenView.TabKillerDashboard
            },
            on: {
                action: t.tabKillerTileAction,
                click: t.tabKillerTileClick
            }
        }, [ n("tab-killer-status", {
            attrs: {
                slot: "description",
                short: "",
                "bg-state": t.bgState
            },
            slot: "description"
        }) ], 1) ], 1) ]), t._v(" "), n("div", {
            staticClass: "dashboard_upsell text -small -regular color_light -bg"
        }, [ n("button", {
            staticClass: "a",
            on: {
                click: function(e) {
                    t.upsellBannerClick(t.bannerVariant);
                }
            }
        }, [ t.bannerVariant === t.BannerVariantDashboard.A ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("do_even_more_with_hma_pro_vpn")) + "\n\t\t\t\t") ] : t.bannerVariant === t.BannerVariantDashboard.B ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("access_280_locations_with_hma_pro_vpn")) + "\n\t\t\t\t") ] : t.bannerVariant === t.BannerVariantDashboard.C ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("access_190_countries_with_hma_pro_vpn")) + "\n\t\t\t\t") ] : t.bannerVariant === t.BannerVariantDashboard.D ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("stream_videos_with_hma_pro_vpn")) + "\n\t\t\t\t") ] : t._e() ], 2) ]), t._v(" "), t.isConfigurationLoaded ? n("onboarding", {
            attrs: {
                "bg-state": t.bgState,
                "popup-state": t.popupState,
                "auto-connect-tooltip-visible": t.autoConnectTooltipVisible,
                "switch-tooltip-visible": t.switchTooltipVisible,
                "tab-killer-tooltip-visible": t.tabKillerTooltipVisible
            }
        }) : t._e() ], 1), t._v(" "), t.isConfigurationLoaded ? t._e() : n("loading"), t._v(" "), n("router-view", {
            attrs: {
                "bg-state": t.bgState,
                "popup-state": t.popupState
            },
            on: {
                "get-vpn": t.openUpsellBanner
            }
        }) ], 1);
    };
    Bs._withStripped = !0;
    var Ts = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Ds ? Ds.options : Ds) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Dashboard.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-5d5f6349";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Bs,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-5d5f6349_0", {
            source: '\n.dashboard[data-v-5d5f6349] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n}\n.dashboard_contents[data-v-5d5f6349] {\n  padding-top: 60px;\n}\n.dashboard_status[data-v-5d5f6349] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0;\n  flex: 0 0 40px;\n  overflow: hidden;\n  margin: 0 16px;\n}\n.dashboard_status span[data-v-5d5f6349] {\n  transition: color 0.19s ease;\n  text-align: center;\n}\n.dashboard_spacer[data-v-5d5f6349] {\n  flex: 0 0 118px;\n  position: relative;\n  overflow: hidden;\n}\n.dashboard_spacer[data-v-5d5f6349]:after {\n  content: \'\';\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  position: absolute;\n  left: calc(50% - 65px);\n  top: 29px;\n  opacity: 0.15;\n  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.4);\n  background-color: #fff;\n}\n.dashboard_switch[data-v-5d5f6349] {\n  position: absolute;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  top: 60px;\n}\n.dashboard_switch_art[data-v-5d5f6349] {\n  overflow: hidden;\n  background-repeat: no-repeat;\n  width: 130px;\n  height: 124px;\n  background-position: top center;\n}\n.dashboard_switch_art.-off[data-v-5d5f6349] {\n  background-image: url("/img/donkey-dashboard-off.svg");\n}\n.dashboard_switch_art.-on[data-v-5d5f6349] {\n  background-image: url("/img/donkey-dashboard-on.svg");\n}\n.dashboard_location[data-v-5d5f6349] {\n  margin: -2.5px 0;\n}\n.dashboard_tiles[data-v-5d5f6349] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: relative;\n  margin-top: 4px;\n}\n.dashboard_tiles.-multi[data-v-5d5f6349] {\n  flex: 1;\n  display: flex;\n  padding-bottom: 20px;\n}\n.dashboard_tiles_autoDisguiseStatus[data-v-5d5f6349] {\n  display: flex;\n  align-items: center;\n}\n.dashboard_upsell[data-v-5d5f6349] {\n  flex: 0 0 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #e1e1e1;\n}\n[data-v-5d5f6349] .dashboard_onboarding {\n  z-index: 1;\n}\n[data-v-5d5f6349] .dashboard_onboarding:not(.dashboard_switch) {\n  position: relative;\n}\n',
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Dashboard.vue", "Dashboard.vue" ],
                names: [],
                mappings: ";AAiXA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;CChXC;ADkXD;EACA,kBAAA;CChXC;ADmXD;EACA,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;CCjXC;ADmXD;EACA,6BAAA;EACA,mBAAA;CCjXC;ADqXD;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;CCnXC;ADqXD;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;EACA,wCAAA;EACA,uBAAA;CCnXC;ADuXD;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;EACA,UAAA;CCrXC;ADuXD;EACA,iBAAA;EACA,6BAAA;EACA,aAAA;EACA,cAAA;EACA,gCAAA;CCrXC;ADuXD;EACA,uDAAA;CCrXC;ADwXD;EACA,sDAAA;CCtXC;AD2XD;EACA,iBAAA;CCzXC;AD4XD;EACA,cAAA;EACA,oBAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBAAA;EACA,gBAAA;CC1XC;AD4XD;EACA,QAAA;EACA,cAAA;EACA,qBAAA;CC1XC;AD6XD;EACA,cAAA;EACA,oBAAA;CC3XC;AD+XD;EACA,eAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,8BAAA;CC7XC;ADiYD;EACA,WAAA;CC/XC;ADiYD;EACA,mBAAA;CC/XC",
                file: "Dashboard.vue",
                sourcesContent: [ null, '.dashboard {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n}\n.dashboard_contents {\n  padding-top: 60px;\n}\n.dashboard_status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0;\n  flex: 0 0 40px;\n  overflow: hidden;\n  margin: 0 16px;\n}\n.dashboard_status span {\n  transition: color 0.19s ease;\n  text-align: center;\n}\n.dashboard_spacer {\n  flex: 0 0 118px;\n  position: relative;\n  overflow: hidden;\n}\n.dashboard_spacer:after {\n  content: \'\';\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  position: absolute;\n  left: calc(50% - 65px);\n  top: 29px;\n  opacity: 0.15;\n  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.4);\n  background-color: #fff;\n}\n.dashboard_switch {\n  position: absolute;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  top: 60px;\n}\n.dashboard_switch_art {\n  overflow: hidden;\n  background-repeat: no-repeat;\n  width: 130px;\n  height: 124px;\n  background-position: top center;\n}\n.dashboard_switch_art.-off {\n  background-image: url("/img/donkey-dashboard-off.svg");\n}\n.dashboard_switch_art.-on {\n  background-image: url("/img/donkey-dashboard-on.svg");\n}\n.dashboard_location {\n  margin: -2.5px 0;\n}\n.dashboard_tiles {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: relative;\n  margin-top: 4px;\n}\n.dashboard_tiles.-multi {\n  flex: 1;\n  display: flex;\n  padding-bottom: 20px;\n}\n.dashboard_tiles_autoDisguiseStatus {\n  display: flex;\n  align-items: center;\n}\n.dashboard_upsell {\n  flex: 0 0 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #e1e1e1;\n}\n>>> .dashboard_onboarding {\n  z-index: 1;\n}\n>>> .dashboard_onboarding:not(.dashboard_switch) {\n  position: relative;\n}\n' ]
            },
            media: void 0
        });
    });
    const Ks = {
        props: {
            bgState: Object,
            popupState: Object
        },
        data: () => ({}),
        computed: {
            feedbackUrl() {
                return this.bgState.shepherd.config.popup.urlFeedback;
            },
            helpUrl() {
                return this.bgState.shepherd.config.popup.urlHelp;
            },
            rateUsUrl() {
                switch (Yi.browser) {
                  case Xi.Chrome:
                    return this.bgState.shepherd.config.popup.urlRateUsChrome;

                  case Xi.Firefox:
                    return this.bgState.shepherd.config.popup.urlRateUsFirefox;
                }
                return null;
            }
        },
        created() {
            ta(Mi(la.Burger, ua.View));
        },
        methods: {
            aboutClick() {
                ta(Mi(la.Burger, ua.Click, da.About));
            },
            feedbackClick() {
                ea(Qi(this.feedbackUrl, {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign
                })), ta(Mi(la.Burger, ua.Click, da.Feedback));
            },
            helpClick() {
                ea(Qi(this.helpUrl, {
                    campaign: this.bgState.shepherd.config.analytics.utmCampaign
                })), ta(Mi(la.Burger, ua.Click, da.Help));
            },
            rateUsClick() {
                ea(this.rateUsUrl), ta(Mi(la.Burger, ua.Click, da.RateUs));
            },
            settingsClick() {
                ta(Mi(la.Burger, ua.Click, da.Settings));
            }
        }
    };
    var Os = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "drawer"
            }
        }, [ n("nav", {
            staticClass: "drawer"
        }, [ n("router-link", {
            staticClass: "drawer_close btn -icon",
            attrs: {
                to: "/",
                replace: ""
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-dark.svg"
            }
        }) ]), t._v(" "), n("router-link", {
            staticClass: "drawer_item text -large -heavy",
            attrs: {
                to: "/settings",
                tag: "button",
                replace: ""
            },
            nativeOn: {
                click: function(e) {
                    return t.settingsClick(e);
                }
            }
        }, [ t._v("\n\t\t\t" + t._s(t.translate("settings")) + "\n\t\t") ]), t._v(" "), t.helpUrl ? n("button", {
            staticClass: "drawer_item text -large -heavy",
            on: {
                click: t.helpClick
            }
        }, [ t._v("\n\t\t\t" + t._s(t.translate("help")) + "\n\t\t") ]) : t._e(), t._v(" "), t.feedbackUrl ? n("button", {
            staticClass: "drawer_item text -large -heavy",
            on: {
                click: t.feedbackClick
            }
        }, [ t._v("\n\t\t\t" + t._s(t.translate("feedback")) + "\n\t\t") ]) : t._e(), t._v(" "), n("router-link", {
            staticClass: "drawer_item text -large -heavy",
            attrs: {
                to: "/about",
                tag: "button",
                replace: ""
            },
            nativeOn: {
                click: function(e) {
                    return t.aboutClick(e);
                }
            }
        }, [ t._v("\n\t\t\t" + t._s(t.translate("about")) + "\n\t\t") ]), t._v(" "), t.rateUsUrl ? n("button", {
            staticClass: "drawer_item text -large -heavy",
            on: {
                click: t.rateUsClick
            }
        }, [ t._v("\n\t\t\t" + t._s(t.translate("rate_us")) + "\n\t\t") ]) : t._e() ], 1) ]);
    };
    Os._withStripped = !0;
    var Fs = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Ks ? Ks.options : Ks) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Drawer.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-5ed955d0";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Os,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-5ed955d0_0", {
            source: "\n.drawer[data-v-5ed955d0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  padding: 74px 0;\n  text-align: start;\n  z-index: 10;\n}\n[dir=rtl] .drawer[data-v-5ed955d0] {\n  left: auto;\n  right: 0;\n}\n.drawer[data-v-5ed955d0]:before {\n  content: '';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0,0,0,0.3);\n  z-index: -2;\n}\n.drawer[data-v-5ed955d0]:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #132434;\n  z-index: -1;\n}\n.drawer_item[data-v-5ed955d0] {\n  cursor: pointer;\n  padding: 16px;\n  line-height: 18px;\n  text-align: start;\n  text-decoration: none;\n  color: rgba(255,255,255,0.7);\n  background-color: rgba(255,255,255,0);\n  transition: color 0.19s ease, background-color 0.19s ease;\n}\n.drawer_item[data-v-5ed955d0]:hover {\n  color: #fff;\n  background-color: rgba(255,255,255,0.1);\n}\n.drawer_close[data-v-5ed955d0] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n[dir=rtl] .drawer_close[data-v-5ed955d0] {\n  left: auto;\n  right: 6px;\n}\n.drawer-enter-active[data-v-5ed955d0],\n.drawer-leave-active[data-v-5ed955d0] {\n  transition: left 0.19s ease, right 0.19s ease;\n}\n.drawer-enter-active[data-v-5ed955d0]:before,\n.drawer-leave-active[data-v-5ed955d0]:before {\n  transition: opacity 0.19s ease;\n}\n.drawer-enter[data-v-5ed955d0],\n.drawer-leave-to[data-v-5ed955d0] {\n  left: -260px;\n}\n[dir=rtl] .drawer-enter[data-v-5ed955d0],\n[dir=rtl] .drawer-leave-to[data-v-5ed955d0] {\n  left: auto;\n  right: -260px;\n}\n.drawer-enter[data-v-5ed955d0]:before,\n.drawer-leave-to[data-v-5ed955d0]:before {\n  opacity: 0;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Drawer.vue", "Drawer.vue" ],
                names: [],
                mappings: ";AA8GA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;CC7GC;AD+GD;EACA,WAAA;EACA,SAAA;CC7GC;ADgHD;EACA,YAAA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,4BAAA;EACA,YAAA;CC9GC;ADiHD;EACA,YAAA;EACA,mBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,oBAAA;EACA,YAAA;CC/GC;ADkHD;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,sCAAA;EACA,0DAAA;CChHC;ADkHD;EACA,YAAA;EACA,wCAAA;CChHC;ADoHD;EACA,mBAAA;EACA,SAAA;EACA,UAAA;CClHC;ADoHD;EACA,WAAA;EACA,WAAA;CClHC;ADuHD;;EAEA,8CAAA;CCrHC;ADuHD;;EACA,+BAAA;CCpHC;ADuHD;;EAEA,aAAA;CCrHC;ADuHD;;EACA,WAAA;EACA,cAAA;CCpHC;ADuHD;;EACA,WAAA;CCpHC",
                file: "Drawer.vue",
                sourcesContent: [ null, ".drawer {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  padding: 74px 0;\n  text-align: start;\n  z-index: 10;\n}\n[dir=rtl] .drawer {\n  left: auto;\n  right: 0;\n}\n.drawer:before {\n  content: '';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0,0,0,0.3);\n  z-index: -2;\n}\n.drawer:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #132434;\n  z-index: -1;\n}\n.drawer_item {\n  cursor: pointer;\n  padding: 16px;\n  line-height: 18px;\n  text-align: start;\n  text-decoration: none;\n  color: rgba(255,255,255,0.7);\n  background-color: rgba(255,255,255,0);\n  transition: color 0.19s ease, background-color 0.19s ease;\n}\n.drawer_item:hover {\n  color: #fff;\n  background-color: rgba(255,255,255,0.1);\n}\n.drawer_close {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n[dir=rtl] .drawer_close {\n  left: auto;\n  right: 6px;\n}\n.drawer-enter-active,\n.drawer-leave-active {\n  transition: left 0.19s ease, right 0.19s ease;\n}\n.drawer-enter-active:before,\n.drawer-leave-active:before {\n  transition: opacity 0.19s ease;\n}\n.drawer-enter,\n.drawer-leave-to {\n  left: -260px;\n}\n[dir=rtl] .drawer-enter,\n[dir=rtl] .drawer-leave-to {\n  left: auto;\n  right: -260px;\n}\n.drawer-enter:before,\n.drawer-leave-to:before {\n  opacity: 0;\n}\n" ]
            },
            media: void 0
        });
    });
    const $s = {
        components: {
            LocationList: Fa
        },
        props: {
            bgState: Object,
            popupState: Object
        },
        data: () => ({
            BannerVariantLocations: ha
        }),
        computed: {
            locations() {
                return [ ...this.bgState.proxy.locations ].sort((t, e) => t.locationDetails ? e.locationDetails ? t.locationDetails.countryName.localeCompare(e.locationDetails.countryName) : 1 : -1);
            },
            selectedLocation() {
                return this.bgState.proxy.selectedLocation;
            },
            bannerVariant() {
                switch (this.bgState.shepherd.config.popup.bannerVariantLocations) {
                  case ha.A:
                  case ha.B:
                    return this.bgState.shepherd.config.popup.bannerVariantLocations;

                  default:
                    return ha.A;
                }
            }
        },
        created() {
            ta(Ui(ca.Location));
        },
        methods: {
            isOptimal: t => null === t.locationKey,
            isSelected(t) {
                return t.locationKey === this.selectedLocation.locationKey;
            },
            selectLocation(t) {
                const e = t.locationKey || "auto";
                ta(Mi(la.Location, ua.ChooseNew, e)), ta((t => zi(ga.SelectedLocationChange, t))(t)), 
                this.$router.push({
                    path: "/"
                });
            },
            upsellBannerClick(t) {
                ta(Mi(la.Location, ua.GetBuy, t)), this.$emit("get-vpn", pa.Location, t);
            }
        }
    };
    var Ls = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "locations"
            }
        }, [ n("div", {
            staticClass: "locations_wrap"
        }, [ n("router-link", {
            staticClass: "locations_overlay",
            attrs: {
                to: "/"
            }
        }), t._v(" "), n("div", {
            staticClass: "locations locations_block"
        }, [ n("div", {
            staticClass: "text -heavy color_dark -text g_margin_bottom_1"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("choose_new_location")) + "\n\t\t\t") ]), t._v(" "), n("router-link", {
            staticClass: "locations_close",
            attrs: {
                to: "/",
                tag: "button"
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), n("location-list", {
            attrs: {
                "bg-state": t.bgState,
                "popup-state": t.popupState,
                "selected-location": t.selectedLocation,
                "first-separator": ""
            },
            on: {
                select: t.selectLocation
            }
        }) ], 1), t._v(" "), n("div", {
            staticClass: "locations_upsell locations_block"
        }, [ n("h5", {
            staticClass: "text -heavy color_dark -text g_margin_bottom__1"
        }, [ t.bannerVariant === t.BannerVariantLocations.A ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("need_more_locations")) + "\n\t\t\t\t") ] : t.bannerVariant === t.BannerVariantLocations.B ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("stream_yourself_into_a_coma")) + "\n\t\t\t\t") ] : t._e() ], 2), t._v(" "), n("div", {
            staticClass: "text -secondary g_margin_bottom_1"
        }, [ t.bannerVariant === t.BannerVariantLocations.A ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("access_190_countries_with_our_vpn")) + "\n\t\t\t\t") ] : t.bannerVariant === t.BannerVariantLocations.B ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("go_pro_for_video_streaming_locations")) + "\n\t\t\t\t") ] : t._e() ], 2), t._v(" "), n("button", {
            staticClass: "btn -primary",
            on: {
                click: function(e) {
                    t.upsellBannerClick(t.bannerVariant);
                }
            }
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("get_hma_pro_vpn")) + "\n\t\t\t") ]) ]) ], 1) ]);
    };
    Ls._withStripped = !0;
    var js = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof $s ? $s.options : $s) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Locations.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-dfd596d0";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ls,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-dfd596d0_0", {
            source: "\n.locations[data-v-dfd596d0] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.locations_block[data-v-dfd596d0] {\n  position: relative;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  padding: 16px 0 30px;\n  border-radius: 10px;\n  box-shadow: 0 10px 18px 0 rgba(19,36,52,0.1);\n}\n.locations_wrap[data-v-dfd596d0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 10;\n}\n.locations_overlay[data-v-dfd596d0] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: auto;\n  background: rgba(0,0,0,0.3);\n  opacity: 1;\n}\n.locations_close[data-v-dfd596d0] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.locations-enter-active[data-v-dfd596d0],\n.locations-leave-active[data-v-dfd596d0] {\n  transition: opacity 0.19s ease;\n}\n.locations-enter-active .locations_overlay[data-v-dfd596d0],\n.locations-leave-active .locations_overlay[data-v-dfd596d0] {\n  transition: opacity 0.19s ease;\n}\n.locations-enter-active .locations[data-v-dfd596d0],\n.locations-leave-active .locations[data-v-dfd596d0],\n.locations-enter-active .locations_upsell[data-v-dfd596d0],\n.locations-leave-active .locations_upsell[data-v-dfd596d0] {\n  transition: opacity 0.19s ease, transform 0.19s ease;\n}\n.locations-enter[data-v-dfd596d0],\n.locations-leave-to[data-v-dfd596d0] {\n  opacity: 0.9;\n}\n.locations-enter .locations_overlay[data-v-dfd596d0],\n.locations-leave-to .locations_overlay[data-v-dfd596d0] {\n  opacity: 0;\n}\n.locations-enter .locations[data-v-dfd596d0],\n.locations-leave-to .locations[data-v-dfd596d0],\n.locations-enter .locations_upsell[data-v-dfd596d0],\n.locations-leave-to .locations_upsell[data-v-dfd596d0] {\n  transform: translateY(-20px);\n  opacity: 0;\n}\n.locations-leave-to .locations[data-v-dfd596d0],\n.locations-leave-to .locations_upsell[data-v-dfd596d0] {\n  transform: translateY(20px);\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Locations.vue", "Locations.vue" ],
                names: [],
                mappings: ";AAmIA;EACA,QAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,oBAAA;CClIC;ADoID;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,oBAAA;EACA,6CAAA;CClIC;ADqID;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;EACA,cAAA;EACA,uBAAA;EACA,+BAAA;EACA,YAAA;CCnIC;ADsID;EACA,mBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,4BAAA;EACA,WAAA;CCpIC;ADuID;EACA,mBAAA;EACA,UAAA;EACA,YAAA;CCrIC;AD8ID;;EAEA,+BAAA;CC5IC;AD6ID;;EACA,+BAAA;CC1IC;AD4ID;;;;EAEA,qDAAA;CCxIC;AD2ID;;EAEA,aAAA;CCzIC;AD0ID;;EACA,WAAA;CCvIC;ADyID;;;;EAEA,6BAAA;EACA,WAAA;CCrIC;ADyID;;EAEA,4BAAA;CCvIC",
                file: "Locations.vue",
                sourcesContent: [ null, ".locations {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.locations_block {\n  position: relative;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  padding: 16px 0 30px;\n  border-radius: 10px;\n  box-shadow: 0 10px 18px 0 rgba(19,36,52,0.1);\n}\n.locations_wrap {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 10;\n}\n.locations_overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: auto;\n  background: rgba(0,0,0,0.3);\n  opacity: 1;\n}\n.locations_close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.locations-enter-active,\n.locations-leave-active {\n  transition: opacity 0.19s ease;\n}\n.locations-enter-active .locations_overlay,\n.locations-leave-active .locations_overlay {\n  transition: opacity 0.19s ease;\n}\n.locations-enter-active .locations,\n.locations-leave-active .locations,\n.locations-enter-active .locations_upsell,\n.locations-leave-active .locations_upsell {\n  transition: opacity 0.19s ease, transform 0.19s ease;\n}\n.locations-enter,\n.locations-leave-to {\n  opacity: 0.9;\n}\n.locations-enter .locations_overlay,\n.locations-leave-to .locations_overlay {\n  opacity: 0;\n}\n.locations-enter .locations,\n.locations-leave-to .locations,\n.locations-enter .locations_upsell,\n.locations-leave-to .locations_upsell {\n  transform: translateY(-20px);\n  opacity: 0;\n}\n.locations-leave-to .locations,\n.locations-leave-to .locations_upsell {\n  transform: translateY(20px);\n}\n" ]
            },
            media: void 0
        });
    });
    const Ns = {
        props: {
            bgState: Object
        },
        data: () => ({
            disabling: !1
        }),
        methods: {
            disableOtherExtension() {
                this.disabling = !0, ta((() => zi(ga.DisableConflictingExtensions))());
            }
        }
    };
    var Is = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "proxyblocked color_dark -text"
        }, [ n("h1", {
            staticClass: "h1 g_margin_bottom__1"
        }, [ t._v("\n\t\t" + t._s(t.translate("this_browser_aint_big_enough")) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary g_margin_bottom_1"
        }, [ t._v("\n\t\t" + t._s(t.translate("another_browser_extension_is_controlling_your_proxy_settings")) + "\n\t") ]), t._v(" "), n("button", {
            staticClass: "btn -primary",
            attrs: {
                disabled: t.disabling
            },
            on: {
                click: t.disableOtherExtension
            }
        }, [ t._v("\n\t\t" + t._s(t.translate("disable_other_extension")) + "\n\t") ]) ]);
    };
    Is._withStripped = !0;
    var Ps = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Ns ? Ns.options : Ns) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/ProxyBlocked.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-5abf3fc3";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Is,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-5abf3fc3_0", {
            source: "\n.proxyblocked[data-v-5abf3fc3] {\n  background-color: #fff;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 16px;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/ProxyBlocked.vue", "ProxyBlocked.vue" ],
                names: [],
                mappings: ";AA0CA;EACA,uBAAA;EACA,QAAA;EACA,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,mBAAA;EACA,cAAA;CCzCC",
                file: "ProxyBlocked.vue",
                sourcesContent: [ null, ".proxyblocked {\n  background-color: #fff;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 16px;\n}\n" ]
            },
            media: void 0
        });
    });
    const Rs = {
        props: {
            value: String
        },
        data: () => ({
            infoVisible: !1
        }),
        computed: {
            showBubbleInfo() {
                return gs(this.value);
            }
        },
        methods: {
            hideInfo() {
                this.infoVisible = !1;
            },
            toggleInfo() {
                this.infoVisible = !this.infoVisible;
            }
        }
    };
    var Vs = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return t.showBubbleInfo ? n("div", [ n("button", {
            staticClass: "btn -icon -large tabKiller_info-btn",
            on: {
                click: t.toggleInfo
            }
        }, [ n("img", {
            attrs: {
                src: "/img/info-on-white" + (t.infoVisible ? "-active" : "") + ".svg",
                width: "32",
                height: "32"
            }
        }) ]), t._v(" "), n("transition", {
            attrs: {
                name: "bubble"
            }
        }, [ t.infoVisible ? n("div", {
            staticClass: "bubble"
        }, [ n("div", {
            staticClass: "bubble_body -tip -tip-bottom-left tabKiller_info"
        }, [ n("div", {
            staticClass: "text -regular color_dark -text g_margin_bottom__1"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("note")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("our_keyboard_shortcut_only_works_when_youre_on_an_http_or_https_page")) + "\n\t\t\t\t") ]), t._v(" "), n("button", {
            staticClass: "bubble_close",
            on: {
                click: t.hideInfo
            }
        }, [ n("img", {
            attrs: {
                src: "/img/close-on-light.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]) ]) : t._e() ]) ], 1) : n("div", {
            staticClass: "tabKiller_info-bottom"
        }, [ n("div", {
            staticClass: "text -regular color_blue -text g_margin_bottom__3"
        }, [ n("img", {
            staticClass: "tabKiller_info-img",
            attrs: {
                src: "/img/info-on-white-active.svg",
                width: "32",
                height: "32"
            }
        }), t._v("\n\t\t" + t._s(t.translate("note")) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "text -secondary"
        }, [ t._v("\n\t\t" + t._s(t.translate("our_keyboard_shortcut_only_works_when_youre_on_an_http_or_https_page")) + "\n\t") ]) ]);
    };
    Vs._withStripped = !0;
    var zs = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Rs ? Rs.options : Rs) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerInfo.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-2ff21121";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Vs,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-2ff21121_0", {
            source: "\n.tabKiller_info[data-v-2ff21121] {\n  bottom: 70px;\n}\n.tabKiller_info-bottom[data-v-2ff21121] {\n  position: absolute;\n  bottom: 15px;\n  left: 25px;\n  right: 25px;\n  z-index: 1;\n}\n.tabKiller_info-btn[data-v-2ff21121] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  z-index: 1;\n}\n[dir=rtl] .tabKiller_info-btn[data-v-2ff21121] {\n  left: auto;\n  right: 12px;\n}\n.tabKiller_info-img[data-v-2ff21121] {\n  vertical-align: middle;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerInfo.vue", "TabKillerInfo.vue" ],
                names: [],
                mappings: ";AAoEA;EACA,aAAA;CCnEC;ADqED;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;CCnEC;ADsED;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,WAAA;CCpEC;ADsED;EACA,WAAA;EACA,YAAA;CCpEC;ADwED;EACA,uBAAA;CCtEC",
                file: "TabKillerInfo.vue",
                sourcesContent: [ null, ".tabKiller_info {\n  bottom: 70px;\n}\n.tabKiller_info-bottom {\n  position: absolute;\n  bottom: 15px;\n  left: 25px;\n  right: 25px;\n  z-index: 1;\n}\n.tabKiller_info-btn {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  z-index: 1;\n}\n[dir=rtl] .tabKiller_info-btn {\n  left: auto;\n  right: 12px;\n}\n.tabKiller_info-img {\n  vertical-align: middle;\n}\n" ]
            },
            media: void 0
        });
    });
    const qs = {
        props: {
            value: String
        },
        data() {
            return {
                safePageDialog: !1,
                customInputValue: this.value,
                internalValue: this.value,
                isEditingCustom: !1,
                SafePage: cs
            };
        },
        computed: {
            isBlank() {
                return this.value === cs.Blank;
            },
            isNewTab() {
                return this.value === cs.NewTab;
            },
            isCustomInput() {
                return gs(this.internalValue);
            },
            safePage() {
                return this.bgState.tabKiller.safePage;
            }
        },
        watch: {
            value(t) {
                gs(t) ? this.customInputValue = t : this.customInputValue = "", this.internalValue = t;
            }
        },
        methods: {
            handleEnterKey() {
                this.$refs.input && this.$refs.input.blur();
            },
            setToNewTab() {
                this.updateValue(null, cs.NewTab), this.customInputValue = "", this.toggleSafePageDialog(), 
                this.trackChangeEvent(da.SafePageTab);
            },
            setToBlank() {
                this.updateValue(null, cs.Blank), this.customInputValue = "", this.toggleSafePageDialog(), 
                this.trackChangeEvent(da.SafePageBlank);
            },
            setToCustom() {
                this.isCustomInput || (this.customInputValue = "", this.updateValue(null, ""), this.trackChangeEvent(da.SafePageCustom)), 
                this.toggleSafePageDialog(), this.$nextTick(() => {
                    this.$refs.input && this.$refs.input.focus();
                });
            },
            toggleSafePageDialog() {
                this.safePageDialog = !this.safePageDialog;
            },
            updateValue(t, e) {
                this.internalValue = e || this.customInputValue, ta((t => zi(Ra.SafePageValueChange, {
                    value: t
                }))(this.internalValue));
            },
            trackChangeEvent(t) {
                ta(Mi(la.TabKiller, ua.ChangePage, t));
            }
        }
    };
    var Ms = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "tabKiller_safePage"
        }, [ n("div", {
            staticClass: "tabKiller_dialog"
        }, [ t.isCustomInput ? n("div", {
            staticClass: "tabKiller_safepage_input_wrapper"
        }, [ n("input", {
            directives: [ {
                name: "model",
                rawName: "v-model",
                value: t.customInputValue,
                expression: "customInputValue"
            } ],
            ref: "input",
            staticClass: "tabKiller_safepage_input block",
            domProps: {
                value: t.customInputValue
            },
            on: {
                change: t.updateValue,
                focus: function(e) {
                    t.isEditingCustom = !0;
                },
                blur: function(e) {
                    t.isEditingCustom = !1;
                },
                keyup: function(e) {
                    return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") ? t.handleEnterKey(e) : null;
                },
                input: function(e) {
                    e.target.composing || (t.customInputValue = e.target.value);
                }
            }
        }), t._v(" "), t.isEditingCustom ? n("button", {
            staticClass: "tabKiller_safepage_input_caret",
            on: {
                click: t.updateValue
            }
        }, [ n("img", {
            attrs: {
                src: "/img/enter-on-light.svg"
            }
        }) ]) : n("button", {
            staticClass: "tabKiller_safepage_input_caret",
            on: {
                mousedown: function(e) {
                    return e.preventDefault(), t.toggleSafePageDialog(e);
                }
            }
        }, [ n("img", {
            attrs: {
                src: "/img/arrow-down-on-white.svg"
            }
        }) ]) ]) : n("button", {
            staticClass: "tabKiller_dialog_toggle block",
            on: {
                click: t.toggleSafePageDialog
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_toggle_label"
        }, [ t.isBlank ? [ t._v("\n\t\t\t\t\t" + t._s(t.translate("blank_page")) + "\n\t\t\t\t") ] : [ t._v("\n\t\t\t\t\t" + t._s(t.translate("new_tab_page")) + "\n\t\t\t\t") ] ], 2), t._v(" "), n("img", {
            attrs: {
                src: "/img/arrow-down-on-white.svg",
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), n("transition", {
            attrs: {
                name: "tabKiller"
            }
        }, [ t.safePageDialog ? n("div", [ n("div", {
            staticClass: "tabKiller_dialog_contents block"
        }, [ n("div", {
            staticClass: "list"
        }, [ n("button", {
            staticClass: "tabKiller_dialog_contents_item list_item",
            on: {
                click: t.setToNewTab
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_contents_item_label"
        }, [ t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.translate("new_tab_page")) + "\n\t\t\t\t\t\t\t") ]), t._v(" "), t.isNewTab ? n("img", {
            attrs: {
                src: "/img/tick-on-light.svg",
                width: "20",
                height: "20"
            }
        }) : t._e() ]), t._v(" "), n("div", {
            staticClass: "list_separator"
        }), t._v(" "), n("button", {
            staticClass: "tabKiller_dialog_contents_item list_item",
            on: {
                click: t.setToBlank
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_contents_item_label"
        }, [ t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.translate("blank_page")) + "\n\t\t\t\t\t\t\t") ]), t._v(" "), t.isBlank ? n("img", {
            attrs: {
                src: "/img/tick-on-light.svg",
                width: "20",
                height: "20"
            }
        }) : t._e() ]), t._v(" "), n("div", {
            staticClass: "list_separator"
        }), t._v(" "), n("button", {
            staticClass: "tabKiller_dialog_contents_item list_item",
            on: {
                click: t.setToCustom
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_contents_item_label"
        }, [ t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.translate("custom_page")) + "\n\t\t\t\t\t\t\t") ]), t._v(" "), t.isCustomInput ? n("img", {
            attrs: {
                src: "/img/tick-on-light.svg",
                width: "20",
                height: "20"
            }
        }) : t._e() ]) ]) ]), t._v(" "), n("div", {
            staticClass: "tabKiller_dialog_overlay",
            on: {
                click: t.toggleSafePageDialog
            }
        }) ]) : t._e() ]) ], 1) ]);
    };
    Ms._withStripped = !0;
    var Us = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof qs ? qs.options : qs) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerSafePage.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-7d8e418b";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ms,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-7d8e418b_0", {
            source: "\n.tabKiller_safepage_input[data-v-7d8e418b] {\n  width: 100%;\n  padding-inline-end: 50px;\n  -webkit-padding-end: 50px;\n  -moz-padding-end: 50px;\n  border-bottom: 1px solid transparent;\n}\n.tabKiller_safepage_input[data-v-7d8e418b]:focus {\n  border-bottom-color: rgba(0,0,0,0.3);\n}\n.tabKiller_safepage_input_caret[data-v-7d8e418b] {\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n[dir=rtl] .tabKiller_safepage_input_caret[data-v-7d8e418b] {\n  right: auto;\n  left: 0;\n}\n.tabKiller_safepage_input_caret img[data-v-7d8e418b] {\n  vertical-align: middle;\n}\n.tabKiller_safepage_input_wrapper[data-v-7d8e418b] {\n  position: relative;\n  width: 100%;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerSafePage.vue", "TabKillerSafePage.vue" ],
                names: [],
                mappings: ";AAgLA;EACA,YAAA;EC/KE,yBAAyB;EACzB,0BAA0B;EAC1B,uBAAuB;ED+KzB,qCAAA;CC7KC;AD+KD;EACA,qCAAA;CC7KC;AD+KD;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,mBAAA;CC7KC;AD+KD;EACA,YAAA;EACA,QAAA;CC7KC;ADgLD;EACA,uBAAA;CC9KC;ADiLD;EACA,mBAAA;EACA,YAAA;CC/KC",
                file: "TabKillerSafePage.vue",
                sourcesContent: [ null, ".tabKiller_safepage_input {\n  width: 100%;\n  padding-inline-end: 50px;\n  -webkit-padding-end: 50px;\n  -moz-padding-end: 50px;\n  border-bottom: 1px solid transparent;\n}\n.tabKiller_safepage_input:focus {\n  border-bottom-color: rgba(0,0,0,0.3);\n}\n.tabKiller_safepage_input_caret {\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n[dir=rtl] .tabKiller_safepage_input_caret {\n  right: auto;\n  left: 0;\n}\n.tabKiller_safepage_input_caret img {\n  vertical-align: middle;\n}\n.tabKiller_safepage_input_wrapper {\n  position: relative;\n  width: 100%;\n}\n" ]
            },
            media: void 0
        });
    });
    const Hs = {
        props: {
            bgState: Object
        },
        data: () => ({
            modifierDialog: !1,
            keyDialog: !1
        }),
        computed: {
            availableShortcutKeys: () => As,
            availableShortcutKeyModifiers: () => Yi.os === Wi.Mac ? [ ss.None, ss.Meta, ss.Ctrl, ss.Alt, ss.Shift ] : [ ss.None, ss.Ctrl, ss.Alt, ss.Shift ],
            shortcutKey: {
                get() {
                    return this.bgState.tabKiller.shortcutKey;
                },
                set(t) {
                    ta((t => zi(Ra.ShortcutKeyChange, t))(t)), this.trackKeyboardEvent(this.shortcutKeyModifier, t);
                }
            },
            shortcutKeyModifier: {
                get() {
                    return this.bgState.tabKiller.shortcutKeyModifier;
                },
                set(t) {
                    ta((t => zi(Ra.ShortcutKeyModifierChange, t))(t)), this.trackKeyboardEvent(t, this.shortcutKey);
                }
            }
        },
        methods: {
            isTextNoCaps: t => t === ss.None,
            getModifierName: t => vs(t),
            setShortcutKey(t) {
                this.shortcutKey = t, this.toggleKeyDialog();
            },
            setShortcutModifier(t) {
                this.shortcutKeyModifier = t, this.toggleModifierDialog();
            },
            toggleModifierDialog() {
                this.modifierDialog = !this.modifierDialog;
            },
            toggleKeyDialog() {
                this.keyDialog = !this.keyDialog;
            },
            trackKeyboardEvent(t, e) {
                const n = `${t} + ${e}`.toLowerCase();
                ta(Mi(la.TabKiller, ua.Keyboard, n));
            }
        }
    };
    var Gs = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "tabKiller_shortcut"
        }, [ n("div", {
            staticClass: "tabKiller_dialog"
        }, [ n("button", {
            staticClass: "tabKiller_dialog_toggle block",
            class: {
                "-no-caps": t.isTextNoCaps(t.shortcutKeyModifier)
            },
            on: {
                click: t.toggleModifierDialog
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_toggle_label"
        }, [ t._v("\n\t\t\t\t" + t._s(t.getModifierName(t.shortcutKeyModifier)) + "\n\t\t\t") ]), t._v(" "), n("img", {
            attrs: {
                src: "/img/arrow-down-on-white.svg",
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), n("transition", {
            attrs: {
                name: "tabKiller"
            }
        }, [ t.modifierDialog ? n("div", [ n("div", {
            staticClass: "tabKiller_dialog_contents block"
        }, [ n("div", {
            staticClass: "list"
        }, [ t._l(t.availableShortcutKeyModifiers, function(e, r) {
            return [ r > 0 ? n("div", {
                key: e + "_sep",
                staticClass: "list_separator"
            }) : t._e(), t._v(" "), n("button", {
                key: e,
                staticClass: "tabKiller_dialog_contents_item list_item",
                class: {
                    "-no-caps": t.isTextNoCaps(e)
                },
                on: {
                    click: function(n) {
                        t.setShortcutModifier(e);
                    }
                }
            }, [ n("span", {
                staticClass: "tabKiller_dialog_contents_item_label"
            }, [ t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.getModifierName(e)) + "\n\t\t\t\t\t\t\t\t") ]), t._v(" "), e === t.shortcutKeyModifier ? n("img", {
                attrs: {
                    src: "/img/tick-on-light.svg",
                    width: "20",
                    height: "20"
                }
            }) : t._e() ]) ];
        }) ], 2) ]), t._v(" "), n("div", {
            staticClass: "tabKiller_dialog_overlay",
            on: {
                click: t.toggleModifierDialog
            }
        }) ]) : t._e() ]) ], 1), t._v(" "), n("div", {
            staticClass: "tabKiller_shortcut_plus-icon text -large -semibold"
        }, [ t._v("\n\t\t+\n\t") ]), t._v(" "), n("div", {
            staticClass: "tabKiller_dialog"
        }, [ n("button", {
            staticClass: "tabKiller_dialog_toggle block",
            on: {
                click: t.toggleKeyDialog
            }
        }, [ n("span", {
            staticClass: "tabKiller_dialog_toggle_label"
        }, [ t._v("\n\t\t\t\t" + t._s(t.shortcutKey) + "\n\t\t\t") ]), t._v(" "), n("img", {
            attrs: {
                src: "/img/arrow-down-on-white.svg",
                width: "20",
                height: "20"
            }
        }) ]), t._v(" "), n("transition", {
            attrs: {
                name: "tabKiller"
            }
        }, [ t.keyDialog ? n("div", [ n("div", {
            staticClass: "tabKiller_dialog_contents block"
        }, [ n("div", {
            staticClass: "list"
        }, [ t._l(t.availableShortcutKeys, function(e, r) {
            return [ r > 0 ? n("div", {
                key: e + "_sep",
                staticClass: "list_separator"
            }) : t._e(), t._v(" "), n("button", {
                key: e,
                staticClass: "tabKiller_dialog_contents_item list_item",
                on: {
                    click: function(n) {
                        t.setShortcutKey(e);
                    }
                }
            }, [ n("span", {
                staticClass: "tabKiller_dialog_contents_item_label"
            }, [ t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t\t\t\t") ]), t._v(" "), e === t.shortcutKey ? n("img", {
                attrs: {
                    src: "/img/tick-on-light.svg",
                    width: "20",
                    height: "20"
                }
            }) : t._e() ]) ];
        }) ], 2) ]), t._v(" "), n("div", {
            staticClass: "tabKiller_dialog_overlay",
            on: {
                click: t.toggleKeyDialog
            }
        }) ]) : t._e() ]) ], 1) ]);
    };
    Gs._withStripped = !0;
    var Ws = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Hs ? Hs.options : Hs) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerShortcut.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-56b3af78";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Gs,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-56b3af78_0", {
            source: "\n.tabKiller_shortcut[data-v-56b3af78] {\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n.tabKiller_shortcut_plus-icon[data-v-56b3af78] {\n  flex: 1 auto;\n  text-align: center;\n  align-self: center;\n}\n.tabKiller_dialog[data-v-56b3af78] {\n  width: 139px !important;\n}\n.tabKiller_dialog *[data-v-56b3af78] {\n  text-transform: uppercase;\n}\n.tabKiller_dialog .-no-caps[data-v-56b3af78] {\n  text-transform: none;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKillerShortcut.vue", "TabKillerShortcut.vue" ],
                names: [],
                mappings: ";AAuKA;EACA,cAAA;EACA,YAAA;EACA,QAAA;CCtKC;ADwKD;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;CCtKC;AD0KD;EACA,wBAAA;CCxKC;AD0KD;EACA,0BAAA;CCxKC;AD0KD;EACA,qBAAA;CCxKC",
                file: "TabKillerShortcut.vue",
                sourcesContent: [ null, ".tabKiller_shortcut {\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n.tabKiller_shortcut_plus-icon {\n  flex: 1 auto;\n  text-align: center;\n  align-self: center;\n}\n.tabKiller_dialog {\n  width: 139px !important;\n}\n.tabKiller_dialog * {\n  text-transform: uppercase;\n}\n.tabKiller_dialog .-no-caps {\n  text-transform: none;\n}\n" ]
            },
            media: void 0
        });
    });
    const Js = c("tabKiller"), Xs = {
        components: {
            Screen: sa,
            TabKillerInfo: zs,
            TabKillerSafePage: Us,
            TabKillerShortcut: Ws
        },
        props: {
            bgState: Object,
            popupState: Object,
            screenView: {
                type: String,
                required: !1
            }
        },
        computed: {
            shortcutEnabled: {
                get() {
                    return this.bgState.tabKiller.shortcutEnabled;
                },
                set(t) {
                    ta((t => zi(Ra.ShortcutEnabledChange, t))(t));
                }
            }
        },
        created() {
            !1 === this.popupState.tabKillerTooltipDismissed && this.hideTabKillerTooltip(), 
            this.screenView ? ta(Ui(this.screenView)) : Js("screenView not available, not tracking view");
        }
    };
    var Ys = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("screen", {
            attrs: {
                title: t.translate("tab_killer"),
                "with-back": "",
                "with-switcher": ""
            },
            model: {
                value: t.shortcutEnabled,
                callback: function(e) {
                    t.shortcutEnabled = e;
                },
                expression: "shortcutEnabled"
            }
        }, [ n("div", {
            staticClass: "tabKiller contents_main color_light -bg"
        }, [ n("div", {
            staticClass: "text tabKiller_title g_margin_bottom_4"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("looking_at_forbidden_sites_instantly_hide_tabs")) + "\n\t\t") ]), t._v(" "), n("div", {
            staticClass: "tabKiller_setting g_margin_bottom_1"
        }, [ n("div", {
            staticClass: "tabKiller_setting_title g_margin_bottom__1 text -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("keyboard_shortcut_to_toggle_tabs")) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "tabKiller_setting_value"
        }, [ n("tab-killer-shortcut", {
            attrs: {
                "bg-state": t.bgState
            }
        }) ], 1) ]), t._v(" "), n("div", {
            staticClass: "tabKiller_setting g_margin_bottom_1"
        }, [ n("div", {
            staticClass: "tabKiller_setting_title g_margin_bottom__1 text -secondary"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("open_tab_thats_safe_for_work")) + "\n\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "tabKiller_setting_value"
        }, [ n("tab-killer-safe-page", {
            attrs: {
                value: t.bgState.tabKiller.safePage.value
            }
        }) ], 1) ]), t._v(" "), n("tab-killer-info", {
            attrs: {
                value: t.bgState.tabKiller.safePage.value
            }
        }) ], 1) ]);
    };
    Ys._withStripped = !0;
    var Qs = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof Xs ? Xs.options : Xs) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKiller.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-9329bb40";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: Ys,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-9329bb40_0", {
            source: "\n.tabKiller[data-v-9329bb40] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n  padding: 30px 16px;\n}\n.tabKiller_setting.-inline[data-v-9329bb40] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[data-v-9329bb40] .tabKiller_dialog {\n  width: 100%;\n  position: relative;\n}\n[data-v-9329bb40] .tabKiller_dialog_toggle {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[data-v-9329bb40] .tabKiller_dialog_toggle_label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[data-v-9329bb40] .tabKiller_dialog_contents {\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 374px;\n  overflow-y: auto;\n  z-index: 5;\n}\n[data-v-9329bb40] .tabKiller_dialog_contents_item {\n  display: flex;\n  align-items: center;\n}\n[data-v-9329bb40] .tabKiller_dialog_contents_item_label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[data-v-9329bb40] .tabKiller_dialog_overlay {\n  display: block;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #132434;\n  opacity: 0.3;\n}\n.tabKiller-enter-active[data-v-9329bb40],\n.tabKiller-leave-active[data-v-9329bb40] {\n  transition: min-width 0.19s ease;\n}\n.tabKiller-enter-active .tabKiller_shortcut_dialog_overlay[data-v-9329bb40],\n.tabKiller-leave-active .tabKiller_shortcut_dialog_overlay[data-v-9329bb40],\n.tabKiller-enter-active .tabKiller_shortcut_dialog_contents[data-v-9329bb40],\n.tabKiller-leave-active .tabKiller_shortcut_dialog_contents[data-v-9329bb40] {\n  transition: opacity 0.19s ease;\n}\n.tabKiller-enter[data-v-9329bb40],\n.tabKiller-leave-to[data-v-9329bb40] {\n  min-width: 1px;\n}\n.tabKiller-enter .tabKiller_shortcut_dialog_overlay[data-v-9329bb40],\n.tabKiller-leave-to .tabKiller_shortcut_dialog_overlay[data-v-9329bb40],\n.tabKiller-enter .tabKiller_shortcut_dialog_contents[data-v-9329bb40],\n.tabKiller-leave-to .tabKiller_shortcut_dialog_contents[data-v-9329bb40] {\n  opacity: 0;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/TabKiller.vue", "TabKiller.vue" ],
                names: [],
                mappings: ";AA+FA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;CC9FC;ADiGD;EACA,cAAA;EACA,+BAAA;EACA,oBAAA;CC/FC;ADmGD;EACA,YAAA;EACA,mBAAA;CCjGC;ADmGD;EACA,cAAA;EACA,YAAA;EACA,oBAAA;CCjGC;ADmGD;EACA,QAAA;EACA,oBAAA;EACA,iBAAA;EACA,wBAAA;CCjGC;ADoGD;EACA,WAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;CClGC;ADoGD;EACA,cAAA;EACA,oBAAA;CClGC;ADoGD;EACA,QAAA;EACA,oBAAA;EACA,iBAAA;EACA,wBAAA;CClGC;ADsGD;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,aAAA;CCpGC;ADyGD;;EAGA,iCAAA;CCxGC;AD0GD;;;;EAEA,+BAAA;CCtGC;ADyGD;;EAEA,eAAA;CCvGC;ADyGD;;;;EAEA,WAAA;CCrGC",
                file: "TabKiller.vue",
                sourcesContent: [ null, ".tabKiller {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n  padding: 30px 16px;\n}\n.tabKiller_setting.-inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n>>> .tabKiller_dialog {\n  width: 100%;\n  position: relative;\n}\n>>> .tabKiller_dialog_toggle {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n>>> .tabKiller_dialog_toggle_label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n>>> .tabKiller_dialog_contents {\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 374px;\n  overflow-y: auto;\n  z-index: 5;\n}\n>>> .tabKiller_dialog_contents_item {\n  display: flex;\n  align-items: center;\n}\n>>> .tabKiller_dialog_contents_item_label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n>>> .tabKiller_dialog_overlay {\n  display: block;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #132434;\n  opacity: 0.3;\n}\n.tabKiller-enter-active,\n.tabKiller-leave-active {\n  transition: min-width 0.19s ease;\n}\n.tabKiller-enter-active .tabKiller_shortcut_dialog_overlay,\n.tabKiller-leave-active .tabKiller_shortcut_dialog_overlay,\n.tabKiller-enter-active .tabKiller_shortcut_dialog_contents,\n.tabKiller-leave-active .tabKiller_shortcut_dialog_contents {\n  transition: opacity 0.19s ease;\n}\n.tabKiller-enter,\n.tabKiller-leave-to {\n  min-width: 1px;\n}\n.tabKiller-enter .tabKiller_shortcut_dialog_overlay,\n.tabKiller-leave-to .tabKiller_shortcut_dialog_overlay,\n.tabKiller-enter .tabKiller_shortcut_dialog_contents,\n.tabKiller-leave-to .tabKiller_shortcut_dialog_contents {\n  opacity: 0;\n}\n" ]
            },
            media: void 0
        });
    });
    let Zs;
    !function(t) {
        t.IsSupportedChange = "webrtc.isSupportedChange", t.IsAvailableChange = "webrtc.isAvailableChange", 
        t.IsEnabledChange = "webrtc.isEnabledChange", t.Toggle = "webrtc.toggle", t.DisableConflictingExtensions = "webrtc.disableConflictingExtensions";
    }(Zs || (Zs = {}));
    const tc = {
        components: {
            AutoConnectStatus: qa,
            TabKillerStatus: Cs,
            Switcher: oa,
            Screen: sa
        },
        props: {
            bgState: Object,
            popupState: Object
        },
        data: () => ({
            ScreenView: ca
        }),
        computed: {
            someSettingsDisabled() {
                return this.webRtcProtectionNotAvailable;
            },
            webRtcProtectionSupported() {
                return this.bgState.webRtc.isSupported;
            },
            webRtcProtectionNotAvailable() {
                return !this.bgState.webRtc.isAvailable;
            },
            webRtcProtectionEnabled: {
                get() {
                    return this.bgState.webRtc.isEnabled;
                },
                set(t) {
                    ta((() => zi(Zs.Toggle))());
                    const e = t ? da.On : da.Off;
                    ta(Mi(la.Settings, ua.WebRtcBlocker, e));
                }
            }
        },
        created() {
            ta(Ui(ca.Settings));
        },
        methods: {
            disableOtherExtension() {
                ta((() => zi(Zs.DisableConflictingExtensions))());
            }
        }
    };
    var ec = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("screen", {
            attrs: {
                "with-back": "",
                title: t.translate("settings")
            }
        }, [ n("div", {
            staticClass: "settings contents_secondary color_dark"
        }, [ t.someSettingsDisabled ? n("div", {
            staticClass: "settings_disabled"
        }, [ n("img", {
            staticClass: "settings_disabled_icon",
            attrs: {
                src: "/img/exclamation-mark-on-light.svg",
                width: "20",
                height: "20"
            }
        }), t._v(" "), n("div", {
            staticClass: "text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("some_settings_are_disabled_because_of_another_extension")) + "\n\n\t\t\t\t"), n("button", {
            staticClass: "a text",
            on: {
                click: t.disableOtherExtension
            }
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("disable_other_extension")) + "\n\t\t\t\t") ]) ]) ]) : t._e(), t._v(" "), t.someSettingsDisabled ? n("div", {
            staticClass: "settings_separator"
        }) : t._e(), t._v(" "), n("router-link", {
            staticClass: "settings_item",
            attrs: {
                to: {
                    name: "autoConnect",
                    params: {
                        screenView: t.ScreenView.AutoDisguiseSettings
                    }
                },
                tag: "button"
            }
        }, [ n("div", {
            staticClass: "settings_item_info"
        }, [ n("div", {
            staticClass: "settings_item_title"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("auto_disguise")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "settings_item_desc text -secondary"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("automatically_disguise_your_location_on_specific_websites")) + "\n\t\t\t\t") ]), t._v(" "), n("auto-connect-status", {
            staticClass: "settings_item_value text -secondary",
            attrs: {
                "bg-state": t.bgState
            }
        }) ], 1), t._v(" "), n("div", {
            staticClass: "settings_item_action -arrow"
        }, [ n("img", {
            attrs: {
                src: "/img/arrow-right-on-dark.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]), t._v(" "), n("div", {
            staticClass: "settings_separator"
        }), t._v(" "), n("router-link", {
            staticClass: "settings_item",
            attrs: {
                to: {
                    name: "tabKiller",
                    params: {
                        screenView: t.ScreenView.TabKillerSettings
                    }
                },
                tag: "button"
            }
        }, [ n("div", {
            staticClass: "settings_item_info"
        }, [ n("div", {
            staticClass: "settings_item_title"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("tab_killer")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "settings_item_desc text -secondary"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("instantly_hide_all_open_browser_tabs")) + "\n\t\t\t\t") ]), t._v(" "), n("tab-killer-status", {
            staticClass: "settings_item_value text -secondary",
            attrs: {
                "bg-state": t.bgState
            }
        }) ], 1), t._v(" "), n("div", {
            staticClass: "settings_item_action -arrow"
        }, [ n("img", {
            attrs: {
                src: "/img/arrow-right-on-dark.svg",
                width: "20",
                height: "20"
            }
        }) ]) ]), t._v(" "), n("div", {
            staticClass: "settings_separator"
        }), t._v(" "), t.webRtcProtectionSupported ? n("div", {
            staticClass: "settings_item"
        }, [ n("div", {
            staticClass: "settings_item_info",
            class: {
                "-inactive": t.webRtcProtectionNotAvailable
            }
        }, [ n("div", {
            staticClass: "settings_item_title"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("web_rtc_blocker")) + "\n\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "settings_item_desc text -secondary"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("disguise_my_ip_address_when_using_browser_based_voice_and_video_chats")) + "\n\t\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "settings_item_action"
        }, [ n("switcher", {
            attrs: {
                disabled: t.webRtcProtectionNotAvailable
            },
            model: {
                value: t.webRtcProtectionEnabled,
                callback: function(e) {
                    t.webRtcProtectionEnabled = e;
                },
                expression: "webRtcProtectionEnabled"
            }
        }) ], 1) ]) : t._e() ], 1) ]);
    };
    ec._withStripped = !0;
    var nc = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof tc ? tc.options : tc) || {};
        c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Settings.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = "data-v-4fc82af2";
        {
            let t;
            if (e && (t = function(t) {
                e.call(this, function t() {
                    const e = document.head || document.getElementsByTagName("head")[0], n = t.styles || (t.styles = {}), r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, o) {
                        if (document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) return;
                        const i = r ? o.media || "default" : t, a = n[i] || (n[i] = {
                            ids: [],
                            parts: [],
                            element: void 0
                        });
                        if (!a.ids.includes(t)) {
                            let n = o.source, s = a.ids.length;
                            if (a.ids.push(t), r && (a.element = a.element || document.querySelector("style[data-group=" + i + "]")), 
                            !a.element) {
                                const t = a.element = document.createElement("style");
                                t.type = "text/css", o.media && t.setAttribute("media", o.media), r && (t.setAttribute("data-group", i), 
                                t.setAttribute("data-next-index", "0")), e.appendChild(t);
                            }
                            if (r && (s = parseInt(a.element.getAttribute("data-next-index")), a.element.setAttribute("data-next-index", s + 1)), 
                            a.element.styleSheet) a.parts.push(n), a.element.styleSheet.cssText = a.parts.filter(Boolean).join("\n"); else {
                                const t = document.createTextNode(n), e = a.element.childNodes;
                                e[s] && a.element.removeChild(e[s]), e.length ? a.element.insertBefore(t, e[s]) : a.element.appendChild(t);
                            }
                        }
                    };
                }());
            }), void 0 !== t) if (c.functional) {
                const e = c.render;
                c.render = function(n, r) {
                    return t.call(r), e(n, r);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, t) : [ t ];
            }
        }
        return c;
    }({
        render: ec,
        staticRenderFns: []
    }, function(t) {
        t && t("data-v-4fc82af2_0", {
            source: "\n.settings[data-v-4fc82af2] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n}\n.settings_item[data-v-4fc82af2] {\n  display: flex;\n  flex-direction: row;\n  text-align: start;\n  align-items: center;\n  padding: 16px;\n  background-color: rgba(255,255,255,0);\n  transition: background-color 0.19s ease;\n}\n.settings_item[data-v-4fc82af2]:enabled:hover {\n  background-color: rgba(255,255,255,0.1);\n}\n.settings_item_info[data-v-4fc82af2] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding-inline-end: 10px;\n  -webkit-padding-end: 10px;\n  -moz-padding-end: 10px;\n}\n.settings_item_info.-inactive[data-v-4fc82af2] {\n  opacity: 0.5;\n}\n.settings_item_title[data-v-4fc82af2] {\n  margin-bottom: 10px;\n}\n.settings_item_value[data-v-4fc82af2] {\n  margin: 16px 0 4px 16px;\n}\n.settings_item_desc[data-v-4fc82af2] {\n  margin-bottom: 4px;\n}\n.settings_item_action[data-v-4fc82af2] {\n  display: flex;\n}\n.settings_item_action.-arrow[data-v-4fc82af2] {\n  display: flex;\n  font-size: 50px;\n  align-items: baseline;\n  flex: 0 0 50px;\n  justify-content: flex-end;\n  line-height: 15px;\n}\n[dir=rtl] .settings_item_action.-arrow img[data-v-4fc82af2] {\n  transform: scaleX(-1);\n}\n.settings_separator[data-v-4fc82af2] {\n  margin: 0 16px;\n  flex: 0 0 1px;\n  background-color: rgba(225,225,225,0.2);\n}\n.settings_disabled[data-v-4fc82af2] {\n  display: flex;\n  margin: 16px;\n  padding: 16px;\n  background-color: rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.settings_disabled_icon[data-v-4fc82af2] {\n  margin-inline-end: 10px;\n  -webkit-margin-end: 10px;\n  -moz-margin-end: 10px;\n  flex: 0 0 20px;\n}\n",
            map: {
                version: 3,
                sources: [ "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Settings.vue", "Settings.vue" ],
                names: [],
                mappings: ";AAqJA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;CCpJC;ADsJD;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,sCAAA;EACA,wCAAA;CCpJC;ADsJD;EACA,wCAAA;CCpJC;ADuJD;EACA,QAAA;EACA,cAAA;EACA,uBAAA;ECrJE,yBAAyB;EACzB,0BAA0B;EAC1B,uBAAuB;CACxB;ADqJD;EACA,aAAA;CCnJC;ADuJD;EACA,oBAAA;CCrJC;ADwJD;EACA,wBAAA;CCtJC;ADyJD;EACA,mBAAA;CCvJC;AD0JD;EACA,cAAA;CCxJC;AD0JD;EACA,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,eAAA;EACA,0BAAA;EACA,kBAAA;CCxJC;AD0JD;EACA,sBAAA;CCxJC;AD8JD;EACA,eAAA;EACA,cAAA;EACA,wCAAA;CC5JC;AD+JD;EACA,cAAA;EACA,aAAA;EACA,cAAA;EACA,kCAAA;EACA,oBAAA;CC7JC;AD+JD;EC7JE,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;ED6JxB,eAAA;CC3JC",
                file: "Settings.vue",
                sourcesContent: [ null, ".settings {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n}\n.settings_item {\n  display: flex;\n  flex-direction: row;\n  text-align: start;\n  align-items: center;\n  padding: 16px;\n  background-color: rgba(255,255,255,0);\n  transition: background-color 0.19s ease;\n}\n.settings_item:enabled:hover {\n  background-color: rgba(255,255,255,0.1);\n}\n.settings_item_info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding-inline-end: 10px;\n  -webkit-padding-end: 10px;\n  -moz-padding-end: 10px;\n}\n.settings_item_info.-inactive {\n  opacity: 0.5;\n}\n.settings_item_title {\n  margin-bottom: 10px;\n}\n.settings_item_value {\n  margin: 16px 0 4px 16px;\n}\n.settings_item_desc {\n  margin-bottom: 4px;\n}\n.settings_item_action {\n  display: flex;\n}\n.settings_item_action.-arrow {\n  display: flex;\n  font-size: 50px;\n  align-items: baseline;\n  flex: 0 0 50px;\n  justify-content: flex-end;\n  line-height: 15px;\n}\n[dir=rtl] .settings_item_action.-arrow img {\n  transform: scaleX(-1);\n}\n.settings_separator {\n  margin: 0 16px;\n  flex: 0 0 1px;\n  background-color: rgba(225,225,225,0.2);\n}\n.settings_disabled {\n  display: flex;\n  margin: 16px;\n  padding: 16px;\n  background-color: rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.settings_disabled_icon {\n  margin-inline-end: 10px;\n  -webkit-margin-end: 10px;\n  -moz-margin-end: 10px;\n  flex: 0 0 20px;\n}\n" ]
            },
            media: void 0
        });
    });
    pn.use(Pi);
    const rc = c("popup"), oc = new Pi({
        routes: [ {
            path: "/",
            component: Ts,
            name: "dashboard",
            children: [ {
                path: "locations",
                component: js,
                name: "locations"
            }, {
                path: "drawer",
                component: Fs
            } ]
        }, {
            path: "/tabKiller",
            component: Qs,
            props: !0,
            name: "tabKiller"
        }, {
            path: "/autoConnect",
            component: Ta,
            props: !0,
            name: "autoConnect",
            children: [ {
                path: "site",
                component: ja,
                props: !0,
                name: "autoConnectSite"
            } ]
        }, {
            path: "/settings",
            component: nc,
            name: "settings"
        }, {
            path: "/about",
            component: va
        } ]
    });
    pn.mixin({
        methods: {
            hideAutoConnectTooltip() {
                this.updatePopupState({
                    ...this.popupState,
                    autoConnectTooltipDismissed: !0
                });
            },
            hideSwitchTooltip() {
                this.updatePopupState({
                    ...this.popupState,
                    switchTooltipDismissed: !0
                });
            },
            hideTabKillerTooltip() {
                this.updatePopupState({
                    ...this.popupState,
                    tabKillerTooltipDismissed: !0
                });
            },
            updatePopupState(t) {
                this.$root.$emit("update-popup-state", t);
            }
        }
    });
    const ic = {
        components: {
            ProxyBlocked: Ps
        },
        router: oc,
        props: {
            bgState: Object,
            hash: String,
            storage: Object
        },
        data() {
            const t = this.storage.get("_popup") || {};
            return rc("popup state: %O", t), {
                popupState: t,
                currentTabHost: ""
            };
        },
        computed: {
            isAvailable() {
                return this.bgState.proxy.isAvailable;
            }
        },
        created() {
            this.$root.$on("update-popup-state", this.updatePopupStateEventHandler.bind(this)), 
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, t => {
                this.updateCurrentTabHost(t[0].url), chrome.tabs.onUpdated.addListener((e, n) => {
                    e === t[0].id && n.url && this.updateCurrentTabHost(n.url);
                });
            });
        },
        methods: {
            updatePopupStateEventHandler(t) {
                rc("changing popup state from %O to %O", this.popupState, t), this.storage.set("_popup", {
                    ...t
                }), this.popupState = t;
            },
            updateCurrentTabHost(t) {
                try {
                    const e = new URL(t);
                    this.currentTabHost = e.host;
                } catch (t) {
                    rc("could not extract host from current tab url: %O", t);
                }
            }
        }
    };
    var ac = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            attrs: {
                id: "app"
            }
        }, [ this.isAvailable ? e("router-view", {
            attrs: {
                "bg-state": this.bgState,
                "current-tab-host": this.currentTabHost,
                hash: this.hash,
                "popup-state": this.popupState
            }
        }) : e("proxy-blocked", {
            attrs: {
                "bg-state": this.bgState
            }
        }) ], 1);
    };
    ac._withStripped = !0;
    var sc = function(t, e, n, r, o, i, a, s) {
        const c = ("function" == typeof ic ? ic.options : ic) || {};
        return c.__file = "/home/docker-slave-01/work/840bacd06bbe1ce2/src/html/popup/hma/Popup.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: ac,
        staticRenderFns: []
    });
    const cc = c("browserStorage");
    let lc;
    !function(t) {
        t.Startup = "startup", t.GetState = "getState", t.StateChange = "stateChange", t.Installed = "installed", 
        t.Updated = "updated";
    }(lc || (lc = {}));
    const uc = () => zi(lc.GetState);
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = browser);
    const dc = new class {
        constructor() {
            Hi(this, "cache", void 0), Hi(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(t) {
            return new Promise(e => {
                chrome && chrome.storage || e(), this.usingStorage = !0, chrome.storage.local.get(t || null, t => {
                    this.cache = t, e();
                });
            });
        }
        get(t) {
            return this.cache[t];
        }
        set(t, e) {
            null == e || void 0 === e ? (this.usingStorage && chrome.storage.local.remove(t, () => {
                chrome.runtime.lastError && cc('could not remove key "%s" from browser storage (%O)', t, chrome.runtime.lastError);
            }), delete this.cache[t]) : (this.usingStorage && chrome.storage.local.set({
                [t]: e
            }, () => {
                chrome.runtime.lastError && cc('could not set key "%s" in browser storage (%O)', t, chrome.runtime.lastError);
            }), this.cache[t] = e);
        }
    }();
    let pc;
    const fc = c("popup");
    dc.init().then(function() {
        var t, e;
        return t = lc.StateChange, e = (t => {
            fc("background state changed: %O", t.state), pc && pc(t.state);
        }), chrome.runtime.onMessage.addListener(function(n, r, o) {
            n && n.type && n.value && n.type === t && e && e(n.value);
        }), new Promise(function(t) {
            ta(uc(), e => {
                fc("background state: %O", e.state), t(e.state);
            });
        });
    }).then(function(t) {
        pn.mixin({
            methods: {
                translate: (t, e) => hs(t, e)
            }
        });
        const e = new pn({
            components: {
                Popup: sc
            },
            data: {
                bgState: t,
                hash: location.hash
            },
            el: "#app",
            render(t) {
                return t(sc, {
                    props: {
                        bgState: this.bgState,
                        hash: this.hash,
                        storage: dc
                    }
                });
            },
            created() {
                const t = this.translate("language_code");
                if (t) {
                    const e = document.querySelector("html");
                    e.setAttribute("lang", t), e.setAttribute("dir", us.includes((ds || chrome.i18n.getUILanguage()).split("-")[0]) ? ls.Rtl : ls.Ltr);
                }
            }
        });
        pc = (t => {
            e.bgState = t;
        }), window.addEventListener("hashchange", () => {
            e.hash = location.hash.replace("#", "");
        }, !1);
    });
}();
