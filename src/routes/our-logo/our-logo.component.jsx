import { useState, useEffect } from "react";

import { MenuOverlay, ContactOverlay } from "./our-logo.styles";
import { LogoPage } from "../../components/our-logo/logo-page/logo-page.component";

export const OurLogo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (isMenuOpen || isContactOpen) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
      }
    }
  }, [isMenuOpen, isContactOpen]);

  const onMenuClickFunction = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onButtonClickFunction = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div>
      <LogoPage
        onMenuClick={onMenuClickFunction}
        onButtonClick={onButtonClickFunction}
      />
      <MenuOverlay
        className={isMenuOpen ? "show" : "hide"}
        onMenuClick={onMenuClickFunction}
      />
      <ContactOverlay
        className={isContactOpen ? "show" : "hide"}
        onButtonClick={onButtonClickFunction}
      />
    </div>
  );
};
