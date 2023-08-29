const Q = (s) => eval(`(v,a,b,c,d)=>${s}`),
  CHAR = (e) => String.fromCharCode(e),
  For = Q("{for(v=v;v<a;v++)b(v,v/(a-1))}"),
  FoE = Q("For(0,v.length,(i,t)=>a(v[i],i,t))"),
  cR = Q("`rgba(${v},${a},${b},${c})`"),
  cH = Q("`hsla(${v},${a}%,${b}%,${c})`"),
  cM = Q("cR(v,v,v,a)"),
  cHx = (e) =>
    "rgb(" +
    (((e = parseInt(e, 16)) >> 16) & 255) +
    "," +
    ((e >> 8) & 255) +
    "," +
    (255 & e) +
    ")";
let P = (v, a, b, c) => {
    for (b = b.split(":"), c = 0; c < b.length; c += 2)
      eval(`C${b[c]}=${v}=>ctx.${b[c + 1]}${a}`);
  },
  t = "(...a)";
P(
  t,
  t,
  "TC:clip:RT:rect:GT:getTransform:DI:drawImage:FT:fillText:EL:ellipse:BP:beginPath:CP:closePath:MT:moveTo:LT:lineTo:BC:bezierCurveTo:ST:stroke:VS:save:VR:restore:TR:setTransform:XT:translate:XS:scale:XR:rotate:FR:fillRect:RE:rect:FL:fill"
),
  P(
    "a",
    "=a",
    "SBr:shadowBlur:LW:lineWidth:TA:textAlign:TB:textBaseline:SC:shadowColor:SS:strokeStyle:GC:globalCompositeOperation:FS:fillStyle"
  );
const DEF = (e, t) => {
    (e = e ?? CANV),
      (t = t ?? _R),
      CTR(t, 0, 0, t, 0, 0),
      CFS(e),
      CSS(e),
      CTA("center"),
      CSB(0),
      MUL();
  },
  CSB = (e) => CSBr(e * _R),
  DCE = (e) => document.createElement(e),
  CCX = (e) => (ctx = e || CTX),
  FNT = (e) => (ctx.font = `${e}px Arial`),
  TXT = (e, t, ...r) => {
    CFS(e), FNT(t), CFT(...r);
  },
  ELI = (e, ...t) => {
    CFS(e), CBP(), CEL(...t), CFL();
  },
  ADD = (e) => CGC("screen"),
  MUL = (e) => CGC("source-over"),
  CWH = (e, t, r) => {
    (e.width = t), (e.height = r || t);
  },
  BG = (e) => RECT(e, 0, 0, _W, _H),
  RECT = (e, ...t) => {
    CBP(), CFS(e), CFR(...t), CFL();
  },
  AA = (e, t) =>
    (e.imageSmoothingEnabled =
      e.mozImageSmoothingEnabled =
      e.webkitImageSmoothingEnabled =
        t);
function v2(e, t) {
  var r = this,
    C = (e, t) => ((r.x = e || 0), (r.y = t || 0), r);
  C(e, t),
    Object.assign(r, {
      set: C,
      circ: (e) => C(sin(e), -cos(e)),
      perp: (e) => C(r.y, -r.x),
      len: (e) => sqrt(r.x * r.x + r.y * r.y),
      dot: (e) => r.x * e.x + r.y * e.y,
      norm: (e) => r.div(r.len()),
      rad: (e) => atan2(r.x, -r.y),
      add: (e) => C(r.x + e.x, r.y + e.y),
      sub: (e) => C(r.x - e.x, r.y - e.y),
      mv: (e) => C(r.x * e.x, r.y * e.y),
      inc: (e) => C(r.x + e, r.y + e),
      mul: (e) => C(r.x * e, r.y * e),
      div: (e) => C(r.x / e, r.y / e),
      cpy: (e) => V2(r.x, r.y),
    });
}
(V2 = Q("new v2(v,a)")),
  FoE(Object.getOwnPropertyNames(Math), (i) => eval(`${i}=Math.${i}`));
