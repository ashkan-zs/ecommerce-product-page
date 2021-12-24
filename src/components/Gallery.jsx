import React, { useState } from "react";

const Gallery = (props) => {
  const imgPath = process.env.PUBLIC_URL + "/assets/images/";
  const images = [
    "image-product-1",
    "image-product-2",
    "image-product-3",
    "image-product-4",
  ];

  const [currentImg, setCurrentImg] = useState("image-product-1");

  return (
    <div className="gallery">
      <div className="gallery__img">
        <img src={`${imgPath}${currentImg}.jpg`} alt="a pair of shoes"></img>
      </div>
      <div className="gallery__thumbs">
        {images.map((img) => {
          return (
            <div
              className={`gallery__thumb ${currentImg === img ? "active" : ""}`}
              onClick={() => setCurrentImg(img)}
            >
              <div className="gallery__thumb-overlay"></div>
              <img
                src={`${imgPath}${img}-thumbnail.jpg`}
                alt="product thumbnail"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
