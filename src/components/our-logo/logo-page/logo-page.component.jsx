import { Link } from "react-router-dom";
import {
  PageContainer,
  Navbar,
  FooterLogo,
  Header,
  MenuButton,
  LogoContainer,
  SectionTitle,
  Content,
  ColumnTwo,
  TextDiv,
  PhaseTitle,
  PhaseTitleContainer,
  PhaseSection,
  PhaseSubtitle,
  FooterSection,
  Footer,
  FooterMenu,
  PhaseImg,
  ConceptImg,
  DescriptionSection,
  Carousel,
  CTASection,
} from "./logo-page.styles";
import { SocialLinks } from "../../home/social-links/social-links.component";
import { Logo } from "../../home/logo/logo.component";
import { LogoCanvas } from "../../logo-canvas/logo-canvas.component";
import { CTAButton } from "../../home/cta-button/cta-button.component";

import Hamburger from "../../../assets/icons/hamburger.svg";
import PhaseOne1 from "../../../assets/logo_page/phase-one-1.png";
import PhaseOne2 from "../../../assets/logo_page/phase-one-2.png";
import PhaseTwo1 from "../../../assets/logo_page/phase-two-1.png";
import PhaseTwo2 from "../../../assets/logo_page/phase-two-2.png";
import PhaseThree from "../../../assets/logo_page/phase-three.png";
import Concept from "../../../assets/logo_page/concept.png";
import CTABackground from "../../../assets/gallery_mock/gallery-1.webp";

