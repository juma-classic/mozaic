"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["987"], {
        23085: function(e, r, t) {
            t.r(r), t.d(r, {
                default: () => A
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("96877"),
                o = t("27412"),
                i = t("45697"),
                a = t.n(i),
                d = t("48059"),
                c = t("48766"),
                _ = t("94145"),
                h = t("66163"),
                u = t("31784"),
                m = t("50299"),
                x = t("45221"),
                g = t("45452");
            let v = e => {
                    let {
                        error_message: r
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "unhandled-error",
                        children: [(0, l.jsx)(m.Z, {
                            height: "120px",
                            width: "120px",
                            fill: "var(--text-general)"
                        }), (0, l.jsx)(g.Z, {
                            className: "da-icon-with-message__text",
                            as: "p",
                            lineHeight: "xxl",
                            align: "center",
                            weight: "bold",
                            children: (0, l.jsx)(d.Xx, {
                                i18n_default_text: "Sorry for the interruption"
                            })
                        }), (0, l.jsx)(g.Z, {
                            className: "da-icon-with-message__text__desc",
                            as: "p",
                            size: "xs",
                            lineHeight: "xxs",
                            align: "center",
                            children: r
                        }), (0, l.jsx)(x.Z, {
                            onClick: () => location.reload(),
                            has_effect: !0,
                            primary: !0,
                            large: !0,
                            children: (0, l.jsx)(d.Xx, {
                                i18n_default_text: "Refresh"
                            })
                        })]
                    })
                },
                p = e => {
                    var r;
                    let {
                        messages: t
                    } = e, [n, o] = s.useState(!1), i = null == t ? void 0 : null === (r = t[0]) || void 0 === r ? void 0 : r.toString();
                    s.useEffect(() => {
                        o(!0)
                    }, []);
                    let a = () => {
                        o(!n)
                    };
                    return (0, l.jsxs)(u.Z, {
                        has_close_icon: !0,
                        width: "440px",
                        height: "284px",
                        is_open: n,
                        toggleModal: a,
                        children: [(0, l.jsx)(c.Z, {
                            children: (0, l.jsx)(u.Z.Body, {
                                children: (0, l.jsx)(v, {
                                    error_message: i
                                })
                            })
                        }), (0, l.jsx)(h.Z, {
                            children: (0, l.jsx)(_.Z, {
                                portal_element_id: "modal_root",
                                has_close_icon: !0,
                                visible: n,
                                onClose: a,
                                children: (0, l.jsx)(u.Z.Body, {
                                    children: (0, l.jsx)(v, {
                                        error_message: i
                                    })
                                })
                            })
                        })]
                    })
                };
            var j = t("63387"),
                b = t.n(j),
                f = t("2502"),
                w = t("11527"),
                N = t("79655");
            let y = e => {
                    let {
                        children: r,
                        className: t,
                        to: s,
                        onClick: n,
                        size: o = "medium"
                    } = e;
                    return (0, l.jsx)(N.rU, {
                        className: b()("dc-btn dc-btn--primary", t, "effect", `dc-btn__${o}`),
                        to: s ? ? "",
                        onClick: n,
                        children: r
                    })
                },
                Z = e => {
                    var r;
                    let {
                        buttonOnClick: t,
                        buttonSize: s = "large",
                        classNameImage: n,
                        header: o,
                        image_url: i,
                        messages: a,
                        redirect_labels: d,
                        redirect_urls: _,
                        should_clear_error_on_click: u,
                        setError: m,
                        should_redirect: x = !0
                    } = e, v = () => {
                        u ? (null == m || m(!1, null), window.location.assign("https://app.deriv.com")) : null == t || t()
                    }, {
                        isMobile: p
                    } = (0, f.F)();
                    return (0, l.jsxs)("div", {
                        className: "dc-page-error__container",
                        children: [!!i && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(c.Z, {
                                children: (0, l.jsx)("img", {
                                    className: n,
                                    src: i,
                                    alt: "404",
                                    loading: "lazy",
                                    width: "607px",
                                    height: "366px"
                                })
                            }), (0, l.jsx)(h.Z, {
                                children: (0, l.jsx)("img", {
                                    className: n,
                                    src: i,
                                    alt: "404",
                                    loading: "lazy",
                                    width: "328px",
                                    height: "200px"
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: b()("dc-page-error__box", {
                                "dc-page-error__box--left": !!i
                            }),
                            children: [(0, l.jsx)(g.Z, {
                                as: "h3",
                                size: p ? "s" : "l",
                                align: "center",
                                weight: "bold",
                                lineHeight: "s",
                                color: "prominent",
                                children: o
                            }), (0, l.jsx)("div", {
                                className: b()("dc-page-error__message-wrapper", {
                                    "dc-page-error__message-wrapper--left": !!i
                                }),
                                children: (0, l.jsx)(g.Z, {
                                    color: "prominent",
                                    className: b()("dc-page-error__message", {
                                        "dc-page-error__message--left": !!i
                                    }),
                                    children: a.map((e, r) => (null == e ? void 0 : e.has_html) ? (0, l.jsx)(g.Z, {
                                        as: "p",
                                        size: p ? "xxs" : "s",
                                        align: p ? "center" : "left",
                                        lineHeight: "x",
                                        className: "dc-page-error__message-paragraph",
                                        dangerouslySetInnerHTML: {
                                            __html: null == e ? void 0 : e.message
                                        }
                                    }, r) : (0, l.jsx)(g.Z, {
                                        as: "p",
                                        size: p ? "xxs" : "s",
                                        align: p ? "center" : "left",
                                        lineHeight: "x",
                                        className: "dc-page-error__message-paragraph",
                                        children: e
                                    }, r))
                                })
                            }), (0, l.jsxs)("div", {
                                className: "dc-page-error__btn-wrapper",
                                "data-testid": "dc-page-error__btn-wrapper",
                                children: [x && 0 !== d.length && (null == _ ? void 0 : null === (r = _.map) || void 0 === r ? void 0 : r.call(_, (e, r) => (0, l.jsx)(y, {
                                    className: "dc-page-error__btn",
                                    onClick: v,
                                    size: s,
                                    children: (0, l.jsx)(g.Z, {
                                        weight: "bold",
                                        size: p ? "xs" : "s",
                                        className: "dc-page-error__btn-text dc-btn__text",
                                        children: d[r]
                                    })
                                }, r))), !x && (0, l.jsx)(w.z, {
                                    type: "button",
                                    className: "dc-page-error__btn--no-redirect",
                                    onClick: v,
                                    size: p ? "sm" : "md",
                                    children: (0, l.jsx)(g.Z, {
                                        weight: "bold",
                                        size: p ? "xs" : "s",
                                        className: "dc-page-error__btn-text dc-btn__text",
                                        children: d[0]
                                    })
                                })]
                            })]
                        })]
                    })
                };
            var E = t("63069");
            let k = () => (0, l.jsxs)("div", {
                    className: "unhandled-error",
                    children: [(0, l.jsx)(m.Z, {
                        height: "120px",
                        width: "120px"
                    }), (0, l.jsx)(g.Z, {
                        className: "da-icon-with-message__text",
                        as: "p",
                        size: "s",
                        color: "general",
                        lineHeight: "xxl",
                        align: "center",
                        weight: "bold",
                        children: (0, E.sJ)().header
                    }), (0, l.jsx)(g.Z, {
                        className: "da-icon-with-message__text__desc",
                        as: "p",
                        size: "xs",
                        color: "general",
                        lineHeight: "xxs",
                        align: "center",
                        children: (0, E.sJ)().description
                    }), (0, l.jsx)(x.Z, {
                        onClick: () => location.reload(),
                        has_effect: !0,
                        primary: !0,
                        large: !0,
                        text: (0, E.sJ)().cta_label
                    })]
                }),
                C = () => {
                    let [e, r] = s.useState(!1);
                    s.useEffect(() => {
                        r(!0)
                    }, []);
                    let t = () => {
                        r(!e)
                    };
                    return (0, l.jsxs)(u.Z, {
                        has_close_icon: !0,
                        width: "440px",
                        height: "284px",
                        is_open: e,
                        toggleModal: t,
                        children: [(0, l.jsx)(c.Z, {
                            children: (0, l.jsx)(u.Z.Body, {
                                children: (0, l.jsx)(k, {})
                            })
                        }), (0, l.jsx)(h.Z, {
                            children: (0, l.jsx)(_.Z, {
                                portal_element_id: "modal_root",
                                has_close_icon: !0,
                                visible: e,
                                onClose: t,
                                children: (0, l.jsx)(u.Z.Body, {
                                    children: (0, l.jsx)(k, {})
                                })
                            })
                        })]
                    })
                },
                z = e => {
                    let {
                        error_header: r,
                        error_messages: t,
                        ...s
                    } = e;
                    return r && t ? (0, l.jsx)(Z, {
                        header: r,
                        messages: t,
                        ...s
                    }) : t ? (0, l.jsx)(p, {
                        messages: t
                    }) : (0, l.jsx)(C, {})
                };
            var L = t("33181");
            let H = e => {
                let {
                    header: r,
                    message: t,
                    redirect_label: s,
                    redirectOnClick: n = null,
                    should_clear_error_on_click: o,
                    setError: i,
                    redirect_to: a = L.xOw.trade,
                    should_redirect: c = !0
                } = e;
                return (0, l.jsx)(z, {
                    error_header: r ? ? "",
                    error_messages: t ? [t, ""] : [],
                    redirect_urls: [a],
                    redirect_labels: !s && [] || [s || (0, d.NC)("Refresh")],
                    buttonOnClick: n || (() => window.location.reload()),
                    should_clear_error_on_click: o,
                    setError: i,
                    should_redirect: c
                })
            };
            H.propTypes = {
                header: a().string,
                message: a().oneOfType([a().node, a().string, a().object]),
                redirectOnClick: a().func || a().object,
                redirect_label: a().string,
                setError: a().func,
                should_clear_error_on_click: a().bool,
                should_redirect: a().bool,
                redirect_to: a().string,
                should_show_refresh: a().bool
            };
            class R extends s.Component {
                constructor(e) {
                    super(e), (0, o._)(this, "componentDidCatch", (e, r) => {
                        window.TrackJS && window.TrackJS.console.log(this.props.root_store), this.setState({
                            hasError: !0,
                            error: e,
                            info: r
                        })
                    }), (0, o._)(this, "render", () => this.state.hasError ? (0, l.jsx)(H, {
                        should_show_refresh: !0
                    }) : this.props.children), this.state = {
                        hasError: !1
                    }
                }
            }
            R.propTypes = {
                root_store: a().object,
                children: a().oneOfType([a().string, a().arrayOf(a().node), a().node])
            };
            var S = t("83274"),
                O = t("89606");
            let T = (0, n.Pi)(() => {
                let {
                    client: e,
                    ui: r
                } = (0, S.oR)(), {
                    is_trading_experience_incomplete: t,
                    content_flag: n,
                    is_logged_in: o,
                    accounts: i,
                    loginid: a
                } = e, {
                    is_trading_assessment_for_new_user_enabled: c
                } = r, _ = (0, s.useMemo)(() => {
                    var e;
                    return o && (null == i ? void 0 : null === (e = i[a]) || void 0 === e ? void 0 : e.landing_company_name) === "maltainvest" && !c && t && n !== L.DQA.LOW_RISK_CR_EU && n !== L.DQA.LOW_RISK_CR_NON_EU
                }, [o, c, t, n, i, a]);
                return (0, l.jsxs)(u.Z, {
                    is_open: _ || !1,
                    width: "44rem",
                    className: "trade-modal-wrapper",
                    children: [(0, l.jsxs)(u.Z.Body, {
                        children: [(0, l.jsx)(O.J, {
                            icon: "ic-currency-eur-check",
                            className: "currency-icon",
                            size: 95
                        }), (0, l.jsx)(g.Z, {
                            as: "p",
                            align: "center",
                            weight: "bold",
                            className: "verified-account__text",
                            children: (0, l.jsx)(d.Xx, {
                                i18n_default_text: "Trading Experience Assessment<0/>",
                                components: [(0, l.jsx)("br", {}, 0)]
                            })
                        }), (0, l.jsx)(g.Z, {
                            as: "p",
                            size: "xs",
                            align: "center",
                            children: (0, l.jsx)(d.Xx, {
                                i18n_default_text: "As per our regulatory obligations, we are required to assess your trading knowledge and experience.<0/><0/>Please click ‘OK’ to continue",
                                components: [(0, l.jsx)("br", {}, 0)]
                            })
                        })]
                    }), (0, l.jsx)(u.Z.Footer, {
                        children: (0, l.jsx)(x.Z, {
                            type: "button",
                            large: !0,
                            text: (0, d.NC)("OK"),
                            primary: !0,
                            onClick: () => {
                                window.location.assign("https://app.deriv.com/account/trading-assessment")
                            }
                        })
                    })]
                })
            });
            var I = t("88199");
            t("674");
            let B = (0, s.lazy)(() => Promise.all([t.e("361"), t.e("834"), t.e("761"), t.e("97")]).then(t.bind(t, 58766))),
                $ = e => {
                    let {
                        text: r = "WELCOME !!",
                        speed: t = 150
                    } = e, [n, o] = (0, s.useState)("");
                    return (0, s.useEffect)(() => {
                        let e = 0,
                            l = setInterval(() => {
                                e < r.length ? (o(r.slice(0, e + 1)), e++) : clearInterval(l)
                            }, t);
                        return () => clearInterval(l)
                    }, [r, t]), (0, l.jsx)("div", {
                        className: "typing-mesoflix",
                        children: n
                    })
                },
                P = () => (0, l.jsxs)("div", {
                    className: "spinner-root",
                    children: [(0, l.jsx)("div", {
                        className: "spinner"
                    }), (0, l.jsx)($, {})]
                }),
                F = () => (0, l.jsx)(P, {}),
                M = (0, n.Pi)(() => {
                    var e, r, t, s, n, o, i;
                    let {
                        common: a
                    } = (0, S.oR)();
                    return a.error ? (0, l.jsx)(H, {
                        header: null === (e = a.error) || void 0 === e ? void 0 : e.header,
                        message: null === (r = a.error) || void 0 === r ? void 0 : r.message,
                        redirect_label: null === (t = a.error) || void 0 === t ? void 0 : t.redirect_label,
                        redirectOnClick: null === (s = a.error) || void 0 === s ? void 0 : s.redirectOnClick,
                        should_clear_error_on_click: null === (n = a.error) || void 0 === n ? void 0 : n.should_clear_error_on_click,
                        setError: a.setError,
                        redirect_to: null === (o = a.error) || void 0 === o ? void 0 : o.redirect_to,
                        should_redirect: null === (i = a.error) || void 0 === i ? void 0 : i.should_redirect
                    }) : null
                }),
                A = () => {
                    let e = (0, S.oR)(),
                        r = (0, s.useRef)(!1),
                        [t, n] = (0, s.useState)(!1);
                    return ((0, s.useEffect)(() => {
                        (async () => {
                            !r.current && (await I.api_base.init(), r.current = !0, n(!0))
                        })()
                    }, []), e && t) ? (0, l.jsx)(s.Suspense, {
                        fallback: (0, l.jsx)(F, {}),
                        children: (0, l.jsxs)(R, {
                            root_store: e,
                            children: [(0, l.jsx)(M, {}), (0, l.jsx)(B, {}), (0, l.jsx)(T, {})]
                        })
                    }) : (0, l.jsx)(F, {})
                }
        },
        48766: function(e, r, t) {
            t.d(r, {
                Z: () => o
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("77149");
            let o = e => {
                let {
                    children: r
                } = e;
                return (0, n.nI)() ? (0, l.jsx)(s.Fragment, {
                    children: r
                }) : null
            }
        },
        97050: function(e, r, t) {
            t.d(r, {
                Z: () => o
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("93581");
            let o = e => {
                let {
                    children: r,
                    className: t,
                    is_bypassed: o = !1,
                    is_disabled: i = !1,
                    id: a,
                    height_offset: d,
                    max_autoheight_offset: c
                } = e, _ = d ? `calc(100rvh - ${d})` : "calc(100rvh)", h = {
                    height: c ? "" : _,
                    maxHeight: c ? `calc(100rvh - ${c})` : ""
                };
                return (s.useEffect(() => {
                    window.dispatchEvent(new Event("resize"))
                }, [d]), o) ? r : (0, l.jsx)(n.default, {
                    id: a,
                    className: t,
                    style: i ? {} : h,
                    "data-testid": "dt_div_100_vh",
                    children: r
                })
            }
        },
        94145: function(e, r, t) {
            t.d(r, {
                Z: () => u
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("63387"),
                o = t.n(n),
                i = t("73935"),
                a = t("81262"),
                d = t("76298"),
                c = t("97050"),
                _ = t("29490"),
                h = t("43882");
            let u = e => {
                let {
                    children: r,
                    footer: t,
                    has_close_icon: n = !0,
                    has_full_height: u,
                    header_classname: m,
                    info_banner: x,
                    portal_element_id: g,
                    renderTitle: v,
                    title: p,
                    visible: j,
                    wrapper_classname: b,
                    learn_more_banner: f
                } = e, w = s.useRef(null), [N, y] = s.useState(0);
                s.useLayoutEffect(() => {
                    w.current && !N && y(w.current.offsetHeight)
                }, [t, N]);
                let Z = document.getElementById(g),
                    E = (e, r) => {
                        let t = r.getBoundingClientRect();
                        if (t.top + r.clientHeight + 20 > window.innerHeight) {
                            let l = (window.innerHeight - r.clientHeight) / 2;
                            e.scrollTop += t.top - l
                        }
                    };
                return (e.visible ? (document.body.style.overflow = "hidden", Z && (Z.style.overflow = "hidden")) : (document.body.style.overflow = "unset", Z && (Z.style.overflow = "unset")), Z) ? i.createPortal((0, l.jsx)(a.Z, {
                    appear: !0,
                    in: j,
                    timeout: 250,
                    classNames: {
                        enter: "dc-mobile-dialog--enter",
                        enterDone: "dc-mobile-dialog--enter-done",
                        exit: "dc-mobile-dialog--exit"
                    },
                    unmountOnExit: !0,
                    children: (0, l.jsx)("div", {
                        "data-testid": "dt_mobile_dialog",
                        className: "dc-mobile-dialog",
                        onClick: e => {
                            let r = e.target;
                            if ("A" !== r.tagName && e.stopPropagation(), "INPUT" === r.tagName && "number" === r.type) {
                                let t = () => E(e.currentTarget, r);
                                window.addEventListener("resize", t, !1), window.setTimeout(() => {
                                    window.removeEventListener("resize", t, !1)
                                }, 2e3)
                            }
                        },
                        children: (0, l.jsxs)(c.Z, {
                            className: o()("dc-mobile-dialog__container", {
                                "dc-mobile-dialog__container--has-scroll": e.has_content_scroll,
                                "dc-mobile-dialog__container--has-info-banner": x || f
                            }),
                            height_offset: e.content_height_offset || "8px",
                            children: [(0, l.jsxs)(h.Z, {
                                is_bypassed: !x && !f,
                                is_scrollbar_hidden: !0,
                                className: x || f ? o()("dc-mobile-dialog__header-wrapper", m) : "",
                                children: [(0, l.jsxs)("div", {
                                    className: o()("dc-mobile-dialog__header", !x && !f && m),
                                    children: [(0, l.jsx)(_.Z, {
                                        as: "h2",
                                        size: "xs",
                                        color: "prominent",
                                        weight: "bold",
                                        lineHeight: "unset",
                                        className: "dc-mobile-dialog__title",
                                        children: v ? v() : p
                                    }), n && (0, l.jsx)("div", {
                                        "data-testid": "dt_dc_mobile_dialog_close_btn",
                                        className: "icons dc-btn-close dc-mobile-dialog__close-btn",
                                        onClick: e.onClose,
                                        children: (0, l.jsx)(d.Z, {
                                            className: "dc-mobile-dialog__close-btn-icon",
                                            height: "20px",
                                            width: "20px"
                                        })
                                    })]
                                }), x, f]
                            }), (0, l.jsx)("div", {
                                className: o()("dc-mobile-dialog__content", {
                                    "dc-mobile-dialog__content--is-full-height": u
                                }),
                                style: N ? {
                                    height: `calc(100% - ${N}px)`
                                } : void 0,
                                children: (0, l.jsx)("div", {
                                    className: o()({
                                        [`dc-mobile-dialog__${b}`]: b
                                    }),
                                    children: r
                                })
                            }), t && (0, l.jsx)("div", {
                                ref: w,
                                className: "dc-mobile-dialog__footer",
                                children: t
                            })]
                        })
                    })
                }), Z) : null
            }
        },
        66163: function(e, r, t) {
            t.d(r, {
                Z: () => o
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("77149");
            let o = e => {
                let {
                    children: r
                } = e;
                return (0, n.tq)() ? (0, l.jsx)(s.Fragment, {
                    children: r
                }) : null
            }
        },
        31784: function(e, r, t) {
            t.d(r, {
                Z: () => x
            });
            var l = t("85893"),
                s = t("67294"),
                n = t("63387"),
                o = t.n(n),
                i = t("73935"),
                a = t("81262"),
                d = t("1051"),
                c = t("14117"),
                _ = t("76298"),
                h = t("29490");
            let u = e => {
                    let {
                        children: r,
                        className: t,
                        close_icon_color: n,
                        elements_to_ignore: a,
                        has_close_icon: u = !0,
                        has_return_icon: m = !1,
                        header: x,
                        header_background_color: g,
                        height: v,
                        id: p,
                        is_confirmation_modal: j,
                        is_open: b,
                        is_risk_warning_visible: f,
                        is_title_centered: w,
                        is_vertical_bottom: N,
                        is_vertical_centered: y,
                        is_vertical_top: Z,
                        onMount: E,
                        onReturn: k,
                        onUnmount: C,
                        portalId: z = "modal_root",
                        renderTitle: L,
                        should_close_on_click_outside: H,
                        should_header_stick_body: R = !0,
                        small: S,
                        title: O,
                        toggleModal: T,
                        width: I
                    } = e, B = s.useRef(document.createElement("div")), $ = z && document.getElementById(z), P = s.useRef($ || document.getElementById(z)), F = s.useRef(null), M = [".dc-datepicker__picker", ".dc-mobile-dialog", ".dc-dropdown-list", ".dc-dropdown__list", ".modal_root"], A = () => {
                        var e;
                        return null === (e = P.current) || void 0 === e ? void 0 : e.querySelectorAll(M.join(", ")).length
                    };
                    (0, d.t)(F, () => {
                        b && (null == T || T())
                    }, e => {
                        var r, t;
                        let l = null === (r = document.getElementById("popup_root")) || void 0 === r ? void 0 : r.hasChildNodes(),
                            s = e.path ? ? (null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e));
                        return H || u && !A() && b && !l && !(a && (null == s ? void 0 : s.find(e => a.includes(e))))
                    }), s.useEffect(() => {
                        var e, r;
                        return B.current.classList.add("dc-modal"), null == P || null === (r = P.current) || void 0 === r || null === (e = r.appendChild) || void 0 === e || e.call(r, B.current), null == E || E(), () => {
                            let e = null == P ? void 0 : P.current,
                                r = null == B ? void 0 : B.current;
                            e && r && (null == e ? void 0 : e.contains(r)) && (null == e || e.removeChild(r)), null == C || C()
                        }
                    }, []);
                    let J = s.useCallback(e => {
                        "Escape" === e.key && (null == T || T())
                    }, [T]);
                    s.useEffect(() => (window.addEventListener("keydown", J), () => window.removeEventListener("keydown", J)), [J]);
                    let X = L ? L() : null;
                    return i.createPortal((0, l.jsxs)("div", {
                        ref: F,
                        id: p,
                        className: o()("dc-modal__container", {
                            [`dc-modal__container_${t}`]: t,
                            "dc-modal__container--risk-message": f,
                            "dc-modal__container--small": S,
                            "dc-modal__container--is-vertical-centered": y,
                            "dc-modal__container--is-vertical-bottom": N,
                            "dc-modal__container--is-vertical-top": Z,
                            "dc-modal__container--is-confirmation-modal": j
                        }),
                        style: {
                            height: v || "auto",
                            width: I || "auto"
                        },
                        children: [!f && (x || O || X) && (0, l.jsxs)("div", {
                            className: o()("dc-modal-header", {
                                "dc-modal-header__border-bottom": !R,
                                [`dc-modal-header--${t}`]: t,
                                "dc-modal-header--is-title-centered": w
                            }),
                            style: {
                                background: g
                            },
                            children: [X && (0, l.jsx)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: o()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${t}`]: t
                                }),
                                children: X
                            }), O && (0, l.jsxs)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: o()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${t}`]: t
                                }),
                                children: [m && (0, l.jsx)(c.Z, {
                                    onClick: k,
                                    className: "dc-modal-header__icon"
                                }), O]
                            }), x && (0, l.jsx)("div", {
                                className: o()("dc-modal-header__section", {
                                    [`dc-modal-header__section--${t}`]: t
                                }),
                                children: x
                            }), u && (0, l.jsx)("div", {
                                onClick: T,
                                className: "dc-modal-header__close",
                                role: "button",
                                children: (0, l.jsx)(_.Z, {
                                    height: "20px",
                                    width: "20px",
                                    color: n,
                                    "data-testid": "dt_modal_close_icon",
                                    fill: "var(--text-general)",
                                    className: "icon-general-fill-path"
                                })
                            })]
                        }), r]
                    }), B.current)
                },
                m = e => {
                    let {
                        children: r,
                        className: t,
                        close_icon_color: s,
                        elements_to_ignore: n,
                        exit_classname: o,
                        has_close_icon: i = !0,
                        has_return_icon: d = !1,
                        header: c,
                        header_background_color: _,
                        height: h,
                        id: m,
                        is_confirmation_modal: x,
                        is_open: g,
                        is_risk_warning_visible: v,
                        is_title_centered: p,
                        is_vertical_bottom: j,
                        is_vertical_centered: b,
                        is_vertical_top: f,
                        onEntered: w,
                        onExited: N,
                        onMount: y,
                        onReturn: Z,
                        onUnmount: E,
                        portalId: k = "modal_root",
                        renderTitle: C,
                        should_close_on_click_outside: z = !1,
                        should_header_stick_body: L = !0,
                        small: H,
                        title: R,
                        transition_timeout: S,
                        toggleModal: O,
                        width: T
                    } = e;
                    return (0, l.jsx)(a.Z, {
                        appear: !0,
                        in: g,
                        timeout: S || 250,
                        classNames: {
                            appear: "dc-modal__container--enter",
                            enter: "dc-modal__container--enter",
                            enterDone: "dc-modal__container--enter-done",
                            exit: o || "dc-modal__container--exit"
                        },
                        unmountOnExit: !0,
                        onEntered: w,
                        onExited: N,
                        children: (0, l.jsx)(u, {
                            className: t,
                            close_icon_color: s,
                            should_header_stick_body: L,
                            has_return_icon: d,
                            header: c,
                            header_background_color: _,
                            id: m,
                            is_open: g,
                            is_risk_warning_visible: v,
                            is_confirmation_modal: x,
                            is_vertical_bottom: j,
                            is_vertical_centered: b,
                            is_vertical_top: f,
                            is_title_centered: p,
                            title: R,
                            toggleModal: O,
                            has_close_icon: i,
                            height: h,
                            onMount: y,
                            onReturn: Z,
                            onUnmount: E,
                            portalId: k,
                            renderTitle: C,
                            should_close_on_click_outside: z,
                            small: H,
                            width: T,
                            elements_to_ignore: n,
                            children: r
                        })
                    })
                };
            m.Body = e => {
                let {
                    children: r,
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: o()("dc-modal-body", t),
                    children: r
                })
            }, m.Footer = e => {
                let {
                    children: r,
                    className: t,
                    has_separator: n,
                    is_bypassed: i
                } = e;
                return i ? (0, l.jsx)(s.Fragment, {
                    children: r
                }) : (0, l.jsx)("div", {
                    "data-testid": "dt_modal_footer",
                    className: o()("dc-modal-footer", {
                        "dc-modal-footer--separator": n
                    }, t),
                    children: r
                })
            };
            let x = m
        },
        43882: function(e, r, t) {
            t.d(r, {
                Z: () => l
            });
            let l = t("40150").Z
        },
        40150: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return a
                }
            });
            var l = t(85893),
                s = t(67294),
                n = t(63387),
                o = t.n(n),
                i = t(86278);
            let a = e => {
                let {
                    autohide: r = !0,
                    children: t,
                    className: n,
                    has_horizontal: a,
                    height: d,
                    is_bypassed: c,
                    is_only_horizontal: _,
                    is_only_horizontal_overlay: h,
                    is_scrollbar_hidden: u,
                    testId: m = "dt_themed_scrollbars",
                    onScroll: x,
                    refSetter: g = null,
                    style: v = {},
                    scroll_height: p,
                    should_scroll_to_selected: j = !1,
                    width: b
                } = e, [f, w] = (0, i.X)(g, !1);
                return (s.useEffect(() => {
                    if (j && p) {
                        var e;
                        null == f || null === (e = f.current) || void 0 === e || e.scrollTo(0, p)
                    }
                }, [p, f, j]), c) ? t : (0, l.jsx)("div", {
                    "data-testid": m,
                    ref: f,
                    className: o()("dc-themed-scrollbars", n, {
                        "dc-themed-scrollbars__autohide": r,
                        "dc-themed-scrollbars__autohide--is-hovered": r && w,
                        "dc-themed-scrollbars--has-horizontal": a,
                        "dc-themed-scrollbars--only-horizontal": _,
                        "dc-themed-scrollbars--only-horizontal-overlay": h,
                        "dc-themed-scrollbars--hidden-scrollbar": u
                    }),
                    style: {
                        maxHeight: d || "100%",
                        maxWidth: b || "none",
                        ...v
                    },
                    onScroll: x,
                    children: t
                })
            }
        },
        86278: function(e, r, t) {
            t.d(r, {
                X: function() {
                    return s
                },
                m: function() {
                    return n
                }
            });
            var l = t(67294);
            let s = (e, r) => {
                    let [t, s] = l.useState(!1), n = l.useRef(null), o = e || n, i = () => s(!0), a = () => s(!1);
                    return l.useEffect(() => {
                        let e = o.current;
                        if (e) return r ? (e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", a)) : (e.addEventListener("mouseover", i), e.addEventListener("mouseout", a)), () => {
                            r ? (e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", a)) : (e.removeEventListener("mouseover", i), e.removeEventListener("mouseout", a))
                        }
                    }, [o, r]), [o, t]
                },
                n = () => {
                    let [e, r] = l.useState(!1), t = l.useCallback(() => r(!0), []), s = l.useCallback(() => r(!1), []), n = l.useRef(null);
                    return [l.useCallback(e => {
                        n.current && (n.current.removeEventListener("mouseover", t), n.current.removeEventListener("mouseout", s)), n.current = e, n.current && (n.current.addEventListener("mouseover", t), n.current.addEventListener("mouseout", s))
                    }, [t, s]), e]
                }
        }
    }
]);