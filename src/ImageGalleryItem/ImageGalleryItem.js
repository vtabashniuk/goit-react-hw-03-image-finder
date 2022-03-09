import React from "react";

const ImageGalleryItem = ({ options }) => {
  const { id, webformatURL, tags, onImageClickHandler } = options;

  // console.log(typeof onImageClickHandler);

  // const onClickHandler = (event) => {
  //   console.log("click", id);
  //   onImageClickHandler(id);
  // };

  return (
    <>
      <li className="gallery-item" onClick={() => onImageClickHandler(id)}>
        <img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};
export default ImageGalleryItem;
