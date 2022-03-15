import React from "react";
import PropTypes from "prop-types";
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  loadMore: PropTypes.func,
  onImageClickHandler: PropTypes.func,
  showButton: PropTypes.bool,
};
export default ImageGallery;
