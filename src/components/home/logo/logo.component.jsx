// import { useState, useRef, useEffect } from "react";
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
  // const [scriptUrl, setScriptUrl] = useState("");
  // const ref = useRef(null);

  // useEffect(() => {
  //   setWidth(ref.current.clientWidth * 0.1);
  // }, [ref]);

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
        <LogoCanvas width="110px" />
      </CanvasContainer>
      <LogoSpaceOne className={isHero}>
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
