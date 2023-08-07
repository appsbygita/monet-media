import { styled } from "styled-components";
import HeroBg from "../../assets/hero-bg.jpeg";

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
  background-image: url(${HeroBg});
  background-color: lightgray 50%;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
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
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  width: 60%;
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
  padding: 30px 0;
`;

export const HomeTitle = styled.div`
  text-align: center;
  line-height: 4.5rem;
`;

export const MenuButton = styled.button`
  width: 6rem;
  height: 6rem;
  border-width: 0;
  border-radius: 50%;
  background: #d2f950;
  font-family: "Unbounded", cursive;
  font-weight: 300;
  font-size: 1.2rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d2f950;
  background-color: transparent;
  width: 30rem;
  height: 5rem;
  padding: 0.2rem;
  color: #888;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;

  &:hover {
    background-color: #d2f950;
    color: #000;
  }
`;

export const SectionTitle = styled.div`
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

export const PartnerLogo = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 30px;
`;
