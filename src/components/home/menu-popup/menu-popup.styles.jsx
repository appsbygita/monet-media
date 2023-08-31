import { styled } from "styled-components";

import { Header } from "../home-container/home-container.styles";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #202020;

  & ${Header} {
    padding-top: 40px;
    width: 80%;
    margin: 0 auto;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const LeftCol = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const RightCol = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Unbounded", sans-serif;
  color: #aaa;

  & menuTitle {
    font-weight: 400;
    font-size: 2rem;
    padding-bottom: 30px;
  }

  & menuLink {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.5rem;
    padding-bottom: 12px;

    & a {
      text-decoration: none;
      color: #aaa;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0;

    & menuTitle {
      font-size: 1.2rem;
      padding: 24px 0;
    }

    & menuLink {
      font-size: 1.5rem;
    }
  }
`;

export const MenuFooter = styled.div`
  height: 100px;
  width: 80%;
  margin: 60px auto 0 auto;
  color: #fff;
  font-size: 0.7rem;
`;
