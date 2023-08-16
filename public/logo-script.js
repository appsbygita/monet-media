//PROCESSminify
// -----------------------------------------------------------------
// -- BlockGeneration.art  On-Chain Playground Square Canvas v1.0 --
// --                       Created by Charles Machin             --
// --                        2022  All rights reserved            --
// -----------------------------------------------------------------

const Q = (s) => eval(`(v,a,b,c,d)=>${s}`), // Magical general function generator
  CHAR = (a) => String.fromCharCode(a), // char int -> char
  For = Q("{for(v=v;v<a;v++)b(v,v/(a-1))}"), // loop machine
  //FoE  = Q('v.forEach(a)'),                 // foreach machine
  //FoE  = Q('For(0,v.length,i=>a(v[i],i))'),  // enhanced foreach that also gives an index
  FoE = Q("For(0,v.length,(i,t)=>a(v[i],i,t))"), // enhanced. Now index and 0-1 progress value
  cR = Q("`rgba(${v},${a},${b},${c})`"), // rgba string generator cR(255,0,0,1) = red
  cH = Q("`hsla(${v},${a}%,${b}%,${c})`"), // hsla string generator cH()
  cM = () => "transparent", //Q("cR(v,v,v,a)"), // monotone rgba generator cM(255,1) = white (0,1) = black
  cHx = (b) => {
    // hex colour to rgb string
    b = parseInt(b, 16);
    return (
      "rgb(" +
      ((b >> 16) & 255) +
      "," +
      ((b >> 8) & 255) +
      "," +
      (b & 255) +
      ")"
    );
  };
// Generate the abbreviation functions from an encoded string
let //P = Q('b=b.split(':');for(c=0;c<b.length;c+=2)eval(`C${b[c]}=${v}=>ctx.${b[c+1]}${a}`)'),
  //P = (s,e,D,i)=>{D=D.split(':');for(i=0;i<D.length;i+=2)eval(`C${D[i]}=${s}=>ctx.${D[i+1]}${e}`)},
  P = (v, a, b, c) => {
    b = b.split(":");
    for (c = 0; c < b.length; c += 2)
      eval(`C${b[c]}=${v}=>ctx.${b[c + 1]}${a}`);
  },
  t = "(...a)";

//Decode the abbreviations
P(
  t,
  t,
  "TC:clip:RT:rect:GT:getTransform:DI:drawImage:FT:fillText:EL:ellipse:BP:beginPath:CP:closePath:MT:moveTo:LT:lineTo:BC:bezierCurveTo:ST:stroke:VS:save:VR:restore:TR:setTransform:XT:translate:XS:scale:XR:rotate:FR:fillRect:RE:rect:FL:fill"
);
P(
  "a",
  "=a",
  "SBr:shadowBlur:LW:lineWidth:TA:textAlign:TB:textBaseline:SC:shadowColor:SS:strokeStyle:GC:globalCompositeOperation:FS:fillStyle"
);

//Extra abbreviation functions
const DEF = (a, r) => {
    // sets things back to default
    // also resets the transform
    a = a ?? CANV;
    r = r ?? _R;
    CTR(r, 0, 0, r, 0, 0);
    CFS(a);
    CSS(a);
    CTA("center");
    CSB(0);
    MUL();
  },
  CSB = (e) => CSBr(e * _R), //ctx.shadowBlur = e * _R,
  DCE = (e) => document.createElement(e),
  CCX = (c) => (ctx = c || CTX), // <<- set active canvas context
  FNT = (f) => (ctx.font = `${f}px Arial`),
  TXT = (s, f, ...a) => {
    CFS(s), FNT(f), CFT(...a);
  },
  ELI = (s, ...a) => {
    CFS(s), CBP(), CEL(...a), CFL();
  }, //
  ADD = (a) => CGC("screen"),
  MUL = (a) => CGC("source-over"),
  //CWH   = (v,n)      => v.width = v.height = n, // possible improvement: Q('v.width=a;v.height=b||a'),
  CWH = (v, a, b) => {
    v.width = a;
    v.height = b || a;
  },
  //CWH   = Q('v.width=a;v.height=b||a'), // possible improvement
  BG = (f) => RECT(f, 0, 0, _W, _H),
  RECT = (f, ...a) => {
    CBP(), CFS(f), CFR(...a), CFL();
  },
  AA = (c, v) =>
    (c.imageSmoothingEnabled =
      c.mozImageSmoothingEnabled =
      c.webkitImageSmoothingEnabled =
        v); // < What a waste :|

function v2(x, y) {
  var t = this,
    s = (x, y) => {
      (t.x = x || 0), (t.y = y || 0);
      return t;
    }; // the set function

  s(x, y);

  Object.assign(t, {
    set: s,
    //cross : v => t.x * v.y - t.y * v.x ,  // removed because its not that useful
    circ: (r) => s(sin(r), -cos(r)),
    perp: (a) => s(t.y, -t.x),
    len: (a) => sqrt(t.x * t.x + t.y * t.y),
    dot: (a) => t.x * a.x + t.y * a.y,
    norm: (a) => t.div(t.len()),
    rad: (a) => atan2(t.x, -t.y),
    add: (v) => s(t.x + v.x, t.y + v.y),
    sub: (v) => s(t.x - v.x, t.y - v.y),
    mv: (v) => s(t.x * v.x, t.y * v.y),
    inc: (a) => s(t.x + a, t.y + a),
    mul: (v) => s(t.x * v, t.y * v),
    div: (v) => s(t.x / v, t.y / v),
    cpy: (v) => V2(t.x, t.y),
  });
}
V2 = Q("new v2(v,a)");
// Math and Handy functions
FoE(Object.getOwnPropertyNames(Math), (i) => eval(`${i}=Math.${i}`));
const Lerp = Q("(1-v)*a+v*b"), // lerp between a,b
  Wrap = Q("v<a?b-(a-v)%(b-a):a+(v-a)%(b-a)"), // wrap values
  Mapf = Q("b-a==0?c:c+(((v-a)/(b-a))*(d-c))"), // map v fom a,b to c,d
  Clamp = Q("v<a?a:min(b,v)"), // limit v between a,b
  Ease = (v) => -(cos(PI * v) - 1) / 2, // Sin ease curve
  TAU = PI * 2; // TAU full circle

//#chars: 268
class RNG {
  constructor(s) {
    var t = this,
      a = 4294967295,
      b = (123456789 + s) & a,
      r = (987654321 - s) & a,
      c = 65535;

    t.r = (x) => {
      (r = (36969 * (r & c) + (r >>> 16)) & a),
        (b = (18e3 * (b & c) + (b >>> 16)) & a);
      return (((r << 16) + (b & c)) >>> 0) / (a + 1);
    };
    t.f = (l, h) => l + t.r() * (h - l);
    t.i = (l, h) => floor(t.f(l, h));
    t.c = (c) => t.r() < c;
    t.item = (l) => l[t.i(0, l.length)];
  }
}

//globals that user can change
CANV = cM(220, 1); // Canvas base colour
WALL = cHx("f57411"); // Wall colour
SHDW = cHx("0f0a06"); // Border shadow colour
FPS = 60; // try and keep this framerate

