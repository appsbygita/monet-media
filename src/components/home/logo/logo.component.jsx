import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// import M from "../../../assets/monet_logo/m_vector.svg";
// import Net from "../../../assets/monet_logo/net_vector.svg";
// import Media from "../../../assets/monet_logo/media_vector.svg";
import Sun from "../../../assets/monet_logo/sun_static.png";
import { LogoCanvas } from "../../logo-canvas/logo-canvas.component";

import {
  LogoContainer,
  LogoSpace,
  LogoSpaceOne,
  LogoSpaceTwo,
  CanvasContainer,
  MImg,
  NetImg,
  MediaImg,
} from "./logo.styles";

export const Logo = ({ isStatic, isHero }) => {
  const [width, setWidth] = useState(0);
  // const [scriptUrl, setScriptUrl] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current.clientWidth * 0.1);
  }, [ref]);

  return isStatic ? (
    <LogoContainer ref={ref}>
      <MImg className={isHero} width="11%" />
      <img src={Sun} alt="logo part 2" width="15%" />
      <NetImg className={isHero} width="24%" />
      <LogoSpace className={isHero} width="10%" />
      <MediaImg className={isHero} width="40%" />
    </LogoContainer>
  ) : (
    <LogoContainer ref={ref}>
      <MImg className={isHero} />
      {/* <LogoCanvas width={isHero ? width * 3 : width} /> */}
      {/* <CanvasContainer /> */}
      <CanvasContainer>
        <LogoCanvas width="110px" />
      </CanvasContainer>
      <LogoSpaceOne className={isHero}>
        <Link to="/our-logo" reloadDocument>
          <span id="linkSpan"></span>
        </Link>
      </LogoSpaceOne>
      <NetImg className={isHero} />
      <LogoSpaceTwo className={isHero} />
      <MediaImg className={isHero} />
    </LogoContainer>
  );
};
