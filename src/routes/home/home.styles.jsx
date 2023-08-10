import { styled } from "styled-components";

import { MenuPopup } from "../../components/home/menu-popup/menu-popup.component";
import { HomeContainer } from "../../components/home/home-container/home-container.component";
import { ContactFormPopout } from "../../components/home/contact-form-popout/contact-form-popout.component";

export const HomePage = styled(HomeContainer).attrs((props) => ({
  className: props.className,
}))`
  @keyframes slideaway {
    from {
      display: block;
    }
    to {
      opacity: 1;
    }
  }

  &.hide {
    animation: slideaway 0.8s;
    display: none;
  }
`;

export const MenuOverlay = styled(MenuPopup).attrs((props) => ({
  className: props.className,
}))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  @keyframes menuIn {
    0% {
      transform: translate(0px, 100vh);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @keyframes menuOut {
    from {
      display: block;
    }
    to {
      transform: translate(0px, 100vh);
    }
  }

  animation: menuIn 1s;

  &.hide {
    animation: menuOut 1s;
    display: none;
  }
`;

export const ContactOverlay = styled(ContactFormPopout).attrs((props) => ({
  className: props.className,
}))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @keyframes contactIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes contactOut {
    from {
      display: block;
    }
    to {
      opacity: 0;
    }
  }

  animation: contactIn 1s;

  &.hide {
    animation: contactOut 1s;
    display: none;
  }
`;
