import { styled } from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #202020;
  overflow-y: scroll;
`;

export const TopRow = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  justify-content: flex-end;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 60px;

  color: #b0b0b0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  font-size: 2vh;

  & h2,
  h4 {
    color: #d2f950;
  }
`;

export const CloseButton = styled.img`
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;
