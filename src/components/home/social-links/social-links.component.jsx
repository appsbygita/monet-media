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
          href="mailto:hello@monet.media"
          target="_blank"
          rel="noreferrer"
        >
          hello@monet.media
        </a>
      </links>
    </SocialLinksContainer>
  );
};
