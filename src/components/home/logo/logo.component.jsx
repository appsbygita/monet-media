import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { LogoCanvas } from "../../logo-canvas/logo-canvas.component";

import {
  LogoContainer,
  LogoSpaceOne,
  CanvasContainer,
  MonetImg,
  StaticImg,
} from "./logo.styles";

export const Logo = ({ isStatic, isHero }) => {
  // const [width, setWidth] = useState(0);
  const [dpr, setDpr] = useState(0);
  // const [scriptUrl, setScriptUrl] = useState("");
  // const ref = useRef(null);

  // useEffect(() => {
  //   setWidth(ref.current.clientWidth * 0.1);
  // }, [ref]);
  useEffect(() => {
    setDpr(window.devicePixelRatio);
  }, []);

  const getLogoWidth = () => {
    if (dpr > 1.5) {
      return "110px";
    } else if (dpr < 1.5) {
      return "220px";
    } else {
      return "146px";
    }
  };

  // console.log("dpr", dpr);
  // console.log("width", getLogoWidth());

  return isStatic ? (
    <LogoContainer>
      {/* <MImg className={isHero} width="11%" />
      <img src={Sun} alt="logo part 2" width="15%" />
      <NetImg className={isHero} width="24%" />
      <LogoSpace className={isHero} width="10%" />
      <MediaImg className={isHero} width="40%" /> */}
      <StaticImg />
    </LogoContainer>
  ) : (
    <LogoContainer>
      <MonetImg className={isHero} />
      {/* <LogoCanvas width={isHero ? width * 3 : width} /> */}
      <CanvasContainer>
        <LogoCanvas width={getLogoWidth()} />
      </CanvasContainer>
      <LogoSpaceOne>
        <Link to="/our-logo" reloadDocument>
          <span id="linkSpan"></span>
        </Link>
      </LogoSpaceOne>
      {/* <NetImg className={isHero} />
      <LogoSpaceTwo className={isHero} />
      <MediaImg className={isHero} /> */}
    </LogoContainer>
  );
};
