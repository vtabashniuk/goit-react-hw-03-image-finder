import React from "react";

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
export default ImageGalleryItem;
