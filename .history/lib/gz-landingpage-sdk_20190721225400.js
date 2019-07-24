var tnt = function (n) {
    "use strict";

    function t(c, u, i, l) {
        return new(i = i || Promise)(function (n, t) {
            function e(n) {
                try {
                    r(l.next(n))
                } catch (n) {
                    t(n)
                }
            }

            function o(n) {
                try {
                    r(l.throw(n))
                } catch (n) {
                    t(n)
                }
            }

            function r(t) {
                t.done ? n(t.value) : new i(function (n) {
                    n(t.value)
                }).then(e, o)
            }
            r((l = l.apply(c, u || [])).next())
        })
    }

    function e(e, o) {
        var r, c, u, n, i = {
            label: 0,
            sent: function () {
                if (1 & u[0]) throw u[1];
                return u[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
            return this
        }), n;

        function t(t) {
            return function (n) {
                return function (t) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, c && (u = 2 & t[0] ? c.return : t[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, t[1])).done) return u;
                        switch (c = 0, u && (t = [2 & t[0], u.value]), t[0]) {
                            case 0:
                            case 1:
                                u = t;
                                break;
                            case 4:
                                return i.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, c = t[1], t = [0];
                                continue;
                            case 7:
                                t = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(u = 0 < (u = i.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                                    i.label = t[1];
                                    break
                                }
                                if (6 === t[0] && i.label < u[1]) {
                                    i.label = u[1], u = t;
                                    break
                                }
                                if (u && i.label < u[2]) {
                                    i.label = u[2], i.ops.push(t);
                                    break
                                }
                                u[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        t = o.call(e, i)
                    } catch (n) {
                        t = [6, n], c = 0
                    } finally {
                        r = u = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, n])
            }
        }
    }
    var o = (r.prototype.loadScript = function () {
        var e = this,
            o = document.createElement("script");
        return new Promise(function (n, t) {
            o.src = e.publicSrc, document.head.appendChild(o), o.onload = function () {
                n()
            }, o.onerror = function () {
                t()
            }
        })
    }, r.prototype.loadMoudle = function () {
        return t(this, void 0, void 0, function () {
            return e(this, function (n) {
                switch (n.label) {
                    case 0:
                        return [4, this.loadScript()];
                    case 1:
                        return n.sent(), console.log("hasLoad"), [2]
                }
            })
        })
    }, r.prototype.run = function () {
        return t(this, void 0, void 0, function () {
            return e(this, function (n) {
                switch (n.label) {
                    case 0:
                        return [4, this.loadMoudle()];
                    case 1:
                        return n.sent(), console.log("loadMoudle"), [2]
                }
            })
        })
    }, r);

    function r(n) {
        this.publicSrc = n
    }
    alert("123"), console.log(14), console.log("funny");
    var c = new o("tt");
    return console.log(c), n.fook = function () {
        console.log("ll")
    }, n
}({});