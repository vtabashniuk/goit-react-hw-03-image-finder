import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ options }) => {
  const { id, webformatURL, tags, onImageClickHandler } = options;

  return (
    <>
      <li className="ImageGalleryItem" onClick={() => onImageClickHandler(id)}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.any,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    onImageClickHandler: PropTypes.func,
  }),
};
export default ImageGalleryItem;
