import { styled } from "styled-components";
import media from "../../../utils/screen/media";

import M from "../../../assets/monet_logo/m_vector.svg";
import Net from "../../../assets/monet_logo/net_vector.svg";
import Media from "../../../assets/monet_logo/media_vector.svg";

import { LogoCanvas } from "../../logo-canvas/logo-canvas.component";

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;

// export const CanvasContainer = styled(LogoCanvas).attrs((props) => ({
//   width: "100%",
// }))`
//   width: 200px;
// `;

export const CanvasContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 127px;
  width: 160px;

  @media screen and (max-width: 1400px) {
    left: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
  }
`;

export const LogoSpaceOne = styled.div`
  width: 180px;
  height: 100px;
  z-index: 10;

  span#linkSpan {
    display: block;
    width: 180px;
    height: 100px;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 120px;
    span#linkSpan {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;

export const LogoSpaceTwo = styled.div`
  width: 80px;

  @media screen and (max-width: 1400px) {
    width: 40px;
  }

  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;

export const LogoSpace = styled.div`
  width: ${(props) => (props.width ? props.width : "80px")};

  @media screen and (max-width: 1400px) {
    width: ${(props) => (props.width ? props.width : "40px")};
  }
  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;

export const MImg = styled.img.attrs((props) => ({
  src: M,
  // width: "11%",
  // width: props.width ? props.width : "126px",
}))`
  z-index: 2;
  width: ${(props) => (props.width ? props.width : "120px")};

  @media screen and (max-width: 1400px) {
    width: ${(props) => (props.width ? props.width : "90px")};
  }
`;

export const NetImg = styled.img.attrs((props) => ({
  src: Net,
  // width: "24%",
  // width: props.width ? props.width : "280px",
}))`
  z-index: 2;
  width: ${(props) => (props.width ? props.width : "280px")};

  @media screen and (max-width: 1400px) {
    width: ${(props) => (props.width ? props.width : "210px")};
  }
`;

export const MediaImg = styled.img.attrs((props) => ({
  src: Media,
  // width: "40%",
  // width: props.width ? props.width : "480px",
}))`
  width: ${(props) => (props.width ? props.width : "470px")};

  @media screen and (max-width: 1400px) {
    width: ${(props) => (props.width ? props.width : "360px")};
  }
`;
