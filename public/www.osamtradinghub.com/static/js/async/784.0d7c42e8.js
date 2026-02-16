"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["784"], {
        43145: function(e, s, t) {
            t.r(s), t.d(s, {
                default: () => r
            });
            var i = t("85893"),
                a = t("67294");
            let l = {
                    analysisContainer: "analysisContainer-gBL3rx",
                    analysisMa: "analysisMa-fHPN49",
                    priceSection: "priceSection-YarzHn",
                    priceContent: "priceContent-V8g6Tz",
                    currentPrice: "currentPrice-ZzXoQA",
                    priceLabel: "priceLabel-f9TMnB",
                    marketSelector: "marketSelector-iiwU5j",
                    symbolSelect: "symbolSelect-ftv_9P",
                    selectorLabel: "selectorLabel-g9dsuL",
                    analysisSection: "analysisSection-ZG4Azh",
                    sectionTitle: "sectionTitle-q5qRto",
                    digitGrid: "digitGrid-Hi4qPM",
                    digitContainer: "digitContainer-qSn0lv",
                    currentIndicator: "currentIndicator-orjfsT",
                    pulse: "pulse-RrLeeo",
                    digitCircleWrapper: "digitCircleWrapper-wDoojY",
                    digitCircle: "digitCircle-AmLHfP",
                    progressRing: "progressRing-WR_Zwh",
                    digitNumber: "digitNumber-BQH81z",
                    current: "current-sjTnls",
                    highest: "highest-nFksOt",
                    lowest: "lowest-D7FAtG",
                    digitPercentage: "digitPercentage-nv4l9P",
                    analysisStats: "analysisStats-yeg1LO",
                    statHighest: "statHighest-HSujho",
                    statLowest: "statLowest-lCS3wD",
                    digitSelector: "digitSelector-YCgilM",
                    digitButtons: "digitButtons-hAyYyW",
                    digitBtn: "digitBtn-PDpFMp",
                    selected: "selected-wbC8oW",
                    comparisonAnalysis: "comparisonAnalysis-zaft38",
                    comparisonGrid: "comparisonGrid-lds_zw",
                    statCard: "statCard-gJrkbY",
                    statValue: "statValue-TxCCvz",
                    statLabel: "statLabel-qx8pUT",
                    even: "even-KR94XE",
                    odd: "odd-wsGQV5",
                    rise: "rise-MT108o",
                    fall: "fall-HPsOvR",
                    over: "over-z23Jb6",
                    under: "under-kooWnb",
                    equal: "equal-fWE2mx",
                    eoGrid: "eoGrid-mmSBXv",
                    rfGrid: "rfGrid-uzXGsd",
                    patternSection: "patternSection-xQso1h",
                    patternTitle: "patternTitle-TO4E63",
                    patternGrid: "patternGrid-vNxGtq",
                    patternBox: "patternBox-KdW1to",
                    lastDigitsContainer: "lastDigitsContainer-wJ54Nt",
                    lastDigitsTable: "lastDigitsTable-v032Gl",
                    digitsHeader: "digitsHeader-_UIFc_",
                    headerLabel: "headerLabel-_Cljb2",
                    digitsContent: "digitsContent-WrTnHv",
                    digitsGrid: "digitsGrid-KwgT51",
                    digitItem: "digitItem-DHO4Ek",
                    digitValue: "digitValue-gr3cJ7",
                    latestIndicator: "latestIndicator-PNx8UR",
                    evenDigit: "evenDigit-_TE6BG",
                    oddDigit: "oddDigit-WrwuEY",
                    latest: "latest-erDB27",
                    digitsFooter: "digitsFooter-F3CIp7",
                    toggleBtn: "toggleBtn-cgeNXu",
                    statsGrid: "statsGrid-XE0uau",
                    statRow: "statRow-vdKnan",
                    statName: "statName-raP1ps",
                    statData: "statData-mkDKOf"
                },
                r = () => {
                    let [e, s] = (0, a.useState)([]), t = () => localStorage.getItem("selectedSymbol") || "R_10", [r, n] = (0, a.useState)(t()), [c, d] = (0, a.useState)(2), [o, m] = (0, a.useState)(null), [h, u] = (0, a.useState)(!1), g = (0, a.useRef)(null), x = (0, a.useRef)(null), [p, N] = (0, a.useState)([]), [v, j] = (0, a.useState)({
                        volatility: [],
                        jump: [],
                        other: []
                    }), [y, b] = (0, a.useState)(!1), [S, f] = (0, a.useState)(2), C = (0, a.useRef)(null), k = (0, a.useRef)([]);
                    (0, a.useEffect)(() => (L(), () => {
                        x.current && clearTimeout(x.current), g.current && g.current.close()
                    }), []), (0, a.useEffect)(() => {
                        k.current = e
                    }, [e]);
                    let L = () => {
                            g.current && (g.current.onclose = null, g.current.close());
                            let e = new window.WebSocket("wss://ws.derivws.com/websockets/v3?app_id=1089");
                            g.current = e, e.onopen = () => {
                                u(!0), e.send(JSON.stringify({
                                    active_symbols: "brief",
                                    product_type: "basic"
                                }))
                            }, e.onmessage = i => {
                                let a = JSON.parse(i.data);
                                if ("active_symbols" === a.msg_type) {
                                    let {
                                        active_symbols: s
                                    } = a, i = s.filter(e => "synthetics" === e.subgroup && ("synthetic_index" === e.market || "volatility_indices" === e.market)), l = e => {
                                        let s = e.match(/\d+/);
                                        return s ? Number.parseInt(s[0], 10) : 0
                                    };
                                    i.sort((e, s) => {
                                        let t = l(e.display_name);
                                        return t - l(s.display_name)
                                    }), N(i);
                                    let r = [],
                                        n = [],
                                        c = [];
                                    if (i.forEach(e => {
                                            let s = e.display_name.toLowerCase();
                                            s.includes("jump") ? n.push(e) : s.includes("volatility") || s.includes("vol") || "volatility_indices" === e.market ? r.push(e) : c.push(e)
                                        }), j({
                                            volatility: r,
                                            jump: n,
                                            other: c
                                        }), i.length > 0 && null === C.current) {
                                        let s = i.find(e => e.symbol === t()) ? t() : i[0].symbol;
                                        e.send(JSON.stringify({
                                            ticks_history: s,
                                            count: 1e3,
                                            end: "latest",
                                            style: "ticks",
                                            subscribe: 1
                                        })), C.current = s
                                    }
                                }
                                if (a.history) {
                                    let e = a.history.prices.map((e, s) => ({
                                        time: a.history.times[s],
                                        quote: Number.parseFloat(e)
                                    }));
                                    s(e), T(e), void 0 !== a.pip_size && f(a.pip_size)
                                } else if (a.tick && a.tick.symbol === C.current) {
                                    let e = Number.parseFloat(a.tick.quote);
                                    s(s => {
                                        let t = [...s, {
                                            time: a.tick.epoch,
                                            quote: e
                                        }];
                                        return t.length > 1e3 ? t.slice(-1e3) : t
                                    }), void 0 !== a.tick.pip_size && f(a.tick.pip_size)
                                }
                            }, e.onclose = () => {
                                u(!1), x.current = setTimeout(() => {
                                    L()
                                }, 2e3)
                            }, e.onerror = () => {
                                u(!1), x.current = setTimeout(() => {
                                    L()
                                }, 2e3)
                            }
                        },
                        w = e => {
                            if (g.current && g.current.readyState === WebSocket.OPEN) {
                                C.current && C.current !== e && g.current.send(JSON.stringify({
                                    forget: C.current
                                }));
                                g.current.send(JSON.stringify({
                                    ticks_history: e,
                                    count: 1e3,
                                    end: "latest",
                                    style: "ticks",
                                    subscribe: 1
                                })), C.current = e, s([])
                            }
                        },
                        T = e => {
                            if (0 !== e.length) d(Math.min(Math.max(...e.map(e => (e.quote.toFixed(10).split(".")[1] || "").replace(/0+$/, "").length), 2), 5))
                        },
                        D = e => Number.parseInt(e.toFixed(S).slice(-1), 10),
                        $ = e => {
                            n(e), localStorage.setItem("selectedSymbol", e), s([]), setTimeout(() => {
                                w(e)
                            }, 300)
                        },
                        _ = (() => {
                            let s = Array(10).fill(0);
                            return e.forEach(e => {
                                let t = D(e.quote);
                                s[t]++
                            }), s.map(s => s / e.length * 100)
                        })(),
                        G = (() => {
                            let s = Array(10).fill(0);
                            e.forEach(e => {
                                let t = D(e.quote);
                                s[t]++
                            });
                            let t = s.filter((e, s) => s % 2 == 0).reduce((e, s) => e + s, 0),
                                i = s.filter((e, s) => s % 2 != 0).reduce((e, s) => e + s, 0),
                                a = t + i;
                            return {
                                even: a > 0 ? t / a * 100 : 0,
                                odd: a > 0 ? i / a * 100 : 0
                            }
                        })(),
                        F = (() => {
                            let s = 0,
                                t = 0;
                            for (let i = 1; i < e.length; i++) e[i].quote > e[i - 1].quote ? s++ : e[i].quote < e[i - 1].quote && t++;
                            let i = s + t;
                            return {
                                rise: i > 0 ? s / i * 100 : 0,
                                fall: i > 0 ? t / i * 100 : 0
                            }
                        })(),
                        q = (() => {
                            if (null === o) return {
                                over: 0,
                                under: 0,
                                equal: 0
                            };
                            let s = 0,
                                t = 0,
                                i = 0;
                            e.forEach(e => {
                                let a = D(e.quote);
                                a > o ? s++ : a < o ? t++ : i++
                            });
                            let a = e.length;
                            return {
                                over: a > 0 ? s / a * 100 : 0,
                                under: a > 0 ? t / a * 100 : 0,
                                equal: a > 0 ? i / a * 100 : 0
                            }
                        })(),
                        R = e.length > 0 ? e[e.length - 1].quote : null,
                        E = R ? D(R) : null,
                        P = Math.max(..._),
                        M = Math.min(..._.filter(e => e > 0)),
                        B = e.map(e => D(e.quote)),
                        I = y ? 100 : 50,
                        O = B.slice(-I);
                    return (0, i.jsx)("div", {
                        className: l.analysisContainer,
                        children: (0, i.jsxs)("main", {
                            className: l.analysisMa,
                            children: [(0, i.jsxs)("section", {
                                className: l.priceSection,
                                children: [(0, i.jsxs)("div", {
                                    className: l.priceContent,
                                    children: [(0, i.jsx)("div", {
                                        className: l.currentPrice,
                                        children: R ? R.toFixed(S) : "N/A"
                                    }), (0, i.jsx)("div", {
                                        className: l.priceLabel,
                                        children: "Current Price"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: l.marketSelector,
                                    children: [(0, i.jsxs)("select", {
                                        value: r,
                                        onChange: e => $(e.target.value),
                                        className: l.symbolSelect,
                                        children: [v.volatility.length > 0 && (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)("optgroup", {
                                                label: "VOLATILITY MARKETS",
                                                children: v.volatility.map(e => (0, i.jsx)("option", {
                                                    value: e.symbol,
                                                    children: e.display_name
                                                }, e.symbol))
                                            })
                                        }), v.jump.length > 0 && (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)("optgroup", {
                                                label: "JUMP INDICES",
                                                children: v.jump.map(e => (0, i.jsx)("option", {
                                                    value: e.symbol,
                                                    children: e.display_name
                                                }, e.symbol))
                                            })
                                        }), v.other.length > 0 && (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)("optgroup", {
                                                label: "OTHER MARKETS",
                                                children: v.other.map(e => (0, i.jsx)("option", {
                                                    value: e.symbol,
                                                    children: e.display_name
                                                }, e.symbol))
                                            })
                                        }), 0 === p.length && (0, i.jsx)("option", {
                                            value: "R_10",
                                            children: "Loading Markets..."
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: l.selectorLabel,
                                        children: "Market"
                                    })]
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Digit Distribution"
                                }), (0, i.jsx)("div", {
                                    className: l.digitGrid,
                                    children: _.map((e, s) => {
                                        let t = e === M && e > 0,
                                            a = e === P && e > 0,
                                            r = P > 0 ? e / P * 100 : 0;
                                        return (0, i.jsxs)("div", {
                                            className: l.digitContainer,
                                            children: [s === E && (0, i.jsx)("div", {
                                                className: l.currentIndicator,
                                                children: "▼"
                                            }), (0, i.jsx)("div", {
                                                className: l.digitCircleWrapper,
                                                children: (0, i.jsxs)("div", {
                                                    className: l.digitCircle,
                                                    children: [(0, i.jsx)("svg", {
                                                        className: l.progressRing,
                                                        viewBox: "0 0 64 64",
                                                        children: (0, i.jsx)("circle", {
                                                            className: l.progressRingCircle,
                                                            cx: "32",
                                                            cy: "32",
                                                            r: "26",
                                                            fill: "none",
                                                            stroke: t ? "#ef4444" : a ? "#10b981" : "#374151",
                                                            strokeWidth: "4",
                                                            strokeDasharray: `${r/100*163.4} 163.4`,
                                                            strokeLinecap: "round",
                                                            transform: "rotate(-90 32 32)"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: `${l.digitNumber} ${s===E?l.current:t?l.lowest:a?l.highest:""}`,
                                                        children: s
                                                    })]
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: `${l.digitPercentage} ${t?l.lowest:a?l.highest:""}`,
                                                children: [e.toFixed(1), "%"]
                                            })]
                                        }, s)
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: l.analysisStats,
                                    children: ["Highest: ", (0, i.jsxs)("span", {
                                        className: l.statHighest,
                                        children: [P.toFixed(2), "%"]
                                    }), " | Lowest:", " ", (0, i.jsxs)("span", {
                                        className: l.statLowest,
                                        children: [M.toFixed(2), "%"]
                                    })]
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Digit Comparison"
                                }), (0, i.jsxs)("div", {
                                    className: l.digitSelector,
                                    children: [(0, i.jsx)("div", {
                                        className: l.selectorLabel,
                                        children: "Select a digit to analyze:"
                                    }), (0, i.jsx)("div", {
                                        className: l.digitButtons,
                                        children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (0, i.jsx)("button", {
                                            className: `${l.digitBtn} ${o===e?l.selected:""}`,
                                            onClick: () => m(e),
                                            children: e
                                        }, e))
                                    })]
                                }), null !== o && (0, i.jsx)("div", {
                                    className: l.comparisonAnalysis,
                                    children: (0, i.jsxs)("div", {
                                        className: l.comparisonGrid,
                                        children: [(0, i.jsxs)("div", {
                                            className: `${l.statCard} ${l.over}`,
                                            children: [(0, i.jsxs)("div", {
                                                className: l.statValue,
                                                children: [q.over.toFixed(1), "%"]
                                            }), (0, i.jsxs)("div", {
                                                className: l.statLabel,
                                                children: ["Over ", o]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: `${l.statCard} ${l.under}`,
                                            children: [(0, i.jsxs)("div", {
                                                className: l.statValue,
                                                children: [q.under.toFixed(1), "%"]
                                            }), (0, i.jsxs)("div", {
                                                className: l.statLabel,
                                                children: ["Under ", o]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: `${l.statCard} ${l.equal}`,
                                            children: [(0, i.jsxs)("div", {
                                                className: l.statValue,
                                                children: [q.equal.toFixed(1), "%"]
                                            }), (0, i.jsxs)("div", {
                                                className: l.statLabel,
                                                children: ["Equal ", o]
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Even/Odd Pattern"
                                }), (0, i.jsxs)("div", {
                                    className: l.eoGrid,
                                    children: [(0, i.jsxs)("div", {
                                        className: `${l.statCard} ${l.even}`,
                                        children: [(0, i.jsxs)("div", {
                                            className: l.statValue,
                                            children: [G.even.toFixed(1), "%"]
                                        }), (0, i.jsx)("div", {
                                            className: l.statLabel,
                                            children: "Even"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: `${l.statCard} ${l.odd}`,
                                        children: [(0, i.jsxs)("div", {
                                            className: l.statValue,
                                            children: [G.odd.toFixed(1), "%"]
                                        }), (0, i.jsx)("div", {
                                            className: l.statLabel,
                                            children: "Odd"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: l.patternSection,
                                    children: [(0, i.jsx)("h3", {
                                        className: l.patternTitle,
                                        children: "Last 50 Digits Pattern"
                                    }), (0, i.jsx)("div", {
                                        className: l.patternGrid,
                                        children: O.map((e, s) => (0, i.jsx)("div", {
                                            className: `${l.patternBox} ${e%2==0?l.even:l.odd}`,
                                            children: e % 2 == 0 ? "E" : "O"
                                        }, s))
                                    })]
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Market Movement"
                                }), (0, i.jsxs)("div", {
                                    className: l.rfGrid,
                                    children: [(0, i.jsxs)("div", {
                                        className: `${l.statCard} ${l.rise}`,
                                        children: [(0, i.jsxs)("div", {
                                            className: l.statValue,
                                            children: [F.rise.toFixed(1), "%"]
                                        }), (0, i.jsx)("div", {
                                            className: l.statLabel,
                                            children: "Rise"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: `${l.statCard} ${l.fall}`,
                                        children: [(0, i.jsxs)("div", {
                                            className: l.statValue,
                                            children: [F.fall.toFixed(1), "%"]
                                        }), (0, i.jsx)("div", {
                                            className: l.statLabel,
                                            children: "Fall"
                                        })]
                                    })]
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Last Digits Stream"
                                }), (0, i.jsx)("div", {
                                    className: l.lastDigitsContainer,
                                    children: (0, i.jsxs)("div", {
                                        className: l.lastDigitsTable,
                                        children: [(0, i.jsx)("div", {
                                            className: l.digitsHeader,
                                            children: (0, i.jsxs)("span", {
                                                className: l.headerLabel,
                                                children: ["Latest digits (", I, " showing)"]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: l.digitsContent,
                                            children: (0, i.jsx)("div", {
                                                className: l.digitsGrid,
                                                children: O.map((e, s) => (0, i.jsxs)("div", {
                                                    className: `${l.digitItem} ${e%2==0?l.evenDigit:l.oddDigit} ${s===O.length-1?l.latest:""}`,
                                                    title: `Position ${I-s}: ${e}`,
                                                    children: [(0, i.jsx)("span", {
                                                        className: l.digitValue,
                                                        children: e
                                                    }), s === O.length - 1 && (0, i.jsx)("span", {
                                                        className: l.latestIndicator,
                                                        children: "●"
                                                    })]
                                                }, s))
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: l.digitsFooter,
                                            children: (0, i.jsx)("button", {
                                                className: l.toggleBtn,
                                                onClick: () => b(!y),
                                                children: y ? "← Show Less (50)" : "Show More (100) →"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("section", {
                                className: l.analysisSection,
                                children: [(0, i.jsx)("h2", {
                                    className: l.sectionTitle,
                                    children: "Statistics"
                                }), (0, i.jsxs)("div", {
                                    className: l.statsGrid,
                                    children: [(0, i.jsxs)("div", {
                                        className: l.statRow,
                                        children: [(0, i.jsx)("span", {
                                            className: l.statName,
                                            children: "Total Ticks:"
                                        }), (0, i.jsx)("span", {
                                            className: l.statData,
                                            children: e.length
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: l.statRow,
                                        children: [(0, i.jsx)("span", {
                                            className: l.statName,
                                            children: "Pip Size:"
                                        }), (0, i.jsx)("span", {
                                            className: l.statData,
                                            children: S
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                }
        }
    }
]);