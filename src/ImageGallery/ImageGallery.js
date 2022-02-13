import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";

const ImageGallery = ({ images, loadMore }) => (
  <>
    <ul className="gallery">
      {images.map((image) => {
        const { id, webformatURL, tags } = image;
        return <ImageGalleryItem key={id} options={{ webformatURL, tags }} />;
      })}
    </ul>
    <Button
      options={{
        type: "button",
        label: "Load more",
        onClick: loadMore,
      }}
    />
  </>
);

export default ImageGallery;
