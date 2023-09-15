import { styled } from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  background-color: #000;
  overflow: clip;
  z-index: -999;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ColumnTwo = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  color: #999999;
  font-family: "Inter", sans-serif;
  font-size: 18px;

  & p {
    margin: 0;
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
`;

export const PhaseTitle = styled.div`
  width: 280px;
  padding: 10px 40px;
  background-color: #2b2b2b;
  text-align: center;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
`;

export const PhaseSubtitle = styled.div`
  width: 280px;
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
