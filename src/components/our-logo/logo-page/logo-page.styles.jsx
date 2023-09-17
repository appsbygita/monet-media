import { styled } from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  background-color: #000;
  overflow: clip;
  z-index: -999;
`;

export const FooterSection = styled.div`
  background: #212121;
`;

export const DescriptionSection = styled.div`
  background: #151515;
`;

export const CTASection = styled.div`
  background-color: #000;
  background: url(${(props) => props.image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
  min-height: 300px;
`;

export const Content = styled.div`
  width: ${(props) => (props.width ? props.width : "70%")};
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

export const Carousel = styled.div`
  overflow: hidden;
  width: 1000px;
  height: 900px;
  margin: 0 auto;

  & .carousel-content {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    ${Content} {
      width: 1400px;
    }
  }
`;

export const PhaseImg = styled.div`
  border-radius: 40px;
  background-color: #000;
  width: 450px;
  height: 300px;
  overflow: clip;

  display: flex;
  justify-content: center;

  & img {
    width: auto;
    height: 280px;
  }

  &.phase-three {
    width: 450px;
    height: 600px;
    align-items: flex-end;

    & img {
      width: 400px;
      height: auto;
      padding-bottom: 20px;
    }
  }
`;

export const ConceptImg = styled.img`
  width: 640px;
  height: auto;
`;

export const ColumnTwo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TextDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  color: #999999;
  font-family: "Inter", sans-serif;
  font-size: 16px;

  & p {
    margin: ${(props) => (props.margin ? props.margin : "20px 0")};
  }

  & p.title {
    color: #aaa;
    font-family: "Unbounded", sans-serif;
    font-weight: 700;
    font-size: 48px;

    & b {
      color: #d2f950;
    }
  }

  & p.title-2 {
    color: #aaa;
    font-family: "Unbounded", sans-serif;
    font-weight: 400;
    font-size: 48px;

    & b {
      color: #d2f950;
    }

    &.white {
      color: #fff;
      font-size: 36px;
    }
  }

  & p.pretitle {
    font-family: "Unbounded", sans-serif;
    color: #aaa;
    font-size: 22px;
  }
`;

export const PhaseTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
  }
`;

export const PhaseTitle = styled.div`
  width: 230px;
  padding: 10px 40px;
  background-color: #2b2b2b;
  text-align: center;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PhaseSubtitle = styled.div`
  width: 230px;
  padding: 10px 40px;
  background-color: #161616;
  text-align: center;

  border-top: solid 1px #d2f950;
`;

export const PhaseSection = styled.div`
  background-color: #2b2b2b;
  width: 100vw;
`;

export const SectionTitle = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  z-index: 999;
  position: relative;
  padding-top: 40px;
  padding-bottom: 6px;
  border-bottom: 2px solid #aaa;
  margin-bottom: 30px;

  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;

  & b {
    color: #d2f950;
  }

  @media screen and (max-width: 800px) {
    padding-top: 0;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-end;
  padding-top: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-width: 0;
  border-radius: 50%;
  background: #d2f950;
  font-family: "Unbounded", sans-serif;
  font-weight: 300;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "30%")};
  align-items: flex-start;
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 40px;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;

    ${FooterLogo} {
      width: 60%;
      margin: 0 auto;
      padding-bottom: 40px;
    }
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  font-family: "Unbounded", cursive;
  color: #d2f950;
  padding-bottom: 100px;
  font-weight: 800;
  font-size: 1rem;

  & group {
    padding-bottom: 30px;
    & div {
      display: block;
      color: #d2f950;
      font-weight: 800;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 40px;
  }
`;

export const Navbar = styled.div`
  display: none;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: #000;
  padding: 0 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${FooterLogo} {
      width: 40%;
    }
  }

  @media screen and (max-width: 550px) {
    ${FooterLogo} {
      width: 50%;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
