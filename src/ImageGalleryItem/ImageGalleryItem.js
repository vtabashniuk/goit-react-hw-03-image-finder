import React from "react";

const ImageGalleryItem = ({ options }) => {
  const { id, webformatURL, tags, onImageClickHandler } = options;

  return (
    <>
      <li className="gallery-item" onClick={() => onImageClickHandler(id)}>
        <img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};
export default ImageGalleryItem;
