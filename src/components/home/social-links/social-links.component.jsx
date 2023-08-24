import { SocialLinksContainer } from "./social-links.styles";

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <linksTitle>Connect With Us</linksTitle>
      <links>
        <a className="a2" href="#">
          LinkedIn
        </a>
        <a className="a2" href="#">
          Instagram
        </a>
        <a className="a2" href="#">
          info@MonetMedia.ai
        </a>
      </links>
    </SocialLinksContainer>
  );
};
