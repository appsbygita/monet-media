import {
  HomeImageContainer,
  FillImage,
  Rectangle,
  ClipContainer,
  RectangleContainer,
} from "./home-image.styles";

export const HomeImage = ({ img, isVideo, src }) => {
  const hoverPlay = () => {
    // document.getElementById("vid").width = "130%";
    document.getElementById("vid").play();
  };
  const hoverPause = () => {
    document.getElementById("vid").pause();
  };
  return (
    <HomeImageContainer
      onMouseOver={() => hoverPlay()}
      onMouseOut={() => hoverPause()}
    >
      {isVideo ? (
        <>
          <ClipContainer>
            <video
              id="vid"
              width="100%"
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
              src={src}
            />
          </ClipContainer>
          <RectangleContainer>
            <Rectangle x="0%" y="20%" />
            <Rectangle x="80%" y="70%" />
          </RectangleContainer>
        </>
      ) : (
        <>
          <ClipContainer>
            <FillImage img={img}></FillImage>
          </ClipContainer>
          <RectangleContainer>
            <Rectangle x="0%" y="20%" />
            <Rectangle x="80%" y="70%" />
          </RectangleContainer>
        </>
      )}
    </HomeImageContainer>
  );
};
