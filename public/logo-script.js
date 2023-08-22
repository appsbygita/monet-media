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
      a = (987654321 - e) & r,
      n = 65535;
    (t.r = (e) =>
      ((((a = (36969 * (a & n) + (a >>> 16)) & r) << 16) +
        ((C = (18e3 * (C & n) + (C >>> 16)) & r) & n)) >>>
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
  uS = (e, t, r, C, a) => {
    let n = V2(),
      l = (e, t, r) =>
        Ease(
          Clamp(
            (1 -
              n
                .set(e, D)
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
    let c = V2(),
      o =
        (e, t = 0) =>
        (r, C, a) => {
          r.add(
            c
              .circ(C.rad() + t)
              .norm()
              .mul(e)
          );
        },
      i =
        (...e) =>
        (...t) => {
          for (let r = 0; r < e.length; r++) if (e[r](...t)) return 1;
        },
      s = (e) => (t, r, C) => (
        (t.l = (t.l ?? 0) + 1), (t.t = 1 - t.l / e), t.l > e
      ),
      S =
        (e, t, r, C, a, n = 0) =>
        () => {
          let l = t.length,
            c = l - 1,
            o = 0;
          if (!l) return 1;
          for (n++; c > 0; ) {
            for (r(n), o = 0; o < e && c > 0; )
              a(...t[c]) && t.splice(c, 1), o++, c--;
            C(n);
          }
        };
    class T {
      constructor(e, t) {
        var r,
          C,
          a,
          n = this,
          l = [],
          c = [],
          o = V2(),
          i = {},
          s = V2(),
          S = V2(),
          T = V2();
        (n.M = c),
          (n.eff = (...e) => l.push([...e])),
          (n.meff = (...e) => c.push(e));
        V2();
        var X = (e, t, r, C) => C.set(t.x, t.y).sub(r).mul(e).add(r),
          d = (r, C, a) => {
            let l = r + "," + C;
            return (i[l] = i[l] ?? n.get(r * (1 / e), C * (1 / t)).cpy()), i[l];
          };
        let u = V2(),
          p = V2(),
          P = V2();
        (n.cget = (r, C) => {
          let a = floor(r * e),
            n = floor(C * t),
            l = d(a, n),
            c = d(a + 1, n),
            o = d(a, n + 1),
            i = d(a + 1, n + 1);
          C = C * t - n;
          let s = X((r = r * e - a), l, c, u),
            S = X(r, o, i, p);
          return X(C, s, S, P);
        }),
          (n.get = (e, t) => {
            for (o.set(), r = 0; r < c.length; r++) {
              var n = (C = c[r])[0],
                i = C[1],
                d = C[2];
              S.set(e, t).sub(n);
              var u = d / (2 * S.len());
              T.set(i.x, i.y).perp();
              var p = S.norm().dot(T),
                P = p > 0 ? 1 : -1;
              X(1 - abs(p), i, S.norm().perp().mul(P), s),
                o.add(s.norm().mul(u));
            }
            for (r = 0; r < l.length; r++)
              (C = l[r]),
                S.set(e - C[0], t - C[1]),
                (a = C[4] / S.len()),
                S.norm(),
                T.set(S.x, S.y).perp(),
                o.add(S.mul(C[3]).add(T.mul(C[2])).mul(a));
            return o;
          });
      }
    }
    let X = (e, t) => (r) => {
      For(0, r, (r) => {
        e.length && t.push(e.shift());
      });
    };
    var d, u, p, P, v, f;
    SIGN =
      ((v = (P = (e) => {
        var t = [];
        for (p = 0; p < e.length; p++)
          t.push(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".indexOf(
              e[p]
            ) - 31
          );
        return t;
      })(
        "EEBBBCABAAABBCCDEGLNKJJKKKLLLKLKKJJHCBEEEEEFEEEFFFFKSPIrpmoqxQVXXTLKJJIIHGGFFDDCCCCCDDFFGHIIIIHHGGEFEFFGGIHIHHHGGFGFGIN"
      )),
      (f = P(
        "ldwPPSUWYYYYXWTT07UCvwtrpnnlmlmnoqsua7RUWXZZZZYXUSPTnhnDIJKJMEEBytspljjlnszGNSX1232ZWRLEuojhikpxHSZ431SIxokhjovHSZ31VLm"
      )),
      (e, t, r, C) => {
        for (p = 0; p < v.length; p++)
          (d = v[p] * r),
            (u = f[p] * r),
            C(e, t, e + d, t + u),
            (e += d),
            (t += u);
      });
    (CANV = "transparent"), (WALL = "transparent"), (SHDW = "transparent");
    cH(200, 60, 2, 0);
    FPS = 30;
    let m = (
        (e, t, r, C, a, n) => (l) =>
          l > n
            ? Mapf(l, n, 1, r, C)
            : l > a
            ? Mapf(l, a, n, t, r)
            : Mapf(l, 0, a, e, t)
      )(0, 1.5, 1, 0, 0.3, 0.7),
      E = (e) => abs(e.len() - 300),
      h = ((e, t) => {
        V2();
        let r = V2();
        return (C) => {
          let a = r.set(0, 0).add(C).sub(e),
            n = r.len() / t;
          return (
            n < 1 &&
              a
                .norm()
                .mul(t * sin((n * PI) / 2))
                .add(e),
            a
          );
        };
      })(V2(0, 0), 300),
      F = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
    F.addColorStop(0, cM(0, 1)),
      F.addColorStop(0.2, cM(0, 1)),
      F.addColorStop(0.35, cM(0, 0.1)),
      F.addColorStop(0.5, cM(0, 0)),
      F.addColorStop(1, cM(0, 0));
    let x,
      A,
      g,
      y,
      H = 1,
      L = (t) => {
        let r = 300 + e.i(-30, 0);
        H && ELI(F, 0, 0, 2 * r, 2 * r, 0, 0, TAU);
        let C = 10 + 20 * sin(0.18 * t),
          a = 60 + 15 * sin(0.16 * t);
        CFS(cH(C, 100, a, 0.65)), CSB(0), ADD(), CBP();
      },
      R = (e) => {
        CFL(), MUL(), CSB(0);
      },
      B = (e, t, r) => {
        let C = pow(Mapf(E(e), 0, 600, 1, 0), 6),
          a = 0.5 * max(0.001, 4 * C * m(e.t)),
          n = (h(e), e.x),
          l = e.y;
        return (
          CMT(n, l), CEL(n, l, r.x * a, r.y * a, 0, 0, TAU), CCP(), (r.S = r), 0
        );
      },
      V = (e, t, r, C, a) =>
        i(
          (e, t, r) => {
            (e.X = e.x), (e.Y = e.y);
          },
          (
            (e, t, r) =>
            (...C) => {
              for (r = 0; r < e; r++) if (t(...C)) return 1;
            }
          )(
            t,
            i(
              s(a),
              ((e, t) => (r, C, a) => (
                C.mul(1 - t).add(c.set().add(e.cget(r.x, r.y)).mul(t)), 0
              ))(r, C),
              o(e, 0),
              B
            )
          )
        );
    ctx.clearRect(0, 0, PX, PX);
    let M = 0;
    M = 1;
    let b = ((e, t, r) => {
      let C = new RNG(e);
      CVS(),
        t(),
        ADD(),
        For(0, 10, (e) => {
          CSB(C.f(5, 35));
          var t = cH(10, 100, 56, 0.7);
          CSS(t), CSC(t), CBP(), CEL(0, 0, 300, 300, 0, 0, TAU), CLW(6), CST();
        }),
        MUL(),
        ELI("black", 0, 0, 300, 300, 0, 0, TAU),
        For(0, 400, () => {
          var e = V2()
              .circ(C.f(0, 2 * TAU))
              .mul(C.f(400, 1e3)),
            t = 0.1 + 1 * pow(C.r(), 6);
          CSC("white"),
            CSB(3),
            ELI("white", e.x, e.y, t, t, 0, 0, TAU),
            CSB(10),
            ELI("white", e.x, e.y, t, t, 0, 0, TAU),
            CSB(0);
        });
      (x = new T(1, 1)), (A = []);
      let a = [];
      For(0, 40, (e, t) => {
        var r = V2()
            .circ(t * TAU + C.r())
            .mul(302),
          a = V2().circ(C.f(0, TAU)),
          n = C.f(0.4, 2);
        x.meff(r, a, 100 * n);
      }),
        For(0, 10, (e, t) => {
          var r = V2()
              .circ(t * TAU + C.r())
              .mul(302),
            a = V2().circ(C.f(0, TAU)),
            n = C.f(0.1, 0.5);
          x.meff(r, a, 100 * n);
        }),
        For(0, 1e3, (e, t) => {
          var r = V2()
              .circ(PI / 4 + C.f(0, TAU / 10) - TAU * t)
              .mul(300 + 200 * pow(C.r(), 5)),
            n = r.cpy().norm();
          let l = 1 * C.f(0.7, 1.2) * 2;
          var c = V2(l, l);
          A.push([r, n, c]), a.push([r.cpy(), n.cpy(), c.cpy()]);
          pow(Mapf(E(r), 0, 300, 1, 0), 4);
        });
      let n = [];
      (g = []), (y = []);
      let l = X(A, g),
        c = X(a, y);
      return (
        (n[0] = S(30, g, L, R, V(-1.5, 20, x, r, 450))),
        (n[1] = S(30, y, L, R, V(1.5, 20, x, r, 450))),
        CVR(),
        () => (
          CVS(),
          t(),
          l(4),
          c(4),
          FoE(n, (e) => e()),
          CVR(),
          !(g.length || y.length || A.length || a.length)
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
    let _ = ((t, r, C) => {
        let a = 0;
        return () => (
          For(0, r, (t) => {
            ctx.clearRect(0, a, PX, 1),
              For(0, PX, (t, r) => {
                let C = 1 / 0.85,
                  n = x.cget((t - HX) * C, (a - HX) * C),
                  c = 3 * n.len(),
                  o = 0.15 * Clamp(c, 0, 4),
                  i = 2 * pow(1 + sin(8 * n.len()) / 2, 2) * o,
                  s = 1 * pow(1 + sin(2 * n.rad()) / 2, 3),
                  S = n.norm(),
                  T = (S.rad(), e.c(0.03) ? 1 : 0),
                  X = Mapf(S.x, -1, 1, 0, 255) * o * s * i,
                  d = Mapf(S.y, 1, -1, 0, 255) * o * s * i,
                  u = Mapf(abs(S.x) * abs(S.y), 0, 1, 0, 255) * o * s * i,
                  p = l(t, 0, 2),
                  P = (X + d + u) / 765,
                  v = 255 / max(1, X, d, u),
                  f = cR(X * v, d * v, u * v, P * p);
                ELI(f, t, a, e.f(0.5, 2), e.f(0.5, 2), 0, 0, TAU),
                  T && RECT(f, t, a, 1, 2 * min(1 * c, 60));
              }),
              (a += 0.75);
          }),
          a
        );
      })(0, 4),
      D = 0,
      I = (e) => {
        e.length &&
          (CSB(15),
          CSC("yellow"),
          CBP(),
          FoE(e, (e) => {
            let t = e[0],
              r = (e[2].S, 0.85 * t.x + HX),
              C = 0.85 * t.y + HX,
              a = 0.85 * t.X + HX,
              n = 0.85 * t.Y + HX,
              l = r - a,
              c = C - n,
              o = t.t;
            CMT(a + l * o, n + c * o), CLT(a, n);
          }),
          CSS("white"),
          CLW(2),
          CST(),
          CSB(0));
      },
      G = (e) => {
        let t = ctx;
        CCX(), e(), CCX(t);
      };
    return (e) => {
      if (
        (0 == D && ctx.clearRect(0, 900, PX, PX),
        (H = 0),
        CVS(),
        G(() => {
          CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX);
        }),
        D < 1e3 && (D = _()),
        CVR(),
        D > 950 &&
          (G(() => {
            CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX), I(g), I(y);
          }),
          b(),
          _M && _X > 0 && _X < PX && _Y > 0 && _Y < PX))
      ) {
        let e = V2(_X, _Y)
          .inc(-HX)
          .mul(1 / 0.85);
        g.unshift([e.cpy(), e.cpy().norm(), V2(5, 5)]),
          y.unshift([e.cpy(), e.cpy().norm(), V2(5, 5)]);
      }
      return 0;
    };
  };
function I() {
  (cnv = document.getElementById("tc")), (ctx = CTX = cnv.getContext("2d"));
  const e = (e, t, C, a, n, l) => {
    var c,
      o,
      i,
      s = V2(e, t);
    return (
      r.push((e) => {
        o && l(n);
      }),
      (r, n) => {
        (c = V2(_X, _Y).mul(-1).add(s)),
          (o = c.len() < 1.7 * C),
          (i = o ? 2 : 5),
          r &&
            (ELI(o || n ? "white" : "grey", e, t, C + i, C + i, 0, 0, TAU),
            CTA("center"),
            CFS("black"),
            FNT(C - 3),
            CFT(a, e, t + 6));
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
    a = 0,
    n = [1, 2, 4, 8, 16],
    l = 0,
    c = (e) => {
      (a = e), (_R = n[e]), (art = o(_R)), (cer = i(min(_R, 4)));
    },
    o = (e) => {
      l = 0;
      var t,
        r = DCE("canvas"),
        C = r.getContext("2d"),
        a = cM(150, 1),
        n = () => {
          DEF(), TXT(a, 1 == e ? 10 : 8, TAG, 967, 993);
        };
      return (
        CWH(r, e * PX),
        CCX(C),
        AA(r, 1),
        DEF(),
        (t = uS(new RNG(SEED), C, r, e, n)),
        n(),
        () => (CCX(C), DEF(), l || ((l = t()) && n()), CCX(), r)
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
      let a = cH(0, 2, 90, 1);
      RECT(a, 0, 0, PX, PX),
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
      let n = HX,
        l = 150,
        c = (e, t, r, C) => {
          CMT(e, t), CLT(r, C);
        };
      CBP(),
        CSS(cH(40, 90, 68, 0.7)),
        ctx.arc(n, l, 45, 0, TAU),
        CCP(),
        CLW(2),
        CST(),
        CBP(),
        CSS(cH(0, 2, 94, 0.5)),
        ctx.arc(n, l, 50, 0, TAU),
        CCP(),
        CLW(10),
        CST(),
        CBP(),
        For(0, 50, (e, t, r, a) => {
          (r = V2().circ(t * TAU)),
            (a = C.f(60, 1e3)),
            c(n + 60 * r.x, l + 60 * r.y, n + r.x * a, l + r.y * a);
        }),
        CLW(3),
        CST(),
        CBP(),
        For(0, 200, (e, t, r, a, o) => {
          (r = V2().circ(t * TAU)),
            (a = C.f(60, 1e3)),
            (o = C.f(60, 1e3)),
            c(n + r.x * o, l + r.y * o, n + r.x * a, l + r.y * a);
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
        (n = HX),
        (l = 370);
      var o, i;
      for (var [o, s] of Object.entries(t))
        (l += 34),
          TXT(cM(0, 0.8), 14, o, n, l),
          (l += 24),
          (i = cM(0, 0.5)),
          Array.isArray(s)
            ? FoE(s, (e) => {
                TXT(i, 20, e, n, l), (l += 22);
              })
            : TXT(i, 20, s, n, l);
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
          T(1, WALL),
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
            e(_P, a == t), t++;
          });
      }, 1e3 / FPS);
    },
    T = (e, t) => {
      var r = window,
        parentRect = cnv.getBoundingClientRect(),
        C = parentRect.width, //r.innerWidth,
        a = parentRect.width, //r.innerHeight,
        n = C != _W || a != _H,
        l = min(C, a) * e,
        c = l / PX,
        o = min(2, max(devicePixelRatio ?? 1, 1));
      n && ((cnv.width = _W = C * o), (cnv.height = _H = a * o)),
        CTR(1, 0, 0, 1, 0, 0),
        BG(t),
        CXT((C - l) / 2, (a - l) / 2),
        CXS(c, c);
    };
  AA(ctx, 1),
    (() => {
      c(0);
      var t,
        a,
        l = n.length,
        o = "touch",
        i = "mouse",
        T = (e) => {
          e.preventDefault();
          var t = e.changedTouches[0];
          return (e.clientX = t.pageX), (e.clientY = t.pageY), e;
        },
        X = (e) => {
          var t = cnv.getBoundingClientRect(),
            r = CGT().invertSelf();
          (a = e.clientX - t.left),
            (y = e.clientY - t.top),
            (_X = a * r.a + y * r.c + r.e),
            (_Y = a * r.b + y * r.d + r.f);
        };
      for (
        p = (e) => {
          (_M = 1),
            X(e),
            ((e) => {
              e.preventDefault(), e.stopPropagation();
            })(e),
            (_P = _I(_X, _Y));
        },
          u = (e) => {
            _P && FoE(r, (e) => e()), (_M = _P = 0), X(e);
          },
          FoE(
            [
              [
                o + "start",
                (e) => {
                  p(T(e));
                },
              ],
              [
                o + "move",
                (e) => {
                  X(T(e));
                },
              ],
              [
                o + "end",
                (e) => {
                  u(T(e));
                },
              ],
              [i + "down", p],
              [i + "move", X],
              [i + "up", u],
            ],
            (e) => cnv.addEventListener(...e)
          ),
          t = 0;
        t < l;
        t++
      )
        (a = HX - (80 * l) / 2 + 80 * (t + 0.5)),
          C.push(e(130, a, 22, n[t] + "k", t, c));
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
