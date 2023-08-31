import { useState, useRef, useEffect } from "react";

import M from "../../../assets/monet_logo/m_vector.svg";
import Net from "../../../assets/monet_logo/net_vector.svg";
import Media from "../../../assets/monet_logo/media_vector.svg";
import Sun from "../../../assets/monet_logo/sun_static.png";
import { LogoCanvas } from "../../logo-canvas/logo-canvas.component";

import { LogoContainer, LogoSpace } from "./logo.styles";

export const Logo = ({ isStatic, isHero }) => {
  const [width, setWidth] = useState(0);
  // const [scriptUrl, setScriptUrl] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current.clientWidth * 0.1);
    console.log("wid ", width);
  }, [ref]);

  return (
    <LogoContainer ref={ref}>
      <img className={isHero} src={M} alt="logo part 1" width="11%" />
      {isStatic ? (
        <img src={Sun} alt="logo part 2" width="15%" />
      ) : (
        <LogoCanvas width={isHero ? width * 3 : width} />
      )}
      <img className={isHero} src={Net} alt="logo part 3" width="24%" />
      <LogoSpace className={isHero} />
      <img className={isHero} src={Media} alt="logo part 4" width="40%" />
    </LogoContainer>
  );
};
