import { styled } from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #202020;
`;

export const TopRow = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  justify-content: flex-end;
`;

export const PopupContent = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const CloseButton = styled.img`
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftCol = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 40px;

  & p {
    margin-top: 0;
    font-family: "Unbounded", sans-serif;
    font-weight: 300;
    font-size: 3rem;
    color: #fff;

    & b {
      color: #d2f950;
      font-weight: 800;
    }
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  color: #b0b0b0;

  & titleText {
    font-family: "Unbounded", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 20px 0;
    color: #d2f950;
  }

  & regularText {
    font-weight: 300;
    font-size: 1.1rem;
    padding-bottom: 8px;
  }
`;

export const InputText = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  height: 2.3rem;
  border: 1px solid #747474;
  background-color: #202020;
  color: #b0b0b0;
  font-size: 1.1rem;

  &:focus {
    background-color: #fff;
    color: #000;
  }
`;

export const InputLabel = styled.p`
  padding: 0 0 18px 0;
  margin: 0;
  color: #b0b0b0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "16px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "16px"};
`;
