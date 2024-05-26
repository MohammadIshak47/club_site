;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});


(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }

    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }
    var n = t.document,
        r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
        return this.getListeners(t), this
    }, o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function(t) {
        var e, i = typeof t,
            o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function o(t) {
            function o(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var o = r(t);
                    if ("none" === o.display) return i();
                    var n = {};
                    n.width = t.offsetWidth, n.height = t.offsetHeight;
                    for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, d = s.length; d > f; f++) {
                        var l = s[f],
                            c = o[l];
                        c = a(t, c);
                        var y = parseFloat(c);
                        n[l] = isNaN(y) ? 0 : y
                    }
                    var m = n.paddingLeft + n.paddingRight,
                        g = n.paddingTop + n.paddingBottom,
                        v = n.marginLeft + n.marginRight,
                        _ = n.marginTop + n.marginBottom,
                        I = n.borderLeftWidth + n.borderRightWidth,
                        L = n.borderTopWidth + n.borderBottomWidth,
                        z = h && u,
                        S = e(o.width);
                    S !== !1 && (n.width = S + (z ? 0 : m + I));
                    var b = e(o.height);
                    return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
                }
            }

            function a(t, e) {
                if (n || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    o = i.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
            }
            var u, p = t("boxSizing");
            return function() {
                if (p) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var o = r(t);
                    u = 200 === e(o.width), i.removeChild(t)
                }
            }(), o
        }
        var n = t.getComputedStyle,
            r = n ? function(t) {
                return n(t, null)
            } : function(t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function o(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            o(t);
            for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
                if (i[n] === t) return !0;
            return !1
        }

        function r(t, e) {
            return o(t), i(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                    r = n + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var u = document.createElement("div"),
                p = i(u, "div");
            s = p ? i : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function n(t, n, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[u],
                l = ["transform", "transition", "transitionDuration", "transitionProperty"],
                c = function() {
                    for (var t = {}, e = 0, i = l.length; i > e; e++) {
                        var o = l[e],
                            n = r(o);
                        n && n !== o && (t[o] = n)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = n(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = c[i] || i;
                    e[o] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    o = e.isOriginTop,
                    n = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[o ? "top" : "bottom"], 10);
                n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = f ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && o(p) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        o = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === f.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = l(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, f, l, c, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var o = ++g;
                this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, f.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                    var s = e[n],
                        a = new i(s, this);
                    o.push(a)
                }
                return o
            }, m.prototype._filterFindItemElements = function(t) {
                t = o(t);
                for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n];
                    if (d(s))
                        if (e) {
                            c(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = l(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, o = this.options[t];
                o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i];
                    n.isIgnored || e.push(n)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    o.emitEvent("layoutComplete", [o, t])
                }
                var o = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var n = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        u = this._getItemLayoutPosition(a);
                    u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
                }
                this._processLayoutQueue(n)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this._positionItem(o.item, o.x, o.y, o.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, o) {
                o ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function o() {
                    return n++, n === r && i.call(s), !0
                }
                for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    p.on(e, o)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        this.ignore(o)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        n(o, this.stamps), this.unignore(o)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = l(t),
                    n = {
                        left: e.left - i.left - o.marginLeft,
                        top: e.top - i.top - o.marginTop,
                        right: i.right - e.right - o.marginRight,
                        bottom: i.bottom - e.bottom - o.marginBottom
                    };
                return n
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = l(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    if (o.element === t) return o
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, o = t.length; o > i; i++) {
                        var n = t[i],
                            r = this.getItem(n);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), n(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    o.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function(t, i) {
                function o() {
                    m.apply(this, arguments)
                }
                return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
                    y.apply(this, arguments)
                }, o.Item.prototype = new y, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                        var f, d = i[s],
                            l = d.getAttribute(n);
                        try {
                            f = l && JSON.parse(l)
                        } catch (c) {
                            u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                            continue
                        }
                        var y = new o(d, f);
                        p && p.data(d, t, y)
                    }
                }), p && p.bridget && p.bridget(t, o), o
            }, m.Item = y, m
        }
        var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function() {},
            f = Object.prototype.toString,
            d = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            l = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this)
                    }
                }
            };
            var i = e.prototype.destroy;
            return e.prototype.destroy = function() {
                i.apply(this, arguments), this.css({
                    display: ""
                })
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                    var s = o[n];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(t, e) {
                var i = t + e,
                    o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function o() {
                    i.apply(this, arguments)
                }
                return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var o = t.create("masonry");
            return o.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, o.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, o.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, o.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    o = e && 1 > e ? "round" : "ceil",
                    n = Math[o](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                        x: this.columnWidth * a,
                        y: s
                    }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
                return u
            }, o.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                    var n = this.colYs.slice(o, o + t);
                    e[o] = Math.max.apply(Math, n)
                }
                return e
            }, o.prototype._manageStamp = function(t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this.options.isOriginLeft ? o.left : o.right,
                    r = n + i.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
            }, o.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, o.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, o.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, o
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                if (n === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
            var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var u = o.prototype._manageStamp;
            return o.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
            }, o
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var e = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === h.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, u, h) {
            function f(t, e) {
                return function(i, o) {
                    for (var n = 0, r = t.length; r > n; n++) {
                        var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s];
                        if (a > u || u > a) {
                            var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1;
                            return (a > u ? 1 : -1) * h
                        }
                    }
                    return 0
                }
            }
            var d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = u, d.LayoutMode = h, d.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in h.modes) this._initLayoutMode(e)
            }, d.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, d.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                    var n = e[i];
                    n.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, d.prototype._initLayoutMode = function(t) {
                var i = h.modes[t],
                    o = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
            }, d.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
            }, d.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, d.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, d.prototype._filter = function(t) {
                function e() {
                    f.reveal(n), f.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    if (!p.isIgnored) {
                        var h = s(p);
                        h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                    }
                }
                var f = this;
                return this._isInstant ? this._noTransition(e) : e(), o
            }, d.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, d.prototype.updateSortData = function(t) {
                this._getSorters(), t = o(t);
                var e = this.getItems(t);
                e = e.length ? e : this.items, this._updateItemsSortData(e)
            }, d.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = l(i)
                }
            }, d.prototype._updateItemsSortData = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    o.updateSortData()
                }
            };
            var l = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = d.sortDataParsers[i[1]];
                    return t = u ? function(t) {
                        return t && u(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && p(i)
                    }
                }
                return t
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, d.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = f(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, d.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, d.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, d.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, d.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, d.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, d.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, d.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, d.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var o = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
                }
            }, d.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, d.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                            this.hide(r)
                        }), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var c = d.prototype.remove;
            return d.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (c.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        n(s, this.filteredItems)
                    }
            }, d.prototype.shuffle = function() {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var i = this.items[t];
                    i.sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, d.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, d.prototype.getFilteredItemElements = function() {
                for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
                return t
            }, d
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            p = u.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window);

(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
(function(e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        I = e(window),
        x = function(e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function(n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function() {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloadersss && (t.preloadersss = k("preloadersss", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function() {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloadersss) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloadersss.html(i), t.preloadersss.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloadersss && n === t.preloadersss[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloadersss: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function() {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M), x(l + "." + M, function() {
                    B()
                })
            },
            getInline: function(n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function() {
            F && i.removeClass(F)
        },
        A = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        j && clearInterval(j), j = setInterval(function() {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function(e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z), x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function() {
                    D()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function() {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), x("ElementParse." + U, function(t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function() {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function(e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function(e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function() {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);;
(function($) {
    var eventNamespace = 'waitForImages';
    $.waitForImages = {
        hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
        hasImageAttributes: ['srcset']
    };
    $.expr[':'].uncached = function(obj) {
        if (!$(obj).is('img[src][src!=""]')) {
            return false
        }
        var img = new Image();
        img.src = obj.src;
        return !img.complete
    };
    $.fn.waitForImages = function() {
        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();
        var finishedCallback;
        var eachCallback;
        var waitForAll;
        if ($.isPlainObject(arguments[0])) {
            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished
        } else {
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0]
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2]
            }
        }
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;
        waitForAll = !!waitForAll;
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }
        this.each(function() {
            var obj = $(this);
            var allImgs = [];
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (waitForAll) {
                obj.find('*').addBack().each(function() {
                    var element = $(this);
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        })
                    }
                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
                        var match;
                        if (!propertyValue) {
                            return true
                        }
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            })
                        }
                    });
                    $.each(hasImageAttributes, function(i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;
                        if (!attributeValue) {
                            return true
                        }
                        attributeValues = attributeValue.split(',');
                        $.each(attributeValues, function(i, value) {
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            })
                        })
                    })
                })
            } else {
                obj.find('img:uncached').each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    })
                })
            }
            allImgsLength = allImgs.length;
            allImgsLoaded = 0;
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0])
            }
            $.each(allImgs, function(i, img) {
                var image = new Image();
                var events = 'load.' + eventNamespace + ' error.' + eventNamespace;
                $(image).one(events, function me(event) {
                    var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
                    allImgsLoaded++;
                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);
                    $(this).off(events, me);
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false
                    }
                });
                image.src = img.src
            })
        });
        return deferred.promise()
    }
}(jQuery));


