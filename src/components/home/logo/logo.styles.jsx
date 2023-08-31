import { styled } from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;

export const LogoSpace = styled.div`
  width: 10%;
  @media screen and (max-width: 800px) {
    .hero {
      display: none;
    }
  }
`;
