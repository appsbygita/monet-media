import { useState, useEffect } from "react";
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
  ArtistImg,
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
import Charles from "../../../assets/image/charles.webp";
import Chaos1 from "../../../assets/image/chaos-1.webp";
import Chaos2 from "../../../assets/image/chaos-2.webp";
import Chaos3 from "../../../assets/image/chaos-3.webp";

export const LogoPage = ({
  onMenuClick,
  onButtonClick,
  onPrivacyClick,
  onTermsClick,
}) => {
  const [dpr, setDpr] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // const [scriptUrl, setScriptUrl] = useState("");
  // const ref = useRef(null);

  // useEffect(() => {
  //   setWidth(ref.current.clientWidth * 0.1);
  // }, [ref]);
  useEffect(() => {
    setDpr(window.devicePixelRatio);
    if (window.screen.width < 770) {
      setIsMobile(true);
    }
  }, []);

  const getLogoWidth = () => {
    if (isMobile) {
      if (dpr > 1.5) {
        return "180px";
      } else if (dpr < 1.5) {
        return "360px";
      } else {
        return "240px";
      }
    } else {
      if (dpr > 1.5) {
        return "300px";
      } else if (dpr < 1.5) {
        return "600px";
      } else {
        return "450px";
      }
    }
  };

  return (
    <PageContainer>
      <Navbar>
        <FooterLogo>
          <Link to="/" reloadDocument>
            <Logo isStatic={true} />
          </Link>
        </FooterLogo>
        <img onClick={onMenuClick} src={Hamburger} alt="Menu button" />
      </Navbar>
      <Header>
        <Link to="/" reloadDocument>
          <MenuButton>Home</MenuButton>
        </Link>
      </Header>
      <LogoContainer>
        <LogoCanvas width={getLogoWidth()} />
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
      <Content className="nomobile">
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
        <Content className="nomobile">
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
            <Content padding="0 100px" className="nomobile" />
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
            <Content padding="0 100px" className="nomobile" />
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
      <DescriptionSection background="#151515">
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
      <DescriptionSection>
        <Content padding="60px 0">
          <ColumnTwo align="flex-start">
            <TextDiv width="48%">
              <p className="pretitle">The Artist</p>
              <p className="title-2">
                Charles <b>Machin</b>
              </p>
              <p>
                Charles Machin is a visionary artist with a profound fascination
                for the mysteries of reality and the intricate interplay of
                physical forces that shape our universe. His journey through the
                realms of art and technology has led him to create generative
                art pieces that transcend boundaries and ignite the imagination.
              </p>
            </TextDiv>
            <ArtistImg src={Charles} alt="Charles Machin" />
          </ColumnTwo>
        </Content>
      </DescriptionSection>
      <div style={{ padding: "38.27% 0 0 0", position: "relative" }}>
        <iframe
          src="//player.vimeo.com/video/667769233?h=f178108bfd&autoplay=0&title=0&portrait=0&byline=0&badge=0"
          title="Charles Machin Highlight Reel"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <DescriptionSection>
        <Content padding="60px 0">
          <ColumnTwo align="flex-start">
            <TextDiv width="48%">
              <p className="title-2 white">Artistic History</p>
              <p>
                One pivotal moment in his artistic journey occurred deep within
                the tropical Peruvian rainforest. There, he experienced the
                profound effects of plant medicine, reigniting his inner light
                and inspiring him to create what he truly loves. That eureka
                moment was a transformative experience that set the stage for
                his unique artistic style. These days, he focuses his artistic
                endeavors on code-based and on-chain digital art on the Cardano
                blockchain. His creations are designed to function independently
                without external dependencies, presenting an enjoyable yet
                challenging task of crafting self-contained units for each
                piece.
              </p>
              <p>
                Within 22 years dedicated to the visual effects and gaming
                industry, Charles has worn many hats from visual effects artist
                to technical artist and lead coder for various games. His work
                spans VR medical training simulations for healthcare
                professionals, showcasing his proficiency in programming
                languages such as C#, JavaScript, Python, and LUA. Although he
                has worked with tools like Maya, 3DS Max, Light Wave, and
                Houdini for 3D art in the past, his focus has now shifted to the
                world of generative art.
              </p>
            </TextDiv>
            <TextDiv width="48%">
              <p className="title-2 white">Artistic Style</p>
              <p>
                Charles has been actively creating art in the Web3 space for the
                past three years, primarily focusing on generative art with an
                abstract style. His works draws inspiration from nature,
                personal experiences, and emotions.
              </p>
              <p>
                Through his art, he explores concepts related to nature,
                ecology, physics and general sciences, and spirituality. His art
                style continues to evolve as he embarks on personal explorations
                and research. Through his art, Charles aims to convey feelings
                of hope and optimism, reflection and contemplation. He invites
                his audience to actively participate, engage in deep
                introspection, forge emotional connections, and indulge in
                intellectual reflection and questioning. He creates his art
                primarily for art collectors and enthusiasts, tech geeks and
                first-adopters, and nature lovers too. He actively engages with
                the Web3 community on social media thereby fostering new
                connections and collaborations.
              </p>
              <p>
                Currently, he is looking to develop his artistic style and
                methods within the constraints of on-chain art and building an
                audience interested in his work on the short term. Looking ahead
                into the future, he envisions creating tailored sensory gallery
                experiences by combining audio, visual, and reactivity
                seamlessly.
              </p>
            </TextDiv>
          </ColumnTwo>
        </Content>
        <TextDiv fontSize="20px" padding="0 0 30px 0">
          <p className="title-2 white" align="center">
            Some of Charles'{" "}
            <span id="mobileLine">
              <b>ETERNAL CHAOS Collections</b>
            </span>
          </p>
        </TextDiv>
        <ColumnTwo>
          <img
            src={Chaos1}
            alt="An example of Charles' previous work"
            width={isMobile ? "70%" : "32%"}
          />
          <div class="imgSpace" />
          <img
            src={Chaos2}
            alt="An example of Charles' previous work"
            width={isMobile ? "70%" : "32%"}
          />
          <div class="imgSpace" />
          <img
            src={Chaos3}
            alt="An example of Charles' previous work"
            width={isMobile ? "70%" : "32%"}
          />
        </ColumnTwo>
        <Content padding="40px 0 60px 0">
          <TextDiv>
            <p className="title-2" align="center">
              Collaborating with <b>Monet Media</b>
            </p>
            <p>
              Charles' artistic journey aligns seamlessly with Monet Media's
              mission to revolutionize marketing campaigns through AI and human
              creativity. Monet Media leverages blockchain for data security and
              privacy, creating a vibrant creative community where everyone has
              a stake. His contributions to this ecosystem is recognized and
              rewarded, fostering a culture of innovation and inclusivity.
            </p>
            <p>
              Through Monet Media, he will be able to find and reach his
              audience, showcase his work in galleries and installations, and
              explore various campaigns and promotions for his art in the Web3
              space. With that being said, both parties would be able to
              increase sales, engagement, visibility, recognition,
              collaboration, and community building.
            </p>
          </TextDiv>
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
              <Link to="/" reloadDocument>
                <Logo isStatic={true} />
              </Link>
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
