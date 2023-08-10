import { useState, useEffect } from "react";

import { MenuOverlay, HomePage, ContactOverlay } from "./home.styles";

export const Home = () => {
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
      <HomePage
        // className={isMenuOpen || isContactOpen ? "hide" : "show"}
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
