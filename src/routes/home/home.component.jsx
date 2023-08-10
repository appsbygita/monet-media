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
  HomeContainer,
  Header,
  SocialLinks,
} from "./home.styles";
import {
  TitleText,
  ContentText,
  Paragraph,
} from "../../components/text/text.styles";
import { Spacer } from "../../components/spacer/spacer.styles";
import { CTAButton as Button } from "../../components/home/cta-button/cta-button.component";
import { HomeImage } from "../../components/home/home-image/home-image.component";

import { Logo } from "../../components/home/logo/logo.component";
import HomeImgOne from "../../assets/image/home-img-1.png";
import HomeImgTwo from "../../assets/image/home-img-2.jpeg";

import Cur8Logo from "../../assets/logo/cur8.png";
import SplashLogo from "../../assets/logo/splash.png";
import ArtbankLogo from "../../assets/logo/artbank.png";
import BlockgenLogo from "../../assets/logo/blockgen.png";
import CardanoCenterLogo from "../../assets/logo/cardanocenter.png";
import ArtboardzLogo from "../../assets/logo/artboardz.png";
import AfricaLogo from "../../assets/logo/africa.png";
import CardaniaLogo from "../../assets/logo/cardania.png";
import NiftyLogo from "../../assets/logo/nifty.png";
import OmniLogo from "../../assets/logo/omni.png";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Content>
          <Header>
            <MenuButton>Menu</MenuButton>
          </Header>
          <CenterDiv>
            <Logo />
            <HomeTitle>
              <TitleText>Where Creativity Meets Innovation</TitleText>
            </HomeTitle>
            <Spacer />
            <Spacer />
            <Button className="hero-button">Be the first to know</Button>
          </CenterDiv>
        </Content>
      </HeroSection>

      <DarkSection>
        <Content>
          <SectionTitle>
            <n>01.</n> <t>Our Approach</t>
          </SectionTitle>
          <Row>
            <Column>
              <ContentText>
                Monet Media <b>pioneers the intersection</b> of technology,
                marketing, and creativity.
              </ContentText>
              <Paragraph>
                Our mission: revolutionize marketing campaigns with AI,
                fostering an inclusive and rewarding creative ecosystem.
                <br />
                <br />
                We blend advanced AI systems for captivating advertising content
                that aligns with clients' objectives and complies with platforms
                like Facebook, TikTok, LinkedIn, and more.
                <br />
                <br />
              </Paragraph>
              <Button>Express Your Interest</Button>
            </Column>
            <HomeImage img={HomeImgOne} />
          </Row>
          <Spacer />
          <Row>
            <HomeImage img={HomeImgTwo} />
            <Column>
              <ContentText>
                Join us as we <b>reshape the future</b> of creative content,
                fostering a vibrant community where everyone has a stake.
              </ContentText>
              <Paragraph>
                At Monet Media, we leverage blockchain for data security,
                sovereignty, and privacy, while maintaining marketing
                effectiveness. Our rewarding system incentivizes participation
                through Monet Tokens, delivering value to consumers, creators,
                and public resources.
                <br />
                <br />
              </Paragraph>
              <Button>Express Your Interest</Button>
            </Column>
          </Row>
        </Content>
      </DarkSection>

      <LightSection>
        <Content>
          <SectionTitle>
            <n>02.</n> <t>Our Ecosystem</t>
          </SectionTitle>
          <CenterDiv>
            <ContentText>
              <b>Industry Partner</b>
            </ContentText>
            <Paragraph>
              <center>
                Collaborates with other businesses within the digital ecosystem
                to provide specialized products, services, or expertise.
              </center>
            </Paragraph>
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
                  <description>Gaming</description>
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
              <a href="https://cardania.com/" target="_blank" rel="noreferrer">
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
              <ContentText>
                Are you <b>a Creator?</b>
              </ContentText>
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
              <Button>Start earning with your art today</Button>
            </Column>
          </Row>
        </Content>
        <ContributorImageContainer>
          <ContributorImage />
        </ContributorImageContainer>
      </ContributorSection>

      <DarkerSection>
        <Content>
          <Column width="45%">
            <ContentText>
              <b>Explore</b> the content creators to get <b>Inspired</b>
            </ContentText>
          </Column>
        </Content>
      </DarkerSection>

      <DarkSection>
        <Content>
          <Footer>
            <span>Logo</span>
            <FooterMenu>
              <group>
                <a className="a1" href="#">
                  Privacy Policy
                </a>
                <a className="a1" href="#">
                  Term of Use
                </a>
              </group>
              <SocialLinks>
                <linksTitle>Connect With Us</linksTitle>
                <links>
                  <a className="a2" href="#">
                    LinkedIn
                  </a>
                  <a className="a2" href="#">
                    Instagram
                  </a>
                  <a className="a2" href="#">
                    info@MonetMedia.com
                  </a>
                </links>
              </SocialLinks>
            </FooterMenu>
          </Footer>
        </Content>
      </DarkSection>
    </HomeContainer>
  );
};