const Lerp = Q("(1-v)*a+v*b"),
  Wrap = Q("v<a?b-(a-v)%(b-a):a+(v-a)%(b-a)"),
  Mapf = Q("b-a==0?c:c+(((v-a)/(b-a))*(d-c))"),
  Clamp = Q("v<a?a:min(b,v)"),
  Ease = (e) => -(cos(PI * e) - 1) / 2,
  TAU = 2 * PI;
class RNG {
  constructor(e) {
    var t = this,
      r = 4294967295,
      C = (123456789 + e) & r,
      n = (987654321 - e) & r,
      a = 65535;
    (t.r = (e) =>
      ((((n = (36969 * (n & a) + (n >>> 16)) & r) << 16) +
        ((C = (18e3 * (C & a) + (C >>> 16)) & r) & a)) >>>
        0) /
      (r + 1)),
      (t.f = (e, r) => e + t.r() * (r - e)),
      (t.i = (e, r) => floor(t.f(e, r))),
      (t.c = (e) => t.r() < e),
      (t.item = (e) => e[t.i(0, e.length)]);
  }
}
(CANV = cM(220, 1)), (WALL = cHx("f57411")), (SHDW = cHx("0f0a06")), (FPS = 60);
const SEED = 77345,
  TAG = "PG-00-000",
  PX = 1e3,
  HX = PX / 2,
  uS = (e, t, r, C, n) => {
    let a = (e, t, r) => {
        let C = new Array(e * t).fill(r),
          n = (t, r) => round(r) + round(t) * e;
        return {
          d: C,
          idx: n,
          get: (e, t) => C[n(e, t)] ?? 0,
          set: (e, t, r) => (C[n(e, t)] = r),
        };
      },
      l = V2(),
      c = (e, t, r) =>
        Ease(
          Clamp(
            (1 -
              l
                .set(e, t)
                .inc(-HX)
                .mul(1 / HX)
                .len()) *
              r,
            0,
            1
          )
        );
    ((e) => {
      let t = V2(),
        r = V2(),
        C = [];
      For(0, 3, (t, r) =>
        C.push(
          V2()
            .circ(r * TAU)
            .mul(e)
        )
      );
    })(200);
    let o = V2(),
      i =
        (e, t = 0) =>
        (r, C, n) => {
          r.add(
            o
              .circ(C.rad() + t)
              .norm()
              .mul(e)
          );
        },
      s = (e, t) => (r, C, n) => (
        C.mul(1 - t).add(o.set().add(e.get(r.x, r.y)).mul(t)), 0
      ),
      S =
        (...e) =>
        (...t) => {
          for (let r = 0; r < e.length; r++) if (e[r](...t)) return 1;
        },
      X = (e) => (t, r, C) => (
        (t.l = (t.l ?? 0) + 1), (t.t = 1 - t.l / e), t.l > e
      ),
      u =
        (e, t, r, C, n, a = 0) =>
        () => {
          let l = t.length,
            c = l - 1,
            o = 0;
          if (!l) return 1;
          for (a++; c > 0; ) {
            for (r(a), o = 0; o < e && c > 0; )
              n(...t[c]) && t.splice(c, 1), o++, c--;
            C(a);
          }
        };
    class p {
      constructor(e, t) {
        var r,
          C,
          n,
          a = this,
          l = [],
          c = [],
          o = V2(),
          i = {},
          s = V2(),
          S = V2(),
          X = V2();
        (a.M = c),
          (a.eff = (...e) => l.push([...e])),
          (a.meff = (...e) => c.push(e));
        V2();
        var u = (e, t, r, C) => C.set(t.x, t.y).sub(r).mul(e).add(r),
          p = (r, C, n) => {
            let l = r + "," + C;
            return (i[l] = i[l] ?? a.get(r * (1 / e), C * (1 / t)).cpy()), i[l];
          };
        let T = V2(),
          d = V2(),
          P = V2();
        (a.cget = (r, C) => {
          let n = floor(r * e),
            a = floor(C * t),
            l = p(n, a),
            c = p(n + 1, a),
            o = p(n, a + 1),
            i = p(n + 1, a + 1);
          C = C * t - a;
          let s = u((r = r * e - n), l, c, T),
            S = u(r, o, i, d);
          return u(C, s, S, P);
        }),
          (a.get = (e, t) => {
            for (o.set(), r = 0; r < c.length; r++) {
              var a = (C = c[r])[0],
                i = C[1],
                p = C[2];
              S.set(e, t).sub(a);
              var T = p / (2 * S.len());
              X.set(i.x, i.y).perp();
              var d = S.norm().dot(X),
                P = d > 0 ? 1 : -1;
              u(1 - abs(d), i, S.norm().perp().mul(P), s),
                o.add(s.norm().mul(T));
            }
            for (r = 0; r < l.length; r++)
              (C = l[r]),
                S.set(e - C[0], t - C[1]),
                (n = C[4] / S.len()),
                S.norm(),
                X.set(S.x, S.y).perp(),
                o.add(S.mul(C[3]).add(X.mul(C[2])).mul(n));
            return o;
          });
      }
    }
    let T = (e, t) => (r) => {
      For(0, r, (r) => {
        e.length && t.push(e.shift());
      });
    };
    var d, P, f, h, m, v;
    SIGN =
      ((m = (h = (e) => {
        var t = [];
        for (f = 0; f < e.length; f++)
          t.push(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".indexOf(
              e[f]
            ) - 31
          );
        return t;
      })(
        "EEBBBCABAAABBCCDEGLNKJJKKKLLLKLKKJJHCBEEEEEFEEEFFFFKSPIrpmoqxQVXXTLKJJIIHGGFFDDCCCCCDDFFGHIIIIHHGGEFEFFGGIHIHHHGGFGFGIN"
      )),
      (v = h(
        "ldwPPSUWYYYYXWTT07UCvwtrpnnlmlmnoqsua7RUWXZZZZYXUSPTnhnDIJKJMEEBytspljjlnszGNSX1232ZWRLEuojhikpxHSZ431SIxokhjovHSZ31VLm"
      )),
      (e, t, r, C) => {
        for (f = 0; f < m.length; f++)
          (d = m[f] * r),
            (P = v[f] * r),
            C(e, t, e + d, t + P),
            (e += d),
            (t += P);
      });
    (CANV = "transparent"), (WALL = "transparent"), (SHDW = "transparent");
    cH(200, 60, 2, 0);
    FPS = 30;
    let F = (
        (e, t, r, C, n, a) => (l) =>
          l > a
            ? Mapf(l, a, 1, r, C)
            : l > n
            ? Mapf(l, n, a, t, r)
            : Mapf(l, 0, n, e, t)
      )(0, 1.5, 1, 0, 0.3, 0.7),
      E = (e) => abs(e.len() - 300),
      A = ((e, t) => {
        V2();
        let r = V2();
        return (C) => {
          let n = r.set(0, 0).add(C).sub(e),
            a = r.len() / t;
          return (
            a < 1 &&
              n
                .norm()
                .mul(t * sin((a * PI) / 2))
                .add(e),
            n
          );
        };
      })(V2(0, 0), 300),
      g = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
    g.addColorStop(0, cM(0, 1)),
      g.addColorStop(0.2, cM(0, 1)),
      g.addColorStop(0.35, cM(0, 0.1)),
      g.addColorStop(0.5, cM(0, 0)),
      g.addColorStop(1, cM(0, 0));
    let x,
      H,
      y,
      V,
      B = 1,
      R = (t) => {
        e.i(-30, 0);
        let r = 10 + 20 * sin(0.18 * t),
          C = 60 + 15 * sin(0.16 * t);
        CFS(cH(r, 100, C, 0.65)), CSB(0), ADD(), CBP();
      },
      L = (e) => {
        CFL(), MUL(), CSB(0);
      },
      M = (e, t, r) => {
        let C = pow(Mapf(E(e), 0, 600, 1, 0), 6),
          n = 0.5 * max(0.001, 4 * C * F(e.t)),
          a = (A(e), e.x),
          l = e.y;
        return (
          CMT(a, l), CEL(a, l, r.x * n, r.y * n, 0, 0, TAU), CCP(), (r.S = r), 0
        );
      },
      b = (e, t, r, C, n) =>
        S(
          (e, t, r) => {
            (e.X = e.x), (e.Y = e.y);
          },
          (
            (e, t, r) =>
            (...C) => {
              for (r = 0; r < e; r++) if (t(...C)) return 1;
            }
          )(t, S(X(n), s(r, C), i(e, 0), M))
        );
    ctx.clearRect(0, 0, PX, PX);
    let _ = 0;
    _ = 1;
    let D = ((e, t, r) => {
      let C = new RNG(e);
      CVS(),
        t(),
        ADD(),
        For(0, 10, (e) => {
          CSB(C.f(5, 35));
        }),
        MUL(),
        For(0, 400, () => {
          V2()
            .circ(C.f(0, 2 * TAU))
            .mul(C.f(400, 1e3)),
            pow(C.r(), 6);
        }),
        CSB(0);
      (x = new p(1, 1)), (H = []);
      let n = [];
      For(0, 40, (e, t) => {
        var r = V2()
            .circ(t * TAU + C.r())
            .mul(302),
          n = V2().circ(C.f(0, TAU)),
          a = C.f(0.4, 2);
        x.meff(r, n, 100 * a);
      }),
        For(0, 10, (e, t) => {
          var r = V2()
              .circ(t * TAU + C.r())
              .mul(302),
            n = V2().circ(C.f(0, TAU)),
            a = C.f(0.1, 0.5);
          x.meff(r, n, 100 * a);
        }),
        For(0, 1e3, (e, t) => {
          var r = V2()
              .circ(PI / 4 + C.f(0, TAU / 10) - TAU * t)
              .mul(300 + 200 * pow(C.r(), 5)),
            a = r.cpy().norm();
          let l = 1 * C.f(0.7, 1.2) * 2;
          var c = V2(l, l);
          H.push([r, a, c]), n.push([r.cpy(), a.cpy(), c.cpy()]);
          pow(Mapf(E(r), 0, 300, 1, 0), 4);
        });
      let a = [];
      (y = []), (V = []);
      let l = T(H, y),
        c = T(n, V);
      return (
        (a[0] = u(30, y, R, L, b(-1.5, 20, x, r, 450))),
        (a[1] = u(30, V, R, L, b(1.5, 20, x, r, 450))),
        CVR(),
        () => (
          CVS(),
          t(),
          l(4),
          c(4),
          FoE(a, (e) => e()),
          CVR(),
          !(y.length || V.length || H.length || n.length)
        )
      );
    })(
      SEED,
      ((e, t, r) => () => {
        CXT(e, t), CXS(r, r);
      })(HX, HX, 0.85),
      1
    );
    _I = (e) => 0;
    let G = [],
      I = ((t, r, C, n = []) => {
        let l = ((t = PX, r = PX) => {
          let C = [],
            n = [],
            l = a(t, r, 0),
            c = [
              [0, -1],
              [0, -1],
              [0, 1],
              [-1, 0],
              [1, 0],
            ],
            o = {
              A: C,
              G: l,
              seq: n,
              step: () => {
                let t = [];
                return (
                  FoE(o.A, (r) => {
                    e.c(0.5)
                      ? ((c[0] = e.c(0.01)
                          ? [e.i(-20, 20), e.i(-20, 20)]
                          : [0, -1]),
                        FoE(c, (e) => {
                          let C = r[0] + e[0],
                            a = r[1] + e[1];
                          C > 0 &&
                            C < PX &&
                            a > 0 &&
                            a < PX &&
                            (l.get(C, a) ||
                              (l.set(C, a, 1), n.push([C, a]), t.push([C, a])));
                        }))
                      : t.push(r);
                  }),
                  (o.A = C = t),
                  o.A
                );
              },
            };
          return o;
        })(1e3, 1e3);
        l.A.push([1, 1]),
          l.A.push([1, PX - 1]),
          l.A.push([PX - 1, PX - 1]),
          l.A.push([PX - 1, 1]);
        let o = (r, C) => {
            let n = 1 / 0.85,
              a = t.get((r - HX) * n, (C - HX) * n),
              l = 3 * a.len(),
              o = 0.15 * Clamp(l, 0, 4),
              i = 2 * pow(1 + sin(8 * a.len()) / 2, 2) * o,
              s = 1 * pow(1 + sin(2 * a.rad()) / 2, 3),
              S = a.norm(),
              X = (S.rad(), e.c(0.03), Mapf(S.x, -1, 1, 0, 255) * o * s * i),
              u = Mapf(S.y, 1, -1, 0, 255) * o * s * i,
              p = Mapf(abs(S.x) * abs(S.y), 0, 1, 0, 255) * o * s * i,
              T = c(r, C, 2),
              d = (X + u + p) / 765,
              P = 255 / max(1, X, u, p),
              f = cR(X * P, u * P, p * P, d * T);
            RECT(f, r, C, 1, 1);
          },
          i = a(1e3, 1e3, 0),
          s = 0,
          S = 1;
        return () => {
          let t = 0;
          s += TAU / 260;
          let r = e.c(0.5) ? PI / 2 : (PI / 2) * 3;
          S *= -1;
          let C = V2()
            .circ(r + s * S)
            .mul(250)
            .inc(HX);
          l.A.push([C.x, C.y]), l.step();
          do {
            let e = l.seq.shift();
            e &&
              (i.get(e[0], e[1]) ||
                (i.set(e[0], e[1], 1), o(e[0], e[1]), n.push(e))),
              t++;
          } while (l.seq.length > 0);
          return t <= 1;
        };
      })(x, 0, 0, G),
      w = (e) => {
        if (e.length) {
          CSB(30), CSC("yellow"), CBP(), (ctx.lineCap = "round");
          FoE(e, (e) => {
            let t = e[0],
              r = (e[2].S, 0.85 * t.x + HX),
              C = 0.85 * t.y + HX,
              n = 0.85 * t.X + HX,
              a = 0.85 * t.Y + HX,
              l = r - n,
              c = C - a,
              o = t.t / 2;
            CMT(n + l * o, a + c * o), CLT(n, a);
          }),
            CSS("white"),
            CLW(5),
            CST(),
            CSB(0);
        }
      },
      W = (e) => {
        let t = ctx;
        CCX(), e(), CCX(t);
      },
      U = 0;
    return (t) => {
      if (
        ((B = 0),
        CVS(),
        W(() => {
          CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX);
        }),
        U ||
          ((U = I()),
          W(() => {
            CBP(), CSB(30), CSC(cH(200, 100, 70, 1));
            let e = V2();
            FoE(G, (t) => {
              let r = e.set(t[0], t[1]).inc(-HX).len(),
                C = Clamp(Mapf(r, 500, 350, 0, 1), 0, 2);
              CRE(t[0] - C / 2, t[1] - C / 2, C, C);
            }),
              CFS("white"),
              CFL(),
              CSB(0),
              (G.length = 0);
          })),
        CVR(),
        U &&
          (W(() => {
            CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX), w(y), w(V);
          }),
          D(),
          _M && _X > 0 && _X < PX && _Y > 0 && _Y < PX))
      ) {
        let t = V2(_X + e.i(-20, 20), _Y + e.i(-2, 2))
          .inc(-HX)
          .mul(1 / 0.85);
        y.unshift([t.cpy(), t.cpy().norm(), V2(5, 5)]),
          V.unshift([t.cpy(), t.cpy().norm(), V2(5, 5)]);
      }
      return 0;
    };
  };
