import styled from "styled-components";

const FeatureContainer = styled.div`
  width: 240px;
  height: 360px;
  border-bottom-right-radius: 30%;
  border-top-left-radius: 30%;
  overflow: clip;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1350px) {
    width: 220px;
    height: 340px;
  }

  @media screen and (max-width: 1200px) {
    width: 160px;
    height: 240px;
  }

  @media screen and (max-width: 900px) {
    width: 145px;
    height: 220px;
  }

  @media screen and (max-width: 560px) {
    width: 70%;
    height: 100vw;
  }
`;

const FillImage = styled.div`
  width: 100%;
  height: 70%;

  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeatureDesc = styled.div`
  display: flex;
  flex: 1;
  padding: 0 40px;
  align-items: center;
  background-color: #333333;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 0 10px;
  }
`;

const FeatureText = styled.p`
  font-weight: 300;
  font-family: "Unbounded", sans-serif;
  font-size: 1.1rem;
  color: #fff;

  & b {
    font-weight: 800;
    color: #d2f950;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;

export const FeatureImage = ({ imgUrl, children }) => {
  return (
    <FeatureContainer>
      <FillImage img={imgUrl}></FillImage>
      <FeatureDesc>
        <FeatureText>{children}</FeatureText>
      </FeatureDesc>
    </FeatureContainer>
  );
};
