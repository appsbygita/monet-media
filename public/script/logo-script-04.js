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
      l = (987654321 - e) & r,
      a = 65535;
    (t.r = (e) =>
      ((((l = (36969 * (l & a) + (l >>> 16)) & r) << 16) +
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
  uS = (e, t, r, C, l) => {
    let a = new (class {
        constructor(e, t, r) {
          let C = this;
          (C.C = e),
            (C.w = t),
            (C.h = r),
            (C.D = e.getImageData(0, 0, t, r)),
            (C.A = new Uint8ClampedArray(t * r * 4).fill(0));
        }
        set(e, t, r, C, l, a) {
          const n = 4 * (t * this.w + e);
          let c = this;
          (c.A[n] = r), (c.A[n + 1] = C), (c.A[n + 2] = l), (c.A[n + 3] = a);
        }
        apply() {
          this.D.data.set(this.A), this.C.putImageData(this.D, 0, 0);
        }
      })(ctx, PX, PX),
      n = (e, t, r) => {
        let C = new Array(e * t).fill(r),
          l = (t, r) => round(r) + round(t) * e;
        return {
          d: C,
          idx: l,
          get: (e, t) => C[l(e, t)] ?? 0,
          set: (e, t, r) => (C[l(e, t)] = r),
        };
      },
      c = (t) => {
        let r = [];
        For(0, 3, (t) => {
          let C = V2(e.r(), 0)
            .circ(e.r() * TAU)
            .mul(50 * e.r())
            .add(V2(HX, e.f(-150, -450)));
          r.push([C, V2(e.f(-6, 6), e.f(0, -10)), V2(3, 4).mul(e.f(0.7, 1.5))]);
        });
        let C = (r) => {
          let C = V2(),
            l = V2(),
            a = V2(),
            n = e.f(50, 90);
          For(0, 7, (c, o) => {
            C.circ(e.r() * TAU),
              For(0, 20, (c, o) => {
                if (
                  (a.circ(e.r() * TAU).mul(5 * o),
                  l
                    .set()
                    .add(C)
                    .mul(o * n)
                    .add(r)
                    .add(a),
                  t)
                )
                  t(l);
                else {
                  let t = 0.5 + 4 * pow(e.r(), 3);
                  ELI(cH(e.i(0, 360), 100, 50, 1), l.x, l.y, t, t, 0, 0, TAU);
                }
              });
          });
        };
        return () => (
          ((e) => {
            let t = V2(0, 1);
            FoE(e, (e, r) => {
              let [C, l, a] = e;
              l.add(t).mul(0.97), C.add(l);
            });
          })(r),
          ((t) => {
            let r = ctx;
            CCX(),
              CBP(),
              CSB(30),
              CSC("white"),
              FoE(t, (t, r) => {
                let [C, l, a] = t,
                  n = e.f(0.9, 1.2),
                  c = e.f(0.9, 1.2);
                CMT(C.x, C.y + a.y * c),
                  CEL(C.x, C.y, a.x * n, a.y * c, 0, 0, TAU),
                  CCP();
              }),
              CFS("black"),
              CFL(),
              CSS("white"),
              CLW(3),
              CST(),
              CCX(r);
          })(r),
          ((t, r) => {
            FoE([...t], (C, l) => {
              let [a, n, c] = C;
              (a.h = a.h ?? e.i(400, 600)),
                a.y > a.h && e.c(0.5) && (t.splice(l, 1), r(a));
            });
          })(r, C),
          !r.length
        );
      },
      o = V2(),
      i = (e, t, r) =>
        Ease(
          Clamp(
            (1 -
              o
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
    let s = V2(),
      u =
        (e, t = 0) =>
        (r, C, l) => {
          r.add(
            s
              .circ(C.rad() + t)
              .norm()
              .mul(e)
          );
        },
      p = (e, t) => (r, C, l) => (
        C.mul(1 - t).add(s.set().add(e.get(r.x, r.y)).mul(t)), 0
      ),
      d =
        (...e) =>
        (...t) => {
          for (let r = 0; r < e.length; r++) if (e[r](...t)) return 1;
        },
      S = (e) => (t, r, C) => (
        (t.l = (t.l ?? 0) + 1), (t.t = 1 - t.l / e), t.l > e
      ),
      X =
        (e, t, r, C, l, a = 0) =>
        () => {
          let n = t.length,
            c = n - 1,
            o = 0;
          if (!n) return 1;
          for (a++; c > 0; ) {
            for (r(a), o = 0; o < e && c > 0; )
              l(...t[c]) && t.splice(c, 1), o++, c--;
            C(a);
          }
        };
    class T {
      constructor(e, t) {
        var r,
          C,
          l,
          a = this,
          n = [],
          c = [],
          o = V2(),
          i = {},
          s = V2(),
          u = V2(),
          p = V2();
        (a.M = c),
          (a.eff = (...e) => n.push([...e])),
          (a.meff = (...e) => c.push(e));
        V2();
        var d = (e, t, r, C) => C.set(t.x, t.y).sub(r).mul(e).add(r),
          S = (r, C, l) => {
            let n = r + "," + C;
            return (i[n] = i[n] ?? a.get(r * (1 / e), C * (1 / t)).cpy()), i[n];
          };
        let X = V2(),
          T = V2(),
          h = V2();
        (a.cget = (r, C) => {
          let l = floor(r * e),
            a = floor(C * t),
            n = S(l, a),
            c = S(l + 1, a),
            o = S(l, a + 1),
            i = S(l + 1, a + 1);
          C = C * t - a;
          let s = d((r = r * e - l), n, c, X),
            u = d(r, o, i, T);
          return d(C, s, u, h);
        }),
          (a.get = (e, t) => {
            for (o.set(), r = 0; r < c.length; r++) {
              var a = (C = c[r])[0],
                i = C[1],
                S = C[2];
              u.set(e, t).sub(a);
              var X = S / (2 * u.len());
              p.set(i.x, i.y).perp();
              var T = u.norm().dot(p),
                h = T > 0 ? 1 : -1;
              d(1 - abs(T), i, u.norm().perp().mul(h), s),
                o.add(s.norm().mul(X));
            }
            for (r = 0; r < n.length; r++)
              (C = n[r]),
                u.set(e - C[0], t - C[1]),
                (l = C[4] / u.len()),
                u.norm(),
                p.set(u.x, u.y).perp(),
                o.add(u.mul(C[3]).add(p.mul(C[2])).mul(l));
            return o;
          });
      }
    }
    let h = (e, t) => (r) => {
      For(0, r, (r) => {
        e.length && t.push(e.shift());
      });
    };
    var m, f, P, F, A, v;
    SIGN =
      ((A = (F = (e) => {
        var t = [];
        for (P = 0; P < e.length; P++)
          t.push(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".indexOf(
              e[P]
            ) - 31
          );
        return t;
      })(
        "EEBBBCABAAABBCCDEGLNKJJKKKLLLKLKKJJHCBEEEEEFEEEFFFFKSPIrpmoqxQVXXTLKJJIIHGGFFDDCCCCCDDFFGHIIIIHHGGEFEFFGGIHIHHHGGFGFGIN"
      )),
      (v = F(
        "ldwPPSUWYYYYXWTT07UCvwtrpnnlmlmnoqsua7RUWXZZZZYXUSPTnhnDIJKJMEEBytspljjlnszGNSX1232ZWRLEuojhikpxHSZ431SIxokhjovHSZ31VLm"
      )),
      (e, t, r, C) => {
        for (P = 0; P < A.length; P++)
          (m = A[P] * r),
            (f = v[P] * r),
            C(e, t, e + m, t + f),
            (e += m),
            (t += f);
      });
    (CANV = "transparent"), (WALL = "transparent"), (SHDW = "transparent");
    cH(200, 60, 2, 0);
    FPS = 30;
    let E = (
        (e, t, r, C, l, a) => (n) =>
          n > a
            ? Mapf(n, a, 1, r, C)
            : n > l
            ? Mapf(n, l, a, t, r)
            : Mapf(n, 0, l, e, t)
      )(0, 1.5, 1, 0, 0.3, 0.7),
      x = (e) => abs(e.len() - 300),
      y = ((e, t) => {
        V2();
        let r = V2();
        return (C) => {
          let l = r.set(0, 0).add(C).sub(e),
            a = r.len() / t;
          return (
            a < 1 &&
              l
                .norm()
                .mul(t * sin((a * PI) / 2))
                .add(e),
            l
          );
        };
      })(V2(0, 0), 300),
      g = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
    g.addColorStop(0, cM(0, 1)),
      g.addColorStop(0.2, cM(0, 1)),
      g.addColorStop(0.35, cM(0, 0.1)),
      g.addColorStop(0.5, cM(0, 0)),
      g.addColorStop(1, cM(0, 0));
    let H,
      V,
      B,
      L,
      M = 1,
      R = (t) => {
        e.i(-30, 0);
        let r = 10 + 20 * sin(0.18 * t),
          C = 60 + 15 * sin(0.16 * t);
        CFS(cH(r, 100, C, 0.65)), CSB(0), ADD(), CBP();
      },
      _ = (e) => {
        CFL(), MUL(), CSB(0);
      },
      b = (e, t, r) => {
        let C = pow(Mapf(x(e), 0, 600, 1, 0), 6),
          l = 0.5 * max(0.001, 4 * C * E(e.t)),
          a = (y(e), e.x),
          n = e.y;
        return (
          CMT(a, n), CEL(a, n, r.x * l, r.y * l, 0, 0, TAU), CCP(), (r.S = r), 0
        );
      },
      D = (e, t, r, C, l) =>
        d(
          (e, t, r) => {
            (e.X = e.x), (e.Y = e.y);
          },
          (
            (e, t, r) =>
            (...C) => {
              for (r = 0; r < e; r++) if (t(...C)) return 1;
            }
          )(t, d(S(l), p(r, C), u(e, 0), b))
        );
    ctx.clearRect(0, 0, PX, PX);
    let w = 0;
    w = 1;
    let I = ((e, t, r) => {
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
      (H = new T(1, 1)), (V = []);
      let l = [];
      For(0, 40, (e, t) => {
        var r = V2()
            .circ(t * TAU + C.r())
            .mul(302),
          l = V2().circ(C.f(0, TAU)),
          a = C.f(0.4, 2);
        H.meff(r, l, 100 * a);
      }),
        For(0, 10, (e, t) => {
          var r = V2()
              .circ(t * TAU + C.r())
              .mul(302),
            l = V2().circ(C.f(0, TAU)),
            a = C.f(0.1, 0.5);
          H.meff(r, l, 100 * a);
        }),
        For(0, 1e3, (e, t) => {
          var r = V2()
              .circ(PI / 4 + C.f(0, TAU / 10) - TAU * t)
              .mul(300 + 200 * pow(C.r(), 5)),
            a = r.cpy().norm();
          let n = 1 * C.f(0.7, 1.2) * 2;
          var c = V2(n, n);
          V.push([r, a, c]), l.push([r.cpy(), a.cpy(), c.cpy()]);
          pow(Mapf(x(r), 0, 300, 1, 0), 4);
        });
      let a = [];
      (B = []), (L = []);
      let n = h(V, B),
        c = h(l, L);
      return (
        (a[0] = X(30, B, R, _, D(-1.5, 20, H, r, 450))),
        (a[1] = X(30, L, R, _, D(1.5, 20, H, r, 450))),
        CVR(),
        () => (
          CVS(),
          t(),
          n(4),
          c(4),
          FoE(a, (e) => e()),
          CVR(),
          !(B.length || L.length || V.length || l.length)
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
      U = ((t, r, C, l = []) => {
        let o = ((t = PX, r = PX) => {
          let C = [],
            l = [],
            a = n(t, r, 0),
            c = [
              [0, -1],
              [0, -1],
              [0, 1],
              [-1, 0],
              [1, 0],
            ],
            o = {
              A: C,
              G: a,
              seq: l,
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
                            n = r[1] + e[1];
                          C > 0 &&
                            C < PX &&
                            n > 0 &&
                            n < PX &&
                            (a.get(C, n) ||
                              (a.set(C, n, 1), l.push([C, n]), t.push([C, n])));
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
        o.A.push([1, 1]),
          o.A.push([1, PX - 1]),
          o.A.push([PX - 1, PX - 1]),
          o.A.push([PX - 1, 1]),
          For(0, 400, (e, t) => {
            let r = V2()
              .circ(t * TAU)
              .mul(650)
              .inc(HX);
            o.A.push([Clamp(r.x, 1, 999), Clamp(r.y, 1, 999)]);
          });
        let s = (r, C) => {
            let l = 1 / 0.85,
              n = t.get((r - HX) * l, (C - HX) * l),
              c = 3 * n.len(),
              o = 0.17 * Clamp(c, 0, 4),
              s = 1.5 * pow(1 + sin(8 * n.len()) / 2, 2) * o,
              u = 1 * pow(1 + sin(2 * n.rad()) / 2, 3),
              p = n.norm(),
              d = (p.rad(), e.c(0.03), Mapf(p.x, -1, 1, 0, 255) * o * u * s),
              S = Mapf(p.y, 1, -1, 0, 255) * o * u * s,
              X = Mapf(abs(p.x) * abs(p.y), 0, 1, 0, 255) * o * u * s,
              T = 3 * i(r, C, 2),
              h = (d + S + X) / 765,
              m = 255 / max(1, d, S, X);
            cR(d * m, S * m, X * m, h * T);
            a.set(
              round(r),
              round(C),
              Clamp(round(d * m), 0, 255),
              Clamp(round(S * m), 0, 255),
              Clamp(round(X * m), 0, 255),
              Clamp(round(h * T * 255), 0, 255)
            );
          },
          u = n(1e3, 1e3, 0),
          p = 0,
          d = c((t) => {
            let r = ctx;
            CCX();
            let C = 0.5 + 4 * pow(e.r(), 3);
            ELI(cH(e.i(0, 360), 100, 50, 1), t.x, t.y, C, C, 0, 0, TAU),
              o.A.push([t.x, t.y]),
              CCX(r);
          });
        return () => {
          let e = 0;
          (p += TAU / 360),
            d && d() && (d = null),
            _M && o.A.push([_X, _Y]),
            o.step();
          do {
            let t = o.seq.shift();
            t &&
              (u.get(t[0], t[1]) ||
                (u.set(t[0], t[1], 1), s(t[0], t[1]), l.push(t))),
              e++;
          } while (o.seq.length > 0);
          return a.apply(), e <= 1;
        };
      })(H, 0, 0, G),
      W = (e) => {
        if (e.length) {
          CSB(30), CSC("yellow"), CBP(), (ctx.lineCap = "round");
          FoE(e, (e) => {
            let t = e[0],
              r = (e[2].S, 0.85 * t.x + HX),
              C = 0.85 * t.y + HX,
              l = 0.85 * t.X + HX,
              a = 0.85 * t.Y + HX,
              n = r - l,
              c = C - a,
              o = t.t / 2;
            CMT(l + n * o, a + c * o), CLT(l, a);
          }),
            CSS("white"),
            CLW(5),
            CST(),
            CSB(0);
        }
      },
      N = (e) => {
        let t = ctx;
        CCX(), e(), CCX(t);
      },
      Y = 0;
    return (t) => {
      if (
        ((M = 0),
        CVS(),
        N(() => {
          CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX);
        }),
        Y ||
          ((Y = U()),
          N(() => {
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
        Y &&
          (N(() => {
            CTX.clearRect(4 * -PX, 4 * -PX, 8 * PX, 8 * PX), W(B), W(L);
          }),
          I(),
          _M && _X > 0 && _X < PX && _Y > 0 && _Y < PX))
      ) {
        let t = V2(_X + e.i(-20, 20), _Y + e.i(-2, 2))
          .inc(-HX)
          .mul(1 / 0.85);
        B.unshift([t.cpy(), t.cpy().norm(), V2(5, 5)]),
          L.unshift([t.cpy(), t.cpy().norm(), V2(5, 5)]);
      }
      return 0;
    };
  };
function I() {
  (cnv = document.getElementById("tc")), (ctx = CTX = cnv.getContext("2d"));
  const e = (e, t, C, l, a, n) => {
    var c,
      o,
      i,
      s = V2(e, t);
    return (
      r.push((e) => {
        o && n(a);
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
            CFT(l, e, t + 6));
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
    l = 0,
    a = [1, 2, 4, 8, 16],
    n = 0,
    c = (e) => {
      (l = e), (_R = a[e]), (art = o(_R)), (cer = i(min(_R, 4)));
    },
    o = (e) => {
      n = 0;
      var t,
        r = DCE("canvas"),
        C = r.getContext("2d"),
        l = cM(150, 1),
        a = () => {
          DEF(), TXT(l, 1 == e ? 10 : 8, TAG, 967, 993);
        };
      return (
        CWH(r, e * PX),
        CCX(C),
        AA(r, 1),
        DEF(),
        (t = uS(new RNG(SEED), C, r, e, a)),
        a(),
        () => (CCX(C), DEF(), n || ((n = t()) && a()), CCX(), r)
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
      let l = cH(0, 2, 90, 1);
      RECT(l, 0, 0, PX, PX),
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
        n = 150,
        c = (e, t, r, C) => {
          CMT(e, t), CLT(r, C);
        };
      CBP(),
        CSS(cH(40, 90, 68, 0.7)),
        ctx.arc(a, n, 45, 0, TAU),
        CCP(),
        CLW(2),
        CST(),
        CBP(),
        CSS(cH(0, 2, 94, 0.5)),
        ctx.arc(a, n, 50, 0, TAU),
        CCP(),
        CLW(10),
        CST(),
        CBP(),
        For(0, 50, (e, t, r, l) => {
          (r = V2().circ(t * TAU)),
            (l = C.f(60, 1e3)),
            c(a + 60 * r.x, n + 60 * r.y, a + r.x * l, n + r.y * l);
        }),
        CLW(3),
        CST(),
        CBP(),
        For(0, 200, (e, t, r, l, o) => {
          (r = V2().circ(t * TAU)),
            (l = C.f(60, 1e3)),
            (o = C.f(60, 1e3)),
            c(a + r.x * o, n + r.y * o, a + r.x * l, n + r.y * l);
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
        (n = 370);
      var o, i;
      for (var [o, s] of Object.entries(t))
        (n += 34),
          TXT(cM(0, 0.8), 14, o, a, n),
          (n += 24),
          (i = cM(0, 0.5)),
          Array.isArray(s)
            ? FoE(s, (e) => {
                TXT(i, 20, e, a, n), (n += 22);
              })
            : TXT(i, 20, s, a, n);
      return DEF(), CCX(), (e) => r;
    },
    s = (e) => {
      var r = DCE("a");
      (r.download = t.Name), (r.href = art().toDataURL()), r.click(), r.delete;
    },
    d = () => {
      setTimeout((e) => {
        window.requestAnimationFrame(d);
        var t = 0,
          r = PX;
        CCX(),
          S(0.97, WALL),
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
            e(_P, l == t), t++;
          });
      }, 1e3 / FPS);
    },
    S = (e, t) => {
      var r = window,
        parentRect = cnv.getBoundingClientRect(),
        C = parentRect.width, //r.innerWidth,
        l = parentRect.width, //r.innerHeight,
        a = C != _W || l != _H,
        n = min(C, l) * e,
        c = n / PX,
        o = min(2, max(devicePixelRatio ?? 1, 1));
      a && ((cnv.width = _W = C * o), (cnv.height = _H = l * o)),
        CTR(1, 0, 0, 1, 0, 0),
        BG(t),
        CXT((C - n) / 2, (l - n) / 2),
        CXS(c, c);
    };
  AA(ctx, 1),
    (() => {
      c(0);
      var t,
        l,
        n = a.length,
        o = "touch",
        i = "mouse",
        S = (e) => {
          e.preventDefault();
          var t = e.changedTouches[0];
          return (e.clientX = t.pageX), (e.clientY = t.pageY), e;
        },
        X = (e) => {
          var t = cnv.getBoundingClientRect(),
            r = CGT().invertSelf();
          (l = e.clientX - t.left),
            (y = e.clientY - t.top),
            (_X = l * r.a + y * r.c + r.e),
            (_Y = l * r.b + y * r.d + r.f);
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
                  p(S(e));
                },
              ],
              [
                o + "move",
                (e) => {
                  X(S(e));
                },
              ],
              [
                o + "end",
                (e) => {
                  u(S(e));
                },
              ],
              [i + "down", p],
              [i + "move", X],
              [i + "up", u],
            ],
            (e) => cnv.addEventListener(...e)
          ),
          t = 0;
        t < n;
        t++
      )
        (l = HX - (80 * n) / 2 + 80 * (t + 0.5)),
          C.push(e(130, l, 22, a[t] + "k", t, c));
      C.push(e(130, 800, 25, CHAR(8595), 0, (e) => s())), d();
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