//Constants
const SEED = 77345,
  TAG = "PG-00-000", // the tag drawn below the sig
  PX = 1e3, // canvas width and height
  HX = PX / 2, // half the width / height
  uS = (RN, CX, CV, PS, SG) => {
    //--------------------------
    //insert<functions>
    let drawFrame = () => {
      OutlineRect(cM(0, 1), 0, 0, PX, PX, 75);
      OutlineRect(cM(90, 1), ...Outline(0, 0, PX, PX, 72), 1);
      Signature();
      SG();
    };
    let Signature = () => {
      CSS("lightgrey");
      CLW(1.5);
      SIG(965, 950, 0.12);
      CSB(15);
      CSC("black");
    };
    let Outline = (x, y, w, h, o) => [x + o, y + o, w - o * 2, h - o * 2];
    let OutlineRect = (col, x, y, w, h, o) => {
      // draw outilne
      CBP();
      CSS(col);
      CRE(...Outline(x, y, w, h, o / 2));
      CLW(o);
      CST();
    };

    let drawRay = (col, width, pos, dir, len) => {
      CBP();
      CSS(col);
      CLW(width);
      CMT(pos.x, pos.y);
      CLT(pos.x + dir.x * len, pos.y + dir.y * len);
      CST();
      width *= 2;
      ELI(col, pos.x, pos.y, width, width, 0, 0, TAU);
      ELI("white", pos.x, pos.y, width / 2, width / 2, 0, 0, TAU);
    };
    /*
let SinTest = ()=>{
let polar = PolarCoords(V2(HX,HX), 250)
For(0,50,(X,A)=>{
  For(0,50,(Y,B)=>{
    let x = PX*A
    let y = PX*B
    let r = polar(V2(x,y))
    RECT('white', r.x, r.y, 1,1)
  })
})
} */

    let FieldMap = (flowField, speed, alpha) => {
      let y_pixel = 0;
      return () => {
        For(0, speed, (n) => {
          For(0, PX, (x, v) => {
            //x=-HX
            let scale = 1 / 0.85;
            let dir = flow.get((x - HX) * scale, (y_pixel - HX) * scale);
            let rawVal = dir.len() * 3;
            let val = Clamp(rawVal, 0, 4) * 0.15;
            let ring2 = pow(1 + sin(dir.len() * 8) / 2, 2) * 2 * val;
            let ring = pow(1 + sin(dir.rad() * 2) / 2, 3) * 1;
            let mag = 200; //val*245
            let d = dir.norm();
            let turns = (d.rad() + 1) / TAU;
            let spike = RN.c(0.03) ? 1 : 0;
            //let col = cH(turns*360,90,60,0.35)
            //let col = cR(Mapf(d.x,1,-1,0,255)*val,200*val,Mapf(d.y,-1,1,255,0)*val,0.55)
            //let col = cR(Mapf(d.x,1,-1,0,255)*val,200*val,Mapf(d.y,-1,1,255,0)*val,0.55)

            let R = Mapf(d.x, -1, 1, 0, 255) * val * ring * ring2;
            let G = Mapf(d.y, 1, -1, 0, 255) * val * ring * ring2;
            let B =
              Mapf(abs(d.x) * abs(d.y), 0, 1, 0, 255) * val * ring * ring2;
            let col = cR(R, G, B, alpha);
            //RECT(col,x,y_pixel,RN.f(1,spike?1:6),1+pow(RN.r(),7)*(spike?250:20))
            ELI(col, x, y_pixel, RN.f(0.5, 2), RN.f(0.5, 2), 0, 0, TAU);
            spike && RECT(col, x, y_pixel, 1, 2 * min(rawVal * 1, 60));
          });
          y_pixel += 0.75;
        });
        return y_pixel;
      };
    };
    let FieldMap_new = (flowField, speed, alpha) => {
      let y_pixel = 0;
      return () => {
        For(0, speed, (n) => {
          For(0, PX, (x, v) => {
            //x=-HX
            let scale = 1 / 0.85;
            let dir = flow.get((x - HX) * scale, (y_pixel - HX) * scale);
            let rawVal = dir.len() * 55;
            let val = Clamp(rawVal, 0, 2) * 0.5;
            let ring2 = pow(1 + sin(dir.len() * 150) / 2, 2) * 1 * val;
            let ring = pow(1 + sin(dir.rad() * 3) / 2, 1) * 1;
            let mag = 200; //val*245
            let d = dir.norm();
            let turns = (d.rad() + 1) / TAU;
            let spike = RN.c(0.03) ? 1 : 0;
            //let col = cH(turns*360,90,60,0.35)
            //let col = cR(Mapf(d.x,1,-1,0,255)*val,200*val,Mapf(d.y,-1,1,255,0)*val,0.55)
            //let col = cR(Mapf(d.x,1,-1,0,255)*val,200*val,Mapf(d.y,-1,1,255,0)*val,0.55)

            let R = Mapf(d.x, -1, 1, 0, 255) * val * ring * ring2;
            let G = Mapf(d.y, 1, -1, 0, 255) * val * ring * ring2;
            let B =
              Mapf(abs(d.x) * abs(d.y), 0, 1, 0, 255) * val * ring * ring2;
            let col = cR(R, G, B, alpha);
            //RECT(col,x,y_pixel,RN.f(1,spike?1:6),1+pow(RN.r(),7)*(spike?250:20))
            ELI(col, x, y_pixel, RN.f(0.5, 2), RN.f(0.5, 2), 0, 0, TAU);
            spike && RECT(col, x, y_pixel, 1, 2 * min(rawVal * 1, 60));
          });
          y_pixel += 0.75;
        });
      };
    };

    let PolarCoords = (center, radius) => {
      let result = V2();
      let tmp = V2();
      return (point) => {
        let d = tmp.set(0, 0).add(point).sub(center);
        let l = tmp.len() / radius;
        if (l < 1) {
          d.norm()
            .mul(radius * sin((l * PI) / 2))
            .add(center);
        }
        return d;
      };
    };
    var WaveMachine = (p, i) => {
      // p = [<value>, [<mag>,<freq>], [<wave #2>]]
      return (t) => {
        var n,
          r = p[0]; // starting value for result

        for (n = 1; n < p.length; n++) r += sin(t * p[n][1]) * p[n][0];

        return i ? floor(r) : r;
      };
    };

    // Colour machine (built from 4 wave machines)
    var ColourWave = (p) => {
      var M = WaveMachine,
        h = M(p.h, 1),
        s = M(p.s, 1),
        v = M(p.v, 1),
        a = M(p.a, 0);

      return (t, A) => cH(Wrap(h(t), 0, 360), s(t), v(t), a(t) * A);
    };

    let ISO = (size) => {
      let t0 = V2(),
        t1 = V2();
      let axis = [];
      For(0, 3, (i, t) =>
        axis.push(
          V2()
            .circ(t * TAU)
            .mul(size)
        )
      );
      return (...a) => {
        t0.set(0, 0);
        t1.set(0, 0);
        FoE(a, (c, i) => {
          let A = axis[i];
          t0.add(t1.set(A.x, A.y).mul(c));
        });
        return t0;
      };
    };

    let Transform = ISO(200);

    let DrawAxis = () => {
      let verts = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
      let a = Transform(0, 0, 0).cpy();
      FoE(verts, (v) => {
        let b = Transform(...v).cpy();
        CBP();
        CMT(a.x, a.y);
        CLT(b.x, b.y);
        console.log(`a: ${a.x} ${a.y}`);
        console.log(`b: ${b.x} ${b.y}`);
        CLW(2);
        CSS("black");
        CST();
      });
    };

    //DrawAxis()

    let Cube = (front) => {
      CBP();
      let rad = front ? TAU / 6 : 0;
      For(0, 6, (n, t) => {
        let p = V2()
          .circ(rad + TAU * t)
          .mul(200);
        (n == 0 ? CMT : CLT)(p.x, p.y);
      });
      CCP();
      For(0, 3, (n, t) => {
        let p = V2()
          .circ(rad + TAU * t)
          .mul(200);
        CLT(p.x, p.y);
        CLT(0, 0);
      });
      CST();
    };

    function MicroCanvas(X, Y, S) {
      // XY size, S:setup returns D:draw
      var D,
        t = this,
        v = DCE("canvas"),
        c = v.getContext("2d"),
        C = ctx, // default context
        R = 0, // rendering complete
        //s = _R,
        E = (e) => {
          CCX(c);
          DEF(null, 1);
          e();
          CCX(C);
        };

      //CWH(v,X,Y)
      CWH(v, X, Y);

      // init the canvas and get draw func
      E((a) => (D = S()));

      // return loaded canvas
      return (x, y, r = 0, w = 1, h = 1) => {
        R ? 0 : E((a) => (R = D()));
        CVS();
        CXT(x, y);
        CXS(w, h);
        CXR(r);
        CXT(-X / 2, -Y / 2);
        CDI(v, 0, 0, X, Y);
        CVR();
      };
    }

    let Quant = (v, n, l, h) =>
      l + (round(((v - l) / (h - l)) * n) * (h - l)) / n;
    let Lerpv = (v, a, b) => V2(Lerp(v, a.x, b.x), Lerp(v, a.y, b.y));

    let v_temp1 = V2();
    let Ag_Blank = () => {};
    let Ag_Log =
      (text) =>
      (...p) =>
        console.log(text);
    let Ag_Integrate =
      (mul, rad = 0) =>
      (pos, vel, scale) => {
        pos.add(
          v_temp1
            .circ(vel.rad() + rad)
            .norm()
            .mul(mul)
        ),
          0;
      };
    let Ag_IntegrateQuant = (mul, num, rad) => (pos, vel, scale) => {
      pos.add(v_temp1.circ(Quant(vel.rad(), num, 0, TAU) + rad).mul(mul)), 0;
    };
    let Ag_Spawn =
      (agentGrp, spawnFn) =>
      (...p) => (agentGrp.push(spawnFn(...p)), 0);

    let Ag_Flow = (flow, weight) => (pos, vel, scale) => (
      vel
        .mul(1 - weight)
        .add(v_temp1.set().add(flow.get(pos.x, pos.y)).mul(weight)),
      0
    );
    let Ag_Flow_Cache = (flow, weight) => (pos, vel, scale) => (
      vel
        .mul(1 - weight)
        .add(v_temp1.set().add(flow.cget(pos.x, pos.y)).mul(weight)),
      0
    );

    let Ag_Stack =
      (...stack) =>
      (...p) => {
        for (let n = 0; n < stack.length; n++) {
          if (stack[n](...p)) return 1;
        }
      };
    let Ag_Draw = (col, scale) => (p, v, s) =>
      RECT(col, p.x, p.y, s.x * p.t * scale, s.y * p.t * scale);
    let Ag_RndTurn = (chance, rad, turns) => (p, v, s) => {
      RN.r() > chance && v.circ(v.rad() + rad * RN.item(turns));
      return 0;
    };
    let Ag_Turn = (rad, turns) => (p, v, s) => {
      v.circ(v.rad() + rad * RN.item(turns));
      return 0;
    };
    let Ag_Chance =
      (chance, ag) =>
      (...p) =>
        chance > RN.r() && ag(...p);
    let Ag_Life = (life) => (p, v, s) => {
      p.l = (p.l ?? 0) + 1;
      p.t = 1 - p.l / life;
      return p.l > life;
    };
    let Ag_Every = (steps, ag) => (p, v, s) => (
      !(p.l % steps) && ag(p, v, s), 0
    );
    let Ag_Sequence = (seq) => (p, v, s) =>
      seq[Wrap(p.l, 0, seq.length)](p, v, s);

    // execute the stack n times
    let Ag_Loop =
      (num, stack, n) =>
      (...a) => {
        for (n = 0; n < num; n++) {
          if (stack(...a)) return 1;
        }
      };

    let AgentGroupBatched =
      (batch_qty, agents, startFn, endFn, stack, N = 0) =>
      () => {
        let c = agents.length,
          n = c - 1,
          b = 0;
        let batch_count = 0;
        if (!c) return 1;
        N++;
        while (n > 0) {
          startFn(N);
          b = 0;
          batch_count++;
          while (b < batch_qty && n > 0) {
            stack(...agents[n]) && agents.splice(n, 1);
            b++;
            n--;
          }
          endFn(N);
        }
        //console.log('batch_count:'+batch_count+' agents:'+c)
      };
    let AgentGroup =
      (agents, startFn, endFn, stack, N = 0) =>
      () => {
        let n,
          c = agents.length;
        if (!c) {
          //console.log('all dead')
          return 1;
        }
        N++;
        startFn(N);
        for (n = c - 1; n >= 0; n--) {
          stack(...agents[n]) && agents.splice(n, 1);
        }
        endFn(N);
      };

    class FL2 {
      constructor(densityX, densityY) {
        var t = this,
          E = [],
          M = [],
          // used for get
          g = V2(), // temp vector for get
          cache = {},
          n, // itterator
          // used for effector calc
          P = V2(), // position temp vector
          v = V2(), // towards temp vector
          r = V2(), // side on rotate vector used for curl
          l, // distance from the effector
          e, // effector table [x,y,c,d,s]
          a; // a is the attenuation result

        // add an effector
        //t.eff = (x,y,c,d,s) => E.push([x,y,c,d,s])
        t.M = M;
        // args: (x,y,curl,div,str)
        t.eff = (...e) => E.push([...e]);

        // args: (pos,norm,str)
        t.meff = (...e) => M.push(e);
        //t.mEff = (a,b,s) => M.push([a,b,s])

        var d = V2();
        var vLerp = (v, a, b, r) => r.set(a.x, a.y).sub(b).mul(v).add(b);
        //var vLerp = (v,a,b,r) => r.set(Lerp(v,a.x,b.x),Lerp(v,a.y,b.y))
        //var idx = (x,y) => floor(Quant(x,gridX,0,PX)) + floor(Quant(y,gridY,0,PX)) * gridX
        var cget = (X, Y, r) => {
          let idx = X + "," + Y;
          cache[idx] =
            cache[idx] ?? t.get(X * (1 / densityX), Y * (1 / densityY)).cpy();
          /*
    if (!dbg){
      console.log(''+X+'   '+X*(1/densityX))
      console.log(''+Y+'   '+Y*(1/densityY))
      console.log(idx)
    } */
          return cache[idx];
        };
        let dbg = 0;
        let _A = V2(),
          _B = V2(),
          _C = V2();
        t.cget = (x, y) => {
          let X = floor(x * densityX),
            Y = floor(y * densityY),
            a = cget(X, Y),
            b = cget(X + 1, Y),
            c = cget(X, Y + 1),
            d = cget(X + 1, Y + 1);

          x = x * densityX - X;
          y = y * densityY - Y;

          let r0 = vLerp(x, a, b, _A);
          let r1 = vLerp(x, c, d, _B);
          /*
    if (!dbg) {
      dbg = 1
      let data = {
        densityX:densityX,
        densityY:densityY,
        x:x,
        y:y,
        X:X,
        Y:Y,
        a:a,
        b:b,
        c:c,
        d:d,
        r0:r0,
        r1:r1,
      }
      //console.log(JSON.stringify(data,null,2))
    }*/

          return vLerp(y, r0, r1, _C);
          //let idx = X+','+Y
          //cache[idx] = cache[idx] ?

          // get the top left grid cell
          // get the cell blend values
          // cache get each grid corner
          // return blended result
        };
        t.get = (x, y) => {
          g.set(); // clear the result vector

          //g.set() // clear the result vector
          for (n = 0; n < M.length; n++) {
            e = M[n];
            var ePos = e[0]; // field center
            var eNorm = e[1]; // magnetic normal
            var eStr = e[2]; // strength of the field

            v.set(x, y).sub(ePos); // vector towards the effector

            // calc the attenuation
            //*#<Attenuation:Linear>
            var att = eStr / (v.len() * 2);
            //#*/
            /*# <Attenuation:InvSquare>
      var att = eStr / pow(v.len(),2) //(v.len()*2) 
      //#*/

            //console.log('eNorm: '+JSON.stringify(e))
            // perpendicular to the magnetic normal
            r.set(eNorm.x, eNorm.y).perp();

            // dot product between the towards vector
            // and the perpendicular to the mag normal
            var dot = v.norm().dot(r);

            // flip field
            var lr = dot > 0 ? 1 : -1;

            // calculate final vector direction
            vLerp(1 - abs(dot), eNorm, v.norm().perp().mul(lr), P);

            // multiply the result by the attenuation
            g.add(P.norm().mul(att));
          }

          for (n = 0; n < E.length; n++) {
            e = E[n];
            v.set(x - e[0], y - e[1]); // towards vector
            a = e[4] / v.len(); // calculate the attenuation
            v.norm(); // normalised toward vector
            r.set(v.x, v.y).perp(); // normalised side on vector
            //v.mul(e[3]).add( r.mul(e[2]) )
            g.add(v.mul(e[3]).add(r.mul(e[2])).mul(a));
          }
          return g;
        };
      }
    }

    let Emitter = (from, to) => {
      return (num) => {
        For(0, num, (a) => {
          if (from.length) to.push(from.shift());
          //RN.c(RN.r()) ? to.shift() : to.pop() )
        });
      };
    };

    // this handy function visualises where the coordinate system is
    var showSpace = (c, t, n) => {
      c = c ? c : "grey"; // default line colour
      t = t ? t : "white"; // default text colour
      n = n ? n : 10; // default num of lines
      var fs = 10;
      For(0, n, (i) => {
        // draw the vertical lines using squased ellipses
        ELI(c, -PX, i * 10, PX * 2, 0.5, 0, 0, TAU);
        ELI(c, -PX, i * 100, PX * 2, 1, 0, 0, TAU);
        ELI(c, -PX, -i * 10, PX * 2, 0.5, 0, 0, TAU);
        ELI(c, -PX, -i * 100, PX * 2, 1, 0, 0, TAU);

        // draw the horizontal lines
        ELI(c, i * 10, -PX, 0.5, PX * 2, 0, 0, TAU);
        ELI(c, i * 100, -PX, 1, PX * 2, 0, 0, TAU);
        ELI(c, -i * 10, -PX, 0.5, PX * 2, 0, 0, TAU);
        ELI(c, -i * 100, -PX, 1, PX * 2, 0, 0, TAU);
      });

      // draw all the grid numbers
      For(0, n, (i) => {
        if (i != 0) {
          TXT(t, fs, i * 100 + "," + 0, i * 100, 20);
          TXT(t, fs, 0 + ", " + i * 100, 35, 15 + i * 100);
          TXT(t, fs, -i * 100 + "," + 0, -i * 100, 20);
        }
        TXT(t, fs, 0 + -i * 100, 35, -15 - i * 100);
      });

      // small ellipse in the center of the coordinate space
      ELI(c, 0, 0, 5, 5, 0, 0, TAU);
    };

    var ENV = (a, b, c, d, i, o) => (v) =>
      v > o
        ? Mapf(v, o, 1, c, d)
        : v > i
        ? Mapf(v, i, o, b, c)
        : Mapf(v, 0, i, a, b);

    // SIGNATURE
    SIGN = (() => {
      var a,
        b,
        n,
        // super encoded signature
        s = 31, // offset means that the below code starts at -31
        c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // decoding key
        A =
          "EEBBBCABAAABBCCDEGLNKJJKKKLLLKLKKJJHCBEEEEEFEEEFFFFKSPIrpmoqxQVXXTLKJJIIHGGFFDDCCCCCDDFFGHIIIIHHGGEFEFFGGIHIHHHGGFGFGIN",
        B =
          "ldwPPSUWYYYYXWTT07UCvwtrpnnlmlmnoqsua7RUWXZZZZYXUSPTnhnDIJKJMEEBytspljjlnszGNSX1232ZWRLEuojhikpxHSZ431SIxokhjovHSZ31VLm",
        D = (d) => {
          var o = [];
          for (n = 0; n < d.length; n++) o.push(c.indexOf(d[n]) - s);
          return o;
        },
        X = D(A),
        Y = D(B);

      return (x, y, s, fn) => {
        for (n = 0; n < X.length; n++) {
          a = X[n] * s;
          b = Y[n] * s;

          fn(x, y, x + a, y + b);

          x += a;
          y += b;
        }
      };
    })();
    var SIG = (x, y, s) => {
      CBP(),
        SIGN(x, y, s, (a, b, c, d) => {
          CLT(c, d);
        }),
        CST();
    };

    //end<functions>
    //--------------------------

    //--------------------------
    //insert<setup>
    // CANV = "black";
    WALL = cH(0, 0, 0, 0); //"darkgrey";
    // SHDW = "black";

    let BG_col = cH(200, 60, 2, 0);

    FPS = 30;
    let show_dbg = 0;

    /*# <Palette:Colour>
let saturation = 1
//#*/
    //*#<Palette:Monochrome>
    let saturation = 0.3;
    //#*/

    let calcRegions = () => {
      let regions = [];
      let border = 75;
      let [x, y, w, h] = Outline(0, 0, PX, PX, border);
      let height = (h - border * 2) / 3;
      For(0, 3, (i, t) => {
        //let col = cH(i*10,50,50,1)
        //RECT(col, x, y, w, height)
        regions[i] = [x, y, w, height];
        y += 75 + height;
      });
      return regions;
    };

    // layout for 1 x 3 grid of area
    let regions_1x3 = [
      [75, 75, 850, 233],
      [75, 383, 850, 233],
      [75, 691, 850, 233],
    ];

    //drawFrame()

    let env = ENV(0, 1.5, 1, 0, 0.3, 0.7);

    let PerimiterDist = (pos) => {
      // returns based on the distance to the perimiter
      // assuming that the centre of the canvas is 0,0
      return abs(pos.len() - 300);
    };

    let polar = PolarCoords(V2(0, 0), 300);

    let gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
    gradient.addColorStop(0, cM(0, 1));
    gradient.addColorStop(0.2, cM(0, 1));
    gradient.addColorStop(0.35, cM(0, 0.1));
    gradient.addColorStop(0.5, cM(0, 0));
    gradient.addColorStop(1, cM(0, 0));
    let draw_centre_circle = 1;
    let draw_start_fn = (n) => {
      // draw start
      let r = 300 + RN.i(-30, 0);

      draw_centre_circle && ELI(gradient, 0, 0, r * 2, r * 2, 0, 0, TAU);
      //ELI(cM(0,0.01),0,0,r,r,0,0,TAU)
      let hue = 10 + sin(n * 0.18) * 15;
      //let hue = 30-n*0.05
      CFS(cH(hue, 100 * saturation, 53, 0.45));
      CSC(cH(hue, 100 * saturation, 60, 0.65));
      //CSB(10)
      ADD();
      CBP();
    };
    let draw_end_fn = (n) => {
      // draw end
      CFL();
      MUL();
      CSB(0);
    };
    let draw_rect_fn = (p, r, s) => {
      let val = pow(Mapf(PerimiterDist(p), 0, 800, 1, 0), 4);
      let S = max(0.001, 1.5 * val * env(p.t)); // *env(p.t)// env(p.t) * Size0
      CRE(p.x, p.y, s.x * S, s.y * S, 0, 0, TAU);
      return 0;
    };
    let draw_eli_fn = (p, r, s) => {
      let val = pow(Mapf(PerimiterDist(p), 0, 1800, 1, 0), 6);
      let S = 0.5 * max(0.001, 1.5 * val * env(p.t)); // *env(p.t)// env(p.t) * Size0

      let result = polar(p);
      let x = result.x;
      let y = result.y;

      CMT(x, y);
      CEL(x, y, s.x * S, s.y * S, 0, 0, TAU);
      CCP();
      return 0;
    };
    let draw_stack = (step, flow, bind, life) =>
      Ag_Stack(
        Ag_Life(life),
        Ag_Flow(flow, bind),
        Ag_Integrate(step, 0),
        draw_rect_fn
      );

    let draw_stack_looped = (step, ittr, flow, bind, life) =>
      Ag_Stack(
        Ag_Loop(
          ittr,
          Ag_Stack(
            Ag_Life(life),
            Ag_Flow(flow, bind),
            Ag_Integrate(step, 0),
            draw_eli_fn
          )
        )
      );

    let flow;
    let SunFrame = (seed, transform_fn, flow_binding) => {
      let RN = new RNG(seed);
      CVS();
      transform_fn();

      // draw the perimiter glow
      ADD();
      For(0, 10, (a) => {
        CSB(RN.f(5, 35));
        var c = cH(10, 100 * saturation, 56, 0.7);
        CSS(c);
        CSC(c);
        CBP();
        CEL(0, 0, 300, 300, 0, 0, TAU);
        CLW(6);
        CST();
      });
      MUL();
      ELI("black", 0, 0, 300, 300, 0, 0, TAU);

      For(0, 400, () => {
        var p = V2()
          .circ(RN.f(0, TAU * 2))
          .mul(RN.f(400, 1000)); //.inc(HX)
        var s = 0.1 + pow(RN.r(), 6) * 1; // RN.f(0.25,0.5)
        CSC("white");
        CSB(3);
        ELI("white", p.x, p.y, s, s, 0, 0, TAU);
        CSB(10);
        ELI("white", p.x, p.y, s, s, 0, 0, TAU);
        CSB(0);
      });

      let field_density = 1;
      let agent_count = 2000;
      let agent_life = 450;
      let agent_emit = 4;
      let agent_ittr = 20;
      let agent_size = 1; //0.75
      let agent_step = 0.75; //0.5

      /*# <Sun:Triple>
agent_count = 800
agent_life = 100
agent_emit = 2
agent_ittr = 15
agent_step = 0.75
//#*/

      //*#<Draw:CombinedField>
      agent_size = 1;
      agent_step = 1.5;
      //#*/

      flow = new FL2(field_density, field_density);
      let Agents0 = [];
      let Agents1 = [];
      //let Effectors = []

      // force distribution
      For(0, 40, (i, v) => {
        var pos = V2()
          .circ(v * TAU + RN.r())
          .mul(302); //.inc(HX)
        var dir = V2().circ(RN.f(0, TAU));
        var strength = RN.f(0.4, 2);
        flow.meff(pos, dir, strength * 100);
        show_dbg && drawRay("blue", 3, pos, dir, 30);
      });
      For(0, 10, (i, v) => {
        var pos = V2()
          .circ(v * TAU + RN.r())
          .mul(302); //.inc(HX)
        var dir = V2().circ(RN.f(0, TAU));
        var strength = RN.f(0.1, 0.5);
        flow.meff(pos, dir, strength * 100);
        show_dbg && drawRay("blue", 3, pos, dir, 30);
      });

      //flow.eff(0,0,0,2,1)

      // agent distribution
      For(0, agent_count, (n, t) => {
        var pos = V2()
          .circ(PI / 4 + RN.f(0, TAU / 10) - TAU * t)
          .mul(300 + pow(RN.r(), 5) * 200);
        /*# <Sun:Triple>
  var pos = V2().circ((PI/4)+RN.f(0,TAU/10)-PI*t/2).mul(300+(pow(RN.r(),5)*200))
  //#*/

        //var pos = V2(RN.i(0,PX),RN.i(0,PX)).inc(-HX)
        var dir = pos.cpy().norm();
        //var dir = V2().circ(RN.f(0,TAU))
        let s = RN.f(0.7, 1.2) * agent_size;
        RN.c(0.03) && (s *= 3);
        RN.c(0.03) && (s /= 3);
        var scale = V2(s, s);
        Agents0.push([pos, dir, scale]);
        Agents1.push([pos.cpy(), dir.cpy(), scale.cpy()]);

        let dist = pow(Mapf(PerimiterDist(pos), 0, 300, 1, 0), 4);
        show_dbg && drawRay("red", 2 * dist, pos, dir, 10 * dist);
      });

      let groups = [];
      let Active0 = [];
      let Active1 = [];
      let emitter0 = Emitter(Agents0, Active0);
      let emitter1 = Emitter(Agents1, Active1);
      let life = 450;

      //groups[0] = AgentGroup(Active0, draw_start_fn, draw_end_fn, draw_stack(-agent_step, flow, flow_binding, life))
      //groups[1] = AgentGroup(Active1, draw_start_fn, draw_end_fn, draw_stack(agent_step, flow, flow_binding, life))
      groups[0] = AgentGroupBatched(
        30,
        Active0,
        draw_start_fn,
        draw_end_fn,
        draw_stack_looped(-agent_step, agent_ittr, flow, flow_binding, life)
      );
      groups[1] = AgentGroupBatched(
        30,
        Active1,
        draw_start_fn,
        draw_end_fn,
        draw_stack_looped(agent_step, agent_ittr, flow, flow_binding, life)
      );
      //groups[0] = AgentGroup(Active0, draw_start_fn, draw_end_fn, draw_stack_looped(-agent_step, agent_ittr, flow, flow_binding, life))
      //groups[1] = AgentGroup(Active1, draw_start_fn, draw_end_fn, draw_stack_looped(agent_step, agent_ittr, flow, flow_binding, life))
      CVR();

      return () => {
        CVS();
        transform_fn();

        emitter0(agent_emit);
        emitter1(agent_emit);
        //CXT(HX,HX)
        //CXS(0.85, 0.85)
        //For(0,agent_ittr,n=>FoE(groups,group=>group()))
        FoE(groups, (group) => group());
        CVR();
      };
    };

    let transform_fn = (x, y, s) => () => {
      CXT(x, y);
      CXS(s, s);
    };

    RECT("black", 0, 0, PX, PX);

    let dr_frame = 0;
    /*# <Sun:Off>
//#*/

    /*# <Sun:Mass>
RECT(BG_col,0,0,PX, PX)
let flow_binding = 0.1
dr_frame = 1
let Sun = SunFrame(SEED,transform_fn(HX,HX,0.85), flow_binding)
//#*/
    //*#<Sun:Bound>
    RECT(BG_col, 0, 0, PX, PX);
    let flow_binding = 1;
    dr_frame = 1;
    let Sun = SunFrame(SEED, transform_fn(HX, HX, 0.85), flow_binding);
    //#*/

    let ClipRect = (...c) => {
      CBP();
      CRE(...c);
      ctx.clip();
    };

    /*# <Sun:Triple>
let Sun = (()=>{
let suns=[]
let binding = [0.08, 0.4, 1]  
FoE(regions_1x3, (region,i)=>{
  OutlineRect(cM(90,1), ...Outline(...region,-4), 1)
  CVS()
  ClipRect(...region)
  RECT(BG_col,0,0,PX,PX)
  suns[i] = SunFrame(SEED,transform_fn(500,600+region[1],1.45), binding[i])
  CVR()
})
return ()=>{
  FoE(regions_1x3, (region,i)=>{
    let sun = suns[i]
    CVS()
    ClipRect(...region)      
    sun()
    CVR()
  })
}
})()
Signature()
//#*/

    // field map stuff
    let fieldAlpha = 0.45;
    /*# <Draw:Field>
fieldAlpha = 0.65
//#*/

    let fieldMap = FieldMap(flow, 4, fieldAlpha);

    let y_pixel = 0;
    //end<setup>
    //--------------------------

    return (a) => {
      //--------------------------
      //insert<draw>

      if (dr_frame) drawFrame();

      //*#<Draw:CombinedField>
      draw_centre_circle = 0;
      CVS();
      y_pixel = fieldMap();
      CVR();
      y_pixel > 500 && Sun();
      //#*/

      /*# <Draw:Field>
draw_centre_circle = 0
CVS()
fieldMap()


CVR()
//#*/

      /*# <Draw:Agents>
//drawFrame()
Sun()
//#*/

      //SinTest()

      return 0;

      return 1;
      //end<draw>
      //--------------------------
    };
  };

