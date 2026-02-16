"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["0"], {
        11473: function(e, s, t) {
            t.r(s), t.d(s, {
                default: () => o
            });
            var n = t("85893"),
                r = t("67294");
            let a = {
                    container: "container-g9Gaxh",
                    card: "card-GLYd5x",
                    header: "header-myy5Ol",
                    headerContent: "headerContent-mXtmLB",
                    subtitle: "subtitle-QhUsbH",
                    connectionStatus: "connectionStatus-rsXPpF",
                    statusIndicator: "statusIndicator-P2H8S8",
                    connected: "connected-RVSYXP",
                    disconnected: "disconnected-dXViBH",
                    warning: "warning-SaseIJ",
                    content: "content-swQVDV",
                    tabs: "tabs-L_jJbT",
                    tabButton: "tabButton-sqSjCu",
                    activeTab: "activeTab-koOOqZ",
                    controlsContainer: "controlsContainer-_uhcVR",
                    section: "section-qZuOUG",
                    formGroup: "formGroup-hNBrus",
                    input: "input-H3LH33",
                    helperText: "helperText-RfvB2u",
                    actionButtons: "actionButtons-meSTS6",
                    button: "button-DVUCQ4",
                    primaryButton: "primaryButton-DhshbH",
                    dangerButton: "dangerButton-CsKhsF",
                    spinner: "spinner-KdnQY5",
                    statusGrid: "statusGrid-dQt4Sn",
                    statusCard: "statusCard-LNQDqf",
                    statusRow: "statusRow-GKOyRW",
                    responseContainer: "responseContainer-fUgU7V",
                    responseContent: "responseContent-Mn_E_y",
                    footer: "footer-tVvNYR"
                },
                o = () => {
                    let [e, s] = (0, r.useState)(""), [t, o] = (0, r.useState)(null), [i, c] = (0, r.useState)(!1), [d, l] = (0, r.useState)(!1), [u, p] = (0, r.useState)("controls"), h = (0, r.useRef)(null), m = "ndUovyzfJyp2wIY";
                    (0, r.useEffect)(() => () => {
                        h.current && h.current.close()
                    }, []);
                    let v = s => {
                            if (h.current && h.current.readyState === WebSocket.OPEN) {
                                null == s || s();
                                return
                            }
                            h.current = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=70344"), h.current.onopen = () => {
                                if (c(!0), e.trim()) {
                                    var t;
                                    null === (t = h.current) || void 0 === t || t.send(JSON.stringify({
                                        authorize: e.trim()
                                    }))
                                }
                                null == s || s()
                            }, h.current.onclose = () => c(!1), h.current.onmessage = e => {
                                let s = JSON.parse(e.data);
                                o(s), "authorize" === s.msg_type && s.error && alert("Authorization failed: " + s.error.message), "copy_start" === s.msg_type && s.error && alert("Copy start error: " + s.error.message), "copy_stop" === s.msg_type && s.error && alert("Copy stop error: " + s.error.message), "set_settings" === s.msg_type && (s.error ? console.error("Failed to enable copy trading:", s.error.message) : console.log("Copy trading permission enabled."))
                            }
                        },
                        g = () => new Promise((e, s) => {
                            let t = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=70344");
                            t.onopen = () => {
                                t.send(JSON.stringify({
                                    authorize: m
                                }))
                            }, t.onmessage = n => {
                                var r;
                                let a = JSON.parse(n.data);
                                "authorize" === a.msg_type && (null === (r = a.authorize) || void 0 === r ? void 0 : r.loginid) ? t.send(JSON.stringify({
                                    set_settings: 1,
                                    copytrading_allowed: 1
                                })) : "set_settings" === a.msg_type ? (t.close(), e()) : a.error && (alert("Error enabling copy trading: " + a.error.message), t.close(), s())
                            }
                        }),
                        x = async () => new Promise(e => {
                            let s = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=70344");
                            s.onopen = () => {
                                s.send(JSON.stringify({
                                    authorize: m
                                }))
                            }, s.onmessage = t => {
                                var n;
                                let r = JSON.parse(t.data);
                                "authorize" === r.msg_type && (null === (n = r.authorize) || void 0 === n ? void 0 : n.loginid) ? (e(r.authorize.loginid), s.close()) : r.error && (alert("Failed to fetch trader login ID: " + r.error.message), e(null), s.close())
                            }
                        }),
                        j = async () => {
                            if (!e.trim()) {
                                alert("Copier token is required.");
                                return
                            }
                            l(!0);
                            try {
                                await g(), v(() => {
                                    var e;
                                    let s = {
                                        copy_start: m,
                                        req_id: Date.now()
                                    };
                                    null === (e = h.current) || void 0 === e || e.send(JSON.stringify(s))
                                })
                            } catch {} finally {
                                l(!1)
                            }
                        },
                        y = async () => {
                            l(!0);
                            try {
                                let s = await x();
                                if (!e.trim() || !s) {
                                    alert("Copier token and trader ID are required.");
                                    return
                                }
                                v(() => {
                                    var e;
                                    let t = {
                                        copy_stop: 1,
                                        trader_loginid: s,
                                        req_id: Date.now()
                                    };
                                    null === (e = h.current) || void 0 === e || e.send(JSON.stringify(t))
                                })
                            } finally {
                                l(!1)
                            }
                        };
                    return (0, n.jsx)("div", {
                        className: a.container,
                        children: (0, n.jsxs)("div", {
                            className: a.card,
                            children: [(0, n.jsxs)("div", {
                                className: a.header,
                                children: [(0, n.jsxs)("div", {
                                    className: a.headerContent,
                                    children: [(0, n.jsx)("h1", {
                                        children: "Copy Trading Dashboard"
                                    }), (0, n.jsxs)("div", {
                                        className: a.connectionStatus,
                                        children: [(0, n.jsx)("div", {
                                            className: `${a.statusIndicator} ${i?a.connected:a.disconnected}`
                                        }), (0, n.jsx)("span", {
                                            children: i ? "Connected" : "Disconnected"
                                        })]
                                    })]
                                }), (0, n.jsx)("p", {
                                    className: a.subtitle,
                                    children: "Automatically copy trades from our expert trader"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: a.content,
                                children: [(0, n.jsxs)("div", {
                                    className: a.tabs,
                                    children: [(0, n.jsx)("button", {
                                        onClick: () => p("controls"),
                                        className: `${a.tabButton} ${"controls"===u?a.activeTab:""}`,
                                        children: "Trading Controls"
                                    }), (0, n.jsx)("button", {
                                        onClick: () => p("response"),
                                        className: `${a.tabButton} ${"response"===u?a.activeTab:""}`,
                                        children: "API Response"
                                    })]
                                }), "controls" === u && (0, n.jsxs)("div", {
                                    className: a.controlsContainer,
                                    children: [(0, n.jsxs)("div", {
                                        className: a.section,
                                        children: [(0, n.jsx)("h2", {
                                            children: "Account Setup"
                                        }), (0, n.jsxs)("div", {
                                            className: a.formGroup,
                                            children: [(0, n.jsx)("label", {
                                                children: "Your API Token"
                                            }), (0, n.jsx)("input", {
                                                type: "password",
                                                className: a.input,
                                                placeholder: "Enter your Deriv API token",
                                                value: e,
                                                onChange: e => s(e.target.value)
                                            }), (0, n.jsx)("p", {
                                                className: a.helperText,
                                                children: "This token authenticates your account for copy trading"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: a.section,
                                        children: [(0, n.jsx)("h2", {
                                            children: "Trading Actions"
                                        }), (0, n.jsxs)("div", {
                                            className: a.actionButtons,
                                            children: [(0, n.jsx)("button", {
                                                onClick: j,
                                                disabled: d,
                                                className: `${a.button} ${a.primaryButton}`,
                                                children: d ? (0, n.jsxs)(n.Fragment, {
                                                    children: [(0, n.jsx)("div", {
                                                        className: a.spinner
                                                    }), "Starting..."]
                                                }) : "Start Copy Trading"
                                            }), (0, n.jsx)("button", {
                                                onClick: y,
                                                disabled: d,
                                                className: `${a.button} ${a.dangerButton}`,
                                                children: "Stop Copy Trading"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: a.section,
                                        children: [(0, n.jsx)("h2", {
                                            children: "Connection Status"
                                        }), (0, n.jsxs)("div", {
                                            className: a.statusGrid,
                                            children: [(0, n.jsxs)("div", {
                                                className: a.statusCard,
                                                children: [(0, n.jsxs)("div", {
                                                    className: a.statusRow,
                                                    children: [(0, n.jsx)("div", {
                                                        className: `${a.statusIndicator} ${i?a.connected:a.disconnected}`
                                                    }), (0, n.jsx)("span", {
                                                        children: "WebSocket"
                                                    })]
                                                }), (0, n.jsx)("p", {
                                                    children: i ? "Connected to trading server" : "Disconnected from trading server"
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: a.statusCard,
                                                children: [(0, n.jsxs)("div", {
                                                    className: a.statusRow,
                                                    children: [(0, n.jsx)("div", {
                                                        className: `${a.statusIndicator} ${e?a.connected:a.warning}`
                                                    }), (0, n.jsx)("span", {
                                                        children: "Account Auth"
                                                    })]
                                                }), (0, n.jsx)("p", {
                                                    children: e ? "Token provided" : "No token provided"
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: a.statusCard,
                                                children: [(0, n.jsxs)("div", {
                                                    className: a.statusRow,
                                                    children: [(0, n.jsx)("div", {
                                                        className: `${a.statusIndicator} ${a.connected}`
                                                    }), (0, n.jsx)("span", {
                                                        children: "Trader Ready"
                                                    })]
                                                }), (0, n.jsx)("p", {
                                                    children: "Expert trader configured"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), "response" === u && t && (0, n.jsxs)("div", {
                                    className: a.responseContainer,
                                    children: [(0, n.jsx)("h2", {
                                        children: "API Response"
                                    }), (0, n.jsx)("pre", {
                                        className: a.responseContent,
                                        children: JSON.stringify(t, null, 2)
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: a.footer,
                                children: (0, n.jsx)("p", {
                                    children: "Copy Trading Dashboard • Use with caution • Not financial advice"
                                })
                            })]
                        })
                    })
                }
        }
    }
]);