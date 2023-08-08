import {
  CenterDiv,
  HeroSection,
  HomeTitle,
  DarkSection,
  LightSection,
  Header,
  MenuButton,
  Button,
  Content,
  SectionTitle,
  Column,
  Row,
  PartnerLogo,
  DarkerSection,
  FooterMenu,
} from "./home.styles";
import {
  TitleText,
  ContentText,
  Paragraph,
} from "../../components/text/text.styles";
import { Spacer } from "../../components/spacer/spacer.styles";

import DefaultImage from "../../assets/placeholder_image.svg";
import Cur8Logo from "../../assets/logo/cur8.png";
import { Logo } from "../../components/home/logo/logo.component";

export const Home = () => {
  return (
    <div>
      <HeroSection>
        <Content>
          <Header>
            <span>Logo</span>
            <MenuButton>Menu</MenuButton>
          </Header>
          <CenterDiv>
            <HomeTitle>
              <Logo />
              <TitleText>Where Creativity Meets Innovation</TitleText>
            </HomeTitle>
            <Spacer />
            <Spacer />
            <Button>Be the first to know</Button>
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
            <img src={DefaultImage} width="40%" />
          </Row>
          <Spacer />
          <Row>
            <img src={DefaultImage} width="40%" />
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
            <Row>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
            </Row>
            <Row>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
              <a href="https://www.cur8labs.io/">
                <PartnerLogo src={Cur8Logo} />
              </a>
            </Row>
          </CenterDiv>
        </Content>
      </LightSection>

      <DarkSection>
        <Content>
          <SectionTitle>
            <n>03.</n> <t>Contributor</t>
          </SectionTitle>
          <Column>
            <ContentText>
              Are you <b>a Creator?</b>
            </ContentText>
            <Paragraph>
              Monet Media empowers creativity through a robust reward system
              backed by blockchain. Our AI system sources content from artists,
              writers, and public resources.
              <br />
              <br />
              Each contribution is meticulously tracked, attributed, and forms
              the basis for our transparent reward distribution.
              <br />
              <br />
              We recognize and reward individual artists for visual assets
              derived from artworks. Contributors of written content used in our
              AI-generated advertising receive well-deserved Monet Tokens. We
              also acknowledge and reward public resources, giving back to the
              communities that support us.
              <br />
              <br />
              Monet Media fosters a fair and rewarding ecosystem, empowering
              content creators.
              <br />
              <br />
            </Paragraph>
            <Button>Start earning with your art today</Button>
          </Column>
        </Content>
      </DarkSection>

      <DarkerSection>
        <Content>
          <Column>
            <ContentText>
              <b>Explore</b> the content creators to get <b>Inspired</b>
            </ContentText>
          </Column>
        </Content>
      </DarkerSection>

      <DarkSection>
        <Content>
          <Header>
            <span>Logo</span>
            <FooterMenu>
              <a className="a1" href="#">
                PRIVACY POLICY
              </a>
              <a className="a1" href="#">
                TERM OF USE
              </a>
              <p>Connect With Us</p>
              <a className="a2" href="#">
                LinkedIn
              </a>
              <a className="a2" href="#">
                Instagram
              </a>
              <a className="a2" href="#">
                info@MonetMedia.com
              </a>
            </FooterMenu>
          </Header>
        </Content>
      </DarkSection>
    </div>
  );
};