function I() {
  (cnv = document.getElementById("tc")), (ctx = CTX = cnv.getContext("2d"));
  const e = (e, t, C, n, a, l) => {
    var c,
      o,
      i,
      s = V2(e, t);
    return (
      r.push((e) => {
        o && l(a);
      }),
      (r, a) => {
        (c = V2(_X, _Y).mul(-1).add(s)),
          (o = c.len() < 1.7 * C),
          (i = o ? 2 : 5),
          r &&
            (ELI(o || a ? "white" : "grey", e, t, C + i, C + i, 0, 0, TAU),
            CTA("center"),
            CFS("black"),
            FNT(C - 3),
            CFT(n, e, t + 6));
      }
    );
  };
  let t = {
    Piece: "Fig A - 1 of 12",
    Name: "Sol Journey 2 - Monet Media",
    Description:
      "Simulated magnetic field study using a transparent scanline|field renderer along side magnetic agents tracing lines through|the field.".split(
        "|"
      ),
    Properties: "Linear, Bound",
    Medium: "Fully On-Chain BlockGen.Art Canvas",
    Artist: "Charles Machin - @CM_GenArt",
    Seed: SEED,
  };
  var r = [],
    C = [],
    n = 0,
    a = [1, 2, 4, 8, 16],
    l = 0,
    c = (e) => {
      (n = e), (_R = a[e]), (art = o(_R)), (cer = i(min(_R, 4)));
    },
    o = (e) => {
      l = 0;
      var t,
        r = DCE("canvas"),
        C = r.getContext("2d"),
        n = cM(150, 1),
        a = () => {
          DEF(), TXT(n, 1 == e ? 10 : 8, TAG, 967, 993);
        };
      return (
        CWH(r, e * PX),
        CCX(C),
        AA(r, 1),
        DEF(),
        (t = uS(new RNG(SEED), C, r, e, a)),
        a(),
        () => (CCX(C), DEF(), l || ((l = t()) && a()), CCX(), r)
      );
    },
    i = (e) => {
      let r = DCE("canvas"),
        C = new RNG(SEED);
      CWH(r, PX * e),
        CCX(r.getContext("2d")),
        DEF(null, e),
        RECT(cH(0, 2, 80, 0.6), 2, 2, PX - 4, PX - 4),
        CBP(),
        CRT(4, 4, PX - 8, PX - 8),
        CTC();
      let n = cH(0, 2, 90, 1);
      RECT(n, 0, 0, PX, PX),
        For(0, 100, (e, t) => {
          (t *= PX),
            For(0, 100, (e, r) => {
              (r *= PX),
                For(0, 10, (e) =>
                  RECT(
                    cH(0, 0, C.f(40, 70), 0.07),
                    t,
                    r,
                    C.i(-6, 6),
                    C.i(-6, 6)
                  )
                );
            });
        });
      let a = HX,
        l = 150,
        c = (e, t, r, C) => {
          CMT(e, t), CLT(r, C);
        };
      CBP(),
        CSS(cH(40, 90, 68, 0.7)),
        ctx.arc(a, l, 45, 0, TAU),
        CCP(),
        CLW(2),
        CST(),
        CBP(),
        CSS(cH(0, 2, 94, 0.5)),
        ctx.arc(a, l, 50, 0, TAU),
        CCP(),
        CLW(10),
        CST(),
        CBP(),
        For(0, 50, (e, t, r, n) => {
          (r = V2().circ(t * TAU)),
            (n = C.f(60, 1e3)),
            c(a + 60 * r.x, l + 60 * r.y, a + r.x * n, l + r.y * n);
        }),
        CLW(3),
        CST(),
        CBP(),
        For(0, 200, (e, t, r, n, o) => {
          (r = V2().circ(t * TAU)),
            (n = C.f(60, 1e3)),
            (o = C.f(60, 1e3)),
            c(a + r.x * o, l + r.y * o, a + r.x * n, l + r.y * n);
        }),
        CLW(2),
        CSS(cH(0, 2, 82, 0.5)),
        CST(),
        CBP(),
        CSC(cM(250, 1)),
        CSBr(20 * e),
        SIGN(HX - 7, 270, 0.35, (e, t, r, C) => CLT(r, C)),
        CSS(cM(0, 0.25)),
        CLW(3),
        CST(),
        CBP(),
        CSC("black"),
        CSBr(30 * e),
        CRE(0, 0, PX, PX),
        CSS(cHx("dbccb8")),
        CLW(102),
        CST(),
        CBP(),
        CRE(0, 0, PX, PX),
        CSS(cHx("9d8c78")),
        CLW(92),
        CST(),
        CSBr(6 * e),
        CSS(CANV),
        CLW(30),
        CST(),
        DEF(null, e),
        TXT(cM(0, 0.1), 18, "CM Gen Art", HX, 40),
        TXT(cM(0, 0.6), 13, TAG, HX, 970),
        (a = HX),
        (l = 370);
      var o, i;
      for (var [o, s] of Object.entries(t))
        (l += 34),
          TXT(cM(0, 0.8), 14, o, a, l),
          (l += 24),
          (i = cM(0, 0.5)),
          Array.isArray(s)
            ? FoE(s, (e) => {
                TXT(i, 20, e, a, l), (l += 22);
              })
            : TXT(i, 20, s, a, l);
      return DEF(), CCX(), (e) => r;
    },
    s = (e) => {
      var r = DCE("a");
      (r.download = t.Name), (r.href = art().toDataURL()), r.click(), r.delete;
    },
    S = () => {
      setTimeout((e) => {
        window.requestAnimationFrame(S);
        var t = 0,
          r = PX;
        CCX(),
          X(0.97, WALL),
          CSC(SHDW),
          CSBr(55),
          RECT(CANV, 0, 0, r, r),
          CSB(0),
          CVS(),
          _P && (CXT(PX, 0), CXS(-1, 1)),
          CDI(art(), 0, 0, r, r),
          CVR(),
          _P && CDI(cer(), 0, 0, r, r),
          FoE(C, (e) => {
            e(_P, n == t), t++;
          });
      }, 1e3 / FPS);
    },
    X = (e, t) => {
      var r = window,
        parentRect = cnv.getBoundingClientRect(),
        C = parentRect.width, //r.innerWidth,
        n = parentRect.width, //r.innerHeight,
        a = C != _W || n != _H,
        l = min(C, n) * e,
        c = l / PX,
        o = min(2, max(devicePixelRatio ?? 1, 1));
      a && ((cnv.width = _W = C * o), (cnv.height = _H = n * o)),
        CTR(1, 0, 0, 1, 0, 0),
        BG(t),
        CXT((C - l) / 2, (n - l) / 2),
        CXS(c, c);
    };
  AA(ctx, 1),
    (() => {
      c(0);
      var t,
        n,
        l = a.length,
        o = "touch",
        i = "mouse",
        X = (e) => {
          e.preventDefault();
          var t = e.changedTouches[0];
          return (e.clientX = t.pageX), (e.clientY = t.pageY), e;
        },
        T = (e) => {
          var t = cnv.getBoundingClientRect(),
            r = CGT().invertSelf();
          (n = e.clientX - t.left),
            (y = e.clientY - t.top),
            (_X = n * r.a + y * r.c + r.e),
            (_Y = n * r.b + y * r.d + r.f);
        };
      for (
        p = (e) => {
          (_M = 1),
            T(e),
            ((e) => {
              e.preventDefault(), e.stopPropagation();
            })(e),
            (_P = _I(_X, _Y));
        },
          u = (e) => {
            _P && FoE(r, (e) => e()), (_M = _P = 0), T(e);
          },
          FoE(
            [
              [
                o + "start",
                (e) => {
                  p(X(e));
                },
              ],
              [
                o + "move",
                (e) => {
                  T(X(e));
                },
              ],
              [
                o + "end",
                (e) => {
                  u(X(e));
                },
              ],
              [i + "down", p],
              [i + "move", T],
              [i + "up", u],
            ],
            (e) => cnv.addEventListener(...e)
          ),
          t = 0;
        t < l;
        t++
      )
        (n = HX - (80 * l) / 2 + 80 * (t + 0.5)),
          C.push(e(130, n, 22, a[t] + "k", t, c));
      C.push(e(130, 800, 25, CHAR(8595), 0, (e) => s())), S();
    })();
}
(_X = _Y = 0),
  (_R = 1),
  (_P = 0),
  (_M = 0),
  (_W = 0),
  (_H = 0),
  (_I = (e) => 1),
  I();
