! function (n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.GzLpCTEST = e()
}(this, function () {
    "use strict";
    return function (n) {
            if (n && "undefined" != typeof window) {
                var e = document.createElement("style");
                e.setAttribute("media", "screen"), e.innerHTML = n, document.head.appendChild(e)
            }
        }("body {\n  color: red;\n}\n"),
        function (n, e) {
            $(n).children().length || $(n).html(function (n, e, t, i) {
                i = i || function (n, e, t, i, o) {
                    var r = e.split("\n"),
                        d = Math.max(i - 3, 0),
                        l = Math.min(r.length, i + 3),
                        u = o(t),
                        c = r.slice(d, l).map(function (n, e) {
                            var t = e + d + 1;
                            return (t == i ? " >> " : "    ") + t + "| " + n
                        }).join("\n");
                    throw n.path = u, n.message = (u || "ejs") + ":" + i + "\n" + c + "\n\n" + n.message, n
                }, e = e || function (n) {
                    return null == n ? "" : String(n).replace(r, d)
                };
                var o = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&#34;",
                        "'": "&#39;"
                    },
                    r = /[&<>'"]/g;

                function d(n) {
                    return o[n] || n
                }
                var l = 1;
                try {
                    var u = [],
                        c = u.push.bind(u);
                    return c("<div>\n    "), l = 2, c(e(n.hello)), c("\n  </div>"), l = 3, u.join("")
                } catch (n) {
                    i(n, "<div>\n    <%= locals.hello %>\n  </div>", void 0, l, e)
                }
            }(Object.assign({}, {
                hello: "test world"
            }, e)))
        }
});