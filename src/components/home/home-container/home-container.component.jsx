import {
  CenterDiv,
  HeroSection,
  HomeTitle,
  DarkSection,
  LightSection,
  Footer,
  MenuButton,
  Content,
  SectionTitle,
  Column,
  Row,
  PartnerLogo,
  DarkerSection,
  FooterMenu,
  PartnerLogoContainer,
  LogoRow,
  ContributorSection,
  ContributorImage,
  ContributorImageContainer,
  Container,
  Header,
  GalleryTextContainer,
  GallerySection,
  FooterLogo,
  VerticalLine,
  HeroDiv,
  Navbar,
  LogoRowContainer,
  ContentHero,
  FeaturesRow,
  GradientBg,
} from "./home-container.styles";
import { TitleText, ContentText, Paragraph } from "../../text/text.styles";
import { Spacer } from "../../spacer/spacer.styles";
import { CTAButton as Button } from "../cta-button/cta-button.component";
import { HomeImage } from "../home-image/home-image.component";
import { SocialLinks } from "../social-links/social-links.component";
import { useScreenSize } from "../../../utils/screen/screen";

import { Logo } from "../logo/logo.component";
import HomeImgTwo from "../../../assets/image/home-img-2.webp";

import StrategyFeat from "../../../assets/features/strategy_feat.webp";
import BrandFeat from "../../../assets/features/brand_feat.webp";
import DesignFeat from "../../../assets/features/design_feat.webp";
import WebFeat from "../../../assets/features/web_feat.webp";
import AIFeat from "../../../assets/features/ai_feat.webp";

import Cur8Logo from "../../../assets/logo/cur8.png";
import SplashLogo from "../../../assets/logo/splash.png";
import ArtbankLogo from "../../../assets/logo/artbank.png";
import BlockgenLogo from "../../../assets/logo/blockgen.png";
import CardanoCenterLogo from "../../../assets/logo/cardanocenter.png";
import ArtboardzLogo from "../../../assets/logo/artboardz.png";
import AfricaLogo from "../../../assets/logo/africa.png";
import CardaniaLogo from "../../../assets/logo/cardania.png";
import NiftyLogo from "../../../assets/logo/nifty.png";
import OmniLogo from "../../../assets/logo/omni.png";
import { Gallery } from "../../gallery/gallery.component";

import Hamburger from "../../../assets/icons/hamburger.svg";
import { FeatureImage } from "../feature-image/feature-image.component";

import { homeTexts } from "../../../assets/texts/home-texts";

