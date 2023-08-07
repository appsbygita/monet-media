import { styled } from "styled-components";
// import "./font.css";

export const TitleText = styled.span`
  font-weight: 300;
  font-family: "Unbounded", cursive;
  font-size: 4rem;
  color: #fff;

  & b {
    font-weight: 800;
    font-size: 7rem;
    color: #d2f950;
  }
`;

export const ContentText = styled.span`
  font-weight: 300;
  font-family: "Unbounded", cursive;
  font-size: 3rem;
  color: #fff;

  & b {
    font-weight: 800;
    color: #d2f950;
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
`;
