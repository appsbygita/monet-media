import {
  ImageContainer,
  ImageContainerWrapper,
  ImageDescriptionContainer,
} from "./gallery-image.styles";

export const GalleryImage = ({ image, name, artist }) => {
  return (
    <ImageContainerWrapper>
      <ImageContainer image={image}></ImageContainer>
      <ImageDescriptionContainer>
        <name>{name}</name>
        <artist>{artist}</artist>
      </ImageDescriptionContainer>
    </ImageContainerWrapper>
  );
};
