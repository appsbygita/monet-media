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
    a = (e, t) => ((r.x = e || 0), (r.y = t || 0), r);
  a(e, t),
    Object.assign(r, {
      set: a,
      circ: (e) => a(sin(e), -cos(e)),
      perp: (e) => a(r.y, -r.x),
      len: (e) => sqrt(r.x * r.x + r.y * r.y),
      dot: (e) => r.x * e.x + r.y * e.y,
      norm: (e) => r.div(r.len()),
      rad: (e) => atan2(r.x, -r.y),
      add: (e) => a(r.x + e.x, r.y + e.y),
      sub: (e) => a(r.x - e.x, r.y - e.y),
      mv: (e) => a(r.x * e.x, r.y * e.y),
      inc: (e) => a(r.x + e, r.y + e),
      mul: (e) => a(r.x * e, r.y * e),
      div: (e) => a(r.x / e, r.y / e),
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
      a = (123456789 + e) & r,
      l = (987654321 - e) & r,
      C = 65535;
    (t.r = (e) =>
      ((((l = (36969 * (l & C) + (l >>> 16)) & r) << 16) +
        ((a = (18e3 * (a & C) + (a >>> 16)) & r) & C)) >>>
        0) /
      (r + 1)),
      (t.f = (e, r) => e + t.r() * (r - e)),
      (t.i = (e, r) => floor(t.f(e, r))),
      (t.c = (e) => t.r() < e),
      (t.item = (e) => e[t.i(0, e.length)]);
  }
}
(CANV = cM(220, 1)), (WALL = cHx("f57411")), (SHDW = cHx("0f0a06")), (FPS = 60);
const SEED = 51149,
  TAG = "PG-00-000",
  PX = 1e3,
  HX = PX / 2,
  uS = (e, t, r, a, l) => {
    let C = V2(),
      n =
        (...e) =>
        (...t) => {
          for (let r = 0; r < e.length; r++) if (e[r](...t)) return 1;
        },
      o =
        (e, t, r, a, l, C = 0) =>
        () => {
          let n = t.length,
            o = n - 1,
            c = 0;
          if (!n) return 1;
          for (C++; o > 0; ) {
            for (r(C), c = 0; c < e && o > 0; )
              l(...t[o]) && t.splice(o, 1), c++, o--;
            a(C);
          }
        };
    class c {
      constructor(e, t) {
        var r,
          a,
          l,
          C = this,
          n = [],
          o = [],
          c = V2(),
          i = {},
          s = V2(),
          d = V2(),
          u = V2();
        (C.M = o),
          (C.eff = (...e) => n.push([...e])),
          (C.meff = (...e) => o.push(e));
        V2();
        var p = (e, t, r, a) => a.set(t.x, t.y).sub(r).mul(e).add(r),
          X = (r, a, l) => {
            let n = r + "," + a;
            return (i[n] = i[n] ?? C.get(r * (1 / e), a * (1 / t)).cpy()), i[n];
          };
        let S = V2(),
          T = V2(),
          h = V2();
        (C.cget = (r, a) => {
          let l = floor(r * e),
            C = floor(a * t),
            n = X(l, C),
            o = X(l + 1, C),
            c = X(l, C + 1),
            i = X(l + 1, C + 1);
          a = a * t - C;
          let s = p((r = r * e - l), n, o, S),
            d = p(r, c, i, T);
          return p(a, s, d, h);
        }),
          (C.get = (e, t) => {
            for (c.set(), r = 0; r < o.length; r++) {
              var C = (a = o[r])[0],
                i = a[1],
                X = a[2];
              d.set(e, t).sub(C);
              var S = X / (2 * d.len());
              u.set(i.x, i.y).perp();
              var T = d.norm().dot(u),
                h = T > 0 ? 1 : -1;
              p(1 - abs(T), i, d.norm().perp().mul(h), s),
                c.add(s.norm().mul(S));
            }
            for (r = 0; r < n.length; r++)
              (a = n[r]),
                d.set(e - a[0], t - a[1]),
                (l = a[4] / d.len()),
                d.norm(),
                u.set(d.x, d.y).perp(),
                c.add(d.mul(a[3]).add(u.mul(a[2])).mul(l));
            return c;
          });
      }
    }
    let i = (e, t) => (r) => {
      For(0, r, (r) => {
        e.length && t.push(e.shift());
      });
    };
    new (class {
      constructor(e, t, r) {
        let a = this;
        (a.C = e),
          (a.w = t),
          (a.h = r),
          (a.D = e.getImageData(0, 0, t, r)),
          (a.A = new Uint8ClampedArray(t * r * 4).fill(0));
      }
      set(e, t, r, a, l, C) {
        const n = 4 * (t * this.w + e);
        let o = this;
        (o.A[n] = r), (o.A[n + 1] = a), (o.A[n + 2] = l), (o.A[n + 3] = C);
      }
      apply() {
        this.D.data.set(this.A), this.C.putImageData(this.D, 0, 0);
      }
    })(ctx, PX, PX);
    let s = V2();
    (CANV = WALL = SHDW = "transparent"), (_I = (e) => 0);
    FPS = 30;
    let d = ((e, t) => {
        V2();
        let r = V2();
        return (a) => {
          let l = r.set(0, 0).add(a).sub(e),
            C = r.len() / t;
          return (
            C < 1 &&
              l
                .norm()
                .mul(t * sin((C * PI) / 2))
                .add(e),
            l
          );
        };
      })(V2(0, 0), 300),
      u = ((t = PX, r = PX) => {
        let a = [],
          l = [],
          C = ((e, t, r) => {
            let a = new Array(e * t).fill(r),
              l = (e, t) => Clamp(e, 0, t),
              C = (r, a) => round(l(a, t)) + round(l(r, e)) * e;
            return {
              d: a,
              idx: C,
              get: (e, t) => a[C(e, t)] ?? 0,
              set: (e, t, r) => (a[C(e, t)] = r),
            };
          })(t, r, 0),
          n = [
            [0, -1],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
          ],
          o = {
            A: a,
            G: C,
            seq: l,
            step: (t) => {
              let r = [];
              return (
                FoE(o.A, (t) => {
                  e.c(0.5)
                    ? ((n[0] = e.c(0.03) ? [e.i(-5, 5), e.i(-5, 5)] : [0, -1]),
                      FoE(n, (e) => {
                        let a = t[0] + e[0],
                          n = t[1] + e[1];
                        a > 0 &&
                          a < PX &&
                          n > 0 &&
                          n < PX &&
                          (C.get(a, n) ||
                            (C.set(a, n, 1), l.push([a, n]), r.push([a, n])));
                      }))
                    : r.push(t);
                }),
                (o.A = a = r),
                o.A
              );
            },
          };
        return o;
      })(HX, HX),
      p = 0,
      X = ((t) => {
        let r = [];
        For(0, 3, (t) => {
          let a = V2(e.r(), 0)
            .circ(e.r() * TAU)
            .mul(50 * e.r())
            .add(V2(HX, e.f(-150, -450)));
          r.push([a, V2(e.f(-6, 6), e.f(0, -10)), V2(3, 4).mul(e.f(0.7, 1.5))]);
        });
        let a = (r) => {
            let a = V2(),
              l = V2(),
              C = V2(),
              n = e.f(50, 90);
            For(0, 7, (o, c) => {
              a.circ(e.r() * TAU),
                For(0, 20, (o, c) => {
                  if (
                    (C.circ(e.r() * TAU).mul(5 * c),
                    l
                      .set()
                      .add(a)
                      .mul(c * n)
                      .add(r)
                      .add(C),
                    t)
                  )
                    t(l);
                  else {
                    let t = 0.5 + 4 * pow(e.r(), 3);
                    ELI(cH(e.i(0, 360), 100, 50, 1), l.x, l.y, t, t, 0, 0, TAU);
                  }
                });
            });
          },
          l = 0;
        return () => (
          l ||
            (((e) => {
              let t = V2(0, 1);
              FoE(e, (e, r) => {
                let [a, l, C] = e;
                l.add(t).mul(0.97), a.add(l);
              });
            })(r),
            ((t) => {
              let r = ctx;
              CCX(),
                CBP(),
                CSB(30),
                CSC("white"),
                FoE(t, (t, r) => {
                  let [a, l, C] = t,
                    n = e.f(0.9, 1.2),
                    o = e.f(0.9, 1.2);
                  CMT(a.x, a.y + C.y * o),
                    CEL(a.x, a.y, C.x * n, C.y * o, 0, 0, TAU),
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
              FoE([...t], (a, l) => {
                let [C, n, o] = a;
                (C.h = C.h ?? e.i(400, 600)),
                  C.y > C.h && e.c(0.5) && (t.splice(l, 1), r(C));
              });
            })(r, a),
            (l = !r.length)),
          l
        );
      })((e) => {
        u.A.push([round(e.x / 2), round(e.y / 2)]),
          0 == p &&
            (u.A.push([0, 0]),
            u.A.push([HX, 0]),
            u.A.push([HX, HX]),
            u.A.push([0, HX])),
          p++;
      }),
      S = (t) => {
        e.i(-30, 0);
        let r = 10 + 20 * sin(0.18 * t),
          a = 60 + 15 * sin(0.16 * t);
        CFS(cH(r, 100, a, 0.65)), CSB(0), ADD(), CBP();
      },
      T = (e) => {
        CFL(), MUL(), CSB(0);
      },
      h = (e, t, r) => {
        if (!e.skip) {
          let t = pow(Mapf(R(e), 0, 600, 1, 0), 6),
            a = 0.5 * max(0.001, 4 * t * v(e.t)),
            l = (d(e), e.x),
            C = e.y;
          CMT(l, C), CEL(l, C, r.x * a, r.y * a, 0, 0, TAU), CCP(), (r.S = r);
        }
      },
      f = (e, t, r, a, l, o) => {
        return n(
          (e, t, r) => {
            (e.X = e.x), (e.Y = e.y);
          },
          ((c = t),
          (i = n(
            ((e, t) => (r, a, l) => {
              if (((r.l = (r.l ?? 0) + 1), (r.t = 1 - r.l / e), r.l > e))
                return t && t(r, a, l), 1;
            })(l, (e, t, r) => {
              (e.skip = 1),
                (e.l = 0),
                (e.x = e.ip.x),
                (e.y = e.ip.y),
                o.push([e, t, r]);
            }),
            ((e, t) => (r, a, l) => (
              a.mul(1 - t).add(C.set().add(e.get(r.x, r.y)).mul(t)), 0
            ))(r, a),
            (
              (e, t = 0) =>
              (r, a, l) => {
                r.add(
                  C.circ(a.rad() + t)
                    .norm()
                    .mul(e)
                );
              }
            )(e, 0),
            h
          )),
          (...e) => {
            for (s = 0; s < c; s++) if (i(...e)) return 1;
          })
        );
        var c, i, s;
      },
      v =
        ((m = 0),
        (A = 1.5),
        (P = 1),
        (x = 0),
        (E = 0.3),
        (F = 0.7),
        (e) =>
          e > F
            ? Mapf(e, F, 1, P, x)
            : e > E
            ? Mapf(e, E, F, A, P)
            : Mapf(e, 0, E, m, A));
    var m, A, P, x, E, F;
    let y,
      g,
      H,
      V,
      R = (e) => abs(e.len() - 300),
      b = 0;
    b = 1;
    let D = ((e, t, r) => {
        let a = new RNG(e);
        CVS(),
          t(),
          ADD(),
          For(0, 10, (e) => {
            CSB(a.f(5, 35));
          }),
          MUL(),
          For(0, 400, () => {
            V2()
              .circ(a.f(0, 2 * TAU))
              .mul(a.f(400, 1e3)),
              pow(a.r(), 6);
          }),
          CSB(0);
        (y = new c(1, 1)), (g = []);
        let l = [];
        For(0, 40, (e, t) => {
          var r = V2()
              .circ(t * TAU + a.r())
              .mul(302),
            l = V2().circ(a.f(0, TAU)),
            C = a.f(0.4, 2);
          y.meff(r, l, 100 * C);
        }),
          For(0, 10, (e, t) => {
            var r = V2()
                .circ(t * TAU + a.r())
                .mul(302),
              l = V2().circ(a.f(0, TAU)),
              C = a.f(0.1, 0.5);
            y.meff(r, l, 100 * C);
          }),
          For(0, 1e3, (e, t) => {
            var r = V2()
                .circ(PI / 4 + a.f(0, TAU / 10) - TAU * t)
                .mul(300 + 200 * pow(a.r(), 5)),
              C = r.cpy().norm();
            let n = 1 * a.f(0.7, 1.2);
            var o = V2(n, n);
            (r.ip = r.cpy()), g.push([r, C, o]);
            let c = r.cpy();
            (c.ip = r.cpy()), l.push([c, C.cpy(), o.cpy()]);
            pow(Mapf(R(r), 0, 300, 1, 0), 4);
          });
        let C = [];
        (H = []), (V = []);
        let n = i(g, H),
          s = i(l, V);
        return (
          (C[0] = o(30, H, S, T, f(-3, 8, y, r, 450, g))),
          (C[1] = o(30, V, S, T, f(3, 8, y, r, 450, l))),
          CVR(),
          () => (
            CVS(),
            t(),
            n(2),
            s(2),
            FoE(C, (e) => e()),
            CVR(),
            !(H.length || V.length || g.length || l.length)
          )
        );
      })(
        SEED,
        ((e, t, r) => () => {
          CXT(e, t), CXS(r, r);
        })(HX, HX, 0.85),
        0.6
      ),
      B =
        ((w = y),
        (t, r) => {
          let a = 1 / 0.85,
            l = w.get((t - HX) * a, (r - HX) * a),
            C = 3 * l.len(),
            n = 0.17 * Clamp(C, 0, 4),
            o = 1.5 * pow(1 + sin(8 * l.len()) / 2, 2) * n,
            c = 1 * pow(1 + sin(2 * l.rad()) / 2, 3),
            i = l.norm(),
            d = (i.rad(), e.c(0.03), Mapf(i.x, -1, 1, 0, 255) * n * c * o),
            u = Mapf(i.y, 1, -1, 0, 255) * n * c * o,
            p = Mapf(abs(i.x) * abs(i.y), 0, 1, 0, 255) * n * c * o,
            X =
              3 *
              ((e, t, r) =>
                Ease(
                  Clamp(
                    (1 -
                      s
                        .set(e, t)
                        .inc(-HX)
                        .mul(1 / HX)
                        .len()) *
                      r,
                    0,
                    1
                  )
                ))(t, r, 2),
            S = (d + u + p) / 765,
            T = 255 / max(1, d, u, p);
          return cR(d * T, u * T, p * T, S * X);
        });
    var w;
    let L = ctx.createRadialGradient(HX, HX, 0, HX, HX, 500);
    L.addColorStop(0, cH(20, 100, 80, 1)),
      L.addColorStop(0.5, cH(20, 100, 80, 1)),
      L.addColorStop(0.55, cH(220, 100, 100, 1)),
      L.addColorStop(0.7, cH(220, 100, 60, 0.9)),
      L.addColorStop(0.8, cH(20, 100, 60, 0.7)),
      L.addColorStop(1, cH(20, 100, 60, 0));
    let _ = (e) => {
        if (e.length) {
          CSB(30), CSC("yellow"), CBP(), (ctx.lineCap = "round");
          FoE(e, (e) => {
            let t = e[0],
              r = (e[2].S, 0.85 * t.x + HX),
              a = 0.85 * t.y + HX,
              l = 0.85 * t.X + HX,
              C = 0.85 * t.Y + HX,
              n = r - l,
              o = a - C,
              c = t.t / 2;
            CMT(l + n * c, C + o * c), CLT(l, C);
          }),
            CSS("white"),
            CLW(5),
            CST(),
            CSB(0);
        }
      },
      M = (e) => {
        let t = ctx;
        CCX(), e(), CCX(t);
      },
      I = 0;
    return (e) => {
      if (
        (0 == I && ctx.clearRect(0, 0, PX, PX),
        M(() => {
          ctx.clearRect(2 * -PX, 2 * -PX, 5 * PX, 5 * PX);
        }),
        I++,
        X(),
        For(0, 3, (e) => u.step()),
        u.seq.length)
      ) {
        let e = ctx;
        FoE(u.seq, (e) => {
          let [t, r] = e,
            a = B(round(2 * t), round(2 * r));
          ELI(a, 2 * t, 2 * r, 2, 2, 0, 0, TAU);
        }),
          CCX(),
          CBP(),
          FoE(u.seq, (e) => {
            let [t, r] = e;
            CRE(2 * t, 2 * r, 2, 2);
          }),
          CFS(L),
          CSB(20),
          ADD(),
          CSC("white"),
          CFL(),
          CSB(0),
          (u.seq.length = 0),
          CCX(e);
      } else
        I > 100 &&
          (D(),
          M(() => {
            _(H), _(V);
          }));
      return 0;
    };
  };
function I() {
  (cnv = document.getElementById("tc")), (ctx = CTX = cnv.getContext("2d"));
  const e = (e, t, a, l, C, n) => {
    var o,
      c,
      i,
      s = V2(e, t);
    return (
      r.push((e) => {
        c && n(C);
      }),
      (r, C) => {
        (o = V2(_X, _Y).mul(-1).add(s)),
          (c = o.len() < 1.7 * a),
          (i = c ? 2 : 5),
          r &&
            (ELI(c || C ? "white" : "grey", e, t, a + i, a + i, 0, 0, TAU),
            CTA("center"),
            CFS("black"),
            FNT(a - 3),
            CFT(l, e, t + 6));
      }
    );
  };
  let t = {
    Piece: "1",
    Name: "Sol Journey 2 - Monet Media 02 001",
    Description: "/[collection.description]/".split("|"),
    Properties: "logo",
    Medium: "Fully On-Chain BlockGen.Art Canvas",
    Artist: "Charles Machin - @CM_GenArt",
    Seed: SEED,
  };
  var r = [],
    a = [],
    l = 0,
    C = [1, 2, 4, 8, 16],
    n = 0,
    o = (e) => {
      (l = e), (_R = C[e]), (art = c(_R)), (cer = i(min(_R, 4)));
    },
    c = (e) => {
      n = 0;
      var t,
        r = DCE("canvas"),
        a = r.getContext("2d"),
        l = cM(150, 1),
        C = () => {
          DEF(), TXT(l, 1 == e ? 10 : 8, TAG, 967, 993);
        };
      return (
        CWH(r, e * PX),
        CCX(a),
        AA(r, 1),
        DEF(),
        (t = uS(new RNG(SEED), a, r, e, C)),
        C(),
        () => (CCX(a), DEF(), n || ((n = t()) && C()), CCX(), r)
      );
    },
    i = (e) => {
      let r,
        a,
        l = DCE("canvas");
      new RNG(SEED);
      CWH(l, PX * e),
        CCX(l.getContext("2d")),
        DEF(null, e),
        RECT(cH(0, 2, 80, 0.6), 2, 2, PX - 4, PX - 4),
        CBP(),
        CRT(4, 4, PX - 8, PX - 8),
        CTC(),
        RECT(cH(0, 2, 80, 1), 0, 0, PX, PX),
        CSC("black"),
        CSBr(30 * e),
        CBP(),
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
        TXT(cM(0, 0.1), 24, "BLOCKGEN.ART", HX, 40),
        TXT(cM(0, 0.6), 13, TAG, HX, 970),
        (r = HX),
        (a = 290);
      var C, n;
      for (var [C, o] of Object.entries(t))
        (a += 34),
          TXT(cM(0, 0.8), 14, C, r, a),
          (a += 24),
          (n = cM(0, 0.5)),
          Array.isArray(o)
            ? FoE(o, (e) => {
                TXT(n, 20, e, r, a), (a += 22);
              })
            : TXT(n, 20, o, r, a);
      return DEF(), CCX(), (e) => l;
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
          FoE(a, (e) => {
            e(_P, l == t), t++;
          });
      }, 1e3 / FPS);
    },
    X = (e, t) => {
      var r = window,
        parentRect = cnv.getBoundingClientRect(),
        a = parentRect.width, //r.innerWidth,
        l = parentRect.width, //r.innerHeight,
        C = a != _W || l != _H,
        n = min(a, l) * e,
        o = n / PX,
        c = min(2, max(devicePixelRatio ?? 1, 1));
      if (window.screen.width < 800) {
        c = c > 1 ? 2 : c;
      }
      C && ((cnv.width = _W = a * c), (cnv.height = _H = l * c)),
        CTR(1, 0, 0, 1, 0, 0),
        BG(t),
        CXT((a - n) / 2, (l - n) / 2),
        CXS(o, o);
    };
  AA(ctx, 1),
    (() => {
      o(0);
      var t,
        l,
        n = C.length,
        c = "touch",
        i = "mouse",
        X = (e) => {
          e.preventDefault();
          var t = e.changedTouches[0];
          return (e.clientX = t.pageX), (e.clientY = t.pageY), e;
        },
        S = (e) => {
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
            S(e),
            ((e) => {
              e.preventDefault(), e.stopPropagation();
            })(e),
            (_P = _I(_X, _Y));
        },
          u = (e) => {
            _P && FoE(r, (e) => e()), (_M = _P = 0), S(e);
          },
          FoE(
            [
              [
                c + "start",
                (e) => {
                  p(X(e));
                },
              ],
              [
                c + "move",
                (e) => {
                  S(X(e));
                },
              ],
              [
                c + "end",
                (e) => {
                  u(X(e));
                },
              ],
              [i + "down", p],
              [i + "move", S],
              [i + "up", u],
            ],
            (e) => cnv.addEventListener(...e)
          ),
          t = 0;
        t < n;
        t++
      )
        (l = HX - (80 * n) / 2 + 80 * (t + 0.5)),
          a.push(e(130, l, 22, C[t] + "k", t, o));
      a.push(e(130, 800, 25, CHAR(8595), 0, (e) => s())), d();
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
