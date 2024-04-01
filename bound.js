"use strict";
(() => {
    var Zo = Object.defineProperty;
    var s = (e, t) => () => (e && (t = e((e = 0))), t);
    var I = (e, t) => {
        for (var n in t) Zo(e, n, { get: t[n], enumerable: !0 });
    };
    var ce,
        le,
        N,
        ze,
        Z,
        Ke,
        ue = s(() => {
            "use strict";
            (ce = window.nativeModuleProxy), (le = ce.MMKVManager);
            N = ce.DCDFileManager ?? ce.RTNFileManager;
            ze = ce.InfoDictionaryManager ?? ce.RTNClientInfoManager;
            (Z = ce.DCDDeviceManager ?? ce.RTNDeviceManager), (Ke = ce.BundleUpdaterManager);
        });
    var Ot = {};
    I(Ot, {
        find: () => G,
        findAll: () => We,
        findByDisplayName: () => Lt,
        findByDisplayNameAll: () => oa,
        findByName: () => V,
        findByNameAll: () => ra,
        findByProps: () => u,
        findByPropsAll: () => na,
        findByStoreName: () => De,
        findByTypeName: () => aa,
        findByTypeNameAll: () => ia,
        modules: () => Mt,
    });
    var ea,
        ar,
        ir,
        Mt,
        G,
        We,
        sr,
        cr,
        lr,
        ur,
        ta,
        u,
        na,
        V,
        ra,
        Lt,
        oa,
        aa,
        ia,
        De,
        w = s(() => {
            "use strict";
            (ea = window.ErrorUtils.getGlobalHandler()),
                (ar = function (e) {
                    return Object.defineProperty(window.modules, e, { value: window.modules[e], enumerable: !1, configurable: !0, writable: !0 });
                });
            for (let e in window.modules) {
                let t = Number(e),
                    n = window.modules[t]?.publicModule?.exports;
                if (!n || n === window || n.proxygone === null) {
                    ar(t);
                    continue;
                }
            }
            (ir = function (e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return function (n) {
                    let r = [];
                    for (let o in e) {
                        let a = Number(o),
                            i = e[a]?.publicModule?.exports;
                        if (!e[a].isInitialized)
                            try {
                                window.ErrorUtils.setGlobalHandler(function () {}), __r(a), window.ErrorUtils.setGlobalHandler(ea);
                            } catch {}
                        if (!i) {
                            ar(a);
                            continue;
                        }
                        if (i.default && i.__esModule && n(i.default)) {
                            if (t) return i.default;
                            r.push(i.default);
                        }
                        if (n(i)) {
                            if (t) return i;
                            r.push(i);
                        }
                    }
                    if (!t) return r;
                };
            }),
                (Mt = window.modules),
                (G = ir(Mt, !0)),
                (We = ir(Mt)),
                (sr = function (e) {
                    return function (t) {
                        return e.every(function (n) {
                            return t[n] !== void 0;
                        });
                    };
                }),
                (cr = function (e, t) {
                    return t
                        ? function (n) {
                              return n?.name === e;
                          }
                        : function (n) {
                              return n?.default?.name === e;
                          };
                }),
                (lr = function (e, t) {
                    return t
                        ? function (n) {
                              return n?.displayName === e;
                          }
                        : function (n) {
                              return n?.default?.displayName === e;
                          };
                }),
                (ur = function (e, t) {
                    return t
                        ? function (n) {
                              return n?.type?.name === e;
                          }
                        : function (n) {
                              return n?.default?.type?.name === e;
                          };
                }),
                (ta = function (e) {
                    return function (t) {
                        return t.getName && t.getName.length === 0 && t.getName() === e;
                    };
                }),
                (u = function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return G(sr(t));
                }),
                (na = function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return We(sr(t));
                }),
                (V = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return G(cr(e, t));
                }),
                (ra = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return We(cr(e, t));
                }),
                (Lt = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return G(lr(e, t));
                }),
                (oa = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return We(lr(e, t));
                }),
                (aa = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return G(ur(e, t));
                }),
                (ia = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                    return We(ur(e, t));
                }),
                (De = function (e) {
                    return G(ta(e));
                });
        });
    function ee(e, t) {
        return gt(e, t, { walkable: ["props", "children", "child", "sibling"] });
    }
    var fr = s(() => {
        "use strict";
        fe();
    });
    function Ft(e, t, n, r) {
        if (!(r > n.maxDepth) && e) {
            try {
                if (t(e)) return e;
            } catch {}
            if (Array.isArray(e)) {
                for (let o of e)
                    if (!(typeof o != "object" || o === null))
                        try {
                            let a = Ft(o, t, n, r + 1);
                            if (a) return a;
                        } catch {}
            } else if (typeof e == "object") {
                for (let o of Object.keys(e))
                    if (!(typeof e[o] != "object" || e[o] === null) && !(n.walkable.length && !n.walkable.includes(o)) && !n.ignore.includes(o))
                        try {
                            let a = Ft(e[o], t, n, r + 1);
                            if (a) return a;
                        } catch {}
            }
        }
    }
    function gt(e, t) {
        let { walkable: n = [], ignore: r = [], maxDepth: o = 100 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return Ft(e, t, { walkable: n, ignore: r, maxDepth: o }, 0);
    }
    var mr = s(() => {
        "use strict";
    });
    async function me(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e4,
            r = await fetch(e, { signal: sa(n), ...t });
        if (!r.ok) throw new Error("Request returned non-ok");
        return r;
    }
    function sa(e) {
        let t = new AbortController();
        return (
            setTimeout(function () {
                return t.abort(`Timed out after ${e}ms`);
            }, e),
            t.signal
        );
    }
    var dr = s(() => {
        "use strict";
    });
    function kt(e) {
        return Object.isFrozen(e) ? Object.assign({}, e) : e;
    }
    var pr = s(() => {
        "use strict";
    });
    function $(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        let o = { ...e };
        return (
            n.forEach(function (a) {
                return delete o[a];
            }),
            o
        );
    }
    var gr = s(() => {
        "use strict";
    });
    var Gt = {};
    I(Gt, { findInReactTree: () => ee, findInTree: () => gt, safeFetch: () => me, unfreeze: () => kt, without: () => $ });
    var fe = s(() => {
        "use strict";
        fr();
        mr();
        dr();
        pr();
        gr();
    });
    var Ut,
        J,
        ht = s(() => {
            (Ut = ["a", "b", "i"]), (J = new Map());
        });
    function hr(e, t, n, r, o) {
        let a = J.get(t)?.[e];
        if (!a) return o ? Reflect.construct(t[e], n, r) : t[e].apply(r, n);
        for (let l of a.b.values()) {
            let d = l.call(r, n);
            Array.isArray(d) && (n = d);
        }
        let i = [...a.i.values()].reduce(
            function (l, d) {
                return function () {
                    for (var p = arguments.length, P = new Array(p), B = 0; B < p; B++) P[B] = arguments[B];
                    return d.call(r, P, l);
                };
            },
            function () {
                for (var l = arguments.length, d = new Array(l), p = 0; p < l; p++) d[p] = arguments[p];
                return o ? Reflect.construct(a.o, d, r) : a.o.apply(r, d);
            }
        )(...n);
        for (let l of a.a.values()) i = l.call(r, n, i) ?? i;
        return i;
    }
    var yr = s(() => {
        ht();
    });
    function Vt(e, t, n, r) {
        let o = J.get(e),
            a = o?.[t];
        return a?.[r].has(n)
            ? (a[r].delete(n),
              Ut.every(function (i) {
                  return a[i].size === 0;
              }) && (Reflect.defineProperty(e, t, { value: a.o, writable: !0, configurable: !0 }) || (e[t] = a.o), delete o[t]),
              Object.keys(o).length == 0 && J.delete(e),
              !0)
            : !1;
    }
    function Rr() {
        for (let [e, t] of J.entries()) for (let n in t) for (let r of Ut) for (let o of t[n]?.[r].keys() ?? []) Vt(e, n, o, r);
    }
    var Ht = s(() => {
        ht();
    });
    function yt(e) {
        return function (t, n, r) {
            let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
            if (typeof n[t] != "function") throw new Error(`${t} is not a function in ${n.constructor.name}`);
            J.has(n) || J.set(n, Object.create(null));
            let a = J.get(n);
            if (!a[t]) {
                let d = n[t];
                a[t] = { o: d, b: new Map(), i: new Map(), a: new Map() };
                let p = function (C, M, k) {
                        let be = hr(t, n, M, C, k);
                        return o && l(), be;
                    },
                    P = new Proxy(d, {
                        apply: function (C, M, k) {
                            return p(M, k, !1);
                        },
                        construct: function (C, M) {
                            return p(d, M, !0);
                        },
                        get: function (C, M, k) {
                            return M == "toString" ? d.toString.bind(d) : Reflect.get(C, M, k);
                        },
                    });
                Reflect.defineProperty(n, t, { value: P, configurable: !0, writable: !0 }) || (n[t] = P);
            }
            let i = Symbol(),
                l = function () {
                    return Vt(n, t, i, e);
                };
            return a[t][e].set(i, r), l;
        };
    }
    var Er = s(() => {
        yr();
        ht();
        Ht();
    });
    var $t = {};
    I($t, { after: () => y, before: () => jt, instead: () => we, unpatchAll: () => Rr });
    var jt,
        we,
        y,
        zt = s(() => {
            Er();
            Ht();
            (jt = yt("b")), (we = yt("i")), (y = yt("a"));
        });
    var br,
        H = s(() => {
            "use strict";
            zt();
            zt();
            br = { ...$t };
        });
    function Wt() {
        return {
            listeners: Object.values(Kt).reduce(function (e, t) {
                return (e[t] = new Set()), e;
            }, {}),
            on(e, t) {
                this.listeners[e].has(t) || this.listeners[e].add(t);
            },
            off(e, t) {
                this.listeners[e].delete(t);
            },
            once(e, t) {
                var n = this;
                let r = function (o, a) {
                    n.off(o, r), t(o, a);
                };
                this.on(e, r);
            },
            emit(e, t) {
                for (let n of this.listeners[e]) n(e, t);
            },
        };
    }
    var Kt,
        wr = s(() => {
            "use strict";
            (function (e) {
                (e.GET = "GET"), (e.SET = "SET"), (e.DEL = "DEL");
            })(Kt || (Kt = {}));
        });
    var xr,
        Yt,
        Sr,
        Xt,
        de,
        Me,
        _r = s(() => {
            "use strict";
            ue();
            h();
            (xr = /[<>:"\/\\|?*]/g),
                (Yt = function (e) {
                    return c.Platform.select({ default: e, ios: N.saveFileToGallery ? e : `Documents/${e}` });
                }),
                (Sr = function (e) {
                    return xr.test(e) && (e = e.replace(xr, "-").replace(/-+/g, "-")), `vd_mmkv/${e}`;
                }),
                (Xt = async function (e) {
                    (await le.getItem(e)) && le.removeItem(e);
                    let t = Sr(e);
                    (await N.fileExists(`${N.getConstants().DocumentsDirPath}/${t}`)) && (await N.removeFile?.("documents", t));
                }),
                (de = function (e) {
                    let t = Sr(e);
                    return Me(
                        t,
                        (async function () {
                            try {
                                let n = `${N.getConstants().DocumentsDirPath}/${t}`;
                                if (await N.fileExists(n)) return;
                                let r = (await le.getItem(e)) ?? "{}";
                                if (r === "!!LARGE_VALUE!!") {
                                    let o = `${N.getConstants().CacheDirPath}/mmkv/${e}`;
                                    (await N.fileExists(o)) ? (r = await N.readFile(o, "utf8")) : (console.log(`${e}: Experienced data loss :(`), (r = "{}"));
                                }
                                await N.writeFile("documents", Yt(t), r, "utf8"), (await le.getItem(e)) !== null && (le.removeItem(e), console.log(`Successfully migrated ${e} store from MMKV storage to fs`));
                            } catch (n) {
                                console.error("Failed to migrate to fs from MMKVManager ", n);
                            }
                        })()
                    );
                }),
                (Me = function (e, t) {
                    let n;
                    return {
                        get: async function () {
                            await t;
                            let r = `${N.getConstants().DocumentsDirPath}/${e}`;
                            return !n && !(await N.fileExists(r)) ? ((n = !0), N.writeFile("documents", Yt(e), "{}", "utf8")) : JSON.parse(await N.readFile(r, "utf8"));
                        },
                        set: async function (r) {
                            await t, await N.writeFile("documents", Yt(e), JSON.stringify(r), "utf8");
                        },
                    };
                });
        });
    var qt = {};
    I(qt, { awaitSyncWrapper: () => ge, createFileBackend: () => Me, createMMKVBackend: () => de, createProxy: () => Cr, createStorage: () => te, purgeStorage: () => Xt, useProxy: () => R, wrapSync: () => pe });
    function Cr() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = Wt();
        function n(r, o) {
            return new Proxy(r, {
                get(a, i) {
                    if (i === Tr) return t;
                    let l = [...o, i],
                        d = a[i];
                    return d != null ? (t.emit("GET", { path: l, value: d }), typeof d == "object" ? n(d, l) : d) : d;
                },
                set(a, i, l) {
                    return (a[i] = l), t.emit("SET", { path: [...o, i], value: l }), !0;
                },
                deleteProperty(a, i) {
                    let l = delete a[i];
                    return l && t.emit("DEL", { path: [...o, i] }), l;
                },
            });
        }
        return { proxy: n(e, []), emitter: t };
    }
    function R(e) {
        if (e[Jt]) throw e[Jt];
        let t = e[Tr];
        if (!t) throw new Error("InvalidArgumentExcpetion - storage[emitterSymbol] is " + typeof t);
        let [, n] = React.useReducer(function (r) {
            return ~r;
        }, 0);
        return (
            React.useEffect(function () {
                let r = function () {
                    return n();
                };
                return (
                    t.on("SET", r),
                    t.on("DEL", r),
                    function () {
                        t.off("SET", r), t.off("DEL", r);
                    }
                );
            }, []),
            e
        );
    }
    async function te(e) {
        let t = await e.get(),
            { proxy: n, emitter: r } = Cr(t),
            o = function () {
                return e.set(n);
            };
        return r.on("SET", o), r.on("DEL", o), n;
    }
    function pe(e) {
        let t,
            n,
            r = [],
            o = function (a) {
                return t ? a() : r.push(a);
            };
        return (
            e
                .then(function (a) {
                    (t = a),
                        r.forEach(function (i) {
                            return i();
                        });
                })
                .catch(function (a) {
                    n = a;
                }),
            new Proxy(
                {},
                {
                    ...Object.fromEntries(
                        Object.getOwnPropertyNames(Reflect).map(function (a) {
                            return [
                                a,
                                function (i) {
                                    for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++) d[p - 1] = arguments[p];
                                    return Reflect[a](t ?? i, ...d);
                                },
                            ];
                        })
                    ),
                    get(a, i, l) {
                        return i === Jt ? n : i === vr ? o : Reflect.get(t ?? a, i, l);
                    },
                }
            )
        );
    }
    var Tr,
        vr,
        Jt,
        ge,
        U = s(() => {
            "use strict";
            wr();
            _r();
            (Tr = Symbol.for("vendetta.storage.emitter")), (vr = Symbol.for("vendetta.storage.accessor")), (Jt = Symbol.for("vendetta.storage.error"));
            ge = function (e) {
                return new Promise(function (t) {
                    return e[vr](t);
                });
            };
        });
    var Qt,
        ca,
        A,
        xe = s(() => {
            "use strict";
            w();
            (Qt = u("setLogFn").default), (ca = new Qt("Bound")), (A = ca);
        });
    var rn = {};
    I(rn, {
        color: () => ne,
        fetchTheme: () => Ye,
        getCurrentTheme: () => Te,
        initThemes: () => nn,
        installTheme: () => Se,
        patchChatBackground: () => en,
        removeTheme: () => tn,
        selectTheme: () => _e,
        themes: () => _,
        updateThemes: () => Nr,
    });
    async function Zt(e) {
        if (typeof e != "object") throw new Error("Theme must be an object");
        await Me("vendetta_theme.json").set(e);
    }
    function en() {
        let e = Te()?.data?.background;
        if (!e) return;
        let t = V("MessagesWrapperConnected", !1);
        if (!t) return;
        let { MessagesWrapper: n } = u("MessagesWrapper");
        if (!n) return;
        let r = [
            y("default", t, function (o, a) {
                return React.createElement(c.ImageBackground, { style: { flex: 1, height: "100%" }, source: { uri: e.url }, blurRadius: typeof e.blur == "number" ? e.blur : 0, children: a });
            }),
            y("render", n.prototype, function (o, a) {
                let i = ee(a, function (l) {
                    return "HACK_fixModalInteraction" in l?.props && l?.props?.style;
                });
                i ? (i.props.style = Object.assign(c.StyleSheet.flatten(i.props.style ?? {}), { backgroundColor: "#0000" })) : A.error("Didn't find Messages when patching MessagesWrapper!");
            }),
        ];
        return function () {
            return r.forEach(function (o) {
                return o();
            });
        };
    }
    function Ir(e) {
        if (re.valid(e)) return re(e).hex();
        let t = Number(c.processColor(e));
        return re.rgb((t >> 16) & 255, (t >> 8) & 255, t & 255, (t >> 24) & 255).hex();
    }
    function ua(e) {
        if (e.semanticColors) {
            let t = e.semanticColors;
            for (let n in t) for (let r in t[n]) t[n][r] &&= Ir(t[n][r]);
        }
        if (e.rawColors) {
            let t = e.rawColors;
            for (let n in t) e.rawColors[n] = Ir(t[n]);
            c.Platform.OS === "android" && fa(t);
        }
        return e;
    }
    function fa(e) {
        let t = {
            BLACK_ALPHA_60: ["BLACK", 0.6],
            BRAND_NEW_360_ALPHA_20: ["BRAND_360", 0.2],
            BRAND_NEW_360_ALPHA_25: ["BRAND_360", 0.25],
            BRAND_NEW_500_ALPHA_20: ["BRAND_500", 0.2],
            PRIMARY_DARK_500_ALPHA_20: ["PRIMARY_500", 0.2],
            PRIMARY_DARK_700_ALPHA_60: ["PRIMARY_700", 0.6],
            STATUS_GREEN_500_ALPHA_20: ["GREEN_500", 0.2],
            STATUS_RED_500_ALPHA_20: ["RED_500", 0.2],
        };
        for (let n in t) {
            let [r, o] = t[n];
            e[r] && (e[n] = re(e[r]).alpha(o).hex());
        }
    }
    async function Ye(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            n;
        try {
            n = await (await me(e, { cache: "no-store" })).json();
        } catch {
            throw new Error(`Failed to fetch theme at ${e}`);
        }
        (_[e] = { id: e, selected: t, data: ua(n) }), t && Zt(_[e]);
    }
    async function Se(e) {
        if (typeof e != "string" || e in _) throw new Error("Theme already installed");
        await Ye(e);
    }
    async function _e(e) {
        if (e === "default") return await Zt({});
        let t = Object.values(_).find(function (n) {
            return n.selected;
        })?.id;
        t && (_[t].selected = !1), (_[e].selected = !0), await Zt(_[e]);
    }
    async function tn(e) {
        let t = _[e];
        return t.selected && (await _e("default")), delete _[e], t.selected;
    }
    function Te() {
        let e = window.__vendetta_loader?.features?.themes?.prop;
        return (e && window[e]) || null;
    }
    async function Nr() {
        await ge(_);
        let e = Te();
        await Promise.allSettled(
            Object.keys(_).map(function (t) {
                return Ye(t, e?.id === t);
            })
        );
    }
    async function nn() {
        let e = Te();
        if (!e) return;
        let t = ne.default.unsafe_rawColors;
        (ne.default.unsafe_rawColors = new Proxy(t, {
            get: function (n, r) {
                return e ? e.data?.rawColors?.[r] ?? Reflect.get(t, r) : Reflect.get(t, r);
            },
        })),
            we("resolveSemanticColor", ne.default.meta ?? ne.default.internal, function (n, r) {
                if (!e) return r(...n);
                let [o, a] = n,
                    [i, l] = Ar(o, a),
                    d = o === "amoled" ? 2 : o === "light" ? 1 : 0;
                let p = la[i] ?? i,
                    P = (e.data?.semanticColors?.[i] ?? e.data?.semanticColors?.[p])?.[d];
                if (i === "CHAT_BACKGROUND" && typeof e.data?.background?.alpha == "number")
                    return re(P || "black")
                        .alpha(1 - e.data.background.alpha)
                        .hex();
                if (P) return P;
                let B = e.data?.rawColors?.[l.raw];
                return B ? (l.opacity === 1 ? B : re(B).alpha(l.opacity).hex()) : r(...n);
            }),
            await Nr();
    }
    function Ar(e, t) {
        let n = t[(Ar._sym ??= Object.getOwnPropertySymbols(t)[0])],
            r = ne.SemanticColor[n];
        return [n, r[e.toLowerCase()]];
    }
    var ne,
        _,
        la,
        j = s(() => {
            "use strict";
            h();
            fe();
            w();
            H();
            U();
            xe();
            (ne = u("SemanticColor")),
                (_ = pe(te(de("VENDETTA_THEMES")))),
                (la = {
                    BG_BACKDROP: "BACKGROUND_FLOATING",
                    BG_BASE_PRIMARY: "BACKGROUND_PRIMARY",
                    BG_BASE_SECONDARY: "BACKGROUND_SECONDARY",
                    BG_BASE_TERTIARY: "BACKGROUND_SECONDARY_ALT",
                    BG_MOD_FAINT: "BACKGROUND_MODIFIER_ACCENT",
                    BG_MOD_STRONG: "BACKGROUND_MODIFIER_ACCENT",
                    BG_MOD_SUBTLE: "BACKGROUND_MODIFIER_ACCENT",
                    BG_SURFACE_OVERLAY: "BACKGROUND_FLOATING",
                    BG_SURFACE_OVERLAY_TMP: "BACKGROUND_FLOATING",
                    BG_SURFACE_RAISED: "BACKGROUND_MOBILE_PRIMARY",
                });
        });
    var Rt,
        Pr,
        c,
        re,
        Et = s(() => {
            "use strict";
            j();
            H();
            (Rt = function (e) {
                for (let t in window.modules) {
                    let n = window.modules[t]?.publicModule.exports;
                    if (n && e(n)) return n;
                }
            }),
                (Pr = Rt(function (e) {
                    return e?.default?.name === "requireNativeComponent";
                }));
            Pr &&
                we("default", Pr, function (e, t) {
                    try {
                        return t(...e);
                    } catch {
                        return e[0];
                    }
                });
            window.React = Rt(function (e) {
                return e.createElement;
            });
            (c = Rt(function (e) {
                return e.AppRegistry;
            })),
                (re = Rt(function (e) {
                    return e.brewer;
                }));
            if (window.__vendetta_loader?.features.themes)
                try {
                    nn();
                } catch (e) {
                    console.error("[Bound] Failed to initialize themes...", e);
                }
        });
    var ln = {};
    I(ln, {
        Flux: () => ya,
        FluxDispatcher: () => wt,
        NavigationNative: () => K,
        React: () => L,
        ReactNative: () => c,
        TextStyleSheet: () => Ce,
        assets: () => Xe,
        channels: () => an,
        chroma: () => re,
        clipboard: () => oe,
        commands: () => bt,
        constants: () => he,
        i18n: () => ve,
        invites: () => pa,
        lodash: () => xt,
        moment: () => cn,
        navigation: () => ga,
        navigationStack: () => ha,
        stylesheet: () => z,
        toasts: () => sn,
        url: () => Le,
        util: () => Ra,
    });
    function da(e) {
        if (on) {
            for (let t in e)
                e[t] = new Proxy(c.StyleSheet.flatten(e[t]), {
                    get(n, r, o) {
                        let a = Reflect.get(n, r, o);
                        return Br.isSemanticColor(a) ? Br.resolveSemanticColor(ma.theme, a) : a;
                    },
                });
            return e;
        }
    }
    var ma,
        on,
        Br,
        he,
        an,
        ve,
        Le,
        sn,
        z,
        oe,
        Xe,
        pa,
        bt,
        ga,
        ha,
        K,
        Ce,
        ya,
        wt,
        L,
        cn,
        xt,
        Ra,
        h = s(() => {
            "use strict";
            w();
            Et();
            Et();
            Et();
            (ma = De("ThemeStore")), (on = u("colors", "unsafe_rawColors")), (Br = on?.internal ?? on?.meta);
            (he = u("Fonts", "Permissions")),
                (an = u("getVoiceChannelId")),
                (ve = u("Messages")),
                (Le = u("openURL", "openDeeplink")),
                (sn = G(function (e) {
                    return e.open && e.close && !e.startDrag && !e.init && !e.openReplay && !e.setAlwaysOnTop && !e.setAccountFlag;
                })),
                (z = {
                    ...G(function (e) {
                        return e.createStyles && !e.ActionSheet;
                    }),
                    createThemedStyleSheet: da,
                    ...u("createThemedStyleSheet"),
                }),
                (oe = u("setString", "getString", "hasString")),
                (Xe = u("registerAsset")),
                (pa = u("acceptInviteAndTransitionToInviteChannel")),
                (bt = u("getBuiltInCommands")),
                (ga = u("pushLazy")),
                (ha = u("createStackNavigator")),
                (K = u("NavigationContainer")),
                ({ TextStyleSheet: Ce } = u("TextStyleSheet")),
                (ya = u("connectStores")),
                (wt = u("_currentDispatchActionType")),
                (L = window.React),
                (cn = u("isMoment")),
                (xt = u("forEachRight")),
                (Ra = u("inspect", "isNullOrUndefined"));
        });
    var fn = {};
    I(fn, { all: () => ae, find: () => Ea, getAssetByID: () => wa, getAssetByName: () => ba, getAssetIDByName: () => f, patchAssets: () => un });
    function un() {
        let e = y("registerAsset", Xe, function (t, n) {
            let r = t[0];
            ae[r.name] = { ...r, id: n };
        });
        for (let t = 1; ; t++) {
            let n = Xe.getAssetByID(t);
            if (!n) break;
            ae[n.name] || (ae[n.name] = { ...n, id: t });
        }
        return e;
    }
    var ae,
        Ea,
        ba,
        wa,
        f,
        x = s(() => {
            "use strict";
            h();
            H();
            ae = {};
            (Ea = function (e) {
                return Object.values(ae).find(e);
            }),
                (ba = function (e) {
                    return ae[e];
                }),
                (wa = function (e) {
                    return Xe.getAssetByID(e);
                }),
                (f = function (e) {
                    return ae[e]?.id;
                });
        });
    var mn = {};
    I(mn, { showToast: () => g });
    var xa,
        g,
        W = s(() => {
            "use strict";
            w();
            h();
            ({ uuid4: xa } = u("uuid4")),
                (g = function (e, t) {
                    return sn.open({ key: `vd-toast-${xa()}`, content: e, source: t, icon: t });
                });
        });
    var m,
        Oe,
        O = s(() => {
            "use strict";
            U();
            (m = pe(te(de("VENDETTA_SETTINGS")))), (Oe = pe(te(Me("vendetta_loader.json"))));
        });
    var pn = {};
    I(pn, { connectToDebugger: () => qe, connectToRDT: () => Qe, getDebugInfo: () => Sa, patchLogHook: () => dn, setSafeMode: () => Je, socket: () => F, versionHash: () => St });
    function Je(e) {
        (m.safeMode = { ...m.safeMode, enabled: e }),
            window.__vendetta_loader?.features.themes && (Te()?.id && (m.safeMode.currentThemeId = Te().id), m.safeMode?.enabled ? _e("default") : m.safeMode?.currentThemeId && _e(m.safeMode?.currentThemeId));
    }
    function qe(e) {
        if ((F !== void 0 && F.readyState !== WebSocket.CLOSED && F.close(), !e)) {
            g("Invalid debugger URL!", f("Small"));
            return;
        }
        (F = new WebSocket(`ws://${e}`)),
            F.addEventListener("open", function () {
                return g("Connected to debugger.", f("Check"));
            }),
            F.addEventListener("message", function (t) {
                try {
                    (0, eval)(t.data);
                } catch (n) {
                    console.error(n);
                }
            }),
            F.addEventListener("error", function (t) {
                console.log(`Debugger error: ${t.message}`), g("An error occurred with the debugger connection!", f("Small"));
            });
    }
    function dn() {
        let e = y("nativeLoggingHook", globalThis, function (t) {
            F?.readyState === WebSocket.OPEN && F.send(JSON.stringify({ message: t[0], level: t[1] })), A.log(t[0]);
        });
        return function () {
            F && F.close(), e();
        };
    }
    function Sa() {
        let e = window.HermesInternal.getRuntimeProperties(),
            t = e["OSS Release Version"],
            n = "for RN ",
            r = c.Platform.constants,
            o = r.reactNativeVersion;
        return {
            vendetta: { version: St, loader: window.__vendetta_loader?.name.replaceAll("Vendetta", "Bound") ?? "Unknown" },
            discord: { version: ze.Version, build: ze.Build },
            react: { version: React.version, nativeVersion: t.startsWith(n) ? t.substring(n.length) : `${o.major}.${o.minor}.${o.patch}` },
            hermes: { version: t, buildType: e.Build, bytecodeVersion: e["Bytecode Version"] },
            ...c.Platform.select({ android: { os: { name: "Android", version: r.Release, sdk: r.Version } }, ios: { os: { name: r.systemName, version: r.osVersion } } }),
            ...c.Platform.select({
                android: { device: { manufacturer: r.Manufacturer, brand: r.Brand, model: r.Model, codename: Z.device } },
                ios: { device: { manufacturer: Z.deviceManufacturer, brand: Z.deviceBrand, model: Z.deviceModel, codename: Z.device } },
            }),
        };
    }
    var F,
        Qe,
        St,
        Fe = s(() => {
            "use strict";
            h();
            H();
            j();
            ue();
            x();
            W();
            O();
            xe();
            Qe = function () {
                return window.__vendetta_rdc?.connectToDevTools({ host: m.debuggerUrl.split(":")?.[0], resolveRNStyle: c.StyleSheet.flatten });
            };
            St = "b69c65e";
        });
    var q,
        Dr,
        Mr,
        Ze,
        et = s(() => {
            (function (e) {
                (e.BRAND = "brand"), (e.RED = "red"), (e.GREEN = "green"), (e.PRIMARY = "primary"), (e.TRANSPARENT = "transparent"), (e.GREY = "grey"), (e.LIGHTGREY = "lightgrey"), (e.WHITE = "white"), (e.LINK = "link");
            })(q || (q = {}));
            (function (e) {
                (e[(e.BUILT_IN = 0)] = "BUILT_IN"), (e[(e.BUILT_IN_TEXT = 1)] = "BUILT_IN_TEXT"), (e[(e.BUILT_IN_INTEGRATION = 2)] = "BUILT_IN_INTEGRATION"), (e[(e.BOT = 3)] = "BOT"), (e[(e.PLACEHOLDER = 4)] = "PLACEHOLDER");
            })(Dr || (Dr = {}));
            (function (e) {
                (e[(e.SUB_COMMAND = 1)] = "SUB_COMMAND"),
                    (e[(e.SUB_COMMAND_GROUP = 2)] = "SUB_COMMAND_GROUP"),
                    (e[(e.STRING = 3)] = "STRING"),
                    (e[(e.INTEGER = 4)] = "INTEGER"),
                    (e[(e.BOOLEAN = 5)] = "BOOLEAN"),
                    (e[(e.USER = 6)] = "USER"),
                    (e[(e.CHANNEL = 7)] = "CHANNEL"),
                    (e[(e.ROLE = 8)] = "ROLE"),
                    (e[(e.MENTIONABLE = 9)] = "MENTIONABLE"),
                    (e[(e.NUMBER = 10)] = "NUMBER"),
                    (e[(e.ATTACHMENT = 11)] = "ATTACHMENT");
            })(Mr || (Mr = {}));
            (function (e) {
                (e[(e.CHAT = 1)] = "CHAT"), (e[(e.USER = 2)] = "USER"), (e[(e.MESSAGE = 3)] = "MESSAGE");
            })(Ze || (Ze = {}));
        });
    var hn = {};
    I(hn, { patchCommands: () => gn, registerCommand: () => _a });
    function gn() {
        let e = y("getBuiltInCommands", bt, function (t, n) {
            let [r] = t;
            if (r === Ze.CHAT) return n.concat(tt);
        });
        return function () {
            (tt = []), e();
        };
    }
    function _a(e) {
        let t = bt.getBuiltInCommands(Ze.CHAT, !0, !1);
        t.sort(function (r, o) {
            return parseInt(o.id) - parseInt(r.id);
        });
        let n = t[t.length - 1];
        return (
            (e.id = (parseInt(n.id, 10) - 1).toString()),
            tt.push(e),
            function () {
                return (tt = tt.filter(function (r) {
                    let { id: o } = r;
                    return o !== e.id;
                }));
            }
        );
    }
    var tt,
        yn = s(() => {
            "use strict";
            et();
            h();
            H();
            tt = [];
        });
    var Ta,
        va,
        Ca,
        Lr,
        Or = s(() => {
            "use strict";
            (Ta = function (e) {
                return { status: "fulfilled", value: e };
            }),
                (va = function (e) {
                    return { status: "rejected", reason: e };
                }),
                (Ca = function (e) {
                    return Promise.resolve(e).then(Ta, va);
                }),
                (Lr = function (e) {
                    return Promise.all(Array.from(e).map(Ca));
                });
        });
    var wn = {};
    I(wn, { evalPlugin: () => Fr, fetchPlugin: () => ke, getSettings: () => bn, initPlugins: () => En, installPlugin: () => ye, plugins: () => E, removePlugin: () => Rn, startPlugin: () => Ge, stopPlugin: () => Ue });
    async function ke(e) {
        e.endsWith("/") || (e += "/");
        let t = E[e],
            n;
        try {
            n = await (await me(e + "manifest.json", { cache: "no-store" })).json();
        } catch {
            throw new Error(`Failed to fetch manifest for ${e}`);
        }
        let r;
        if (t?.manifest.hash !== n.hash)
            try {
                r = await (await me(e + (n.main || "index.js"), { cache: "no-store" })).text();
            } catch {}
        if (!r && !t) throw new Error(`Failed to fetch JS for ${e}`);
        E[e] = { id: e, manifest: n, enabled: t?.enabled ?? !1, update: t?.update ?? !0, js: r ?? t.js };
    }
    async function ye(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if ((e.endsWith("/") || (e += "/"), typeof e != "string" || e in E)) throw new Error("Plugin already installed");
        await ke(e), t && (await Ge(e));
    }
    async function Fr(e) {
        let t = { ...window.vendetta, plugin: { id: e.id, manifest: e.manifest, storage: await te(de(e.id)) }, logger: new Qt(`Vendetta \xBB ${e.manifest.name}`) },
            n = `vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,
            r = (0, eval)(n)(t),
            o = typeof r == "function" ? r() : r;
        return o?.default ?? o ?? {};
    }
    async function Ge(e) {
        e.endsWith("/") || (e += "/");
        let t = E[e];
        if (!t) throw new Error("Attempted to start non-existent plugin");
        try {
            if (!m.safeMode?.enabled) {
                let n = await Fr(t);
                (Ie[e] = n), n.onLoad?.();
            }
            t.enabled = !0;
        } catch (n) {
            A.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`, n);
            try {
                Ie[t.id]?.onUnload?.();
            } catch (r) {
                A.error(`Plugin ${t.id} errored whilst unloading`, r);
            }
            delete Ie[e], (t.enabled = !1);
        }
    }
    function Ue(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        e.endsWith("/") || (e += "/");
        let n = E[e],
            r = Ie[e];
        if (!n) throw new Error("Attempted to stop non-existent plugin");
        if (!m.safeMode?.enabled) {
            try {
                r?.onUnload?.();
            } catch (o) {
                A.error(`Plugin ${n.id} errored whilst unloading`, o);
            }
            delete Ie[e];
        }
        t && (n.enabled = !1);
    }
    async function Rn(e) {
        e.endsWith("/") || (e += "/"), E[e].enabled && Ue(e), delete E[e], await Xt(e);
    }
    async function En() {
        await ge(m), await ge(E);
        let e = Object.keys(E);
        return (
            m.safeMode?.enabled ||
                (await Lr(
                    e
                        .filter(function (t) {
                            return E[t].enabled;
                        })
                        .map(async function (t) {
                            return (
                                E[t].update &&
                                    (await ke(t).catch(function (n) {
                                        return A.error(n.message);
                                    })),
                                await Ge(t)
                            );
                        })
                ),
                e
                    .filter(function (t) {
                        return !E[t].enabled && E[t].update;
                    })
                    .forEach(function (t) {
                        return ke(t);
                    })),
            Ia
        );
    }
    var E,
        Ie,
        Ia,
        bn,
        ie = s(() => {
            "use strict";
            fe();
            U();
            Or();
            xe();
            O();
            (E = pe(te(de("VENDETTA_PLUGINS")))), (Ie = {});
            (Ia = function () {
                return Object.keys(Ie).forEach(function (e) {
                    return Ue(e, !1);
                });
            }),
                (bn = function (e) {
                    return Ie[e]?.settings;
                });
        });
    var vn = {};
    I(vn, { DISCORD_SERVER: () => xn, DISCORD_SERVER_ID: () => Sn, GITHUB: () => Tn, HTTP_REGEX: () => Na, HTTP_REGEX_MULTI: () => rt, PLUGINS_CHANNEL_ID: () => _n, PROXY_PREFIX: () => Ne, THEMES_CHANNEL_ID: () => nt });
    var xn,
        Sn,
        _n,
        nt,
        Tn,
        Ne,
        Na,
        rt,
        Ae = s(() => {
            "use strict";
            (xn = "https://discord.gg/n9QQ4XhhJP"),
                (Sn = "1015931589865246730"),
                (_n = "1091880384561684561"),
                (nt = "1091880434939482202"),
                (Tn = "https://github.com/bound-mod"),
                (Ne = "https://vd-plugins.github.io/proxy"),
                (Na = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/),
                (rt = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
        });
    function Cn(e) {
        let { label: t, icon: n, noPadding: r = !1, noAnimation: o = !1, children: a } = e,
            { FormRow: i, FormDivider: l } = S,
            [d, p] = React.useState(!0);
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(i, {
                label: t,
                leading: n && React.createElement(i.Icon, { source: f(n) }),
                trailing: React.createElement(i.Arrow, { style: { transform: [{ rotate: `${d ? 180 : 90}deg` }] } }),
                onPress: function () {
                    p(!d), o || c.LayoutAnimation.configureNext(c.LayoutAnimation.Presets.easeInEaseOut);
                },
            }),
            !d && React.createElement(React.Fragment, null, React.createElement(l, null), React.createElement(c.View, { style: !r && { paddingHorizontal: 15 } }, a))
        );
    }
    var kr = s(() => {
        "use strict";
        h();
        x();
        T();
    });
    function _t(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    var In = s(() => {});
    function Gr(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    var Ur = s(() => {});
    function Vr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    function Hr(e, t, n) {
        return t && Vr(e.prototype, t), n && Vr(e, n), e;
    }
    var jr = s(() => {});
    function Nn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var $r = s(() => {});
    function Tt(e, t) {
        return (
            (Tt =
                Object.setPrototypeOf ||
                function (r, o) {
                    return (r.__proto__ = o), r;
                }),
            Tt(e, t)
        );
    }
    var zr = s(() => {});
    function Kr(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && Tt(e, t);
    }
    var Wr = s(() => {
        zr();
    });
    function ot(e) {
        return (
            (ot = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  }),
            ot(e)
        );
    }
    var Yr = s(() => {});
    function Xr() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch {
            return !1;
        }
    }
    var Jr = s(() => {});
    function qr(e) {
        "@swc/helpers - typeof";
        return e && typeof Symbol < "u" && e.constructor === Symbol ? "symbol" : typeof e;
    }
    var Qr = s(() => {});
    function Zr(e, t) {
        return t && (qr(t) === "object" || typeof t == "function") ? t : _t(e);
    }
    var eo = s(() => {
        In();
        Qr();
    });
    function to(e) {
        var t = Xr();
        return function () {
            var r = ot(e),
                o;
            if (t) {
                var a = ot(this).constructor;
                o = Reflect.construct(r, arguments, a);
            } else o = r.apply(this, arguments);
            return Zr(this, o);
        };
    }
    var no = s(() => {
        Yr();
        Jr();
        eo();
    });
    var Aa,
        b,
        An = s(() => {
            "use strict";
            In();
            Ur();
            jr();
            $r();
            Wr();
            no();
            h();
            T();
            b = (function (e) {
                "use strict";
                Kr(n, e);
                var t = to(n);
                function n() {
                    Gr(this, n);
                    var r;
                    return (r = t.apply(this, arguments)), Nn(_t(r), "state", { hasErr: !1 }), r;
                }
                return (
                    Hr(n, [
                        {
                            key: "render",
                            value: function () {
                                var o = this;
                                return this.state.hasErr
                                    ? L.createElement(
                                          D.Card,
                                          { style: { margin: 16 } },
                                          L.createElement(
                                              D.Stack,
                                              null,
                                              L.createElement(S.FormText, { style: Ce["heading-lg/bold"] }, "Uh oh."),
                                              L.createElement(S.FormText, { style: { ...Ce["text-xs/normal"], fontFamily: he.Fonts.CODE_SEMIBOLD, marginBottom: 8 } }, this.state.errText),
                                              L.createElement(D.Button, {
                                                  variant: "destructive",
                                                  text: "Retry Render",
                                                  onPress: function () {
                                                      return o.setState({ hasErr: !1, errText: void 0 });
                                                  },
                                              })
                                          )
                                      )
                                    : this.props.children;
                            },
                        },
                    ]),
                    n
                );
            })((Aa = L.PureComponent));
            Nn(b, "getDerivedStateFromError", function (e) {
                return { hasErr: !0, errText: e.message };
            });
        });
    var Pn = {};
    I(Pn, { rawColors: () => Pa, semanticColors: () => v });
    var v,
        Pa,
        Re = s(() => {
            "use strict";
            h();
            j();
            (v = ne?.default?.colors ?? he?.ThemeColorMap), (Pa = ne?.default?.unsafe_rawColors ?? he?.Colors);
        });
    var vt,
        Bn = s(() => {
            "use strict";
            Re();
            vt = { backgroundColor: v.BACKGROUND_SECONDARY, borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 };
        });
    function at(e) {
        let { selectable: t, style: n, children: r } = e;
        return t ? c.Platform.select({ ios: React.createElement(Ba, { style: n, children: r }), default: React.createElement(ro, { style: n, children: r, selectable: !0 }) }) : React.createElement(ro, { style: n, children: r });
    }
    var oo,
        Ba,
        ro,
        ao = s(() => {
            "use strict";
            h();
            Re();
            Bn();
            (oo = z.createThemedStyleSheet({ codeBlock: { ...vt, color: v.TEXT_NORMAL, fontFamily: he.Fonts.CODE_SEMIBOLD, fontSize: 12, textAlignVertical: "center", paddingHorizontal: 12 } })),
                (Ba = function (e) {
                    let { style: t, children: n } = e;
                    return React.createElement(c.TextInput, { editable: !1, multiline: !0, style: [oo.codeBlock, t && t], value: n });
                }),
                (ro = function (e) {
                    let { selectable: t, style: n, children: r } = e;
                    return React.createElement(c.Text, { selectable: t, style: [oo.codeBlock, n && n] }, r);
                });
        });
    function Ve(e) {
        let { onChangeText: t, placeholder: n, style: r } = e,
            [o, a] = React.useState(""),
            i = function (l) {
                a(l), t?.(l);
            };
        return React.createElement(
            c.View,
            { style: r },
            React.createElement(D.TextInput, { grow: !0, isClearable: !0, leadingIcon: Da, placeholder: n ?? "Search", onChange: i, returnKeyType: "search", size: "md", autoCapitalize: "none", autoCorrect: !1, value: o })
        );
    }
    var Da,
        io = s(() => {
            "use strict";
            h();
            x();
            T();
            Da = function () {
                return React.createElement(c.Image, { style: { transform: [{ scale: 0.8 }] }, source: f("search") });
            };
        });
    function Ct(e) {
        let { tabs: t } = e,
            [n, r] = L.useState(t[0]);
        return L.createElement(
            c.View,
            { style: { flex: 1 } },
            n.render && L.createElement(n.render, null),
            L.createElement(
                c.View,
                { style: { marginTop: "auto", padding: 16 } },
                L.createElement(Ma, {
                    tabs: t,
                    activeTab: n.id,
                    onTabSelected: function (o) {
                        let a = t.find(function (i) {
                            return i.id === o;
                        });
                        a && (a.onPress?.(a.id), a.render && r(a));
                    },
                })
            )
        );
    }
    var Ma,
        so = s(() => {
            "use strict";
            h();
            w();
            ({ BadgableTabBar: Ma } = u("BadgableTabBar"));
        });
    var Fn = {};
    I(Fn, {
        Alert: () => Dn,
        Button: () => Mn,
        Codeblock: () => at,
        ErrorBoundary: () => b,
        Forms: () => S,
        General: () => La,
        HelpMessage: () => Ln,
        SafeAreaView: () => On,
        Search: () => Ve,
        Summary: () => Cn,
        Tabs: () => D,
        TabulatedScreen: () => Ct,
    });
    var co,
        S,
        D,
        La,
        Dn,
        Mn,
        Ln,
        On,
        T = s(() => {
            "use strict";
            w();
            kr();
            An();
            ao();
            io();
            so();
            (co = function (e) {
                return G(function (t) {
                    return t[e] && Object.keys(t).length === 1;
                })?.[e];
            }),
                (S = u("Form", "FormSection")),
                (D = { ...u("TableRow", "TableRowGroup"), RedesignSwitch: co("FormSwitch"), RedesignCheckbox: co("FormCheckbox") }),
                (La = u("Button", "Text", "View")),
                (Dn = Lt("FluxContainer(Alert)")),
                (Mn = u("Looks", "Colors", "Sizes")),
                (Ln = V("HelpMessage")),
                (On = u("useSafeAreaInsets").SafeAreaView);
        });
    function lo() {
        return y("default", Oa, function (e, t) {
            let [{ thread: n }] = e;
            if (n.guild_id !== Sn) return;
            let r;
            if (n.parent_id === _n) r = "Plugin";
            else if (n.parent_id === nt && window.__vendetta_loader?.features.themes) r = "Theme";
            else return;
            let { firstMessage: o } = Ga(n),
                a = o?.content?.match(rt);
            if (!a) return;
            r === "Plugin"
                ? (a = a.filter(function (p) {
                      return p.startsWith(Ne);
                  }))
                : (a = a.filter(function (p) {
                      return p.endsWith(".json");
                  }));
            let i = a[0];
            if (!i) return;
            let l = ee(t, function (p) {
                    return p?.[0]?.key;
                }),
                d = l[0].type;
            l.unshift(
                React.createElement(
                    d,
                    { key: "install" },
                    React.createElement(Fa, {
                        leading: React.createElement(ka, { style: { opacity: 1 }, source: f("ic_download_24px") }),
                        label: `Install ${r}`,
                        onPress: function () {
                            return (r === "Plugin" ? ye : Se)(i)
                                .then(function () {
                                    g(`Successfully installed ${n.name}`, f("Check"));
                                })
                                .catch(function (p) {
                                    g(p.message, f("Small"));
                                })
                                .finally(function () {
                                    return Ua();
                                });
                        },
                    })
                )
            );
        });
    }
    var Oa,
        Fa,
        ka,
        Ga,
        Ua,
        uo = s(() => {
            "use strict";
            w();
            Ae();
            H();
            ie();
            j();
            fe();
            x();
            W();
            T();
            (Oa = V("ForumPostLongPressActionSheet", !1)), ({ FormRow: Fa, FormIcon: ka } = S), ({ useFirstForumPostMessage: Ga } = u("useFirstForumPostMessage")), ({ hideActionSheet: Ua } = u("openLazy", "hideActionSheet"));
        });
    function kn(e) {
        let { title: t, confirmText: n, confirmColor: r, onConfirm: o, cancelText: a, placeholder: i, initialValue: l = "", secureTextEntry: d } = e,
            [p, P] = React.useState(l),
            [B, C] = React.useState("");
        function M() {
            Promise.resolve(o(p))
                .then(function () {
                    fo.close();
                })
                .catch(function (be) {
                    C(be.message);
                });
        }
        return React.createElement(
            Dn,
            {
                title: t,
                confirmText: n,
                confirmColor: r,
                isConfirmButtonDisabled: B.length !== 0,
                onConfirm: M,
                cancelText: a,
                onCancel: function () {
                    return fo.close();
                },
            },
            React.createElement(Va, {
                placeholder: i,
                value: p,
                onChange: function (k) {
                    P(typeof k == "string" ? k : k.text), B && C("");
                },
                returnKeyType: "done",
                onSubmitEditing: M,
                error: B || void 0,
                secureTextEntry: d,
                autoFocus: !0,
                showBorder: !0,
                style: { paddingVertical: 5, alignSelf: "stretch", paddingHorizontal: 0 },
            })
        );
    }
    var Va,
        fo,
        mo = s(() => {
            "use strict";
            w();
            T();
            ({ FormInput: Va } = S), (fo = u("openLazy", "close"));
        });
    var Un = {};
    I(Un, { showConfirmationAlert: () => Y, showCustomAlert: () => go, showInputAlert: () => Gn });
    function Y(e) {
        let t = e;
        return (t.body = e.content), delete t.content, (t.isDismissable ??= !0), po.show(t);
    }
    var po,
        go,
        Gn,
        Pe = s(() => {
            "use strict";
            w();
            mo();
            po = u("openLazy", "close");
            (go = function (e, t) {
                return po.openLazy({
                    importer: async function () {
                        return function () {
                            return React.createElement(e, t);
                        };
                    },
                });
            }),
                (Gn = function (e) {
                    return go(kn, e);
                });
        });
    function ho(e) {
        return e.startsWith(Ne) ? "Plugin" : e.endsWith(".json") && window.__vendetta_loader?.features.themes ? "Theme" : void 0;
    }
    function yo(e, t) {
        (e === "Plugin" ? ye : Se)(t)
            .then(function () {
                g("Successfully installed", f("Check"));
            })
            .catch(function (n) {
                g(n.message, f("Small"));
            });
    }
    function Ro() {
        let e = new Array();
        return (
            e.push(
                y("showSimpleActionSheet", Ha, function (t) {
                    if (t[0].key !== "LongPressUrl") return;
                    let {
                            header: { title: n },
                            options: r,
                        } = t[0],
                        o = ho(n);
                    o &&
                        r.push({
                            label: `Install ${o}`,
                            onPress: function () {
                                return yo(o, n);
                            },
                        });
                })
            ),
            e.push(
                we("handleClick", ja, async function (t, n) {
                    let { href: r } = t[0],
                        o = ho(r);
                    if (!o) return n.apply(this, t);
                    if (o === "Theme" && Ka(za())?.parent_id !== nt) return n.apply(this, t);
                    Y({
                        title: "Hold Up",
                        content: ["This link is a ", React.createElement(c.Text, { style: Wa["text-md/semibold"] }, o), ", would you like to install it?"],
                        onConfirm: function () {
                            return yo(o, r);
                        },
                        confirmText: "Install",
                        cancelText: "Cancel",
                        secondaryConfirmText: "Open in Browser",
                        onConfirmSecondary: function () {
                            return $a(r);
                        },
                    });
                })
            ),
            function () {
                return e.forEach(function (t) {
                    return t();
                });
            }
        );
    }
    var Ha,
        ja,
        $a,
        za,
        Ka,
        Wa,
        Eo = s(() => {
            "use strict";
            w();
            h();
            Ae();
            H();
            ie();
            j();
            Pe();
            x();
            W();
            (Ha = G(function (e) {
                return e?.showSimpleActionSheet && !Object.getOwnPropertyDescriptor(e, "showSimpleActionSheet")?.get;
            })),
                (ja = u("handleClick")),
                ({ openURL: $a } = Le),
                ({ getChannelId: za } = an),
                ({ getChannel: Ka } = u("getChannel")),
                ({ TextStyleSheet: Wa } = u("TextStyleSheet"));
        });
    function Vn() {
        let e = new Array();
        return (
            e.push(lo()),
            e.push(Ro()),
            function () {
                return e.forEach(function (t) {
                    return t();
                });
            }
        );
    }
    var bo = s(() => {
        "use strict";
        uo();
        Eo();
    });
    function xo() {
        return y("render", Ya.prototype, function (e, t) {
            var n = this;
            if (!(m.errorBoundaryEnabled ?? !0) || !this.state.error) return;
            this.state.activeTab ??= "stack";
            let r = wo.find(function (i) {
                    return i.id === n.state.activeTab;
                }),
                o = this.state.error[this.state.activeTab],
                a = [
                    { text: "Restart Discord", onPress: this.handleReload },
                    ...(m.safeMode?.enabled ? [] : [{ text: "Restart in Recovery Mode", onPress: Je }]),
                    {
                        variant: "destructive",
                        text: "Retry Render",
                        onPress: function () {
                            return n.setState({ info: null, error: null });
                        },
                    },
                ];
            return React.createElement(
                b,
                null,
                React.createElement(
                    On,
                    { style: He.container },
                    React.createElement(
                        c.View,
                        { style: He.header },
                        React.createElement(c.View, { style: { flex: 2, marginRight: 4 } }, React.createElement(c.Text, { style: He.headerTitle }, t.props.title), React.createElement(c.Text, { style: He.headerDescription }, t.props.body)),
                        t.props.Illustration && React.createElement(t.props.Illustration, { style: { flex: 1, resizeMode: "contain", maxHeight: 96, paddingRight: 4 } })
                    ),
                    React.createElement(
                        c.View,
                        { style: He.body },
                        React.createElement(
                            at,
                            { selectable: !0, style: { flex: 1, textAlignVertical: "top" } },
                            r?.trimWhitespace
                                ? o
                                      ?.split(
                                          `
`
                                      )
                                      .filter(function (i) {
                                          return i.length !== 0;
                                      })
                                      .map(function (i) {
                                          return i.trim();
                                      }).join(`
`)
                                : o
                        ),
                        React.createElement(
                            c.View,
                            { style: { marginVertical: 16 } },
                            React.createElement(Xa, {
                                tabs: wo,
                                activeTab: this.state.activeTab,
                                onTabSelected: function (i) {
                                    n.setState({ activeTab: i });
                                },
                            })
                        )
                    ),
                    React.createElement(
                        c.View,
                        { style: He.footer },
                        a.map(function (i) {
                            let l = a.indexOf(i) !== 0 ? 8 : 0;
                            return React.createElement(D.Button, { variant: i.variant ?? "primary", size: i.size ?? "sm", text: i.text, onPress: i.onPress, style: Z.isTablet ? { marginLeft: l } : { marginTop: l } });
                        })
                    )
                )
            );
        });
    }
    var Ya,
        Xa,
        He,
        wo,
        So = s(() => {
            "use strict";
            h();
            w();
            H();
            Fe();
            ue();
            Re();
            Bn();
            T();
            O();
            (Ya = V("ErrorBoundary")),
                ({ BadgableTabBar: Xa } = u("BadgableTabBar")),
                (He = z.createThemedStyleSheet({
                    container: { flex: 1, backgroundColor: v.BACKGROUND_PRIMARY, paddingHorizontal: 16 },
                    header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 8, marginBottom: 16, ...vt },
                    headerTitle: { ...Ce["heading-lg/semibold"], color: v.HEADER_PRIMARY, marginBottom: 4 },
                    headerDescription: { ...Ce["text-sm/medium"], color: v.TEXT_MUTED },
                    body: { flex: 6 },
                    footer: { flexDirection: Z.isTablet ? "row" : "column", justifyContent: "center", marginBottom: 16 },
                })),
                (wo = [
                    { id: "stack", title: "Stack Trace" },
                    { id: "component", title: "Component", trimWhitespace: !0 },
                ]);
        });
    function It(e) {
        let { alertTitle: t, installFunction: n } = e;
        return React.createElement(
            c.TouchableOpacity,
            {
                onPress: function () {
                    return oe.getString().then(function (r) {
                        return Gn({
                            title: t,
                            initialValue: r.match(rt)?.[0] ?? "",
                            placeholder: "https://example.com/",
                            onConfirm: function (o) {
                                return n(o);
                            },
                            confirmText: "Install",
                            cancelText: "Cancel",
                        });
                    });
                },
            },
            React.createElement(c.Image, { style: Ja.icon, source: f("ic_add_24px") })
        );
    }
    var Ja,
        _o = s(() => {
            "use strict";
            h();
            Ae();
            Pe();
            x();
            Re();
            Ja = z.createThemedStyleSheet({ icon: { marginRight: 10, tintColor: v.HEADER_PRIMARY } });
        });
    function Hn(e) {
        let { asset: t } = e;
        return React.createElement(qa, {
            label: `${t.name} - ${t.id}`,
            trailing: React.createElement(c.Image, { source: t.id, style: { width: 32, height: 32 } }),
            onPress: function () {
                oe.setString(t.name), g("Copied asset name to clipboard.", f("toast_copy_link"));
            },
        });
    }
    var qa,
        To = s(() => {
            "use strict";
            h();
            W();
            x();
            T();
            ({ FormRow: qa } = S);
        });
    function jn() {
        let [e, t] = React.useState("");
        return React.createElement(
            b,
            null,
            React.createElement(
                c.View,
                { style: { flex: 1 } },
                React.createElement(Ve, {
                    style: { margin: 10 },
                    onChangeText: function (n) {
                        return t(n);
                    },
                    placeholder: "Search",
                }),
                React.createElement(c.FlatList, {
                    data: Object.values(ae).filter(function (n) {
                        return n.name.includes(e) || n.id.toString() === e;
                    }),
                    renderItem: function (n) {
                        let { item: r } = n;
                        return React.createElement(Hn, { asset: r });
                    },
                    ItemSeparatorComponent: Qa,
                    keyExtractor: function (n) {
                        return n.name;
                    },
                })
            )
        );
    }
    var Qa,
        vo = s(() => {
            "use strict";
            h();
            x();
            T();
            To();
            ({ FormDivider: Qa } = S);
        });
    function Q() {
        return React.createElement(b, null, React.createElement(c.Image, { style: { width: "100%", height: "100%" }, resizeMode: "stretch", source: { uri: "https://bound-mod.github.io/assets/images/fools.png" } }));
    }
    var it = s(() => {
        "use strict";
        h();
        T();
    });
    function $n() {
        let e = K.useNavigation();
        return (
            R(m),
            R(Oe),
            React.createElement(
                b,
                null,
                React.createElement(
                    c.ScrollView,
                    { style: { flex: 1 }, contentContainerStyle: { padding: 16, alignItems: "center" } },
                    React.createElement(
                        Za,
                        { spacing: 16 },
                        React.createElement(
                            lt,
                            { title: "Debug Bridge" },
                            React.createElement(ct, {
                                label: "Enabled",
                                subLabel: "Automatically connects to a specified remote debug bridge to allow for code evaluation.",
                                value: m.debugBridgeEnabled,
                                onValueChange: function (t) {
                                    m.debugBridgeEnabled = t;
                                    try {
                                        t ? qe(m.debuggerUrl) : F.close();
                                    } catch {}
                                },
                            }),
                            React.createElement(
                                c.View,
                                { style: { paddingVertical: 8, paddingHorizontal: 16 } },
                                React.createElement(Co, {
                                    label: "Debug IP",
                                    placeholder: "127.0.0.1:9090",
                                    size: "md",
                                    defaultValue: m.debuggerUrl,
                                    onChange: function (t) {
                                        m.debuggerUrl = t;
                                    },
                                })
                            )
                        ),
                        window.__vendetta_loader?.features.loaderConfig &&
                            React.createElement(
                                lt,
                                { title: "Loader" },
                                React.createElement(ct, {
                                    label: "Enabled",
                                    subLabel: "Handles the loading of Bound. You will need to edit the configuration file to enable the loader again.",
                                    value: !0,
                                    onValueChange: function () {
                                        return g("I was too lazy to edit the native side for this - maisy");
                                    },
                                }),
                                React.createElement(ct, {
                                    label: "React DevTools",
                                    subLabel: "Enables remote developer tools that can be accessed from a desktop.",
                                    value: m.rdtEnabled,
                                    onValueChange: function (t) {
                                        (m.rdtEnabled = t), t && Qe();
                                    },
                                }),
                                React.createElement(ct, {
                                    label: "Force Update",
                                    subLabel: "Always fetches and uses the latest bundle available at the provided bundle URL.",
                                    value: !1,
                                    onValueChange: function () {
                                        return g("Why is this even needed - maisy");
                                    },
                                }),
                                React.createElement(
                                    c.View,
                                    { style: { paddingVertical: 8, paddingHorizontal: 16 } },
                                    React.createElement(Co, {
                                        label: "Custom Bundle URL",
                                        placeholder: "http://localhost:4040/bound.js",
                                        size: "md",
                                        defaultValue: Oe.customLoadUrl.url,
                                        onChange: function (t) {
                                            Oe.customLoadUrl.url = t;
                                        },
                                    })
                                )
                            ),
                        React.createElement(
                            lt,
                            { title: "Error Boundary" },
                            React.createElement(ct, {
                                label: "Error Boundary",
                                subLabel: 'Crash recovery module. Do not disable if you are a "consumer".',
                                value: m.errorBoundaryEnabled ?? !0,
                                onValueChange: function (t) {
                                    m.errorBoundaryEnabled = t;
                                },
                            }),
                            React.createElement(Be, {
                                label: "Trigger ErrorBoundary",
                                subLabel: "Trips the error boundary on purpose to visualise the effects of it.",
                                onPress: function () {
                                    return ni({
                                        key: "ErrorBoundaryTools",
                                        header: {
                                            title: "Which ErrorBoundary do you want to trip?",
                                            icon: React.createElement(st, { style: { marginRight: 8 }, source: f("ic_warning_24px") }),
                                            onClose: function () {
                                                return ti();
                                            },
                                        },
                                        options: [
                                            {
                                                label: "Bound",
                                                onPress: function () {
                                                    return e.push("VendettaCustomPage", {
                                                        render: function () {
                                                            return React.createElement("undefined", null);
                                                        },
                                                    });
                                                },
                                            },
                                            {
                                                label: "Discord",
                                                isDestructive: !0,
                                                onPress: function () {
                                                    return e.push("VendettaCustomPage", { noErrorBoundary: !0 });
                                                },
                                            },
                                        ],
                                    });
                                },
                                arrow: !0,
                            })
                        ),
                        React.createElement(
                            lt,
                            { title: "Logging" },
                            React.createElement(Be, { label: "Inspection Depth", trailing: React.createElement(Be.TrailingText, { text: `${m.inspectionDepth ?? 1} nested object(s) deep` }) }),
                            React.createElement(
                                c.View,
                                { style: { paddingVertical: 4, paddingHorizontal: 16 } },
                                React.createElement(ei, {
                                    value: m.inspectionDepth ?? 1,
                                    onValueChange: function (t) {
                                        m.inspectionDepth = t;
                                    },
                                    minimumValue: 1,
                                    maximumValue: 6,
                                    step: 1,
                                })
                            ),
                            React.createElement(Be, {
                                label: "Debug Logs",
                                icon: React.createElement(st, { source: f("debug") }),
                                onPress: function () {
                                    return e.push("VendettaCustomPage", { render: Q });
                                },
                                arrow: !0,
                            })
                        ),
                        React.createElement(
                            lt,
                            { title: "Misc" },
                            React.createElement(Be, {
                                label: "Restart",
                                icon: React.createElement(st, { source: f("RetryIcon") }),
                                onPress: function () {
                                    return Ke.reload();
                                },
                                arrow: !0,
                            }),
                            React.createElement(Be, {
                                label: "Force Garbage Collection",
                                icon: React.createElement(st, { source: f("trash") }),
                                onPress: function () {
                                    return window.gc?.();
                                },
                                arrow: !0,
                            }),
                            React.createElement(Be, {
                                label: "Asset Browser",
                                icon: React.createElement(st, { source: f("ImageTextIcon") }),
                                onPress: function () {
                                    return e.push("VendettaCustomPage", { title: "Asset Browser", render: jn });
                                },
                                arrow: !0,
                            })
                        )
                    )
                )
            )
        );
    }
    var Za,
        Be,
        st,
        ct,
        lt,
        Co,
        ei,
        ti,
        ni,
        Io = s(() => {
            "use strict";
            h();
            w();
            Fe();
            ue();
            U();
            W();
            x();
            T();
            O();
            vo();
            it();
            ({ Stack: Za, TableRow: Be, TableRowIcon: st, TableSwitchRow: ct, TableRowGroup: lt, TextInput: Co, Slider: ei } = D),
                ({ hideActionSheet: ti } = u("openLazy", "hideActionSheet")),
                ({ showSimpleActionSheet: ni } = u("showSimpleActionSheet"));
        });
    function zn() {
        let e = K.useNavigation();
        return (
            R(m),
            R(E),
            R(_),
            React.createElement(
                b,
                null,
                React.createElement(
                    c.ScrollView,
                    { style: { flex: 1 }, contentContainerStyle: { padding: 16, alignItems: "center" } },
                    React.createElement(
                        ri,
                        { spacing: 16 },
                        React.createElement(
                            Nt,
                            null,
                            React.createElement(oi, {
                                label: "Recovery Mode",
                                subLabel: "Avoids loading addons to prevent crashing.",
                                icon: React.createElement(Ee, { source: f("ic_message_retry") }),
                                value: m.safeMode?.enabled,
                                onValueChange: function (t) {
                                    Je(t), (m.safeMode.enabled = t);
                                },
                            })
                        ),
                        React.createElement(
                            Nt,
                            null,
                            React.createElement(se, {
                                label: "Toast Settings",
                                icon: React.createElement(Ee, { source: f("ic_notification_settings") }),
                                onPress: function () {
                                    return e.push("VendettaCustomPage", { render: Q });
                                },
                                arrow: !0,
                            }),
                            React.createElement(se, {
                                label: "Development Settings",
                                icon: React.createElement(Ee, { source: f("ic_progress_wrench_24px") }),
                                onPress: function () {
                                    return e.push("VendettaCustomPage", { title: "Development Settings", render: $n });
                                },
                                arrow: !0,
                            })
                        ),
                        React.createElement(
                            Nt,
                            { title: "Info" },
                            React.createElement(se, { label: "Installed Plugins", icon: React.createElement(Ee, { source: f("ic_wand") }), trailing: React.createElement(se.TrailingText, { text: Object.keys(E).length }) }),
                            React.createElement(se, { label: "Installed Themes", icon: React.createElement(Ee, { source: f("ic_paint_brush") }), trailing: React.createElement(se.TrailingText, { text: Object.keys(_).length }) })
                        ),
                        React.createElement(
                            Nt,
                            { title: "Links" },
                            React.createElement(se, {
                                label: "Discord Server",
                                icon: React.createElement(Ee, { source: f("Discord") }),
                                onPress: function () {
                                    return Le.openDeeplink(xn);
                                },
                                arrow: !0,
                            }),
                            React.createElement(se, {
                                label: "GitHub",
                                icon: React.createElement(Ee, { source: f("img_account_sync_github_white") }),
                                onPress: function () {
                                    return Le.openURL(Tn);
                                },
                                arrow: !0,
                            }),
                            React.createElement(se, {
                                label: "X / Twitter",
                                icon: React.createElement(Ee, { source: f("img_account_sync_x_white") }),
                                onPress: function () {
                                    return g("nuh uh");
                                },
                                arrow: !0,
                            })
                        )
                    )
                )
            )
        );
    }
    var ri,
        se,
        Ee,
        oi,
        Nt,
        No = s(() => {
            "use strict";
            h();
            Ae();
            Fe();
            U();
            ie();
            j();
            W();
            x();
            T();
            O();
            Io();
            it();
            ({ Stack: ri, TableRow: se, TableRowIcon: Ee, TableSwitchRow: oi, TableRowGroup: Nt } = D);
        });
    function ut(e) {
        let { items: t, safeModeMessage: n, safeModeExtras: r, card: o } = e;
        R(m), R(t);
        let [a, i] = React.useState("");
        return React.createElement(
            b,
            null,
            React.createElement(c.FlatList, {
                ListHeaderComponent: React.createElement(
                    React.Fragment,
                    null,
                    m.safeMode?.enabled && React.createElement(c.View, { style: { marginBottom: 12 } }, React.createElement(Ln, { messageType: 0 }, n), r),
                    React.createElement(Ve, {
                        style: { marginBottom: 12 },
                        onChangeText: function (l) {
                            return i(l.toLowerCase());
                        },
                        placeholder: "Search",
                    })
                ),
                style: { paddingHorizontal: 12, paddingTop: 12 },
                contentContainerStyle: { paddingBottom: 20 },
                data: Object.values(t).filter(function (l) {
                    return l.id?.toLowerCase().includes(a);
                }),
                renderItem: function (l) {
                    let { item: d, index: p } = l;
                    return React.createElement(o, { item: d, index: p });
                },
            })
        );
    }
    var Kn = s(() => {
        "use strict";
        h();
        U();
        T();
        O();
    });
    function mt(e) {
        let t = e.toggleValue ?? !1;
        return React.createElement(
            c.View,
            { style: [ft.card, { marginTop: e.index !== 0 ? 12 : 0 }] },
            React.createElement(At, {
                style: ft.header,
                label: e.headerLabel,
                leading: e.headerIcon && React.createElement(At.Icon, { source: f(e.headerIcon) }),
                trailing:
                    e.toggleType &&
                    (e.toggleType === "switch"
                        ? React.createElement(ai, { value: e.toggleValue, onValueChange: e.onToggleChange })
                        : React.createElement(
                              c.Pressable,
                              {
                                  onPress: function () {
                                      (t = !t), e.onToggleChange?.(t);
                                  },
                              },
                              React.createElement(ii, { checked: e.toggleValue })
                          )),
            }),
            React.createElement(At, {
                label: e.descriptionLabel,
                trailing: React.createElement(
                    c.View,
                    { style: ft.actions },
                    e.overflowActions &&
                        React.createElement(
                            c.TouchableOpacity,
                            {
                                onPress: function () {
                                    return ci({
                                        key: "CardOverflow",
                                        header: {
                                            title: e.overflowTitle,
                                            icon: e.headerIcon && React.createElement(At.Icon, { style: { marginRight: 8 }, source: f(e.headerIcon) }),
                                            onClose: function () {
                                                return si();
                                            },
                                        },
                                        options: e.overflowActions?.map(function (n) {
                                            return { ...n, icon: f(n.icon) };
                                        }),
                                    });
                                },
                            },
                            React.createElement(c.Image, { style: ft.icon, source: f("ic_more_24px") })
                        ),
                    e.actions?.map(function (n) {
                        let { icon: r, onPress: o } = n;
                        return React.createElement(c.TouchableOpacity, { onPress: o }, React.createElement(c.Image, { style: ft.icon, source: f(r) }));
                    })
                ),
            })
        );
    }
    var At,
        ai,
        ii,
        si,
        ci,
        ft,
        Wn = s(() => {
            "use strict";
            h();
            w();
            x();
            Re();
            T();
            ({ FormRow: At } = S),
                ({ RedesignSwitch: ai, RedesignCheckbox: ii } = D),
                ({ hideActionSheet: si } = u("openLazy", "hideActionSheet")),
                ({ showSimpleActionSheet: ci } = u("showSimpleActionSheet")),
                (ft = z.createThemedStyleSheet({
                    card: { backgroundColor: v?.BACKGROUND_SECONDARY, borderRadius: 16 },
                    header: { padding: 0, backgroundColor: v?.BACKGROUND_TERTIARY, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                    actions: { flexDirection: "row-reverse", alignItems: "center" },
                    icon: { width: 22, height: 22, marginLeft: 5, tintColor: v?.INTERACTIVE_NORMAL },
                }));
        });
    async function Ao(e, t) {
        e.enabled && Ue(e.id, !1), t(), e.enabled && (await Ge(e.id));
    }
    function Yn(e) {
        let { item: t, index: n } = e,
            r = bn(t.id),
            o = K.useNavigation(),
            [a, i] = React.useState(!1);
        return a
            ? null
            : React.createElement(mt, {
                  index: n,
                  headerLabel: `${t.manifest.name} by ${t.manifest.authors
                      .map(function (l) {
                          return l.name;
                      })
                      .join(", ")}`,
                  headerIcon: t.manifest.vendetta?.icon || "ic_application_command_24px",
                  toggleType: "switch",
                  toggleValue: t.enabled,
                  onToggleChange: function (l) {
                      try {
                          l ? Ge(t.id) : Ue(t.id);
                      } catch (d) {
                          g(d.message, f("Small"));
                      }
                  },
                  descriptionLabel: t.manifest.description,
                  overflowTitle: t.manifest.name,
                  overflowActions: [
                      {
                          icon: "ic_sync_24px",
                          label: "Refetch",
                          onPress: async function () {
                              Ao(t, function () {
                                  ke(t.id)
                                      .then(async function () {
                                          g("Successfully refetched plugin.", f("toast_image_saved"));
                                      })
                                      .catch(function () {
                                          g("Failed to refetch plugin!", f("Small"));
                                      });
                              });
                          },
                      },
                      {
                          icon: "copy",
                          label: "Copy URL",
                          onPress: function () {
                              oe.setString(t.id), g("Copied plugin URL to clipboard.", f("toast_copy_link"));
                          },
                      },
                      {
                          icon: "ic_download_24px",
                          label: t.update ? "Disable updates" : "Enable updates",
                          onPress: function () {
                              (t.update = !t.update), g(`${t.update ? "Enabled" : "Disabled"} updates for ${t.manifest.name}.`, f("toast_image_saved"));
                          },
                      },
                      {
                          icon: "ic_duplicate",
                          label: "Clear data",
                          isDestructive: !0,
                          onPress: function () {
                              return Y({
                                  title: "Wait!",
                                  content: `Are you sure you wish to clear the data of ${t.manifest.name}?`,
                                  confirmText: "Clear",
                                  cancelText: "Cancel",
                                  confirmColor: q.RED,
                                  onConfirm: function () {
                                      Ao(t, function () {
                                          try {
                                              le.removeItem(t.id), g(`Cleared data for ${t.manifest.name}.`, f("trash"));
                                          } catch {
                                              g(`Failed to clear data for ${t.manifest.name}!`, f("Small"));
                                          }
                                      });
                                  },
                              });
                          },
                      },
                      {
                          icon: "ic_message_delete",
                          label: "Delete",
                          isDestructive: !0,
                          onPress: function () {
                              return Y({
                                  title: "Wait!",
                                  content: `Are you sure you wish to delete ${t.manifest.name}? This will clear all of the plugin's data.`,
                                  confirmText: "Delete",
                                  cancelText: "Cancel",
                                  confirmColor: q.RED,
                                  onConfirm: function () {
                                      try {
                                          Rn(t.id), i(!0);
                                      } catch (l) {
                                          g(l.message, f("Small"));
                                      }
                                  },
                              });
                          },
                      },
                  ],
                  actions: [
                      ...(r
                          ? [
                                {
                                    icon: "settings",
                                    onPress: function () {
                                        return o.push("VendettaCustomPage", { title: t.manifest.name, render: r });
                                    },
                                },
                            ]
                          : []),
                  ],
              });
    }
    var Po = s(() => {
        "use strict";
        et();
        h();
        ie();
        ue();
        x();
        W();
        Pe();
        Wn();
    });
    function Xn() {
        return R(m), React.createElement(ut, { items: E, safeModeMessage: "You are in Recovery Mode, so plugins cannot be loaded. Disable any misbehaving plugins, then return to Normal Mode from the General settings page.", card: Yn });
    }
    var Bo = s(() => {
        "use strict";
        U();
        ie();
        O();
        Kn();
        Po();
    });
    async function Do(e, t) {
        await _e(e ? t : "default"), Ke.reload();
    }
    function Jn(e) {
        let { item: t, index: n } = e;
        R(m);
        let [r, o] = React.useState(!1);
        if (r) return null;
        let a = t.data.authors;
        return React.createElement(mt, {
            index: n,
            headerLabel: `${t.data.name} ${
                a
                    ? `by ${a
                          .map(function (i) {
                              return i.name;
                          })
                          .join(", ")}`
                    : ""
            }`,
            descriptionLabel: t.data.description ?? "No description.",
            toggleType: m.safeMode?.enabled ? void 0 : "radio",
            toggleValue: t.selected,
            onToggleChange: function (i) {
                Do(i, t.id);
            },
            overflowTitle: t.data.name,
            overflowActions: [
                {
                    icon: "ic_sync_24px",
                    label: "Refetch",
                    onPress: function () {
                        Ye(t.id, t.selected)
                            .then(function () {
                                t.selected
                                    ? Y({
                                          title: "Theme refetched",
                                          content: "A reload is required to see the changes. Do you want to reload now?",
                                          confirmText: "Reload",
                                          cancelText: "Cancel",
                                          confirmColor: q.RED,
                                          onConfirm: function () {
                                              return Ke.reload();
                                          },
                                      })
                                    : g("Successfully refetched theme.", f("toast_image_saved"));
                            })
                            .catch(function () {
                                g("Failed to refetch theme!", f("Small"));
                            });
                    },
                },
                {
                    icon: "copy",
                    label: "Copy URL",
                    onPress: function () {
                        oe.setString(t.id), g("Copied theme URL to clipboard.", f("toast_copy_link"));
                    },
                },
                {
                    icon: "ic_message_delete",
                    label: "Delete",
                    isDestructive: !0,
                    onPress: function () {
                        return Y({
                            title: "Wait!",
                            content: `Are you sure you wish to delete ${t.data.name}?`,
                            confirmText: "Delete",
                            cancelText: "Cancel",
                            confirmColor: q.RED,
                            onConfirm: function () {
                                tn(t.id)
                                    .then(function (i) {
                                        o(!0), i && Do(!1, t.id);
                                    })
                                    .catch(function (i) {
                                        g(i.message, f("Small"));
                                    });
                            },
                        });
                    },
                },
            ],
        });
    }
    var Mo = s(() => {
        "use strict";
        et();
        h();
        j();
        U();
        ue();
        x();
        Pe();
        W();
        O();
        Wn();
    });
    function qn() {
        return (
            R(m),
            React.createElement(Ct, {
                tabs: [
                    {
                        id: "colors",
                        title: "Colors",
                        render: function () {
                            return React.createElement(ut, {
                                items: _,
                                safeModeMessage: `You are in Recovery Mode, meaning themes have been temporarily disabled.${
                                    m.safeMode?.currentThemeId ? " If a theme appears to be causing the issue, you can press below to disable it persistently." : ""
                                }`,
                                safeModeExtras: m.safeMode?.currentThemeId
                                    ? React.createElement(Mn, {
                                          text: "Disable Theme",
                                          color: q.BRAND,
                                          size: "small",
                                          onPress: function () {
                                              delete m.safeMode?.currentThemeId;
                                          },
                                          style: { marginTop: 8 },
                                      })
                                    : void 0,
                                card: Jn,
                            });
                        },
                    },
                    { id: "icons", title: "Icons", render: Q },
                    { id: "fonts", title: "Fonts", render: Q },
                ],
            })
        );
    }
    var Lo = s(() => {
        "use strict";
        et();
        U();
        j();
        T();
        O();
        Kn();
        Mo();
        it();
    });
    var li,
        dt,
        Pt,
        je,
        pt,
        Oo,
        Qn,
        Bt = s(() => {
            "use strict";
            h();
            ie();
            j();
            Pe();
            Re();
            W();
            fe();
            x();
            O();
            An();
            _o();
            No();
            Bo();
            Lo();
            it();
            Ae();
            (li = z.createThemedStyleSheet({ container: { flex: 1, backgroundColor: v.BACKGROUND_MOBILE_PRIMARY } })),
                (dt = function (e, t) {
                    return t ? xt.snakeCase(e).toUpperCase() : e;
                }),
                (Pt = function (e, t) {
                    return Object.fromEntries(
                        e.map(function (n) {
                            return [n.key, typeof t == "function" ? t(n) : typeof t == "string" ? n[t] : t];
                        })
                    );
                }),
                (je = function () {
                    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                    return [
                        { key: dt("VendettaSettings", e), title: "Settings", icon: "settings", render: zn },
                        {
                            key: dt("VendettaPlugins", e),
                            title: "Plugins",
                            icon: "debug",
                            options: {
                                headerRight: function () {
                                    return React.createElement(It, {
                                        alertTitle: "Install Plugin",
                                        installFunction: async function (t) {
                                            if (!t.startsWith(Ne) && !m.developerSettings)
                                                setImmediate(function () {
                                                    return Y({
                                                        title: "Unproxied Plugin",
                                                        content: "The plugin you are trying to install has not been proxied/verified by Bound's staff. Are you sure you want to continue?",
                                                        confirmText: "Install",
                                                        onConfirm: function () {
                                                            return ye(t)
                                                                .then(function () {
                                                                    return g("Installed plugin", f("Check"));
                                                                })
                                                                .catch(function (n) {
                                                                    return g(n?.message ?? `${n}`, f("Small"));
                                                                });
                                                        },
                                                        cancelText: "Cancel",
                                                    });
                                                });
                                            else return await ye(t);
                                        },
                                    });
                                },
                            },
                            render: Xn,
                        },
                        {
                            key: dt("VendettaThemes", e),
                            title: "Design",
                            icon: "PencilSparkleIcon",
                            shouldRender: function () {
                                return window.__vendetta_loader?.features.hasOwnProperty("themes") ?? !1;
                            },
                            options: {
                                headerRight: function () {
                                    return !m.safeMode?.enabled && React.createElement(It, { alertTitle: "Install Theme", installFunction: Se });
                                },
                            },
                            render: qn,
                        },
                        { key: dt("BoundUpdater", e), title: "Updater", icon: "ic_download_24px", render: Q },
                        {
                            key: dt("VendettaCustomPage", e),
                            title: "Bound Page",
                            shouldRender: function () {
                                return !1;
                            },
                            render: function (t) {
                                let { render: n, noErrorBoundary: r, ...o } = t,
                                    a = K.useNavigation();
                                return (
                                    a.addListener("focus", function () {
                                        return a.setOptions($(o, "render", "noErrorBoundary"));
                                    }),
                                    r ? React.createElement(n, null) : React.createElement(b, null, React.createElement(n, null))
                                );
                            },
                        },
                    ];
                }),
                (pt = function () {
                    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                    return je(e).filter(function (t) {
                        return t.shouldRender?.() ?? !0;
                    });
                }),
                (Oo = function () {
                    return Pt(je(), function (e) {
                        return { title: e.title, render: e.render, ...e.options };
                    });
                }),
                (Qn = function () {
                    let e = je(!0);
                    return {
                        getLayout: function () {
                            return {
                                title: "Bound",
                                label: "Bound",
                                settings: pt(!0).map(function (t) {
                                    return t.key;
                                }),
                            };
                        },
                        titleConfig: Pt(e, "title"),
                        relationships: Pt(e, null),
                        rendererConfigs: Pt(e, function (t) {
                            let n = React.memo(function (r) {
                                let { navigation: o, route: a } = r;
                                return (
                                    o.addListener("focus", function () {
                                        return o.setOptions(t.options);
                                    }),
                                    React.createElement(c.View, { style: li.container }, React.createElement(t.render, a.params))
                                );
                            });
                            return {
                                type: "route",
                                title: function () {
                                    return t.title;
                                },
                                icon: t.icon ? f(t.icon) : null,
                                screen: {
                                    route: xt.chain(t.key).camelCase().upperFirst().value(),
                                    getComponent: function () {
                                        return n;
                                    },
                                },
                            };
                        }),
                    };
                });
        });
    function er() {
        let e = K.useNavigation();
        R(m);
        let t = pt();
        return React.createElement(
            b,
            null,
            React.createElement(
                ui,
                { key: "Bound", title: `Bound${m.safeMode?.enabled ? " (Recovery Mode)" : ""}` },
                t.map(function (n, r) {
                    return React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(Zn, {
                            label: n.title,
                            leading: React.createElement(Zn.Icon, { source: f(n.icon) }),
                            trailing: Zn.Arrow,
                            onPress: function () {
                                return e.push(n.key);
                            },
                        }),
                        r !== t.length - 1 && React.createElement(fi, null)
                    );
                })
            )
        );
    }
    var Zn,
        ui,
        fi,
        Fo = s(() => {
            "use strict";
            h();
            U();
            x();
            Bt();
            T();
            O();
            ({ FormRow: Zn, FormSection: ui, FormDivider: fi } = S);
        });
    function tr() {
        let e = new Array();
        return (
            e.push(
                y("default", mi, function (t, n) {
                    return { ...n, ...Oo() };
                })
            ),
            y(
                "default",
                di,
                function (t, n) {
                    let r = ee(n.props.children, function (o) {
                        return o.type && o.type.name === "UserSettingsOverview";
                    });
                    e.push(
                        y("renderSupportAndAcknowledgements", r.type.prototype, function (o, a) {
                            let {
                                    props: { children: i },
                                } = a,
                                l = i.findIndex(function (d) {
                                    return d?.type?.name === "UploadLogsButton";
                                });
                            l !== -1 && i.splice(l, 1);
                        })
                    ),
                        e.push(
                            y("render", r.type.prototype, function (o, a) {
                                let {
                                        props: { children: i },
                                    } = a,
                                    l = [ve.Messages.BILLING_SETTINGS, ve.Messages.PREMIUM_SETTINGS];
                                i = ee(i, function (p) {
                                    return p.children?.[1].type?.name === "FormSection";
                                }).children;
                                let d = i.findIndex(function (p) {
                                    return l.includes(p?.props.label);
                                });
                                i.splice(d === -1 ? 4 : d, 0, React.createElement(er, null));
                            })
                        );
                },
                !0
            ),
            function () {
                return e.forEach(function (t) {
                    return t();
                });
            }
        );
    }
    var mi,
        di,
        ko = s(() => {
            "use strict";
            h();
            w();
            H();
            fe();
            Bt();
            Fo();
            (mi = V("getScreens", !1)), (di = V("UserSettingsOverviewWrapper", !1));
        });
    function rr() {
        let e = new Array();
        return (
            gi(e) || pi(e),
            function () {
                return e.forEach(function (t) {
                    return t?.();
                });
            }
        );
    }
    function pi(e) {
        let t = u("useOverviewSettings"),
            n = u("getSettingTitleConfig"),
            r = u("SETTING_RELATIONSHIPS", "SETTING_RENDERER_CONFIGS"),
            o = "getSettingSearchListItems",
            a = "getSettingListItems",
            i = u(o),
            l = !i,
            d = l ? a : o,
            p = i ?? u(a);
        if (!p || !t) return;
        let P = je(!0),
            B = pt(!0),
            C = Qn();
        e.push(
            y("useOverviewSettings", t, function (be, $e) {
                return Go($e, C.getLayout());
            })
        ),
            e.push(
                y("getSettingTitleConfig", n, function (be, $e) {
                    return { ...$e, ...C.titleConfig };
                })
            ),
            e.push(
                y(d, p, function (be, $e) {
                    let [qo] = be;
                    return [
                        ...B.filter(function (X) {
                            return qo.includes(X.key);
                        }).map(function (X) {
                            return { type: "setting_search_result", ancestorRendererData: C.rendererConfigs[X.key], setting: X.key, title: C.titleConfig[X.key], breadcrumbs: ["Bound"], icon: C.rendererConfigs[X.key].icon };
                        }),
                        ...$e.filter(function (X) {
                            return (
                                l ||
                                !P.map(function (Dt) {
                                    return Dt.key;
                                }).includes(X.setting)
                            );
                        }),
                    ].map(function (X, Dt, Qo) {
                        return { ...X, index: Dt, total: Qo.length };
                    });
                })
            );
        let M = r.SETTING_RELATIONSHIPS,
            k = r.SETTING_RENDERER_CONFIGS;
        return (
            (r.SETTING_RELATIONSHIPS = { ...M, ...C.relationships }),
            (r.SETTING_RENDERER_CONFIGS = { ...k, ...C.rendererConfigs }),
            e.push(function () {
                (r.SETTING_RELATIONSHIPS = M), (r.SETTING_RENDERER_CONFIGS = k);
            }),
            !0
        );
    }
    function gi(e) {
        let t = u("SearchableSettingsList"),
            n = u("SETTING_RENDERER_CONFIG"),
            r = u("getSettingListItems");
        if (!r || !t || !n) return !1;
        let o = je(!0),
            a = Qn();
        e.push(
            jt("type", t.SearchableSettingsList, function (l) {
                let [{ sections: d }] = l;
                return Go(d, a.getLayout());
            })
        ),
            e.push(
                y("getSettingListSearchResultItems", r, function (l, d) {
                    d.forEach(function (p) {
                        return (
                            o.some(function (P) {
                                return P.key === p.setting;
                            }) && (p.breadcrumbs = ["Bound"])
                        );
                    });
                })
            );
        let i = n.SETTING_RENDERER_CONFIG;
        return (
            (n.SETTING_RENDERER_CONFIG = { ...i, ...a.rendererConfigs }),
            e.push(function () {
                n.SETTING_RENDERER_CONFIG = i;
            }),
            !0
        );
    }
    function Go(e, t) {
        if (
            !Array.isArray(e) ||
            e.find(function (o) {
                return nr(o, "Bound");
            })
        )
            return;
        let n = e.findIndex(function (o) {
            return nr(o, ve.Messages.ACCOUNT_SETTINGS);
        });
        e.splice(n + 1, 0, t);
        let r = e.find(function (o) {
            return nr(o, ve.Messages.SUPPORT);
        });
        r &&
            (r.settings = r.settings.filter(function (o) {
                return o !== "UPLOAD_DEBUG_LOGS";
            }));
    }
    var nr,
        Uo = s(() => {
            "use strict";
            w();
            H();
            Bt();
            h();
            nr = function (e, t) {
                return e?.label === t || e?.title === t;
            };
        });
    function or() {
        let e = [tr(), rr()];
        return function () {
            return e.forEach(function (t) {
                return t?.();
            });
        };
    }
    var Vo = s(() => {
        "use strict";
        ko();
        Uo();
    });
    function $o(e) {
        let { locale: t } = e;
        try {
            Ho && (Ho.overrideTheme(hi?.theme ?? "dark"), jo && yi.useAMOLEDTheme === 2 && jo.setAMOLEDThemeEnabled(!0));
        } catch (n) {
            A.error("Failed to fix theme...", n);
        }
        try {
            cn.locale(t.toLowerCase());
        } catch (n) {
            A.error("Failed to fix timestamps...", n);
        }
        wt.unsubscribe("I18N_LOAD_SUCCESS", $o);
    }
    function zo() {
        return wt.subscribe("I18N_LOAD_SUCCESS", $o);
    }
    var Ho,
        jo,
        hi,
        yi,
        Ko = s(() => {
            "use strict";
            h();
            w();
            xe();
            (Ho = u("updateTheme", "overrideTheme")), (jo = u("setAMOLEDThemeEnabled")), (hi = De("ThemeStore")), (yi = De("UnsyncedUserSettingsStore"));
        });
    async function Wo(e) {
        return {
            patcher: $(br, "unpatchAll"),
            metro: { ...Ot, common: { ...ln } },
            constants: vn,
            utils: Gt,
            debug: $(pn, "versionHash", "patchLogHook", "setSafeMode"),
            ui: { components: Fn, toasts: mn, alerts: Un, assets: fn, ...Pn },
            plugins: $(wn, "initPlugins", "evalPlugin"),
            themes: $(rn, "initThemes"),
            commands: $(hn, "patchCommands"),
            storage: qt,
            settings: m,
            loader: { identity: window.__vendetta_loader, config: Oe },
            logger: A,
            version: St,
            unload: function () {
                e
                    .filter(function (t) {
                        return typeof t == "function";
                    })
                    .forEach(function (t) {
                        return t();
                    }),
                    delete window.vendetta;
            },
        };
    }
    var Yo = s(() => {
        "use strict";
        H();
        xe();
        O();
        Ae();
        Fe();
        ie();
        j();
        yn();
        U();
        w();
        h();
        T();
        W();
        Pe();
        x();
        Re();
        fe();
    });
    var Xo = {};
    I(Xo, { default: () => Ri });
    async function Ri() {
        let e = await Promise.all([dn(), un(), gn(), en(), zo(), xo(), or(), Vn()]);
        await ge(m),
            (window.vendetta = await Wo(e)),
            m.debugBridgeEnabled && qe(m.debuggerUrl),
            m.rdtEnabled && Qe(),
            e.push(await En()),
            await c.Image.prefetch("https://bound-mod.github.io/assets/images/fools.png"),
            A.log("Your Discord app has been successfully bound in chains!");
    }
    var Jo = s(() => {
        "use strict";
        h();
        Fe();
        U();
        yn();
        ie();
        j();
        x();
        bo();
        So();
        Vo();
        Ko();
        xe();
        Yo();
        O();
    });
    ue();
    console.log("Binding your Discord app in chains...");
    Object.freeze = Object;
    Object.seal = Object;
    var Ei = Function.prototype.toString;
    Object.defineProperty(Function.prototype, "toString", { value: Ei, configurable: !0, writable: !1 });
    Promise.resolve()
        .then(() => (Jo(), Xo))
        .then(function (e) {
            return e.default();
        })
        .catch(function (e) {
            console.log(e?.stack ?? e.toString()),
                alert(
                    [
                        `Failed to bind your Discord app!
`,
                        `Build Number: ${ze.Build}`,
                        "Bound: b69c65e",
                        e?.stack || e.toString(),
                    ].join(`
`)
                );
        });
})();
//# sourceURL=Bound
