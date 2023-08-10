import { styled } from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Unbounded", cursive;

  & linksTitle {
    color: #d2f950;
    font-weight: 800;
    padding-bottom: 6px;
  }

  & links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & a {
      color: #aaa;
      font-weight: 300;
      text-decoration: none;
      padding: 6px 0;

      &:hover {
        border-left: 3px solid #d2f950;
        padding-left: 10px;
      }
    }
  }
`;
