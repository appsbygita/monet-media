import { styled } from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1500px;

  @media screen and (max-width: 800px) {
    height: 320vw;
  }
`;

export const GalleryColumnContainer = styled.div`
  position: relative;
  top: ${(props) => props.top};
  width: 32%;
  height: fit-content;

  @media screen and (max-width: 800px) {
    width: 48%;
  }
`;
