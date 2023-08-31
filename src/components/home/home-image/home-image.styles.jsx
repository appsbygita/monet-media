import { styled } from "styled-components";
// import HomeImgOne from "../../../assets/image/home-img-1.png";

export const RectangleContainer = styled.div`
  width: 450px;
  height: 550px;
  position: absolute;
  z-index: 999;

  @media screen and (max-width: 560px) {
    width: 100%;
    height: 110vw;
    position: relative;
  }
`;

export const ClipContainer = styled.div`
  width: 450px;
  height: 550px;
  position: absolute;
  border-bottom-right-radius: 30%;
  border-top-left-radius: 30%;
  overflow: clip;

  @media screen and (max-width: 560px) {
    width: 80%;
    height: 110vw;
  }
`;

export const FillImage = styled.div`
  width: 100%;
  height: 100%;
  z-index: -999;

  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Rectangle = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  transform: rotate(45deg);
  background-color: #d2f950;
`;

export const HomeImageContainer = styled.div`
  width: 450px;
  height: 550px;

  &:hover {
    & ${FillImage} {
      transform: scale(1.3) translate(-10px, 30px);
      transition: transform 0.7s;
    }

    & ${Rectangle} {
      transform: scale(1.6) rotate(45deg);
      transition: transform 0.7s;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    height: 110vw;
  }
`;
