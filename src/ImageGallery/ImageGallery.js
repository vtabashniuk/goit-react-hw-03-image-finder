import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";

const ImageGallery = ({
  images,
  loadMore,
  onImageClickHandler,
  showButton,
}) => (
  <>
    <ul className="ImageGallery">
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
    {showButton && (
      <Button
        options={{
          className: "Button",
          type: "button",
          label: "Load more...",
          onClick: loadMore,
        }}
      />
    )}
  </>
);

export default ImageGallery;
