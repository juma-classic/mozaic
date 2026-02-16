"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["813"], {
        48035: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tZ
            });
            var i = n("85893"),
                l = n("67294"),
                o = n("67026"),
                a = n("92198"),
                s = n("89250"),
                r = n("88199"),
                c = n("30453"),
                d = n("37979"),
                u = n("2502"),
                h = n("33181"),
                m = n("22273"),
                x = n("89471");
            let g = function() {
                let e = (0, s.TH)(),
                    t = (0, s.s0)();
                return {
                    deleteQueryString: function(n) {
                        let i = new URLSearchParams(e.search);
                        i.delete(n), t({
                            search: i.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};
                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let i = new URLSearchParams(e.search);
                            Object.entries(n).forEach(e => {
                                let [t, n] = e;
                                void 0 === n ? i.delete(t) : i.set(t, n)
                            }), t({
                                search: i.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };

            function p(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: i
                } = g(), {
                    isDesktop: o
                } = (0, u.F)(), [a, s] = (0, x.Sx)(), r = () => {
                    if (!n.modal && s.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            s.setAll([]), t.forEach(e => {
                                s.set(e, !o)
                            }), s.set(n, !0)
                        }
                    }
                };
                return (0, l.useEffect)(() => {
                    r()
                }, []), (0, l.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && s.reset()
                }, [null == n ? void 0 : n.modal]), (0, x.OR)("popstate", () => {
                    r()
                }), {
                    hideModal: e => {
                        let l = n.modal;
                        if (l) {
                            let n = l.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) a.forEach((e, n) => {
                                s.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        s.set(e, !1)
                                    }), n = [e ? ? ""], i({
                                        modal: e
                                    })
                                } else 1 === n.length ? i({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    l = n.slice(-1)[0];
                                l ? (s.set(e, !1), s.set(l, !0)) : s.set(e, !1), 0 === n.length ? t("modal") : i({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => a.get(e) || !1,
                    showModal: (e, t) => {
                        let l = n.modal;
                        if (l) {
                            let n = l.split(","),
                                a = n.slice(-1)[0];
                            if (a === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? s.set(a, !1) : s.set(a, (null == t ? void 0 : t.shouldStackModals) || !o), s.set(e, !0), n.push(e), i({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else s.set(e, !0), i({
                            modal: e
                        })
                    }
                }
            }
            let v = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial", "analysis_tool", "signals", "trading_hub"],
                    n = t[Number(e)],
                    i = window.location.href.split("#")[0];
                return `${i}#${n}`
            };
            var _ = n("32305"),
                b = n("96223"),
                f = n("3693"),
                j = n("98146"),
                w = n("64410"),
                y = n("918"),
                C = n("50051"),
                I = n("16496"),
                N = n("59001"),
                Z = n("57218"),
                k = n("12811"),
                L = n("28505"),
                z = n("73971"),
                S = n("99243"),
                M = n("63066"),
                E = n("96396"),
                F = n("14249"),
                T = n("45322"),
                A = n("34273"),
                O = n("473");
            let R = [{
                code: "EN",
                displayName: "English",
                icon: (0, i.jsx)(_.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(_.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(_.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, i.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, i.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, i.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, i.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, i.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, i.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, i.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, i.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, i.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, i.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, i.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, i.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, i.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, i.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, i.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, i.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, i.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, i.jsx)(A.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(A.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(A.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, i.jsx)(O.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(O.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(O.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var D = n("48059"),
                P = n("44412"),
                U = n("96877"),
                q = n("75324"),
                V = n("74541"),
                H = n("64915");
            let B = () => {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.on("ready", e => {
                            "online" === e.state.availability && t(!0)
                        })
                    }, []), {
                        is_livechat_available: e
                    }
                },
                X = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        is_livechat_available: t
                    } = B(), n = (0, q.Lv)();
                    if (!t && !n) return null;
                    setInterval(() => {
                        if (n) {
                            var e;
                            null === (e = window.LiveChatWidget) || void 0 === e || e.call("destroy")
                        }
                    }, 10);
                    let l = () => {
                        var e;
                        n ? window.Intercom("show") : null === (e = window.LiveChatWidget) || void 0 === e || e.call("maximize")
                    };
                    return e ? (0, i.jsx)("div", {
                        onKeyDown: l,
                        onClick: l,
                        children: (0, i.jsx)(H.u, {
                            as: "button",
                            className: "app-footer__icon",
                            tooltipContent: (0, D.NC)("Live chat"),
                            children: (0, i.jsx)(V.Z, {
                                iconSize: "xs"
                            })
                        })
                    }) : (0, i.jsx)(V.Z, {
                        iconSize: "xs",
                        className: "mobile-menu__content__items--right-margin"
                    })
                });
            var $ = n("26325");
            let G = () => {
                let {
                    localize: e
                } = (0, D.T_)();
                return (0, i.jsx)(H.u, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.xOw.account_limits,
                    tooltipContent: e("Account limits"),
                    children: (0, i.jsx)($.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    })
                })
            };
            var W = n("83257"),
                K = n("53261"),
                J = n("21456");
            let Q = (0, U.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, W.Z)(), {
                    localize: n
                } = (0, D.T_)();
                return (0, i.jsx)(H.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, i.jsx)(J.Z, {
                        iconSize: "xs"
                    }) : (0, i.jsx)(K.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var Y = n("37410");
            let ee = () => {
                let {
                    localize: e
                } = (0, D.T_)();
                return (0, i.jsx)(H.u, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.xOw.deriv_com,
                    target: "_blank",
                    tooltipContent: e("Go to deriv.com"),
                    children: (0, i.jsx)(Y.Z, {
                        iconSize: "xs"
                    })
                })
            };
            var et = n("79655"),
                en = n("45452"),
                ei = n("12838");
            let el = () => {
                    let e = ei.fV.getValue(ei.sE.configServerURL);
                    return e ? (0, i.jsxs)(en.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, i.jsx)(et.rU, {
                            className: "app-footer__endpoint-text",
                            to: h.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                eo = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                ea = () => {
                    let [e, t] = (0, l.useState)(!1), {
                        exit: n,
                        request: i,
                        screenChange: o,
                        screenElement: a
                    } = eo, s = (0, l.useCallback)(() => t(a.some(e => document[e])), [a]);
                    return (0, l.useEffect)(() => (o.forEach(e => {
                        document.addEventListener(e, s, !1)
                    }), () => {
                        o.forEach(e => {
                            document.removeEventListener(e, s, !1)
                        })
                    }), [s, o]), {
                        toggleFullScreenMode: l => {
                            null == l || l.stopPropagation();
                            let o = n.find(e => document[e]),
                                a = i.find(e => document.documentElement[e]);
                            e && o ? document[o]() : a ? document.documentElement[a]() : t(!1)
                        }
                    }
                };
            var es = n("69914");
            let er = () => {
                let {
                    toggleFullScreenMode: e
                } = ea(), {
                    localize: t
                } = (0, D.T_)();
                return (0, i.jsx)(H.u, {
                    as: "button",
                    className: "app-footer__icon",
                    onClick: e,
                    tooltipContent: t("Full screen"),
                    children: (0, i.jsx)(es.Z, {
                        iconSize: "xs"
                    })
                })
            };
            var ec = n("11218");
            let ed = () => {
                    let {
                        localize: e
                    } = (0, D.T_)();
                    return (0, i.jsx)(H.u, {
                        as: "a",
                        className: "app-footer__icon",
                        href: h.xOw.help_center,
                        target: "_blank",
                        tooltipContent: e("Help centre"),
                        children: (0, i.jsx)(ec.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                eu = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: o
                    } = (0, D.T_)(), a = (0, l.useMemo)(() => {
                        var e;
                        return null === (e = R.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, i.jsxs)(H.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: o("Language"),
                        children: [a, (0, i.jsx)(en.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                eh = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                em = () => {
                    let [e, t] = (0, l.useState)(eh()), n = () => t(!0), i = () => t(!1);
                    return (0, l.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", i), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", i)
                    }), []), e
                },
                ex = () => {
                    let [e, t] = (0, l.useState)("online"), n = em();
                    return (0, l.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                eg = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, D.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                ep = () => {
                    let e = ex(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, l.useMemo)(() => eg()[e], [e]);
                    return (0, i.jsx)(H.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, D.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, i.jsx)("div", {
                            className: (0, o.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var ev = n("38376");
            let e_ = () => {
                let {
                    localize: e
                } = (0, D.T_)();
                return (0, i.jsx)(H.u, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.xOw.responsible,
                    target: "_blank",
                    tooltipContent: e("Responsible trading"),
                    children: (0, i.jsx)(ev.Z, {
                        iconSize: "xs"
                    })
                })
            };
            var eb = n("30381"),
                ef = n.n(eb),
                ej = n("83274"),
                ew = n("27179"),
                ey = n("83606");
            let eC = (0, U.Pi)(() => {
                let {
                    isDesktop: e
                } = (0, u.F)(), {
                    common: t
                } = (0, ej.oR)() ? ? {
                    common: {
                        server_time: ef()()
                    }
                };
                return (0, i.jsx)(H.u, {
                    as: "div",
                    className: "app-footer__icon",
                    "data-testid": "dt_server_time",
                    tooltipContent: t.server_time.format(ew.kT),
                    children: (0, i.jsx)(ey.x, {
                        size: e ? "xs" : "sm",
                        children: t.server_time.format(ew.Yp)
                    })
                })
            });
            var eI = n("60821");
            let eN = () => {
                    let {
                        localize: e
                    } = (0, D.T_)();
                    return (0, i.jsx)(H.u, {
                        as: "a",
                        className: "app-footer__icon",
                        href: ei.WZ.whatsApp,
                        target: "_blank",
                        tooltipContent: e("WhatsApp"),
                        children: (0, i.jsx)(eI.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                eZ = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, D.T_)(), {
                        hideModal: l,
                        isModalOpenFor: o,
                        showModal: a
                    } = p(), {
                        data: s
                    } = (0, m.Z)(!0), {
                        cs_chat_whatsapp: r
                    } = s;
                    return (0, i.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, i.jsx)(er, {}), (0, i.jsx)(eu, {
                            openLanguageSettingModal: () => a("DesktopLanguagesModal")
                        }), (0, i.jsx)(ed, {}), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(Q, {}), (0, i.jsx)(G, {}), (0, i.jsx)(e_, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(X, {}), r && (0, i.jsx)(eN, {}), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(eC, {}), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(ep, {}), (0, i.jsx)(el, {}), o("DesktopLanguagesModal") && (0, i.jsx)(P.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: R,
                            onClose: l,
                            onLanguageSwitch: e => {
                                n(e), l(), window.location.replace(v()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var ek = n("45221");
            let eL = {
                    aud: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, l.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                ez = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, o = n ? eL.virtual : eL[null == t ? void 0 : t.toLowerCase()] || eL.unknown;
                    return (0, i.jsx)(l.Suspense, {
                        fallback: null,
                        children: (0, i.jsx)(o, {
                            iconSize: "sm"
                        })
                    })
                };
            var eS = n("79649");
            let eM = e => {
                var t;
                let {
                    allBalanceData: n
                } = e, {
                    accountList: o,
                    activeLoginid: a
                } = (0, eS.T)(), s = (0, l.useMemo)(() => null == o ? void 0 : o.find(e => e.loginid === a), [a, o]), r = null == n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : t[(null == s ? void 0 : s.loginid) ? ? ""];
                return {
                    data: (0, l.useMemo)(() => {
                        var e, t;
                        return s ? { ...s,
                            balance: (0, h.oC5)(null == r ? void 0 : null === (e = r.balance) || void 0 === e ? void 0 : e.toFixed((0, h.i4S)(r.currency))) ? ? "0",
                            currencyLabel: (null == s ? void 0 : s.is_virtual) ? (0, D.NC)("Demo") : null == s ? void 0 : s.currency,
                            icon: (0, i.jsx)(ez, {
                                currency: null == s ? void 0 : null === (t = s.currency) || void 0 === t ? void 0 : t.toLowerCase(),
                                isVirtual: !!(null == s ? void 0 : s.is_virtual)
                            }),
                            isVirtual: !!(null == s ? void 0 : s.is_virtual),
                            isActive: (null == s ? void 0 : s.loginid) === a
                        } : void 0
                    }, [s, a, n])
                }
            };
            var eE = n("69330"),
                eF = n("77898"),
                eT = n("16857"),
                eA = n("77424");
            let eO = () => {
                let {
                    isDesktop: e
                } = (0, u.F)();
                return e ? (0, i.jsx)(eA.G, {
                    className: "app-header__logo",
                    href: "https://osamhnr.com",
                    target: "_blank"
                }) : null
            };
            var eR = n("24561");
            let eD = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, i.jsx)(i.Fragment, {
                        children: t ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, i.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, i.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, i.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, i.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, i.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, i.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, i.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eP = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, i.jsx)(eR.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, i.jsx)(eD, {
                            isMobile: t
                        })
                    })
                };
            var eU = n("30394"),
                eq = n("42457"),
                eV = n("33281"),
                eH = n("35008"),
                eB = n("63387"),
                eX = n.n(eB);
            let e$ = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, i.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eG = n("44884"),
                eW = n("37528");
            let eK = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, i.jsx)(Y.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eJ = e => Number(e.replace(/,/g, "")),
                eQ = () => (0, i.jsx)(eW.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eY = e => {
                    let {
                        oAuthLogout: t,
                        loginid: n,
                        is_logging_out: l
                    } = e, o = (null == n ? void 0 : n.includes("CR")) || (null == n ? void 0 : n.includes("MF"));
                    return (0, i.jsxs)("div", {
                        className: "",
                        children: [(0, i.jsx)(eH.T.TradersHubLink, {
                            href: h.xOw.traders_hub,
                            children: (0, D.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, i.jsx)(eQ, {}), (0, i.jsxs)("div", {
                            className: eX()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !o
                            }),
                            children: [o && (0, i.jsx)(ek.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, i.jsx)(D.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, i.jsx)(eH.T.Footer, {
                                children: l ? (0, i.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, i.jsx)(e$, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, i.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, i.jsx)(en.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, D.NC)("Logout")
                                    }), (0, i.jsx)(eG.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                e0 = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: l,
                        isVirtual: a,
                        activeLoginId: s,
                        oAuthLogout: c,
                        is_logging_out: d
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(eH.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, D.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, i.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, i.jsx)(eH.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && l(e.loginid)
                                    },
                                    onResetBalance: a && s === e.loginid && 1e4 !== eJ(e.balance) ? () => {
                                        var e;
                                        null === r.api_base || void 0 === r.api_base || null === (e = r.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, i.jsx)(eQ, {}), (0, i.jsx)(eY, {
                            loginid: s,
                            oAuthLogout: c,
                            is_logging_out: d
                        })]
                    })
                },
                e1 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: l,
                        switchAccount: a,
                        is_low_risk_country: s
                    } = e, r = (null == l ? void 0 : l.length) !== 0 && s ? (0, D.NC)("Eu Deriv accounts") : (0, D.NC)("Deriv accounts");
                    return (0, i.jsx)(eH.T.AccountsPanel, {
                        isOpen: !0,
                        title: r,
                        className: "account-switcher-panel",
                        children: l.map(e => (e.currencyLabel = (0, D.NC)("Multipliers"), (0, i.jsx)("span", {
                            className: (0, o.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, i.jsx)(eH.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && a(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };
            var e2 = n("11527");
            let e6 = e => {
                    var t, n;
                    let {
                        isVirtual: l,
                        tabs_labels: o,
                        is_low_risk_country: a
                    } = e;
                    return a ? (0, i.jsx)(eH.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, D.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, i.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, i.jsx)(eH.T.AccountsItem, {
                                account: eK,
                                onSelectAccount: () => {}
                            }), (0, i.jsx)(eQ, {}), (0, i.jsx)(e2.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(h.xOw.traders_hub),
                                children: (0, i.jsx)(D.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, l ? null == o ? void 0 : null === (n = o.real) || void 0 === n ? void 0 : n.toLowerCase() : null == o ? void 0 : null === (t = o.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                e9 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: a,
                        is_low_risk_country: s,
                        switchAccount: r
                    } = e;
                    if (!s && l && (null == l ? void 0 : l.length) === 0) return null;
                    let c = (null == a ? void 0 : a.length) === 0 ? (0, D.NC)("Deriv accounts") : (0, D.NC)("Non-Eu Deriv account");
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(eH.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: l.map(e => (0, i.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, i.jsx)(eH.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && r(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e3 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: l,
                        isVirtual: o,
                        tabs_labels: a,
                        is_low_risk_country: s,
                        oAuthLogout: r,
                        loginid: c,
                        is_logging_out: d
                    } = e, u = t && (null == t ? void 0 : t.length) > 0, h = n && (null == n ? void 0 : n.length) > 0;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [u ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e9, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, i.jsx)(eQ, {})]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e6, {
                                is_low_risk_country: s,
                                isVirtual: o,
                                tabs_labels: a
                            }), (0, i.jsx)(eQ, {})]
                        }), h && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e1, {
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, i.jsx)(eQ, {})]
                        }), (0, i.jsx)(eY, {
                            oAuthLogout: r,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var e4 = n("17481");
            let e7 = (0, l.lazy)(() => n.e("932").then(n.bind(n, 67568))),
                e8 = {
                    demo: (0, D.NC)("Demo"),
                    real: (0, D.NC)("Real")
                },
                e5 = e => {
                    var t;
                    let {
                        isVirtual: n,
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        modifiedVRTCRAccountList: s,
                        switchAccount: r,
                        activeLoginId: d,
                        client: u
                    } = e, {
                        oAuthLogout: h
                    } = (0, c.q)({
                        handleLogout: async () => u.logout(),
                        client: u
                    }), m = (0, e4.Gz)().includes((null === (t = u.account_settings) || void 0 === t ? void 0 : t.country_code) ? ? ""), x = !!n;
                    return ((0, l.useEffect)(() => {
                        var e, t;
                        let i = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !n && i && (i.style.maxHeight = "70vh", null === (t = (0, eq._)(".deriv-accordion__content", i)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), x) ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(e0, {
                            modifiedVRTCRAccountList: s,
                            switchAccount: r,
                            activeLoginId: d,
                            isVirtual: x,
                            tabs_labels: e8,
                            oAuthLogout: h,
                            is_logging_out: u.is_logging_out
                        })
                    }) : (0, i.jsx)(e3, {
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        switchAccount: r,
                        isVirtual: x,
                        tabs_labels: e8,
                        is_low_risk_country: m,
                        oAuthLogout: h,
                        loginid: d,
                        is_logging_out: u.is_logging_out
                    })
                },
                te = (0, U.Pi)(e => {
                    var t, n;
                    let {
                        activeAccount: o
                    } = e, {
                        isDesktop: a
                    } = (0, u.F)(), {
                        accountList: s
                    } = (0, eS.T)(), {
                        ui: c,
                        run_panel: d,
                        client: m
                    } = (0, ej.oR)(), {
                        accounts: x
                    } = m, {
                        toggleAccountsDialog: g,
                        is_accounts_switcher_on: p,
                        account_switcher_disabled_message: v
                    } = c, {
                        is_stop_button_visible: _
                    } = d, b = Object.keys(x).some(e => "wallet" === x[e].account_category), f = (0, l.useMemo)(() => null == s ? void 0 : s.map(e => {
                        var t, n, l, a, s, r, c, d;
                        return { ...e,
                            balance: (0, h.oC5)((null === (a = m.all_accounts_balance) || void 0 === a ? void 0 : null === (l = a.accounts) || void 0 === l ? void 0 : null === (n = l[null == e ? void 0 : e.loginid]) || void 0 === n ? void 0 : null === (t = n.balance) || void 0 === t ? void 0 : t.toFixed((0, h.i4S)(e.currency))) ? ? "0"),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? e8.demo : (null === (c = m.website_status) || void 0 === c ? void 0 : null === (r = c.currencies_config) || void 0 === r ? void 0 : null === (s = r[null == e ? void 0 : e.currency]) || void 0 === s ? void 0 : s.name) ? ? (null == e ? void 0 : e.currency),
                            icon: (0, i.jsx)(ez, {
                                currency: null == e ? void 0 : null === (d = e.currency) || void 0 === d ? void 0 : d.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == o ? void 0 : o.loginid)
                        }
                    }), [s, null === (t = m.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = m.website_status) || void 0 === n ? void 0 : n.currencies_config, null == o ? void 0 : o.loginid]), j = (0, l.useMemo)(() => (null == f ? void 0 : f.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                    })) ? ? [], [f]), w = (0, l.useMemo)(() => (null == f ? void 0 : f.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                    })) ? ? [], [f]), y = (0, l.useMemo)(() => (null == f ? void 0 : f.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                    })) ? ? [], [f]), C = async e => {
                        if (e.toString() === (null == o ? void 0 : o.loginid)) return;
                        let t = JSON.parse(localStorage.getItem("accountsList") ? ? "{}")[e];
                        if (!t) return;
                        localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === r.api_base || void 0 === r.api_base ? void 0 : r.api_base.init(!0));
                        let n = new URLSearchParams(window.location.search),
                            i = f.find(t => t.loginid === e.toString());
                        if (!i) return;
                        let l = i.is_virtual ? "demo" : i.currency;
                        n.set("account", l), window.history.pushState({}, "", `${window.location.pathname}?${n.toString()}`)
                    };
                    return o && (b ? (0, i.jsx)(l.Suspense, {
                        fallback: (0, i.jsx)(eV.a, {}),
                        children: (0, i.jsx)(e7, {
                            is_dialog_on: p,
                            toggleDialog: g
                        })
                    }) : (0, i.jsx)(eU.Z, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: v,
                        zIndex: "5",
                        children: (0, i.jsxs)(eH.T, {
                            activeAccount: o,
                            isDisabled: _,
                            tabsLabels: e8,
                            modalContentStyle: {
                                content: {
                                    top: a ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, i.jsx)(eH.T.Tab, {
                                title: e8.real,
                                children: (0, i.jsx)(e5, {
                                    modifiedCRAccountList: j,
                                    modifiedMFAccountList: w,
                                    switchAccount: C,
                                    activeLoginId: null == o ? void 0 : o.loginid,
                                    client: m
                                })
                            }), (0, i.jsx)(eH.T.Tab, {
                                title: e8.demo,
                                children: (0, i.jsx)(e5, {
                                    modifiedVRTCRAccountList: y,
                                    switchAccount: C,
                                    isVirtual: !0,
                                    activeLoginId: null == o ? void 0 : o.loginid,
                                    client: m
                                })
                            })]
                        })
                    }))
                });
            var tt = n("17934"),
                tn = n("41301"),
                ti = n("68782");
            let tl = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: l
                } = (0, u.F)();
                return (0, i.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, i.jsx)(ti.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, i.jsx)(ey.x, {
                        className: "ml-[1.6rem]",
                        size: l ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var to = n("39523"),
                ta = n("48796"),
                ts = n("16128"),
                tr = n("38051"),
                tc = n("39590"),
                td = n("96819"),
                tu = n("14393"),
                th = n("34215"),
                tm = n("44741");
            let tx = [{
                active: !1,
                buttonIcon: (0, i.jsx)(tu.Z, {
                    height: 25,
                    width: 114.97
                }),
                description: (0, D.NC)("A whole new trading experience on a powerful yet easy to use platform."),
                href: h.xOw.trade,
                icon: (0, i.jsx)(tu.Z, {
                    height: 32,
                    width: 148
                }),
                showInEU: !0
            }, {
                active: !0,
                buttonIcon: (0, i.jsx)(th.Z, {
                    height: 25,
                    width: 94
                }),
                description: (0, D.NC)("Automated trading at your fingertips. No coding needed."),
                href: h.xOw.bot,
                icon: (0, i.jsx)(th.Z, {
                    height: 32,
                    width: 121
                }),
                showInEU: !1
            }, {
                active: !1,
                buttonIcon: (0, i.jsx)(tm.Z, {
                    height: 24,
                    width: 115
                }),
                description: (0, D.NC)("Trade the world’s markets with our popular user-friendly platform."),
                href: h.xOw.smarttrader,
                icon: (0, i.jsx)(tm.Z, {
                    height: 32,
                    width: 153
                }),
                showInEU: !1
            }];
            h.xOw.traders_hub, tr.Z, h.xOw.reports, tc.Z, (0, D.NC)("Reports"), h.xOw.cashier, td.Z, (0, D.NC)("Cashier");
            let tg = () => {
                let {
                    localize: e
                } = (0, D.T_)();
                return (0, i.jsx)(ta.L, {
                    bottomLinkLabel: e("Looking to learn how to trade?"),
                    buttonProps: {
                        icon: tx["1"].buttonIcon
                    },
                    bottomLinkProps: {
                        href: h.xOw.traders_hub
                    },
                    children: tx.map(t => {
                        let {
                            active: n,
                            description: l,
                            href: o,
                            icon: a
                        } = t;
                        return (0, i.jsx)(ts.X, {
                            active: n,
                            className: "platform-switcher",
                            description: e("{{description}}", {
                                description: l
                            }),
                            href: window.location.search ? `${o}/${window.location.search}` : o,
                            icon: a
                        }, l)
                    })
                })
            };
            var tp = n("68534"),
                tv = n("93217");
            let t_ = e => {
                    let {
                        localize: t
                    } = (0, D.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: l
                    } = (0, W.Z)(), {
                        oAuthLogout: o
                    } = (0, c.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    });
                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: tp.Z,
                                RightComponent: (0, i.jsx)(tv.Z, {
                                    value: n,
                                    onChange: l
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eG.Z,
                                onClick: o,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                tb = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        client: t
                    } = (0, ej.oR)(), n = e ? "sm" : "md", {
                        config: l
                    } = t_(t);
                    return (0, i.jsxs)("div", {
                        className: "mobile-menu__content",
                        children: [(0, i.jsx)("div", {
                            className: "mobile-menu__content__platform",
                            children: (0, i.jsx)(tg, {})
                        }), (0, i.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: l.map((e, t) => {
                                let l = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, i.jsx)("div", {
                                    className: (0, o.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !l
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: t,
                                            RightComponent: l,
                                            as: a,
                                            href: s,
                                            label: r,
                                            onClick: c,
                                            target: d
                                        } = e, u = "Deriv.com" === r;
                                        return "a" === a ? (0, i.jsx)(to.s, {
                                            as: "a",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            href: s,
                                            leftComponent: (0, i.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: d,
                                            children: (0, i.jsx)(ey.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r) : (0, i.jsx)(to.s, {
                                            as: "button",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, i.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: c,
                                            rightComponent: l,
                                            children: (0, i.jsx)(ey.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r)
                                    })
                                }, t)
                            })
                        })]
                    })
                }),
                tf = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: o,
                        localize: a
                    } = (0, D.T_)(), {
                        isDesktop: s
                    } = (0, u.F)(), r = (0, l.useMemo)(() => {
                        var e;
                        return null === (e = R.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === o
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [o]);
                    return (0, i.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, i.jsx)(ey.x, {
                            size: s ? "md" : "lg",
                            weight: "bold",
                            children: a("Menu")
                        }), !t && (0, i.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [r, (0, i.jsx)(ey.x, {
                                className: "ml-[0.4rem]",
                                size: s ? "xs" : "sm",
                                weight: "bold",
                                children: o
                            })]
                        })]
                    })
                };
            var tj = n("89816");
            let tw = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, i.jsx)("button", {
                        onClick: t,
                        children: (0, i.jsx)(tj.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                ty = () => {
                    let [e, t] = (0, l.useState)(!1), {
                        currentLang: n = "EN",
                        localize: o,
                        switchLanguage: a
                    } = (0, D.T_)(), {
                        hideModal: s,
                        isModalOpenFor: r,
                        showModal: c
                    } = p(), {
                        isDesktop: d
                    } = (0, u.F)(), h = () => t(!1), m = !!r("MobileLanguagesDrawer");
                    return d ? null : (0, i.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, i.jsx)("div", {
                            className: "mobile-menu__toggle",
                            children: (0, i.jsx)(tw, {
                                onClick: () => t(!0)
                            })
                        }), (0, i.jsxs)(tt.d, {
                            isOpen: e,
                            onCloseDrawer: h,
                            width: "29.5rem",
                            children: [(0, i.jsx)(tt.d.Header, {
                                onCloseDrawer: h,
                                children: (0, i.jsx)(tf, {
                                    hideLanguageSetting: m,
                                    openLanguageSetting: () => c("MobileLanguagesDrawer")
                                })
                            }), (0, i.jsx)(tt.d.Content, {
                                children: m ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, i.jsx)(tl, {
                                            buttonText: o("Language"),
                                            onClick: s
                                        })
                                    }), (0, i.jsx)(tn.I, {
                                        isOpen: !0,
                                        languages: R,
                                        onClose: s,
                                        onLanguageSwitch: e => {
                                            a(e), window.location.replace(v()), window.location.reload()
                                        },
                                        selectedLanguage: n,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, i.jsx)(tb, {})
                            }), (0, i.jsxs)(tt.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, i.jsx)(eC, {}), (0, i.jsx)(ep, {})]
                            })]
                        })]
                    })
                },
                tC = () => (0, i.jsxs)("div", {
                    className: "osam-logo",
                    title: "OSAM Trading Hub",
                    children: [(0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "26",
                        viewBox: "0 0 160 160",
                        children: [(0, i.jsx)("defs", {
                            children: (0, i.jsxs)("linearGradient", {
                                id: "fxg",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [(0, i.jsx)("stop", {
                                    offset: "0%",
                                    "stop-color": "#00d084"
                                }), (0, i.jsx)("stop", {
                                    offset: "50%",
                                    "stop-color": "#1e90ff"
                                }), (0, i.jsx)("stop", {
                                    offset: "100%",
                                    "stop-color": "#1769aa"
                                })]
                            })
                        }), (0, i.jsx)("circle", {
                            cx: "80",
                            cy: "80",
                            r: "70",
                            fill: "url(#fxg)"
                        }), (0, i.jsx)("circle", {
                            cx: "80",
                            cy: "80",
                            r: "70",
                            fill: "none",
                            stroke: "white",
                            "stroke-width": "4",
                            "stroke-opacity": "0.9"
                        }), (0, i.jsx)("line", {
                            x1: "55",
                            y1: "50",
                            x2: "55",
                            y2: "105",
                            stroke: "#00d084",
                            "stroke-width": "3"
                        }), (0, i.jsx)("rect", {
                            x: "49",
                            y: "70",
                            width: "12",
                            height: "25",
                            rx: "2",
                            fill: "#00d084"
                        }), (0, i.jsx)("line", {
                            x1: "80",
                            y1: "45",
                            x2: "80",
                            y2: "100",
                            stroke: "#ff4d4f",
                            "stroke-width": "3"
                        }), (0, i.jsx)("rect", {
                            x: "74",
                            y: "65",
                            width: "12",
                            height: "25",
                            rx: "2",
                            fill: "#ff4d4f"
                        }), (0, i.jsx)("line", {
                            x1: "105",
                            y1: "55",
                            x2: "105",
                            y2: "110",
                            stroke: "#00d084",
                            "stroke-width": "3"
                        }), (0, i.jsx)("rect", {
                            x: "99",
                            y: "75",
                            width: "12",
                            height: "25",
                            rx: "2",
                            fill: "#00d084"
                        }), (0, i.jsx)("text", {
                            x: "80",
                            y: "135",
                            "text-anchor": "middle",
                            "font-family": "Poppins, Segoe UI, sans-serif",
                            "font-weight": "700",
                            "font-size": "2",
                            fill: "white",
                            opacity: "0.95",
                            children: "OSAM"
                        })]
                    }), (0, i.jsx)("span", {
                        className: "osam-logo__text",
                        children: "OSAM"
                    })]
                }),
                tI = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        isAuthorizing: t,
                        activeLoginid: n
                    } = (0, eS.T)(), {
                        client: l
                    } = (0, ej.oR)() ? ? {}, {
                        data: a
                    } = eM({
                        allBalanceData: null == l ? void 0 : l.all_accounts_balance
                    }), {
                        accounts: s
                    } = l ? ? {}, r = Object.keys(s ? ? {}).some(e => (null == s ? void 0 : s[e].account_category) === "wallet"), {
                        localize: d
                    } = (0, D.T_)(), {
                        isOAuth2Enabled: m
                    } = (0, c.q)();
                    return (0, i.jsxs)(eF.h, {
                        className: (0, o.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, i.jsx)(eT.i, {
                            variant: "left",
                            children: (0, i.jsxs)("div", {
                                className: "left-section",
                                children: [!e && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(ty, {}), (0, i.jsx)(tC, {}), (0, i.jsx)(eO, {})]
                                }), e && (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)(tC, {})
                                })]
                            })
                        }), (0, i.jsx)(eT.i, {
                            variant: "right",
                            children: t ? (0, i.jsx)(eP, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : n ? (0, i.jsxs)(i.Fragment, {
                                children: [e && (0, i.jsx)(H.u, {
                                    as: "a",
                                    href: h.xOw.personal_details,
                                    tooltipContent: d("Manage account settings"),
                                    tooltipPosition: "bottom",
                                    className: "app-header__account-settings",
                                    children: (0, i.jsx)(eE.Z, {
                                        className: "app-header__profile_icon"
                                    })
                                }), (0, i.jsx)(te, {
                                    activeAccount: a
                                }), e && (r ? (0, i.jsx)(ek.Z, {
                                    className: "manage-funds-button",
                                    has_effect: !0,
                                    text: d("Manage funds"),
                                    onClick: () => window.location.assign(h.xOw.wallets_transfer),
                                    primary: !0
                                }) : (0, i.jsx)(ek.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.location.assign(h.xOw.cashier_deposit)
                                    },
                                    className: "deposit-button",
                                    children: d("Deposit")
                                }))]
                            }) : (0, i.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, i.jsx)(ek.Z, {
                                    tertiary: !0,
                                    className: "login-button",
                                    onClick: () => {
                                        window.location.replace("https://oauth.deriv.com/oauth2/authorize?app_id=82991&l=EN&brand=OSAMTRADINGHUB")
                                    },
                                    children: (0, i.jsx)(D.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, i.jsx)(ek.Z, {
                                    primary: !0,
                                    className: "signup-button",
                                    onClick: () => {
                                        window.open("https://track.deriv.com/_qeVMn9Bcq2YKqFKZ7JdnQ2Nd7ZgqdRLk/1/", "_blank")
                                    },
                                    children: (0, i.jsx)(D.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                })]
                            })
                        })]
                    })
                }),
                tN = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "light", {
                        ui: o
                    } = (0, ej.oR)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: a
                    } = o, {
                        isDesktop: s,
                        isMobile: r,
                        isTablet: c
                    } = (0, u.F)();
                    return (0, l.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, l.useEffect)(() => {
                        r ? a("mobile") : c ? a("tablet") : a("desktop")
                    }, [s, r, c, a]), (0, i.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tZ = () => {
                    var e;
                    let t;
                    let {
                        isDesktop: n
                    } = (0, u.F)(), {
                        isOAuth2Enabled: m
                    } = (0, c.q)(), x = "/callback" === window.location.pathname, g = "true" === a.Z.get("logged_state"), p = window.location.pathname.includes("endpoint"), v = JSON.parse(localStorage.getItem("clientAccounts") ? ? "{}"), _ = new URLSearchParams(window.location.search), b = _.get("account") ? ? "", f = Object.keys(JSON.parse(localStorage.getItem("accountsList") ? ? "{}")).length > 0, j = Object.values(v).some(e => e.currency === b) || "demo" === b || "" === b, [w, y] = (0, l.useState)(j), C = [...h.g$d, ...h.bs3], I = C.includes(null === (e = _.get("account") ? ? "") || void 0 === e ? void 0 : e.toUpperCase()), N = [], Z = e => {
                        let {
                            data: n
                        } = e;
                        if ("authorize" === n.msg_type) {
                            N.push(n.authorize.account_list || []);
                            let e = new Set(Object.values(v).map(e => e.currency));
                            (null == N ? void 0 : N.flat().some(t => !e.has(t.currency) && (sessionStorage.setItem("query_param_currency", b), !0))) ? y(!1): (sessionStorage.removeItem("query_param_currency"), console.log("All currencies are present")), t && (null == t || t.unsubscribe())
                        }
                    };
                    return (0, l.useEffect)(() => {
                        I && r.api_base.api && (t = r.api_base.api.onMessage().subscribe(Z))
                    }, []), (0, l.useEffect)(() => {
                        (g && !f && m && !p && !x || !w) && (0, d.P6)({
                            redirectCallbackUri: `${window.location.origin}/callback`
                        })
                    }, [g, f, m, p, x, w]), (0, i.jsxs)("div", {
                        className: (0, o.Z)("layout", {
                            responsive: n
                        }),
                        children: [!x && (0, i.jsx)(tI, {}), (0, i.jsx)(tN, {
                            children: (0, i.jsx)(s.j3, {})
                        }), !x && n && (0, i.jsx)(eZ, {})]
                    })
                }
        },
        30394: function(e, t, n) {
            n.d(t, {
                Z: () => x
            });
            var i = n("85893"),
                l = n("67294"),
                o = n("63387"),
                a = n.n(o),
                s = n("82106"),
                r = n("86278"),
                c = n("14244"),
                d = n("26088"),
                u = n("92868"),
                h = n("2502"),
                m = n("45452");
            let x = e => {
                let {
                    alignment: t,
                    children: n,
                    className: o,
                    classNameBubble: x,
                    classNameTarget: g,
                    classNameTargetIcon: p,
                    counter: v,
                    disable_message_icon: _,
                    disable_target_icon: b,
                    has_error: f,
                    icon: j,
                    id: w,
                    is_open: y,
                    is_bubble_hover_enabled: C,
                    margin: I = 0,
                    message: N,
                    onBubbleClose: Z,
                    onBubbleOpen: k,
                    onClick: L = () => void 0,
                    relative_render: z = !1,
                    should_disable_pointer_events: S = !1,
                    should_show_cursor: M,
                    zIndex: E = "1",
                    data_testid: F,
                    arrow_styles: T
                } = e, A = l.useRef(), [O, R] = l.useState(void 0), [D, P] = l.useState(!1), {
                    isDesktop: U
                } = (0, h.F)(), [q, V] = (0, r.X)(null, !0), [H, B] = (0, r.m)(), X = l.useMemo(() => !U && void 0 === y, [U, y]);
                l.useEffect(() => {
                    A.current && R(A.current)
                }, [f]), l.useEffect(() => {
                    !V && X && P(!1)
                }, [V, X]);
                let $ = () => {
                        k && k()
                    },
                    G = () => {
                        Z && Z()
                    },
                    W = a()(p, j),
                    K = V && N && (!X || D);
                return (0, i.jsxs)("div", {
                    ref: q,
                    className: a()({
                        "dc-popover__wrapper": z
                    }),
                    onClick: e => {
                        L(e), X && P(!D)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [z && (0, i.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: E
                        },
                        children: (0, i.jsx)("div", {
                            ref: A,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (O || !z) && (0, i.jsx)(s.Popover, {
                        isOpen: y ? ? (K || C && B),
                        positions: [t],
                        padding: I + 8,
                        containerClassName: a()({
                            "react-tiny-popover-container--disabled-pointer-event": S,
                            "react-tiny-popover-cursor-option": M
                        }),
                        ...z ? {
                            parentElement: O,
                            contentLocation: e => {
                                let {
                                    childRect: n,
                                    popoverRect: i,
                                    nudgedLeft: l
                                } = e, o = document.body.clientWidth, a = n.right + (i.width - n.width / 2), s = 0, r = 0;
                                switch (t) {
                                    case "left":
                                        r = -1 * Math.abs((i.height > i.width ? l : i.width) + I), s = n.height > i.height ? (n.height - i.height) / 2 : -((i.height - n.height) / 2 * 1);
                                        break;
                                    case "right":
                                        r = i.width + I, s = n.height > i.height ? (n.height - i.height) / 2 : -((i.height - n.height) / 2 * 1);
                                        break;
                                    case "top":
                                        r = a > o ? -1 * Math.abs(a - o) : 0, s = -1 * Math.abs(i.height + I);
                                        break;
                                    case "bottom":
                                        r = a > o ? -1 * Math.abs(a - o) : 0, s = n.height + I
                                }
                                return {
                                    top: s,
                                    left: r
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: E
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: n,
                                popoverRect: l
                            } = e;
                            return (0, i.jsx)(s.ArrowContainer, {
                                position: t,
                                childRect: n,
                                popoverRect: l,
                                arrowColor: f ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: z ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${f?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...T
                                },
                                children: (0, i.jsxs)("div", {
                                    id: w,
                                    onMouseEnter: $,
                                    onMouseLeave: G,
                                    className: a()(x, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": f
                                    }),
                                    ref: H,
                                    children: [!_ && "info" === j && (0, i.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, i.jsx)(c.Z, {})
                                    }), f && (0, i.jsx)(m.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: N
                                    }) || (0, i.jsx)(m.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: N
                                    })]
                                })
                            })
                        },
                        children: (0, i.jsx)("div", {
                            "data-testid": F,
                            className: a()("dc-popover", o),
                            id: w,
                            children: (0, i.jsxs)("div", {
                                className: a()(g, "dc-popover__target"),
                                children: [!b && (0, i.jsxs)("i", {
                                    className: N ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === j && (0, i.jsx)(c.Z, {
                                        className: W
                                    }), "question" === j && (0, i.jsx)(u.Z, {
                                        className: W
                                    }), "dot" === j && (0, i.jsx)(d.Z, {
                                        className: W
                                    }), "counter" === j && (0, i.jsx)("span", {
                                        className: W,
                                        children: v
                                    })]
                                }), n]
                            })
                        })
                    })]
                })
            }
        },
        86278: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return l
                },
                m: function() {
                    return o
                }
            });
            var i = n(67294);
            let l = (e, t) => {
                    let [n, l] = i.useState(!1), o = i.useRef(null), a = e || o, s = () => l(!0), r = () => l(!1);
                    return i.useEffect(() => {
                        let e = a.current;
                        if (e) return t ? (e.addEventListener("mouseenter", s), e.addEventListener("mouseleave", r)) : (e.addEventListener("mouseover", s), e.addEventListener("mouseout", r)), () => {
                            t ? (e.removeEventListener("mouseenter", s), e.removeEventListener("mouseleave", r)) : (e.removeEventListener("mouseover", s), e.removeEventListener("mouseout", r))
                        }
                    }, [a, t]), [a, n]
                },
                o = () => {
                    let [e, t] = i.useState(!1), n = i.useCallback(() => t(!0), []), l = i.useCallback(() => t(!1), []), o = i.useRef(null);
                    return [i.useCallback(e => {
                        o.current && (o.current.removeEventListener("mouseover", n), o.current.removeEventListener("mouseout", l)), o.current = e, o.current && (o.current.addEventListener("mouseover", n), o.current.addEventListener("mouseout", l))
                    }, [n, l]), e]
                }
        },
        75324: function(e, t, n) {
            n.d(t, {
                Lv: function() {
                    return a
                },
                ZP: function() {
                    return s
                }
            });
            var i = n(67294),
                l = n(89471),
                o = n(46543);
            let a = () => {
                    let [e, t] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let e = Date.now(),
                            n = setInterval(() => {
                                "function" == typeof window.Intercom ? (t(!0), clearInterval(n)) : Date.now() - e >= 5e3 && clearInterval(n)
                            }, 100);
                        return () => clearInterval(n)
                    }, []), e
                },
                s = e => {
                    let {
                        featureFlagValue: t
                    } = (0, o.Z)({
                        featureFlag: "enable_intercom_dbot"
                    }), n = (0, l.Gq)(t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null);
                    (0, i.useEffect)(() => {
                        var i;
                        let l;
                        if (!!t && "ready" === n && !!(null === (i = window) || void 0 === i ? void 0 : i.DerivInterCom)) return window.DerivInterCom.initialize({
                            hideLauncher: !0,
                            token: e
                        }), l = setInterval(() => {
                            var e;
                            (null === (e = window) || void 0 === e ? void 0 : e.Intercom) && clearInterval(l)
                        }, 500), () => {
                            clearInterval(l)
                        }
                    }, [t, n, e])
                }
        },
        83257: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(67294),
                l = n(83274);
            let o = () => {
                let {
                    ui: e
                } = (0, l.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: n
                } = e;
                return {
                    toggleTheme: (0, i.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: n,
                    setDarkMode: t
                }
            }
        }
    }
]);