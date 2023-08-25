import { styled } from "styled-components";

export const CheckboxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  input[type="checkbox"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 1.6em;
    height: 1.6em;
    border-radius: 0.15em;
    margin: 0;
    margin-right: 12px;
    border: 0.15em solid #747474;
    outline: none;
    cursor: pointer;
  }

  div {
    width: 93%;
    font-size: 1.8vh;
  }

  .checked {
    background-color: #747474;
    position: relative;
  }

  .checked::before {
    content: "✔";
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  }
`;
