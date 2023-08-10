import { styled } from "styled-components";

import ArrowIcon from "../../../assets/icon-arrow.svg";

export const ButtonIcon = styled.img`
  display: none;
  padding-left: 10px;
`;

ButtonIcon.defaultProps = {
  src: ArrowIcon,
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d2f950;
  background-color: transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.2rem;
  color: #888;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;

  @keyframes slide {
    from {
      transform: translate(15px, 0px);
    }

    to {
      transform: translate(0px, 0px);
    }
  }

  &:hover {
    background-color: #d2f950;
    color: #000;
    cursor: pointer;

    & ${ButtonIcon} {
      display: inline;
    }

    & cta {
      animation: slide 0.8s;
    }
  }
`;
