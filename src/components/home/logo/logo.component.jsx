import M from "../../../assets/monet_logo/m_vector.svg";
import Net from "../../../assets/monet_logo/net_vector.svg";
import Media from "../../../assets/monet_logo/media_vector.svg";
import Sun from "../../../assets/monet_logo/sun_static.png";

import { LogoContainer, LogoSpace } from "./logo.styles";

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={M} alt="logo part 1" width="11%" />
      <img src={Sun} alt="logo part 2" width="15%" />
      <img src={Net} alt="logo part 3" width="24%" />
      <LogoSpace />
      <img src={Media} alt="logo part 4" width="40%" />
    </LogoContainer>
  );
};
