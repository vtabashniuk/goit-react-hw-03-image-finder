import React from "react";

const ImageGalleryItem = ({ options }) => {
  const {webformatURL, tags } = options;
  return (
      <li className="gallery-item">
        <img src={webformatURL} alt={tags} />
      </li>
  );
};
export default ImageGalleryItem;
