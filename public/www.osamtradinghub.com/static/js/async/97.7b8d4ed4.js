"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["97"], {
        56803: function() {},
        58766: function(e, t, s) {
            s.r(t), s.d(t, {
                default: () => iL
            });
            var n, a, l = s("85893"),
                i = s("67294"),
                r = s("96877"),
                o = s("6753"),
                d = s("92198"),
                c = s("22273"),
                _ = s("12838");
            let u = e => {
                let {
                    is_client_store_initialized: t,
                    landing_company_shortcode: s = " ",
                    currency: n = " ",
                    email: a = " ",
                    is_logged_in: l = " ",
                    loginid: r = " ",
                    residence: o = " ",
                    last_name: u = " ",
                    first_name: x = " "
                } = e, h = new URLSearchParams(window.location.search), m = "reset_password" === _.fr.getQueryParameter("action"), p = h.get("code") && m, {
                    data: j
                } = (0, c.Z)(!0), {
                    cs_chat_livechat: v
                } = j;
                (0, i.useEffect)(() => {
                    if (t && v) {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.init()
                    }
                }, [t, v]), (0, i.useEffect)(() => {
                    if (!p && t) {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.on("ready", e => {
                            var t, i, c, _, h, m;
                            "minimized" === e.state.visibility && (null === (i = window.LiveChatWidget) || void 0 === i || i.call("hide"));
                            let {
                                utm_source: p,
                                utm_medium: j,
                                utm_campaign: v
                            } = JSON.parse(d.Z.get("utm_data") || "{}"), b = {
                                is_logged_in: String(l),
                                utm_source: p || " ",
                                utm_medium: j || " ",
                                utm_campaign: v || " ",
                                loginid: l ? r : " ",
                                landing_company_shortcode: l ? s : " ",
                                currency: l ? n : " ",
                                residence: l ? o : " ",
                                email: l ? a : " "
                            };
                            null === (t = window.LiveChatWidget) || void 0 === t || t.call("set_session_variables", b), l ? (null === (c = window.LiveChatWidget) || void 0 === c || c.call("set_customer_email", a), null === (_ = window.LiveChatWidget) || void 0 === _ || _.call("set_customer_name", `${x} ${u}`)) : (null === (h = window.LiveChatWidget) || void 0 === h || h.call("set_customer_email", " "), null === (m = window.LiveChatWidget) || void 0 === m || m.call("set_customer_name", " "))
                        })
                    }
                }, [a, p, r, l, s, t, n, x, u, o])
            };
            var x = s("33181"),
                h = s("79907"),
                m = s("79649"),
                p = s("83274");
            let j = () => {
                let {
                    client: e
                } = (0, p.oR)(), {
                    account_settings: t,
                    landing_company_shortcode: s
                } = e, {
                    tnc_status: n
                } = t || {};
                return n && 0 === n[s]
            };
            var v = s("12977"),
                b = s("35275"),
                g = s("72461"),
                y = s("48059"),
                f = s("2502"),
                N = s("31784");
            let C = (0, r.Pi)(() => {
                let {
                    isAuthorized: e
                } = (0, m.T)(), {
                    client: t
                } = (0, p.oR)(), {
                    is_cr_account: s
                } = t, [n, a] = i.useState(!1), {
                    isDesktop: r
                } = (0, f.F)(), o = j();
                i.useEffect(() => {
                    o && a(!0)
                }, [o]);
                let d = async () => {
                    e && (await h.D.api.send({
                        tnc_approval: 1
                    }), a(!1))
                };
                return (0, l.jsx)(N.Z, {
                    className: "tnc-status-update-modal-wrapper",
                    is_open: n,
                    has_close_icon: !1,
                    width: "44rem",
                    children: (0, l.jsxs)("div", {
                        className: "tnc-status-update-modal",
                        children: [(0, l.jsx)(v.x, {
                            size: r ? "sm" : "md",
                            bold: !0,
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Updated T&C's"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "tnc-status-update-modal__text-container",
                            children: [(0, l.jsx)(v.x, {
                                size: r ? "sm" : "md",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Please review our updated <0>terms and conditions</0>.",
                                    components: [(0, l.jsx)(b.r, {
                                        className: "tnc-link",
                                        size: r ? "sm" : "md",
                                        href: s ? "https://deriv.com/eu/terms-and-conditions#clients" : "https://deriv.com/terms-and-conditions#clients"
                                    }, 0)]
                                })
                            }), (0, l.jsx)(v.x, {
                                size: r ? "sm" : "md",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "By continuing you understand and accept the changes."
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "tnc-status-update-modal__button",
                            children: (0, l.jsx)(g.zx, {
                                onClick: d,
                                size: "md",
                                variant: "primary",
                                label: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Continue"
                                })
                            })
                        })]
                    })
                })
            });
            var w = s("33281"),
                k = s("20296"),
                T = s.n(k),
                E = s("76298");
            var S = ((n = {}).MOVE = "move", n.TOP = "top", n.RIGHT = "right", n.BOTTOM = "bottom", n.LEFT = "left", n.TOP_RIGHT = "top-right", n.BOTTOM_RIGHT = "bottom-right", n.BOTTOM_LEFT = "bottom-left", n.TOP_LEFT = "top-left", n.BODY_REF = "body", n);
            let I = e => {
                    let {
                        setZIndex: t
                    } = e, s = document.getElementsByClassName("draggable");
                    if (!s.length) return;
                    let n = Array.from(s).reduce((e, t) => Math.max(e, parseInt(window.getComputedStyle(t).zIndex) || 0), 0);
                    t(n + 3)
                },
                A = e => {
                    let {
                        prevWidth: t,
                        leftOffset: s,
                        boundaryRect: n,
                        initialSelfRight: a,
                        resize_direction: l,
                        newWidth: i,
                        minWidth: r,
                        clientX: o,
                        self: d
                    } = e, c = (null == n ? void 0 : n.left) ? ? 0, _ = (null == n ? void 0 : n.width) ? ? 0, u = c + s + 5, x = (null == d ? void 0 : d.left) ? ? 0, h = c + _ - 7;
                    if (l.includes("left")) return i >= r && o > u ? i : o < u + 10 ? h - u - (h - a) - 10 : t;
                    if (l.includes("right")) {
                        if (i >= r && o < h) return i;
                        if (o > h) return h - x
                    }
                    return t
                },
                R = e => {
                    let {
                        prevHeight: t,
                        topOffset: s,
                        boundaryRect: n,
                        initialSelfBottom: a,
                        resize_direction: l,
                        newHeight: i,
                        minHeight: r,
                        clientY: o,
                        self: d
                    } = e, c = (null == n ? void 0 : n.top) ? ? 0, _ = (null == n ? void 0 : n.height) ? ? 0, u = c + s + 5, x = (null == d ? void 0 : d.top) ? ? 0, h = c + _ - 7;
                    if (l.includes("top")) return i >= r && o > u ? i : o < u + 10 ? h - u - (h - a) - 10 : t;
                    if (l.includes("bottom")) {
                        if (i >= r && o < h) return i;
                        if (o > h) return h - x
                    }
                    return t
                },
                L = e => {
                    let {
                        children: t,
                        boundary: s,
                        initialValues: n = {
                            width: 400,
                            height: 400,
                            xAxis: 0,
                            yAxis: 0
                        },
                        minWidth: a = 100,
                        minHeight: r = 100,
                        enableResizing: o = !1,
                        enableDragging: d = !0,
                        header: c = "",
                        onClose: _
                    } = e, [u, x] = (0, i.useState)({
                        x: n.xAxis,
                        y: n.yAxis
                    }), [h, m] = (0, i.useState)({
                        width: n.width,
                        height: n.height
                    }), [p, j] = (0, i.useState)(100), v = (0, i.useRef)(!1), [b, g] = (0, i.useState)(!1), y = (0, i.useRef)(null), [f, N] = (0, i.useState)(document.querySelector(s ? ? S.BODY_REF));
                    (0, i.useEffect)(() => {
                        m({
                            width: n.width,
                            height: n.height
                        }), x({
                            x: n.xAxis,
                            y: n.yAxis
                        })
                    }, [n.height, n.width, n.xAxis, n.yAxis]), (0, i.useEffect)(() => {
                        N(document.querySelector(s ? ? S.BODY_REF)), I({
                            setZIndex: j
                        })
                    }, [s]);
                    let C = (e, t) => {
                        var s, l, i, c, _;
                        if (null == e || e.stopPropagation(), I({
                                setZIndex: j
                            }), !t) return;
                        v.current = t !== S.MOVE && o, g(t === S.MOVE && d);
                        let p = null == f ? void 0 : f.getBoundingClientRect(),
                            b = (null == f ? void 0 : f.offsetTop) ? ? 0,
                            N = (null == f ? void 0 : f.offsetLeft) ? ? 0,
                            C = (null == e ? void 0 : e.clientX) ? ? 0,
                            w = (null == e ? void 0 : e.clientY) ? ? 0,
                            k = (null == h ? void 0 : h.width) ? ? n.width,
                            T = (null == h ? void 0 : h.height) ? ? n.height,
                            E = (null == u ? void 0 : u.x) ? ? 0,
                            L = (null == u ? void 0 : u.y) ? ? 0,
                            M = (null === (l = y.current) || void 0 === l ? void 0 : null === (s = l.getBoundingClientRect()) || void 0 === s ? void 0 : s.right) ? ? h.width,
                            O = (null === (c = y.current) || void 0 === c ? void 0 : null === (i = c.getBoundingClientRect()) || void 0 === i ? void 0 : i.bottom) ? ? h.height,
                            D = {},
                            U = null === (_ = y.current) || void 0 === _ ? void 0 : _.querySelector("#draggable-content-body");
                        if (U) {
                            let {
                                style: e
                            } = U;
                            e && "none" !== e.pointerEvents && (D = { ...e
                            }, e.pointerEvents = "none")
                        }
                        let F = e => {
                                if (!e) return;
                                let {
                                    clientX: t,
                                    clientY: s
                                } = e, n = t - C, a = s - w;
                                try {
                                    v.current ? Z(n, a, t, s) : z(n, a)
                                } catch (e) {
                                    B()
                                }
                            },
                            Z = (e, s, n, l) => {
                                var i;
                                let o = (null == u ? void 0 : u.x) ? ? 0,
                                    d = (null == u ? void 0 : u.y) ? ? 0,
                                    c = k,
                                    _ = T;
                                t.includes(S.RIGHT) ? c += e : t.includes(S.LEFT) && (o = e + E, c -= e), t.includes(S.BOTTOM) ? _ += s : t.includes(S.TOP) && (d = s + L, _ -= s), x(e => {
                                    let t = Math.max(d, b + 5),
                                        s = Math.max(o, N + 5);
                                    return {
                                        x: c <= a ? e.x : s,
                                        y: _ <= r ? e.y : t
                                    }
                                });
                                let h = null === (i = y.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                                m(e => ({
                                    width: A({
                                        prevWidth: e.width,
                                        leftOffset: N,
                                        boundaryRect: p,
                                        initialSelfRight: M,
                                        resize_direction: t,
                                        newWidth: c,
                                        minWidth: a,
                                        clientX: n,
                                        self: h
                                    }),
                                    height: R({
                                        prevHeight: e.height,
                                        topOffset: b,
                                        boundaryRect: p,
                                        initialSelfBottom: O,
                                        resize_direction: t,
                                        newHeight: _,
                                        minHeight: r,
                                        clientY: l,
                                        self: h
                                    })
                                }))
                            },
                            z = (e, t) => {
                                let s = Math.min(Math.max(e + E, N + 5), N + ((null == p ? void 0 : p.width) ? ? 0) - h.width - 9);
                                x({
                                    x: s,
                                    y: Math.min(Math.max(t + L, b + 5), b + ((null == p ? void 0 : p.height) ? ? 0) - h.height - 9)
                                })
                            },
                            B = () => {
                                if (g(!1), v.current = !1, null == U ? void 0 : U.style) try {
                                    Object.assign(U.style, D)
                                } catch {
                                    U.style.pointerEvents = "unset"
                                }
                                f && (window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", B))
                            };
                        f && (window.addEventListener("mousemove", F), window.addEventListener("mouseup", B))
                    };
                    return (0, l.jsx)("div", {
                        className: `draggable ${b?"dragging":""}`,
                        style: {
                            position: "absolute",
                            top: u.y,
                            left: u.x,
                            zIndex: p
                        },
                        onMouseDown: () => I({
                            setZIndex: j
                        }),
                        onKeyDown: () => I({
                            setZIndex: j
                        }),
                        "data-testid": "dt_react_draggable",
                        tabIndex: 0,
                        children: (0, l.jsxs)("div", {
                            ref: y,
                            className: "draggable-content",
                            "data-testid": "dt_react_draggable_content",
                            style: {
                                width: h.width,
                                height: h.height
                            },
                            children: [(0, l.jsxs)("div", {
                                id: "draggable-content__header",
                                "data-testid": "dt_react_draggable_handler",
                                className: "draggable-content__header",
                                onMouseDown: e => C(e, S.MOVE),
                                onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                tabIndex: 0,
                                children: [(0, l.jsx)("div", {
                                    className: "draggable-content__header__title",
                                    children: c
                                }), (0, l.jsx)("div", {
                                    className: "draggable-content__header__close",
                                    "data-testid": "dt_react_draggable-close-modal",
                                    onClick: _,
                                    children: (0, l.jsx)(E.Z, {
                                        height: "20px",
                                        width: "20px",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })
                                })]
                            }), (0, l.jsx)("span", {
                                className: "draggable-content__body",
                                id: "draggable-content-body",
                                children: t
                            }), o && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "resizable-handle__top",
                                    "data-testid": "dt_resizable-handle__top",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.TOP),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__right",
                                    "data-testid": "dt_resizable-handle__right",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom",
                                    "data-testid": "dt_resizable-handle__bottom",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.BOTTOM),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__left",
                                    "data-testid": "dt_resizable-handle__left",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.LEFT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__top-right",
                                    "data-testid": "dt_resizable-handle__top-right",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.TOP_RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom-right",
                                    "data-testid": "dt_resizable-handle__bottom-right",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.BOTTOM_RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom-left",
                                    "data-testid": "dt_resizable-handle__bottom-left",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.BOTTOM_LEFT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__top-left",
                                    "data-testid": "dt_resizable-handle__top-left",
                                    onKeyDown: e => "Enter" === e.key && C(null, S.MOVE),
                                    onMouseDown: e => C(e, S.TOP_LEFT),
                                    tabIndex: 0
                                })]
                            })]
                        })
                    })
                },
                M = e => {
                    let {
                        boundary: t,
                        children: s,
                        onClose: n,
                        enableResizing: a = !1,
                        enableDragging: r = !0,
                        header: o = "",
                        minHeight: d = 100,
                        minWidth: c = 100,
                        modalHeight: _ = 400,
                        modalWidth: u = 400
                    } = e, [x, h] = (0, i.useState)(!1), m = (window.innerWidth - u) / 2, p = (window.innerHeight - _) / 2, [j, v] = i.useState({
                        width: u,
                        height: _,
                        xAxis: m >= 0 ? m : 0,
                        yAxis: p >= 0 ? p : 0
                    }), b = T()(() => {
                        let e = window.innerWidth > u ? u : window.innerWidth - 50,
                            t = window.innerHeight > _ ? _ : window.innerHeight - 50,
                            s = (window.innerWidth - e) / 2,
                            n = (window.innerHeight - t) / 2;
                        v({
                            width: e,
                            height: t,
                            xAxis: s >= 0 ? s : 0,
                            yAxis: n >= 0 ? n : 0
                        }), h(!0)
                    }, 0);
                    return i.useEffect(() => (b(), window.addEventListener("resize", b), () => {
                        window.removeEventListener("resize", b)
                    }), [b]), (0, l.jsx)("div", {
                        id: "draggable_resize_container",
                        children: x && (0, l.jsx)(L, {
                            boundary: t,
                            initialValues: j,
                            minWidth: c,
                            minHeight: d,
                            enableResizing: a,
                            enableDragging: r,
                            header: o,
                            onClose: n,
                            children: s
                        })
                    })
                };
            var O = s("63387"),
                D = s.n(O),
                U = s("24561"),
                F = s("33690"),
                Z = s("88199"),
                z = s("26855");
            let B = {
                    FRXAUDCAD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudcadIcon
                    }))),
                    FRXAUDCHF: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudchfIcon
                    }))),
                    FRXAUDJPY: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudjpyIcon
                    }))),
                    FRXAUDNZD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudnzdIcon
                    }))),
                    FRXAUDPLN: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudsgdIcon
                    }))),
                    FRXAUDUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexAudusdIcon
                    }))),
                    FRXBROUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexCadchfIcon
                    }))),
                    FRXEURAUD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEuraudIcon
                    }))),
                    FRXEURCAD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurcadIcon
                    }))),
                    FRXEURCHF: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurchfIcon
                    }))),
                    FRXEURGBP: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurgbpIcon
                    }))),
                    FRXEURJPY: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurjpyIcon
                    }))),
                    FRXEURNZD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurnzdIcon
                    }))),
                    FRXEURUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexEurusdIcon
                    }))),
                    FRXGBPAUD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpaudIcon
                    }))),
                    FRXGBPCAD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpcadIcon
                    }))),
                    FRXGBPCHF: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpchfIcon
                    }))),
                    FRXGBPJPY: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpjpyIcon
                    }))),
                    FRXGBPNOK: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpnokIcon
                    }))),
                    FRXGBPUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpusdIcon
                    }))),
                    FRXGBPNZD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexGbpnzdIcon
                    }))),
                    FRXNZDJPY: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexNzdjpnIcon
                    }))),
                    FRXNZDUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexNzdusdIcon
                    }))),
                    FRXUSDCAD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdcadIcon
                    }))),
                    FRXUSDCHF: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdchfIcon
                    }))),
                    FRXUSDJPY: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdjpyIcon
                    }))),
                    FRXUSDNOK: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdnokIcon
                    }))),
                    FRXUSDPLN: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdplnIcon
                    }))),
                    FRXUSDSEK: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdsekIcon
                    }))),
                    FRXUSDMXN: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketForexUsdmxnIcon
                    }))),
                    FRXXAGUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCommoditySilverusdIcon
                    }))),
                    FRXXAUUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCommodityGoldusdIcon
                    }))),
                    FRXXPDUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCommodityPalladiumusdIcon
                    }))),
                    FRXXPTUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCommodityPlatinumusdIcon
                    }))),
                    OTC_AEX: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesNetherlands25Icon
                    }))),
                    OTC_AS51: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesAustralia200Icon
                    }))),
                    OTC_DJI: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesWallStreet30Icon
                    }))),
                    OTC_FCHI: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesFrance40Icon
                    }))),
                    OTC_FTSE: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesUk100Icon
                    }))),
                    OTC_GDAXI: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesUk100Icon
                    }))),
                    OTC_HSI: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesHongKong50Icon
                    }))),
                    OTC_IBEX35: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesSpain35Icon
                    }))),
                    OTC_N225: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesJapan225Icon
                    }))),
                    OTC_NDX: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesUsTech100Icon
                    }))),
                    OTC_SPC: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesUs500Icon
                    }))),
                    OTC_SSMI: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesSwiss20Icon
                    }))),
                    OTC_SX5E: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketIndicesEuro50Icon
                    }))),
                    R_10: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility10Icon
                    }))),
                    R_25: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility25Icon
                    }))),
                    R_50: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility50Icon
                    }))),
                    R_75: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility75Icon
                    }))),
                    R_100: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility100Icon
                    }))),
                    BOOM300N: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedBoom300Icon
                    }))),
                    BOOM500: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedBoom500Icon
                    }))),
                    BOOM1000: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedBoom1000Icon
                    }))),
                    CRASH300N: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedCrash300Icon
                    }))),
                    CRASH500: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedCrash500Icon
                    }))),
                    CRASH1000: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedCrash1000Icon
                    }))),
                    RDBEAR: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedBearIcon
                    }))),
                    RDBULL: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedBullIcon
                    }))),
                    STPRNG: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices100Icon
                    }))),
                    STPRNG2: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices200Icon
                    }))),
                    STPRNG3: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices300Icon
                    }))),
                    STPRNG4: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices400Icon
                    }))),
                    STPRNG5: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices500Icon
                    }))),
                    WLDAUD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedAudBasketIcon
                    }))),
                    WLDEUR: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedEurBasketIcon
                    }))),
                    WLDGBP: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedGbpBasketIcon
                    }))),
                    WLDXAU: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedGoldBasketIcon
                    }))),
                    WLDUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedUsdBasketIcon
                    }))),
                    "1HZ10V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility101sIcon
                    }))),
                    "1HZ25V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility251sIcon
                    }))),
                    "1HZ50V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility501sIcon
                    }))),
                    "1HZ75V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility751sIcon
                    }))),
                    "1HZ100V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility1001sIcon
                    }))),
                    "1HZ150V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility1501sIcon
                    }))),
                    "1HZ200V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility2001sIcon
                    }))),
                    "1HZ250V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility2501sIcon
                    }))),
                    "1HZ300V": (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility3001sIcon
                    }))),
                    JD10: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump10Icon
                    }))),
                    JD25: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump25Icon
                    }))),
                    JD50: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump50Icon
                    }))),
                    JD75: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump75Icon
                    }))),
                    JD100: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump100Icon
                    }))),
                    JD150: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump150Icon
                    }))),
                    JD200: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketDerivedJump200Icon
                    }))),
                    CRYBCHUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBchusdIcon
                    }))),
                    CRYBNBUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBnbusdIcon
                    }))),
                    CRYBTCLTC: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcltcIcon
                    }))),
                    CRYIOTUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyIotusdIcon
                    }))),
                    CRYNEOUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyNeousdIcon
                    }))),
                    CRYOMGUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyOmgusdIcon
                    }))),
                    CRYTRXUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyTrxusdIcon
                    }))),
                    CRYBTCETH: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcethIcon
                    }))),
                    CRYZECUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyZecusdIcon
                    }))),
                    CRYXMRUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXmrusdIcon
                    }))),
                    CRYXMLUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXlmusdIcon
                    }))),
                    CRYXRPUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXrpusdIcon
                    }))),
                    CRYBTCUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcusdIcon
                    }))),
                    CRYDSHUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyDshusdIcon
                    }))),
                    CRYETHUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyEthusdIcon
                    }))),
                    CRYEOSUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyEosusdIcon
                    }))),
                    CRYLTCUSD: (0, i.lazy)(() => s.e("753").then(s.bind(s, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyLtcusdIcon
                    }))),
                    unknown: (0, i.lazy)(() => s.e("733").then(s.bind(s, 57136)).then(e => ({
                        default: e.IllustrativeMarketsIcon
                    })))
                },
                P = e => {
                    let {
                        type: t,
                        size: s
                    } = e, n = B[null == t ? void 0 : t.toUpperCase()] || B.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(n, {
                            iconSize: s ? ? "xs"
                        })
                    })
                };
            var X = s("30394");
            let H = {
                    ACCU: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesAccumulatorStayInIcon
                    }))),
                    DIGITDIFF: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsDiffersIcon
                    }))),
                    DIGITEVEN: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsEvenIcon
                    }))),
                    DIGITMATCH: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsMatchesIcon
                    }))),
                    DIGITODD: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsOddIcon
                    }))),
                    DIGITOVER: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsOverIcon
                    }))),
                    DIGITUNDER: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesDigitsUnderIcon
                    }))),
                    TICKHIGH: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsHighIcon
                    }))),
                    TICKLOW: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsLowIcon
                    }))),
                    NOTOUCH: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsNoTouchIcon
                    }))),
                    ONETOUCH: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsTouchIcon
                    }))),
                    EXPIRYRANGE: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsEndsInIcon
                    }))),
                    EXPIRYMISS: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsEndsOutIcon
                    }))),
                    UPORDOWN: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsGoesOutIcon
                    }))),
                    RANGE: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsStaysInIcon
                    }))),
                    MULTDOWN: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesMultipliersDownIcon
                    }))),
                    MULTUP: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesMultipliersUpIcon
                    }))),
                    CALLSPREAD: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesSpreadsCallIcon
                    }))),
                    PUTSPREAD: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesSpreadsPutIcon
                    }))),
                    ASIAND: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsAsianDownIcon
                    }))),
                    ASIANU: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsAsianUpIcon
                    }))),
                    PUT: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsFallIcon
                    }))),
                    PUTE: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsFallIcon
                    }))),
                    RUNLOW: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsOnlyDownsIcon
                    }))),
                    RUNHIGH: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsOnlyUpsIcon
                    }))),
                    RESETPUT: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsResetDownIcon
                    }))),
                    RESETCALL: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsResetUpIcon
                    }))),
                    CALL: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsRiseIcon
                    }))),
                    CALLE: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsRiseIcon
                    }))),
                    HIGHER: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsHigherIcon
                    }))),
                    LOWER: (0, i.lazy)(() => s.e("327").then(s.bind(s, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsLowerIcon
                    }))),
                    unknown: (0, i.lazy)(() => s.e("733").then(s.bind(s, 57136)).then(e => ({
                        default: e.IllustrativeMarketsIcon
                    })))
                },
                $ = e => {
                    let {
                        type: t,
                        size: s,
                        className: n
                    } = e, a = H[null == t ? void 0 : t.toUpperCase()] || H.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(a, {
                            iconSize: s ? ? "xs",
                            className: n
                        })
                    })
                },
                V = "transaction-details-modal-desktop",
                G = e => {
                    let {
                        label: t,
                        extra_classes: s = [],
                        loader: n = !1
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()(`${V}__table-cell`, ...s),
                        children: n ? (0, l.jsx)(W, {}) : t
                    })
                },
                q = e => {
                    let {
                        columns: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()(`${V}__table-row`, `${V}__table-header`),
                        children: null == t ? void 0 : t.map(e => (0, l.jsx)(G, {
                            extra_classes: [e.extra_class ? `${V}__table-cell${e.extra_class}` : ""],
                            label: e.label,
                            loader: !1
                        }, e.key))
                    })
                },
                Y = e => {
                    let {
                        message: t,
                        icon: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: `${V}__icon-wrapper`,
                        children: (0, l.jsx)(X.Z, {
                            alignment: (0, z.rK)() ? "right" : "left",
                            message: t,
                            zIndex: "9999",
                            children: s
                        })
                    })
                },
                W = () => (0, l.jsx)(U.ZP, {
                    className: "transactions__loader-text",
                    "data-testid": "transaction_details_table_cell_loader",
                    height: 10,
                    width: 30,
                    speed: 3,
                    backgroundColor: "var(--general-section-2)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "60",
                        height: "12"
                    })
                });

            function K(e) {
                let {
                    result: t,
                    result_columns: s,
                    transactions: n,
                    transaction_columns: a,
                    account: i,
                    balance: r
                } = e;
                return (0, l.jsxs)("div", {
                    "data-testid": "transaction_details_tables",
                    className: "transaction-details-tables",
                    children: [(0, l.jsxs)("div", {
                        className: D()(`${V}__table-container`, `${V}__table-container__top-table`),
                        children: [(0, l.jsx)(q, {
                            columns: a
                        }), null == n ? void 0 : n.map(e => {
                            let {
                                data: t,
                                type: s
                            } = e;
                            if (s === F.i.CONTRACT) {
                                var n, a;
                                return (0, l.jsxs)("div", {
                                    className: `${V}__table-row`,
                                    children: [(0, l.jsx)(G, {
                                        label: (null == t ? void 0 : t.date_start) && (0, x.fcq)(null == t ? void 0 : t.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]"),
                                        extra_classes: [`${V}__table-cell--grow-big`]
                                    }), (0, l.jsx)(G, {
                                        label: null == t ? void 0 : null === (n = t.transaction_ids) || void 0 === n ? void 0 : n.buy,
                                        extra_classes: [`${V}__table-cell--grow-mid`]
                                    }), (0, l.jsx)(G, {
                                        label: (0, l.jsx)(Y, {
                                            message: null == t ? void 0 : t.display_name,
                                            icon: (0, l.jsx)(P, {
                                                type: null == t ? void 0 : t.underlying,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, l.jsx)(G, {
                                        label: (0, l.jsx)(Y, {
                                            message: (0, Z.getContractTypeName)(t),
                                            icon: (0, l.jsx)($, {
                                                type: null == t ? void 0 : t.contract_type,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, l.jsx)(G, {
                                        label: null == t ? void 0 : t.entry_tick,
                                        loader: !(null == t ? void 0 : t.entry_tick)
                                    }), (0, l.jsx)(G, {
                                        label: null == t ? void 0 : t.exit_tick,
                                        loader: !t.exit_tick
                                    }), (0, l.jsx)(G, {
                                        label: Math.abs((null == t ? void 0 : t.buy_price) ? ? 0).toFixed(2)
                                    }), (0, l.jsx)(G, {
                                        label: (0, l.jsx)("div", {
                                            className: D()({
                                                [`${V}__profit--win`]: (null == t ? void 0 : t.profit) > 0,
                                                [`${V}__profit--loss`]: (null == t ? void 0 : t.profit) < 0
                                            }),
                                            children: Math.abs((null == t ? void 0 : t.profit) ? ? 0).toFixed(2)
                                        }),
                                        loader: !t.is_completed
                                    })]
                                }, null == t ? void 0 : null === (a = t.transaction_ids) || void 0 === a ? void 0 : a.buy)
                            }
                            return (0, l.jsx)("div", {
                                className: `${V}__table-row`,
                                children: (0, l.jsx)("div", {
                                    className: `${V}__divider`,
                                    children: (0, l.jsx)("div", {
                                        className: "transactions__divider-line"
                                    })
                                })
                            }, `transaction-row-divider-${t}`)
                        })]
                    }), (0, l.jsxs)("div", {
                        className: D()(`${V}__table-container`, `${V}__table-container__bottom-table`),
                        children: [(0, l.jsx)(q, {
                            columns: s
                        }), (0, l.jsxs)("div", {
                            className: `${V}__table-row`,
                            children: [(0, l.jsx)(G, {
                                label: i,
                                extra_classes: [`${V}__table-cell--grow-mid`]
                            }), (0, l.jsx)(G, {
                                label: null == t ? void 0 : t.number_of_runs
                            }), (0, l.jsx)(G, {
                                label: Math.abs((null == t ? void 0 : t.total_stake) ? ? 0).toFixed(2)
                            }), (0, l.jsx)(G, {
                                label: Math.abs((null == t ? void 0 : t.total_payout) ? ? 0).toFixed(2)
                            }), (0, l.jsx)(G, {
                                label: null == t ? void 0 : t.won_contracts
                            }), (0, l.jsx)(G, {
                                label: null == t ? void 0 : t.lost_contracts,
                                extra_classes: [`${V}__loss`]
                            }), (0, l.jsx)(G, {
                                label: (0, l.jsx)("div", {
                                    className: D()((null == t ? void 0 : t.total_profit) && {
                                        [`${V}__profit--win`]: (null == t ? void 0 : t.total_profit) > 0,
                                        [`${V}__profit--loss`]: (null == t ? void 0 : t.total_profit) < 0
                                    }),
                                    "data-testid": "transaction_details_table_profit",
                                    children: Math.abs((null == t ? void 0 : t.total_profit) ? ? 0).toFixed(2)
                                })
                            }), (0, l.jsx)(G, {
                                label: r
                            })]
                        })]
                    })]
                })
            }
            let J = () => [{
                    key: "timestamp",
                    label: (0, y.NC)("Timestamp"),
                    extra_class: "--grow-big"
                }, {
                    key: "reference",
                    label: (0, y.NC)("Reference"),
                    extra_class: "--grow-mid"
                }, {
                    key: "market",
                    label: (0, y.NC)("Market")
                }, {
                    key: "contract_type",
                    label: (0, y.NC)("Trade type")
                }, {
                    key: "entry_tick",
                    label: (0, y.NC)("Entry spot")
                }, {
                    key: "exit_tick",
                    label: (0, y.NC)("Exit spot")
                }, {
                    key: "buy_price",
                    label: (0, y.NC)("Buy price")
                }, {
                    key: "profit",
                    label: (0, y.NC)("Profit/Loss")
                }],
                Q = () => [{
                    key: "account",
                    label: (0, y.NC)("Account"),
                    extra_class: "--grow-mid"
                }, {
                    key: "no_of_runs",
                    label: (0, y.NC)("No. of runs")
                }, {
                    key: "total_stake",
                    label: (0, y.NC)("Total stake")
                }, {
                    key: "total_payout",
                    label: (0, y.NC)("Total payout")
                }, {
                    key: "win",
                    label: (0, y.NC)("Win")
                }, {
                    key: "loss",
                    label: (0, y.NC)("Loss")
                }, {
                    key: "total_profit",
                    label: (0, y.NC)("Total profit/loss")
                }, {
                    key: "balance",
                    label: (0, y.NC)("Balance")
                }],
                ee = (0, r.Pi)(() => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        loginid: t,
                        balance: s
                    } = e, {
                        transactions: n
                    } = (0, p.oR)(), {
                        toggleTransactionDetailsModal: a,
                        is_transaction_details_modal_open: r,
                        transactions: o
                    } = n, {
                        statistics: d
                    } = n;
                    return (0, l.jsx)(i.Fragment, {
                        children: r && (0, l.jsx)(M, {
                            boundary: ".main",
                            header: (0, y.NC)("Transactions detailed summary"),
                            onClose: () => a(!1),
                            modalWidth: 882,
                            modalHeight: 404,
                            minWidth: 882,
                            minHeight: 404,
                            enableResizing: !0,
                            children: (0, l.jsx)(K, {
                                transaction_columns: J(),
                                transactions: o,
                                result_columns: Q(),
                                result: d,
                                account: t ? ? "",
                                balance: s ? ? 0
                            })
                        })
                    })
                });
            var et = s("45452"),
                es = s("80177"),
                en = s("64010"),
                ea = s("44810"),
                el = s("30328"),
                ei = s("43882");
            let er = i.memo(e => {
                var t, s;
                let {
                    className: n,
                    column: a,
                    is_footer: i,
                    passthrough: r,
                    row: o
                } = e;
                if (!a) return null;
                let {
                    col_index: d,
                    title: c
                } = a, _ = null == o ? void 0 : o[d], u = (0, x.MOe)(null == o ? void 0 : null === (t = o.contract_info) || void 0 === t ? void 0 : t.contract_type), h = (0, x.Yeo)(null == o ? void 0 : null === (s = o.contract_info) || void 0 === s ? void 0 : s.contract_type);
                return (0, l.jsxs)("div", {
                    className: D()(n, a.col_index),
                    children: [!i && (0, l.jsx)("div", {
                        className: D()(`${a.col_index}__row-title`, "data-list__row-title"),
                        children: a.renderHeader ? a.renderHeader({
                            title: c,
                            is_vanilla: h
                        }) : c
                    }), (0, l.jsx)("div", {
                        className: "data-list__row-content",
                        children: a.renderCellContent ? a.renderCellContent({
                            cell_value: _,
                            is_footer: i,
                            passthrough: r,
                            row_obj: o,
                            is_vanilla: h,
                            is_turbos: u
                        }) : _
                    })]
                })
            });
            var eo = s("79655"),
                ed = s("89471");
            let ec = (e, t) => {
                    let s = i.useMemo(() => T()(e, t), []);
                    return i.useEffect(() => s.cancel, []), s
                },
                e_ = i.memo(e => {
                    let {
                        action_desc: t,
                        destination_link: s,
                        row_gap: n,
                        row_key: a,
                        rowRenderer: r,
                        measure: o,
                        is_dynamic_height: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), h = (0, ed.tm)(), m = ec(() => u(!1), 5e3), p = () => {
                        t && (u(!_), m())
                    }, j = e => {
                        (0, x.K9$)(p, e)
                    };
                    return i.useEffect(() => {
                        h() && d && (null == o || o())
                    }, [_, d, o]), (0, l.jsx)("div", {
                        className: "data-list__row--wrapper",
                        style: {
                            paddingBottom: `${n||0}px`
                        },
                        children: s ? (0, l.jsx)(eo.OL, {
                            className: "data-list__item--wrapper",
                            id: `dt_reports_contract_${a}`,
                            to: {
                                pathname: s,
                                state: {
                                    from_table_row: !0
                                }
                            },
                            children: (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        }) : (0, l.jsx)("div", {
                            className: D()("data-list__item--wrapper", {
                                "data-list__item--dynamic-height-wrapper": d
                            }),
                            children: t ? (0, l.jsx)("div", {
                                className: "data-list__item",
                                onClick: j,
                                onKeyDown: j,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "data-list__desc--wrapper",
                                    children: t.component && (0, l.jsx)("div", {
                                        children: t.component
                                    })
                                }) : r({
                                    measure: o,
                                    ...c
                                })
                            }) : (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        })
                    })
                }),
                eu = el.aV,
                ex = el.qj,
                eh = el.Z8,
                em = i.memo(e => {
                    let {
                        children: t,
                        className: s,
                        data_source: n,
                        footer: a,
                        getRowSize: r,
                        keyMapper: o,
                        onRowsRendered: d,
                        onScroll: c,
                        setListRef: _,
                        overscanRowCount: u,
                        ...h
                    } = e, [m, p] = i.useState(!0), [j, v] = i.useState(!1), [b, g] = i.useState(0), y = i.useRef(), f = i.useRef(null), N = i.useRef({}), C = i.useRef(null);
                    C.current = n;
                    let w = !r,
                        k = i.useCallback(() => {
                            n.forEach((e, t) => {
                                let s = (null == o ? void 0 : o(e)) || `${t}-0`;
                                N.current[s] = !0
                            })
                        }, [n, o]);
                    i.useEffect(() => {
                        w && (y.current = new el.t1({
                            fixedWidth: !0,
                            keyMapper: e => (null == C ? void 0 : C.current) && e < (null == C ? void 0 : C.current.length) && (null == o ? void 0 : o(C.current[e])) || e
                        })), k(), p(!1)
                    }, []), i.useEffect(() => {
                        if (w) {
                            var e, t;
                            null === (t = f.current) || void 0 === t || null === (e = t.recomputeGridSize) || void 0 === e || e.call(t, {
                                columnIndex: 0,
                                rowIndex: 0
                            })
                        }
                        k()
                    }, [n, w, k]);
                    let T = e => {
                            let {
                                style: t,
                                index: s,
                                key: a,
                                parent: i
                            } = e, {
                                getRowAction: r,
                                passthrough: d,
                                row_gap: c
                            } = h, _ = n[s], {
                                action_type: u,
                                shortcode: m,
                                purchase_time: p,
                                transaction_time: v,
                                id: b
                            } = _;
                            if ((0, x.JIr)(u, m, p || v)) {
                                let e = !!(null == n ? void 0 : n.find(e => "sell" === e.action_type && e.id === b));
                                _ = { ..._,
                                    is_sold: e
                                }
                            }
                            let g = r && r(_),
                                f = "string" == typeof g ? g : void 0,
                                C = "object" == typeof g ? g : void 0,
                                k = (null == o ? void 0 : o(_)) || a,
                                T = function() {
                                    let {
                                        measure: e
                                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, l.jsx)(e_, {
                                        action_desc: C,
                                        destination_link: f,
                                        is_new_row: !N.current[k],
                                        is_scrolling: j,
                                        measure: e,
                                        passthrough: d,
                                        row_gap: c,
                                        row_key: k,
                                        row: _,
                                        rowRenderer: h.rowRenderer,
                                        is_dynamic_height: w
                                    })
                                };
                            return w && y.current ? (0, l.jsx)(eh, {
                                cache: y.current,
                                columnIndex: 0,
                                rowIndex: s,
                                parent: i,
                                children: e => {
                                    let {
                                        measure: s
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        style: t,
                                        children: T({
                                            measure: s
                                        })
                                    })
                                }
                            }, k) : (0, l.jsx)("div", {
                                style: t,
                                children: T()
                            }, k)
                        },
                        E = e => {
                            let t;
                            clearTimeout(t), !j && v(!0), t = setTimeout(() => {
                                !m && v(!1)
                            }, 200), g(e.target.scrollTop), "function" == typeof c && c(e)
                        },
                        S = e => {
                            f.current = e, null == _ || _(e)
                        };
                    return m ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                        "data-testid": "dt_data_list",
                        className: D()(s, "data-list", {
                            [`${s}__data-list`]: s
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "data-list__body-wrapper",
                            children: [(0, l.jsx)("div", {
                                className: D()("data-list__body", {
                                    [`${s}__data-list-body`]: s
                                }),
                                children: (0, l.jsx)(ex, {
                                    children: e => {
                                        var t, a;
                                        let {
                                            width: i,
                                            height: o
                                        } = e;
                                        return (0, l.jsx)(ea.Z, {
                                            style: {
                                                height: o,
                                                width: i
                                            },
                                            children: (0, l.jsx)(ei.Z, {
                                                onScroll: E,
                                                autohide: !0,
                                                is_bypassed: (0, x.tqC)(),
                                                children: (0, l.jsx)(eu, {
                                                    className: s,
                                                    deferredMeasurementCache: null == y ? void 0 : y.current,
                                                    height: o,
                                                    onRowsRendered: d,
                                                    overscanRowCount: u || 1,
                                                    ref: e => S(e),
                                                    rowCount: n.length,
                                                    rowHeight: w && (null == y ? void 0 : null === (t = y.current) || void 0 === t ? void 0 : t.rowHeight) ? null == y ? void 0 : null === (a = y.current) || void 0 === a ? void 0 : a.rowHeight : r || 0,
                                                    rowRenderer: T,
                                                    scrollingResetTimeInterval: 0,
                                                    width: i,
                                                    ...(0, x.nIE)() ? {
                                                        scrollTop: b,
                                                        autoHeight: !0
                                                    } : {
                                                        onScroll: e => E({
                                                            target: e
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }), t]
                        }), a && (0, l.jsx)("div", {
                            className: D()("data-list__footer", {
                                [`${s}__data-list-footer`]: s
                            }),
                            children: (0, l.jsx)(i.Fragment, {
                                children: h.rowRenderer({
                                    row: a,
                                    is_footer: !0
                                })
                            })
                        })]
                    })
                });
            em.displayName = "DataList", em.Cell = er;
            let ep = e => {
                let {
                    date: t,
                    time: s
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", {
                        className: "journal__text-date",
                        children: t
                    }), " | ", (0, l.jsx)("span", {
                        className: "journal__text-time",
                        children: s
                    })]
                })
            };
            var ej = s("1051"),
                ev = s("75544");
            let eb = i.forwardRef((e, t) => {
                let {
                    className: s,
                    classNameLabel: n,
                    disabled: a = !1,
                    id: r,
                    label: o,
                    label_font_size: d = "xs",
                    label_lineHeight: c = "unset",
                    defaultChecked: _,
                    onChange: u,
                    value: x = !1,
                    withTabIndex: h = 0,
                    greyDisabled: m = !1,
                    has_error: p = !1,
                    ...j
                } = e, [v, b] = i.useState(_ || x);
                return i.useEffect(() => {
                    b(_ || x)
                }, [x, _]), (0, l.jsxs)("label", {
                    htmlFor: r,
                    onClick: e => e.stopPropagation(),
                    className: D()("dc-checkbox", s, {
                        "dc-checkbox--disabled": a
                    }),
                    children: [(0, l.jsxs)("span", {
                        children: [(0, l.jsx)("input", {
                            className: "dc-checkbox__input",
                            type: "checkbox",
                            id: r,
                            ref: t,
                            disabled: a,
                            onChange: e => {
                                e.persist(), b(!v), null == u || u(e)
                            },
                            checked: v,
                            ...j
                        }), (0, l.jsx)("span", {
                            className: D()("dc-checkbox__box", {
                                "dc-checkbox__box--active": v,
                                "dc-checkbox__box--disabled": a,
                                "dc-checkbox--grey-disabled": a && m
                            }),
                            tabIndex: h,
                            onKeyDown: e => {
                                !a && ("Enter" === e.key || 32 === e.keyCode) && (null == u || u(e), b(!v))
                            },
                            children: !!v && (0, l.jsx)(ev.Z, {})
                        })]
                    }), (0, l.jsx)(et.Z, {
                        size: d,
                        lineHeight: c,
                        className: D()("dc-checkbox__label", n, {
                            "dc-checkbox__label--error": p
                        }),
                        children: o
                    })]
                })
            });
            eb.displayName = "Checkbox";
            let eg = e => {
                    let {
                        wrapper_ref: t,
                        checked_filters: s,
                        filters: n,
                        filterMessage: a,
                        className: i
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: t,
                        className: i,
                        children: n.map(e => {
                            let t = Array.isArray(s) && s.includes(e.id);
                            return (0, l.jsx)(eb, {
                                checked: t,
                                label: e.label,
                                onChange: () => a(!t, e.id),
                                name: e.id,
                                defaultChecked: t
                            }, e.id)
                        })
                    })
                },
                ey = e => {
                    let {
                        toggle_ref: t,
                        checked_filters: s,
                        filters: n,
                        filterMessage: a,
                        is_filter_dialog_visible: r,
                        toggleFilterDialog: o
                    } = e, d = i.useRef(null);
                    return (0, ej.t)(d, o, e => {
                        var s;
                        return r && !(null === (s = t.current) || void 0 === s ? void 0 : s.contains(e.target))
                    }), (0, l.jsx)(eg, {
                        wrapper_ref: d,
                        checked_filters: s,
                        filters: n,
                        filterMessage: a,
                        className: "filter-dialog"
                    })
                },
                ef = e => {
                    let {
                        logType: t,
                        className: s,
                        extra: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()("journal__text", s),
                        children: (() => {
                            switch (t) {
                                case Z.LogTypes.LOAD_BLOCK:
                                    return (0, y.NC)("Blocks are loaded successfully");
                                case Z.LogTypes.NOT_OFFERED:
                                    return (0, y.NC)("Resale of this contract is not offered.");
                                case Z.LogTypes.PURCHASE:
                                    {
                                        let {
                                            longcode: e,
                                            transaction_id: t
                                        } = n;
                                        return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "<0>Bought</0>: {{longcode}} (ID: {{transaction_id}})",
                                            values: {
                                                longcode: e,
                                                transaction_id: t
                                            },
                                            components: [(0, l.jsx)(et.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-info)"
                                                }
                                            }, 0)],
                                            options: {
                                                interpolation: {
                                                    escapeValue: !1
                                                }
                                            }
                                        })
                                    }
                                case Z.LogTypes.SELL:
                                    {
                                        let {
                                            sold_for: e
                                        } = n;
                                        return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "<0>Sold for</0>: {{sold_for}}",
                                            values: {
                                                sold_for: e
                                            },
                                            components: [(0, l.jsx)(et.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-warning)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case Z.LogTypes.PROFIT:
                                    {
                                        let {
                                            currency: e,
                                            profit: t
                                        } = n;
                                        return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Profit amount: <0>{{profit}}</0>",
                                            values: {
                                                profit: `${(0,x.lby)(e,t,!0)} ${(0,x.O$T)(e)}`
                                            },
                                            components: [(0, l.jsx)(et.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-success)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case Z.LogTypes.LOST:
                                    {
                                        let {
                                            currency: e,
                                            profit: t
                                        } = n;
                                        return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Loss amount: <0>{{profit}}</0>",
                                            values: {
                                                profit: `${(0,x.lby)(e,t,!0)} ${(0,x.O$T)(e)}`
                                            },
                                            components: [(0, l.jsx)(et.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-danger)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case Z.LogTypes.WELCOME_BACK:
                                    {
                                        let {
                                            current_currency: e
                                        } = n;
                                        if (e) return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Welcome back! Your messages have been restored. You are using your {{current_currency}} account.",
                                            values: {
                                                current_currency: e
                                            }
                                        });
                                        return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Welcome back! Your messages have been restored."
                                        })
                                    }
                                case Z.LogTypes.WELCOME:
                                    {
                                        let {
                                            current_currency: e
                                        } = n;
                                        if (e) return (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "You are using your {{current_currency}} account.",
                                            values: {
                                                current_currency: e
                                            }
                                        });
                                        break
                                    }
                                default:
                                    return null
                            }
                        })()
                    })
                },
                eN = (e, t, s, n, a) => {
                    switch (t) {
                        case Z.MessageTypes.SUCCESS:
                            return (0, l.jsx)(ef, {
                                logType: e,
                                extra: n,
                                className: s
                            });
                        case Z.MessageTypes.NOTIFY:
                            if ("function" == typeof e) return (0, l.jsx)("div", {
                                className: D()("journal__text", s),
                                children: e(a)
                            });
                            return (0, l.jsx)("div", {
                                className: D()("journal__text", s),
                                children: e
                            });
                        case Z.MessageTypes.ERROR:
                            return (0, l.jsx)("div", {
                                className: "journal__text--error journal__text",
                                children: e
                            });
                        default:
                            return null
                    }
                },
                eC = e => {
                    let {
                        row: t,
                        measure: s
                    } = e, {
                        date: n,
                        time: a,
                        message: i,
                        message_type: r,
                        className: o,
                        extra: d
                    } = t, c = ep({
                        date: n,
                        time: a
                    });
                    return (0, l.jsx)("div", {
                        children: (0, l.jsx)("div", {
                            className: "list__animation",
                            "data-testid": "mock-css-transition",
                            children: (0, l.jsxs)("div", {
                                className: "journal__item",
                                dir: (0, z.rK)() ? "rtl" : "ltr",
                                children: [(0, l.jsx)("div", {
                                    className: "journal__item-content",
                                    children: eN(i, r, o, d, s)
                                }), (0, l.jsx)("div", {
                                    className: "journal__text-datetime",
                                    children: c
                                })]
                            })
                        })
                    })
                },
                ew = e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsxs)(U.ZP, {
                        className: D()("journal__loader", {
                            "journal__loader--mobile": t
                        }),
                        speed: 3,
                        width: 350,
                        height: 92,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: [(0, l.jsx)("rect", {
                            x: "15",
                            y: "15",
                            rx: "5",
                            ry: "5",
                            width: "320",
                            height: "40"
                        }), (0, l.jsx)("rect", {
                            x: "15",
                            y: "60",
                            rx: "5",
                            ry: "5",
                            width: "180",
                            height: "7"
                        })]
                    })
                };
            var ek = s("81262");
            let eT = () => {
                    let e = new Date,
                        t = e.getUTCFullYear(),
                        s = (e.getUTCMonth() + 1).toString().padStart(2, "0"),
                        n = e.getUTCDate().toString().padStart(2, "0"),
                        a = e.getUTCHours().toString().padStart(2, "0"),
                        l = e.getUTCMinutes().toString().padStart(2, "0"),
                        i = e.getUTCSeconds().toString().padStart(2, "0");
                    return `${t}-${s}-${n} ${a}${l}${i}`
                },
                eE = (e, t) => {
                    let {
                        profit: s,
                        sold_for: n,
                        longcode: a,
                        transaction_id: l,
                        current_currency: i
                    } = t;
                    switch (e) {
                        case Z.LogTypes.LOAD_BLOCK:
                            return (0, y.NC)("Blocks are loaded successfully");
                        case Z.LogTypes.NOT_OFFERED:
                            return (0, y.NC)("Resale of this contract is not offered.");
                        case Z.LogTypes.PURCHASE:
                            return (0, y.NC)("Bought: {{longcode}} (ID: {{transaction_id}})", {
                                longcode: a,
                                transaction_id: l
                            });
                        case Z.LogTypes.SELL:
                            return (0, y.NC)("Sold for: {{sold_for}}", {
                                sold_for: n
                            });
                        case Z.LogTypes.PROFIT:
                            return (0, y.NC)("Profit amount: {{profit}}", {
                                profit: s
                            });
                        case Z.LogTypes.LOST:
                            return (0, y.NC)("Loss amount: {{profit}}", {
                                profit: s
                            });
                        case Z.LogTypes.WELCOME_BACK:
                            if (i) return (0, y.NC)("Welcome back! Your messages have been restored. You are using your {{current_currency}} account.", {
                                current_currency: i
                            });
                            return (0, y.NC)("Welcome back! Your messages have been restored.");
                        case Z.LogTypes.WELCOME:
                            if (i) return (0, y.NC)("You are using your {{current_currency}} account.", {
                                current_currency: i
                            });
                            break;
                        default:
                            return ""
                    }
                },
                eS = (e, t) => {
                    let s = encodeURI(`data:text/csv;charset=utf-8, ${t}`),
                        n = document.createElement("a");
                    n.setAttribute("href", s), n.setAttribute("download", `${e} ${eT()}.csv`), document.body.appendChild(n), n.click();
                    let a = n.parentNode;
                    a && n && (null == a ? void 0 : a.contains(n)) && (null == a || a.removeChild(n))
                };
            var eI = s("45221");
            let eA = (0, r.Pi)(e => {
                let t, s, {
                        tab: n
                    } = e,
                    {
                        run_panel: a,
                        transactions: i,
                        journal: r
                    } = (0, p.oR)(),
                    {
                        is_clear_stat_disabled: o,
                        is_running: d
                    } = a,
                    {
                        filtered_messages: c
                    } = r,
                    {
                        transactions: _
                    } = i,
                    u = !1;
                return "transactions" === n ? (t = () => {
                    let e = [
                        [(0, y.NC)("Market"), (0, y.NC)("Reference ID (buy)"), (0, y.NC)("Reference ID (sell)"), (0, y.NC)("Barrier"), (0, y.NC)("Start Time"), (0, y.NC)("Entry Spot"), (0, y.NC)("Entry Spot Time"), (0, y.NC)("Exit Spot"), (0, y.NC)("Exit Spot Time"), (0, y.NC)("Buy Price"), (0, y.NC)("Profit/Loss")]
                    ];
                    _.forEach(t => {
                        let {
                            data: s
                        } = t;
                        "string" != typeof s && e.push([s.display_name, s.transaction_ids.buy, s.transaction_ids.sell, s.barrier, s.date_start, s.entry_tick, s.entry_tick_time, s.exit_tick, s.exit_tick_time, s.buy_price, s.profit])
                    });
                    let t = e.map(e => e.join(",")).join("\n");
                    eS((0, y.NC)("Transactions"), t)
                }, u = !_.length || d, s = (0, y.NC)("Download your transaction history."), !_.length && (s = (0, y.NC)("No transaction or activity yet."))) : "journal" === n && (t = () => {
                    let e = [
                        [(0, y.NC)("Date"), (0, y.NC)("Time"), (0, y.NC)("Message")]
                    ];
                    c.map(t => {
                        let s;
                        s = "success" !== t.message_type ? JSON.stringify(t.message) : eE(t.message.toString(), t.extra);
                        let n = [t.date, t.time, null == s ? void 0 : s.replace("&#x2F;", "/")];
                        e.push(n)
                    });
                    let t = e.map(e => e.join(",")).join("\n");
                    eS((0, y.NC)("Journal"), t)
                }, s = (0, y.NC)("Download your journal."), (u = o) && (s = (0, y.NC)("No transaction or activity yet."))), d && (s = (0, y.NC)("Download is unavailable while your bot is running.")), (0, l.jsx)(X.Z, {
                    className: "run-panel__info",
                    classNameBubble: "run-panel__info--bubble",
                    alignment: "bottom",
                    message: s,
                    zIndex: "5",
                    children: (0, l.jsx)(eI.Z, {
                        id: "download-button",
                        disabled: u,
                        className: "download__button",
                        onClick: t,
                        secondary: !0,
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Download"
                        })
                    })
                })
            });
            var eR = s("29643");
            let eL = e => {
                    let {
                        checked_filters: t,
                        filters: s,
                        filterMessage: n,
                        is_filter_dialog_visible: a,
                        toggleFilterDialog: r
                    } = e, o = i.useRef(null);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "journal-tools__container",
                            children: [(0, l.jsx)(eA, {
                                tab: "journal"
                            }), (0, l.jsxs)("div", {
                                ref: o,
                                className: "journal-tools__container-filter",
                                onClick: r,
                                children: [(0, l.jsx)(et.Z, {
                                    size: "xs",
                                    className: "journal-tools__container-filter--label",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Filters"
                                    })
                                }), (0, l.jsx)(eR.Z, {
                                    height: "16px",
                                    width: "16px",
                                    fill: "var(--text-general)"
                                })]
                            })]
                        }), (0, l.jsx)(ek.Z, { in: a,
                            classNames: {
                                enter: "filter-dialog--enter",
                                enterDone: "filter-dialog--enter-done",
                                exit: "filter-dialog--exit"
                            },
                            timeout: 150,
                            unmountOnExit: !0,
                            children: (0, l.jsx)(ey, {
                                toggle_ref: o,
                                checked_filters: t,
                                filters: s,
                                filterMessage: n,
                                is_filter_dialog_visible: a,
                                toggleFilterDialog: r
                            })
                        })]
                    })
                },
                eM = (0, r.Pi)(() => {
                    let {
                        journal: e,
                        run_panel: t
                    } = (0, p.oR)(), {
                        checked_filters: s,
                        filterMessage: n,
                        filters: a,
                        filtered_messages: i,
                        is_filter_dialog_visible: r,
                        toggleFilterDialog: o,
                        unfiltered_messages: d
                    } = e, {
                        is_stop_button_visible: c,
                        contract_stage: _
                    } = t, u = Array.isArray(i) && i.length, x = Array.isArray(d) && d.length, {
                        isDesktop: h
                    } = (0, f.F)();
                    return (0, l.jsxs)("div", {
                        className: D()("journal run-panel-tab__content--no-stat", {
                            "run-panel-tab__content": h
                        }),
                        "data-testid": "dt_mock_journal",
                        children: [(0, l.jsx)(eL, {
                            checked_filters: s,
                            filters: a,
                            filterMessage: n,
                            is_filter_dialog_visible: r,
                            toggleFilterDialog: o
                        }), (0, l.jsx)("div", {
                            className: "journal__item-list",
                            children: u ? (0, l.jsx)(em, {
                                className: "journal",
                                data_source: i,
                                rowRenderer: e => (0, l.jsx)(eC, { ...e
                                }),
                                keyMapper: e => e.unique_id
                            }) : (0, l.jsx)(l.Fragment, {
                                children: _ >= es.K.STARTING && Object.keys(s).length && !x && c ? (0, l.jsx)(ew, {
                                    is_mobile: !h
                                }) : (0, l.jsxs)("div", {
                                    className: "journal-empty",
                                    children: [(0, l.jsx)(en.Z, {
                                        height: "64px",
                                        width: "64px",
                                        className: "journal-empty__icon icon-general-fill-g-path",
                                        color: "secondary",
                                        fill: "var(--text-general)"
                                    }), (0, l.jsx)(et.Z, {
                                        as: "h4",
                                        size: "xs",
                                        weight: "bold",
                                        align: "center",
                                        color: "less-prominent",
                                        lineHeight: "s",
                                        className: "journal-empty__header",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "There are no messages to display"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "journal-empty__message",
                                        children: [(0, l.jsx)(et.Z, {
                                            size: "xxs",
                                            color: "less-prominent",
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Here are the possible reasons:"
                                            })
                                        }), (0, l.jsxs)("ul", {
                                            className: "journal-empty__list",
                                            children: [(0, l.jsx)("li", {
                                                children: (0, l.jsx)(et.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(y.Xx, {
                                                        i18n_default_text: "The bot is not running"
                                                    })
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(et.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(y.Xx, {
                                                        i18n_default_text: "The stats are cleared"
                                                    })
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(et.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(y.Xx, {
                                                        i18n_default_text: "All messages are filtered out"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                });
            var eO = s("29747"),
                eD = s("45697"),
                eU = s.n(eD),
                eF = s("97050"),
                eZ = s("75097");
            let ez = {
                    initial: {
                        y: -50,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 250,
                        delay: .3
                    }
                },
                eB = {
                    initial: {
                        y: 50,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: .25,
                        delay: .3
                    }
                },
                eP = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .3
                    }
                },
                eX = e => {
                    let {
                        children: t,
                        className: s,
                        is_visible: n,
                        keyname: a,
                        type: i
                    } = e;
                    return "top" === i ? (0, l.jsx)(l.Fragment, {
                        children: n && (0, l.jsx)(eZ.E.div, {
                            animate: ez.animate,
                            initial: ez.initial,
                            transition: ez.transition,
                            className: s,
                            children: t
                        }, a)
                    }) : "bottom" === i ? (0, l.jsx)(l.Fragment, {
                        children: n && (0, l.jsx)(eZ.E.div, {
                            animate: eB.animate,
                            initial: eB.initial,
                            transition: eB.transition,
                            className: s,
                            children: t
                        }, a)
                    }) : (0, l.jsx)(l.Fragment, {
                        children: n && (0, l.jsx)(eZ.E.div, {
                            animate: eP.animate,
                            initial: eP.initial,
                            transition: eP.transition,
                            className: s,
                            children: t
                        }, a)
                    })
                },
                eH = s("45927").Z,
                e$ = e => {
                    let {
                        children: t,
                        has_footer: s
                    } = e;
                    return s ? (0, l.jsx)("div", {
                        className: "dc-input__wrapper",
                        children: t
                    }) : (0, l.jsx)(i.Fragment, {
                        children: t
                    })
                },
                eV = i.forwardRef((e, t) => {
                    let {
                        bottom_label: s,
                        className: n,
                        classNameError: a,
                        classNameHint: r,
                        classNameWarn: o,
                        disabled: d = !1,
                        error: c,
                        field_className: _,
                        has_character_counter: u,
                        hint: x,
                        initial_character_count: h,
                        input_id: m,
                        is_relative_hint: p,
                        label_className: j,
                        label: v,
                        leading_icon: b,
                        max_characters: g,
                        trailing_icon: y,
                        warn: f,
                        data_testId: N,
                        maxLength: C,
                        placeholder: w,
                        ...k
                    } = e, [T, E] = i.useState(0);
                    i.useEffect(() => {
                        (h || 0 === h) && E(h)
                    }, [h]);
                    let S = !!u || !!x && !!p,
                        I = v ? "" : w;
                    return (0, l.jsxs)(e$, {
                        has_footer: S,
                        children: [(0, l.jsxs)("div", {
                            className: D()("dc-input", n, {
                                "dc-input--disabled": d,
                                "dc-input--error": c,
                                "dc-input--hint": x,
                                "dc-input--bottom-label-active": s
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: D()("dc-input__container", {
                                    "dc-input__container--disabled": d,
                                    "dc-input__container--error": c
                                }),
                                children: [b && i.cloneElement(b, {
                                    className: D()("dc-input__leading-icon", b.props.className)
                                }), "textarea" === k.type ? (0, l.jsx)("textarea", {
                                    ref: t,
                                    "data-testid": N,
                                    ...k,
                                    className: D()("dc-input__field dc-input__textarea", {
                                        "dc-input__field--placeholder-visible": !v && w
                                    }),
                                    onChange: e => {
                                        var t;
                                        let s = e.target.value;
                                        g && s.length >= g && (s = s.slice(0, g)), E(s.length), e.target.value = s, null === (t = k.onChange) || void 0 === t || t.call(k, e)
                                    },
                                    disabled: d,
                                    id: m,
                                    maxLength: C,
                                    placeholder: I
                                }) : (0, l.jsx)("input", {
                                    ref: t,
                                    "data-testid": N,
                                    ...k,
                                    className: D()("dc-input__field", _, {
                                        "dc-input__field--placeholder-visible": !v && w
                                    }),
                                    onFocus: k.onFocus,
                                    onBlur: k.onBlur,
                                    onChange: k.onChange,
                                    onKeyDown: k.onKeyDown,
                                    onMouseDown: k.onMouseDown,
                                    onMouseUp: k.onMouseUp,
                                    onPaste: k.onPaste,
                                    disabled: d,
                                    "data-lpignore": "password" !== k.type || void 0,
                                    id: m,
                                    "aria-label": v,
                                    maxLength: C,
                                    placeholder: I
                                }), y && i.cloneElement(y, {
                                    className: D()("dc-input__trailing-icon", y.props.className)
                                }), v && (0, l.jsx)("label", {
                                    className: D()("dc-input__label", j),
                                    htmlFor: k.id,
                                    children: v
                                })]
                            }), (0, l.jsx)("div", {
                                children: !S && (0, l.jsxs)(i.Fragment, {
                                    children: [c && (0, l.jsx)(eH, {
                                        className: a,
                                        message: c,
                                        type: "error"
                                    }), f && (0, l.jsx)(eH, {
                                        className: o,
                                        message: f,
                                        type: "warn"
                                    }), !c && x && !p && (0, l.jsx)("div", {
                                        className: "dc-input__hint",
                                        children: (0, l.jsx)(et.Z, {
                                            as: "p",
                                            color: "less-prominent",
                                            size: "xs",
                                            className: r,
                                            children: x
                                        })
                                    })]
                                })
                            })]
                        }), S && (0, l.jsxs)("div", {
                            className: "dc-input__footer",
                            children: [c && (0, l.jsx)(eH, {
                                className: a,
                                message: c,
                                type: "error"
                            }), f && (0, l.jsx)(eH, {
                                className: o,
                                message: f,
                                type: "warn"
                            }), !c && x && (0, l.jsx)("div", {
                                className: "dc-input__hint dc-input__hint--relative",
                                children: (0, l.jsx)(et.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: x
                                })
                            }), u && (0, l.jsx)("div", {
                                className: "dc-input__counter",
                                children: (0, l.jsxs)(et.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: [T, g ? `/${g}` : ""]
                                })
                            })]
                        }), s && !c && (0, l.jsx)("div", {
                            className: "dc-input__bottom-label",
                            children: (0, l.jsx)(et.Z, {
                                size: "xs",
                                color: "less-prominent",
                                children: s
                            })
                        })]
                    })
                });
            eV.displayName = "Input";
            var eG = s("66163"),
                eq = s("73935"),
                eY = s("14117");
            let eW = e => {
                    let {
                        children: t,
                        header: s,
                        id: n,
                        is_from_app: a = !1,
                        is_open: r,
                        onClickClose: o,
                        portal_id: d,
                        header_classname: c,
                        has_return_icon: _,
                        onReturn: u
                    } = e, x = i.useRef(null), h = (0, l.jsxs)("div", {
                        ref: x,
                        id: n,
                        className: D()("dc-page-overlay", {
                            "dc-page-overlay-portal": !!d
                        }),
                        children: [s && (0, l.jsx)("div", {
                            className: D()("dc-page-overlay__header", {
                                "dc-page-app__header ": a
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "dc-page-overlay__header-wrapper",
                                children: [(0, l.jsxs)("div", {
                                    className: D()("dc-page-overlay__header-title", c),
                                    children: [_ && (0, l.jsx)(eY.Z, {
                                        onClick: u,
                                        className: "dc-modal-header__icon"
                                    }), s]
                                }), !a && (0, l.jsx)("div", {
                                    "data-testid": "dt_page_overlay_header_close",
                                    className: "dc-page-overlay__header-close",
                                    onClick: o || window.history.back,
                                    children: (0, l.jsx)(E.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "dc-page-overlay__content",
                            children: t
                        })]
                    });
                    return d ? eq.createPortal((0, l.jsx)(ek.Z, {
                        appear: !0,
                        in: r,
                        timeout: 250,
                        classNames: {
                            appear: "dc-page-overlay--enter",
                            enter: "dc-page-overlay--enter",
                            enterDone: "dc-page-overlay--enter-done",
                            exit: "dc-page-overlay--exit"
                        },
                        unmountOnExit: !0,
                        children: h
                    }), document.getElementById(d)) : (0, l.jsx)(i.Fragment, {
                        children: h
                    })
                },
                eK = e => {
                    let [t, s] = i.useState(""), {
                        is_onscreen_keyboard_active: n,
                        is_logged_in: a,
                        initial_values: r,
                        api_max_losses: o,
                        onRunButtonClick: d,
                        resetSelfExclusion: c,
                        updateSelfExclusion: _,
                        setRunLimit: u,
                        is_mobile: x
                    } = e;
                    i.useEffect(() => {
                        !a && c()
                    });
                    let h = async e => {
                        if (e.form_max_losses !== o) {
                            let t = await _({
                                max_losses: e.form_max_losses
                            });
                            if (null == t ? void 0 : t.error) {
                                s((0, y.NC)(t.error.message));
                                return
                            }
                        }
                        u(e.run_limit), d()
                    };
                    return (0, l.jsx)("div", {
                        className: "db-self-exclusion",
                        children: (0, l.jsxs)("div", {
                            className: "db-self-exclusion__content",
                            children: [(0, l.jsx)("div", {
                                className: "db-self-exclusion__info",
                                children: (0, y.NC)("Enter limits to stop your bot from trading when any of these conditions are met.")
                            }), (0, l.jsx)(eO.J9, {
                                initialValues: r,
                                validate: e => {
                                    let t = {},
                                        n = /^\d+(\.\d+)?$/,
                                        a = /^\d+$/,
                                        l = (0, y.NC)("This field is required."),
                                        i = (0, y.NC)("Should be a valid number"),
                                        r = (0, y.NC)("Reached maximum number of digits"),
                                        d = (0, y.NC)("Reached maximum number of decimals"),
                                        c = (0, y.NC)("Please enter a number between 0 and {{api_max_losses}}.", {
                                            api_max_losses: o
                                        });
                                    return ["run_limit", "form_max_losses"].forEach(s => {
                                        !e[s] && (t[s] = l)
                                    }), ["run_limit", "form_max_losses"].forEach(s => {
                                        e[s] && (n.test(e[s]) ? +e[s] > 0x9184e729fff && (t[s] = r) : t[s] = i)
                                    }), ["run_limit"].forEach(s => {
                                        e[s] && !a.test(e[s]) && (t[s] = i)
                                    }), ["form_max_losses"].forEach(s => {
                                        let n = e[s].toString().split(".")[1];
                                        (n && n.length || 0) > 2 && (t[s] = d)
                                    }), ["form_max_losses"].forEach(n => {
                                        0 !== o && o !== e[n] && o < e[n] ? t[n] = c : s("")
                                    }), t
                                },
                                onSubmit: h,
                                children: e => {
                                    let {
                                        values: s,
                                        touched: a,
                                        errors: i,
                                        isValid: r,
                                        handleChange: o
                                    } = e;
                                    return (0, l.jsxs)(eO.l0, {
                                        children: [(0, l.jsx)("div", {
                                            className: "db-self-exclusion__form-group",
                                            children: (0, l.jsx)(eO.gN, {
                                                name: "form_max_losses",
                                                children: e => {
                                                    let {
                                                        field: n
                                                    } = e;
                                                    return (0, l.jsx)(eV, { ...n,
                                                        className: "db-self-exclusion__input",
                                                        type: "text",
                                                        label: (0, y.NC)("Daily loss limit"),
                                                        value: s.form_max_losses,
                                                        onChange: o,
                                                        error: t || a[n.name] && i[n.name],
                                                        hint: (0, y.NC)("Limits your potential losses for the day across all Deriv platforms.")
                                                    })
                                                }
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "db-self-exclusion__form-group",
                                            children: (0, l.jsx)(eO.gN, {
                                                name: "run_limit",
                                                children: e => {
                                                    let {
                                                        field: t
                                                    } = e;
                                                    return (0, l.jsx)(eV, { ...t,
                                                        className: "db-self-exclusion__input",
                                                        type: "text",
                                                        label: (0, y.NC)("Maximum consecutive trades"),
                                                        value: s.run_limit,
                                                        onChange: o,
                                                        error: a[t.name] && i.run_limit,
                                                        hint: (0, y.NC)("Maximum number of trades your bot will execute for this run.")
                                                    })
                                                }
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: D()("db-self-exclusion__footer", {
                                                "db-self-exclusion__footer--relative": x && n
                                            }),
                                            children: (0, l.jsxs)("div", {
                                                className: "db-self-exclusion__footer-btn-group",
                                                children: [(0, l.jsx)(eI.Z, {
                                                    large: !0,
                                                    text: (0, y.NC)("Cancel"),
                                                    onClick: c,
                                                    secondary: !0,
                                                    type: "button"
                                                }), (0, l.jsx)(eI.Z, {
                                                    type: "submit",
                                                    large: !0,
                                                    text: (0, y.NC)("Apply and run"),
                                                    is_disabled: !r || !s.run_limit || !s.form_max_losses || "" !== t,
                                                    primary: !0
                                                })]
                                            })
                                        })]
                                    })
                                }
                            })]
                        })
                    })
                },
                eJ = (0, r.Pi)(e => {
                    let {
                        onRunButtonClick: t
                    } = e, {
                        self_exclusion: s
                    } = (0, p.oR)(), {
                        ui: n,
                        client: a
                    } = (0, p.oR)(), {
                        is_restricted: i,
                        resetSelfExclusion: r,
                        initial_values: o,
                        api_max_losses: d,
                        run_limit: c,
                        setRunLimit: _
                    } = s, {
                        is_onscreen_keyboard_active: u
                    } = n, {
                        is_logged_in: x,
                        updateSelfExclusion: h,
                        virtual_account_loginid: m
                    } = a, {
                        isDesktop: j
                    } = (0, f.F)(), v = {
                        is_onscreen_keyboard_active: u,
                        is_logged_in: x,
                        initial_values: o,
                        api_max_losses: d,
                        onRunButtonClick: t,
                        resetSelfExclusion: r,
                        updateSelfExclusion: h,
                        setRunLimit: _,
                        virtual_account_loginid: m,
                        run_limit: c,
                        isDesktop: j
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: j ? (0, l.jsx)(N.Z, {
                            is_open: i,
                            has_close_icon: !0,
                            width: "440px",
                            height: "374px",
                            toggleModal: r,
                            className: "db-self-exclusion__modal",
                            title: (0, y.NC)("Limits"),
                            children: (0, l.jsx)(eK, { ...v
                            })
                        }) : (0, l.jsx)(eX, {
                            is_visible: i,
                            className: "limits__wrapper",
                            keyname: "limitis__wrapper",
                            children: (0, l.jsx)(eW, {
                                header: (0, y.NC)("Limits"),
                                onClickClose: r,
                                children: (0, l.jsx)(eG.Z, {
                                    children: (0, l.jsx)(eF.Z, {
                                        className: "limits__wrapper--is-mobile",
                                        children: (0, l.jsx)(eK, { ...v
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            eJ.propTypes = {
                onRunButtonClick: eU().func
            };
            var eQ = s("65342"),
                e0 = s("51729");
            let e1 = e => {
                let {
                    anchor: t = "left",
                    children: s,
                    className: n,
                    contentClassName: a,
                    footer: r,
                    header: o,
                    width: d = 250,
                    zIndex: c = 4,
                    ..._
                } = e, [u, x] = i.useState(_.is_open), {
                    isDesktop: h
                } = (0, f.F)();
                return i.useEffect(() => {
                    x(_.is_open)
                }, [_.is_open]), (0, l.jsxs)("div", {
                    "data-testid": "drawer",
                    className: D()("dc-drawer", n, {
                        [`dc-drawer--${t}`]: h,
                        "dc-drawer--open": u
                    }),
                    style: {
                        zIndex: c,
                        transform: u && h ? "left" === t ? `translateX(calc(${d}px - 16px))` : `translateX(calc(-${d}px + 16px))` : void 0
                    },
                    children: [(0, l.jsx)("div", {
                        className: D()("dc-drawer__toggle", {
                            "dc-drawer__toggle--open": u
                        }),
                        onClick: () => {
                            x(!u), _.toggleDrawer && _.toggleDrawer(!u)
                        },
                        children: h ? (0, l.jsx)(eQ.Z, {
                            className: D()("dc-drawer__toggle-icon", {
                                [`dc-drawer__toggle-icon--${t}`]: h
                            })
                        }) : (0, l.jsx)(e0.Z, {
                            iconSize: "sm",
                            className: "dc-drawer__toggle-icon"
                        })
                    }), (0, l.jsxs)("div", {
                        className: D()("dc-drawer__container", {
                            [`dc-drawer__container--${t}`]: h
                        }),
                        children: [o && (0, l.jsx)("div", {
                            className: "dc-drawer__header",
                            children: o
                        }), (0, l.jsx)("div", {
                            className: D()("dc-drawer__content", a),
                            children: s
                        }), r && (0, l.jsx)("div", {
                            className: "dc-drawer__footer",
                            children: r
                        })]
                    })]
                })
            };
            var e2 = s("87537"),
                e5 = s("62873"),
                e3 = s("88817"),
                e8 = s("50220");
            let e4 = (0, y.NC)("Your bot is running and waiting for a signal to buy a contract."),
                e7 = () => (0, l.jsxs)("div", {
                    className: "db-contract-card-running-loader",
                    children: [(0, l.jsx)(e8.Z, {
                        id: "rotate-icon",
                        fontSize: 16,
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(et.Z, {
                        color: "less-prominent",
                        lineHeight: "xs",
                        size: "xs",
                        weight: "bold",
                        align: "center",
                        className: "dc-contract-card-message",
                        children: e4
                    })]
                }),
                e6 = e => {
                    let {
                        speed: t = 3,
                        contract_stage: s
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: s === es.K.RUNNING ? (0, l.jsx)(e7, {}) : (0, l.jsxs)(U.ZP, {
                            height: 153,
                            width: 334,
                            speed: t,
                            backgroundColor: "var(--general-section-2)",
                            foregroundColor: "var(--general-hover)",
                            "data-testid": "contract-card-loader",
                            children: [(0, l.jsx)("rect", {
                                x: "12",
                                y: "15",
                                rx: "0",
                                ry: "0",
                                width: "41",
                                height: "25"
                            }), (0, l.jsx)("rect", {
                                x: "61",
                                y: "24",
                                rx: "0",
                                ry: "0",
                                width: "91",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "15",
                                rx: "0",
                                ry: "0",
                                width: "41",
                                height: "25"
                            }), (0, l.jsx)("rect", {
                                x: "229",
                                y: "24",
                                rx: "0",
                                ry: "0",
                                width: "91",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "48",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "64",
                                rx: "0",
                                ry: "0",
                                width: "308",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "80",
                                rx: "0",
                                ry: "0",
                                width: "308",
                                height: "1"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "89",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "105",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "121",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "137",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "89",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "105",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "121",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "137",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            })]
                        })
                    })
                };
            var e9 = s("91761"),
                te = s("48766"),
                tt = s("54802"),
                ts = s("23406");
            let tn = i.memo(e => {
                    let {
                        className: t,
                        value: s
                    } = e, [n, a] = i.useState(!1), [r, o] = i.useState({
                        icon: "",
                        previous_icon: ""
                    }), {
                        icon: d,
                        previous_icon: c,
                        previous_value: _
                    } = r, u = !isNaN(Number(r.value)) && !isNaN(Number(s)), x = i.useRef();
                    return i.useEffect(() => (a(!0), o(e => {
                        let t = Number(e.value) < Number(s) ? (0, l.jsx)(tt.Z, {
                            fill: "var(--text-profit-success)",
                            iconSize: "sm"
                        }) : (0, l.jsx)("div", {
                            style: {
                                position: "relative",
                                top: "-0.7rem"
                            },
                            children: (0, l.jsx)(ts.Z, {
                                fill: "var(--text-loss-danger)",
                                iconSize: "sm"
                            })
                        });
                        return {
                            icon: u ? t : "",
                            previous_icon: e.icon,
                            previous_value: e.value,
                            value: s
                        }
                    }), clearTimeout(x.current), x.current = setTimeout(() => {
                        a(!1)
                    }, 3e3), () => clearTimeout(x.current)), [s]), (0, l.jsx)("div", {
                        className: t,
                        "data-testid": "dt_arrow_indicator",
                        children: u && n ? (0, l.jsx)("div", {
                            children: _ === Number(s) ? c : d
                        }) : null
                    })
                }),
                ta = e => {
                    let {
                        currency: t
                    } = e;
                    return (0, l.jsx)(et.Z, {
                        className: "dc-currency-badge",
                        color: "colored-background",
                        lineHeight: "unset",
                        size: "xxxs",
                        weight: "bold",
                        children: (0, x.O$T)(t)
                    })
                };
            var tl = s("73728");
            let ti = e => {
                    let {
                        className: t,
                        danger_limit: s = 20,
                        is_clockwise: n = !1,
                        progress: a = 0,
                        radius: i = 22,
                        stroke: r = 3,
                        warning_limit: o = 50
                    } = e, d = i - r / 2, c = 2 * d * Math.PI;
                    return (0, l.jsxs)("div", {
                        className: D()("dc-circular-progress", t),
                        children: [(0, l.jsx)("div", {
                            className: "dc-circular-progress__icon",
                            children: (0, l.jsx)(tl.Z, {
                                iconSize: "xs"
                            })
                        }), (0, l.jsx)("svg", {
                            height: 2 * i,
                            width: 2 * i,
                            children: (0, l.jsx)("circle", {
                                className: D()("dc-circular-progress__bar", {
                                    "dc-circular-progress--clockwise": n,
                                    "dc-circular-progress__bar--warning": a <= o && a > s,
                                    "dc-circular-progress__bar--danger": a <= s
                                }),
                                cx: i,
                                cy: i,
                                fill: "transparent",
                                r: d,
                                strokeDasharray: `${c} ${c}`,
                                strokeWidth: r,
                                style: {
                                    strokeDashoffset: c - a / 100 * c
                                }
                            })
                        })]
                    })
                },
                tr = e => {
                    let {
                        end_time: t,
                        format: s,
                        getCardLabels: n,
                        start_time: a
                    } = e;
                    if (!t || a.unix() > +t) return (0, l.jsx)(i.Fragment, {
                        children: ""
                    });
                    let {
                        days: r,
                        timestamp: o
                    } = (0, x.LUK)((0, x.QRc)(a.unix(), t), s), d = o;
                    r > 0 && (d = `${r} ${r>1?n().DAYS:n().DAY} ${o}`);
                    let c = /^00:00$/.test(d);
                    return (0, l.jsx)(i.Fragment, {
                        children: !c && (0, l.jsx)("div", {
                            className: "dc-remaining-time",
                            children: d
                        })
                    })
                },
                to = e => {
                    let {
                        is_on: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()("dc-tick-progress__tick", {
                            "dc-tick-progress__tick--on": t
                        })
                    })
                },
                td = e => {
                    let {
                        className: t,
                        rows: s = 2,
                        columns: n = 5,
                        size: a = 10,
                        value: i = 0
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()("dc-tick-progress", t),
                        style: {
                            gridTemplateRows: `repeat(${s}, 1fr)`,
                            gridTemplateColumns: `repeat(${n}, 1fr)`
                        },
                        children: Array(a).fill(null).map((e, t) => (0, l.jsx)(to, {
                            is_on: t < Number(i)
                        }, t))
                    })
                },
                tc = e => {
                    let {
                        current_tick: t,
                        getCardLabels: s,
                        ticks_count: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "dc-progress-slider__ticks",
                        children: [(0, l.jsxs)(et.Z, {
                            styles: {
                                lineHeight: "18px"
                            },
                            size: "xxs",
                            className: "dc-progress-slider__ticks-caption",
                            children: [s().TICK, " ", t]
                        }), (0, l.jsx)(td, {
                            columns: 5,
                            rows: n > 5 ? 2 : 1,
                            size: n,
                            value: t
                        })]
                    })
                },
                t_ = e => {
                    let {
                        className: t,
                        current_tick: s,
                        getCardLabels: n,
                        is_loading: a,
                        start_time: r,
                        expiry_time: o,
                        server_time: d,
                        ticks_count: c
                    } = e, _ = (0, x.dq6)(d, Number(r), Number(o));
                    return (0, l.jsx)("div", {
                        className: D()("dc-progress-slider-mobile", t),
                        children: c ? (0, l.jsx)(tc, {
                            current_tick: s,
                            getCardLabels: n,
                            ticks_count: c
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(et.Z, {
                                size: "xxs",
                                children: (0, l.jsx)(tr, {
                                    end_time: o,
                                    getCardLabels: n,
                                    start_time: d
                                })
                            }), a || _ < 1 ? (0, l.jsx)("div", {
                                className: "dc-progress-slider-mobile__infinite-loader",
                                children: (0, l.jsx)("div", {
                                    className: "dc-progress-slider-mobile__infinite-loader--indeterminate"
                                })
                            }) : (0, l.jsx)(ti, {
                                className: "dc-progress-slider-mobile__timer",
                                danger_limit: 20,
                                progress: _,
                                warning_limit: 50
                            })]
                        })
                    })
                };
            var tu = s("96672");
            let tx = e => {
                    let {
                        getCardLabels: t,
                        is_contract_won: s
                    } = e;
                    return (0, l.jsxs)("span", {
                        className: D()("dc-result__caption", {
                            "dc-result__caption--won": s,
                            "dc-result__caption--lost": !s
                        }),
                        children: [(0, l.jsx)("div", {
                            className: "dc-result__icon",
                            children: (0, l.jsx)(tu.Z, {
                                iconSize: "sm",
                                fill: s ? "var(--text-profit-success)" : "var(--text-loss-danger)"
                            })
                        }), t().CLOSED]
                    })
                },
                th = e => {
                    let {
                        className: t,
                        children: s,
                        header: n,
                        is_crypto: a,
                        is_loss: i,
                        is_won: r
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: D()("dc-contract-card-item", t),
                        children: [(0, l.jsx)("div", {
                            className: "dc-contract-card-item__header",
                            children: n
                        }), (0, l.jsx)("div", {
                            className: D()("dc-contract-card-item__body", {
                                "dc-contract-card-item__body--crypto": a,
                                "dc-contract-card-item__body--loss": i,
                                "dc-contract-card-item__body--profit": r
                            }),
                            children: s
                        })]
                    })
                };
            var tm = s("54996"),
                tp = s("94145");
            let tj = i.forwardRef((e, t) => {
                let {
                    children: s,
                    is_visible: n,
                    left: a,
                    toggleDialog: i,
                    toggle_ref: r,
                    top: o
                } = e;
                (0, ej.t)(t, i, e => {
                    var t;
                    return n && !(null == r ? void 0 : null === (t = r.current) || void 0 === t ? void 0 : t.contains(e.target))
                });
                let d = (0, l.jsx)(ek.Z, { in: n,
                        classNames: {
                            enter: "dc-contract-card-dialog--enter",
                            enterDone: "dc-contract-card-dialog--enter-done",
                            exit: "dc-contract-card-dialog--exit"
                        },
                        timeout: 150,
                        unmountOnExit: !0,
                        children: (0, l.jsx)("div", {
                            ref: t,
                            className: "dc-contract-card-dialog",
                            style: {
                                top: o,
                                left: `calc(${a}px + 32px)`
                            },
                            children: s
                        })
                    }),
                    c = document.getElementById("deriv_app");
                return eq.createPortal(d, c || document.body)
            });
            tj.displayName = "ContractCardDialog";
            var tv = s("11527"),
                tb = s("86278"),
                tg = s("89606"),
                ty = s("14244");
            let tf = e => {
                    let {
                        alignment: t,
                        children: s,
                        className: n,
                        classNameIcon: a,
                        has_error: r,
                        icon: o,
                        message: d
                    } = e, [c, _] = (0, tb.X)(), u = D()(a, o);
                    return (0, l.jsxs)("span", {
                        className: D()(n, "dc-tooltip", {
                            "dc-tooltip--error": r
                        }),
                        "data-tooltip": d || void 0,
                        "data-tooltip-pos": t,
                        children: ["info" === o && (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(ty.Z, {
                                className: u,
                                ref: c
                            }), (0, l.jsx)(ty.Z, {
                                className: D()(`${a}-balloon-icon`, "dc-tooltip__balloon-icon", {
                                    "dc-tooltip__balloon-icon--show": _
                                })
                            })]
                        }), "question" === o && (0, l.jsx)(tg.J, {
                            icon: "IcUnknown",
                            className: u
                        }), "dot" === o && (0, l.jsx)(tg.J, {
                            icon: "IcCircle",
                            className: u,
                            size: 4
                        }), s]
                    })
                },
                tN = e => {
                    let {
                        decrementValue: t,
                        id: s,
                        incrementValue: n,
                        max_is_disabled: a,
                        min_is_disabled: r,
                        is_incrementable_on_long_press: o,
                        onLongPressEnd: d,
                        type: c
                    } = e, _ = i.useRef(), u = i.useRef(), x = i.useRef(!1), h = e => t => {
                        u.current = setTimeout(() => {
                            x.current = !0;
                            let s = 1;
                            e(t, 1), _.current = setInterval(() => {
                                e(t, ++s)
                            }, 50)
                        }, 300)
                    }, m = () => {
                        clearInterval(_.current), clearTimeout(u.current), d && x.current && d(), x.current = !1
                    }, p = e => o ? {
                        onContextMenu: e => e.preventDefault(),
                        onTouchStart: h(e),
                        onTouchEnd: m,
                        onMouseDown: h(e),
                        onMouseUp: m
                    } : {};
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(eI.Z, {
                            id: `${s}_add`,
                            className: D()("dc-input-wrapper__button dc-input-wrapper__button--increment", {
                                "dc-input-wrapper__button--disabled": !!a
                            }),
                            disabled: !!a,
                            onClick: n,
                            tabIndex: -1,
                            "aria-label": "Increment value",
                            type: c,
                            ...p(n),
                            children: (0, l.jsx)(tg.J, {
                                icon: "IcAdd",
                                className: "dc-input-wrapper__icon dc-input-wrapper__icon--plus",
                                color: a ? "disabled" : void 0
                            })
                        }), (0, l.jsx)(eI.Z, {
                            id: `${s}_sub`,
                            className: D()("dc-input-wrapper__button dc-input-wrapper__button--decrement", {
                                "dc-input-wrapper__button--disabled": !!r
                            }),
                            disabled: !!r,
                            onClick: t,
                            tabIndex: -1,
                            "aria-label": "Decrement value",
                            type: c,
                            ...p(t),
                            children: (0, l.jsx)(tg.J, {
                                icon: "IcMinus",
                                className: "dc-input-wrapper__icon dc-input-wrapper__icon--minus",
                                color: r ? "disabled" : void 0
                            })
                        })]
                    })
                },
                tC = e => {
                    let {
                        ariaLabel: t,
                        changeValue: s,
                        checked: n,
                        className: a,
                        classNameDynamicSuffix: r,
                        classNameInlinePrefix: o,
                        current_focus: d,
                        data_testid: c,
                        data_tip: _,
                        data_value: u,
                        display_value: h,
                        fractional_digits: m,
                        id: p,
                        inline_prefix: j,
                        inputmode: v,
                        is_autocomplete_disabled: b,
                        is_disabled: g,
                        is_hj_whitelisted: y,
                        is_incrementable: f,
                        is_read_only: N,
                        max_length: C,
                        name: w,
                        onBlur: k,
                        onClick: T,
                        onKeyPressed: E,
                        placeholder: S,
                        required: I,
                        setCurrentFocus: A,
                        type: R
                    } = e, L = i.useRef(null);
                    return i.useEffect(() => {
                        if (d === w) {
                            var e;
                            null == L || null === (e = L.current) || void 0 === e || e.focus()
                        }
                    }, [d, w]), (0, l.jsxs)("div", {
                        className: r,
                        children: [j ? (0, l.jsx)("div", {
                            className: o,
                            children: (0, l.jsx)(et.Z, {
                                className: D()(o ? `${o}--symbol` : "", {
                                    disabled: !!g
                                }),
                                size: "xs",
                                children: "UST" === j ? (0, x.O$T)(j) : j
                            })
                        }) : null, (0, l.jsx)("input", {
                            autoComplete: b ? "off" : void 0,
                            checked: n,
                            className: D()(a),
                            "data-for": `error_tooltip_${w}`,
                            "data-hj-whitelist": y,
                            "data-tip": _,
                            "data-testid": c,
                            "data-value": u,
                            disabled: !!g,
                            id: p,
                            maxLength: m && C ? C + m + 1 : C,
                            name: w,
                            onBlur: e => {
                                null == A || A(null), null == k || k(e)
                            },
                            onChange: e => {
                                if (-1 !== navigator.userAgent.indexOf("Safari") && "checkbox" !== R) {
                                    let t = e.target.selectionStart;
                                    s(e, e => {
                                        e.target.selectionEnd = t
                                    })
                                } else s(e)
                            },
                            onClick: T,
                            onFocus: () => null == A ? void 0 : A(w),
                            onKeyDown: f ? E : void 0,
                            placeholder: S || void 0,
                            readOnly: N,
                            ref: L,
                            required: I || void 0,
                            inputMode: v,
                            type: "number" === R ? "text" : R,
                            value: h ? ? "",
                            "aria-label": t,
                            "data-lpignore": "password" !== R
                        })]
                    })
                },
                tw = e => {
                    let {
                        ariaLabel: t,
                        checked: s,
                        className: n,
                        classNameDynamicSuffix: a,
                        classNameInlinePrefix: r,
                        classNameInput: o,
                        classNamePrefix: d,
                        classNameWrapper: c,
                        currency: _,
                        current_focus: u,
                        data_tip: h,
                        data_value: m,
                        decimal_point_change: p,
                        error_messages: j,
                        error_message_alignment: v,
                        fractional_digits: b,
                        helper: g,
                        icon: y,
                        id: f,
                        inline_prefix: N,
                        is_autocomplete_disabled: C,
                        is_disabled: w,
                        is_error_tooltip_hidden: k = !1,
                        is_float: T,
                        is_hj_whitelisted: E = !1,
                        is_incrementable: S,
                        is_incrementable_on_long_press: I,
                        is_negative_disabled: A,
                        is_read_only: R = !1,
                        is_signed: L = !1,
                        is_unit_at_right: M = !1,
                        inputmode: O,
                        increment_button_type: U,
                        label: F,
                        max_length: Z,
                        max_value: z,
                        min_value: B,
                        name: P = "",
                        format: X,
                        onBlur: H,
                        onChange: $,
                        onClick: V,
                        onClickInputWrapper: G,
                        placeholder: q,
                        prefix: Y,
                        required: W,
                        setCurrentFocus: K,
                        type: J = "",
                        unit: Q,
                        value: ee,
                        data_testid: es
                    } = e, [en, ea] = i.useState(), el = j && !!j.length && !k, ei = z && (+ee >= +z || Number(en) >= +z), er = B && (+ee <= +B || Number(en) <= +B), eo = !0, ed = e => {
                        let t = "string" == typeof e ? e.split(".") : e.toString().split(".");
                        return t && t.length > 1 ? t[1].length : 0
                    }, ec = e => {
                        let t = e;
                        return B && (t = Math.max(t, B)), z && (t = Math.min(t, z)), t
                    }, e_ = (e, t) => {
                        let s;
                        if (ei) return;
                        let n = en || ee.toString(),
                            a = n ? ed(n) : 0,
                            l = !!_ && (0, x.oS6)(_);
                        if (t) {
                            let e = Math.min(t, Math.max(t, 10)) / 10 * +ee / 100;
                            s = parseFloat(ec(parseFloat(n || "0") + Math.abs(e)).toString()).toFixed(a)
                        } else s = l || !_ && T ? parseFloat((parseFloat(n || "0") + parseFloat((1 * 10 ** (0 - (p || a))).toString())).toString()).toFixed(p || a) : parseFloat(((+n || 0) + 1).toString()).toFixed(a);
                        eh(s, !!t)
                    }, eu = e => {
                        let t;
                        let s = en || (null == ee ? void 0 : ee.toString()),
                            n = s ? ed(s) : 0,
                            a = !!_ && (0, x.oS6)(_);
                        if (e) {
                            let a = Math.min(e, Math.max(e, 10)) / 10 * +ee / 100;
                            t = parseFloat(ec(parseFloat(s || "0") - Math.abs(a)).toString()).toFixed(n)
                        } else t = a || !_ && T ? parseFloat((parseFloat(s || "0") - parseFloat((1 * 10 ** (0 - (p || n))).toString())).toString()).toFixed(p || n) : parseFloat(((+s || 0) - 1).toString()).toFixed(n);
                        return t
                    }, ex = (e, t) => {
                        if (er) return;
                        let s = eu(t);
                        if (!A || !(0 > +s)) eh(s, !!t)
                    }, eh = (e, t) => {
                        let s = X ? X(e) : e;
                        t ? ea(s) : (L && /^\d+/.test(s) && +s > 0 && (s = `+${s}`), null == $ || $({
                            target: {
                                value: s,
                                name: P
                            }
                        }))
                    }, em = en || ee;
                    Q && (em = M ? `${ee} ${Q}` : `${Q} ${ee}`);
                    let ep = S && ("number" === J || "tel" === J),
                        ej = (0, l.jsx)(tC, {
                            ariaLabel: t,
                            changeValue: (e, t) => {
                                if (Q && (e.target.value = e.target.value.replace(Q, "").trim()), e.target.value !== ee || "checkbox" === J) {
                                    if ("number" === J || "tel" === J) {
                                        let t = !e.target.value || "" === e.target.value || "  " === e.target.value,
                                            s = L ? "^([+-.0-9])" : "^";
                                        e.target.value = e.target.value.replace(",", ".");
                                        let n = RegExp(`${s}(\\d*)?${T?"(\\.\\d+)?":""}$`).test(e.target.value),
                                            a = T && RegExp(`${s}(\\.|\\d+\\.)?$`).test(e.target.value),
                                            l = RegExp(`${s}(\\d+)?\\.(\\d+)?[0]+$`).test(e.target.value),
                                            i = /e/.test(`${+e.target.value}`);
                                        if (Z && (b || 0 === b) && (eo = RegExp(`${s}(\\d{0,${Z}})(\\${b&&"."}\\d{0,${b}})?$`).test(e.target.value)), (n || t) && eo) e.target.value = t || L || l || i || "tel" === J ? e.target.value : +e.target.value;
                                        else if (!a) {
                                            e.target.value = ee;
                                            return
                                        }
                                    }
                                    null == $ || $(e), t && t(e)
                                }
                            },
                            checked: s,
                            current_focus: u,
                            className: D()(ep ? "dc-input-wrapper__input" : "", N ? "input--has-inline-prefix" : "", "input", {
                                "input--error": j && !!j.length
                            }, o),
                            classNameDynamicSuffix: a,
                            classNameInlinePrefix: r,
                            data_tip: h,
                            data_testid: es,
                            data_value: m,
                            display_value: em,
                            fractional_digits: b,
                            has_error: el,
                            id: f,
                            inline_prefix: N,
                            is_autocomplete_disabled: C,
                            is_disabled: w,
                            is_hj_whitelisted: E,
                            is_incrementable: ep,
                            is_read_only: R,
                            max_length: Z,
                            name: P,
                            onBlur: H,
                            onClick: V,
                            onKeyPressed: e => {
                                38 === e.keyCode && e_(), 40 === e.keyCode && ex()
                            },
                            placeholder: q,
                            required: W,
                            setCurrentFocus: K,
                            type: J,
                            inputmode: O
                        }),
                        ev = (0, l.jsx)(tN, {
                            id: f,
                            max_is_disabled: ei || !!w,
                            incrementValue: e_,
                            min_is_disabled: er || A && 0 > +eu() || !!w,
                            decrementValue: ex,
                            onLongPressEnd: () => {
                                let e = X ? X(en) : en;
                                null == $ || $({
                                    target: {
                                        value: e || "",
                                        name: P
                                    }
                                }), ea("")
                            },
                            is_incrementable_on_long_press: I,
                            type: U
                        }),
                        eb = (0, l.jsxs)(tf, {
                            className: D()("trade-container__tooltip", {
                                "dc-tooltip--with-label": F
                            }),
                            alignment: v || "left",
                            message: el ? j[0] : null,
                            has_error: el,
                            children: [!!F && (0, l.jsx)("label", {
                                htmlFor: P,
                                className: "dc-input-field__label",
                                children: F
                            }), !!g && (0, l.jsx)(et.Z, {
                                size: "xxs",
                                color: "less-prominent",
                                weight: "lighter",
                                children: g
                            }), ep ? (0, l.jsxs)("div", {
                                className: D()("dc-input-wrapper", {
                                    "dc-input-wrapper--disabled": !!w
                                }, c),
                                children: [ev, ej]
                            }) : ej]
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [!!Y && (0, l.jsx)("div", {
                            className: d,
                            children: (0, l.jsx)("span", {
                                className: D()(`${d}--symbol`, "symbols"),
                                children: (0, x.O$T)(_)
                            })
                        }), (0, l.jsxs)("div", {
                            className: D()("dc-input-field", n),
                            onClick: G,
                            children: [y && (0, l.jsx)(y, {
                                onClick: V
                            }), eb]
                        })]
                    })
                },
                tk = e => {
                    let {
                        addToast: t,
                        checkbox_tooltip_label: s,
                        classNameBubble: n,
                        classNameInlinePrefix: a,
                        classNameInput: r,
                        className: o,
                        currency: d,
                        current_focus: c,
                        defaultChecked: _,
                        error_message_alignment: u,
                        error_messages: h,
                        is_disabled: m,
                        is_single_currency: p,
                        is_negative_disabled: j,
                        is_input_hidden: v,
                        label: b,
                        max_value: g,
                        name: y,
                        onChange: f,
                        removeToast: N,
                        setCurrentFocus: C,
                        tooltip_alignment: w,
                        tooltip_label: k,
                        value: T
                    } = e, E = i.useRef(null), S = i.useRef(null), [I, A] = i.useState(_), R = `has_${y}`;
                    i.useEffect(() => {
                        A(_)
                    }, [_]), i.useEffect(() => {
                        if ((0, x.tqC)()) {
                            let e = () => {
                                "function" == typeof N && N(`${y}__error`)
                            };
                            if ((null == h ? void 0 : h.length) !== void 0 && (null == h ? void 0 : h.length) > 0) return "function" == typeof t && t({
                                key: `${y}__error`,
                                content: String(h),
                                type: "error"
                            }), () => {
                                e()
                            }
                        }
                    }, [h, t, N, y]);
                    let L = () => {
                            setTimeout(() => {
                                var e, t, s, n;
                                let a = null === (s = S.current) || void 0 === s ? void 0 : null === (t = s.nextSibling) || void 0 === t ? void 0 : null === (e = t.querySelector) || void 0 === e ? void 0 : e.call(t, "input.dc-input-wrapper__input");
                                null == a || null === (n = a.focus) || void 0 === n || n.call(a)
                            })
                        },
                        M = (0, l.jsx)(tw, {
                            className: o,
                            classNameInlinePrefix: a,
                            classNameInput: r,
                            currency: d,
                            current_focus: c || "",
                            error_messages: h,
                            error_message_alignment: u,
                            is_error_tooltip_hidden: (0, x.tqC)(),
                            is_disabled: !!m,
                            fractional_digits: (0, x.i4S)(d),
                            id: `dc_${y}_input`,
                            inline_prefix: p ? d : void 0,
                            is_autocomplete_disabled: !0,
                            is_float: (0, x.i4S)(d) > 0,
                            is_hj_whitelisted: !0,
                            is_incrementable: !0,
                            is_negative_disabled: j,
                            max_length: 10,
                            max_value: g,
                            name: y,
                            onChange: f,
                            onClickInputWrapper: m ? void 0 : () => {
                                !I && (A(!0), null == f || f({
                                    target: {
                                        name: R,
                                        value: !0
                                    }
                                }), L())
                            },
                            type: "number",
                            ariaLabel: "",
                            inputmode: "decimal",
                            value: T,
                            setCurrentFocus: C
                        }),
                        O = (0, l.jsx)(eb, {
                            className: `${y}-checkbox__input`,
                            ref: E,
                            id: `dc_${y}-checkbox_input`,
                            onChange: () => {
                                let e = !I;
                                null == f || f({
                                    target: {
                                        name: R,
                                        value: e
                                    }
                                }), e && L()
                            },
                            name: R,
                            label: b,
                            classNameLabel: `${y}-checkbox__label`,
                            defaultChecked: _,
                            disabled: m
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            ref: S,
                            className: "dc-input-wrapper--inline",
                            children: [s ? (0, l.jsx)(X.Z, {
                                alignment: "left",
                                classNameBubble: "trade-container__popover",
                                is_bubble_hover_enabled: !0,
                                margin: 2,
                                message: s,
                                relative_render: !0,
                                children: O
                            }) : (0, l.jsx)(i.Fragment, {
                                children: O
                            }), k && (0, l.jsx)(X.Z, {
                                alignment: w || "left",
                                classNameBubble: n,
                                icon: "info",
                                id: `dc_${y}-checkbox__tooltip`,
                                is_bubble_hover_enabled: !0,
                                message: k,
                                margin: (0, x.tqC)() || "right" === w ? 0 : 216,
                                zIndex: "9999",
                                ...(0, x.nIE)() ? {
                                    relative_render: "left" === w
                                } : {}
                            })]
                        }), !v && M]
                    })
                },
                tT = e => {
                    let t, s, {
                        addToast: n,
                        contract: a,
                        current_focus: r,
                        error_message_alignment: o,
                        getCardLabels: d,
                        isMobile: c,
                        is_turbos: _,
                        is_accumulator: u,
                        onMouseLeave: h,
                        removeToast: m,
                        setCurrentFocus: p,
                        toggleDialog: j,
                        totalProfit: v
                    } = e;
                    i.useEffect(() => () => a.clearContractUpdateConfigValues(), [a]);
                    let {
                        contract_info: b,
                        contract_update_take_profit: g,
                        has_contract_update_take_profit: f,
                        contract_update_stop_loss: N,
                        has_contract_update_stop_loss: C,
                        updateLimitOrder: w,
                        validation_errors: k
                    } = a, [T, E] = i.useState({
                        contract_update_take_profit: g,
                        contract_update_stop_loss: N
                    }), {
                        buy_price: S,
                        currency: I = "",
                        is_valid_to_cancel: A,
                        is_sold: R
                    } = b, {
                        stop_loss: L,
                        take_profit: M
                    } = (0, x.gNN)(b.limit_order), {
                        contract_update_stop_loss: O,
                        contract_update_take_profit: U
                    } = k, F = {
                        take_profit: f ? U : void 0,
                        stop_loss: C ? O : void 0
                    }, Z = Object.keys(F).some(e => {
                        var t;
                        return null === (t = F[e]) || void 0 === t ? void 0 : t.length
                    }), z = (0, x.L8o)(b.contract_type || "");
                    let B = f ? +g > 0 : null != (t = z ? L : M);
                    let P = C ? +N > 0 : null != (s = M),
                        X = z ? !A && !!(B || P) : !!B,
                        H = e => {
                            let t = ["has_contract_update_take_profit", "has_contract_update_stop_loss", e.has_contract_update_take_profit && "contract_update_take_profit", e.has_contract_update_stop_loss && "contract_update_stop_loss"];
                            return (0, x.eiS)(e, t)
                        },
                        $ = e => {
                            var t;
                            let {
                                name: s,
                                value: n
                            } = e.target;
                            E({ ...T,
                                [s]: n
                            }), null === (t = a.onChange) || void 0 === t || t.call(a, {
                                name: s,
                                value: n
                            })
                        },
                        V = (0, l.jsx)(tk, {
                            addToast: n,
                            removeToast: m,
                            current_focus: r,
                            classNameBubble: "dc-popover__trade-params",
                            classNameInlinePrefix: "dc-contract-card-dialog__input--currency",
                            currency: I,
                            error_messages: F.take_profit,
                            is_input_hidden: c && !f,
                            is_single_currency: !0,
                            is_negative_disabled: !0,
                            defaultChecked: f,
                            label: d().TAKE_PROFIT,
                            name: "contract_update_take_profit",
                            onChange: $,
                            error_message_alignment: o || "right",
                            value: T.contract_update_take_profit,
                            is_disabled: z && !!A,
                            setCurrentFocus: p,
                            tooltip_alignment: c ? "left" : "right",
                            tooltip_label: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "When your profit reaches or exceeds this amount, your trade will be closed automatically."
                            })
                        }),
                        G = (0, x.CeH)(b),
                        q = (0, l.jsx)(tk, {
                            addToast: n,
                            removeToast: m,
                            current_focus: r,
                            classNameBubble: "dc-popover__trade-params",
                            classNameInlinePrefix: "dc-contract-card-dialog__input--currency",
                            currency: I,
                            defaultChecked: C,
                            error_messages: F.stop_loss,
                            is_input_hidden: c && !C,
                            is_single_currency: !0,
                            is_negative_disabled: !0,
                            label: d().STOP_LOSS,
                            max_value: Number(S) - G,
                            name: "contract_update_stop_loss",
                            onChange: $,
                            error_message_alignment: o || "right",
                            value: T.contract_update_stop_loss,
                            is_disabled: !!A,
                            setCurrentFocus: p,
                            tooltip_alignment: c ? "left" : "right",
                            tooltip_label: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "When your loss reaches or exceeds this amount, your trade will be closed automatically."
                            })
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(eG.Z, {
                            children: (0, l.jsxs)("div", {
                                className: "dc-contract-card-dialog__total-profit",
                                children: [(0, l.jsx)(et.Z, {
                                    color: "less-prominent",
                                    size: "xs",
                                    weight: "bold",
                                    children: d().TOTAL_PROFIT_LOSS
                                }), (0, l.jsxs)("div", {
                                    className: D()("dc-contract-card__profit-loss dc-contract-card-item__total-profit-loss-value", {
                                        "dc-contract-card__profit-loss--is-crypto": (0, x.oS6)(I),
                                        "dc-contract-card__profit-loss--negative": v < 0,
                                        "dc-contract-card__profit-loss--positive": v > 0
                                    }),
                                    children: [(0, l.jsx)(e2.Z, {
                                        amount: v,
                                        currency: I,
                                        show_currency: !0
                                    }), !R && (0, l.jsx)(tn, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: v
                                    })]
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: D()("dc-contract-card-dialog__form", {
                                "dc-contract-card-dialog__form--no-stop-loss": u || _
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__input",
                                children: V
                            }), z && (0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__input",
                                children: q
                            }), (0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__button",
                                children: (0, l.jsx)(tv.z, {
                                    onClick: e => {
                                        w(), j(e), null == h || h()
                                    },
                                    disabled: Z || !X || (0, x.xb4)(H((0, x.W9k)(b)), H(e.contract)),
                                    isFullWidth: !0,
                                    children: d().APPLY
                                })
                            })]
                        })]
                    })
                },
                tE = e => {
                    let {
                        addToast: t,
                        contract_id: s,
                        getCardLabels: n,
                        getContractById: a,
                        is_valid_to_cancel: r,
                        should_show_cancellation_warning: o,
                        toggleCancellationWarning: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), [h, m] = i.useState(0), [p, j] = i.useState(0), v = i.useRef(null), b = i.useRef(null), g = a(Number(s));
                    i.useEffect(() => {
                        if (_ && (null == v ? void 0 : v.current) && (null == b ? void 0 : b.current)) {
                            let e = v.current.getBoundingClientRect(),
                                t = b.current.getBoundingClientRect(),
                                s = document.body.getBoundingClientRect(),
                                {
                                    top: n
                                } = e,
                                {
                                    right: a
                                } = e;
                            n + (null == t ? void 0 : t.height) > s.height && (n -= (null == t ? void 0 : t.height) - e.height), a + (null == t ? void 0 : t.width) > s.width ? j(a - (null == t ? void 0 : t.width) - 16) : j(a - 16), m(n)
                        }
                    }, [_]);
                    let y = e => {
                            e.preventDefault(), e.stopPropagation(), (0, x.tqC)() && o && r && t({
                                key: "deal_cancellation_active",
                                content: n().TAKE_PROFIT_LOSS_NOT_AVAILABLE,
                                type: "error"
                            }), !r && u(!_)
                        },
                        f = i.useCallback(y, [y]),
                        N = (0, l.jsx)("div", {
                            className: "dc-contract-card-dialog-toggle__icon",
                            children: (0, l.jsx)(tm.Z, {
                                height: 12,
                                width: 12
                            })
                        });
                    return (0, l.jsxs)("div", {
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: [r && o && (0, x.nIE)() ? (0, l.jsx)(X.Z, {
                            alignment: "right",
                            classNameBubble: "dc-contract-card-dialog__popover-bubble",
                            className: "dc-contract-card-dialog__popover",
                            is_bubble_hover_enabled: !0,
                            margin: 2,
                            zIndex: "2",
                            message: n().TAKE_PROFIT_LOSS_NOT_AVAILABLE,
                            onBubbleClose: () => {
                                null == d || d()
                            },
                            children: (0, l.jsx)("button", {
                                ref: v,
                                className: "dc-contract-card-dialog-toggle",
                                onClick: f,
                                children: N
                            })
                        }) : (0, l.jsx)("button", {
                            ref: v,
                            className: "dc-contract-card-dialog-toggle",
                            onClick: f,
                            children: N
                        }), (0, l.jsx)(eG.Z, {
                            children: (0, l.jsx)(tp.Z, {
                                portal_element_id: "modal_root",
                                visible: _,
                                onClose: f,
                                wrapper_classname: "contract-update",
                                children: (0, l.jsx)(eF.Z, {
                                    className: "contract-update__wrapper",
                                    height_offset: "40px",
                                    children: (0, l.jsx)(tT, {
                                        addToast: t,
                                        contract: g,
                                        getCardLabels: n,
                                        getContractById: a,
                                        isMobile: !0,
                                        toggleDialog: f,
                                        ...c
                                    })
                                })
                            })
                        }), (0, l.jsx)(te.Z, {
                            children: (0, l.jsx)(tj, {
                                ref: b,
                                is_visible: _,
                                left: p,
                                top: h,
                                toggle_ref: v,
                                toggleDialog: f,
                                children: (0, l.jsx)(tT, {
                                    addToast: t,
                                    contract: g,
                                    getCardLabels: n,
                                    getContractById: a,
                                    toggleDialog: f,
                                    ...c
                                })
                            })
                        })]
                    })
                };
            tE.displayName = "ToggleCardDialog";
            let tS = i.memo(tE),
                tI = i.memo(e => {
                    let t, s, {
                            contract_info: n,
                            contract_update: a,
                            currency: r,
                            getCardLabels: o,
                            indicative: d,
                            is_sold: c,
                            is_positions: _,
                            ...u
                        } = e,
                        {
                            buy_price: h,
                            profit: m,
                            limit_order: p,
                            sell_price: j
                        } = n,
                        {
                            take_profit: v
                        } = (0, x.gNN)(a || p),
                        b = (0, x.iBr)(n),
                        {
                            CONTRACT_VALUE: g,
                            STAKE: y,
                            TAKE_PROFIT: f,
                            TOTAL_PROFIT_LOSS: N
                        } = o();
                    return m && (t = +m > 0, s = 0 > +m), (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "dc-contract-card-items-wrapper",
                            children: [(0, l.jsx)(th, {
                                header: y,
                                className: "dc-contract-card__stake",
                                children: (0, l.jsx)(e2.Z, {
                                    amount: h,
                                    currency: r
                                })
                            }), (0, l.jsxs)(th, {
                                header: g,
                                className: "dc-contract-card__current-stake",
                                children: [(0, l.jsx)("div", {
                                    className: D()({
                                        "dc-contract-card--profit": t,
                                        "dc-contract-card--loss": s
                                    }),
                                    children: (0, l.jsx)(e2.Z, {
                                        amount: j || d,
                                        currency: r
                                    })
                                }), !c && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: j || d
                                })]
                            }), (0, l.jsxs)(th, {
                                header: N,
                                is_crypto: (0, x.oS6)(r),
                                is_loss: s,
                                is_won: t,
                                children: [(0, l.jsx)(e2.Z, {
                                    amount: m,
                                    currency: r
                                }), !c && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: m
                                })]
                            }), (0, l.jsxs)(th, {
                                header: f,
                                className: "dc-contract-card__take-profit",
                                children: [v ? (0, l.jsx)(e2.Z, {
                                    amount: v,
                                    currency: r
                                }) : (0, l.jsx)("strong", {
                                    children: "-"
                                }), b && (0, l.jsx)(tS, {
                                    contract_id: n.contract_id,
                                    getCardLabels: o,
                                    is_accumulator: !0,
                                    ...u
                                })]
                            })]
                        }), !!c && (0, l.jsx)(eG.Z, {
                            children: (0, l.jsx)("div", {
                                className: D()("dc-contract-card__status", {
                                    "dc-contract-card__status--accumulator-mobile-positions": _
                                }),
                                children: (0, l.jsx)(tx, {
                                    getCardLabels: o,
                                    is_contract_won: t
                                })
                            })
                        })]
                    })
                }),
                tA = i.memo(e => {
                    var t, s;
                    let n, {
                            contract_info: a,
                            currency: r,
                            is_sold: o,
                            indicative: d,
                            progress_slider_mobile_el: c
                        } = e,
                        {
                            buy_price: _,
                            contract_type: u,
                            sell_price: h,
                            profit: m,
                            multiplier: p
                        } = a,
                        {
                            INDICATIVE_PRICE: j,
                            MULTIPLIER: v,
                            PROFIT_LOSS: b,
                            POTENTIAL_PROFIT_LOSS: g,
                            PAYOUT: f,
                            PURCHASE_PRICE: N
                        } = (0, x.gk9)();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "dc-contract-card-items-wrapper dc-contract-card--lookbacks",
                            children: [(0, l.jsxs)(th, {
                                header: o ? b : g,
                                is_crypto: (0, x.oS6)(r),
                                is_loss: 0 > Number(m),
                                is_won: Number(m) > 0,
                                children: [(0, l.jsx)(e2.Z, {
                                    amount: m,
                                    currency: r
                                }), !o && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: m
                                })]
                            }), (0, l.jsxs)(th, {
                                header: o ? f : j,
                                children: [(0, l.jsx)(e2.Z, {
                                    currency: r,
                                    amount: Number(h || d)
                                }), !o && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: Number(h || d)
                                })]
                            }), (0, l.jsx)(th, {
                                header: N,
                                children: (0, l.jsx)(e2.Z, {
                                    amount: _,
                                    currency: r
                                })
                            }), (0, l.jsx)(th, {
                                header: v,
                                children: `x${p}`
                            }), (0, l.jsx)(eG.Z, {
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__status",
                                    children: o ? (0, l.jsx)(tx, {
                                        getCardLabels: x.gk9,
                                        is_contract_won: "won" === (0, x.efd)(a)
                                    }) : c
                                })
                            })]
                        }), (0, l.jsx)(th, {
                            className: "dc-contract-card-item__payout-limit",
                            children: (0, l.jsx)(et.Z, {
                                align: "center",
                                lineHeightt: "l",
                                size: "xxs",
                                children: (t = u, s = p, n = "", t === x.FTx.LB_PUT ? n = (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "(High - Close)"
                                }) : t === x.FTx.LB_CALL ? n = (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "(Close - Low)"
                                }) : t === x.FTx.LB_HIGH_LOW && (n = (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "(High - Low)"
                                })), (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Payout limit: {{multiplier}} x ",
                                        values: {
                                            multiplier: s
                                        }
                                    }), n]
                                }))
                            })
                        })]
                    })
                }),
                tR = e => {
                    let {
                        contract_info: t,
                        contract_update: s,
                        currency: n,
                        getCardLabels: a,
                        has_progress_slider: r,
                        progress_slider: o,
                        is_mobile: d,
                        is_sold: c,
                        should_show_cancellation_warning: _,
                        toggleCancellationWarning: u,
                        ...h
                    } = e, {
                        buy_price: m,
                        bid_price: p,
                        limit_order: j
                    } = t, {
                        take_profit: v,
                        stop_loss: b
                    } = (0, x.gNN)(s || j), g = (0, x.CeH)(t), y = (0, x.Dlf)(t), f = (0, x.iBr)(t), N = (0, x.vMw)(t), {
                        CONTRACT_COST: C,
                        CONTRACT_VALUE: w,
                        DEAL_CANCEL_FEE: k,
                        STAKE: T,
                        STOP_LOSS: E,
                        TAKE_PROFIT: S,
                        TOTAL_PROFIT_LOSS: I
                    } = a();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: D()({
                                "dc-contract-card-items-wrapper--mobile": d,
                                "dc-contract-card-items-wrapper": !d,
                                "dc-contract-card-items-wrapper--has-progress-slider": r && !c
                            }),
                            children: [(0, l.jsx)(th, {
                                header: C,
                                className: "dc-contract-card__stake",
                                children: (0, l.jsx)(e2.Z, {
                                    amount: m - g,
                                    currency: n
                                })
                            }), (0, l.jsxs)(th, {
                                header: w,
                                className: "dc-contract-card__current-stake",
                                children: [(0, l.jsx)("div", {
                                    className: D()({
                                        "dc-contract-card--profit": N > 0,
                                        "dc-contract-card--loss": N < 0
                                    }),
                                    children: (0, l.jsx)(e2.Z, {
                                        amount: p,
                                        currency: n
                                    })
                                }), !c && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: N
                                })]
                            }), (0, l.jsx)(th, {
                                header: k,
                                className: D()("dc-contract-card__deal-cancel-fee", {
                                    "dc-contract-card__deal-cancel-fee__disabled": !g
                                }),
                                children: g ? (0, l.jsx)(e2.Z, {
                                    amount: g,
                                    currency: n
                                }) : (0, l.jsx)(i.Fragment, {
                                    children: "-"
                                })
                            }), (0, l.jsx)(th, {
                                header: T,
                                className: "dc-contract-card__buy-price",
                                children: (0, l.jsx)(e2.Z, {
                                    amount: m,
                                    currency: n
                                })
                            }), r && d && !c && (0, l.jsx)(th, {
                                className: "dc-contract-card__date-expiry",
                                children: o
                            }), (0, l.jsxs)("div", {
                                className: "dc-contract-card__limit-order-info",
                                children: [(0, l.jsx)(th, {
                                    header: S,
                                    className: "dc-contract-card__take-profit",
                                    children: v ? (0, l.jsx)(e2.Z, {
                                        amount: v,
                                        currency: n
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    })
                                }), (0, l.jsx)(th, {
                                    header: E,
                                    className: "dc-contract-card__stop-loss",
                                    children: b ? (0, l.jsxs)(i.Fragment, {
                                        children: [(0, l.jsx)("strong", {
                                            children: "-"
                                        }), (0, l.jsx)(e2.Z, {
                                            amount: b,
                                            currency: n
                                        })]
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    })
                                }), (f || y) && (0, l.jsx)(tS, {
                                    contract_id: t.contract_id,
                                    getCardLabels: a,
                                    is_valid_to_cancel: y,
                                    should_show_cancellation_warning: _,
                                    toggleCancellationWarning: u,
                                    ...h
                                })]
                            })]
                        }), (0, l.jsxs)(th, {
                            className: "dc-contract-card-item__total-profit-loss",
                            header: I,
                            is_crypto: (0, x.oS6)(n),
                            is_loss: N < 0,
                            is_won: N > 0,
                            children: [(0, l.jsx)(e2.Z, {
                                amount: Math.abs(N),
                                currency: n
                            }), !c && (0, l.jsx)(tn, {
                                className: "dc-contract-card__indicative--movement",
                                value: N
                            })]
                        })]
                    })
                };
            tR.propTypes = {
                addToast: eU().func,
                contract_info: eU().object,
                contract_update: eU().object,
                currency: eU().string,
                current_focus: eU().string,
                error_message_alignment: eU().string,
                getCardLabels: eU().func,
                getContractById: eU().func,
                is_mobile: eU().bool,
                is_sold: eU().bool,
                onMouseLeave: eU().func,
                progress_slider: eU().node,
                removeToast: eU().func,
                setCurrentFocus: eU().func,
                should_show_cancellation_warning: eU().bool,
                toggleCancellationWarning: eU().func,
                totalProfit: eU().number.isRequired,
                has_progress_slider: eU().bool
            };
            let tL = i.memo(tR),
                tM = i.memo(e => {
                    let {
                        contract_info: t,
                        contract_update: s,
                        currency: n,
                        getCardLabels: a,
                        is_sold: r,
                        progress_slider_mobile_el: o,
                        ...d
                    } = e, {
                        bid_price: c,
                        buy_price: _,
                        profit: u,
                        barrier: h,
                        entry_spot_display_value: m,
                        limit_order: p = {},
                        sell_price: j
                    } = t, {
                        take_profit: v
                    } = (0, x.gNN)(s || p), b = (0, x.iBr)(t), g = r ? j : c, {
                        BARRIER: y,
                        CONTRACT_VALUE: f,
                        ENTRY_SPOT: N,
                        TAKE_PROFIT: C,
                        TOTAL_PROFIT_LOSS: w,
                        STAKE: k
                    } = a();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: D()("dc-contract-card-items-wrapper dc-contract-card--turbos"),
                            children: [(0, l.jsx)(th, {
                                className: "dc-contract-card__buy-price",
                                is_crypto: (0, x.oS6)(n),
                                header: k,
                                children: (0, l.jsx)(e2.Z, {
                                    amount: _,
                                    currency: n
                                })
                            }), (0, l.jsxs)(th, {
                                header: f,
                                className: "dc-contract-card__contract-value",
                                children: [(0, l.jsx)("div", {
                                    className: D()({
                                        "dc-contract-card--profit": Number(u) > 0,
                                        "dc-contract-card--loss": 0 > Number(u)
                                    }),
                                    children: (0, l.jsx)(e2.Z, {
                                        amount: g,
                                        currency: n
                                    })
                                }), !r && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: j || g
                                })]
                            }), (0, l.jsx)(th, {
                                header: N,
                                is_crypto: (0, x.oS6)(n),
                                className: "dc-contract-card__entry-spot",
                                children: (0, x.oC5)(m)
                            }), (0, l.jsx)("div", {
                                className: "dc-contract-card__limit-order-info",
                                children: (0, l.jsxs)(th, {
                                    header: C,
                                    className: "dc-contract-card__take-profit",
                                    children: [v ? (0, l.jsx)(e2.Z, {
                                        amount: v,
                                        currency: n
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    }), b && (0, l.jsx)(tS, {
                                        contract_id: t.contract_id,
                                        getCardLabels: a,
                                        is_turbos: !0,
                                        ...d
                                    })]
                                })
                            }), (0, l.jsx)(th, {
                                header: y,
                                className: "dc-contract-card__barrier-level",
                                children: (0, x.oC5)(h)
                            }), (0, l.jsx)(eG.Z, {
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__status",
                                    children: r ? (0, l.jsx)(tx, {
                                        getCardLabels: a,
                                        is_contract_won: !!u && u > 0
                                    }) : o
                                })
                            })]
                        }), (0, l.jsxs)(th, {
                            className: "dc-contract-card-item__total-profit-loss",
                            header: w,
                            is_crypto: (0, x.oS6)(n),
                            is_loss: 0 > Number(u),
                            is_won: Number(u) > 0,
                            children: [(0, l.jsx)(e2.Z, {
                                amount: u,
                                currency: n
                            }), !r && (0, l.jsx)(tn, {
                                className: "dc-contract-card__indicative--movement",
                                value: u
                            })]
                        })]
                    })
                }),
                tO = i.memo(e => {
                    let {
                        contract_info: t,
                        currency: s,
                        getCardLabels: n,
                        is_sold: a,
                        progress_slider: r
                    } = e, {
                        buy_price: o,
                        bid_price: d,
                        entry_spot_display_value: c,
                        barrier: _,
                        sell_price: u,
                        profit: h
                    } = t, m = a ? u : d, {
                        CONTRACT_VALUE: p,
                        ENTRY_SPOT: j,
                        STAKE: v,
                        STRIKE: b,
                        TOTAL_PROFIT_LOSS: g
                    } = n();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)(te.Z, {
                            children: [(0, l.jsxs)("div", {
                                className: "dc-contract-card-items-wrapper",
                                children: [(0, l.jsx)(th, {
                                    header: v,
                                    children: (0, l.jsx)(e2.Z, {
                                        amount: o,
                                        currency: s
                                    })
                                }), (0, l.jsxs)(th, {
                                    className: "dc-contract-card-item__contract-value",
                                    header: p,
                                    children: [(0, l.jsx)("div", {
                                        className: D()({
                                            "dc-contract-card--profit": Number(h) > 0,
                                            "dc-contract-card--loss": 0 > Number(h)
                                        }),
                                        children: (0, l.jsx)(e2.Z, {
                                            amount: m,
                                            currency: s
                                        })
                                    }), !a && (0, l.jsx)(tn, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: u || m
                                    })]
                                }), (0, l.jsx)(th, {
                                    header: j,
                                    children: c && (0, x.oC5)(c)
                                }), (0, l.jsx)(th, {
                                    header: b,
                                    children: _ && (0, x.oC5)(_)
                                })]
                            }), (0, l.jsxs)(th, {
                                className: "dc-contract-card-item__total-profit-loss",
                                header: g,
                                is_crypto: (0, x.oS6)(s),
                                is_loss: 0 > Number(h),
                                is_won: Number(h) > 0,
                                children: [(0, l.jsx)(e2.Z, {
                                    amount: h,
                                    currency: s
                                }), !a && (0, l.jsx)(tn, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: h
                                })]
                            })]
                        }), (0, l.jsx)(eG.Z, {
                            children: (0, l.jsxs)("div", {
                                className: "dc-contract-card-items-wrapper--mobile",
                                children: [(0, l.jsxs)("div", {
                                    className: "dc-contract-card-items-wrapper-group",
                                    children: [(0, l.jsx)(th, {
                                        header: v,
                                        children: (0, l.jsx)(e2.Z, {
                                            amount: o,
                                            currency: s
                                        })
                                    }), (0, l.jsx)(th, {
                                        header: j,
                                        children: c && (0, x.oC5)(c)
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "dc-contract-card-items-wrapper-group",
                                    children: [(0, l.jsxs)(th, {
                                        header: p,
                                        children: [(0, l.jsx)("div", {
                                            className: D()({
                                                "dc-contract-card--profit": Number(h) > 0,
                                                "dc-contract-card--loss": 0 > Number(h)
                                            }),
                                            children: (0, l.jsx)(e2.Z, {
                                                amount: m,
                                                currency: s
                                            })
                                        }), !a && (0, l.jsx)(tn, {
                                            className: "dc-contract-card__indicative--movement",
                                            value: u || m
                                        })]
                                    }), (0, l.jsx)(th, {
                                        header: b,
                                        children: _ && (0, x.oC5)(_)
                                    })]
                                }), a ? (0, l.jsx)(tx, {
                                    getCardLabels: n,
                                    is_contract_won: "won" === (0, x.efd)(t)
                                }) : r, (0, l.jsxs)(th, {
                                    className: "dc-contract-card-item__total-profit-loss",
                                    header: g,
                                    is_crypto: (0, x.oS6)(s),
                                    is_loss: 0 > Number(h),
                                    is_won: Number(h) > 0,
                                    children: [(0, l.jsx)(e2.Z, {
                                        amount: h,
                                        currency: s
                                    }), !a && (0, l.jsx)(tn, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: h
                                    })]
                                })]
                            })
                        })]
                    })
                }),
                tD = e => {
                    let {
                        contract_info: t,
                        getCardLabels: s,
                        is_sell_requested: n,
                        onClickSell: a
                    } = e, r = (0, x.iBr)(t), o = ((0, x._mr)(t) || (0, x.s0r)((null == t ? void 0 : t.shortcode) ? ? "", t.purchase_time)) && (0, x.FJ7)(t);
                    return o ? (0, l.jsx)(i.Fragment, {
                        children: r ? (0, l.jsx)(tv.z, {
                            className: D()("dc-btn--sell", {
                                "dc-btn--loading": n
                            }),
                            "data-testid": "dt_contract_card_sell",
                            disabled: n,
                            onClick: e => {
                                null == a || a(t.contract_id), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: s().SELL
                        }) : (0, l.jsx)("div", {
                            className: "dc-contract-card__no-resale-msg",
                            children: s().RESALE_NOT_OFFERED
                        })
                    }) : null
                },
                tU = e => {
                    let {
                        className: t,
                        contract_info: s,
                        getCardLabels: n,
                        is_sell_requested: a,
                        onClickCancel: r,
                        onClickSell: o,
                        server_time: d
                    } = e, {
                        contract_id: c,
                        cancellation: {
                            date_expiry: _
                        } = {},
                        profit: u
                    } = s, h = (0, x.Dlf)(s);
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(tv.z, {
                            id: `dc_contract_card_${c}_button`,
                            className: D()(t, {
                                "dc-btn--loading": a
                            }),
                            disabled: a || 0 > Number(u) && h,
                            onClick: e => {
                                o(c), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: n().CLOSE
                        }), h && (0, l.jsxs)(tv.z, {
                            id: `dc_contract_card_${c}_cancel_button`,
                            className: "dc-btn--cancel",
                            disabled: Number(u) >= 0,
                            onClick: e => {
                                r(c), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: [n().CANCEL, _ && (0, l.jsx)(tr, {
                                end_time: _,
                                format: "mm:ss",
                                getCardLabels: n,
                                start_time: d
                            })]
                        })]
                    })
                },
                tF = e => {
                    let {
                        current_tick: t,
                        getCardLabels: s,
                        ticks_count: n
                    } = e, a = Array.from(Array(n).keys());
                    return (0, l.jsxs)("div", {
                        className: "dc-progress-slider__ticks",
                        children: [(0, l.jsxs)(et.Z, {
                            styles: {
                                lineHeight: "18px"
                            },
                            size: "xxs",
                            className: "dc-progress-slider__ticks-caption",
                            children: [s().TICK, " ", t]
                        }), (0, l.jsx)("div", {
                            className: "dc-progress-slider__ticks-wrapper",
                            children: a.map(e => (0, l.jsx)("div", {
                                className: D()("dc-progress-slider__ticks-step", {
                                    "dc-progress-slider__ticks-step--marked": e + 1 <= Number(t)
                                })
                            }, e))
                        })]
                    })
                },
                tZ = e => {
                    let {
                        className: t,
                        current_tick: s,
                        expiry_time: n,
                        getCardLabels: a,
                        is_loading: r,
                        server_time: o,
                        start_time: d,
                        ticks_count: c
                    } = e, _ = (0, x.dq6)(o, Number(d), Number(n));
                    return (0, l.jsx)("div", {
                        className: D()("dc-progress-slider", t),
                        children: c ? (0, l.jsx)(tF, {
                            current_tick: s,
                            getCardLabels: a,
                            ticks_count: c
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(et.Z, {
                                size: "xxxs",
                                className: "dc-progress-slider__remaining-time",
                                children: (0, l.jsx)(tr, {
                                    end_time: n,
                                    getCardLabels: a,
                                    start_time: o
                                })
                            }), r || _ < 1 ? (0, l.jsx)("div", {
                                className: "dc-progress-slider__infinite-loader",
                                children: (0, l.jsx)("div", {
                                    className: "dc-progress-slider__infinite-loader--indeterminate"
                                })
                            }) : (0, l.jsx)("div", {
                                className: "dc-progress-slider__track",
                                children: (0, l.jsx)("div", {
                                    className: D()("dc-progress-slider__line", {
                                        "dc-progress-slider__line--green": _ >= 50,
                                        "dc-progress-slider__line--yellow": _ < 50 && _ >= 20,
                                        "dc-progress-slider__line--red": _ < 20
                                    }),
                                    style: {
                                        width: `${_}%`
                                    }
                                })
                            })]
                        })
                    })
                },
                tz = e => {
                    let {
                        displayed_trade_param: t,
                        getContractTypeDisplay: s,
                        is_high_low: n,
                        is_multipliers: a,
                        is_turbos: i,
                        type: r = ""
                    } = e, o = "";
                    return n && (o = "CALL" === r ? "HIGHER" : "LOWER"), (0, l.jsxs)("div", {
                        className: "dc-contract-type",
                        children: [(0, l.jsx)("div", {
                            className: "dc-contract-type__type-wrapper",
                            children: (0, l.jsx)($, {
                                type: n && !(0, x.Yeo)(r) ? o : r,
                                className: "category-type",
                                size: "md"
                            })
                        }), (0, l.jsxs)("div", {
                            className: D()("dc-contract-type__type-label", {
                                "dc-contract-type__type-label--smarttrader-contract": (0, x.xGd)(r),
                                "dc-contract-type__type-label--lookbacks-contract": (0, x.vxy)(r),
                                "dc-contract-type__type-label--multipliers": a
                            }),
                            children: [(0, l.jsx)("div", {
                                children: s(r, {
                                    isHighLow: n,
                                    showMainTitle: a || i
                                }) || ""
                            }), t && (0, l.jsx)("div", {
                                className: "dc-contract-type__type-label-trade-param",
                                children: t
                            })]
                        })]
                    })
                },
                tB = i.memo(e => {
                    let {
                        current_tick: t,
                        label: s,
                        max_ticks_duration: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "dc-tick-counter-bar__container",
                        children: (0, l.jsx)("div", {
                            className: "dc-tick-counter-bar__track",
                            children: (0, l.jsx)(et.Z, {
                                size: "xxs",
                                weight: "bold",
                                align: "center",
                                color: "profit-success",
                                className: "dc-tick-counter-bar__text",
                                children: `${t}/${n} ${s}`
                            })
                        })
                    })
                }),
                tP = e => {
                    let {
                        currency: t,
                        contract_id: s,
                        getCardLabels: n,
                        getContractPath: a,
                        is_positions: r,
                        is_visible: o,
                        onClickRemove: d,
                        payout_info: c,
                        result: _
                    } = e, u = "won" === _;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsx)(ek.Z, { in: o,
                            timeout: 250,
                            classNames: {
                                enter: "dc-contract-card__result--enter",
                                enterDone: "dc-contract-card__result--enter-done",
                                exit: "dc-contract-card__result--exit"
                            },
                            unmountOnExit: !0,
                            children: (0, l.jsxs)("div", {
                                id: `dc_contract_card_${s}_result`,
                                className: D()("dc-contract-card__result", {
                                    "dc-result__positions-overlay": r,
                                    "dc-contract-card__result--won": u,
                                    "dc-contract-card__result--lost": !u
                                }),
                                children: [r && (0, l.jsx)("span", {
                                    id: `dc_contract_card_${s}_result_close_icon`,
                                    className: "dc-result__close-btn",
                                    onClick: () => {
                                        s && (null == d || d(s))
                                    }
                                }), a && (0, l.jsx)(eo.OL, {
                                    className: "dc-result__caption-wrapper",
                                    to: a(s)
                                }), (0, l.jsxs)("div", {
                                    className: "dc-result__content",
                                    children: [(0, l.jsx)(tx, {
                                        getCardLabels: n,
                                        is_contract_won: u
                                    }), (0, l.jsx)(et.Z, {
                                        weight: "bold",
                                        size: "s",
                                        lineHeight: "2xl",
                                        color: u ? "profit-success" : "loss-danger",
                                        children: (0, l.jsx)(e2.Z, {
                                            amount: c,
                                            currency: t,
                                            has_sign: !0,
                                            show_currency: !0
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                tX = e => {
                    let {
                        children: t,
                        contract_info: s,
                        getCardLabels: n,
                        getContractPath: a,
                        is_multiplier: r,
                        is_positions: o,
                        onClickRemove: d,
                        profit_loss: c,
                        result: _,
                        should_show_result_overlay: u
                    } = e, x = r ? (0, e9.vM)(s) : c;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [u && (0, l.jsx)(te.Z, {
                            children: (0, l.jsx)(tP, {
                                contract_id: s.contract_id,
                                currency: s.currency,
                                getCardLabels: n,
                                getContractPath: a,
                                is_multiplier: r,
                                is_visible: !!s.is_sold,
                                onClickRemove: d,
                                payout_info: x,
                                result: _ || (c >= 0 ? "won" : "lost"),
                                is_positions: o
                            })
                        }), t]
                    })
                };
            tX.Header = e => {
                var t;
                let {
                    contract_info: s,
                    display_name: n,
                    getCardLabels: a,
                    getContractTypeDisplay: r,
                    has_progress_slider: o,
                    id: d,
                    is_sell_requested: c,
                    is_sold: _,
                    is_valid_to_sell: u,
                    onClickSell: h,
                    server_time: m
                } = e, p = s.tick_count ? (0, x.v3q)(s) : null, {
                    growth_rate: j,
                    underlying: v,
                    multiplier: b,
                    contract_type: g,
                    shortcode: y,
                    purchase_time: N,
                    date_expiry: C,
                    tick_count: w,
                    tick_passed: k
                } = s, T = !!s.is_sold || _, E = (0, x.XtD)(g), S = (0, x.xGd)(g), {
                    isMobile: I
                } = (0, f.F)(), A = (0, x.MOe)(g), R = (0, x.L8o)(g), L = (0, x.CY$)({
                    shortcode: y
                }), M = (null === (t = i.useMemo(() => [{
                    is_param_displayed: R,
                    displayed_param: `${r(g??"",{isHighLow:L})} x${b}`.trim()
                }, {
                    is_param_displayed: E,
                    displayed_param: `${(0,x.dR9)(j||0)}%`
                }, {
                    is_param_displayed: A,
                    displayed_param: (0, x.Lp7)(g)
                }], [g, j, b, E, R, A, L]).find(e => e.is_param_displayed)) || void 0 === t ? void 0 : t.displayed_param) || "";
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: D()("dc-contract-card__grid", "dc-contract-card__grid-underlying-trade", {
                            "dc-contract-card__grid-underlying-trade--trader": false,
                            "dc-contract-card__grid-underlying-trade--trader--accumulator": false,
                            "dc-contract-card__grid-underlying-trade--trader--sold": (E || A || R) && T
                        }),
                        children: [(0, l.jsxs)("div", {
                            id: "dc-contract_card_underlying_label",
                            className: D()("dc-contract-card__underlying-name", {
                                "dc-contract-card__underlying-name--accumulator": E
                            }),
                            children: [(0, l.jsx)(P, {
                                type: v ? ? "",
                                size: "md"
                            }), (0, l.jsx)(et.Z, {
                                size: "xxs",
                                className: D()("dc-contract-card__symbol", {
                                    "dc-contract-card__symbol--smarttrader-contract": S
                                }),
                                weight: "bold",
                                children: n || s.display_name
                            })]
                        }), (0, l.jsx)("div", {
                            id: "dc-contract_card_type_label",
                            className: D()("dc-contract-card__type", {
                                "dc-contract-card__type--accumulators": E
                            }),
                            children: (0, l.jsx)(tz, {
                                displayed_trade_param: M,
                                getContractTypeDisplay: r,
                                is_high_low: L,
                                is_multipliers: R,
                                is_turbos: A,
                                type: g
                            })
                        }), (0, l.jsx)(eG.Z, {
                            children: u ? (0, l.jsx)(ek.Z, { in: !!u,
                                timeout: 250,
                                classNames: {
                                    enter: "dc-contract-card__sell-button--enter",
                                    enterDone: "dc-contract-card__sell-button--enter-done",
                                    exit: "dc-contract-card__sell-button--exit"
                                },
                                unmountOnExit: !0,
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__sell-button-mobile",
                                    children: (0, l.jsx)(tv.z, {
                                        id: `dc_contract_card_${d}_button`,
                                        className: D()("dc-btn--sell", {
                                            "dc-btn--loading": c
                                        }),
                                        disabled: !u || c,
                                        onClick: () => h(d),
                                        variant: "outlined",
                                        children: a().SELL
                                    })
                                })
                            }) : null
                        })]
                    }), !T && E && (0, l.jsx)(tB, {
                        current_tick: k,
                        max_ticks_duration: w,
                        label: a().TICKS
                    }), (0, l.jsx)(eG.Z, {
                        children: (0, l.jsx)("div", {
                            className: "dc-progress-slider--completed"
                        })
                    }), (0, l.jsxs)(te.Z, {
                        children: [(!o || !!T) && (0, l.jsx)("div", {
                            className: "dc-progress-slider--completed"
                        }), o && !T && !E && (0, l.jsx)(tZ, {
                            current_tick: p,
                            expiry_time: C,
                            getCardLabels: a,
                            is_loading: !1,
                            server_time: m,
                            start_time: N,
                            ticks_count: w
                        })]
                    })]
                })
            }, tX.Body = e => {
                let t, {
                        addToast: s,
                        contract_info: n,
                        contract_update: a,
                        currency: r,
                        current_focus: o,
                        error_message_alignment: d,
                        getCardLabels: c,
                        getContractById: _,
                        has_progress_slider: u,
                        is_accumulator: h,
                        is_mobile: m,
                        is_multiplier: p,
                        is_positions: j,
                        is_sold: v,
                        is_turbos: b,
                        is_vanilla: g,
                        is_lookbacks: y,
                        onMouseLeave: f,
                        removeToast: N,
                        server_time: C,
                        setCurrentFocus: w,
                        should_show_cancellation_warning: k,
                        toggleCancellationWarning: T
                    } = e,
                    E = (0, x.Kq_)(n),
                    {
                        buy_price: S,
                        sell_price: I,
                        payout: A,
                        profit: R,
                        tick_count: L,
                        date_expiry: M,
                        purchase_time: O
                    } = n,
                    U = L ? (0, x.v3q)(n) : null,
                    {
                        CONTRACT_VALUE: F,
                        POTENTIAL_PAYOUT: Z,
                        TOTAL_PROFIT_LOSS: z,
                        STAKE: B
                    } = c(),
                    P = (0, l.jsx)(t_, {
                        current_tick: U,
                        expiry_time: M,
                        getCardLabels: c,
                        is_loading: !1,
                        server_time: C,
                        start_time: O,
                        ticks_count: L
                    }),
                    X = {
                        addToast: s,
                        current_focus: o,
                        error_message_alignment: d,
                        getContractById: _,
                        onMouseLeave: f,
                        removeToast: N,
                        setCurrentFocus: w,
                        totalProfit: p && !isNaN(Number(R)) ? (0, x.vMw)(n) : Number(R)
                    };
                return t = p ? (0, l.jsx)(tL, {
                    contract_info: n,
                    contract_update: a,
                    currency: r,
                    getCardLabels: c,
                    has_progress_slider: u,
                    progress_slider: P,
                    is_mobile: m,
                    is_sold: v,
                    should_show_cancellation_warning: k,
                    toggleCancellationWarning: T,
                    ...X
                }) : h ? (0, l.jsx)(tI, {
                    contract_info: n,
                    contract_update: a,
                    currency: r,
                    getCardLabels: c,
                    indicative: E,
                    is_sold: v,
                    is_positions: j,
                    ...X
                }) : b ? (0, l.jsx)(tM, {
                    contract_info: n,
                    contract_update: a,
                    currency: r,
                    getCardLabels: c,
                    is_sold: v,
                    progress_slider_mobile_el: P,
                    ...X
                }) : g ? (0, l.jsx)(tO, {
                    contract_info: n,
                    currency: r,
                    getCardLabels: c,
                    is_sold: v,
                    progress_slider: P
                }) : y ? (0, l.jsx)(tA, {
                    contract_info: n,
                    currency: r,
                    is_sold: v,
                    indicative: E,
                    progress_slider_mobile_el: P
                }) : (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "dc-contract-card-items-wrapper",
                        children: [(0, l.jsxs)(th, {
                            header: z,
                            is_crypto: (0, x.oS6)(r),
                            is_loss: 0 > Number(R),
                            is_won: Number(R) > 0,
                            children: [(0, l.jsx)(e2.Z, {
                                amount: R,
                                currency: r
                            }), !v && (0, l.jsx)(tn, {
                                className: "dc-contract-card__indicative--movement",
                                value: R
                            })]
                        }), (0, l.jsxs)(th, {
                            header: F,
                            children: [(0, l.jsx)("div", {
                                className: D()({
                                    "dc-contract-card--profit": Number(R) > 0,
                                    "dc-contract-card--loss": 0 > Number(R)
                                }),
                                children: (0, l.jsx)(e2.Z, {
                                    currency: r,
                                    amount: Number(I || E)
                                })
                            }), !v && (0, l.jsx)(tn, {
                                className: "dc-contract-card__indicative--movement",
                                value: Number(I || E)
                            })]
                        }), (0, l.jsx)(th, {
                            header: B,
                            children: (0, l.jsx)(e2.Z, {
                                amount: S,
                                currency: r
                            })
                        }), (0, l.jsx)(th, {
                            header: Z,
                            children: (0, l.jsx)(e2.Z, {
                                currency: r,
                                amount: A
                            })
                        })]
                    }), (0, l.jsx)(eG.Z, {
                        children: (0, l.jsx)("div", {
                            className: "dc-contract-card__status",
                            children: v ? (0, l.jsx)(tx, {
                                getCardLabels: c,
                                is_contract_won: "won" === (0, x.efd)(n)
                            }) : P
                        })
                    })]
                }), (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(ta, {
                        currency: r
                    }), (0, l.jsx)(te.Z, {
                        children: t
                    }), (0, l.jsx)(eG.Z, {
                        children: (0, l.jsx)("div", {
                            className: D()("dc-contract-card__separatorclass", {
                                "dc-contract-card__body-wrapper": !p && !b && !y
                            }),
                            children: t
                        })
                    })]
                })
            }, tX.Footer = e => {
                let {
                    contract_info: t,
                    getCardLabels: s,
                    is_multiplier: n,
                    is_positions: a,
                    is_sell_requested: r,
                    is_lookbacks: o,
                    onClickCancel: d,
                    onClickSell: c,
                    onFooterEntered: _,
                    server_time: u,
                    should_show_transition: h
                } = e, {
                    in_prop: m
                } = (0, x.hwq)(!!h), p = (0, x.Dlf)(t), j = (0, x._mr)(t) && (0, x.FJ7)(t), v = o && (0, x.iBr)(t) && j;
                return j ? (0, l.jsx)(ek.Z, { in: m,
                    timeout: h ? 250 : 0,
                    classNames: h ? {
                        enter: "dc-contract-card__sell-button--enter",
                        enterDone: "dc-contract-card__sell-button--enter-done",
                        exit: "dc-contract-card__sell-button--exit"
                    } : {},
                    onEntered: _,
                    unmountOnExit: !0,
                    children: (0, l.jsx)("div", {
                        className: "dc-contract-card-item__footer",
                        children: n ? (0, l.jsx)("div", {
                            className: D()("dc-contract-card__sell-button", {
                                "dc-contract-card__sell-button--has-cancel-btn": p,
                                "dc-contract-card__sell-button--positions": a
                            }),
                            children: (0, l.jsx)(tU, {
                                className: "dc-btn--sell",
                                contract_info: t,
                                getCardLabels: s,
                                is_sell_requested: r,
                                onClickCancel: d,
                                onClickSell: c,
                                server_time: u
                            })
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: D()("dc-contract-card__sell-button", {
                                    "dc-contract-card__sell-button--positions": a
                                }),
                                children: (0, l.jsx)(tD, {
                                    contract_info: t,
                                    is_sell_requested: r,
                                    getCardLabels: s,
                                    onClickSell: c
                                })
                            }), v && (0, l.jsx)(et.Z, {
                                as: "div",
                                size: "xxxs",
                                color: "less-prominent",
                                lineHeight: "s",
                                className: "lookbacks--note",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>Note:</0> Contract will be sold at the prevailing market price when the request is received by our servers. This price may differ from the indicated price.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    })
                }) : null
            }, tX.Loader = e6, tX.ContractTypeCell = tz, tX.MultiplierCloseActions = tU, tX.Sell = tD;
            let tH = (0, r.Pi)(e => {
                    let {
                        contract_info: t,
                        is_contract_loading: s,
                        is_bot_running: n
                    } = e, {
                        summary_card: a,
                        run_panel: r,
                        ui: o,
                        common: d
                    } = (0, p.oR)(), {
                        is_contract_completed: c,
                        is_contract_inactive: _,
                        is_multiplier: u,
                        is_accumulator: h,
                        setIsBotRunning: m
                    } = a, {
                        onClickSell: j,
                        is_sell_requested: v,
                        contract_stage: b
                    } = r, {
                        addToast: g,
                        current_focus: N,
                        removeToast: C,
                        setCurrentFocus: w
                    } = o, {
                        server_time: k
                    } = d, {
                        isDesktop: T
                    } = (0, f.F)();
                    i.useEffect(() => m(), [s]);
                    let E = (0, l.jsx)(tX.Header, {
                            contract_info: t,
                            getCardLabels: x.gk9,
                            getContractTypeDisplay: e3.h8,
                            has_progress_slider: !u,
                            is_sold: c,
                            server_time: k
                        }),
                        S = (0, l.jsx)(tX.Body, {
                            addToast: g,
                            contract_info: t,
                            currency: (null == t ? void 0 : t.currency) ? ? "",
                            current_focus: N,
                            error_message_alignment: "left",
                            getCardLabels: x.gk9,
                            getContractById: () => a,
                            is_mobile: !T,
                            is_multiplier: u,
                            is_accumulator: h,
                            is_sold: c,
                            removeToast: C,
                            server_time: k,
                            setCurrentFocus: w
                        }),
                        I = (0, l.jsx)(tX.Footer, {
                            contract_info: t,
                            getCardLabels: x.gk9,
                            is_multiplier: u,
                            is_sell_requested: v,
                            onClickSell: j
                        }),
                        A = (0, l.jsxs)(i.Fragment, {
                            children: [E, S, I]
                        });
                    return (0, l.jsxs)("div", {
                        className: D()("db-summary-card", {
                            "db-summary-card--mobile": !T,
                            "db-summary-card--inactive": _ && !s && !t,
                            "db-summary-card--completed": c,
                            "db-summary-card--completed-mobile": c && !T,
                            "db-summary-card--delayed-loading": n
                        }),
                        "data-testid": "dt_mock_summary_card",
                        children: [s && !n && (0, l.jsx)(e6, {
                            speed: 2
                        }), n && (0, l.jsx)(e6, {
                            speed: 2,
                            contract_stage: b
                        }), !s && t && !n && (0, l.jsx)(tX, {
                            contract_info: t,
                            getCardLabels: x.gk9,
                            is_multiplier: u,
                            profit_loss: t.profit,
                            should_show_result_overlay: !0,
                            children: (0, l.jsx)("div", {
                                className: D()("dc-contract-card", {
                                    "dc-contract-card--green": t.profit > 0,
                                    "dc-contract-card--red": t.profit < 0
                                }),
                                children: A
                            })
                        }), !s && !t && !n && (0, l.jsxs)(et.Z, {
                            as: "p",
                            align: "center",
                            lineHeight: "s",
                            size: "xs",
                            children: [(0, y.NC)("When you’re ready to trade, hit "), (0, l.jsx)("strong", {
                                className: "summary-panel-inactive__strong",
                                children: (0, y.NC)("Run")
                            }), (0, y.NC)(". You’ll be able to track your bot’s performance here.")]
                        })]
                    })
                }),
                t$ = (0, r.Pi)(e => {
                    let {
                        is_drawer_open: t
                    } = e, {
                        dashboard: s,
                        summary_card: n
                    } = (0, p.oR)(), {
                        is_contract_loading: a,
                        contract_info: i,
                        is_bot_running: r
                    } = n, {
                        active_tour: o
                    } = s, {
                        isDesktop: d
                    } = (0, f.F)();
                    return (0, l.jsx)("div", {
                        className: D()({
                            "run-panel-tab__content": d,
                            "run-panel-tab__content--mobile": !d && t,
                            "run-panel-tab__content--summary-tab": d && t || o
                        }),
                        "data-testid": "mock-summary",
                        children: (0, l.jsx)(ei.Z, {
                            className: D()({
                                summary: !a && !i || r,
                                "summary--loading": !d && a || !d && !a && i
                            }),
                            children: (0, l.jsx)(tH, {
                                is_contract_loading: a,
                                contract_info: i,
                                is_bot_running: r
                            })
                        })
                    })
                });
            var tV = s("71766"),
                tG = s("54176");
            let tq = e => {
                let {
                    profit: t
                } = e, s = t >= 0;
                return (0, l.jsx)("div", {
                    className: D()("db-contract-card__result", {
                        "db-contract-card__result--won": s,
                        "db-contract-card__result--lost": !s
                    }),
                    children: (0, l.jsx)(et.Z, {
                        weight: "bold",
                        className: "db-contract-card__result-caption",
                        children: s ? (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(y.Xx, {
                                i18n_default_text: "Won"
                            }), (0, l.jsx)(tV.Z, {
                                className: "db-contract-card__result-icon",
                                color: "green"
                            })]
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(y.Xx, {
                                i18n_default_text: "Lost"
                            }), (0, l.jsx)(tG.Z, {
                                className: "db-contract-card__result-icon",
                                color: "red"
                            })]
                        })
                    })
                })
            };
            var tY = s("16854"),
                tW = s("67109"),
                tK = s("89057");
            let tJ = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: D()("circular-wrapper", t),
                        children: [(0, l.jsx)("span", {
                            className: "static-circle"
                        }), (0, l.jsx)("span", {
                            className: "dynamic-circle"
                        })]
                    })
                },
                tQ = Object.freeze({
                    NOT_RUNNING: "Bot is not running",
                    STARTING: "Bot is starting",
                    RUNNING: "Bot running",
                    PURCHASE_SENT: "Buying contract",
                    PURCHASE_RECEIVED: "Contract bought",
                    IS_STOPPING: "Bot is stopping",
                    CONTRACT_CLOSED: "Contract closed"
                }),
                t0 = e => {
                    let {
                        contract_stage: t
                    } = e;
                    switch (t) {
                        case es.K.STARTING:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.STARTING
                            });
                        case es.K.RUNNING:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.RUNNING
                            });
                        case es.K.PURCHASE_SENT:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.PURCHASE_SENT
                            });
                        case es.K.PURCHASE_RECEIVED:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.PURCHASE_RECEIVED
                            });
                        case es.K.IS_STOPPING:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.IS_STOPPING
                            });
                        case es.K.CONTRACT_CLOSED:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.CONTRACT_CLOSED
                            });
                        case es.K.NOT_RUNNING:
                        default:
                            return (0, l.jsx)(y.Xx, {
                                i18n_default_text: tQ.NOT_RUNNING
                            })
                    }
                },
                t1 = (0, r.Pi)(e => {
                    let {
                        className: t,
                        should_show_overlay: s
                    } = e, {
                        dashboard: n,
                        run_panel: a,
                        summary_card: r
                    } = (0, p.oR)(), {
                        client: o
                    } = (0, p.oR)(), {
                        active_tab: d
                    } = n, {
                        is_contract_completed: c,
                        profit: _
                    } = r, {
                        contract_stage: u,
                        is_stop_button_visible: x,
                        is_stop_button_disabled: h,
                        onRunButtonClick: m,
                        onStopBotClick: j,
                        performSelfExclusionCheck: v
                    } = a, {
                        account_status: b
                    } = o, g = null == b ? void 0 : b.cashier_validation, [f, N] = i.useState(!1), C = null == g ? void 0 : g.includes("WithdrawServiceUnavailableForPA");
                    i.useEffect(() => {
                        v()
                    }, []), i.useEffect(() => {
                        f && setTimeout(() => {
                            N(!1)
                        }, 1e3)
                    }, [f]);
                    let w = ["", "", ""],
                        k = u === es.K.PURCHASE_SENT,
                        T = u === es.K.PURCHASE_RECEIVED,
                        E = u - (k || T ? 2 : 3);
                    if (E >= 0) {
                        E < w.length && (w[E] = "active"), c && (E += 1);
                        for (let e = 0; e < E - 1; e++) w[e] = "completed"
                    }
                    let S = h || f,
                        I = i.useMemo(() => x ? {
                            id: "db-animation__stop-button",
                            class: "animation__stop-button",
                            text: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Stop"
                            }),
                            icon: (0, l.jsx)(tY.Z, {
                                fill: "#fff"
                            })
                        } : {
                            id: "db-animation__run-button",
                            class: "animation__run-button",
                            text: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Run"
                            }),
                            icon: (0, l.jsx)(tW.Z, {
                                fill: "#fff"
                            })
                        }, [x]),
                        A = s && c,
                        R = ["dashboard", "bot_builder", "charts", "tutorials"],
                        L = e => R[e];
                    return (0, l.jsxs)("div", {
                        className: D()("animation__wrapper", t),
                        children: [(0, l.jsx)(eI.Z, {
                            is_disabled: S && !C,
                            className: I.class,
                            id: I.id,
                            icon: I.icon,
                            onClick: () => {
                                if (N(!0), x) {
                                    j();
                                    return
                                }
                                m(), (0, tK.GE)({
                                    subpage_name: L(d)
                                })
                            },
                            has_effect: !0,
                            ...x || !C ? {
                                primary: !0
                            } : {
                                green: !0
                            },
                            children: I.text
                        }), (0, l.jsxs)("div", {
                            className: D()("animation__container", t, {
                                "animation--running": u > 0,
                                "animation--completed": A
                            }),
                            children: [A && (0, l.jsx)(tq, {
                                profit: _
                            }), (0, l.jsx)("span", {
                                className: "animation__text",
                                children: (0, l.jsx)(t0, {
                                    contract_stage: u
                                })
                            }), (0, l.jsxs)("div", {
                                className: "animation__progress",
                                children: [(0, l.jsx)("div", {
                                    className: "animation__progress-line",
                                    children: (0, l.jsx)("div", {
                                        className: `animation__progress-bar animation__progress-${u}`
                                    })
                                }), w.map((e, t) => (0, l.jsx)(tJ, {
                                    className: e
                                }, `status_class-${e}-${t}`))]
                            })]
                        })]
                    })
                }),
                t2 = i.memo(e => {
                    var t, s;
                    let {
                        className: n,
                        column: a,
                        is_footer: i,
                        passthrough: r,
                        row: o
                    } = e;
                    if (!a) return null;
                    let {
                        col_index: d,
                        title: c
                    } = a, _ = null == o ? void 0 : o[d], u = (0, x.MOe)(null == o ? void 0 : null === (t = o.contract_info) || void 0 === t ? void 0 : t.contract_type), h = (0, x.Yeo)(null == o ? void 0 : null === (s = o.contract_info) || void 0 === s ? void 0 : s.contract_type);
                    return (0, l.jsxs)("div", {
                        className: D()(n, a.col_index),
                        children: [!i && (0, l.jsx)("div", {
                            className: D()(`${a.col_index}__row-title`, "data-list__row-title"),
                            children: a.renderHeader ? a.renderHeader({
                                title: c,
                                is_vanilla: h
                            }) : c
                        }), (0, l.jsx)("div", {
                            className: "data-list__row-content",
                            children: a.renderCellContent ? a.renderCellContent({
                                cell_value: _,
                                is_footer: i,
                                passthrough: r,
                                row_obj: o,
                                is_vanilla: h,
                                is_turbos: u
                            }) : _
                        })]
                    })
                }),
                t5 = i.memo(e => {
                    let {
                        action_desc: t,
                        destination_link: s,
                        row_gap: n,
                        row_key: a,
                        rowRenderer: r,
                        measure: o,
                        is_dynamic_height: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), h = (0, x.tmR)(), m = ec(() => u(!1), 5e3), p = () => {
                        t && (u(!_), m())
                    }, j = e => {
                        (0, x.K9$)(p, e)
                    };
                    return i.useEffect(() => {
                        h() && d && (null == o || o())
                    }, [_, d, o]), (0, l.jsx)("div", {
                        className: "data-list__row--wrapper",
                        style: {
                            paddingBottom: `${n||0}px`
                        },
                        children: s ? (0, l.jsx)(eo.OL, {
                            className: "data-list__item--wrapper",
                            id: `dt_reports_contract_${a}`,
                            to: {
                                pathname: s,
                                state: {
                                    from_table_row: !0
                                }
                            },
                            children: (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        }) : (0, l.jsx)("div", {
                            className: D()("data-list__item--wrapper", {
                                "data-list__item--dynamic-height-wrapper": d
                            }),
                            children: t ? (0, l.jsx)("div", {
                                className: "data-list__item",
                                onClick: j,
                                onKeyDown: j,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "data-list__desc--wrapper",
                                    children: t.component && (0, l.jsx)("div", {
                                        children: t.component
                                    })
                                }) : r({
                                    measure: o,
                                    ...c
                                })
                            }) : (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        })
                    })
                }),
                t3 = el.aV,
                t8 = el.qj,
                t4 = el.Z8,
                t7 = i.memo(e => {
                    let {
                        children: t,
                        className: s,
                        data_source: n,
                        footer: a,
                        getRowSize: r,
                        keyMapper: o,
                        onRowsRendered: d,
                        onScroll: c,
                        setListRef: _,
                        overscanRowCount: u,
                        ...h
                    } = e, [m, p] = i.useState(!0), [j, v] = i.useState(!1), [b, g] = i.useState(0), y = i.useRef(), f = i.useRef(null), N = i.useRef({}), C = i.useRef(null);
                    C.current = n;
                    let w = !r,
                        k = i.useCallback(() => {
                            n.forEach((e, t) => {
                                let s = (null == o ? void 0 : o(e)) || `${t}-0`;
                                N.current[s] = !0
                            })
                        }, [n, o]);
                    i.useEffect(() => {
                        w && (y.current = new el.t1({
                            fixedWidth: !0,
                            keyMapper: e => (null == C ? void 0 : C.current) && e < (null == C ? void 0 : C.current.length) && (null == o ? void 0 : o(C.current[e])) || e
                        })), k(), p(!1)
                    }, []), i.useEffect(() => {
                        if (w) {
                            var e, t;
                            null === (t = f.current) || void 0 === t || null === (e = t.recomputeGridSize) || void 0 === e || e.call(t, {
                                columnIndex: 0,
                                rowIndex: 0
                            })
                        }
                        k()
                    }, [n, w, k]);
                    let T = e => {
                            let {
                                style: t,
                                index: s,
                                key: a,
                                parent: i
                            } = e, {
                                getRowAction: r,
                                passthrough: d,
                                row_gap: c
                            } = h, _ = n[s], {
                                action_type: u,
                                shortcode: m,
                                purchase_time: p,
                                transaction_time: v,
                                id: b
                            } = _;
                            if ((0, x.JIr)(u, m, p || v)) {
                                let e = !!(null == n ? void 0 : n.find(e => "sell" === e.action_type && e.id === b));
                                _ = { ..._,
                                    is_sold: e
                                }
                            }
                            let g = r && r(_),
                                f = "string" == typeof g ? g : void 0,
                                C = "object" == typeof g ? g : void 0,
                                k = (null == o ? void 0 : o(_)) || a,
                                T = function() {
                                    let {
                                        measure: e
                                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, l.jsx)(t5, {
                                        action_desc: C,
                                        destination_link: f,
                                        is_new_row: !N.current[k],
                                        is_scrolling: j,
                                        measure: e,
                                        passthrough: d,
                                        row_gap: c,
                                        row_key: k,
                                        row: _,
                                        rowRenderer: h.rowRenderer,
                                        is_dynamic_height: w
                                    })
                                };
                            return w && y.current ? (0, l.jsx)(t4, {
                                cache: y.current,
                                columnIndex: 0,
                                rowIndex: s,
                                parent: i,
                                children: e => {
                                    let {
                                        measure: s
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        style: t,
                                        children: T({
                                            measure: s
                                        })
                                    })
                                }
                            }, k) : (0, l.jsx)("div", {
                                style: t,
                                children: T()
                            }, k)
                        },
                        E = e => {
                            let t;
                            clearTimeout(t), !j && v(!0), t = setTimeout(() => {
                                !m && v(!1)
                            }, 200), g(e.target.scrollTop), "function" == typeof c && c(e)
                        },
                        S = e => {
                            f.current = e, null == _ || _(e)
                        };
                    return m ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                        "data-testid": "dt_data_list",
                        className: D()(s, "data-list", {
                            [`${s}__data-list`]: s
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "data-list__body-wrapper",
                            children: [(0, l.jsx)("div", {
                                className: D()("data-list__body", {
                                    [`${s}__data-list-body`]: s
                                }),
                                children: (0, l.jsx)(t8, {
                                    children: e => {
                                        var t, a;
                                        let {
                                            width: i,
                                            height: o
                                        } = e;
                                        return (0, l.jsx)(ea.Z, {
                                            style: {
                                                height: o,
                                                width: i
                                            },
                                            children: (0, l.jsx)(ei.Z, {
                                                onScroll: E,
                                                autohide: !0,
                                                is_bypassed: (0, x.tqC)(),
                                                children: (0, l.jsx)(t3, {
                                                    className: s,
                                                    deferredMeasurementCache: null == y ? void 0 : y.current,
                                                    height: o,
                                                    onRowsRendered: d,
                                                    overscanRowCount: u || 1,
                                                    ref: e => S(e),
                                                    rowCount: n.length,
                                                    rowHeight: w && (null == y ? void 0 : null === (t = y.current) || void 0 === t ? void 0 : t.rowHeight) ? null == y ? void 0 : null === (a = y.current) || void 0 === a ? void 0 : a.rowHeight : r || 0,
                                                    rowRenderer: T,
                                                    scrollingResetTimeInterval: 0,
                                                    width: i,
                                                    ...(0, x.nIE)() ? {
                                                        scrollTop: b,
                                                        autoHeight: !0
                                                    } : {
                                                        onScroll: e => E({
                                                            target: e
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }), t]
                        }), a && (0, l.jsx)("div", {
                            className: D()("data-list__footer", {
                                [`${s}__data-list-footer`]: s
                            }),
                            children: (0, l.jsx)(i.Fragment, {
                                children: h.rowRenderer({
                                    row: a,
                                    is_footer: !0
                                })
                            })
                        })]
                    })
                });
            t7.displayName = "DataList", t7.Cell = t2;
            let t6 = Object.freeze({
                QUICK_STRATEGY: 99999,
                TOOLBAR: 100,
                TRANSACTION: 10,
                SUMMARY_TOOLTIPS: 5,
                RUN_PANEL: 8
            });
            var t9 = s("62017"),
                se = s("49355");
            let st = e => {
                    let {
                        icon: t,
                        title: s,
                        message: n,
                        className: a
                    } = e;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(X.Z, {
                            className: D()(a, "transactions__icon"),
                            alignment: (0, z.rK)() ? "right" : "left",
                            message: s,
                            zIndex: t6.TRANSACTION.toString(),
                            children: t
                        }), n]
                    })
                },
                ss = () => (0, l.jsx)(U.ZP, {
                    className: "transactions__loader-text",
                    height: 10,
                    width: 80,
                    speed: 3,
                    backgroundColor: "var(--general-section-2)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "100",
                        height: "12"
                    })
                }),
                sn = () => (0, l.jsx)(U.ZP, {
                    className: "transactions__loader-icon",
                    speed: 3,
                    width: 24,
                    height: 24,
                    backgroundColor: "var(--general-section-1)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "5",
                        ry: "5",
                        width: "24",
                        height: "24"
                    })
                }),
                sa = e => {
                    let {
                        icon: t,
                        title: s,
                        children: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "transactions__popover-item",
                        children: [t && (0, l.jsx)("div", {
                            className: "transaction__popover-icon",
                            children: t
                        }), (0, l.jsxs)("div", {
                            className: "transactions__popover-details",
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-title",
                                children: s
                            }), n]
                        })]
                    })
                },
                sl = e => {
                    let {
                        contract: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "transactions__popover-content",
                        children: [t.transaction_ids && (0, l.jsxs)(sa, {
                            title: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Reference IDs"
                            }),
                            children: [t.transaction_ids.buy && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.transaction_ids.buy} ${(0,y.NC)("(Buy)")}`
                            }), t.transaction_ids.sell && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.transaction_ids.sell} ${(0,y.NC)("(Sell)")}`
                            })]
                        }), t.tick_count && (0, l.jsx)(sa, {
                            title: (0, y.NC)("Duration"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.tick_count} ${(0,y.NC)("ticks")}`
                            })
                        }), t.barrier && (0, l.jsx)(sa, {
                            title: (0, y.NC)("Barrier"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.barrier
                            })
                        }) || t.high_barrier && t.low_barrier && (0, l.jsxs)(sa, {
                            title: (0, y.NC)("Barriers"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.high_barrier} ${(0,y.NC)("(High)")}`
                            }), (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.low_barrier} ${(0,y.NC)("(Low)")}`
                            })]
                        }), t.date_start && (0, l.jsx)(sa, {
                            title: (0, y.NC)("Start time"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })
                        }), t.entry_tick && (0, l.jsxs)(sa, {
                            title: (0, y.NC)("Entry spot"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.entry_tick
                            }), t.entry_tick_time && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.entry_tick_time, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })]
                        }), t.exit_tick && t.exit_tick_time && (0, l.jsxs)(sa, {
                            title: (0, y.NC)("Exit spot"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.exit_tick
                            }), (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.exit_tick_time, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })]
                        }) || t.exit_tick && (0, l.jsx)(sa, {
                            title: (0, y.NC)("Exit time"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.exit_tick
                            })
                        })]
                    })
                },
                si = e => {
                    var t;
                    let {
                        contract: s,
                        active_transaction_id: n,
                        onClickTransaction: a
                    } = e;
                    return (0, l.jsx)(X.Z, {
                        zIndex: t6.TRANSACTION.toString(),
                        alignment: (0, z.rK)() ? "right" : "left",
                        className: "transactions__item-wrapper",
                        is_open: !!(s && n === (null == s ? void 0 : null === (t = s.transaction_ids) || void 0 === t ? void 0 : t.buy)),
                        message: s && (0, l.jsx)(sl, {
                            contract: s
                        }),
                        children: (0, l.jsxs)("div", {
                            "data-testid": "dt_transactions_item",
                            className: "transactions__item",
                            onClick: () => {
                                var e;
                                return a && a((null == s ? void 0 : null === (e = s.transaction_ids) || void 0 === e ? void 0 : e.buy) || null)
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "transactions__cell transactions__trade-type",
                                children: [(0, l.jsx)("div", {
                                    className: "transactions__loader-container",
                                    children: s ? (0, l.jsx)(st, {
                                        icon: (0, l.jsx)(P, {
                                            type: s.underlying
                                        }),
                                        title: s.display_name || ""
                                    }) : (0, l.jsx)(sn, {})
                                }), (0, l.jsx)("div", {
                                    className: "transactions__loader-container",
                                    children: s ? (0, l.jsx)(st, {
                                        icon: (0, l.jsx)($, {
                                            type: s.contract_type || "",
                                            size: "sm"
                                        }),
                                        title: (0, Z.getContractTypeName)(s)
                                    }) : (0, l.jsx)(sn, {})
                                })]
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__entry-spot",
                                children: (0, l.jsx)(st, {
                                    icon: (0, l.jsx)(t9.Z, {
                                        height: 10,
                                        width: 10
                                    }),
                                    title: (0, y.NC)("Entry spot"),
                                    message: (null == s ? void 0 : s.entry_tick) ? ? (0, l.jsx)(ss, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__exit-spot",
                                children: (0, l.jsx)(st, {
                                    icon: (0, l.jsx)(se.C, {
                                        height: 10,
                                        width: 10
                                    }),
                                    title: (0, y.NC)("Exit spot"),
                                    message: (null == s ? void 0 : s.exit_tick) ? ? (0, l.jsx)(ss, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__stake",
                                children: s ? (0, l.jsx)(e2.Z, {
                                    amount: s.buy_price,
                                    currency: s.currency,
                                    show_currency: !0
                                }) : (0, l.jsx)(ss, {})
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__profit",
                                children: (null == s ? void 0 : s.is_completed) ? (0, l.jsx)("div", {
                                    className: D()({
                                        "transactions__profit--win": (null == s ? void 0 : s.profit) && (null == s ? void 0 : s.profit) >= 0,
                                        "transactions__profit--loss": (null == s ? void 0 : s.profit) && (null == s ? void 0 : s.profit) < 0
                                    }),
                                    children: (0, l.jsx)(e2.Z, {
                                        amount: Math.abs(s.profit || 0),
                                        currency: s.currency,
                                        show_currency: !0
                                    })
                                }) : (0, l.jsx)(ss, {})
                            })]
                        })
                    })
                },
                sr = e => {
                    let {
                        row: t = !1,
                        onClickTransaction: s,
                        active_transaction_id: n
                    } = e;
                    switch (t.type) {
                        case F.i.CONTRACT:
                            {
                                let {
                                    data: e
                                } = t;
                                return (0, l.jsx)(si, {
                                    contract: e,
                                    onClickTransaction: s,
                                    active_transaction_id: n
                                })
                            }
                        case F.i.DIVIDER:
                            return (0, l.jsx)("div", {
                                className: "transactions__divider",
                                children: (0, l.jsx)("div", {
                                    className: "transactions__divider-line"
                                })
                            });
                        default:
                            return null
                    }
                },
                so = (0, r.Pi)(e => {
                    let {
                        is_drawer_open: t
                    } = e, [s, n] = i.useState(null), {
                        run_panel: a,
                        transactions: r
                    } = (0, p.oR)(), {
                        contract_stage: o
                    } = a, {
                        transactions: d,
                        toggleTransactionDetailsModal: c,
                        recoverPendingContracts: _
                    } = r, {
                        isDesktop: u
                    } = (0, f.F)();
                    i.useEffect(() => (window.addEventListener("click", x), _(), () => {
                        window.removeEventListener("click", x)
                    }), []), i.useEffect(() => {
                        s && n(null)
                    }, [null == d ? void 0 : d.length]);
                    let x = e => {
                            !((null == e ? void 0 : e.composedPath()) || []).some(e => {
                                var t;
                                return null === (t = e.classList) || void 0 === t ? void 0 : t.contains("transactions__item-wrapper")
                            }) && n(null)
                        },
                        h = e => {
                            e && s === e ? n(null) : n(e)
                        };
                    return (0, l.jsxs)("div", {
                        className: D()("transactions", {
                            "run-panel-tab__content": u,
                            "run-panel-tab__content--mobile": !u && t
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "download__container transaction-details__button-container",
                            children: [(0, l.jsx)(eA, {
                                tab: "transactions"
                            }), (0, l.jsx)(eI.Z, {
                                id: "download__container__view-detail-button",
                                className: "download__container__view-detail-button",
                                disabled: !(null == d ? void 0 : d.length),
                                onClick: () => {
                                    c(!0)
                                },
                                secondary: !0,
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "View Detail"
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "transactions__header",
                            children: [(0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-type",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Type"
                                })
                            }), (0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-spot",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Entry/Exit spot"
                                })
                            }), (0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-profit",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Buy price and P/L"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: D()({
                                transactions__content: u,
                                "transactions__content--mobile": !u
                            }),
                            children: (0, l.jsx)("div", {
                                className: "transactions__scrollbar",
                                children: (null == d ? void 0 : d.length) ? (0, l.jsx)(t7, {
                                    className: "transactions",
                                    data_source: d,
                                    rowRenderer: e => (0, l.jsx)(sr, {
                                        onClickTransaction: h,
                                        active_transaction_id: s,
                                        ...e
                                    }),
                                    keyMapper: e => {
                                        switch (e.type) {
                                            case F.i.CONTRACT:
                                                return e.data.transaction_ids.buy;
                                            case F.i.DIVIDER:
                                                return e.data;
                                            default:
                                                return null
                                        }
                                    },
                                    getRowSize: e => {
                                        let {
                                            index: t
                                        } = e;
                                        switch ((null == d ? void 0 : d[t]).type) {
                                            case F.i.CONTRACT:
                                                return 50;
                                            case F.i.DIVIDER:
                                                return 21;
                                            default:
                                                return 0
                                        }
                                    }
                                }) : (0, l.jsx)(l.Fragment, {
                                    children: o >= es.K.STARTING ? (0, l.jsx)(si, {
                                        contract: null
                                    }) : (0, l.jsx)(ei.Z, {
                                        children: (0, l.jsx)("div", {
                                            className: "transactions-empty-box",
                                            children: (0, l.jsxs)("div", {
                                                className: "transactions-empty",
                                                children: [(0, l.jsx)("div", {
                                                    className: "transactions-empty__icon-box",
                                                    children: (0, l.jsx)(en.Z, {
                                                        height: "64px",
                                                        width: "64px",
                                                        className: "transactions-empty__icon icon-general-fill-g-path",
                                                        color: "secondary",
                                                        fill: "var(--text-general)"
                                                    })
                                                }), (0, l.jsx)(et.Z, {
                                                    as: "h4",
                                                    size: "xs",
                                                    weight: "bold",
                                                    align: "center",
                                                    color: "less-prominent",
                                                    lineHeight: "xxs",
                                                    className: "transactions-empty__header",
                                                    children: (0, l.jsx)(y.Xx, {
                                                        i18n_default_text: "There are no transactions to display"
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "transactions-empty__message",
                                                    children: [(0, l.jsx)(et.Z, {
                                                        size: "xxs",
                                                        color: "less-prominent",
                                                        children: (0, l.jsx)(y.Xx, {
                                                            i18n_default_text: "Here are the possible reasons:"
                                                        })
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "transactions-empty__list",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(et.Z, {
                                                                size: "xs",
                                                                color: "less-prominent",
                                                                children: (0, l.jsx)(y.Xx, {
                                                                    i18n_default_text: "The bot is not running"
                                                                })
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(et.Z, {
                                                                size: "xs",
                                                                color: "less-prominent",
                                                                children: (0, l.jsx)(y.Xx, {
                                                                    i18n_default_text: "The stats are cleared"
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                });
            var sd = s("24335");
            let sc = e => {
                    let {
                        content: t,
                        contentClassName: s,
                        title: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "run-panel__tile",
                        children: [(0, l.jsx)("div", {
                            className: "run-panel__tile-title",
                            children: n
                        }), (0, l.jsx)("div", {
                            className: D()("run-panel__tile-content", s),
                            children: t
                        })]
                    })
                },
                s_ = e => {
                    let {
                        currency: t,
                        is_mobile: s,
                        lost_contracts: n,
                        number_of_runs: a,
                        total_stake: i,
                        total_payout: r,
                        toggleStatisticsInfoModal: o,
                        total_profit: d,
                        won_contracts: c
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: D()("run-panel__stat", {
                            "run-panel__stat--mobile": s
                        }),
                        children: [(0, l.jsx)("div", {
                            className: "run-panel__stat--info",
                            onClick: o,
                            children: (0, l.jsx)("div", {
                                className: "run-panel__stat--info-item",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "What's this?"
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "run-panel__stat--tiles",
                            children: [(0, l.jsx)(sc, {
                                title: (0, y.NC)("Total stake"),
                                alignment: "top",
                                content: (0, l.jsx)(e2.Z, {
                                    amount: i,
                                    currency: t,
                                    show_currency: !0
                                })
                            }), (0, l.jsx)(sc, {
                                title: (0, y.NC)("Total payout"),
                                alignment: "top",
                                content: (0, l.jsx)(e2.Z, {
                                    amount: r,
                                    currency: t,
                                    show_currency: !0
                                })
                            }), (0, l.jsx)(sc, {
                                title: (0, y.NC)("No. of runs"),
                                alignment: "top",
                                content: a
                            }), (0, l.jsx)(sc, {
                                title: (0, y.NC)("Contracts lost"),
                                alignment: "bottom",
                                content: n
                            }), (0, l.jsx)(sc, {
                                title: (0, y.NC)("Contracts won"),
                                alignment: "bottom",
                                content: c
                            }), (0, l.jsx)(sc, {
                                title: (0, y.NC)("Total profit/loss"),
                                content: (0, l.jsx)(e2.Z, {
                                    amount: d,
                                    currency: t,
                                    has_sign: !0,
                                    show_currency: !0
                                }),
                                alignment: "bottom",
                                contentClassName: D()("run-panel__stat-amount", {
                                    "run-panel__stat-amount--positive": d > 0,
                                    "run-panel__stat-amount--negative": d < 0
                                })
                            })]
                        })]
                    })
                },
                su = e => {
                    let {
                        is_clear_stat_disabled: t,
                        is_mobile: s,
                        is_drawer_open: n,
                        onClearStatClick: a
                    } = e;
                    return s && n && (0, l.jsx)(eI.Z, {
                        id: "db-run-panel__clear-button",
                        className: "run-panel__clear-button",
                        disabled: t,
                        text: (0, y.NC)("Reset"),
                        onClick: a,
                        secondary: !0
                    })
                },
                sx = e => {
                    let {
                        active_index: t,
                        is_drawer_open: s,
                        active_tour: n,
                        setActiveTabIndex: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(e5.Z, {
                            active_index: t,
                            onTabItemClick: a,
                            top: !0,
                            children: [(0, l.jsx)("div", {
                                id: "db-run-panel-tab__summary",
                                label: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Summary"
                                }),
                                children: (0, l.jsx)(t$, {
                                    is_drawer_open: s
                                })
                            }), (0, l.jsx)("div", {
                                id: "db-run-panel-tab__transactions",
                                label: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Transactions"
                                }),
                                children: (0, l.jsx)(so, {
                                    is_drawer_open: s
                                })
                            }), (0, l.jsx)("div", {
                                id: "db-run-panel-tab__journal",
                                label: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Journal"
                                }),
                                children: (0, l.jsx)(eM, {})
                            })]
                        }), (s && 2 !== t || n) && (0, l.jsx)(s_, { ...i
                        })]
                    })
                },
                sh = e => {
                    let {
                        is_clear_stat_disabled: t,
                        onClearStatClick: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "run-panel__footer",
                        children: (0, l.jsx)(eI.Z, {
                            id: "db-run-panel__clear-button",
                            className: "run-panel__footer-button",
                            disabled: t,
                            onClick: s,
                            has_effect: !0,
                            secondary: !0,
                            children: (0, l.jsx)("span", {
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Reset"
                                })
                            })
                        })
                    })
                },
                sm = () => (0, l.jsx)("div", {
                    className: "controls__section",
                    children: (0, l.jsx)("div", {
                        className: "controls__buttons",
                        children: (0, l.jsx)(t1, {
                            className: "controls__animation",
                            should_show_overlay: !0
                        })
                    })
                }),
                sp = e => {
                    let {
                        is_mobile: t,
                        is_statistics_info_modal_open: s,
                        toggleStatisticsInfoModal: n
                    } = e;
                    return (0, l.jsx)(N.Z, {
                        className: D()("statistics__modal", {
                            "statistics__modal--mobile": t
                        }),
                        title: (0, y.NC)("What's this?"),
                        is_open: s,
                        toggleModal: n,
                        width: "440px",
                        children: (0, l.jsx)(N.Z.Body, {
                            children: (0, l.jsx)("div", {
                                className: D()("statistics__modal-body", {
                                    "statistics__modal-body--mobile": t
                                }),
                                children: (0, l.jsxs)(ei.Z, {
                                    className: "statistics__modal-scrollbar",
                                    children: [(0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content no-margin",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Total stake"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Total stake since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Total payout"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, y.NC)("Total payout since you last cleared your stats.")
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "No. of runs"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "The number of times your bot has run since you last cleared your stats. Each run includes the execution of all the root blocks."
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Contracts lost"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "The number of contracts you have lost since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Contracts won"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "The number of contracts you have won since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Total profit/loss"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Your total profit/loss since you last cleared your stats. It is the difference between your total payout and your total stake."
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                sj = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        dashboard: t,
                        transactions: s
                    } = (0, p.oR)(), {
                        client: n
                    } = (0, p.oR)(), {
                        isDesktop: a
                    } = (0, f.F)(), {
                        currency: r
                    } = n, {
                        active_index: o,
                        is_drawer_open: d,
                        is_statistics_info_modal_open: c,
                        is_clear_stat_disabled: _,
                        onClearStatClick: u,
                        onMount: x,
                        onRunButtonClick: h,
                        onUnmount: m,
                        setActiveTabIndex: j,
                        toggleDrawer: v,
                        toggleStatisticsInfoModal: b
                    } = e, {
                        statistics: g
                    } = s, {
                        active_tour: y,
                        active_tab: N
                    } = t, {
                        total_payout: C,
                        total_profit: w,
                        total_stake: k,
                        won_contracts: T,
                        lost_contracts: E,
                        number_of_runs: S
                    } = g, {
                        BOT_BUILDER: I,
                        CHART: A,
                        SIGNALS: R,
                        ANALYSIS_TOOL: L
                    } = sd.ve;
                    i.useEffect(() => (x(), () => m()), [x, m]), i.useEffect(() => {
                        !a && v(!1)
                    }, []);
                    let M = (0, l.jsx)(sx, {
                            active_index: o,
                            currency: r,
                            is_drawer_open: d,
                            is_mobile: !a,
                            lost_contracts: E,
                            number_of_runs: S,
                            setActiveTabIndex: j,
                            toggleStatisticsInfoModal: b,
                            total_payout: C,
                            total_profit: w,
                            total_stake: k,
                            won_contracts: T,
                            active_tour: y
                        }),
                        O = (0, l.jsx)(sh, {
                            is_clear_stat_disabled: _,
                            onClearStatClick: u
                        }),
                        U = (0, l.jsx)(su, {
                            is_clear_stat_disabled: _,
                            is_mobile: !a,
                            is_drawer_open: d,
                            onClearStatClick: u
                        });
                    return !([I, A, L, R].includes(N) || y) && a || "bot_builder" === y ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            cassName: !a && d ? "run-panel__container--mobile" : "run-panel",
                            children: [(0, l.jsx)(e1, {
                                anchor: "right",
                                className: D()("run-panel", {
                                    "run-panel__container": a,
                                    "run-panel__container--tour-active": a && y
                                }),
                                contentClassName: "run-panel__content",
                                header: U,
                                footer: a && O,
                                is_open: d,
                                toggleDrawer: v,
                                width: 366,
                                zIndex: t6.RUN_PANEL,
                                children: M
                            }), !a && (0, l.jsx)(sm, {})]
                        }), (0, l.jsx)(eJ, {
                            onRunButtonClick: h
                        }), (0, l.jsx)(sp, {
                            is_mobile: !a,
                            is_statistics_info_modal_open: c,
                            toggleStatisticsInfoModal: b
                        })]
                    })
                }),
                sv = e => {
                    let {
                        body_className: t,
                        className: s,
                        should_header_stick_body: n,
                        header: a,
                        header_background_color: r,
                        height_offset: o = "0px",
                        is_flex: d,
                        is_popup: c,
                        is_modal_open: _,
                        onClickClose: u,
                        renderPageFooterChildren: x,
                        page_footer_className: h,
                        page_footer_parent: m,
                        page_footer_parent_className: p,
                        page_header_className: j,
                        page_header_text: v,
                        renderPageHeaderTrailingIcon: b,
                        pageHeaderReturnFn: g,
                        renderPageHeader: y,
                        renderPageHeaderElement: f,
                        children: N,
                        container_children: C
                    } = e;
                    return (0, l.jsx)(eX, {
                        is_visible: _,
                        className: D()("dc-mobile-full-page-modal", s),
                        keyname: `${s}__wrapper`,
                        children: (0, l.jsx)(eW, {
                            header: a,
                            onClickClose: u,
                            children: (0, l.jsxs)(eF.Z, {
                                className: D()("dc-mobile-full-page-modal", {
                                    "dc-mobile-full-page-modal--flex": d,
                                    "dc-mobile-full-page-modal--popup": c
                                }),
                                height_offset: o,
                                children: [(y || v || f) && (0, l.jsxs)("div", {
                                    className: D()("dc-mobile-full-page-modal__header", {
                                        "dc-mobile-full-page-modal__header--border-bottom": !n,
                                        ...j ? {
                                            [j]: !!j
                                        } : {}
                                    }),
                                    style: {
                                        background: r
                                    },
                                    children: [g && (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-return",
                                        children: (0, l.jsx)(eY.Z, {
                                            onClick: g,
                                            "data-testid": "dt_mobile_full_page_return_icon"
                                        })
                                    }), y && y(), (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-text",
                                        children: f ? ? (0, l.jsx)(et.Z, {
                                            as: "p",
                                            color: "prominent",
                                            lineHeight: "m",
                                            size: "s",
                                            weight: "bold",
                                            children: v
                                        })
                                    }), b && (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-trailing-icon",
                                        children: b()
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: D()("dc-mobile-full-page-modal__body", t),
                                    children: N
                                }), x && (0, l.jsxs)(i.Fragment, {
                                    children: [m && (0, l.jsx)("div", {
                                        className: D()("dc-mobile-full-page-modal__footer-parent", p),
                                        children: m
                                    }), (0, l.jsx)("div", {
                                        className: D()("dc-mobile-full-page-modal__footer", h),
                                        children: x()
                                    })]
                                }), C]
                            })
                        })
                    })
                },
                sb = "transaction-details-modal-mobile",
                sg = () => (0, l.jsx)(U.ZP, {
                    className: "transactions__loader-text",
                    "data-testid": "transaction_details_card_cell_loader",
                    height: 10,
                    width: 80,
                    speed: 3,
                    foregroundColor: "var(--general-section-2)",
                    backgroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "100",
                        height: "12"
                    })
                }),
                sy = e => {
                    let {
                        label: t = "",
                        large_title: s = !1,
                        right_aligned: n = !1,
                        title: a = "",
                        loader: i = !1
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: D()(`${sb}__card__column`, {
                            [`${sb}__right-align`]: n
                        }),
                        children: [a && (0, l.jsx)("div", {
                            className: D()({
                                [`${sb}__small-title`]: !s,
                                [`${sb}__large-title`]: s
                            }),
                            children: (0, y.NC)(a)
                        }), (0, l.jsx)("div", {
                            className: `${sb}__label`,
                            children: i ? (0, l.jsx)(sg, {}) : t
                        })]
                    })
                },
                sf = e => {
                    let {
                        message: t,
                        icon: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: D()(`${sb}__table-cell`, `${sb}__table-cell__icon-wrapper`),
                        children: t && (0, l.jsx)(X.Z, {
                            alignment: (0, z.rK)() ? "left" : "right",
                            message: t,
                            zIndex: "7",
                            children: s
                        })
                    })
                };

            function sN(e) {
                var t;
                let {
                    transaction: s
                } = e;
                return (0, l.jsxs)("div", {
                    className: `${sb}__card`,
                    "data-testid": "dt_mobile_transaction_card",
                    children: [(0, l.jsx)("div", {
                        className: `${sb}__card__row`,
                        children: (0, l.jsx)(sy, {
                            label: (0, l.jsxs)("div", {
                                className: `${sb}__icon-wrapper`,
                                children: [(0, l.jsx)(sf, {
                                    message: null == s ? void 0 : s.display_name,
                                    icon: (0, l.jsx)(P, {
                                        type: null == s ? void 0 : s.underlying,
                                        size: "md"
                                    })
                                }), (0, l.jsx)(sf, {
                                    message: (0, Z.getContractTypeName)(s),
                                    icon: (0, l.jsx)($, {
                                        type: null == s ? void 0 : s.contract_type,
                                        size: "md"
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: `${sb}__card__row`,
                        children: (0, l.jsx)(sy, {
                            title: "Ref. ID",
                            label: null == s ? void 0 : null === (t = s.transaction_ids) || void 0 === t ? void 0 : t.buy
                        })
                    }), (0, l.jsxs)("div", {
                        className: `${sb}__card__row`,
                        children: [(0, l.jsx)(sy, {
                            title: "Timestamp",
                            label: (0, x.fcq)(null == s ? void 0 : s.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                        }), (0, l.jsx)(sy, {
                            title: "Entry Spot",
                            label: null == s ? void 0 : s.entry_tick,
                            right_aligned: !0,
                            loader: !s.entry_tick
                        })]
                    }), (0, l.jsxs)("div", {
                        className: `${sb}__card__row`,
                        children: [(0, l.jsx)(sy, {
                            title: "Buy Price",
                            label: Math.abs((null == s ? void 0 : s.buy_price) ? ? 0).toFixed(2)
                        }), (0, l.jsx)(sy, {
                            title: "Exit Spot",
                            label: null == s ? void 0 : s.exit_tick,
                            right_aligned: !0,
                            loader: !s.exit_tick
                        })]
                    }), (0, l.jsxs)("div", {
                        className: `${sb}__card__row`,
                        children: [(0, l.jsx)(sy, {
                            title: "Profit / Loss",
                            large_title: !0
                        }), (0, l.jsx)(sy, {
                            label: (0, l.jsx)("div", {
                                className: D()({
                                    [`${sb}__card__profit--win`]: (null == s ? void 0 : s.profit) > 0,
                                    [`${sb}__card__profit--loss`]: (null == s ? void 0 : s.profit) < 0
                                }),
                                children: Math.abs((null == s ? void 0 : s.profit) ? ? 0).toFixed(2)
                            }),
                            right_aligned: !0,
                            loader: !s.is_completed
                        })]
                    })]
                })
            }
            let sC = (0, r.Pi)(() => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        transactions: t,
                        run_panel: s
                    } = (0, p.oR)(), {
                        toggleTransactionDetailsModal: n,
                        is_transaction_details_modal_open: a,
                        transactions: i,
                        statistics: r
                    } = t, {
                        toggleStatisticsInfoModal: o
                    } = s;
                    return (0, l.jsxs)(sv, {
                        is_modal_open: a,
                        className: "transaction-details-modal-mobile",
                        header: (0, y.NC)("Transactions detailed summary"),
                        onClickClose: () => {
                            n(!1)
                        },
                        height_offset: "80px",
                        children: [(0, l.jsx)("div", {
                            className: "transaction-details-modal-mobile__wrapper",
                            "data-testid": "transaction_details_cards",
                            children: null == i ? void 0 : i.map(e => {
                                var t;
                                let {
                                    data: s,
                                    type: n
                                } = e;
                                return n === F.i.CONTRACT ? (0, l.jsx)(sN, {
                                    transaction: s
                                }, null == s ? void 0 : null === (t = s.transaction_ids) || void 0 === t ? void 0 : t.buy) : (0, l.jsx)("div", {
                                    className: "transaction-details-modal-mobile__divider",
                                    children: (0, l.jsx)("div", {
                                        className: "transactions__divider-line"
                                    })
                                }, `transaction-row-divider-${s}`)
                            })
                        }), (0, l.jsx)("div", {
                            className: "transaction-details-modal-mobile__card__footer",
                            children: (0, l.jsx)(s_, {
                                is_mobile: !0,
                                currency: null == e ? void 0 : e.currency,
                                lost_contracts: (null == r ? void 0 : r.lost_contracts) ? ? 0,
                                number_of_runs: (null == r ? void 0 : r.number_of_runs) ? ? 0,
                                total_payout: (null == r ? void 0 : r.total_payout) ? ? 0,
                                total_profit: (null == r ? void 0 : r.total_profit) ? ? 0,
                                total_stake: (null == r ? void 0 : r.total_stake) ? ? 0,
                                won_contracts: (null == r ? void 0 : r.won_contracts) ? ? 0,
                                toggleStatisticsInfoModal: o
                            })
                        })]
                    })
                }),
                sw = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, f.F)();
                    return (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(w.a, {}),
                        children: e ? (0, l.jsx)(ee, {}) : (0, l.jsx)(sC, {})
                    })
                });
            var sk = s("76052"),
                sT = s("89064"),
                sE = s("75324"),
                sS = s("83257"),
                sI = s("6388");
            let {
                TRACKJS_TOKEN: sA
            } = {
                DERIV_APP_ID: void 0,
                TRANSLATIONS_CDN_URL: void 0,
                R2_PROJECT_NAME: void 0,
                CROWDIN_BRANCH_NAME: void 0,
                TRACKJS_TOKEN: void 0,
                APP_ENV: void 0,
                REF_NAME: void 0,
                REMOTE_CONFIG_URL: void 0,
                GD_CLIENT_ID: void 0,
                GD_APP_ID: void 0,
                GD_API_KEY: void 0,
                DATADOG_SESSION_REPLAY_SAMPLE_RATE: void 0,
                DATADOG_SESSION_SAMPLE_RATE: void 0,
                DATADOG_APPLICATION_ID: void 0,
                DATADOG_CLIENT_TOKEN: void 0,
                RUDDERSTACK_KEY: void 0,
                GROWTHBOOK_CLIENT_KEY: void 0,
                GROWTHBOOK_DECRYPTION_KEY: void 0
            }, sR = () => ({
                initTrackJS: e => {
                    try {
                        if (!sI.t.isInstalled()) {
                            var t;
                            sI.t.install({
                                application: "standalone-deriv-bot",
                                dedupe: !1,
                                enabled: !1,
                                token: sA,
                                userId: e,
                                version: (null === (t = document.querySelector("meta[name=version]")) || void 0 === t ? void 0 : t.content) ? ? "undefined"
                            })
                        }
                    } catch (e) {
                        console.error("Failed to initialize TrackJS", e)
                    }
                }
            });
            s("99702");
            let sL = e => {};
            var sM = s("72755");
            let sO = e => {
                ! function(t, s, n, a) {
                    t.hj = t.hj || function() {
                        (t.hj.q = t.hj.q || []).push(arguments)
                    }, t._hjSettings = {
                        hjid: 3050531,
                        hjsv: 6
                    };
                    let l = s.getElementsByTagName("head")[0],
                        i = s.createElement("script");
                    i.async = 1, i.src = n + t._hjSettings.hjid + a + t._hjSettings.hjsv, l.appendChild(i);
                    let r = e.loginid,
                        o = e.is_virtual ? "Demo" : "Real",
                        d = e.account_open_date ? (0, sM.vk)(e.account_open_date) : void 0;
                    window.hj("identify", r, {
                        "Account created": d ? (0, sM.gb)(d).format("YYYY-MM-DD") : "",
                        "Account type": o,
                        "User country": e.clients_country
                    })
                }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
            };
            var sD = s("47494"),
                sU = s("44740");
            let sF = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("audio", {
                        id: "announcement",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/announcement.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "earned-money",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/coins.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "job-done",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/job-done.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "error",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/out-of-bounds.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "severe-error",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/i-am-being-serious.mp3`
                    })]
                }),
                sZ = (0, r.Pi)(() => {
                    let {
                        blockly_store: e
                    } = (0, p.oR)(), {
                        is_loading: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t && (0, l.jsxs)("div", {
                            className: "bot__loading",
                            "data-testid": "blockly-loader",
                            children: [(0, l.jsx)(w.a, {}), (0, l.jsx)("div", {
                                children: "Loading Blockly..."
                            })]
                        })
                    })
                });
            var sz = s("10434");
            let sB = (0, r.Pi)(() => {
                let {
                    dashboard: e
                } = (0, p.oR)(), {
                    is_web_socket_intialised: t
                } = e, s = () => {
                    location.reload()
                };
                return (0, l.jsxs)(sz.Z, {
                    is_visible: !t,
                    is_mobile_full_width: !0,
                    className: "dc-dialog bot-stopped-dialog",
                    cancel_button_text: (0, y.NC)("Go to Reports"),
                    confirm_button_text: (0, y.NC)("Back to Bot"),
                    onCancel: () => location.replace("reports/positions"),
                    onConfirm: () => location.reload(),
                    children: [(0, l.jsxs)("div", {
                        className: "dc-dialog__content__header",
                        children: [(0, l.jsx)(et.Z, {
                            "data-testid": "data-title",
                            weight: "bold",
                            as: "p",
                            align: "left",
                            size: "s",
                            color: "prominent",
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "You're back online"
                            })
                        }), (0, l.jsx)("div", {
                            "data-testid": "data-close-button",
                            onClick: s,
                            onKeyDown: e => {
                                "Enter" === e.key && s()
                            },
                            tabIndex: 0,
                            children: (0, l.jsx)(E.Z, {
                                height: "20px",
                                width: "20px",
                                fill: "var(--text-general)"
                            })
                        })]
                    }), (0, l.jsx)(et.Z, {
                        as: "p",
                        align: "left",
                        size: "xs",
                        color: "prominent",
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "The bot has stopped, but your trade may still be running. You can check it on the Reports page."
                        })
                    })]
                })
            });
            var sP = s("64736"),
                sX = s("59462"),
                sH = s("49985"),
                s$ = s("83571"),
                sV = s("13617");
            let sG = e => {
                let {
                    load_strategy_tab: t
                } = e;
                s$.Analytics.trackEvent("ce_bot_form", {
                    action: sV.om.SWITCH_LOAD_STRATEGY_TAB,
                    form_name: sV.oH,
                    load_strategy_tab: t,
                    subform_name: "load_strategy",
                    subpage_name: "bot_builder"
                })
            };
            var sq = s("66062"),
                sY = s("31865"),
                sW = s("97909");
            let sK = (0, r.Pi)(() => {
                let {
                    google_drive: e,
                    load_modal: t
                } = (0, p.oR)(), {
                    is_authorised: s,
                    signIn: n,
                    signOut: a
                } = e, {
                    is_open_button_loading: r,
                    onDriveOpen: o
                } = t, {
                    isDesktop: d
                } = (0, f.F)(), c = d ? "128" : "96";
                return (0, l.jsx)("div", {
                    className: "load-strategy__container",
                    "data-testid": "dt_google_drive",
                    children: (0, l.jsxs)("div", {
                        className: "load-strategy__google-drive",
                        children: [(0, l.jsx)(sW.Z, {
                            className: D()("load-strategy__google-drive-icon", {
                                "load-strategy__google-drive-icon--disabled": !s
                            }),
                            height: c,
                            width: c
                        }), (0, l.jsx)("div", {
                            className: "load-strategy__google-drive-connected-text",
                            children: s ? (0, l.jsx)(y.Xx, {
                                i18n_default_text: "You are connected to Google Drive"
                            }) : "Google Drive"
                        }), s ? (0, l.jsxs)(eI.Z.Group, {
                            children: [(0, l.jsx)(eI.Z, {
                                onClick: () => {
                                    a(), (0, tK.z9)()
                                },
                                has_effect: !0,
                                secondary: !0,
                                large: !0,
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Disconnect"
                                })
                            }), (0, l.jsx)(eI.Z, {
                                onClick: () => {
                                    o()
                                },
                                is_loading: r,
                                has_effect: !0,
                                primary: !0,
                                large: !0,
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Open"
                                })
                            })]
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsxs)("div", {
                                className: "load-strategy__google-drive-terms",
                                children: [(0, l.jsx)("div", {
                                    className: "load-strategy__google-drive-text",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "To import your bot from your Google Drive, you'll need to sign in to your Google account."
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "load-strategy__google-drive-text",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "To know how Google Drive handles your data, please review Deriv’s <0>Privacy policy.</0>",
                                        components: [(0, l.jsx)(sY.Z, {
                                            className: "link",
                                            href: "tnc/security-and-privacy.pdf",
                                            is_document: !0
                                        }, 0)]
                                    })
                                })]
                            }), (0, l.jsx)(eI.Z, {
                                onClick: () => {
                                    n(), (0, tK.df)()
                                },
                                has_effect: !0,
                                primary: !0,
                                large: !0,
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Sign in"
                                })
                            })]
                        })]
                    })
                })
            });
            var sJ = s("81593"),
                sQ = s("73446");
            let s0 = (0, r.Pi)(() => {
                let {
                    load_modal: e,
                    dashboard: t
                } = (0, p.oR)(), {
                    is_open_button_loading: s,
                    is_open_button_disabled: n,
                    loadStrategyOnBotBuilder: a,
                    setLoadedLocalFile: r,
                    saveStrategyToLocalStorage: o,
                    toggleLoadModal: d
                } = e, {
                    setOpenSettings: c,
                    setPreviewOnPopup: _
                } = t, {
                    isDesktop: u
                } = (0, f.F)(), x = u ? i.Fragment : eI.Z.Group;
                return (0, l.jsxs)(x, {
                    children: [!u && (0, l.jsx)(eI.Z, {
                        text: (0, y.NC)("Cancel"),
                        onClick: () => r(null),
                        has_effect: !0,
                        secondary: !0,
                        large: !0
                    }), (0, l.jsx)(eI.Z, {
                        text: (0, y.NC)("Open"),
                        onClick: () => {
                            a(), o(), r(null), d(), _(!1), c(sX.tx.BOT_IMPORT)
                        },
                        is_loading: s,
                        has_effect: !0,
                        primary: !0,
                        large: !0,
                        disabled: n
                    })]
                })
            });
            var s1 = s("19405"),
                s2 = s("83533");
            let s5 = (0, r.Pi)(e => {
                    let {
                        mockZoomInOut: t
                    } = e, {
                        dashboard: s
                    } = (0, p.oR)(), {
                        onZoomInOutClick: n
                    } = s;
                    return (0, l.jsxs)("div", {
                        className: "load-strategy__preview-workspace-controls",
                        children: [(0, l.jsx)(s1.Z, {
                            className: "load-strategy__preview-workspace-icon",
                            onClick: () => {
                                t ? t(!0) : n(!0)
                            },
                            "data-testid": "zoom-in",
                            fill: "var(--text-general)"
                        }), (0, l.jsx)(s2.Z, {
                            className: "load-strategy__preview-workspace-icon",
                            onClick: () => {
                                t ? t(!1) : n(!1)
                            },
                            "data-testid": "zoom-out",
                            fill: "var(--text-general)"
                        })]
                    })
                }),
                s3 = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        load_modal: t,
                        blockly_store: s
                    } = (0, p.oR)(), {
                        active_tab: n,
                        active_tour: a
                    } = e, {
                        handleFileChange: r,
                        loaded_local_file: o,
                        setLoadedLocalFile: d,
                        imported_strategy_type: c,
                        is_open_button_loading: _
                    } = t, u = i.useRef(null), [x, h] = i.useState(!0), {
                        isDesktop: m
                    } = (0, f.F)(), {
                        is_loading: j
                    } = s;
                    return (i.useEffect(() => {
                        o && x && "pending" !== c && !j && "old" === c && (0, sP.J)((0, sX.xG)().strategy_conversion, void 0, {
                            closeButton: !1
                        })
                    }, [o, x, c, _, j]), o && x) ? (0, l.jsxs)("div", {
                        className: "load-strategy__container load-strategy__container--has-footer",
                        children: [(0, l.jsxs)("div", {
                            className: D()("load-strategy__local-preview", {
                                "load-strategy__local-preview--active": 1 === n && a
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__title",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Preview"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__preview-workspace",
                                children: (0, l.jsxs)("div", {
                                    id: "load-strategy__blockly-container",
                                    style: {
                                        height: "100%"
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: "load-strategy__local-preview-close",
                                        children: (0, l.jsx)(E.Z, {
                                            onClick: () => {
                                                d(null)
                                            },
                                            "data-testid": "dt_load-strategy__local-preview-close",
                                            height: "20px",
                                            width: "20px"
                                        })
                                    }), (0, l.jsx)(s5, {})]
                                })
                            })]
                        }), !m && (0, l.jsx)("div", {
                            className: "load-strategy__local-footer",
                            children: (0, l.jsx)(s0, {})
                        })]
                    }) : (0, l.jsx)("div", {
                        className: "load-strategy__container",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__local-dropzone",
                            children: [(0, l.jsx)("input", {
                                type: "file",
                                ref: u,
                                accept: "application/xml, text/xml",
                                style: {
                                    display: "none"
                                },
                                onChange: e => h(r(e, !1)),
                                "data-testid": "dt-load-strategy-file-input"
                            }), (0, l.jsxs)("div", {
                                "data-testid": "dt__local-dropzone-area",
                                className: "load-strategy__local-dropzone-area",
                                onDrop: e => {
                                    r(e, !1)
                                },
                                children: [m ? (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)(sQ.Z, {
                                        height: "128px",
                                        width: "128px",
                                        className: "load-strategy__local-icon"
                                    }), (0, l.jsx)("div", {
                                        className: "load-strategy__local-title",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Drag your XML file here"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "load-strategy__local-description",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "or, if you prefer..."
                                        })
                                    })]
                                }) : (0, l.jsx)(sJ.Z, {
                                    height: "96px",
                                    width: "96px",
                                    className: "load-strategy__local-icon"
                                }), (0, l.jsx)(eI.Z, {
                                    text: x ? (0, y.NC)("Select an XML file from your device") : (0, y.NC)("Please upload an XML file"),
                                    "data-testid": "dt_load-strategy__local-upload",
                                    onClick: () => {
                                        var e;
                                        return null == u ? void 0 : null === (e = u.current) || void 0 === e ? void 0 : e.click()
                                    },
                                    has_effect: !0,
                                    primary: !0,
                                    large: !0
                                })]
                            })]
                        })
                    })
                });
            var s8 = s("45845"),
                s4 = s("30810"),
                s7 = s("39590");
            let s6 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return e || "string" == typeof e ? ({
                        [s4.R.UNSAVED]: (0, l.jsx)(s7.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)",
                            className: "icon-general-fill-g-path"
                        }),
                        [s4.R.LOCAL]: (0, l.jsx)(sQ.Z, {
                            height: "16px",
                            width: "16px",
                            fill: "var(--text-general)"
                        }),
                        [s4.R.GOOGLE_DRIVE]: (0, l.jsx)(sW.Z, {
                            className: t,
                            height: "16px",
                            width: "16px",
                            fill: "var(--text-general)"
                        })
                    })[e] : (0, l.jsx)(s7.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    })
                },
                s9 = (0, r.Pi)(e => {
                    let {
                        workspace: t
                    } = e, {
                        load_modal: s,
                        blockly_store: n
                    } = (0, p.oR)(), {
                        setLoading: a
                    } = n, {
                        getSaveType: i,
                        loadStrategyOnModalRecentPreview: r,
                        selected_strategy_id: o,
                        updateXmlValuesOnStrategySelection: d
                    } = s;
                    return (0, l.jsxs)("div", {
                        className: D()("load-strategy__recent-item", {
                            "load-strategy__recent-item--selected": o === t.id
                        }),
                        onClick: () => {
                            o !== t.id && (a(!0), r(t.id), d())
                        },
                        "data-testid": "dt_recent_workspace_item",
                        children: [(0, l.jsxs)("div", {
                            className: "load-strategy__recent-item-text",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent-item-title",
                                title: t.name,
                                children: t.name
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent-item-time",
                                children: (0, Z.timeSince)(t.timestamp)
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "load-strategy__recent-item-location",
                            children: [s6(t.save_type, "load-strategy__recent-icon--active"), (0, l.jsx)("div", {
                                className: "load-strategy__recent-item-saved",
                                children: i(t.save_type)
                            })]
                        })]
                    }, t.id)
                }),
                ne = (0, r.Pi)(() => {
                    let {
                        load_modal: e
                    } = (0, p.oR)(), {
                        is_explanation_expand: t,
                        recent_strategies: s,
                        toggleExplanationExpand: n
                    } = e;
                    return s.length ? (0, l.jsx)("div", {
                        className: "load-strategy__container load-strategy__container--has-footer",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__recent",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent__files",
                                children: s.map(e => (0, l.jsx)(s9, {
                                    workspace: e
                                }, e.id))
                            }), (0, l.jsxs)("div", {
                                className: "load-strategy__recent__preview",
                                children: [(0, l.jsx)("div", {
                                    className: "load-strategy__title load-strategy__recent-preview-title",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Preview"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "load-strategy__preview-workspace",
                                    children: (0, l.jsx)("div", {
                                        id: "load-strategy__blockly-container",
                                        style: {
                                            height: "100%"
                                        },
                                        children: (0, l.jsx)(s5, {})
                                    })
                                })]
                            })]
                        })
                    }) : (0, l.jsx)("div", {
                        className: "load-strategy__container",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__recent__empty",
                            "data-testid": "dt-load-strategy__recent__empty",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-icon",
                                children: (0, l.jsx)(s8.Z, {
                                    height: "128px",
                                    width: "128px"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-title",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "You do not have any recent bots"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-description",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Create one or upload one from your local drive or Google Drive."
                                })
                            }), (0, l.jsx)("div", {
                                tabIndex: 0,
                                className: "load-strategy__recent__empty-expand",
                                "data-testid": "dt-load-strategy__recent__empty-expand",
                                onClick: n,
                                onKeyDown: e => {
                                    "Enter" === e.key && n()
                                },
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Why can't I see my recent bots?"
                                })
                            }), (0, l.jsxs)("div", {
                                "data-testid": t ? "dt-empty-explanation-list--open" : "dt-empty-explanation-list--close",
                                className: D()("load-strategy__recent__empty-explanation", {
                                    "load-strategy__recent__empty-explanation--show": t
                                }),
                                children: [(0, l.jsx)("div", {
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "If you've recently used bots but don't see them in this list, it may be because you:"
                                    })
                                }), (0, l.jsxs)("ol", {
                                    className: "load-strategy__recent__empty-explanation-list",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "1. Logged in from a different device"
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "2. Logged in from a different browser"
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "3. Cleared your browser cache"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }),
                nt = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        is_open_button_loading: s,
                        is_open_button_disabled: n,
                        loadStrategyOnBotBuilder: a,
                        toggleLoadModal: i
                    } = e, {
                        setOpenSettings: r
                    } = t;
                    return (0, l.jsx)(eI.Z, {
                        text: (0, y.NC)("Open"),
                        onClick: () => {
                            a(), i(), r(sX.tx.BOT_IMPORT)
                        },
                        is_loading: s,
                        has_effect: !0,
                        primary: !0,
                        large: !0,
                        disabled: n
                    })
                }),
                ns = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        active_index: s,
                        is_load_modal_open: n,
                        loaded_local_file: a,
                        onEntered: i,
                        recent_strategies: r,
                        setActiveTabIndex: o,
                        toggleLoadModal: d,
                        tab_name: c
                    } = e, {
                        setPreviewOnPopup: _
                    } = t, {
                        isDesktop: u
                    } = (0, f.F)(), x = (0, y.NC)("Load strategy"), h = e => {
                        o(e), sG({
                            load_strategy_tab: sq.yO[e + (u ? 0 : 1)]
                        })
                    };
                    if (e.loadFileFromContent = async t => {
                            try {
                                console.log("Loading XML content:", t);
                                let s = new DOMParser().parseFromString(t, "application/xml");
                                e.loadParsedXML = e => {
                                    let t = Blockly.getMainWorkspace();
                                    t.clear(), Blockly.Xml.domToWorkspace(e.documentElement, t), console.log("Parsed XML loaded into workspace")
                                }, e.loadParsedXML(s)
                            } catch (e) {
                                console.error("Error loading XML content:", e)
                            }
                        }, !u) return (0, l.jsx)(sv, {
                        is_modal_open: n,
                        className: "load-strategy__wrapper",
                        header: x,
                        onClickClose: () => {
                            _(!1), d(), (0, tK._W)({
                                subform_name: "load_strategy",
                                load_strategy_tab: sq.yO[s + 1]
                            })
                        },
                        height_offset: "80px",
                        page_overlay: !0,
                        children: (0, l.jsxs)(e5.Z, {
                            active_index: s,
                            onTabItemClick: h,
                            top: !0,
                            children: [(0, l.jsx)("div", {
                                label: (0, y.NC)("Local"),
                                children: (0, l.jsx)(s3, {})
                            }), (0, l.jsx)("div", {
                                label: "Google Drive",
                                children: (0, l.jsx)(sK, {})
                            })]
                        })
                    });
                    let m = !!a && c === sH.y.TAB_LOCAL,
                        j = r.length > 0 && c === sH.y.TAB_RECENT;
                    return (0, l.jsxs)(N.Z, {
                        title: x,
                        className: "load-strategy",
                        width: "1000px",
                        height: "80vh",
                        is_open: n,
                        toggleModal: () => {
                            d(), (0, tK._W)({
                                subform_name: "load_strategy",
                                load_strategy_tab: sq.yO[s + (u ? 0 : 1)]
                            })
                        },
                        onEntered: i,
                        elements_to_ignore: [document.querySelector(".injectionDiv")],
                        children: [(0, l.jsx)(N.Z.Body, {
                            children: (0, l.jsxs)(e5.Z, {
                                active_index: s,
                                onTabItemClick: h,
                                top: !0,
                                header_fit_content: !0,
                                children: [(0, l.jsx)("div", {
                                    label: (0, y.NC)("Recent"),
                                    children: (0, l.jsx)(ne, {})
                                }), (0, l.jsx)("div", {
                                    label: (0, y.NC)("Local"),
                                    children: (0, l.jsx)(s3, {})
                                }), (0, l.jsx)("div", {
                                    label: "Google Drive",
                                    children: (0, l.jsx)(sK, {})
                                })]
                            })
                        }), j && (0, l.jsx)(N.Z.Footer, {
                            has_separator: !0,
                            children: (0, l.jsx)(nt, {})
                        }), m && (0, l.jsx)(N.Z.Footer, {
                            has_separator: !0,
                            children: (0, l.jsx)(s0, {})
                        })]
                    })
                });
            var nn = s("88010"),
                na = s.n(nn),
                nl = s("63465"),
                ni = s.n(nl);
            let nr = e => {
                    let {
                        bot_name: t,
                        button_status: s,
                        is_authorised: n,
                        validateBotName: a,
                        toggleSaveModal: i,
                        is_mobile: r,
                        is_onscreen_keyboard_active: o,
                        setCurrentFocus: d
                    } = e;
                    return (0, l.jsx)(eO.J9, {
                        initialValues: {
                            is_local: !0,
                            save_as_collection: !1,
                            bot_name: t === (0, Z.config)().default_file_name ? "" : t
                        },
                        validate: a,
                        onSubmit: e => {
                            let t = generateXMLContent(e),
                                s = na()(t, "your-secret-key").toString(ni());
                            saveToFile(`${t}
<!-- SIGNATURE: ${s} -->`)
                        },
                        children: e => {
                            let {
                                values: {
                                    is_local: t
                                },
                                setFieldValue: n,
                                touched: a,
                                errors: c
                            } = e;
                            return (0, l.jsx)(ei.Z, {
                                height: r ? "calc(100%)" : "500px",
                                autohide: !0,
                                children: (0, l.jsxs)(eO.l0, {
                                    className: D()({
                                        "form--active-keyboard": o
                                    }),
                                    children: [(0, l.jsxs)("div", {
                                        className: "modal__content",
                                        children: [(0, l.jsxs)(et.Z, {
                                            size: "xs",
                                            lineHeight: "l",
                                            children: [(0, y.NC)("Enter your bot name, choose to save on your computer or Google Drive, and hit "), (0, l.jsx)("strong", {
                                                children: (0, y.NC)("Save.")
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: "modal__content-row",
                                            children: (0, l.jsx)(eO.gN, {
                                                name: "bot_name",
                                                children: e => {
                                                    let {
                                                        field: t
                                                    } = e;
                                                    return (0, l.jsx)(eV, {
                                                        className: "save-type__input",
                                                        type: "text",
                                                        placeholder: (0, y.NC)("Untitled Strategy"),
                                                        error: a[t.name] && c[t.name],
                                                        label: (0, y.NC)("Bot name"),
                                                        onFocus: e => d(e.currentTarget.value),
                                                        onBlur: () => d(""),
                                                        ...t
                                                    })
                                                }
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: D()("modal__footer", {
                                            "modal__footer--active-keyboard": o
                                        }),
                                        children: [(0, l.jsx)(eI.Z, {
                                            type: "button",
                                            className: "modal__footer--button",
                                            text: (0, y.NC)("Cancel"),
                                            onClick: i,
                                            secondary: !0
                                        }), (0, l.jsx)(eI.Z, {
                                            className: "modal__footer--button",
                                            type: "submit",
                                            is_loading: 1 === s,
                                            is_submit_success: 2 === s,
                                            text: (0, y.NC)("Save"),
                                            primary: !0
                                        })]
                                    })]
                                })
                            })
                        }
                    })
                },
                no = (0, r.Pi)(() => {
                    let {
                        save_modal: e,
                        google_drive: t,
                        dashboard: s,
                        load_modal: n,
                        ui: a
                    } = (0, p.oR)(), {
                        dashboard_strategies: r
                    } = n, {
                        button_status: o,
                        bot_name: d,
                        is_save_modal_open: c,
                        toggleSaveModal: _,
                        updateBotName: u,
                        validateBotName: x
                    } = e, {
                        is_authorised: h
                    } = t, {
                        is_onscreen_keyboard_active: m,
                        setCurrentFocus: j
                    } = a, {
                        isMobile: v
                    } = (0, f.F)(), {
                        active_tab: b
                    } = s;
                    return (0, i.useEffect)(() => {
                        if (1 === b) {
                            var e;
                            u((null == r ? void 0 : null === (e = r[0]) || void 0 === e ? void 0 : e.name) ? ? "")
                        }
                    }, [b, r, u]), v ? (0, l.jsx)(sv, {
                        is_modal_open: c,
                        className: "save-modal__wrapper",
                        header: (0, y.NC)("Save strategy"),
                        onClickClose: _,
                        height_offset: "80px",
                        page_overlay: !0,
                        children: (0, l.jsx)(nr, {
                            bot_name: d,
                            button_status: o,
                            is_authorised: h,
                            validateBotName: x,
                            toggleSaveModal: _,
                            is_mobile: v,
                            is_onscreen_keyboard_active: m,
                            setCurrentFocus: j
                        })
                    }) : (0, l.jsx)(N.Z, {
                        title: (0, y.NC)("Save strategy"),
                        className: "modal--save",
                        width: "32.8rem",
                        height: "50rem",
                        is_open: c,
                        toggleModal: _,
                        children: (0, l.jsx)(nr, {
                            bot_name: d,
                            button_status: o,
                            is_authorised: h,
                            validateBotName: x,
                            toggleSaveModal: _,
                            setCurrentFocus: j
                        })
                    })
                });
            var nd = s("58902"),
                nc = s("13323");
            let n_ = {
                    fontWeight: "700",
                    fontSize: "1.4rem",
                    height: "4rem",
                    padding: "1rem 1.6rem"
                },
                nu = e => {
                    let {
                        steps: t,
                        styles: s,
                        handleCallback: n,
                        ...a
                    } = e;
                    return (0, l.jsx)(nc.ZP, {
                        steps: t,
                        continuous: !0,
                        callback: n,
                        locale: {
                            back: (0, y.NC)("Previous"),
                            next: (0, y.NC)("Next")
                        },
                        ...a,
                        styles: {
                            options: {
                                arrowColor: "var(--general-main-2)",
                                backgroundColor: "var(--general-main-2)",
                                primaryColor: "var(--brand-red-coral)",
                                textColor: "var(--text-general)",
                                spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                                width: 440
                            },
                            buttonBack: {
                                border: "0.2rem solid var(--text-less-prominent)",
                                marginInlineEnd: "1rem",
                                borderRadius: "0.4rem",
                                color: "var(--text-general)",
                                ...n_
                            },
                            buttonNext: { ...n_
                            },
                            buttonClose: {
                                insetInlineEnd: "0px",
                                right: "unset"
                            },
                            overlay: {
                                height: "100%"
                            },
                            ...s
                        }
                    })
                },
                nx = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_tour_dialog_visible: t,
                        setTourDialogVisibility: s
                    } = e, {
                        isDesktop: n
                    } = (0, f.F)();
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(sz.Z, {
                            is_visible: t,
                            confirm_button_text: (0, y.NC)("OK"),
                            onConfirm: () => {
                                s(!1)
                            },
                            is_mobile_full_width: !0,
                            className: "dc-dialog tour-dialog",
                            has_close_icon: !1,
                            children: [(0, l.jsx)("div", {
                                className: "dc-dialog__content__header",
                                children: (0, l.jsx)(et.Z, {
                                    weight: "bold",
                                    color: "prominent",
                                    size: n ? "s" : "xs",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Congratulations"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "dc-dialog__content__description",
                                children: (0, l.jsx)(et.Z, {
                                    size: n ? "xs" : "xxs",
                                    color: "prominent",
                                    children: (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            "data-testid": "tour-success-message",
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "You have successfully created your bot using a simple strategy."
                                            }, 0)
                                        }), (0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Now, <0>run the bot</0> to test out the strategy.",
                                                components: [(0, l.jsx)("strong", {}, 0)]
                                            }, 0)
                                        }), (0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Note: If you wish to learn more about the Bot Builder, you can proceed to the <0>Tutorials</0> tab.",
                                                components: [(0, l.jsx)("strong", {}, 0)]
                                            }, 0)
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                });
            var nh = s("21995"),
                nm = s("63430"),
                np = s("39338");
            let nj = (0, r.Pi)(e => {
                    let {
                        content: t,
                        media: s,
                        label: n,
                        step_index: a,
                        has_localize_component: r = !1,
                        show_actions: o = !0
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsxs)("div", {
                            className: "onboard",
                            children: [o && (0, l.jsx)("div", {
                                className: "onboard__header",
                                children: (0, l.jsxs)(et.Z, {
                                    color: "less-prominent",
                                    lineHeight: "l",
                                    children: [a, "/6"]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "onboard__steps",
                                children: [(0, l.jsx)("div", {
                                    className: "onboard__label",
                                    children: (0, l.jsx)(et.Z, {
                                        as: "p",
                                        lineHeight: "l",
                                        weight: "bold",
                                        children: n
                                    })
                                }), s && (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    preload: "auto",
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    style: {
                                        width: "100%"
                                    },
                                    src: s
                                }), (0, l.jsx)("div", {
                                    className: "onboard__content",
                                    children: (0, l.jsx)(l.Fragment, {
                                        children: t.map(e => r ? e : (0, l.jsx)("div", {
                                            className: "onboard__content__block",
                                            children: (0, l.jsx)(et.Z, {
                                                align: "left",
                                                as: "p",
                                                size: "xs",
                                                lineHeight: "l",
                                                children: e
                                            })
                                        }, `onboard--${(0,np.Fs)()}`))
                                    })
                                })]
                            })]
                        })
                    })
                }),
                nv = {
                    showProgress: !1,
                    spotlightClicks: !1,
                    disableBeacon: !0,
                    disableOverlay: !0,
                    disableCloseOnEsc: !0
                },
                nb = [{
                    target: "#id-bot-builder",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Get started on Deriv Lite"
                        }),
                        content: [(0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Create your bot using our drag-and-drop blocks or click Quick Strategy to choose from the ready-to-use bot templates."
                            })
                        }), (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "We also provide a guide on the Tutorial tab to show you how you can build and execute a simple strategy."
                            })
                        })],
                        media: "/assets/videos/dbot-onboarding-tour-step-1.mp4",
                        step_index: 1
                    }),
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: "#id-charts",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Monitor the market"
                        }),
                        content: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "View the market price of your favourite assets."
                        }, "view the market")],
                        media: "/assets/videos/dbot-onboarding-tour-step-2.mp4",
                        step_index: 2
                    }),
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: "#id-tutorials",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Learn more with our tutorials"
                        }),
                        content: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "Explore the video guides and FAQs to build your bot in the tutorials tab."
                        }, "explore tutorials")],
                        media: "/assets/videos/dbot-onboarding-tour-step-3.mp4",
                        step_index: 3
                    }),
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: "#tab__dashboard__table__tiles",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Use these shortcuts"
                        }),
                        content: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "You can also import or build your bot using any of these shortcuts."
                        }, "use shortcuts")],
                        step_index: 4
                    }),
                    placement: (0, z.rK)() ? "left" : "right",
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: ".dc-drawer__container",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Check your bot’s performance"
                        }),
                        content: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "See how your bot is doing in real-time."
                        }, "check bot performance")],
                        media: "/assets/videos/dbot-onboarding-tour-step-5.mp4",
                        step_index: 5
                    }),
                    placement: (0, z.rK)() ? "right" : "left",
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Run your bot"
                        }),
                        content: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "Click <0>Run</0> when you want to start trading, and click <0>Stop</0> when you want to stop.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "run your bot")],
                        media: "/assets/videos/dbot-onboarding-tour-step-6.mp4",
                        step_index: 6
                    }),
                    ...nv,
                    disableOverlay: !1
                }, {
                    target: "#id-tutorials",
                    content: (0, l.jsx)(nj, {
                        label: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Want to retake the tour?"
                        }),
                        content: [(0, l.jsx)(et.Z, {
                            as: "p",
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Head to the Tutorials tab to do so."
                            })
                        }, "0-id-tutorials")],
                        step_index: 7,
                        show_actions: !1,
                        has_localize_component: !0
                    }),
                    locale: {
                        last: (0, y.NC)("Got it, thanks!")
                    },
                    ...nv,
                    hideBackButton: !0,
                    disableOverlay: !1
                }],
                ng = [{
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 1 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "First, set the <0>Trade parameters</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__sub-title",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>1. Trade parameters:<0>",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "First, set <0>Market</0> to Derived > Continuous Indices > Volatility 100 (1s) Index.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Then, set <0>Trade type</0> to Up/Down > Rise/Fall.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "For <0>Contract type,</0> set it to Both.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "For <0>Default candle interval,</0> set it to 1 minute",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(() => (0, l.jsxs)("div", {
                        className: "joyride-content",
                        children: [(0, l.jsx)("div", {
                            className: "joyride-content__left",
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "For <0>Trade options</0>, set it as below:",
                                components: [(0, l.jsx)("strong", {}, 0)]
                            })
                        }), (0, l.jsx)("div", {
                            className: "joyride-content__left",
                            children: (0, l.jsxs)("ul", {
                                children: [(0, l.jsx)("li", {
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "<0>Duration</0>: Ticks 1",
                                        components: [(0, l.jsx)("strong", {}, 0)]
                                    })
                                }), (0, l.jsx)("li", {
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "<0>Stake: USD</0> 10 (min: 0.35 - max: 50000)",
                                        components: [(0, l.jsx)("strong", {}, 0)]
                                    })
                                })]
                            })
                        })]
                    }), {}),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 2 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Then, set the <0>Purchase conditions</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__sub-title",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>2. Purchase conditions</0>:",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)("ul", {
                                    children: (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "<0>Purchase</0>: Rise",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__left__step-three",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 3 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "The third block is <0>optional</0>. You may use this block if you want to sell your contract before it expires. For now, leave the block as it is. ",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 4 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Next, go to <0>Utility tab</0> under the Blocks menu. Tap the drop-down arrow and hit <0>Loops</0>.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "joyride-content__left",
                                children: [(0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Look for the <0>Repeat While/Until</0>, and click the + icon to add the block to the workspace area.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Choose <0>until</0> as the repeat option.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "joyride-content__left joyride-content__with-icon",
                                    children: [(0, l.jsx)("div", {
                                        className: "joyride-content__with-icon__left",
                                        children: (0, l.jsx)(nm.Z, {
                                            className: "db-contract-card__result-icon",
                                            fill: "#4bb4b3"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "joyride-content__with-icon__right",
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Pro tip: You can also click and drag out the desired block",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    playsInline: !0,
                                    preload: "auto",
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    children: (0, l.jsx)("source", {
                                        src: "/assets/videos/bot-builder-tour-step-4.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 5 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Now, tap the <0>Analysis</0> drop-down arrow and hit <0>Contract</0>.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Go to the <0>Last trade result</0> block and click + icon to add the <0>Result is Win</0> block to the workspace.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Then, drag the <0>Result is win</0> into the empty slot next to <0>repeat until</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Now, go to the <0>Restart trading conditions</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Drag the <0>Trade again</0> block and add it into the <0>do</0> part of the <0>Repeat until</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    playsInline: !0,
                                    preload: "auto",
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    children: (0, l.jsx)("source", {
                                        src: "/assets/videos/bot-builder-tour-step-5.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, z.rK)() ? "bottom" : "right",
                    ...nv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Step 6 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "Finally, drag and add the whole <0>Repeat</0> block to the <0>Restart trading conditions</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    locale: {
                        last: (0, y.NC)("Next")
                    },
                    ...nv
                }],
                ny = [{
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Step 1"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "First, click the Import icon on the tool bar."
                        }, "step-1")
                    }, "step-1-wrapper")],
                    tour_step_key: 1
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Step 2"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Next, import your bot directly from your mobile device or from Google Drive."
                        }, "step-2")
                    }, "step-2-wrapper")],
                    tour_step_key: 2
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Step 3"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Once imported, you will see a preview of the bot on the workspace. Click run to start trading with this bot."
                        }, "step-3")
                    }, "step-3-wrapper")],
                    tour_step_key: 3
                }],
                nf = [{
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Get started on Deriv Lite"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Hi! Hit <0>Start</0> for a quick tour.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "get-started-on-deriv-bot")
                    }, "get-started-on-deriv-bot-wrapper")],
                    tour_step_key: 1
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Import or choose your bot"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Import your bot or tap Quick Strategies to choose from the ready-to-use bot templates."
                        }, "import-or-choose-your-bot")
                    }, "import-or-choose-your-bot-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-1.mp4",
                    tour_step_key: 2
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Monitor the market"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "View the market price of your favourite assets."
                        }, "monitor-the-market")
                    }, "monitor-the-market-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-2.mp4",
                    tour_step_key: 3
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Learn more with our tutorials"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Explore the video guides and FAQs to build your bot in the tutorials tab."
                        }, "learn-more-with-our-tutorials")
                    }, "learn-more-with-our-tutorials-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-3.mp4",
                    tour_step_key: 4
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Use these shortcuts"
                    }),
                    img: (0, nh.oY)("dbot-mobile-onboarding-step-4.png"),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "You can also import or build your bot using any of these shortcuts."
                        }, "use-these-shortcuts")
                    }, "use-these-shortcuts-wrapper")],
                    tour_step_key: 5
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Check your bot’s performance"
                    }),
                    media: "/assets/videos/dbot-mobile-onboarding-step-5.mp4",
                    content: [(0, l.jsxs)("span", {
                        children: [(0, l.jsx)(y.Xx, {
                            i18n_default_text: "See how your bot is doing in real-time."
                        }, "check-your-bots-performance"), ","]
                    }, "check-your-bots-performance-wrapper")],
                    tour_step_key: 6
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Run your bot"
                    }),
                    media: "/assets/videos/dbot-mobile-onboarding-step-6.mp4",
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Click <0>Run</0> when you want to start trading, and click <0>Stop</0> when you want to stop.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "run-your-bot")
                    }, "run-your-bot-wrapper")],
                    tour_step_key: 7
                }, {
                    header: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Want to retake the tour?"
                    }),
                    img: (0, nh.oY)("dbot-mobile-onboarding-step-7.png"),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Head to the Tutorials tab to do so."
                        }, "want-to-retake-the-tour")
                    }, "want-to-retake-the-tour-wrapper")],
                    tour_step_key: 8
                }],
                nN = e => e ? (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Here’s a quick guide on how to use Deriv Lite on the go."
                }, "tour-dialog-info-mobile") : (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Learn how to build your bot from scratch using a simple strategy."
                }, "tour-dialog-info-desktop"),
                nC = e => e ? (0, l.jsx)(y.Xx, {
                    i18n_default_text: "You can import a bot from your mobile device or from Google drive, see a preview in the bot builder, and start trading by running the bot."
                }, "tour-dialog-action-mobile") : (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Hit the <0>Start</0> button to begin and follow the tutorial.",
                    components: [(0, l.jsx)("strong", {}, 0)]
                }, "tour-dialog-action-desktop"),
                nw = (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Get started on Deriv Lite"
                }, "onboarding-tour-header"),
                nk = e => e ? (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Bot Builder guide"
                }, "tour_header-mobile") : (0, l.jsx)(y.Xx, {
                    i18n_default_text: "Let's build a Bot!"
                }, "tour_header-desktop");
            var nT = s("84006");
            let nE = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        active_tab: t,
                        is_tour_dialog_visible: s,
                        setTourDialogVisibility: n,
                        setActiveTour: a,
                        setShowMobileTourDialog: i
                    } = e, {
                        isDesktop: r
                    } = (0, f.F)(), o = 0 === t ? "onboard_tour_token" : "bot_builder_token", d = () => {
                        !r && i(!1), n(!1), a(""), (0, nT.X7)(new Date().getTime(), o)
                    }, c = t === sd.ve.DASHBOARD, _ = nN(!r), u = nC(!r), x = 0 === t ? nw : nk(!r);
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(sz.Z, {
                            is_visible: s,
                            cancel_button_text: (0, y.NC)("Skip"),
                            onCancel: () => d(),
                            confirm_button_text: (0, y.NC)("Start"),
                            onConfirm: () => {
                                a(nT.TJ[t]), !r && i(!1), n(!1), (0, nT.X7)(new Date().getTime(), o)
                            },
                            is_mobile_full_width: !0,
                            className: "dc-dialog tour-dialog",
                            has_close_icon: !1,
                            portal_element_id: "modal_root",
                            children: [(0, l.jsx)("div", {
                                className: "dc-dialog__content__header",
                                children: (0, l.jsx)(et.Z, {
                                    weight: "bold",
                                    color: "prominent",
                                    size: r ? "s" : "xs",
                                    children: x
                                })
                            }), (0, l.jsx)("div", {
                                className: "dc-dialog__content__description",
                                children: (0, l.jsx)(et.Z, {
                                    size: r ? "xs" : "xxs",
                                    color: "prominent",
                                    children: (0, l.jsx)(l.Fragment, {
                                        children: c ? (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Hi! Hit <0>Start</0> for a quick tour.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        }, 0) : (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: _
                                            }), (0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: u
                                            }), (0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: (0, l.jsx)(y.Xx, {
                                                    i18n_default_text: "Note: You can also find this tutorial in the <0>Tutorials</0> tab.",
                                                    components: [(0, l.jsx)("strong", {}, 0)]
                                                }, 0)
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }),
                nS = () => {
                    let [e, t] = (0, i.useState)(!1), [s, n] = (0, i.useState)(!1);
                    return {
                        is_finished: e,
                        handleJoyrideCallback: e => {
                            let {
                                action: s,
                                status: a
                            } = e;
                            "finished" === a ? t(!0) : ("close" === s || "skip" === s) && n(!0)
                        },
                        setIsFinished: t,
                        is_close_tour: s,
                        setIsCloseTour: n
                    }
                },
                nI = (0, r.Pi)(() => {
                    let {
                        is_close_tour: e,
                        is_finished: t,
                        handleJoyrideCallback: s,
                        setIsCloseTour: n
                    } = nS(), {
                        dashboard: a,
                        load_modal: r
                    } = (0, p.oR)(), {
                        active_tab: o,
                        active_tour: d,
                        setActiveTour: c,
                        setTourDialogVisibility: _
                    } = a, {
                        is_load_modal_open: u
                    } = r;
                    return !(0, nd.$8)("bot_builder_token") && 1 === o && _(!0), i.useEffect(() => {
                        t ? (_(!0), c("")) : e && (c(""), n(!1))
                    }, [e, t, c, n, _]), (0, l.jsxs)(l.Fragment, {
                        children: [t ? (0, l.jsx)(nx, {}) : u ? null : (0, l.jsx)(nE, {}), d && (0, l.jsx)(nu, {
                            handleCallback: s,
                            steps: ng,
                            styles: {
                                options: {
                                    arrowColor: "transparent",
                                    backgroundColor: "var(--general-main-2)",
                                    primaryColor: "var(--brand-red-coral)",
                                    textColor: "var(--text-general)"
                                }
                            }
                        })]
                    })
                }),
                nA = e => {
                    let {
                        step: t,
                        steps_list: s,
                        is_transition: n = !1,
                        onStepChange: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "dc-progress-bar-tracker",
                        children: s.map((e, s) => {
                            let i = t === s + 1;
                            return (0, l.jsx)("div", {
                                onClick: () => {
                                    a(s + 1)
                                },
                                className: D()({
                                    "dc-progress-bar-tracker-rectangle": i,
                                    "dc-progress-bar-tracker-circle": !i,
                                    "dc-progress-bar-tracker-transition": n
                                })
                            }, e)
                        })
                    })
                },
                nR = e => {
                    let {
                        label: t,
                        type: s = "default",
                        ...n
                    } = e;
                    return t ? (0, l.jsx)("button", {
                        className: s,
                        ...n,
                        children: (0, l.jsx)(et.Z, {
                            color: "prominent",
                            align: "center",
                            weight: "bold",
                            as: "span",
                            lineHeight: "s",
                            size: "xs",
                            children: t
                        })
                    }) : null
                },
                nL = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        load_modal: t,
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        toggleTourLoadModal: n
                    } = t, {
                        onTourEnd: a,
                        setTourActiveStep: r,
                        active_tour: o,
                        show_mobile_tour_dialog: d,
                        active_tab: c,
                        setShowMobileTourDialog: _,
                        setTourDialogVisibility: u
                    } = e, {
                        is_open: x
                    } = s, [h, m] = i.useState(1), j = ny.find(e => {
                        let {
                            tour_step_key: t
                        } = e;
                        return t === h
                    }), v = 3 === h ? "finish-bot-builder-tour" : "next-bot-builder-tour";
                    i.useEffect(() => {
                        r(h), d || (0, nT._y)(o, h), 2 === h ? n(!0) : "" !== o && n(!1), !(0, nd.$8)("bot_builder_token") && 1 === c && (x ? u(!1) : u(!0), _(!0))
                    }, [h, d]);
                    let b = 3 === h ? (0, y.NC)("Finish") : (0, y.NC)("Next"),
                        g = "onboarding" === o;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [d && (0, l.jsx)(nE, {}), o && !d && (0, l.jsxs)("div", {
                            "data-testid": "botbuilder-tour-mobile",
                            className: "dbot-slider dbot-slider__bot-builder-tour",
                            children: [(0, l.jsx)("div", {
                                className: "dbot-slider__label",
                                children: (0, l.jsx)(et.Z, {
                                    as: "span",
                                    size: "xs",
                                    weight: "bold",
                                    children: null == j ? void 0 : j.header
                                })
                            }), (0, l.jsx)("div", {
                                className: "dbot-slider__content",
                                children: (0, l.jsx)(et.Z, {
                                    as: "span",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: null == j ? void 0 : j.content
                                })
                            }), (0, l.jsxs)("div", {
                                className: "dbot-slider__status",
                                children: [(0, l.jsx)("div", {
                                    className: "dbot-slider__progress-bar",
                                    children: (0, l.jsx)(nA, {
                                        step: h,
                                        steps_list: ny.map(e => e.tour_step_key.toString()),
                                        onStepChange: m
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "dbot-slider__button-group",
                                    children: [1 !== h && (0, l.jsx)(nR, {
                                        onClick: () => {
                                            m(h - 1)
                                        },
                                        label: (0, y.NC)("Previous"),
                                        "data-testid": "prev-bot-builder-tour"
                                    }), (0, l.jsx)(nR, {
                                        type: "danger",
                                        onClick: () => {
                                            m(h + 1), a(h, g)
                                        },
                                        label: b,
                                        "data-testid": v
                                    })]
                                })]
                            })]
                        })]
                    })
                }),
                nM = (0, r.Pi)(e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsx)(nL, {}) : (0, l.jsx)(nI, {})
                    })
                });
            var nO = s("16310");
            let nD = e => {
                    let {
                        form_values: t,
                        selected_strategy: s
                    } = e;
                    s$.Analytics.trackEvent("ce_bot_form", {
                        action: sV.om.RUN_QUICK_STRATEGY,
                        form_name: sV.oH,
                        subform_name: "quick_strategy",
                        strategy_name: (0, sq.gc)(s),
                        ...(0, sq.qc)({
                            form_values: t,
                            selected_strategy: s
                        })
                    })
                },
                nU = e => {
                    let {
                        form_values: t,
                        selected_strategy: s
                    } = e;
                    s$.Analytics.trackEvent("ce_bot_form", {
                        action: sV.om.EDIT_QUICK_STRATEGY,
                        form_name: sV.oH,
                        subform_name: "quick_strategy",
                        strategy_name: (0, sq.gc)(s),
                        ...(0, sq.qc)({
                            form_values: t,
                            selected_strategy: s
                        })
                    })
                };
            var nF = s("85414"),
                nZ = s("53890"),
                nz = s("81624");
            var nB = ((a = {})[a.StrategySelect = 0] = "StrategySelect", a[a.StrategyVerified = 1] = "StrategyVerified", a[a.StrategyCompleted = 2] = "StrategyCompleted", a);
            let nP = Object.freeze({
                    ALL: 0,
                    ACCUMULATORS: 1,
                    OPTIONS: 2
                }),
                nX = [(0, y.NC)("All"), (0, y.NC)("Accumulators"), (0, y.NC)("Options")],
                nH = [{
                    name: "MARTINGALE",
                    display_name: (0, nF.j)().MARTINGALE.label,
                    id: 0,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "D_ALEMBERT",
                    display_name: (0, nF.j)().D_ALEMBERT.label,
                    id: 1,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "REVERSE_MARTINGALE",
                    display_name: (0, nF.j)().REVERSE_MARTINGALE.label,
                    id: 2,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "REVERSE_D_ALEMBERT",
                    display_name: (0, nF.j)().REVERSE_D_ALEMBERT.label,
                    id: 3,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "OSCARS_GRIND",
                    display_name: (0, nF.j)().OSCARS_GRIND.label,
                    id: 4,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "STRATEGY_1_3_2_6",
                    display_name: (0, nF.j)().STRATEGY_1_3_2_6.label,
                    id: 5,
                    parent: [(0, y.NC)("Options")]
                }, {
                    name: "ACCUMULATORS_MARTINGALE",
                    display_name: (0, nF.j)().ACCUMULATORS_MARTINGALE.label,
                    id: 6,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_MARTINGALE_ON_STAT_RESET",
                    display_name: (0, nF.j)().ACCUMULATORS_MARTINGALE_ON_STAT_RESET.label,
                    id: 7,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_DALEMBERT",
                    display_name: (0, nF.j)().ACCUMULATORS_DALEMBERT.label,
                    id: 8,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_DALEMBERT_ON_STAT_RESET",
                    display_name: (0, nF.j)().ACCUMULATORS_DALEMBERT_ON_STAT_RESET.label,
                    id: 9,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_MARTINGALE",
                    display_name: (0, nF.j)().ACCUMULATORS_REVERSE_MARTINGALE.label,
                    id: 10,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET",
                    display_name: (0, nF.j)().ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET.label,
                    id: 11,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_DALEMBERT",
                    display_name: (0, nF.j)().ACCUMULATORS_REVERSE_DALEMBERT.label,
                    id: 12,
                    parent: [(0, y.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET",
                    display_name: (0, nF.j)().ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET.label,
                    id: 13,
                    parent: [(0, y.NC)("Accumulators")]
                }],
                n$ = e => {
                    let {
                        current_step: t,
                        is_mobile: s = !1
                    } = e, n = t === nB.StrategyCompleted ? 100 : 50;
                    return s ? (0, l.jsx)(nz.D, {
                        percentage: n,
                        label: "",
                        danger_limit: 101,
                        is_loading: !1,
                        warning_limit: 0
                    }) : (0, l.jsx)("div", {
                        className: "qs-stepper",
                        children: (0, l.jsx)(nZ.t, {
                            currentStep: t,
                            labels: [(0, y.NC)("Default"), (0, y.NC)("Strategy template"), (0, y.NC)("Trade parameters")]
                        })
                    })
                };
            var nV = s("17009"),
                nG = s("95975"),
                nq = s("35371"),
                nY = s("51667");
            let nW = e => {
                    let {
                        title: t,
                        items: s,
                        onSelectStrategy: n
                    } = e;
                    return s.length > 0 ? (0, l.jsxs)("div", {
                        className: "strategy-template-picker__strategy",
                        children: [(0, l.jsx)("div", {
                            className: "strategy-template-picker__title",
                            children: (0, l.jsx)(et.Z, {
                                size: "xs",
                                weight: "bold",
                                children: t
                            })
                        }), s.map((e, s) => (0, l.jsx)("div", {
                            className: "strategy-template-picker__links",
                            children: (0, l.jsx)(b.r, {
                                hasChevron: !0,
                                size: "sm",
                                onClick: () => n(e.name, t),
                                children: e.display_name
                            })
                        }, s))]
                    }) : null
                },
                nK = e => {
                    let {
                        selector_chip_value: t,
                        search_value: s,
                        is_searching: n,
                        onSelectStrategy: a
                    } = e, i = [], r = !1, o = e => (r = e.toLowerCase().includes(s.toLowerCase()), n && r || !n);
                    nH.filter(e => e.parent.some(e => o(e)) || e.display_name.toLowerCase().includes(s.toLowerCase())).forEach(e => {
                        let t = { ...e
                        };
                        if (n && "" !== s) {
                            if (e.display_name.toLowerCase().includes(s.toLowerCase())) t.parent = [...e.parent];
                            else {
                                let n = t.parent.filter(e => e.toLowerCase().includes(s.toLowerCase()));
                                t.parent = n.length > 0 ? n : e.parent
                            }
                        } else t.parent = [...e.parent];
                        i.push(t)
                    });
                    let d = i.filter(e => e.parent.includes(nX[nP.OPTIONS])),
                        c = i.filter(e => e.parent.includes(nX[nP.MULTIPLIERS])),
                        _ = i.filter(e => e.parent.includes(nX[nP.ACCUMULATORS])),
                        u = nX[t],
                        x = [{
                            type: (0, y.NC)("Accumulators"),
                            items: _
                        }, {
                            type: (0, y.NC)("Options"),
                            items: d
                        }, {
                            type: (0, y.NC)("Multipliers"),
                            items: c
                        }],
                        h = e => u === (0, y.NC)("All") || u === e,
                        m = x.filter(e => {
                            let {
                                type: t
                            } = e;
                            return h(t)
                        }),
                        p = m.some(e => {
                            let {
                                items: t
                            } = e;
                            return t.length > 0
                        });
                    return i.length > 0 && p ? (0, l.jsx)("div", {
                        className: "strategy-template-picker__strategies",
                        children: m.map(e => {
                            let {
                                type: t,
                                items: s
                            } = e;
                            return (0, l.jsx)(nW, {
                                title: t,
                                items: s,
                                onSelectStrategy: a
                            }, t)
                        })
                    }) : (0, l.jsx)("div", {
                        className: "no-results",
                        children: (0, l.jsx)(et.Z, {
                            size: "xs",
                            children: (0, y.NC)("No results found")
                        })
                    })
                },
                nJ = (0, r.Pi)(e => {
                    let {
                        setCurrentStep: t,
                        setSelectedTradeType: s
                    } = e, {
                        dashboard: n,
                        quick_strategy: a
                    } = (0, p.oR)(), {
                        setActiveTabTutorial: r,
                        setActiveTab: o,
                        setFAQSearchValue: d,
                        filterTuotrialTab: c
                    } = n, {
                        setFormVisibility: _,
                        setSelectedStrategy: u
                    } = a, [x, h] = i.useState(0), [m, j] = i.useState(!1), [v, b] = i.useState(""), g = e => {
                        h(e)
                    };
                    return (0, l.jsxs)("div", {
                        className: "strategy-template-picker",
                        children: [(0, l.jsxs)("div", {
                            className: "strategy-template-picker__panel",
                            children: [(0, l.jsx)(nq.U, {
                                onChange: e => {
                                    b(e.target.value), j(!0), d(e.target.value), c(e.target.value)
                                },
                                placeholder: (0, y.NC)("Search"),
                                type: "text",
                                value: v,
                                inputSize: "sm"
                            }), (0, l.jsx)("button", {
                                className: "strategy-template-picker__icon",
                                onClick: () => {
                                    o(sd.ve.TUTORIAL), r(2), _(!1)
                                },
                                children: (0, l.jsx)(nG.Z, {
                                    iconSize: "sm"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "strategy-template-picker__chips",
                            children: nX.map((e, t) => (0, l.jsx)(nY.A.Selectable, {
                                onClick: () => g(t),
                                selected: t == x,
                                size: "sm",
                                label: e
                            }, t))
                        }), (0, l.jsx)(nK, {
                            selector_chip_value: x,
                            search_value: v,
                            is_searching: m,
                            onSelectStrategy: (e, n) => {
                                u(e), s(n), t(nB.StrategyVerified)
                            }
                        })]
                    })
                }),
                nQ = () => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        currency: t,
                        balance: s,
                        is_logged_in: n
                    } = e, {
                        submitForm: a,
                        setFieldValue: l,
                        values: i,
                        isValid: r,
                        validateForm: o
                    } = (0, eO.u6)(), {
                        quick_strategy: d,
                        run_panel: c
                    } = (0, p.oR)(), {
                        toggleStopBotDialog: _,
                        setLossThresholdWarningData: u,
                        loss_threshold_warning_data: x,
                        onSubmit: h
                    } = d, m = async () => {
                        c.is_running ? (await l("action", "EDIT"), o(), a(), _()) : (await l("action", "RUN"), o(), a().then(e => {
                            r && e && h(e)
                        }))
                    };
                    return {
                        handleSubmit: async () => {
                            var e;
                            let a = Number((null == i ? void 0 : i.loss) ? ? 0),
                                l = Number((null == i ? void 0 : i.profit) ? ? 0),
                                r = JSON.parse((null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("qs-dont-show-loss-threshold-warning")) ? ? "false");
                            !x.already_shown && (a > .5 * Number(s ? ? 0) || a > 2 * l) && n && !r ? u({
                                show: !0,
                                loss_amount: a,
                                currency: t,
                                already_shown: !0
                            }) : m()
                        },
                        proceedFormSubmission: m
                    }
                },
                n0 = e => {
                    let {
                        selected_trade_type: t,
                        selected_startegy_label: s,
                        children: n
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "qs__selected-options",
                            children: [(0, l.jsxs)("div", {
                                className: "qs__selected-options__item",
                                children: [(0, l.jsx)(et.Z, {
                                    size: "xs",
                                    lineHeight: "s",
                                    children: (0, y.NC)("Trade type")
                                }), (0, l.jsx)(et.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    lineHeight: "s",
                                    children: t
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "qs__selected-options__item",
                                children: [(0, l.jsx)(et.Z, {
                                    size: "xs",
                                    lineHeight: "s",
                                    children: (0, y.NC)("Strategy")
                                }), (0, l.jsx)(et.Z, {
                                    className: "qs__selected-options__item__description",
                                    weight: "bold",
                                    lineHeight: "s",
                                    children: s
                                })]
                            })]
                        }), (0, l.jsx)(nV.Z, {
                            formfields: n,
                            active_tab: "TRADE_PARAMETERS"
                        })]
                    })
                },
                n1 = (0, r.Pi)(e => {
                    let {
                        children: t,
                        current_step: s,
                        setCurrentStep: n,
                        onClickClose: a,
                        selected_trade_type: r,
                        setSelectedTradeType: o
                    } = e, d = i.useRef(null), {
                        submitForm: c,
                        isValid: _,
                        setFieldValue: u,
                        validateForm: x,
                        values: h
                    } = (0, eO.u6)(), {
                        quick_strategy: m
                    } = (0, p.oR)(), {
                        selected_strategy: j,
                        onSubmit: v,
                        is_stop_bot_dialog_open: b
                    } = m, {
                        handleSubmit: g
                    } = nQ(), f = (0, nF.j)()[j].label, N = s === nB.StrategySelect;
                    i.useEffect(() => {
                        _ && s === nB.StrategyVerified && n(nB.StrategyCompleted), !_ && s === nB.StrategyCompleted && n(nB.StrategyVerified)
                    }, [_, s]), i.useEffect(() => {
                        x()
                    }, [j, x]);
                    let C = async () => {
                            await u("action", "EDIT"), x(), c().then(e => {
                                _ && e && (nU({
                                    form_values: h,
                                    selected_strategy: j
                                }), v(e))
                            })
                        },
                        w = () => {
                            g()
                        },
                        k = i.useCallback(() => {
                            switch (s) {
                                case nB.StrategySelect:
                                    return (0, l.jsx)(nJ, {
                                        setCurrentStep: n,
                                        setSelectedTradeType: o
                                    });
                                case nB.StrategyVerified:
                                case nB.StrategyCompleted:
                                    return (0, l.jsx)(n0, {
                                        selected_trade_type: r,
                                        selected_startegy_label: f,
                                        children: t
                                    });
                                default:
                                    return null
                            }
                        }, [s, r, f, t, n, o]);
                    return !b && (0, l.jsxs)("div", {
                        className: "qs",
                        children: [(0, l.jsxs)("div", {
                            className: "qs__head",
                            children: [(0, l.jsx)("div", {
                                className: "qs__head__title",
                                children: (0, l.jsx)(et.Z, {
                                    weight: "bold",
                                    children: (0, y.NC)("Quick Strategy")
                                })
                            }), (0, l.jsx)("div", {
                                className: "qs__head__action",
                                children: (0, l.jsx)("span", {
                                    "data-testid": "qs-desktop-close-button",
                                    onClick: a,
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        "Enter" === e.key && a()
                                    },
                                    children: (0, l.jsx)(E.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "qs__body",
                            children: [(0, l.jsxs)("div", {
                                className: "qs__body__sidebar",
                                children: [(0, l.jsx)("div", {
                                    className: "qs__body__sidebar__subtitle",
                                    children: (0, l.jsx)(et.Z, {
                                        size: "xs",
                                        children: (0, y.NC)("Choose a template below and set your trade parameters.")
                                    })
                                }), (0, l.jsx)(n$, {
                                    current_step: s
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "qs__body__content",
                                children: [(0, l.jsx)(ei.Z, {
                                    className: "qs__form__container qs__form__container--footer",
                                    autohide: !1,
                                    refSetter: d,
                                    children: k()
                                }), !N && (0, l.jsxs)("div", {
                                    className: "qs__body__content__footer",
                                    children: [(0, l.jsx)(eI.Z, {
                                        transparent: !0,
                                        classNameSpan: "qs__body__content__footer--back",
                                        disabled: N,
                                        onClick: () => {
                                            n(nB.StrategySelect)
                                        },
                                        children: (0, y.NC)("Back")
                                    }), (0, l.jsx)(eI.Z, {
                                        secondary: !0,
                                        disabled: !_,
                                        onClick: C,
                                        children: (0, y.NC)("Load")
                                    }), (0, l.jsx)(eI.Z, {
                                        "data-testid": "qs-run-button",
                                        primary: !0,
                                        onClick: e => {
                                            e.preventDefault(), w()
                                        },
                                        disabled: !_,
                                        children: (0, y.NC)("Run")
                                    })]
                                })]
                            })]
                        })]
                    })
                }),
                n2 = i.memo(n1),
                n5 = (0, r.Pi)(e => {
                    let {
                        children: t,
                        current_step: s,
                        selected_trade_type: n,
                        setCurrentStep: a,
                        setSelectedTradeType: r
                    } = e, {
                        isValid: o,
                        validateForm: d
                    } = (0, eO.u6)(), {
                        quick_strategy: c
                    } = (0, p.oR)(), {
                        selected_strategy: _
                    } = c, u = (0, nF.j)()[_].label, x = s === nB.StrategyVerified || s === nB.StrategyCompleted, h = s === nB.StrategySelect;
                    return i.useEffect(() => {
                        d()
                    }, [_, d]), i.useEffect(() => {
                        o && s === nB.StrategyVerified && a(nB.StrategyCompleted), !o && s === nB.StrategyCompleted && a(nB.StrategyVerified)
                    }, [o, s]), (0, l.jsx)("div", {
                        className: "qs",
                        children: (0, l.jsx)("div", {
                            className: "qs__body",
                            children: (0, l.jsx)("div", {
                                className: "qs__body__content",
                                children: (0, l.jsxs)(ei.Z, {
                                    className: D()("qs__form__container qs__form__container--footer", {
                                        "qs__form__container--template": h
                                    }),
                                    autohide: !1,
                                    children: [(0, l.jsx)(n$, {
                                        setCurrentStep: a,
                                        current_step: s,
                                        isValid: o,
                                        is_mobile: !0
                                    }), h && (0, l.jsx)(nJ, {
                                        setSelectedTradeType: r,
                                        setCurrentStep: a
                                    }), x && (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsxs)("div", {
                                            className: "qs__selected-options",
                                            children: [(0, l.jsxs)("div", {
                                                className: "qs__selected-options__item",
                                                children: [(0, l.jsx)(et.Z, {
                                                    size: "xs",
                                                    children: (0, y.NC)("Trade type")
                                                }), (0, l.jsx)(et.Z, {
                                                    size: "xs",
                                                    weight: "bold",
                                                    children: n
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "qs__selected-options__item",
                                                children: [(0, l.jsx)(et.Z, {
                                                    size: "xs",
                                                    children: (0, y.NC)("Strategy")
                                                }), (0, l.jsx)(et.Z, {
                                                    className: "qs__selected-options__item__description",
                                                    size: "xs",
                                                    weight: "bold",
                                                    children: u
                                                })]
                                            })]
                                        }), (0, l.jsx)(nV.Z, {
                                            formfields: t,
                                            active_tab: "TRADE_PARAMETERS"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }),
                n3 = (0, r.Pi)(e => {
                    let {
                        current_step: t,
                        setCurrentStep: s
                    } = e, {
                        quick_strategy: n
                    } = (0, p.oR)(), {
                        selected_strategy: a
                    } = n, {
                        isValid: i,
                        values: r
                    } = (0, eO.u6)(), {
                        handleSubmit: o
                    } = nQ(), d = t === nB.StrategyVerified || t === nB.StrategyCompleted, c = t === nB.StrategySelect, _ = () => {
                        nD({
                            form_values: r,
                            selected_strategy: a
                        }), o()
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: d && (0, l.jsxs)("div", {
                            className: "qs__body__content__footer",
                            children: [(0, l.jsx)(eI.Z, {
                                secondary: !0,
                                disabled: c,
                                onClick: () => {
                                    s(nB.StrategySelect)
                                },
                                children: (0, y.NC)("Back")
                            }), (0, l.jsx)(eI.Z, {
                                primary: !0,
                                "data-testid": "qs-run-button",
                                type: "submit",
                                onClick: e => {
                                    e.preventDefault(), _()
                                },
                                disabled: !i,
                                children: (0, y.NC)("Run")
                            })]
                        })
                    })
                }),
                n8 = "loss-threshold-warning-dialog",
                n4 = (0, r.Pi)(() => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        loss_threshold_warning_data: t,
                        setLossThresholdWarningData: s,
                        initializeLossThresholdWarningData: n
                    } = e, {
                        proceedFormSubmission: a
                    } = nQ();
                    return (0, l.jsxs)(sz.Z, {
                        portal_element_id: "modal_root",
                        title: (0, y.NC)("Are you sure you want to continue?"),
                        is_visible: t.show,
                        confirm_button_text: (0, y.NC)("Yes, continue"),
                        onConfirm: () => {
                            n(), a()
                        },
                        cancel_button_text: (0, y.NC)("Edit the amount"),
                        onCancel: () => {
                            s({
                                show: !1,
                                highlight_field: ["loss"]
                            })
                        },
                        is_mobile_full_width: !1,
                        has_close_icon: !1,
                        className: n8,
                        children: [(0, l.jsx)("div", {
                            className: `${n8}__body-text`,
                            children: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Please confirm that your loss threshold amount is {{loss_amount}} {{currency}}.",
                                values: {
                                    loss_amount: null == t ? void 0 : t.loss_amount,
                                    currency: null == t ? void 0 : t.currency
                                }
                            })
                        }), (0, l.jsx)(eb, {
                            defaultChecked: !1,
                            label: (0, y.NC)("Do not show this message again."),
                            onChange: () => {
                                var e, t;
                                let s = JSON.parse((null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("qs-dont-show-loss-threshold-warning")) ? ? "false");
                                null === (t = localStorage) || void 0 === t || t.setItem("qs-dont-show-loss-threshold-warning", `${!s}`)
                            }
                        })]
                    })
                });
            var n7 = s("67026"),
                n6 = s("63069");
            let n9 = e => {
                    let {
                        parent_rect: t,
                        child_height: s = 0
                    } = e;
                    return ((null == t ? void 0 : t.top) || 0) + ((null == t ? void 0 : t.height) || 0) + s
                },
                ae = e => {
                    let {
                        parent_rect: t,
                        child_height: s = 0
                    } = e;
                    return Number(null == t ? void 0 : t.top) - s
                },
                at = e => {
                    let {
                        preferred_alignment: t = "bottom",
                        child_el: s,
                        parent_el: n,
                        should_consider_parent_height: a = !0
                    } = e, l = null == n ? void 0 : n.getBoundingClientRect(), i = null == s ? void 0 : s.clientHeight, r = document.body.getBoundingClientRect(), {
                        top: o,
                        bottom: d,
                        left: c,
                        width: _
                    } = l || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0
                    }, u = n9({
                        parent_rect: l,
                        child_height: i
                    }), x = {
                        bottom: r.bottom - (a ? o : d) + 8,
                        insetInlineStart: c,
                        width: _,
                        transformOrigin: "bottom"
                    }, h = {
                        top: a ? d : o,
                        insetInlineStart: c,
                        width: _,
                        transformOrigin: "top"
                    };
                    if ("bottom" === t && u <= r.height) return {
                        style: h,
                        placement: "bottom"
                    };
                    let m = ae({
                        parent_rect: l,
                        child_height: i
                    });
                    return "top" === t && m >= 0 ? {
                        style: x,
                        placement: "top"
                    } : u - r.height < 0 - m ? {
                        style: h,
                        placement: "bottom"
                    } : {
                        style: x,
                        placement: "top"
                    }
                };
            var as = s("46677");
            let an = e => {
                i.useEffect(() => {
                    if (!e) return;
                    let t = e => e ? e.classList.contains("dc-themed-scrollbars") && e.scrollHeight > e.clientHeight ? e : t(e.parentElement) : null,
                        s = t(e.current),
                        n = navigator.userAgent.indexOf("Firefox") > -1;
                    return s && (s.style.overflow = "hidden", s.style.width = n ? "100%" : "calc(100% - 5px)"), () => {
                        s && (s.style.removeProperty("overflow"), s.style.removeProperty("width"))
                    }
                }, [e])
            };
            var aa = s("33716"),
                al = s("40150");
            let ai = e => {
                    let {
                        is_active: t,
                        is_disabled: s,
                        index: n,
                        item: a,
                        child_ref: i,
                        onItemSelection: r,
                        setActiveIndex: o
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: i,
                        onMouseDown: e => {
                            e.stopPropagation(), r(a), o(n)
                        },
                        className: D()("dc-dropdown-list__item", {
                            "dc-dropdown-list__item--active": t,
                            "dc-dropdown-list__item--disabled": s
                        }),
                        children: "object" == typeof a ? a.component || a.text : a
                    })
                },
                ar = i.forwardRef((e, t) => {
                    let {
                        active_index: s,
                        list_items: n,
                        is_object_list: a,
                        onItemSelection: r,
                        setActiveIndex: o,
                        not_found_text: d
                    } = e;
                    if (null == n ? void 0 : n.some(e => "object" == typeof e && !!e.group)) {
                        let e = {};
                        n.forEach(t => {
                            let s = "object" == typeof t && t.group || "?";
                            !e[s] && (e[s] = []), e[s].push(t)
                        });
                        let d = Object.keys(e),
                            c = -1;
                        return (0, l.jsx)(l.Fragment, {
                            children: d.map((n, _) => {
                                let u = e[n],
                                    x = !!d[_ + 1];
                                return (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "dc-dropdown-list__group-header",
                                        children: n
                                    }), u.map(e => (c++, (0, l.jsx)(ai, {
                                        item: e,
                                        index: c,
                                        is_active: c === s,
                                        onItemSelection: r,
                                        setActiveIndex: o,
                                        is_object_list: a,
                                        is_disabled: "object" == typeof e && "DISABLED" === e.disabled,
                                        child_ref: c === s ? t : null
                                    }, c))), x && (0, l.jsx)("div", {
                                        className: "dc-dropdown-list__separator"
                                    })]
                                }, `group${_}`)
                            })
                        })
                    }
                    return (0, l.jsx)(l.Fragment, {
                        children: (null == n ? void 0 : n.length) ? n.map((e, n) => (0, l.jsx)(ai, {
                            item: e,
                            index: n,
                            is_active: n === s,
                            onItemSelection: r,
                            is_object_list: a,
                            setActiveIndex: o,
                            child_ref: n === s ? t : null
                        }, n)) : (0, l.jsx)("div", {
                            className: "dc-dropdown-list__item dc-dropdown-list__item--not-found",
                            children: d
                        })
                    })
                });
            ar.displayName = "ListItems";
            let ao = e => {
                let {
                    dropdown_ref: t,
                    list_item_ref: s,
                    list_wrapper_ref: n
                } = e.dropdown_refs || {}, {
                    active_index: a,
                    is_visible: i,
                    list_items: r,
                    list_height: o,
                    onScrollStop: d,
                    onItemSelection: c,
                    setActiveIndex: _,
                    style: u,
                    not_found_text: x,
                    portal_id: h
                } = e;
                if ((null == r ? void 0 : r.length) && "string" != typeof r[0] && "object" != typeof r[0]) throw Error("Dropdown received wrong data structure");
                let m = !Array.isArray(r) && "object" == typeof r,
                    p = (null == r ? void 0 : r.length) && "string" == typeof r[0],
                    j = (0, l.jsx)(ek.Z, {
                        appear: i,
                        in: i,
                        timeout: 100,
                        classNames: {
                            enter: "dc-dropdown-list--enter",
                            enterDone: "dc-dropdown-list--enter-done",
                            exit: "dc-dropdown-list--exit"
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)("div", {
                            style: u,
                            className: "dc-dropdown-list",
                            ref: n,
                            children: (0, l.jsx)(al.Z, {
                                height: o || "220px",
                                refSetter: t,
                                onScroll: d,
                                children: m ? Object.keys(r).map((e, t) => (0, l.jsx)(ar, {
                                    not_found_text: x,
                                    active_index: a,
                                    list_items: r[e],
                                    ref: s,
                                    onItemSelection: c,
                                    setActiveIndex: _
                                }, t)) : (0, l.jsx)(ar, {
                                    not_found_text: x,
                                    active_index: a,
                                    list_items: r,
                                    ref: s,
                                    onItemSelection: c,
                                    is_object_list: !p,
                                    setActiveIndex: _
                                })
                            })
                        })
                    });
                if (h) {
                    let e = document.getElementById(h);
                    return e && eq.createPortal(j, e)
                }
                return j
            };
            ao.displayName = "DropdownList";
            let ad = {
                    ENTER: 13,
                    ESCAPE: 27,
                    TAB: 9,
                    KEYDOWN: 40,
                    KEYUP: 38
                },
                ac = e => "string" == typeof e,
                a_ = function(e, t) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = e.toLowerCase();
                    return t.filter(e => (ac(e) ? e.toLowerCase() : (e.text || "").toLowerCase()).includes(n)).sort((e, t) => {
                        let s = (ac(e) ? e : e.text || "").toLowerCase().indexOf(n);
                        return s - (ac(t) ? t : t.text || "").toLowerCase().indexOf(n)
                    }).filter(t => {
                        let n = ac(t) ? t : t.text || "",
                            a = n.toLowerCase(),
                            l = (0, as._v)(a);
                        return s ? (0, as.pp)(n, e) : l.includes(e) || a.includes(e)
                    })
                },
                au = i.memo(e => {
                    let t;
                    let s = (0, n6.Re)(),
                        {
                            autoComplete: n,
                            className: a,
                            data_testid: r,
                            dropdown_offset: o,
                            error: d,
                            has_updating_list: c = !0,
                            hide_list: _ = !1,
                            historyValue: u,
                            input_id: x,
                            is_alignment_top: h,
                            is_list_visible: m = !1,
                            list_items: p,
                            list_portal_id: j,
                            not_found_text: v = s,
                            onHideDropdownList: b,
                            onItemSelection: g,
                            onSearch: y,
                            onScrollStop: f,
                            onShowDropdownList: N,
                            should_filter_by_char: C,
                            show_list: w = !1,
                            value: k,
                            ...T
                        } = e,
                        E = i.useRef(null),
                        S = i.useRef(null),
                        I = i.useRef(null),
                        A = i.useRef(null),
                        [R, L] = i.useState(!1),
                        [M, O] = i.useState(""),
                        [U, F] = i.useState(-1),
                        [Z, z] = i.useState(p),
                        [B, P] = i.useState({});
                    an(j && R ? A : void 0);
                    let X = null;
                    i.useEffect(() => {
                        if (c) {
                            let e = [];
                            if (z(e = m ? "function" == typeof y ? y(k.toLowerCase(), p) : a_(k.toLowerCase(), p) : p), u) {
                                let t = e.findIndex(e => ("object" == typeof e ? e.text : e) === u);
                                O(u), F(t)
                            } else O(""), F(-1)
                        }
                    }, [p, c, u]), i.useEffect(() => {
                        m && F(Z.findIndex(e => ("object" == typeof e ? e.text : e) === u))
                    }, [Z]), i.useEffect(() => {
                        if (w && q(), _ && Y(), R && I.current) {
                            var e;
                            let t = I.current.offsetTop;
                            null === (e = E.current) || void 0 === e || e.scrollTo({
                                top: t,
                                behavior: "smooth"
                            })
                        }
                    }, [w, _, R, I]), i.useEffect(() => {
                        S.current && j && R && P(at({
                            preferred_alignment: h ? "top" : "bottom",
                            parent_el: A.current,
                            child_el: S.current
                        }).style)
                    }, [R, h, j, null == Z ? void 0 : Z.length]);
                    let H = () => {
                            if (-1 !== U) {
                                var e, t, s, n, a, l, i;
                                let r = U - 1;
                                if (r < 0) {
                                    let s = null === (e = E.current) || void 0 === e ? void 0 : e.clientHeight;
                                    F(Z.length - 1), null === (t = E.current) || void 0 === t || t.scrollTo({
                                        top: s,
                                        behavior: "smooth"
                                    })
                                } else {
                                    let e = Number(null === (s = I.current) || void 0 === s ? void 0 : s.getBoundingClientRect().height);
                                    if (!$(Math.floor(Number(null === (a = I.current) || void 0 === a ? void 0 : null === (n = a.getBoundingClientRect()) || void 0 === n ? void 0 : n.top)) - e)) {
                                        let t = Number(null === (l = I.current) || void 0 === l ? void 0 : l.offsetTop) - e;
                                        null === (i = E.current) || void 0 === i || i.scrollTo({
                                            top: t,
                                            behavior: "smooth"
                                        })
                                    }
                                    F(r)
                                }
                            }
                        },
                        $ = e => {
                            var t, s, n;
                            let a = Number(null === (t = E.current) || void 0 === t ? void 0 : t.clientHeight),
                                l = Math.floor(Number(null === (s = S.current) || void 0 === s ? void 0 : s.getBoundingClientRect().top));
                            return !(e >= Math.floor(Number(null === (n = S.current) || void 0 === n ? void 0 : n.getBoundingClientRect().top)) + a) && e > l
                        },
                        V = () => {
                            if (-1 !== U && I.current) {
                                if ("number" == typeof U) {
                                    var e, t, s, n;
                                    let a = U + 1;
                                    if (a >= Z.length) F(0), null === (e = E.current) || void 0 === e || e.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    else {
                                        let e = I.current.getBoundingClientRect().height,
                                            l = Math.floor(I.current.getBoundingClientRect().top) + e + e / 2,
                                            i = Number(null === (t = E.current) || void 0 === t ? void 0 : t.clientHeight);
                                        if (!$(l)) {
                                            let t = I.current.offsetTop - (i / e - 2) * e;
                                            null === (n = E.current) || void 0 === n || null === (s = n.scrollTo) || void 0 === s || s.call(n, {
                                                top: t,
                                                behavior: "smooth"
                                            })
                                        }
                                        F(a)
                                    }
                                }
                            } else F(0)
                        },
                        G = e => {
                            e && (O(("object" == typeof e ? e.text : e) || ""), null == g || g(e))
                        },
                        q = () => {
                            L(!0), null == N || N()
                        },
                        Y = () => {
                            L(!1), null == b || b()
                        };
                    return (0, l.jsxs)("div", {
                        "data-testid": r,
                        className: D()("dc-autocomplete", a),
                        children: [(0, l.jsx)("div", {
                            ref: A,
                            className: "dc-autocomplete__input-field",
                            children: (0, l.jsx)(eV, { ...T,
                                className: "dc-autocomplete__field",
                                error: d,
                                autoComplete: n,
                                onKeyDown: e => {
                                    switch (e.keyCode) {
                                        case ad.ENTER:
                                            e.preventDefault(), Y(), G(Z[U]);
                                            break;
                                        case ad.TAB:
                                            R && (Y(), G(Z[U]));
                                            break;
                                        case ad.ESCAPE:
                                            e.preventDefault(), Y();
                                            break;
                                        case ad.KEYDOWN:
                                            !R && q(), V();
                                            break;
                                        case ad.KEYUP:
                                            R ? H() : q();
                                            break;
                                        default:
                                            !R && q()
                                    }
                                },
                                onInput: e => {
                                    let t = e.target.value.toLowerCase(),
                                        s = [];
                                    !(s = "function" == typeof y ? y(t, p) : a_(t, p, C)).length && O(""), z(s)
                                },
                                input_id: x,
                                onClick: () => {
                                    R ? Y() : q()
                                },
                                onBlur: e => {
                                    e.preventDefault(), Y(), !m && z(p), "" === M && (null == g || g({
                                        text: v,
                                        value: ""
                                    })), "function" == typeof T.onBlur && T.onBlur(e)
                                },
                                value: "function" == typeof g ? k : M,
                                trailing_icon: T.trailing_icon ? T.trailing_icon : (0, l.jsx)(aa.Z, {
                                    className: (0, n7.Z)("dc-autocomplete__trailing-icon", {
                                        "dc-autocomplete__trailing-icon--opened": R,
                                        "dc-autocomplete__trailing-icon--disabled": T.disabled
                                    }),
                                    height: "24px",
                                    width: "24px"
                                })
                            })
                        }), (0, l.jsx)(ao, {
                            dropdown_refs: {
                                dropdown_ref: E,
                                list_item_ref: I,
                                list_wrapper_ref: S
                            },
                            active_index: U,
                            style: {
                                width: A.current ? `${A.current.offsetWidth}px` : "100%",
                                ...B || {
                                    marginTop: o ? `calc(-${o} + 8px)` : "8px"
                                }
                            },
                            is_visible: R || m,
                            list_items: Z,
                            list_height: T.list_height,
                            onItemSelection: G,
                            setActiveIndex: F,
                            onScrollStop: e => {
                                if (!f) return;
                                let s = e.currentTarget;
                                (X = s.scrollTop) === s.scrollTop && clearTimeout(t), t = setTimeout(() => {
                                    null == f || f()
                                }, 150)
                            },
                            not_found_text: v,
                            portal_id: j
                        })]
                    })
                });
            au.displayName = "Autocomplete";
            let ax = ["ACCUMULATORS_MARTINGALE", "ACCUMULATORS_DALEMBERT", "ACCUMULATORS_MARTINGALE_ON_STAT_RESET", "ACCUMULATORS_DALEMBERT_ON_STAT_RESET", "ACCUMULATORS_REVERSE_MARTINGALE", "ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET", "ACCUMULATORS_REVERSE_DALEMBERT", "ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET"],
                ah = e => {
                    let {
                        symbol: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "qs__select__option",
                        children: [(0, l.jsx)(P, {
                            type: t.value,
                            size: "sm"
                        }), (0, l.jsx)(et.Z, {
                            className: "qs__select__option__text",
                            size: "xs",
                            color: "prominent",
                            children: t.text
                        })]
                    }, t.value)
                },
                am = () => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        isDesktop: t
                    } = (0, f.F)(), {
                        setValue: s,
                        selected_strategy: n
                    } = e, [a, r] = i.useState([]), [o, d] = (0, i.useState)(!1), [c, _] = (0, i.useState)({
                        text: "",
                        value: ""
                    }), [u, x] = (0, i.useState)({
                        text: "",
                        value: ""
                    }), {
                        setFieldValue: h,
                        values: m
                    } = (0, eO.u6)(), j = ax.includes(n), v = (0, i.useMemo)(() => a.map(e => ({
                        component: (0, l.jsx)(ah, {
                            symbol: e
                        }, e.text),
                        ...e
                    })).filter(e => {
                        var t;
                        return !j || (null == e ? void 0 : null === (t = e.group) || void 0 === t ? void 0 : t.startsWith("Continuous Indices"))
                    }), [a, j]);
                    (0, i.useEffect)(() => {
                        var e, t, n;
                        let {
                            active_symbols: a
                        } = (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : Z.ApiHelpers.instance) ? ? {}, l = null == a ? void 0 : null === (e = a.getSymbolsForBot) || void 0 === e ? void 0 : e.call(a);
                        r(l), !(null == l ? void 0 : l.find(e => (null == e ? void 0 : e.value) === (null == m ? void 0 : m.symbol))) && (h("symbol", null == l ? void 0 : null === (t = l[0]) || void 0 === t ? void 0 : t.value), s("symbol", null == l ? void 0 : null === (n = l[0]) || void 0 === n ? void 0 : n.value))
                    }, []), (0, i.useEffect)(() => {
                        let e = v.find(e => e.value === m.symbol);
                        e && _({
                            text: e.text,
                            value: e.value
                        })
                    }, [v, m.symbol, _]);
                    let b = () => {
                            t && !o && (d(!0), _({
                                text: "",
                                value: ""
                            }))
                        },
                        g = e => {
                            _({ ...c,
                                text: e.target.value
                            })
                        },
                        y = e => {
                            if (null == e ? void 0 : e.value) {
                                let {
                                    value: t
                                } = e;
                                h("symbol", t), s("symbol", t), d(!1)
                            }
                        },
                        N = () => {
                            if (t) {
                                let e = v.find(e => e.value === m.symbol);
                                e && e.text !== c.text && (_({
                                    text: e.text,
                                    value: e.value
                                }), x({
                                    text: e.text,
                                    value: e.value
                                }), d(!1)), !e && (_({
                                    text: u.text,
                                    value: u.value
                                }), d(!1))
                            }
                        };
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input",
                        children: (0, l.jsx)(eO.gN, {
                            name: "symbol",
                            id: "asset",
                            children: e => {
                                let {
                                    field: { ...s
                                    }
                                } = e;
                                return (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(au, { ...s,
                                        readOnly: !t,
                                        inputMode: "none",
                                        "data-testid": "dt_qs_symbol",
                                        autoComplete: "off",
                                        className: "qs__autocomplete",
                                        value: c.text,
                                        list_items: v,
                                        onItemSelection: y,
                                        onChange: g,
                                        onFocus: b,
                                        onHideDropdownList: N,
                                        leading_icon: (0, l.jsx)(P, {
                                            type: c.value,
                                            size: "sm"
                                        })
                                    })
                                })
                            }
                        }, "asset")
                    })
                },
                ap = e => {
                    let {
                        trade_type: {
                            value: t,
                            icon: s,
                            text: n
                        }
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "qs__select__option",
                        children: [(null == s ? void 0 : s.length) ? s.map((e, t) => (0, l.jsx)($, {
                            type: e,
                            className: "qs__select__option__icon",
                            size: "sm"
                        }, `${e}id-${t}`)) : null, (0, l.jsx)(et.Z, {
                            className: "qs__select__option__text",
                            size: "xs",
                            color: "prominent",
                            children: n
                        })]
                    }, t)
                },
                aj = () => {
                    let [e, t] = i.useState([]), {
                        setFieldValue: s,
                        values: n,
                        validateForm: a
                    } = (0, eO.u6)(), {
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        setValue: o,
                        selected_strategy: d
                    } = r, c = ax.includes(d);
                    i.useEffect(() => {
                        if (null == n ? void 0 : n.symbol) {
                            let e = null == n ? void 0 : n.tradetype,
                                l = c ? "ACCU" : "",
                                {
                                    contracts_for: i
                                } = (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : Z.ApiHelpers.instance) ? ? {};
                            (async () => {
                                var a, r;
                                let d = await (null == i ? void 0 : null === (a = i.getTradeTypesForQuickStrategy) || void 0 === a ? void 0 : a.call(i, null == n ? void 0 : n.symbol, l));
                                !(null == d ? void 0 : d.some(t => t.value === e)) && (null == d ? void 0 : null === (r = d[0]) || void 0 === r ? void 0 : r.value) !== e && (null == s || s("tradetype", (null == d ? void 0 : d[0].value) || ""), o("tradetype", null == d ? void 0 : d[0].value)), t(d)
                            })(), a()
                        }
                    }, [null == n ? void 0 : n.symbol]);
                    let _ = i.useMemo(() => e.map(e => ({
                        component: (0, l.jsx)(ap, {
                            trade_type: e
                        }, e.text),
                        ...e
                    })), [e]);
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input qs__form__field__group-icons",
                        children: (0, l.jsx)(eO.gN, {
                            name: "tradetype",
                            id: "tradetype",
                            children: e => {
                                var t, n;
                                let {
                                    field: a
                                } = e, i = null == _ ? void 0 : _.find(e => e.value === a.value), r = c ? "Buy" : null == i ? void 0 : i.text;
                                return (0, l.jsx)(au, { ...a,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_tradetype",
                                    autoComplete: "off",
                                    className: "qs__autocomplete",
                                    value: r || "",
                                    list_items: _,
                                    onItemSelection: e => {
                                        let t = null == e ? void 0 : e.value,
                                            n = null == e ? void 0 : e.text;
                                        t && n && (null == s || s("tradetype", t), o("tradetype", t))
                                    },
                                    leading_icon: (0, l.jsxs)(et.Z, {
                                        children: [(0, l.jsx)($, {
                                            type: (null == i ? void 0 : null === (t = i.icon) || void 0 === t ? void 0 : t[0]) || "CALL",
                                            size: "sm"
                                        }), (0, l.jsx)($, {
                                            type: (null == i ? void 0 : null === (n = i.icon) || void 0 === n ? void 0 : n[1]) || "PUT",
                                            size: "sm"
                                        })]
                                    })
                                })
                            }
                        }, "tradetype")
                    })
                },
                av = (0, r.Pi)(e => {
                    let {
                        name: t
                    } = e, {
                        isDesktop: s
                    } = (0, f.F)(), [n, a] = i.useState([]), {
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        setValue: o
                    } = r, {
                        setFieldValue: d,
                        values: c
                    } = (0, eO.u6)(), {
                        symbol: _,
                        tradetype: u
                    } = c;
                    i.useEffect(() => {
                        if (u && _) {
                            let e = null == c ? void 0 : c.type;
                            (async () => {
                                var s, n, l;
                                let {
                                    contracts_for: i
                                } = (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : Z.ApiHelpers.instance) ? ? {}, r = await (null == i ? void 0 : null === (s = i.getContractTypes) || void 0 === s ? void 0 : s.call(i, u));
                                a(r), !(null == r ? void 0 : r.some(t => t.value === e)) && (null == d || d(t, null == r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.value), o(t, null == r ? void 0 : null === (l = r[0]) || void 0 === l ? void 0 : l.value))
                            })()
                        }
                    }, [_, u]);
                    let x = e => {
                            null == d || d(t, e), o(t, e)
                        },
                        h = `qs-contract-type-${t}`;
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input no-top-spacing",
                        children: (0, l.jsx)(eO.gN, {
                            name: t,
                            id: h,
                            children: e => {
                                let {
                                    field: t
                                } = e, a = null == n ? void 0 : n.find(e => (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value));
                                return s ? (0, l.jsx)(au, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_contract_type",
                                    autoComplete: "off",
                                    className: "qs__select contract-type",
                                    value: (null == a ? void 0 : a.text) || "",
                                    list_items: n,
                                    onItemSelection: e => {
                                        let {
                                            value: t
                                        } = e;
                                        t && x(t)
                                    }
                                }) : (0, l.jsx)("ul", {
                                    className: "qs__form__field__list",
                                    "data-testid": "dt_qs_contract_types",
                                    children: n.map(e => {
                                        let t = (null == a ? void 0 : a.value) === (null == e ? void 0 : e.value);
                                        return (0, l.jsx)("li", {
                                            className: D()("qs__form__field__list__item", {
                                                "qs__form__field__list__item--active": t
                                            }),
                                            onClick: () => {
                                                x(null == e ? void 0 : e.value)
                                            },
                                            children: (0, l.jsx)(et.Z, {
                                                size: "xs",
                                                color: "prominent",
                                                weight: t ? "bold " : "normal",
                                                children: null == e ? void 0 : e.text
                                            })
                                        }, null == e ? void 0 : e.value)
                                    })
                                })
                            }
                        }, h)
                    })
                }),
                ab = e => {
                    let {
                        attached: t
                    } = e, [s, n] = i.useState([]), [a, r] = i.useState(""), [o, d] = i.useState(""), {
                        quick_strategy: c
                    } = (0, p.oR)(), {
                        setValue: _,
                        setCurrentDurationMinMax: u,
                        current_duration_min_max: x
                    } = c, {
                        setFieldValue: h,
                        validateForm: m,
                        values: j
                    } = (0, eO.u6)(), {
                        symbol: v,
                        tradetype: b
                    } = j;
                    return i.useEffect(() => {
                        b && v && (async () => {
                            var e, t, s, l, i, c;
                            let {
                                contracts_for: x
                            } = (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : Z.ApiHelpers.instance) ? ? {}, m = await (null == x ? void 0 : null === (e = x.getDurations) || void 0 === e ? void 0 : e.call(x, v, b)), p = null == m ? void 0 : m.map(e => ({
                                text: e.display ? ? "",
                                value: e.unit ? ? "",
                                min: e.min,
                                max: e.max
                            }));
                            n(p);
                            let g = null == j ? void 0 : j.durationtype;
                            if ((null == p ? void 0 : p.some(e => e.value === g)) && a === v && o === b) {
                                let e = null == p ? void 0 : p.find(e => e.value === g);
                                u(null == e ? void 0 : e.min, null == e ? void 0 : e.max)
                            } else u(null == m ? void 0 : null === (t = m[0]) || void 0 === t ? void 0 : t.min, null == m ? void 0 : null === (s = m[0]) || void 0 === s ? void 0 : s.max), null == h || h("durationtype", null == m ? void 0 : null === (l = m[0]) || void 0 === l ? void 0 : l.unit, !0), null == h || h("duration", null == m ? void 0 : null === (i = m[0]) || void 0 === i ? void 0 : i.min, !0), _("durationtype", (null == m ? void 0 : null === (c = m[0]) || void 0 === c ? void 0 : c.unit) ? ? "");
                            r(v), d(b)
                        })()
                    }, [v, b]), (0, i.useEffect)(() => {
                        m()
                    }, [x, m]), (0, l.jsx)("div", {
                        className: D()("qs__form__field qs__form__field__input", {
                            "no-top-border-radius": t
                        }),
                        children: (0, l.jsx)(eO.gN, {
                            name: "durationtype",
                            id: "durationtype",
                            children: e => {
                                let {
                                    field: t
                                } = e, n = null == s ? void 0 : s.find(e => e.value === t.value);
                                return (0, l.jsx)(au, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_durationtype",
                                    autoComplete: "off",
                                    className: "qs__select",
                                    value: (null == n ? void 0 : n.text) || "",
                                    list_items: s,
                                    onItemSelection: e => {
                                        let {
                                            value: t,
                                            min: s,
                                            max: n
                                        } = e;
                                        t && (u(s, n), null == h || h("durationtype", t), _("durationtype", t), null == h || h("duration", s).then(() => {
                                            m()
                                        }), _("duration", s))
                                    }
                                })
                            }
                        }, "durationtype")
                    })
                },
                ag = (0, r.Pi)(e => {
                    let {
                        name: t,
                        onChange: s,
                        type: n = "text",
                        attached: a = !1,
                        disabled: r = !1,
                        min: o,
                        max: d,
                        has_currency_unit: c = !1
                    } = e, {
                        client: {
                            currency: _
                        }
                    } = (0, p.oR)(), {
                        quick_strategy: u
                    } = (0, p.oR)(), {
                        loss_threshold_warning_data: x
                    } = u, {
                        isDesktop: h
                    } = (0, f.F)(), [m, j] = i.useState(!1), {
                        setFieldValue: v,
                        setFieldTouched: b
                    } = (0, eO.u6)(), g = "number" === n, y = (e, n) => {
                        null == e || e.preventDefault(), s(t, n), b(t, !0, !0), v(t, n)
                    }, N = e => {
                        let n = e.target.value,
                            a = 0;
                        n.length >= 12 ? (a = n.slice(0, 12), a = g ? Number(a) : a) : a = g ? Number(n) : n, s(t, a)
                    };
                    return (0, l.jsx)(eO.gN, {
                        name: t,
                        id: t,
                        children: e => {
                            var s;
                            let {
                                field: i,
                                meta: u
                            } = e, {
                                error: p
                            } = u;
                            return (0, l.jsx)("div", {
                                className: D()("qs__form__field qs__form__field__input", {
                                    "no-top-spacing": a,
                                    "no-border-top": a
                                }),
                                children: (0, l.jsx)("div", {
                                    "data-testid": "qs-input-container",
                                    onMouseEnter: () => j(!0),
                                    onMouseLeave: () => j(!1),
                                    children: (0, l.jsx)(X.Z, {
                                        alignment: "bottom",
                                        message: p,
                                        is_open: h ? !!p && m : !!p,
                                        zIndex: "9999",
                                        classNameBubble: "qs__warning-bubble",
                                        has_error: !0,
                                        should_disable_pointer_events: !0,
                                        children: (0, l.jsx)(eV, {
                                            data_testId: "qs-input",
                                            className: D()("qs__input", {
                                                error: p
                                            }, {
                                                highlight: null == x ? void 0 : null === (s = x.highlight_field) || void 0 === s ? void 0 : s.includes(t)
                                            }),
                                            type: n,
                                            leading_icon: g ? (0, l.jsx)("button", {
                                                disabled: r || !!o && i.value <= o,
                                                "data-testid": "qs-input-decrease",
                                                onClick: e => {
                                                    let t = Number(i.value) - 1;
                                                    y(e, String(t % 1 ? t.toFixed(2) : t))
                                                },
                                                children: "-"
                                            }) : void 0,
                                            trailing_icon: g ? (0, l.jsx)("button", {
                                                disabled: r || 0xe8d4a50fff == i.value || !!d && i.value >= d,
                                                "data-testid": "qs-input-increase",
                                                onClick: e => {
                                                    let t = Number(i.value) + 1;
                                                    y(e, String(t % 1 ? t.toFixed(2) : t))
                                                },
                                                children: "+"
                                            }) : null,
                                            ...i,
                                            disabled: r,
                                            onChange: e => N(e),
                                            placeholder: c ? "0.00" : "",
                                            bottom_label: c ? _ : "",
                                            max_characters: 2,
                                            maxLength: 2
                                        })
                                    })
                                })
                            })
                        }
                    }, t)
                }),
                ay = e => {
                    let {
                        className: t,
                        classNameButton: s,
                        classNameLabel: n,
                        handleToggle: a,
                        id: r,
                        is_enabled: o,
                        name: d = "toggle_switch"
                    } = e;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("input", {
                            "aria-label": d,
                            className: D()("dc-toggle-switch", t),
                            id: r,
                            type: "checkbox",
                            checked: o,
                            onChange: a
                        }), (0, l.jsx)("label", {
                            className: D()("dc-toggle-switch__label", n),
                            htmlFor: r,
                            children: (0, l.jsx)("span", {
                                className: D()("dc-toggle-switch__button", s)
                            })
                        })]
                    })
                },
                af = e => {
                    let {
                        name: t,
                        label: s,
                        description: n,
                        attached: a = !1,
                        isEnabledToggleSwitch: i,
                        setIsEnabledToggleSwitch: r
                    } = e, {
                        values: o,
                        setFieldValue: d
                    } = (0, eO.u6)(), c = async () => {
                        r(), await d(t, !(null == o ? void 0 : o[t]), !0), await d("max_stake", null == o ? void 0 : o.max_stake, !0)
                    };
                    return (0, l.jsx)(eO.gN, {
                        name: t,
                        children: () => (0, l.jsx)("div", {
                            className: D()("qs__form__field qs__form__field__input", {
                                "no-border-bottom-radius": a
                            }),
                            children: (0, l.jsx)("div", {
                                className: "qs__checkbox",
                                children: (0, l.jsxs)("div", {
                                    className: "qs__checkbox__container",
                                    children: [(0, l.jsxs)("label", {
                                        className: "dc-checkbox",
                                        children: [(0, l.jsx)(et.Z, {
                                            size: "xs",
                                            className: "dc-checkbox__label",
                                            children: s
                                        }), (0, l.jsx)(et.Z, {
                                            size: "xs",
                                            children: (0, y.NC)("(optional)")
                                        })]
                                    }), (0, l.jsx)("span", {
                                        children: (0, l.jsx)(X.Z, {
                                            classNameTargetIcon: "qs__checkbox__info",
                                            message: n,
                                            zIndex: "9999",
                                            alignment: "top",
                                            icon: "info"
                                        })
                                    }), (0, l.jsx)(ay, {
                                        id: "dt_mobile_drawer_theme_toggler",
                                        handleToggle: c,
                                        is_enabled: i,
                                        "data-testid": "qs-toggle-switch"
                                    })]
                                })
                            })
                        })
                    })
                },
                aN = e => {
                    let t, {
                        label: s,
                        description: n,
                        additional_data: a
                    } = e;
                    return t = "function" == typeof n ? n(a) : n, (0, l.jsx)("div", {
                        className: "qs__form__field",
                        children: (0, l.jsxs)("div", {
                            className: "qs__input-label",
                            children: [(0, l.jsx)(et.Z, {
                                weight: "bold",
                                className: "qs__input-label__wrapper",
                                size: "xs",
                                children: s
                            }), (0, l.jsx)("span", {
                                children: (0, l.jsx)(X.Z, {
                                    message: t,
                                    zIndex: "9999",
                                    alignment: "top",
                                    icon: "info"
                                })
                            })]
                        })
                    })
                };
            var aC = s("63999");
            let aw = (0, r.Pi)(e => {
                    let {
                        name: t
                    } = e, {
                        ui: s,
                        client: n
                    } = (0, p.oR)(), {
                        is_desktop: a
                    } = s, [r, o] = i.useState([]), {
                        quick_strategy: d
                    } = (0, p.oR)(), {
                        setValue: c,
                        setAdditionalData: _
                    } = d, {
                        setFieldValue: u,
                        values: x,
                        setFieldError: h,
                        errors: m
                    } = (0, eO.u6)(), j = i.useRef(null), v = i.useRef(null), b = i.useRef({
                        tick_count: null,
                        take_profit: null
                    });
                    i.useEffect(() => {
                        o([{
                            text: "1%",
                            value: "0.01"
                        }, {
                            text: "2%",
                            value: "0.02"
                        }, {
                            text: "3%",
                            value: "0.03"
                        }, {
                            text: "4%",
                            value: "0.04"
                        }, {
                            text: "5%",
                            value: "0.05"
                        }]), null == u || u("tradetype", "accumulator"), c("tradetype", "accumulator")
                    }, []), i.useEffect(() => {
                        var e, t;
                        x.boolean_tick_count ? (u("take_profit", 0), h("tick_count", (null === (e = b.current) || void 0 === e ? void 0 : e.tick_count) ? ? void 0), h("take_profit", void 0)) : (u("tick_count", 0), h("take_profit", (null === (t = b.current) || void 0 === t ? void 0 : t.take_profit) ? ? void 0), h("tick_count", void 0))
                    }, [x, m.take_profit, m.tick_count, x.boolean_tick_count, u, h]);
                    let g = async e => {
                            var t, s, a, l, i, r, o, d, c, u, x;
                            let m = Number(e.growth_rate),
                                p = Number(e.stake),
                                g = Number(e.take_profit),
                                f = {
                                    amount: p,
                                    currency: null == n ? void 0 : n.currency,
                                    growth_rate: m,
                                    symbol: e.symbol,
                                    limit_order: { ...!e.boolean_tick_count && {
                                            take_profit: g
                                        }
                                    }
                                };
                            j.current = { ...f,
                                boolean_tick_count: e.boolean_tick_count
                            };
                            try {
                                let n = await (0, aC.QT)(f, Z.api_base.api),
                                    i = null == n ? void 0 : null === (s = n.proposal) || void 0 === s ? void 0 : null === (t = s.validation_params) || void 0 === t ? void 0 : t.max_ticks,
                                    r = "",
                                    o = "";
                                _({
                                    max_payout: v.current,
                                    max_ticks: i
                                }), v.current = null == n ? void 0 : null === (l = n.proposal) || void 0 === l ? void 0 : null === (a = l.validation_params) || void 0 === a ? void 0 : a.max_payout;
                                let d = Number(e.tick_count);
                                !isNaN(d) && d > i ? (o = `Maximum tick count is: ${i}`, h("tick_count", o), b.current.tick_count = o) : !isNaN(d) && d < 1 ? (r = "Minimum tick count is: 1", h("tick_count", r), b.current.tick_count = r) : (b.current.tick_count = null, h("tick_count", void 0)), b.current.take_profit = null
                            } catch (s) {
                                let t = (null == s ? void 0 : s.message) ? ? (null == s ? void 0 : null === (i = s.error) || void 0 === i ? void 0 : i.message);
                                e.boolean_tick_count ? (h("tick_count", t), b.current.tick_count = t) : ((null == s ? void 0 : null === (o = s.error) || void 0 === o ? void 0 : null === (r = o.details) || void 0 === r ? void 0 : r.field) === "take_profit" && (t = 0 === Number(e.take_profit) ? null == s ? void 0 : null === (u = s.error) || void 0 === u ? void 0 : u.message : `Your total payout is ${Number(e.take_profit)+Number(e.stake)}. Enter amount less than ${v.current} ${(0,y.NC)("By changing your initial stake and/or take profit.")}`), (null == s ? void 0 : null === (c = s.error) || void 0 === c ? void 0 : null === (d = c.details) || void 0 === d ? void 0 : d.field) === "stake" && (t = `${null==s?void 0:null===(x=s.error)||void 0===x?void 0:x.message} ${(0,y.NC)("Update your initial stake.")}`), h("take_profit", t), b.current.take_profit = t)
                            }
                        },
                        f = i.useCallback(T()(g, 500, {
                            trailing: !0,
                            leading: !1
                        }), []);
                    i.useEffect(() => {
                        var e, t, s, a, l, i, r;
                        ((null === (e = j.current) || void 0 === e ? void 0 : e.symbol) !== x.symbol || (null === (t = j.current) || void 0 === t ? void 0 : t.amount) !== x.stake || (null === (a = j.current) || void 0 === a ? void 0 : null === (s = a.limit_order) || void 0 === s ? void 0 : s.take_profit) !== x.take_profit || (null === (l = j.current) || void 0 === l ? void 0 : l.currency) !== (null == n ? void 0 : n.currency) || (null === (i = j.current) || void 0 === i ? void 0 : i.growth_rate) !== x.growth_rate || (null === (r = j.current) || void 0 === r ? void 0 : r.boolean_tick_count) !== x.boolean_tick_count) && f(x)
                    }, [x.take_profit, x.tick_count, x.stake, x.growth_rate, null == n ? void 0 : n.currency, x.boolean_tick_count, x, f]);
                    let N = async e => {
                            null == u || u(t, e), c(t, e)
                        },
                        C = `qs-contract-type-${t}`;
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input no-top-spacing",
                        children: (0, l.jsx)(eO.gN, {
                            name: t,
                            id: C,
                            children: e => {
                                let {
                                    field: t
                                } = e, s = null == r ? void 0 : r.find(e => (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value));
                                return a ? (0, l.jsx)(au, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_contract_type",
                                    autoComplete: "off",
                                    className: "qs__select contract-type",
                                    value: (null == s ? void 0 : s.text) || "",
                                    list_items: r,
                                    onItemSelection: e => {
                                        let {
                                            value: t
                                        } = e;
                                        t && N(t)
                                    }
                                }) : (0, l.jsx)("ul", {
                                    className: "qs__form__field__list",
                                    "data-testid": "dt_qs_contract_types",
                                    children: r.map(e => {
                                        let t = (null == s ? void 0 : s.value) === (null == e ? void 0 : e.value);
                                        return (0, l.jsx)("li", {
                                            className: D()("qs__form__field__list__item", {
                                                "qs__form__field__list__item--active": t
                                            }),
                                            onClick: () => {
                                                N(null == e ? void 0 : e.value)
                                            },
                                            onChange: () => {
                                                N(null == e ? void 0 : e.value)
                                            },
                                            children: (0, l.jsx)(et.Z, {
                                                size: "xs",
                                                color: "prominent",
                                                weight: t ? "bold " : "normal",
                                                children: null == e ? void 0 : e.text
                                            })
                                        }, null == e ? void 0 : e.value)
                                    })
                                })
                            }
                        }, C)
                    })
                }),
                ak = [{
                    text: "Take Profit",
                    value: "take_profit"
                }, {
                    text: "Tick Count",
                    value: "tick_count"
                }],
                aT = e => {
                    let {
                        attached: t
                    } = e, {
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        setValue: n
                    } = s, {
                        setFieldValue: a,
                        values: r
                    } = (0, eO.u6)(), [o, d] = (0, i.useState)(r.boolean_tick_count ? ak[1] : ak[0]), c = e => {
                        if (null == e ? void 0 : e.value) {
                            let {
                                value: t
                            } = e, s = "take_profit" === t;
                            n("boolean_tick_count", !s), null == a || a("boolean_tick_count", !s), d({ ...o,
                                text: s ? "Take Profit" : "Tick Count"
                            })
                        }
                    };
                    return (0, l.jsx)("div", {
                        className: D()("qs__form__field qs__form__field__input", {
                            "no-top-border-radius": t
                        }),
                        children: (0, l.jsx)(eO.gN, {
                            name: "sell_conditions",
                            id: "sell_conditions",
                            children: e => {
                                let {
                                    field: t
                                } = e;
                                return (0, l.jsx)(au, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_sell_conditions",
                                    autoComplete: "off",
                                    className: "qs__select",
                                    value: o.text,
                                    list_items: ak,
                                    onItemSelection: c
                                })
                            }
                        }, "sell_conditions")
                    })
                },
                aE = (0, r.Pi)(() => {
                    var e;
                    let {
                        quick_strategy: t
                    } = (0, p.oR)(), {
                        selected_strategy: s,
                        setValue: n,
                        form_data: a
                    } = t, r = null === (e = (0, nF.j)()[s]) || void 0 === e ? void 0 : e.fields, {
                        isDesktop: o
                    } = (0, f.F)(), {
                        values: d,
                        setFieldTouched: c,
                        setFieldValue: _
                    } = (0, eO.u6)(), {
                        current_duration_min_max: u,
                        additional_data: x
                    } = t, [h, m] = i.useState((null == d ? void 0 : d.boolean_max_stake) ? ? !1);
                    i.useEffect(() => {
                        window.addEventListener("keydown", v);
                        let e = null;
                        try {
                            e = JSON.parse(localStorage.getItem("qs-fields") ? ? "{}")
                        } catch {
                            e = null
                        }
                        return m(!!(null == e ? void 0 : e.boolean_max_stake)), () => {
                            window.removeEventListener("keydown", v)
                        }
                    }, []), i.useEffect(() => {
                        !h && (null == d ? void 0 : d.max_stake) && _("max_stake", 0)
                    }, [h, null == d ? void 0 : d.max_stake]);
                    let j = async (e, t) => {
                            n(e, t), await c(e, !0, !0), await _(e, t, !0)
                        },
                        v = e => {
                            (null == e ? void 0 : e.key) && "Enter" == e.key && (e.preventDefault(), e.stopPropagation())
                        },
                        b = e => e.every(e => {
                            var t;
                            let s = null == d ? void 0 : null === (t = d[e.key]) || void 0 === t ? void 0 : t.toString();
                            return e.multiple ? e.multiple.includes(s) : d[e.key] === e.value
                        }),
                        g = () => {
                            m(e => !e)
                        };
                    return (0, l.jsx)("div", {
                        children: r.map((e, t) => (null == e ? void 0 : e.length) ? (0, l.jsx)("div", {
                            className: "qs__body__content__form__group",
                            children: e.map((e, t) => {
                                var s, n;
                                let r = `${e.name||e.type} + ${t}`;
                                if (!o && (null === (s = e.hide) || void 0 === s ? void 0 : s.includes("mobile")) || o && (null === (n = e.hide) || void 0 === n ? void 0 : n.includes("desktop"))) return null;
                                switch (e.type) {
                                    case "number":
                                        {
                                            let t;
                                            if (!e.name) return null;
                                            let {
                                                should_have: s = [],
                                                hide_without_should_have: n = !1,
                                                has_currency_unit: l = !1
                                            } = e,
                                            d = b(s),
                                            c = 1;
                                            "duration" === e.name && u && (c = u.min, t = u.max);
                                            let _ = e.should_have;
                                            if (_ && "max_stake" === e.name && isNaN(c = +(null == a ? void 0 : a.stake)) && (c = 1), _ && "last_digit_prediction" === e.name && ((isNaN(+(null == a ? void 0 : a.last_digit_prediction)) || 1 == +(null == a ? void 0 : a.last_digit_prediction)) && (c = 0), +(null == a ? void 0 : a.last_digit_prediction) > 0 && (c = +(null == a ? void 0 : a.last_digit_prediction) - 1), t = 9), null == s ? void 0 : s.length) {
                                                if (!d && (!o || n)) return null;
                                                return (0, i.createElement)(ag, { ...e,
                                                    key: r,
                                                    name: e.name,
                                                    disabled: !d,
                                                    onChange: j,
                                                    min: c,
                                                    max: t,
                                                    has_currency_unit: l
                                                })
                                            }
                                            return (0, i.createElement)(ag, { ...e,
                                                onChange: j,
                                                key: r,
                                                name: e.name,
                                                min: c,
                                                max: t,
                                                has_currency_unit: l
                                            })
                                        }
                                    case "label":
                                        {
                                            if (!e.label) return null;
                                            let {
                                                should_have: t = [],
                                                hide_without_should_have: s = !1
                                            } = e;
                                            if (!b(t) && s) return null;
                                            return (0, l.jsx)(aN, {
                                                label: e.label,
                                                description: e.description ? ? "",
                                                additional_data: x
                                            }, r)
                                        }
                                    case "checkbox":
                                        return (0, i.createElement)(af, { ...e,
                                            key: r,
                                            name: e.name,
                                            label: e.label,
                                            isEnabledToggleSwitch: !!h,
                                            setIsEnabledToggleSwitch: g
                                        });
                                    case "symbol":
                                        return (0, i.createElement)(am, { ...e,
                                            key: r
                                        });
                                    case "tradetype":
                                        return (0, i.createElement)(aj, { ...e,
                                            key: r
                                        });
                                    case "durationtype":
                                        return (0, i.createElement)(ab, { ...e,
                                            key: r
                                        });
                                    case "contract_type":
                                        return (0, i.createElement)(av, { ...e,
                                            key: r,
                                            name: e.name
                                        });
                                    case "growth_rate":
                                        return (0, i.createElement)(aw, { ...e,
                                            key: r,
                                            name: e.name
                                        });
                                    case "sell_conditions":
                                        return (0, i.createElement)(aT, { ...e,
                                            key: r
                                        });
                                    default:
                                        return null
                                }
                            })
                        }, t) : null)
                    })
                }),
                aS = function(e, t) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "DEFAULT";
                    return ({
                        DURATION: {
                            MIN: (0, y.NC)("Minimum duration: {{ value }}", {
                                value: t
                            }),
                            MAX: (0, y.NC)("Maximum duration: {{ value }}", {
                                value: t
                            })
                        },
                        LAST_DIGIT_PREDICTION: {
                            MIN: (0, y.NC)("Enter a value from {{ value }} to 9.", {
                                value: t
                            }),
                            MAX: (0, y.NC)("Enter a value from 0 to {{ value }}.", {
                                value: t
                            })
                        },
                        DEFAULT: {
                            MIN: (0, y.NC)("The value must be equal or greater than {{ value }}", {
                                value: t
                            }),
                            MAX: (0, y.NC)("The value must be equal or less than {{ value }}", {
                                value: t
                            })
                        }
                    })[s][e]
                },
                aI = (0, r.Pi)(e => {
                    var t;
                    let {
                        children: s
                    } = e, {
                        quick_strategy: n
                    } = (0, p.oR)(), {
                        selected_strategy: a,
                        form_data: r,
                        initializeLossThresholdWarningData: o
                    } = n, d = null === (t = (0, nF.j)()[a]) || void 0 === t ? void 0 : t.fields, [c, _] = (0, i.useState)(nO.Ry().shape({})), u = (0, i.useRef)(!0), x = null, h = () => {
                        let e = null;
                        try {
                            e = JSON.parse(localStorage.getItem("qs-fields") ? ? "{}")
                        } catch {
                            e = null
                        }
                        return e
                    };
                    i.useEffect(() => () => {
                        u.current = !1
                    }, []), i.useEffect(() => {
                        o()
                    }, []);
                    let m = e => {
                        let t = {};
                        d.forEach(s => {
                            if (!(null == s ? void 0 : s.length)) return null;
                            s.forEach(s => {
                                var a, l;
                                if ((null == s ? void 0 : null === (a = s.validation) || void 0 === a ? void 0 : a.length) && (null == s ? void 0 : s.name) && s.validation.includes("number")) {
                                    let a = nO.Rx().typeError((0, y.NC)("Must be a number")),
                                        i = 0,
                                        o = 10,
                                        d = aS("MIN", 0),
                                        c = aS("MAX", o),
                                        _ = "",
                                        {
                                            current_duration_min_max: u
                                        } = n;
                                    "duration" === s.name && u && (i = u.min, o = u.max, d = aS("MIN", i, "DURATION"), c = aS("MAX", o, "DURATION"));
                                    let h = !s.should_have || (null === (l = s.should_have) || void 0 === l ? void 0 : l.every(t => {
                                        var s;
                                        let n = null == e ? void 0 : null === (s = e[t.key]) || void 0 === s ? void 0 : s.toString();
                                        return t.multiple ? t.multiple.includes(n) : (null == e ? void 0 : e[t.key]) === t.value
                                    }));
                                    h && "max_stake" === s.name && (isNaN(i = +(null == r ? void 0 : r.stake)) && (i = +((null == x ? void 0 : x.stake) ? ? 0)), d = aS("MIN", i)), h && "last_digit_prediction" === s.name && (i = 0, c = aS("MAX", o = 9, "LAST_DIGIT_PREDICTION"), _ = "Enter a value from 0 to 9."), h && s.validation.forEach(e => {
                                        if ("string" == typeof e) switch (e) {
                                            case "required":
                                                a = a.required((0, y.NC)("Field cannot be empty"));
                                                break;
                                            case "min":
                                                a = a.min(i, d);
                                                break;
                                            case "max":
                                                a = a.max(o, c);
                                                break;
                                            case "ceil":
                                                a = a.round("ceil");
                                                break;
                                            case "floor":
                                                a = a.round("floor");
                                                break;
                                            case "integer":
                                                a = a.integer(_)
                                        } else "object" == typeof e && (null == e ? void 0 : e.type) && (a = a[e.type](e.value, (0, y.NC)(e.getMessage(e.value))))
                                    }), t[s.name] = a
                                }
                            })
                        }), u.current && _(nO.Ry().shape(t))
                    };
                    return (0, l.jsx)(eO.J9, {
                        initialValues: (() => {
                            let e = h();
                            return x = {
                                symbol: (null == e ? void 0 : e.symbol) ? ? (0, Z.config)().QUICK_STRATEGY.DEFAULT.symbol,
                                tradetype: (null == e ? void 0 : e.tradetype) ? ? "",
                                type: (null == e ? void 0 : e.type) ? ? "",
                                durationtype: (null == e ? void 0 : e.durationtype) ? ? (0, Z.config)().QUICK_STRATEGY.DEFAULT.durationtype,
                                duration: (null == e ? void 0 : e.duration) ? ? "1",
                                stake: (null == e ? void 0 : e.stake) ? ? "1",
                                loss: (null == e ? void 0 : e.loss) ? ? "",
                                profit: (null == e ? void 0 : e.profit) ? ? "",
                                size: (null == e ? void 0 : e.size) ? ? String((0, Z.config)().QUICK_STRATEGY.DEFAULT.size),
                                unit: (null == e ? void 0 : e.unit) ? ? String((0, Z.config)().QUICK_STRATEGY.DEFAULT.unit),
                                action: (null == e ? void 0 : e.action) ? ? "RUN",
                                max_stake: (null == e ? void 0 : e.max_stake) ? ? 10,
                                boolean_max_stake: (null == e ? void 0 : e.boolean_max_stake) ? ? !1,
                                last_digit_prediction: (null == e ? void 0 : e.last_digit_prediction) ? ? 1,
                                growth_rate: (null == e ? void 0 : e.growth_rate) ? ? "0.01",
                                tick_count: (null == e ? void 0 : e.tick_count) ? ? 0,
                                take_profit: (null == e ? void 0 : e.take_profit) ? ? 0,
                                boolean_tick_count: (null == e ? void 0 : e.boolean_tick_count) ? ? !1,
                                max_payout: (null == e ? void 0 : e.max_payout) ? ? 0,
                                max_ticks: (null == e ? void 0 : e.max_ticks) ? ? 0
                            }
                        })(),
                        validationSchema: c,
                        onSubmit: e => {
                            var t;
                            return m(e), null === (t = localStorage) || void 0 === t || t.setItem("qs-fields", JSON.stringify(e)), e
                        },
                        validate: e => m(e),
                        validateOnChange: !1,
                        children: s
                    })
                }),
                aA = (0, r.Pi)(() => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        isDesktop: t
                    } = (0, f.F)(), {
                        is_open: s,
                        setFormVisibility: n,
                        form_data: a,
                        selected_strategy: r
                    } = e, o = (0, i.useRef)(null), [d, c] = i.useState(nB.StrategySelect), [_, u] = i.useState(""), x = () => {
                        var e, t, s;
                        let n = (null === (s = o.current) || void 0 === s ? void 0 : null === (t = s.querySelector(".active")) || void 0 === t ? void 0 : null === (e = t.textContent) || void 0 === e ? void 0 : e.toLowerCase()) === "learn more" ? "learn more" : "trade parameters";
                        (0, tK._W)({
                            subform_name: "quick_strategy",
                            quick_strategy_tab: n,
                            selected_strategy: r,
                            form_values: a
                        })
                    }, h = () => {
                        x(), n(!1)
                    };
                    return (0, l.jsx)(aI, {
                        children: (0, l.jsxs)(eO.l0, {
                            children: [(0, l.jsx)(n4, {}), t ? (0, l.jsx)(N.Z, {
                                className: "modal--strategy",
                                is_open: s,
                                width: "72rem",
                                children: (0, l.jsx)(n2, {
                                    onClickClose: h,
                                    setCurrentStep: c,
                                    current_step: d,
                                    selected_trade_type: _,
                                    setSelectedTradeType: u,
                                    children: (0, l.jsx)(aE, {})
                                })
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(sv, {
                                    is_modal_open: s,
                                    className: "quick-strategy__wrapper",
                                    header: (0, l.jsx)(et.Z, {
                                        size: "xs",
                                        weight: "bold",
                                        children: (0, y.NC)(`Step ${d===nB.StrategyCompleted?2:1}/2: Choose your strategy`)
                                    }),
                                    onClickClose: h,
                                    height_offset: "8rem",
                                    children: (0, l.jsx)(n5, {
                                        setCurrentStep: c,
                                        current_step: d,
                                        selected_trade_type: _,
                                        setSelectedTradeType: u,
                                        children: (0, l.jsx)(aE, {})
                                    })
                                }), (0, l.jsx)(n3, {
                                    setCurrentStep: c,
                                    current_step: d
                                })]
                            })]
                        })
                    })
                });
            var aR = s("18908"),
                aL = s("69103"),
                aM = s("27086"),
                aO = s("35651");
            let aD = (0, r.Pi)(e => {
                    let {
                        block_node: t,
                        should_hide_display_name: s
                    } = e, {
                        flyout: n
                    } = (0, p.oR)(), {
                        initBlockWorkspace: a
                    } = n, r = i.useRef();
                    return i.useEffect(() => {
                        a(r, t)
                    }, []), (0, l.jsx)("div", {
                        ref: e => r = e,
                        className: D()({
                            "flyout__block-workspace--center": s,
                            "flyout__block-workspace--top": !s
                        }),
                        "data-testid": "flyout-block-workspace"
                    })
                }),
                aU = e => {
                    let {
                        onInfoClick: t,
                        block_node: s,
                        is_active: n,
                        should_hide_display_name: a
                    } = e, i = s.getAttribute("type") || "", r = window.Blockly.Blocks[i].meta(), o = "variables_get" === i, d = "variables_set" === i, {
                        display_name: c,
                        description: _
                    } = r, u = () => (0, l.jsx)("div", {
                        className: "flyout__item-buttons",
                        children: (0, l.jsx)(eI.Z, {
                            id: `db-flyout__add--${i}`,
                            "data-testid": `dt_flyout__add_${i}`,
                            className: "flyout__button-add flyout__button-add--hide",
                            has_effect: !0,
                            is_plus: !0,
                            onClick: () => window.Blockly.derivWorkspace.addBlockNode(s),
                            type: "button",
                            children: (0, l.jsx)(aO.Z, {
                                height: "24px",
                                width: "24px",
                                fill: "var(--text-general)"
                            })
                        })
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [d && (0, l.jsx)("div", {
                            className: "flyout__hr"
                        }), (0, l.jsxs)("div", {
                            className: D()("flyout__item", {
                                "flyout__item--active": n
                            }),
                            children: [!a && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)("div", {
                                    className: "flyout__item-header",
                                    children: [(0, l.jsx)(et.Z, {
                                        size: o ? "xs" : "xsm",
                                        lineHeight: o ? void 0 : "xl",
                                        weight: o ? void 0 : "bold",
                                        children: c
                                    }), !o && (0, l.jsx)(u, {})]
                                }), (0, l.jsxs)("div", {
                                    className: "flyout__item-description",
                                    children: [_, t && (0, l.jsx)("a", {
                                        id: c.replace(/\s/gi, "-"),
                                        className: "flyout__item-info",
                                        onClick: t,
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: "Learn more"
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flyout__block-workspace__header",
                                children: [(0, l.jsx)(aD, {
                                    block_node: s,
                                    should_hide_display_name: !0
                                }), o && (0, l.jsx)(u, {})]
                            })]
                        })]
                    })
                };
            var aF = s("43774");
            let aZ = e => {
                    let {
                        width: t,
                        url: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "flyout__item",
                        "data-testid": "dt_flyout_image",
                        children: (0, l.jsx)("img", {
                            src: s,
                            className: "flyout__image",
                            style: {
                                width: t
                            }
                        })
                    })
                },
                az = e => {
                    let {
                        text: t
                    } = e;
                    return (0, l.jsx)(et.Z, {
                        as: "p",
                        size: "xs",
                        styles: {
                            lineHeight: "1.3em"
                        },
                        children: t
                    })
                },
                aB = e => (0, l.jsx)("div", {
                    className: "flyout__item",
                    "data-testid": "dt_flyout_video_container",
                    children: (0, l.jsx)("iframe", {
                        "data-testid": "dt_flyout_video",
                        className: "flyout__video",
                        src: e.url,
                        frameBorder: "0",
                        allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        width: "100%"
                    })
                }),
                aP = (0, r.Pi)(() => {
                    let {
                        flyout: e,
                        flyout_help: t
                    } = (0, p.oR)(), {
                        block_node: s,
                        block_type: n,
                        examples: a,
                        help_string: r,
                        onBackClick: o,
                        onSequenceClick: d,
                        should_next_disable: c,
                        should_previous_disable: _,
                        title: u
                    } = t, {
                        is_search_flyout: x
                    } = e, h = r && (0, aL.S)(window.__webpack_public_path__)[n], m = 0;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "flyout__help-header",
                            "data-testid": "dt_flyout_help_base",
                            children: [(0, l.jsx)("button", {
                                className: "dc-btn flyout__button-back",
                                onClick: o,
                                children: (0, l.jsx)(aF.Z, {
                                    height: "16px",
                                    width: "16px",
                                    fill: "var(--text-general)"
                                })
                            }), (0, l.jsx)(et.Z, {
                                weight: "bold",
                                className: "flyout__help-title",
                                children: u
                            }), (0, l.jsx)("div", {
                                className: "flyout__item-buttons",
                                children: (0, l.jsx)(eI.Z, {
                                    className: "flyout__button-add",
                                    has_effect: !0,
                                    id: `db-flyout-help__add--${n}`,
                                    onClick: () => window.Blockly.derivWorkspace.addBlockNode(s),
                                    primary: !0,
                                    text: (0, y.NC)("Add"),
                                    type: "button"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flyout__help-content",
                            children: h && h.map((e, t) => {
                                let {
                                    type: i,
                                    width: o,
                                    url: d,
                                    example_id: c
                                } = e, {
                                    text: _
                                } = r, u = a.find(e => e.id === c);
                                switch (i) {
                                    case aL.I.TEXT:
                                        if (m < _.length) return (0, l.jsx)(az, {
                                            text: _[m++]
                                        }, `${n}_${t}`);
                                        return null;
                                    case aL.I.VIDEO:
                                        return (0, l.jsx)(aB, {
                                            url: d
                                        }, `${n}_${t}`);
                                    case aL.I.IMAGE:
                                        return (0, l.jsx)(aZ, {
                                            width: o,
                                            url: d
                                        }, `${n}_${t}`);
                                    case aL.I.BLOCK:
                                        return (0, l.jsx)(aD, {
                                            block_node: s
                                        }, `${n}_${t}`);
                                    case aL.I.EXAMPLE:
                                        if (u) return (0, l.jsx)(aD, {
                                            block_node: u.childNodes[0]
                                        }, `${n}_${t}`);
                                        return null;
                                    default:
                                        return null
                                }
                            })
                        }), !x && !(_ && c) && (0, l.jsxs)("div", {
                            className: "flyout__help-footer",
                            children: [(0, l.jsx)(eI.Z, {
                                className: "flyout__button-previous",
                                secondary: !0,
                                onClick: () => d(!1),
                                text: (0, y.NC)("Previous"),
                                type: "button",
                                is_disabled: _,
                                renderText: e => _ && (0, l.jsx)(et.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    align: "center",
                                    color: "disabled",
                                    children: e
                                })
                            }), (0, l.jsx)(eI.Z, {
                                className: "flyout__button-next",
                                secondary: !0,
                                onClick: () => d(!0),
                                text: (0, y.NC)("Next"),
                                type: "button",
                                is_disabled: c,
                                renderText: e => c && (0, l.jsx)(et.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    align: "center",
                                    color: "disabled",
                                    children: e
                                })
                            })]
                        })]
                    })
                }),
                aX = e => {
                    let {
                        search_term: t,
                        total_result: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flyout__search-header",
                        children: [(0, l.jsx)(et.Z, {
                            weight: "bold",
                            className: "flyout__search-header-text",
                            children: (0, y.NC)('Results for "{{ search_term }}"', {
                                search_term: t,
                                interpolation: {
                                    escapeValue: !1
                                }
                            })
                        }), (0, l.jsx)(et.Z, {
                            weight: "bold",
                            color: "profit-success",
                            className: "flyout__search-header-text",
                            children: `${s} ${s>1?(0,y.NC)("results"):(0,y.NC)("result")}`
                        })]
                    })
                },
                aH = e => {
                    let t = i.useRef(),
                        {
                            flyout_content: s,
                            active_helper: n,
                            setHelpContent: a,
                            initFlyoutHelp: r,
                            is_empty: o,
                            is_search_flyout: d,
                            selected_category: c,
                            first_get_variable_block_index: _
                        } = e;
                    return (0, l.jsx)("div", {
                        ref: t,
                        className: D()("flyout__content", {
                            "flyout__normal-content": !d
                        }),
                        children: (0, l.jsxs)(ei.Z, {
                            className: "flyout__content-scrollbar",
                            children: [(null == c ? void 0 : c.getAttribute("id")) === "indicators" && (0, l.jsxs)("div", {
                                className: "flyout__content-disclaimer",
                                children: [(0, l.jsx)("span", {
                                    className: "flyout__content-disclaimer-icon",
                                    children: (0, l.jsx)(aM.Z, {
                                        className: "flyout__content-disclaimer__warning-icon",
                                        height: "24px",
                                        width: "24px",
                                        fill: "var(--text-general)"
                                    })
                                }), (0, l.jsx)("span", {
                                    className: "flyout__content-disclaimer-text",
                                    children: (0, y.NC)("Indicators on the chart tab are for indicative purposes only and may vary slightly from the ones on the {{platform_name_dbot}} workspace.", {
                                        platform_name_dbot: (0, x.$Xq)("dbot").name
                                    })
                                })]
                            }), o ? (0, l.jsx)("div", {
                                className: "flyout__search-empty",
                                children: (0, l.jsx)(et.Z, {
                                    as: "h2",
                                    weight: "bold",
                                    lineHeight: "xs",
                                    children: (0, y.NC)("No results found")
                                })
                            }) : s.map((e, t) => {
                                switch (e.tagName.toUpperCase()) {
                                    case window.Blockly.Xml.NODE_BLOCK:
                                        {
                                            var s, i, o, c;
                                            let u = e.getAttribute("type") || "";
                                            return (0, l.jsx)(aU, {
                                                id: `flyout__item-workspace--${t}`,
                                                block_node: e,
                                                should_hide_display_name: "variables_get" === u && t !== _,
                                                onInfoClick: (0, aL.S)(window.__webpack_public_path__)[u] && (d ? () => a(e) : () => r(e, u)),
                                                is_active: n === u
                                            }, `${e.getAttribute("type")}${null===(c=window)||void 0===c?void 0:null===(o=c.Blockly)||void 0===o?void 0:null===(i=o.utils)||void 0===i?void 0:null===(s=i.idGenerator)||void 0===s?void 0:s.genUid()}`)
                                        }
                                    case window.Blockly.Xml.NODE_LABEL:
                                        return (0, l.jsx)("div", {
                                            className: "flyout__item-label-bold",
                                            children: e.getAttribute("text")
                                        }, `${e.getAttribute("text")}${t}`);
                                    case window.Blockly.Xml.NODE_INPUT:
                                        return (0, l.jsx)(eV, {
                                            className: `${e.getAttribute("className")}`,
                                            type: `${e.getAttribute("type")}`,
                                            name: `${e.getAttribute("name")}`,
                                            placeholder: `${e.getAttribute("placeholder")}`,
                                            autoComplete: "off"
                                        }, `${e.getAttribute("name")}${t}`);
                                    case window.Blockly.Xml.NODE_BUTTON:
                                        {
                                            let s = e.getAttribute("callbackKey"),
                                                n = e.getAttribute("id");
                                            return (0, l.jsx)("button", {
                                                id: n,
                                                className: D()("dc-btn", "dc-btn-effect", "dc-btn--primary", `${e.getAttribute("className")}`),
                                                onClick: e => {
                                                    let t = window.Blockly.derivWorkspace,
                                                        n = t.getButtonCallback(s);
                                                    e.targetWorkspace_ = t, e.getTargetWorkspace = () => e.targetWorkspace_, null == n || n(e)
                                                },
                                                children: e.getAttribute("text")
                                            }, `${s}${t}`)
                                        }
                                    default:
                                        return null
                                }
                            })]
                        })
                    })
                },
                a$ = (0, r.Pi)(() => {
                    let {
                        flyout: e,
                        flyout_help: t
                    } = (0, p.oR)(), {
                        active_helper: s,
                        initFlyoutHelp: n,
                        setHelpContent: a
                    } = t, {
                        flyout_content: r,
                        flyout_width: o,
                        is_help_content: d,
                        is_search_flyout: c,
                        is_visible: _,
                        onMount: u,
                        onUnmount: x,
                        search_term: h,
                        selected_category: m,
                        first_get_variable_block_index: j
                    } = e;
                    if (i.useEffect(() => (u(), () => x()), [u, x]), _ && c) {
                        var v;
                        null === aR.default || void 0 === aR.default || null === (v = aR.default.pushDataLayer) || void 0 === v || v.call(aR.default, {
                            event: "dbot_search_results",
                            value: !0
                        })
                    }
                    let b = Object.keys(r).length;
                    return _ && (0, l.jsxs)("div", {
                        id: "gtm-search-results",
                        className: D()("flyout", {
                            flyout__search: c,
                            flyout__help: d,
                            flyout__normal: !d && !c
                        }),
                        style: {
                            width: `${o}px`
                        },
                        children: [c && !d && (0, l.jsx)(aX, {
                            search_term: h,
                            total_result: b
                        }), d ? (0, l.jsx)(aP, {}) : (0, l.jsx)(aH, {
                            is_empty: 0 === b,
                            flyout_content: r,
                            active_helper: s,
                            setHelpContent: a,
                            initFlyoutHelp: n,
                            is_search_flyout: c,
                            selected_category: m,
                            first_get_variable_block_index: j
                        })]
                    })
                }),
                aV = e => {
                    let {
                        is_running: t,
                        is_multiplier: s,
                        is_contract_dialog_open: n,
                        is_stop_bot_dialog_open: a,
                        closeMultiplierContract: r,
                        onOkButtonClick: o,
                        toggleStopBotDialog: d
                    } = e, c = t && s ? (0, y.NC)("Keep my contract") : (0, y.NC)("Stop my bot"), _ = t && s ? (0, y.NC)("Close my contract") : (0, y.NC)("Back"), u = t && s ? (0, y.NC)("Keep your current contract?") : (0, y.NC)("Stop your current bot?"), h = t && s ? r : d;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsx)(sz.Z, {
                            portal_element_id: "modal_root",
                            title: u,
                            is_visible: t ? a : n,
                            confirm_button_text: c,
                            onConfirm: o,
                            cancel_button_text: _,
                            onCancel: h,
                            is_mobile_full_width: !1,
                            className: "toolbar__dialog",
                            has_close_icon: !0,
                            children: t && s ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(et.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    styles: {
                                        paddingBottom: "2rem",
                                        paddingTop: "1rem"
                                    },
                                    children: [(0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Close your contract now or keep it running. If you decide to keep it running, you can check and close it later on the "
                                    }), (0, l.jsx)(et.Z, {
                                        weight: "bold",
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        children: (0, l.jsx)(sY.Z, {
                                            className: "link",
                                            onClick: () => window.location.assign(x.xOw.reports),
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Reports"
                                            })
                                        }, 0)
                                    }), (0, l.jsx)(y.Xx, {
                                        i18n_default_text: " page."
                                    })]
                                }), (0, l.jsx)(et.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "The Quick Strategy you just created will be loaded to the workspace."
                                    })
                                })]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(et.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    styles: {
                                        paddingBottom: "2rem",
                                        paddingTop: "1rem"
                                    },
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Stopping the current bot will load the Quick Strategy you just created to the workspace."
                                    })
                                }), (0, l.jsxs)(et.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: [(0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Any open contracts can be viewed on the "
                                    }), (0, l.jsx)(et.Z, {
                                        weight: "bold",
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        children: (0, l.jsx)(sY.Z, {
                                            className: "link",
                                            onClick: () => window.location.assign(x.xOw.reports),
                                            children: (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Reports"
                                            })
                                        }, 0)
                                    }), (0, l.jsx)(et.Z, {
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        styles: {
                                            paddingInlineStart: "0.4rem"
                                        },
                                        children: (0, l.jsx)(y.Xx, {
                                            i18n_default_text: " page."
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                aG = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        quick_strategy: t,
                        summary_card: s
                    } = (0, p.oR)(), {
                        is_contract_dialog_open: n,
                        is_stop_bot_dialog_open: a,
                        toggleStopBotDialog: i
                    } = t, {
                        is_running: r,
                        closeMultiplierContract: o,
                        stopMyBot: d,
                        is_dialog_open: c
                    } = e, {
                        is_multiplier: _
                    } = s;
                    return (0, l.jsx)(aV, {
                        is_running: r,
                        onOkButtonClick: d,
                        is_contract_dialog_open: n,
                        is_stop_bot_dialog_open: a,
                        is_multiplier: _,
                        closeMultiplierContract: o,
                        is_dialog_open: c,
                        toggleStopBotDialog: i
                    })
                }),
                aq = e => {
                    let {
                        popover_message: t,
                        button_id: s,
                        button_classname: n,
                        buttonOnClick: a,
                        icon: i,
                        button_text: r
                    } = e;
                    return (0, l.jsx)(X.Z, {
                        alignment: "bottom",
                        message: t,
                        should_disable_pointer_events: !0,
                        children: (0, l.jsx)(eI.Z, {
                            id: s,
                            className: n,
                            has_effect: !0,
                            onClick: a,
                            icon: i,
                            green: !0,
                            children: r
                        })
                    })
                };
            var aY = s("52068"),
                aW = s("62705"),
                aK = s("48073"),
                aJ = s("81712"),
                aQ = s("66090"),
                a0 = s("87348"),
                a1 = s("79800"),
                a2 = s("70342"),
                a5 = s("80246"),
                a3 = s("83069");
            let a8 = e => {
                    let {
                        popover_message: t,
                        icon: s
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(eG.Z, {
                            children: s
                        }), (0, l.jsx)(te.Z, {
                            children: (0, l.jsx)(X.Z, {
                                alignment: "bottom",
                                message: t,
                                zIndex: String(t6.TOOLBAR),
                                should_disable_pointer_events: !0,
                                children: s
                            })
                        })]
                    })
                },
                a4 = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        toolbar: t,
                        load_modal: s,
                        save_modal: n
                    } = (0, p.oR)(), {
                        setPreviewOnPopup: a,
                        setChartModalVisibility: i,
                        setTradingViewModalVisibility: r
                    } = e, {
                        has_redo_stack: o,
                        has_undo_stack: d,
                        onResetClick: c,
                        onSortClick: _,
                        onUndoClick: u,
                        onZoomInOutClick: x
                    } = t, {
                        toggleSaveModal: h
                    } = n, {
                        toggleLoadModal: m
                    } = s, {
                        isDesktop: j
                    } = (0, f.F)();
                    return (0, l.jsx)("div", {
                        className: "toolbar__wrapper",
                        children: (0, l.jsxs)("div", {
                            className: "toolbar__group toolbar__group-btn",
                            "data-testid": "dt_toolbar_group_btn",
                            children: [(0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Reset"),
                                icon: (0, l.jsx)("span", {
                                    id: "db-toolbar__reset-button",
                                    className: "toolbar__icon",
                                    onClick: c,
                                    "data-testid": "dt_toolbar_reset_button",
                                    children: (0, l.jsx)(aY.Z, {})
                                })
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Import"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__import-button",
                                    "data-testid": "dt_toolbar_import_button",
                                    onClick: () => {
                                        a(!0), m(), (0, tK.m5)({
                                            subpage_name: "bot_builder",
                                            subform_source: "bot_builder",
                                            subform_name: "load_strategy",
                                            load_strategy_tab: "recent"
                                        })
                                    },
                                    children: (0, l.jsx)(aW.Z, {})
                                })
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Save"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__save-button",
                                    "data-testid": "dt_toolbar_save_button",
                                    onClick: h,
                                    children: (0, l.jsx)(aK.Z, {})
                                })
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Sort blocks"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__sort-button",
                                    "data-testid": "dt_toolbar_sort_button",
                                    onClick: _,
                                    children: (0, l.jsx)(aJ.Z, {})
                                })
                            }), j && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "vertical-divider"
                                }), (0, l.jsx)(a8, {
                                    popover_message: (0, y.NC)("Charts"),
                                    icon: (0, l.jsx)("span", {
                                        className: "toolbar__icon",
                                        id: "db-toolbar__charts-button",
                                        onClick: () => i(),
                                        children: (0, l.jsx)(aQ.Z, {})
                                    })
                                }), (0, l.jsx)(a8, {
                                    popover_message: (0, y.NC)("TradingView Chart"),
                                    icon: (0, l.jsx)("span", {
                                        className: "toolbar__icon",
                                        id: "db-toolbar__tradingview-button",
                                        onClick: () => r(),
                                        children: (0, l.jsx)(a0.Z, {})
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "vertical-divider"
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Undo"),
                                icon: (0, l.jsx)("span", {
                                    className: D()("toolbar__icon undo", {
                                        "toolbar__icon--disabled": !d
                                    }),
                                    id: "db-toolbar__undo-button",
                                    "data-testid": "dt_toolbar_undo_button",
                                    onClick: () => u(!1),
                                    children: (0, l.jsx)(a1.Z, {})
                                })
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Redo"),
                                icon: (0, l.jsx)("span", {
                                    className: D()("toolbar__icon redo", {
                                        "toolbar__icon--disabled": !o
                                    }),
                                    id: "db-toolbar__redo-button",
                                    "data-testid": "dt_toolbar_redo_button",
                                    onClick: () => u(!0),
                                    children: (0, l.jsx)(a2.Z, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "vertical-divider"
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Zoom in"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__zoom-in-button",
                                    "data-testid": "dt_toolbar_zoom_in_button",
                                    onClick: () => x(!0),
                                    children: (0, l.jsx)(a5.Z, {})
                                })
                            }), (0, l.jsx)(a8, {
                                popover_message: (0, y.NC)("Zoom out"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__zoom-out",
                                    "data-testid": "dt_toolbar_zoom_out_button",
                                    onClick: () => x(!1),
                                    children: (0, l.jsx)(a3.Z, {})
                                })
                            })]
                        })
                    })
                }),
                a7 = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        toolbar: t,
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        isDesktop: n
                    } = (0, f.F)(), {
                        is_dialog_open: a,
                        closeResetDialog: r,
                        onResetOkButtonClick: o
                    } = t, {
                        is_running: d
                    } = e, {
                        setFormVisibility: c
                    } = s, _ = d ? (0, y.NC)("Yes") : (0, y.NC)("OK"), u = d ? (0, y.NC)("No") : (0, y.NC)("Cancel");
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "toolbar dashboard__toolbar",
                            "data-testid": "dt_dashboard_toolbar",
                            children: (0, l.jsxs)("div", {
                                className: "toolbar__section",
                                children: [!n && (0, l.jsx)(aq, {
                                    popover_message: (0, y.NC)("Click here to start building your Deriv Lite Bot."),
                                    button_id: "db-toolbar__get-started-button",
                                    button_classname: "toolbar__btn toolbar__btn--icon toolbar__btn--start",
                                    buttonOnClick: () => {
                                        c(!0), (0, tK.m5)({
                                            subpage_name: "bot_builder",
                                            subform_source: "bot_builder",
                                            subform_name: "quick_strategy"
                                        })
                                    },
                                    button_text: (0, y.NC)("Quick strategy")
                                }), n && (0, l.jsx)(a4, {})]
                            })
                        }), !n && (0, l.jsx)(a4, {}), (0, l.jsx)(sz.Z, {
                            portal_element_id: "modal_root",
                            title: (0, y.NC)("Are you sure?"),
                            is_visible: a,
                            confirm_button_text: _,
                            onConfirm: o,
                            cancel_button_text: u,
                            onCancel: r,
                            is_mobile_full_width: !1,
                            className: "toolbar__dialog",
                            has_close_icon: !0,
                            children: d ? (0, l.jsx)(y.Xx, {
                                i18n_default_text: "The workspace will be reset to the default strategy and any unsaved changes will be lost. <0>Note: This will not affect your running bot.</0>",
                                components: [(0, l.jsx)("div", {
                                    className: "toolbar__dialog-text--second",
                                    "data-testid": "dt_toolbar_dialog_text_second"
                                }, 0)]
                            }) : (0, l.jsx)(y.Xx, {
                                i18n_default_text: "Any unsaved changes will be lost."
                            })
                        })]
                    })
                });
            var a6 = s("88720"),
                a9 = s("16232"),
                le = s("40877");
            let lt = (0, r.Pi)(e => {
                    let {
                        search: t,
                        is_search_loading: s,
                        onClick: n
                    } = e;
                    return t ? s ? (0, l.jsx)("div", {
                        className: "loader",
                        "data-testid": "loader"
                    }) : (0, l.jsx)(le.Z, {
                        onClick: n,
                        height: "18px",
                        width: "18px",
                        fill: "var(--text-general)"
                    }) : (0, l.jsx)(a9.Z, {
                        height: "20px",
                        width: "20px",
                        fill: "var(--text-general)"
                    })
                }),
                ls = e => {
                    let {
                        is_search_loading: t,
                        onSearch: s,
                        onSearchBlur: n,
                        onSearchClear: a,
                        onSearchKeyUp: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "db-toolbox__search",
                        children: (0, l.jsx)(eO.J9, {
                            initialValues: {
                                search: ""
                            },
                            onSubmit: s,
                            children: e => {
                                let {
                                    submitForm: s,
                                    values: {
                                        search: r
                                    },
                                    setFieldValue: o
                                } = e;
                                return (0, l.jsx)(eO.l0, {
                                    children: (0, l.jsx)(eO.gN, {
                                        name: "search",
                                        children: e => {
                                            let {
                                                field: d
                                            } = e;
                                            return (0, l.jsx)(eV, { ...d,
                                                className: "db-toolbox__search-field",
                                                type: "text",
                                                name: "search",
                                                placeholder: (0, y.NC)("Search"),
                                                onKeyUp: () => i(s),
                                                onFocus: s,
                                                onBlur: n,
                                                leading_icon: (0, l.jsx)(lt, {
                                                    search: r,
                                                    is_search_loading: t,
                                                    onClick: () => a(o)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    })
                };
            var ln = s("97762");
            let la = e => {
                    let { ...t
                    } = e;
                    return i.createElement("arg", t)
                },
                ll = e => {
                    let { ...t
                    } = e;
                    return i.createElement("block", t)
                },
                li = e => {
                    let { ...t
                    } = e;
                    return i.createElement("category", t)
                },
                lr = e => {
                    let { ...t
                    } = e;
                    return i.createElement("example", t)
                },
                lo = e => {
                    let { ...t
                    } = e;
                    return i.createElement("examples", t)
                },
                ld = e => {
                    let { ...t
                    } = e;
                    return i.createElement("field", t)
                },
                lc = e => {
                    let { ...t
                    } = e;
                    return i.createElement("mutation", t)
                },
                l_ = e => {
                    let { ...t
                    } = e;
                    return i.createElement("next", t)
                },
                lu = e => {
                    let { ...t
                    } = e;
                    return i.createElement("shadow", t)
                },
                lx = e => {
                    let { ...t
                    } = e;
                    return i.createElement("statement", t)
                },
                lh = e => {
                    let { ...t
                    } = e;
                    return i.createElement("value", t)
                },
                lm = e => {
                    let { ...t
                    } = e;
                    return i.createElement("xml", t)
                },
                lp = () => ln.renderToStaticMarkup((0, l.jsxs)(lm, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    id: "toolbox",
                    children: [(0, l.jsxs)(li, {
                        id: "trade_parameters",
                        name: (0, y.NC)("Trade parameters"),
                        children: [(0, l.jsx)(ll, {
                            type: "trade_definition",
                            children: (0, l.jsx)(lx, {
                                name: "TRADE_OPTIONS",
                                children: (0, l.jsxs)(ll, {
                                    type: "trade_definition_market",
                                    deletable: "false",
                                    movable: "false",
                                    children: [(0, l.jsx)(ld, {
                                        name: "MARKET_LIST"
                                    }), (0, l.jsx)(ld, {
                                        name: "SUBMARKET_LIST"
                                    }), (0, l.jsx)(ld, {
                                        name: "SYMBOL_LIST"
                                    }), (0, l.jsx)(l_, {
                                        children: (0, l.jsxs)(ll, {
                                            type: "trade_definition_tradetype",
                                            deletable: "false",
                                            movable: "false",
                                            children: [(0, l.jsx)(ld, {
                                                name: "TRADETYPECAT_LIST"
                                            }), (0, l.jsx)(ld, {
                                                name: "TRADETYPE_LIST"
                                            }), (0, l.jsx)(l_, {
                                                children: (0, l.jsxs)(ll, {
                                                    type: "trade_definition_contracttype",
                                                    deletable: "false",
                                                    movable: "false",
                                                    children: [(0, l.jsx)(ld, {
                                                        name: "TYPE_LIST"
                                                    }), (0, l.jsx)(l_, {
                                                        children: (0, l.jsxs)(ll, {
                                                            type: "trade_definition_candleinterval",
                                                            deletable: "false",
                                                            movable: "false",
                                                            children: [(0, l.jsx)(ld, {
                                                                name: "CANDLEINTERVAL_LIST",
                                                                children: "60"
                                                            }), (0, l.jsx)(l_, {
                                                                children: (0, l.jsxs)(ll, {
                                                                    type: "trade_definition_restartbuysell",
                                                                    deletable: "false",
                                                                    movable: "false",
                                                                    children: [(0, l.jsx)(ld, {
                                                                        name: "TIME_MACHINE_ENABLED",
                                                                        children: "FALSE"
                                                                    }), (0, l.jsx)(l_, {
                                                                        children: (0, l.jsx)(ll, {
                                                                            type: "trade_definition_restartonerror",
                                                                            deletable: "false",
                                                                            movable: "false",
                                                                            children: (0, l.jsx)(ld, {
                                                                                name: "RESTARTONERROR",
                                                                                children: "TRUE"
                                                                            })
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, l.jsxs)(ll, {
                            type: "trade_definition_tradeoptions",
                            children: [(0, l.jsx)(lc, {
                                has_first_barrier: "false",
                                has_second_barrier: "false",
                                has_prediction: "false"
                            }), (0, l.jsx)(ld, {
                                name: "DURATIONTYPE_LIST"
                            }), (0, l.jsx)(ld, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(lh, {
                                name: "DURATION",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(ld, {
                                name: "AMOUNT_LIMITS"
                            })]
                        }), (0, l.jsxs)(ll, {
                            type: "trade_definition_multiplier",
                            children: [(0, l.jsx)(ld, {
                                name: "MULTIPLIERTYPE_LIST"
                            }), (0, l.jsx)(ld, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(ld, {
                                name: "AMOUNT_LIMITS"
                            })]
                        }), (0, l.jsx)(ll, {
                            type: "multiplier_take_profit",
                            children: (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        }), (0, l.jsx)(ll, {
                            type: "multiplier_stop_loss",
                            children: (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        }), (0, l.jsxs)(ll, {
                            type: "trade_definition_accumulator",
                            children: [(0, l.jsx)(ld, {
                                name: "GROWTHRATE_LIST"
                            }), (0, l.jsx)(ld, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            })]
                        }), (0, l.jsx)(ll, {
                            type: "accumulator_take_profit",
                            children: (0, l.jsx)(lh, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lu, {
                                    type: "math_number",
                                    children: (0, l.jsx)(ld, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        })]
                    }), (0, l.jsxs)(li, {
                        id: "purchase_conditions",
                        name: (0, y.NC)("Purchase conditions"),
                        children: [(0, l.jsx)(ll, {
                            type: "before_purchase"
                        }), (0, l.jsx)(ll, {
                            type: "purchase"
                        })]
                    }), (0, l.jsxs)(li, {
                        id: "sell_conditions",
                        name: (0, y.NC)("Sell conditions (optional)"),
                        children: [(0, l.jsx)(ll, {
                            type: "during_purchase"
                        }), (0, l.jsx)(ll, {
                            type: "sell_at_market"
                        })]
                    }), (0, l.jsxs)(li, {
                        id: "trade_results",
                        name: (0, y.NC)("Restart trading conditions"),
                        children: [(0, l.jsx)(ll, {
                            type: "after_purchase"
                        }), (0, l.jsx)(ll, {
                            type: "trade_again"
                        })]
                    }), (0, l.jsxs)(li, {
                        id: "analysis",
                        name: (0, y.NC)("Analysis"),
                        children: [(0, l.jsxs)(li, {
                            id: "indicators",
                            name: (0, y.NC)("Indicators"),
                            children: [(0, l.jsx)(ll, {
                                type: "sma_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "smaa_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsxs)(ll, {
                                type: "bb_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "BBRESULT_LIST",
                                    children: "0"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsxs)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "std_dev_multiplier_up",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "UPMULTIPLIER",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "NUM",
                                                                    children: "5"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(l_, {
                                                            children: (0, l.jsx)(ll, {
                                                                type: "std_dev_multiplier_down",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "DOWNMULTIPLIER",
                                                                    children: (0, l.jsx)(lu, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(ld, {
                                                                            name: "NUM",
                                                                            children: "5"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "bba_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "BBRESULT_LIST",
                                    children: "0"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsxs)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "std_dev_multiplier_up",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "UPMULTIPLIER",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "NUM",
                                                                    children: "5"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(l_, {
                                                            children: (0, l.jsx)(ll, {
                                                                type: "std_dev_multiplier_down",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "DOWNMULTIPLIER",
                                                                    children: (0, l.jsx)(lu, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(ld, {
                                                                            name: "NUM",
                                                                            children: "5"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "ema_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "emaa_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "rsi_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsx)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "rsia_statement",
                                children: (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsxs)(ll, {
                                type: "macda_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "MACDFIELDS_LIST",
                                    children: "1"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsxs)(ll, {
                                                type: "fast_ema_period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "FAST_EMA_PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "12"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "slow_ema_period",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "SLOW_EMA_PERIOD",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "NUM",
                                                                    children: "26"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(l_, {
                                                            children: (0, l.jsx)(ll, {
                                                                type: "signal_ema_period",
                                                                deletable: "false",
                                                                movable: "false",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "SIGNAL_EMA_PERIOD",
                                                                    children: (0, l.jsx)(lu, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(ld, {
                                                                            name: "NUM",
                                                                            children: "9"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Tick and candle analysis"),
                            id: "tick_analysis",
                            children: [(0, l.jsx)(ll, {
                                type: "tick_analysis"
                            }), (0, l.jsx)(ll, {
                                type: "tick"
                            }), (0, l.jsx)(ll, {
                                type: "last_digit"
                            }), (0, l.jsx)(ll, {
                                type: "stat"
                            }), (0, l.jsx)(ll, {
                                type: "stat_list"
                            }), (0, l.jsx)(ll, {
                                type: "ticks"
                            }), (0, l.jsx)(ll, {
                                type: "lastDigitList"
                            }), (0, l.jsx)(ll, {
                                type: "check_direction"
                            }), (0, l.jsx)(ll, {
                                type: "is_candle_black"
                            }), (0, l.jsxs)(ll, {
                                type: "read_ohlc",
                                children: [(0, l.jsx)(ld, {
                                    name: "OHLCFIELD_LIST",
                                    children: "open"
                                }), (0, l.jsx)(ld, {
                                    name: "CANDLEINTERVAL_LIST",
                                    children: "default"
                                }), (0, l.jsx)(lh, {
                                    name: "CANDLEINDEX",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "read_ohlc_obj"
                            }), (0, l.jsx)(ll, {
                                type: "ohlc_values"
                            }), (0, l.jsx)(ll, {
                                type: "ohlc_values_in_list"
                            }), (0, l.jsxs)(ll, {
                                type: "get_ohlc",
                                children: [(0, l.jsx)(ld, {
                                    name: "CANDLEINTERVAL_LIST",
                                    children: "default"
                                }), (0, l.jsx)(lh, {
                                    name: "CANDLEINDEX",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "ohlc"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Contract"),
                            id: "contract_details",
                            children: [(0, l.jsx)(ll, {
                                type: "contract_check_result"
                            }), (0, l.jsx)(ll, {
                                type: "read_details"
                            }), (0, l.jsx)(ll, {
                                type: "sell_price"
                            }), (0, l.jsx)(ll, {
                                type: "check_sell"
                            }), (0, l.jsx)(ll, {
                                type: "payout"
                            }), (0, l.jsx)(ll, {
                                type: "ask_price"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Stats"),
                            id: "stats",
                            children: [(0, l.jsx)(ll, {
                                type: "balance"
                            }), (0, l.jsx)(ll, {
                                type: "total_profit"
                            }), (0, l.jsx)(ll, {
                                type: "total_runs"
                            })]
                        })]
                    }), (0, l.jsxs)(li, {
                        id: "utility",
                        name: (0, y.NC)("Utility"),
                        children: [(0, l.jsx)(li, {
                            name: (0, y.NC)("Custom functions"),
                            id: "custom_functions",
                            dynamic: "PROCEDURE"
                        }), (0, l.jsx)(li, {
                            name: (0, y.NC)("Variables"),
                            id: "variables",
                            dynamic: "VARIABLE"
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Notifications"),
                            id: "notifications",
                            children: [(0, l.jsx)(ll, {
                                type: "text_print",
                                children: (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            }), (0, l.jsxs)(ll, {
                                type: "text_prompt_ext",
                                children: [(0, l.jsx)(ld, {
                                    name: "TYPE",
                                    children: "TEXT"
                                }), (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "notify",
                                children: [(0, l.jsx)(ld, {
                                    name: "NOTIFICATION_TYPE",
                                    children: "success"
                                }), (0, l.jsx)(lh, {
                                    name: "MESSAGE",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "notify_telegram",
                                children: [(0, l.jsx)(lh, {
                                    name: "TELEGRAM_ACCESS_TOKEN",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "TELEGRAM_CHAT_ID",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "TELEGRAM_MESSAGE",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Time"),
                            id: "time",
                            children: [(0, l.jsx)(ll, {
                                type: "epoch"
                            }), (0, l.jsx)(ll, {
                                type: "timeout"
                            }), (0, l.jsx)(ll, {
                                type: "tick_delay"
                            }), (0, l.jsx)(ll, {
                                type: "totimestamp",
                                children: (0, l.jsx)(lh, {
                                    name: "DATETIME",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "yyyy-mm-dd hh:mm:ss"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "todatetime",
                                children: (0, l.jsx)(lh, {
                                    name: "TIMESTAMP",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                })
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Math"),
                            id: "math",
                            children: [(0, l.jsx)(ll, {
                                type: "math_number"
                            }), (0, l.jsxs)(ll, {
                                type: "math_arithmetic",
                                children: [(0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "ADD"
                                }), (0, l.jsx)(lh, {
                                    name: "A",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "B",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_single",
                                children: [(0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "ROOT"
                                }), (0, l.jsx)(lh, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "9"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_trig",
                                children: [(0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "SIN"
                                }), (0, l.jsx)(lh, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "45"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "math_constant"
                            }), (0, l.jsxs)(ll, {
                                type: "math_number_property",
                                children: [(0, l.jsx)(lc, {
                                    divisor_input: "false"
                                }), (0, l.jsx)(ld, {
                                    name: "PROPERTY",
                                    children: "EVEN"
                                }), (0, l.jsx)(lh, {
                                    name: "NUMBER_TO_CHECK",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_change",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "item"
                                }), (0, l.jsx)(lh, {
                                    name: "DELTA",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "math_on_list"
                            }), (0, l.jsxs)(ll, {
                                type: "math_round",
                                children: [(0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "ROUND"
                                }), (0, l.jsx)(lh, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "3.1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_modulo",
                                children: [(0, l.jsx)(lh, {
                                    name: "DIVIDEND",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "64"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "DIVISOR",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_constrain",
                                children: [(0, l.jsx)(lh, {
                                    name: "Value",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "50"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "LOW",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "HIGH",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "100"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "math_random_int",
                                children: [(0, l.jsx)(lh, {
                                    name: "FROM",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "TO",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "100"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "math_random_float"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Text"),
                            id: "text",
                            children: [(0, l.jsx)(ll, {
                                type: "text",
                                children: (0, l.jsx)(ld, {
                                    name: "TEXT",
                                    children: "abc"
                                })
                            }), (0, l.jsxs)(ll, {
                                type: "text_join",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "text"
                                }), (0, l.jsx)(lx, {
                                    name: "STACK",
                                    children: (0, l.jsx)(ll, {
                                        type: "text_statement",
                                        movable: "false",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: (0, l.jsx)(lu, {
                                                type: "text",
                                                children: (0, l.jsx)(ld, {
                                                    name: "TEXT",
                                                    children: "abc"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "text_append",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "text"
                                }), (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "text_length",
                                children: (0, l.jsx)(lh, {
                                    name: "Value",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "text_isEmpty",
                                children: (0, l.jsx)(lh, {
                                    name: "Value",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT"
                                        })
                                    })
                                })
                            }), (0, l.jsxs)(ll, {
                                type: "text_indexOf",
                                children: [(0, l.jsx)(ld, {
                                    name: "END",
                                    children: "FIRST"
                                }), (0, l.jsx)(lh, {
                                    name: "Value",
                                    children: (0, l.jsx)(ll, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "text"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "FIND",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "text_charAt",
                                children: [(0, l.jsx)(lc, {
                                    at: "true"
                                }), (0, l.jsx)(ld, {
                                    name: "WHERE",
                                    children: "FROM_START"
                                }), (0, l.jsx)(lh, {
                                    name: "Value",
                                    children: (0, l.jsx)(ll, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "item"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "AT",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "text_getSubstring",
                                children: [(0, l.jsx)(lc, {
                                    at1: "true",
                                    at2: "true"
                                }), (0, l.jsx)(ld, {
                                    name: "WHERE1",
                                    children: "FROM_START"
                                }), (0, l.jsx)(ld, {
                                    name: "WHERE2",
                                    children: "FROM_START"
                                }), (0, l.jsx)(lh, {
                                    name: "STRING",
                                    children: (0, l.jsx)(ll, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "text"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "AT1",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "AT2",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "2"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "text_changeCase",
                                children: [(0, l.jsx)(ld, {
                                    name: "CASE",
                                    children: "UPPERCASE"
                                }), (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(ll, {
                                type: "text_trim",
                                children: [(0, l.jsx)(ld, {
                                    name: "MODE",
                                    children: "BOTH"
                                }), (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Logic"),
                            id: "logic",
                            children: [(0, l.jsx)(ll, {
                                type: "controls_if"
                            }), (0, l.jsx)(ll, {
                                type: "logic_compare"
                            }), (0, l.jsx)(ll, {
                                type: "logic_operation"
                            }), (0, l.jsx)(ll, {
                                type: "logic_negate"
                            }), (0, l.jsx)(ll, {
                                type: "logic_boolean"
                            }), (0, l.jsx)(ll, {
                                type: "logic_null"
                            }), (0, l.jsx)(ll, {
                                type: "logic_ternary"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Lists"),
                            id: "lists",
                            children: [(0, l.jsxs)(ll, {
                                type: "lists_create_with",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "list"
                                }), (0, l.jsx)(lx, {
                                    name: "STACK",
                                    children: (0, l.jsx)(ll, {
                                        type: "lists_statement",
                                        movable: "false",
                                        children: (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "lists_statement",
                                                movable: "false"
                                            })
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "lists_repeat",
                                children: (0, l.jsx)(lh, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(ll, {
                                type: "lists_length"
                            }), (0, l.jsx)(ll, {
                                type: "lists_isEmpty"
                            }), (0, l.jsx)(ll, {
                                type: "lists_indexOf"
                            }), (0, l.jsx)(ll, {
                                type: "lists_getIndex"
                            }), (0, l.jsx)(ll, {
                                type: "lists_setIndex"
                            }), (0, l.jsx)(ll, {
                                type: "lists_getSublist"
                            }), (0, l.jsxs)(ll, {
                                type: "lists_split",
                                children: [(0, l.jsx)(lc, {
                                    mode: "SPLIT"
                                }), (0, l.jsx)(ld, {
                                    name: "MODE",
                                    children: "SPLIT"
                                }), (0, l.jsx)(lh, {
                                    name: "DELIM",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: ","
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(ll, {
                                type: "lists_sort"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Loops"),
                            id: "loops",
                            children: [(0, l.jsx)(ll, {
                                type: "controls_repeat"
                            }), (0, l.jsx)(ll, {
                                type: "controls_repeat_ext"
                            }), (0, l.jsx)(ll, {
                                type: "controls_whileUntil"
                            }), (0, l.jsx)(ll, {
                                type: "controls_for"
                            }), (0, l.jsx)(ll, {
                                type: "controls_forEach"
                            }), (0, l.jsx)(ll, {
                                type: "controls_flow_statements"
                            })]
                        }), (0, l.jsxs)(li, {
                            name: (0, y.NC)("Miscellaneous"),
                            id: "misc",
                            children: [(0, l.jsx)(ll, {
                                type: "loader"
                            }), (0, l.jsx)(ll, {
                                type: "block_holder"
                            }), (0, l.jsx)(ll, {
                                type: "console",
                                children: (0, l.jsx)(lh, {
                                    name: "MESSAGE",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(lo, {
                        id: "examples",
                        children: [(0, l.jsx)(lr, {
                            id: "sell_available",
                            children: (0, l.jsx)(ll, {
                                type: "during_purchase",
                                children: (0, l.jsx)(lx, {
                                    name: "DURING_PURCHASE_STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(lh, {
                                            name: "IF0",
                                            children: (0, l.jsx)(ll, {
                                                type: "check_sell"
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO0",
                                            children: (0, l.jsx)(ll, {
                                                type: "sell_at_market"
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "trade_again",
                            children: (0, l.jsx)(ll, {
                                type: "after_purchase",
                                children: (0, l.jsx)(lx, {
                                    name: "AFTERPURCHASE_STACK",
                                    children: (0, l.jsx)(ll, {
                                        type: "controls_if",
                                        children: (0, l.jsx)(lh, {
                                            name: "IF0",
                                            children: (0, l.jsxs)(ll, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(lh, {
                                                    name: "A",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "total_profit"
                                                    })
                                                }), (0, l.jsx)(lh, {
                                                    name: "B",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "target_profit"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "sma_block_example",
                            children: (0, l.jsxs)(ll, {
                                type: "sma_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "sma"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST",
                                            children: (0, l.jsxs)(ll, {
                                                type: "ohlc_values",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "open"
                                                }), (0, l.jsx)(ld, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                })]
                                            })
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "sma_array",
                            children: (0, l.jsxs)(ll, {
                                type: "smaa_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "smaa"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsx)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "sma_block_example_1",
                            children: (0, l.jsxs)(ll, {
                                type: "sma_statement",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "sma"
                                }), (0, l.jsx)(lx, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(ll, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(lh, {
                                            name: "INPUT_LIST",
                                            children: (0, l.jsx)(ll, {
                                                type: "ticks"
                                            })
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsx)(ll, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "in_candle_list_read",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "op"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "read_ohlc",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(ld, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        }), (0, l.jsx)(lh, {
                                            name: "CANDLEINDEX",
                                            children: (0, l.jsx)(lu, {
                                                type: "math_number",
                                                children: (0, l.jsx)(ld, {
                                                    name: "NUM",
                                                    children: "1"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "read_candle_value",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "op"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "read_ohlc_obj",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(lh, {
                                            name: "OHLCOBJ",
                                            children: (0, l.jsxs)(ll, {
                                                type: "read_ohlc",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "open"
                                                }), (0, l.jsx)(ld, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                }), (0, l.jsx)(lh, {
                                                    name: "CANDLEINDEX",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "1"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "candle_list",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle_list"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "ohlc_values",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(ld, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "candle_list_1",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "cl"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "ohlc_values_in_list",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(lh, {
                                            name: "OHLCLIST",
                                            children: (0, l.jsx)(ll, {
                                                type: "ohlc",
                                                children: (0, l.jsx)(ld, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "get_candle",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle_open_price"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "read_ohlc_obj",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "epoch"
                                        }), (0, l.jsx)(lh, {
                                            name: "OHLCOBJ",
                                            children: (0, l.jsxs)(ll, {
                                                type: "get_ohlc",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                }), (0, l.jsx)(lh, {
                                                    name: "CANDLEINDEX",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "2"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "check_result",
                            children: (0, l.jsx)(ll, {
                                type: "after_purchase",
                                children: (0, l.jsx)(lx, {
                                    name: "AFTERPURCHASE_STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(lh, {
                                            name: "IF0",
                                            children: (0, l.jsx)(ll, {
                                                type: "contract_check_result",
                                                children: (0, l.jsx)(ld, {
                                                    name: "CHECK_RESULT",
                                                    children: "win"
                                                })
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO0",
                                            children: (0, l.jsx)(ll, {
                                                type: "trade_again"
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "sell_pl",
                            children: (0, l.jsx)(ll, {
                                type: "during_purchase",
                                children: (0, l.jsx)(lx, {
                                    name: "DURING_PURCHASE_STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(lh, {
                                            name: "IF0",
                                            children: (0, l.jsx)(ll, {
                                                type: "check_sell"
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO0",
                                            children: (0, l.jsxs)(ll, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "IF0",
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "logic_compare",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "OP",
                                                            children: "EQ"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "A",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "sell_price"
                                                            })
                                                        }), (0, l.jsx)(lh, {
                                                            name: "B",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "stake"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, l.jsx)(lx, {
                                                    name: "DO0",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "sell_at_market"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "if-return",
                            children: (0, l.jsxs)(ll, {
                                type: "procedures_defreturn",
                                children: [(0, l.jsx)(lc, {
                                    children: (0, l.jsx)(la, {
                                        name: "x"
                                    })
                                }), (0, l.jsx)(ld, {
                                    name: "NAME",
                                    children: "do something"
                                }), (0, l.jsx)(lx, {
                                    name: "STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "procedures_ifreturn",
                                        children: [(0, l.jsx)(lc, {
                                            value: "1"
                                        }), (0, l.jsx)(lh, {
                                            name: "CONDITION",
                                            children: (0, l.jsxs)(ll, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(lh, {
                                                    name: "A",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lh, {
                                                    name: "B",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lh, {
                                            name: "VALUE",
                                            children: (0, l.jsx)(ll, {
                                                type: "text",
                                                children: (0, l.jsx)(ld, {
                                                    name: "TEXT",
                                                    children: "x must be positive or zero"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "RETURN",
                                    children: (0, l.jsxs)(ll, {
                                        type: "math_single",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OP",
                                            children: "ROOT"
                                        }), (0, l.jsxs)(lh, {
                                            name: "NUM",
                                            children: [(0, l.jsx)(lu, {
                                                type: "math_number",
                                                children: (0, l.jsx)(ld, {
                                                    name: "NUM",
                                                    children: "9"
                                                })
                                            }), (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "notify_telegram",
                            children: (0, l.jsxs)(ll, {
                                type: "notify_telegram",
                                children: [(0, l.jsxs)(lh, {
                                    name: "TELEGRAM_ACCESS_TOKEN",
                                    children: [(0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT"
                                        })
                                    }), (0, l.jsx)(ll, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "access_token"
                                        })
                                    })]
                                }), (0, l.jsxs)(lh, {
                                    name: "TELEGRAM_CHAT_ID",
                                    children: [(0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT"
                                        })
                                    }), (0, l.jsx)(ll, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "chat_id"
                                        })
                                    })]
                                }), (0, l.jsx)(lh, {
                                    name: "TELEGRAM_MESSAGE",
                                    children: (0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "Enjoy!"
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "epoch",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(ll, {
                                        type: "read_ohlc",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(ld, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        }), (0, l.jsx)(lh, {
                                            name: "CANDLEINDEX",
                                            children: (0, l.jsx)(lu, {
                                                type: "math_number",
                                                children: (0, l.jsx)(ld, {
                                                    name: "NUM",
                                                    children: "1"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "variables_set",
                                        children: [(0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "Open Time"
                                        }), (0, l.jsx)(lh, {
                                            name: "VALUE",
                                            children: (0, l.jsxs)(ll, {
                                                type: "read_ohlc_obj",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "epoch"
                                                }), (0, l.jsx)(lh, {
                                                    name: "OHLCOBJ",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "candle"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsxs)(ll, {
                                                type: "variables_set",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "Open Time"
                                                }), (0, l.jsx)(lh, {
                                                    name: "VALUE",
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "math_arithmetic",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "OP",
                                                            children: "MINUS"
                                                        }), (0, l.jsxs)(lh, {
                                                            name: "A",
                                                            children: [(0, l.jsx)(lu, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "NUM",
                                                                    children: "1"
                                                                })
                                                            }), (0, l.jsx)(ll, {
                                                                type: "epoch"
                                                            })]
                                                        }), (0, l.jsxs)(lh, {
                                                            name: "B",
                                                            children: [(0, l.jsx)(lu, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "NUM",
                                                                    children: "1"
                                                                })
                                                            }), (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "Open Time"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsx)(ll, {
                                                        type: "controls_if",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "IF0",
                                                            children: (0, l.jsxs)(ll, {
                                                                type: "logic_compare",
                                                                children: [(0, l.jsx)(ld, {
                                                                    name: "OP",
                                                                    children: "GTE"
                                                                }), (0, l.jsx)(lh, {
                                                                    name: "A",
                                                                    children: (0, l.jsx)(ll, {
                                                                        type: "variables_get",
                                                                        children: (0, l.jsx)(ld, {
                                                                            name: "VAR",
                                                                            variabletype: "",
                                                                            children: "Time Since Candle Opened"
                                                                        })
                                                                    })
                                                                }), (0, l.jsx)(lh, {
                                                                    name: "B",
                                                                    children: (0, l.jsx)(ll, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(ld, {
                                                                            name: "NUM",
                                                                            children: "30"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "totimestamp",
                            children: (0, l.jsx)(ll, {
                                type: "before_purchase",
                                children: (0, l.jsx)(lx, {
                                    name: "BEFOREPURCHASE_STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(lh, {
                                            name: "IF0",
                                            children: (0, l.jsxs)(ll, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(lh, {
                                                    name: "A",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "epoch"
                                                    })
                                                }), (0, l.jsx)(lh, {
                                                    name: "B",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "totimestamp",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "DATETIME",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "text",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "TEXT",
                                                                    children: "1957-08-31 00:00:00"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO0",
                                            children: (0, l.jsx)(ll, {
                                                type: "purchase",
                                                children: (0, l.jsx)(ld, {
                                                    name: "PURCHASE_LIST",
                                                    children: "CALL"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "todatetime",
                            children: (0, l.jsxs)(ll, {
                                type: "notify",
                                children: [(0, l.jsx)(ld, {
                                    name: "NOTIFICATION_TYPE",
                                    children: "success"
                                }), (0, l.jsx)(ld, {
                                    name: "NOTIFICATION_SOUND",
                                    children: "silent"
                                }), (0, l.jsxs)(lh, {
                                    name: "MESSAGE",
                                    children: [(0, l.jsx)(lu, {
                                        type: "text",
                                        children: (0, l.jsx)(ld, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    }), (0, l.jsx)(ll, {
                                        type: "todatetime",
                                        children: (0, l.jsxs)(lh, {
                                            name: "TIMESTAMP",
                                            children: [(0, l.jsx)(lu, {
                                                type: "math_number",
                                                children: (0, l.jsx)(ld, {
                                                    name: "NUM",
                                                    children: "0"
                                                })
                                            }), (0, l.jsx)(ll, {
                                                type: "epoch"
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "constrain",
                            children: (0, l.jsxs)(ll, {
                                type: "math_constrain",
                                children: [(0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "LOW",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "HIGH",
                                    children: (0, l.jsx)(lu, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "20"
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "controls_if",
                            children: (0, l.jsxs)(ll, {
                                type: "controls_if",
                                children: [(0, l.jsx)(lc, {
                                    elseif: "1",
                                    else: "1"
                                }), (0, l.jsx)(lh, {
                                    name: "IF0",
                                    children: (0, l.jsxs)(ll, {
                                        type: "logic_compare",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OP",
                                            children: "EQ"
                                        }), (0, l.jsx)(lh, {
                                            name: "A",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var1"
                                                })
                                            })
                                        }), (0, l.jsx)(lh, {
                                            name: "B",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var2"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "IF1",
                                    children: (0, l.jsxs)(ll, {
                                        type: "logic_compare",
                                        children: [(0, l.jsx)(ld, {
                                            name: "OP",
                                            children: "EQ"
                                        }), (0, l.jsx)(lh, {
                                            name: "A",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var3"
                                                })
                                            })
                                        }), (0, l.jsx)(lh, {
                                            name: "B",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var4"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "compare_logic",
                            children: (0, l.jsx)(ll, {
                                type: "logic_compare",
                                children: (0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "EQ"
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "compare_logic_1",
                            children: (0, l.jsx)(ll, {
                                type: "logic_operation",
                                children: (0, l.jsx)(ld, {
                                    name: "OP",
                                    children: "AND"
                                })
                            })
                        }), (0, l.jsx)(lr, {
                            id: "repeat_while",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_whileUntil",
                                        children: [(0, l.jsx)(ld, {
                                            name: "MODE",
                                            children: "WHILE"
                                        }), (0, l.jsx)(lh, {
                                            name: "BOOL",
                                            children: (0, l.jsxs)(ll, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OP",
                                                    children: "LTE"
                                                }), (0, l.jsx)(lh, {
                                                    name: "A",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lh, {
                                                    name: "B",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO",
                                            children: (0, l.jsxs)(ll, {
                                                type: "math_change",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                }), (0, l.jsx)(lh, {
                                                    name: "DELTA",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "1"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsxs)(lh, {
                                                            name: "MESSAGE",
                                                            children: [(0, l.jsx)(lu, {
                                                                type: "text",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            }), (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "repeat_until",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "20"
                                        })
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_whileUntil",
                                        children: [(0, l.jsx)(ld, {
                                            name: "MODE",
                                            children: "UNTIL"
                                        }), (0, l.jsx)(lh, {
                                            name: "BOOL",
                                            children: (0, l.jsxs)(ll, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(lh, {
                                                    name: "A",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lh, {
                                                    name: "B",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO",
                                            children: (0, l.jsxs)(ll, {
                                                type: "math_change",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                }), (0, l.jsx)(lh, {
                                                    name: "DELTA",
                                                    children: (0, l.jsx)(lu, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "NUM",
                                                            children: "-1"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsxs)(lh, {
                                                            name: "MESSAGE",
                                                            children: [(0, l.jsx)(lu, {
                                                                type: "text",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            }), (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "controls_for",
                            children: (0, l.jsxs)(ll, {
                                type: "controls_for",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "i"
                                }), (0, l.jsx)(lh, {
                                    name: "FROM",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "TO",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "BY",
                                    children: (0, l.jsx)(ll, {
                                        type: "math_number",
                                        children: (0, l.jsx)(ld, {
                                            name: "NUM",
                                            children: "2"
                                        })
                                    })
                                }), (0, l.jsx)(lx, {
                                    name: "DO",
                                    children: (0, l.jsxs)(ll, {
                                        type: "notify",
                                        children: [(0, l.jsx)(ld, {
                                            name: "NOTIFICATION_TYPE",
                                            children: "success"
                                        }), (0, l.jsx)(ld, {
                                            name: "NOTIFICATION_SOUND",
                                            children: "silent"
                                        }), (0, l.jsxs)(lh, {
                                            name: "MESSAGE",
                                            children: [(0, l.jsx)(lu, {
                                                type: "text",
                                                children: (0, l.jsx)(ld, {
                                                    name: "TEXT",
                                                    children: "abc"
                                                })
                                            }), (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "i"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "controls_forEach",
                            children: (0, l.jsxs)(ll, {
                                type: "lists_create_with",
                                children: [(0, l.jsx)(ld, {
                                    name: "VARIABLE",
                                    children: "list"
                                }), (0, l.jsx)(lx, {
                                    name: "STACK",
                                    children: (0, l.jsxs)(ll, {
                                        type: "lists_statement",
                                        children: [(0, l.jsx)(lh, {
                                            name: "VALUE",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "item1"
                                                })
                                            })
                                        }), (0, l.jsx)(l_, {
                                            children: (0, l.jsxs)(ll, {
                                                type: "lists_statement",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "VALUE",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "item2"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsx)(ll, {
                                                        type: "lists_statement",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VALUE",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "item3"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_forEach",
                                        children: [(0, l.jsx)(ld, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "i"
                                        }), (0, l.jsx)(lh, {
                                            name: "LIST",
                                            children: (0, l.jsx)(ll, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(ld, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "list"
                                                })
                                            })
                                        }), (0, l.jsx)(lx, {
                                            name: "DO",
                                            children: (0, l.jsxs)(ll, {
                                                type: "notify",
                                                children: [(0, l.jsx)(ld, {
                                                    name: "NOTIFICATION_TYPE",
                                                    children: "success"
                                                }), (0, l.jsx)(ld, {
                                                    name: "NOTIFICATION_SOUND",
                                                    children: "silent"
                                                }), (0, l.jsxs)(lh, {
                                                    name: "MESSAGE",
                                                    children: [(0, l.jsx)(lu, {
                                                        type: "text",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "TEXT",
                                                            children: "abc"
                                                        })
                                                    }), (0, l.jsx)(ll, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "i"
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "break_out",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(ll, {
                                        type: "logic_boolean",
                                        children: (0, l.jsx)(ld, {
                                            name: "BOOL",
                                            children: "TRUE"
                                        })
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_repeat",
                                        children: [(0, l.jsx)(ld, {
                                            name: "TIMES",
                                            children: "10"
                                        }), (0, l.jsx)(lx, {
                                            name: "DO",
                                            children: (0, l.jsxs)(ll, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "IF0",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "logic_negate",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "BOOL",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })
                                                        })
                                                    })
                                                }), (0, l.jsx)(lx, {
                                                    name: "DO0",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "controls_flow_statements",
                                                        children: (0, l.jsx)(ld, {
                                                            name: "FLOW",
                                                            children: "BREAK"
                                                        })
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "MESSAGE",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "text",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lr, {
                            id: "continue",
                            children: (0, l.jsxs)(ll, {
                                type: "variables_set",
                                children: [(0, l.jsx)(ld, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(lh, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(ll, {
                                        type: "logic_boolean",
                                        children: (0, l.jsx)(ld, {
                                            name: "BOOL",
                                            children: "FALSE"
                                        })
                                    })
                                }), (0, l.jsx)(l_, {
                                    children: (0, l.jsxs)(ll, {
                                        type: "controls_repeat",
                                        children: [(0, l.jsx)(ld, {
                                            name: "TIMES",
                                            children: "10"
                                        }), (0, l.jsx)(lx, {
                                            name: "DO",
                                            children: (0, l.jsxs)(ll, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "IF0",
                                                    children: (0, l.jsx)(ll, {
                                                        type: "logic_negate",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "BOOL",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })
                                                        })
                                                    })
                                                }), (0, l.jsx)(lx, {
                                                    name: "DO0",
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "variables_set",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "VALUE",
                                                            children: (0, l.jsx)(ll, {
                                                                type: "logic_boolean",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "BOOL",
                                                                    children: "TRUE"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(l_, {
                                                            children: (0, l.jsx)(ll, {
                                                                type: "controls_flow_statements",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "FLOW",
                                                                    children: "CONTINUE"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, l.jsx)(l_, {
                                                    children: (0, l.jsxs)(ll, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(ld, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "MESSAGE",
                                                            children: (0, l.jsx)(lu, {
                                                                type: "text",
                                                                children: (0, l.jsx)(ld, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })]
                })),
                lj = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, f.F)(), {
                        toolbox: t,
                        flyout: s,
                        quick_strategy: n
                    } = (0, p.oR)(), {
                        hasSubCategory: a,
                        is_search_loading: r,
                        onMount: o,
                        onSearch: d,
                        onSearchBlur: c,
                        onSearchClear: _,
                        onSearchKeyUp: u,
                        onToolboxItemClick: x,
                        onToolboxItemExpand: h,
                        onUnmount: m,
                        sub_category_index: j,
                        toolbox_dom: v
                    } = t, {
                        setFormVisibility: b
                    } = n, {
                        setVisibility: g,
                        selected_category: N
                    } = s, C = i.useRef(lp()), [w, k] = i.useState(!0);
                    return (i.useEffect(() => (o(C), () => m()), []), e) ? (0, l.jsxs)("div", {
                        className: "db-toolbox",
                        "data-testid": "dashboard__toolbox",
                        children: [(0, l.jsx)(aq, {
                            popover_message: (0, y.NC)("Click here to start building your Deriv Bot."),
                            button_id: "db-toolbar__get-started-button",
                            button_classname: "toolbar__btn toolbar__btn--icon toolbar__btn--start",
                            buttonOnClick: () => {
                                b(!0), (0, tK.m5)({
                                    subpage_name: "bot_builder",
                                    subform_source: "bot_builder",
                                    subform_name: "quick_strategy"
                                })
                            },
                            button_text: (0, y.NC)("Quick strategy")
                        }), (0, l.jsxs)("div", {
                            id: "gtm-toolbox",
                            className: "db-toolbox__content",
                            children: [(0, l.jsx)("div", {
                                className: "db-toolbox__header",
                                children: (0, l.jsxs)("div", {
                                    className: "db-toolbox__title",
                                    "data-testid": "db-toolbox__title",
                                    onClick: () => {
                                        k(!w), g(!1)
                                    },
                                    children: [(0, y.NC)("Blocks menu"), (0, l.jsx)("span", {
                                        className: D()("db-toolbox__title__chevron", {
                                            "db-toolbox__title__chevron--active": w
                                        }),
                                        children: (0, l.jsx)(a6.Z, {
                                            fill: "var(--text-general)"
                                        })
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: D()("db-toolbox__content-wrapper", {
                                    active: w
                                }),
                                "data-testid": "db-toolbox__content-wrapper",
                                children: [(0, l.jsx)(ls, {
                                    is_search_loading: r,
                                    onSearch: d,
                                    onSearchBlur: c,
                                    onSearchClear: _,
                                    onSearchKeyUp: u
                                }), (0, l.jsx)("div", {
                                    className: "db-toolbox__category-menu",
                                    children: v && Array.from(v.childNodes).map((e, t) => {
                                        if ("CATEGORY" === e.tagName.toUpperCase()) {
                                            let s = a(e.children),
                                                n = j.includes(t);
                                            return (0, l.jsxs)("div", {
                                                className: D()("db-toolbox__row", {
                                                    "db-toolbox__row--active": (null == N ? void 0 : N.getAttribute("id")) === (null == e ? void 0 : e.id)
                                                }),
                                                children: [(0, l.jsx)("div", {
                                                    className: "db-toolbox__item",
                                                    onClick: () => {
                                                        s ? h(t) : x(e)
                                                    },
                                                    children: (0, l.jsxs)("div", {
                                                        className: "db-toolbox__category-text",
                                                        children: [(0, l.jsx)("div", {
                                                            className: "db-toolbox__label",
                                                            children: (0, y.NC)(e.getAttribute("name"))
                                                        }), s && (0, l.jsx)("div", {
                                                            className: D()("db-toolbox__category-arrow", {
                                                                "db-toolbox__category-arrow--active": n
                                                            }),
                                                            children: (0, l.jsx)(a6.Z, {
                                                                fill: "var(--text-general)"
                                                            })
                                                        })]
                                                    })
                                                }), s && n && Array.from(e.childNodes).map(e => (0, l.jsx)("div", {
                                                    className: D()("db-toolbox__sub-category-row", {
                                                        "db-toolbox__sub-category-row--active": (null == N ? void 0 : N.getAttribute("id")) === (null == e ? void 0 : e.id)
                                                    }),
                                                    onClick: () => {
                                                        x(e)
                                                    },
                                                    children: (0, l.jsx)(et.Z, {
                                                        size: "xxs",
                                                        children: e.getAttribute("name")
                                                    })
                                                }, `db-toolbox__sub-category-row--${e.getAttribute("id")}`))]
                                            }, `db-toolbox__row--${e.getAttribute("id")}`)
                                        }
                                        return null
                                    })
                                })]
                            })]
                        })]
                    }) : null
                }),
                lv = (0, r.Pi)(() => {
                    var e;
                    let {
                        blockly_store: t
                    } = (0, p.oR)(), {
                        onMount: s,
                        onUnmount: n,
                        is_loading: a
                    } = t;
                    return (i.useEffect(() => (s(), () => {
                        n()
                    }), []), a) ? null : (null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace) ? (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(lj, {}), (0, l.jsx)(a7, {}), (0, l.jsx)(a$, {}), (0, l.jsx)(aG, {})]
                    }) : null
                }),
                lb = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        app: t,
                        run_panel: s,
                        toolbar: n,
                        quick_strategy: a,
                        blockly_store: r
                    } = (0, p.oR)(), {
                        active_tab: o,
                        active_tour: d,
                        is_preview_on_popup: c
                    } = e, {
                        is_open: _
                    } = a, {
                        is_running: u
                    } = s, {
                        is_loading: x
                    } = r, h = i.useRef(!1), m = i.useRef(!1), {
                        isDesktop: j
                    } = (0, f.F)(), {
                        onMount: v,
                        onUnmount: b
                    } = t, g = i.useRef(null), N = null;
                    i.useEffect(() => (v(), () => b()), [v, b]), i.useEffect(() => {
                        var e;
                        let t = null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace;
                        return t && u && !h.current ? (h.current = !0, t.addChangeListener(C)) : w(), () => {
                            t && h.current && w()
                        }
                    }, [u]);
                    let C = e => {
                            let {
                                is_reset_button_clicked: t
                            } = n;
                            "selected" === e.type || t ? t && w() : ((0, sP.J)((0, sX.xG)().workspace_change), w())
                        },
                        w = () => {
                            var e, t;
                            h.current = !1, null === (t = window.Blockly) || void 0 === t || null === (e = t.derivWorkspace) || void 0 === e || e.removeChangeListener(C)
                        };
                    i.useEffect(() => {
                        var e;
                        let t = null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace;
                        t && !m.current && (m.current = !0, t.addChangeListener(k))
                    }, [x]);
                    let k = e => {
                            let {
                                is_reset_button_clicked: t,
                                setResetButtonState: s
                            } = n;
                            "delete" === e.type && !t && (N = e.blockId), "selected" === e.type && N === e.oldElementId && T(), "change" === e.type && "AMOUNT_LIMITS" === e.name && "(min: 0.35 - max: 50000)" === e.newValue && t && s(!1)
                        },
                        T = () => {
                            (0, sP.J)((0, sX.xG)().block_delete, {
                                label: (0, y.NC)("Undo"),
                                onClick: e => {
                                    window.Blockly.derivWorkspace.undo(), null == e || e()
                                }
                            })
                        };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: D()("bot-builder", {
                                "bot-builder--active": 1 === o && !c,
                                "bot-builder--inactive": c,
                                "bot-builder--tour-active": d
                            }),
                            children: (0, l.jsx)("div", {
                                id: "scratch_div",
                                ref: g,
                                children: (0, l.jsx)(lv, {})
                            })
                        }), 1 === o && (0, l.jsx)(nM, {
                            is_mobile: !j
                        }), (0, l.jsx)(ns, {}), (0, l.jsx)(no, {}), _ && (0, l.jsx)(aA, {})]
                    })
                });
            var lg = s("97613"),
                ly = s("46883");
            let lf = () => (0, l.jsx)("iframe", {
                    id: "trading-view-iframe",
                    style: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white"
                    },
                    src: "https://charts.deriv.com/deriv?hide-signup=true"
                }),
                lN = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_trading_view_modal_visible: t,
                        setTradingViewModalVisibility: s
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: t && (0, l.jsx)(M, {
                            boundary: ".main",
                            header: (0, y.NC)("TradingView Chart"),
                            onClose: s,
                            modalWidth: 526,
                            modalHeight: 595,
                            minWidth: 526,
                            minHeight: 524,
                            enableResizing: !0,
                            children: (0, l.jsx)("div", {
                                style: {
                                    height: "calc(100% - 6rem)",
                                    padding: "0.5rem"
                                },
                                children: (0, l.jsx)(lf, {})
                            })
                        })
                    })
                });
            var lC = s("29357");
            let lw = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_chart_modal_visible: t,
                        setChartModalVisibility: s
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: t && (0, l.jsx)(M, {
                            boundary: ".main",
                            header: (0, y.NC)("Chart"),
                            onClose: s,
                            modalWidth: 526,
                            modalHeight: 595,
                            minWidth: 526,
                            minHeight: 524,
                            enableResizing: !0,
                            children: (0, l.jsx)("div", {
                                className: "chart-modal-dialog",
                                "data-testid": "chart-modal-dialog",
                                children: (0, l.jsx)(lC.default, {
                                    show_digits_stats: !1
                                })
                            })
                        })
                    })
                }),
                lk = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, f.F)();
                    return (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(w.a, {}),
                        children: e && (0, l.jsx)(lw, {})
                    })
                }),
                lT = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        active_tab: t,
                        active_tour: s,
                        setActiveTour: n,
                        setTourDialogVisibility: a
                    } = e, {
                        is_close_tour: r,
                        is_finished: o,
                        handleJoyrideCallback: d,
                        setIsCloseTour: c
                    } = nS();
                    return i.useEffect(() => {
                        (r || o) && (c(!1), n(""))
                    }, [r, o, n, c]), !(0, nd.$8)("onboard_tour_token") && 0 === t && a(!0), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(nE, {}), s && (0, l.jsx)(nu, {
                            handleCallback: d,
                            steps: nb,
                            spotlightClicks: !0
                        })]
                    })
                }),
                lE = {
                    content: [],
                    header: "",
                    img: "",
                    tour_step_key: 1
                },
                lS = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        onCloseTour: t,
                        onTourEnd: s,
                        setTourActiveStep: n,
                        active_tour: a,
                        active_tab: r,
                        setActiveTour: o
                    } = e, [d, c] = i.useState(1), [_, u] = i.useState(lE), {
                        content: x,
                        header: h,
                        img: m,
                        media: j,
                        tour_step_key: v
                    } = _, b = 1 === d ? (0, y.NC)("Start") : (0, y.NC)("Next"), g = 8 === d ? (0, y.NC)("Got it, thanks!") : b, f = "onboarding" === a;
                    return (i.useEffect(() => {
                        nf.forEach(e => {
                            e.tour_step_key === d && u(e), n(d)
                        })
                    }, [d]), i.useEffect(() => {
                        (0, nd.$8)("onboard_tour_token") || 0 !== r || o("onboarding")
                    }, [r, a]), a) ? (0, l.jsxs)("div", {
                        className: D()("dbot-slider", {
                            "dbot-slider--active": 1 === d,
                            "dbot-slider--tour-position": 1 !== d
                        }),
                        "data-testid": "onboarding-tour-mobile",
                        children: [1 !== v && (0, l.jsxs)("div", {
                            className: "dbot-slider__navbar",
                            children: [(0, l.jsx)(et.Z, {
                                color: "less-prominent",
                                weight: "less-prominent",
                                lineHeight: "s",
                                size: "xxs",
                                "data-testid": "dbot-onboard-slider__navbar",
                                children: `${v-1}/7`
                            }), (0, l.jsx)("span", {
                                onClick: t,
                                children: (0, l.jsx)(E.Z, {
                                    height: "20px",
                                    width: "20px",
                                    "data-testid": "exit-onboard-tour",
                                    className: "db-contract-card__result-icon",
                                    color: "secondary"
                                })
                            })]
                        }), h && (0, l.jsx)(et.Z, {
                            color: "prominent",
                            weight: "bold",
                            align: "center",
                            className: "dbot-slider__title",
                            as: "span",
                            lineHeight: "s",
                            size: "xs",
                            children: (0, y.NC)(h)
                        }), j && (0, l.jsx)("div", {
                            className: "dbot-slider__media",
                            children: (0, l.jsx)("video", {
                                autoPlay: !0,
                                loop: !0,
                                controls: !0,
                                preload: "auto",
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                controlsList: "nodownload",
                                src: j
                            })
                        }), m && (0, l.jsx)("div", {
                            className: "dbot-slider__image",
                            children: (0, l.jsx)("img", {
                                src: m
                            })
                        }), x && (0, l.jsx)(l.Fragment, {
                            children: x.map(e => (0, l.jsx)(et.Z, {
                                align: "center",
                                color: "prominent",
                                className: "dbot-slider__content",
                                as: "div",
                                lineHeight: "s",
                                size: "xxs",
                                children: e
                            }, e))
                        }), (0, l.jsxs)("div", {
                            className: "dbot-slider__status",
                            children: [(0, l.jsx)("div", {
                                className: "dbot-slider__progress-bar",
                                children: (0, l.jsx)(nA, {
                                    step: d,
                                    steps_list: nf.map(e => e.tour_step_key.toString()),
                                    onStepChange: c
                                })
                            }), (0, l.jsxs)("div", {
                                className: "dbot-slider__button-group",
                                children: [1 === d && (0, l.jsx)(nR, {
                                    onClick: () => {
                                        t()
                                    },
                                    label: (0, y.NC)("Skip"),
                                    "data-testid": "skip-onboard-tour"
                                }), ![1, 2, 8].includes(d) && (0, l.jsx)(nR, {
                                    onClick: () => {
                                        c(d - 1)
                                    },
                                    label: (0, y.NC)("Previous"),
                                    "data-testid": "prev-onboard-tour"
                                }), (0, l.jsx)(nR, {
                                    type: "danger",
                                    onClick: () => {
                                        c(d + 1), s(d, f)
                                    },
                                    label: g,
                                    "data-testid": 8 === v ? "finish-onboard-tour" : "next-onboard-tour"
                                })]
                            })]
                        })]
                    }) : null
                }),
                lI = (0, r.Pi)(e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsx)(lS, {}) : (0, l.jsx)(lT, {})
                    })
                });
            var lA = s("89250"),
                lR = s("58995"),
                lL = s("69498");
            let lM = e => {
                    let {
                        dashboard_click_name: t,
                        subpage_name: s
                    } = e;
                    s$.Analytics.trackEvent("ce_bot_form", {
                        action: sV.om.DASHBOARD_CLICK,
                        form_name: sV.oH,
                        subpage_name: s,
                        dashboard_click_name: t
                    })
                },
                lO = e => {
                    let {
                        announcement_name: t
                    } = e;
                    s$.Analytics.trackEvent("ce_bot_form", {
                        action: sV.om.ANNOUNCEMENT_CLICK,
                        form_name: sV.oH,
                        subform_name: "announcements",
                        subform_source: "dashboard",
                        announcement_name: t
                    })
                },
                lD = e => {
                    let {
                        announcement_name: t,
                        announcement_action: s
                    } = e;
                    s$.Analytics.trackEvent("ce_bot_form", {
                        action: sV.om.ANNOUNCEMENT_ACTION,
                        form_name: sV.oH,
                        subform_name: "announcements",
                        subform_source: "dashboard",
                        announcement_name: t,
                        announcement_action: s
                    })
                };
            var lU = s("64376");
            let lF = e => {
                let {
                    children: t,
                    text_size: s,
                    className: n
                } = e;
                return (0, l.jsx)("button", {
                    type: "button",
                    className: (0, n7.Z)("open-livechat__link", n),
                    onClick: () => window.LC_API.open_chat_window(),
                    children: (0, l.jsx)(et.Z, {
                        size: s || "xs",
                        weight: "bold",
                        color: "brand-red-coral",
                        children: t || (0, l.jsx)(y.Xx, {
                            i18n_default_text: "live chat"
                        })
                    })
                })
            };
            var lZ = s("69557");
            let lz = e => {
                    let {
                        announce: t
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(lZ.Z, {
                            fill: "var(--text-info-blue)",
                            width: "24",
                            height: "26"
                        }), t && (0, l.jsx)("div", {
                            className: "notification__icon--indicator"
                        })]
                    })
                },
                lB = e => {
                    let {
                        title: t,
                        announce: s
                    } = e;
                    return (0, l.jsx)(et.Z, {
                        size: "xs",
                        line_height: "l",
                        weight: s ? "bold" : "normal",
                        styles: s ? {} : {
                            color: "var(--text-general)"
                        },
                        children: t
                    })
                },
                lP = e => {
                    let {
                        message: t,
                        date: s,
                        announce: n
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(et.Z, {
                            size: "xs",
                            line_height: "m",
                            weight: n ? "normal" : "lighter",
                            styles: n ? {} : {
                                color: "var(--text-general)"
                            },
                            children: t
                        }), (0, l.jsx)(et.Z, {
                            size: "xxs",
                            line_height: "xl",
                            styles: {
                                color: "var(--text-primary)"
                            },
                            children: s
                        })]
                    })
                },
                lX = e => {
                    let {
                        announce_id: t
                    } = e;
                    switch (t) {
                        case "MOVING_STRATEGIES_ANNOUNCE":
                            return (0, l.jsx)(tg.J, {
                                icon: "IcMigrateStrategy",
                                className: "category-type",
                                style: {
                                    height: 100,
                                    width: 140
                                }
                            });
                        case "BLOCKLY_ANNOUNCE":
                            return (0, l.jsx)(tg.J, {
                                icon: "IcUpgradeBlockly",
                                className: "category-type",
                                style: {
                                    height: 120,
                                    width: 120
                                }
                            });
                        case "ACCUMULATOR_ANNOUNCE":
                            return (0, l.jsx)(tg.J, {
                                icon: "IcTradetypeAccu",
                                className: "category-type",
                                style: {
                                    height: 80,
                                    width: 80
                                }
                            });
                        default:
                            return null
                    }
                },
                lH = {
                    UPDATES_QUICK_STRATEGY_MODAL_ANNOUNCE: {
                        announcement: {
                            id: "UPDATES_QUICK_STRATEGY_MODAL_ANNOUNCE",
                            main_title: (0, y.NC)("Updates: Quick strategy modal"),
                            confirm_button_text: (0, y.NC)("Explore now"),
                            base_classname: "announcement-dialog",
                            media: [(0, x.MT8)("assets/images/dbot-new-look-QS-and-accumulators-addition.gif")],
                            title: [(0, l.jsx)(et.Z, {
                                as: "div",
                                align: "left",
                                size: "xs",
                                className: "announcement-dialog__title",
                                children: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "We've improved the Quick strategy (QS) modal for a better trading experience."
                                })
                            }, 0), (0, l.jsx)(y.Xx, {
                                i18n_default_text: "<0>What’s new:</0>",
                                components: [(0, l.jsx)("div", {}, 0)]
                            }, 1)],
                            unordered_list: [{
                                id: 0,
                                text: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>A revamped design</0> for improved functionality.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }, {
                                id: 1,
                                text: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>Support for multiple trade types </0> with a filter to find strategies by preference.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }, {
                                id: 2,
                                text: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>Integration of Accumulators Options</0> for direct strategy application within the QS modal.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }]
                        },
                        should_not_be_cancel: !0,
                        switch_tab_on_confirm: sd.ve.BOT_BUILDER,
                        should_toggle_qs_modal: !0
                    },
                    MOVING_STRATEGIES_ANNOUNCE: {
                        announcement: {
                            id: "MOVING_STRATEGIES_ANNOUNCE",
                            main_title: (0, y.NC)("Moving strategies to Deriv Bot"),
                            confirm_button_text: (0, y.NC)("Import strategy"),
                            base_classname: "announcement-dialog",
                            title: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "<0>Follow these steps to smoothly transfer your strategies:</0>",
                                components: [(0, l.jsx)("strong", {}, 0)]
                            }),
                            numbered_content: [{
                                id: 0,
                                text: (0, y.NC)("Download your strategy in XML format and import it to Deriv Bot.")
                            }, {
                                id: 1,
                                text: (0, y.NC)("Run your updated strategy to check its performance.")
                            }, {
                                id: 2,
                                text: (0, y.NC)("Save the updated strategy for quicker re-imports.")
                            }],
                            plain_text: [{
                                id: 0,
                                text: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>Note</0>: Uploading complex strategies may take some time. Saving them from Deriv Bot ensures quicker access later. If you have questions, contact us via <1/>.",
                                    components: [(0, l.jsx)("strong", {}, 0), (0, l.jsx)(lF, {
                                        className: ""
                                    }, 1)]
                                })
                            }]
                        },
                        should_not_be_cancel: !0,
                        should_toggle_load_modal: !0,
                        switch_tab_on_confirm: sd.ve.BOT_BUILDER,
                        onConfirm: () => {
                            (0, tK.m5)({
                                subpage_name: "bot_builder",
                                subform_source: "announcements",
                                subform_name: "load_strategy",
                                load_strategy_tab: "recent"
                            })
                        }
                    },
                    BLOCKLY_ANNOUNCE: {
                        announcement: {
                            id: "BLOCKLY_ANNOUNCE",
                            main_title: (0, y.NC)("Google Blockly v10 update"),
                            base_classname: "announcement-dialog",
                            title: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "We have updated our Blockly system in Deriv Bot from <0>version 3 to version 10</0>. This brings:",
                                components: [(0, l.jsx)("strong", {}, 0)]
                            }),
                            numbered_content: [{
                                id: 0,
                                text: (0, y.NC)("Better security.")
                            }, {
                                id: 1,
                                text: (0, y.NC)("Faster performance.")
                            }, {
                                id: 2,
                                text: (0, y.NC)("New features for developers.")
                            }],
                            plain_text: [{
                                id: 0,
                                text: (0, l.jsx)(y.Xx, {
                                    i18n_default_text: "<0>Note</0>: Some complex strategies might face issues in the Bot Builder. If you have questions, contact us via <1/>.",
                                    components: [(0, l.jsx)("strong", {}, 0), (0, l.jsx)(lF, {
                                        className: ""
                                    }, 1)]
                                })
                            }]
                        },
                        should_not_be_cancel: !0
                    },
                    ACCUMULATOR_ANNOUNCE: {
                        announcement: {
                            id: "ACCUMULATOR_ANNOUNCE",
                            main_title: (0, y.NC)("Accumulators now on Deriv Bot"),
                            confirm_button_text: (0, y.NC)("Try now"),
                            cancel_button_text: (0, y.NC)("Learn more"),
                            base_classname: "announcement-dialog",
                            title: (0, l.jsx)(y.Xx, {
                                i18n_default_text: "<0>Boost your trading strategy with Accumulators</0>",
                                components: [(0, l.jsx)("strong", {}, 0)]
                            }),
                            content: [{
                                id: 0,
                                text: (0, y.NC)("Trade Accumulators to build up potential profits with a structured approach.")
                            }, {
                                id: 1,
                                text: (0, y.NC)("Customise your investment period and price levels to fit your trading goals.")
                            }, {
                                id: 2,
                                text: (0, y.NC)("Manage risks while capitalising on market opportunities.")
                            }]
                        },
                        switch_tab_on_cancel: sd.ve.TUTORIAL,
                        switch_tab_on_confirm: sd.ve.BOT_BUILDER,
                        onConfirm: () => lG()
                    }
                },
                l$ = {
                    MODAL_BUTTON_ACTION: "modal_button_action",
                    REDIRECT_BUTTON_ACTION: "redirect_button_action"
                },
                lV = [{
                    id: "UPDATES_QUICK_STRATEGY_MODAL_ANNOUNCE",
                    icon: lz,
                    title: (0, y.NC)("Updated: Quick Strategy Modal"),
                    message: (0, y.NC)("We've improved the Quick strategy (QS) modal for a better trading experience."),
                    date: "18 November 2024 00:00 UTC",
                    buttonAction: l$.MODAL_BUTTON_ACTION,
                    actionText: ""
                }, {
                    id: "MOVING_STRATEGIES_ANNOUNCE",
                    icon: lz,
                    title: (0, y.NC)("Moving strategies to Deriv Bot"),
                    message: (0, y.NC)("Follow these steps to smoothly transfer your strategies"),
                    date: "1 August 2024 00:00 UTC",
                    buttonAction: l$.MODAL_BUTTON_ACTION,
                    actionText: ""
                }, {
                    id: "BLOCKLY_ANNOUNCE",
                    icon: lz,
                    title: (0, y.NC)("Google Blockly v10 update"),
                    message: (0, y.NC)("We have updated our Blockly system in Deriv Bot from version 3 to version 10."),
                    date: "24 July 2024 00:00 UTC",
                    buttonAction: l$.MODAL_BUTTON_ACTION,
                    actionText: ""
                }, {
                    id: "ACCUMULATOR_ANNOUNCE",
                    icon: lz,
                    title: (0, y.NC)("Accumulators is now on Deriv Bot"),
                    message: (0, y.NC)("Boost your trading strategy with Accumulators."),
                    date: "2 July 2024 00:00 UTC",
                    buttonAction: l$.MODAL_BUTTON_ACTION,
                    actionText: ""
                }],
                lG = () => {
                    Promise.resolve().then(s.bind(s, 56505)).then(e => {
                        let t = Blockly.utils.xml.textToDom(e.default);
                        ((e, s) => {
                            let n = `${e.toUpperCase()}_LIST`,
                                a = null == t ? void 0 : t.querySelectorAll(`field[name="${n}"]`);
                            null == a || a.forEach(e => {
                                e.textContent = s
                            })
                        })("tradetypecat", "accumulator");
                        let {
                            derivWorkspace: s
                        } = Blockly;
                        (0, Z.load)({
                            block_string: Blockly.Xml.domToText(t),
                            file_name: "Strategy with accumulator trade type",
                            workspace: s,
                            from: Z.save_types.UNSAVED,
                            drop_event: null,
                            strategy_id: null,
                            showIncompatibleStrategyDialog: null
                        })
                    }).catch(e => {
                        console.error("Failed to load strategy XML:", e)
                    })
                },
                lq = (e, t, s) => {
                    switch (e.buttonAction) {
                        case l$.MODAL_BUTTON_ACTION:
                            return t(e.id, lH[e.id]);
                        case l$.REDIRECT_BUTTON_ACTION:
                            {
                                let t = lH[e.id].url_redirect;
                                if (t) return s(t);
                                return !1
                            }
                        default:
                            return !1
                    }
                },
                lY = e => {
                    let {
                        announcement: t,
                        handleOnConfirm: s,
                        handleOnCancel: n,
                        is_announce_dialog_open: a,
                        setIsAnnounceDialogOpen: i,
                        is_tablet: r
                    } = e, {
                        id: o,
                        main_title: d,
                        confirm_button_text: c,
                        cancel_button_text: _,
                        base_classname: u,
                        title: x,
                        content: h,
                        numbered_content: m,
                        plain_text: p,
                        unordered_list: j,
                        media: v
                    } = t;
                    return (0, l.jsx)(sz.Z, {
                        portal_element_id: "modal_root",
                        title: d,
                        is_visible: a,
                        confirm_button_text: c,
                        onConfirm: s,
                        cancel_button_text: _,
                        onCancel: n,
                        is_mobile_full_width: !0,
                        has_close_icon: !0,
                        onClose: () => {
                            i(!1), (0, tK._W)({
                                subform_name: "announcements",
                                announcement_name: d
                            })
                        },
                        className: r ? `${u} ${u}--tablet` : u,
                        children: (0, l.jsxs)("div", {
                            className: `${u}__body-text`,
                            children: [(0, l.jsx)("div", {
                                className: `${u}__body-icon--${o.toLowerCase()}`,
                                children: (0, l.jsx)(lX, {
                                    announce_id: o
                                })
                            }), Array.isArray(v) && (0, l.jsx)(l.Fragment, {
                                children: v.map((e, t) => (0, l.jsx)("img", {
                                    className: `${u}__image`,
                                    src: e,
                                    alt: e
                                }, t))
                            }), (0, l.jsxs)("div", {
                                className: `${u}__body-main-content`,
                                children: [(0, l.jsx)(et.Z, {
                                    as: "p",
                                    size: "xs",
                                    className: `${u}__title--${o.toLowerCase()}`,
                                    children: x
                                }), Array.isArray(h) && h.map(e => (0, l.jsxs)("div", {
                                    className: `${u}__body-item`,
                                    children: [(0, l.jsx)("div", {
                                        children: (0, l.jsx)(ev.Z, {
                                            fill: "var(--icon-black-plus)"
                                        })
                                    }), (0, l.jsx)(et.Z, {
                                        as: "p",
                                        lineHeight: "l",
                                        size: "xs",
                                        children: null == e ? void 0 : e.text
                                    })]
                                }, null == e ? void 0 : e.id)), Array.isArray(j) && (0, l.jsx)("ul", {
                                    className: `${u}__unordered_list`,
                                    children: j.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsx)(et.Z, {
                                            as: "div",
                                            lineHeight: "l",
                                            size: "xs",
                                            children: null == e ? void 0 : e.text
                                        })
                                    }, null == e ? void 0 : e.id))
                                }, 0), Array.isArray(m) && (0, l.jsx)("ol", {
                                    className: `${u}__body-item--numbered`,
                                    children: m.map(e => (0, l.jsx)(et.Z, {
                                        as: "li",
                                        lineHeight: "xl",
                                        size: "xs",
                                        styles: {
                                            listStyle: "auto"
                                        },
                                        children: null == e ? void 0 : e.text
                                    }, null == e ? void 0 : e.id))
                                }), Array.isArray(p) && (0, l.jsx)("div", {
                                    children: p.map(e => (0, l.jsx)("span", {
                                        children: (0, l.jsx)(et.Z, {
                                            lineHeight: "m",
                                            size: "xs",
                                            styles: {
                                                listStyle: "auto"
                                            },
                                            children: e.text
                                        }, e.id)
                                    }, null == e ? void 0 : e.id))
                                })]
                            })]
                        })
                    })
                },
                lW = (0, r.Pi)(e => {
                    let {
                        is_mobile: t,
                        is_tablet: s,
                        handleTabChange: n
                    } = e, {
                        load_modal: {
                            toggleLoadModal: a
                        },
                        dashboard: {
                            showVideoDialog: r
                        },
                        quick_strategy: {
                            setFormVisibility: o
                        }
                    } = (0, p.oR)(), [d, c] = i.useState(!1), [_, u] = i.useState(!1), [x, h] = i.useState(null), [m, j] = i.useState({}), [v, b] = i.useState(0), g = (0, lA.s0)(), [f, N] = i.useState([]), C = "announcements__label", w = e => {
                        var t;
                        null === (t = localStorage) || void 0 === t || t.setItem("bot-announcements", JSON.stringify(e))
                    }, k = e => {
                        let t = null;
                        w({ ...t = JSON.parse(localStorage.getItem("bot-announcements") ? ? "{}"),
                            [e]: !1
                        }), j(S())
                    }, T = (e, t) => () => {
                        h(t), c(!0), u(e => !e), lO({
                            announcement_name: t.announcement.main_title
                        }), k(e)
                    }, E = e => () => {
                        g && g(e)
                    }, S = () => {
                        let e = null;
                        e = JSON.parse(localStorage.getItem("bot-announcements") ? ? "{}");
                        let t = [],
                            s = {};
                        return lV.map(n => {
                            let a = !0;
                            e && Object.hasOwn(e, n.id) && (a = e[n.id]), t.push({
                                id: n.id,
                                icon: (0, l.jsx)(n.icon, {
                                    announce: a
                                }),
                                title: (0, l.jsx)(lB, {
                                    title: n.title,
                                    announce: a
                                }),
                                message: (0, l.jsx)(lP, {
                                    message: n.message,
                                    date: n.date,
                                    announce: a
                                }),
                                buttonAction: lq(n, T, E),
                                actionText: n.actionText
                            }), s[n.id] = a
                        }), N(t), s
                    };
                    i.useEffect(() => {
                        let e = S();
                        w(e), j(e)
                    }, []), i.useEffect(() => {
                        b(Object.values(m).filter(e => e).length)
                    }, [m]);
                    let I = () => {
                        let e = (0, lU.zw)().find(e => 4 === e.id);
                        e && r({
                            url: e.url,
                            type: "url"
                        })
                    };
                    return (0, l.jsxs)("div", {
                        className: "announcements",
                        children: [(0, l.jsxs)("button", {
                            className: "announcements__button",
                            onClick: () => {
                                u(e => !e), !_ && (0, tK.m5)({
                                    subform_name: "announcements",
                                    subform_source: "dashboard"
                                })
                            },
                            "data-testid": "btn-announcements",
                            children: [(0, l.jsx)(lR.Z, {
                                fill: "var(--icon-black-plus)",
                                iconSize: "sm"
                            }), !t && (0, l.jsx)(et.Z, {
                                size: "xs",
                                line_height: "s",
                                className: C,
                                children: (0, y.NC)("Announcements")
                            }), 0 !== v && (0, l.jsx)("div", {
                                className: "announcements__amount",
                                children: (0, l.jsx)("p", {
                                    "data-testid": "announcements__amount",
                                    children: v
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "notifications__wrapper",
                            children: (0, l.jsx)(lL.T, {
                                className: D()("", {
                                    "notifications__wrapper--mobile": t,
                                    "notifications__wrapper--desktop": !t,
                                    "notifications__wrapper--tablet": s
                                }),
                                clearNotificationsCallback: () => {
                                    w(Object.fromEntries(Object.keys(m).map(e => [e, !1]))), j(S())
                                },
                                componentConfig: {
                                    clearButtonText: (0, y.NC)("Mark all as read"),
                                    modalTitle: (0, y.NC)("Announcements"),
                                    noNotificationsMessage: "",
                                    noNotificationsTitle: ""
                                },
                                isOpen: _,
                                setIsOpen: u,
                                notifications: f,
                                excludedClickOutsideClass: C,
                                ...t && {
                                    appElement: document.getElementById("modal_root")
                                }
                            })
                        }), (null == x ? void 0 : x.announcement) && (0, l.jsx)(lY, {
                            announcement: x.announcement,
                            is_announce_dialog_open: d,
                            setIsAnnounceDialogOpen: c,
                            handleOnCancel: (null == x ? void 0 : x.should_not_be_cancel) ? null : () => {
                                var e;
                                lD({
                                    announcement_name: null == x ? void 0 : x.announcement.main_title,
                                    announcement_action: null == x ? void 0 : x.announcement.cancel_button_text
                                }), (null == x ? void 0 : x.switch_tab_on_cancel) && (n(x.switch_tab_on_cancel), "ACCUMULATOR_ANNOUNCE" === x.announcement.id && I()), null == x || null === (e = x.onCancel) || void 0 === e || e.call(x), h(null)
                            },
                            handleOnConfirm: () => {
                                var e;
                                lD({
                                    announcement_name: null == x ? void 0 : x.announcement.main_title,
                                    announcement_action: null == x ? void 0 : x.announcement.confirm_button_text
                                }), (null == x ? void 0 : x.switch_tab_on_confirm) && n(x.switch_tab_on_confirm), (null == x ? void 0 : x.should_toggle_qs_modal) && o(!0), (null == x ? void 0 : x.should_toggle_load_modal) && a(), null == x || null === (e = x.onConfirm) || void 0 === e || e.call(x), h(null)
                            },
                            is_tablet: s
                        })]
                    })
                });
            var lK = s("21317"),
                lJ = s("96475"),
                lQ = s("69483"),
                l0 = s.n(lQ),
                l1 = s("26961"),
                l2 = s.n(l1);
            let l5 = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        is_delete_modal_open: s,
                        onToggleDeleteDialog: n,
                        selected_strategy_id: a,
                        setDashboardStrategies: i,
                        loadStrategyToBuilder: r,
                        refreshStrategiesTheme: o,
                        resetBotBuilderStrategy: d
                    } = e, {
                        setOpenSettings: c
                    } = t, _ = async (e, t) => {
                        t.length ? (a === e && await r(null == t ? void 0 : t[0]), await o()) : d()
                    }, u = async e => {
                        let t = (await (0, Z.getSavedWorkspaces)()).filter(t => t.id !== e);
                        i(t), l0().setItem("saved_workspaces", l2().compress(JSON.stringify(t))), await _(e, t), n(!1)
                    };
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(sz.Z, {
                            title: (0, y.NC)("Delete bot"),
                            is_visible: s,
                            confirm_button_text: (0, y.NC)("Yes, delete"),
                            onConfirm: () => {
                                u(a), n(!1), c(sX.tx.BOT_DELETE)
                            },
                            cancel_button_text: (0, y.NC)("No"),
                            onCancel: () => {
                                n(!1)
                            },
                            is_mobile_full_width: !1,
                            className: "dc-dialog__delete-strategy--delete",
                            has_close_icon: !0,
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsxs)(et.Z, {
                                    color: "prominent",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: [(0, y.NC)("Your bot will be permanently deleted when you hit "), (0, l.jsx)("strong", {
                                        children: (0, y.NC)("Yes, delete.")
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)(et.Z, {
                                    color: "prominent",
                                    lineHeight: "xl",
                                    size: "xs",
                                    children: (0, y.NC)("Are you sure you want to delete it?")
                                })
                            })]
                        })
                    })
                }),
                l3 = e => {
                    let [t, s] = i.useState(!1), n = e => {
                        "ESCAPE" === e.key.toUpperCase() && s(!1)
                    }, a = t => {
                        var n;
                        !(null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : n.contains(t.target)) && s(!1)
                    };
                    return i.useEffect(() => (document.addEventListener("keydown", n, !0), document.addEventListener("click", a, !0), () => {
                        document.removeEventListener("keydown", n, !0), document.removeEventListener("click", a, !0)
                    }), []), {
                        is_dropdown_visible: t,
                        setDropdownVisibility: s
                    }
                };
            var l8 = s("85127"),
                l4 = s("37575"),
                l7 = s("42754"),
                l6 = s("33571");
            let l9 = {
                    OPEN: "open",
                    SAVE: "save",
                    DELETE: "delete",
                    INIT: "init"
                },
                ie = [{
                    type: l9.OPEN,
                    icon: (0, l.jsx)(l8.Z, {
                        fill: "var(--text-general)"
                    }),
                    label: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Open"
                    })
                }, {
                    type: l9.SAVE,
                    icon: (0, l.jsx)(l7.Z, {
                        fill: "var(--text-general)",
                        className: "icon-general-fill-path",
                        iconSize: "xs",
                        path: "",
                        opacity: .8
                    }),
                    label: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Save"
                    })
                }, {
                    type: l9.DELETE,
                    icon: (0, l.jsx)(l4.Z, {
                        fill: "var(--text-general)"
                    }),
                    label: (0, l.jsx)(y.Xx, {
                        i18n_default_text: "Delete"
                    })
                }],
                it = (0, r.Pi)(e => {
                    let {
                        workspace: t,
                        index: s
                    } = e, {
                        dashboard: n,
                        load_modal: a,
                        save_modal: r
                    } = (0, p.oR)(), {
                        setActiveTab: o
                    } = n, {
                        toggleSaveModal: d,
                        updateBotName: c
                    } = r, {
                        dashboard_strategies: _ = [],
                        getSaveType: u,
                        getSelectedStrategyID: x,
                        loadFileFromRecent: h,
                        onToggleDeleteDialog: m,
                        previewed_strategy_id: j,
                        selected_strategy_id: v,
                        setSelectedStrategyId: b
                    } = a, g = i.useRef(null), y = i.useRef(null), N = i.useRef(!1), {
                        setDropdownVisibility: C,
                        is_dropdown_visible: w
                    } = l3(y), {
                        isDesktop: k
                    } = (0, f.F)();
                    i.useEffect(() => {
                        let e;
                        return (null == _ ? void 0 : _.length) && 0 === s && !N.current && (e = setTimeout(() => {
                            var e;
                            N.current = !0, null == g || null === (e = g.current) || void 0 === e || e.click()
                        }, 50)), () => {
                            e && clearTimeout(e)
                        }
                    }, [_, s]);
                    let T = async () => {
                            await h(), o(sd.ve.BOT_BUILDER), lM({
                                dashboard_click_name: "open",
                                subpage_name: "bot_builder"
                            })
                        },
                        E = () => {
                            c(null == t ? void 0 : t.name), d(), lM({
                                dashboard_click_name: "save",
                                subpage_name: "dashboard"
                            })
                        },
                        S = async e => {
                            switch (b(t.id), e) {
                                case l9.OPEN:
                                    await T();
                                    break;
                                case l9.SAVE:
                                    E();
                                    break;
                                case l9.DELETE:
                                    m(!0), lM({
                                        dashboard_click_name: "delete",
                                        subpage_name: "dashboard"
                                    })
                            }
                        },
                        I = v === t.id && w,
                        A = k ? "xs" : "xxs";
                    return (0, l.jsxs)("div", {
                        className: D()("bot-list__item", {
                            "bot-list__item--selected": j === t.id,
                            "bot-list__item--loaded": _,
                            "bot-list__item--min": !!(null == _ ? void 0 : _.length) && !k
                        }),
                        ref: g,
                        onClick: e => {
                            e.stopPropagation(), w && C(!1), x(t.id), S(l9.INIT)
                        },
                        children: [(0, l.jsx)("div", {
                            className: "bot-list__item__label",
                            children: (0, l.jsx)("div", {
                                className: "text-wrapper",
                                title: t.name,
                                children: (0, l.jsx)(et.Z, {
                                    align: "left",
                                    as: "p",
                                    size: A,
                                    lineHeight: "l",
                                    children: t.name
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "bot-list__item__time-stamp",
                            children: (0, l.jsx)(et.Z, {
                                align: "left",
                                as: "p",
                                size: A,
                                lineHeight: "l",
                                children: (0, Z.timeSince)(t.timestamp)
                            })
                        }), (0, l.jsxs)("div", {
                            className: "bot-list__item__load-type",
                            children: [s6(t.save_type, "bot-list__item__load-type__icon--active"), (0, l.jsx)("div", {
                                className: "bot-list__item__load-type__icon--saved",
                                children: (0, l.jsx)(et.Z, {
                                    align: "left",
                                    as: "p",
                                    size: A,
                                    lineHeight: "l",
                                    children: u(t.save_type)
                                })
                            })]
                        }), k ? (0, l.jsx)("div", {
                            className: "bot-list__item__actions",
                            children: ie.map(e => (0, l.jsx)("div", {
                                className: "bot-list__item__actions__action-item",
                                onClick: t => {
                                    t.stopPropagation(), S(e.type)
                                },
                                children: (0, l.jsx)(X.Z, {
                                    alignment: "top",
                                    message: e.label,
                                    zIndex: "9999",
                                    children: e.icon
                                })
                            }, e.type))
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "bot-list__item__actions",
                                children: (0, l.jsx)("button", {
                                    ref: y,
                                    onClick: e => {
                                        e.stopPropagation(), C(!w), b(t.id)
                                    },
                                    tabIndex: 0,
                                    children: (0, l.jsx)(l6.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: D()("bot-list__item__responsive", {
                                    "bot-list__item__responsive--active": I,
                                    "bot-list__item__responsive--min": _.length <= 5
                                }),
                                children: ie.map(e => (0, l.jsxs)("div", {
                                    className: "bot-list__item__responsive__menu",
                                    onClick: t => {
                                        t.stopPropagation(), S(e.type)
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: "bot-list__item__responsive__menu__icon",
                                        children: e.icon
                                    }), (0, l.jsx)(et.Z, {
                                        color: "prominent",
                                        className: "bot-list__item__responsive__menu__item",
                                        as: "p",
                                        size: "xs",
                                        children: e.label
                                    })]
                                }, e.type))
                            })]
                        })]
                    }, t.id)
                }),
                is = [{
                    label: (0, y.NC)("Bot name"),
                    className: "bot-list__header__label"
                }, {
                    label: (0, y.NC)("Last modified"),
                    className: "bot-list__header__time-stamp"
                }, {
                    label: (0, y.NC)("Status"),
                    className: "bot-list__header__load-type"
                }],
                ia = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        setDashboardStrategies: s,
                        dashboard_strategies: n
                    } = e, {
                        setStrategySaveType: a,
                        strategy_save_type: r
                    } = t, {
                        isDesktop: o
                    } = (0, f.F)(), d = i.useRef(!1), c = i.useRef(!1);
                    return (i.useEffect(() => {
                        a(""), (async () => {
                            s(await (0, Z.getSavedWorkspaces)()), !c.current && (c.current = !0)
                        })()
                    }, [r]), i.useEffect(() => {
                        !(null == n ? void 0 : n.length) && !d.current && (d.current = !0)
                    }, []), null == n ? void 0 : n.length) ? (0, l.jsxs)("div", {
                        className: "bot-list__container",
                        children: [(0, l.jsxs)("div", {
                            className: "bot-list__wrapper",
                            children: [(0, l.jsx)("div", {
                                className: "bot-list__title",
                                children: (0, l.jsx)(et.Z, {
                                    size: o ? "s" : "xs",
                                    weight: "bold",
                                    children: (0, l.jsx)(y.Xx, {
                                        i18n_default_text: "Your bots:"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "bot-list__header",
                                children: is.map(e => {
                                    let {
                                        label: t,
                                        className: s
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        className: s,
                                        children: (0, l.jsx)(et.Z, {
                                            size: o ? "xs" : "xxs",
                                            weight: "bold",
                                            children: t
                                        })
                                    }, t)
                                })
                            }), (0, l.jsx)("div", {
                                className: "bot-list__table",
                                children: n.map(e => (0, l.jsx)(it, {
                                    workspace: e
                                }, e.id))
                            })]
                        }), (0, l.jsx)(l5, {})]
                    }) : null
                }),
                il = (0, r.Pi)(e => {
                    let {
                        is_mobile: t,
                        has_dashboard_strategies: s
                    } = e, {
                        dashboard: n,
                        load_modal: a,
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        toggleLoadModal: o,
                        setActiveTabIndex: d
                    } = a, {
                        isDesktop: c
                    } = (0, f.F)(), {
                        onCloseDialog: _,
                        dialog_options: u,
                        is_dialog_open: x,
                        setActiveTab: h,
                        setPreviewOnPopup: m
                    } = n, {
                        setFormVisibility: j
                    } = r, v = () => {
                        o(), d(t ? 1 : 2), h(sd.ve.BOT_BUILDER)
                    }, b = () => {
                        o(), d(t ? 0 : 1), h(sd.ve.BOT_BUILDER)
                    }, g = [{
                        id: "my-computer",
                        icon: t ? (0, l.jsx)(sJ.Z, {
                            height: "48px",
                            width: "48px"
                        }) : (0, l.jsx)(sQ.Z, {
                            height: "48px",
                            width: "48px"
                        }),
                        content: t ? (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Local"
                        }) : (0, l.jsx)(y.Xx, {
                            i18n_default_text: "My computer"
                        }),
                        callback: () => {
                            b(), (0, tK.m5)({
                                subpage_name: "bot_builder",
                                subform_source: "dashboard",
                                subform_name: "load_strategy",
                                load_strategy_tab: "local"
                            })
                        }
                    }, {
                        id: "google-drive",
                        icon: (0, l.jsx)(sW.Z, {
                            height: "48px",
                            width: "48px"
                        }),
                        content: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Google Drive"
                        }),
                        callback: () => {
                            v(), (0, tK.m5)({
                                subpage_name: "bot_builder",
                                subform_source: "dashboard",
                                subform_name: "load_strategy",
                                load_strategy_tab: "google drive"
                            })
                        }
                    }, {
                        id: "bot-builder",
                        icon: (0, l.jsx)(lK.Z, {
                            height: "48px",
                            width: "48px"
                        }),
                        content: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Bot builder"
                        }),
                        callback: () => {
                            h(sd.ve.BOT_BUILDER), lM({
                                dashboard_click_name: "bot_builder",
                                subpage_name: "bot_builder"
                            })
                        }
                    }, {
                        id: "quick-strategy",
                        icon: (0, l.jsx)(lJ.Z, {
                            height: "48px",
                            width: "48px"
                        }),
                        content: (0, l.jsx)(y.Xx, {
                            i18n_default_text: "Quick strategy"
                        }),
                        callback: () => {
                            h(sd.ve.BOT_BUILDER), j(!0), (0, tK.m5)({
                                subpage_name: "bot_builder",
                                subform_source: "dashboard",
                                subform_name: "quick_strategy"
                            })
                        }
                    }];
                    return i.useMemo(() => (0, l.jsxs)("div", {
                        className: D()("tab__dashboard__table", {
                            "tab__dashboard__table--minimized": s && t
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: D()("tab__dashboard__table__tiles", {
                                "tab__dashboard__table__tiles--minimized": s && t
                            }),
                            id: "tab__dashboard__table__tiles",
                            children: [g.map(e => {
                                let {
                                    icon: n,
                                    content: a,
                                    callback: i,
                                    id: r
                                } = e;
                                return (0, l.jsxs)("div", {
                                    className: D()("tab__dashboard__table__block", {
                                        "tab__dashboard__table__block--minimized": s && t
                                    }),
                                    children: [(0, l.jsx)("div", {
                                        className: D()("tab__dashboard__table__images", {
                                            "tab__dashboard__table__images--minimized": s
                                        }),
                                        width: "8rem",
                                        height: "8rem",
                                        icon: n,
                                        id: r,
                                        onClick: () => {
                                            i()
                                        },
                                        children: n
                                    }), (0, l.jsx)(et.Z, {
                                        color: "prominent",
                                        size: t ? "xxs" : "xs",
                                        children: a
                                    })]
                                }, r)
                            }), c ? (0, l.jsx)(sv, {
                                is_modal_open: x,
                                className: "load-strategy__wrapper",
                                header: (0, y.NC)("Load strategy"),
                                onClickClose: () => {
                                    m(!1), _()
                                },
                                height_offset: "80px",
                                page_overlay: !0,
                                children: (0, l.jsx)("div", {
                                    label: "Google Drive",
                                    className: "google-drive-label",
                                    children: (0, l.jsx)(sK, {})
                                })
                            }) : (0, l.jsx)(sz.Z, {
                                title: u.title,
                                is_visible: x,
                                onCancel: _,
                                is_mobile_full_width: !0,
                                className: "dc-dialog__wrapper--google-drive",
                                has_close_icon: !0,
                                children: (0, l.jsx)(sK, {})
                            })]
                        }), (0, l.jsx)(ia, {})]
                    }), [x, s])
                }),
                ii = () => [{
                    label: (0, y.NC)("Welcome to Deriv Bot!"),
                    content: [{
                        data: (0, y.NC)("Ready to automate your trading strategy without writing any code? You’ve come to the right place.")
                    }, {
                        data: (0, y.NC)("Check out these guides and FAQs to learn more about building your bot:")
                    }],
                    link: !1
                }, {
                    label: (0, y.NC)("Guide"),
                    content: [{
                        data: (0, y.NC)("Deriv Bot - your automated trading partner")
                    }],
                    link: !0
                }, {
                    label: (0, y.NC)("FAQs"),
                    content: [{
                        data: (0, y.NC)("What is Deriv Bot?"),
                        faq_id: "faq-0"
                    }, {
                        data: (0, y.NC)("Where do I find the blocks I need?"),
                        faq_id: "faq-1"
                    }, {
                        data: (0, y.NC)("How do I remove blocks from the workspace?"),
                        faq_id: "faq-2"
                    }],
                    link: !0
                }],
                ir = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, f.F)(), {
                        dashboard: t
                    } = (0, p.oR)(), {
                        active_tour: s,
                        is_info_panel_visible: n,
                        setActiveTab: a,
                        setActiveTabTutorial: i,
                        setInfoPanelVisibility: r,
                        setFaqTitle: o
                    } = t, d = (e, t, s) => {
                        let n = e ? a(sd.ve.TUTORIAL) : null,
                            l = "Guide" === t ? i(0) : i(1);
                        return o(s), {
                            tutorial_link: n,
                            tutorial_label: l
                        }
                    }, c = () => {
                        r(!1), localStorage.setItem("dbot_should_show_info", JSON.stringify(Date.now()))
                    }, _ = () => (0, l.jsxs)("div", {
                        className: "db-info-panel",
                        children: [(0, l.jsx)("div", {
                            "data-testid": "close-icon",
                            className: "db-info-panel__close-action",
                            onClick: c,
                            children: (0, l.jsx)(E.Z, {
                                height: "18px",
                                width: "18px",
                                fill: "var(--text-prominent)"
                            })
                        }), ii().map(t => {
                            let {
                                label: s,
                                content: n,
                                link: a
                            } = t;
                            return (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(et.Z, {
                                    color: "prominent",
                                    lineHeight: "xxl",
                                    size: e ? "m" : "s",
                                    weight: "bold",
                                    as: "h1",
                                    children: s
                                }), n.map(t => (0, l.jsx)(et.Z, {
                                    className: D()("db-info-panel__card", {
                                        "db-info-panel__content": a
                                    }),
                                    color: "prominent",
                                    lineHeight: "xl",
                                    as: "p",
                                    onClick: () => d(a, s, t.faq_id),
                                    size: e ? "s" : "xxs",
                                    children: t.data
                                }, `info-panel-tour${t.data}`))]
                            }, `${s}-${n}`)
                        })]
                    });
                    return e ? !s && (0, l.jsx)("div", {
                        className: D()("tab__dashboard__info-panel", {
                            "tab__dashboard__info-panel--active": n
                        }),
                        children: _()
                    }) : (0, l.jsx)(N.Z, {
                        className: "statistics__modal statistics__modal--mobile",
                        is_open: n,
                        toggleModal: c,
                        width: "440px",
                        children: (0, l.jsx)(N.Z.Body, {
                            children: _()
                        })
                    })
                }),
                io = (0, r.Pi)(e => {
                    let {
                        handleTabChange: t
                    } = e, {
                        load_modal: s,
                        dashboard: n
                    } = (0, p.oR)(), {
                        dashboard_strategies: a
                    } = s, {
                        active_tab: r,
                        active_tour: o
                    } = n, d = !!(null == a ? void 0 : a.length), {
                        isDesktop: c,
                        isTablet: _
                    } = (0, f.F)();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: D()("tab__dashboard", {
                                "tab__dashboard--tour-active": o
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "tab__dashboard__content",
                                children: [(0, l.jsx)(lW, {
                                    is_mobile: !c,
                                    is_tablet: _,
                                    handleTabChange: t
                                }), (0, l.jsxs)("div", {
                                    className: "quick-panel",
                                    children: [(0, l.jsxs)("div", {
                                        className: D()("tab__dashboard__header", {
                                            "tab__dashboard__header--listed": c && d
                                        }),
                                        children: [!d && (0, l.jsx)(et.Z, {
                                            className: "title",
                                            as: "h2",
                                            color: "prominent",
                                            size: c ? "sm" : "s",
                                            lineHeight: "xxl",
                                            weight: "bold",
                                            children: (0, y.NC)("Load or build your bot")
                                        }), (0, l.jsx)(et.Z, {
                                            as: "p",
                                            color: "prominent",
                                            lineHeight: "s",
                                            size: c ? "s" : "xxs",
                                            className: D()("subtitle", {
                                                "subtitle__has-list": d
                                            }),
                                            children: (0, y.NC)("Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy.")
                                        })]
                                    }), (0, l.jsx)(il, {
                                        has_dashboard_strategies: d,
                                        is_mobile: !c
                                    })]
                                })]
                            })
                        }), (0, l.jsx)(ir, {}), 0 === r && (0, l.jsx)(lI, {
                            is_mobile: !c
                        })]
                    })
                }),
                id = () => (0, l.jsx)("div", {
                    className: "toolbar__section",
                    "data-testid": "dt_run_strategy",
                    children: (0, l.jsx)(t1, {
                        className: "toolbar__animation"
                    })
                }),
                ic = (0, i.lazy)(() => Promise.resolve().then(s.bind(s, 29357))),
                i_ = (0, i.lazy)(() => s.e("31").then(s.bind(s, 94335))),
                iu = (0, i.lazy)(() => s.e("0").then(s.bind(s, 11473))),
                ix = (0, i.lazy)(() => s.e("784").then(s.bind(s, 43145))),
                ih = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "url(#grad1)",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff",
                                "stop-opacity": "1"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff",
                                "stop-opacity": "1"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "4",
                        y: "6",
                        width: "16",
                        height: "12",
                        rx: "3",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "6",
                        stroke: "url(#grad1)",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    }), (0, l.jsx)("circle", {
                        cx: "12",
                        cy: "2",
                        r: "1.5",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "9",
                        cy: "12",
                        r: "1.5",
                        fill: "white"
                    }), (0, l.jsx)("circle", {
                        cx: "15",
                        cy: "12",
                        r: "1.5",
                        fill: "white"
                    }), (0, l.jsx)("rect", {
                        x: "9",
                        y: "15",
                        width: "6",
                        height: "1.5",
                        rx: "0.75",
                        fill: "white",
                        opacity: "0.9"
                    })]
                }),
                im = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "url(#grad1)",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("path", {
                        d: "M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.65l-2-3.46a.5.5 0 0 0-.61-.21l-2.49 1a7.03 7.03 0 0 0-1.69-.98l-.38-2.65A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.5.42l-.38 2.65a7.03 7.03 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.21l-2 3.46a.5.5 0 0 0 .12.65l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65a.5.5 0 0 0-.12.65l2 3.46a.5.5 0 0 0 .61.21l2.49-1c.5.4 1.07.73 1.69.98l.38 2.65A.5.5 0 0 0 10 22h4c.25 0 .46-.18.5-.42l.38-2.65c.62-.25 1.19-.58 1.69-.98l2.49 1a.5.5 0 0 0 .61-.21l2-3.46a.5.5 0 0 0-.12-.65l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5z"
                    })]
                }),
                ip = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "url(#grad1)",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "3",
                        y: "3",
                        width: "18",
                        height: "18",
                        rx: "3",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2"
                    }), (0, l.jsx)("path", {
                        d: "M7 14L10 10L14 15L17 9",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("circle", {
                        cx: "7",
                        cy: "14",
                        r: "1.5",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "10",
                        cy: "10",
                        r: "1.5",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "14",
                        cy: "15",
                        r: "1.5",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "17",
                        cy: "9",
                        r: "1.5",
                        fill: "url(#grad1)"
                    })]
                }),
                ij = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("path", {
                        d: "M12 2a10 10 0 1 1-7.07 2.93",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round"
                    }), (0, l.jsx)("path", {
                        d: "M12 6a6 6 0 1 1-4.24 1.76",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    }), (0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "2.8",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "13",
                        cy: "11",
                        r: "0.8",
                        fill: "white",
                        opacity: "0.9"
                    })]
                }),
                iv = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "3",
                        y: "3",
                        width: "18",
                        height: "18",
                        rx: "3",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2"
                    }), (0, l.jsx)("rect", {
                        x: "7",
                        y: "14",
                        width: "2",
                        height: "4",
                        rx: "1",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("rect", {
                        x: "11",
                        y: "10",
                        width: "2",
                        height: "8",
                        rx: "1",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("rect", {
                        x: "15",
                        y: "7",
                        width: "2",
                        height: "11",
                        rx: "1",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("circle", {
                        cx: "18",
                        cy: "6",
                        r: "3",
                        stroke: "url(#grad1)",
                        "stroke-width": "2",
                        fill: "white"
                    }), (0, l.jsx)("path", {
                        d: "M20 8L22 10",
                        stroke: "url(#grad1)",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    })]
                }),
                ib = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 2.5L13.5 4.5L16 4L17 6.5L19.5 7.5L19 10L21.5 12L19 14L19.5 16.5L17 17.5L16 20L13.5 19.5L12 21.5L10.5 19.5L8 20L7 17.5L4.5 16.5L5 14L2.5 12L5 10L4.5 7.5L7 6.5L8 4L10.5 4.5L12 2.5Z",
                        stroke: "#1976D2",
                        "stroke-width": "2",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("path", {
                        d: "M9 15L12 12M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 10.55 10.45 11 11 11",
                        stroke: "#1976D2",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })]
                }),
                ig = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "3",
                        y: "3",
                        width: "18",
                        height: "18",
                        rx: "3",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2"
                    }), (0, l.jsx)("circle", {
                        cx: "12",
                        cy: "9",
                        r: "2.3",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("rect", {
                        x: "7.5",
                        y: "12.2",
                        width: "9",
                        height: "5",
                        rx: "2.5",
                        fill: "url(#grad1)"
                    })]
                }),
                iy = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00c6ff"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0072ff"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "3",
                        y: "3",
                        width: "18",
                        height: "18",
                        rx: "3",
                        fill: "none",
                        stroke: "url(#grad1)",
                        "stroke-width": "2"
                    }), (0, l.jsx)("path", {
                        d: "M8 7H12V17H8C7.45 17 7 16.55 7 16V8C7 7.45 7.45 7 8 7Z",
                        fill: "url(#grad1)"
                    }), (0, l.jsx)("path", {
                        d: "M12 7H16C16.55 7 17 7.45 17 8V16C17 16.55 16.55 17 16 17H12V7Z",
                        fill: "white",
                        stroke: "url(#grad1)",
                        "stroke-width": "1.5"
                    }), (0, l.jsx)("line", {
                        x1: "12",
                        y1: "7",
                        x2: "12",
                        y2: "17",
                        stroke: "url(#grad1)",
                        "stroke-width": "1.5"
                    }), (0, l.jsx)("path", {
                        d: "M14 7V11L15 10.2L16 11V7H14Z",
                        fill: "url(#grad1)"
                    })]
                }),
                iN = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "blueGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                "stop-color": "#00B4DB"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                "stop-color": "#0083B0"
                            })]
                        })
                    }), (0, l.jsx)("rect", {
                        x: "3",
                        y: "4",
                        width: "18",
                        height: "14",
                        rx: "2",
                        ry: "2",
                        fill: "none",
                        stroke: "url(#blueGrad)",
                        "stroke-width": "2"
                    }), (0, l.jsx)("polyline", {
                        points: "5,14 8,10 11,12 14,7 17,9 20,6",
                        fill: "none",
                        stroke: "url(#blueGrad)",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("circle", {
                        cx: "19",
                        cy: "16.5",
                        r: "2.5",
                        fill: "url(#blueGrad)"
                    })]
                }),
                iC = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M4 5C4 4.447 4.447 4 5 4H15C16.105 4 17 4.895 17 6V20C17 20.553 16.553 21 16 21H6C4.895 21 4 20.105 4 19V5Z",
                        stroke: "#007BFF",
                        "stroke-width": "2",
                        fill: "none",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("path", {
                        d: "M17 6H19C20.105 6 21 6.895 21 8V20C21 20.553 20.553 21 20 21H17",
                        stroke: "#007BFF",
                        "stroke-width": "2",
                        fill: "none",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("circle", {
                        cx: "10",
                        cy: "12",
                        r: "3",
                        fill: "#007BFF"
                    }), (0, l.jsx)("polygon", {
                        points: "9,10.5 12,12 9,13.5",
                        fill: "white"
                    })]
                }),
                iw = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, l.jsx)("path", {
                        d: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z",
                        fill: "#FF0000"
                    }), (0, l.jsx)("path", {
                        d: "M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
                        fill: "#fff"
                    })]
                }),
                ik = () => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, l.jsx)("rect", {
                        x: "2",
                        y: "2",
                        width: "20",
                        height: "20",
                        rx: "5",
                        stroke: "#E1306C",
                        strokeWidth: "2",
                        fill: "none"
                    }), (0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "5",
                        stroke: "#E1306C",
                        strokeWidth: "2",
                        fill: "none"
                    }), (0, l.jsx)("circle", {
                        cx: "18",
                        cy: "6",
                        r: "1",
                        fill: "#E1306C"
                    })]
                }),
                iT = () => (0, l.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, l.jsx)("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                        fill: "#25D366"
                    })
                }),
                iE = () => (0, l.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, l.jsx)("path", {
                        d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
                        fill: "#000000"
                    })
                }),
                iS = () => (0, l.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, l.jsx)("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-12S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.69 1.03-.58.05-1-.39-1.56-.76-.86-.56-1.35-.91-2.19-1.46-.96-.63-.34-1.01.21-1.59.14-.14 2.65-2.43 2.7-2.64.01-.04.01-.19-.06-.27-.07-.08-.17-.05-.25-.03-.1.03-1.79 1.12-5.06 3.3-.48.33-.92.5-1.4.49-.46-.02-1.36-.26-2.03-.48-.82-.27-1.48-.41-1.42-.87.03-.24.33-.5.91-.72 4.91-2.07 7.31-3.08 8.26-3.45 3.8-1.51 4.59-1.77 5.11-1.77.12 0 .38.03.55.18.13.12.16.28.15.4-.04.4-.52 4.69-.75 6.37z",
                        fill: "#0088CC"
                    })
                }),
                iI = {
                    color: "#000000 !important",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                },
                iA = (0, r.Pi)(() => {
                    let {
                        connectionStatus: e
                    } = (0, m.T)(), {
                        dashboard: t,
                        load_modal: s,
                        run_panel: n,
                        summary_card: a
                    } = (0, p.oR)(), {
                        active_tab: r,
                        is_chart_modal_visible: o,
                        is_trading_view_modal_visible: d,
                        setActiveTab: c
                    } = t, {
                        onEntered: _
                    } = s, {
                        is_dialog_open: u,
                        dialog_options: x,
                        onCancelButtonClick: h,
                        onCloseDialog: j,
                        onOkButtonClick: v,
                        stopBot: b,
                        is_drawer_open: g
                    } = n, {
                        cancel_button_text: N,
                        ok_button_text: C,
                        title: w,
                        message: k
                    } = x, {
                        clear: T
                    } = a, {
                        isDesktop: E,
                        isMobile: S
                    } = (0, f.F)(), [I, A] = (0, i.useState)([]), [R, L] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        e !== sT.cR.OPENED && null !== document.getElementById("db-animation__stop-button") && (T(), b(), Z.api_base.setIsRunning(!1))
                    }, [T, e, b]), (0, i.useEffect)(() => {
                        (async () => {
                            let e = ["Under_Destroyer v2.xml", "Osam_Digit_Switcher\uD83E\uDD16\uD83E\uDD16.xml", "Under-Destroyer\uD83D\uDC80.xml", "Over-Destroyer\uD83D\uDC80.xml", "Over-Pro Bot\uD83D\uDCAB.xml", "Under-Pro Bot\uD83D\uDCAB.xml", "the Astro E_O\uD83E\uDD16.xml", "Mega_Mind V1\uD83D\uDC7B.xml", "Osam.HnR.xml", "Auto Bot by Osam\uD83D\uDCAF.xml", "DEC_entry_Point.xml", "Over_HitnRun\uD83E\uDD16.xml", "EVEN_ODD MYTH V1.xml", "EVEN_MYTH V2.0 .xml", "ODD_MYTH V3.0.xml", "Under 8 pro bot\uD83D\uDCAF.xml"].map(async e => {
                                try {
                                    var t;
                                    let s = await fetch(e);
                                    if (!s.ok) throw Error(`Failed to fetch ${e}: ${s.statusText}`);
                                    let n = await s.text(),
                                        a = new DOMParser().parseFromString(n, "application/xml");
                                    return {
                                        title: e.split("/").pop(),
                                        image: (null === (t = a.getElementsByTagName("image")[0]) || void 0 === t ? void 0 : t.textContent) || "default_image_path",
                                        filePath: e,
                                        xmlContent: n
                                    }
                                } catch (e) {
                                    return console.error(e), null
                                }
                            });
                            A((await Promise.all(e)).filter(Boolean))
                        })()
                    }, []);
                    let M = e => e.replace(/\.xml$/, ""),
                        O = (0, i.useCallback)(e => c(e), [c]),
                        U = (0, i.useCallback)(async e => {
                            c(sd.ve.BOT_BUILDER);
                            try {
                                "function" == typeof s.loadFileFromContent ? await s.loadFileFromContent(e.xmlContent) : console.error("loadFileFromContent is not defined on load_modal"), (0, Z.updateWorkspaceName)(e.xmlContent)
                            } catch (e) {
                                console.error("Error loading bot file:", e)
                            }
                        }, [c, s, Z.updateWorkspaceName]),
                        F = (0, i.useCallback)(async () => {
                            await s.loadFileFromRecent(), c(sd.ve.BOT_BUILDER)
                        }, [s, c]),
                        z = [1, 2, 3, 4].includes(r),
                        B = {
                            width: "100%",
                            height: S ? "calc(100vh - 54px)" : "calc(100vh - 60px)",
                            minHeight: S ? "calc(100vh - 54px)" : "calc(100vh - 60px)",
                            maxHeight: "100vh",
                            overflowY: "auto",
                            overflowX: "hidden",
                            background: "#f0fdf4"
                        };
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "main",
                            children: (0, l.jsx)("div", {
                                className: "main__container",
                                children: (0, l.jsxs)(ly.Z, {
                                    active_index: r,
                                    className: "main__tabs",
                                    onTabItemChange: _,
                                    onTabItemClick: O,
                                    top: !0,
                                    children: [(0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(ih, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Free Bots"
                                            })]
                                        }),
                                        id: "id-free-bots",
                                        children: (0, l.jsxs)("div", {
                                            className: "free-bots",
                                            children: [(0, l.jsxs)("div", {
                                                className: "social-media-container",
                                                children: [(0, l.jsx)("a", {
                                                    href: "https://youtube.com/@osamtradinghub-cl1fs?si=JSF3lDV1TBzjUTTb",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "social-icon youtube-icon",
                                                    children: (0, l.jsx)(iw, {})
                                                }), (0, l.jsx)("a", {
                                                    href: "https://www.instagram.com/osamtradinghub.com1?igsh=Mmh2aW43a3dpamRq",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "social-icon instagram-icon",
                                                    children: (0, l.jsx)(ik, {})
                                                }), (0, l.jsx)("a", {
                                                    href: "https://chat.whatsapp.com/E2cZOyZr75VExcbkprwuTe?mode=ems_copy_t",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "social-icon whatsapp-icon",
                                                    children: (0, l.jsx)(iT, {})
                                                }), (0, l.jsx)("a", {
                                                    href: "https://www.tiktok.com/@_its_osam?_t=ZM-8yu0PcOKRHR&_r=1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "social-icon tiktok-icon",
                                                    children: (0, l.jsx)(iE, {})
                                                }), (0, l.jsx)("a", {
                                                    href: "https://t.me/+dLoQvTnT_2wzOGY0",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "social-icon telegram-icon",
                                                    children: (0, l.jsx)(iS, {})
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "free-bots__content-wrapper",
                                                children: (0, l.jsx)("div", {
                                                    className: "free-bots__content",
                                                    children: I.map((e, t) => (0, l.jsxs)("div", {
                                                        className: "free-bot-item",
                                                        style: {
                                                            animationDelay: `${.1*t}s`
                                                        },
                                                        children: [(0, l.jsx)("div", {
                                                            className: "gradient-border"
                                                        }), (0, l.jsxs)("div", {
                                                            className: "bot-info",
                                                            children: [(0, l.jsx)("div", {
                                                                className: "bot-icon-container",
                                                                children: (0, l.jsx)(ih, {})
                                                            }), (0, l.jsxs)("div", {
                                                                className: "bot-details",
                                                                children: [(0, l.jsx)("h3", {
                                                                    className: "bot-title",
                                                                    children: M(e.title)
                                                                }), (0, l.jsx)("p", {
                                                                    className: "bot-status",
                                                                    children: "Ready to deploy • Click to load"
                                                                })]
                                                            })]
                                                        }), (0, l.jsx)("button", {
                                                            onClick: () => U(e),
                                                            className: "load-bot-button",
                                                            children: "Load Bot"
                                                        })]
                                                    }, t))
                                                })
                                            })]
                                        })
                                    }), (0, l.jsxs)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(im, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Bot Settings"
                                            })]
                                        }),
                                        id: "id-bot-settings",
                                        children: [(0, l.jsx)(io, {
                                            handleTabChange: O
                                        }), (0, l.jsx)("button", {
                                            onClick: F,
                                            children: "Load Bot"
                                        })]
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(ip, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Charts"
                                            })]
                                        }),
                                        id: "id-charts",
                                        children: (0, l.jsx)(i.Suspense, {
                                            fallback: (0, l.jsx)(lg.Z, {
                                                message: (0, y.NC)("Please wait, loading chart...")
                                            }),
                                            children: (0, l.jsx)(ic, {
                                                show_digits_stats: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(ij, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Dcircles"
                                            })]
                                        }),
                                        id: "id-dcircles",
                                        children: (0, l.jsx)(i.Suspense, {
                                            fallback: (0, l.jsx)(lg.Z, {
                                                message: (0, y.NC)("Please wait, loading Dcircles...")
                                            }),
                                            children: (0, l.jsx)("div", {
                                                style: B,
                                                children: (0, l.jsx)(ix, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(iv, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Analysis"
                                            })]
                                        }),
                                        id: "id-analysis",
                                        children: (0, l.jsx)("div", {
                                            style: B,
                                            children: (0, l.jsx)("iframe", {
                                                src: "https://mesoflxadvanced.netlify.app/",
                                                width: "100%",
                                                height: "100%",
                                                title: "Analysis",
                                                style: {
                                                    border: "none",
                                                    display: "block",
                                                    background: "#f0f9ff"
                                                },
                                                scrolling: "yes"
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(ib, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Tools"
                                            })]
                                        }),
                                        id: "id-tools",
                                        children: (0, l.jsx)("div", {
                                            style: B,
                                            children: (0, l.jsx)("iframe", {
                                                src: "https://alltools-ten.vercel.app/",
                                                width: "100%",
                                                height: "100%",
                                                title: "Tools",
                                                style: {
                                                    border: "none",
                                                    display: "block",
                                                    background: "#f0fdf4"
                                                },
                                                scrolling: "yes"
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(ig, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Copytrading"
                                            })]
                                        }),
                                        id: "id-copytrading",
                                        children: (0, l.jsx)(i.Suspense, {
                                            fallback: (0, l.jsx)(lg.Z, {
                                                message: (0, y.NC)("Please wait, loading copytrading...")
                                            }),
                                            children: (0, l.jsx)(iu, {})
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(iy, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Strategy"
                                            })]
                                        }),
                                        id: "id-strategy",
                                        children: (0, l.jsx)("div", {
                                            style: B,
                                            children: (0, l.jsx)("iframe", {
                                                src: "https://mesoflixstrategies.netlify.app/",
                                                width: "100%",
                                                height: "100%",
                                                title: "Strategy",
                                                style: {
                                                    border: "none",
                                                    display: "block",
                                                    background: "#f0f9ff"
                                                },
                                                scrolling: "yes"
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(iN, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Signals"
                                            })]
                                        }),
                                        id: "id-signals",
                                        children: (0, l.jsx)("div", {
                                            className: D()("dashboard__chart-wrapper", {
                                                "dashboard__chart-wrapper--expanded": g && E,
                                                "dashboard__chart-wrapper--modal": o && E
                                            }),
                                            style: B,
                                            children: (0, l.jsx)("iframe", {
                                                src: "signals",
                                                width: "100%",
                                                height: "100%",
                                                style: {
                                                    border: "none",
                                                    display: "block",
                                                    background: "#f0fdf4"
                                                },
                                                scrolling: "yes"
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)("span", {
                                            style: iI,
                                            children: [(0, l.jsx)(iC, {}), (0, l.jsx)(y.Xx, {
                                                i18n_default_text: "Tutorials"
                                            })]
                                        }),
                                        id: "id-tutorials",
                                        children: (0, l.jsx)(i.Suspense, {
                                            fallback: (0, l.jsx)(lg.Z, {
                                                message: (0, y.NC)("Please wait, loading tutorials...")
                                            }),
                                            children: (0, l.jsx)(i_, {
                                                handleTabChange: O
                                            })
                                        })
                                    })]
                                })
                            })
                        }), (0, l.jsxs)("button", {
                            onClick: () => L(!0),
                            className: "risk-disclaimer-button",
                            style: {
                                position: "fixed",
                                bottom: "20px",
                                right: "20px",
                                background: "linear-gradient(135deg, #F59E0B, #EF4444)",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                padding: "8px 16px",
                                fontSize: "12px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                zIndex: 1e3,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px"
                            },
                            onMouseOver: e => {
                                e.currentTarget.style.transform = "scale(1.05)", e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)"
                            },
                            onMouseOut: e => {
                                e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"
                            },
                            children: [(0, l.jsx)("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: (0, l.jsx)("path", {
                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                })
                            }), "Disclaimer"]
                        }), R && (0, l.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1001
                            },
                            children: (0, l.jsxs)("div", {
                                style: {
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    padding: "24px",
                                    maxWidth: "600px",
                                    width: "90%",
                                    maxHeight: "80vh",
                                    overflowY: "auto",
                                    position: "relative",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                },
                                children: [(0, l.jsx)("button", {
                                    onClick: () => L(!1),
                                    style: {
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        background: "none",
                                        border: "none",
                                        fontSize: "20px",
                                        cursor: "pointer",
                                        color: "#6B7280"
                                    },
                                    children: "\xd7"
                                }), (0, l.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "16px"
                                    },
                                    children: [(0, l.jsx)("div", {
                                        style: {
                                            background: "#FEE2E2",
                                            borderRadius: "50%",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: (0, l.jsx)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#EF4444",
                                            strokeWidth: "2",
                                            children: (0, l.jsx)("path", {
                                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            })
                                        })
                                    }), (0, l.jsx)("h3", {
                                        style: {
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            color: "#1F2937",
                                            margin: 0
                                        },
                                        children: "Deriv Trading Risk Disclaimer"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: [(0, l.jsx)("p", {
                                        style: {
                                            lineHeight: "1.6",
                                            color: "#4B5563",
                                            marginBottom: "12px"
                                        },
                                        children: "Trading multipliers and other derivative products on Deriv involves significant risk of loss and is not suitable for all investors. Before deciding to trade, carefully consider your financial situation and experience level."
                                    }), (0, l.jsx)("h4", {
                                        style: {
                                            color: "#1F2937",
                                            margin: "12px 0 8px 0"
                                        },
                                        children: "Key Risks:"
                                    }), (0, l.jsxs)("ul", {
                                        style: {
                                            paddingLeft: "20px",
                                            lineHeight: "1.6",
                                            color: "#4B5563",
                                            marginBottom: "16px"
                                        },
                                        children: [(0, l.jsxs)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: [(0, l.jsx)("strong", {
                                                children: "Leverage Risk:"
                                            }), " Deriv's multiplier products allow you to multiply potential gains, but also magnify potential losses."]
                                        }), (0, l.jsxs)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: [(0, l.jsx)("strong", {
                                                children: "Market Risk:"
                                            }), " Financial markets are volatile and can move rapidly in unexpected directions."]
                                        }), (0, l.jsxs)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: [(0, l.jsx)("strong", {
                                                children: "Liquidity Risk:"
                                            }), " Some markets may become illiquid, making it difficult to close positions."]
                                        }), (0, l.jsxs)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: [(0, l.jsx)("strong", {
                                                children: "Technical Risk:"
                                            }), " System failures, internet connectivity issues, or other technical problems may prevent order execution."]
                                        }), (0, l.jsxs)("li", {
                                            children: [(0, l.jsx)("strong", {
                                                children: "Regulatory Risk:"
                                            }), " Deriv operates under different regulatory frameworks which may affect your rights as a trader."]
                                        })]
                                    }), (0, l.jsx)("h4", {
                                        style: {
                                            color: "#1F2937",
                                            margin: "12px 0 8px 0"
                                        },
                                        children: "Important Considerations:"
                                    }), (0, l.jsxs)("ul", {
                                        style: {
                                            paddingLeft: "20px",
                                            lineHeight: "1.6",
                                            color: "#4B5563"
                                        },
                                        children: [(0, l.jsx)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "You could lose some or all of your invested capital."
                                        }), (0, l.jsx)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Never trade with money you cannot afford to lose."
                                        }), (0, l.jsx)("li", {
                                            style: {
                                                marginBottom: "8px"
                                            },
                                            children: "Past performance is not indicative of future results."
                                        }), (0, l.jsx)("li", {
                                            children: "Seek independent financial advice if you have any doubts about your understanding of these risks."
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    style: {
                                        backgroundColor: "#F3F4F6",
                                        padding: "12px",
                                        borderRadius: "8px",
                                        marginBottom: "16px"
                                    },
                                    children: (0, l.jsx)("p", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#6B7280",
                                            fontStyle: "italic",
                                            margin: 0,
                                            lineHeight: "1.5"
                                        },
                                        children: "By continuing to use this platform, you acknowledge that you have read, understood, and accept these risks associated with trading on Deriv."
                                    })
                                }), (0, l.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    },
                                    children: (0, l.jsx)("button", {
                                        onClick: () => L(!1),
                                        style: {
                                            background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "8px",
                                            padding: "10px 20px",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                        },
                                        children: "I Understand the Risks"
                                    })
                                })]
                            })
                        }), (0, l.jsxs)(te.Z, {
                            children: [(0, l.jsxs)("div", {
                                className: "main__run-strategy-wrapper",
                                children: [(0, l.jsx)(id, {}), z && (0, l.jsx)(sj, {})]
                            }), (0, l.jsx)(lk, {}), (0, l.jsx)(lN, {})]
                        }), (0, l.jsx)(eG.Z, {
                            children: (0, l.jsx)(sj, {})
                        }), (0, l.jsx)(sz.Z, {
                            cancel_button_text: N || (0, y.NC)("Cancel"),
                            confirm_button_text: C || (0, y.NC)("Ok"),
                            has_close_icon: !0,
                            is_visible: u,
                            onCancel: h,
                            onClose: j,
                            onConfirm: v || j,
                            title: w,
                            children: k
                        })]
                    })
                });
            s("51156");
            let iR = () => {
                    let [e, t] = i.useState("");
                    return (0, i.useEffect)(() => {
                        let e = 0,
                            s = setInterval(() => {
                                t(e => e.length < 3 ? e + "." : ""), ++e > 15 && clearInterval(s)
                            }, 120);
                        return () => clearInterval(s)
                    }, []), (0, l.jsxs)("div", {
                        className: "loading-dots-content",
                        children: [(0, l.jsx)("div", {
                            className: "loading-dots-spinner"
                        }), (0, l.jsxs)("div", {
                            className: "loading-dots-text",
                            children: ["Loading", (0, l.jsx)("span", {
                                children: e
                            })]
                        })]
                    })
                },
                iL = (0, r.Pi)(() => {
                    var e, t, n, a, r;
                    let [d, c] = i.useState(!1), [_, h] = i.useState(!0), j = (0, p.oR)(), {
                        app: v,
                        transactions: b,
                        common: g,
                        client: y
                    } = j, {
                        showDigitalOptionsMaltainvestError: f
                    } = v, {
                        is_dark_mode_on: N
                    } = (0, sS.Z)(), {
                        recovered_transactions: w,
                        recoverPendingContracts: k
                    } = b, T = i.useRef(!1), E = i.useRef(null), {
                        connectionStatus: S
                    } = (0, m.T)(), {
                        initTrackJS: I
                    } = sR();
                    I(y.loginid), u({
                        is_client_store_initialized: (null == y ? void 0 : y.is_logged_in) ? !!(null == y ? void 0 : null === (e = y.account_settings) || void 0 === e ? void 0 : e.email) : !!y,
                        is_logged_in: null == y ? void 0 : y.is_logged_in,
                        loginid: null == y ? void 0 : y.loginid,
                        landing_company_shortcode: null == y ? void 0 : y.landing_company_shortcode,
                        currency: null == y ? void 0 : y.currency,
                        residence: null == y ? void 0 : y.residence,
                        email: null == y ? void 0 : null === (t = y.account_settings) || void 0 === t ? void 0 : t.email,
                        first_name: null == y ? void 0 : null === (n = y.account_settings) || void 0 === n ? void 0 : n.first_name,
                        last_name: null == y ? void 0 : null === (a = y.account_settings) || void 0 === a ? void 0 : a.last_name
                    });
                    let A = (0, sk.PO)() ? ? null;
                    (0, sE.ZP)(A), (0, i.useEffect)(() => {
                        S === sT.cR.OPENED ? (c(!0), g.setSocketOpened(!0)) : S !== sT.cR.OPENED && g.setSocketOpened(!1)
                    }, [g, S]);
                    let {
                        current_language: R
                    } = g, L = document.documentElement;
                    i.useEffect(() => {
                        null == L || L.setAttribute("lang", R.toLowerCase()), null == L || L.setAttribute("dir", "ar" === R.toLowerCase() ? "rtl" : "ltr")
                    }, [R, L]);
                    let M = i.useCallback(e => {
                        let {
                            data: t
                        } = e;
                        if ((null == t ? void 0 : t.msg_type) === "proposal_open_contract" && !(null == t ? void 0 : t.error)) {
                            let {
                                proposal_open_contract: e
                            } = t;
                            (null == e ? void 0 : e.status) !== "open" && !(null == w ? void 0 : w.includes(null == e ? void 0 : e.contract_id)) && k(e)
                        }
                    }, [w, k]);
                    i.useEffect(() => {
                        (0, sD.setSmartChartsPublicPath)((0, x.MT8)("/js/smartcharts/"))
                    }, []), i.useEffect(() => {
                        if (!T.current && y.is_logged_in && d && (null === Z.api_base || void 0 === Z.api_base ? void 0 : Z.api_base.api)) {
                            var e;
                            T.current = !0, E.current = null === (e = Z.api_base.api.onMessage()) || void 0 === e ? void 0 : e.subscribe(M)
                        }
                        return () => {
                            if (T.current && E.current) {
                                var e, t;
                                T.current = !1, null === (e = (t = E.current).unsubscribe) || void 0 === e || e.call(t)
                            }
                        }
                    }, [d, y.is_logged_in, y.loginid, M, S]), i.useEffect(() => {
                        f(y, g)
                    }, [y.is_options_blocked, null === (r = y.account_settings) || void 0 === r ? void 0 : r.country_code, y.clients_country]);
                    let O = () => {
                            Z.ServerTime.init(g), v.setDBotEngineStores(), Z.ApiHelpers.setInstance(v.api_helpers_store), Promise.resolve().then(s.bind(s, 18908)).then(e => {
                                let {
                                    default: t
                                } = e;
                                t.init(j)
                            })
                        },
                        D = () => {
                            var e;
                            O();
                            let t = () => {
                                let {
                                    active_symbols: e
                                } = Z.ApiHelpers.instance;
                                e.retrieveActiveSymbols(!0).then(() => {
                                    h(!1)
                                })
                            };
                            if (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : null === (e = Z.ApiHelpers.instance) || void 0 === e ? void 0 : e.active_symbols) t();
                            else {
                                let e = setInterval(() => {
                                    var s;
                                    (null === Z.ApiHelpers || void 0 === Z.ApiHelpers ? void 0 : null === (s = Z.ApiHelpers.instance) || void 0 === s ? void 0 : s.active_symbols) && (clearInterval(e), t())
                                }, 500)
                            }
                        };
                    return (i.useEffect(() => {
                        d && (O(), h(!0), !y.is_logged_in && D())
                    }, [d]), i.useEffect(() => {
                        y.is_logged_in && y.is_landing_company_loaded && d && D()
                    }, [y.is_landing_company_loaded, d, y.loginid]), (0, i.useEffect)(() => {
                        sL(!0), y && sO(y)
                    }, []), null == g ? void 0 : g.error) ? null : _ ? (0, l.jsx)(iR, {}) : (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)(sU.f, {
                            theme: N ? "dark" : "light",
                            children: [(0, l.jsx)(sZ, {}), (0, l.jsxs)("div", {
                                className: "bot-dashboard bot",
                                "data-testid": "dt_bot_dashboard",
                                children: [(0, l.jsx)(sF, {}), (0, l.jsx)(iA, {}), (0, l.jsx)(lb, {}), (0, l.jsx)(sB, {}), (0, l.jsx)(sw, {}), (0, l.jsx)(o.Ix, {
                                    limit: 3,
                                    draggable: !1
                                }), (0, l.jsx)(C, {})]
                            })]
                        })
                    })
                })
        },
        45927: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = s(85893),
                a = s(63387),
                l = s.n(a);
            let i = e => {
                let {
                    message: t,
                    className: s,
                    type: a
                } = e;
                return (0, n.jsx)("div", {
                    className: l()("dc-field", s, {
                        "dc-field--error": "error" === a,
                        "dc-field--warn": "warn" === a
                    }),
                    children: t
                })
            }
        },
        30394: function(e, t, s) {
            s.d(t, {
                Z: () => h
            });
            var n = s("85893"),
                a = s("67294"),
                l = s("63387"),
                i = s.n(l),
                r = s("82106"),
                o = s("86278"),
                d = s("14244"),
                c = s("26088"),
                _ = s("92868"),
                u = s("2502"),
                x = s("45452");
            let h = e => {
                let {
                    alignment: t,
                    children: s,
                    className: l,
                    classNameBubble: h,
                    classNameTarget: m,
                    classNameTargetIcon: p,
                    counter: j,
                    disable_message_icon: v,
                    disable_target_icon: b,
                    has_error: g,
                    icon: y,
                    id: f,
                    is_open: N,
                    is_bubble_hover_enabled: C,
                    margin: w = 0,
                    message: k,
                    onBubbleClose: T,
                    onBubbleOpen: E,
                    onClick: S = () => void 0,
                    relative_render: I = !1,
                    should_disable_pointer_events: A = !1,
                    should_show_cursor: R,
                    zIndex: L = "1",
                    data_testid: M,
                    arrow_styles: O
                } = e, D = a.useRef(), [U, F] = a.useState(void 0), [Z, z] = a.useState(!1), {
                    isDesktop: B
                } = (0, u.F)(), [P, X] = (0, o.X)(null, !0), [H, $] = (0, o.m)(), V = a.useMemo(() => !B && void 0 === N, [B, N]);
                a.useEffect(() => {
                    D.current && F(D.current)
                }, [g]), a.useEffect(() => {
                    !X && V && z(!1)
                }, [X, V]);
                let G = () => {
                        E && E()
                    },
                    q = () => {
                        T && T()
                    },
                    Y = i()(p, y),
                    W = X && k && (!V || Z);
                return (0, n.jsxs)("div", {
                    ref: P,
                    className: i()({
                        "dc-popover__wrapper": I
                    }),
                    onClick: e => {
                        S(e), V && z(!Z)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [I && (0, n.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: L
                        },
                        children: (0, n.jsx)("div", {
                            ref: D,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (U || !I) && (0, n.jsx)(r.Popover, {
                        isOpen: N ? ? (W || C && $),
                        positions: [t],
                        padding: w + 8,
                        containerClassName: i()({
                            "react-tiny-popover-container--disabled-pointer-event": A,
                            "react-tiny-popover-cursor-option": R
                        }),
                        ...I ? {
                            parentElement: U,
                            contentLocation: e => {
                                let {
                                    childRect: s,
                                    popoverRect: n,
                                    nudgedLeft: a
                                } = e, l = document.body.clientWidth, i = s.right + (n.width - s.width / 2), r = 0, o = 0;
                                switch (t) {
                                    case "left":
                                        o = -1 * Math.abs((n.height > n.width ? a : n.width) + w), r = s.height > n.height ? (s.height - n.height) / 2 : -((n.height - s.height) / 2 * 1);
                                        break;
                                    case "right":
                                        o = n.width + w, r = s.height > n.height ? (s.height - n.height) / 2 : -((n.height - s.height) / 2 * 1);
                                        break;
                                    case "top":
                                        o = i > l ? -1 * Math.abs(i - l) : 0, r = -1 * Math.abs(n.height + w);
                                        break;
                                    case "bottom":
                                        o = i > l ? -1 * Math.abs(i - l) : 0, r = s.height + w
                                }
                                return {
                                    top: r,
                                    left: o
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: L
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: s,
                                popoverRect: a
                            } = e;
                            return (0, n.jsx)(r.ArrowContainer, {
                                position: t,
                                childRect: s,
                                popoverRect: a,
                                arrowColor: g ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: I ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${g?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...O
                                },
                                children: (0, n.jsxs)("div", {
                                    id: f,
                                    onMouseEnter: G,
                                    onMouseLeave: q,
                                    className: i()(h, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": g
                                    }),
                                    ref: H,
                                    children: [!v && "info" === y && (0, n.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, n.jsx)(d.Z, {})
                                    }), g && (0, n.jsx)(x.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: k
                                    }) || (0, n.jsx)(x.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: k
                                    })]
                                })
                            })
                        },
                        children: (0, n.jsx)("div", {
                            "data-testid": M,
                            className: i()("dc-popover", l),
                            id: f,
                            children: (0, n.jsxs)("div", {
                                className: i()(m, "dc-popover__target"),
                                children: [!b && (0, n.jsxs)("i", {
                                    className: k ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === y && (0, n.jsx)(d.Z, {
                                        className: Y
                                    }), "question" === y && (0, n.jsx)(_.Z, {
                                        className: Y
                                    }), "dot" === y && (0, n.jsx)(c.Z, {
                                        className: Y
                                    }), "counter" === y && (0, n.jsx)("span", {
                                        className: Y,
                                        children: j
                                    })]
                                }), s]
                            })
                        })
                    })]
                })
            }
        },
        62873: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = s(46883);
            s(56803);
            let a = n.Z
        },
        46883: function(e, t, s) {
            s.d(t, {
                Z: () => u
            });
            var n = s("85893"),
                a = s("67294"),
                l = s("63387"),
                i = s.n(l);
            let r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => void 0,
                    t = a.useRef(!1);
                !t.current && (e(), t.current = !0)
            };
            var o = s("40150"),
                d = s("89606");
            let c = e => {
                    let {
                        className: t,
                        count: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: i()("dc-counter", t),
                        children: s
                    })
                },
                _ = e => {
                    let {
                        active_icon_color: t = "",
                        active_tab_ref: s,
                        bottom: l = !1,
                        className: r = "",
                        count: o,
                        header_content: _,
                        header_fit_content: u = !1,
                        icon_color: x = "",
                        icon_size: h = 0,
                        icon: m,
                        id: p = "",
                        is_active: j,
                        is_label_hidden: v,
                        is_scrollable: b,
                        label: g,
                        onClick: y,
                        setActiveLineStyle: f,
                        top: N
                    } = e;
                    a.useEffect(() => {
                        f()
                    }, [o, g, _, f]);
                    let C = i()("dc-tabs__item", {
                            "dc-tabs__active": j,
                            [`dc-tabs__active--${r}`]: r && j,
                            "dc-tabs__item--top": N,
                            "dc-tabs__item--bottom": l,
                            "dc-tabs__item--header-fit-content": u,
                            "dc-tabs__item--is-hidden": v,
                            [`dc-tabs__item--${r}`]: r,
                            "dc-tabs__item--is-scrollable-and-active": b && j
                        }),
                        w = j ? t : x;
                    return (0, n.jsxs)("li", {
                        id: p,
                        className: C,
                        style: {
                            color: w
                        },
                        onClick: y,
                        ref: s,
                        children: [m && (0, n.jsx)(d.J, {
                            icon: m,
                            size: h,
                            custom_color: w,
                            className: "dc-tabs__item__icon"
                        }), _ || g, !!o && (0, n.jsx)(c, {
                            className: "dc-tabs__item__counter",
                            count: o
                        })]
                    })
                };
            s("56803");
            let u = e => {
                let t, {
                        active_icon_color: s = "",
                        active_index: l = 0,
                        background_color: d = "",
                        bottom: c = !1,
                        center: u = !1,
                        children: x,
                        className: h = "",
                        fit_content: m = !1,
                        has_active_line: p = !0,
                        has_bottom_line: j = !0,
                        header_fit_content: v = !1,
                        history: b,
                        icon_color: g = "",
                        icon_size: y = 0,
                        is_100vw: f = !1,
                        is_full_width: N = !1,
                        is_overflow_hidden: C = !1,
                        is_scrollable: w = !1,
                        onTabItemClick: k,
                        should_update_hash: T = !1,
                        single_tab_has_no_label: E = !1,
                        top: S
                    } = e,
                    [I, A] = a.useState({}),
                    R = a.useRef(null),
                    L = a.useRef(null),
                    M = e => {
                        b.replace(`${b.location.pathname}${window.location.search}#${e}`)
                    },
                    O = a.useCallback(() => {
                        var e, t;
                        let s = null == L ? void 0 : null === (e = L.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                            n = null == R ? void 0 : null === (t = R.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        s && n ? A({
                            left: n.left - s.left,
                            width: n.width
                        }) : setTimeout(() => {
                            O()
                        }, 500)
                    }, []),
                    D = 0;
                r(() => {
                    if (D = l, T) {
                        let t = location.hash.slice(1),
                            s = x.findIndex(e => e && e.props && e.props.hash === t);
                        if (s > -1) D = s;
                        else {
                            var e;
                            let t = null === (e = x[D]) || void 0 === e ? void 0 : e.props,
                                s = t && t.hash;
                            s && M(s)
                        }
                    }
                    O()
                });
                let [U, F] = a.useState(D);
                a.useEffect(() => {
                    U >= 0 && l !== U && (null == k || k(U)), O()
                }, [U, O]), a.useEffect(() => {
                    l >= 0 && l !== U && F(l)
                }, [l]);
                let Z = e => {
                        if (T) {
                            var t;
                            M(null === (t = x[e]) || void 0 === t ? void 0 : t.props["data-hash"])
                        }
                        F(e), O()
                    },
                    z = x.filter(e => e);
                return t = w ? "unset" : m ? "150px" : `${(100/z.length).toFixed(2)}%`, (0, n.jsxs)("div", {
                    className: i()("dc-tabs", {
                        [`dc-tabs--${h}`]: h,
                        "dc-tabs--top": S,
                        "dc-tabs--100vw": f
                    }),
                    style: {
                        "--tab-width": `${t}`,
                        background: d
                    },
                    children: [(0, n.jsx)("div", {
                        className: i()({
                            [`dc-tabs__list--header--${h}`]: h
                        }),
                        children: (0, n.jsx)("ul", {
                            className: i()("dc-tabs__list", {
                                "dc-tabs__list--top": S,
                                "dc-tabs__list--border-bottom": j,
                                "dc-tabs__list--bottom": c,
                                "dc-tabs__list--center": u,
                                "dc-tabs__list--header-fit-content": v,
                                "dc-tabs__list--full-width": N,
                                [`dc-tabs__list--${h}`]: h,
                                "dc-tabs__list--overflow-hidden": C
                            }),
                            ref: L,
                            children: (0, n.jsxs)(o.Z, {
                                className: "dc-themed-scrollbars-wrapper",
                                is_only_horizontal: !0,
                                is_scrollbar_hidden: !0,
                                is_bypassed: !w,
                                children: [a.Children.map(x, (e, t) => {
                                    if (!e) return null;
                                    let {
                                        icon: a,
                                        label: l,
                                        id: i
                                    } = e.props, r = e.props["data-header-content"], o = e.props["data-count"];
                                    return (0, n.jsx)(_, {
                                        active_icon_color: s,
                                        className: h,
                                        count: o,
                                        icon: a,
                                        icon_color: g,
                                        icon_size: y,
                                        is_active: t === U,
                                        is_label_hidden: 1 === x.length && E,
                                        label: l,
                                        id: i,
                                        is_scrollable: w,
                                        top: S,
                                        bottom: c,
                                        header_fit_content: v,
                                        active_tab_ref: t === U ? R : null,
                                        header_content: r,
                                        onClick: () => Z(t),
                                        setActiveLineStyle: O
                                    }, l)
                                }), p && !w && (0, n.jsx)("span", {
                                    className: i()("dc-tabs__active-line", {
                                        "dc-tabs__active-line--top": S,
                                        "dc-tabs__active-line--bottom": c,
                                        "dc-tabs__active-line--fit-content": m,
                                        "dc-tabs__active-line--header-fit-content": v,
                                        "dc-tabs__active-line--is-hidden": 1 === x.length && E
                                    }),
                                    style: I
                                })]
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: i()("dc-tabs__content", {
                            [`dc-tabs__content--${h}`]: h
                        }),
                        children: a.Children.map(x, (e, t) => {
                            if (!e) return null;
                            if (t === U) return e.props.children
                        })
                    })]
                })
            }
        },
        75324: function(e, t, s) {
            s.d(t, {
                Lv: function() {
                    return i
                },
                ZP: function() {
                    return r
                }
            });
            var n = s(67294),
                a = s(89471),
                l = s(46543);
            let i = () => {
                    let [e, t] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let e = Date.now(),
                            s = setInterval(() => {
                                "function" == typeof window.Intercom ? (t(!0), clearInterval(s)) : Date.now() - e >= 5e3 && clearInterval(s)
                            }, 100);
                        return () => clearInterval(s)
                    }, []), e
                },
                r = e => {
                    let {
                        featureFlagValue: t
                    } = (0, l.Z)({
                        featureFlag: "enable_intercom_dbot"
                    }), s = (0, a.Gq)(t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null);
                    (0, n.useEffect)(() => {
                        var n;
                        let a;
                        if (!!t && "ready" === s && !!(null === (n = window) || void 0 === n ? void 0 : n.DerivInterCom)) return window.DerivInterCom.initialize({
                            hideLauncher: !0,
                            token: e
                        }), a = setInterval(() => {
                            var e;
                            (null === (e = window) || void 0 === e ? void 0 : e.Intercom) && clearInterval(a)
                        }, 500), () => {
                            clearInterval(a)
                        }
                    }, [t, s, e])
                }
        },
        83257: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = s(67294),
                a = s(83274);
            let l = () => {
                let {
                    ui: e
                } = (0, a.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: s
                } = e;
                return {
                    toggleTheme: (0, n.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: s,
                    setDarkMode: t
                }
            }
        },
        17009: function(e, t, s) {
            s.d(t, {
                Z: () => b
            });
            var n = s("85893"),
                a = s("67294"),
                l = s("96877"),
                i = s("83274"),
                r = s("85414"),
                o = s("2502"),
                d = s("63387"),
                c = s.n(d),
                _ = s("45452"),
                u = s("83533"),
                x = s("19405");
            let h = e => {
                let {
                    content_data: t,
                    expanded: s = !1,
                    test_id: l = "dbot-acc-id",
                    is_cursive: r = !1,
                    no_collapsible: o = !0,
                    has_subtitle: d = !0,
                    font_size: h,
                    ...m
                } = e, [p, j] = (0, a.useState)(s), {
                    quick_strategy: {
                        selected_strategy: v
                    }
                } = (0, i.oR)();
                if (!t) return null;
                let {
                    content: b,
                    header: g
                } = t, {
                    expanded_subtitles_storage: y,
                    setExpandedSubtitlesStorage: f
                } = m, N = `${g}__${v}`.split(" ").join("_").toLocaleLowerCase(), C = !!y && y[N] || p || !d;
                return (0, n.jsxs)("div", {
                    className: "dbot-accordion",
                    children: [d && (0, n.jsxs)("button", {
                        className: c()("dbot-accordion__navbar", {
                            "dbot-accordion__navbar--no-event": !o
                        }),
                        "data-testid": l,
                        onClick: e => {
                            e.preventDefault(), j(!C), y && f && f({ ...y,
                                [N]: !C
                            })
                        },
                        children: [(0, n.jsx)("div", {
                            className: c()("dbot-accordion__header", {
                                "dbot-accordion__header--cursive": r
                            }),
                            children: (0, n.jsx)(_.Z, {
                                as: "span",
                                size: h,
                                weight: "bold",
                                children: g
                            })
                        }), o && (0, n.jsx)("div", {
                            className: "dbot-accordion__icon",
                            children: C ? (0, n.jsx)(u.Z, {}) : (0, n.jsx)(x.Z, {})
                        })]
                    }), (0, n.jsx)("div", {
                        className: c()("dbot-accordion__content", {
                            "dbot-accordion__content--open": C
                        }),
                        "data-testid": "accordion-content",
                        children: (0, n.jsx)(_.Z, {
                            as: "span",
                            lineHeight: "s",
                            size: h,
                            children: b
                        })
                    })]
                })
            };
            var m = s("48118");
            let p = (0, l.Pi)(e => {
                    var t, s;
                    let {
                        item: a,
                        font_size: l
                    } = e, {
                        ui: r
                    } = (0, i.oR)(), {
                        is_dark_mode_on: o
                    } = r, d = (null == a ? void 0 : a.className) ? ? "";
                    switch (a.type) {
                        case "text":
                            {
                                let e = c()(`qs__description__content ${d}`);
                                return (0, n.jsx)(n.Fragment, {
                                    children: null == a ? void 0 : null === (t = a.content) || void 0 === t ? void 0 : t.map(t => (0, n.jsx)("div", {
                                        className: e,
                                        children: (0, n.jsx)(_.Z, {
                                            size: l,
                                            children: (0, m.ZP)(t)
                                        })
                                    }, t))
                                })
                            }
                        case "text_italic":
                            {
                                let e = c()(`qs__description__content italic ${d}`);
                                return (0, n.jsx)(n.Fragment, {
                                    children: null == a ? void 0 : null === (s = a.content) || void 0 === s ? void 0 : s.map(t => (0, n.jsx)("div", {
                                        className: e,
                                        children: (0, n.jsx)(_.Z, {
                                            size: l,
                                            children: (0, m.ZP)(t)
                                        })
                                    }, t))
                                })
                            }
                        case "media":
                            {
                                let e = c()(`qs__description__image ${d}`);
                                return (0, n.jsx)("div", {
                                    className: e,
                                    style: null == a ? void 0 : a.styles,
                                    children: (0, n.jsx)("img", {
                                        src: o ? a.dark_src ? ? a.src : a.src,
                                        alt: a.alt
                                    })
                                })
                            }
                        default:
                            return null
                    }
                }),
                j = e => {
                    let {
                        item: t,
                        font_size: s
                    } = e, l = Array.isArray(t) ? t : t.slice(1);
                    return (0, n.jsx)(n.Fragment, {
                        children: Array.isArray(l) && (null == l ? void 0 : l.map(e => (0, n.jsx)(a.Fragment, {
                            children: (0, n.jsx)(p, {
                                item: e,
                                font_size: s
                            })
                        }, e.id)))
                    })
                },
                v = (0, l.Pi)(e => {
                    let {
                        tutorial_selected_strategy: t,
                        grouped_objects_by_title: s,
                        expanded_subtitles_storage: l,
                        setExpandedSubtitlesStorage: i
                    } = e, {
                        isDesktop: r
                    } = (0, o.F)(), d = t ? "s" : "xs", c = a.useMemo(() => r ? d : "xs", [r, d]);
                    return (0, n.jsx)(n.Fragment, {
                        children: Array.isArray(s) && s.map(e => {
                            var t, s, a, r;
                            let o = (null == e ? void 0 : null === (s = e[0]) || void 0 === s ? void 0 : null === (t = s.content) || void 0 === t ? void 0 : t[0]) ? ? "";
                            return (0, n.jsx)(h, {
                                content_data: {
                                    header: o,
                                    content: (0, n.jsx)(j, {
                                        item: e,
                                        font_size: c
                                    })
                                },
                                expanded: !!(null === (a = e[0]) || void 0 === a ? void 0 : a.expanded),
                                is_cursive: !1,
                                no_collapsible: null === (r = e[0]) || void 0 === r ? void 0 : r.no_collapsible,
                                has_subtitle: !!o,
                                expanded_subtitles_storage: l,
                                setExpandedSubtitlesStorage: i,
                                font_size: c
                            }, `accordion-${o}`)
                        })
                    })
                }),
                b = (0, l.Pi)(e => {
                    var t;
                    let {
                        formfields: s,
                        active_tab: l,
                        tutorial_selected_strategy: o
                    } = e, {
                        quick_strategy: d
                    } = (0, i.oR)(), {
                        selected_strategy: c
                    } = d, _ = {}, [u, x] = (0, a.useState)(_), h = (0, r.j)()[o || c];
                    let m = Array.isArray(null == h ? void 0 : h.description) ? null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.reduce((e, t, s) => {
                        if ("subtitle_italic" === t.type || "subtitle" === t.type) {
                            let s, n;
                            e.push([]);
                            _[s = t, n = c, `${s.content[0]}__${n}`.split(" ").join("_").toLowerCase()] = (null == t ? void 0 : t.expanded) ? ? !1
                        }
                        return e[e.length - 1].push({ ...t,
                            id: s
                        }), e
                    }, []) : [{
                        type: "text",
                        content: [null == h ? void 0 : h.description]
                    }];
                    return (0, n.jsx)(n.Fragment, {
                        children: "TRADE_PARAMETERS" === l ? (0, n.jsx)("div", {
                            className: "qs__body__content__form",
                            children: s
                        }) : (0, n.jsx)("div", {
                            className: "qs__body__content__description",
                            children: (0, n.jsx)(v, {
                                tutorial_selected_strategy: o,
                                grouped_objects_by_title: m,
                                expanded_subtitles_storage: u,
                                setExpandedSubtitlesStorage: x
                            })
                        })
                    })
                })
        },
        29357: function(e, t, s) {
            s.r(t), s.d(t, {
                default: () => m
            });
            var n = s("85893"),
                a = s("67294"),
                l = s("63387"),
                i = s.n(l),
                r = s("96877"),
                o = s("49243"),
                d = s("83274"),
                c = s("47494"),
                _ = s("2502");
            let u = (0, a.memo)(e => {
                let {
                    updateChartType: t,
                    updateGranularity: s,
                    position: a,
                    isDesktop: l
                } = e;
                return (0, n.jsxs)(c.ToolbarWidget, {
                    position: a,
                    children: [(0, n.jsx)(c.ChartMode, {
                        portalNodeId: "modal_root",
                        onChartType: t,
                        onGranularity: s
                    }), l && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(c.StudyLegend, {
                            portalNodeId: "modal_root",
                            searchInputClassName: "data-hj-whitelist"
                        }), (0, n.jsx)(c.Views, {
                            portalNodeId: "modal_root",
                            onChartType: t,
                            onGranularity: s,
                            searchInputClassName: "data-hj-whitelist"
                        }), (0, n.jsx)(c.DrawTools, {
                            portalNodeId: "modal_root"
                        }), (0, n.jsx)(c.Share, {
                            portalNodeId: "modal_root"
                        })]
                    })]
                })
            });
            s("22798");
            let x = {},
                h = (0, r.Pi)(e => {
                    let {
                        show_digits_stats: t
                    } = e, {
                        common: s,
                        ui: l
                    } = (0, d.oR)(), {
                        chart_store: r,
                        run_panel: h,
                        dashboard: m
                    } = (0, d.oR)(), {
                        chart_type: p,
                        getMarketsOrder: j,
                        granularity: v,
                        onSymbolChange: b,
                        setChartStatus: g,
                        symbol: y,
                        updateChartType: f,
                        updateGranularity: N,
                        updateSymbol: C,
                        setChartSubscriptionId: w,
                        chart_subscription_id: k
                    } = r, T = (0, a.useRef)(k), {
                        isDesktop: E,
                        isMobile: S
                    } = (0, _.F)(), {
                        is_drawer_open: I
                    } = h, {
                        is_chart_modal_visible: A
                    } = m, R = {
                        assetInformation: !1,
                        countdown: !0,
                        isHighestLowestMarkerEnabled: !1,
                        language: s.current_language.toLowerCase(),
                        position: l.is_chart_layout_default ? "bottom" : "left",
                        theme: l.is_dark_mode_on ? "dark" : "light"
                    }, [L, M] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => () => {
                        o.Z.api.forgetAll("ticks")
                    }, []), (0, a.useEffect)(() => {
                        T.current = k
                    }, [k]), (0, a.useEffect)(() => {
                        !y && C()
                    }, [y, C]);
                    let O = e => {
                            e && o.Z.api.forget(e)
                        },
                        D = async (e, t) => {
                            var s, n, a;
                            try {
                                O(T.current);
                                let n = await o.Z.api.send(e);
                                w(null == n ? void 0 : n.subscription.id), n && t(n), 1 === e.subscribe && (x[null == n ? void 0 : n.subscription.id] = null === (s = o.Z.api.onMessage()) || void 0 === s ? void 0 : s.subscribe(e => {
                                    let {
                                        data: s
                                    } = e;
                                    t(s)
                                }))
                            } catch (e) {
                                (null == e ? void 0 : null === (n = e.error) || void 0 === n ? void 0 : n.code) === "MarketIsClosed" && t([]), console.log(null == e ? void 0 : null === (a = e.error) || void 0 === a ? void 0 : a.message)
                            }
                        };
                    if (!y) return null;
                    let U = !!(null === o.Z || void 0 === o.Z ? void 0 : o.Z.api);
                    return (0, n.jsxs)("div", {
                        className: i()("dashboard__chart-wrapper", {
                            "dashboard__chart-wrapper--expanded": I && E,
                            "dashboard__chart-wrapper--modal": A && E
                        }),
                        dir: "ltr",
                        style: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 16,
                                right: 16,
                                zIndex: 100,
                                display: "flex",
                                justifyContent: "flex-end"
                            },
                            children: (0, n.jsx)("button", {
                                onClick: () => M(e => !e),
                                style: {
                                    backgroundColor: "lightblue",
                                    color: "white",
                                    border: "none",
                                    borderRadius: 4,
                                    padding: "8px 16px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                },
                                children: L ? "Charts" : "Trading View"
                            })
                        }), L ? (0, n.jsx)("iframe", {
                            src: "https://charts.deriv.com/deriv",
                            style: {
                                width: "100%",
                                height: "600px",
                                border: "none",
                                marginTop: 16
                            },
                            title: "Deriv Trading View",
                            allowFullScreen: !0
                        }) : (0, n.jsx)(c.SmartChart, {
                            id: "dbot",
                            barriers: [],
                            showLastDigitStats: t,
                            chartControlsWidgets: null,
                            enabledChartFooter: !1,
                            chartStatusListener: e => g(!e),
                            toolbarWidget: () => (0, n.jsx)(u, {
                                updateChartType: f,
                                updateGranularity: N,
                                position: E ? "top" : "bottom",
                                isDesktop: E
                            }),
                            chartType: p,
                            isMobile: S,
                            enabledNavigationWidget: E,
                            granularity: v,
                            requestAPI: e => o.Z.api.send(e),
                            requestForget: () => {},
                            requestForgetStream: () => {},
                            requestSubscribe: D,
                            settings: R,
                            symbol: y,
                            topWidgets: () => (0, n.jsx)(c.ChartTitle, {
                                onChange: b
                            }),
                            isConnectionOpened: U,
                            getMarketsOrder: j,
                            isLive: !0,
                            leftMargin: 80
                        })]
                    })
                }),
                m = h
        },
        77761: function() {}
    }
]);