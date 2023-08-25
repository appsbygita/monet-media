import { SocialLinksContainer } from "./social-links.styles";

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <linksTitle>Connect With Us</linksTitle>
      <links>
        <a
          className="a2"
          href="https://www.linkedin.com/company/monetmedia-ai/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="a2"
          href="https://www.instagram.com/monetmedia.ai/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          className="a2"
          href="mailto:info@monetmedia.ai"
          target="_blank"
          rel="noreferrer"
        >
          info@MonetMedia.ai
        </a>
      </links>
    </SocialLinksContainer>
  );
};
