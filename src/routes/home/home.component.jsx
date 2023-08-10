import { useState, useEffect } from "react";

import { MenuPopup } from "../../components/home/menu-popup/menu-popup.component";
import { HomeContainer } from "../../components/home/home-container/home-container.component";

import { MenuOverlay, HomePage } from "./home.styles";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {}, [isMenuOpen]);

  const onMenuClickFunction = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div>
      <HomePage
        className={isMenuOpen ? "hide" : "show"}
        onMenuClick={onMenuClickFunction}
      />
      <MenuOverlay
        className={isMenuOpen ? "show" : "hide"}
        onMenuClick={onMenuClickFunction}
      />
    </div>
  );
};