export const HomeContainer = ({
  onMenuClick,
  onButtonClick,
  onPrivacyClick,
  onTermsClick,
  className,
}) => {
  const screenSize = useScreenSize();
  // console.log("screen ", screenSize);
  return (
    <Container className={className}>
      <Navbar>
        <FooterLogo>
          <Logo isStatic={true} />
        </FooterLogo>
        <img onClick={onMenuClick} src={Hamburger} alt="Menu button" />
      </Navbar>
      <HeroSection>
        <ContentHero padding="0">
          <Header>
            <MenuButton onClick={onMenuClick}>Menu</MenuButton>
          </Header>
          <HeroDiv>
            {screenSize.width <= 800 ? (
              <Logo isHero="hero" withLink />
            ) : (
              <Logo />
            )}
            <HomeTitle>
              <TitleText>
                <span id="one">Where Creativity</span>{" "}
                <span id="two">Meets Innovation</span>
              </TitleText>
            </HomeTitle>
            <Spacer />
            <Spacer />
            <Button onClick={onButtonClick} className="hero-button">
              Be the first to know
            </Button>
          </HeroDiv>
          <VerticalLine />
        </ContentHero>
      </HeroSection>

      <DarkSection id="our-approach">
        <GradientBg />
        <Content>
          <SectionTitle>{homeTexts.sectionTitle1}</SectionTitle>
          <Row id="approach-1">
            <Column>
              <ContentText className="body" fontSize="2.9rem">
                {homeTexts.textHeader1}
              </ContentText>
              <Paragraph>{homeTexts.textParagraph1}</Paragraph>
              <Button onClick={onButtonClick}>Express Your Interest</Button>
            </Column>
            <HomeImage
              isVideo={true}
              src="video/Neon.mp4"
              // src="https://drive.google.com/drive/u/0/folders/1ATWaCm2P6O2YYwby7vF27BfQwagaIySY"
            />
          </Row>
        </Content>
        <FeaturesRow>
          <FeatureImage imgUrl={StrategyFeat}>
            <b>Strategy</b> Development
          </FeatureImage>
          <FeatureImage imgUrl={BrandFeat}>
            <b>Brand</b> Strategic
          </FeatureImage>
          <FeatureImage imgUrl={DesignFeat}>
            <b>Design</b> Creative
          </FeatureImage>
          <FeatureImage imgUrl={WebFeat}>
            <b>Web</b> <br />
            Brand in Action
          </FeatureImage>
          <FeatureImage imgUrl={AIFeat}>
            <b>AI & Automation</b> Efficient
          </FeatureImage>
        </FeaturesRow>
        <Content>
          <Row>
            <HomeImage img={HomeImgTwo} />
            <Column>
              <ContentText className="body" fontSize="2.2rem">
                {homeTexts.textHeader2}
              </ContentText>
              <Paragraph>{homeTexts.textParagraph2}</Paragraph>
              <Button onClick={onButtonClick}>Join Us</Button>
            </Column>
          </Row>
        </Content>
      </DarkSection>

      <LightSection id="our-ecosystem">
        <Content>
          <SectionTitle>{homeTexts.sectionTitle2}</SectionTitle>
          <CenterDiv className="full-width">
            <ContentText>{homeTexts.textTitlePartner}</ContentText>
            <Paragraph>{homeTexts.textParagraphPartner}</Paragraph>
            <LogoRowContainer>
              <LogoRow>
                <a
                  href="https://www.cur8labs.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={Cur8Logo} />
                    <name>Cur8</name>
                    <description>Display</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://www.splash.club/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={SplashLogo} />
                    <name>Splash</name>
                    <description>Web3 Community</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://www.theartbank.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={ArtbankLogo} />
                    <name>The Art Bank</name>
                    <description>Art Promotion</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://www.blockgen.art/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={BlockgenLogo} />
                    <name>Blockgen</name>
                    <description>Algorithmic NFTs</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://www.cardanocenters.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={CardanoCenterLogo} />
                    <name>Cardano Centers</name>
                    <description>Cardano Outreach</description>
                  </PartnerLogoContainer>
                </a>
              </LogoRow>
              <LogoRow>
                <a
                  href="http://www.artboardz.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={ArtboardzLogo} />
                    <name>Artboardz</name>
                    <description>NFT Murals</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://www.africaonchain.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={AfricaLogo} />
                    <name>Africa On Chain</name>
                    <description>Podcast</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://cardania.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={CardaniaLogo} />
                    <name>Cardania</name>
                    <description>Metaverse</description>
                  </PartnerLogoContainer>
                </a>
                <a
                  href="https://niftyslabs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PartnerLogoContainer>
                    <PartnerLogo src={NiftyLogo} />
                    <name>NiftySlabs</name>
                    <description>Physical Collectible Cards</description>
                  </PartnerLogoContainer>
                </a>
                <a href="https://adarealm.io/" target="_blank" rel="noreferrer">
                  <PartnerLogoContainer>
                    <PartnerLogo src={OmniLogo} />
                    <name>OmniBlock</name>
                    <description>Metaverse</description>
                  </PartnerLogoContainer>
                </a>
              </LogoRow>
            </LogoRowContainer>
          </CenterDiv>
        </Content>
      </LightSection>

      <ContributorSection>
        <Content>
          <SectionTitle>{homeTexts.sectionTitle3}</SectionTitle>
          <Row>
            <Column width="47%">
              <CenterDiv>
                <ContentText>{homeTexts.textHeader3}</ContentText>
              </CenterDiv>
              <Paragraph>{homeTexts.textParagraph3}</Paragraph>
              <Button onClick={onButtonClick}>
                Start earning with your art today
              </Button>
            </Column>
          </Row>
        </Content>
        <ContributorImageContainer>
          <ContributorImage />
        </ContributorImageContainer>
      </ContributorSection>

      <DarkerSection>
        <GallerySection>
          <GalleryTextContainer>
            <CenterDiv>
              <ContentText className="body">
                <b>Explore</b> the content creators to get <b>Inspired</b>
              </ContentText>
            </CenterDiv>
          </GalleryTextContainer>
          <Gallery screenSize={screenSize.width} />
          <Content>
            <Row align="center">
              <Button onClick={onButtonClick}>Express Your Interest</Button>
            </Row>
          </Content>
        </GallerySection>
      </DarkerSection>

      <DarkSection>
        <Content>
          <Footer>
            <FooterLogo>
              <Logo isStatic={true} />
            </FooterLogo>
            <FooterMenu>
              <group>
                <div onClick={onPrivacyClick}>Privacy Policy</div>
                <div onClick={onTermsClick}>Terms of Use</div>
              </group>
              <SocialLinks />
            </FooterMenu>
          </Footer>
        </Content>
      </DarkSection>
    </Container>
  );
};
