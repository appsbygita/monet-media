import { useState, useEffect } from "react";

import {
  MenuOverlay,
  ContactOverlay,
  PrivacyOverlay,
  TermsOverlay,
} from "./our-logo.styles";
import { LogoPage } from "../../components/our-logo/logo-page/logo-page.component";

export const OurLogo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (isMenuOpen || isContactOpen || isPrivacyOpen || isTermsOpen) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
      }
    }
  }, [isMenuOpen, isContactOpen, isPrivacyOpen, isTermsOpen]);

  const onMenuClickFunction = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onButtonClickFunction = () => {
    setIsContactOpen(!isContactOpen);
  };

  const onPrivacyClickFunction = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  const onTermsClickFunction = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  return (
    <div>
      <LogoPage
        onMenuClick={onMenuClickFunction}
        onButtonClick={onButtonClickFunction}
        onPrivacyClick={onPrivacyClickFunction}
        onTermsClick={onTermsClickFunction}
      />
      <MenuOverlay
        className={isMenuOpen ? "show" : "hide"}
        onMenuClick={onMenuClickFunction}
      />
      <ContactOverlay
        className={isContactOpen ? "show" : "hide"}
        onButtonClick={onButtonClickFunction}
      />
      <PrivacyOverlay
        className={isPrivacyOpen ? "show" : "hide"}
        onPrivacyClick={onPrivacyClickFunction}
      />
      <TermsOverlay
        className={isTermsOpen ? "show" : "hide"}
        onTermsClick={onTermsClickFunction}
      />
    </div>
  );
};
