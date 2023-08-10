import { styled } from "styled-components";

import { MenuPopup } from "../../components/home/menu-popup/menu-popup.component";
import { HomeContainer } from "../../components/home/home-container/home-container.component";

export const HomePage = styled(HomeContainer).attrs((props) => ({
  className: props.className,
}))`
  @keyframes slideaway {
    from {
      display: block;
    }
    to {
      opacity: 0.8;
    }
  }

  &.hide {
    animation: slideaway 1s;
    display: none;
  }
`;

export const MenuOverlay = styled(MenuPopup).attrs((props) => ({
  className: props.className,
}))`
  @keyframes effect {
    0% {
      transform: translate(0px, 100vh);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  animation: effect 1s;

  &.hide {
    display: none;
  }
`;
