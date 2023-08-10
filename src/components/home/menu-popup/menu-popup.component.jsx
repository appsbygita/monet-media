import {
  DisplayContainer,
  LeftCol,
  MenuContent,
  MenuFooter,
  RightCol,
} from "./menu-popup.styles";
import { Header, MenuButton } from "../home-container/home-container.styles";
import { SocialLinks } from "../social-links/social-links.component";

export const MenuPopup = ({ onMenuClick, className }) => {
  return (
    <DisplayContainer className={className}>
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
            <a href="#">Our Approach</a>
          </menuLink>
          <menuLink>
            <a href="#">Our Ecosystem</a>
          </menuLink>
        </RightCol>
      </MenuContent>
      <MenuFooter>© 2023 Mindshare Media Ltd</MenuFooter>
    </DisplayContainer>
  );
};
