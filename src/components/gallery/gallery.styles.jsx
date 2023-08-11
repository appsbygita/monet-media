import { styled } from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1500px;
`;

export const GalleryColumnContainer = styled.div`
  position: relative;
  top: ${(props) => props.top};
  width: 32%;
  height: 50%;
`;
