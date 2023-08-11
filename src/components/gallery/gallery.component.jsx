import Mock1 from "../../assets/gallery_mock/gallery-1.jpeg";
import Mock2 from "../../assets/gallery_mock/gallery-2.jpeg";
import Mock3 from "../../assets/gallery_mock/gallery-3.jpeg";
import Mock4 from "../../assets/gallery_mock/gallery-4.jpeg";
import Mock5 from "../../assets/gallery_mock/gallery-5.jpeg";
import Mock6 from "../../assets/gallery_mock/gallery-6.jpeg";
import { GalleryImage } from "../gallery-image/gallery-image.component";
import { GalleryColumnContainer, GalleryContainer } from "./gallery.styles";

export const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryColumnContainer top="50vh">
        <GalleryImage image={Mock1} name="The Sun" artist="Picassio" />
        <GalleryImage image={Mock4} name="[Title]" artist="[Artist]" />
      </GalleryColumnContainer>
      <GalleryColumnContainer top="30vh">
        <GalleryImage image={Mock2} name="[Title]" artist="[Artist]" />
        <GalleryImage image={Mock5} name="[Title]" artist="[Artist]" />
      </GalleryColumnContainer>
      <GalleryColumnContainer top="10vh">
        <GalleryImage image={Mock3} name="[Title]" artist="[Artist]" />
        <GalleryImage image={Mock6} name="[Title]" artist="[Artist]" />
      </GalleryColumnContainer>
    </GalleryContainer>
  );
};
