var head = function(t) {
function e(e) {
for (var n, o, i = e[0], a = e[1], s = 0, c = []; s < i.length; s++) o = i[s], r[o] && c.push(r[o][0]), 
r[o] = 0;
for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
for (u && u(e); c.length; ) c.shift()();
}
var n = {}, r = {
3: 0
};
function o(e) {
if (n[e]) return n[e].exports;
var r = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
}
o.e = function(t) {
var e = [], n = r[t];
if (0 !== n) if (n) e.push(n[2]); else {
var i = new Promise(function(e, o) {
n = r[t] = [ e, o ];
});
e.push(n[2] = i);
var a, s = document.getElementsByTagName("head")[0], u = document.createElement("script");
u.charset = "utf-8", u.timeout = 120, o.nc && u.setAttribute("nonce", o.nc), u.src = function(t) {
return o.p + "" + ({
27: "authClient",
30: "vendors~authClient"
}[t] || t) + "-" + t + ".5c8793b5ad1c5a73c4c5.js";
}(t), a = function(e) {
u.onerror = u.onload = null, clearTimeout(c);
var n = r[t];
if (0 !== n) {
if (n) {
var o = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src, a = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
a.type = o, a.request = i, n[1](a);
}
r[t] = void 0;
}
};
var c = setTimeout(function() {
a({
type: "timeout",
target: u
});
}, 12e4);
u.onerror = u.onload = a, s.appendChild(u);
}
return Promise.all(e);
}, o.m = t, o.c = n, o.d = function(t, e, n) {
o.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: n
});
}, o.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, o.t = function(t, e) {
if (1 & e && (t = o(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
if (o.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function(e) {
return t[e];
}.bind(null, r));
return n;
}, o.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return o.d(e, "a", e), e;
}, o.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, o.p = "/pack/", o.oe = function(t) {
throw t;
};
var i = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], a = i.push.bind(i);
i.push = e, i = i.slice();
for (var s = 0; s < i.length; s++) e(i[s]);
var u = a;
return o(o.s = 291);
}({
0: function(t, e) {
t.exports = {
lang: "en",
currency: {
code: "USD",
sign: "$"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW"
};
},
10: function(t, e) {
function n(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
var t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, t.exports = n;
},
113: function(t, e) {
var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
"number" == typeof __g && (__g = n);
},
130: function(t, e) {
function n() {
var t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
n();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
n(), t.preventDefault();
}), function() {
function t() {
var t = document.getElementsByClassName("sidebar__navigation-link_active");
t[0] && t[0].classList.remove("sidebar__navigation-link_active");
var e, n = document.getElementsByTagName("h2");
for (e = 0; e < n.length; e++) {
var r = n[e];
if (r.getBoundingClientRect().top > 1) break;
}
if (--e >= 0) {
var o = n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"), i = document.querySelector('.sidebar__navigation-link a[href="' + o + '"]');
o && i && i.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
t(), window.addEventListener("scroll", t);
});
}();
},
144: function(t, e) {
var n = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
t.exports = function() {
if (n) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date()).find(function(t) {
return "timeZoneName" == t.type;
}).value;
var t = -new Date().getTimezoneOffset(), e = new Date().toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return e[0].match(/[+-]/) ? e = e[0] : e[e.length - 1].match(/[+-]/) ? e = e[e.length - 1] : e[e.length - 1].match(/[A-Z]{2,}/) ? e = e[e.length - 1] : (e = "GMT", 
t > 0 && (e += "+" + t / 60), t < 0 && (e += "-" + -t / 60)), e;
};
},
17: function(t, e, n) {
var r = n(113), o = n(286), i = n(327), a = n(288), s = n(335), u = function t(e, n, u) {
var c, l, d, f, h = e & t.F, m = e & t.G, p = e & t.P, y = e & t.B, _ = m ? r : e & t.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, v = m ? o : o[n] || (o[n] = {}), g = v.prototype || (v.prototype = {});
for (c in m && (u = n), u) d = ((l = !h && _ && void 0 !== _[c]) ? _ : u)[c], f = y && l ? s(d, r) : p && "function" == typeof d ? s(Function.call, d) : d, 
_ && a(_, c, d, e & t.U), v[c] != d && i(v, c, f), p && g[c] != d && (g[c] = d);
};
r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, 
t.exports = u;
},
2: function(t, e, n) {
"use strict";
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function o(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function i(t) {
return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
function a(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && s(t, e);
}
function s(t, e) {
return (s = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function u(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function c(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function l(t, e, n) {
return e && c(t.prototype, e), n && c(t, n), t;
}
n.r(e), n.d(e, "init", function() {
return h;
}), n.d(e, "Info", function() {
return p;
}), n.d(e, "Warning", function() {
return y;
}), n.d(e, "Success", function() {
return _;
}), n.d(e, "Error", function() {
return v;
});
var d = n(3), f = function() {
function t() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
u(this, t), this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
return l(t, [ {
key: "register",
value: function(t) {
var e = this;
this.notifications.unshift(t), setTimeout(function() {
return e.recalculate();
}, 20);
}
}, {
key: "unregister",
value: function(t) {
var e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
}, {
key: "recalculate",
value: function() {
var t = this, e = this.verticalSpace;
this.notifications.forEach(function(n) {
n.top = e, e += n.height + t.verticalSpace;
});
}
} ]), t;
}();
function h(t) {
window.notificationManager || (window.notificationManager = new f(t));
}
var m = function() {
function t(e, n, r) {
u(this, t);
var o = '<div class="notification notification_popup notification_'.concat(n, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", o), this.elem = document.body.lastElementChild, 
r) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = r;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
return l(t, [ {
key: "close",
value: function() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
}, {
key: "setupCloseHandler",
value: function() {
var t = this;
this.delegate(".notification__close", "click", function() {
return t.close();
});
}
}, {
key: "setupCloseTimeout",
value: function() {
var t = this;
this.timeout && setTimeout(function() {
return t.close();
}, this.timeout);
}
}, {
key: "TIMEOUT_DEFAULT",
get: function() {
return 3e3;
}
}, {
key: "TIMEOUT_SLOW",
get: function() {
return 5e3;
}
}, {
key: "TIMEOUT_FAST",
get: function() {
return 1500;
}
}, {
key: "height",
get: function() {
return this.elem.offsetHeight;
}
}, {
key: "top",
set: function(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
} ]), t;
}();
d.delegateMixin(m.prototype);
var p = function(t) {
function e(t, n) {
return u(this, e), o(this, i(e).call(this, t, "info", n));
}
return a(e, m), e;
}(), y = function(t) {
function e(t, n) {
return u(this, e), o(this, i(e).call(this, t, "warning", n));
}
return a(e, m), e;
}(), _ = function(t) {
function e(t, n) {
return u(this, e), o(this, i(e).call(this, t, "success", n));
}
return a(e, m), e;
}(), v = function(t) {
function e(t, n) {
return u(this, e), o(this, i(e).call(this, t, "error", n));
}
return a(e, m), l(e, [ {
key: "TIMEOUT_DEFAULT",
get: function() {
return 5e3;
}
} ]), e;
}();
},
20: function(t, e, n) {
n(21), t.exports = n(286).String.matchAll;
},
21: function(t, e, n) {
"use strict";
var r = n(17), o = n(338), i = n(287), a = n(439), s = n(446), u = RegExp.prototype, c = function(t, e) {
this._r = t, this._s = e;
};
n(463)(c, "RegExp String", function() {
var t = this._r.exec(this._s);
return {
value: t,
done: null === t
};
}), r(r.P, "String", {
matchAll: function(t) {
if (o(this), !a(t)) throw TypeError(t + " is not a regexp!");
var e = String(this), n = "flags" in u ? String(t.flags) : s.call(t), r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
return r.lastIndex = i(t.lastIndex), new c(r, e);
}
});
},
281: function(t, e) {
function n(t) {
return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
t.exports = function(t) {
return "object" === n(t) ? null !== t : "function" == typeof t;
};
},
282: function(t, e, n) {
var r = n(281);
t.exports = function(t) {
if (!r(t)) throw TypeError(t + " is not an object!");
return t;
};
},
283: function(t, e, n) {
var r = n(425)("wks"), o = n(344), i = n(113).Symbol, a = "function" == typeof i;
(t.exports = function(t) {
return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t));
}).store = r;
},
284: function(t, e, n) {
var r = n(282), o = n(449), i = n(341), a = Object.defineProperty;
e.f = n(285) ? Object.defineProperty : function(t, e, n) {
if (r(t), e = i(e, !0), r(n), o) try {
return a(t, e, n);
} catch (t) {}
if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
return "value" in n && (t[e] = n.value), t;
};
},
285: function(t, e, n) {
t.exports = !n(93)(function() {
return 7 != Object.defineProperty({}, "a", {
get: function() {
return 7;
}
}).a;
});
},
286: function(t, e) {
var n = t.exports = {
version: "2.6.5"
};
"number" == typeof __e && (__e = n);
},
287: function(t, e, n) {
var r = n(339), o = Math.min;
t.exports = function(t) {
return t > 0 ? o(r(t), 9007199254740991) : 0;
};
},
288: function(t, e, n) {
var r = n(113), o = n(327), i = n(290), a = n(344)("src"), s = n(35), u = ("" + s).split("toString");
n(286).inspectSource = function(t) {
return s.call(t);
}, (t.exports = function(t, e, n, s) {
var c = "function" == typeof n;
c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, a) || o(n, a, t[e] ? "" + t[e] : u.join(String(e)))), 
t === r ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)));
})(Function.prototype, "toString", function() {
return "function" == typeof this && this[a] || s.call(this);
});
},
290: function(t, e) {
var n = {}.hasOwnProperty;
t.exports = function(t, e) {
return n.call(t, e);
};
},
291: function(t, e, n) {
n(292), e.login = n(300), n(301), e.resizeOnload = n(58), n(302), n(303), n(130), 
n(305), n(307), n(308), n(309), n(2).init(), n(310), n(311);
},
292: function(t, e, n) {
n(293), n(299);
},
293: function(t, e, n) {
function r(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
for (var e, n = document.createDocumentFragment(), r = t.length, o = -1; ++o < r; ) e = t[o], 
n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
throw new Error("DOM Exception 8");
}
var o = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace: function() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend: function() {
this.insertBefore(r(arguments), this.firstChild);
},
append: function() {
this.appendChild(r(arguments));
},
remove: function() {
var t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(t) {
for (var e = this; e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (var i in o) Element.prototype[i] || (Element.prototype[i] = o[i]);
n(294), n(295), n(296), n(297), n(298);
},
294: function(t, e) {
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
var n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
295: function(t, e) {
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
var n = {
enumerable: !0,
get: function() {
"use strict";
var t, e, n, r, o, i, a = this.attributes, s = a.length, u = function(t) {
return t.charAt(1).toUpperCase();
}, c = function() {
return this;
}, l = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < s; t++) if ((i = a[t]) && i.name && /^data-\w[\w\-]*$/.test(i.name)) {
n = i.value, o = (r = i.name).substr(5).replace(/-./g, u);
try {
Object.defineProperty(e, o, {
enumerable: this.enumerable,
get: c.bind(n || ""),
set: l.bind(this, r)
});
} catch (t) {
e[o] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", n);
} catch (t) {
n.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", n);
}
}
},
296: function(t, e) {
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
297: function(t, e) {
var n;
n = 0, window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
var r = new Date().getTime(), o = Math.max(0, 16 - (r - n)), i = window.setTimeout(function() {
t(r + o);
}, o);
return n = r + o, i;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
},
298: function(t, e) {
(function() {
"use strict";
var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
function e(e) {
var n = t.has(e);
return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e;
}
function n(t) {
var e = t.isConnected;
if (void 0 !== e) return e;
for (;t && !(t.__CE_isImportDocument || t instanceof Document); ) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
}
function r(t, e) {
for (;e && e !== t && !e.nextSibling; ) e = e.parentNode;
return e && e !== t ? e.nextSibling : null;
}
function o(t, e, n) {
n = void 0 === n ? new Set() : n;
for (var i = t; i; ) {
if (i.nodeType === Node.ELEMENT_NODE) {
var a = i;
e(a);
var s = a.localName;
if ("link" === s && "import" === a.getAttribute("rel")) {
if ((i = a.import) instanceof Node && !n.has(i)) for (n.add(i), i = i.firstChild; i; i = i.nextSibling) o(i, e, n);
i = r(t, a);
continue;
}
if ("template" === s) {
i = r(t, a);
continue;
}
if (a = a.__CE_shadowRoot) for (a = a.firstChild; a; a = a.nextSibling) o(a, e, n);
}
i = i.firstChild ? i.firstChild : r(t, i);
}
}
function i(t, e, n) {
t[e] = n;
}
function a() {
this.a = new Map(), this.f = new Map(), this.c = [], this.b = !1;
}
function s(t, e) {
t.b = !0, t.c.push(e);
}
function u(t, e) {
t.b && o(e, function(e) {
return c(t, e);
});
}
function c(t, e) {
if (t.b && !e.__CE_patched) {
e.__CE_patched = !0;
for (var n = 0; n < t.c.length; n++) t.c[n](e);
}
}
function l(t, e) {
var n = [];
for (o(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state ? t.connectedCallback(r) : h(t, r);
}
}
function d(t, e) {
var n = [];
for (o(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state && t.disconnectedCallback(r);
}
}
function f(t, e, n) {
var r = (n = void 0 === n ? {} : n).u || new Set(), i = n.h || function(e) {
return h(t, e);
}, a = [];
if (o(e, function(e) {
if ("link" === e.localName && "import" === e.getAttribute("rel")) {
var n = e.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
var n = e.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var o = new Set(r);
o.delete(n), f(t, n, {
u: o,
h: i
});
}
});
} else a.push(e);
}, r), t.b) for (e = 0; e < a.length; e++) c(t, a[e]);
for (e = 0; e < a.length; e++) i(a[e]);
}
function h(t, e) {
if (void 0 === e.__CE_state) {
var r = e.ownerDocument;
if ((r.defaultView || r.__CE_isImportDocument && r.__CE_hasRegistry) && (r = t.a.get(e.localName))) {
r.constructionStack.push(e);
var o = r.constructorFunction;
try {
try {
if (new o() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
r.constructionStack.pop();
}
} catch (t) {
throw e.__CE_state = 2, t;
}
if (e.__CE_state = 1, e.__CE_definition = r, r.attributeChangedCallback) for (r = r.observedAttributes, 
o = 0; o < r.length; o++) {
var i = r[o], a = e.getAttribute(i);
null !== a && t.attributeChangedCallback(e, i, null, a, null);
}
n(e) && t.connectedCallback(e);
}
}
}
function m(t) {
var e = document;
this.c = t, this.a = e, this.b = void 0, f(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
this.b.observe(this.a, {
childList: !0,
subtree: !0
}));
}
function p(t) {
t.b && t.b.disconnect();
}
function y(t) {
if (t.a) throw Error("Already resolved.");
t.a = void 0, t.b && t.b(void 0);
}
function _(t) {
this.c = !1, this.a = t, this.j = new Map(), this.f = function(t) {
return t();
}, this.b = !1, this.i = [], this.o = new m(t);
}
a.prototype.connectedCallback = function(t) {
var e = t.__CE_definition;
e.connectedCallback && e.connectedCallback.call(t);
}, a.prototype.disconnectedCallback = function(t) {
var e = t.__CE_definition;
e.disconnectedCallback && e.disconnectedCallback.call(t);
}, a.prototype.attributeChangedCallback = function(t, e, n, r, o) {
var i = t.__CE_definition;
i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(e) && i.attributeChangedCallback.call(t, e, n, r, o);
}, m.prototype.f = function(t) {
var e = this.a.readyState;
for ("interactive" !== e && "complete" !== e || p(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, r = 0; r < n.length; r++) f(this.c, n[r]);
}, _.prototype.l = function(t, n) {
var r = this;
if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (this.c) throw Error("A custom element is already being defined.");
this.c = !0;
try {
var o = function(t) {
var e = i[t];
if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
return e;
}, i = n.prototype;
if (!(i instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
var a = o("connectedCallback"), s = o("disconnectedCallback"), u = o("adoptedCallback"), c = o("attributeChangedCallback"), l = n.observedAttributes || [];
} catch (t) {
return;
} finally {
this.c = !1;
}
n = {
localName: t,
constructorFunction: n,
connectedCallback: a,
disconnectedCallback: s,
adoptedCallback: u,
attributeChangedCallback: c,
observedAttributes: l,
constructionStack: []
}, function(t, e, n) {
t.a.set(e, n), t.f.set(n.constructorFunction, n);
}(this.a, t, n), this.i.push(n), this.b || (this.b = !0, this.f(function() {
return function(t) {
if (!1 !== t.b) {
t.b = !1;
for (var e = t.i, n = [], r = new Map(), o = 0; o < e.length; o++) r.set(e[o].localName, []);
for (f(t.a, document, {
h: function(e) {
if (void 0 === e.__CE_state) {
var o = e.localName, i = r.get(o);
i ? i.push(e) : t.a.a.get(o) && n.push(e);
}
}
}), o = 0; o < n.length; o++) h(t.a, n[o]);
for (;0 < e.length; ) {
var i = e.shift();
o = i.localName, i = r.get(i.localName);
for (var a = 0; a < i.length; a++) h(t.a, i[a]);
(o = t.j.get(o)) && y(o);
}
}
}(r);
}));
}, _.prototype.h = function(t) {
f(this.a, t);
}, _.prototype.get = function(t) {
if (t = this.a.a.get(t)) return t.constructorFunction;
}, _.prototype.m = function(t) {
if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
var n = this.j.get(t);
return n ? n.c : (n = new function() {
var t = this;
this.b = this.a = void 0, this.c = new Promise(function(e) {
t.b = e, t.a && e(t.a);
});
}(), this.j.set(t, n), this.a.a.get(t) && !this.i.some(function(e) {
return e.localName === t;
}) && y(n), n.c);
}, _.prototype.s = function(t) {
p(this.o);
var e = this.f;
this.f = function(n) {
return t(function() {
return e(n);
});
};
}, window.CustomElementRegistry = _, _.prototype.define = _.prototype.l, _.prototype.upgrade = _.prototype.h, 
_.prototype.get = _.prototype.get, _.prototype.whenDefined = _.prototype.m, _.prototype.polyfillWrapFlushCallback = _.prototype.s;
var v = window.Document.prototype.createElement, g = window.Document.prototype.createElementNS, b = window.Document.prototype.importNode, w = window.Document.prototype.prepend, S = window.Document.prototype.append, M = window.DocumentFragment.prototype.prepend, k = window.DocumentFragment.prototype.append, D = window.Node.prototype.cloneNode, T = window.Node.prototype.appendChild, Y = window.Node.prototype.insertBefore, L = window.Node.prototype.removeChild, E = window.Node.prototype.replaceChild, O = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), x = window.Element.prototype.attachShadow, C = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), P = window.Element.prototype.getAttribute, A = window.Element.prototype.setAttribute, N = window.Element.prototype.removeAttribute, F = window.Element.prototype.getAttributeNS, H = window.Element.prototype.setAttributeNS, W = window.Element.prototype.removeAttributeNS, j = window.Element.prototype.insertAdjacentElement, R = window.Element.prototype.insertAdjacentHTML, U = window.Element.prototype.prepend, I = window.Element.prototype.append, G = window.Element.prototype.before, z = window.Element.prototype.after, V = window.Element.prototype.replaceWith, q = window.Element.prototype.remove, J = window.HTMLElement, Z = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), B = window.HTMLElement.prototype.insertAdjacentElement, $ = window.HTMLElement.prototype.insertAdjacentHTML, X = new function() {}();
function K(t, e, r) {
function o(e) {
return function(r) {
for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
i = [];
for (var a = [], s = 0; s < o.length; s++) {
var u = o[s];
if (u instanceof Element && n(u) && a.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) i.push(u); else i.push(u);
}
for (e.apply(this, o), o = 0; o < a.length; o++) d(t, a[o]);
if (n(this)) for (o = 0; o < i.length; o++) (a = i[o]) instanceof Element && l(t, a);
};
}
void 0 !== r.g && (e.prepend = o(r.g)), void 0 !== r.append && (e.append = o(r.append));
}
var Q, tt = window.customElements;
if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
var et = new a();
Q = et, window.HTMLElement = function() {
function t() {
var t = this.constructor, e = Q.f.get(t);
if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
var n = e.constructionStack;
if (0 === n.length) return n = v.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), 
n.__CE_state = 1, n.__CE_definition = e, c(Q, n), n;
var r = n[e = n.length - 1];
if (r === X) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
return n[e] = X, Object.setPrototypeOf(r, t.prototype), c(Q, r), r;
}
return t.prototype = J.prototype, Object.defineProperty(t.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: t
}), t;
}(), function() {
var t = et;
i(Document.prototype, "createElement", function(e) {
if (this.__CE_hasRegistry) {
var n = t.a.get(e);
if (n) return new n.constructorFunction();
}
return e = v.call(this, e), c(t, e), e;
}), i(Document.prototype, "importNode", function(e, n) {
return e = b.call(this, e, !!n), this.__CE_hasRegistry ? f(t, e) : u(t, e), e;
}), i(Document.prototype, "createElementNS", function(e, n) {
if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
var r = t.a.get(n);
if (r) return new r.constructorFunction();
}
return e = g.call(this, e, n), c(t, e), e;
}), K(t, Document.prototype, {
g: w,
append: S
});
}(), K(et, DocumentFragment.prototype, {
g: M,
append: k
}), function() {
function t(t, r) {
Object.defineProperty(t, "textContent", {
enumerable: r.enumerable,
configurable: !0,
get: r.get,
set: function(t) {
if (this.nodeType === Node.TEXT_NODE) r.set.call(this, t); else {
var o = void 0;
if (this.firstChild) {
var i = this.childNodes, a = i.length;
if (0 < a && n(this)) {
o = Array(a);
for (var s = 0; s < a; s++) o[s] = i[s];
}
}
if (r.set.call(this, t), o) for (t = 0; t < o.length; t++) d(e, o[t]);
}
}
});
}
var e = et;
i(Node.prototype, "insertBefore", function(t, r) {
if (t instanceof DocumentFragment) {
var o = Array.prototype.slice.apply(t.childNodes);
if (t = Y.call(this, t, r), n(this)) for (r = 0; r < o.length; r++) l(e, o[r]);
return t;
}
return o = n(t), r = Y.call(this, t, r), o && d(e, t), n(this) && l(e, t), r;
}), i(Node.prototype, "appendChild", function(t) {
if (t instanceof DocumentFragment) {
var r = Array.prototype.slice.apply(t.childNodes);
if (t = T.call(this, t), n(this)) for (var o = 0; o < r.length; o++) l(e, r[o]);
return t;
}
return r = n(t), o = T.call(this, t), r && d(e, t), n(this) && l(e, t), o;
}), i(Node.prototype, "cloneNode", function(t) {
return t = D.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? f(e, t) : u(e, t), 
t;
}), i(Node.prototype, "removeChild", function(t) {
var r = n(t), o = L.call(this, t);
return r && d(e, t), o;
}), i(Node.prototype, "replaceChild", function(t, r) {
if (t instanceof DocumentFragment) {
var o = Array.prototype.slice.apply(t.childNodes);
if (t = E.call(this, t, r), n(this)) for (d(e, r), r = 0; r < o.length; r++) l(e, o[r]);
return t;
}
o = n(t);
var i = E.call(this, t, r), a = n(this);
return a && d(e, r), o && d(e, t), a && l(e, t), i;
}), O && O.get ? t(Node.prototype, O) : s(e, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
return t.join("");
},
set: function(t) {
for (;this.firstChild; ) L.call(this, this.firstChild);
T.call(this, document.createTextNode(t));
}
});
});
}(), function() {
function t(t, e) {
Object.defineProperty(t, "innerHTML", {
enumerable: e.enumerable,
configurable: !0,
get: e.get,
set: function(t) {
var r = this, i = void 0;
if (n(this) && (i = [], o(this, function(t) {
t !== r && i.push(t);
})), e.set.call(this, t), i) for (var s = 0; s < i.length; s++) {
var c = i[s];
1 === c.__CE_state && a.disconnectedCallback(c);
}
return this.ownerDocument.__CE_hasRegistry ? f(a, this) : u(a, this), t;
}
});
}
function e(t, e) {
i(t, "insertAdjacentElement", function(t, r) {
var o = n(r);
return t = e.call(this, t, r), o && d(a, r), n(t) && l(a, r), t;
});
}
function r(t, e) {
function n(t, e) {
for (var n = []; t !== e; t = t.nextSibling) n.push(t);
for (e = 0; e < n.length; e++) f(a, n[e]);
}
i(t, "insertAdjacentHTML", function(t, r) {
if ("beforebegin" === (t = t.toLowerCase())) {
var o = this.previousSibling;
e.call(this, t, r), n(o || this.parentNode.firstChild, this);
} else if ("afterbegin" === t) o = this.firstChild, e.call(this, t, r), n(this.firstChild, o); else if ("beforeend" === t) o = this.lastChild, 
e.call(this, t, r), n(o || this.firstChild, null); else {
if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
o = this.nextSibling, e.call(this, t, r), n(this.nextSibling, o);
}
});
}
var a = et;
x && i(Element.prototype, "attachShadow", function(t) {
return this.__CE_shadowRoot = x.call(this, t);
}), C && C.get ? t(Element.prototype, C) : Z && Z.get ? t(HTMLElement.prototype, Z) : s(a, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
return D.call(this, !0).innerHTML;
},
set: function(t) {
var e = "template" === this.localName, n = e ? this.content : this, r = g.call(document, this.namespaceURI, this.localName);
for (r.innerHTML = t; 0 < n.childNodes.length; ) L.call(n, n.childNodes[0]);
for (t = e ? r.content : r; 0 < t.childNodes.length; ) T.call(n, t.childNodes[0]);
}
});
}), i(Element.prototype, "setAttribute", function(t, e) {
if (1 !== this.__CE_state) return A.call(this, t, e);
var n = P.call(this, t);
A.call(this, t, e), e = P.call(this, t), a.attributeChangedCallback(this, t, n, e, null);
}), i(Element.prototype, "setAttributeNS", function(t, e, n) {
if (1 !== this.__CE_state) return H.call(this, t, e, n);
var r = F.call(this, t, e);
H.call(this, t, e, n), n = F.call(this, t, e), a.attributeChangedCallback(this, e, r, n, t);
}), i(Element.prototype, "removeAttribute", function(t) {
if (1 !== this.__CE_state) return N.call(this, t);
var e = P.call(this, t);
N.call(this, t), null !== e && a.attributeChangedCallback(this, t, e, null, null);
}), i(Element.prototype, "removeAttributeNS", function(t, e) {
if (1 !== this.__CE_state) return W.call(this, t, e);
var n = F.call(this, t, e);
W.call(this, t, e);
var r = F.call(this, t, e);
n !== r && a.attributeChangedCallback(this, e, n, r, t);
}), B ? e(HTMLElement.prototype, B) : j && e(Element.prototype, j), $ ? r(HTMLElement.prototype, $) : R && r(Element.prototype, R), 
K(a, Element.prototype, {
g: U,
append: I
}), function(t) {
function e(e) {
return function(r) {
for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
i = [];
for (var a = [], s = 0; s < o.length; s++) {
var u = o[s];
if (u instanceof Element && n(u) && a.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) i.push(u); else i.push(u);
}
for (e.apply(this, o), o = 0; o < a.length; o++) d(t, a[o]);
if (n(this)) for (o = 0; o < i.length; o++) (a = i[o]) instanceof Element && l(t, a);
};
}
var r = Element.prototype;
void 0 !== G && (r.before = e(G)), void 0 !== G && (r.after = e(z)), void 0 !== V && i(r, "replaceWith", function(e) {
for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
o = [];
for (var i = [], a = 0; a < r.length; a++) {
var s = r[a];
if (s instanceof Element && n(s) && i.push(s), s instanceof DocumentFragment) for (s = s.firstChild; s; s = s.nextSibling) o.push(s); else o.push(s);
}
for (a = n(this), V.apply(this, r), r = 0; r < i.length; r++) d(t, i[r]);
if (a) for (d(t, this), r = 0; r < o.length; r++) (i = o[r]) instanceof Element && l(t, i);
}), void 0 !== q && i(r, "remove", function() {
var e = n(this);
q.call(this), e && d(t, this);
});
}(a);
}(), document.__CE_hasRegistry = !0;
var nt = new _(et);
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: nt
});
}
}).call(self);
},
299: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
n(20), String.prototype.startsWith || (String.prototype.startsWith = function(t) {
var e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
var e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return -1 !== n && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" === r(t) && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(t, e);
});
},
3: function(t, e) {
function n(t, e, n, r, o) {
t.addEventListener(n, function(t) {
var n = function(t, e) {
for (var n = t.target; n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(o || this, t);
});
}
n.delegateMixin = function(t) {
t.delegate = function(t, e, r) {
n(this.elem, t, e, r, this);
};
}, t.exports = n;
},
300: function(t, e, n) {
var r = n(10), o = !0, i = !1, a = void 0;
try {
for (var s, u = document.querySelectorAll("[data-action-login]")[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
var c = s.value, l = !0, d = !1, f = void 0;
try {
for (var h, m = c.classList[Symbol.iterator](); !(l = (h = m.next()).done); l = !0) {
var p = h.value;
p.endsWith("_unready") && c.classList.remove(p);
}
} catch (t) {
d = !0, f = t;
} finally {
try {
l || null == m.return || m.return();
} finally {
if (d) throw f;
}
}
}
} catch (t) {
i = !0, a = t;
} finally {
try {
o || null == u.return || u.return();
} finally {
if (i) throw a;
}
}
function y() {
var t = new Modal({
hasClose: !1,
mixClass: "login-modal"
}), e = new r();
t.setContent(e.elem), e.start(), Promise.all([ n.e(30), n.e(27) ]).then(function() {
t.remove(), new (n(73))();
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-login") && (t.preventDefault(), y());
}), t.exports = y;
},
301: function(t, e) {
function n() {
var t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), n());
}), t.exports = n;
},
302: function(t, e, n) {
var r, o = n(665).loadDisqus, i = n(665).loadDisqusComments, a = n(665).loadDisqusIfVisible;
var s = 840;
function u() {
r || (r = window.requestAnimationFrame(function() {
!function() {
var t = document.querySelector(".sitetoolbar");
if (!t) return;
var e = document.querySelector(".sidebar");
if (e) {
var n = document.querySelector(".page"), r = n.classList.contains("page_profile") && "flex" === getComputedStyle(n).display ? 0 : Math.max(t.getBoundingClientRect().bottom, 0) + "px";
e.style.top = r, function() {
var t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), r = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
(r ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}();
}
o = document.documentElement.clientWidth <= s, i = document.querySelector('meta[name="viewport"]').content, 
i = i.replace(/user-scalable=\w+/, "user-scalable=" + (o ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = i, 
a();
var o, i;
}(), r = null;
}));
}
function c() {
window.location.hash.match(/#comment-/) && o(), i(), u();
}
window.addEventListener("resize-internal", u), window.addEventListener("scroll", u), 
window.addEventListener("resize", u), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", c) : c();
},
303: function(t, e) {
document.addEventListener("click", function(t) {
if (!t.target.closest) return;
t.target.closest(o + "__search-toggle") && (n || (r = document.querySelector(o), 
a = r.querySelector(o + "__search-input input"), r.querySelector(o + "__find").onmousedown = function(t) {
e = !0;
}, a.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", i());
}, a.onblur = function(t) {
!e && i();
}, n = !0), i());
var e, r, a;
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
var e = t.target.closest("[data-dropdown-toggler]");
if (!e) return;
e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
if (!t.target.closest(".sitetoolbar__nav-toggle")) return;
t.target.classList.toggle("sitetoolbar__nav-toggle_active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
var n = !1, r = "sitetoolbar", o = "." + r;
function i() {
var t, e = document.querySelector(o);
e.classList.toggle(r + "_search_open");
var n = e.querySelector(o + "__search-input input");
e.classList.contains(r + "_search_open") ? (n.focus(), (t = document.createElement("div")).className = "search-paranja", 
t.style.top = e.offsetHeight + "px", document.body.appendChild(t), document.body.classList.add("paranja-open")) : ((t = document.querySelector(".search-paranja")).parentNode.removeChild(t), 
document.body.classList.remove("paranja-open"));
}
},
305: function(t, e, n) {
function r() {
var t = document.querySelector('link[rel="next"]');
t && (document.querySelector('a[href="' + t.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = 'Ctrl + <span class="page__nav-text-arr">→</span>');
var e = document.querySelector('link[rel="prev"]');
e && (document.querySelector('a[href="' + e.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = 'Ctrl + <span class="page__nav-text-arr">←</span>');
}
n(306)(document, {
onRight: function() {
var t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
var t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if ((!document.activeElement || !~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) && t.ctrlKey) {
var e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
var n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", r) : r();
},
306: function(t, e) {
t.exports = function(t, e) {
var n, r, o, i, a, s = (e = e || {}).onRight || function() {}, u = e.onLeft || function() {}, c = e.tolerance || 50, l = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
var e = t.changedTouches[0];
o = 0, n = e.pageX, r = e.pageY, a = Date.now();
}), t.addEventListener("touchend", function(t) {
var e = t.changedTouches[0];
if (o = e.pageX - n, i = Date.now() - a, !(Math.abs(e.pageY - r) > c || i > d)) {
for (var f = !1, h = t.target; h != document.body; ) {
if (h.scrollWidth > h.clientWidth) {
f = !0;
break;
}
h = h.parentElement;
}
f || (o > l && s(t), o < -l && u(t));
}
});
};
},
307: function(t, e) {
var n;
document.addEventListener("mouseover", function(t) {
if (t.target.closest) {
var e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (n = e, e.classList.add("hover"));
}
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
n && (n.classList.remove("hover"), n = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
n && (n.contains(t.relatedTarget) || (n.classList.remove("hover"), n = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
308: function(t, e, n) {
var r = window.location.host, o = n(398);
document.addEventListener("click", function(t) {
if (1 == t.which && !t.defaultPrevented) {
var e = t.target.closest && t.target.closest("a");
if (e && (r != e.host || e.hasAttribute("data-track-outbound")) && ~[ "_self", "_top", "_parent" ].indexOf(e.target) && !(t.shiftKey || t.ctrlKey || t.altKey)) {
t.preventDefault();
var n = e.href;
window.ga("send", "event", {
eventCategory: "outbound",
eventAction: "click",
eventLabel: n,
hitCallback: o(function() {
document.location = n;
})
});
}
}
});
},
309: function(t, e, n) {
var r = n(2);
document.addEventListener("click", function(t) {
var e = t.target.closest("[data-banner-close]");
e && (localStorage["hideBanner" + e.dataset.bannerClose] = 1, new r.Success(e.dataset.bannerCloseMessage), 
e.parentNode.remove());
});
},
310: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function o(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function i(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function a(t) {
var e = "function" == typeof Map ? new Map() : void 0;
return (a = function(t) {
if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
var n;
if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
if (void 0 !== e) {
if (e.has(t)) return e.get(t);
e.set(t, r);
}
function r() {
return s(t, arguments, c(this).constructor);
}
return r.prototype = Object.create(t.prototype, {
constructor: {
value: r,
enumerable: !1,
writable: !0,
configurable: !0
}
}), u(r, t);
})(t);
}
function s(t, e, n) {
return (s = function() {
if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
if (Reflect.construct.sham) return !1;
if ("function" == typeof Proxy) return !0;
try {
return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
!0;
} catch (t) {
return !1;
}
}() ? Reflect.construct : function(t, e, n) {
var r = [ null ];
r.push.apply(r, e);
var o = new (Function.bind.apply(t, r))();
return n && u(o, n.prototype), o;
}).apply(null, arguments);
}
function u(t, e) {
return (u = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function c(t) {
return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
var l = n(53), d = n(144), f = function(t) {
function e() {
var t;
return function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, e), (t = i(this, c(e).call(this))).render(), t;
}
var n, r, s;
return function(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && u(t, e);
}(e, a(HTMLElement)), n = e, s = [ {
key: "observedAttributes",
get: function() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
} ], (r = [ {
key: "connectedCallback",
value: function() {
this.render();
}
}, {
key: "attributeChangedCallback",
value: function(t, e, n) {
this.render();
}
}, {
key: "format",
value: function(t, e, n) {
var r = l(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (r += " " + d()), r;
}
}, {
key: "render",
value: function() {
var t = this, e = [ "timestamp", "from", "to", "format" ].map(function(e) {
return t.getAttribute(e);
}).join(":");
if (this.lastParams !== e) if (this.lastParams = e, this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone"));
} else {
var n = [];
if ("{" !== this.getAttribute("from")[0] && "{" !== this.getAttribute("to")[0]) {
var r = new Date(this.getAttribute("from")), o = new Date(this.getAttribute("to")), i = this.getAttribute("format"), a = this.getAttribute("format");
r.getFullYear() === o.getFullYear() && (i = i.replace(/ YY(YY)?$/g, "")), r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate() || n.push(this.format(r, i)), 
n.push(this.format(o, a, this.hasAttribute("with-zone"))), this.innerHTML = n.join(" – ");
}
}
}
} ]) && o(n.prototype, r), s && o(n, s), e;
}();
window.DateLocalElement = f, window.customElements.define("date-local", f);
},
311: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function o(t, e) {
return function(t) {
if (Array.isArray(t)) return t;
}(t) || function(t, e) {
var n = [], r = !0, o = !1, i = void 0;
try {
for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
!e || n.length !== e); r = !0) ;
} catch (t) {
o = !0, i = t;
} finally {
try {
r || null == s.return || s.return();
} finally {
if (o) throw i;
}
}
return n;
}(t, e) || function() {
throw new TypeError("Invalid attempt to destructure non-iterable instance");
}();
}
function i(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function a(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function s(t) {
var e = "function" == typeof Map ? new Map() : void 0;
return (s = function(t) {
if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
var n;
if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
if (void 0 !== e) {
if (e.has(t)) return e.get(t);
e.set(t, r);
}
function r() {
return u(t, arguments, l(this).constructor);
}
return r.prototype = Object.create(t.prototype, {
constructor: {
value: r,
enumerable: !1,
writable: !0,
configurable: !0
}
}), c(r, t);
})(t);
}
function u(t, e, n) {
return (u = function() {
if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
if (Reflect.construct.sham) return !1;
if ("function" == typeof Proxy) return !0;
try {
return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
!0;
} catch (t) {
return !1;
}
}() ? Reflect.construct : function(t, e, n) {
var r = [ null ];
r.push.apply(r, e);
var o = new (Function.bind.apply(t, r))();
return n && c(o, n.prototype), o;
}).apply(null, arguments);
}
function c(t, e) {
return (c = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function l(t) {
return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
var d = n(53), f = n(144), h = n(312), m = n(0).lang, p = function(t) {
function e() {
var t;
return function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, e), (t = a(this, l(e).call(this))).render(), t;
}
var n, r, u;
return function(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && c(t, e);
}(e, s(HTMLElement)), n = e, u = [ {
key: "observedAttributes",
get: function() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
} ], (r = [ {
key: "attributeChangedCallback",
value: function(t, e, n) {
this.render();
}
}, {
key: "connectedCallback",
value: function() {
this.render();
}
}, {
key: "format",
value: function(t, e, n) {
var r = d(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (r += " " + f()), r;
}
}, {
key: "render",
value: function() {
var t = this;
if ("{" !== this.getAttribute("weekdays")[0]) {
var e = [ "weekdays", "with-zone", "from", "to" ].map(function(e) {
return t.getAttribute(e);
}).join(":");
if (this.lastParams !== e) {
this.lastParams = e;
var n, r = this.getAttribute("weekdays").split(",").map(Number), i = this.getAttribute("from"), a = this.getAttribute("to"), s = o(h(r, i, a, -new Date().getTimezoneOffset()), 3);
r = s[0], i = s[1], a = s[2], n = "ru" === m ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
r = r.map(function(t) {
return n[t];
}), r = "ru" === m ? r.join("/") : r.join(", ");
var u = this.hasAttribute("with-zone") ? " " + f() : "";
this.innerHTML = r + " " + i + " – " + a + u;
}
}
}
} ]) && i(n.prototype, r), u && i(n, u), e;
}();
window.WeekRangeElement = p, window.customElements.define("week-range", p);
},
312: function(t, e) {
t.exports = function(t, e, n, r) {
r = +r, e.split && (e = e.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
e = 60 * e[0] + e[1] + r, n = 60 * n[0] + n[1] + r, e < 0 ? (e += 1440, n += 1440, 
t = t.map(function(t) {
return 1 === t ? 7 : t - 1;
})) : e >= 1440 && (e -= 1440, n -= 1440, t = t.map(function(t) {
return 7 === t ? 1 : t + 1;
})), n > 1440 && (n -= 1440), n < 0 && (n += 1440);
var o = function(t) {
return 0 === t ? "00" : t < 10 ? "0" + t : t;
};
return [ t, e = [ Math.floor(e / 60), e % 60 ].map(o).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(o).join(":") ];
};
},
327: function(t, e, n) {
var r = n(284), o = n(343);
t.exports = n(285) ? function(t, e, n) {
return r.f(t, e, o(1, n));
} : function(t, e, n) {
return t[e] = n, t;
};
},
328: function(t, e, n) {
var r = n(411), o = n(338);
t.exports = function(t) {
return r(o(t));
};
},
335: function(t, e, n) {
var r = n(336);
t.exports = function(t, e, n) {
if (r(t), void 0 === e) return t;
switch (n) {
case 1:
return function(n) {
return t.call(e, n);
};

case 2:
return function(n, r) {
return t.call(e, n, r);
};

case 3:
return function(n, r, o) {
return t.call(e, n, r, o);
};
}
return function() {
return t.apply(e, arguments);
};
};
},
336: function(t, e) {
t.exports = function(t) {
if ("function" != typeof t) throw TypeError(t + " is not a function!");
return t;
};
},
337: function(t, e) {
var n = {}.toString;
t.exports = function(t) {
return n.call(t).slice(8, -1);
};
},
338: function(t, e) {
t.exports = function(t) {
if (void 0 == t) throw TypeError("Can't call method on  " + t);
return t;
};
},
339: function(t, e) {
var n = Math.ceil, r = Math.floor;
t.exports = function(t) {
return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
};
},
341: function(t, e, n) {
var r = n(281);
t.exports = function(t, e) {
if (!r(t)) return t;
var n, o;
if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
throw TypeError("Can't convert object to primitive value");
};
},
343: function(t, e) {
t.exports = function(t, e) {
return {
enumerable: !(1 & t),
configurable: !(2 & t),
writable: !(4 & t),
value: e
};
};
},
344: function(t, e) {
var n = 0, r = Math.random();
t.exports = function(t) {
return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
};
},
345: function(t, e) {
t.exports = !1;
},
346: function(t, e, n) {
var r = n(451), o = n(428);
t.exports = Object.keys || function(t) {
return r(t, o);
};
},
347: function(t, e, n) {
var r = n(339), o = Math.max, i = Math.min;
t.exports = function(t, e) {
return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
};
},
348: function(t, e, n) {
var r = n(282), o = n(452), i = n(428), a = n(427)("IE_PROTO"), s = function() {}, u = function() {
var t, e = n(424)("iframe"), r = i.length;
for (e.style.display = "none", n(430).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), 
t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--; ) delete u.prototype[i[r]];
return u();
};
t.exports = Object.create || function(t, e) {
var n;
return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[a] = t) : n = u(), 
void 0 === e ? n : o(n, e);
};
},
35: function(t, e, n) {
t.exports = n(425)("native-function-to-string", Function.toString);
},
351: function(t, e, n) {
var r = n(284).f, o = n(290), i = n(283)("toStringTag");
t.exports = function(t, e, n) {
t && !o(t = n ? t : t.prototype, i) && r(t, i, {
configurable: !0,
value: e
});
};
},
37: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-au", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY h:mm A",
LLLL: "dddd, D MMMM YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
38: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-ca", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "YYYY-MM-DD",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
39: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-gb", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
398: function(t, e) {
t.exports = function(t) {
function e() {
e.wasCalled || (e.wasCalled = !0, t());
}
return setTimeout(e, 500), e;
};
},
4: function(t, e, n) {
(function(t) {
var r, o, i;
function a(t) {
return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
i = function() {
"use strict";
var e, r;
function o() {
return e.apply(null, arguments);
}
function i(t) {
return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
}
function s(t) {
return null != t && "[object Object]" === Object.prototype.toString.call(t);
}
function u(t) {
return void 0 === t;
}
function c(t) {
return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
}
function l(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function d(t, e) {
var n, r = [];
for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
return r;
}
function f(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function h(t, e) {
for (var n in e) f(e, n) && (t[n] = e[n]);
return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function m(t, e, n, r) {
return Oe(t, e, n, r, !0).utc();
}
function p(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
}), t._pf;
}
function y(t) {
if (null == t._isValid) {
var e = p(t), n = r.call(e.parsedDateParts, function(t) {
return null != t;
}), o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
null != Object.isFrozen && Object.isFrozen(t)) return o;
t._isValid = o;
}
return t._isValid;
}
function _(t) {
var e = m(NaN);
return null != t ? h(p(e), t) : p(e).userInvalidated = !0, e;
}
r = Array.prototype.some ? Array.prototype.some : function(t) {
for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return !0;
return !1;
};
var v = o.momentProperties = [];
function g(t, e) {
var n, r, o;
if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), u(e._i) || (t._i = e._i), 
u(e._f) || (t._f = e._f), u(e._l) || (t._l = e._l), u(e._strict) || (t._strict = e._strict), 
u(e._tzm) || (t._tzm = e._tzm), u(e._isUTC) || (t._isUTC = e._isUTC), u(e._offset) || (t._offset = e._offset), 
u(e._pf) || (t._pf = p(e)), u(e._locale) || (t._locale = e._locale), v.length > 0) for (n = 0; n < v.length; n++) u(o = e[r = v[n]]) || (t[r] = o);
return t;
}
var b = !1;
function w(t) {
g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === b && (b = !0, o.updateOffset(this), b = !1);
}
function S(t) {
return t instanceof w || null != t && null != t._isAMomentObject;
}
function M(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function k(t) {
var e = +t, n = 0;
return 0 !== e && isFinite(e) && (n = M(e)), n;
}
function D(t, e, n) {
var r, o = Math.min(t.length, e.length), i = Math.abs(t.length - e.length), a = 0;
for (r = 0; r < o; r++) (n && t[r] !== e[r] || !n && k(t[r]) !== k(e[r])) && a++;
return a + i;
}
function T(t) {
!1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function Y(t, e) {
var n = !0;
return h(function() {
if (null != o.deprecationHandler && o.deprecationHandler(null, t), n) {
for (var r, i = [], s = 0; s < arguments.length; s++) {
if (r = "", "object" === a(arguments[s])) {
for (var u in r += "\n[" + s + "] ", arguments[0]) r += u + ": " + arguments[0][u] + ", ";
r = r.slice(0, -2);
} else r = arguments[s];
i.push(r);
}
T((Array.prototype.slice.call(i).join(""), new Error().stack)), n = !1;
}
return e.apply(this, arguments);
}, e);
}
var L, E = {};
function O(t, e) {
null != o.deprecationHandler && o.deprecationHandler(t, e), E[t] || (T(), E[t] = !0);
}
function x(t) {
return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
}
function C(t, e) {
var n, r = h({}, t);
for (n in e) f(e, n) && (s(t[n]) && s(e[n]) ? (r[n] = {}, h(r[n], t[n]), h(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
for (n in t) f(t, n) && !f(e, n) && s(t[n]) && (r[n] = h({}, r[n]));
return r;
}
function P(t) {
null != t && this.set(t);
}
o.suppressDeprecationWarnings = !1, o.deprecationHandler = null, L = Object.keys ? Object.keys : function(t) {
var e, n = [];
for (e in t) f(t, e) && n.push(e);
return n;
};
var A = {};
function N(t, e) {
var n = t.toLowerCase();
A[n] = A[n + "s"] = A[e] = t;
}
function F(t) {
return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0;
}
function H(t) {
var e, n, r = {};
for (n in t) f(t, n) && (e = F(n)) && (r[e] = t[n]);
return r;
}
var W = {};
function j(t, e) {
W[t] = e;
}
function R(t, e, n) {
var r = "" + Math.abs(t), o = e - r.length;
return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var U = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, G = {}, z = {};
function V(t, e, n, r) {
var o = r;
"string" == typeof r && (o = function() {
return this[r]();
}), t && (z[t] = o), e && (z[e[0]] = function() {
return R(o.apply(this, arguments), e[1], e[2]);
}), n && (z[n] = function() {
return this.localeData().ordinal(o.apply(this, arguments), t);
});
}
function q(t, e) {
return t.isValid() ? (e = J(e, t.localeData()), G[e] = G[e] || function(t) {
var e, n, r, o = t.match(U);
for (e = 0, n = o.length; e < n; e++) z[o[e]] ? o[e] = z[o[e]] : o[e] = (r = o[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
return function(e) {
var r, i = "";
for (r = 0; r < n; r++) i += x(o[r]) ? o[r].call(e, t) : o[r];
return i;
};
}(e), G[e](t)) : t.localeData().invalidDate();
}
function J(t, e) {
var n = 5;
function r(t) {
return e.longDateFormat(t) || t;
}
for (I.lastIndex = 0; n >= 0 && I.test(t); ) t = t.replace(I, r), I.lastIndex = 0, 
n -= 1;
return t;
}
var Z = /\d/, B = /\d\d/, $ = /\d{3}/, X = /\d{4}/, K = /[+-]?\d{6}/, Q = /\d\d?/, tt = /\d\d\d\d?/, et = /\d\d\d\d\d\d?/, nt = /\d{1,3}/, rt = /\d{1,4}/, ot = /[+-]?\d{1,6}/, it = /\d+/, at = /[+-]?\d+/, st = /Z|[+-]\d\d:?\d\d/gi, ut = /Z|[+-]\d\d(?::?\d\d)?/gi, ct = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, lt = {};
function dt(t, e, n) {
lt[t] = x(e) ? e : function(t, r) {
return t && n ? n : e;
};
}
function ft(t, e) {
return f(lt, t) ? lt[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, o) {
return e || n || r || o;
})));
}
function ht(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var mt = {};
function pt(t, e) {
var n, r = e;
for ("string" == typeof t && (t = [ t ]), c(e) && (r = function(t, n) {
n[e] = k(t);
}), n = 0; n < t.length; n++) mt[t[n]] = r;
}
function yt(t, e) {
pt(t, function(t, n, r, o) {
r._w = r._w || {}, e(t, r._w, r, o);
});
}
function _t(t, e, n) {
null != e && f(mt, t) && mt[t](e, n._a, n, t);
}
var vt = 0, gt = 1, bt = 2, wt = 3, St = 4, Mt = 5, kt = 6, Dt = 7, Tt = 8;
function Yt(t) {
return Lt(t) ? 366 : 365;
}
function Lt(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
V("Y", 0, 0, function() {
var t = this.year();
return t <= 9999 ? "" + t : "+" + t;
}), V(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), V(0, [ "YYYY", 4 ], 0, "year"), V(0, [ "YYYYY", 5 ], 0, "year"), V(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
N("year", "y"), j("year", 1), dt("Y", at), dt("YY", Q, B), dt("YYYY", rt, X), dt("YYYYY", ot, K), 
dt("YYYYYY", ot, K), pt([ "YYYYY", "YYYYYY" ], vt), pt("YYYY", function(t, e) {
e[vt] = 2 === t.length ? o.parseTwoDigitYear(t) : k(t);
}), pt("YY", function(t, e) {
e[vt] = o.parseTwoDigitYear(t);
}), pt("Y", function(t, e) {
e[vt] = parseInt(t, 10);
}), o.parseTwoDigitYear = function(t) {
return k(t) + (k(t) > 68 ? 1900 : 2e3);
};
var Et, Ot = xt("FullYear", !0);
function xt(t, e) {
return function(n) {
return null != n ? (Pt(this, t, n), o.updateOffset(this, e), this) : Ct(this, t);
};
}
function Ct(t, e) {
return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function Pt(t, e, n) {
t.isValid() && !isNaN(n) && ("FullYear" === e && Lt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), At(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function At(t, e) {
if (isNaN(t) || isNaN(e)) return NaN;
var n, r = (e % (n = 12) + n) % n;
return t += (e - r) / 12, 1 === r ? Lt(t) ? 29 : 28 : 31 - r % 7 % 2;
}
Et = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return -1;
}, V("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), V("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), V("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), N("month", "M"), j("month", 8), dt("M", Q), dt("MM", Q, B), dt("MMM", function(t, e) {
return e.monthsShortRegex(t);
}), dt("MMMM", function(t, e) {
return e.monthsRegex(t);
}), pt([ "M", "MM" ], function(t, e) {
e[gt] = k(t) - 1;
}), pt([ "MMM", "MMMM" ], function(t, e, n, r) {
var o = n._locale.monthsParse(t, r, n._strict);
null != o ? e[gt] = o : p(n).invalidMonth = t;
});
var Nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ft = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var Ht = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Wt(t, e) {
var n;
if (!t.isValid()) return t;
if ("string" == typeof e) if (/^\d+$/.test(e)) e = k(e); else if (!c(e = t.localeData().monthsParse(e))) return t;
return n = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), 
t;
}
function jt(t) {
return null != t ? (Wt(this, t), o.updateOffset(this, !0), this) : Ct(this, "Month");
}
var Rt = ct;
var Ut = ct;
function It() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r = [], o = [], i = [];
for (e = 0; e < 12; e++) n = m([ 2e3, e ]), r.push(this.monthsShort(n, "")), o.push(this.months(n, "")), 
i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
for (r.sort(t), o.sort(t), i.sort(t), e = 0; e < 12; e++) r[e] = ht(r[e]), o[e] = ht(o[e]);
for (e = 0; e < 24; e++) i[e] = ht(i[e]);
this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function Gt(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), 
e;
}
function zt(t, e, n) {
var r = 7 + e - n;
return -((7 + Gt(t, 0, r).getUTCDay() - e) % 7) + r - 1;
}
function Vt(t, e, n, r, o) {
var i, a, s = 1 + 7 * (e - 1) + (7 + n - r) % 7 + zt(t, r, o);
return s <= 0 ? a = Yt(i = t - 1) + s : s > Yt(t) ? (i = t + 1, a = s - Yt(t)) : (i = t, 
a = s), {
year: i,
dayOfYear: a
};
}
function qt(t, e, n) {
var r, o, i = zt(t.year(), e, n), a = Math.floor((t.dayOfYear() - i - 1) / 7) + 1;
return a < 1 ? r = a + Jt(o = t.year() - 1, e, n) : a > Jt(t.year(), e, n) ? (r = a - Jt(t.year(), e, n), 
o = t.year() + 1) : (o = t.year(), r = a), {
week: r,
year: o
};
}
function Jt(t, e, n) {
var r = zt(t, e, n), o = zt(t + 1, e, n);
return (Yt(t) - r + o) / 7;
}
V("w", [ "ww", 2 ], "wo", "week"), V("W", [ "WW", 2 ], "Wo", "isoWeek"), N("week", "w"), 
N("isoWeek", "W"), j("week", 5), j("isoWeek", 5), dt("w", Q), dt("ww", Q, B), dt("W", Q), 
dt("WW", Q, B), yt([ "w", "ww", "W", "WW" ], function(t, e, n, r) {
e[r.substr(0, 1)] = k(t);
});
V("d", 0, "do", "day"), V("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), V("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), V("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), 
N("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), dt("d", Q), 
dt("e", Q), dt("E", Q), dt("dd", function(t, e) {
return e.weekdaysMinRegex(t);
}), dt("ddd", function(t, e) {
return e.weekdaysShortRegex(t);
}), dt("dddd", function(t, e) {
return e.weekdaysRegex(t);
}), yt([ "dd", "ddd", "dddd" ], function(t, e, n, r) {
var o = n._locale.weekdaysParse(t, r, n._strict);
null != o ? e.d = o : p(n).invalidWeekday = t;
}), yt([ "d", "e", "E" ], function(t, e, n, r) {
e[r] = k(t);
});
var Zt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var Xt = ct;
var Kt = ct;
var Qt = ct;
function te() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r, o, i, a = [], s = [], u = [], c = [];
for (e = 0; e < 7; e++) n = m([ 2e3, 1 ]).day(e), r = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), 
i = this.weekdays(n, ""), a.push(r), s.push(o), u.push(i), c.push(r), c.push(o), 
c.push(i);
for (a.sort(t), s.sort(t), u.sort(t), c.sort(t), e = 0; e < 7; e++) s[e] = ht(s[e]), 
u[e] = ht(u[e]), c[e] = ht(c[e]);
this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), 
this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
}
function ee() {
return this.hours() % 12 || 12;
}
function ne(t, e) {
V(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function re(t, e) {
return e._meridiemParse;
}
V("H", [ "HH", 2 ], 0, "hour"), V("h", [ "hh", 2 ], 0, ee), V("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
}), V("hmm", 0, 0, function() {
return "" + ee.apply(this) + R(this.minutes(), 2);
}), V("hmmss", 0, 0, function() {
return "" + ee.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2);
}), V("Hmm", 0, 0, function() {
return "" + this.hours() + R(this.minutes(), 2);
}), V("Hmmss", 0, 0, function() {
return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2);
}), ne("a", !0), ne("A", !1), N("hour", "h"), j("hour", 13), dt("a", re), dt("A", re), 
dt("H", Q), dt("h", Q), dt("k", Q), dt("HH", Q, B), dt("hh", Q, B), dt("kk", Q, B), 
dt("hmm", tt), dt("hmmss", et), dt("Hmm", tt), dt("Hmmss", et), pt([ "H", "HH" ], wt), 
pt([ "k", "kk" ], function(t, e, n) {
var r = k(t);
e[wt] = 24 === r ? 0 : r;
}), pt([ "a", "A" ], function(t, e, n) {
n._isPm = n._locale.isPM(t), n._meridiem = t;
}), pt([ "h", "hh" ], function(t, e, n) {
e[wt] = k(t), p(n).bigHour = !0;
}), pt("hmm", function(t, e, n) {
var r = t.length - 2;
e[wt] = k(t.substr(0, r)), e[St] = k(t.substr(r)), p(n).bigHour = !0;
}), pt("hmmss", function(t, e, n) {
var r = t.length - 4, o = t.length - 2;
e[wt] = k(t.substr(0, r)), e[St] = k(t.substr(r, 2)), e[Mt] = k(t.substr(o)), p(n).bigHour = !0;
}), pt("Hmm", function(t, e, n) {
var r = t.length - 2;
e[wt] = k(t.substr(0, r)), e[St] = k(t.substr(r));
}), pt("Hmmss", function(t, e, n) {
var r = t.length - 4, o = t.length - 2;
e[wt] = k(t.substr(0, r)), e[St] = k(t.substr(r, 2)), e[Mt] = k(t.substr(o));
});
var oe, ie = xt("Hours", !0), ae = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: Ft,
monthsShort: Ht,
week: {
dow: 0,
doy: 6
},
weekdays: Zt,
weekdaysMin: $t,
weekdaysShort: Bt,
meridiemParse: /[ap]\.?m?\.?/i
}, se = {}, ue = {};
function ce(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function le(e) {
var r = null;
if (!se[e] && void 0 !== t && t && t.exports) try {
r = oe._abbr;
n(44)("./" + e), de(r);
} catch (t) {}
return se[e];
}
function de(t, e) {
var n;
return t && ((n = u(e) ? he(t) : fe(t, e)) ? oe = n : "undefined" != typeof console && console.warn), 
oe._abbr;
}
function fe(t, e) {
if (null !== e) {
var n, r = ae;
if (e.abbr = t, null != se[t]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
r = se[t]._config; else if (null != e.parentLocale) if (null != se[e.parentLocale]) r = se[e.parentLocale]._config; else {
if (null == (n = le(e.parentLocale))) return ue[e.parentLocale] || (ue[e.parentLocale] = []), 
ue[e.parentLocale].push({
name: t,
config: e
}), null;
r = n._config;
}
return se[t] = new P(C(r, e)), ue[t] && ue[t].forEach(function(t) {
fe(t.name, t.config);
}), de(t), se[t];
}
return delete se[t], null;
}
function he(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return oe;
if (!i(t)) {
if (e = le(t)) return e;
t = [ t ];
}
return function(t) {
for (var e, n, r, o, i = 0; i < t.length; ) {
for (e = (o = ce(t[i]).split("-")).length, n = (n = ce(t[i + 1])) ? n.split("-") : null; e > 0; ) {
if (r = le(o.slice(0, e).join("-"))) return r;
if (n && n.length >= e && D(o, n, !0) >= e - 1) break;
e--;
}
i++;
}
return oe;
}(t);
}
function me(t) {
var e, n = t._a;
return n && -2 === p(t).overflow && (e = n[gt] < 0 || n[gt] > 11 ? gt : n[bt] < 1 || n[bt] > At(n[vt], n[gt]) ? bt : n[wt] < 0 || n[wt] > 24 || 24 === n[wt] && (0 !== n[St] || 0 !== n[Mt] || 0 !== n[kt]) ? wt : n[St] < 0 || n[St] > 59 ? St : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[kt] < 0 || n[kt] > 999 ? kt : -1, 
p(t)._overflowDayOfYear && (e < vt || e > bt) && (e = bt), p(t)._overflowWeeks && -1 === e && (e = Dt), 
p(t)._overflowWeekday && -1 === e && (e = Tt), p(t).overflow = e), t;
}
function pe(t, e, n) {
return null != t ? t : null != e ? e : n;
}
function ye(t) {
var e, n, r, i, a, s = [];
if (!t._d) {
for (r = function(t) {
var e = new Date(o.now());
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}(t), t._w && null == t._a[bt] && null == t._a[gt] && function(t) {
var e, n, r, o, i, a, s, u;
if (null != (e = t._w).GG || null != e.W || null != e.E) i = 1, a = 4, n = pe(e.GG, t._a[vt], qt(xe(), 1, 4).year), 
r = pe(e.W, 1), ((o = pe(e.E, 1)) < 1 || o > 7) && (u = !0); else {
i = t._locale._week.dow, a = t._locale._week.doy;
var c = qt(xe(), i, a);
n = pe(e.gg, t._a[vt], c.year), r = pe(e.w, c.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (u = !0) : null != e.e ? (o = e.e + i, 
(e.e < 0 || e.e > 6) && (u = !0)) : o = i;
}
r < 1 || r > Jt(n, i, a) ? p(t)._overflowWeeks = !0 : null != u ? p(t)._overflowWeekday = !0 : (s = Vt(n, r, o, i, a), 
t._a[vt] = s.year, t._dayOfYear = s.dayOfYear);
}(t), null != t._dayOfYear && (a = pe(t._a[vt], r[vt]), (t._dayOfYear > Yt(a) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), 
n = Gt(a, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[bt] = n.getUTCDate()), 
e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = r[e];
for (;e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[wt] && 0 === t._a[St] && 0 === t._a[Mt] && 0 === t._a[kt] && (t._nextDay = !0, 
t._a[wt] = 0), t._d = (t._useUTC ? Gt : function(t, e, n, r, o, i, a) {
var s = new Date(t, e, n, r, o, i, a);
return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s;
}).apply(null, s), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[wt] = 24), t._w && void 0 !== t._w.d && t._w.d !== i && (p(t).weekdayMismatch = !0);
}
}
var _e = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ve = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ge = /Z|[+-]\d\d(?::?\d\d)?/, be = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], we = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Se = /^\/?Date\((\-?\d+)/i;
function Me(t) {
var e, n, r, o, i, a, s = t._i, u = _e.exec(s) || ve.exec(s);
if (u) {
for (p(t).iso = !0, e = 0, n = be.length; e < n; e++) if (be[e][1].exec(u[1])) {
o = be[e][0], r = !1 !== be[e][2];
break;
}
if (null == o) return void (t._isValid = !1);
if (u[3]) {
for (e = 0, n = we.length; e < n; e++) if (we[e][1].exec(u[3])) {
i = (u[2] || " ") + we[e][0];
break;
}
if (null == i) return void (t._isValid = !1);
}
if (!r && null != i) return void (t._isValid = !1);
if (u[4]) {
if (!ge.exec(u[4])) return void (t._isValid = !1);
a = "Z";
}
t._f = o + (i || "") + (a || ""), Le(t);
} else t._isValid = !1;
}
var ke = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function De(t, e, n, r, o, i) {
var a = [ function(t) {
var e = parseInt(t, 10);
if (e <= 49) return 2e3 + e;
if (e <= 999) return 1900 + e;
return e;
}(t), Ht.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10) ];
return i && a.push(parseInt(i, 10)), a;
}
var Te = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Ye(t) {
var e = ke.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (e) {
var n = De(e[4], e[3], e[2], e[5], e[6], e[7]);
if (!function(t, e, n) {
return !t || Bt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (p(n).weekdayMismatch = !0, 
n._isValid = !1, !1);
}(e[1], n, t)) return;
t._a = n, t._tzm = function(t, e, n) {
if (t) return Te[t];
if (e) return 0;
var r = parseInt(n, 10), o = r % 100;
return (r - o) / 100 * 60 + o;
}(e[8], e[9], e[10]), t._d = Gt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
p(t).rfc2822 = !0;
} else t._isValid = !1;
}
function Le(t) {
if (t._f !== o.ISO_8601) if (t._f !== o.RFC_2822) {
t._a = [], p(t).empty = !0;
var e, n, r, i, a, s = "" + t._i, u = s.length, c = 0;
for (r = J(t._f, t._locale).match(U) || [], e = 0; e < r.length; e++) i = r[e], 
(n = (s.match(ft(i, t)) || [])[0]) && ((a = s.substr(0, s.indexOf(n))).length > 0 && p(t).unusedInput.push(a), 
s = s.slice(s.indexOf(n) + n.length), c += n.length), z[i] ? (n ? p(t).empty = !1 : p(t).unusedTokens.push(i), 
_t(i, n, t)) : t._strict && !n && p(t).unusedTokens.push(i);
p(t).charsLeftOver = u - c, s.length > 0 && p(t).unusedInput.push(s), t._a[wt] <= 12 && !0 === p(t).bigHour && t._a[wt] > 0 && (p(t).bigHour = void 0), 
p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[wt] = function(t, e, n) {
var r;
if (null == n) return e;
return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((r = t.isPM(n)) && e < 12 && (e += 12), 
r || 12 !== e || (e = 0), e) : e;
}(t._locale, t._a[wt], t._meridiem), ye(t), me(t);
} else Ye(t); else Me(t);
}
function Ee(t) {
var e = t._i, n = t._f;
return t._locale = t._locale || he(t._l), null === e || void 0 === n && "" === e ? _({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), S(e) ? new w(me(e)) : (l(e) ? t._d = e : i(n) ? function(t) {
var e, n, r, o, i;
if (0 === t._f.length) return p(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (o = 0; o < t._f.length; o++) i = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[o], Le(e), y(e) && (i += p(e).charsLeftOver, i += 10 * p(e).unusedTokens.length, 
p(e).score = i, (null == r || i < r) && (r = i, n = e));
h(t, n || e);
}(t) : n ? Le(t) : function(t) {
var e = t._i;
u(e) ? t._d = new Date(o.now()) : l(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
var e = Se.exec(t._i);
null === e ? (Me(t), !1 === t._isValid && (delete t._isValid, Ye(t), !1 === t._isValid && (delete t._isValid, 
o.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
}(t) : i(e) ? (t._a = d(e.slice(0), function(t) {
return parseInt(t, 10);
}), ye(t)) : s(e) ? function(t) {
if (!t._d) {
var e = H(t._i);
t._a = d([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
return t && parseInt(t, 10);
}), ye(t);
}
}(t) : c(e) ? t._d = new Date(e) : o.createFromInputFallback(t);
}(t), y(t) || (t._d = null), t));
}
function Oe(t, e, n, r, o) {
var a, u = {};
return !0 !== n && !1 !== n || (r = n, n = void 0), (s(t) && function(t) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
var e;
for (e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}(t) || i(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = o, 
u._l = n, u._i = t, u._f = e, u._strict = r, (a = new w(me(Ee(u))))._nextDay && (a.add(1, "d"), 
a._nextDay = void 0), a;
}
function xe(t, e, n, r) {
return Oe(t, e, n, r, !1);
}
o.createFromInputFallback = Y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), o.ISO_8601 = function() {}, o.RFC_2822 = function() {};
var Ce = Y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = xe.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : _();
}), Pe = Y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = xe.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : _();
});
function Ae(t, e) {
var n, r;
if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return xe();
for (n = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](n) || (n = e[r]);
return n;
}
var Ne = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function Fe(t) {
var e = H(t), n = e.year || 0, r = e.quarter || 0, o = e.month || 0, i = e.week || 0, a = e.day || 0, s = e.hour || 0, u = e.minute || 0, c = e.second || 0, l = e.millisecond || 0;
this._isValid = function(t) {
for (var e in t) if (-1 === Et.call(Ne, e) || null != t[e] && isNaN(t[e])) return !1;
for (var n = !1, r = 0; r < Ne.length; ++r) if (t[Ne[r]]) {
if (n) return !1;
parseFloat(t[Ne[r]]) !== k(t[Ne[r]]) && (n = !0);
}
return !0;
}(e), this._milliseconds = +l + 1e3 * c + 6e4 * u + 1e3 * s * 60 * 60, this._days = +a + 7 * i, 
this._months = +o + 3 * r + 12 * n, this._data = {}, this._locale = he(), this._bubble();
}
function He(t) {
return t instanceof Fe;
}
function We(t) {
return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
}
function je(t, e) {
V(t, 0, 0, function() {
var t = this.utcOffset(), n = "+";
return t < 0 && (t = -t, n = "-"), n + R(~~(t / 60), 2) + e + R(~~t % 60, 2);
});
}
je("Z", ":"), je("ZZ", ""), dt("Z", ut), dt("ZZ", ut), pt([ "Z", "ZZ" ], function(t, e, n) {
n._useUTC = !0, n._tzm = Ue(ut, t);
});
var Re = /([\+\-]|\d\d)/gi;
function Ue(t, e) {
var n = (e || "").match(t);
if (null === n) return null;
var r = ((n[n.length - 1] || []) + "").match(Re) || [ "-", 0, 0 ], o = 60 * r[1] + k(r[2]);
return 0 === o ? 0 : "+" === r[0] ? o : -o;
}
function Ie(t, e) {
var n, r;
return e._isUTC ? (n = e.clone(), r = (S(t) || l(t) ? t.valueOf() : xe(t).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + r), o.updateOffset(n, !1), n) : xe(t).local();
}
function Ge(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function ze() {
return !!this.isValid() && (this._isUTC && 0 === this._offset);
}
o.updateOffset = function() {};
var Ve = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, qe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Je(t, e) {
var n, r, o, i = t, s = null;
return He(t) ? i = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : c(t) ? (i = {}, e ? i[e] = t : i.milliseconds = t) : (s = Ve.exec(t)) ? (n = "-" === s[1] ? -1 : 1, 
i = {
y: 0,
d: k(s[bt]) * n,
h: k(s[wt]) * n,
m: k(s[St]) * n,
s: k(s[Mt]) * n,
ms: k(We(1e3 * s[kt])) * n
}) : (s = qe.exec(t)) ? (n = "-" === s[1] ? -1 : (s[1], 1), i = {
y: Ze(s[2], n),
M: Ze(s[3], n),
w: Ze(s[4], n),
d: Ze(s[5], n),
h: Ze(s[6], n),
m: Ze(s[7], n),
s: Ze(s[8], n)
}) : null == i ? i = {} : "object" === a(i) && ("from" in i || "to" in i) && (o = function(t, e) {
var n;
if (!t.isValid() || !e.isValid()) return {
milliseconds: 0,
months: 0
};
e = Ie(e, t), t.isBefore(e) ? n = Be(t, e) : ((n = Be(e, t)).milliseconds = -n.milliseconds, 
n.months = -n.months);
return n;
}(xe(i.from), xe(i.to)), (i = {}).ms = o.milliseconds, i.M = o.months), r = new Fe(i), 
He(t) && f(t, "_locale") && (r._locale = t._locale), r;
}
function Ze(t, e) {
var n = t && parseFloat(t.replace(",", "."));
return (isNaN(n) ? 0 : n) * e;
}
function Be(t, e) {
var n = {
milliseconds: 0,
months: 0
};
return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, 
n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function $e(t, e) {
return function(n, r) {
var o;
return null === r || isNaN(+r) || (O(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
o = n, n = r, r = o), Xe(this, Je(n = "string" == typeof n ? +n : n, r), t), this;
};
}
function Xe(t, e, n, r) {
var i = e._milliseconds, a = We(e._days), s = We(e._months);
t.isValid() && (r = null == r || r, s && Wt(t, Ct(t, "Month") + s * n), a && Pt(t, "Date", Ct(t, "Date") + a * n), 
i && t._d.setTime(t._d.valueOf() + i * n), r && o.updateOffset(t, a || s));
}
Je.fn = Fe.prototype, Je.invalid = function() {
return Je(NaN);
};
var Ke = $e(1, "add"), Qe = $e(-1, "subtract");
function tn(t, e) {
var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, "months");
return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0;
}
function en(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), 
this);
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var nn = Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
function rn() {
return this._locale;
}
function on(t, e) {
V(0, [ t, t.length ], 0, e);
}
function an(t, e, n, r, o) {
var i;
return null == t ? qt(this, r, o).year : (e > (i = Jt(t, r, o)) && (e = i), function(t, e, n, r, o) {
var i = Vt(t, e, n, r, o), a = Gt(i.year, 0, i.dayOfYear);
return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), 
this;
}.call(this, t, e, n, r, o));
}
V(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), V(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), 
on("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), j("weekYear", 1), 
j("isoWeekYear", 1), dt("G", at), dt("g", at), dt("GG", Q, B), dt("gg", Q, B), dt("GGGG", rt, X), 
dt("gggg", rt, X), dt("GGGGG", ot, K), dt("ggggg", ot, K), yt([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, n, r) {
e[r.substr(0, 2)] = k(t);
}), yt([ "gg", "GG" ], function(t, e, n, r) {
e[r] = o.parseTwoDigitYear(t);
}), V("Q", 0, "Qo", "quarter"), N("quarter", "Q"), j("quarter", 7), dt("Q", Z), 
pt("Q", function(t, e) {
e[gt] = 3 * (k(t) - 1);
}), V("D", [ "DD", 2 ], "Do", "date"), N("date", "D"), j("date", 9), dt("D", Q), 
dt("DD", Q, B), dt("Do", function(t, e) {
return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
}), pt([ "D", "DD" ], bt), pt("Do", function(t, e) {
e[bt] = k(t.match(Q)[0]);
});
var sn = xt("Date", !0);
V("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), j("dayOfYear", 4), 
dt("DDD", nt), dt("DDDD", $), pt([ "DDD", "DDDD" ], function(t, e, n) {
n._dayOfYear = k(t);
}), V("m", [ "mm", 2 ], 0, "minute"), N("minute", "m"), j("minute", 14), dt("m", Q), 
dt("mm", Q, B), pt([ "m", "mm" ], St);
var un = xt("Minutes", !1);
V("s", [ "ss", 2 ], 0, "second"), N("second", "s"), j("second", 15), dt("s", Q), 
dt("ss", Q, B), pt([ "s", "ss" ], Mt);
var cn, ln = xt("Seconds", !1);
for (V("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), V(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), V(0, [ "SSS", 3 ], 0, "millisecond"), V(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), V(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), V(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), V(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), V(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), V(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), N("millisecond", "ms"), j("millisecond", 16), dt("S", nt, Z), dt("SS", nt, B), 
dt("SSS", nt, $), cn = "SSSS"; cn.length <= 9; cn += "S") dt(cn, it);
function dn(t, e) {
e[kt] = k(1e3 * ("0." + t));
}
for (cn = "S"; cn.length <= 9; cn += "S") pt(cn, dn);
var fn = xt("Milliseconds", !1);
V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
var hn = w.prototype;
function mn(t) {
return t;
}
hn.add = Ke, hn.calendar = function(t, e) {
var n = t || xe(), r = Ie(n, this).startOf("day"), i = o.calendarFormat(this, r) || "sameElse", a = e && (x(e[i]) ? e[i].call(this, n) : e[i]);
return this.format(a || this.localeData().calendar(i, this, xe(n)));
}, hn.clone = function() {
return new w(this);
}, hn.diff = function(t, e, n) {
var r, o, i;
if (!this.isValid()) return NaN;
if (!(r = Ie(t, this)).isValid()) return NaN;
switch (o = 6e4 * (r.utcOffset() - this.utcOffset()), e = F(e)) {
case "year":
i = tn(this, r) / 12;
break;

case "month":
i = tn(this, r);
break;

case "quarter":
i = tn(this, r) / 3;
break;

case "second":
i = (this - r) / 1e3;
break;

case "minute":
i = (this - r) / 6e4;
break;

case "hour":
i = (this - r) / 36e5;
break;

case "day":
i = (this - r - o) / 864e5;
break;

case "week":
i = (this - r - o) / 6048e5;
break;

default:
i = this - r;
}
return n ? i : M(i);
}, hn.endOf = function(t) {
return void 0 === (t = F(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), 
this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
}, hn.format = function(t) {
t || (t = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
var e = q(this, t);
return this.localeData().postformat(e);
}, hn.from = function(t, e) {
return this.isValid() && (S(t) && t.isValid() || xe(t).isValid()) ? Je({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.fromNow = function(t) {
return this.from(xe(), t);
}, hn.to = function(t, e) {
return this.isValid() && (S(t) && t.isValid() || xe(t).isValid()) ? Je({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.toNow = function(t) {
return this.to(xe(), t);
}, hn.get = function(t) {
return x(this[t = F(t)]) ? this[t]() : this;
}, hn.invalidAt = function() {
return p(this).overflow;
}, hn.isAfter = function(t, e) {
var n = S(t) ? t : xe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = F(u(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
}, hn.isBefore = function(t, e) {
var n = S(t) ? t : xe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = F(u(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
}, hn.isBetween = function(t, e, n, r) {
return ("(" === (r = r || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n));
}, hn.isSame = function(t, e) {
var n, r = S(t) ? t : xe(t);
return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = F(e || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), 
this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
}, hn.isSameOrAfter = function(t, e) {
return this.isSame(t, e) || this.isAfter(t, e);
}, hn.isSameOrBefore = function(t, e) {
return this.isSame(t, e) || this.isBefore(t, e);
}, hn.isValid = function() {
return y(this);
}, hn.lang = nn, hn.locale = en, hn.localeData = rn, hn.max = Pe, hn.min = Ce, hn.parsingFlags = function() {
return h({}, p(this));
}, hn.set = function(t, e) {
if ("object" === a(t)) for (var n = function(t) {
var e = [];
for (var n in t) e.push({
unit: n,
priority: W[n]
});
return e.sort(function(t, e) {
return t.priority - e.priority;
}), e;
}(t = H(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]); else if (x(this[t = F(t)])) return this[t](e);
return this;
}, hn.startOf = function(t) {
switch (t = F(t)) {
case "year":
this.month(0);

case "quarter":
case "month":
this.date(1);

case "week":
case "isoWeek":
case "day":
case "date":
this.hours(0);

case "hour":
this.minutes(0);

case "minute":
this.seconds(0);

case "second":
this.milliseconds(0);
}
return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
this;
}, hn.subtract = Qe, hn.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, hn.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, hn.toDate = function() {
return new Date(this.valueOf());
}, hn.toISOString = function(t) {
if (!this.isValid()) return null;
var e = !0 !== t, n = e ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? q(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", q(n, "Z")) : q(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}, hn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var t = "moment", e = "";
this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
e = "Z");
var n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = e + '[")]';
return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + o);
}, hn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
}, hn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, hn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
}, hn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}, hn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}, hn.year = Ot, hn.isLeapYear = function() {
return Lt(this.year());
}, hn.weekYear = function(t) {
return an.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}, hn.isoWeekYear = function(t) {
return an.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
}, hn.quarter = hn.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, hn.month = jt, hn.daysInMonth = function() {
return At(this.year(), this.month());
}, hn.week = hn.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.isoWeek = hn.isoWeeks = function(t) {
var e = qt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.weeksInYear = function() {
var t = this.localeData()._week;
return Jt(this.year(), t.dow, t.doy);
}, hn.isoWeeksInYear = function() {
return Jt(this.year(), 1, 4);
}, hn.date = sn, hn.day = hn.days = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = function(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}(t, this.localeData()), this.add(t - e, "d")) : e;
}, hn.weekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, hn.isoWeekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = function(t, e) {
return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7);
}
return this.day() || 7;
}, hn.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, hn.hour = hn.hours = ie, hn.minute = hn.minutes = un, hn.second = hn.seconds = ln, 
hn.millisecond = hn.milliseconds = fn, hn.utcOffset = function(t, e, n) {
var r, i = this._offset || 0;
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
if ("string" == typeof t) {
if (null === (t = Ue(ut, t))) return this;
} else Math.abs(t) < 16 && !n && (t *= 60);
return !this._isUTC && e && (r = Ge(this)), this._offset = t, this._isUTC = !0, 
null != r && this.add(r, "m"), i !== t && (!e || this._changeInProgress ? Xe(this, Je(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
o.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? i : Ge(this);
}, hn.utc = function(t) {
return this.utcOffset(0, t);
}, hn.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ge(this), "m")), 
this;
}, hn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var t = Ue(st, this._i);
null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
}
return this;
}, hn.hasAlignedHourOffset = function(t) {
return !!this.isValid() && (t = t ? xe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
}, hn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, hn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
}, hn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
}, hn.isUtc = ze, hn.isUTC = ze, hn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, hn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, hn.dates = Y("dates accessor is deprecated. Use date instead.", sn), hn.months = Y("months accessor is deprecated. Use month instead", jt), 
hn.years = Y("years accessor is deprecated. Use year instead", Ot), hn.zone = Y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}), hn.isDSTShifted = Y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!u(this._isDSTShifted)) return this._isDSTShifted;
var t = {};
if (g(t, this), (t = Ee(t))._a) {
var e = t._isUTC ? m(t._a) : xe(t._a);
this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
var pn = P.prototype;
function yn(t, e, n, r) {
var o = he(), i = m().set(r, e);
return o[n](i, t);
}
function _n(t, e, n) {
if (c(t) && (e = t, t = void 0), t = t || "", null != e) return yn(t, e, n, "month");
var r, o = [];
for (r = 0; r < 12; r++) o[r] = yn(t, r, n, "month");
return o;
}
function vn(t, e, n, r) {
"boolean" == typeof t ? (c(e) && (n = e, e = void 0), e = e || "") : (n = e = t, 
t = !1, c(e) && (n = e, e = void 0), e = e || "");
var o, i = he(), a = t ? i._week.dow : 0;
if (null != n) return yn(e, (n + a) % 7, r, "day");
var s = [];
for (o = 0; o < 7; o++) s[o] = yn(e, (o + a) % 7, r, "day");
return s;
}
pn.calendar = function(t, e, n) {
var r = this._calendar[t] || this._calendar.sameElse;
return x(r) ? r.call(e, n) : r;
}, pn.longDateFormat = function(t) {
var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, pn.invalidDate = function() {
return this._invalidDate;
}, pn.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, pn.preparse = mn, pn.postformat = mn, pn.relativeTime = function(t, e, n, r) {
var o = this._relativeTime[n];
return x(o) ? o(t, e, n, r) : o.replace(/%d/i, t);
}, pn.pastFuture = function(t, e) {
var n = this._relativeTime[t > 0 ? "future" : "past"];
return x(n) ? n(e) : n.replace(/%s/i, e);
}, pn.set = function(t) {
var e, n;
for (n in t) x(e = t[n]) ? this[n] = e : this["_" + n] = e;
this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}, pn.months = function(t, e) {
return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Nt).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone;
}, pn.monthsShort = function(t, e) {
return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Nt.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}, pn.monthsParse = function(t, e, n) {
var r, o, i;
if (this._monthsParseExact) return function(t, e, n) {
var r, o, i, a = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], r = 0; r < 12; ++r) i = m([ 2e3, r ]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), 
this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
return n ? "MMM" === e ? -1 !== (o = Et.call(this._shortMonthsParse, a)) ? o : null : -1 !== (o = Et.call(this._longMonthsParse, a)) ? o : null : "MMM" === e ? -1 !== (o = Et.call(this._shortMonthsParse, a)) ? o : -1 !== (o = Et.call(this._longMonthsParse, a)) ? o : null : -1 !== (o = Et.call(this._longMonthsParse, a)) ? o : -1 !== (o = Et.call(this._shortMonthsParse, a)) ? o : null;
}.call(this, t, e, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
r = 0; r < 12; r++) {
if (o = m([ 2e3, r ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[r] || (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), 
this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
if (!n && this._monthsParse[r].test(t)) return r;
}
}, pn.monthsRegex = function(t) {
return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Ut), 
this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}, pn.monthsShortRegex = function(t) {
return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Rt), 
this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}, pn.week = function(t) {
return qt(t, this._week.dow, this._week.doy).week;
}, pn.firstDayOfYear = function() {
return this._week.doy;
}, pn.firstDayOfWeek = function() {
return this._week.dow;
}, pn.weekdays = function(t, e) {
return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone;
}, pn.weekdaysMin = function(t) {
return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}, pn.weekdaysShort = function(t) {
return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}, pn.weekdaysParse = function(t, e, n) {
var r, o, i;
if (this._weekdaysParseExact) return function(t, e, n) {
var r, o, i, a = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = m([ 2e3, 1 ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
return n ? "dddd" === e ? -1 !== (o = Et.call(this._weekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = Et.call(this._shortWeekdaysParse, a)) ? o : null : -1 !== (o = Et.call(this._minWeekdaysParse, a)) ? o : null : "dddd" === e ? -1 !== (o = Et.call(this._weekdaysParse, a)) ? o : -1 !== (o = Et.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = Et.call(this._minWeekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = Et.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = Et.call(this._weekdaysParse, a)) ? o : -1 !== (o = Et.call(this._minWeekdaysParse, a)) ? o : null : -1 !== (o = Et.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = Et.call(this._weekdaysParse, a)) ? o : -1 !== (o = Et.call(this._shortWeekdaysParse, a)) ? o : null;
}.call(this, t, e, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
if (o = m([ 2e3, 1 ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[r] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), 
this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
if (!n && this._weekdaysParse[r].test(t)) return r;
}
}, pn.weekdaysRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), 
this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}, pn.weekdaysShortRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), 
this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}, pn.weekdaysMinRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), 
this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}, pn.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, pn.meridiem = function(t, e, n) {
return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}, de("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
}), o.lang = Y("moment.lang is deprecated. Use moment.locale instead.", de), o.langData = Y("moment.langData is deprecated. Use moment.localeData instead.", he);
var gn = Math.abs;
function bn(t, e, n, r) {
var o = Je(e, n);
return t._milliseconds += r * o._milliseconds, t._days += r * o._days, t._months += r * o._months, 
t._bubble();
}
function wn(t) {
return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function Sn(t) {
return 4800 * t / 146097;
}
function Mn(t) {
return 146097 * t / 4800;
}
function kn(t) {
return function() {
return this.as(t);
};
}
var Dn = kn("ms"), Tn = kn("s"), Yn = kn("m"), Ln = kn("h"), En = kn("d"), On = kn("w"), xn = kn("M"), Cn = kn("y");
function Pn(t) {
return function() {
return this.isValid() ? this._data[t] : NaN;
};
}
var An = Pn("milliseconds"), Nn = Pn("seconds"), Fn = Pn("minutes"), Hn = Pn("hours"), Wn = Pn("days"), jn = Pn("months"), Rn = Pn("years");
var Un = Math.round, In = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
};
var Gn = Math.abs;
function zn(t) {
return (t > 0) - (t < 0) || +t;
}
function Vn() {
if (!this.isValid()) return this.localeData().invalidDate();
var t, e, n = Gn(this._milliseconds) / 1e3, r = Gn(this._days), o = Gn(this._months);
e = M((t = M(n / 60)) / 60), n %= 60, t %= 60;
var i = M(o / 12), a = o %= 12, s = r, u = e, c = t, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var f = d < 0 ? "-" : "", h = zn(this._months) !== zn(d) ? "-" : "", m = zn(this._days) !== zn(d) ? "-" : "", p = zn(this._milliseconds) !== zn(d) ? "-" : "";
return f + "P" + (i ? h + i + "Y" : "") + (a ? h + a + "M" : "") + (s ? m + s + "D" : "") + (u || c || l ? "T" : "") + (u ? p + u + "H" : "") + (c ? p + c + "M" : "") + (l ? p + l + "S" : "");
}
var qn = Fe.prototype;
return qn.isValid = function() {
return this._isValid;
}, qn.abs = function() {
var t = this._data;
return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), 
this._months = gn(this._months), t.milliseconds = gn(t.milliseconds), t.seconds = gn(t.seconds), 
t.minutes = gn(t.minutes), t.hours = gn(t.hours), t.months = gn(t.months), t.years = gn(t.years), 
this;
}, qn.add = function(t, e) {
return bn(this, t, e, 1);
}, qn.subtract = function(t, e) {
return bn(this, t, e, -1);
}, qn.as = function(t) {
if (!this.isValid()) return NaN;
var e, n, r = this._milliseconds;
if ("month" === (t = F(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + Sn(e), 
"month" === t ? n : n / 12;
switch (e = this._days + Math.round(Mn(this._months)), t) {
case "week":
return e / 7 + r / 6048e5;

case "day":
return e + r / 864e5;

case "hour":
return 24 * e + r / 36e5;

case "minute":
return 1440 * e + r / 6e4;

case "second":
return 86400 * e + r / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + r;

default:
throw new Error("Unknown unit " + t);
}
}, qn.asMilliseconds = Dn, qn.asSeconds = Tn, qn.asMinutes = Yn, qn.asHours = Ln, 
qn.asDays = En, qn.asWeeks = On, qn.asMonths = xn, qn.asYears = Cn, qn.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
}, qn._bubble = function() {
var t, e, n, r, o, i = this._milliseconds, a = this._days, s = this._months, u = this._data;
return i >= 0 && a >= 0 && s >= 0 || i <= 0 && a <= 0 && s <= 0 || (i += 864e5 * wn(Mn(s) + a), 
a = 0, s = 0), u.milliseconds = i % 1e3, t = M(i / 1e3), u.seconds = t % 60, e = M(t / 60), 
u.minutes = e % 60, n = M(e / 60), u.hours = n % 24, s += o = M(Sn(a += M(n / 24))), 
a -= wn(Mn(o)), r = M(s / 12), s %= 12, u.days = a, u.months = s, u.years = r, this;
}, qn.clone = function() {
return Je(this);
}, qn.get = function(t) {
return t = F(t), this.isValid() ? this[t + "s"]() : NaN;
}, qn.milliseconds = An, qn.seconds = Nn, qn.minutes = Fn, qn.hours = Hn, qn.days = Wn, 
qn.weeks = function() {
return M(this.days() / 7);
}, qn.months = jn, qn.years = Rn, qn.humanize = function(t) {
if (!this.isValid()) return this.localeData().invalidDate();
var e = this.localeData(), n = function(t, e, n) {
var r = Je(t).abs(), o = Un(r.as("s")), i = Un(r.as("m")), a = Un(r.as("h")), s = Un(r.as("d")), u = Un(r.as("M")), c = Un(r.as("y")), l = o <= In.ss && [ "s", o ] || o < In.s && [ "ss", o ] || i <= 1 && [ "m" ] || i < In.m && [ "mm", i ] || a <= 1 && [ "h" ] || a < In.h && [ "hh", a ] || s <= 1 && [ "d" ] || s < In.d && [ "dd", s ] || u <= 1 && [ "M" ] || u < In.M && [ "MM", u ] || c <= 1 && [ "y" ] || [ "yy", c ];
return l[2] = e, l[3] = +t > 0, l[4] = n, function(t, e, n, r, o) {
return o.relativeTime(e || 1, !!n, t, r);
}.apply(null, l);
}(this, !t, e);
return t && (n = e.pastFuture(+this, n)), e.postformat(n);
}, qn.toISOString = Vn, qn.toString = Vn, qn.toJSON = Vn, qn.locale = en, qn.localeData = rn, 
qn.toIsoString = Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn), 
qn.lang = nn, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), dt("x", at), dt("X", /[+-]?\d+(\.\d{1,3})?/), 
pt("X", function(t, e, n) {
n._d = new Date(1e3 * parseFloat(t, 10));
}), pt("x", function(t, e, n) {
n._d = new Date(k(t));
}), o.version = "2.22.2", e = xe, o.fn = hn, o.min = function() {
return Ae("isBefore", [].slice.call(arguments, 0));
}, o.max = function() {
return Ae("isAfter", [].slice.call(arguments, 0));
}, o.now = function() {
return Date.now ? Date.now() : +new Date();
}, o.utc = m, o.unix = function(t) {
return xe(1e3 * t);
}, o.months = function(t, e) {
return _n(t, e, "months");
}, o.isDate = l, o.locale = de, o.invalid = _, o.duration = Je, o.isMoment = S, 
o.weekdays = function(t, e, n) {
return vn(t, e, n, "weekdays");
}, o.parseZone = function() {
return xe.apply(null, arguments).parseZone();
}, o.localeData = he, o.isDuration = He, o.monthsShort = function(t, e) {
return _n(t, e, "monthsShort");
}, o.weekdaysMin = function(t, e, n) {
return vn(t, e, n, "weekdaysMin");
}, o.defineLocale = fe, o.updateLocale = function(t, e) {
if (null != e) {
var n, r, o = ae;
null != (r = le(t)) && (o = r._config), (n = new P(e = C(o, e))).parentLocale = se[t], 
se[t] = n, de(t);
} else null != se[t] && (null != se[t].parentLocale ? se[t] = se[t].parentLocale : null != se[t] && delete se[t]);
return se[t];
}, o.locales = function() {
return L(se);
}, o.weekdaysShort = function(t, e, n) {
return vn(t, e, n, "weekdaysShort");
}, o.normalizeUnits = F, o.relativeTimeRounding = function(t) {
return void 0 === t ? Un : "function" == typeof t && (Un = t, !0);
}, o.relativeTimeThreshold = function(t, e) {
return void 0 !== In[t] && (void 0 === e ? In[t] : (In[t] = e, "s" === t && (In.ss = e - 1), 
!0));
}, o.calendarFormat = function(t, e) {
var n = t.diff(e, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}, o.prototype = hn, o.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "YYYY-[W]WW",
MONTH: "YYYY-MM"
}, o;
}, "object" === a(e) && void 0 !== t ? t.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(e, n, e, t) : r) || (t.exports = o);
}).call(this, n(50)(t));
},
40: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-ie", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD-MM-YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
41: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-il", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
411: function(t, e, n) {
var r = n(337);
t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
return "String" == r(t) ? t.split("") : Object(t);
};
},
413: function(t, e, n) {
var r = n(328), o = n(287), i = n(347);
t.exports = function(t) {
return function(e, n, a) {
var s, u = r(e), c = o(u.length), l = i(a, c);
if (t && n != n) {
for (;c > l; ) if ((s = u[l++]) != s) return !0;
} else for (;c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
return !t && -1;
};
};
},
42: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("en-nz", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY h:mm A",
LLLL: "dddd, D MMMM YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
424: function(t, e, n) {
var r = n(281), o = n(113).document, i = r(o) && r(o.createElement);
t.exports = function(t) {
return i ? o.createElement(t) : {};
};
},
425: function(t, e, n) {
var r = n(286), o = n(113), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
(t.exports = function(t, e) {
return i[t] || (i[t] = void 0 !== e ? e : {});
})("versions", []).push({
version: r.version,
mode: n(345) ? "pure" : "global",
copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
},
427: function(t, e, n) {
var r = n(425)("keys"), o = n(344);
t.exports = function(t) {
return r[t] || (r[t] = o(t));
};
},
428: function(t, e) {
t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},
430: function(t, e, n) {
var r = n(113).document;
t.exports = r && r.documentElement;
},
439: function(t, e, n) {
var r = n(281), o = n(337), i = n(283)("match");
t.exports = function(t) {
var e;
return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
};
},
44: function(t, e, n) {
var r = {
"./en-au": 37,
"./en-au.js": 37,
"./en-ca": 38,
"./en-ca.js": 38,
"./en-gb": 39,
"./en-gb.js": 39,
"./en-ie": 40,
"./en-ie.js": 40,
"./en-il": 41,
"./en-il.js": 41,
"./en-nz": 42,
"./en-nz.js": 42
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 44;
},
446: function(t, e, n) {
"use strict";
var r = n(282);
t.exports = function() {
var t = r(this), e = "";
return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), 
t.unicode && (e += "u"), t.sticky && (e += "y"), e;
};
},
449: function(t, e, n) {
t.exports = !n(285) && !n(93)(function() {
return 7 != Object.defineProperty(n(424)("div"), "a", {
get: function() {
return 7;
}
}).a;
});
},
451: function(t, e, n) {
var r = n(290), o = n(328), i = n(413)(!1), a = n(427)("IE_PROTO");
t.exports = function(t, e) {
var n, s = o(t), u = 0, c = [];
for (n in s) n != a && r(s, n) && c.push(n);
for (;e.length > u; ) r(s, n = e[u++]) && (~i(c, n) || c.push(n));
return c;
};
},
452: function(t, e, n) {
var r = n(284), o = n(282), i = n(346);
t.exports = n(285) ? Object.defineProperties : function(t, e) {
o(t);
for (var n, a = i(e), s = a.length, u = 0; s > u; ) r.f(t, n = a[u++], e[n]);
return t;
};
},
463: function(t, e, n) {
"use strict";
var r = n(348), o = n(343), i = n(351), a = {};
n(327)(a, n(283)("iterator"), function() {
return this;
}), t.exports = function(t, e, n) {
t.prototype = r(a, {
next: o(1, n)
}), i(t, e + " Iterator");
};
},
50: function(t, e) {
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
Object.defineProperty(t, "loaded", {
enumerable: !0,
get: function() {
return t.l;
}
}), Object.defineProperty(t, "id", {
enumerable: !0,
get: function() {
return t.i;
}
}), t.webpackPolyfill = 1), t;
};
},
53: function(t, e, n) {
var r = n(0).lang, o = n(4);
"ru" === r ? (n(74), o.updateLocale("ru", {
monthsShort: {
format: "янв_февр_мар_апр_мая_июня_июля_авг_сент_окт_нояб_дек".split("_"),
standalone: "янв_февр_март_апр_май_июнь_июль_авг_сент_окт_нояб_дек".split("_")
}
})) : "zh" === r ? n(75) : "en" !== r && n(44)("./" + r), t.exports = o;
},
58: function(t, e, n) {
var r = n(59), o = n(62), i = [];
e.iframe = function(t) {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
var e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), i.push(e);
}, window.addEventListener("resize", o(function() {
i.forEach(function(t) {
t();
});
}, 200));
},
59: function(t, e, n) {
var r = n(60);
function o(t, e) {
var n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function o(t, r) {
clearTimeout(n), e(t, r);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
var i = t.cloneNode(!0);
return i.name = "", i.style.height = "50px", i.style.position = "absolute", i.style.display = "block", 
i.style.top = "10000px", i.onload = function() {
var e = r(this.contentDocument);
t.style.display = "block", i.remove(), o(null, e);
}, void document.body.appendChild(i);
}
t.style.display = "block", t.style.height = "1px";
var a = r(t.contentDocument);
t.style.height = "", o(null, a);
}
o.async = function(t, e) {
setTimeout(function() {
o(t, e);
}, 0);
}, t.exports = o;
},
60: function(t, e, n) {
var r, o = n(61);
t.exports = function(t) {
t = t || document;
var e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (r || (r = o()), 
e += r), e;
};
},
61: function(t, e) {
t.exports = function() {
var t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
var e = t.offsetWidth;
t.style.overflow = "scroll";
var n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
var r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
};
},
62: function(t, e) {
t.exports = function(t, e) {
var n, r, o = !1;
return function i() {
if (o) return n = arguments, void (r = this);
t.apply(this, arguments), o = !0, setTimeout(function() {
o = !1, n && (i.apply(r, n), n = r = null);
}, e);
};
};
},
665: function(t, e) {
var n = "//" + window.disqus_shortname + ".disqus.com/embed.js", r = "//" + window.disqus_shortname + ".disqus.com/count.js";
function o() {
var t = document.getElementById("disqus_thread");
if (!t.classList.contains("disqus-loading")) {
t.classList.add("disqus-loading");
var e = new Spinner({
size: "large"
});
t.append(e.elem), e.start();
var r = document.createElement("script");
r.src = n, r.setAttribute("data-timestamp", +new Date()), document.head.appendChild(r), 
r.onload = function() {
e.stop(), e.elem.remove();
};
}
}
e.loadDisqus = o, e.loadDisqusComments = function() {
var t = document.getElementById("disqus_comments");
if (t) {
window.disqus_config(), t.dataset.disqusIdentifier = window.page.identifier;
var e = document.createElement("script");
e.id = "dsq-count-scr", e.src = r, e.setAttribute("data-timestamp", +new Date()), 
document.head.appendChild(e);
}
}, e.loadDisqusIfVisible = function() {
if (window.disqus_enabled && !document.querySelector('script[src="'.concat(n, '"]'))) {
var t = document.getElementById("disqus_thread");
if (!t.hasChildNodes()) {
var e = t.getBoundingClientRect();
e.top > document.documentElement.clientHeight + 150 || e.bottom < -150 || o();
}
}
};
},
74: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
function e(t, e, n) {
var r, o;
return "m" === n ? e ? "минута" : "минуту" : t + " " + (r = +t, o = {
ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2]);
}
var n = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
return t.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: n,
longMonthsParse: n,
shortMonthsParse: n,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: e,
m: e,
mm: e,
h: "час",
hh: e,
d: "день",
dd: e,
M: "месяц",
MM: e,
y: "год",
yy: e
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(t) {
return /^(дня|вечера)$/.test(t);
},
meridiem: function(t, e, n) {
return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(t, e) {
switch (e) {
case "M":
case "d":
case "DDD":
return t + "-й";

case "D":
return t + "-го";

case "w":
case "W":
return t + "-я";

default:
return t;
}
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
75: function(t, e, n) {
var r, o, i, a;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
a = function(t) {
"use strict";
return t.defineLocale("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日Ah点mm分",
LLLL: "YYYY年M月D日ddddAh点mm分",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "下午" === e || "晚上" === e ? t + 12 : t >= 11 ? t : t + 12;
},
meridiem: function(t, e, n) {
var r = 100 * t + e;
return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "周";

default:
return t;
}
},
relativeTime: {
future: "%s内",
past: "%s前",
s: "几秒",
ss: "%d 秒",
m: "1 分钟",
mm: "%d 分钟",
h: "1 小时",
hh: "%d 小时",
d: "1 天",
dd: "%d 天",
M: "1 个月",
MM: "%d 个月",
y: "1 年",
yy: "%d 年"
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === s(e) && void 0 !== t ? a(n(4)) : (o = [ n(4) ], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
},
93: function(t, e) {
t.exports = function(t) {
try {
return !!t();
} catch (t) {
return !0;
}
};
}
});