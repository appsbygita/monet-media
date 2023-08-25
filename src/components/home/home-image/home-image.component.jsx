import { useEffect } from "react";
import {
  HomeImageContainer,
  FillImage,
  Rectangle,
  ClipContainer,
  RectangleContainer,
} from "./home-image.styles";

export const HomeImage = ({ img, isVideo, src }) => {
  // const hoverPlay = () => {
  //   // document.getElementById("vid").width = "130%";
  //   document.getElementById("vid").play();
  // };
  // const hoverPause = () => {
  //   document.getElementById("vid").pause();
  // };
  useEffect(() => {
    const vid = document.getElementById("vid");
    if (vid) {
      vid.play();
    }
  }, []);
  return (
    <HomeImageContainer
    // onMouseOver={() => hoverPlay()}
    // onMouseOut={() => hoverPause()}
    >
      {isVideo ? (
        <>
          <ClipContainer>
            <video
              muted
              autoplay
              loop
              id="vid"
              width="100%"
              // onMouseOver={(e) => e.target.play()}
              // onMouseOut={(e) => e.target.pause()}
              // src={src}
            >
              <source src={src} type="video/mp4" />
            </video>
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
