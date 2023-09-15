import { Link } from "react-router-dom";

import {
  DisplayContainer,
  LeftCol,
  MenuContent,
  MenuFooter,
  RightCol,
} from "./menu-popup.styles";
import {
  Header,
  MenuButton,
  Navbar,
  FooterLogo,
} from "../home-container/home-container.styles";
import { SocialLinks } from "../social-links/social-links.component";
import { Logo } from "../logo/logo.component";

import CloseIcon from "../../../assets/icons/close-mobile.svg";

export const MenuPopup = ({ onMenuClick, className }) => {
  return (
    <DisplayContainer className={className}>
      <Navbar>
        <FooterLogo>
          <Logo isStatic={true} />
        </FooterLogo>
        <img onClick={onMenuClick} src={CloseIcon} alt="Close button" />
      </Navbar>
      <Header>
        <MenuButton onClick={onMenuClick}>Menu</MenuButton>
      </Header>
      <MenuContent>
        <LeftCol>
          <SocialLinks />
        </LeftCol>
        <RightCol>
          <menuTitle>About</menuTitle>
          <menuLink>
            <a href="#our-approach" onClick={onMenuClick}>
              Our Approach
            </a>
          </menuLink>
          <menuLink>
            <a href="#our-ecosystem" onClick={onMenuClick}>
              Our Ecosystem
            </a>
          </menuLink>
          <menuLink>
            <Link to="/our-logo" reloadDocument>
              About Artwork
            </Link>
          </menuLink>
        </RightCol>
      </MenuContent>
      <MenuFooter>© 2023 Monet Media</MenuFooter>
    </DisplayContainer>
  );
};
