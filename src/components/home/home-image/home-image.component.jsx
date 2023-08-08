import {
  HomeImageContainer,
  FillImage,
  Rectangle,
  ClipContainer,
  RectangleContainer,
} from "./home-image.styles";

export const HomeImage = ({ img }) => {
  return (
    <HomeImageContainer>
      <ClipContainer>
        <FillImage img={img}></FillImage>
      </ClipContainer>
      <RectangleContainer>
        <Rectangle x="0%" y="20%" />
        <Rectangle x="80%" y="70%" />
      </RectangleContainer>
    </HomeImageContainer>
  );
};
