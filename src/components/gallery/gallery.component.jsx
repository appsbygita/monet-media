import Mock1 from "../../assets/gallery_mock/gallery-1.webp";
import Mock2 from "../../assets/gallery_mock/gallery-2.webp";
import Mock3 from "../../assets/gallery_mock/gallery-3.webp";
import Mock4 from "../../assets/gallery_mock/gallery-4.webp";
import Mock5 from "../../assets/gallery_mock/gallery-5.webp";
import Mock6 from "../../assets/gallery_mock/gallery-6.webp";
import { GalleryImage } from "../gallery-image/gallery-image.component";
import { GalleryColumnContainer, GalleryContainer } from "./gallery.styles";

export const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryColumnContainer top="50vh">
        <GalleryImage image={Mock1} name="The Sun" artist="by Picassio" />
        <GalleryImage image={Mock4} name="" artist="" />
      </GalleryColumnContainer>
      <GalleryColumnContainer top="30vh">
        <GalleryImage image={Mock2} />
        <GalleryImage image={Mock5} />
      </GalleryColumnContainer>
      <GalleryColumnContainer top="10vh">
        <GalleryImage image={Mock3} />
        <GalleryImage image={Mock6} />
      </GalleryColumnContainer>
    </GalleryContainer>
  );
};
