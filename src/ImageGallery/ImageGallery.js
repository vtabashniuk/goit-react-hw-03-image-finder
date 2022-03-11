import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";

const ImageGallery = ({ images, loadMore, onImageClickHandler }) => (
  <>
    <ul className="gallery">
      {images.map((image) => {
        const { id, webformatURL, tags } = image;
        return (
          <ImageGalleryItem
            key={id}
            options={{ id, webformatURL, tags, onImageClickHandler }}
          />
        );
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