//----------------------------------------------
// GLOBALS
_X = _Y = 0; // x and y mouse and touch position
_R = 1; // Resolution multipler value (1 = 1 * PX) (which is 1000 square)
_P = 0; // becomes true when the certificate is being viewed
_M = 0; // becomes true when mouse is clicked
_W = 0; // width of window canvas
_H = 0; // height of window canvas
_I = (a) => 1; // the interaction customisation function (this default one just returns 1)

function I() {
  cnv = document.getElementById("tc"); // cnv is the main canvas
  ctx = CTX = cnv.getContext("2d"); // ctx is the 2d render context

  const BTN = (x, y, r, t, v, f) => {
    // x,y : button position
    // r   : button radius
    // t   : button text
    // v   : value sent into callback
    // f   : callback on clicked
    var m, // mouse position
      a, // button hover
      s, // select scale (changes the width when hovering)
      p = V2(x, y); // button position

    // register the on release event
    _V.push((b) => {
      a ? f(v) : 0;
    });

    // update / draw button func
    // v: visible //  (only activates if mouse is over)
    // h: highlight
    return (v, h) => {
      // flip the vector to use add as subtract
      m = V2(_X, _Y).mul(-1).add(p);
      a = m.len() < r * 1.7; // mouse / touch is hovering over
      s = a ? 2 : 5;
      if (v) {
        // draw button
        ELI(a || h ? "white" : "grey", x, y, r + s, r + s, 0, 0, TAU);
        //ELI(cM(200,1),x,y,r,r,0,0,TAU)
        CTA("center");
        CFS("black");
        FNT(r - 3);
        CFT(t, x, y + 6);
      }
    };
  };

  //insert<CERT_data>
  let CERT = {
    //Data here is displayed on the back of the artpiece
    Piece: "Fig A - 1 of 12",
    Name: "Sol Journey 2 - Cur8", // 001',
    //Description: 'Simulated magnetic field study'.split(`|`),

    /*# <Magnetic:Single field>
  Description: [
    'Demonstration of the field structure of a single magnetic',
    'point. The light agents travel north in the field while the',
    'dark agents move in the opposite direction. This enables',
    'the magnetic poles to be easily observed.'
  ], 
  //#*/
    /*# <Magnetic:Repulsion field>
  Description: [
    'Demonstration of the field structure of a two magnetic',
    'points in repulsion. The light agents travel north in the',
    'field while the dark agents move in the opposite direction.',
    'This enables the magnetic poles to be easily observed.'
  ], 
  //#*/
    /*# <Magnetic:Attraction field>
  Description: [
    'Demonstration of the field structure of a two magnetic',
    'points attracting eachother. The light agents travel north',
    'in the field while the dark agents move in the opposite',
    'direction. This enables the magnetic poles to be easily',
    'observed.'
  ], 
  //#*/
    //*#<Magnetic:Repulsion loop>
    Description: [
      "Demonstration of the field structure of a loop of magnetic",
      "points with the poles facing towards the centre of the",
      "canvas. The light agents travel north in the field while",
      "the dark agents move in the opposite direction. This enables",
      "the magnetic poles to be easily observed.",
    ],
    //#*/
    /*# <Magnetic:Attraction loop>
  Description: [
    'Demonstration of the field structure of a loop of magnetic',
    'points attracting eachother around the canvas. The light',
    'agents travel north in the field while the dark agents move',
    'in the opposite direction. This enables the magnetic poles',
    'to be easily observed.'
  ],
  //#*/
    /*# <Magnetic:Multiple fields>
  Description: [
    'Demonstration of many magnetic points scattered on the',
    'canvas resulting in a complex set of interactions similar to',
    'what we can observe on the surface of the sun. The light',
    'agents travel north in the field while the dark agents move',
    'in the opposite direction. This enables the magnetic poles',
    'to be easily observed.'
  ],
  //#*/

    //*#IF[data.has_properties]
    Properties: "Linear, Monochrome, Bound, CombinedField, Repulsion loop",
    //*/
    Medium: "Fully On-Chain BlockGen.Art Canvas",
    Artist: "Charles Machin - @CM_GenArt",
    Seed: SEED,
  };

  //end<CERT_data>

  var _V = [], // on released events (used by buttons)
    _B = [], // all of the buttons
    //*#IF[!data.do_screenshot]
    _E = 0.97, // scale of canvas in virtual setting 1=full
    //*/
    /*#IF[data.do_screenshot]
    _E      = 1,              // scale of canvas in virtual setting 1=full
    //*/
    _S = 0, // current resolution index
    _L = [1, 2, 4, 8, 16], // all the resolutions
    _C = 0, // render complete
    _N = (
      a // on selected event a=res index (0=1k)
    ) => {
      (_S = a), // set the resolution index
        (_R = _L[a]); // set the resolution value
      art = ART(_R); // create a new art object
      cer = CER(min(_R, 4)); // create a new certificate object
    },
    // THE ART BASE CODE  -----------------------------------------------------------------------
    // r : res
    ART = (r) => {
      _C = 0;
      var D, //R = new RNG(SEED),         // create the random number generator!
        v = DCE("canvas"), // document.createElement('canvas')
        c = v.getContext("2d"), // rendering context
        s = cM(150, 1), // sig colour
        G = () => {
          // Signature draw function
          //console.log('STAMPED!')
          DEF();
          //CSB(8)
          //MUL()
          //CSC(CANV)
          //CSS(s)                 // set the stroke colour
          //SIG(965, 945, 0.15)    // draw the signature
          //SIG(965, 945, 0.15)    // draw the signature
          //CTA('center')            // text allignment

          // stamp the corner of the piece
          //CGC('xor')
          TXT(s, r == 1 ? 10 : 8, TAG, 967, 993);
          //For(0,2,i=>TXT(i?'black':'white', r==1?10:8, TAG, 967+i, 990+i) )

          //DEF()
          //MUL()
          //CSB(0)
        };

      // setup
      CWH(v, r * PX); // set the canvas width and height
      CCX(c); // set our canvas context!
      AA(v, 1); // set smoothing to active
      //CTR(r, 0, 0, r, 0, 0);         // clear the transform
      DEF();

      // call the user setup function
      D = uS(new RNG(SEED), c, v, r, G); // this returns the draw func 'D'

      G(); // draw the tag

      //console.log('Started!')
      return () => {
        CCX(c); // set our canvas context!
        //CTR(r, 0, 0, r, 0, 0);    // clear the transform
        DEF();

        // call the users draw function which returns 1 if complete
        if (!_C) (_C = D()), _C && G(); // sig draw function on complete

        CCX(); // default canvas context
        return v;
      };
    },
    // THE CERTIFICATE CODE  -----------------------------------------------------------------------
    // r  : res
    CER = (r) => {
      //insert<CERT>

      // This codeblock is the certificate draw code.
      // Edit this code with extreme care! Everything
      // on the back can be edited. (With the exception
      // of the resolution buttons)

      // r = the resolution multiplier

      let v = DCE("canvas"); // document.createElement('canvas')
      let RN = new RNG(SEED); // the random number generator

      CWH(v, PX * r); // sets the canvas 'v.width' and 'v.height'
      CCX(v.getContext("2d")); // set the active canvas context

      DEF(null, r);
      RECT(cH(0, 2, 80, 0.6), 2, 2, PX - 4, PX - 4);

      // set the clipping rectangle
      CBP();
      CRT(4, 4, PX - 8, PX - 8); // equiv to `ctx.rect()`
      CTC(); // equiv to `ctx.clip()

      // fill the cert background
      let bg = cH(0, 2, 90, 1);
      RECT(bg, 0, 0, PX, PX);

      For(0, 100, (a, x) => {
        x *= PX;
        For(0, 100, (b, y) => {
          y *= PX;
          For(0, 10, (i) =>
            RECT(cH(0, 0, RN.f(40, 70), 0.07), x, y, RN.i(-6, 6), RN.i(-6, 6))
          );
        });
      });

      let x = HX,
        y = 150,
        i;
      let line = (a, b, c, d) => {
        CMT(a, b);
        CLT(c, d);
      };

      CBP();
      CSS(cH(40, 90, 68, 0.7));
      ctx.arc(x, y, 45, 0, TAU);
      CCP();
      CLW(2);
      CST();
      CBP();
      CSS(cH(0, 2, 94, 0.5));
      ctx.arc(x, y, 50, 0, TAU);
      CCP();
      CLW(10);
      CST();

      CBP();
      For(0, 50, (i, v, r, l) => {
        r = V2().circ(v * TAU);
        l = RN.f(60, 1000);
        line(x + r.x * 60, y + r.y * 60, x + r.x * l, y + r.y * l);
      });
      CLW(3);
      CST();
      CBP();
      For(0, 200, (i, v, r, l, s) => {
        r = V2().circ(v * TAU);
        l = RN.f(60, 1000);
        s = RN.f(60, 1000);
        line(x + r.x * s, y + r.y * s, x + r.x * l, y + r.y * l);
      });
      CLW(2);
      CSS(cH(0, 2, 82, 0.5));
      CST();

      //Signature
      CBP();
      CSC(cM(250, 1));
      CSBr(20 * r);
      SIGN(HX - 7, 270, 0.35, (a, b, c, d) => CLT(c, d));
      CSS(cM(0, 0.25));
      CLW(3);
      CST();

      //RECT('red',0,0,PX,PX)

      // draw the wood frame
      CBP();
      CSC("black"); // set the shadow colour to black
      CSBr(30 * r); // 'CSBr' is raw cavas shadow blur
      CRE(0, 0, PX, PX);
      CSS(cHx("dbccb8"));
      CLW(102);
      CST();

      // draw the wood frame bevel
      CBP();
      CRE(0, 0, PX, PX);
      CSS(cHx("9d8c78"));
      CLW(92);
      CST();

      // draw the outer wood frame
      CSBr(6 * r);
      CSS(CANV);
      CLW(30);
      CST();

      DEF(null, r); // reset to defaults (shadow, transform & text)

      // draw the faint blockgen text (top center)
      TXT(cM(0, 0.1), 18, "CM Gen Art", HX, 40);

      // draw the serial number text (bottom center)
      TXT(cM(0, 0.6), 13, TAG, HX, 970);

      // draw the cert text
      (x = HX), (y = 370);
      var n = 0,
        k,
        s;
      for (var [k, t] of Object.entries(CERT)) {
        y += 34;
        TXT(cM(0, 0.8), 14, k, x, y);
        y += 24;
        s = cM(0, 0.5);
        Array.isArray(t)
          ? FoE(t, (i) => {
              TXT(s, 20, i, x, y);
              y += 22;
            })
          : TXT(s, 20, t, x, y);
      }

      DEF(); // back to default options
      CCX(); // back to the default canvas context

      return (a) => v; // blank update function that just returns the canvas.
      // This can become a 'draw' codeblock equivalent by
      // replacing with it with the following:
      /*
return (a)=>{        
  CCX(v.getContext('2d'))  // set the context to the certificate canvas

  // You can have active draw code here  

  RECT('black', RN.i(0,PX), RN.i(0,PX), 3,3)  // example random dots
  
  CCX()    // set the default context
  return v // this MUST return the canvas 
}
*/

      //end<CERT>
    },
    // INIT THE CODE -------------------------------------------------------------------------------
    IN = () => {
      _N(0); // rebuild the art and cer objects (0 is the resolution index for 1k)

      // set the mouse events up
      var n, // temp itterator value
        b, // temp button value
        x, // temp x value
        q = _L.length, // temp length of resolutions array
        t = "touch", // temp space savers
        m = "mouse", // temp space savers
        o = (e) => {
          // prevent click through
          e.preventDefault(), e.stopPropagation();
        },
        st = (e) => {
          //shape touch event object to match mouse event
          e.preventDefault(); //stop event from triggering mouse events as well, can conflict
          var m = e.changedTouches[0]; //assume touch zero is all we care about
          e.clientX = m.pageX;
          e.clientY = m.pageY;
          return e;
        },
        d = (e) => {
          // extract mouse x,y and transform it to canvas space
          var B = cnv.getBoundingClientRect(),
            T = CGT().invertSelf();
          (x = e.clientX - B.left), (y = e.clientY - B.top);
          _X = x * T.a + y * T.c + T.e;
          _Y = x * T.b + y * T.d + T.f;
        };
      (p = (e) => {
        _M = 1;
        d(e), o(e), (_P = _I(_X, _Y));
      }), // mouse pressed
        (u = (e) => {
          _P ? FoE(_V, (p) => p()) : 0;
          _M = _P = 0;
          d(e);
        }), // mouse released
        // register the event listeners
        FoE(
          [
            [
              t + "start",
              (e) => {
                p(st(e));
              },
            ],
            [
              t + "move",
              (e) => {
                d(st(e));
              },
            ],
            [
              t + "end",
              (e) => {
                u(st(e));
              },
            ],
            [m + "down", p],
            [m + "move", d],
            [m + "up", u],
          ],
          (e) => cnv.addEventListener(...e)
        );

      // make the buttons
      //q = _L.length
      for (n = 0; n < q; n++) {
        x = HX - (80 * q) / 2 + 80 * (n + 0.5); // even x spacing
        _B.push(BTN(130, x, 22, _L[n] + "k", n, _N)); // create the resolution button
        /*
          a =>                                  // on selected event
          { 
            _S = a,                             // set the resolution index
            _R = _L[a]                          // set the resolution value
            art = ART(_R)                       // start the art rebuilding                    
            cer = CER(min(_R,4))
            //console.log(_L[a]+'k clicked') 
          }
        ))
        */
      }
      _B.push(BTN(130, 800, 25, CHAR(8595), 0, (a) => CAP())); // download image button

      NF(); // <-- kick things off (Start the update loop)
    },
    // IMAGE CAPTURE / Download  -------------------------------------------------------------------------------
    CAP = (r) => {
      var l = DCE("a"); // link for image download
      l.download = CERT.Name; // set the file name
      l.href = art().toDataURL(); // get the art and convert it into data
      l.click(); // auto click the link
      l.delete; // delete it
    },
    // NEXT FRAME LOOP   ---------------------------------------------------------------------------
    NF = () => {
      setTimeout((a) => {
        window.requestAnimationFrame(NF); // setup the callback for the next frame
        var n = 0,
          w = PX; // width of canvas

        CCX(); // default canvas context
        FR(_E, WALL); // apply center scaling to the window area

        // draw the shadow
        CSC(SHDW); // set shadow colour
        CSBr(55); // set shadow blur raw
        RECT(CANV, 0, 0, w, w); // draw a rectangle
        CSB(0); // set the shadow blur back to 0

        CVS(); // save the current transform

        _P ? CXT(PX, 0) + CXS(-1, 1) : 0; // flip the art transform if the cert is being viewed

        // update the art virtual canvas then draw it to the visbile canvas
        CDI(art(), 0, 0, w, w);

        CVR();
        // if the screen is clicked on draw the certificate
        _P ? CDI(cer(), 0, 0, w, w) : 0; // ctx.DrawImage(...) certificate or art

        // draw the buttons (only actually draws if _P==1)
        FoE(_B, (b) => {
          b(_P, _S == n), n++;
        });

        // DEBUG MOUSE POSITION
        //CFS(s),FNT(20),CTA('left'),CFT(_X.toFixed(2), 20+e, 35+e),CFT(_Y.toFixed(2), 20+e, 60+e)
      }, 1e3 / FPS); // < set the frame rate
    },
    FR = (b, C) => {
      /*
      var mark = (x,y,C,s)=>{
        // debug markers for frame allignment tests
        ELI(C,x,y,1,10*s,0,0,TAU)
        ELI(C,x,y,10*s,1,0,0,TAU)
        ELI(C,x,y,0.5*s,0.5*s,0,0,TAU)
        TXT(C,1.5*s,`${round(x)}, ${round(y)}`,x+20,y+20)
      }
      //*/
      var W = window,
        parentRect = cnv.getBoundingClientRect(),
        // w = W.innerWidth,
        // h = W.innerHeight,
        w = parentRect.width,
        h = parentRect.width,
        c = w != _W || h != _H,
        m = min(w, h) * b,
        s = m / PX,
        dpr = min(2, max(devicePixelRatio ?? 1, 1));

      if (c) {
        // cnv.width = _W = w * dpr;
        // cnv.height = _H = h * dpr;
        cnv.width = _W = w;
        cnv.height = _H = h;
      }

      CTR(1, 0, 0, 1, 0, 0);
      BG(C);
      CXT((w - m) / 2, (h - m) / 2);
      CXS(s, s);
      //mark(0,0,'magenta',10)
      //mark(0,1000,'magenta',10)
      //mark(500,500,'green',10)
      //mark(1000,1000,'cyan',10)
      //mark(1000,0,'cyan',10)
      //return c
    };

  /*#IF[data.do_screenshot]
    _SS_ART=ART 
    _SS_DONE=false
    _SS_TURBO=6  // number of draw cycles per frame
    ART = (...p)=>{
      var _art = _SS_ART(...p)
      var frames = 0
      
      return ()=>{
        frames++ 
        var v
        //if (!_SS_DONE) {
        for(var n=0;n<_SS_TURBO;n++) {
          v = _art()
        }            
        if (!_SS_DONE && _C)
        {
          _SS_DONE = true
          //window.close()
          document.body.classList.add('screenshotdone')
        }
        //}
        return v
      } 
    }
  //*/

  /*#IF[data.debug]
    // DEBUG HIJACKS THE STARTUP FUNCTIONS
    {

      console.log('DEBUG MODE')
      // THE SNEAKY DEBUG REPLACEMENT FOR INIT
      _IN = IN 
      IN = ()=>{
        //cnv = document.getElementById('tc') // cnv is the main canvas
        _IN()
        
        document.addEventListener(`keydown`, (e) => {
          if (e.key=='r'){
            CERT.Seed++
            }
            console.log('keydown', e.key)
            //console.log('e',e)
          })
          console.log('DEBUG INIT')
        }
        
        
        // THE SNEAKY DEBUG REPLACEMENT FOR ART
        _ART=ART 
        ART = (...p)=>{
          var _art = _ART(...p)
          
          return ()=>{
            var v = _art()
            var e = 20
            var c = v.getContext('2d')  // document.createElement('canvas')
            var s = 'grey'            
            CCX(c)   
            CFS('white')
            RECT(2,2,100,11)
            // draw the mouse coord text
            CFS(s),FNT(11),CTA('right'),CFT(_X.toFixed(2), 40, 10),CFT(_Y.toFixed(2), 80, 10)
            CCX()
            //console.log('debug update')
            return v
          } 
        }
        
      }
  //*/

  AA(ctx, 1);
  IN();
}
I();

//PROCESS_ENDminify
