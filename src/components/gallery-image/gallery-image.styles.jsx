import { styled } from "styled-components";

export const ImageDescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(20, 20, 20, 0) 65%
  );
  position: absolute;
  top: 0;
  z-index: 999;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & name {
    font-family: "Unbounded", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #d2f950;
  }

  & artist {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #d9d9d9;
    padding-bottom: 50px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 120%;
  position: absolute;
  top: -10%;
  background: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
`;

export const ImageContainerWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: clip;

  position: relative;
  margin-bottom: 24px;

  &:hover {
    & ${ImageContainer} {
      width: 100%;
      height: 150%;
      position: absolute;
      top: -25%;
      left: 0;
    }
    & ${ImageDescriptionContainer} {
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
  }
`;
