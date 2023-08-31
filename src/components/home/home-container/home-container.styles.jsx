import { styled } from "styled-components";
import HeroBg from "../../../assets/hero-bg.webp";
import ContributorBg from "../../../assets/image/back-3.jpeg";
import { Logo } from "../logo/logo.component";

export const Container = styled.div`
  width: 100vw;
  overflow: clip;
  z-index: -999;
`;

export const DarkSection = styled.div`
  background: #212121;
`;

export const DarkerSection = styled.div`
  background: #151515;
`;

export const LightSection = styled.div`
  background: #3c3747;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(${HeroBg}) #3d3d3d;
  background-size: cover;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 700px;
  }
`;

export const ContributorSection = styled.div`
  background: #212121;
  width: 100%;
  position: relative;
  z-index: 0;
`;

export const ContributorImageContainer = styled.div`
  width: 60%;
  height: 70%;
  position: absolute;
  top: 0%;
  left: 50%;
  z-index: 0;
`;

export const ContributorImage = styled.div`
  width: 130%;
  height: 155%;
  background: url(${ContributorBg});
  background-position: -209px -2px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : "40px")} 0;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    flex: 1;
    justify-content: center;
  }
`;

export const MobileHeroLogo = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const HeroLogo = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "55%")};
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const VerticalLine = styled.div`
  margin: 4px auto;
  width: 0px;
  display: flex;
  flex: 1;
  border-left: 1.5px solid #fff;
  border-right: 1.5px solid #fff;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "30%")};
  align-items: flex-start;
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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.align ? props.align : "space-between")};
  padding: 30px 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;

    &#approach-1 {
      flex-direction: column-reverse;
    }
  }
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: row;

  & a {
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const LogoRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const HomeTitle = styled.div`
  text-align: center;
  line-height: 4.5rem;

  @media screen and (max-width: 800px) {
    line-height: 2.2rem;
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

  & n {
    color: #fff;
  }

  & t {
    color: #d2f950;
  }

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const PartnerLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  text-align: center;

  @keyframes slidein {
    from {
      transform: translate(0px, 30px);
    }

    to {
      transform: translate(0px, 0px);
    }
  }

  &:hover {
    background-color: #2b2634;

    & name {
      display: block;
    }

    & description {
      display: block;
    }

    & img {
      filter: none;
      animation: slidein 0.8s;
    }
  }

  & name {
    display: none;
    padding-top: 20px;
    padding-bottom: 8px;
    font-family: "Unbounded", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
  }

  & description {
    display: none;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    background-color: #2b2634;
    width: 90%;
    height: 50vw;

    & name,
    description {
      display: block;
      font-size: 0.7rem;
    }

    & img {
      filter: none;
    }
  }

  @media screen and (max-width: 470px) {
  }
`;

export const PartnerLogo = styled.img`
  width: 120px;
  height: 120px;
  filter: grayscale(100%);

  @media screen and (max-width: 470px) {
    width: 20vw;
    height: 20vw;
  }
`;

export const GalleryTextContainer = styled.div`
  position: absolute;
  width: 35%;
`;

export const GallerySection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
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
