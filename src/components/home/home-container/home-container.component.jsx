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
          <SectionTitle>
            <n>01.</n> <t>Our Approach</t>
          </SectionTitle>
          <Row id="approach-1">
            <Column>
              <ContentText className="body">
                Welcome to
                <br />
                <b>Monet Media.</b>
              </ContentText>
              <Paragraph>
                Where we blend strategic expertise, cutting-edge technology,
                creative innovation, and seamless implementation. As a leading
                marketing consultancy, we're committed to making exceptional
                marketing solutions accessible to businesses of all sizes and
                stages.
              </Paragraph>
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
            <b>Web Brand</b> in Action
          </FeatureImage>
          <FeatureImage imgUrl={AIFeat}>
            <b>AI & Automation</b> Efficient
          </FeatureImage>
        </FeaturesRow>
        <Content>
          <Row>
            <HomeImage img={HomeImgTwo} />
            <Column>
              <ContentText className="body">
                Join us as we <b>reshape the future</b> of creative content,
                fostering a vibrant community where everyone has a stake.
              </ContentText>
              <Paragraph>
                At Monet Media, our focus is on guiding your journey from
                concept to market launch and beyond. We're here to empower
                businesses like yours by providing the necessary talent and
                skills to turn your ideas into impactful reality. Join us in
                navigating the dynamic marketing landscape, and let Monet Media
                be the catalyst for your sustained growth and success.
                <br />
                <br />
              </Paragraph>
              <Button onClick={onButtonClick}>Join Us</Button>
            </Column>
          </Row>
        </Content>
      </DarkSection>

      <LightSection id="our-ecosystem">
        <Content>
          <SectionTitle>
            <n>02.</n> <t>Our Ecosystem</t>
          </SectionTitle>
          <CenterDiv className="full-width">
            <ContentText>
              <b>Industry Partner</b>
            </ContentText>
            <Paragraph>
              <center>
                Collaborates with other businesses within the digital ecosystem
                to provide specialized products, services, or expertise.
              </center>
            </Paragraph>
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
          <SectionTitle>
            <n>03.</n> <t>Contributor</t>
          </SectionTitle>
          <Row>
            <Column width="47%">
              <CenterDiv>
                <ContentText>
                  Are you <b>a Creator?</b>
                </ContentText>
              </CenterDiv>
              <Paragraph>
                Monet Media empowers creativity through a robust reward system
                backed by blockchain. Our AI system sources content from
                artists, writers, and public resources.
                <br />
                <br />
                Each contribution is meticulously tracked, attributed, and forms
                the basis for our transparent reward distribution.
                <br />
                <br />
                We recognize and reward individual artists for visual assets
                derived from artworks. Contributors of written content used in
                our AI-generated advertising receive well-deserved Monet Tokens.
                We also acknowledge and reward public resources, giving back to
                the communities that support us.
                <br />
                <br />
                Monet Media fosters a fair and rewarding ecosystem, empowering
                content creators.
                <br />
                <br />
              </Paragraph>
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