export const LogoPage = ({
  onMenuClick,
  onButtonClick,
  onPrivacyClick,
  onTermsClick,
}) => {
  return (
    <PageContainer>
      <Navbar>
        <FooterLogo>
          <Logo isStatic={true} />
        </FooterLogo>
        <img onClick={onMenuClick} src={Hamburger} alt="Menu button" />
      </Navbar>
      <Header>
        <Link to="/" reloadDocument>
          <MenuButton>Back</MenuButton>
        </Link>
      </Header>
      <LogoContainer>
        <LogoCanvas />
      </LogoContainer>
      <Content padding="30px 0">
        <SectionTitle>
          <b>The Concept</b>
        </SectionTitle>
        <ColumnTwo>
          <TextDiv>
            <p className="pretitle">Logo Art for Monet Media:</p>
            <p className="title">
              <b>A Detailed Breakdown</b>
            </p>
            <p>
              In this artistic concept for Monet Media's logo, the design
              unfolds in three distinct phases, each contributing to a
              captivating visual experience.
            </p>
          </TextDiv>
          <ConceptImg src={Concept} alt="Artwork schematic" />
        </ColumnTwo>
      </Content>
      <Content>
        <PhaseTitleContainer>
          <a href="#phase-1">
            <PhaseTitle>
              <TextDiv margin="0">
                <p className="pretitle">Phase</p>
                <p className="title-2">
                  <b>One</b>
                </p>
              </TextDiv>
            </PhaseTitle>
          </a>

          <a href="#phase-2">
            <PhaseTitle>
              <TextDiv margin="0">
                <p className="pretitle">Phase</p>
                <p className="title-2">
                  <b>Two</b>
                </p>
              </TextDiv>
            </PhaseTitle>
          </a>

          <a href="#phase-3">
            <PhaseTitle>
              <TextDiv margin="0">
                <p className="pretitle">Phase</p>
                <p className="title-2">
                  <b>Three</b>
                </p>
              </TextDiv>
            </PhaseTitle>
          </a>
        </PhaseTitleContainer>
      </Content>
      <PhaseSection>
        <Content>
          <PhaseTitleContainer>
            <PhaseSubtitle>
              <TextDiv>
                <p>Particle Droplets and Splatter</p>
              </TextDiv>
            </PhaseSubtitle>
            <PhaseSubtitle>
              <TextDiv>
                <p>Interactive Cellular Automata Drawing Field</p>
              </TextDiv>
            </PhaseSubtitle>
            <PhaseSubtitle>
              <TextDiv>
                <p>Interactive Perimeter Flow Field</p>
              </TextDiv>
            </PhaseSubtitle>
          </PhaseTitleContainer>
        </Content>
        <Carousel>
          <div className="carousel-content">
            <Content id="phase-1">
              <SectionTitle width="1000px">
                <b>Phase</b> One
              </SectionTitle>
              <ColumnTwo>
                <TextDiv width="50%">
                  <p className="title-2">
                    Particle Droplets and <b>Splatter</b>
                  </p>
                  <p>
                    At the commencement, particle droplets cascade from above
                    the canvas, gracefully landing around the central point
                    where the sun takes shape. As these droplets make contact,
                    they generate a dynamic splatter pattern that mimics the
                    appearance of vividly coloured paint splashes.
                  </p>
                </TextDiv>
                <PhaseImg>
                  <img src={PhaseOne1} alt="Particle droplets" />
                </PhaseImg>
              </ColumnTwo>
              <ColumnTwo direction="row-reverse">
                <TextDiv width="50%">
                  <p>
                    However, these splashes serve a unique purpose. Upon impact,
                    the calculated splashes enter a cellular automata system,
                    triggering the initial chain reaction. This automata
                    simulation emulates the spread of phenomena such as
                    wildfires, with occasional bursts that propel the reaction
                    forward. Unlike conventional automata, which update all grid
                    cells in each cycle, this setup focuses solely on the
                    wavefront of the reaction. By doing so, computational
                    efficiency is optimised, allowing parallel processing
                    alongside other artistic elements.
                  </p>
                </TextDiv>
                <PhaseImg>
                  <img src={PhaseOne2} alt="Initial splatter" />
                </PhaseImg>
              </ColumnTwo>
            </Content>
            <Content padding="0 100px" />
            <Content id="phase-2">
              <SectionTitle width="1000px">
                <b>Phase</b> Two
              </SectionTitle>
              <ColumnTwo>
                <TextDiv width="50%">
                  <p className="title-2">
                    <b>Interactive Cellular</b> Automata Drawing Field
                  </p>
                  <p>
                    The cellular automata system isn't confined to a passive
                    role; it also embraces interactivity. Just as the particles
                    leave a splatter to initiate reactions, viewers can actively
                    contribute by clicking, adding their own unique reactions to
                    the canvas. As the reaction extends its reach, it calculates
                    the strength and directional force at each point within the
                    sun's structure.
                  </p>
                </TextDiv>
                <PhaseImg>
                  <img src={PhaseTwo1} alt="Particle droplets" />
                </PhaseImg>
              </ColumnTwo>
              <ColumnTwo direction="row-reverse">
                <TextDiv width="50%">
                  <p>
                    These values then inform a "field effect" colour pattern,
                    harnessing the magnetic forces associated with that
                    particular solar point as input. This intricate play of
                    colour waves renders the field more visible and
                    comprehensible. Notably, shifts in the colour spectrum
                    signify the direction of the field across the canvas, akin
                    to a normal or bump map in 3D graphics. This mechanism also
                    introduces undulations in field strength, unveiling the
                    field's curves and twists.
                  </p>
                </TextDiv>
                <PhaseImg>
                  <img src={PhaseTwo2} alt="Initial splatter" />
                </PhaseImg>
              </ColumnTwo>
            </Content>
            <Content padding="0 100px" />
            <Content id="phase-3">
              <SectionTitle width="1000px">
                <b>Phase</b> Three
              </SectionTitle>
              <ColumnTwo>
                <TextDiv width="50%">
                  <p className="title-2">
                    <b>Interactive</b> Perimeter Flow Field
                  </p>
                  <p>
                    The evolution continues into the final phase, introducing a
                    sequence of magnetic particles that sweep around the sun's
                    perimeter. These particles traverse the twists and turns of
                    the magnetic field, yielding solar magnetic patterns. Each
                    particle features a luminous head indicating its location,
                    etching a magnetic trail as it travels. The glowing particle
                    heads are rendered onto the background's transparent canvas,
                    while the accumulating trails are recorded on a secondary
                    canvas. This creates an illusion of luminous tracers leaving
                    behind a magnetic path, fostering an entrancing visual
                    effect. The user's engagement is further heightened,
                    allowing them to click on the logo to release additional
                    magnetic particles with their own distinct trails, thus
                    enriching the evolving field.
                  </p>
                  <p>
                    This meticulously crafted logo concept for Monet Media
                    encapsulates a symphony of artistic elements and
                    interactivity, combining particle dynamics, cellular
                    automata, and magnetic field representations to craft an
                    immersive visual journey.
                  </p>
                </TextDiv>
                <PhaseImg className="phase-three">
                  <img src={PhaseThree} alt="Particle droplets" />
                </PhaseImg>
              </ColumnTwo>
            </Content>
          </div>
        </Carousel>
        <Content padding="25px 0" />
      </PhaseSection>
      <DescriptionSection>
        <Content padding="60px 0">
          <ColumnTwo align="flex-start">
            <TextDiv width="48%">
              <p className="title-2 white">Code Perspective:</p>
              <p>
                This captivating logo art piece is brought to life as a
                remarkably compact 12KB block of embeddable JavaScript. With an
                impressive level of self-sufficiency, it relies solely on
                internally crafted components and accesses the HTML canvas
                directly. Devised by Charles Machin, this art piece demonstrates
                the power of innovative coding. No external libraries or
                dependencies are required, showcasing a dedication to crafting a
                self-contained masterpiece. The code intricately weaves together
                the phases, orchestrating the choreography of particle
                interactions, automata simulations, and magnetic field
                representations.
              </p>
            </TextDiv>
            <TextDiv width="48%">
              <p className="title-2 white">Sol-Journey 2:</p>
              <p>
                This logo project finds its roots in the Sol-Journey 2
                collection—a generative art exploration centred around the sun,
                marking the second chapter in this ongoing series. The resulting
                art pieces from this study offer a glimpse into the visual and
                mathematical marvels of the sun. Through innovative generative
                art techniques, the complex patterns of the sun's magnetic
                fields come to life in stunning and mesmerising ways. This
                endeavour exemplifies the intersection of art and science,
                celebrating the intricate beauty hidden within the natural
                world.
              </p>
            </TextDiv>
          </ColumnTwo>
        </Content>
      </DescriptionSection>
      <CTASection image={CTABackground}>
        <Content padding="20px 0">
          <TextDiv>
            <p className="title-2 white">
              Are you <b>a Creator?</b>
            </p>
            <p>Submit your digital artwork to get featured</p>
            <CTAButton width="360px" height="70px" onClick={onButtonClick}>
              Express Your Interest
            </CTAButton>
          </TextDiv>
        </Content>
      </CTASection>
      <FooterSection>
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
      </FooterSection>
    </PageContainer>
  );
};
