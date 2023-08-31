import { styled } from "styled-components";

export const TitleText = styled.span`
  font-weight: 400;
  font-family: "Unbounded", sans-serif;
  font-size: 3rem;
  color: #d2f950;

  @media screen and (max-width: 800px) {
    #one {
      color: #fff;
    }
    #two {
      font-weight: 800;
    }
  }
`;

export const ContentText = styled.span`
  font-weight: 300;
  font-family: "Unbounded", sans-serif;
  font-size: 3rem;
  color: #fff;

  & b {
    font-weight: 800;
    color: #d2f950;
  }

  @media screen and (max-width: 500px) {
  }
`;

export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #999999;

  & center {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