(function(e, t, r) {
    "use strict";

    function n(r) {
        if (o = t.documentElement, a = t.body, Y(), lt = this, r = r || {}, mt = r.constants || {}, r.easing)
            for (var n in r.easing) X[n] = r.easing[n];
        Tt = r.edgeStrategy || "set", ft = {
            beforerender: r.beforerender,
            render: r.render,
            keyframe: r.keyframe
        }, ut = r.forceHeight !== !1, ut && (zt = r.scale || 1), pt = r.mobileDeceleration || x, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || A, ht = {
            targetTop: lt.getScrollTop()
        }, Kt = (r.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Kt ? (ct = t.getElementById(r.skrollrBody || E), ct && it(), j(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), lt.refresh(), kt(e, "resize orientationchange", function() {
            var e = o.clientWidth,
                t = o.clientHeight;
            (t !== Bt || e !== $t) && (Bt = t, $t = e, _t = !0)
        });
        var i = R();
        return function l() {
            J(), St = i(l)
        }(), lt
    }
    var o, a, i = {
            get: function() {
                return lt
            },
            init: function(e) {
                return lt || new n(e)
            },
            VERSION: "0.6.29"
        },
        l = Object.prototype.hasOwnProperty,
        s = e.Math,
        c = e.getComputedStyle,
        f = "touchstart",
        u = "touchmove",
        m = "touchcancel",
        p = "touchend",
        d = "skrollable",
        g = d + "-before",
        v = d + "-between",
        h = d + "-after",
        y = "skrollr",
        T = "no-" + y,
        b = y + "-desktop",
        S = y + "-mobile",
        k = "linear",
        w = 1e3,
        x = .004,
        E = "skrollr-body",
        A = 200,
        F = "start",
        C = "end",
        H = "center",
        D = "bottom",
        I = "___skrollable_id",
        P = /^(?:input|textarea|button|select)$/i,
        N = /^\s+|\s+$/g,
        O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        z = /^(@?[a-z\-]+)\[(\w+)\]$/,
        q = /-([a-z0-9_])/g,
        L = function(e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        _ = /[a-z\-]+-gradient/g,
        G = "",
        K = "",
        Y = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (c) {
                var t = c(a, null);
                for (var n in t)
                    if (G = n.match(e) || +n == n && t[n].match(e)) break;
                if (!G) return G = K = "", r;
                G = G[0], "-" === G.slice(0, 1) ? (K = G, G = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[G]) : K = "-" + G.toLowerCase() + "-"
            }
        },
        R = function() {
            var t = e.requestAnimationFrame || e[G.toLowerCase() + "RequestAnimationFrame"],
                r = Nt();
            return (Kt || !t) && (t = function(t) {
                var n = Nt() - r,
                    o = s.max(0, 1e3 / 60 - n);
                return e.setTimeout(function() {
                    r = Nt(), t()
                }, o)
            }), t
        },
        U = function() {
            var t = e.cancelAnimationFrame || e[G.toLowerCase() + "CancelAnimationFrame"];
            return (Kt || !t) && (t = function(t) {
                return e.clearTimeout(t)
            }), t
        },
        X = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -s.cos(e * s.PI) / 2 + .5
            },
            sqrt: function(e) {
                return s.sqrt(e)
            },
            outCubic: function(e) {
                return s.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
            }
        };
    n.prototype.refresh = function(e) {
        var n, o, a = !1;
        for (e === r ? (a = !0, st = [], Gt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
            var i = e[n],
                l = i,
                s = [],
                c = gt,
                f = Tt,
                u = !1;
            if (a && I in i && delete i[I], i.attributes) {
                for (var m = 0, p = i.attributes.length; p > m; m++) {
                    var g = i.attributes[m];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(O);
                                    if (null !== v) {
                                        var h = {
                                            props: g.value,
                                            element: i,
                                            eventType: g.name.replace(q, L)
                                        };
                                        s.push(h);
                                        var y = v[1];
                                        y && (h.constant = y.substr(1));
                                        var T = v[2];
                                        /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                                        var b = v[3],
                                            S = v[4] || b;
                                        b && b !== F && b !== C ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === C ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * zt))
                                    }
                                } else u = !0;
                    else f = g.value;
                    else c = "off" !== g.value;
                    else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) {
                    var k, w, x;
                    !a && I in i ? (x = i[I], k = st[x].styleAttr, w = st[x].classAttr) : (x = i[I] = Gt++, k = i.style.cssText, w = Ht(i)), st[x] = {
                        element: i,
                        styleAttr: k,
                        classAttr: w,
                        anchorTarget: l,
                        keyFrames: s,
                        smoothScrolling: c,
                        edgeStrategy: f,
                        emitEvents: u,
                        lastFrameIndex: -1
                    }, Dt(i, [d], [])
                }
            }
        }
        for (At(), n = 0, o = e.length; o > n; n++) {
            var E = st[e[n][I]];
            E !== r && (Q(E), tt(E))
        }
        return lt
    }, n.prototype.relativeToAbsolute = function(e, t, r) {
        var n = o.clientHeight,
            a = e.getBoundingClientRect(),
            i = a.top,
            l = a.bottom - a.top;
        return t === D ? i -= n : t === H && (i -= n / 2), r === D ? i += l : r === H && (i += l / 2), i += lt.getScrollTop(), 0 | i + .5
    }, n.prototype.animateTo = function(e, t) {
        t = t || {};
        var n = Nt(),
            o = lt.getScrollTop();
        return dt = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: t.duration || w,
            startTime: n,
            endTime: n + (t.duration || w),
            easing: X[t.easing || k],
            done: t.done
        }, dt.topDiff || (dt.done && dt.done.call(lt, !1), dt = r), lt
    }, n.prototype.stopAnimateTo = function() {
        dt && dt.done && dt.done.call(lt, !0), dt = r
    }, n.prototype.isAnimatingTo = function() {
        return !!dt
    }, n.prototype.isMobile = function() {
        return Kt
    }, n.prototype.setScrollTop = function(t, r) {
        return yt = r === !0, Kt ? Yt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), lt
    }, n.prototype.getScrollTop = function() {
        return Kt ? Yt : e.pageYOffset || o.scrollTop || a.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function() {
        return Vt
    }, n.prototype.on = function(e, t) {
        return ft[e] = t, lt
    }, n.prototype.off = function(e) {
        return delete ft[e], lt
    }, n.prototype.destroy = function() {
        var e = U();
        e(St), xt(), Dt(o, [T], [y, b, S]);
        for (var t = 0, n = st.length; n > t; t++) at(st[t].element);
        o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", ct && i.setStyle(ct, "transform", "none"), lt = r, ct = r, ft = r, ut = r, Vt = 0, zt = 1, mt = r, pt = r, qt = "down", Lt = -1, $t = 0, Bt = 0, _t = !1, dt = r, gt = r, vt = r, ht = r, yt = r, Gt = 0, Tt = r, Kt = !1, Yt = 0, bt = r
    };
    var j = function() {
            var n, i, l, c, d, g, v, h, y, T, b, S;
            kt(o, [f, u, m, p].join(" "), function(e) {
                var o = e.changedTouches[0];
                for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
                switch (d = o.clientY, g = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) {
                    case f:
                        n && n.blur(), lt.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
                        break;
                    case u:
                        P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, lt.setScrollTop(Yt - h, !0), v = d, b = T;
                        break;
                    default:
                    case m:
                    case p:
                        var a = i - d,
                            k = l - g,
                            w = k * k + a * a;
                        if (49 > w) {
                            if (!P.test(n.tagName)) {
                                n.focus();
                                var x = t.createEvent("MouseEvents");
                                x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                            }
                            return
                        }
                        n = r;
                        var E = h / S;
                        E = s.max(s.min(E, 3), -3);
                        var A = s.abs(E / pt),
                            F = E * A + .5 * pt * A * A,
                            C = lt.getScrollTop() - F,
                            H = 0;
                        C > Vt ? (H = (Vt - C) / F, C = Vt) : 0 > C && (H = -C / F, C = 0), A *= 1 - H, lt.animateTo(0 | C + .5, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
        },
        W = function() {
            var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight,
                d = Ft();
            for (c = 0, f = st.length; f > c; c++)
                for (e = st[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (at(t), l.frame = lt.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, at(t, !0)), l.frame += m, ut && !l.isEnd && l.frame > Vt && (Vt = l.frame);
            for (Vt = s.max(Vt, Ct()), c = 0, f = st.length; f > c; c++) {
                for (e = st[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + m);
                e.keyFrames.sort(Ot)
            }
        },
        Z = function(e, t) {
            for (var r = 0, n = st.length; n > r; r++) {
                var o, a, s = st[r],
                    c = s.element,
                    f = s.smoothScrolling ? e : t,
                    u = s.keyFrames,
                    m = u.length,
                    p = u[0],
                    y = u[u.length - 1],
                    T = p.frame > f,
                    b = f > y.frame,
                    S = T ? p : y,
                    k = s.emitEvents,
                    w = s.lastFrameIndex;
                if (T || b) {
                    if (T && -1 === s.edge || b && 1 === s.edge) continue;
                    switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (Et(c, p.eventType, qt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (Et(c, y.eventType, qt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
                        case "reset":
                            at(c);
                            continue;
                        case "ease":
                            f = S.frame;
                            break;
                        default:
                        case "set":
                            var x = S.props;
                            for (o in x) l.call(x, o) && (a = ot(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
                            continue
                    }
                } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);
                for (var E = 0; m - 1 > E; E++)
                    if (f >= u[E].frame && u[E + 1].frame >= f) {
                        var A = u[E],
                            F = u[E + 1];
                        for (o in A.props)
                            if (l.call(A.props, o)) {
                                var C = (f - A.frame) / (F.frame - A.frame);
                                C = A.props[o].easing(C), a = nt(A.props[o].value, F.props[o].value, C), a = ot(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
                            }
                        k && w !== E && ("down" === qt ? Et(c, A.eventType, qt) : Et(c, F.eventType, qt), s.lastFrameIndex = E);
                        break
                    }
            }
        },
        J = function() {
            _t && (_t = !1, At());
            var e, t, n = lt.getScrollTop(),
                o = Nt();
            if (dt) o >= dt.endTime ? (n = dt.targetTop, e = dt.done, dt = r) : (t = dt.easing((o - dt.startTime) / dt.duration), n = 0 | dt.startTop + t * dt.topDiff), lt.setScrollTop(n, !0);
            else if (!yt) {
                var a = ht.targetTop - n;
                a && (ht = {
                    startTop: Lt,
                    topDiff: n - Lt,
                    targetTop: n,
                    startTime: Mt,
                    endTime: Mt + vt
                }), ht.endTime >= o && (t = X.sqrt((o - ht.startTime) / vt), n = 0 | ht.startTop + t * ht.topDiff)
            }
            if (Kt && ct && i.setStyle(ct, "transform", "translate(0, " + -Yt + "px) " + bt), yt || Lt !== n) {
                qt = n > Lt ? "down" : Lt > n ? "up" : qt, yt = !1;
                var l = {
                        curTop: n,
                        lastTop: Lt,
                        maxTop: Vt,
                        direction: qt
                    },
                    s = ft.beforerender && ft.beforerender.call(lt, l);
                s !== !1 && (Z(n, lt.getScrollTop()), Lt = n, ft.render && ft.render.call(lt, l)), e && e.call(lt, !1)
            }
            Mt = o
        },
        Q = function(e) {
            for (var t = 0, r = e.keyFrames.length; r > t; t++) {
                for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = V.exec(l.props));) a = i[1], o = i[2], n = a.match(z), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? et(o) : [o.slice(1)], s[a] = {
                    value: o,
                    easing: X[n]
                };
                l.props = s
            }
        },
        et = function(e) {
            var t = [];
            return B.lastIndex = 0, e = e.replace(B, function(e) {
                return e.replace(M, function(e) {
                    return 100 * (e / 255) + "%"
                })
            }), K && (_.lastIndex = 0, e = e.replace(_, function(e) {
                return K + e
            })), e = e.replace(M, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        tt = function(e) {
            var t, r, n = {};
            for (t = 0, r = e.keyFrames.length; r > t; t++) rt(e.keyFrames[t], n);
            for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) rt(e.keyFrames[t], n)
        },
        rt = function(e, t) {
            var r;
            for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
            for (r in e.props) t[r] = e.props[r]
        },
        nt = function(e, t, r) {
            var n, o = e.length;
            if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var a = [e[0]];
            for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
            return a
        },
        ot = function(e) {
            var t = 1;
            return $.lastIndex = 0, e[0].replace($, function() {
                return e[t++]
            })
        },
        at = function(e, t) {
            e = [].concat(e);
            for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = st[n[I]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ht(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)))
        },
        it = function() {
            bt = "translateZ(0)", i.setStyle(ct, "transform", bt);
            var e = c(ct),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(K + "transform"),
                n = t && "none" !== t || r && "none" !== r;
            n || (bt = "")
        };
    i.setStyle = function(e, t, r) {
        var n = e.style;
        if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try {
            G && (n[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (o) {}
    };
    var lt, st, ct, ft, ut, mt, pt, dt, gt, vt, ht, yt, Tt, bt, St, kt = i.addEvent = function(t, r, n) {
            var o = function(t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), n.call(this, t)
            };
            r = r.split(" ");
            for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Rt.push({
                element: t,
                name: a,
                listener: n
            })
        },
        wt = i.removeEvent = function(e, t, r) {
            t = t.split(" ");
            for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
        },
        xt = function() {
            for (var e, t = 0, r = Rt.length; r > t; t++) e = Rt[t], wt(e.element, e.name, e.listener);
            Rt = []
        },
        Et = function(e, t, r) {
            ft.keyframe && ft.keyframe.call(lt, e, t, r)
        },
        At = function() {
            var e = lt.getScrollTop();
            Vt = 0, ut && !Kt && (a.style.height = ""), W(), ut && !Kt && (a.style.height = Vt + o.clientHeight + "px"), Kt ? lt.setScrollTop(s.min(lt.getScrollTop(), Vt)) : lt.setScrollTop(e, !0), yt = !0
        },
        Ft = function() {
            var e, t, r = o.clientHeight,
                n = {};
            for (e in mt) t = mt[e], "function" == typeof t ? t = t.call(lt) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        Ct = function() {
            var e, t = 0;
            return ct && (t = s.max(ct.offsetHeight, ct.scrollHeight)), e = s.max(t, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), e - o.clientHeight
        },
        Ht = function(t) {
            var r = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
        },
        Dt = function(t, n, o) {
            var a = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;
            for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Pt(i).replace(Pt(o[l]), " ");
            i = It(i);
            for (var c = 0, f = n.length; f > c; c++) - 1 === Pt(i).indexOf(Pt(n[c])) && (i += " " + n[c]);
            t[a] = It(i)
        },
        It = function(e) {
            return e.replace(N, "")
        },
        Pt = function(e) {
            return " " + e + " "
        },
        Nt = Date.now || function() {
            return +new Date
        },
        Ot = function(e, t) {
            return e.frame - t.frame
        },
        Vt = 0,
        zt = 1,
        qt = "down",
        Lt = -1,
        Mt = Nt(),
        $t = 0,
        Bt = 0,
        _t = !1,
        Gt = 0,
        Kt = !1,
        Yt = 0,
        Rt = [];
    "function" == typeof define && define.amd ? define([], function() {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
})(window, document);
/*! Superslides - v0.6.3-wip - 2013-12-17
 * https://github.com/nicinabox/superslides
 * Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(i, t) {
    var n, e = "superslides";
    n = function(n, e) {
        this.options = t.extend({
            play: !1,
            animation_speed: 600,
            animation_easing: "swing",
            animation: "slide",
            inherit_width_from: i,
            inherit_height_from: i,
            pagination: !0,
            hashchange: !1,
            scrollable: !0,
            elements: {
                preserve: ".preserve",
                nav: ".slides-navigation",
                container: ".slides-container",
                pagination: ".slides-pagination"
            }
        }, e);
        var s = this,
            o = t("<div>", {
                "class": "slides-control"
            }),
            a = 1;
        this.$el = t(n), this.$container = this.$el.find(this.options.elements.container);
        var r = function() {
                return a = s._findMultiplier(), s.$el.on("click", s.options.elements.nav + " a", function(i) {
                    i.preventDefault(), s.stop(), t(this).hasClass("next") ? s.animate("next", function() {
                        s.start()
                    }) : s.animate("prev", function() {
                        s.start()
                    })
                }), t(document).on("keyup", function(i) {
                    37 === i.keyCode && s.animate("prev"), 39 === i.keyCode && s.animate("next")
                }), t(i).on("resize", function() {
                    setTimeout(function() {
                        var i = s.$container.children();
                        s.width = s._findWidth(), s.height = s._findHeight(), i.css({
                            width: s.width,
                            left: s.width
                        }), s.css.containers(), s.css.images()
                    }, 10)
                }), s.options.hashchange && t(i).on("hashchange", function() {
                    var i, t = s._parseHash();
                    i = s._upcomingSlide(t), i >= 0 && i !== s.current && s.animate(i)
                }), s.pagination._events(), s.start(), s
            },
            h = {
                containers: function() {
                    s.init ? (s.$el.css({
                        height: s.height
                    }), s.$control.css({
                        width: s.width * a,
                        left: -s.width
                    }), s.$container.css({})) : (t("body").css({
                        margin: 0
                    }), s.$el.css({
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: s.height
                    }), s.$control.css({
                        position: "relative",
                        transform: "translate3d(0)",
                        height: "100%",
                        width: s.width * a,
                        left: -s.width
                    }), s.$container.css({
                        display: "none",
                        margin: "0",
                        padding: "0",
                        listStyle: "none",
                        position: "relative",
                        height: "100%"
                    })), 1 === s.size() && s.$el.find(s.options.elements.nav).hide()
                },
                images: function() {
                    var i = s.$container.find("img").not(s.options.elements.preserve);
                    i.removeAttr("width").removeAttr("height").css({
                        "-webkit-backface-visibility": "hidden",
                        "-ms-interpolation-mode": "bicubic",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        "z-index": "-1",
                        "max-width": "none"
                    }), i.each(function() {
                        var i = s.image._aspectRatio(this),
                            n = this;
                        if (t.data(this, "processed")) s.image._scale(n, i), s.image._center(n, i);
                        else {
                            var e = new Image;
                            e.onload = function() {
                                s.image._scale(n, i), s.image._center(n, i), t.data(n, "processed", !0)
                            }, e.src = this.src
                        }
                    })
                },
                children: function() {
                    var i = s.$container.children();
                    i.is("img") && (i.each(function() {
                        if (t(this).is("img")) {
                            t(this).wrap("<div>");
                            var i = t(this).attr("id");
                            t(this).removeAttr("id"), t(this).parent().attr("id", i)
                        }
                    }), i = s.$container.children()), s.init || i.css({
                        display: "none",
                        left: 2 * s.width
                    }), i.css({
                        position: "absolute",
                        overflow: "hidden",
                        height: "100%",
                        width: s.width,
                        top: 0,
                        zIndex: 0
                    })
                }
            },
            c = {
                slide: function(i, t) {
                    var n = s.$container.children(),
                        e = n.eq(i.upcoming_slide);
                    e.css({
                        left: i.upcoming_position,
                        display: "block"
                    }), s.$control.animate({
                        left: i.offset
                    }, s.options.animation_speed, s.options.animation_easing, function() {
                        s.size() > 1 && (s.$control.css({
                            left: -s.width
                        }), n.eq(i.upcoming_slide).css({
                            left: s.width,
                            zIndex: 2
                        }), i.outgoing_slide >= 0 && n.eq(i.outgoing_slide).css({
                            left: s.width,
                            display: "none",
                            zIndex: 0
                        })), t()
                    })
                },
                fade: function(i, t) {
                    var n = this,
                        e = n.$container.children(),
                        s = e.eq(i.outgoing_slide),
                        o = e.eq(i.upcoming_slide);
                    o.css({
                        left: this.width,
                        opacity: 0,
                        display: "block"
                    }).animate({
                        opacity: 1
                    }, n.options.animation_speed, n.options.animation_easing), i.outgoing_slide >= 0 ? s.animate({
                        opacity: 0
                    }, n.options.animation_speed, n.options.animation_easing, function() {
                        n.size() > 1 && (e.eq(i.upcoming_slide).css({
                            zIndex: 2
                        }), i.outgoing_slide >= 0 && e.eq(i.outgoing_slide).css({
                            opacity: 1,
                            display: "none",
                            zIndex: 0
                        })), t()
                    }) : (o.css({
                        zIndex: 2
                    }), t())
                }
            };
        c = t.extend(c, t.fn.superslides.fx);
        var d = {
                _centerY: function(i) {
                    var n = t(i);
                    n.css({
                        top: (s.height - n.height()) / 2
                    })
                },
                _centerX: function(i) {
                    var n = t(i);
                    n.css({
                        left: (s.width - n.width()) / 2
                    })
                },
                _center: function(i) {
                    s.image._centerX(i), s.image._centerY(i)
                },
                _aspectRatio: function(i) {
                    if (!i.naturalHeight && !i.naturalWidth) {
                        var t = new Image;
                        t.src = i.src, i.naturalHeight = t.height, i.naturalWidth = t.width
                    }
                    return i.naturalHeight / i.naturalWidth
                },
                _scale: function(i, n) {
                    n = n || s.image._aspectRatio(i);
                    var e = s.height / s.width,
                        o = t(i);
                    e > n ? o.css({
                        height: s.height,
                        width: s.height / n
                    }) : o.css({
                        height: s.width * n,
                        width: s.width
                    })
                }
            },
            l = {
                _setCurrent: function(i) {
                    if (s.$pagination) {
                        var t = s.$pagination.children();
                        t.removeClass("current"), t.eq(i).addClass("current")
                    }
                },
                _addItem: function(i) {
                    var n = i + 1,
                        e = n,
                        o = s.$container.children().eq(i),
                        a = o.attr("id");
                    a && (e = a);
                    var r = t("<a>", {
                        href: "#" + e,
                        text: e
                    });
                    r.appendTo(s.$pagination)
                },
                _setup: function() {
                    if (s.options.pagination && 1 !== s.size()) {
                        var i = t("<nav>", {
                            "class": s.options.elements.pagination.replace(/^\./, "")
                        });
                        s.$pagination = i.appendTo(s.$el);
                        for (var n = 0; s.size() > n; n++) s.pagination._addItem(n)
                    }
                },
                _events: function() {
                    s.$el.on("click", s.options.elements.pagination + " a", function(i) {
                        i.preventDefault();
                        var t, n = s._parseHash(this.hash);
                        t = s._upcomingSlide(n, !0), t !== s.current && s.animate(t, function() {
                            s.start()
                        })
                    })
                }
            };
        return this.css = h, this.image = d, this.pagination = l, this.fx = c, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(o).parent(".slides-control"), s._findPositions(), s.width = s._findWidth(), s.height = s._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), r()
    }, n.prototype = {
        _findWidth: function() {
            return t(this.options.inherit_width_from).width()
        },
        _findHeight: function() {
            return t(this.options.inherit_height_from).height()
        },
        _findMultiplier: function() {
            return 1 === this.size() ? 1 : 3
        },
        _upcomingSlide: function(i, t) {
            if (t && !isNaN(i) && (i -= 1), /next/.test(i)) return this._nextInDom();
            if (/prev/.test(i)) return this._prevInDom();
            if (/\d/.test(i)) return +i;
            if (i && /\w/.test(i)) {
                var n = this._findSlideById(i);
                return n >= 0 ? n : 0
            }
            return 0
        },
        _findSlideById: function(i) {
            return this.$container.find("#" + i).index()
        },
        _findPositions: function(i, t) {
            t = t || this, void 0 === i && (i = -1), t.current = i, t.next = t._nextInDom(), t.prev = t._prevInDom()
        },
        _nextInDom: function() {
            var i = this.current + 1;
            return i === this.size() && (i = 0), i
        },
        _prevInDom: function() {
            var i = this.current - 1;
            return 0 > i && (i = this.size() - 1), i
        },
        _parseHash: function(t) {
            return t = t || i.location.hash, t = t.replace(/^#/, ""), t && !isNaN(+t) && (t = +t), t
        },
        size: function() {
            return this.$container.children().length
        },
        destroy: function() {
            return this.$el.removeData()
        },
        update: function() {
            this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides")
        },
        stop: function() {
            clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides")
        },
        start: function() {
            var n = this;
            n.options.hashchange ? t(i).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function() {
                n.animate()
            }, this.options.play)), this.$el.trigger("started.slides")
        },
        animate: function(t, n) {
            var e = this,
                s = {};
            if (!(this.animating || (this.animating = !0, void 0 === t && (t = "next"), s.upcoming_slide = this._upcomingSlide(t), s.upcoming_slide >= this.size()))) {
                if (s.outgoing_slide = this.current, s.upcoming_position = 2 * this.width, s.offset = -s.upcoming_position, ("prev" === t || s.outgoing_slide > t) && (s.upcoming_position = 0, s.offset = 0), e.size() > 1 && e.pagination._setCurrent(s.upcoming_slide), e.options.hashchange) {
                    var o = s.upcoming_slide + 1,
                        a = e.$container.children(":eq(" + s.upcoming_slide + ")").attr("id");
                    i.location.hash = a ? a : o
                }
                e.$el.trigger("animating.slides", [s]), e.animation(s, function() {
                    e._findPositions(s.upcoming_slide, e), "function" == typeof n && n(), e.animating = !1, e.$el.trigger("animated.slides"), e.init || (e.$el.trigger("init.slides"), e.init = !0, e.$container.fadeIn("fast"))
                })
            }
        }
    }, t.fn[e] = function(i, s) {
        var o = [];
        return this.each(function() {
            var a, r, h;
            return a = t(this), r = a.data(e), h = "object" == typeof i && i, r || (o = a.data(e, r = new n(this, h))), "string" == typeof i && (o = r[i], "function" == typeof o) ? o = o.call(r, s) : void 0
        }), o
    }, t.fn[e].fx = {}
})(this, jQuery);
if (typeof Object.create !== "function") {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function($, window, document) {
    var
        loadAPI = function loadAPI(callback) {
            var tag = document.createElement('script'),
                head = document.getElementsByTagName('head')[0];
            tag.src = location.protocol + '//www.youtube.com/iframe_api';
            head.appendChild(tag);
            head = null;
            tag = null;

            iframeIsReady(callback);
        },
        iframeIsReady = function iframeIsReady(callback) {
            if (typeof YT === 'undefined' && typeof window.loadingPlayer === 'undefined') {
                window.loadingPlayer = true;
                window.dfd = $.Deferred();
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    window.dfd.resolve("John");
                    callback();
                };
            } else {
                window.dfd.done(function(name) {
                    callback();
                });
            }
        };
    YTPlayer = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: 'LSmgKRx5pBo',
            mute: true,
            repeat: true,
            width: $(window).width(),
            playButtonClass: 'YTPlayer-play',
            pauseButtonClass: 'YTPlayer-pause',
            muteButtonClass: 'YTPlayer-mute',
            volumeUpClass: 'YTPlayer-volume-up',
            volumeDownClass: 'YTPlayer-volume-down',
            start: 0,
            pauseOnScroll: false,
            fitToBackground: true,
            playerVars: {
                modestbranding: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            },
            events: null
        },
        init: function init(node, userOptions) {
            var self = this;
            self.userOptions = userOptions;
            self.$body = $('body'),
                self.$node = $(node),
                self.$window = $(window);
            self.defaults.events = {
                onReady: function(e) {
                    self.onPlayerReady(e);
                    if (self.options.pauseOnScroll) {
                        self.pauseOnScroll();
                    }
                    if (typeof self.options.callback == 'function') {
                        self.options.callback.call(this);
                    }
                },
                onStateChange: function(e) {
                    if (e.data === 1) {
                        self.$node.addClass('loaded');
                    } else if (e.data === 0 && self.options.repeat) {
                        self.player.seekTo(self.options.start);
                    }
                }
            }
            self.options = $.extend(true, {}, self.defaults, self.userOptions);
            self.ID = (new Date()).getTime();
            self.holderID = 'YTPlayer-ID-' + self.ID;
            if (self.options.fitToBackground) {
                self.createBackgroundVideo();
            } else {
                self.createContainerVideo();
            }
            self.$window.on('resize.YTplayer' + self.ID, function() {
                self.resize(self);
            });

            loadAPI(self.onYouTubeIframeAPIReady.bind(self));

            self.resize(self);

            return self;
        },
        pauseOnScroll: function pauseOnScroll() {
            var self = this;
            self.$window.on('scroll.YTplayer' + self.ID, function() {
                var state = self.player.getPlayerState();
                if (state === 1) {
                    self.player.pauseVideo();
                }
            });
            self.$window.scrollStopped(function() {
                var state = self.player.getPlayerState();
                if (state === 2) {
                    self.player.playVideo();
                }
            });
        },
        createContainerVideo: function createContainerVideo() {
            var self = this;
            var $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" >\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div> \
                                    </div> \
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        createBackgroundVideo: function createBackgroundVideo() {
            var self = this,
                $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        resize: function resize(self) {
            var container = $(window);

            if (!self.options.fitToBackground) {
                container = self.$node;
            }
            var width = container.width(),
                pWidth,
                height = container.height(),
                pHeight,
                $YTPlayerPlayer = $('#' + self.holderID);
            if (width / self.options.ratio < height) {
                pWidth = Math.ceil(height * self.options.ratio);
                $YTPlayerPlayer.width(pWidth).height(height).css({
                    left: (width - pWidth) / 2,
                    top: 0
                });
            } else {
                pHeight = Math.ceil(width / self.options.ratio); // get new player height
                $YTPlayerPlayer.width(width).height(pHeight).css({
                    left: 0,
                    top: 0
                });
            }
            $YTPlayerPlayer = null;
            container = null;
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
            var self = this;

            self.player = new window.YT.Player(self.holderID, {
                width: self.options.width,
                height: Math.ceil(self.options.width / self.options.ratio),
                videoId: self.options.videoId,
                playerVars: self.options.playerVars,
                events: self.options.events
            });
        },
        onPlayerReady: function onPlayerReady(e) {
            if (this.options.mute) {
                e.target.mute();
            }
            e.target.playVideo();
        },
        getPlayer: function getPlayer() {
            return this.player;
        },
        destroy: function destroy() {
            var self = this;
            self.$node
                .removeData('yt-init')
                .removeData('ytPlayer')
                .removeClass('loaded');
            self.$YTPlayerString.remove();
            $(window).off('resize.YTplayer' + self.ID);
            $(window).off('scroll.YTplayer' + self.ID);
            self.$body = null;
            self.$node = null;
            self.$YTPlayerString = null;
            self.player.destroy();
            self.player = null;
        }
    };
    $.fn.scrollStopped = function(callback) {
        var $this = $(this),
            self = this;
        $this.scroll(function() {
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, 250, self));
        });
    };
    $.fn.YTPlayer = function(options) {
        return this.each(function() {
            var el = this;
            $(el).data("yt-init", true);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };
})(jQuery, window, document);
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// Modified by Stan Scates for https://github.com/StanScates/Tweet.js-Mod
(function(factory) {
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);
    else factory(jQuery)
}(function($) {
    $.fn.tweet = function(o) {
        var s = $.extend({
            modpath: "./twitter/",
            username: null,
            list_id: null,
            list: null,
            favorites: false,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: true,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: "i said,",
            auto_join_text_ed: "i",
            auto_join_text_ing: "i am",
            auto_join_text_reply: "i replied to",
            auto_join_text_url: "i was looking at",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            twitter_api_url: "api.twitter.com",
            twitter_search_url: "search.twitter.com",
            template: "{avatar}{time}{join}{text}",
            comparator: function(tweet1, tweet2) {
                return tweet2["tweet_time"] - tweet1["tweet_time"]
            },
            filter: function(tweet) {
                return true
            }
        }, o);
        var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

        function t(template, info) {
            if (typeof template === "string") {
                var result = template;
                for (var key in info) {
                    var val = info[key];
                    result = result.replace(new RegExp('{' + key + '}', 'g'), val === null ? '' : val)
                }
                return result
            } else return template(info)
        }
        $.extend({
            tweet: {
                t: t
            }
        });

        function replacer(regex, replacement) {
            return function() {
                var returning = [];
                this.each(function() {
                    returning.push(this.replace(regex, replacement))
                });
                return $(returning)
            }
        }

        function escapeHTML(s) {
            return s.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }
        $.fn.extend({
            linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://" + s.twitter_url + "/$2\">$2</a>"),
            linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + s.twitter_search_url + '/search?q=&tag=$1&lang=all' + ((s.username && s.username.length == 1 && !s.list) ? '&from=' + s.username.join("%2BOR%2B") : '') + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        });

        function linkURLs(text, entities) {
            return text.replace(url_regexp, function(match) {
                var url = (/^[a-z]+:/i).test(match) ? match : "http://" + match;
                var text = match;
                for (var i = 0; i < entities.length; ++i) {
                    var entity = entities[i];
                    if (entity.url == url && entity.expanded_url) {
                        url = entity.expanded_url;
                        text = entity.display_url;
                        break
                    }
                }
                return "<a href=\"" + escapeHTML(url) + "\">" + escapeHTML(text) + "</a>"
            })
        }

        function parse_date(date_str) {
            return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'))
        }

        function relative_time(date) {
            var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
            var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
            var r = '';
            if (delta < 1) {
                r = 'just now'
            } else if (delta < 60) {
                r = delta + ' seconds ago'
            } else if (delta < 120) {
                r = 'about a minute ago'
            } else if (delta < (45 * 60)) {
                r = 'about ' + (parseInt(delta / 60, 10)).toString() + ' minutes ago'
            } else if (delta < (2 * 60 * 60)) {
                r = 'about an hour ago'
            } else if (delta < (24 * 60 * 60)) {
                r = 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago'
            } else if (delta < (48 * 60 * 60)) {
                r = 'about a day ago'
            } else {
                r = 'about ' + (parseInt(delta / 86400, 10)).toString() + ' days ago'
            }
            return r
        }

        function build_auto_join_text(text) {
            if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
                return s.auto_join_text_reply
            } else if (text.match(url_regexp)) {
                return s.auto_join_text_url
            } else if (text.match(/^((\w+ed)|just) .*/im)) {
                return s.auto_join_text_ed
            } else if (text.match(/^(\w*ing) .*/i)) {
                return s.auto_join_text_ing
            } else {
                return s.auto_join_text_default
            }
        }

        function build_api_request() {
            var modpath = s.modpath,
                count = (s.fetch === null) ? s.count : s.fetch,
                defaults = {
                    include_entities: 1
                };
            if (s.list) {
                return {
                    host: s.twitter_api_url,
                    url: "/1.1/lists/statuses.json",
                    parameters: $.extend({}, defaults, {
                        list_id: s.list_id,
                        slug: s.list,
                        owner_screen_name: s.username,
                        page: s.page,
                        count: count,
                        include_rts: (s.retweets ? 1 : 0)
                    })
                }
            } else if (s.favorites) {
                return {
                    host: s.twitter_api_url,
                    url: "/1.1/favorites/list.json",
                    parameters: $.extend({}, defaults, {
                        list_id: s.list_id,
                        screen_name: s.username,
                        page: s.page,
                        count: count
                    })
                }
            } else if (s.query === null && s.username.length === 1) {
                return {
                    host: s.twitter_api_url,
                    url: "/1.1/statuses/user_timeline.json",
                    parameters: $.extend({}, defaults, {
                        screen_name: s.username,
                        page: s.page,
                        count: count,
                        include_rts: (s.retweets ? 1 : 0)
                    })
                }
            } else {
                var query = (s.query || 'from:' + s.username.join(' OR from:'));
                return {
                    host: s.twitter_search_url,
                    url: "/search.json",
                    parameters: $.extend({}, defaults, {
                        page: s.page,
                        q: query,
                        rpp: count
                    })
                }
            }
        }

        function extract_avatar_url(item, secure) {
            if (secure) {
                return ('user' in item) ? item.user.profile_image_url_https : extract_avatar_url(item, false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/")
            } else {
                return item.profile_image_url || item.user.profile_image_url
            }
        }

        function extract_template_data(item) {
            var o = {};
            o.item = item;
            o.source = item.source;
            o.name = item.from_user_name || item.user.name;
            o.screen_name = item.from_user || item.user.screen_name;
            o.avatar_size = s.avatar_size;
            o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
            o.retweet = typeof(item.retweeted_status) != 'undefined';
            o.tweet_time = parse_date(item.created_at);
            o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
            o.tweet_id = item.id_str;
            o.twitter_base = "http://" + s.twitter_url + "/";
            o.user_url = o.twitter_base + o.screen_name;
            o.tweet_url = o.user_url + "/status/" + o.tweet_id;
            o.reply_url = o.twitter_base + "intent/tweet?in_reply_to=" + o.tweet_id;
            o.retweet_url = o.twitter_base + "intent/retweet?tweet_id=" + o.tweet_id;
            o.favorite_url = o.twitter_base + "intent/favorite?tweet_id=" + o.tweet_id;
            o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
            o.tweet_relative_time = relative_time(o.tweet_time);
            o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
            o.tweet_raw_text = o.retweet ? ('RT @' + o.retweeted_screen_name + ' ' + item.retweeted_status.text) : item.text;
            o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
            o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];
            o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
            o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
            o.avatar = o.avatar_size ? t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
            o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
            o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
            o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
            o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
            o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
            return o
        }
        return this.each(function(i, widget) {
            var list = $('<ul class="tweet_list">');
            var intro = '<p class="tweet_intro">' + s.intro_text + '</p>';
            var outro = '<p class="tweet_outro">' + s.outro_text + '</p>';
            var loading = $('<p class="loading">' + s.loading_text + '</p>');
            if (s.username && typeof(s.username) == "string") {
                s.username = [s.username]
            }
            $(widget).unbind("tweet:load").bind("tweet:load", function() {
                if (s.loading_text) $(widget).empty().append(loading);
                $.ajax({
                    dataType: "json",
                    type: "post",
                    async: false,
                    url: s.modpath || "/twitter/",
                    data: {
                        request: build_api_request()
                    },
                    success: function(data, status) {
                        if (data.message) {
                            console.log(data.message)
                        }
                        var response = data.response;
                        $(widget).empty().append(list);
                        if (s.intro_text) list.before(intro);
                        list.empty();
                        if (response.statuses !== undefined) {
                            resp = response.statuses
                        } else if (response.results !== undefined) {
                            resp = response.results
                        } else {
                            resp = response
                        }
                        var tweets = $.map(resp, extract_template_data);
                        tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
                        list.append($.map(tweets, function(o) {
                            return "<li>" + t(s.template, o) + "</li>"
                        }).join('')).children('li:first').addClass('tweet_first').end().children('li:odd').addClass('tweet_even').end().children('li:even').addClass('tweet_odd');
                        if (s.outro_text) list.after(outro);
                        $(widget).trigger("loaded").trigger((tweets ? "empty" : "full"));
                        if (s.refresh_interval) {
                            window.setTimeout(function() {
                                $(widget).trigger("tweet:load")
                            }, 1000 * s.refresh_interval)
                        }
                    }
                })
            }).trigger("tweet:load")
        })
    }
}));
/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
! function(t, n) {
    function e(t) {
        return "object" == typeof t
    }

    function o(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "number" == typeof t
    }

    function a(t) {
        return t === n
    }

    function r() {
        q = google.maps, A || (A = {
            verbose: !1,
            queryLimit: {
                attempt: 5,
                delay: 250,
                random: 250
            },
            classes: function() {
                var n = {};
                return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, e) {
                    n[e] = q[e]
                }), n
            }(),
            map: {
                mapTypeId: q.MapTypeId.ROADMAP,
                center: [46.578498, 2.457275],
                zoom: 2
            },
            overlay: {
                pane: "floatPane",
                content: "",
                offset: {
                    x: 0,
                    y: 0
                }
            },
            geoloc: {
                getCurrentPosition: {
                    maximumAge: 6e4,
                    timeout: 5e3
                }
            }
        })
    }

    function s(t, n) {
        return a(t) ? "gmap3_" + (n ? Z + 1 : ++Z) : t
    }

    function u(t) {
        var n, e = q.version.split(".");
        for (t = t.split("."), n = 0; n < e.length; n++) e[n] = parseInt(e[n], 10);
        for (n = 0; n < t.length; n++) {
            if (t[n] = parseInt(t[n], 10), !e.hasOwnProperty(n)) return !1;
            if (e[n] < t[n]) return !1
        }
        return !0
    }

    function l(n, e, o, i, a) {
        function r(e, i) {
            e && t.each(e, function(t, e) {
                var r = n,
                    s = e;
                R(e) && (r = e[0], s = e[1]), i(o, t, function(t) {
                    s.apply(r, [a || o, t, u])
                })
            })
        }
        var s = e.td || {},
            u = {
                id: i,
                data: s.data,
                tag: s.tag
            };
        r(s.events, q.event.addListener), r(s.onces, q.event.addListenerOnce)
    }

    function d(t) {
        var n, e = [];
        for (n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    }

    function c(t, n) {
        var e, o = arguments;
        for (e = 2; e < o.length; e++)
            if (n in o[e] && o[e].hasOwnProperty(n)) return void(t[n] = o[e][n])
    }

    function p(n, e) {
        var o, i, a = ["data", "tag", "id", "events", "onces"],
            r = {};
        if (n.td)
            for (o in n.td) n.td.hasOwnProperty(o) && "options" !== o && "values" !== o && (r[o] = n.td[o]);
        for (i = 0; i < a.length; i++) c(r, a[i], e, n.td);
        return r.options = t.extend({}, n.opts || {}, e.options || {}), r
    }

    function f() {
        if (A.verbose) {
            var t, n = [];
            if (window.console && z(console.error)) {
                for (t = 0; t < arguments.length; t++) n.push(arguments[t]);
                console.error.apply(console, n)
            } else {
                for (n = "", t = 0; t < arguments.length; t++) n += arguments[t].toString() + " ";
                alert(n)
            }
        }
    }

    function g(t) {
        return (i(t) || o(t)) && "" !== t && !isNaN(t)
    }

    function h(t) {
        var n, o = [];
        if (!a(t))
            if (e(t))
                if (i(t.length)) o = t;
                else
                    for (n in t) o.push(t[n]);
        else o.push(t);
        return o
    }

    function v(n) {
        return n ? z(n) ? n : (n = h(n), function(o) {
            var i;
            if (a(o)) return !1;
            if (e(o)) {
                for (i = 0; i < o.length; i++)
                    if (t.inArray(o[i], n) >= 0) return !0;
                return !1
            }
            return t.inArray(o, n) >= 0
        }) : void 0
    }

    function m(t, n, e) {
        var i = n ? t : null;
        return !t || o(t) ? i : t.latLng ? m(t.latLng) : t instanceof q.LatLng ? t : g(t.lat) ? new q.LatLng(t.lat, t.lng) : !e && R(t) && g(t[0]) && g(t[1]) ? new q.LatLng(t[0], t[1]) : i
    }

    function y(t) {
        var n, e;
        return !t || t instanceof q.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (n = m(t[0]), e = m(t[1])) : 4 === t.length && (n = m([t[0], t[1]]), e = m([t[2], t[3]])) : "ne" in t && "sw" in t ? (n = m(t.ne), e = m(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (n = m([t.n, t.e]), e = m([t.s, t.w])), n && e ? new q.LatLngBounds(e, n) : null)
    }

    function w(t, n, e, i, a) {
        var r = e ? m(i.td, !1, !0) : !1,
            s = r ? {
                latLng: r
            } : i.td.address ? o(i.td.address) ? {
                address: i.td.address
            } : i.td.address : !1,
            u = s ? G.get(s) : !1,
            l = this;
        s ? (a = a || 0, u ? (i.latLng = u.results[0].geometry.location, i.results = u.results, i.status = u.status, n.apply(t, [i])) : (s.location && (s.location = m(s.location)), s.bounds && (s.bounds = y(s.bounds)), M().geocode(s, function(o, r) {
            r === q.GeocoderStatus.OK ? (G.store(s, {
                results: o,
                status: r
            }), i.latLng = o[0].geometry.location, i.results = o, i.status = r, n.apply(t, [i])) : r === q.GeocoderStatus.OVER_QUERY_LIMIT && a < A.queryLimit.attempt ? setTimeout(function() {
                w.apply(l, [t, n, e, i, a + 1])
            }, A.queryLimit.delay + Math.floor(Math.random() * A.queryLimit.random)) : (f("geocode failed", r, s), i.latLng = i.results = !1, i.status = r, n.apply(t, [i]))
        }))) : (i.latLng = m(i.td, !1, !0), n.apply(t, [i]))
    }

    function L(n, e, o, i) {
        function a() {
            do s++; while (s < n.length && !("address" in n[s]));
            return s >= n.length ? void o.apply(e, [i]) : void w(r, function(e) {
                delete e.td, t.extend(n[s], e), a.apply(r, [])
            }, !0, {
                td: n[s]
            })
        }
        var r = this,
            s = -1;
        a()
    }

    function b(t, n, e) {
        var o = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(i) {
            o || (o = !0, e.latLng = new q.LatLng(i.coords.latitude, i.coords.longitude), n.apply(t, [e]))
        }, function() {
            o || (o = !0, e.latLng = !1, n.apply(t, [e]))
        }, e.opts.getCurrentPosition) : (e.latLng = !1, n.apply(t, [e]))
    }

    function x(t) {
        var n, o = !1;
        if (e(t) && t.hasOwnProperty("get")) {
            for (n in t)
                if ("get" !== n) return !1;
            o = !t.get.hasOwnProperty("callback")
        }
        return o
    }

    function M() {
        return V.geocoder || (V.geocoder = new q.Geocoder), V.geocoder
    }

    function I() {
        var t = [];
        this.get = function(n) {
            if (t.length) {
                var o, i, a, r, s, u = d(n);
                for (o = 0; o < t.length; o++) {
                    for (r = t[o], s = u.length === r.keys.length, i = 0; i < u.length && s; i++) a = u[i], s = a in r.request, s && (s = e(n[a]) && "equals" in n[a] && z(n[a]) ? n[a].equals(r.request[a]) : n[a] === r.request[a]);
                    if (s) return r.results
                }
            }
        }, this.store = function(n, e) {
            t.push({
                request: n,
                keys: d(n),
                results: e
            })
        }
    }

    function P() {
        var t = [],
            n = this;
        n.empty = function() {
            return !t.length
        }, n.add = function(n) {
            t.push(n)
        }, n.get = function() {
            return t.length ? t[0] : !1
        }, n.ack = function() {
            t.shift()
        }
    }

    function k() {
        function n(t) {
            return {
                id: t.id,
                name: t.name,
                object: t.obj,
                tag: t.tag,
                data: t.data
            }
        }

        function e(t) {
            z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null
        }
        var o = {},
            i = {},
            r = this;
        r.add = function(t, n, e, a) {
            var u = t.td || {},
                l = s(u.id);
            return o[n] || (o[n] = []), l in i && r.clearById(l), i[l] = {
                obj: e,
                sub: a,
                name: n,
                id: l,
                tag: u.tag,
                data: u.data
            }, o[n].push(l), l
        }, r.getById = function(t, e, o) {
            var a = !1;
            return t in i && (a = e ? i[t].sub : o ? n(i[t]) : i[t].obj), a
        }, r.get = function(t, e, a, r) {
            var s, u, l = v(a);
            if (!o[t] || !o[t].length) return null;
            for (s = o[t].length; s;)
                if (s--, u = o[t][e ? s : o[t].length - s - 1], u && i[u]) {
                    if (l && !l(i[u].tag)) continue;
                    return r ? n(i[u]) : i[u].obj
                }
            return null
        }, r.all = function(t, e, r) {
            var s = [],
                u = v(e),
                l = function(t) {
                    var e, a;
                    for (e = 0; e < o[t].length; e++)
                        if (a = o[t][e], a && i[a]) {
                            if (u && !u(i[a].tag)) continue;
                            s.push(r ? n(i[a]) : i[a].obj)
                        }
                };
            if (t in o) l(t);
            else if (a(t))
                for (t in o) l(t);
            return s
        }, r.rm = function(t, n, e) {
            var a, s;
            if (!o[t]) return !1;
            if (n)
                if (e)
                    for (a = o[t].length - 1; a >= 0 && (s = o[t][a], !n(i[s].tag)); a--);
                else
                    for (a = 0; a < o[t].length && (s = o[t][a], !n(i[s].tag)); a++);
            else a = e ? o[t].length - 1 : 0;
            return a in o[t] ? r.clearById(o[t][a], a) : !1
        }, r.clearById = function(t, n) {
            if (t in i) {
                var r, s = i[t].name;
                for (r = 0; a(n) && r < o[s].length; r++) t === o[s][r] && (n = r);
                return e(i[t].obj), i[t].sub && e(i[t].sub), delete i[t], o[s].splice(n, 1), !0
            }
            return !1
        }, r.objGetById = function(t) {
            var n, e;
            if (o.clusterer)
                for (e in o.clusterer)
                    if ((n = i[o.clusterer[e]].obj.getById(t)) !== !1) return n;
            return !1
        }, r.objClearById = function(t) {
            var n;
            if (o.clusterer)
                for (n in o.clusterer)
                    if (i[o.clusterer[n]].obj.clearById(t)) return !0;
            return null
        }, r.clear = function(t, n, e, i) {
            var a, s, u, l = v(i);
            if (t && t.length) t = h(t);
            else {
                t = [];
                for (a in o) t.push(a)
            }
            for (s = 0; s < t.length; s++)
                if (u = t[s], n) r.rm(u, l, !0);
                else if (e) r.rm(u, l, !1);
            else
                for (; r.rm(u, l, !1););
        }, r.objClear = function(n, e, a, r) {
            var s;
            if (o.clusterer && (t.inArray("marker", n) >= 0 || !n.length))
                for (s in o.clusterer) i[o.clusterer[s]].obj.clear(e, a, r)
        }
    }

    function B(n, e, i) {
        function a(t) {
            var n = {};
            return n[t] = {}, n
        }

        function r() {
            var t;
            for (t in i)
                if (i.hasOwnProperty(t) && !u.hasOwnProperty(t)) return t
        }
        var s, u = {},
            l = this,
            d = {
                latLng: {
                    map: !1,
                    marker: !1,
                    infowindow: !1,
                    circle: !1,
                    overlay: !1,
                    getlatlng: !1,
                    getmaxzoom: !1,
                    getelevation: !1,
                    streetviewpanorama: !1,
                    getaddress: !0
                },
                geoloc: {
                    getgeoloc: !0
                }
            };
        o(i) && (i = a(i)), l.run = function() {
            for (var o, a; o = r();) {
                if (z(n[o])) return s = o, a = t.extend(!0, {}, A[o] || {}, i[o].options || {}), void(o in d.latLng ? i[o].values ? L(i[o].values, n, n[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : w(n, n[o], d.latLng[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : o in d.geoloc ? b(n, n[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : n[o].apply(n, [{
                    td: i[o],
                    opts: a,
                    session: u
                }]));
                u[o] = null
            }
            e.apply(n, [i, u])
        }, l.ack = function(t) {
            u[s] = t, l.run.apply(l, [])
        }
    }

    function j() {
        return V.ds || (V.ds = new q.DirectionsService), V.ds
    }

    function O() {
        return V.dms || (V.dms = new q.DistanceMatrixService), V.dms
    }

    function C() {
        return V.mzs || (V.mzs = new q.MaxZoomService), V.mzs
    }

    function E() {
        return V.es || (V.es = new q.ElevationService), V.es
    }

    function S(t) {
        function n() {
            var t = this;
            return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, A.classes.OverlayView.apply(t, [])
        }
        n.prototype = A.classes.OverlayView.prototype;
        var e = new n;
        return e.setMap(t), e
    }

    function T(n, o, i) {
        function a(t) {
            T[t] || (delete _[t].options.map, T[t] = new A.classes.Marker(_[t].options), l(n, {
                td: _[t]
            }, T[t], _[t].id))
        }

        function r() {
            return (y = U.getProjection()) ? (P = !0, j.push(q.event.addListener(o, "zoom_changed", f)), j.push(q.event.addListener(o, "bounds_changed", f)), void h()) : void setTimeout(function() {
                r.apply(B, [])
            }, 25)
        }

        function u(t) {
            e(O[t]) ? (z(O[t].obj.setMap) && O[t].obj.setMap(null), z(O[t].obj.remove) && O[t].obj.remove(), z(O[t].shadow.remove) && O[t].obj.remove(), z(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : T[t] && T[t].setMap(null), delete O[t]
        }

        function d() {
            var t, n, e, o, i, a, r, s, u = Math.cos,
                l = Math.sin,
                d = arguments;
            return d[0] instanceof q.LatLng ? (t = d[0].lat(), e = d[0].lng(), d[1] instanceof q.LatLng ? (n = d[1].lat(), o = d[1].lng()) : (n = d[1], o = d[2])) : (t = d[0], e = d[1], d[2] instanceof q.LatLng ? (n = d[2].lat(), o = d[2].lng()) : (n = d[2], o = d[3])), i = Math.PI * t / 180, a = Math.PI * e / 180, r = Math.PI * n / 180, s = Math.PI * o / 180, 6371e3 * Math.acos(Math.min(u(i) * u(r) * u(a) * u(s) + u(i) * l(a) * u(r) * l(s) + l(i) * l(r), 1))
        }

        function c() {
            var t = d(o.getCenter(), o.getBounds().getNorthEast()),
                n = new q.Circle({
                    center: o.getCenter(),
                    radius: 1.25 * t
                });
            return n.getBounds()
        }

        function p() {
            var t, n = {};
            for (t in O) n[t] = !0;
            return n
        }

        function f() {
            clearTimeout(m), m = setTimeout(h, 25)
        }

        function g(t) {
            var n = y.fromLatLngToDivPixel(t),
                e = y.fromDivPixelToLatLng(new q.Point(n.x + i.radius, n.y - i.radius)),
                o = y.fromDivPixelToLatLng(new q.Point(n.x - i.radius, n.y + i.radius));
            return new q.LatLngBounds(o, e)
        }

        function h() {
            if (!x && !I && P) {
                var n, e, a, r, s, l, d, f, h, v, m, y = !1,
                    b = [],
                    B = {},
                    j = o.getZoom(),
                    C = "maxZoom" in i && j > i.maxZoom,
                    E = p();
                for (M = !1, j > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), n = 0; n < _.length; n++) !_[n] || y && !s.contains(_[n].options.position) || w && !w(D[n]) || b.push(n);
                for (;;) {
                    for (n = 0; B[n] && n < b.length;) n++;
                    if (n === b.length) break;
                    if (r = [], k && !C) {
                        m = 10;
                        do
                            for (f = r, r = [], m--, d = f.length ? s.getCenter() : _[b[n]].options.position, s = g(d), e = n; e < b.length; e++) B[e] || s.contains(_[b[e]].options.position) && r.push(e); while (f.length < r.length && r.length > 1 && m)
                    } else
                        for (e = n; e < b.length; e++)
                            if (!B[e]) {
                                r.push(e);
                                break
                            } for (l = {
                            indexes: [],
                            ref: []
                        }, h = v = 0, a = 0; a < r.length; a++) B[r[a]] = !0, l.indexes.push(b[r[a]]), l.ref.push(b[r[a]]), h += _[b[r[a]]].options.position.lat(), v += _[b[r[a]]].options.position.lng();
                    h /= r.length, v /= r.length, l.latLng = new q.LatLng(h, v), l.ref = l.ref.join("-"), l.ref in E ? delete E[l.ref] : (1 === r.length && (O[l.ref] = !0), L(l))
                }
                t.each(E, function(t) {
                    u(t)
                }), I = !1
            }
        }
        var m, y, w, L, b, x = !1,
            M = !1,
            I = !1,
            P = !1,
            k = !0,
            B = this,
            j = [],
            O = {},
            C = {},
            E = {},
            T = [],
            _ = [],
            D = [],
            U = S(o, i.radius);
        r(), B.getById = function(t) {
            return t in C ? (a(C[t]), T[C[t]]) : !1
        }, B.rm = function(t) {
            var n = C[t];
            T[n] && T[n].setMap(null), delete T[n], T[n] = !1, delete _[n], _[n] = !1, delete D[n], D[n] = !1, delete C[t], delete E[n], M = !0
        }, B.clearById = function(t) {
            return t in C ? (B.rm(t), !0) : void 0
        }, B.clear = function(t, n, e) {
            var o, i, a, r, s, u = [],
                l = v(e);
            for (t ? (o = _.length - 1, i = -1, a = -1) : (o = 0, i = _.length, a = 1), r = o; r !== i && (!_[r] || l && !l(_[r].tag) || (u.push(E[r]), !n && !t)); r += a);
            for (s = 0; s < u.length; s++) B.rm(u[s])
        }, B.add = function(t, n) {
            t.id = s(t.id), B.clearById(t.id), C[t.id] = T.length, E[T.length] = t.id, T.push(null), _.push(t), D.push(n), M = !0
        }, B.addMarker = function(t, e) {
            e = e || {}, e.id = s(e.id), B.clearById(e.id), e.options || (e.options = {}), e.options.position = t.getPosition(), l(n, {
                td: e
            }, t, e.id), C[e.id] = T.length, E[T.length] = e.id, T.push(t), _.push(e), D.push(e.data || {}), M = !0
        }, B.td = function(t) {
            return _[t]
        }, B.value = function(t) {
            return D[t]
        }, B.marker = function(t) {
            return t in T ? (a(t), T[t]) : !1
        }, B.markerIsSet = function(t) {
            return Boolean(T[t])
        }, B.setMarker = function(t, n) {
            T[t] = n
        }, B.store = function(t, n, e) {
            O[t.ref] = {
                obj: n,
                shadow: e
            }
        }, B.free = function() {
            var n;
            for (n = 0; n < j.length; n++) q.event.removeListener(j[n]);
            j = [], t.each(O, function(t) {
                u(t)
            }), O = {}, t.each(_, function(t) {
                _[t] = null
            }), _ = [], t.each(T, function(t) {
                T[t] && (T[t].setMap(null), delete T[t])
            }), T = [], t.each(D, function(t) {
                delete D[t]
            }), D = [], C = {}, E = {}
        }, B.filter = function(t) {
            w = t, h()
        }, B.enable = function(t) {
            k !== t && (k = t, h())
        }, B.display = function(t) {
            L = t
        }, B.error = function(t) {
            b = t
        }, B.beginUpdate = function() {
            x = !0
        }, B.endUpdate = function() {
            x = !1, M && h()
        }, B.autofit = function(t) {
            var n;
            for (n = 0; n < _.length; n++) _[n] && t.extend(_[n].options.position)
        }
    }

    function _(t, n) {
        var e = this;
        e.id = function() {
            return t
        }, e.filter = function(t) {
            n.filter(t)
        }, e.enable = function() {
            n.enable(!0)
        }, e.disable = function() {
            n.enable(!1)
        }, e.add = function(t, e, o) {
            o || n.beginUpdate(), n.addMarker(t, e), o || n.endUpdate()
        }, e.getById = function(t) {
            return n.getById(t)
        }, e.clearById = function(t, e) {
            var o;
            return e || n.beginUpdate(), o = n.clearById(t), e || n.endUpdate(), o
        }, e.clear = function(t, e, o, i) {
            i || n.beginUpdate(), n.clear(t, e, o), i || n.endUpdate()
        }
    }

    function D(n, e, o, i) {
        var a = this,
            r = [];
        A.classes.OverlayView.call(a), a.setMap(n), a.onAdd = function() {
            var n = a.getPanes();
            e.pane in n && t(n[e.pane]).append(i), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(n, e) {
                r.push(q.event.addDomListener(i[0], e, function(n) {
                    t.Event(n).stopPropagation(), q.event.trigger(a, e, [n]), a.draw()
                }))
            }), r.push(q.event.addDomListener(i[0], "contextmenu", function(n) {
                t.Event(n).stopPropagation(), q.event.trigger(a, "rightclick", [n]), a.draw()
            }))
        }, a.getPosition = function() {
            return o
        }, a.setPosition = function(t) {
            o = t, a.draw()
        }, a.draw = function() {
            var t = a.getProjection().fromLatLngToDivPixel(o);
            i.css("left", t.x + e.offset.x + "px").css("top", t.y + e.offset.y + "px")
        }, a.onRemove = function() {
            var t;
            for (t = 0; t < r.length; t++) q.event.removeListener(r[t]);
            i.remove()
        }, a.hide = function() {
            i.hide()
        }, a.show = function() {
            i.show()
        }, a.toggle = function() {
            i && (i.is(":visible") ? a.show() : a.hide())
        }, a.toggleDOM = function() {
            a.setMap(a.getMap() ? null : n)
        }, a.getDOMElement = function() {
            return i[0]
        }
    }

    function U(i) {
        function r() {
            !b && (b = M.get()) && b.run()
        }

        function d() {
            b = null, M.ack(), r.call(x)
        }

        function c(t) {
            var n, e = t.td.callback;
            e && (n = Array.prototype.slice.call(arguments, 1), z(e) ? e.apply(i, n) : R(e) && z(e[1]) && e[1].apply(e[0], n))
        }

        function g(t, n, e) {
            e && l(i, t, n, e), c(t, n), b.ack(n)
        }

        function v(n, e) {
            e = e || {};
            var o = e.td && e.td.options ? e.td.options : 0;
            S ? o && (o.center && (o.center = m(o.center)), S.setOptions(o)) : (o = e.opts || t.extend(!0, {}, A.map, o || {}), o.center = n || m(o.center), S = new A.classes.Map(i.get(0), o))
        }

        function w(e) {
            var o, a, r = new T(i, S, e),
                s = {},
                u = {},
                d = [],
                c = /^[0-9]+$/;
            for (a in e) c.test(a) ? (d.push(1 * a), u[a] = e[a], u[a].width = u[a].width || 0, u[a].height = u[a].height || 0) : s[a] = e[a];
            return d.sort(function(t, n) {
                return t > n
            }), o = s.calculator ? function(n) {
                var e = [];
                return t.each(n, function(t, n) {
                    e.push(r.value(n))
                }), s.calculator.apply(i, [e])
            } : function(t) {
                return t.length
            }, r.error(function() {
                f.apply(x, arguments)
            }), r.display(function(a) {
                var c, p, f, g, h, v, y = o(a.indexes);
                if (e.force || y > 1)
                    for (c = 0; c < d.length; c++) d[c] <= y && (p = u[d[c]]);
                p ? (h = p.offset || [-p.width / 2, -p.height / 2], f = t.extend({}, s), f.options = t.extend({
                    pane: "overlayLayer",
                    content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                    offset: {
                        x: ("x" in h ? h.x : h[0]) || 0,
                        y: ("y" in h ? h.y : h[1]) || 0
                    }
                }, s.options || {}), g = x.overlay({
                    td: f,
                    opts: f.options,
                    latLng: m(a)
                }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                    cursor: "pointer"
                }), v = x.overlay({
                    td: f,
                    opts: f.options,
                    latLng: m(a)
                }, !0), s.data = {
                    latLng: m(a),
                    markers: []
                }, t.each(a.indexes, function(t, n) {
                    s.data.markers.push(r.value(n)), r.markerIsSet(n) && r.marker(n).setMap(null)
                }), l(i, {
                    td: s
                }, v, n, {
                    main: g,
                    shadow: v
                }), r.store(a, g, v)) : t.each(a.indexes, function(t, n) {
                    r.marker(n).setMap(S)
                })
            }), r
        }

        function L(n, e, o) {
            var a = [],
                r = "values" in n.td;
            return r || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (v(), t.each(n.td.values, function(t, r) {
                var s, u, d, c, f = p(n, r);
                if (f.options[o])
                    if (f.options[o][0][0] && R(f.options[o][0][0]))
                        for (u = 0; u < f.options[o].length; u++)
                            for (d = 0; d < f.options[o][u].length; d++) f.options[o][u][d] = m(f.options[o][u][d]);
                    else
                        for (u = 0; u < f.options[o].length; u++) f.options[o][u] = m(f.options[o][u]);
                f.options.map = S, c = new q[e](f.options), a.push(c), s = I.add({
                    td: f
                }, e.toLowerCase(), c), l(i, {
                    td: f
                }, c, s)
            }), void g(n, r ? a : a[0])) : void g(n, !1)
        }
        var b, x = this,
            M = new P,
            I = new k,
            S = null;
        x._plan = function(t) {
            var n;
            for (n = 0; n < t.length; n++) M.add(new B(x, d, t[n]));
            r()
        }, x.map = function(t) {
            v(t.latLng, t), l(i, t, S), g(t, S)
        }, x.destroy = function(t) {
            I.clear(), i.empty(), S && (S = null), g(t, !0)
        }, x.overlay = function(n, e) {
            var o = [],
                a = "values" in n.td;
            return a || (n.td.values = [{
                latLng: n.latLng,
                options: n.opts
            }]), n.td.values.length ? (D.__initialised || (D.prototype = new A.classes.OverlayView, D.__initialised = !0), t.each(n.td.values, function(a, r) {
                var s, u, d = p(n, r),
                    c = t(document.createElement("div")).css({
                        border: "none",
                        borderWidth: 0,
                        position: "absolute"
                    });
                c.append(d.options.content), u = new D(S, d.options, m(d) || m(r), c), o.push(u), c = null, e || (s = I.add(n, "overlay", u), l(i, {
                    td: d
                }, u, s))
            }), e ? o[0] : void g(n, a ? o : o[0])) : void g(n, !1)
        }, x.marker = function(n) {
            var e, o, a, r = "values" in n.td,
                u = !S;
            return r || (n.opts.position = n.latLng || m(n.opts.position), n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (u && v(), n.td.cluster && !S.getBounds() ? void q.event.addListenerOnce(S, "bounds_changed", function() {
                x.marker.apply(x, [n])
            }) : void(n.td.cluster ? (n.td.cluster instanceof _ ? (o = n.td.cluster, a = I.getById(o.id(), !0)) : (a = w(n.td.cluster), o = new _(s(n.td.id, !0), a), I.add(n, "clusterer", o, a)), a.beginUpdate(), t.each(n.td.values, function(t, e) {
                var o = p(n, e);
                o.options.position = m(o.options.position ? o.options.position : e), o.options.position && (o.options.map = S, u && (S.setCenter(o.options.position), u = !1), a.add(o, e))
            }), a.endUpdate(), g(n, o)) : (e = [], t.each(n.td.values, function(t, o) {
                var a, r, s = p(n, o);
                s.options.position = m(s.options.position ? s.options.position : o), s.options.position && (s.options.map = S, u && (S.setCenter(s.options.position), u = !1), r = new A.classes.Marker(s.options), e.push(r), a = I.add({
                    td: s
                }, "marker", r), l(i, {
                    td: s
                }, r, a))
            }), g(n, r ? e : e[0])))) : void g(n, !1)
        }, x.getroute = function(t) {
            t.opts.origin = m(t.opts.origin, !0), t.opts.destination = m(t.opts.destination, !0), j().route(t.opts, function(n, e) {
                c(t, e === q.DirectionsStatus.OK ? n : !1, e), b.ack()
            })
        }, x.getdistance = function(t) {
            var n;
            for (t.opts.origins = h(t.opts.origins), n = 0; n < t.opts.origins.length; n++) t.opts.origins[n] = m(t.opts.origins[n], !0);
            for (t.opts.destinations = h(t.opts.destinations), n = 0; n < t.opts.destinations.length; n++) t.opts.destinations[n] = m(t.opts.destinations[n], !0);
            O().getDistanceMatrix(t.opts, function(n, e) {
                c(t, e === q.DistanceMatrixStatus.OK ? n : !1, e), b.ack()
            })
        }, x.infowindow = function(e) {
            var o = [],
                r = "values" in e.td;
            r || (e.latLng && (e.opts.position = e.latLng), e.td.values = [{
                options: e.opts
            }]), t.each(e.td.values, function(t, s) {
                var u, d, c = p(e, s);
                c.options.position = m(c.options.position ? c.options.position : s.latLng), S || v(c.options.position), d = new A.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(S, c.anchor || n) : d.open(S, c.anchor || (e.latLng ? n : e.session.marker ? e.session.marker : n))), o.push(d), u = I.add({
                    td: c
                }, "infowindow", d), l(i, {
                    td: c
                }, d, u)
            }), g(e, r ? o : o[0])
        }, x.circle = function(n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.opts.center = n.latLng || m(n.opts.center), n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
                var a, r, s = p(n, o);
                s.options.center = m(s.options.center ? s.options.center : o), S || v(s.options.center), s.options.map = S, r = new A.classes.Circle(s.options), e.push(r), a = I.add({
                    td: s
                }, "circle", r), l(i, {
                    td: s
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.getaddress = function(t) {
            c(t, t.results, t.status), b.ack()
        }, x.getlatlng = function(t) {
            c(t, t.results, t.status), b.ack()
        }, x.getmaxzoom = function(t) {
            C().getMaxZoomAtLatLng(t.latLng, function(n) {
                c(t, n.status === q.MaxZoomStatus.OK ? n.zoom : !1, status), b.ack()
            })
        }, x.getelevation = function(t) {
            var n, e = [],
                o = function(n, e) {
                    c(t, e === q.ElevationStatus.OK ? n : !1, e), b.ack()
                };
            if (t.latLng) e.push(t.latLng);
            else
                for (e = h(t.td.locations || []), n = 0; n < e.length; n++) e[n] = m(e[n]);
            if (e.length) E().getElevationForLocations({
                locations: e
            }, o);
            else {
                if (t.td.path && t.td.path.length)
                    for (n = 0; n < t.td.path.length; n++) e.push(m(t.td.path[n]));
                e.length ? E().getElevationAlongPath({
                    path: e,
                    samples: t.td.samples
                }, o) : b.ack()
            }
        }, x.defaults = function(n) {
            t.each(n.td, function(n, o) {
                A[n] = e(A[n]) ? t.extend({}, A[n], o) : o
            }), b.ack(!0)
        }, x.rectangle = function(n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
                var a, r, s = p(n, o);
                s.options.bounds = y(s.options.bounds ? s.options.bounds : o), S || v(s.options.bounds.getCenter()), s.options.map = S, r = new A.classes.Rectangle(s.options), e.push(r), a = I.add({
                    td: s
                }, "rectangle", r), l(i, {
                    td: s
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.polyline = function(t) {
            L(t, "Polyline", "path")
        }, x.polygon = function(t) {
            L(t, "Polygon", "paths")
        }, x.trafficlayer = function(t) {
            v();
            var n = I.get("trafficlayer");
            n || (n = new A.classes.TrafficLayer, n.setMap(S), I.add(t, "trafficlayer", n)), g(t, n)
        }, x.bicyclinglayer = function(t) {
            v();
            var n = I.get("bicyclinglayer");
            n || (n = new A.classes.BicyclingLayer, n.setMap(S), I.add(t, "bicyclinglayer", n)), g(t, n)
        }, x.groundoverlay = function(t) {
            t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
            var n, e = new A.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
            e.setMap(S), n = I.add(t, "groundoverlay", e), g(t, e, n)
        }, x.streetviewpanorama = function(n) {
            n.opts.opts || (n.opts.opts = {}), n.latLng ? n.opts.opts.position = n.latLng : n.opts.opts.position && (n.opts.opts.position = m(n.opts.opts.position)), n.td.divId ? n.opts.container = document.getElementById(n.td.divId) : n.opts.container && (n.opts.container = t(n.opts.container).get(0));
            var e, o = new A.classes.StreetViewPanorama(n.opts.container, n.opts.opts);
            o && S.setStreetView(o), e = I.add(n, "streetviewpanorama", o), g(n, o, e)
        }, x.kmllayer = function(n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
                var a, r, s, d = p(n, o);
                S || v(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = S, r = u("3.10") ? new A.classes.KmlLayer(s) : new A.classes.KmlLayer(s.url, s), e.push(r), a = I.add({
                    td: d
                }, "kmllayer", r), l(i, {
                    td: d
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.panel = function(n) {
            v();
            var e, o, r = 0,
                s = 0,
                u = t(document.createElement("div"));
            u.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }), n.opts.content && (o = t(n.opts.content), u.append(o), i.first().prepend(u), a(n.opts.left) ? a(n.opts.right) ? n.opts.center && (r = (i.width() - o.width()) / 2) : r = i.width() - o.width() - n.opts.right : r = n.opts.left, a(n.opts.top) ? a(n.opts.bottom) ? n.opts.middle && (s = (i.height() - o.height()) / 2) : s = i.height() - o.height() - n.opts.bottom : s = n.opts.top, u.css({
                top: s,
                left: r,
                visibility: "visible"
            })), e = I.add(n, "panel", u), g(n, u, e), u = null
        }, x.directionsrenderer = function(n) {
            n.opts.map = S;
            var e, o = new q.DirectionsRenderer(n.opts);
            n.td.divId ? o.setPanel(document.getElementById(n.td.divId)) : n.td.container && o.setPanel(t(n.td.container).get(0)), e = I.add(n, "directionsrenderer", o), g(n, o, e)
        }, x.getgeoloc = function(t) {
            g(t, t.latLng)
        }, x.styledmaptype = function(t) {
            v();
            var n = new A.classes.StyledMapType(t.td.styles, t.opts);
            S.mapTypes.set(t.td.id, n), g(t, n)
        }, x.imagemaptype = function(t) {
            v();
            var n = new A.classes.ImageMapType(t.opts);
            S.mapTypes.set(t.td.id, n), g(t, n)
        }, x.autofit = function(n) {
            var e = new q.LatLngBounds;
            t.each(I.all(), function(t, n) {
                n.getPosition ? e.extend(n.getPosition()) : n.getBounds ? (e.extend(n.getBounds().getNorthEast()), e.extend(n.getBounds().getSouthWest())) : n.getPaths ? n.getPaths().forEach(function(t) {
                    t.forEach(function(t) {
                        e.extend(t)
                    })
                }) : n.getPath ? n.getPath().forEach(function(t) {
                    e.extend(t)
                }) : n.getCenter ? e.extend(n.getCenter()) : "function" == typeof _ && n instanceof _ && (n = I.getById(n.id(), !0), n && n.autofit(e))
            }), e.isEmpty() || S.getBounds() && S.getBounds().equals(e) || ("maxZoom" in n.td && q.event.addListenerOnce(S, "bounds_changed", function() {
                this.getZoom() > n.td.maxZoom && this.setZoom(n.td.maxZoom)
            }), S.fitBounds(e)), g(n, !0)
        }, x.clear = function(n) {
            if (o(n.td)) {
                if (I.clearById(n.td) || I.objClearById(n.td)) return void g(n, !0);
                n.td = {
                    name: n.td
                }
            }
            n.td.id ? t.each(h(n.td.id), function(t, n) {
                I.clearById(n) || I.objClearById(n)
            }) : (I.clear(h(n.td.name), n.td.last, n.td.first, n.td.tag), I.objClear(h(n.td.name), n.td.last, n.td.first, n.td.tag)), g(n, !0)
        }, x.get = function(e, i, a) {
            var r, s, u = i ? e : e.td;
            return i || (a = u.full), o(u) ? (s = I.getById(u, !1, a) || I.objGetById(u), s === !1 && (r = u, u = {})) : r = u.name, "map" === r && (s = S), s || (s = [], u.id ? (t.each(h(u.id), function(t, n) {
                s.push(I.getById(n, !1, a) || I.objGetById(n))
            }), R(u.id) || (s = s[0])) : (t.each(r ? h(r) : [n], function(n, e) {
                var o;
                u.first ? (o = I.get(e, !1, u.tag, a), o && s.push(o)) : u.all ? t.each(I.all(e, u.tag, a), function(t, n) {
                    s.push(n)
                }) : (o = I.get(e, !0, u.tag, a), o && s.push(o))
            }), u.all || R(r) || (s = s[0]))), s = R(s) || !u.all ? s : [s], i ? s : void g(e, s)
        }, x.exec = function(n) {
            t.each(h(n.td.func), function(e, o) {
                t.each(x.get(n.td, !0, n.td.hasOwnProperty("full") ? n.td.full : !0), function(t, n) {
                    o.call(i, n)
                })
            }), g(n, !0)
        }, x.trigger = function(n) {
            if (o(n.td)) q.event.trigger(S, n.td);
            else {
                var e = [S, n.td.eventName];
                n.td.var_args && t.each(n.td.var_args, function(t, n) {
                    e.push(n)
                }), q.event.trigger.apply(q.event, e)
            }
            c(n), b.ack()
        }
    }
    var A, q, Z = 0,
        z = t.isFunction,
        R = t.isArray,
        V = {},
        G = new I;
    t.fn.gmap3 = function() {
        var n, e = [],
            o = !0,
            i = [];
        for (r(), n = 0; n < arguments.length; n++) arguments[n] && e.push(arguments[n]);
        return e.length || e.push("map"), t.each(this, function() {
            var n = t(this),
                a = n.data("gmap3");
            o = !1, a || (a = new U(n), n.data("gmap3", a)), 1 !== e.length || "get" !== e[0] && !x(e[0]) ? a._plan(e) : i.push("get" === e[0] ? a.get("map", !0) : a.get(e[0].get, !0, e[0].get.full))
        }), i.length ? 1 === i.length ? i[0] : i : this
    }
}(jQuery);
/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/

(function($) {
    'use strict';
    $.ajaxChimp = {
        responses: {
            'We have sent you a confirmation email': 0,
            'Please enter a value': 1,
            'An email address must contain a single @': 2,
            'The domain portion of the email address is invalid (the portion after the @: )': 3,
            'The username portion of the email address is invalid (the portion before the @: )': 4,
            'This email address looks fake or invalid. Please enter a real email address': 5
        },
        translations: {
            'en': null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find('input[type=text]');
            var label = form.find('label[for=' + email.attr('id') + ']');
            var settings = $.extend({
                'url': form.attr('action'),
                'language': 'en'
            }, options);
            var url = settings.url.replace('/post?', '/post-json?').concat('&c=?');
            form.attr('novalidate', 'true');
            email.attr('name', 'EMAIL');
            form.submit(function() {
                var msg;

                function successCallback(resp) {
                    if (resp.result === 'success') {
                        msg = 'We have sent you a confirmation email';
                        label.removeClass('error').addClass('valid');
                        email.removeClass('error').addClass('valid')
                    } else {
                        email.removeClass('valid').addClass('error');
                        label.removeClass('valid').addClass('error');
                        var index = -1;
                        try {
                            var parts = resp.msg.split(' - ', 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== 'en' && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2000);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: 'jsonp',
                    error: function(resp, text) {
                        console.log('mailchimp ajax submit error: ' + text)
                    }
                });
                var submitMsg = 'Submitting...';
                if (settings.language !== 'en' && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]['submit']) {
                    submitMsg = $.ajaxChimp.translations[settings.language]['submit']
                }
                label.html(submitMsg).show(2000);
                return false
            })
        });
        return this
    }
})(jQuery);

// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
! function(t) {
    function e(t, e) {
        return function(n) {
            return u(t.call(this, n), e)
        }
    }

    function n(t, e) {
        return function(n) {
            return this.lang().ordinal(t.call(this, n), e)
        }
    }

    function s() {}

    function i(t) {
        a(this, t)
    }

    function r(t) {
        var e = t.years || t.year || t.y || 0,
            n = t.months || t.month || t.M || 0,
            s = t.weeks || t.week || t.w || 0,
            i = t.days || t.day || t.d || 0,
            r = t.hours || t.hour || t.h || 0,
            a = t.minutes || t.minute || t.m || 0,
            o = t.seconds || t.second || t.s || 0,
            u = t.milliseconds || t.millisecond || t.ms || 0;
        this._input = t, this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r, this._days = i + 7 * s, this._months = n + 12 * e, this._data = {}, this._bubble()
    }

    function a(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function o(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function u(t, e) {
        for (var n = t + ""; n.length < e;) n = "0" + n;
        return n
    }

    function h(t, e, n, s) {
        var i, r, a = e._milliseconds,
            o = e._days,
            u = e._months;
        a && t._d.setTime(+t._d + a * n), (o || u) && (i = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), u && t.month(t.month() + u * n), a && !s && H.updateOffset(t), (o || u) && (t.minute(i), t.hour(r))
    }

    function d(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function c(t, e) {
        var n, s = Math.min(t.length, e.length),
            i = Math.abs(t.length - e.length),
            r = 0;
        for (n = 0; s > n; n++) ~~t[n] !== ~~e[n] && r++;
        return r + i
    }

    function f(t) {
        return t ? ie[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
    }

    function l(t, e) {
        return e.abbr = t, x[t] || (x[t] = new s), x[t].set(e), x[t]
    }

    function _(t) {
        if (!t) return H.fn._lang;
        if (!x[t] && A) try {
            require("./lang/" + t)
        } catch (e) {
            return H.fn._lang
        }
        return x[t]
    }

    function m(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function y(t) {
        var e, n, s = t.match(E);
        for (e = 0, n = s.length; n > e; e++) s[e] = ue[s[e]] ? ue[s[e]] : m(s[e]);
        return function(i) {
            var r = "";
            for (e = 0; n > e; e++) r += s[e] instanceof Function ? s[e].call(i, t) : s[e];
            return r
        }
    }

    function M(t, e) {
        function n(e) {
            return t.lang().longDateFormat(e) || e
        }
        for (var s = 5; s-- && N.test(e);) e = e.replace(N, n);
        return re[e] || (re[e] = y(e)), re[e](t)
    }

    function g(t, e) {
        switch (t) {
            case "DDDD":
                return V;
            case "YYYY":
                return X;
            case "YYYYY":
                return $;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return I;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return R;
            case "a":
            case "A":
                return _(e._l)._meridiemParse;
            case "X":
                return B;
            case "Z":
            case "ZZ":
                return j;
            case "T":
                return q;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return J;
            default:
                return new RegExp(t.replace("\\", ""))
        }
    }

    function p(t) {
        var e = (j.exec(t) || [])[0],
            n = (e + "").match(ee) || ["-", 0, 0],
            s = +(60 * n[1]) + ~~n[2];
        return "+" === n[0] ? -s : s
    }

    function D(t, e, n) {
        var s, i = n._a;
        switch (t) {
            case "M":
            case "MM":
                i[1] = null == e ? 0 : ~~e - 1;
                break;
            case "MMM":
            case "MMMM":
                s = _(n._l).monthsParse(e), null != s ? i[1] = s : n._isValid = !1;
                break;
            case "D":
            case "DD":
            case "DDD":
            case "DDDD":
                null != e && (i[2] = ~~e);
                break;
            case "YY":
                i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                i[0] = ~~e;
                break;
            case "a":
            case "A":
                n._isPm = _(n._l).isPM(e);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                i[3] = ~~e;
                break;
            case "m":
            case "mm":
                i[4] = ~~e;
                break;
            case "s":
            case "ss":
                i[5] = ~~e;
                break;
            case "S":
            case "SS":
            case "SSS":
                i[6] = ~~(1e3 * ("0." + e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = p(e)
        }
        null == e && (n._isValid = !1)
    }

    function Y(t) {
        var e, n, s = [];
        if (!t._d) {
            for (e = 0; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
        }
    }

    function w(t) {
        var e, n, s = t._f.match(E),
            i = t._i;
        for (t._a = [], e = 0; e < s.length; e++) n = (g(s[e], t).exec(i) || [])[0], n && (i = i.slice(i.indexOf(n) + n.length)), ue[s[e]] && D(s[e], n, t);
        i && (t._il = i), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), Y(t)
    }

    function k(t) {
        var e, n, s, r, o, u = 99;
        for (r = 0; r < t._f.length; r++) e = a({}, t), e._f = t._f[r], w(e), n = new i(e), o = c(e._a, n.toArray()), n._il && (o += n._il.length), u > o && (u = o, s = n);
        a(t, s)
    }

    function v(t) {
        var e, n = t._i,
            s = K.exec(n);
        if (s) {
            for (t._f = "YYYY-MM-DD" + (s[2] || " "), e = 0; 4 > e; e++)
                if (te[e][1].exec(n)) {
                    t._f += te[e][0];
                    break
                }
            j.exec(n) && (t._f += " Z"), w(t)
        } else t._d = new Date(n)
    }

    function T(e) {
        var n = e._i,
            s = G.exec(n);
        n === t ? e._d = new Date : s ? e._d = new Date(+s[1]) : "string" == typeof n ? v(e) : d(n) ? (e._a = n.slice(0), Y(e)) : e._d = n instanceof Date ? new Date(+n) : new Date(n)
    }

    function b(t, e, n, s, i) {
        return i.relativeTime(e || 1, !!n, t, s)
    }

    function S(t, e, n) {
        var s = W(Math.abs(t) / 1e3),
            i = W(s / 60),
            r = W(i / 60),
            a = W(r / 24),
            o = W(a / 365),
            u = 45 > s && ["s", s] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", W(a / 30)] || 1 === o && ["y"] || ["yy", o];
        return u[2] = e, u[3] = t > 0, u[4] = n, b.apply({}, u)
    }

    function F(t, e, n) {
        var s, i = n - e,
            r = n - t.day();
        return r > i && (r -= 7), i - 7 > r && (r += 7), s = H(t).add("d", r), {
            week: Math.ceil(s.dayOfYear() / 7),
            year: s.year()
        }
    }

    function O(t) {
        var e = t._i,
            n = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), H.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? d(n) ? k(t) : w(t) : T(t), new i(t))
    }

    function z(t, e) {
        H.fn[t] = H.fn[t + "s"] = function(t) {
            var n = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + n + e](t), H.updateOffset(this), this) : this._d["get" + n + e]()
        }
    }

    function C(t) {
        H.duration.fn[t] = function() {
            return this._data[t]
        }
    }

    function L(t, e) {
        H.duration.fn["as" + t] = function() {
            return +this / e
        }
    }
    for (var H, P, U = "2.1.0", W = Math.round, x = {}, A = "undefined" != typeof module && module.exports, G = /^\/?Date\((\-?\d+)/i, Z = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, I = /\d{1,3}/, V = /\d{3}/, X = /\d{1,4}/, $ = /[+\-]?\d{1,6}/, R = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, j = /Z|[\+\-]\d\d:?\d\d/i, q = /T/i, B = /[\+\-]?\d+(\.\d{1,3})?/, K = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Q = "YYYY-MM-DDTHH:mm:ssZ", te = [
            ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], ee = /([\+\-]|\d\d)/gi, ne = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), se = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, ie = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            w: "week",
            M: "month",
            y: "year"
        }, re = {}, ae = "DDD w W M D d".split(" "), oe = "M D H h m s w W".split(" "), ue = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(t) {
                return this.lang().monthsShort(this, t)
            },
            MMMM: function(t) {
                return this.lang().months(this, t)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(t) {
                return this.lang().weekdaysMin(this, t)
            },
            ddd: function(t) {
                return this.lang().weekdaysShort(this, t)
            },
            dddd: function(t) {
                return this.lang().weekdays(this, t)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return u(this.year() % 100, 2)
            },
            YYYY: function() {
                return u(this.year(), 4)
            },
            YYYYY: function() {
                return u(this.year(), 5)
            },
            gg: function() {
                return u(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return this.weekYear()
            },
            ggggg: function() {
                return u(this.weekYear(), 5)
            },
            GG: function() {
                return u(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return this.isoWeekYear()
            },
            GGGGG: function() {
                return u(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return ~~(this.milliseconds() / 100)
            },
            SS: function() {
                return u(~~(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return u(this.milliseconds(), 3)
            },
            Z: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2)
            },
            ZZ: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            X: function() {
                return this.unix()
            }
        }; ae.length;) P = ae.pop(), ue[P + "o"] = n(ue[P], P);
    for (; oe.length;) P = oe.pop(), ue[P + P] = e(ue[P], 2);
    for (ue.DDDD = e(ue.DDD, 3), s.prototype = {
            set: function(t) {
                var e, n;
                for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(t) {
                return this._months[t.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(t) {
                return this._monthsShort[t.month()]
            },
            monthsParse: function(t) {
                var e, n, s;
                for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                    if (this._monthsParse[e] || (n = H([2e3, e]), s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(t) {
                return this._weekdays[t.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(t) {
                return this._weekdaysShort[t.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(t) {
                return this._weekdaysMin[t.day()]
            },
            weekdaysParse: function(t) {
                var e, n, s;
                for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                    if (this._weekdaysParse[e] || (n = H([2e3, 1]).day(e), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function(t) {
                var e = this._longDateFormat[t];
                return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t] = e), e
            },
            isPM: function(t) {
                return "p" === (t + "").toLowerCase()[0]
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n
            },
            _relativeTime: {
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
            relativeTime: function(t, e, n, s) {
                var i = this._relativeTime[n];
                return "function" == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t)
            },
            pastFuture: function(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
            },
            ordinal: function(t) {
                return this._ordinal.replace("%d", t)
            },
            _ordinal: "%d",
            preparse: function(t) {
                return t
            },
            postformat: function(t) {
                return t
            },
            week: function(t) {
                return F(t, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            }
        }, H = function(t, e, n) {
            return O({
                _i: t,
                _f: e,
                _l: n,
                _isUTC: !1
            })
        }, H.utc = function(t, e, n) {
            return O({
                _useUTC: !0,
                _isUTC: !0,
                _l: n,
                _i: t,
                _f: e
            })
        }, H.unix = function(t) {
            return H(1e3 * t)
        }, H.duration = function(t, e) {
            var n, s, i = H.isDuration(t),
                a = "number" == typeof t,
                o = i ? t._input : a ? {} : t,
                u = Z.exec(t);
            return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, o = {
                y: 0,
                d: ~~u[2] * n,
                h: ~~u[3] * n,
                m: ~~u[4] * n,
                s: ~~u[5] * n,
                ms: ~~u[6] * n
            }), s = new r(o), i && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
        }, H.version = U, H.defaultFormat = Q, H.updateOffset = function() {}, H.lang = function(t, e) {
            return t ? (e ? l(t, e) : x[t] || _(t), H.duration.fn._lang = H.fn._lang = _(t), void 0) : H.fn._lang._abbr
        }, H.langData = function(t) {
            return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t)
        }, H.isMoment = function(t) {
            return t instanceof i
        }, H.isDuration = function(t) {
            return t instanceof r
        }, H.fn = i.prototype = {
            clone: function() {
                return H(this)
            },
            valueOf: function() {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                return M(H(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
            },
            isValid: function() {
                return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? H.utc(this._a) : H(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
            },
            utc: function() {
                return this.zone(0)
            },
            local: function() {
                return this.zone(0), this._isUTC = !1, this
            },
            format: function(t) {
                var e = M(this, t || H.defaultFormat);
                return this.lang().postformat(e)
            },
            add: function(t, e) {
                var n;
                return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, 1), this
            },
            subtract: function(t, e) {
                var n;
                return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, -1), this
            },
            diff: function(t, e, n) {
                var s, i, r = this._isUTC ? H(t).zone(this._offset || 0) : H(t).local(),
                    a = 6e4 * (this.zone() - r.zone());
                return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), i = 12 * (this.year() - r.year()) + (this.month() - r.month()), i += (this - H(this).startOf("month") - (r - H(r).startOf("month"))) / s, i -= 6e4 * (this.zone() - H(this).startOf("month").zone() - (r.zone() - H(r).startOf("month").zone())) / s, "year" === e && (i /= 12)) : (s = this - r, i = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - a) / 864e5 : "week" === e ? (s - a) / 6048e5 : s), n ? i : o(i)
            },
            from: function(t, e) {
                return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
            },
            fromNow: function(t) {
                return this.from(H(), t)
            },
            calendar: function() {
                var t = this.diff(H().startOf("day"), "days", !0),
                    e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(e, this))
            },
            isLeapYear: function() {
                var t = this.year();
                return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(t) {
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({
                    d: t - e
                }) : e
            },
            month: function(t) {
                var e, n = this._isUTC ? "UTC" : "";
                return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), H.updateOffset(this), this) : this._d["get" + n + "Month"]()
            },
            startOf: function(t) {
                switch (t = f(t)) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), this
            },
            endOf: function(t) {
                return this.startOf(t).add(t, 1).subtract("ms", 1)
            },
            isAfter: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +H(t).startOf(e)
            },
            isBefore: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +H(t).startOf(e)
            },
            isSame: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +H(t).startOf(e)
            },
            min: function(t) {
                return t = H.apply(null, arguments), this > t ? this : t
            },
            max: function(t) {
                return t = H.apply(null, arguments), t > this ? this : t
            },
            zone: function(t) {
                var e = this._offset || 0;
                return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = p(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && h(this, H.duration(e - t, "m"), 1, !0), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            daysInMonth: function() {
                return H.utc([this.year(), this.month() + 1, 0]).date()
            },
            dayOfYear: function(t) {
                var e = W((H(this).startOf("day") - H(this).startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add("d", t - e)
            },
            weekYear: function(t) {
                var e = F(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return null == t ? e : this.add("y", t - e)
            },
            isoWeekYear: function(t) {
                var e = F(this, 1, 4).year;
                return null == t ? e : this.add("y", t - e)
            },
            week: function(t) {
                var e = this.lang().week(this);
                return null == t ? e : this.add("d", 7 * (t - e))
            },
            isoWeek: function(t) {
                var e = F(this, 1, 4).week;
                return null == t ? e : this.add("d", 7 * (t - e))
            },
            weekday: function(t) {
                var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
                return null == t ? e : this.add("d", t - e)
            },
            isoWeekday: function(t) {
                return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
            },
            lang: function(e) {
                return e === t ? this._lang : (this._lang = _(e), this)
            }
        }, P = 0; P < ne.length; P++) z(ne[P].toLowerCase().replace(/s$/, ""), ne[P]);
    z("year", "FullYear"), H.fn.days = H.fn.day, H.fn.months = H.fn.month, H.fn.weeks = H.fn.week, H.fn.isoWeeks = H.fn.isoWeek, H.fn.toJSON = H.fn.toISOString, H.duration.fn = r.prototype = {
        _bubble: function() {
            var t, e, n, s, i = this._milliseconds,
                r = this._days,
                a = this._months,
                u = this._data;
            u.milliseconds = i % 1e3, t = o(i / 1e3), u.seconds = t % 60, e = o(t / 60), u.minutes = e % 60, n = o(e / 60), u.hours = n % 24, r += o(n / 24), u.days = r % 30, a += o(r / 30), u.months = a % 12, s = o(a / 12), u.years = s
        },
        weeks: function() {
            return o(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        },
        humanize: function(t) {
            var e = +this,
                n = S(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
        },
        add: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(t) {
            return t = f(t), this[t.toLowerCase() + "s"]()
        },
        as: function(t) {
            return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
        },
        lang: H.fn.lang
    };
    for (P in se) se.hasOwnProperty(P) && (L(P, se[P]), C(P.toLowerCase()));
    L("Weeks", 6048e5), H.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, H.lang("en", {
        ordinal: function(t) {
            var e = t % 10,
                n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }), A && (module.exports = H), "undefined" == typeof ender && (this.moment = H), "function" == typeof define && define.amd && define("moment", [], function() {
        return H
    })
}.call(this);
// Ion.Calendar
// version 2.0.1, build: 91
// http://ionden.com/a/plugins/ion.calendar/
(function(f) {
    try {
        var t = moment()
    } catch (u) {
        throw alert("Can't find Moment.js, please read the ion.calendar description."), Error("Can't find Moment.js library");
    }
    var m = {
        init: function(e) {
            var c = f.extend({
                    lang: "en",
                    sundayFirst: !0,
                    years: "80",
                    format: "",
                    clickable: !0,
                    startDate: "",
                    hideArrows: !1,
                    onClick: null,
                    onReady: null
                }, e),
                a, b;
            return this.each(function() {
                var n = f(this);
                if (!n.data("isActive")) {
                    n.data("isActive", !0);
                    var e, l, m, v, x, g, d = moment(t.lang(c.lang)),
                        h, k, p, y, w, q, r, u = !0;
                    this.updateData = function(a) {
                        c = f.extend(c,
                            a);
                        s()
                    };
                    var s = function() {
                            e.off();
                            l.off();
                            m.off();
                            v.off();
                            n.empty();
                            A();
                            B()
                        },
                        A = function() {
                            c.startDate && (g = 0 <= c.format.indexOf("L") ? moment(c.startDate, "YYYY.MM.DD").lang(c.lang) : moment(c.startDate, c.format).lang(c.lang));
                            c.years = c.years.toString();
                            w = c.years.split("-");
                            1 === w.length ? (q = moment().subtract("years", w[0]).format("YYYY"), r = moment().format("YYYY")) : 2 === w.length && (q = w[0], r = w[1]);
                            q = parseInt(q);
                            r = parseInt(r);
                            r < d.format("YYYY") && d.year(r).month(11);
                            q > d.format("YYYY") && d.year(q).month(0)
                        },
                        B = function() {
                            h =
                                moment(d);
                            k = parseInt(h.startOf("month").format("d"));
                            p = parseInt(h.endOf("month").format("d"));
                            y = parseInt(h.endOf("month").format("D"));
                            a = '<div class="ic__container">';
                            a += '<div class="ic__header">';
                            a += '<div class="ic__prev"><div></div></div>';
                            a += '<div class="ic__next"><div></div></div>';
                            a += '<div class="ic__month"><select class="ic__month-select">';
                            for (b = 0; 12 > b; b++) a = b === parseInt(d.format("M")) - 1 ? a + ('<option value="' + b + '" selected="selected">' + h.month(b).format("MMMM") + "</option>") : a + ('<option value="' +
                                b + '">' + h.month(b).format("MMMM") + "</option>");
                            a += "</select></div>";
                            a += '<div class="ic__year"><select class="ic__year-select">';
                            for (b = q; b <= r; b++) a = b === parseInt(d.format("YYYY")) ? a + ('<option value="' + b + '" selected="selected">' + b + "</option>") : a + ('<option value="' + b + '">' + b + "</option>");
                            a += "</select></div>";
                            a += "</div>";
                            if (c.sundayFirst) {
                                a += '<table class="ic__week-head"><tr>';
                                for (b = 0; 7 > b; b++) a += "<td>" + h.day(b).format("dd") + "</td>";
                                a += "</tr></table>";
                                a += '<table class="ic__days"><tr>';
                                for (b = 0; b < k; b++) a +=
                                    '<td class="ic__day-empty">&nbsp;</td>';
                                for (b = 1; b <= y; b++) a = moment(d).date(b).format("D.M.YYYY") === t.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") : g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + ('<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) && (a += "</tr><tr>");
                                b = p
                            } else {
                                a += '<table class="ic__week-head"><tr>';
                                for (b = 1; 8 > b; b++) a = 7 > b ? a + ("<td>" + h.day(b).format("dd") + "</td>") : a + ("<td>" +
                                    h.day(0).format("dd") + "</td>");
                                a += "</tr></table>";
                                a += '<table class="ic__days"><tr>';
                                k = 0 < k ? k - 1 : 6;
                                for (b = 0; b < k; b++) a += '<td class="ic__day-empty">&nbsp;</td>';
                                for (b = 1; b <= y; b++) a = moment(d).date(b).format("D.M.YYYY") === t.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") : g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + ('<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) && (a += "</tr><tr>");
                                1 > p && (p = 7);
                                b = p - 1
                            }
                            for (; 6 > b; b++) a += '<td class="ic__day-empty">&nbsp;</td>';
                            a += "</tr></table>";
                            a += "</div>";
                            C()
                        },
                        C = function() {
                            n.html(a);
                            e = n.find(".ic__prev");
                            l = n.find(".ic__next");
                            m = n.find(".ic__month-select");
                            v = n.find(".ic__year-select");
                            x = n.find(".ic__day");
                            c.hideArrows ? (e[0].style.display = "none", l[0].style.display = "none") : (e.on("click", function(a) {
                                a.preventDefault();
                                d.subtract("months", 1);
                                parseInt(d.format("YYYY")) < q && d.add("months", 1);
                                s()
                            }), l.on("click", function(a) {
                                a.preventDefault();
                                d.add("months",
                                    1);
                                parseInt(d.format("YYYY")) > r && d.subtract("months", 1);
                                s()
                            }));
                            m.on("change", function(a) {
                                a.preventDefault();
                                a = f(this).prop("value");
                                d.month(parseInt(a));
                                s()
                            });
                            v.on("change", function(a) {
                                a.preventDefault();
                                a = f(this).prop("value");
                                d.year(parseInt(a));
                                s()
                            });
                            if (c.clickable) x.on("click", function(a) {
                                a.preventDefault();
                                a = f(this).text();
                                d.date(parseInt(a));
                                g = moment(d);
                                0 <= c.format.indexOf("L") ? c.startDate = g.format("YYYY-MM-DD") : c.startDate = g.format(c.format);
                                "function" === typeof c.onClick && (c.format ? "moment" ===
                                    c.format ? c.onClick.call(this, g) : c.onClick.call(this, g.format(c.format)) : c.onClick.call(this, g.format()));
                                s()
                            });
                            "function" === typeof c.onReady && (c.format ? "moment" === c.format ? c.onReady.call(this, d) : c.onReady.call(this, d.format(c.format)) : c.onReady.call(this, d.format()));
                            c.startDate && u && (u = !1, d.year(parseInt(g.format("YYYY"))), d.month(parseInt(g.format("M") - 1)), s())
                        };
                    A();
                    B()
                }
            })
        },
        update: function(e) {
            return this.each(function() {
                this.updateData(e)
            })
        }
    };
    f.fn.ionCalendar = function(e) {
        if (m[e]) return m[e].apply(this,
            Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof e && e) f.error("Method " + e + " does not exist for jQuery.ionCalendar");
        else return m.init.apply(this, arguments)
    }
})(jQuery);
(function(f) {
    var t = 0,
        u, m = f(document.body),
        e = function() {
            f(".ic__datepicker").css("left", "-9999px").css("top", "-9999px")
        },
        c = {
            init: function(a) {
                var b = f.extend({
                    lang: "en",
                    sundayFirst: !0,
                    years: "80",
                    clickable: !0,
                    format: ""
                }, a);
                return this.each(function() {
                    var a = f(this),
                        c, l = {},
                        z = this,
                        v, x, g, d, h, k;
                    if (!a.data("isActive")) {
                        a.data("isActive", !0);
                        t++;
                        this.pluginCount = t;
                        l.lang = a.data("lang") || b.lang;
                        !1 === a.data("sundayfirst") && (l.sundayFirst = a.data("sundayfirst"));
                        l.years = a.data("years") || b.years;
                        l.format = a.data("format") ||
                            b.format;
                        f.extend(b, l);
                        m.on("mousedown", function() {
                            e()
                        });
                        b.onClick = function(b) {
                            a.prop("value", b);
                            d = b;
                            e()
                        };
                        var p = function() {
                            v = parseInt(a.offset().left);
                            x = parseInt(a.offset().top);
                            g = parseInt(a.outerWidth(!0));
                            c.css("left", v + g + 10 + "px").css("top", x - 10 + "px");
                            (h = a.prop("value")) && (h !== d && 0 > b.format.indexOf("L")) && (k = moment(h, b.format), k.isValid() && c.ionCalendar("update", {
                                startDate: h
                            }))
                        };
                        (function() {
                            u = '<div class="ic__datepicker" id="ic__datepicker-' + z.pluginCount + '"></div>';
                            m.append(u);
                            c = f("#ic__datepicker-" +
                                z.pluginCount);
                            c.ionCalendar(b);
                            c.on("mousedown", function(a) {
                                a.stopPropagation()
                            });
                            a.on("mousedown", function(a) {
                                a.stopPropagation()
                            });
                            a.on("focusin", function() {
                                e();
                                p()
                            });
                            a.on("keyup", function() {
                                p()
                            })
                        })()
                    }
                })
            },
            close: function() {
                e()
            }
        };
    f.fn.ionDatePicker = function(a) {
        if (c[a]) return c[a].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof a && a) f.error("Method " + a + " does not exist for jQuery.ionDatePicker");
        else return c.init.apply(this, arguments)
    }
})(jQuery);
/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */
if (typeof Object.create !== "function") {
    Object.create = function(e) {
        function t() {}
        t.prototype = e;
        return new t
    }
}(function(e, t, n, r) {
    "use strict";
    var i = {
        init: function(n, r) {
            this.options = e.extend({}, e.fn.singlePageNav.defaults, n);
            this.container = r;
            this.$container = e(r);
            this.$links = this.$container.find("a");
            if (this.options.filter !== "") {
                this.$links = this.$links.filter(this.options.filter)
            }
            this.$window = e(t);
            this.$htmlbody = e("html, body");
            this.$links.on("click.singlePageNav", e.proxy(this.handleClick, this));
            this.didScroll = false;
            this.checkPosition();
            this.setTimer()
        },
        handleClick: function(t) {
            var n = this,
                r = t.currentTarget,
                i = e(r.hash);
            t.preventDefault();
            if (i.length) {
                n.clearTimer();
                if (typeof n.options.beforeStart === "function") {
                    n.options.beforeStart()
                }
                n.setActiveLink(r.hash);
                n.scrollTo(i, function() {
                    if (n.options.updateHash && history.pushState) {
                        history.pushState(null, null, r.hash)
                    }
                    n.setTimer();
                    if (typeof n.options.onComplete === "function") {
                        n.options.onComplete()
                    }
                })
            }
        },
        scrollTo: function(e, t) {
            var n = this;
            var r = n.getCoords(e).top;
            var i = false;
            n.$htmlbody.stop().animate({
                scrollTop: r
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                complete: function() {
                    if (typeof t === "function" && !i) {
                        t()
                    }
                    i = true
                }
            })
        },
        setTimer: function() {
            var e = this;
            e.$window.on("scroll.singlePageNav", function() {
                e.didScroll = true
            });
            e.timer = setInterval(function() {
                if (e.didScroll) {
                    e.didScroll = false;
                    e.checkPosition()
                }
            }, 250)
        },
        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off("scroll.singlePageNav");
            this.didScroll = false
        },
        checkPosition: function() {
            var e = this.$window.scrollTop();
            var t = this.getCurrentSection(e);
            this.setActiveLink(t)
        },
        getCoords: function(e) {
            return {
                top: Math.round(e.offset().top) - this.options.offset
            }
        },
        setActiveLink: function(e) {
            var t = this.$container.find("a[href$='" + e + "']");
            if (!t.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                t.addClass(this.options.currentClass)
            }
        },
        getCurrentSection: function(t) {
            var n, r, i, s;
            for (n = 0; n < this.$links.length; n++) {
                r = this.$links[n].hash;
                if (e(r).length) {
                    i = this.getCoords(e(r));
                    if (t >= i.top - this.options.threshold) {
                        s = r
                    }
                }
            }
            return s || this.$links[0].hash
        }
    };
    e.fn.singlePageNav = function(e) {
        return this.each(function() {
            var t = Object.create(i);
            t.init(e, this)
        })
    };
    e.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: "actscroll",
        easing: "swing",
        updateHash: false,
        filter: "",
        onComplete: false,
        beforeStart: false
    }
})(jQuery, window, document);
var Froogaloop = function() {
    function e(a) {
        return new e.fn.init(a)
    }

    function g(a, c, b) {
        if (!b.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: c
        });
        b.contentWindow.postMessage(a, h)
    }

    function l(a) {
        var c, b;
        try {
            c = JSON.parse(a.data), b = c.event || c.method
        } catch (e) {}
        "ready" != b || k || (k = !0);
        if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === h && (h = a.origin);
        a = c.value;
        var m = c.data,
            f = "" === f ? null : c.player_id;
        c = f ? d[f][b] : d[b];
        b = [];
        if (!c) return !1;
        void 0 !== a && b.push(a);
        m && b.push(m);
        f && b.push(f);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }

    function n(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        k = !1,
        h = "*";
    e.fn = e.prototype = {
        element: null,
        init: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null,
                e = c && c.constructor && c.call && c.apply ? null : c,
                f = c && c.constructor && c.call && c.apply ? c : null;
            f && n(a, f, d);
            g(a, e, b);
            return this
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            n(a, c, d);
            "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
            return this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this.element,
                b = "" !== c.id ? c.id : null;
            a: {
                if (b && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b = !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }
            "ready" != a && b && g("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
    return window.Froogaloop =
        window.$f = e
}();
//
// SmoothScroll for websites v1.4.10 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function() {
    var ac = {
        frameRate: 350,
        animationTime: 700,
        stepSize: 45,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ""
    };
    var I = ac;
    var G = false;
    var C = false;
    var m = {
        x: 0,
        y: 0
    };
    var b = false;
    var K = document.documentElement;
    var h;
    var R;
    var t;
    var ai = [];
    var i;
    var ad = /^Mac/.test(navigator.platform);
    var B = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var T = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function am() {
        if (I.keyboardSupport) {
            k("keydown", H)
        }
    }

    function af() {
        if (b || !document.body) {
            return
        }
        b = true;
        var e = document.body;
        var ar = document.documentElement;
        var au = window.innerHeight;
        var at = e.scrollHeight;
        K = (document.compatMode.indexOf("CSS") >= 0) ? ar : e;
        h = e;
        am();
        if (top != self) {
            C = true
        } else {
            if (X && at > au && (e.offsetHeight <= au || ar.offsetHeight <= au)) {
                var ap = document.createElement("div");
                ap.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + K.scrollHeight + "px";
                document.body.appendChild(ap);
                var an;
                t = function() {
                    if (an) {
                        return
                    }
                    an = setTimeout(function() {
                        if (G) {
                            return
                        }
                        ap.style.height = "0";
                        ap.style.height = K.scrollHeight + "px";
                        an = null
                    }, 500)
                };
                setTimeout(t, 10);
                k("resize", t);
                var aq = {
                    attributes: true,
                    childList: true,
                    characterData: false
                };
                R = new L(t);
                R.observe(e, aq);
                if (K.offsetHeight <= au) {
                    var ao = document.createElement("div");
                    ao.style.clear = "both";
                    e.appendChild(ao)
                }
            }
        }
        if (!I.fixedBackground && !G) {
            e.style.backgroundAttachment = "scroll";
            ar.style.backgroundAttachment = "scroll"
        }
    }

    function d() {
        R && R.disconnect();
        a(S, u);
        a("mousedown", w);
        a("keydown", H);
        a("resize", t);
        a("load", af)
    }
    var V = [];
    var l = false;
    var v = Date.now();

    function ag(ap, ao, at) {
        M(ao, at);
        if (I.accelerationMax != 1) {
            var e = Date.now();
            var av = e - v;
            if (av < I.accelerationDelta) {
                var ar = (1 + (50 / av)) / 2;
                if (ar > 1) {
                    ar = Math.min(ar, I.accelerationMax);
                    ao *= ar;
                    at *= ar
                }
            }
            v = Date.now()
        }
        V.push({
            x: ao,
            y: at,
            lastX: (ao < 0) ? 0.99 : -0.99,
            lastY: (at < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (l) {
            return
        }
        var au = D();
        var aq = (ap === au || ap === document.body);
        if (ap.$scrollBehavior == null && O(ap)) {
            ap.$scrollBehavior = ap.style.scrollBehavior;
            ap.style.scrollBehavior = "auto"
        }
        var an = function(ax) {
            var aw = Date.now();
            var aE = 0;
            var aD = 0;
            for (var az = 0; az < V.length; az++) {
                var aG = V[az];
                var aF = aw - aG.start;
                var ay = (aF >= I.animationTime);
                var aA = (ay) ? 1 : aF / I.animationTime;
                if (I.pulseAlgorithm) {
                    aA = p(aA)
                }
                var aC = (aG.x * aA - aG.lastX) >> 0;
                var aB = (aG.y * aA - aG.lastY) >> 0;
                aE += aC;
                aD += aB;
                aG.lastX += aC;
                aG.lastY += aB;
                if (ay) {
                    V.splice(az, 1);
                    az--
                }
            }
            if (aq) {
                window.scrollBy(aE, aD)
            } else {
                if (aE) {
                    ap.scrollLeft += aE
                }
                if (aD) {
                    ap.scrollTop += aD
                }
            }
            if (!ao && !at) {
                V = []
            }
            if (V.length) {
                U(an, ap, (1000 / I.frameRate + 1))
            } else {
                l = false;
                if (ap.$scrollBehavior != null) {
                    ap.style.scrollBehavior = ap.$scrollBehavior;
                    ap.$scrollBehavior = null
                }
            }
        };
        U(an, ap, 0);
        l = true
    }

    function u(ap) {
        if (!b) {
            af()
        }
        var aq = ap.target;
        if (ap.defaultPrevented || ap.ctrlKey) {
            return true
        }
        if (s(h, "embed") || (s(aq, "embed") && /\.pdf/i.test(aq.src)) || s(h, "object") || aq.shadowRoot) {
            return true
        }
        var an = -ap.wheelDeltaX || ap.deltaX || 0;
        var e = -ap.wheelDeltaY || ap.deltaY || 0;
        if (ad) {
            if (ap.wheelDeltaX && A(ap.wheelDeltaX, 120)) {
                an = -120 * (ap.wheelDeltaX / Math.abs(ap.wheelDeltaX))
            }
            if (ap.wheelDeltaY && A(ap.wheelDeltaY, 120)) {
                e = -120 * (ap.wheelDeltaY / Math.abs(ap.wheelDeltaY))
            }
        }
        if (!an && !e) {
            e = -ap.wheelDelta || 0
        }
        if (ap.deltaMode === 1) {
            an *= 40;
            e *= 40
        }
        var ao = Y(aq);
        if (!ao) {
            if (C && ah) {
                Object.defineProperty(ap, "target", {
                    value: window.frameElement
                });
                return parent.wheel(ap)
            }
            return true
        }
        if (ak(e)) {
            return true
        }
        if (Math.abs(an) > 1.2) {
            an *= I.stepSize / 120
        }
        if (Math.abs(e) > 1.2) {
            e *= I.stepSize / 120
        }
        ag(ao, an, e);
        ap.preventDefault();
        r()
    }

    function H(e) {
        var au = e.target;
        var aq = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== B.spacebar);
        if (!document.body.contains(h)) {
            h = document.activeElement
        }
        var an = /^(textarea|select|embed|object)$/i;
        var ao = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || an.test(au.nodeName) || s(au, "input") && !ao.test(au.type) || s(h, "video") || z(e) || au.isContentEditable || aq) {
            return true
        }
        if ((s(au, "button") || s(au, "input") && ao.test(au.type)) && e.keyCode === B.spacebar) {
            return true
        }
        if (s(au, "input") && au.type == "radio" && T[e.keyCode]) {
            return true
        }
        var ap, ay = 0,
            aw = 0;
        var at = Y(h);
        if (!at) {
            return (C && ah) ? parent.keydown(e) : true
        }
        var ar = at.clientHeight;
        if (at == document.body) {
            ar = window.innerHeight
        }
        switch (e.keyCode) {
            case B.up:
                aw = -I.arrowScroll;
                break;
            case B.down:
                aw = I.arrowScroll;
                break;
            case B.spacebar:
                ap = e.shiftKey ? 1 : -1;
                aw = -ap * ar * 0.9;
                break;
            case B.pageup:
                aw = -ar * 0.9;
                break;
            case B.pagedown:
                aw = ar * 0.9;
                break;
            case B.home:
                if (at == document.body && document.scrollingElement) {
                    at = document.scrollingElement
                }
                aw = -at.scrollTop;
                break;
            case B.end:
                var ax = at.scrollHeight - at.scrollTop;
                var av = ax - ar;
                aw = (av > 0) ? av + 10 : 0;
                break;
            case B.left:
                ay = -I.arrowScroll;
                break;
            case B.right:
                ay = I.arrowScroll;
                break;
            default:
                return true
        }
        ag(at, ay, aw);
        e.preventDefault();
        r()
    }

    function w(e) {
        h = e.target
    }
    var J = (function() {
        var e = 0;
        return function(an) {
            return an.uniqueID || (an.uniqueID = e++)
        }
    })();
    var o = {};
    var n = {};
    var ae;
    var al = {};

    function r() {
        clearTimeout(ae);
        ae = setInterval(function() {
            o = n = al = {}
        }, 1 * 1000)
    }

    function g(ap, ao, e) {
        var an = e ? o : n;
        for (var aq = ap.length; aq--;) {
            an[J(ap[aq])] = ao
        }
        return ao
    }

    function j(an, e) {
        return (e ? o : n)[J(an)]
    }

    function Y(ar) {
        var ao = [];
        var e = document.body;
        var an = K.scrollHeight;
        do {
            var aq = j(ar, false);
            if (aq) {
                return g(ao, aq)
            }
            ao.push(ar);
            if (an === ar.scrollHeight) {
                var at = W(K) && W(e);
                var ap = at || N(K);
                if (C && Z(K) || !C && ap) {
                    return g(ao, D())
                }
            } else {
                if (Z(ar) && N(ar)) {
                    return g(ao, ar)
                }
            }
        } while ((ar = ar.parentElement))
    }

    function Z(e) {
        return (e.clientHeight + 10 < e.scrollHeight)
    }

    function W(e) {
        var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return (an !== "hidden")
    }

    function N(e) {
        var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return (an === "scroll" || an === "auto")
    }

    function O(e) {
        var ao = J(e);
        if (al[ao] == null) {
            var an = getComputedStyle(e, "")["scroll-behavior"];
            al[ao] = ("smooth" == an)
        }
        return al[ao]
    }

    function k(ao, an, e) {
        window.addEventListener(ao, an, e || false)
    }

    function a(ao, an, e) {
        window.removeEventListener(ao, an, e || false)
    }

    function s(an, e) {
        return an && (an.nodeName || "").toLowerCase() === e.toLowerCase()
    }

    function M(e, an) {
        e = (e > 0) ? 1 : -1;
        an = (an > 0) ? 1 : -1;
        if (m.x !== e || m.y !== an) {
            m.x = e;
            m.y = an;
            V = [];
            v = 0
        }
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) {
        try {
            ai = localStorage.SS_deltaBuffer.split(",")
        } catch (aj) {}
    }

    function ak(e) {
        if (!e) {
            return
        }
        if (!ai.length) {
            ai = [e, e, e]
        }
        e = Math.abs(e);
        ai.push(e);
        ai.shift();
        clearTimeout(i);
        i = setTimeout(function() {
            try {
                localStorage.SS_deltaBuffer = ai.join(",")
            } catch (ap) {}
        }, 1000);
        var an = e > 120 && F(e);
        var ao = !F(120) && !F(100) && !an;
        if (e < 50) {
            return true
        }
        return ao
    }

    function A(an, e) {
        return (Math.floor(an / e) == an / e)
    }

    function F(e) {
        return (A(ai[0], e) && A(ai[1], e) && A(ai[2], e))
    }

    function z(ao) {
        var an = ao.target;
        var e = false;
        if (document.URL.indexOf("www.youtube.com/watch") != -1) {
            do {
                e = (an.classList && an.classList.contains("html5-video-controls"));
                if (e) {
                    break
                }
            } while ((an = an.parentNode))
        }
        return e
    }
    var U = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(ao, an, e) {
            window.setTimeout(ao, e || (1000 / 60))
        })
    })();
    var L = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var D = (function() {
        var e = document.scrollingElement;
        return function() {
            if (!e) {
                var ap = document.createElement("div");
                ap.style.cssText = "height:10000px;width:1px;";
                document.body.appendChild(ap);
                var ao = document.body.scrollTop;
                var an = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != ao) {
                    (e = document.body)
                } else {
                    (e = document.documentElement)
                }
                window.scrollBy(0, -3);
                document.body.removeChild(ap)
            }
            return e
        }
    })();

    function ab(e) {
        var ao, ap, an;
        e = e * I.pulseScale;
        if (e < 1) {
            ao = e - (1 - Math.exp(-e))
        } else {
            ap = Math.exp(-1);
            e -= 1;
            an = 1 - Math.exp(-e);
            ao = ap + (an * (1 - ap))
        }
        return ao * I.pulseNormalize
    }

    function p(e) {
        if (e >= 1) {
            return 1
        }
        if (e <= 0) {
            return 0
        }
        if (I.pulseNormalize == 1) {
            I.pulseNormalize /= ab(1)
        }
        return ab(e)
    }
    var Q = window.navigator.userAgent;
    var aa = /Edge/.test(Q);
    var ah = /chrome/i.test(Q) && !aa;
    var f = /safari/i.test(Q) && !aa;
    var c = /firefox/i.test(Q);
    var P = /mobile/i.test(Q);
    var y = /Windows NT 6.1/i.test(Q) && /rv:11/i.test(Q);
    var X = f && (/Version\/8/i.test(Q) || /Version\/9/i.test(Q));
    var x = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                x = true
            }
        }))
    } catch (aj) {}
    var E = x ? {
        passive: false
    } : false;
    var S = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    if (S) {
        k(S, u, E);
        k("mousedown", w);
        k("load", af)
    }

    function q(an) {
        for (var e in an) {
            if (ac.hasOwnProperty(e)) {
                I[e] = an[e]
            }
        }
    }
    q.destroy = d;
    if (window.SmoothScrollOptions) {
        q(window.SmoothScrollOptions)
    }
    if (typeof define === "function" && define.amd) {
        define(function() {
            return q
        })
    } else {
        if ("object" == typeof exports) {
            module.exports = q
        } else {
            window.SmoothScroll = q
        }
    }
})();

// niceSelect 
! function(e) {
    e.fn.niceSelect = function(t) {
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                l = e(this).next(".nice-select"),
                c = l.hasClass("open");
            l.length && (l.remove(), s(t), c && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;

        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").addClass(t.attr("multiple") ? "has-multiple" : "").attr("tabindex", t.attr("disabled") ? null : "0").html(t.attr("multiple") ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>' : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'));
            var s = t.next(),
                l = t.find("option");
            if (t.attr("multiple")) {
                var c = "";
                (a = t.find("option:selected")).each(function() {
                    $selected_option = e(this), $selected_text = $selected_option.data("display") || $selected_option.text(), c += '<span class="current">' + $selected_text + "</span>"
                }), $select_placeholder = t.data("placeholder") || t.attr("placeholder"), $select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder, c = "" == c ? $select_placeholder : c, s.find(".multiple-options").html(c)
            } else {
                var a = t.find("option:selected");
                s.find(".current").html(a.data("display") || a.text())
            }
            l.each(function(t) {
                var l = e(this),
                    c = l.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", l.val()).attr("data-display", c || null).addClass("option" + (l.is(":selected") ? " selected" : "") + (l.is(":disabled") ? " disabled" : "")).html(l.text()))
            })
        }
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".nice-select-search").val(""), s.find(".nice-select-search").focus(), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus"), s.find("ul li").show()) : s.focus()
        }), e(document).on("click", ".nice-select-search-box", function(e) {
            return e.stopPropagation(), !1
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                l = s.closest(".nice-select");
            if (l.hasClass("has-multiple")) s.hasClass("selected") ? s.removeClass("selected") : s.addClass("selected"), $selected_html = "", $selected_values = [], l.find(".selected").each(function() {
                $selected_option = e(this);
                var t = $selected_option.data("display") || $selected_option.text();
                $selected_html += '<span class="current">' + t + "</span>", $selected_values.push($selected_option.data("value"))
            }), $select_placeholder = l.prev("select").data("placeholder") || l.prev("select").attr("placeholder"), $select_placeholder = "" == $select_placeholder ? "Select" : $select_placeholder, $selected_html = "" == $selected_html ? $select_placeholder : $selected_html, l.find(".multiple-options").html($selected_html), l.prev("select").val($selected_values).trigger("change");
            else {
                l.find(".selected").removeClass("selected"), s.addClass("selected");
                var c = s.data("display") || s.text();
                l.find(".current").text(c), l.prev("select").val(s.data("value")).trigger("change")
            }
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                l = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? l.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var c = l.nextAll(".option:not(.disabled)").first();
                    c.length > 0 && (s.find(".focus").removeClass("focus"), c.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var a = l.prevAll(".option:not(.disabled)").first();
                    a.length > 0 && (s.find(".focus").removeClass("focus"), a.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        }), e(document).on("keydown.nice-select-search", ".nice-select", function() {
            var t = e(this),
                s = t.find(".nice-select-search").val(),
                l = t.find("ul li");
            if ("" == s) l.show();
            else if (t.hasClass("open")) {
                s = s.toLowerCase();
                var c = new RegExp(s);
                0 < l.length ? l.each(function() {
                    var t = e(this),
                        s = t.text().toLowerCase();
                    c.test(s) ? t.show() : t.hide()
                }) : l.show()
            }
        });
        var l = document.createElement("a").style;
        return l.cssText = "pointer-events:auto", "auto" !== l.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);