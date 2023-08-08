import { styled } from "styled-components";
import HeroBg from "../../assets/hero-bg.jpeg";
import ContributorBg from "../../assets/image/back-3.jpeg";

export const HomeContainer = styled.div`
  width: 100vw;
  overflow: clip;
`;

export const DarkSection = styled.div`
  background: #212121;
`;

export const DarkerSection = styled.div`
  background: #151515;
  z-index: -999;
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
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 40px 0;
  z-index: -999;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "55%")};
  flex-direction: column;
`;

export const FooterMenu = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  font-family: "Unbounded", cursive;
  color: #d2f950;
  padding-bottom: 100px;
  font-weight: 800;

  & a.a1 {
    color: #d2f950;
    font-weight: 800;
    text-decoration: none;
  }

  & a.a2 {
    color: #aaa;
    font-weight: 300;
    text-decoration: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: row;

  & a {
    text-decoration: none;
  }
`;

export const HomeTitle = styled.div`
  text-align: center;
  line-height: 4.5rem;
`;

export const MenuButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-width: 0;
  border-radius: 50%;
  background: #d2f950;
  font-family: "Unbounded", cursive;
  font-weight: 300;
  font-size: 1rem;
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
    font-family: "Unbounded", cursive;
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
`;

export const PartnerLogo = styled.img`
  width: 120px;
  height: 120px;
  filter: grayscale(100%);
`;
